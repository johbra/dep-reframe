(ns dep.views.studienrichtungen
  (:require 
   [re-frame.core :as rf]
   [re-com.core :refer [title button]]
   [dep.model.studienrichtung :refer [->Studienrichtung]]
   [dep.views.table :refer [table-ui td-render-fn]]
   [dep.helpers.form-helpers :refer [rc-input-box]]
   [dep.helpers.data-modifiers :refer [remove-dataset replace-dataset]]))

(defn aender-studienrichtung 
  "Erzeugt eine neue Studienrichtung aus den im Formular gegebenen Daten."
  [form-state] 
  (let [neu (->Studienrichtung (:Bezeichnung @form-state))]
    (replace-dataset :studienrichtungen :name neu)))

(defn studienrichtungen->table
  "Wandelt die studienrichtungen für die Darstellung als Tabelle um. "
  [studienrichtungen]
  (mapv #(hash-map :Bezeichnung (:name %)) studienrichtungen))

(defn studienrichtung-form-felder
  [form-state] 
  [[title :label "Studienrichtung" :level :level2]
   (rc-input-box "Bezeichnung" (:Bezeichnung @form-state) :Bezeichnung nil
                 identity false form-state)])

(defn buttons
  [form-state]
  [[button
    :label    "speichern"
    :class    "btn-primary"
    :on-click #(aender-studienrichtung form-state)] 
   [button
    :label    "entfernen"
    :on-click #(remove-dataset form-state :studienrichtungen :name :Bezeichnung)]])

(defn studienrichtungen
  "Komponente für die Anzeige und Bearbeitung der Studienrichtungen."
  []
  (let [studienrichtungen @(rf/subscribe [:studienrichtungen])] 
    [table-ui
     (studienrichtungen->table studienrichtungen)
     "Studienrichtungen"
     [:Bezeichnung]
     [:name]
     [[:name false]]
     (partial td-render-fn :Bezeichnung studienrichtung-form-felder buttons)
     ]))


