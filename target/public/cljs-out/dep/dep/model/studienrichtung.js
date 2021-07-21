// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.model.studienrichtung');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Erzeugt ein Studienrichtungs-'Objekt' (hash-map).
 */
dep.model.studienrichtung.__GT_Studienrichtung = (function dep$model$studienrichtung$__GT_Studienrichtung(name){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name], null);
});
/**
 * Liefert die Studienrichtung mit dem Namen string aus der Liste Studienrichtungen.
 */
dep.model.studienrichtung.studienrichtung_mit_namen = (function dep$model$studienrichtung$studienrichtung_mit_namen(studienrichtungen,string){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31380_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__31380_SHARP_),string);
}),studienrichtungen));
});
