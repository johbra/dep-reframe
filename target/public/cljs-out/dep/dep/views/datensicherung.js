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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18702_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18702_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__18703_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18703_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)))));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__18269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18720){
var state_val_18721 = (state_18720[(1)]);
if((state_val_18721 === (1))){
var inst_18704 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_18705 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_18704);
var state_18720__$1 = state_18720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18720__$1,(2),inst_18705);
} else {
if((state_val_18721 === (2))){
var inst_18707 = (state_18720[(2)]);
var inst_18708 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18709 = [new cljs.core.Keyword(null,"welt","welt",-1673248721),inst_18707];
var inst_18710 = (new cljs.core.PersistentVector(null,2,(5),inst_18708,inst_18709,null));
var inst_18711 = re_frame.core.dispatch.call(null,inst_18710);
var inst_18712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18713 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18720__$1 = (function (){var statearr_18722 = state_18720;
(statearr_18722[(7)] = inst_18711);

(statearr_18722[(8)] = inst_18712);

return statearr_18722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18720__$1,(3),inst_18713);
} else {
if((state_val_18721 === (3))){
var inst_18712 = (state_18720[(8)]);
var inst_18715 = (state_18720[(2)]);
var inst_18716 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18715];
var inst_18717 = (new cljs.core.PersistentVector(null,2,(5),inst_18712,inst_18716,null));
var inst_18718 = re_frame.core.dispatch.call(null,inst_18717);
var state_18720__$1 = state_18720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18720__$1,inst_18718);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0 = (function (){
var statearr_18723 = [null,null,null,null,null,null,null,null,null];
(statearr_18723[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__);

(statearr_18723[(1)] = (1));

return statearr_18723;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1 = (function (state_18720){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18724){var ex__18250__auto__ = e18724;
var statearr_18725_18728 = state_18720;
(statearr_18725_18728[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18720[(4)]))){
var statearr_18726_18729 = state_18720;
(statearr_18726_18729[(1)] = cljs.core.first.call(null,(state_18720[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18730 = state_18720;
state_18720 = G__18730;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__ = function(state_18720){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1.call(this,state_18720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18727 = f__18270__auto__.call(null);
(statearr_18727[(6)] = c__18269__auto__);

return statearr_18727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18271__auto__);
}));

return c__18269__auto__;
});
dep.views.datensicherung.umbenenne_datei = (function dep$views$datensicherung$umbenenne_datei(alter_name,neuer_name){
var dateien = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)));
if(cljs.core.truth_(dep.views.datensicherung.datei_mit_namen.call(null,dateien,neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__18269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18746){
var state_val_18747 = (state_18746[(1)]);
if((state_val_18747 === (1))){
var inst_18731 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_18746__$1 = state_18746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18746__$1,(2),inst_18731);
} else {
if((state_val_18747 === (2))){
var inst_18733 = (state_18746[(2)]);
var inst_18734 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18746__$1 = (function (){var statearr_18748 = state_18746;
(statearr_18748[(7)] = inst_18733);

return statearr_18748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18746__$1,(3),inst_18734);
} else {
if((state_val_18747 === (3))){
var inst_18736 = (state_18746[(2)]);
var inst_18737 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18738 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18736];
var inst_18739 = (new cljs.core.PersistentVector(null,2,(5),inst_18737,inst_18738,null));
var inst_18740 = re_frame.core.dispatch_sync.call(null,inst_18739);
var inst_18741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18742 = [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false];
var inst_18743 = (new cljs.core.PersistentVector(null,2,(5),inst_18741,inst_18742,null));
var inst_18744 = re_frame.core.dispatch.call(null,inst_18743);
var state_18746__$1 = (function (){var statearr_18749 = state_18746;
(statearr_18749[(8)] = inst_18740);

return statearr_18749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18746__$1,inst_18744);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0 = (function (){
var statearr_18750 = [null,null,null,null,null,null,null,null,null];
(statearr_18750[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__);

(statearr_18750[(1)] = (1));

return statearr_18750;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1 = (function (state_18746){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18751){var ex__18250__auto__ = e18751;
var statearr_18752_18755 = state_18746;
(statearr_18752_18755[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18746[(4)]))){
var statearr_18753_18756 = state_18746;
(statearr_18753_18756[(1)] = cljs.core.first.call(null,(state_18746[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18757 = state_18746;
state_18746 = G__18757;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__ = function(state_18746){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1.call(this,state_18746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18754 = f__18270__auto__.call(null);
(statearr_18754[(6)] = c__18269__auto__);

return statearr_18754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18271__auto__);
}));

return c__18269__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.views.datensicherung.dateien__GT_table = (function dep$views$datensicherung$dateien__GT_table(dateien){
return cljs.core.mapv.call(null,(function (p1__18758_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572),new cljs.core.Keyword(null,"alter-name","alter-name",1575294286)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18758_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__18758_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.loesche_datei.call(null,p1__18758_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.lade_welt_aus_datei.call(null,p1__18758_SHARP_);
})], null),"laden"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18758_SHARP_)]);
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
var c__18269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18773){
var state_val_18774 = (state_18773[(1)]);
if((state_val_18774 === (1))){
var inst_18759 = cljs.core.prn_str.call(null,welt);
var inst_18760 = cljs.core.deref.call(null,s);
var inst_18761 = new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(inst_18760);
var inst_18762 = dep.helpers.drop_file_stream.write_text.call(null,inst_18759,inst_18761);
var state_18773__$1 = state_18773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18773__$1,(2),inst_18762);
} else {
if((state_val_18774 === (2))){
var inst_18764 = (state_18773[(2)]);
var inst_18765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18766 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18773__$1 = (function (){var statearr_18775 = state_18773;
(statearr_18775[(7)] = inst_18764);

(statearr_18775[(8)] = inst_18765);

return statearr_18775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18773__$1,(3),inst_18766);
} else {
if((state_val_18774 === (3))){
var inst_18765 = (state_18773[(8)]);
var inst_18768 = (state_18773[(2)]);
var inst_18769 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18768];
var inst_18770 = (new cljs.core.PersistentVector(null,2,(5),inst_18765,inst_18769,null));
var inst_18771 = re_frame.core.dispatch_sync.call(null,inst_18770);
var state_18773__$1 = state_18773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18773__$1,inst_18771);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0 = (function (){
var statearr_18776 = [null,null,null,null,null,null,null,null,null];
(statearr_18776[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__);

(statearr_18776[(1)] = (1));

return statearr_18776;
});
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1 = (function (state_18773){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18777){var ex__18250__auto__ = e18777;
var statearr_18778_18781 = state_18773;
(statearr_18778_18781[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18773[(4)]))){
var statearr_18779_18782 = state_18773;
(statearr_18779_18782[(1)] = cljs.core.first.call(null,(state_18773[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18783 = state_18773;
state_18773 = G__18783;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__ = function(state_18773){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1.call(this,state_18773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18780 = f__18270__auto__.call(null);
(statearr_18780[(6)] = c__18269__auto__);

return statearr_18780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18271__auto__);
}));

return c__18269__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table.call(null,dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
