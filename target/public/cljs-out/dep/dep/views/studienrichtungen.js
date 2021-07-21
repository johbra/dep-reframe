// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.studienrichtungen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.model.studienrichtung');
goog.require('dep.views.table');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.data_modifiers');
/**
 * Erzeugt eine neue Studienrichtung aus den im Formular gegebenen Daten.
 */
dep.views.studienrichtungen.aender_studienrichtung = (function dep$views$studienrichtungen$aender_studienrichtung(form_state){
var neu = dep.model.studienrichtung.__GT_Studienrichtung(cljs.core.cst$kw$Bezeichnung.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)));
return dep.helpers.data_modifiers.replace_dataset(cljs.core.cst$kw$studienrichtungen,cljs.core.cst$kw$name,neu);
});
/**
 * Wandelt die studienrichtungen für die Darstellung als Tabelle um. 
 */
dep.views.studienrichtungen.studienrichtungen__GT_table = (function dep$views$studienrichtungen$studienrichtungen__GT_table(studienrichtungen){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31421_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$Bezeichnung],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__31421_SHARP_)]);
}),studienrichtungen);
});
dep.views.studienrichtungen.studienrichtung_form_felder = (function dep$views$studienrichtungen$studienrichtung_form_felder(form_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Studienrichtung",cljs.core.cst$kw$level,cljs.core.cst$kw$level2], null),dep.helpers.form_helpers.rc_input_box("Bezeichnung",cljs.core.cst$kw$Bezeichnung.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$Bezeichnung,null,cljs.core.identity,false,form_state)], null);
});
dep.views.studienrichtungen.buttons = (function dep$views$studienrichtungen$buttons(form_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"speichern",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.studienrichtungen.aender_studienrichtung(form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"entfernen",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.helpers.data_modifiers.remove_dataset(form_state,cljs.core.cst$kw$studienrichtungen,cljs.core.cst$kw$name,cljs.core.cst$kw$Bezeichnung);
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Studienrichtungen.
 */
dep.views.studienrichtungen.studienrichtungen = (function dep$views$studienrichtungen$studienrichtungen(){
var studienrichtungen = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$studienrichtungen], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.studienrichtungen.studienrichtungen__GT_table(studienrichtungen),"Studienrichtungen",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Bezeichnung], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,false], null)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dep.views.table.td_render_fn,cljs.core.cst$kw$Bezeichnung,dep.views.studienrichtungen.studienrichtung_form_felder,dep.views.studienrichtungen.buttons)], null);
});
