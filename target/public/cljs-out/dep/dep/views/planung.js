// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.planung');
goog.require('cljs.core');
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
return cljs.core.mapv.call(null,(function (p1__18406_SHARP_){
return cljs.core.assoc_in.call(null,p1__18406_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),jahr], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
}),dozenten);
});
/**
 * legt neues Geschäftsjahr an.
 */
dep.views.planung.neues_geschaeftjahr = (function dep$views$planung$neues_geschaeftjahr(){
var jahre = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jahre","jahre",2053865477)], null)));
var neuesJahr = (cljs.core.apply.call(null,cljs.core.max,jahre) + (1));
var jahre__$1 = cljs.core.conj.call(null,jahre,neuesJahr);
var dozenten = dep.views.planung.fuege_geschaeftsjahr_hinzu.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null))),neuesJahr);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jahre","jahre",2053865477),jahre__$1], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dozenten], null));
});
/**
 * ermittelt alle Lehrveranstaltungen aus lvn für manipel.
 */
dep.views.planung.lehrveranstaltungen_eines_manipels = (function dep$views$planung$lehrveranstaltungen_eines_manipels(manipel,lvn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (l){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(l),manipel);
}),lvn));
});
/**
 * ermittelt die sich zwischen alt-manipel und neu-manipel geänderten
 *   Semesterquartale.
 */
dep.views.planung.geaenderte_semester_quartale = (function dep$views$planung$geaenderte_semester_quartale(alt_manipel,neu_manipel){
return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4529__auto__ = (function dep$views$planung$geaenderte_semester_quartale_$_iter__18407(s__18408){
return (new cljs.core.LazySeq(null,(function (){
var s__18408__$1 = s__18408;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18408__$1);
if(temp__5735__auto__){
var s__18408__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18408__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18408__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18410 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18409 = (0);
while(true){
if((i__18409 < size__4528__auto__)){
var vec__18411 = cljs.core._nth.call(null,c__4527__auto__,i__18409);
var q = cljs.core.nth.call(null,vec__18411,(0),null);
var s = cljs.core.nth.call(null,vec__18411,(1),null);
if(cljs.core.not_EQ_.call(null,q,dep.model.manipel.quartal_aus_jsz_fuer_semester.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(neu_manipel),s))){
cljs.core.chunk_append.call(null,b__18410,cljs.core.PersistentArrayMap.createAsIfByAssoc([q,s]));

var G__18417 = (i__18409 + (1));
i__18409 = G__18417;
continue;
} else {
var G__18418 = (i__18409 + (1));
i__18409 = G__18418;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18410),dep$views$planung$geaenderte_semester_quartale_$_iter__18407.call(null,cljs.core.chunk_rest.call(null,s__18408__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18410),null);
}
} else {
var vec__18414 = cljs.core.first.call(null,s__18408__$2);
var q = cljs.core.nth.call(null,vec__18414,(0),null);
var s = cljs.core.nth.call(null,vec__18414,(1),null);
if(cljs.core.not_EQ_.call(null,q,dep.model.manipel.quartal_aus_jsz_fuer_semester.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(neu_manipel),s))){
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([q,s]),dep$views$planung$geaenderte_semester_quartale_$_iter__18407.call(null,cljs.core.rest.call(null,s__18408__$2)));
} else {
var G__18419 = cljs.core.rest.call(null,s__18408__$2);
s__18408__$1 = G__18419;
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
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(alt_manipel));
})());
});
/**
 * In lven-alle werden die Lehrveranstaltungen lven-alt durch die in lven-neu ersetzt.
 */
dep.views.planung.ersetze_lven = (function dep$views$planung$ersetze_lven(lven_alt,lven_neu,lven_alle){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.remove.call(null,lven_alt,lven_alle),lven_neu));
});
/**
 * verschiebt die Lehrveranstaltungen lven in neues Quartal auf der Basis einer
 *   Änderung der Quartal-Semester-Zuordnung zwischen von-manipel und nach-manipel.
 */
dep.views.planung.verschiebe_lven = (function dep$views$planung$verschiebe_lven(lven,von_manipel,nach_manipel){
var sq = dep.views.planung.geaenderte_semester_quartale.call(null,von_manipel,nach_manipel);
return cljs.core.mapv.call(null,(function (lv){
var semester = sq.call(null,dep.model.quartal.minus.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(von_manipel)));
if(cljs.core.truth_(semester)){
return cljs.core.assoc.call(null,lv,new cljs.core.Keyword(null,"manipel","manipel",1067015228),nach_manipel,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.semester__GT_quartal.call(null,semester,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(nach_manipel),new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(nach_manipel)));
} else {
return lv;
}
}),lven);
});
/**
 * Die Lehrveranstaltungen von alt-manipel werden auf das neu-manipel umgestellt.
 */
dep.views.planung.umplane_lven = (function dep$views$planung$umplane_lven(alt_manipel,neu_manipel){
var lven = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909)], null)));
var lven_von_alt_manipel = dep.views.planung.lehrveranstaltungen_eines_manipels.call(null,alt_manipel,lven);
var lven_fuer_neu_manipel = dep.views.planung.verschiebe_lven.call(null,lven_von_alt_manipel,alt_manipel,neu_manipel);
var lven_gesamt = dep.views.planung.ersetze_lven.call(null,lven_von_alt_manipel,lven_fuer_neu_manipel,lven);
var dzntn = dep.views.dozentenauslastung.dozentenstunden_jahr.call(null,lven_gesamt,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286)], null))));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909),lven_gesamt], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn], null));
});
/**
 * Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
 *   Vorherige Planungen dieses Quartals werden überschrieben.
 */
dep.views.planung.plane_quartal = (function dep$views$planung$plane_quartal(){
var quartal = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quartal","quartal",-467113586)], null)));
var lvn = dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal.call(null,quartal,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manipels","manipels",626202456)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"module","module",1424618191)], null))));
var dzntn = dep.views.dozentenauslastung.dozentenstunden_quartal.call(null,lvn,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null))),quartal);
var alle_lvn = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.remove.call(null,(function (p1__18420_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(p1__18420_SHARP_),quartal);
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909)], null)))),lvn));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909),alle_lvn], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn], null));
});
/**
 * Komponente für die Anzeige und Bearbeitung der Dozenten.
 */
dep.views.planung.planung = (function dep$views$planung$planung(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"100px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.lehrveranstaltungen.lehrveranstaltungen], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.dozentenauslastung.dozentenauslastung], null)], null)], null)], null)], null);
});

//# sourceMappingURL=planung.js.map
