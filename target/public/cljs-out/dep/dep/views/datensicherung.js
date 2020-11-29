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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18451_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18451_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__18452_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18452_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)))));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__18269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18469){
var state_val_18470 = (state_18469[(1)]);
if((state_val_18470 === (1))){
var inst_18453 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_18454 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_18453);
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18469__$1,(2),inst_18454);
} else {
if((state_val_18470 === (2))){
var inst_18456 = (state_18469[(2)]);
var inst_18457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18458 = [new cljs.core.Keyword(null,"welt","welt",-1673248721),inst_18456];
var inst_18459 = (new cljs.core.PersistentVector(null,2,(5),inst_18457,inst_18458,null));
var inst_18460 = re_frame.core.dispatch.call(null,inst_18459);
var inst_18461 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18462 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18469__$1 = (function (){var statearr_18471 = state_18469;
(statearr_18471[(7)] = inst_18461);

(statearr_18471[(8)] = inst_18460);

return statearr_18471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18469__$1,(3),inst_18462);
} else {
if((state_val_18470 === (3))){
var inst_18461 = (state_18469[(7)]);
var inst_18464 = (state_18469[(2)]);
var inst_18465 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18464];
var inst_18466 = (new cljs.core.PersistentVector(null,2,(5),inst_18461,inst_18465,null));
var inst_18467 = re_frame.core.dispatch.call(null,inst_18466);
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18469__$1,inst_18467);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0 = (function (){
var statearr_18472 = [null,null,null,null,null,null,null,null,null];
(statearr_18472[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__);

(statearr_18472[(1)] = (1));

return statearr_18472;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1 = (function (state_18469){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18473){var ex__18250__auto__ = e18473;
var statearr_18474_18477 = state_18469;
(statearr_18474_18477[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18469[(4)]))){
var statearr_18475_18478 = state_18469;
(statearr_18475_18478[(1)] = cljs.core.first.call(null,(state_18469[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18479 = state_18469;
state_18469 = G__18479;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__ = function(state_18469){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1.call(this,state_18469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18476 = f__18270__auto__.call(null);
(statearr_18476[(6)] = c__18269__auto__);

return statearr_18476;
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
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18495){
var state_val_18496 = (state_18495[(1)]);
if((state_val_18496 === (1))){
var inst_18480 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18495__$1,(2),inst_18480);
} else {
if((state_val_18496 === (2))){
var inst_18482 = (state_18495[(2)]);
var inst_18483 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18495__$1 = (function (){var statearr_18497 = state_18495;
(statearr_18497[(7)] = inst_18482);

return statearr_18497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18495__$1,(3),inst_18483);
} else {
if((state_val_18496 === (3))){
var inst_18485 = (state_18495[(2)]);
var inst_18486 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18487 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18485];
var inst_18488 = (new cljs.core.PersistentVector(null,2,(5),inst_18486,inst_18487,null));
var inst_18489 = re_frame.core.dispatch_sync.call(null,inst_18488);
var inst_18490 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18491 = [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false];
var inst_18492 = (new cljs.core.PersistentVector(null,2,(5),inst_18490,inst_18491,null));
var inst_18493 = re_frame.core.dispatch.call(null,inst_18492);
var state_18495__$1 = (function (){var statearr_18498 = state_18495;
(statearr_18498[(8)] = inst_18489);

return statearr_18498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18495__$1,inst_18493);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0 = (function (){
var statearr_18499 = [null,null,null,null,null,null,null,null,null];
(statearr_18499[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__);

(statearr_18499[(1)] = (1));

return statearr_18499;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1 = (function (state_18495){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18500){var ex__18250__auto__ = e18500;
var statearr_18501_18504 = state_18495;
(statearr_18501_18504[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18495[(4)]))){
var statearr_18502_18505 = state_18495;
(statearr_18502_18505[(1)] = cljs.core.first.call(null,(state_18495[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18506 = state_18495;
state_18495 = G__18506;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__ = function(state_18495){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1.call(this,state_18495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18503 = f__18270__auto__.call(null);
(statearr_18503[(6)] = c__18269__auto__);

return statearr_18503;
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
return cljs.core.mapv.call(null,(function (p1__18507_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572),new cljs.core.Keyword(null,"alter-name","alter-name",1575294286)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18507_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__18507_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.loesche_datei.call(null,p1__18507_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.lade_welt_aus_datei.call(null,p1__18507_SHARP_);
})], null),"laden"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18507_SHARP_)]);
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
var f__18270__auto__ = (function (){var switch__18246__auto__ = (function (state_18522){
var state_val_18523 = (state_18522[(1)]);
if((state_val_18523 === (1))){
var inst_18508 = cljs.core.prn_str.call(null,welt);
var inst_18509 = cljs.core.deref.call(null,s);
var inst_18510 = new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(inst_18509);
var inst_18511 = dep.helpers.drop_file_stream.write_text.call(null,inst_18508,inst_18510);
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18522__$1,(2),inst_18511);
} else {
if((state_val_18523 === (2))){
var inst_18513 = (state_18522[(2)]);
var inst_18514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18515 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_18522__$1 = (function (){var statearr_18524 = state_18522;
(statearr_18524[(7)] = inst_18514);

(statearr_18524[(8)] = inst_18513);

return statearr_18524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18522__$1,(3),inst_18515);
} else {
if((state_val_18523 === (3))){
var inst_18514 = (state_18522[(7)]);
var inst_18517 = (state_18522[(2)]);
var inst_18518 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_18517];
var inst_18519 = (new cljs.core.PersistentVector(null,2,(5),inst_18514,inst_18518,null));
var inst_18520 = re_frame.core.dispatch_sync.call(null,inst_18519);
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18522__$1,inst_18520);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0 = (function (){
var statearr_18525 = [null,null,null,null,null,null,null,null,null];
(statearr_18525[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__);

(statearr_18525[(1)] = (1));

return statearr_18525;
});
var dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1 = (function (state_18522){
while(true){
var ret_value__18248__auto__ = (function (){try{while(true){
var result__18249__auto__ = switch__18246__auto__.call(null,state_18522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18249__auto__;
}
break;
}
}catch (e18526){var ex__18250__auto__ = e18526;
var statearr_18527_18530 = state_18522;
(statearr_18527_18530[(2)] = ex__18250__auto__);


if(cljs.core.seq.call(null,(state_18522[(4)]))){
var statearr_18528_18531 = state_18522;
(statearr_18528_18531[(1)] = cljs.core.first.call(null,(state_18522[(4)])));

} else {
throw ex__18250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18532 = state_18522;
state_18522 = G__18532;
continue;
} else {
return ret_value__18248__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__ = function(state_18522){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1.call(this,state_18522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__18247__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__18247__auto__;
})()
})();
var state__18271__auto__ = (function (){var statearr_18529 = f__18270__auto__.call(null);
(statearr_18529[(6)] = c__18269__auto__);

return statearr_18529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18271__auto__);
}));

return c__18269__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table.call(null,dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
