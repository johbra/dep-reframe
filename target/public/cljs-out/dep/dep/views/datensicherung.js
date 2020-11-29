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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18617_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18617_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__18618_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18618_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)))));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__18269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18635){
var state_val_18636 = (state_18635[(1)]);
if((state_val_18636 === (1))){
var inst_18619 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_18620 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_18619);
var state_18635__$1 = state_18635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18635__$1,(2),inst_18620);
} else {
if((state_val_18636 === (2))){
var inst_18622 = (state_18635[(2)]);
var inst_18623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18624 = [new cljs.core.Keyword(null,"welt","welt",-1673248721),inst_18622];
var inst_18625 = (new cljs.core.PersistentVector(null,2,(5),inst_18623,inst_18624,null));
var inst_18626 = re_frame.core.dispatch.call(null,inst_18625);
var inst_18627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18628 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18635__$1 = (function (){var statearr_18637 = state_18635;
(statearr_18637[(7)] = inst_18626);

(statearr_18637[(8)] = inst_18627);

return statearr_18637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18635__$1,(3),inst_18628);
} else {
if((state_val_18636 === (3))){
var inst_18627 = (state_18635[(8)]);
var inst_18630 = (state_18635[(2)]);
var inst_18631 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18630];
var inst_18632 = (new cljs.core.PersistentVector(null,2,(5),inst_18627,inst_18631,null));
var inst_18633 = re_frame.core.dispatch.call(null,inst_18632);
var state_18635__$1 = state_18635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18635__$1,inst_18633);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0 = (function (){
var statearr_18638 = [null,null,null,null,null,null,null,null,null];
(statearr_18638[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__);

(statearr_18638[(1)] = (1));

return statearr_18638;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1 = (function (state_18635){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18639){var ex__18250__auto__ = e18639;
var statearr_18640_18643 = state_18635;
(statearr_18640_18643[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18635[(4)]))){
var statearr_18641_18644 = state_18635;
(statearr_18641_18644[(1)] = cljs.core.first.call(null,(state_18635[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18645 = state_18635;
state_18635 = G__18645;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__ = function(state_18635){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1.call(this,state_18635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18642 = f__18270__auto__.call(null);
(statearr_18642[(6)] = c__18269__auto__);

return statearr_18642;
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
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18661){
var state_val_18662 = (state_18661[(1)]);
if((state_val_18662 === (1))){
var inst_18646 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_18661__$1 = state_18661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18661__$1,(2),inst_18646);
} else {
if((state_val_18662 === (2))){
var inst_18648 = (state_18661[(2)]);
var inst_18649 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18661__$1 = (function (){var statearr_18663 = state_18661;
(statearr_18663[(7)] = inst_18648);

return statearr_18663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18661__$1,(3),inst_18649);
} else {
if((state_val_18662 === (3))){
var inst_18651 = (state_18661[(2)]);
var inst_18652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18653 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18651];
var inst_18654 = (new cljs.core.PersistentVector(null,2,(5),inst_18652,inst_18653,null));
var inst_18655 = re_frame.core.dispatch_sync.call(null,inst_18654);
var inst_18656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18657 = [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false];
var inst_18658 = (new cljs.core.PersistentVector(null,2,(5),inst_18656,inst_18657,null));
var inst_18659 = re_frame.core.dispatch.call(null,inst_18658);
var state_18661__$1 = (function (){var statearr_18664 = state_18661;
(statearr_18664[(8)] = inst_18655);

return statearr_18664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18661__$1,inst_18659);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0 = (function (){
var statearr_18665 = [null,null,null,null,null,null,null,null,null];
(statearr_18665[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__);

(statearr_18665[(1)] = (1));

return statearr_18665;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1 = (function (state_18661){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18666){var ex__18250__auto__ = e18666;
var statearr_18667_18670 = state_18661;
(statearr_18667_18670[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18661[(4)]))){
var statearr_18668_18671 = state_18661;
(statearr_18668_18671[(1)] = cljs.core.first.call(null,(state_18661[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18672 = state_18661;
state_18661 = G__18672;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__ = function(state_18661){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1.call(this,state_18661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18669 = f__18270__auto__.call(null);
(statearr_18669[(6)] = c__18269__auto__);

return statearr_18669;
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
return cljs.core.mapv.call(null,(function (p1__18673_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572),new cljs.core.Keyword(null,"alter-name","alter-name",1575294286)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18673_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__18673_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.loesche_datei.call(null,p1__18673_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.lade_welt_aus_datei.call(null,p1__18673_SHARP_);
})], null),"laden"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18673_SHARP_)]);
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
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18688){
var state_val_18689 = (state_18688[(1)]);
if((state_val_18689 === (1))){
var inst_18674 = cljs.core.prn_str.call(null,welt);
var inst_18675 = cljs.core.deref.call(null,s);
var inst_18676 = new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(inst_18675);
var inst_18677 = dep.helpers.drop_file_stream.write_text.call(null,inst_18674,inst_18676);
var state_18688__$1 = state_18688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18688__$1,(2),inst_18677);
} else {
if((state_val_18689 === (2))){
var inst_18679 = (state_18688[(2)]);
var inst_18680 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18681 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18688__$1 = (function (){var statearr_18690 = state_18688;
(statearr_18690[(7)] = inst_18680);

(statearr_18690[(8)] = inst_18679);

return statearr_18690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18688__$1,(3),inst_18681);
} else {
if((state_val_18689 === (3))){
var inst_18680 = (state_18688[(7)]);
var inst_18683 = (state_18688[(2)]);
var inst_18684 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18683];
var inst_18685 = (new cljs.core.PersistentVector(null,2,(5),inst_18680,inst_18684,null));
var inst_18686 = re_frame.core.dispatch_sync.call(null,inst_18685);
var state_18688__$1 = state_18688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18688__$1,inst_18686);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0 = (function (){
var statearr_18691 = [null,null,null,null,null,null,null,null,null];
(statearr_18691[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__);

(statearr_18691[(1)] = (1));

return statearr_18691;
});
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1 = (function (state_18688){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18692){var ex__18250__auto__ = e18692;
var statearr_18693_18696 = state_18688;
(statearr_18693_18696[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18688[(4)]))){
var statearr_18694_18697 = state_18688;
(statearr_18694_18697[(1)] = cljs.core.first.call(null,(state_18688[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18698 = state_18688;
state_18688 = G__18698;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__ = function(state_18688){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1.call(this,state_18688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18695 = f__18270__auto__.call(null);
(statearr_18695[(6)] = c__18269__auto__);

return statearr_18695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18271__auto__);
}));

return c__18269__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table.call(null,dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
