// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
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
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16197){
var map__16198 = p__16197;
var map__16198__$1 = (((((!((map__16198 == null))))?(((((map__16198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16198):map__16198);
var operation = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__16200_16220 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__16201_16221 = null;
var count__16202_16222 = (0);
var i__16203_16223 = (0);
while(true){
if((i__16203_16223 < count__16202_16222)){
var vec__16212_16224 = cljs.core._nth.call(null,chunk__16201_16221,i__16203_16223);
var k_16225 = cljs.core.nth.call(null,vec__16212_16224,(0),null);
var cb_16226 = cljs.core.nth.call(null,vec__16212_16224,(1),null);
try{cb_16226.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e16215){var e_16227 = e16215;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_16225,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_16227);
}

var G__16228 = seq__16200_16220;
var G__16229 = chunk__16201_16221;
var G__16230 = count__16202_16222;
var G__16231 = (i__16203_16223 + (1));
seq__16200_16220 = G__16228;
chunk__16201_16221 = G__16229;
count__16202_16222 = G__16230;
i__16203_16223 = G__16231;
continue;
} else {
var temp__5735__auto___16232 = cljs.core.seq.call(null,seq__16200_16220);
if(temp__5735__auto___16232){
var seq__16200_16233__$1 = temp__5735__auto___16232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16200_16233__$1)){
var c__4556__auto___16234 = cljs.core.chunk_first.call(null,seq__16200_16233__$1);
var G__16235 = cljs.core.chunk_rest.call(null,seq__16200_16233__$1);
var G__16236 = c__4556__auto___16234;
var G__16237 = cljs.core.count.call(null,c__4556__auto___16234);
var G__16238 = (0);
seq__16200_16220 = G__16235;
chunk__16201_16221 = G__16236;
count__16202_16222 = G__16237;
i__16203_16223 = G__16238;
continue;
} else {
var vec__16216_16239 = cljs.core.first.call(null,seq__16200_16233__$1);
var k_16240 = cljs.core.nth.call(null,vec__16216_16239,(0),null);
var cb_16241 = cljs.core.nth.call(null,vec__16216_16239,(1),null);
try{cb_16241.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e16219){var e_16242 = e16219;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_16240,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_16242);
}

var G__16243 = cljs.core.next.call(null,seq__16200_16233__$1);
var G__16244 = null;
var G__16245 = (0);
var G__16246 = (0);
seq__16200_16220 = G__16243;
chunk__16201_16221 = G__16244;
count__16202_16222 = G__16245;
i__16203_16223 = G__16246;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
