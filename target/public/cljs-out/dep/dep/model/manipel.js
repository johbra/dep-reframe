// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('dep.model.manipel');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dep.model.quartal');
/**
 * Erzeugt ein Manipel-'Objekt' (hash-map)
 */
dep.model.manipel.__GT_Manipel = (function dep$model$manipel$__GT_Manipel(studienrichtung,name,studienbeginn,anzahlGruppen,jahrSemesterZuordnung){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$studienrichtung,studienrichtung,cljs.core.cst$kw$name,name,cljs.core.cst$kw$studienbeginn,studienbeginn,cljs.core.cst$kw$anzahlGruppen,anzahlGruppen,cljs.core.cst$kw$jahrSemesterZuordnung,jahrSemesterZuordnung], null);
});
/**
 * Prüft, ob für ein Manipel im angegebenen Quartal Lehrveranstaltungen
 *   anzubieten sind.
 */
dep.model.manipel.wirdUnterrichtetIn_QMARK_ = (function dep$model$manipel$wirdUnterrichtetIn_QMARK_(manipel,quartal){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$jahrSemesterZuordnung.cljs$core$IFn$_invoke$arity$1(manipel),dep.model.quartal.minus(quartal,cljs.core.cst$kw$studienbeginn.cljs$core$IFn$_invoke$arity$1(manipel)));
});
/**
 * Liefert die Teilmenge (sequence) aus manipels, die in quartal
 *   zu unterrichten sind.
 */
dep.model.manipel.zu_unterrichtende_manipels_quartal = (function dep$model$manipel$zu_unterrichtende_manipels_quartal(manipels,quartal){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24114_SHARP_){
return dep.model.manipel.wirdUnterrichtetIn_QMARK_(p1__24114_SHARP_,quartal);
}),manipels);
});
/**
 * Bestimmt das Semester, in dem sich das Manipel im angegebenen Quartal befindet.
 *   Liefert 0, falls das Manipel im angegebenen Quartal nicht unterrichtet wird.
 */
dep.model.manipel.semesterInQuartal = (function dep$model$manipel$semesterInQuartal(manipel,quartal){
var sem = (function (){var G__24116 = dep.model.quartal.minus(quartal,cljs.core.cst$kw$studienbeginn.cljs$core$IFn$_invoke$arity$1(manipel));
var fexpr__24115 = cljs.core.cst$kw$jahrSemesterZuordnung.cljs$core$IFn$_invoke$arity$1(manipel);
return (fexpr__24115.cljs$core$IFn$_invoke$arity$1 ? fexpr__24115.cljs$core$IFn$_invoke$arity$1(G__24116) : fexpr__24115.call(null,G__24116));
})();
if(cljs.core.truth_(sem)){
return sem;
} else {
return (0);
}
});
/**
 * Bestimmt aus der jahrsemesterzuordnung eines Manipels das Quartal eines Semesters
 */
dep.model.manipel.quartal_aus_jsz_fuer_semester = (function dep$model$manipel$quartal_aus_jsz_fuer_semester(jsz,semester){
return cljs.core.key(cljs.core.first(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24117_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__24117_SHARP_),semester);
}),jsz))));
});
/**
 * Liefert das Manipel mit dem Namen string aus der Liste manipels.
 */
dep.model.manipel.manipel_mit_namen = (function dep$model$manipel$manipel_mit_namen(manipels,string){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24118_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__24118_SHARP_),string);
}),manipels));
});
