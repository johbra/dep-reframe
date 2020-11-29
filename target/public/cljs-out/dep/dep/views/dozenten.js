// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.dozenten');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.model.dozent');
goog.require('dep.views.table');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.data_modifiers');
dep.views.dozenten.ersetze_dozent = (function dep$views$dozenten$ersetze_dozent(form_state){
var form = cljs.core.deref.call(null,form_state);
var neuer_dozent = dep.model.dozent.__GT_Dozent.call(null,new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"Vorname","Vorname",327484912).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975).cljs$core$IFn$_invoke$arity$1(form)),new cljs.core.Keyword(null,"insMenue","insMenue",723765954).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867).cljs$core$IFn$_invoke$arity$1(form));
return dep.helpers.data_modifiers.replace_dataset.call(null,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),new cljs.core.Keyword(null,"name","name",1843675177),neuer_dozent);
});
/**
 * Wandelt die dozenten für die Darstellung als Tabelle um.
 */
dep.views.dozenten.dozenten__GT_table = (function dep$views$dozenten$dozenten__GT_table(dozenten){
return cljs.core.mapv.call(null,(function (p1__27343_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"insMenue","insMenue",723765954),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27343_SHARP_),new cljs.core.Keyword(null,"vorname","vorname",-451998086).cljs$core$IFn$_invoke$arity$1(p1__27343_SHARP_),new cljs.core.Keyword(null,"insMenue","insMenue",723765954).cljs$core$IFn$_invoke$arity$1(p1__27343_SHARP_),new cljs.core.Keyword(null,"sollStunden","sollStunden",-1175543891).cljs$core$IFn$_invoke$arity$1(p1__27343_SHARP_),p1__27343_SHARP_]);
}),dozenten);
});
dep.views.dozenten.dozent_form_felder = (function dep$views$dozenten$dozent_form_felder(form_state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Dozent",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),dep.helpers.form_helpers.rc_input_box.call(null,"Name",new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Name","Name",-131211369),null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Vorname",new cljs.core.Keyword(null,"Vorname","Vorname",327484912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),null,cljs.core.identity,true,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Stundensoll",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867),/^(\d+)$/,parseInt,false,form_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.helpers.form_helpers.rc_check_box,"ins Men\u00FC",new cljs.core.Keyword(null,"insMenue","insMenue",723765954),form_state], null)], null);
});
dep.views.dozenten.buttons = (function dep$views$dozenten$buttons(form_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"speichern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.dozenten.ersetze_dozent.call(null,form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"entfernen",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.helpers.data_modifiers.remove_dataset.call(null,form_state,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Name","Name",-131211369));
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Dozenten.
 */
dep.views.dozenten.dozenten = (function dep$views$dozenten$dozenten(){
var dozenten = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.dozenten.dozenten__GT_table.call(null,dozenten),"Dozenten",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867),new cljs.core.Keyword(null,"insMenue","insMenue",723765954)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867),new cljs.core.Keyword(null,"insMenue","insMenue",723765954)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.dozenten.dozent_form_felder,dep.views.dozenten.buttons)], null);
});

//# sourceMappingURL=dozenten.js.map
