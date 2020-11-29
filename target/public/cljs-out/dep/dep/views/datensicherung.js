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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__21483_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__21483_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__21484_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__21484_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)))));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21501){
var state_val_21502 = (state_21501[(1)]);
if((state_val_21502 === (1))){
var inst_21485 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_21486 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_21485);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21501__$1,(2),inst_21486);
} else {
if((state_val_21502 === (2))){
var inst_21488 = (state_21501[(2)]);
var inst_21489 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21490 = [new cljs.core.Keyword(null,"welt","welt",-1673248721),inst_21488];
var inst_21491 = (new cljs.core.PersistentVector(null,2,(5),inst_21489,inst_21490,null));
var inst_21492 = re_frame.core.dispatch.call(null,inst_21491);
var inst_21493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21494 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_21501__$1 = (function (){var statearr_21503 = state_21501;
(statearr_21503[(7)] = inst_21493);

(statearr_21503[(8)] = inst_21492);

return statearr_21503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21501__$1,(3),inst_21494);
} else {
if((state_val_21502 === (3))){
var inst_21493 = (state_21501[(7)]);
var inst_21496 = (state_21501[(2)]);
var inst_21497 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_21496];
var inst_21498 = (new cljs.core.PersistentVector(null,2,(5),inst_21493,inst_21497,null));
var inst_21499 = re_frame.core.dispatch.call(null,inst_21498);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto____0 = (function (){
var statearr_21504 = [null,null,null,null,null,null,null,null,null];
(statearr_21504[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto__);

(statearr_21504[(1)] = (1));

return statearr_21504;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto____1 = (function (state_21501){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21505){var ex__13025__auto__ = e21505;
var statearr_21506_21509 = state_21501;
(statearr_21506_21509[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21501[(4)]))){
var statearr_21507_21510 = state_21501;
(statearr_21507_21510[(1)] = cljs.core.first.call(null,(state_21501[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21511 = state_21501;
state_21501 = G__21511;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21508 = f__13096__auto__.call(null);
(statearr_21508[(6)] = c__13095__auto__);

return statearr_21508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});
dep.views.datensicherung.umbenenne_datei = (function dep$views$datensicherung$umbenenne_datei(alter_name,neuer_name){
var dateien = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)));
if(cljs.core.truth_(dep.views.datensicherung.datei_mit_namen.call(null,dateien,neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21527){
var state_val_21528 = (state_21527[(1)]);
if((state_val_21528 === (1))){
var inst_21512 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_21527__$1 = state_21527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21527__$1,(2),inst_21512);
} else {
if((state_val_21528 === (2))){
var inst_21514 = (state_21527[(2)]);
var inst_21515 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_21527__$1 = (function (){var statearr_21529 = state_21527;
(statearr_21529[(7)] = inst_21514);

return statearr_21529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21527__$1,(3),inst_21515);
} else {
if((state_val_21528 === (3))){
var inst_21517 = (state_21527[(2)]);
var inst_21518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21519 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_21517];
var inst_21520 = (new cljs.core.PersistentVector(null,2,(5),inst_21518,inst_21519,null));
var inst_21521 = re_frame.core.dispatch_sync.call(null,inst_21520);
var inst_21522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21523 = [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false];
var inst_21524 = (new cljs.core.PersistentVector(null,2,(5),inst_21522,inst_21523,null));
var inst_21525 = re_frame.core.dispatch.call(null,inst_21524);
var state_21527__$1 = (function (){var statearr_21530 = state_21527;
(statearr_21530[(8)] = inst_21521);

return statearr_21530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21527__$1,inst_21525);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto____0 = (function (){
var statearr_21531 = [null,null,null,null,null,null,null,null,null];
(statearr_21531[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto__);

(statearr_21531[(1)] = (1));

return statearr_21531;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto____1 = (function (state_21527){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21532){var ex__13025__auto__ = e21532;
var statearr_21533_21536 = state_21527;
(statearr_21533_21536[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21527[(4)]))){
var statearr_21534_21537 = state_21527;
(statearr_21534_21537[(1)] = cljs.core.first.call(null,(state_21527[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21538 = state_21527;
state_21527 = G__21538;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto__ = function(state_21527){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto____1.call(this,state_21527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21535 = f__13096__auto__.call(null);
(statearr_21535[(6)] = c__13095__auto__);

return statearr_21535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.views.datensicherung.dateien__GT_table = (function dep$views$datensicherung$dateien__GT_table(dateien){
return cljs.core.mapv.call(null,(function (p1__21539_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572),new cljs.core.Keyword(null,"alter-name","alter-name",1575294286)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__21539_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__21539_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.loesche_datei.call(null,p1__21539_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.lade_welt_aus_datei.call(null,p1__21539_SHARP_);
})], null),"laden"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__21539_SHARP_)]);
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
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21554){
var state_val_21555 = (state_21554[(1)]);
if((state_val_21555 === (1))){
var inst_21540 = cljs.core.prn_str.call(null,welt);
var inst_21541 = cljs.core.deref.call(null,s);
var inst_21542 = new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(inst_21541);
var inst_21543 = dep.helpers.drop_file_stream.write_text.call(null,inst_21540,inst_21542);
var state_21554__$1 = state_21554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21554__$1,(2),inst_21543);
} else {
if((state_val_21555 === (2))){
var inst_21545 = (state_21554[(2)]);
var inst_21546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21547 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_21554__$1 = (function (){var statearr_21556 = state_21554;
(statearr_21556[(7)] = inst_21546);

(statearr_21556[(8)] = inst_21545);

return statearr_21556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21554__$1,(3),inst_21547);
} else {
if((state_val_21555 === (3))){
var inst_21546 = (state_21554[(7)]);
var inst_21549 = (state_21554[(2)]);
var inst_21550 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_21549];
var inst_21551 = (new cljs.core.PersistentVector(null,2,(5),inst_21546,inst_21550,null));
var inst_21552 = re_frame.core.dispatch_sync.call(null,inst_21551);
var state_21554__$1 = state_21554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21554__$1,inst_21552);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__13022__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__13022__auto____0 = (function (){
var statearr_21557 = [null,null,null,null,null,null,null,null,null];
(statearr_21557[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__13022__auto__);

(statearr_21557[(1)] = (1));

return statearr_21557;
});
var dep$views$datensicherung$datensicherung_$_state_machine__13022__auto____1 = (function (state_21554){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21558){var ex__13025__auto__ = e21558;
var statearr_21559_21562 = state_21554;
(statearr_21559_21562[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21554[(4)]))){
var statearr_21560_21563 = state_21554;
(statearr_21560_21563[(1)] = cljs.core.first.call(null,(state_21554[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21564 = state_21554;
state_21554 = G__21564;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__13022__auto__ = function(state_21554){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__13022__auto____1.call(this,state_21554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__13022__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__13022__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21561 = f__13096__auto__.call(null);
(statearr_21561[(6)] = c__13095__auto__);

return statearr_21561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table.call(null,dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
