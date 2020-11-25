(ns dep.views.datensicherung
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [<!]]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [re-com.core :refer [v-box h-box title button]]
   [dep.views.table :refer [table-ui td-render-fn]]
   [dep.helpers.form-helpers :refer [rc-input-box standard-form]]
   [dep.helpers.drop-file-stream
    :refer [write-text list-folder read-edn-file rename-file]]))

(defn datei-mit-namen
  "Liefert die Datei mit dem Namen string aus der Liste von dateien."
  [dateien string]
  (first (filter #(= (:name %) string) dateien)))

(defn loesche-datei
  "Enfernt die Datei d aus der welt und vom Datenträger."
  [d]
  (let [dateien (vec (remove #(= (:name %) (:name d)) @(rf/subscribe [:dateien])))] 
    (rf/dispatch-sync [:loesche-datei dateien d])))

(defn lade-welt-aus-datei
  "Restauriert den Welt-Zustand aus der edn-Datei d."
  [d]
  (go (let [welt (<! (read-edn-file (:name d)))]
        (rf/dispatch [:welt welt])
        (rf/dispatch [:dateien (<! (list-folder))]))))

(defn umbenenne-datei
  [alter-name neuer-name]
  (let [dateien @(rf/subscribe [:dateien])]
    (if (datei-mit-namen dateien neuer-name)
      (js/alert (str "Datei mit Namen " neuer-name " existiert bereits!"))      
      (go  (let [_ (<! (rename-file alter-name neuer-name))
                 dateien (<! (list-folder))] 
             (rf/dispatch-sync [:dateien dateien])
             (rf/dispatch [:show-modal false]))))))

(defn dateien->table
  "Wandelt die dateien für die Darstellung als Tabelle um. "
  [dateien]
  (mapv #(hash-map :Name (:name %)
                   :Zeitstempel (:client_modified %)
                   :Aktion1 [:a
                             {:on-click (fn [](loesche-datei %))} "entfernen"]
                   :Aktion2 [:a
                             {:on-click (fn [](lade-welt-aus-datei %))} "laden"]
                   :alter-name (:name %))
        dateien))

(defn datei-form-felder
  [form-state]
  [[title :label "Datei" :level :level2]
   (rc-input-box "Name" (:Name @form-state) :Name nil identity false form-state)
   (rc-input-box "Zeitstempel" (:Zeitstempel @form-state) :Zeitstempel nil identity
                 true form-state)])

(defn buttons
  [form]
  [[button
    :label    "Name ändern"
    :class    "btn-primary"
    :on-click #(umbenenne-datei (:alter-name @form) (:Name @form))]])

(defn datensicherung
  "Komponente für das Laden und Speichern von Planungsdaten."
  []
  (let [s (r/atom {:datei "pldaten.edn"})]
    (fn []
      (let 
          [dateien @(rf/subscribe [:dateien])
           welt @(rf/subscribe [:welt])]
        [h-box :gap "100px" :children
         [[v-box :children
           [[title :level :level2 :label "Planungsdaten in Datei speichern"]
            [h-box :gap "12px" :children
             [[rc-input-box "Daten in Datei" (:datei @s) :datei nil identity false s]
              [button :label "sichern" :class  "btn-primary"
               :on-click #(go (<! (write-text (prn-str welt) (:datei @s)))
                              (rf/dispatch-sync [:dateien (<! (list-folder))]))]]]]]
          [v-box :children
           [[table-ui
             (dateien->table dateien)
             "Dateien"
             [:Name :Zeitstempel :Aktion1 :Aktion2]
             [:Name :Zeitstempel :Aktion1 :Aktion2]
             [[:Name false]]
             (partial td-render-fn :Name datei-form-felder buttons)
             ]]]]]))))
