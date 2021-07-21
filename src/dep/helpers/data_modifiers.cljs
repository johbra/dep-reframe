(ns dep.helpers.data-modifiers
  (:require
   [re-frame.core :as rf]))

(defn remove-dataset
  [form-state app-db-key data-set-key form-key]
  (let [data-sets @(rf/subscribe [app-db-key])]
    (rf/dispatch
     [app-db-key
      (vec (remove #(= (data-set-key %) (form-key @form-state)) data-sets))])
    (rf/dispatch [:show-modal false])))

(defn replace-dataset
  [app-db-key data-set-key new-dataset]
  (let [data-sets @(rf/subscribe [app-db-key])]
    (rf/dispatch
     [app-db-key
      (conj
       (vec (remove #(= (data-set-key %) (data-set-key new-dataset)) data-sets))
       new-dataset)])
    (rf/dispatch [:show-modal false])))

(defn duplicate-dataset
  [app-db-key new-dataset]
  (let [data-sets @(rf/subscribe [app-db-key])]
    (rf/dispatch
     [app-db-key
      (conj data-sets new-dataset)])
    (rf/dispatch [:show-modal false])))
