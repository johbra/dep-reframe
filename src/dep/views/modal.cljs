(ns dep.views.modal
  (:require [re-com.core :refer [modal-panel]]
            [re-frame.core :as rf]))

(defn modal
  []
  (let [show? @(rf/subscribe [:show-modal])
        form @(rf/subscribe [:modal-form])
        edit-component @(rf/subscribe [:edit-component])
        process-cancel #(rf/dispatch [:show-modal false])
        buttons @(rf/subscribe [:buttons])]
    (when show? [modal-panel
                 :backdrop-color   "grey"
                 :backdrop-opacity 0.4
                 :style            {:font-family "Consolas"}
                 :child [edit-component form buttons process-cancel
                         ]])))
