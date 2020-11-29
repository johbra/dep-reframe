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
var _STAR_current_trace_STAR__orig_val__15981 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__15982 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__15982);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___16015 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___16015)){
var new_db_16016 = temp__5735__auto___16015;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16016);
} else {
}

var seq__15983 = cljs.core.seq.call(null,effects_without_db);
var chunk__15984 = null;
var count__15985 = (0);
var i__15986 = (0);
while(true){
if((i__15986 < count__15985)){
var vec__15993 = cljs.core._nth.call(null,chunk__15984,i__15986);
var effect_key = cljs.core.nth.call(null,vec__15993,(0),null);
var effect_value = cljs.core.nth.call(null,vec__15993,(1),null);
var temp__5733__auto___16017 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16017)){
var effect_fn_16018 = temp__5733__auto___16017;
effect_fn_16018.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16019 = seq__15983;
var G__16020 = chunk__15984;
var G__16021 = count__15985;
var G__16022 = (i__15986 + (1));
seq__15983 = G__16019;
chunk__15984 = G__16020;
count__15985 = G__16021;
i__15986 = G__16022;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15983);
if(temp__5735__auto__){
var seq__15983__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15983__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__15983__$1);
var G__16023 = cljs.core.chunk_rest.call(null,seq__15983__$1);
var G__16024 = c__4556__auto__;
var G__16025 = cljs.core.count.call(null,c__4556__auto__);
var G__16026 = (0);
seq__15983 = G__16023;
chunk__15984 = G__16024;
count__15985 = G__16025;
i__15986 = G__16026;
continue;
} else {
var vec__15996 = cljs.core.first.call(null,seq__15983__$1);
var effect_key = cljs.core.nth.call(null,vec__15996,(0),null);
var effect_value = cljs.core.nth.call(null,vec__15996,(1),null);
var temp__5733__auto___16027 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16027)){
var effect_fn_16028 = temp__5733__auto___16027;
effect_fn_16028.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16029 = cljs.core.next.call(null,seq__15983__$1);
var G__16030 = null;
var G__16031 = (0);
var G__16032 = (0);
seq__15983 = G__16029;
chunk__15984 = G__16030;
count__15985 = G__16031;
i__15986 = G__16032;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__15776__auto___16033 = re_frame.interop.now.call(null);
var duration__15777__auto___16034 = (end__15776__auto___16033 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15777__auto___16034,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__15776__auto___16033);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__15981);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___16035 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___16035)){
var new_db_16036 = temp__5735__auto___16035;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16036);
} else {
}

var seq__15999 = cljs.core.seq.call(null,effects_without_db);
var chunk__16000 = null;
var count__16001 = (0);
var i__16002 = (0);
while(true){
if((i__16002 < count__16001)){
var vec__16009 = cljs.core._nth.call(null,chunk__16000,i__16002);
var effect_key = cljs.core.nth.call(null,vec__16009,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16009,(1),null);
var temp__5733__auto___16037 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16037)){
var effect_fn_16038 = temp__5733__auto___16037;
effect_fn_16038.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16039 = seq__15999;
var G__16040 = chunk__16000;
var G__16041 = count__16001;
var G__16042 = (i__16002 + (1));
seq__15999 = G__16039;
chunk__16000 = G__16040;
count__16001 = G__16041;
i__16002 = G__16042;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__15999);
if(temp__5735__auto__){
var seq__15999__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15999__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__15999__$1);
var G__16043 = cljs.core.chunk_rest.call(null,seq__15999__$1);
var G__16044 = c__4556__auto__;
var G__16045 = cljs.core.count.call(null,c__4556__auto__);
var G__16046 = (0);
seq__15999 = G__16043;
chunk__16000 = G__16044;
count__16001 = G__16045;
i__16002 = G__16046;
continue;
} else {
var vec__16012 = cljs.core.first.call(null,seq__15999__$1);
var effect_key = cljs.core.nth.call(null,vec__16012,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16012,(1),null);
var temp__5733__auto___16047 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16047)){
var effect_fn_16048 = temp__5733__auto___16047;
effect_fn_16048.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16049 = cljs.core.next.call(null,seq__15999__$1);
var G__16050 = null;
var G__16051 = (0);
var G__16052 = (0);
seq__15999 = G__16049;
chunk__16000 = G__16050;
count__16001 = G__16051;
i__16002 = G__16052;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16053){
var map__16054 = p__16053;
var map__16054__$1 = (((((!((map__16054 == null))))?(((((map__16054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16054):map__16054);
var effect = map__16054__$1;
var ms = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__16056 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16057 = null;
var count__16058 = (0);
var i__16059 = (0);
while(true){
if((i__16059 < count__16058)){
var effect = cljs.core._nth.call(null,chunk__16057,i__16059);
re_frame.fx.dispatch_later.call(null,effect);


var G__16060 = seq__16056;
var G__16061 = chunk__16057;
var G__16062 = count__16058;
var G__16063 = (i__16059 + (1));
seq__16056 = G__16060;
chunk__16057 = G__16061;
count__16058 = G__16062;
i__16059 = G__16063;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16056);
if(temp__5735__auto__){
var seq__16056__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16056__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16056__$1);
var G__16064 = cljs.core.chunk_rest.call(null,seq__16056__$1);
var G__16065 = c__4556__auto__;
var G__16066 = cljs.core.count.call(null,c__4556__auto__);
var G__16067 = (0);
seq__16056 = G__16064;
chunk__16057 = G__16065;
count__16058 = G__16066;
i__16059 = G__16067;
continue;
} else {
var effect = cljs.core.first.call(null,seq__16056__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__16068 = cljs.core.next.call(null,seq__16056__$1);
var G__16069 = null;
var G__16070 = (0);
var G__16071 = (0);
seq__16056 = G__16068;
chunk__16057 = G__16069;
count__16058 = G__16070;
i__16059 = G__16071;
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
var seq__16072 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16073 = null;
var count__16074 = (0);
var i__16075 = (0);
while(true){
if((i__16075 < count__16074)){
var vec__16082 = cljs.core._nth.call(null,chunk__16073,i__16075);
var effect_key = cljs.core.nth.call(null,vec__16082,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16082,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___16088 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16088)){
var effect_fn_16089 = temp__5733__auto___16088;
effect_fn_16089.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16090 = seq__16072;
var G__16091 = chunk__16073;
var G__16092 = count__16074;
var G__16093 = (i__16075 + (1));
seq__16072 = G__16090;
chunk__16073 = G__16091;
count__16074 = G__16092;
i__16075 = G__16093;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16072);
if(temp__5735__auto__){
var seq__16072__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16072__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16072__$1);
var G__16094 = cljs.core.chunk_rest.call(null,seq__16072__$1);
var G__16095 = c__4556__auto__;
var G__16096 = cljs.core.count.call(null,c__4556__auto__);
var G__16097 = (0);
seq__16072 = G__16094;
chunk__16073 = G__16095;
count__16074 = G__16096;
i__16075 = G__16097;
continue;
} else {
var vec__16085 = cljs.core.first.call(null,seq__16072__$1);
var effect_key = cljs.core.nth.call(null,vec__16085,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16085,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___16098 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16098)){
var effect_fn_16099 = temp__5733__auto___16098;
effect_fn_16099.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16100 = cljs.core.next.call(null,seq__16072__$1);
var G__16101 = null;
var G__16102 = (0);
var G__16103 = (0);
seq__16072 = G__16100;
chunk__16073 = G__16101;
count__16074 = G__16102;
i__16075 = G__16103;
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
var seq__16104 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16105 = null;
var count__16106 = (0);
var i__16107 = (0);
while(true){
if((i__16107 < count__16106)){
var event = cljs.core._nth.call(null,chunk__16105,i__16107);
re_frame.router.dispatch.call(null,event);


var G__16108 = seq__16104;
var G__16109 = chunk__16105;
var G__16110 = count__16106;
var G__16111 = (i__16107 + (1));
seq__16104 = G__16108;
chunk__16105 = G__16109;
count__16106 = G__16110;
i__16107 = G__16111;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16104);
if(temp__5735__auto__){
var seq__16104__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16104__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16104__$1);
var G__16112 = cljs.core.chunk_rest.call(null,seq__16104__$1);
var G__16113 = c__4556__auto__;
var G__16114 = cljs.core.count.call(null,c__4556__auto__);
var G__16115 = (0);
seq__16104 = G__16112;
chunk__16105 = G__16113;
count__16106 = G__16114;
i__16107 = G__16115;
continue;
} else {
var event = cljs.core.first.call(null,seq__16104__$1);
re_frame.router.dispatch.call(null,event);


var G__16116 = cljs.core.next.call(null,seq__16104__$1);
var G__16117 = null;
var G__16118 = (0);
var G__16119 = (0);
seq__16104 = G__16116;
chunk__16105 = G__16117;
count__16106 = G__16118;
i__16107 = G__16119;
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
var seq__16120 = cljs.core.seq.call(null,value);
var chunk__16121 = null;
var count__16122 = (0);
var i__16123 = (0);
while(true){
if((i__16123 < count__16122)){
var event = cljs.core._nth.call(null,chunk__16121,i__16123);
clear_event.call(null,event);


var G__16124 = seq__16120;
var G__16125 = chunk__16121;
var G__16126 = count__16122;
var G__16127 = (i__16123 + (1));
seq__16120 = G__16124;
chunk__16121 = G__16125;
count__16122 = G__16126;
i__16123 = G__16127;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16120);
if(temp__5735__auto__){
var seq__16120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16120__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16120__$1);
var G__16128 = cljs.core.chunk_rest.call(null,seq__16120__$1);
var G__16129 = c__4556__auto__;
var G__16130 = cljs.core.count.call(null,c__4556__auto__);
var G__16131 = (0);
seq__16120 = G__16128;
chunk__16121 = G__16129;
count__16122 = G__16130;
i__16123 = G__16131;
continue;
} else {
var event = cljs.core.first.call(null,seq__16120__$1);
clear_event.call(null,event);


var G__16132 = cljs.core.next.call(null,seq__16120__$1);
var G__16133 = null;
var G__16134 = (0);
var G__16135 = (0);
seq__16120 = G__16132;
chunk__16121 = G__16133;
count__16122 = G__16134;
i__16123 = G__16135;
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
