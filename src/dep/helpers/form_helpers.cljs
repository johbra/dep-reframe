(ns dep.helpers.form-helpers
  (:require
   [reagent.core :as reagent]
   [re-com.core :refer [v-box h-box button border input-text checkbox line label
                        single-dropdown]]))

(defn rc-input-box
  "Erzeugt ein Eingabefeld mithilfe von re-com."
  [labl model form-key validation-regex convert-fn disabled? s] 
  ^{:key labl}
  [h-box :justify :between :align :center
   :children [[label :width "100px" :label labl]
              [input-text
               :model       model
               :on-change #(swap! s assoc form-key (convert-fn %))
               :placeholder ""
               :validation-regex validation-regex
               :disabled? disabled?]]])

(defn rc-check-box
  "Erzeugt eine Checkbox mithilfe von re-com"
  [labl form-key s] 
  [h-box :children [[label :width "100px" :label labl]
                    [checkbox 
                     :model     (form-key @s)
                     :on-change #(swap! s assoc form-key %)]]])

(defn rc-dropdown
  "Erzeugt ein Dropdown-Eingabefeld mithilfe von re-com."
  [labl form-key choices disabled? s]
  [h-box :justify :between :align :center
   :children [[label :width "100px" :label labl]
              [single-dropdown
               :width "250px"
               :choices   choices
               :model     (form-key @s)
               :on-change #(swap! s assoc form-key %)
               :disabled? disabled?]]])

(defn standard-form
  "Komponente für das Bearbeitungsformular."
  [fields form-data buttons process-cancel] 
  (let [form-state (reagent/atom form-data)] 
    (fn []
      [border
       :border "1px solid #eee"
       :child
       [v-box
        :padding  "10px"
        :style    {:background-color "cornsilk"}
        :children (concat (fields form-state)
                          [[line :color "#ddd" :style {:margin "10px 0 10px"}]]
                          [[h-box
                            :gap      "12px"
                            :children (conj (buttons form-state)
                                            [button
                                             :label    "schließen"
                                             :on-click process-cancel])]])]])))
