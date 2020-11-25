(ns dep.views.dozenten
  (:require 
   [re-frame.core :as rf]
   [re-com.core :refer [title button]]
   [dep.model.dozent :refer [->Dozent]]
   [dep.views.table :refer [table-ui td-render-fn]]
   [dep.helpers.form-helpers :refer [rc-input-box rc-check-box]]
   [dep.helpers.data-modifiers :refer [remove-dataset replace-dataset]]))

(defn ersetze-dozent
  [form-state]
  (let [form @form-state 
        neuer-dozent
        (->Dozent (:Name form)
                  (:Vorname form)
                  (:auslastungen (:Dozent form))
                  (:insMenue  form)
                  (:Stundensoll form))]
    (replace-dataset :dozenten :name neuer-dozent)))

(defn dozenten->table
  "Wandelt die dozenten für die Darstellung als Tabelle um."
  [dozenten] 
  (mapv #(hash-map :Name (:name %)
                   :Vorname (:vorname %)
                   :insMenue (:insMenue %)
                   :Stundensoll (:sollStunden %)
                   :Dozent %) 
        dozenten))

(defn dozent-form-felder
  [form-state] 
  [[title :label "Dozent" :level :level2]
   (rc-input-box "Name" (:Name @form-state) :Name nil identity false form-state)
   (rc-input-box "Vorname" (:Vorname @form-state)
                 :Vorname nil identity
                 true form-state) 
   (rc-input-box "Stundensoll" (str (:Stundensoll @form-state))
                 :Stundensoll  #"^(\d+)$" js/parseInt false form-state)
   [rc-check-box "ins Menü" :insMenue form-state]])

(defn buttons
  [form-state]
  [[button
    :label    "speichern"
    :class    "btn-primary"
    :on-click #(ersetze-dozent form-state)] 
   [button
    :label    "entfernen"
    :on-click #(remove-dataset form-state :dozenten :name :Name)]])

(defn dozenten
  "Komponente für die Anzeige und Bearbeitung der Dozenten."
  []
  (let [dozenten @(rf/subscribe [:dozenten])] 
    [table-ui
     (dozenten->table dozenten)
     "Dozenten"
     [:Name :Vorname :Stundensoll :insMenue]
     [:Name :Vorname :Stundensoll :insMenue]
     [[:Name false]]
     (partial td-render-fn :Name dozent-form-felder buttons)
     ]))
