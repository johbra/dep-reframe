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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__15821){
var map__15822 = p__15821;
var map__15822__$1 = (((((!((map__15822 == null))))?(((((map__15822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15822):map__15822);
var operation = cljs.core.get.call(null,map__15822__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__15822__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__15822__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__15822__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__15824_15844 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__15825_15845 = null;
var count__15826_15846 = (0);
var i__15827_15847 = (0);
while(true){
if((i__15827_15847 < count__15826_15846)){
var vec__15836_15848 = cljs.core._nth.call(null,chunk__15825_15845,i__15827_15847);
var k_15849 = cljs.core.nth.call(null,vec__15836_15848,(0),null);
var cb_15850 = cljs.core.nth.call(null,vec__15836_15848,(1),null);
try{cb_15850.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e15839){var e_15851 = e15839;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_15849,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_15851);
}

var G__15852 = seq__15824_15844;
var G__15853 = chunk__15825_15845;
var G__15854 = count__15826_15846;
var G__15855 = (i__15827_15847 + (1));
seq__15824_15844 = G__15852;
chunk__15825_15845 = G__15853;
count__15826_15846 = G__15854;
i__15827_15847 = G__15855;
continue;
} else {
var temp__5735__auto___15856 = cljs.core.seq.call(null,seq__15824_15844);
if(temp__5735__auto___15856){
var seq__15824_15857__$1 = temp__5735__auto___15856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15824_15857__$1)){
var c__4556__auto___15858 = cljs.core.chunk_first.call(null,seq__15824_15857__$1);
var G__15859 = cljs.core.chunk_rest.call(null,seq__15824_15857__$1);
var G__15860 = c__4556__auto___15858;
var G__15861 = cljs.core.count.call(null,c__4556__auto___15858);
var G__15862 = (0);
seq__15824_15844 = G__15859;
chunk__15825_15845 = G__15860;
count__15826_15846 = G__15861;
i__15827_15847 = G__15862;
continue;
} else {
var vec__15840_15863 = cljs.core.first.call(null,seq__15824_15857__$1);
var k_15864 = cljs.core.nth.call(null,vec__15840_15863,(0),null);
var cb_15865 = cljs.core.nth.call(null,vec__15840_15863,(1),null);
try{cb_15865.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e15843){var e_15866 = e15843;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_15864,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_15866);
}

var G__15867 = cljs.core.next.call(null,seq__15824_15857__$1);
var G__15868 = null;
var G__15869 = (0);
var G__15870 = (0);
seq__15824_15844 = G__15867;
chunk__15825_15845 = G__15868;
count__15826_15846 = G__15869;
i__15827_15847 = G__15870;
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
