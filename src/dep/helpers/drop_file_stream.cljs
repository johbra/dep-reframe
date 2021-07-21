(ns dep.helpers.drop-file-stream 
  (:require [day8.re-frame.http-fx]
            [ajax.core :refer [text-response-format json-request-format
                               json-response-format]]))

;; Funktionen für den Zugriff auf Dateien in der Dropbox unter Vewendung
;; der HTTP Effects Handler For re-frame ((https://github.com/Day8/re-frame-http-fx)

(def authorization
  "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-")

(defn ajax-request-read-edn-from-dropbox
  "Liest die Datei filename aus der Dropbox."
  [filename ]
  (let [path (str "{\"path\":\"/" filename "\"}")]
    {:method          :post
     :uri             "https://content.dropboxapi.com/2/files/download"
     :with-credentials? false
     :headers
     {"Authorization" authorization 
      "Dropbox-API-Arg" path
      "Content-Type" "text/plain; charset=utf-8"}
     :response-format  (text-response-format)
     :on-success      [:process-read]
     :on-failure      [:bad-resp]
     :body ""}))

(defn ajax-request-list-folder-on-dropbox
  "Liest den Ordnerinhalt der App aus der Dropbox."
  [] 
  {:method          :post
   :uri             "https://api.dropboxapi.com/2/files/list_folder"
   :with-credentials? false
   :headers
   {"Authorization" authorization
    "Content-Type" "application/json"}
   :format (json-request-format)
   :params {:path ""}
   :response-format  (json-response-format {:keywords? true})
   :on-success      [:process-list-folder-request]
   :on-failure      [:bad-resp]})

(defn ajax-request-write-edn-to-dropbox
  "Schreibt content im EDN-Format in Datei filename."
  [content filename]
  (let [path
        (str "{\"path\":\"/" filename \" "," "\"mode\":{\".tag\":\"overwrite\"}}")]
    {:method          :post
     :uri             "https://content.dropboxapi.com/2/files/upload"
     :with-credentials? false
     :headers
     {"Authorization" authorization 
      "Dropbox-API-Arg" path
      "Content-Type" "application/octet-stream"}
     :response-format  (json-response-format {:keywords? true})
     :on-success      [:process-written]
     :on-failure      [:bad-resp]
     :body content}))

(defn ajax-request-delete-file-from-dropbox
  "Löscht Datei filename aus der Liste files und aus der Dropbox."
  [filename files]
  (let [path (str "/" filename)]
    {:method          :post
     :uri             "https://api.dropboxapi.com/2/files/delete"
     :with-credentials? false
     :headers
     {"Authorization" authorization}
     :format (json-request-format)
     :params {:path path}
     :response-format (json-response-format {:keywords? true})
     :on-success      [:process-deleted files]
     :on-failure      [:bad-resp]}))

(defn ajax-request-rename-file-on-dropbox
  "Benennt die Datei mit dem Namen f-name-old in f-name-new um."
  [f-name-old f-name-new]
  (let [path-old (str "/" f-name-old)
        path-new (str "/" f-name-new)]
    {:method          :post
     :uri             "https://api.dropboxapi.com/2/files/move_v2"
     :with-credentials? false
     :headers
     {"Authorization" authorization}
     :format (json-request-format)
     :params {:from_path path-old
              :to_path path-new}
     :response-format (json-response-format {:keywords? true})
     :on-success      [:process-renamed]
     :on-failure      [:bad-resp]}))


