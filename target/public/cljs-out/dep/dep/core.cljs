(ns ^:figwheel-hooks dep.core
  (:require
   #_[cljs.pprint :refer [pprint]]
   [reagent.dom :as rdom] 
   [re-frame.core :as rf]
   [dep.subs]
   [dep.events :as events]
   [dep.views.side-nav-bar :as bar]
   [dep.views.modal :refer [modal]]
   [re-com.core :refer [v-box h-box box gap]]   
   ))

(defn main-panel    ;; my top level reagent component
  []
  (let [name  (rf/subscribe [:name])
        selected (rf/subscribe [:selected])
                                        ;titel (calc/add 4 5)
        ] 
    [:div
     ;; [:div [:pre (with-out-str (pprint @re-frame.db/app-db))]]
     [modal]
     [h-box :children
      [[gap :size "10px"]
       [v-box 
        :children [[h-box :class "bg-light border-right"
                    :children [[box :size "240px" :child [:h4 @name]]
                               ;; [box :child [bar/menu-toggle]]
                               [gap :size "10px"]
                               [bar/geschaeftjahr-quartal-form]]]
                   [h-box :children
                    [[box :size "240px" :child [bar/sidebar] ]
                     [box :size "1" :child (bar/menu-actions @selected)]]]]]
       ]]]))

;; -- Entry Point -------------------------------------------------------------

(defn ^:export main     ;; call this to bootstrap your app
  []
  (rf/dispatch-sync [:initialise-db])
  (rdom/render [main-panel]
               (js/document.getElementById "app")))

;; and this is what figwheel calls after each save
(defn ^:after-load re-render []
  (main))

;; this only gets called once
(defonce start-up (do (main) (js/console.log @re-frame.db/app-db ) true))


