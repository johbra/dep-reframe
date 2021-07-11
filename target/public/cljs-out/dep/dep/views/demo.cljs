(ns dep.views.demo
  (:require-macros
   [re-com.core           :refer []])
  (:require
   [clojure.string        :as string]
   [goog.string           :as gstring]
   [goog.string.format]
   [reagent.core          :as reagent]
   [re-com.core           :refer [at box label p slider hyperlink-href h-box v-box gap simple-v-table checkbox button]]
   [re-com.config         :refer [debug?]]
   #_[re-demo.utils         :refer [title3]]
   [re-com.util           :refer [px]]))

(defn table
  []
  [simple-v-table
   :model (reagent/atom [{:id 0}])
   :columns [{:id :id :header-label "Id" :row-label-fn :id
              :width 70 :height 35}]])
