// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.studienrichtungen');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.model.studienrichtung');
goog.require('dep.views.table');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.data_modifiers');
/**
 * Erzeugt eine neue Studienrichtung aus den in aenderungen gegebenen Daten.
 */
dep.views.studienrichtungen.aender_studienrichtung = (function dep$views$studienrichtungen$aender_studienrichtung(form_state){
var studienrichtungen = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886)], null)));
var neu = dep.model.studienrichtung.__GT_Studienrichtung.call(null,new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)));
return dep.helpers.data_modifiers.replace_dataset.call(null,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),new cljs.core.Keyword(null,"name","name",1843675177),neu);
});
/**
 * Wandelt die studienrichtungen für die Darstellung als Tabelle um. 
 */
dep.views.studienrichtungen.studienrichtungen__GT_table = (function dep$views$studienrichtungen$studienrichtungen__GT_table(studienrichtungen){
return cljs.core.mapv.call(null,(function (p1__27363_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27363_SHARP_)]);
}),studienrichtungen);
});
dep.views.studienrichtungen.studienrichtung_form_felder = (function dep$views$studienrichtungen$studienrichtung_form_felder(form_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Studienrichtung",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),dep.helpers.form_helpers.rc_input_box.call(null,"Bezeichnung",new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820),null,cljs.core.identity,false,form_state)], null);
});
dep.views.studienrichtungen.buttons = (function dep$views$studienrichtungen$buttons(form_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"speichern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.studienrichtungen.aender_studienrichtung.call(null,form_state);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"entfernen",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.helpers.data_modifiers.remove_dataset.call(null,form_state,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820));
})], null)], null);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Studienrichtungen.
 */
dep.views.studienrichtungen.studienrichtungen = (function dep$views$studienrichtungen$studienrichtungen(){
var studienrichtungen = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.studienrichtungen.studienrichtungen__GT_table.call(null,studienrichtungen),"Studienrichtungen",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820),dep.views.studienrichtungen.studienrichtung_form_felder,dep.views.studienrichtungen.buttons)], null);
});

//# sourceMappingURL=studienrichtungen.js.map
