// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.module');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.model.modul');
goog.require('dep.views.table');
goog.require('dep.model.quartal');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.data_modifiers');
/**
 * Die Spaltenüberschriften für die 7 Semester
 */
dep.views.module.sem_tabellen_koepfe = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31359_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31359_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
/**
 * liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}
 */
dep.views.module.semester = cljs.core.zipmap(dep.views.module.sem_tabellen_koepfe,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
/**
 * Formt aus den aenderungen des Eingabeformulars eine Hash-map mit den
 *   Semesterwochenstunden.
 */
dep.views.module.aender_sws = (function dep$views$module$aender_sws(aenderungen){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31360_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__31360_SHARP_),(0));
}),clojure.set.rename_keys(cljs.core.select_keys(aenderungen,dep.views.module.sem_tabellen_koepfe),dep.views.module.semester)));
});
/**
 * Erzeugt ein neues Modul aus den in aenderungen gegebenen Daten.
 */
dep.views.module.aender_modul = (function dep$views$module$aender_modul(form_state){
var form = cljs.core.deref(form_state);
var neues_modul = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dep.model.modul.__GT_Modul(cljs.core.cst$kw$Nr.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(form),dep.views.module.aender_sws(form),cljs.core.cst$kw$Studienrichtung.cljs$core$IFn$_invoke$arity$1(form),dep.model.quartal.string__GT_quartal(cljs.core.cst$kw$ab_DASH_Stbgnn.cljs$core$IFn$_invoke$arity$1(form)),dep.model.quartal.string__GT_quartal(cljs.core.cst$kw$bis_DASH_Stbgnn.cljs$core$IFn$_invoke$arity$1(form))),cljs.core.cst$kw$id,cljs.core.cst$kw$Id.cljs$core$IFn$_invoke$arity$1(form));
return dep.helpers.data_modifiers.replace_dataset(cljs.core.cst$kw$module,cljs.core.cst$kw$id,neues_modul);
});
/**
 * 
 */
dep.views.module.dupliziere_modul = (function dep$views$module$dupliziere_modul(form_state){
var form = cljs.core.deref(form_state);
var neues_modul = dep.model.modul.__GT_Modul(cljs.core.cst$kw$Nr.cljs$core$IFn$_invoke$arity$1(form),cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(form),dep.views.module.aender_sws(form),cljs.core.cst$kw$Studienrichtung.cljs$core$IFn$_invoke$arity$1(form),dep.model.quartal.string__GT_quartal(cljs.core.cst$kw$ab_DASH_Stbgnn.cljs$core$IFn$_invoke$arity$1(form)),dep.model.quartal.string__GT_quartal(cljs.core.cst$kw$bis_DASH_Stbgnn.cljs$core$IFn$_invoke$arity$1(form)));
return dep.helpers.data_modifiers.duplicate_dataset(cljs.core.cst$kw$module,neues_modul);
});
/**
 * Wandelt die module für die Darstellung als Tabelle um.
 */
dep.views.module.module__GT_table = (function dep$views$module$module__GT_table(module){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31361_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$Nr,cljs.core.cst$kw$Name,cljs.core.cst$kw$Studienrichtung],[cljs.core.cst$kw$nummer.cljs$core$IFn$_invoke$arity$1(p1__31361_SHARP_),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__31361_SHARP_),cljs.core.cst$kw$studienrichtung.cljs$core$IFn$_invoke$arity$1(p1__31361_SHARP_)]),dep.model.modul.sws__GT_alle_semester(cljs.core.cst$kw$semesterWochenstunden.cljs$core$IFn$_invoke$arity$1(p1__31361_SHARP_)),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ab_DASH_Stbgnn,cljs.core.cst$kw$bis_DASH_Stbgnn,cljs.core.cst$kw$Id],[dep.model.quartal.quartal__GT_string(cljs.core.cst$kw$gueltigAb.cljs$core$IFn$_invoke$arity$1(p1__31361_SHARP_)),dep.model.quartal.quartal__GT_string(cljs.core.cst$kw$gueltigBis.cljs$core$IFn$_invoke$arity$1(p1__31361_SHARP_)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__31361_SHARP_)])], 0));
}),module);
});
dep.views.module.modul_form_felder = (function dep$views$module$modul_form_felder(form_state){
var studienrichtungen = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31362_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$label],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__31362_SHARP_),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__31362_SHARP_)]);
}),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$studienrichtungen], null))));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Modul",cljs.core.cst$kw$level,cljs.core.cst$kw$level2], null),dep.helpers.form_helpers.rc_input_box("Nr.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Nr.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$Nr,null,cljs.core.symbol,false,form_state),dep.helpers.form_helpers.rc_input_box("Name",cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$Name,null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_dropdown("Studienrichtung",cljs.core.cst$kw$Studienrichtung,studienrichtungen,false,form_state),(function (){var iter__4564__auto__ = (function dep$views$module$modul_form_felder_$_iter__31363(s__31364){
return (new cljs.core.LazySeq(null,(function (){
var s__31364__$1 = s__31364;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31364__$1);
if(temp__5753__auto__){
var s__31364__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31364__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__31364__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__31366 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__31365 = (0);
while(true){
if((i__31365 < size__4563__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__31365);
cljs.core.chunk_append(b__31366,dep.helpers.form_helpers.rc_input_box(["Semester ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31370 = cljs.core.deref(form_state);
var fexpr__31369 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
return (fexpr__31369.cljs$core$IFn$_invoke$arity$1 ? fexpr__31369.cljs$core$IFn$_invoke$arity$1(G__31370) : fexpr__31369.call(null,G__31370));
})()),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),/^(\d+)$/,parseInt,false,form_state));

var G__31375 = (i__31365 + (1));
i__31365 = G__31375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31366),dep$views$module$modul_form_felder_$_iter__31363(cljs.core.chunk_rest(s__31364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31366),null);
}
} else {
var i = cljs.core.first(s__31364__$2);
return cljs.core.cons(dep.helpers.form_helpers.rc_input_box(["Semester ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31374 = cljs.core.deref(form_state);
var fexpr__31373 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
return (fexpr__31373.cljs$core$IFn$_invoke$arity$1 ? fexpr__31373.cljs$core$IFn$_invoke$arity$1(G__31374) : fexpr__31373.call(null,G__31374));
})()),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),/^(\d+)$/,parseInt,false,form_state),dep$views$module$modul_form_felder_$_iter__31363(cljs.core.rest(s__31364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
})(),dep.helpers.form_helpers.rc_input_box("ab Studienbeginn",cljs.core.cst$kw$ab_DASH_Stbgnn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$ab_DASH_Stbgnn,null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_input_box("bis Studienbeginn",cljs.core.cst$kw$bis_DASH_Stbgnn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$bis_DASH_Stbgnn,null,cljs.core.identity,false,form_state)], null);
});
dep.views.module.buttons = (function dep$views$module$buttons(form_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"duplizieren",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.module.dupliziere_modul(form_state);
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"speichern",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.module.aender_modul(form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"entfernen",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.helpers.data_modifiers.remove_dataset(form_state,cljs.core.cst$kw$module,cljs.core.cst$kw$nummer,cljs.core.cst$kw$Nr);
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Module.
 */
dep.views.module.module = (function dep$views$module$module(){
var module = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$module], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.module.module__GT_table(module),"Module",new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Nr,cljs.core.cst$kw$Name,cljs.core.cst$kw$Studienrichtung,cljs.core.cst$kw$S1,cljs.core.cst$kw$S2,cljs.core.cst$kw$S3,cljs.core.cst$kw$S4,cljs.core.cst$kw$S5,cljs.core.cst$kw$S6,cljs.core.cst$kw$S7,cljs.core.cst$kw$ab_DASH_Stbgnn,cljs.core.cst$kw$bis_DASH_Stbgnn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Nr,cljs.core.cst$kw$Name,cljs.core.cst$kw$Studienrichtung], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,false], null)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dep.views.table.td_render_fn,cljs.core.cst$kw$Name,dep.views.module.modul_form_felder,dep.views.module.buttons)], null);
});
