// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__29767){
var map__29768 = p__29767;
var map__29768__$1 = cljs.core.__destructure_map(map__29768);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4160__auto__ = child_of;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
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
var seq__29769_29793 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__29770_29794 = null;
var count__29771_29795 = (0);
var i__29772_29796 = (0);
while(true){
if((i__29772_29796 < count__29771_29795)){
var vec__29783_29797 = chunk__29770_29794.cljs$core$IIndexed$_nth$arity$2(null,i__29772_29796);
var k_29798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29783_29797,(0),null);
var cb_29799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29783_29797,(1),null);
try{var G__29787_29800 = cljs.core.deref(re_frame.trace.traces);
(cb_29799.cljs$core$IFn$_invoke$arity$1 ? cb_29799.cljs$core$IFn$_invoke$arity$1(G__29787_29800) : cb_29799.call(null,G__29787_29800));
}catch (e29786){var e_29801 = e29786;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_29798,"while storing",cljs.core.deref(re_frame.trace.traces),e_29801], 0));
}

var G__29802 = seq__29769_29793;
var G__29803 = chunk__29770_29794;
var G__29804 = count__29771_29795;
var G__29805 = (i__29772_29796 + (1));
seq__29769_29793 = G__29802;
chunk__29770_29794 = G__29803;
count__29771_29795 = G__29804;
i__29772_29796 = G__29805;
continue;
} else {
var temp__5753__auto___29806 = cljs.core.seq(seq__29769_29793);
if(temp__5753__auto___29806){
var seq__29769_29807__$1 = temp__5753__auto___29806;
if(cljs.core.chunked_seq_QMARK_(seq__29769_29807__$1)){
var c__4591__auto___29808 = cljs.core.chunk_first(seq__29769_29807__$1);
var G__29809 = cljs.core.chunk_rest(seq__29769_29807__$1);
var G__29810 = c__4591__auto___29808;
var G__29811 = cljs.core.count(c__4591__auto___29808);
var G__29812 = (0);
seq__29769_29793 = G__29809;
chunk__29770_29794 = G__29810;
count__29771_29795 = G__29811;
i__29772_29796 = G__29812;
continue;
} else {
var vec__29788_29813 = cljs.core.first(seq__29769_29807__$1);
var k_29814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29788_29813,(0),null);
var cb_29815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29788_29813,(1),null);
try{var G__29792_29816 = cljs.core.deref(re_frame.trace.traces);
(cb_29815.cljs$core$IFn$_invoke$arity$1 ? cb_29815.cljs$core$IFn$_invoke$arity$1(G__29792_29816) : cb_29815.call(null,G__29792_29816));
}catch (e29791){var e_29817 = e29791;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_29814,"while storing",cljs.core.deref(re_frame.trace.traces),e_29817], 0));
}

var G__29818 = cljs.core.next(seq__29769_29807__$1);
var G__29819 = null;
var G__29820 = (0);
var G__29821 = (0);
seq__29769_29793 = G__29818;
chunk__29770_29794 = G__29819;
count__29771_29795 = G__29820;
i__29772_29796 = G__29821;
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
