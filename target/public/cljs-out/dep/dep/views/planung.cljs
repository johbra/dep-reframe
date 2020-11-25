(ns dep.views.planung
  (:require 
   [re-frame.core :as rf] 
   [re-com.core :refer [v-box h-box p]]
   [dep.model.manipel :refer [quartal-aus-jsz-fuer-semester]]
   [dep.model.quartal :refer [semester->quartal minus]]
   [dep.model.lehrveranstaltung :refer [lehrveranstaltungen-fuer-quartal]] 
   [dep.views.dozentenauslastung :refer [dozentenauslastung dozentenstunden-jahr
                                         dozentenstunden-quartal]]
   [dep.views.lehrveranstaltungen :refer [lehrveranstaltungen]]))

(defn fuege-geschaeftsjahr-hinzu
  "fuegt allen dozenten die Initialauslastung für ein Geschäftsjahr jahr hinzu."
  [dozenten jahr]
  (mapv #(assoc-in % [:auslastungen jahr] [0 0 0 0]) dozenten))

(defn neues-geschaeftjahr
  "legt neues Geschäftsjahr an."
  []
  (let [jahre @(rf/subscribe [:jahre])
        neuesJahr (inc (apply max jahre))
        jahre (conj jahre neuesJahr)
        dozenten (fuege-geschaeftsjahr-hinzu @(rf/subscribe [:dozenten]) neuesJahr)]
    (rf/dispatch [:jahre jahre])
    (rf/dispatch [:dozenten dozenten])))

(defn lehrveranstaltungen-eines-manipels
  "ermittelt alle Lehrveranstaltungen aus lvn für manipel."
  [manipel lvn]
  (into #{} (filter (fn [l] (= (:manipel l) manipel)) lvn)))

(defn geaenderte-semester-quartale
  "ermittelt die sich zwischen alt-manipel und neu-manipel geänderten
  Semesterquartale."
  [alt-manipel neu-manipel]
  (apply merge (for [[q s] (:jahrSemesterZuordnung alt-manipel)
                     :when (not= q (quartal-aus-jsz-fuer-semester
                                    (:jahrSemesterZuordnung neu-manipel) s))]
                 {q s})))

(defn ersetze-lven
  "In lven-alle werden die Lehrveranstaltungen lven-alt durch die in lven-neu ersetzt."
  [lven-alt lven-neu lven-alle]
  (into [] (concat (remove lven-alt lven-alle) lven-neu)))

(defn verschiebe-lven
  "verschiebt die Lehrveranstaltungen lven in neues Quartal auf der Basis einer
  Änderung der Quartal-Semester-Zuordnung zwischen von-manipel und nach-manipel."
  [lven von-manipel nach-manipel]
  (let [sq (geaenderte-semester-quartale von-manipel nach-manipel)]
    (mapv (fn [lv]
            (let [semester (sq (minus (:quartal lv)
                                      (:studienbeginn von-manipel)))]
              (if semester
                (assoc lv
                       :manipel nach-manipel
                       :quartal (semester->quartal
                                 semester
                                 (:studienbeginn nach-manipel)
                                 (:jahrSemesterZuordnung nach-manipel)))
                lv)))
          lven)))

(defn umplane-lven
  "Die Lehrveranstaltungen von alt-manipel werden auf das neu-manipel umgestellt."
  [alt-manipel neu-manipel]
  (let [lven @(rf/subscribe [:lven])
        lven-von-alt-manipel (lehrveranstaltungen-eines-manipels
                              alt-manipel lven)
        lven-fuer-neu-manipel (verschiebe-lven lven-von-alt-manipel
                                               alt-manipel neu-manipel)
        lven-gesamt (ersetze-lven lven-von-alt-manipel 
                                  lven-fuer-neu-manipel lven)
        dzntn (dozentenstunden-jahr lven-gesamt
                                    @(rf/subscribe [:dozenten])
                                    @(rf/subscribe [:geschaeftsjahr]))]
    (rf/dispatch [:lven lven-gesamt])
    (rf/dispatch [:dozenten dzntn])))

(defn plane-quartal
  "Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
  Vorherige Planungen dieses Quartals werden überschrieben."
  []
  (let [quartal @(rf/subscribe [:quartal] )
        lvn (lehrveranstaltungen-fuer-quartal
             quartal
             @(rf/subscribe [:manipels])
             @(rf/subscribe [:module]))
        dzntn (dozentenstunden-quartal lvn  @(rf/subscribe [:dozenten]) quartal) 
        alle-lvn (into [] (concat 
                           (remove #(= (:quartal %) quartal)
                                   @(rf/subscribe [:lven]))
                           lvn))]
    (rf/dispatch [:lven alle-lvn])
    (rf/dispatch [:dozenten dzntn])))

(defn planung 
  "Komponente für die Anzeige und Bearbeitung der Dozenten."
  []
  [h-box :gap "100px" :children
   [[v-box :children
     [[lehrveranstaltungen]]]
    [v-box :children
     [[dozentenauslastung]]]
    ]])
