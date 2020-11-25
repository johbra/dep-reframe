(ns dep.subs
  (:require 
   [re-frame.core :as rf]
   [dep.model.quartal :refer [quartale-fuer-jahr quartal->string]]) 
  )

(rf/reg-sub
 :welt
 (fn [db _]
   db))

(rf/reg-sub          ;; a new subscription handler
 :name               ;; usage (subscribe [:name])
 (fn [db _]
   (:display-name db)))  ;; extracts `:display-name` from app-db

(rf/reg-sub
 :selected
 (fn [db _]
   (:selected db)))

(rf/reg-sub
 :jahre
 (fn [db _]
   (:jahre db)))

(rf/reg-sub
 :geschaeftsjahr
 (fn [db _]
   (:geschaeftsjahr db)))

(rf/reg-sub
 :quartal
 (fn [db _]
   (:quartal db)))

(rf/reg-sub
 :quartale
 (fn [db _]
   (map quartal->string (quartale-fuer-jahr (:geschaeftsjahr db)))))

(rf/reg-sub
 :dozenten
 (fn [db _]
   (:dozenten db)))

(rf/reg-sub
 :studienrichtungen
 (fn [db _]
   (:studienrichtungen db)))

(rf/reg-sub
 :manipels
 (fn [db _]
   (:manipels db)))

(rf/reg-sub
 :module
 (fn [db _]
   (:module db)))

(rf/reg-sub
 :lven
 (fn [db _]
   (:lven db)))

(rf/reg-sub
 :dateien
 (fn [db _]
   (:dateien db)))

(rf/reg-sub
 :show-modal
 (fn [db _]
   (:show-modal db)))

(rf/reg-sub
 :modal-form
 (fn [db _]
   (:modal-form db)))

(rf/reg-sub
 :buttons
 (fn [db _]
   (:buttons db)))

(rf/reg-sub
 :edit-component
 (fn [db _]
   (:edit-component db)))

(rf/reg-sub
 :update-fn
 (fn [db _]
   (:update-fn db)))

(rf/reg-sub
 :remove-fn
 (fn [db _]
   (:remove-fn db)))

(rf/reg-sub
 :sort-column
 (fn [db _]
   (:sort-column (:table-sort db))))

(rf/reg-sub
 :table-sort
 (fn [db _]
   (:table-sort db)))
