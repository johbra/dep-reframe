// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.model.dozent');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('dep.model.quartal');
goog.require('dep.helpers.helpers');
goog.require('com.rpl.specter');
/**
 * Erzeugt ein Dozent-'Objekt' (hash-map).
 */
dep.model.dozent.__GT_Dozent = (function dep$model$dozent$__GT_Dozent(name,vorname,auslastungen,insMenue,sollStunden){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"vorname","vorname",-451998086),vorname,new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),auslastungen,new cljs.core.Keyword(null,"insMenue","insMenue",723765954),insMenue,new cljs.core.Keyword(null,"sollStunden","sollStunden",-1175543891),sollStunden], null);
});
/**
 * Initialisiert die Auslastungen für dozent in den geschaeftsjahren.
 */
dep.model.dozent.initialisiereAuslastungenIn = (function dep$model$dozent$initialisiereAuslastungenIn(dozent,geschaeftsjahre){
return cljs.core.assoc.call(null,dozent,new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__31447_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__31447_SHARP_],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)]);
}),geschaeftsjahre)));
});
/**
 * Ermittelt die für dozent in geschaeftsjahr und quartal (Nr.) geplanten Stunden.
 */
dep.model.dozent.stunden_in_quartal = (function dep$model$dozent$stunden_in_quartal(dozent,geschaeftsjahr,quartal){
var agj = new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324).cljs$core$IFn$_invoke$arity$1(dozent).call(null,geschaeftsjahr);
if(cljs.core.truth_(agj)){
return agj.call(null,quartal);
} else {
return (0);
}
});
dep.model.dozent.stundenInQ1 = (function dep$model$dozent$stundenInQ1(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal.call(null,dozent,geschaeftsjahr,(1));
});
dep.model.dozent.stundenInQ2 = (function dep$model$dozent$stundenInQ2(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal.call(null,dozent,geschaeftsjahr,(2));
});
dep.model.dozent.stundenInQ3 = (function dep$model$dozent$stundenInQ3(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal.call(null,dozent,geschaeftsjahr,(3));
});
dep.model.dozent.stundenInQ4 = (function dep$model$dozent$stundenInQ4(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal.call(null,dozent,geschaeftsjahr,(0));
});
/**
 * Ermittelt geplante Stunden für dozent im geschaeftsjahr.
 */
dep.model.dozent.stunden_in_geschaeftsjahr = (function dep$model$dozent$stunden_in_geschaeftsjahr(dozent,geschaeftsjahr){
return dep.helpers.helpers.round1.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,(0),new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324).cljs$core$IFn$_invoke$arity$1(dozent).call(null,geschaeftsjahr)));
});
/**
 * Schreibt die stunden für dozent auf das quartal (Quartal keine Nr) gut.
 */
dep.model.dozent.schreiben_stunden_auf_quartal = (function dep$model$dozent$schreiben_stunden_auf_quartal(dozent,stunden,quartal){
var index = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(quartal),(4)))?(0):new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(quartal));
if(cljs.core.truth_(com.rpl.specter.impl.compiled_select_any_STAR_.call(null,(function (){var info__19938__auto__ = dep.model.dozent.pathcache31448;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info31449 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,dep.model.quartal.geschaeftsjahreszahl,new cljs.core.Var(function(){return dep.model.quartal.geschaeftsjahreszahl;},new cljs.core.Symbol("dep.model.quartal","geschaeftsjahreszahl","dep.model.quartal/geschaeftsjahreszahl",1210083364,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dep.model.quartal","dep.model.quartal",1686009362,null),new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null),"src/dep/model/quartal.cljc",27,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quartal","quartal",1173417941,null)], null)),"Liefert das Gesch\u00E4ftsjahr, in dem Quartal liegt.",(cljs.core.truth_(dep.model.quartal.geschaeftsjahreszahl)?dep.model.quartal.geschaeftsjahreszahl.cljs$lang$test:null)])),new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,quartal,new cljs.core.Symbol(null,"quartal","quartal",1173417941,null))], null),cljs.core.list(new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null),new cljs.core.Symbol(null,"quartal","quartal",1173417941,null)))], null)], null),"dep.model.dozent",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quartal","quartal",1173417941,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),cljs.core.list(new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null),new cljs.core.Symbol(null,"quartal","quartal",1173417941,null))], null),new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null),new cljs.core.Symbol(null,"quartal","quartal",1173417941,null)], null));
dep.model.dozent.pathcache31448 = info31449;

return info31449;
})():info__19938__auto__);
var precompiled31450 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled31450.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),dep.model.quartal.geschaeftsjahreszahl.call(null,quartal)], null),dep.model.quartal.geschaeftsjahreszahl,quartal], null));
} else {
return precompiled31450;
}
})(),dozent))){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19938__auto__ = dep.model.dozent.pathcache31451;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info31452 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,dep.model.quartal.geschaeftsjahreszahl,new cljs.core.Var(function(){return dep.model.quartal.geschaeftsjahreszahl;},new cljs.core.Symbol("dep.model.quartal","geschaeftsjahreszahl","dep.model.quartal/geschaeftsjahreszahl",1210083364,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dep.model.quartal","dep.model.quartal",1686009362,null),new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null),"src/dep/model/quartal.cljc",27,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quartal","quartal",1173417941,null)], null)),"Liefert das Gesch\u00E4ftsjahr, in dem Quartal liegt.",(cljs.core.truth_(dep.model.quartal.geschaeftsjahreszahl)?dep.model.quartal.geschaeftsjahreszahl.cljs$lang$test:null)])),new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,quartal,new cljs.core.Symbol(null,"quartal","quartal",1173417941,null))], null),cljs.core.list(new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null),new cljs.core.Symbol(null,"quartal","quartal",1173417941,null))),com.rpl.specter.impl.__GT_LocalSym.call(null,index,new cljs.core.Symbol(null,"index","index",108845612,null))], null)], null),"dep.model.dozent",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quartal","quartal",1173417941,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),cljs.core.list(new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null),new cljs.core.Symbol(null,"quartal","quartal",1173417941,null)),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.Symbol(null,"geschaeftsjahreszahl","geschaeftsjahreszahl",-1646797974,null),new cljs.core.Symbol(null,"quartal","quartal",1173417941,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
dep.model.dozent.pathcache31451 = info31452;

return info31452;
})():info__19938__auto__);
var precompiled31453 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled31453.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),dep.model.quartal.geschaeftsjahreszahl.call(null,quartal),index], null),dep.model.quartal.geschaeftsjahreszahl,quartal,index], null));
} else {
return precompiled31453;
}
})(),dep.helpers.helpers.round1.call(null,stunden),dozent);
} else {
throw (new Error(["Gesch\u00E4ftsjahr existiert nicht: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep.model.quartal.geschaeftsjahreszahl.call(null,quartal))].join('')));
}
});
/**
 * Liefert den Dozenten mit dem Namen string aus der Liste dozenten.
 */
dep.model.dozent.dozent_mit_namen = (function dep$model$dozent$dozent_mit_namen(dozenten,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31454_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31454_SHARP_),string);
}),dozenten));
});

//# sourceMappingURL=dozent.js.map
