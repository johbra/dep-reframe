// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.model.lehrveranstaltung');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dep.model.manipel');
goog.require('dep.model.modul');
/**
 * Erzeugt ein Lehrveranstaltungsexemplar.
 */
dep.model.lehrveranstaltung.__GT_Lehrveranstaltung = (function dep$model$lehrveranstaltung$__GT_Lehrveranstaltung(modul,quartal,dozent,wiederholungsFaktor,manipel){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$modul,modul,cljs.core.cst$kw$quartal,quartal,cljs.core.cst$kw$dozent,dozent,cljs.core.cst$kw$wiederholungsFaktor,wiederholungsFaktor,cljs.core.cst$kw$manipel,manipel,cljs.core.cst$kw$anzahlGruppen,cljs.core.cst$kw$anzahlGruppen.cljs$core$IFn$_invoke$arity$1(manipel)], null);
});
/**
 * Berechnet die Semesterwochenstunden einer Lehrveranstaltung lv.
 */
dep.model.lehrveranstaltung.semesterWochenstunden = (function dep$model$lehrveranstaltung$semesterWochenstunden(lv){
return dep.model.modul.wochenStundenInSemester(cljs.core.cst$kw$modul.cljs$core$IFn$_invoke$arity$1(lv),dep.model.manipel.semesterInQuartal(cljs.core.cst$kw$manipel.cljs$core$IFn$_invoke$arity$1(lv),cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(lv)));
});
/**
 * Ermittelt eine Hashmap mit je einem Manipel als key und einer Liste von Modulen
 *   als value der Module, die in einem quartal angeboten werden müssen.
 */
dep.model.lehrveranstaltung.manipel_modullisten_map_fuer_quartal = (function dep$model$lehrveranstaltung$manipel_modullisten_map_fuer_quartal(manipels,module,quartal){
var modulliste = cljs.core.second;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30424_SHARP_){
return cljs.core.seq((modulliste.cljs$core$IFn$_invoke$arity$1 ? modulliste.cljs$core$IFn$_invoke$arity$1(p1__30424_SHARP_) : modulliste.call(null,p1__30424_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (mpl){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mpl,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30425_SHARP_){
return dep.model.modul.mussModulUnterrichtetWerdenFuer_inQuartal_QMARK_(p1__30425_SHARP_,mpl,quartal);
}),module)], null);
}),manipels)));
});
/**
 * Erzeugt aus einer Manipel-Modullisten-Map einen Vektor aus Lehrveranstaltungen für
 *   ein quartal.
 */
dep.model.lehrveranstaltung.lven_vector = (function dep$model$lehrveranstaltung$lven_vector(lv_map,quartal){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ml){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30426_SHARP_){
return dep.model.lehrveranstaltung.__GT_Lehrveranstaltung(p1__30426_SHARP_,quartal,"NN",(1),cljs.core.key(ml));
}),cljs.core.val(ml));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lv_map], 0)));
});
/**
 * Erzeugt einen Vektor mit den Lehrveranstaltungen, die für die manipels und module
 *   in einem quartal geplant werden müssen.
 */
dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal = (function dep$model$lehrveranstaltung$lehrveranstaltungen_fuer_quartal(quartal,manipels,module){
return dep.model.lehrveranstaltung.lven_vector(dep.model.lehrveranstaltung.manipel_modullisten_map_fuer_quartal(dep.model.manipel.zu_unterrichtende_manipels_quartal(manipels,quartal),module,quartal),quartal);
});
/**
 * Liefert die Lehrveranstaltung mit der gegebenen id.
 */
dep.model.lehrveranstaltung.lv_mit_id = (function dep$model$lehrveranstaltung$lv_mit_id(lven,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30427_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__30427_SHARP_),id);
}),lven));
});
/**
 * Bestimmt das Semester des Manipels im Quartal der Lehrveranstaltung (Lv).
 */
dep.model.lehrveranstaltung.semester = (function dep$model$lehrveranstaltung$semester(lv){
return dep.model.manipel.semesterInQuartal(cljs.core.cst$kw$manipel.cljs$core$IFn$_invoke$arity$1(lv),cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(lv));
});
