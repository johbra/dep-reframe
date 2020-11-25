(ns dep.views.lehrveranstaltungen
  (:require
   [re-frame.core :as rf]
   [re-com.core :refer [title button]] 
   [dep.views.table :refer [table-ui td-render-fn]]
   [dep.model.lehrveranstaltung :refer [semesterWochenstunden semester]]
   [dep.helpers.form-helpers :refer [rc-input-box rc-dropdown standard-form]]
   [dep.helpers.data-modifiers :refer [remove-dataset replace-dataset
                                       duplicate-dataset]]))

(defn aender-lv
  "Erzeugt eine neue Lehrveranstaltung aus den in aenderungen gegebenen Daten."
  [form-state] 
  (let [form @form-state
        alte-lv (:Lv form)
        neue-lv (assoc
                 alte-lv
                 :dozent (:Dozent form)
                 :wiederholungsFaktor (:WdhFkt form)
                 :anzahlGruppen (:Grpn form))]
    (replace-dataset :lven :id neue-lv)))

(defn dupliziere-lv
  [form-state]
  (let [neue-lv (assoc (:Lv @form-state) :id (gensym))]
    (duplicate-dataset :lven :id neue-lv)))

(defn lvn->table
  "Wandelt die Lehrveranstaltungen (lvn) für die Darstellung als Tabelle um. "
  [lvn] 
  (mapv #(hash-map :Modul (:name (:modul %))
                   :Mnpl (:name (:manipel %))
                   :Smstr (semester  %)
                   :SWS (semesterWochenstunden %)
                   :WdhFkt (:wiederholungsFaktor %)
                   :Grpn (:anzahlGruppen  %)
                   :Dozent (:dozent %)
                   :Id (:id %)
                   :Lv  %)
        lvn))

(defn lv-form-felder
  [form-state]
  (let [dozenten (mapv #(hash-map :id (:name %) :label (:name %))
                       @(rf/subscribe [:dozenten]))]
    [[title :label "Lehrveranstaltung" :level :level2]
     (rc-input-box "Modul" (:Modul @form-state) :Modul nil identity true form-state)
     (rc-input-box "Manipel" (str (:Mnpl @form-state)) :Mnpl nil symbol true
                   form-state)
     (rc-input-box "Semester" (str (:Smstr @form-state)) :Smstr nil identity true
                   form-state)
     (rc-input-box "SWS" (str (:SWS @form-state)) :SWS nil identity true form-state)
     (rc-input-box "Wiedrhlngsfktr" (str (:WdhFkt @form-state)) :WdhFkt
                   #"^(\d+)$" js/parseInt false form-state)
     (rc-input-box "Gruppen" (str (:Grpn @form-state)) :Grpn
                   #"^(\d+)$" js/parseInt false form-state)
     (rc-dropdown "Dozent" 
                  :Dozent dozenten false form-state)]))

(defn buttons
  [form-state]
  [[button
    :label    "duplizieren"
    :class    "btn-primary"
    :on-click #(dupliziere-lv form-state)]
   [button
    :label    "speichern"
    :class    "btn-primary"
    :on-click #(aender-lv form-state)] 
   [button
    :label    "entfernen"
    :on-click #(remove-dataset form-state :lven :id :Id)]])

(defn lehrveranstaltungen
  "Komponente für die Anzeige und Bearbeitung der Lehrveranstaltungen eines
  Quartals." 
  []
  (let [lven (filter #(= (:quartal %) @(rf/subscribe [:quartal]))
                     @(rf/subscribe [:lven]))] 
    [table-ui 
     (lvn->table lven)
     "Lehrveranstaltungen"
     [:Modul  :Mnpl :Smstr :SWS :WdhFkt :Grpn :Dozent]
     [:Modul :Mnpl :Smstr :SWS :Dozent]
     [[:Mnpl false]]
     (partial td-render-fn :Dozent lv-form-felder buttons)
     ]))
