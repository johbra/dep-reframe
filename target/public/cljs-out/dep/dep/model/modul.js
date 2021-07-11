// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('dep.model.modul');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dep.model.quartal');
goog.require('dep.model.manipel');
/**
 * Erzeugt ein Modul-'Objekt' (hash-map)
 */
dep.model.modul.__GT_Modul = (function dep$model$modul$__GT_Modul(nummer,name,semesterWochenstunden,studienrichtung,gueltigAb,gueltigBis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$nummer,nummer,cljs.core.cst$kw$name,name,cljs.core.cst$kw$semesterWochenstunden,semesterWochenstunden,cljs.core.cst$kw$studienrichtung,studienrichtung,cljs.core.cst$kw$gueltigAb,gueltigAb,cljs.core.cst$kw$gueltigBis,gueltigBis], null);
});
/**
 * Bestimmt die Anzahl der Wochenstunden von modul im semester.
 */
dep.model.modul.wochenStundenInSemester = (function dep$model$modul$wochenStundenInSemester(modul,semester){
var n = (function (){var fexpr__24122 = (function (){var G__24123 = cljs.core.cst$kw$semesterWochenstunden;
return (modul.cljs$core$IFn$_invoke$arity$1 ? modul.cljs$core$IFn$_invoke$arity$1(G__24123) : modul.call(null,G__24123));
})();
return (fexpr__24122.cljs$core$IFn$_invoke$arity$1 ? fexpr__24122.cljs$core$IFn$_invoke$arity$1(semester) : fexpr__24122.call(null,semester));
})();
if(cljs.core.truth_(n)){
return n;
} else {
return (0);
}
});
/**
 * Bestimmt, ob Lehrveranstaltung für modul im quartal für manipel geplant werden
 *   muss.
 */
dep.model.modul.mussModulUnterrichtetWerdenFuer_inQuartal_QMARK_ = (function dep$model$modul$mussModulUnterrichtetWerdenFuer_inQuartal_QMARK_(modul,manipel,quartal){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$studienrichtung.cljs$core$IFn$_invoke$arity$1(modul),cljs.core.cst$kw$studienrichtung.cljs$core$IFn$_invoke$arity$1(manipel))){
var semester = dep.model.manipel.semesterInQuartal(manipel,quartal);
return ((cljs.core.contains_QMARK_(cljs.core.cst$kw$semesterWochenstunden.cljs$core$IFn$_invoke$arity$1(modul),semester)) && (((function (){var fexpr__24127 = cljs.core.cst$kw$semesterWochenstunden.cljs$core$IFn$_invoke$arity$1(modul);
return (fexpr__24127.cljs$core$IFn$_invoke$arity$1 ? fexpr__24127.cljs$core$IFn$_invoke$arity$1(semester) : fexpr__24127.call(null,semester));
})() > (0))) && (dep.model.quartal.liegt_zwischen_QMARK_(cljs.core.cst$kw$studienbeginn.cljs$core$IFn$_invoke$arity$1(manipel),cljs.core.cst$kw$gueltigAb.cljs$core$IFn$_invoke$arity$1(modul),cljs.core.cst$kw$gueltigBis.cljs$core$IFn$_invoke$arity$1(modul))));
} else {
return false;
}
});
/**
 * Macht aus den in sws angegebenen Semesterwochenstunden eine Hash-map mit den
 *   Semesterwochenstunden für alle 7 Semester.
 *   Die keys der Hash-map sind die Strings 'S1' bis 'S7'.
 */
dep.model.modul.sws__GT_alle_semester = (function dep$model$modul$sws__GT_alle_semester(sws){
var sems = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8));
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24128_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24128_SHARP_)].join(''));
}),sems),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24129_SHARP_){
if(cljs.core.truth_((sws.cljs$core$IFn$_invoke$arity$1 ? sws.cljs$core$IFn$_invoke$arity$1(p1__24129_SHARP_) : sws.call(null,p1__24129_SHARP_)))){
return (sws.cljs$core$IFn$_invoke$arity$1 ? sws.cljs$core$IFn$_invoke$arity$1(p1__24129_SHARP_) : sws.call(null,p1__24129_SHARP_));
} else {
return (0);
}
}),sems));
});
/**
 * Liefert das Modul mit der Nummer symbol aus der Liste module.
 */
dep.model.modul.modul_mit_nummer = (function dep$model$modul$modul_mit_nummer(module,symbol){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24130_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__24130_SHARP_),symbol);
}),module));
});
