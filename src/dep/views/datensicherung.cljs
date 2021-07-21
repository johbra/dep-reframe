(ns dep.views.datensicherung 
  (:require 
   [reagent.core :as r]
   [re-frame.core :as rf]
   [re-com.core :refer [v-box h-box title button]]
   [dep.views.table :refer [table-ui td-render-fn]]
   [dep.helpers.form-helpers :refer [rc-input-box]]))

(defn datei-mit-namen
  "Liefert die Datei mit dem Namen string aus der Liste von dateien."
  [dateien string]
  (first (filter #(= (:name %) string) dateien)))

(defn loesche-datei
  "Enfernt die Datei d aus der welt und vom Datenträger."
  [d]
  (let [dateien @(rf/subscribe [:dateien])] 
    (rf/dispatch [:loesche-datei dateien d])))

(defn lade-welt-aus-datei
  "Restauriert den Welt-Zustand aus der edn-Datei d."
  [d]
  (rf/dispatch [:welt (:name d)]))

(defn umbenenne-datei
  "Benennt eine Datei um."
  [alter-name neuer-name]
  (let [dateien @(rf/subscribe [:dateien])]
    (if (datei-mit-namen dateien neuer-name)
      (js/alert (str "Datei mit Namen " neuer-name " existiert bereits!"))
      (do (rf/dispatch [:umbenenne-datei alter-name neuer-name])
          (rf/dispatch [:show-modal false])))))

(defn dateien->table
  "Wandelt die dateien für die Darstellung als Tabelle um. "
  [dateien]
  (mapv #(hash-map
          :Name (:name %)
          :Zeitstempel (:client_modified %)
          :Aktion1 [:a {:on-click (fn [](loesche-datei %))} "entfernen"]
          :Aktion2 [:a {:on-click (fn [](lade-welt-aus-datei %))} "laden"]
          :alter-name (:name %))
        dateien))

(defn datei-form-felder
  "Erzeugt die Eingabefelder für den modalen Bearbeitungsdialog für eine Datei."
  [form-state]
  [[title :label "Datei" :level :level2]
   (rc-input-box "Name" (:Name @form-state) :Name nil identity false form-state)
   (rc-input-box "Zeitstempel" (:Zeitstempel @form-state) :Zeitstempel nil identity
                 true form-state)])

(defn buttons
  "Erzeugt die Schaltflächen für den modalen Bearbeitungsdialog für eine Datei."
  [form]
  [[button
    :label    "Name ändern"
    :class    "btn-primary"
    :on-click #(umbenenne-datei (:alter-name @form) (:Name @form))]])

(defn datensicherung
  "Komponente für das Laden und Speichern von Planungsdaten in der Dropbox."
  []
  (let [s (r/atom {:datei "pldaten.edn"})]
    (fn []
      (let [dateien @(rf/subscribe [:dateien])
            welt @(rf/subscribe [:welt])]
        [h-box :gap "100px" :children
         [[v-box :children
           [[title :level :level2 :label "Planungsdaten in Datei speichern"]
            [h-box :gap "12px" :children
             [[rc-input-box "Daten in Datei" (:datei @s) :datei nil identity false s]
              [button :label "sichern" :class  "btn-primary"
               :on-click #(rf/dispatch-sync
                           [:sichere-welt (prn-str welt) (:datei @s)])]]]]]
          [v-box :children
           [[table-ui
             (dateien->table dateien)
             "Dateien"
             [:Name :Zeitstempel :Aktion1 :Aktion2]
             [:Name :Zeitstempel :Aktion1 :Aktion2]
             [[:Name false]]
             (partial td-render-fn :Name datei-form-felder buttons)
             ]]]]]))))
