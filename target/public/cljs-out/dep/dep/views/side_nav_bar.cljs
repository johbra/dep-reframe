(ns dep.views.side-nav-bar
  (:require
   [dep.model.quartal :refer [quartal->string]] 
   [re-frame.core :as rf] 
   [dep.views.dozenten :refer [dozenten]]
   [dep.views.manipels :refer [manipels]]
   [dep.views.module :refer [module]]
   [dep.views.planung :refer [planung neues-geschaeftjahr plane-quartal]]
   [dep.views.datensicherung :refer [datensicherung]]
   [dep.views.studienrichtungen :refer [studienrichtungen]]
   [re-com.core :refer [v-box h-box button single-dropdown label hyperlink]]))

(defn menu-item
  [item callback-fn]
  [hyperlink
   :label item
   :class " bg-light"
   :on-click #(callback-fn item)])

(defn sidebar
  "Komponente für das Menü am linken Rand."
  []
  [:div#sidebar-wrapper
   [v-box :class "bg-light" :min-width "240px" :gap "15px"
    :children 
    [[menu-item "Planung"  #(rf/dispatch [:menu-item-selected :hauptseite])]
     [menu-item "Dozenten" #(rf/dispatch [:menu-item-selected :dozenten])]
     [menu-item "Module" #(rf/dispatch [:menu-item-selected :module])]
     [menu-item "Manipel" #(rf/dispatch [:menu-item-selected :manipels])]
     [menu-item "Studienrichtungen"
      #(rf/dispatch [:menu-item-selected :studienrichtungen])]
     [menu-item "Datensicherung"
      #(rf/dispatch [:menu-item-selected :datensicherung])]]]])

(defn menu-actions
  "Das in der Sidebar platzierte Menü."
  [selected]
  (if selected
    (selected
     {:dozenten [dozenten ]
      :manipels [manipels]      
      :module [module]
      :studienrichtungen [studienrichtungen]
      :datensicherung [datensicherung]
      :hauptseite [planung]
      })
    [planung]))

(defn select-box
  [lable values selected-value callback-fn]
  [h-box
   :gap "5px"
   :align :center
   :children
   [[label :label lable]
    [single-dropdown 
     :choices (for [v values] {:id {:key v} :label v})
     :model {:key selected-value}
     :on-change callback-fn]]
   ])

(defn geschaeftjahr-quartal-form 
  "Die Auswahlboxen für Geschäftsjahr und Quartal und die Planungsschaltfläche."
  []
  (let [jahre @(rf/subscribe [:jahre])
        quartale @(rf/subscribe [:quartale])
        quartal @(rf/subscribe [:quartal])
        geschaeftsjahr @(rf/subscribe [:geschaeftsjahr])
        ]
    [h-box :class "bg-light border-right" :gap "10px"
     :children
     [(select-box "Geschäftsjahr:" jahre geschaeftsjahr
                  #(rf/dispatch [:geschaeftsjahr (:key %)]))
      (select-box "Quartal:" quartale (quartal->string quartal)
                  #(rf/dispatch [:quartal (:key %)]))
      [button
       :class "btn-primary"
       :on-click #(plane-quartal)
       :label "Plane Quartal"]
      [button
       :class "btn-primary"
       :on-click #(neues-geschaeftjahr)
       :label "neues G-Jahr anlegen"] 
      ]]))


