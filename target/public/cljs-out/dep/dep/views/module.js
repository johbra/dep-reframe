// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.module');
goog.require('cljs.core');
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
dep.views.module.sem_tabellen_koepfe = cljs.core.map.call(null,(function (p1__25158_SHARP_){
return cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25158_SHARP_)].join(''));
}),cljs.core.range.call(null,(1),(8)));
/**
 * liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}
 */
dep.views.module.semester = cljs.core.zipmap.call(null,dep.views.module.sem_tabellen_koepfe,cljs.core.range.call(null,(1),(8)));
/**
 * Formt aus den aenderungen des Eingabeformulars eine Hash-map mit den
 *   Semesterwochenstunden.
 */
dep.views.module.aender_sws = (function dep$views$module$aender_sws(aenderungen){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__25159_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.val.call(null,p1__25159_SHARP_),(0));
}),clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,aenderungen,dep.views.module.sem_tabellen_koepfe),dep.views.module.semester)));
});
/**
 * Erzeugt ein neues Modul aus den in aenderungen gegebenen Daten.
 */
dep.views.module.aender_modul = (function dep$views$module$aender_modul(form_state){
var form = cljs.core.deref.call(null,form_state);
var neues_modul = cljs.core.assoc.call(null,dep.model.modul.__GT_Modul.call(null,new cljs.core.Keyword(null,"Nr","Nr",-700839286).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(form),dep.views.module.aender_sws.call(null,form),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848).cljs$core$IFn$_invoke$arity$1(form),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411).cljs$core$IFn$_invoke$arity$1(form)),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925).cljs$core$IFn$_invoke$arity$1(form))),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(form));
return dep.helpers.data_modifiers.replace_dataset.call(null,new cljs.core.Keyword(null,"module","module",1424618191),new cljs.core.Keyword(null,"id","id",-1388402092),neues_modul);
});
/**
 * 
 */
dep.views.module.dupliziere_modul = (function dep$views$module$dupliziere_modul(form_state){
var form = cljs.core.deref.call(null,form_state);
var neues_modul = dep.model.modul.__GT_Modul.call(null,new cljs.core.Keyword(null,"Nr","Nr",-700839286).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(form),dep.views.module.aender_sws.call(null,form),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848).cljs$core$IFn$_invoke$arity$1(form),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411).cljs$core$IFn$_invoke$arity$1(form)),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925).cljs$core$IFn$_invoke$arity$1(form)));
return dep.helpers.data_modifiers.duplicate_dataset.call(null,new cljs.core.Keyword(null,"module","module",1424618191),new cljs.core.Keyword(null,"nummer","nummer",1652450962),neues_modul);
});
/**
 * Wandelt die module für die Darstellung als Tabelle um.
 */
dep.views.module.module__GT_table = (function dep$views$module$module__GT_table(module){
return cljs.core.mapv.call(null,(function (p1__25160_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Nr","Nr",-700839286),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)],[new cljs.core.Keyword(null,"nummer","nummer",1652450962).cljs$core$IFn$_invoke$arity$1(p1__25160_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__25160_SHARP_),new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756).cljs$core$IFn$_invoke$arity$1(p1__25160_SHARP_)]),dep.model.modul.sws__GT_alle_semester.call(null,new cljs.core.Keyword(null,"semesterWochenstunden","semesterWochenstunden",1725648707).cljs$core$IFn$_invoke$arity$1(p1__25160_SHARP_)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925),new cljs.core.Keyword(null,"Id","Id",-2148601)],[dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"gueltigAb","gueltigAb",-1592672781).cljs$core$IFn$_invoke$arity$1(p1__25160_SHARP_)),dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"gueltigBis","gueltigBis",-999485251).cljs$core$IFn$_invoke$arity$1(p1__25160_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__25160_SHARP_)]));
}),module);
});
dep.views.module.modul_form_felder = (function dep$views$module$modul_form_felder(form_state){
var studienrichtungen = cljs.core.mapv.call(null,(function (p1__25161_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__25161_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__25161_SHARP_)]);
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886)], null))));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Modul",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),dep.helpers.form_helpers.rc_input_box.call(null,"Nr.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Nr","Nr",-700839286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state))),new cljs.core.Keyword(null,"Nr","Nr",-700839286),null,cljs.core.symbol,false,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Name",new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Name","Name",-131211369),null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_dropdown.call(null,"Studienrichtung",new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),studienrichtungen,false,form_state),(function (){var iter__4529__auto__ = (function dep$views$module$modul_form_felder_$_iter__25162(s__25163){
return (new cljs.core.LazySeq(null,(function (){
var s__25163__$1 = s__25163;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25163__$1);
if(temp__5735__auto__){
var s__25163__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25163__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25163__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25165 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25164 = (0);
while(true){
if((i__25164 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__25164);
cljs.core.chunk_append.call(null,b__25165,dep.helpers.form_helpers.rc_input_box.call(null,["Semester ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')).call(null,cljs.core.deref.call(null,form_state))),cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),/^(\d+)$/,parseInt,false,form_state));

var G__25166 = (i__25164 + (1));
i__25164 = G__25166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25165),dep$views$module$modul_form_felder_$_iter__25162.call(null,cljs.core.chunk_rest.call(null,s__25163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25165),null);
}
} else {
var i = cljs.core.first.call(null,s__25163__$2);
return cljs.core.cons.call(null,dep.helpers.form_helpers.rc_input_box.call(null,["Semester ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')).call(null,cljs.core.deref.call(null,form_state))),cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),/^(\d+)$/,parseInt,false,form_state),dep$views$module$modul_form_felder_$_iter__25162.call(null,cljs.core.rest.call(null,s__25163__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(1),(8)));
})(),dep.helpers.form_helpers.rc_input_box.call(null,"ab Studienbeginn",new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411),null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"bis Studienbeginn",new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925),null,cljs.core.identity,false,form_state)], null);
});
dep.views.module.buttons = (function dep$views$module$buttons(form_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"duplizieren",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.module.dupliziere_modul.call(null,form_state);
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"speichern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.module.aender_modul.call(null,form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"entfernen",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.helpers.data_modifiers.remove_dataset.call(null,form_state,new cljs.core.Keyword(null,"module","module",1424618191),new cljs.core.Keyword(null,"nummer","nummer",1652450962),new cljs.core.Keyword(null,"Nr","Nr",-700839286));
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Module.
 */
dep.views.module.module = (function dep$views$module$module(){
var module = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"module","module",1424618191)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.module.module__GT_table.call(null,module),"Module",new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Nr","Nr",-700839286),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),new cljs.core.Keyword(null,"S1","S1",-627529157),new cljs.core.Keyword(null,"S2","S2",-205831480),new cljs.core.Keyword(null,"S3","S3",278995801),new cljs.core.Keyword(null,"S4","S4",2100354912),new cljs.core.Keyword(null,"S5","S5",1544429492),new cljs.core.Keyword(null,"S6","S6",-1586051680),new cljs.core.Keyword(null,"S7","S7",647180085),new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Nr","Nr",-700839286),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.module.modul_form_felder,dep.views.module.buttons)], null);
});

//# sourceMappingURL=module.js.map
