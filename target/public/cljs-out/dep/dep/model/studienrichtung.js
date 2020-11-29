// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.model.studienrichtung');
goog.require('cljs.core');
/**
 * Erzeugt ein Studienrichtungs-'Objekt' (hash-map).
 */
dep.model.studienrichtung.__GT_Studienrichtung = (function dep$model$studienrichtung$__GT_Studienrichtung(name){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});
/**
 * Liefert die Studienrichtung mit dem Namen string aus der Liste Studienrichtungen.
 */
dep.model.studienrichtung.studienrichtung_mit_namen = (function dep$model$studienrichtung$studienrichtung_mit_namen(studienrichtungen,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__21335_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__21335_SHARP_),string);
}),studienrichtungen));
});

//# sourceMappingURL=studienrichtung.js.map
