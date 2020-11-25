(ns dep.model.manipel
  (:require
   [dep.model.quartal :refer [ minus]]))


;; Konstruktor
(defn ->Manipel
  "Erzeugt ein Manipel-'Objekt' (hash-map)"
  [studienrichtung name studienbeginn
   anzahlGruppen jahrSemesterZuordnung]
  {:studienrichtung studienrichtung :name name :studienbeginn studienbeginn
   :anzahlGruppen anzahlGruppen :jahrSemesterZuordnung jahrSemesterZuordnung})

;; Planung
(defn wirdUnterrichtetIn?
  "Prüft, ob für ein Manipel im angegebenen Quartal Lehrveranstaltungen
  anzubieten sind."
  [manipel quartal]
  (contains? (:jahrSemesterZuordnung manipel)
             (minus quartal (:studienbeginn manipel))))

(defn zu-unterrichtende-manipels-quartal
  "Liefert die Teilmenge (sequence) aus manipels, die in quartal
  zu unterrichten sind."
  [manipels quartal]
  (filter #(wirdUnterrichtetIn? % quartal) manipels))

(defn semesterInQuartal
  "Bestimmt das Semester, in dem sich das Manipel im angegebenen Quartal befindet.
  Liefert 0, falls das Manipel im angegebenen Quartal nicht unterrichtet wird."
  [manipel quartal]
  (let [sem ((:jahrSemesterZuordnung manipel)
             (minus quartal (:studienbeginn manipel)))]
    (if sem sem 0)))

(defn quartal-aus-jsz-fuer-semester
  "Bestimmt aus der jahrsemesterzuordnung eines Manipels das Quartal eines Semesters"
  [jsz semester]
  (key (first (into {} (filter #(= (val %) semester) jsz)))))

(defn manipel-mit-namen
  "Liefert das Manipel mit dem Namen string aus der Liste manipels."
  [manipels string]
  (first (filter #(= (:name %) string) manipels)))



