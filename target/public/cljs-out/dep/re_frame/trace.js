// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14964){
var map__14965 = p__14964;
var map__14965__$1 = (((((!((map__14965 == null))))?(((((map__14965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14965):map__14965);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14965__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14965__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14965__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14965__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__14967_14991 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14968_14992 = null;
var count__14969_14993 = (0);
var i__14970_14994 = (0);
while(true){
if((i__14970_14994 < count__14969_14993)){
var vec__14981_14995 = chunk__14968_14992.cljs$core$IIndexed$_nth$arity$2(null,i__14970_14994);
var k_14996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14981_14995,(0),null);
var cb_14997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14981_14995,(1),null);
try{var G__14985_14998 = cljs.core.deref(re_frame.trace.traces);
(cb_14997.cljs$core$IFn$_invoke$arity$1 ? cb_14997.cljs$core$IFn$_invoke$arity$1(G__14985_14998) : cb_14997.call(null,G__14985_14998));
}catch (e14984){var e_14999 = e14984;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14996,"while storing",cljs.core.deref(re_frame.trace.traces),e_14999], 0));
}

var G__15000 = seq__14967_14991;
var G__15001 = chunk__14968_14992;
var G__15002 = count__14969_14993;
var G__15003 = (i__14970_14994 + (1));
seq__14967_14991 = G__15000;
chunk__14968_14992 = G__15001;
count__14969_14993 = G__15002;
i__14970_14994 = G__15003;
continue;
} else {
var temp__5735__auto___15004 = cljs.core.seq(seq__14967_14991);
if(temp__5735__auto___15004){
var seq__14967_15005__$1 = temp__5735__auto___15004;
if(cljs.core.chunked_seq_QMARK_(seq__14967_15005__$1)){
var c__4556__auto___15006 = cljs.core.chunk_first(seq__14967_15005__$1);
var G__15007 = cljs.core.chunk_rest(seq__14967_15005__$1);
var G__15008 = c__4556__auto___15006;
var G__15009 = cljs.core.count(c__4556__auto___15006);
var G__15010 = (0);
seq__14967_14991 = G__15007;
chunk__14968_14992 = G__15008;
count__14969_14993 = G__15009;
i__14970_14994 = G__15010;
continue;
} else {
var vec__14986_15011 = cljs.core.first(seq__14967_15005__$1);
var k_15012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14986_15011,(0),null);
var cb_15013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14986_15011,(1),null);
try{var G__14990_15014 = cljs.core.deref(re_frame.trace.traces);
(cb_15013.cljs$core$IFn$_invoke$arity$1 ? cb_15013.cljs$core$IFn$_invoke$arity$1(G__14990_15014) : cb_15013.call(null,G__14990_15014));
}catch (e14989){var e_15015 = e14989;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15012,"while storing",cljs.core.deref(re_frame.trace.traces),e_15015], 0));
}

var G__15016 = cljs.core.next(seq__14967_15005__$1);
var G__15017 = null;
var G__15018 = (0);
var G__15019 = (0);
seq__14967_14991 = G__15016;
chunk__14968_14992 = G__15017;
count__14969_14993 = G__15018;
i__14970_14994 = G__15019;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
