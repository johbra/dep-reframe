// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.dozentenauslastung');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('dep.views.table');
goog.require('dep.model.dozent');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.model.quartal');
/**
 * Berechnet die Anzahl der Unterrichtstunden einer Lehrveranstaltung.
 */
dep.views.dozentenauslastung.lvStunden = (function dep$views$dozentenauslastung$lvStunden(lv){
return (((dep.model.lehrveranstaltung.semesterWochenstunden(lv) * (10)) * cljs.core.cst$kw$wiederholungsFaktor.cljs$core$IFn$_invoke$arity$1(lv)) * cljs.core.cst$kw$anzahlGruppen.cljs$core$IFn$_invoke$arity$1(lv));
});
/**
 * Berechnet die Unterrichtstunden für einen Dozenten namens doz-nam für eine
 *   Liste von Lehrveranstaltungen lven.
 */
dep.views.dozentenauslastung.lvstunden_dozent = (function dep$views$dozentenauslastung$lvstunden_dozent(lven,doz_nam){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (lv){
return dep.views.dozentenauslastung.lvStunden(lv);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30759_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dozent.cljs$core$IFn$_invoke$arity$1(p1__30759_SHARP_),doz_nam);
}),lven)));
});
/**
 * Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
 *   Lehrveranstaltungen in lvn für das quartal
 */
dep.views.dozentenauslastung.dozentenstunden_quartal = (function dep$views$dozentenauslastung$dozentenstunden_quartal(lvn,dozenten,quartal){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30760_SHARP_){
return dep.model.dozent.schreiben_stunden_auf_quartal(p1__30760_SHARP_,dep.views.dozentenauslastung.lvstunden_dozent(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (lv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(lv),quartal);
}),lvn),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30760_SHARP_)),quartal);
}),dozenten);
});
/**
 * Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
 *   Lehrveranstaltungen in lvn für ein Geschäftsjahr
 */
dep.views.dozentenauslastung.dozentenstunden_jahr = (function dep$views$dozentenauslastung$dozentenstunden_jahr(lvn,dozenten,jahr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4564__auto__ = (function dep$views$dozentenauslastung$dozentenstunden_jahr_$_iter__30762(s__30763){
return (new cljs.core.LazySeq(null,(function (){
var s__30763__$1 = s__30763;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30763__$1);
if(temp__5753__auto__){
var s__30763__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30763__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30763__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30765 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30764 = (0);
while(true){
if((i__30764 < size__4563__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30764);
cljs.core.chunk_append(b__30765,cljs.core.assoc_in(d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,jahr], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__30764,d,c__4562__auto__,size__4563__auto__,b__30765,s__30763__$2,temp__5753__auto__){
return (function (p1__30761_SHARP_){
return dep.views.dozentenauslastung.lvstunden_dozent(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__30764,d,c__4562__auto__,size__4563__auto__,b__30765,s__30763__$2,temp__5753__auto__){
return (function (lv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(lv),p1__30761_SHARP_);
});})(i__30764,d,c__4562__auto__,size__4563__auto__,b__30765,s__30763__$2,temp__5753__auto__))
,lvn),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(d));
});})(i__30764,d,c__4562__auto__,size__4563__auto__,b__30765,s__30763__$2,temp__5753__auto__))
,dep.model.quartal.quartale_fuer_jahr(jahr))));

var G__30766 = (i__30764 + (1));
i__30764 = G__30766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30765),dep$views$dozentenauslastung$dozentenstunden_jahr_$_iter__30762(cljs.core.chunk_rest(s__30763__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30765),null);
}
} else {
var d = cljs.core.first(s__30763__$2);
return cljs.core.cons(cljs.core.assoc_in(d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$auslastungen,jahr], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (d,s__30763__$2,temp__5753__auto__){
return (function (p1__30761_SHARP_){
return dep.views.dozentenauslastung.lvstunden_dozent(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (lv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(lv),p1__30761_SHARP_);
}),lvn),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(d));
});})(d,s__30763__$2,temp__5753__auto__))
,dep.model.quartal.quartale_fuer_jahr(jahr))),dep$views$dozentenauslastung$dozentenstunden_jahr_$_iter__30762(cljs.core.rest(s__30763__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(dozenten);
})());
});
/**
 * Ermittelt alle Lehrveranstaltungen des aktuellen Geschäftsjahrs
 */
dep.views.dozentenauslastung.lven_fuer_aktuelles_geschaeftsjahr = (function dep$views$dozentenauslastung$lven_fuer_aktuelles_geschaeftsjahr(lvn,jahr){
var quartale = dep.model.quartal.quartale_fuer_jahr(jahr);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (q){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30767_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(p1__30767_SHARP_),q);
}),lvn);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quartale], 0)));
});
/**
 * Nach Änderungen an der Lv-Planung wird die Dozentenauslastung neu berechnet.
 */
dep.views.dozentenauslastung.aktualisiere_dozentenauslastung = (function dep$views$dozentenauslastung$aktualisiere_dozentenauslastung(lven,dozenten,geschaeftsjahr){
var dzntn = dep.views.dozentenauslastung.dozentenstunden_jahr(lven,dozenten,geschaeftsjahr);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten,dzntn], null));
});
/**
 * Wandelt die dozenten für die Darstellung ihrer Auslastung als Tabelle um.
 */
dep.views.dozentenauslastung.doz_auslstngn__GT_table = (function dep$views$dozentenauslastung$doz_auslstngn__GT_table(dozenten){
var geschaeftsjahr = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geschaeftsjahr], null)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30768_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$Dozent,cljs.core.cst$kw$Q4,cljs.core.cst$kw$Q1,cljs.core.cst$kw$Q2,cljs.core.cst$kw$Q3,cljs.core.cst$kw$Summe],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30768_SHARP_),dep.model.dozent.stundenInQ4(p1__30768_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ1(p1__30768_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ2(p1__30768_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ3(p1__30768_SHARP_,geschaeftsjahr),dep.model.dozent.stunden_in_geschaeftsjahr(p1__30768_SHARP_,geschaeftsjahr)]);
}),dozenten);
});
dep.views.dozentenauslastung.td_render_fn = (function dep$views$dozentenauslastung$td_render_fn(row,col_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,col_id);
});
/**
 * Komponente für die Anzeige der Dozentenauslastung.
 */
dep.views.dozentenauslastung.dozentenauslastung = (function dep$views$dozentenauslastung$dozentenauslastung(){
var dozenten = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten], null)));
var geschaeftsjahr = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geschaeftsjahr], null)));
var lven = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lven], null)));
var _ = dep.views.dozentenauslastung.aktualisiere_dozentenauslastung(lven,dozenten,geschaeftsjahr);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.dozentenauslastung.doz_auslstngn__GT_table(dozenten),"Dozentenauslastung",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Dozent,cljs.core.cst$kw$Q4,cljs.core.cst$kw$Q1,cljs.core.cst$kw$Q2,cljs.core.cst$kw$Q3,cljs.core.cst$kw$Summe], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Dozent,cljs.core.cst$kw$Q4,cljs.core.cst$kw$Q1,cljs.core.cst$kw$Q2,cljs.core.cst$kw$Q3,cljs.core.cst$kw$Summe], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Dozent,false], null)], null),dep.views.dozentenauslastung.td_render_fn], null);
});
