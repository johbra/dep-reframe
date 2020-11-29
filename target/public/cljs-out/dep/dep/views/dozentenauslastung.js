// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.dozentenauslastung');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('dep.views.table');
goog.require('dep.model.dozent');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.model.quartal');
/**
 * Berechnet die Anzahl der Unterrichtstunden einer Lehrveranstaltung.
 */
dep.views.dozentenauslastung.lvStunden = (function dep$views$dozentenauslastung$lvStunden(lv){
return (((dep.model.lehrveranstaltung.semesterWochenstunden.call(null,lv) * (10)) * new cljs.core.Keyword(null,"wiederholungsFaktor","wiederholungsFaktor",1064907940).cljs$core$IFn$_invoke$arity$1(lv)) * new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(lv));
});
/**
 * Berechnet die Unterrichtstunden für einen Dozenten namens doz-nam für eine
 *   Liste von Lehrveranstaltungen lven.
 */
dep.views.dozentenauslastung.lvstunden_dozent = (function dep$views$dozentenauslastung$lvstunden_dozent(lven,doz_nam){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (lv){
return dep.views.dozentenauslastung.lvStunden.call(null,lv);
}),cljs.core.filter.call(null,(function (p1__18645_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dozent","dozent",1571095254).cljs$core$IFn$_invoke$arity$1(p1__18645_SHARP_),doz_nam);
}),lven)));
});
/**
 * Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
 *   Lehrveranstaltungen in lvn für das quartal
 */
dep.views.dozentenauslastung.dozentenstunden_quartal = (function dep$views$dozentenauslastung$dozentenstunden_quartal(lvn,dozenten,quartal){
return cljs.core.mapv.call(null,(function (p1__18646_SHARP_){
return dep.model.dozent.schreiben_stunden_auf_quartal.call(null,p1__18646_SHARP_,dep.views.dozentenauslastung.lvstunden_dozent.call(null,cljs.core.filter.call(null,(function (lv){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv),quartal);
}),lvn),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18646_SHARP_)),quartal);
}),dozenten);
});
/**
 * Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
 *   Lehrveranstaltungen in lvn für ein Geschäftsjahr
 */
dep.views.dozentenauslastung.dozentenstunden_jahr = (function dep$views$dozentenauslastung$dozentenstunden_jahr(lvn,dozenten,jahr){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function dep$views$dozentenauslastung$dozentenstunden_jahr_$_iter__18648(s__18649){
return (new cljs.core.LazySeq(null,(function (){
var s__18649__$1 = s__18649;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18649__$1);
if(temp__5735__auto__){
var s__18649__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18649__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18649__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18651 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18650 = (0);
while(true){
if((i__18650 < size__4528__auto__)){
var d = cljs.core._nth.call(null,c__4527__auto__,i__18650);
cljs.core.chunk_append.call(null,b__18651,cljs.core.assoc_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),jahr], null),cljs.core.mapv.call(null,((function (i__18650,d,c__4527__auto__,size__4528__auto__,b__18651,s__18649__$2,temp__5735__auto__){
return (function (p1__18647_SHARP_){
return dep.views.dozentenauslastung.lvstunden_dozent.call(null,cljs.core.filter.call(null,((function (i__18650,d,c__4527__auto__,size__4528__auto__,b__18651,s__18649__$2,temp__5735__auto__){
return (function (lv){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv),p1__18647_SHARP_);
});})(i__18650,d,c__4527__auto__,size__4528__auto__,b__18651,s__18649__$2,temp__5735__auto__))
,lvn),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
});})(i__18650,d,c__4527__auto__,size__4528__auto__,b__18651,s__18649__$2,temp__5735__auto__))
,dep.model.quartal.quartale_fuer_jahr.call(null,jahr))));

var G__18652 = (i__18650 + (1));
i__18650 = G__18652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18651),dep$views$dozentenauslastung$dozentenstunden_jahr_$_iter__18648.call(null,cljs.core.chunk_rest.call(null,s__18649__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18651),null);
}
} else {
var d = cljs.core.first.call(null,s__18649__$2);
return cljs.core.cons.call(null,cljs.core.assoc_in.call(null,d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),jahr], null),cljs.core.mapv.call(null,((function (d,s__18649__$2,temp__5735__auto__){
return (function (p1__18647_SHARP_){
return dep.views.dozentenauslastung.lvstunden_dozent.call(null,cljs.core.filter.call(null,(function (lv){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv),p1__18647_SHARP_);
}),lvn),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
});})(d,s__18649__$2,temp__5735__auto__))
,dep.model.quartal.quartale_fuer_jahr.call(null,jahr))),dep$views$dozentenauslastung$dozentenstunden_jahr_$_iter__18648.call(null,cljs.core.rest.call(null,s__18649__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,dozenten);
})());
});
/**
 * Ermittelt alle Lehrveranstaltungen des aktuellen Geschäftsjahrs
 */
dep.views.dozentenauslastung.lven_fuer_aktuelles_geschaeftsjahr = (function dep$views$dozentenauslastung$lven_fuer_aktuelles_geschaeftsjahr(lvn,jahr){
var quartale = dep.model.quartal.quartale_fuer_jahr.call(null,jahr);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (q){
return cljs.core.filter.call(null,(function (p1__18653_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(p1__18653_SHARP_),q);
}),lvn);
}),quartale));
});
/**
 * Nach Änderungen an der Lv-Planung wird die Dozentenauslastung neu berechnet.
 */
dep.views.dozentenauslastung.aktualisiere_dozentenauslastung = (function dep$views$dozentenauslastung$aktualisiere_dozentenauslastung(lven,dozenten,geschaeftsjahr){
var dzntn = dep.views.dozentenauslastung.dozentenstunden_jahr.call(null,lven,dozenten,geschaeftsjahr);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn], null));
});
/**
 * Wandelt die dozenten für die Darstellung ihrer Auslastung als Tabelle um.
 */
dep.views.dozentenauslastung.doz_auslstngn__GT_table = (function dep$views$dozentenauslastung$doz_auslstngn__GT_table(dozenten){
var geschaeftsjahr = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286)], null)));
return cljs.core.mapv.call(null,(function (p1__18654_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Q4","Q4",77117001),new cljs.core.Keyword(null,"Q1","Q1",1497900173),new cljs.core.Keyword(null,"Q2","Q2",997554436),new cljs.core.Keyword(null,"Q3","Q3",-2046925906),new cljs.core.Keyword(null,"Summe","Summe",1283013789)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18654_SHARP_),dep.model.dozent.stundenInQ4.call(null,p1__18654_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ1.call(null,p1__18654_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ2.call(null,p1__18654_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ3.call(null,p1__18654_SHARP_,geschaeftsjahr),dep.model.dozent.stunden_in_geschaeftsjahr.call(null,p1__18654_SHARP_,geschaeftsjahr)]);
}),dozenten);
});
dep.views.dozentenauslastung.td_render_fn = (function dep$views$dozentenauslastung$td_render_fn(row,col_id){
return cljs.core.get.call(null,row,col_id);
});
/**
 * Komponente für die Anzeige der Dozentenauslastung.
 */
dep.views.dozentenauslastung.dozentenauslastung = (function dep$views$dozentenauslastung$dozentenauslastung(){
var dozenten = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null)));
var geschaeftsjahr = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286)], null)));
var lven = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909)], null)));
var _ = dep.views.dozentenauslastung.aktualisiere_dozentenauslastung.call(null,lven,dozenten,geschaeftsjahr);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.dozentenauslastung.doz_auslstngn__GT_table.call(null,dozenten),"Dozentenauslastung",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Q4","Q4",77117001),new cljs.core.Keyword(null,"Q1","Q1",1497900173),new cljs.core.Keyword(null,"Q2","Q2",997554436),new cljs.core.Keyword(null,"Q3","Q3",-2046925906),new cljs.core.Keyword(null,"Summe","Summe",1283013789)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Q4","Q4",77117001),new cljs.core.Keyword(null,"Q1","Q1",1497900173),new cljs.core.Keyword(null,"Q2","Q2",997554436),new cljs.core.Keyword(null,"Q3","Q3",-2046925906),new cljs.core.Keyword(null,"Summe","Summe",1283013789)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),false], null)], null),dep.views.dozentenauslastung.td_render_fn], null);
});

//# sourceMappingURL=dozentenauslastung.js.map
