// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.datensicherung');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.views.table');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.drop_file_stream');
/**
 * Liefert die Datei mit dem Namen string aus der Liste von dateien.
 */
dep.views.datensicherung.datei_mit_namen = (function dep$views$datensicherung$datei_mit_namen(dateien,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29750_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__29750_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__29751_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__29751_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)))));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_29768){
var state_val_29769 = (state_29768[(1)]);
if((state_val_29769 === (1))){
var inst_29752 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_29753 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_29752);
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29768__$1,(2),inst_29753);
} else {
if((state_val_29769 === (2))){
var inst_29755 = (state_29768[(2)]);
var inst_29756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29757 = [new cljs.core.Keyword(null,"welt","welt",-1673248721),inst_29755];
var inst_29758 = (new cljs.core.PersistentVector(null,2,(5),inst_29756,inst_29757,null));
var inst_29759 = re_frame.core.dispatch.call(null,inst_29758);
var inst_29760 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29761 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_29768__$1 = (function (){var statearr_29770 = state_29768;
(statearr_29770[(7)] = inst_29759);

(statearr_29770[(8)] = inst_29760);

return statearr_29770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29768__$1,(3),inst_29761);
} else {
if((state_val_29769 === (3))){
var inst_29760 = (state_29768[(8)]);
var inst_29763 = (state_29768[(2)]);
var inst_29764 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_29763];
var inst_29765 = (new cljs.core.PersistentVector(null,2,(5),inst_29760,inst_29764,null));
var inst_29766 = re_frame.core.dispatch.call(null,inst_29765);
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29768__$1,inst_29766);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____0 = (function (){
var statearr_29771 = [null,null,null,null,null,null,null,null,null];
(statearr_29771[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__);

(statearr_29771[(1)] = (1));

return statearr_29771;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____1 = (function (state_29768){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_29768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e29772){var ex__18798__auto__ = e29772;
var statearr_29773_29776 = state_29768;
(statearr_29773_29776[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_29768[(4)]))){
var statearr_29774_29777 = state_29768;
(statearr_29774_29777[(1)] = cljs.core.first.call(null,(state_29768[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29778 = state_29768;
state_29768 = G__29778;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__ = function(state_29768){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____1.call(this,state_29768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_29775 = f__18869__auto__.call(null);
(statearr_29775[(6)] = c__18868__auto__);

return statearr_29775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
dep.views.datensicherung.umbenenne_datei = (function dep$views$datensicherung$umbenenne_datei(alter_name,neuer_name){
var dateien = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)));
if(cljs.core.truth_(dep.views.datensicherung.datei_mit_namen.call(null,dateien,neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_29794){
var state_val_29795 = (state_29794[(1)]);
if((state_val_29795 === (1))){
var inst_29779 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(2),inst_29779);
} else {
if((state_val_29795 === (2))){
var inst_29781 = (state_29794[(2)]);
var inst_29782 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_29794__$1 = (function (){var statearr_29796 = state_29794;
(statearr_29796[(7)] = inst_29781);

return statearr_29796;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(3),inst_29782);
} else {
if((state_val_29795 === (3))){
var inst_29784 = (state_29794[(2)]);
var inst_29785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29786 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_29784];
var inst_29787 = (new cljs.core.PersistentVector(null,2,(5),inst_29785,inst_29786,null));
var inst_29788 = re_frame.core.dispatch_sync.call(null,inst_29787);
var inst_29789 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29790 = [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false];
var inst_29791 = (new cljs.core.PersistentVector(null,2,(5),inst_29789,inst_29790,null));
var inst_29792 = re_frame.core.dispatch.call(null,inst_29791);
var state_29794__$1 = (function (){var statearr_29797 = state_29794;
(statearr_29797[(8)] = inst_29788);

return statearr_29797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29794__$1,inst_29792);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____0 = (function (){
var statearr_29798 = [null,null,null,null,null,null,null,null,null];
(statearr_29798[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__);

(statearr_29798[(1)] = (1));

return statearr_29798;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____1 = (function (state_29794){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_29794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e29799){var ex__18798__auto__ = e29799;
var statearr_29800_29803 = state_29794;
(statearr_29800_29803[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_29794[(4)]))){
var statearr_29801_29804 = state_29794;
(statearr_29801_29804[(1)] = cljs.core.first.call(null,(state_29794[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29805 = state_29794;
state_29794 = G__29805;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__ = function(state_29794){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____1.call(this,state_29794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_29802 = f__18869__auto__.call(null);
(statearr_29802[(6)] = c__18868__auto__);

return statearr_29802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.views.datensicherung.dateien__GT_table = (function dep$views$datensicherung$dateien__GT_table(dateien){
return cljs.core.mapv.call(null,(function (p1__29806_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572),new cljs.core.Keyword(null,"alter-name","alter-name",1575294286)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__29806_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__29806_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.loesche_datei.call(null,p1__29806_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.lade_welt_aus_datei.call(null,p1__29806_SHARP_);
})], null),"laden"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__29806_SHARP_)]);
}),dateien);
});
dep.views.datensicherung.datei_form_felder = (function dep$views$datensicherung$datei_form_felder(form_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Datei",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),dep.helpers.form_helpers.rc_input_box.call(null,"Name",new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Name","Name",-131211369),null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Zeitstempel",new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),null,cljs.core.identity,true,form_state)], null);
});
dep.views.datensicherung.buttons = (function dep$views$datensicherung$buttons(form){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Name \u00E4ndern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.umbenenne_datei.call(null,new cljs.core.Keyword(null,"alter-name","alter-name",1575294286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form)),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form)));
})], null)], null);
});
/**
 * Komponente für das Laden und Speichern von Planungsdaten.
 */
dep.views.datensicherung.datensicherung = (function dep$views$datensicherung$datensicherung(){
var s = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datei","datei",936123672),"pldaten.edn"], null));
return (function (){
var dateien = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)));
var welt = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"welt","welt",-1673248721)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"100px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"12px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.helpers.form_helpers.rc_input_box,"Daten in Datei",new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s)),new cljs.core.Keyword(null,"datei","datei",936123672),null,cljs.core.identity,false,s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"sichern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_29821){
var state_val_29822 = (state_29821[(1)]);
if((state_val_29822 === (1))){
var inst_29807 = cljs.core.prn_str.call(null,welt);
var inst_29808 = cljs.core.deref.call(null,s);
var inst_29809 = new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(inst_29808);
var inst_29810 = dep.helpers.drop_file_stream.write_text.call(null,inst_29807,inst_29809);
var state_29821__$1 = state_29821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29821__$1,(2),inst_29810);
} else {
if((state_val_29822 === (2))){
var inst_29812 = (state_29821[(2)]);
var inst_29813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29814 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_29821__$1 = (function (){var statearr_29823 = state_29821;
(statearr_29823[(7)] = inst_29812);

(statearr_29823[(8)] = inst_29813);

return statearr_29823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29821__$1,(3),inst_29814);
} else {
if((state_val_29822 === (3))){
var inst_29813 = (state_29821[(8)]);
var inst_29816 = (state_29821[(2)]);
var inst_29817 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_29816];
var inst_29818 = (new cljs.core.PersistentVector(null,2,(5),inst_29813,inst_29817,null));
var inst_29819 = re_frame.core.dispatch_sync.call(null,inst_29818);
var state_29821__$1 = state_29821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29821__$1,inst_29819);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____0 = (function (){
var statearr_29824 = [null,null,null,null,null,null,null,null,null];
(statearr_29824[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__);

(statearr_29824[(1)] = (1));

return statearr_29824;
});
var dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____1 = (function (state_29821){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_29821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e29825){var ex__18798__auto__ = e29825;
var statearr_29826_29829 = state_29821;
(statearr_29826_29829[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_29821[(4)]))){
var statearr_29827_29830 = state_29821;
(statearr_29827_29830[(1)] = cljs.core.first.call(null,(state_29821[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29831 = state_29821;
state_29821 = G__29831;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__ = function(state_29821){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____1.call(this,state_29821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_29828 = f__18869__auto__.call(null);
(statearr_29828[(6)] = c__18868__auto__);

return statearr_29828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table.call(null,dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
