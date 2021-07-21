// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__29956 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__29957 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__29957);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___29992 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___29992)){
var new_db_29993 = temp__5753__auto___29992;
var fexpr__29958_29994 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__29958_29994.cljs$core$IFn$_invoke$arity$1 ? fexpr__29958_29994.cljs$core$IFn$_invoke$arity$1(new_db_29993) : fexpr__29958_29994.call(null,new_db_29993));
} else {
}

var seq__29959 = cljs.core.seq(effects_without_db);
var chunk__29960 = null;
var count__29961 = (0);
var i__29962 = (0);
while(true){
if((i__29962 < count__29961)){
var vec__29969 = chunk__29960.cljs$core$IIndexed$_nth$arity$2(null,i__29962);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29969,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29969,(1),null);
var temp__5751__auto___29995 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___29995)){
var effect_fn_29996 = temp__5751__auto___29995;
(effect_fn_29996.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29996.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29996.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__29997 = seq__29959;
var G__29998 = chunk__29960;
var G__29999 = count__29961;
var G__30000 = (i__29962 + (1));
seq__29959 = G__29997;
chunk__29960 = G__29998;
count__29961 = G__29999;
i__29962 = G__30000;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29959);
if(temp__5753__auto__){
var seq__29959__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29959__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__29959__$1);
var G__30001 = cljs.core.chunk_rest(seq__29959__$1);
var G__30002 = c__4591__auto__;
var G__30003 = cljs.core.count(c__4591__auto__);
var G__30004 = (0);
seq__29959 = G__30001;
chunk__29960 = G__30002;
count__29961 = G__30003;
i__29962 = G__30004;
continue;
} else {
var vec__29972 = cljs.core.first(seq__29959__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29972,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29972,(1),null);
var temp__5751__auto___30005 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30005)){
var effect_fn_30006 = temp__5751__auto___30005;
(effect_fn_30006.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30006.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30006.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30007 = cljs.core.next(seq__29959__$1);
var G__30008 = null;
var G__30009 = (0);
var G__30010 = (0);
seq__29959 = G__30007;
chunk__29960 = G__30008;
count__29961 = G__30009;
i__29962 = G__30010;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__29745__auto___30011 = re_frame.interop.now();
var duration__29746__auto___30012 = (end__29745__auto___30011 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__29746__auto___30012,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__29745__auto___30011);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__29956);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___30013 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___30013)){
var new_db_30014 = temp__5753__auto___30013;
var fexpr__29975_30015 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__29975_30015.cljs$core$IFn$_invoke$arity$1 ? fexpr__29975_30015.cljs$core$IFn$_invoke$arity$1(new_db_30014) : fexpr__29975_30015.call(null,new_db_30014));
} else {
}

var seq__29976 = cljs.core.seq(effects_without_db);
var chunk__29977 = null;
var count__29978 = (0);
var i__29979 = (0);
while(true){
if((i__29979 < count__29978)){
var vec__29986 = chunk__29977.cljs$core$IIndexed$_nth$arity$2(null,i__29979);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29986,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29986,(1),null);
var temp__5751__auto___30016 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30016)){
var effect_fn_30017 = temp__5751__auto___30016;
(effect_fn_30017.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30017.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30017.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30018 = seq__29976;
var G__30019 = chunk__29977;
var G__30020 = count__29978;
var G__30021 = (i__29979 + (1));
seq__29976 = G__30018;
chunk__29977 = G__30019;
count__29978 = G__30020;
i__29979 = G__30021;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29976);
if(temp__5753__auto__){
var seq__29976__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29976__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__29976__$1);
var G__30022 = cljs.core.chunk_rest(seq__29976__$1);
var G__30023 = c__4591__auto__;
var G__30024 = cljs.core.count(c__4591__auto__);
var G__30025 = (0);
seq__29976 = G__30022;
chunk__29977 = G__30023;
count__29978 = G__30024;
i__29979 = G__30025;
continue;
} else {
var vec__29989 = cljs.core.first(seq__29976__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29989,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29989,(1),null);
var temp__5751__auto___30026 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30026)){
var effect_fn_30027 = temp__5751__auto___30026;
(effect_fn_30027.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30027.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30027.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30028 = cljs.core.next(seq__29976__$1);
var G__30029 = null;
var G__30030 = (0);
var G__30031 = (0);
seq__29976 = G__30028;
chunk__29977 = G__30029;
count__29978 = G__30030;
i__29979 = G__30031;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__30032){
var map__30033 = p__30032;
var map__30033__$1 = cljs.core.__destructure_map(map__30033);
var effect = map__30033__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30033__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__30034 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30035 = null;
var count__30036 = (0);
var i__30037 = (0);
while(true){
if((i__30037 < count__30036)){
var effect = chunk__30035.cljs$core$IIndexed$_nth$arity$2(null,i__30037);
re_frame.fx.dispatch_later(effect);


var G__30038 = seq__30034;
var G__30039 = chunk__30035;
var G__30040 = count__30036;
var G__30041 = (i__30037 + (1));
seq__30034 = G__30038;
chunk__30035 = G__30039;
count__30036 = G__30040;
i__30037 = G__30041;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30034);
if(temp__5753__auto__){
var seq__30034__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30034__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__30034__$1);
var G__30042 = cljs.core.chunk_rest(seq__30034__$1);
var G__30043 = c__4591__auto__;
var G__30044 = cljs.core.count(c__4591__auto__);
var G__30045 = (0);
seq__30034 = G__30042;
chunk__30035 = G__30043;
count__30036 = G__30044;
i__30037 = G__30045;
continue;
} else {
var effect = cljs.core.first(seq__30034__$1);
re_frame.fx.dispatch_later(effect);


var G__30046 = cljs.core.next(seq__30034__$1);
var G__30047 = null;
var G__30048 = (0);
var G__30049 = (0);
seq__30034 = G__30046;
chunk__30035 = G__30047;
count__30036 = G__30048;
i__30037 = G__30049;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__30050 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__30051 = null;
var count__30052 = (0);
var i__30053 = (0);
while(true){
if((i__30053 < count__30052)){
var vec__30060 = chunk__30051.cljs$core$IIndexed$_nth$arity$2(null,i__30053);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___30066 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30066)){
var effect_fn_30067 = temp__5751__auto___30066;
(effect_fn_30067.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30067.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30067.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30068 = seq__30050;
var G__30069 = chunk__30051;
var G__30070 = count__30052;
var G__30071 = (i__30053 + (1));
seq__30050 = G__30068;
chunk__30051 = G__30069;
count__30052 = G__30070;
i__30053 = G__30071;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30050);
if(temp__5753__auto__){
var seq__30050__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30050__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__30050__$1);
var G__30072 = cljs.core.chunk_rest(seq__30050__$1);
var G__30073 = c__4591__auto__;
var G__30074 = cljs.core.count(c__4591__auto__);
var G__30075 = (0);
seq__30050 = G__30072;
chunk__30051 = G__30073;
count__30052 = G__30074;
i__30053 = G__30075;
continue;
} else {
var vec__30063 = cljs.core.first(seq__30050__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30063,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30063,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___30076 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___30076)){
var effect_fn_30077 = temp__5751__auto___30076;
(effect_fn_30077.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30077.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30077.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30078 = cljs.core.next(seq__30050__$1);
var G__30079 = null;
var G__30080 = (0);
var G__30081 = (0);
seq__30050 = G__30078;
chunk__30051 = G__30079;
count__30052 = G__30080;
i__30053 = G__30081;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__30082 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30083 = null;
var count__30084 = (0);
var i__30085 = (0);
while(true){
if((i__30085 < count__30084)){
var event = chunk__30083.cljs$core$IIndexed$_nth$arity$2(null,i__30085);
re_frame.router.dispatch(event);


var G__30086 = seq__30082;
var G__30087 = chunk__30083;
var G__30088 = count__30084;
var G__30089 = (i__30085 + (1));
seq__30082 = G__30086;
chunk__30083 = G__30087;
count__30084 = G__30088;
i__30085 = G__30089;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30082);
if(temp__5753__auto__){
var seq__30082__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30082__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__30082__$1);
var G__30090 = cljs.core.chunk_rest(seq__30082__$1);
var G__30091 = c__4591__auto__;
var G__30092 = cljs.core.count(c__4591__auto__);
var G__30093 = (0);
seq__30082 = G__30090;
chunk__30083 = G__30091;
count__30084 = G__30092;
i__30085 = G__30093;
continue;
} else {
var event = cljs.core.first(seq__30082__$1);
re_frame.router.dispatch(event);


var G__30094 = cljs.core.next(seq__30082__$1);
var G__30095 = null;
var G__30096 = (0);
var G__30097 = (0);
seq__30082 = G__30094;
chunk__30083 = G__30095;
count__30084 = G__30096;
i__30085 = G__30097;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__30098 = cljs.core.seq(value);
var chunk__30099 = null;
var count__30100 = (0);
var i__30101 = (0);
while(true){
if((i__30101 < count__30100)){
var event = chunk__30099.cljs$core$IIndexed$_nth$arity$2(null,i__30101);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__30102 = seq__30098;
var G__30103 = chunk__30099;
var G__30104 = count__30100;
var G__30105 = (i__30101 + (1));
seq__30098 = G__30102;
chunk__30099 = G__30103;
count__30100 = G__30104;
i__30101 = G__30105;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30098);
if(temp__5753__auto__){
var seq__30098__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30098__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__30098__$1);
var G__30106 = cljs.core.chunk_rest(seq__30098__$1);
var G__30107 = c__4591__auto__;
var G__30108 = cljs.core.count(c__4591__auto__);
var G__30109 = (0);
seq__30098 = G__30106;
chunk__30099 = G__30107;
count__30100 = G__30108;
i__30101 = G__30109;
continue;
} else {
var event = cljs.core.first(seq__30098__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__30110 = cljs.core.next(seq__30098__$1);
var G__30111 = null;
var G__30112 = (0);
var G__30113 = (0);
seq__30098 = G__30110;
chunk__30099 = G__30111;
count__30100 = G__30112;
i__30101 = G__30113;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
