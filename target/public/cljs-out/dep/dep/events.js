// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('dep.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('dep.model.quartal');
goog.require('dep.db');
goog.require('dep.helpers.drop_file_stream');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$welt,(function (_,p__26518){
var vec__26519 = p__26518;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519,(0),null);
var welt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519,(1),null);
return welt;
}));
re_frame.core.reg_fx(cljs.core.cst$kw$files,(function (db){
cljs.core.reset_BANG_(re_frame.db.app_db,db);

var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_26530){
var state_val_26531 = (state_26530[(1)]);
if((state_val_26531 === (1))){
var inst_26522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26523 = dep.helpers.drop_file_stream.list_folder();
var state_26530__$1 = (function (){var statearr_26532 = state_26530;
(statearr_26532[(7)] = inst_26522);

return statearr_26532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26530__$1,(2),inst_26523);
} else {
if((state_val_26531 === (2))){
var inst_26522 = (state_26530[(7)]);
var inst_26525 = (state_26530[(2)]);
var inst_26526 = [cljs.core.cst$kw$dateien,inst_26525];
var inst_26527 = (new cljs.core.PersistentVector(null,2,(5),inst_26522,inst_26526,null));
var inst_26528 = re_frame.core.dispatch(inst_26527);
var state_26530__$1 = state_26530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26530__$1,inst_26528);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__17032__auto__ = null;
var dep$events$state_machine__17032__auto____0 = (function (){
var statearr_26533 = [null,null,null,null,null,null,null,null];
(statearr_26533[(0)] = dep$events$state_machine__17032__auto__);

(statearr_26533[(1)] = (1));

return statearr_26533;
});
var dep$events$state_machine__17032__auto____1 = (function (state_26530){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_26530);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e26534){var ex__17035__auto__ = e26534;
var statearr_26535_26538 = state_26530;
(statearr_26535_26538[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_26530[(4)]))){
var statearr_26536_26539 = state_26530;
(statearr_26536_26539[(1)] = cljs.core.first((state_26530[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__26540 = state_26530;
state_26530 = G__26540;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
dep$events$state_machine__17032__auto__ = function(state_26530){
switch(arguments.length){
case 0:
return dep$events$state_machine__17032__auto____0.call(this);
case 1:
return dep$events$state_machine__17032__auto____1.call(this,state_26530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__17032__auto____0;
dep$events$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__17032__auto____1;
return dep$events$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_26537 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_26537[(6)] = c__17106__auto__);

return statearr_26537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialise_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$files,dep.db.default_db], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$table_DASH_sort,(function (db,p__26541){
var vec__26542 = p__26541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26542,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26542,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$table_DASH_sort,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_sort_DASH_sequence,(function (db,p__26545){
var vec__26546 = p__26545;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26546,(0),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_sort,cljs.core.cst$kw$ascending], null),cljs.core.not(cljs.core.cst$kw$ascending.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$table_DASH_sort.cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_sort_DASH_column,(function (db,p__26549){
var vec__26550 = p__26549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26550,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_sort,cljs.core.cst$kw$sort_DASH_column], null),item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$menu_DASH_item_DASH_selected,(function (db,p__26553){
var vec__26554 = p__26553;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26554,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26554,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_modal,(function (db,p__26557){
var vec__26558 = p__26557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(2),null);
var edit_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(3),null);
var buttons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(4),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$show_DASH_modal,item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$modal_DASH_form,form,cljs.core.cst$kw$edit_DASH_component,edit_component,cljs.core.cst$kw$buttons,buttons], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$geschaeftsjahr,(function (db,p__26561){
var vec__26562 = p__26561;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26562,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26562,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$geschaeftsjahr,parseInt(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quartal,cljs.core.first(dep.model.quartal.quartale_fuer_jahr(item))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$quartal,(function (db,p__26565){
var vec__26566 = p__26565;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26566,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26566,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$quartal,dep.model.quartal.string__GT_quartal(item));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jahre,(function (db,p__26569){
var vec__26570 = p__26569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26570,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26570,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$jahre,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dozenten,(function (db,p__26573){
var vec__26574 = p__26573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26574,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26574,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$dozenten,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$studienrichtungen,(function (db,p__26577){
var vec__26578 = p__26577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$studienrichtungen,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$manipels,(function (db,p__26581){
var vec__26582 = p__26581;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26582,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26582,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$manipels,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$module,(function (db,p__26585){
var vec__26586 = p__26585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$module,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lven,(function (db,p__26589){
var vec__26590 = p__26589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26590,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26590,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$lven,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dateien,(function (db,p__26593){
var vec__26594 = p__26593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26594,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26594,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$dateien,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loesche_DASH_datei,(function (db,p__26597){
var vec__26598 = p__26597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26598,(0),null);
var dateien = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26598,(1),null);
var datei = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26598,(2),null);
var c__17106__auto___26613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_26606){
var state_val_26607 = (state_26606[(1)]);
if((state_val_26607 === (1))){
var inst_26601 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(datei);
var inst_26602 = dep.helpers.drop_file_stream.delete_file_named(inst_26601);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26606__$1,(2),inst_26602);
} else {
if((state_val_26607 === (2))){
var inst_26604 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26606__$1,inst_26604);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__17032__auto__ = null;
var dep$events$state_machine__17032__auto____0 = (function (){
var statearr_26608 = [null,null,null,null,null,null,null];
(statearr_26608[(0)] = dep$events$state_machine__17032__auto__);

(statearr_26608[(1)] = (1));

return statearr_26608;
});
var dep$events$state_machine__17032__auto____1 = (function (state_26606){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_26606);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e26609){var ex__17035__auto__ = e26609;
var statearr_26610_26614 = state_26606;
(statearr_26610_26614[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_26606[(4)]))){
var statearr_26611_26615 = state_26606;
(statearr_26611_26615[(1)] = cljs.core.first((state_26606[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__26616 = state_26606;
state_26606 = G__26616;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
dep$events$state_machine__17032__auto__ = function(state_26606){
switch(arguments.length){
case 0:
return dep$events$state_machine__17032__auto____0.call(this);
case 1:
return dep$events$state_machine__17032__auto____1.call(this,state_26606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__17032__auto____0;
dep$events$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__17032__auto____1;
return dep$events$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_26612 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_26612[(6)] = c__17106__auto___26613);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$dateien,dateien);
}));
