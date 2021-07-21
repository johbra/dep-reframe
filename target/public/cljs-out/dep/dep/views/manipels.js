// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.manipels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('medley.core');
goog.require('dep.model.manipel');
goog.require('dep.views.table');
goog.require('dep.model.quartal');
goog.require('dep.views.planung');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.data_modifiers');
/**
 * Die Spaltenüberschriften für die 7 Semester
 */
dep.views.manipels.sem_tabellen_koepfe = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30789_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30789_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
/**
 * liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}
 */
dep.views.manipels.semestermanipel_mit_namen = cljs.core.zipmap(dep.views.manipels.sem_tabellen_koepfe,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
/**
 * erzeugt aus den Strings des Formulars eine jahrsemesterzuordnung
 */
dep.views.manipels.formular_daten__GT_jahr_semester_zuordung = (function dep$views$manipels$formular_daten__GT_jahr_semester_zuordung(formulardaten){
var jsz = cljs.core.select_keys(formulardaten,(function (){var iter__4564__auto__ = (function dep$views$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__30792(s__30793){
return (new cljs.core.LazySeq(null,(function (){
var s__30793__$1 = s__30793;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30793__$1);
if(temp__5753__auto__){
var s__30793__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30793__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30793__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30795 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30794 = (0);
while(true){
if((i__30794 < size__4563__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30794);
cljs.core.chunk_append(b__30795,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__30796 = (i__30794 + (1));
i__30794 = G__30796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30795),dep$views$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__30792(cljs.core.chunk_rest(s__30793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30795),null);
}
} else {
var i = cljs.core.first(s__30793__$2);
return cljs.core.cons(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),dep$views$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__30792(cljs.core.rest(s__30793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
})());
return medley.core.map_keys((function (p1__30791_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30791_SHARP_,cljs.core.cst$kw$jahr,(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(p1__30791_SHARP_) - cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(dep.model.quartal.string__GT_quartal(cljs.core.cst$kw$Stdnbgnn.cljs$core$IFn$_invoke$arity$1(formulardaten)))));
}),medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (p1__30790_SHARP_){
return dep.model.quartal.parse_int(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30790_SHARP_),/-/)));
}),clojure.set.map_invert(medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(dep.model.quartal.string__GT_quartal,jsz))));
});
/**
 * Erzeugt ein neues Manipel aus den in form gegebenen Daten.
 */
dep.views.manipels.aender_manipel = (function dep$views$manipels$aender_manipel(form_state){
var form = cljs.core.deref(form_state);
var jsz = dep.views.manipels.formular_daten__GT_jahr_semester_zuordung(form);
var neues_manipel = dep.model.manipel.__GT_Manipel(cljs.core.cst$kw$Studienrichtung.cljs$core$IFn$_invoke$arity$1(form),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(form)),dep.model.quartal.string__GT_quartal(cljs.core.cst$kw$Stdnbgnn.cljs$core$IFn$_invoke$arity$1(form)),cljs.core.cst$kw$An_DASH_Gr.cljs$core$IFn$_invoke$arity$1(form),jsz);
var _ = dep.views.planung.umplane_lven(cljs.core.cst$kw$Manipel.cljs$core$IFn$_invoke$arity$1(form),neues_manipel);
return dep.helpers.data_modifiers.replace_dataset(cljs.core.cst$kw$manipels,cljs.core.cst$kw$name,neues_manipel);
});
/**
 * Wandelt die manipels für die Darstellung als Tabelle um.
 */
dep.views.manipels.manipels__GT_table = (function dep$views$manipels$manipels__GT_table(manipels){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30797_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$Name,cljs.core.cst$kw$Studienrichtung,cljs.core.cst$kw$An_DASH_Gr,cljs.core.cst$kw$Stdnbgnn,cljs.core.cst$kw$Manipel],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30797_SHARP_),cljs.core.cst$kw$studienrichtung.cljs$core$IFn$_invoke$arity$1(p1__30797_SHARP_),cljs.core.cst$kw$anzahlGruppen.cljs$core$IFn$_invoke$arity$1(p1__30797_SHARP_),dep.model.quartal.quartal__GT_string(cljs.core.cst$kw$studienbeginn.cljs$core$IFn$_invoke$arity$1(p1__30797_SHARP_)),p1__30797_SHARP_]),dep.model.quartal.sieben_semester__GT_quartstrng(cljs.core.cst$kw$studienbeginn.cljs$core$IFn$_invoke$arity$1(p1__30797_SHARP_),cljs.core.cst$kw$jahrSemesterZuordnung.cljs$core$IFn$_invoke$arity$1(p1__30797_SHARP_))], 0));
}),manipels);
});
dep.views.manipels.manipel_form_felder = (function dep$views$manipels$manipel_form_felder(form_state){
var studienrichtungen = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30798_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$label],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30798_SHARP_),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__30798_SHARP_)]);
}),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$studienrichtungen], null))));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Manipel",cljs.core.cst$kw$level,cljs.core.cst$kw$level2], null),dep.helpers.form_helpers.rc_input_box("Name",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$Name,null,cljs.core.symbol,false,form_state),dep.helpers.form_helpers.rc_dropdown("Studienrichtung",cljs.core.cst$kw$Studienrichtung,studienrichtungen,false,form_state),dep.helpers.form_helpers.rc_input_box("Anzahl-Gruppen",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$An_DASH_Gr.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state))),cljs.core.cst$kw$An_DASH_Gr,/^(\d+)$/,parseInt,false,form_state),dep.helpers.form_helpers.rc_input_box("Studienbeginn",cljs.core.cst$kw$Stdnbgnn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$Stdnbgnn,null,cljs.core.identity,false,form_state),(function (){var iter__4564__auto__ = (function dep$views$manipels$manipel_form_felder_$_iter__30799(s__30800){
return (new cljs.core.LazySeq(null,(function (){
var s__30800__$1 = s__30800;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30800__$1);
if(temp__5753__auto__){
var s__30800__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30800__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30800__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30802 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30801 = (0);
while(true){
if((i__30801 < size__4563__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30801);
cljs.core.chunk_append(b__30802,dep.helpers.form_helpers.rc_input_box(["Semester ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),(function (){var G__30804 = cljs.core.deref(form_state);
var fexpr__30803 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
return (fexpr__30803.cljs$core$IFn$_invoke$arity$1 ? fexpr__30803.cljs$core$IFn$_invoke$arity$1(G__30804) : fexpr__30803.call(null,G__30804));
})(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),null,cljs.core.identity,false,form_state));

var G__30807 = (i__30801 + (1));
i__30801 = G__30807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30802),dep$views$manipels$manipel_form_felder_$_iter__30799(cljs.core.chunk_rest(s__30800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30802),null);
}
} else {
var i = cljs.core.first(s__30800__$2);
return cljs.core.cons(dep.helpers.form_helpers.rc_input_box(["Semester ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),(function (){var G__30806 = cljs.core.deref(form_state);
var fexpr__30805 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
return (fexpr__30805.cljs$core$IFn$_invoke$arity$1 ? fexpr__30805.cljs$core$IFn$_invoke$arity$1(G__30806) : fexpr__30805.call(null,G__30806));
})(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),null,cljs.core.identity,false,form_state),dep$views$manipels$manipel_form_felder_$_iter__30799(cljs.core.rest(s__30800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
})()], null);
});
dep.views.manipels.buttons = (function dep$views$manipels$buttons(form_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"speichern",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.manipels.aender_manipel(form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"entfernen",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.helpers.data_modifiers.remove_dataset(form_state,cljs.core.cst$kw$manipels,cljs.core.cst$kw$name,cljs.core.cst$kw$Name);
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Manipel.
 */
dep.views.manipels.manipels = (function dep$views$manipels$manipels(){
var manipels = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$manipels], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.manipels.manipels__GT_table(manipels),"Manipel",new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,cljs.core.cst$kw$Studienrichtung,cljs.core.cst$kw$Stdnbgnn,cljs.core.cst$kw$An_DASH_Gr,cljs.core.cst$kw$Sem_DASH_1,cljs.core.cst$kw$Sem_DASH_2,cljs.core.cst$kw$Sem_DASH_3,cljs.core.cst$kw$Sem_DASH_4,cljs.core.cst$kw$Sem_DASH_5,cljs.core.cst$kw$Sem_DASH_6,cljs.core.cst$kw$Sem_DASH_7], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,cljs.core.cst$kw$Studienrichtung,cljs.core.cst$kw$Stdnbgnn,cljs.core.cst$kw$An_DASH_Gr], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,false], null)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dep.views.table.td_render_fn,cljs.core.cst$kw$Name,dep.views.manipels.manipel_form_felder,dep.views.manipels.buttons)], null);
});
