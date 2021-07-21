(ns dep.events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
   [re-frame.core :as rf]
   [dep.model.quartal :refer [->Quartal quartale-fuer-jahr string->quartal]]
   [dep.db :refer [default-db]]
   [dep.helpers.drop-file-stream
    :refer [ajax-request-list-folder-on-dropbox
            ajax-request-write-edn-to-dropbox
            ajax-request-delete-file-from-dropbox
            ajax-request-read-edn-from-dropbox
            ajax-request-rename-file-on-dropbox]]
   #_[ajax.core :as ajax]        
   [day8.re-frame.http-fx] ))

(rf/reg-fx
 :reset
 (fn [db]
   (reset! re-frame.db/app-db db)))

;; Die folgenden Events dienen dem Zugriff auf Dateien in der Dropbox.
;; Sie sind gemäß der re-frame-Dokumentation Talking To Servers aufgebaut:
;; https://day8.github.io/re-frame/Talking-To-Servers/

(rf/reg-event-fx
 :initialise-db
 (fn [{:keys [db]}]
   {:fx [[:reset default-db]]
    :db         (assoc db :loading true)  
    :http-xhrio (ajax-request-list-folder-on-dropbox)}))

(rf/reg-event-fx
 :welt
 (fn [{:keys [db]} [_ datei]] 
   {:db (assoc db :reading true)  
    :http-xhrio (ajax-request-read-edn-from-dropbox datei)}))

(rf/reg-event-fx
 :sichere-welt
 (fn  [{:keys [db]} [_ dateiinhalt datei]] 
   {:db (assoc db :writing true)  
    :http-xhrio (ajax-request-write-edn-to-dropbox dateiinhalt datei)}))

(rf/reg-event-fx
 :umbenenne-datei
 (fn  [{:keys [db]} [_ f-name-old f-name-new ]] 
   {:db (assoc db :renaming true) 
    :http-xhrio (ajax-request-rename-file-on-dropbox f-name-old f-name-new)}))

(rf/reg-event-fx
 :loesche-datei
 (fn [{:keys [db]} [_ dateien datei]]
   {:db (assoc db :deleting true)
    :http-xhrio (ajax-request-delete-file-from-dropbox
                 (:name datei) dateien)}))

(rf/reg-event-db
 :process-list-folder-request
 (fn [db [_ response]] 
   (assoc db
          :dateien (:entries response)
          :loading false)))

(rf/reg-event-db
 :process-written 
 (fn [db [_ response]] 
   (assoc db :writing false)
   (update db :dateien conj response)))

(rf/reg-event-fx
 :process-renamed
 (fn [{:keys [db]} [_ ]]
   {:db         (assoc db :renaming false)  
    :http-xhrio (ajax-request-list-folder-on-dropbox)}))

(rf/reg-event-fx
 :process-read
 (fn [{:keys [db]} [_ response]] 
   {:fx         [[:reset (cljs.reader/read-string response)]]
    :db         (assoc db :reading false)  
    :http-xhrio (ajax-request-list-folder-on-dropbox)}))

(rf/reg-event-db
 :process-deleted 
 (fn [db [_ files response]] 
   (assoc db
          :deleting false
          :dateien (vec (remove (fn [f] (= (:name f) (:name response))) files)))))

(rf/reg-event-db
 :bad-resp
 (fn [db [_ response]]
   (js/alert  response)
   db))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Hier folgen die "normalen" Events der Anwendung ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rf/reg-event-db
 :table-sort
 (fn [db [_ item]] 
   (assoc db :table-sort item)))

(rf/reg-event-db
 :change-sort-sequence
 (fn [db [_ ]] 
   (assoc-in db [:table-sort :ascending] (not (:ascending (:table-sort db))))))

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


