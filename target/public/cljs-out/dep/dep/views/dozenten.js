// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.dozenten');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.model.dozent');
goog.require('dep.views.table');
goog.require('dep.views.demo');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.data_modifiers');
dep.views.dozenten.ersetze_dozent = (function dep$views$dozenten$ersetze_dozent(form_state){
var form = cljs.core.deref(form_state);
var neuer_dozent = dep.model.dozent.__GT_Dozent(cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$Vorname.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$auslastungen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Dozent.cljs$core$IFn$_invoke$arity$1(form)),cljs.core.cst$kw$insMenue.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$Stundensoll.cljs$core$IFn$_invoke$arity$1(form));
return dep.helpers.data_modifiers.replace_dataset(cljs.core.cst$kw$dozenten,cljs.core.cst$kw$name,neuer_dozent);
});
/**
 * Wandelt die dozenten für die Darstellung als Tabelle um.
 */
dep.views.dozenten.dozenten__GT_table = (function dep$views$dozenten$dozenten__GT_table(dozenten){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25697_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$Name,cljs.core.cst$kw$Vorname,cljs.core.cst$kw$insMenue,cljs.core.cst$kw$Stundensoll,cljs.core.cst$kw$Dozent],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__25697_SHARP_),cljs.core.cst$kw$vorname.cljs$core$IFn$_invoke$arity$1(p1__25697_SHARP_),cljs.core.cst$kw$insMenue.cljs$core$IFn$_invoke$arity$1(p1__25697_SHARP_),cljs.core.cst$kw$sollStunden.cljs$core$IFn$_invoke$arity$1(p1__25697_SHARP_),p1__25697_SHARP_]);
}),dozenten);
});
dep.views.dozenten.dozent_form_felder = (function dep$views$dozenten$dozent_form_felder(form_state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Dozent",cljs.core.cst$kw$level,cljs.core.cst$kw$level2], null),dep.helpers.form_helpers.rc_input_box("Name",cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$Name,null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_input_box("Vorname",cljs.core.cst$kw$Vorname.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$Vorname,null,cljs.core.identity,true,form_state),dep.helpers.form_helpers.rc_input_box("Stundensoll",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Stundensoll.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$Stundensoll,/^(\d+)$/,parseInt,false,form_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.helpers.form_helpers.rc_check_box,"ins Men\u00FC",cljs.core.cst$kw$insMenue,form_state], null)], null);
});
dep.views.dozenten.buttons = (function dep$views$dozenten$buttons(form_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"speichern",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.dozenten.ersetze_dozent(form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"entfernen",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.helpers.data_modifiers.remove_dataset(form_state,cljs.core.cst$kw$dozenten,cljs.core.cst$kw$name,cljs.core.cst$kw$Name);
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Dozenten.
 */
dep.views.dozenten.dozenten = (function dep$views$dozenten$dozenten(){
var dozenten = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.dozenten.dozenten__GT_table(dozenten),"Dozenten",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,cljs.core.cst$kw$Vorname,cljs.core.cst$kw$Stundensoll,cljs.core.cst$kw$insMenue], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,cljs.core.cst$kw$Vorname,cljs.core.cst$kw$Stundensoll,cljs.core.cst$kw$insMenue], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,false], null)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dep.views.table.td_render_fn,cljs.core.cst$kw$Name,dep.views.dozenten.dozent_form_felder,dep.views.dozenten.buttons)], null);
});
