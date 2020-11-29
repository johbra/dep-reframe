// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.manipels');
goog.require('cljs.core');
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
dep.views.manipels.sem_tabellen_koepfe = cljs.core.map.call(null,(function (p1__18674_SHARP_){
return cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18674_SHARP_)].join(''));
}),cljs.core.range.call(null,(1),(8)));
/**
 * liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}
 */
dep.views.manipels.semestermanipel_mit_namen = cljs.core.zipmap.call(null,dep.views.manipels.sem_tabellen_koepfe,cljs.core.range.call(null,(1),(8)));
/**
 * erzeugt aus den Strings des Formulars eine jahrsemesterzuordnung
 */
dep.views.manipels.formular_daten__GT_jahr_semester_zuordung = (function dep$views$manipels$formular_daten__GT_jahr_semester_zuordung(formulardaten){
var jsz = cljs.core.select_keys.call(null,formulardaten,(function (){var iter__4529__auto__ = (function dep$views$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__18677(s__18678){
return (new cljs.core.LazySeq(null,(function (){
var s__18678__$1 = s__18678;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18678__$1);
if(temp__5735__auto__){
var s__18678__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18678__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18678__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18680 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18679 = (0);
while(true){
if((i__18679 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__18679);
cljs.core.chunk_append.call(null,b__18680,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__18681 = (i__18679 + (1));
i__18679 = G__18681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18680),dep$views$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__18677.call(null,cljs.core.chunk_rest.call(null,s__18678__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18680),null);
}
} else {
var i = cljs.core.first.call(null,s__18678__$2);
return cljs.core.cons.call(null,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),dep$views$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__18677.call(null,cljs.core.rest.call(null,s__18678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(1),(8)));
})());
return medley.core.map_keys.call(null,(function (p1__18676_SHARP_){
return cljs.core.assoc.call(null,p1__18676_SHARP_,new cljs.core.Keyword(null,"jahr","jahr",1260355162),(new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(p1__18676_SHARP_) - new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"Stdnbgnn","Stdnbgnn",1363341617).cljs$core$IFn$_invoke$arity$1(formulardaten)))));
}),medley.core.map_vals.call(null,(function (p1__18675_SHARP_){
return dep.model.quartal.parse_int.call(null,cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18675_SHARP_),/-/)));
}),clojure.set.map_invert.call(null,medley.core.map_vals.call(null,dep.model.quartal.string__GT_quartal,jsz))));
});
/**
 * Erzeugt ein neues Manipel aus den in form gegebenen Daten.
 */
dep.views.manipels.aender_manipel = (function dep$views$manipels$aender_manipel(form_state){
var form = cljs.core.deref.call(null,form_state);
var jsz = dep.views.manipels.formular_daten__GT_jahr_semester_zuordung.call(null,form);
var neues_manipel = dep.model.manipel.__GT_Manipel.call(null,new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848).cljs$core$IFn$_invoke$arity$1(form),cljs.core.symbol.call(null,new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(form)),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"Stdnbgnn","Stdnbgnn",1363341617).cljs$core$IFn$_invoke$arity$1(form)),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518).cljs$core$IFn$_invoke$arity$1(form),jsz);
var _ = dep.views.planung.umplane_lven.call(null,new cljs.core.Keyword(null,"Manipel","Manipel",-205524958).cljs$core$IFn$_invoke$arity$1(form),neues_manipel);
return dep.helpers.data_modifiers.replace_dataset.call(null,new cljs.core.Keyword(null,"manipels","manipels",626202456),new cljs.core.Keyword(null,"name","name",1843675177),neues_manipel);
});
/**
 * Wandelt die manipels für die Darstellung als Tabelle um.
 */
dep.views.manipels.manipels__GT_table = (function dep$views$manipels$manipels__GT_table(manipels){
return cljs.core.mapv.call(null,(function (p1__18682_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518),new cljs.core.Keyword(null,"Stdnbgnn","Stdnbgnn",1363341617),new cljs.core.Keyword(null,"Manipel","Manipel",-205524958)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18682_SHARP_),new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756).cljs$core$IFn$_invoke$arity$1(p1__18682_SHARP_),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(p1__18682_SHARP_),dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(p1__18682_SHARP_)),p1__18682_SHARP_]),dep.model.quartal.sieben_semester__GT_quartstrng.call(null,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(p1__18682_SHARP_),new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(p1__18682_SHARP_)));
}),manipels);
});
dep.views.manipels.manipel_form_felder = (function dep$views$manipels$manipel_form_felder(form_state){
var studienrichtungen = cljs.core.mapv.call(null,(function (p1__18683_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18683_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18683_SHARP_)]);
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886)], null))));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Manipel",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),dep.helpers.form_helpers.rc_input_box.call(null,"Name",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"Name","Name",-131211369),null,cljs.core.symbol,false,form_state),dep.helpers.form_helpers.rc_dropdown.call(null,"Studienrichtung",new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),studienrichtungen,false,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Anzahl-Gruppen",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518),/^(\d+)$/,parseInt,false,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Studienbeginn",new cljs.core.Keyword(null,"Stdnbgnn","Stdnbgnn",1363341617).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Stdnbgnn","Stdnbgnn",1363341617),null,cljs.core.identity,false,form_state),(function (){var iter__4529__auto__ = (function dep$views$manipels$manipel_form_felder_$_iter__18684(s__18685){
return (new cljs.core.LazySeq(null,(function (){
var s__18685__$1 = s__18685;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18685__$1);
if(temp__5735__auto__){
var s__18685__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18685__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18685__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18687 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18686 = (0);
while(true){
if((i__18686 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__18686);
cljs.core.chunk_append.call(null,b__18687,dep.helpers.form_helpers.rc_input_box.call(null,["Semester ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')).call(null,cljs.core.deref.call(null,form_state)),cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),null,cljs.core.identity,false,form_state));

var G__18688 = (i__18686 + (1));
i__18686 = G__18688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18687),dep$views$manipels$manipel_form_felder_$_iter__18684.call(null,cljs.core.chunk_rest.call(null,s__18685__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18687),null);
}
} else {
var i = cljs.core.first.call(null,s__18685__$2);
return cljs.core.cons.call(null,dep.helpers.form_helpers.rc_input_box.call(null,["Semester ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')).call(null,cljs.core.deref.call(null,form_state)),cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),null,cljs.core.identity,false,form_state),dep$views$manipels$manipel_form_felder_$_iter__18684.call(null,cljs.core.rest.call(null,s__18685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(1),(8)));
})()], null);
});
dep.views.manipels.buttons = (function dep$views$manipels$buttons(form_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"speichern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.manipels.aender_manipel.call(null,form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"entfernen",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.helpers.data_modifiers.remove_dataset.call(null,form_state,new cljs.core.Keyword(null,"manipels","manipels",626202456),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Name","Name",-131211369));
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Manipel.
 */
dep.views.manipels.manipels = (function dep$views$manipels$manipels(){
var manipels = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manipels","manipels",626202456)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.manipels.manipels__GT_table.call(null,manipels),"Manipel",new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),new cljs.core.Keyword(null,"Stdnbgnn","Stdnbgnn",1363341617),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518),new cljs.core.Keyword(null,"Sem-1","Sem-1",1701521289),new cljs.core.Keyword(null,"Sem-2","Sem-2",-296574083),new cljs.core.Keyword(null,"Sem-3","Sem-3",1888976619),new cljs.core.Keyword(null,"Sem-4","Sem-4",331149550),new cljs.core.Keyword(null,"Sem-5","Sem-5",-1347053144),new cljs.core.Keyword(null,"Sem-6","Sem-6",-134351187),new cljs.core.Keyword(null,"Sem-7","Sem-7",305908823)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),new cljs.core.Keyword(null,"Stdnbgnn","Stdnbgnn",1363341617),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.manipels.manipel_form_felder,dep.views.manipels.buttons)], null);
});

//# sourceMappingURL=manipels.js.map
