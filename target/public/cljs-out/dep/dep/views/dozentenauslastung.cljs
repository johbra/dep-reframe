(ns dep.views.dozentenauslastung
  (:require  [re-frame.core :as rf] 
             [dep.views.table :refer [table-ui]]
             [dep.model.dozent
              :refer [stundenInQ4 stundenInQ1 stundenInQ2 stundenInQ3
                      stunden-in-geschaeftsjahr schreiben-stunden-auf-quartal]]
             [dep.model.lehrveranstaltung :refer [semesterWochenstunden]]
             [dep.model.quartal :refer [quartale-fuer-jahr]]))

(defn lvStunden
  "Berechnet die Anzahl der Unterrichtstunden einer Lehrveranstaltung."
  [lv] 
  (* (semesterWochenstunden lv) 10 (:wiederholungsFaktor lv) (:anzahlGruppen lv)))

(defn lvstunden-dozent
  "Berechnet die Unterrichtstunden für einen Dozenten namens doz-nam für eine
  Liste von Lehrveranstaltungen lven."
  [lven doz-nam] 
  (reduce
   + 0
   (map (fn [lv] (lvStunden lv))
        (filter #(= (:dozent %) doz-nam) lven))))

(defn dozentenstunden-quartal
  "Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
  Lehrveranstaltungen in lvn für das quartal"
  [lvn dozenten quartal] 
  (mapv #(schreiben-stunden-auf-quartal
          %
          (lvstunden-dozent (filter (fn [lv] (= (:quartal lv) quartal)) lvn)
                            (:name %))
          quartal)
        dozenten))

(defn dozentenstunden-jahr
  "Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
  Lehrveranstaltungen in lvn für ein Geschäftsjahr"
  [lvn dozenten jahr]   
  (into [] (for [d dozenten]
             (assoc-in d [:auslastungen jahr]
                       (mapv 
                        #(lvstunden-dozent (filter (fn [lv] (= (:quartal lv) %)) lvn)
                                           (:name d)) 
                        (quartale-fuer-jahr jahr))))))

(defn lven-fuer-aktuelles-geschaeftsjahr
  "Ermittelt alle Lehrveranstaltungen des aktuellen Geschäftsjahrs"
  [lvn jahr]
  (let [quartale (quartale-fuer-jahr jahr)]
    (into
     []
     (mapcat (fn [q] (filter #(= (:quartal %) q) lvn)) quartale))))

(defn aktualisiere-dozentenauslastung 
  "Nach Änderungen an der Lv-Planung wird die Dozentenauslastung neu berechnet."
  [lven dozenten geschaeftsjahr] 
  (let [dzntn (dozentenstunden-jahr lven dozenten geschaeftsjahr)] 
    (rf/dispatch [:dozenten dzntn])))

(defn doz-auslstngn->table
  "Wandelt die dozenten für die Darstellung ihrer Auslastung als Tabelle um."
  [dozenten]
  (let [geschaeftsjahr @(rf/subscribe [:geschaeftsjahr])]
    (mapv #(hash-map :Dozent (:name %)
                     :Q4 (stundenInQ4 % geschaeftsjahr)
                     :Q1 (stundenInQ1 % geschaeftsjahr)
                     :Q2 (stundenInQ2 % geschaeftsjahr)
                     :Q3 (stundenInQ3 % geschaeftsjahr)
                     :Summe (stunden-in-geschaeftsjahr % geschaeftsjahr))
          dozenten)))

(defn td-render-fn
  [row col-id] 
  (get row col-id))

(defn dozentenauslastung
  "Komponente für die Anzeige der Dozentenauslastung."
  [] 
  (let [dozenten       @(rf/subscribe [:dozenten])
        geschaeftsjahr @(rf/subscribe [:geschaeftsjahr])
        lven           @(rf/subscribe [:lven])
        _              (aktualisiere-dozentenauslastung lven dozenten geschaeftsjahr)] 
    [table-ui
     (doz-auslstngn->table dozenten)
     "Dozentenauslastung"
     [:Dozent :Q4 :Q1 :Q2 :Q3 :Summe]
     [:Dozent :Q4 :Q1 :Q2 :Q3 :Summe]
     [[:Dozent false]]
     td-render-fn
     ]))
