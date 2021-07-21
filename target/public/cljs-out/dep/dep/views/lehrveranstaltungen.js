// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.lehrveranstaltungen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var form = cljs.core.deref(form_state);
var alte_lv = cljs.core.cst$kw$Lv.cljs$core$IFn$_invoke$arity$1(form);
var neue_lv = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(alte_lv,cljs.core.cst$kw$dozent,cljs.core.cst$kw$Dozent.cljs$core$IFn$_invoke$arity$1(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wiederholungsFaktor,cljs.core.cst$kw$WdhFkt.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$anzahlGruppen,cljs.core.cst$kw$Grpn.cljs$core$IFn$_invoke$arity$1(form)], 0));
return dep.helpers.data_modifiers.replace_dataset(cljs.core.cst$kw$lven,cljs.core.cst$kw$id,neue_lv);
});
dep.views.lehrveranstaltungen.dupliziere_lv = (function dep$views$lehrveranstaltungen$dupliziere_lv(form_state){
var neue_lv = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$Lv.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
return dep.helpers.data_modifiers.duplicate_dataset(cljs.core.cst$kw$lven,neue_lv);
});
/**
 * Wandelt die Lehrveranstaltungen (lvn) für die Darstellung als Tabelle um. 
 */
dep.views.lehrveranstaltungen.lvn__GT_table = (function dep$views$lehrveranstaltungen$lvn__GT_table(lvn){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30525_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$Modul,cljs.core.cst$kw$Mnpl,cljs.core.cst$kw$Smstr,cljs.core.cst$kw$SWS,cljs.core.cst$kw$WdhFkt,cljs.core.cst$kw$Grpn,cljs.core.cst$kw$Dozent,cljs.core.cst$kw$Id,cljs.core.cst$kw$Lv],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$modul.cljs$core$IFn$_invoke$arity$1(p1__30525_SHARP_)),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$manipel.cljs$core$IFn$_invoke$arity$1(p1__30525_SHARP_)),dep.model.lehrveranstaltung.semester(p1__30525_SHARP_),dep.model.lehrveranstaltung.semesterWochenstunden(p1__30525_SHARP_),cljs.core.cst$kw$wiederholungsFaktor.cljs$core$IFn$_invoke$arity$1(p1__30525_SHARP_),cljs.core.cst$kw$anzahlGruppen.cljs$core$IFn$_invoke$arity$1(p1__30525_SHARP_),cljs.core.cst$kw$dozent.cljs$core$IFn$_invoke$arity$1(p1__30525_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__30525_SHARP_),p1__30525_SHARP_]);
}),lvn);
});
dep.views.lehrveranstaltungen.lv_form_felder = (function dep$views$lehrveranstaltungen$lv_form_felder(form_state){
var dozenten = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30526_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$label],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30526_SHARP_),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30526_SHARP_)]);
}),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dozenten], null))));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Lehrveranstaltung",cljs.core.cst$kw$level,cljs.core.cst$kw$level2], null),dep.helpers.form_helpers.rc_input_box("Modul",cljs.core.cst$kw$Modul.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$Modul,null,cljs.core.identity,true,form_state),dep.helpers.form_helpers.rc_input_box("Manipel",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Mnpl.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$Mnpl,null,cljs.core.symbol,true,form_state),dep.helpers.form_helpers.rc_input_box("Semester",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Smstr.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$Smstr,null,cljs.core.identity,true,form_state),dep.helpers.form_helpers.rc_input_box("SWS",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$SWS.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$SWS,null,cljs.core.identity,true,form_state),dep.helpers.form_helpers.rc_input_box("Wiedrhlngsfktr",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$WdhFkt.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$WdhFkt,/^(\d+)$/,parseInt,false,form_state),dep.helpers.form_helpers.rc_input_box("Gruppen",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Grpn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$Grpn,/^(\d+)$/,parseInt,false,form_state),dep.helpers.form_helpers.rc_dropdown("Dozent",cljs.core.cst$kw$Dozent,dozenten,false,form_state)], null);
});
dep.views.lehrveranstaltungen.buttons = (function dep$views$lehrveranstaltungen$buttons(form_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"duplizieren",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.lehrveranstaltungen.dupliziere_lv(form_state);
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"speichern",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.lehrveranstaltungen.aender_lv(form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"entfernen",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.helpers.data_modifiers.remove_dataset(form_state,cljs.core.cst$kw$lven,cljs.core.cst$kw$id,cljs.core.cst$kw$Id);
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Lehrveranstaltungen eines
 *   Quartals.
 */
dep.views.lehrveranstaltungen.lehrveranstaltungen = (function dep$views$lehrveranstaltungen$lehrveranstaltungen(){
var lven = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30527_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(p1__30527_SHARP_),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quartal], null))));
}),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lven], null))));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.lehrveranstaltungen.lvn__GT_table(lven),"Lehrveranstaltungen",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Modul,cljs.core.cst$kw$Mnpl,cljs.core.cst$kw$Smstr,cljs.core.cst$kw$SWS,cljs.core.cst$kw$WdhFkt,cljs.core.cst$kw$Grpn,cljs.core.cst$kw$Dozent], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Modul,cljs.core.cst$kw$Mnpl,cljs.core.cst$kw$Smstr,cljs.core.cst$kw$SWS,cljs.core.cst$kw$Dozent], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Mnpl,false], null)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dep.views.table.td_render_fn,cljs.core.cst$kw$Dozent,dep.views.lehrveranstaltungen.lv_form_felder,dep.views.lehrveranstaltungen.buttons)], null);
});
