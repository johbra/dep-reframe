(ns dep.views.manipels
  (:require
   [re-frame.core :as rf]
   [re-com.core :refer [title button]]
   [medley.core :as p]
   [dep.model.manipel :refer [->Manipel]]
   [dep.views.table :refer [table-ui td-render-fn]]
   [dep.model.quartal
    :refer [quartal->string string->quartal sieben-semester->quartstrng
            parse-int]]
   [dep.views.planung :refer [umplane-lven]]
   [dep.helpers.form-helpers :refer [rc-input-box rc-dropdown standard-form]]
   [dep.helpers.data-modifiers :refer [remove-dataset replace-dataset]]))

(def sem-tabellen-koepfe
  "Die Spaltenüberschriften für die 7 Semester"
  (map #(keyword (str "S" %)) (range 1 8)))

(def semestermanipel-mit-namen
  "liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}"
  (zipmap sem-tabellen-koepfe (range 1 8)))


(defn formular-daten->jahr-semester-zuordung
  "erzeugt aus den Strings des Formulars eine jahrsemesterzuordnung"
  [formulardaten]
  (let
      [jsz (select-keys formulardaten (for [i (range 1 8)] (keyword (str "Sem-" i))))]
    (->> jsz
         (p/map-vals string->quartal)
         (clojure.set/map-invert) 
         (p/map-vals #(parse-int (last (clojure.string/split (str %) #"-")))) 
         (p/map-keys
          #(assoc % :jahr
                  (- (:jahr %)
                     (:jahr (string->quartal(:Stdnbgnn formulardaten)))))))))

(defn aender-manipel 
  "Erzeugt ein neues Manipel aus den in form gegebenen Daten."
  [form-state]
  (let [form @form-state
        jsz (formular-daten->jahr-semester-zuordung form) 
        neues-manipel
        (->Manipel (:Studienrichtung form)
                   (symbol (:Name form))
                   (string->quartal (:Stdnbgnn form))
                   (:An-Gr form)
                   jsz) 
        _ (umplane-lven (:Manipel form) neues-manipel)]
    (replace-dataset :manipels :name neues-manipel)))

(defn manipels->table
  "Wandelt die manipels für die Darstellung als Tabelle um."
  [manipels] 
  (mapv #(merge (hash-map :Name (:name %)
                          :Studienrichtung (:studienrichtung %)
                          :An-Gr (:anzahlGruppen %)
                          :Stdnbgnn (quartal->string (:studienbeginn %))
                          :Manipel %)
                (sieben-semester->quartstrng (:studienbeginn %)
                                             (:jahrSemesterZuordnung %)))
        manipels))

(defn manipel-form-felder
  [form-state]
  (let [studienrichtungen(mapv #(hash-map :id (:name %) :label (:name %))
                               @(rf/subscribe [:studienrichtungen]))]
    [[title :label "Manipel" :level :level2]
     (rc-input-box "Name" (str (:Name @form-state)) :Name nil symbol false form-state)
     (rc-dropdown "Studienrichtung" 
                  :Studienrichtung studienrichtungen false form-state)
     (rc-input-box "Anzahl-Gruppen" (str (:An-Gr @form-state))
                   :An-Gr  #"^(\d+)$" js/parseInt false form-state)
     (rc-input-box "Studienbeginn" (:Stdnbgnn @form-state)
                   :Stdnbgnn nil identity false form-state) 
     (for [i (range 1 8)] 
       (rc-input-box (str "Semester " i)
                     ((keyword (str "Sem-" i)) @form-state)
                     (keyword (str "Sem-" i)) nil identity false form-state))]))

(defn buttons
  [form-state]
  [[button
    :label    "speichern"
    :class    "btn-primary"
    :on-click #(aender-manipel form-state)] 
   [button
    :label    "entfernen"
    :on-click #(remove-dataset form-state :manipels :name :Name)]])

(defn manipels
  "Komponente für die Anzeige und Bearbeitung der Manipel."
  []
  (let [manipels @(rf/subscribe [:manipels])] 
    [table-ui 
     (manipels->table manipels)
     "Manipel"
     [:Name :Studienrichtung :Stdnbgnn :An-Gr
      :Sem-1 :Sem-2 :Sem-3 :Sem-4 :Sem-5 :Sem-6 :Sem-7]
     [:Name :Studienrichtung :Stdnbgnn :An-Gr]
     [[:Name false]]
     (partial td-render-fn :Name manipel-form-felder buttons)
     ]))
