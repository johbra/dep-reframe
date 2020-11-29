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
var _STAR_current_trace_STAR__orig_val__10208 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10209 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10209);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___10242 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___10242)){
var new_db_10243 = temp__5735__auto___10242;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_10243);
} else {
}

var seq__10210 = cljs.core.seq.call(null,effects_without_db);
var chunk__10211 = null;
var count__10212 = (0);
var i__10213 = (0);
while(true){
if((i__10213 < count__10212)){
var vec__10220 = cljs.core._nth.call(null,chunk__10211,i__10213);
var effect_key = cljs.core.nth.call(null,vec__10220,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10220,(1),null);
var temp__5733__auto___10244 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10244)){
var effect_fn_10245 = temp__5733__auto___10244;
effect_fn_10245.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10246 = seq__10210;
var G__10247 = chunk__10211;
var G__10248 = count__10212;
var G__10249 = (i__10213 + (1));
seq__10210 = G__10246;
chunk__10211 = G__10247;
count__10212 = G__10248;
i__10213 = G__10249;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10210);
if(temp__5735__auto__){
var seq__10210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10210__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10210__$1);
var G__10250 = cljs.core.chunk_rest.call(null,seq__10210__$1);
var G__10251 = c__4556__auto__;
var G__10252 = cljs.core.count.call(null,c__4556__auto__);
var G__10253 = (0);
seq__10210 = G__10250;
chunk__10211 = G__10251;
count__10212 = G__10252;
i__10213 = G__10253;
continue;
} else {
var vec__10223 = cljs.core.first.call(null,seq__10210__$1);
var effect_key = cljs.core.nth.call(null,vec__10223,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10223,(1),null);
var temp__5733__auto___10254 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10254)){
var effect_fn_10255 = temp__5733__auto___10254;
effect_fn_10255.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10256 = cljs.core.next.call(null,seq__10210__$1);
var G__10257 = null;
var G__10258 = (0);
var G__10259 = (0);
seq__10210 = G__10256;
chunk__10211 = G__10257;
count__10212 = G__10258;
i__10213 = G__10259;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10003__auto___10260 = re_frame.interop.now.call(null);
var duration__10004__auto___10261 = (end__10003__auto___10260 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10004__auto___10261,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__10003__auto___10260);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10208);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___10262 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___10262)){
var new_db_10263 = temp__5735__auto___10262;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_10263);
} else {
}

var seq__10226 = cljs.core.seq.call(null,effects_without_db);
var chunk__10227 = null;
var count__10228 = (0);
var i__10229 = (0);
while(true){
if((i__10229 < count__10228)){
var vec__10236 = cljs.core._nth.call(null,chunk__10227,i__10229);
var effect_key = cljs.core.nth.call(null,vec__10236,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10236,(1),null);
var temp__5733__auto___10264 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10264)){
var effect_fn_10265 = temp__5733__auto___10264;
effect_fn_10265.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10266 = seq__10226;
var G__10267 = chunk__10227;
var G__10268 = count__10228;
var G__10269 = (i__10229 + (1));
seq__10226 = G__10266;
chunk__10227 = G__10267;
count__10228 = G__10268;
i__10229 = G__10269;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10226);
if(temp__5735__auto__){
var seq__10226__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10226__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10226__$1);
var G__10270 = cljs.core.chunk_rest.call(null,seq__10226__$1);
var G__10271 = c__4556__auto__;
var G__10272 = cljs.core.count.call(null,c__4556__auto__);
var G__10273 = (0);
seq__10226 = G__10270;
chunk__10227 = G__10271;
count__10228 = G__10272;
i__10229 = G__10273;
continue;
} else {
var vec__10239 = cljs.core.first.call(null,seq__10226__$1);
var effect_key = cljs.core.nth.call(null,vec__10239,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10239,(1),null);
var temp__5733__auto___10274 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10274)){
var effect_fn_10275 = temp__5733__auto___10274;
effect_fn_10275.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10276 = cljs.core.next.call(null,seq__10226__$1);
var G__10277 = null;
var G__10278 = (0);
var G__10279 = (0);
seq__10226 = G__10276;
chunk__10227 = G__10277;
count__10228 = G__10278;
i__10229 = G__10279;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__10280){
var map__10281 = p__10280;
var map__10281__$1 = (((((!((map__10281 == null))))?(((((map__10281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10281):map__10281);
var effect = map__10281__$1;
var ms = cljs.core.get.call(null,map__10281__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10281__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__10283 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10284 = null;
var count__10285 = (0);
var i__10286 = (0);
while(true){
if((i__10286 < count__10285)){
var effect = cljs.core._nth.call(null,chunk__10284,i__10286);
re_frame.fx.dispatch_later.call(null,effect);


var G__10287 = seq__10283;
var G__10288 = chunk__10284;
var G__10289 = count__10285;
var G__10290 = (i__10286 + (1));
seq__10283 = G__10287;
chunk__10284 = G__10288;
count__10285 = G__10289;
i__10286 = G__10290;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10283);
if(temp__5735__auto__){
var seq__10283__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10283__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10283__$1);
var G__10291 = cljs.core.chunk_rest.call(null,seq__10283__$1);
var G__10292 = c__4556__auto__;
var G__10293 = cljs.core.count.call(null,c__4556__auto__);
var G__10294 = (0);
seq__10283 = G__10291;
chunk__10284 = G__10292;
count__10285 = G__10293;
i__10286 = G__10294;
continue;
} else {
var effect = cljs.core.first.call(null,seq__10283__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__10295 = cljs.core.next.call(null,seq__10283__$1);
var G__10296 = null;
var G__10297 = (0);
var G__10298 = (0);
seq__10283 = G__10295;
chunk__10284 = G__10296;
count__10285 = G__10297;
i__10286 = G__10298;
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
var seq__10299 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__10300 = null;
var count__10301 = (0);
var i__10302 = (0);
while(true){
if((i__10302 < count__10301)){
var vec__10309 = cljs.core._nth.call(null,chunk__10300,i__10302);
var effect_key = cljs.core.nth.call(null,vec__10309,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10309,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___10315 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10315)){
var effect_fn_10316 = temp__5733__auto___10315;
effect_fn_10316.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__10317 = seq__10299;
var G__10318 = chunk__10300;
var G__10319 = count__10301;
var G__10320 = (i__10302 + (1));
seq__10299 = G__10317;
chunk__10300 = G__10318;
count__10301 = G__10319;
i__10302 = G__10320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10299);
if(temp__5735__auto__){
var seq__10299__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10299__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10299__$1);
var G__10321 = cljs.core.chunk_rest.call(null,seq__10299__$1);
var G__10322 = c__4556__auto__;
var G__10323 = cljs.core.count.call(null,c__4556__auto__);
var G__10324 = (0);
seq__10299 = G__10321;
chunk__10300 = G__10322;
count__10301 = G__10323;
i__10302 = G__10324;
continue;
} else {
var vec__10312 = cljs.core.first.call(null,seq__10299__$1);
var effect_key = cljs.core.nth.call(null,vec__10312,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10312,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___10325 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___10325)){
var effect_fn_10326 = temp__5733__auto___10325;
effect_fn_10326.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__10327 = cljs.core.next.call(null,seq__10299__$1);
var G__10328 = null;
var G__10329 = (0);
var G__10330 = (0);
seq__10299 = G__10327;
chunk__10300 = G__10328;
count__10301 = G__10329;
i__10302 = G__10330;
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
var seq__10331 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10332 = null;
var count__10333 = (0);
var i__10334 = (0);
while(true){
if((i__10334 < count__10333)){
var event = cljs.core._nth.call(null,chunk__10332,i__10334);
re_frame.router.dispatch.call(null,event);


var G__10335 = seq__10331;
var G__10336 = chunk__10332;
var G__10337 = count__10333;
var G__10338 = (i__10334 + (1));
seq__10331 = G__10335;
chunk__10332 = G__10336;
count__10333 = G__10337;
i__10334 = G__10338;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10331);
if(temp__5735__auto__){
var seq__10331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10331__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10331__$1);
var G__10339 = cljs.core.chunk_rest.call(null,seq__10331__$1);
var G__10340 = c__4556__auto__;
var G__10341 = cljs.core.count.call(null,c__4556__auto__);
var G__10342 = (0);
seq__10331 = G__10339;
chunk__10332 = G__10340;
count__10333 = G__10341;
i__10334 = G__10342;
continue;
} else {
var event = cljs.core.first.call(null,seq__10331__$1);
re_frame.router.dispatch.call(null,event);


var G__10343 = cljs.core.next.call(null,seq__10331__$1);
var G__10344 = null;
var G__10345 = (0);
var G__10346 = (0);
seq__10331 = G__10343;
chunk__10332 = G__10344;
count__10333 = G__10345;
i__10334 = G__10346;
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
var seq__10347 = cljs.core.seq.call(null,value);
var chunk__10348 = null;
var count__10349 = (0);
var i__10350 = (0);
while(true){
if((i__10350 < count__10349)){
var event = cljs.core._nth.call(null,chunk__10348,i__10350);
clear_event.call(null,event);


var G__10351 = seq__10347;
var G__10352 = chunk__10348;
var G__10353 = count__10349;
var G__10354 = (i__10350 + (1));
seq__10347 = G__10351;
chunk__10348 = G__10352;
count__10349 = G__10353;
i__10350 = G__10354;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10347);
if(temp__5735__auto__){
var seq__10347__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10347__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10347__$1);
var G__10355 = cljs.core.chunk_rest.call(null,seq__10347__$1);
var G__10356 = c__4556__auto__;
var G__10357 = cljs.core.count.call(null,c__4556__auto__);
var G__10358 = (0);
seq__10347 = G__10355;
chunk__10348 = G__10356;
count__10349 = G__10357;
i__10350 = G__10358;
continue;
} else {
var event = cljs.core.first.call(null,seq__10347__$1);
clear_event.call(null,event);


var G__10359 = cljs.core.next.call(null,seq__10347__$1);
var G__10360 = null;
var G__10361 = (0);
var G__10362 = (0);
seq__10347 = G__10359;
chunk__10348 = G__10360;
count__10349 = G__10361;
i__10350 = G__10362;
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
