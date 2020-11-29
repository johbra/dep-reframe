// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.lehrveranstaltungen');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.views.table');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.data_modifiers');
/**
 * Erzeugt eine neue Lehrveranstaltung aus den in aenderungen gegebenen Daten.
 */
dep.views.lehrveranstaltungen.aender_lv = (function dep$views$lehrveranstaltungen$aender_lv(form_state){
var form = cljs.core.deref.call(null,form_state);
var alte_lv = new cljs.core.Keyword(null,"Lv","Lv",525652870).cljs$core$IFn$_invoke$arity$1(form);
var neue_lv = cljs.core.assoc.call(null,alte_lv,new cljs.core.Keyword(null,"dozent","dozent",1571095254),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"wiederholungsFaktor","wiederholungsFaktor",1064907940),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610).cljs$core$IFn$_invoke$arity$1(form));
return dep.helpers.data_modifiers.replace_dataset.call(null,new cljs.core.Keyword(null,"lven","lven",294854909),new cljs.core.Keyword(null,"id","id",-1388402092),neue_lv);
});
dep.views.lehrveranstaltungen.dupliziere_lv = (function dep$views$lehrveranstaltungen$dupliziere_lv(form_state){
var neue_lv = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"Lv","Lv",525652870).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null));
return dep.helpers.data_modifiers.duplicate_dataset.call(null,new cljs.core.Keyword(null,"lven","lven",294854909),new cljs.core.Keyword(null,"id","id",-1388402092),neue_lv);
});
/**
 * Wandelt die Lehrveranstaltungen (lvn) für die Darstellung als Tabelle um. 
 */
dep.views.lehrveranstaltungen.lvn__GT_table = (function dep$views$lehrveranstaltungen$lvn__GT_table(lvn){
return cljs.core.mapv.call(null,(function (p1__29688_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Modul","Modul",-499019270),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432),new cljs.core.Keyword(null,"SWS","SWS",1550316894),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Id","Id",-2148601),new cljs.core.Keyword(null,"Lv","Lv",525652870)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modul","modul",-1113395939).cljs$core$IFn$_invoke$arity$1(p1__29688_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(p1__29688_SHARP_)),dep.model.lehrveranstaltung.semester.call(null,p1__29688_SHARP_),dep.model.lehrveranstaltung.semesterWochenstunden.call(null,p1__29688_SHARP_),new cljs.core.Keyword(null,"wiederholungsFaktor","wiederholungsFaktor",1064907940).cljs$core$IFn$_invoke$arity$1(p1__29688_SHARP_),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(p1__29688_SHARP_),new cljs.core.Keyword(null,"dozent","dozent",1571095254).cljs$core$IFn$_invoke$arity$1(p1__29688_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29688_SHARP_),p1__29688_SHARP_]);
}),lvn);
});
dep.views.lehrveranstaltungen.lv_form_felder = (function dep$views$lehrveranstaltungen$lv_form_felder(form_state){
var dozenten = cljs.core.mapv.call(null,(function (p1__29689_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__29689_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__29689_SHARP_)]);
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null))));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Lehrveranstaltung",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),dep.helpers.form_helpers.rc_input_box.call(null,"Modul",new cljs.core.Keyword(null,"Modul","Modul",-499019270).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Modul","Modul",-499019270),null,cljs.core.identity,true,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Manipel",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),null,cljs.core.symbol,true,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Semester",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Smstr","Smstr",1193714432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432),null,cljs.core.identity,true,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"SWS",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"SWS","SWS",1550316894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"SWS","SWS",1550316894),null,cljs.core.identity,true,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Wiedrhlngsfktr",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027),/^(\d+)$/,parseInt,false,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Gruppen",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610),/^(\d+)$/,parseInt,false,form_state),dep.helpers.form_helpers.rc_dropdown.call(null,"Dozent",new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),dozenten,false,form_state)], null);
});
dep.views.lehrveranstaltungen.buttons = (function dep$views$lehrveranstaltungen$buttons(form_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"duplizieren",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.lehrveranstaltungen.dupliziere_lv.call(null,form_state);
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"speichern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.lehrveranstaltungen.aender_lv.call(null,form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"entfernen",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.helpers.data_modifiers.remove_dataset.call(null,form_state,new cljs.core.Keyword(null,"lven","lven",294854909),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Id","Id",-2148601));
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Lehrveranstaltungen eines
 *   Quartals.
 */
dep.views.lehrveranstaltungen.lehrveranstaltungen = (function dep$views$lehrveranstaltungen$lehrveranstaltungen(){
var lven = cljs.core.filter.call(null,(function (p1__29690_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(p1__29690_SHARP_),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quartal","quartal",-467113586)], null))));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909)], null))));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.lehrveranstaltungen.lvn__GT_table.call(null,lven),"Lehrveranstaltungen",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Modul","Modul",-499019270),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432),new cljs.core.Keyword(null,"SWS","SWS",1550316894),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Modul","Modul",-499019270),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432),new cljs.core.Keyword(null,"SWS","SWS",1550316894),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),dep.views.lehrveranstaltungen.lv_form_felder,dep.views.lehrveranstaltungen.buttons)], null);
});

//# sourceMappingURL=lehrveranstaltungen.js.map
