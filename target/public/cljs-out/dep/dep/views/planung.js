// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.planung');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.model.manipel');
goog.require('dep.model.quartal');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.views.dozentenauslastung');
goog.require('dep.views.lehrveranstaltungen');
/**
 * fuegt allen dozenten die Initialauslastung für ein Geschäftsjahr jahr hinzu.
 */
dep.views.planung.fuege_geschaeftsjahr_hinzu = (function dep$views$planung$fuege_geschaeftsjahr_hinzu(dozenten,jahr){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30771_SHARP_){
return cljs.core.assoc_in(p1__30771_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,jahr], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
}),dozenten);
});
/**
 * legt neues Geschäftsjahr an.
 */
dep.views.planung.neues_geschaeftjahr = (function dep$views$planung$neues_geschaeftjahr(){
var jahre = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jahre], null)));
var neuesJahr = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,jahre) + (1));
var jahre__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(jahre,neuesJahr);
var dozenten = dep.views.planung.fuege_geschaeftsjahr_hinzu(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten], null))),neuesJahr);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jahre,jahre__$1], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten,dozenten], null));
});
/**
 * ermittelt alle Lehrveranstaltungen aus lvn für manipel.
 */
dep.views.planung.lehrveranstaltungen_eines_manipels = (function dep$views$planung$lehrveranstaltungen_eines_manipels(manipel,lvn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (l){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$manipel.cljs$core$IFn$_invoke$arity$1(l),manipel);
}),lvn));
});
/**
 * ermittelt die sich zwischen alt-manipel und neu-manipel geänderten
 *   Semesterquartale.
 */
dep.views.planung.geaenderte_semester_quartale = (function dep$views$planung$geaenderte_semester_quartale(alt_manipel,neu_manipel){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4564__auto__ = (function dep$views$planung$geaenderte_semester_quartale_$_iter__30772(s__30773){
return (new cljs.core.LazySeq(null,(function (){
var s__30773__$1 = s__30773;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30773__$1);
if(temp__5753__auto__){
var s__30773__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30773__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30773__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30775 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30774 = (0);
while(true){
if((i__30774 < size__4563__auto__)){
var vec__30776 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30774);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30776,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30776,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(q,dep.model.manipel.quartal_aus_jsz_fuer_semester(cljs.core.cst$kw$jahrSemesterZuordnung.cljs$core$IFn$_invoke$arity$1(neu_manipel),s))){
cljs.core.chunk_append(b__30775,cljs.core.PersistentArrayMap.createAsIfByAssoc([q,s]));

var G__30782 = (i__30774 + (1));
i__30774 = G__30782;
continue;
} else {
var G__30783 = (i__30774 + (1));
i__30774 = G__30783;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30775),dep$views$planung$geaenderte_semester_quartale_$_iter__30772(cljs.core.chunk_rest(s__30773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30775),null);
}
} else {
var vec__30779 = cljs.core.first(s__30773__$2);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30779,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30779,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(q,dep.model.manipel.quartal_aus_jsz_fuer_semester(cljs.core.cst$kw$jahrSemesterZuordnung.cljs$core$IFn$_invoke$arity$1(neu_manipel),s))){
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([q,s]),dep$views$planung$geaenderte_semester_quartale_$_iter__30772(cljs.core.rest(s__30773__$2)));
} else {
var G__30784 = cljs.core.rest(s__30773__$2);
s__30773__$1 = G__30784;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.cst$kw$jahrSemesterZuordnung.cljs$core$IFn$_invoke$arity$1(alt_manipel));
})());
});
/**
 * In lven-alle werden die Lehrveranstaltungen lven-alt durch die in lven-neu ersetzt.
 */
dep.views.planung.ersetze_lven = (function dep$views$planung$ersetze_lven(lven_alt,lven_neu,lven_alle){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(lven_alt,lven_alle),lven_neu));
});
/**
 * verschiebt die Lehrveranstaltungen lven in neues Quartal auf der Basis einer
 *   Änderung der Quartal-Semester-Zuordnung zwischen von-manipel und nach-manipel.
 */
dep.views.planung.verschiebe_lven = (function dep$views$planung$verschiebe_lven(lven,von_manipel,nach_manipel){
var sq = dep.views.planung.geaenderte_semester_quartale(von_manipel,nach_manipel);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lv){
var semester = (function (){var G__30785 = dep.model.quartal.minus(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(lv),cljs.core.cst$kw$studienbeginn.cljs$core$IFn$_invoke$arity$1(von_manipel));
return (sq.cljs$core$IFn$_invoke$arity$1 ? sq.cljs$core$IFn$_invoke$arity$1(G__30785) : sq.call(null,G__30785));
})();
if(cljs.core.truth_(semester)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(lv,cljs.core.cst$kw$manipel,nach_manipel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quartal,dep.model.quartal.semester__GT_quartal(semester,cljs.core.cst$kw$studienbeginn.cljs$core$IFn$_invoke$arity$1(nach_manipel),cljs.core.cst$kw$jahrSemesterZuordnung.cljs$core$IFn$_invoke$arity$1(nach_manipel))], 0));
} else {
return lv;
}
}),lven);
});
/**
 * Die Lehrveranstaltungen von alt-manipel werden auf das neu-manipel umgestellt.
 */
dep.views.planung.umplane_lven = (function dep$views$planung$umplane_lven(alt_manipel,neu_manipel){
var lven = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lven], null)));
var lven_von_alt_manipel = dep.views.planung.lehrveranstaltungen_eines_manipels(alt_manipel,lven);
var lven_fuer_neu_manipel = dep.views.planung.verschiebe_lven(lven_von_alt_manipel,alt_manipel,neu_manipel);
var lven_gesamt = dep.views.planung.ersetze_lven(lven_von_alt_manipel,lven_fuer_neu_manipel,lven);
var dzntn = dep.views.dozentenauslastung.dozentenstunden_jahr(lven_gesamt,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten], null))),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geschaeftsjahr], null))));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lven,lven_gesamt], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten,dzntn], null));
});
/**
 * Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
 *   Vorherige Planungen dieses Quartals werden überschrieben.
 */
dep.views.planung.plane_quartal = (function dep$views$planung$plane_quartal(){
var quartal = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quartal], null)));
var lvn = dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal(quartal,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$manipels], null))),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$module], null))));
var dzntn = dep.views.dozentenauslastung.dozentenstunden_quartal(lvn,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten], null))),quartal);
var alle_lvn = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30786_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(p1__30786_SHARP_),quartal);
}),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lven], null)))),lvn));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lven,alle_lvn], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten,dzntn], null));
});
/**
 * Komponente für die Anzeige und Bearbeitung der Dozenten.
 */
dep.views.planung.planung = (function dep$views$planung$planung(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.lehrveranstaltungen.lehrveranstaltungen], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.dozentenauslastung.dozentenauslastung], null)], null)], null)], null)], null);
});
