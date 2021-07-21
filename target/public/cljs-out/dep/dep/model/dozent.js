// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.model.dozent');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dep.model.quartal');
goog.require('dep.helpers.helpers');
goog.require('com.rpl.specter');
/**
 * Erzeugt ein Dozent-'Objekt' (hash-map).
 */
dep.model.dozent.__GT_Dozent = (function dep$model$dozent$__GT_Dozent(name,vorname,auslastungen,insMenue,sollStunden){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$vorname,vorname,cljs.core.cst$kw$auslastungen,auslastungen,cljs.core.cst$kw$insMenue,insMenue,cljs.core.cst$kw$sollStunden,sollStunden], null);
});
/**
 * Initialisiert die Auslastungen für dozent in den geschaeftsjahren.
 */
dep.model.dozent.initialisiereAuslastungenIn = (function dep$model$dozent$initialisiereAuslastungenIn(dozent,geschaeftsjahre){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dozent,cljs.core.cst$kw$auslastungen,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30745_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__30745_SHARP_],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)]);
}),geschaeftsjahre)));
});
/**
 * Ermittelt die für dozent in geschaeftsjahr und quartal (Nr.) geplanten Stunden.
 */
dep.model.dozent.stunden_in_quartal = (function dep$model$dozent$stunden_in_quartal(dozent,geschaeftsjahr,quartal){
var agj = (function (){var fexpr__30746 = cljs.core.cst$kw$auslastungen.cljs$core$IFn$_invoke$arity$1(dozent);
return (fexpr__30746.cljs$core$IFn$_invoke$arity$1 ? fexpr__30746.cljs$core$IFn$_invoke$arity$1(geschaeftsjahr) : fexpr__30746.call(null,geschaeftsjahr));
})();
if(cljs.core.truth_(agj)){
return (agj.cljs$core$IFn$_invoke$arity$1 ? agj.cljs$core$IFn$_invoke$arity$1(quartal) : agj.call(null,quartal));
} else {
return (0);
}
});
dep.model.dozent.stundenInQ1 = (function dep$model$dozent$stundenInQ1(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal(dozent,geschaeftsjahr,(1));
});
dep.model.dozent.stundenInQ2 = (function dep$model$dozent$stundenInQ2(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal(dozent,geschaeftsjahr,(2));
});
dep.model.dozent.stundenInQ3 = (function dep$model$dozent$stundenInQ3(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal(dozent,geschaeftsjahr,(3));
});
dep.model.dozent.stundenInQ4 = (function dep$model$dozent$stundenInQ4(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal(dozent,geschaeftsjahr,(0));
});
/**
 * Ermittelt geplante Stunden für dozent im geschaeftsjahr.
 */
dep.model.dozent.stunden_in_geschaeftsjahr = (function dep$model$dozent$stunden_in_geschaeftsjahr(dozent,geschaeftsjahr){
return dep.helpers.helpers.round1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var fexpr__30747 = cljs.core.cst$kw$auslastungen.cljs$core$IFn$_invoke$arity$1(dozent);
return (fexpr__30747.cljs$core$IFn$_invoke$arity$1 ? fexpr__30747.cljs$core$IFn$_invoke$arity$1(geschaeftsjahr) : fexpr__30747.call(null,geschaeftsjahr));
})()));
});
/**
 * Schreibt die stunden für dozent auf das quartal (Quartal keine Nr) gut.
 */
dep.model.dozent.schreiben_stunden_auf_quartal = (function dep$model$dozent$schreiben_stunden_auf_quartal(dozent,stunden,quartal){
var index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(quartal),(4)))?(0):cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(quartal));
if(cljs.core.truth_(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2((function (){var info__17638__auto__ = dep.model.dozent.pathcache30748;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info30749 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(dep.model.quartal.geschaeftsjahreszahl,new cljs.core.Var(function(){return dep.model.quartal.geschaeftsjahreszahl;},cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dep$model$quartal,cljs.core.cst$sym$geschaeftsjahreszahl,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/src/dep/model/quartal.cljc",27,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$quartal], null)),"Liefert das Gesch\u00E4ftsjahr, in dem Quartal liegt.",(cljs.core.truth_(dep.model.quartal.geschaeftsjahreszahl)?dep.model.quartal.geschaeftsjahreszahl.cljs$lang$test:null)])),cljs.core.cst$sym$geschaeftsjahreszahl),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(quartal,cljs.core.cst$sym$quartal)], null),cljs.core.list(cljs.core.cst$sym$geschaeftsjahreszahl,cljs.core.cst$sym$quartal))], null)], null),"dep.model.dozent",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$quartal], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,cljs.core.list(cljs.core.cst$sym$geschaeftsjahreszahl,cljs.core.cst$sym$quartal)], null),cljs.core.cst$sym$geschaeftsjahreszahl,cljs.core.cst$sym$quartal], null));
dep.model.dozent.pathcache30748 = info30749;

return info30749;
})():info__17638__auto__);
var precompiled30750 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__30751 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,dep.model.quartal.geschaeftsjahreszahl(quartal)], null),dep.model.quartal.geschaeftsjahreszahl,quartal], null);
return (precompiled30750.cljs$core$IFn$_invoke$arity$1 ? precompiled30750.cljs$core$IFn$_invoke$arity$1(G__30751) : precompiled30750.call(null,G__30751));
} else {
return precompiled30750;
}
})(),dozent))){
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__17638__auto__ = dep.model.dozent.pathcache30752;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info30753 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(dep.model.quartal.geschaeftsjahreszahl,new cljs.core.Var(function(){return dep.model.quartal.geschaeftsjahreszahl;},cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dep$model$quartal,cljs.core.cst$sym$geschaeftsjahreszahl,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/src/dep/model/quartal.cljc",27,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$quartal], null)),"Liefert das Gesch\u00E4ftsjahr, in dem Quartal liegt.",(cljs.core.truth_(dep.model.quartal.geschaeftsjahreszahl)?dep.model.quartal.geschaeftsjahreszahl.cljs$lang$test:null)])),cljs.core.cst$sym$geschaeftsjahreszahl),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(quartal,cljs.core.cst$sym$quartal)], null),cljs.core.list(cljs.core.cst$sym$geschaeftsjahreszahl,cljs.core.cst$sym$quartal)),com.rpl.specter.impl.__GT_LocalSym(index,cljs.core.cst$sym$index)], null)], null),"dep.model.dozent",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$quartal,cljs.core.cst$sym$index], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,cljs.core.list(cljs.core.cst$sym$geschaeftsjahreszahl,cljs.core.cst$sym$quartal),cljs.core.cst$sym$index], null),cljs.core.cst$sym$geschaeftsjahreszahl,cljs.core.cst$sym$quartal,cljs.core.cst$sym$index], null));
dep.model.dozent.pathcache30752 = info30753;

return info30753;
})():info__17638__auto__);
var precompiled30754 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__30755 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,dep.model.quartal.geschaeftsjahreszahl(quartal),index], null),dep.model.quartal.geschaeftsjahreszahl,quartal,index], null);
return (precompiled30754.cljs$core$IFn$_invoke$arity$1 ? precompiled30754.cljs$core$IFn$_invoke$arity$1(G__30755) : precompiled30754.call(null,G__30755));
} else {
return precompiled30754;
}
})(),dep.helpers.helpers.round1(stunden),dozent);
} else {
throw (new Error(["Gesch\u00E4ftsjahr existiert nicht: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep.model.quartal.geschaeftsjahreszahl(quartal))].join('')));
}
});
/**
 * Liefert den Dozenten mit dem Namen string aus der Liste dozenten.
 */
dep.model.dozent.dozent_mit_namen = (function dep$model$dozent$dozent_mit_namen(dozenten,string){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30756_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30756_SHARP_),string);
}),dozenten));
});
