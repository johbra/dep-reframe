(ns dep.model.studienrichtung) 


;; Konstruktor
(defn ->Studienrichtung
  "Erzeugt ein Studienrichtungs-'Objekt' (hash-map)."
  [name]
  {:name name})

(defn studienrichtung-mit-namen
  "Liefert die Studienrichtung mit dem Namen string aus der Liste Studienrichtungen."
  [studienrichtungen string]
  (first (filter #(= (:name %) string) studienrichtungen)))


