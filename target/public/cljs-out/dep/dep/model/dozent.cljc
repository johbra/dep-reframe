(ns dep.model.dozent 
  (:require [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [dep.model.quartal :refer [geschaeftsjahreszahl]]
            [dep.helpers.helpers :refer [round1]]
            [com.rpl.specter :as sp]))

;; Konstruktor
(defn ->Dozent
  "Erzeugt ein Dozent-'Objekt' (hash-map)."
  [name vorname auslastungen insMenue sollStunden]
  {:name name :vorname vorname :auslastungen auslastungen
   :insMenue insMenue :sollStunden sollStunden})

;; Planung

(defn initialisiereAuslastungenIn
  "Initialisiert die Auslastungen für dozent in den geschaeftsjahren."
  [dozent geschaeftsjahre]
  (assoc dozent :auslastungen (into {} (map #(hash-map % [0 0 0 0]) geschaeftsjahre))))

(defn stunden-in-quartal
  "Ermittelt die für dozent in geschaeftsjahr und quartal (Nr.) geplanten Stunden."
  [dozent geschaeftsjahr quartal]
  (let [agj ((:auslastungen dozent) geschaeftsjahr)]
    (if agj (agj quartal) 0)))

(defn stundenInQ1
  [dozent geschaeftsjahr]
  (stunden-in-quartal dozent geschaeftsjahr 1))

(defn stundenInQ2
  [dozent geschaeftsjahr]
  (stunden-in-quartal dozent geschaeftsjahr 2))

(defn stundenInQ3
  [dozent geschaeftsjahr]
  (stunden-in-quartal dozent geschaeftsjahr 3))

(defn stundenInQ4
  [dozent geschaeftsjahr] 
  (stunden-in-quartal dozent geschaeftsjahr 0))

(defn stunden-in-geschaeftsjahr
  "Ermittelt geplante Stunden für dozent im geschaeftsjahr."
  [dozent geschaeftsjahr]
  (round1 (reduce + 0 ((:auslastungen dozent) geschaeftsjahr))))

(defn schreiben-stunden-auf-quartal
  "Schreibt die stunden für dozent auf das quartal (Quartal keine Nr) gut."
  [dozent stunden quartal]
  (let [index (if (= (:nr quartal) 4) 0 (:nr quartal))]
    (if (sp/select-any [:auslastungen (geschaeftsjahreszahl quartal)] dozent)
      (sp/setval [:auslastungen (geschaeftsjahreszahl quartal) index]
                 (round1 stunden) dozent) 
      #?(:clj (throw (Exception. (str "Geschäftsjahr existiert nicht: "
                                      (geschaeftsjahreszahl quartal))))
         :cljs (throw (js/Error. (str "Geschäftsjahr existiert nicht: "
                                      (geschaeftsjahreszahl quartal))))))))
#_(defn schreiben-stunden-auf-quartal
    "Schreibt die stunden für dozent auf das quartal (Quartal keine Nr) gut."
    [dozent stunden quartal]
    (let [auslastungen-in-quartal
          ((:auslastungen dozent) (geschaeftsjahreszahl quartal))
          index (if (= (:nr quartal) 4) 0 (:nr quartal))]
      (if auslastungen-in-quartal
        (assoc-in dozent [:auslastungen (geschaeftsjahreszahl quartal)]
                  (assoc auslastungen-in-quartal index (round1 stunden)))
        #?(:clj (throw (Exception. (str "Geschäftsjahr existiert nicht: "
                                        (geschaeftsjahreszahl quartal))))
           :cljs (throw (js/Error. (str "Geschäftsjahr existiert nicht: "
                                        (geschaeftsjahreszahl quartal))))))))

(defn dozent-mit-namen
  "Liefert den Dozenten mit dem Namen string aus der Liste dozenten."
  [dozenten string]
  (first (filter #(= (:name %) string) dozenten)))
