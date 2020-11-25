(ns dep.helpers.helpers
  (:require
   [medley.core :refer [map-vals]]))

;; Hilfsfunktionen
(defn round1
  [x] (/ (Math/ceil (* 10 x)) 10))

(defn index-of-map-in-vector
  [v key val]
  (first (keep-indexed #(when (= (key %2) val) %1) v)))
