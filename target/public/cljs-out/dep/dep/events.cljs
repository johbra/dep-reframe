(ns dep.events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
   [re-frame.core :as rf]
   [dep.model.quartal :refer [->Quartal quartale-fuer-jahr string->quartal]]
   [dep.db :refer [default-db]]
   [dep.helpers.drop-file-stream
    :refer [ list-folder delete-file-named]]))

(rf/reg-event-db
 :welt
 (fn [_ [_ welt]]
   welt))

(rf/reg-fx
 :files
 (fn [db]
   (reset! re-frame.db/app-db db)
   (go (rf/dispatch [:dateien (<! (list-folder))]))))

(rf/reg-event-fx
 :initialise-db
 (fn [_ _]
   {:fx [[:files default-db]]}))

(rf/reg-event-db
 :table-sort
 (fn [db [_ item]] 
   (assoc db :table-sort item)))

(rf/reg-event-db
 :change-sort-sequence
 (fn [db [_ ]] 
   (assoc-in db [:table-sort :ascending] (not (:ascending (:table-sort db)) ))))

(rf/reg-event-db
 :change-sort-column
 (fn [db [_ item]] 
   (assoc-in db [:table-sort :sort-column] item)))

(rf/reg-event-db
 :menu-item-selected
 (fn [db [_ item]]
   (assoc db :selected item)))

(rf/reg-event-db
 :show-modal
 (fn [db [_ item form edit-component buttons ]] 
   (assoc db
          :show-modal item
          :modal-form form
          :edit-component edit-component
          :buttons buttons)))

(rf/reg-event-db
 :geschaeftsjahr
 (fn [db [_ item]] 
   (assoc db :geschaeftsjahr (js/parseInt item)
          :quartal (first (quartale-fuer-jahr item)))))

(rf/reg-event-db
 :quartal
 (fn [db [_ item]] 
   (assoc db :quartal (string->quartal item))))

(rf/reg-event-db
 :jahre
 (fn [db [_ item]]
   (assoc db :jahre item)))

(rf/reg-event-db
 :dozenten
 (fn [db [_ item]] 
   (assoc db :dozenten item)))

(rf/reg-event-db
 :studienrichtungen
 (fn [db [_ item]]
   (assoc db :studienrichtungen item)))

(rf/reg-event-db
 :manipels
 (fn [db [_ item]]
   (assoc db :manipels item)))

(rf/reg-event-db
 :module
 (fn [db [_ item]]
   (assoc db :module item)))

(rf/reg-event-db
 :lven
 (fn [db [_ item]]
   (assoc db :lven item)))

(rf/reg-event-db
 :dateien
 (fn [db [_ item]] 
   (assoc db :dateien item)))

(rf/reg-event-db
 :loesche-datei
 (fn [db [_ dateien datei]] 
   (go 
     (<! (delete-file-named (:name datei))))
   (assoc db :dateien dateien)
   ))
