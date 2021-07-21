(ns dep.views.module
  (:require
   [re-frame.core :as rf]
   [re-com.core :refer [title button]]
   [dep.model.modul
    :refer [->Modul sws->alle-semester]] 
   [dep.views.table :refer [table-ui td-render-fn]]
   [dep.model.quartal
    :refer [quartal->string string->quartal]]
   [dep.helpers.form-helpers :refer [rc-input-box rc-dropdown]]
   [dep.helpers.data-modifiers :refer [remove-dataset replace-dataset
                                       duplicate-dataset]]))


(def sem-tabellen-koepfe
  "Die Spaltenüberschriften für die 7 Semester"
  (map #(keyword (str "S" %)) (range 1 8)))

(def semester
  "liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}"
  (zipmap sem-tabellen-koepfe (range 1 8)))

(defn aender-sws
  "Formt aus den aenderungen des Eingabeformulars eine Hash-map mit den
  Semesterwochenstunden."
  [aenderungen]
  (into {} (filter #(not= (val %) 0 )
                   (clojure.set/rename-keys
                    (select-keys aenderungen sem-tabellen-koepfe) semester))))

(defn aender-modul 
  "Erzeugt ein neues Modul aus den in aenderungen gegebenen Daten."
  [form-state]
  (let [form @form-state
        neues-modul (assoc
                     (->Modul (:Nr form)
                              (:Name form)
                              (aender-sws form)
                              (:Studienrichtung form)
                              (string->quartal (:ab-Stbgnn form))
                              (string->quartal (:bis-Stbgnn form))) :id (:Id form))]
    (replace-dataset :module :id neues-modul)))

(defn dupliziere-modul 
  ""
  [form-state]
  (let [form @form-state       
        neues-modul
        (->Modul (:Nr form)
                 (:Name form)
                 (aender-sws form)
                 (:Studienrichtung form)
                 (string->quartal (:ab-Stbgnn form))
                 (string->quartal (:bis-Stbgnn form)))]
    (duplicate-dataset :module neues-modul)))

(defn module->table
  "Wandelt die module für die Darstellung als Tabelle um."
  [module] 
  (mapv #(merge (hash-map :Nr (:nummer %)
                          :Name (:name %)
                          :Studienrichtung (:studienrichtung %))
                (sws->alle-semester (:semesterWochenstunden %))
                (hash-map :ab-Stbgnn (quartal->string (:gueltigAb %))
                          :bis-Stbgnn (quartal->string (:gueltigBis %))
                          :Id (:id %)))
        module))

(defn modul-form-felder
  [form-state]
  (let [studienrichtungen (mapv #(hash-map :id (:name %) :label (:name %))
                                @(rf/subscribe [:studienrichtungen]))]
    [[title :label "Modul" :level :level2]
     (rc-input-box "Nr." (str (:Nr @form-state)) :Nr nil symbol false form-state)
     (rc-input-box "Name" (:Name @form-state) :Name nil identity false form-state)
     (rc-dropdown "Studienrichtung" 
                  :Studienrichtung studienrichtungen false form-state)
     (for [i (range 1 8)] 
       (rc-input-box (str "Semester " i)
                     (str ((keyword (str "S" i)) @form-state))
                     (keyword (str "S" i)) #"^(\d+)$" js/parseInt false form-state))
     (rc-input-box "ab Studienbeginn"
                   (:ab-Stbgnn @form-state) :ab-Stbgnn nil identity false form-state)
     (rc-input-box "bis Studienbeginn"
                   (:bis-Stbgnn @form-state) :bis-Stbgnn nil identity false
                   form-state)]))

(defn buttons
  [form-state]
  [[button
    :label    "duplizieren"
    :class    "btn-primary"
    :on-click #(dupliziere-modul form-state)]
   [button
    :label    "speichern"
    :class    "btn-primary"
    :on-click #(aender-modul form-state)] 
   [button
    :label    "entfernen"
    :on-click #(remove-dataset form-state :module :nummer :Nr)]])

(defn module
  "Komponente für die Anzeige und Bearbeitung der Module."
  []
  (let [module @(rf/subscribe [:module])] 
    [table-ui 
     (module->table module)
     "Module"
     [:Nr :Name :Studienrichtung :S1  :S2  :S3  :S4 :S5  :S6  :S7
      :ab-Stbgnn :bis-Stbgnn]
     [:Nr :Name :Studienrichtung]
     [[:Name false]]
     (partial td-render-fn :Name modul-form-felder buttons)
     ]))


