(ns dep.views.table
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [re-com.core :refer [v-box box  title]]
            [reagent-data-table.core :as rdt]
            [dep.helpers.form-helpers :refer [standard-form]]))

(defn td-render-fn
  [data-key form-fields buttons row col-id] 
  (cond (= data-key col-id)
        [:td [:a {:on-click
                  #(rf/dispatch
                    [:show-modal true row
                     (partial standard-form form-fields)
                     buttons])}
              (get row col-id)]]
        (boolean? (get row col-id)) ({true "ja" false "nein"} (get row col-id))
        :else (get row col-id)))

(defn table-ui
  "Komponente für die Darstellung einer reagent-data-table-Tabelle."
  [data table-title headers sortable-columns sort-columns td-render] 
  (let [table-state (r/atom {:table-data nil})
        _ (swap! table-state assoc-in [:table-data :data] data)]
    [v-box :children
     [[title :level :level2 :label table-title]
      [box :child
       [:div.table-container.tableFixHead
        [rdt/data-table {:table-id         table-title
                         :headers          (map #(vector % %) headers)
                         :rows             (:data (:table-data @table-state))
                         :sortable-columns sortable-columns
                         :sort-columns     sort-columns
                         :td-render-fn     td-render}]]]]]))
