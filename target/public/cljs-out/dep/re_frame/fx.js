// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__16380 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16381 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16381);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___16414 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___16414)){
var new_db_16415 = temp__5735__auto___16414;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16415);
} else {
}

var seq__16382 = cljs.core.seq.call(null,effects_without_db);
var chunk__16383 = null;
var count__16384 = (0);
var i__16385 = (0);
while(true){
if((i__16385 < count__16384)){
var vec__16392 = cljs.core._nth.call(null,chunk__16383,i__16385);
var effect_key = cljs.core.nth.call(null,vec__16392,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16392,(1),null);
var temp__5733__auto___16416 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16416)){
var effect_fn_16417 = temp__5733__auto___16416;
effect_fn_16417.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16418 = seq__16382;
var G__16419 = chunk__16383;
var G__16420 = count__16384;
var G__16421 = (i__16385 + (1));
seq__16382 = G__16418;
chunk__16383 = G__16419;
count__16384 = G__16420;
i__16385 = G__16421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16382);
if(temp__5735__auto__){
var seq__16382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16382__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16382__$1);
var G__16422 = cljs.core.chunk_rest.call(null,seq__16382__$1);
var G__16423 = c__4556__auto__;
var G__16424 = cljs.core.count.call(null,c__4556__auto__);
var G__16425 = (0);
seq__16382 = G__16422;
chunk__16383 = G__16423;
count__16384 = G__16424;
i__16385 = G__16425;
continue;
} else {
var vec__16395 = cljs.core.first.call(null,seq__16382__$1);
var effect_key = cljs.core.nth.call(null,vec__16395,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16395,(1),null);
var temp__5733__auto___16426 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16426)){
var effect_fn_16427 = temp__5733__auto___16426;
effect_fn_16427.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16428 = cljs.core.next.call(null,seq__16382__$1);
var G__16429 = null;
var G__16430 = (0);
var G__16431 = (0);
seq__16382 = G__16428;
chunk__16383 = G__16429;
count__16384 = G__16430;
i__16385 = G__16431;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16175__auto___16432 = re_frame.interop.now.call(null);
var duration__16176__auto___16433 = (end__16175__auto___16432 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16176__auto___16433,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16175__auto___16432);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16380);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___16434 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___16434)){
var new_db_16435 = temp__5735__auto___16434;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16435);
} else {
}

var seq__16398 = cljs.core.seq.call(null,effects_without_db);
var chunk__16399 = null;
var count__16400 = (0);
var i__16401 = (0);
while(true){
if((i__16401 < count__16400)){
var vec__16408 = cljs.core._nth.call(null,chunk__16399,i__16401);
var effect_key = cljs.core.nth.call(null,vec__16408,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16408,(1),null);
var temp__5733__auto___16436 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16436)){
var effect_fn_16437 = temp__5733__auto___16436;
effect_fn_16437.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16438 = seq__16398;
var G__16439 = chunk__16399;
var G__16440 = count__16400;
var G__16441 = (i__16401 + (1));
seq__16398 = G__16438;
chunk__16399 = G__16439;
count__16400 = G__16440;
i__16401 = G__16441;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16398);
if(temp__5735__auto__){
var seq__16398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16398__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16398__$1);
var G__16442 = cljs.core.chunk_rest.call(null,seq__16398__$1);
var G__16443 = c__4556__auto__;
var G__16444 = cljs.core.count.call(null,c__4556__auto__);
var G__16445 = (0);
seq__16398 = G__16442;
chunk__16399 = G__16443;
count__16400 = G__16444;
i__16401 = G__16445;
continue;
} else {
var vec__16411 = cljs.core.first.call(null,seq__16398__$1);
var effect_key = cljs.core.nth.call(null,vec__16411,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16411,(1),null);
var temp__5733__auto___16446 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16446)){
var effect_fn_16447 = temp__5733__auto___16446;
effect_fn_16447.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16448 = cljs.core.next.call(null,seq__16398__$1);
var G__16449 = null;
var G__16450 = (0);
var G__16451 = (0);
seq__16398 = G__16448;
chunk__16399 = G__16449;
count__16400 = G__16450;
i__16401 = G__16451;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16452){
var map__16453 = p__16452;
var map__16453__$1 = (((((!((map__16453 == null))))?(((((map__16453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16453):map__16453);
var effect = map__16453__$1;
var ms = cljs.core.get.call(null,map__16453__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16453__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__16455 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16456 = null;
var count__16457 = (0);
var i__16458 = (0);
while(true){
if((i__16458 < count__16457)){
var effect = cljs.core._nth.call(null,chunk__16456,i__16458);
re_frame.fx.dispatch_later.call(null,effect);


var G__16459 = seq__16455;
var G__16460 = chunk__16456;
var G__16461 = count__16457;
var G__16462 = (i__16458 + (1));
seq__16455 = G__16459;
chunk__16456 = G__16460;
count__16457 = G__16461;
i__16458 = G__16462;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16455);
if(temp__5735__auto__){
var seq__16455__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16455__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16455__$1);
var G__16463 = cljs.core.chunk_rest.call(null,seq__16455__$1);
var G__16464 = c__4556__auto__;
var G__16465 = cljs.core.count.call(null,c__4556__auto__);
var G__16466 = (0);
seq__16455 = G__16463;
chunk__16456 = G__16464;
count__16457 = G__16465;
i__16458 = G__16466;
continue;
} else {
var effect = cljs.core.first.call(null,seq__16455__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__16467 = cljs.core.next.call(null,seq__16455__$1);
var G__16468 = null;
var G__16469 = (0);
var G__16470 = (0);
seq__16455 = G__16467;
chunk__16456 = G__16468;
count__16457 = G__16469;
i__16458 = G__16470;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__16471 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16472 = null;
var count__16473 = (0);
var i__16474 = (0);
while(true){
if((i__16474 < count__16473)){
var vec__16481 = cljs.core._nth.call(null,chunk__16472,i__16474);
var effect_key = cljs.core.nth.call(null,vec__16481,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16481,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___16487 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16487)){
var effect_fn_16488 = temp__5733__auto___16487;
effect_fn_16488.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16489 = seq__16471;
var G__16490 = chunk__16472;
var G__16491 = count__16473;
var G__16492 = (i__16474 + (1));
seq__16471 = G__16489;
chunk__16472 = G__16490;
count__16473 = G__16491;
i__16474 = G__16492;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16471);
if(temp__5735__auto__){
var seq__16471__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16471__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16471__$1);
var G__16493 = cljs.core.chunk_rest.call(null,seq__16471__$1);
var G__16494 = c__4556__auto__;
var G__16495 = cljs.core.count.call(null,c__4556__auto__);
var G__16496 = (0);
seq__16471 = G__16493;
chunk__16472 = G__16494;
count__16473 = G__16495;
i__16474 = G__16496;
continue;
} else {
var vec__16484 = cljs.core.first.call(null,seq__16471__$1);
var effect_key = cljs.core.nth.call(null,vec__16484,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16484,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___16497 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16497)){
var effect_fn_16498 = temp__5733__auto___16497;
effect_fn_16498.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16499 = cljs.core.next.call(null,seq__16471__$1);
var G__16500 = null;
var G__16501 = (0);
var G__16502 = (0);
seq__16471 = G__16499;
chunk__16472 = G__16500;
count__16473 = G__16501;
i__16474 = G__16502;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__16503 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16504 = null;
var count__16505 = (0);
var i__16506 = (0);
while(true){
if((i__16506 < count__16505)){
var event = cljs.core._nth.call(null,chunk__16504,i__16506);
re_frame.router.dispatch.call(null,event);


var G__16507 = seq__16503;
var G__16508 = chunk__16504;
var G__16509 = count__16505;
var G__16510 = (i__16506 + (1));
seq__16503 = G__16507;
chunk__16504 = G__16508;
count__16505 = G__16509;
i__16506 = G__16510;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16503);
if(temp__5735__auto__){
var seq__16503__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16503__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16503__$1);
var G__16511 = cljs.core.chunk_rest.call(null,seq__16503__$1);
var G__16512 = c__4556__auto__;
var G__16513 = cljs.core.count.call(null,c__4556__auto__);
var G__16514 = (0);
seq__16503 = G__16511;
chunk__16504 = G__16512;
count__16505 = G__16513;
i__16506 = G__16514;
continue;
} else {
var event = cljs.core.first.call(null,seq__16503__$1);
re_frame.router.dispatch.call(null,event);


var G__16515 = cljs.core.next.call(null,seq__16503__$1);
var G__16516 = null;
var G__16517 = (0);
var G__16518 = (0);
seq__16503 = G__16515;
chunk__16504 = G__16516;
count__16505 = G__16517;
i__16506 = G__16518;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__16519 = cljs.core.seq.call(null,value);
var chunk__16520 = null;
var count__16521 = (0);
var i__16522 = (0);
while(true){
if((i__16522 < count__16521)){
var event = cljs.core._nth.call(null,chunk__16520,i__16522);
clear_event.call(null,event);


var G__16523 = seq__16519;
var G__16524 = chunk__16520;
var G__16525 = count__16521;
var G__16526 = (i__16522 + (1));
seq__16519 = G__16523;
chunk__16520 = G__16524;
count__16521 = G__16525;
i__16522 = G__16526;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16519);
if(temp__5735__auto__){
var seq__16519__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16519__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16519__$1);
var G__16527 = cljs.core.chunk_rest.call(null,seq__16519__$1);
var G__16528 = c__4556__auto__;
var G__16529 = cljs.core.count.call(null,c__4556__auto__);
var G__16530 = (0);
seq__16519 = G__16527;
chunk__16520 = G__16528;
count__16521 = G__16529;
i__16522 = G__16530;
continue;
} else {
var event = cljs.core.first.call(null,seq__16519__$1);
clear_event.call(null,event);


var G__16531 = cljs.core.next.call(null,seq__16519__$1);
var G__16532 = null;
var G__16533 = (0);
var G__16534 = (0);
seq__16519 = G__16531;
chunk__16520 = G__16532;
count__16521 = G__16533;
i__16522 = G__16534;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
