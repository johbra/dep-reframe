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
var _STAR_current_trace_STAR__orig_val__16004 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16005 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16005);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___16038 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___16038)){
var new_db_16039 = temp__5735__auto___16038;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16039);
} else {
}

var seq__16006 = cljs.core.seq.call(null,effects_without_db);
var chunk__16007 = null;
var count__16008 = (0);
var i__16009 = (0);
while(true){
if((i__16009 < count__16008)){
var vec__16016 = cljs.core._nth.call(null,chunk__16007,i__16009);
var effect_key = cljs.core.nth.call(null,vec__16016,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16016,(1),null);
var temp__5733__auto___16040 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16040)){
var effect_fn_16041 = temp__5733__auto___16040;
effect_fn_16041.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16042 = seq__16006;
var G__16043 = chunk__16007;
var G__16044 = count__16008;
var G__16045 = (i__16009 + (1));
seq__16006 = G__16042;
chunk__16007 = G__16043;
count__16008 = G__16044;
i__16009 = G__16045;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16006);
if(temp__5735__auto__){
var seq__16006__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16006__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16006__$1);
var G__16046 = cljs.core.chunk_rest.call(null,seq__16006__$1);
var G__16047 = c__4556__auto__;
var G__16048 = cljs.core.count.call(null,c__4556__auto__);
var G__16049 = (0);
seq__16006 = G__16046;
chunk__16007 = G__16047;
count__16008 = G__16048;
i__16009 = G__16049;
continue;
} else {
var vec__16019 = cljs.core.first.call(null,seq__16006__$1);
var effect_key = cljs.core.nth.call(null,vec__16019,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16019,(1),null);
var temp__5733__auto___16050 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16050)){
var effect_fn_16051 = temp__5733__auto___16050;
effect_fn_16051.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16052 = cljs.core.next.call(null,seq__16006__$1);
var G__16053 = null;
var G__16054 = (0);
var G__16055 = (0);
seq__16006 = G__16052;
chunk__16007 = G__16053;
count__16008 = G__16054;
i__16009 = G__16055;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__15799__auto___16056 = re_frame.interop.now.call(null);
var duration__15800__auto___16057 = (end__15799__auto___16056 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15800__auto___16057,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__15799__auto___16056);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16004);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___16058 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___16058)){
var new_db_16059 = temp__5735__auto___16058;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16059);
} else {
}

var seq__16022 = cljs.core.seq.call(null,effects_without_db);
var chunk__16023 = null;
var count__16024 = (0);
var i__16025 = (0);
while(true){
if((i__16025 < count__16024)){
var vec__16032 = cljs.core._nth.call(null,chunk__16023,i__16025);
var effect_key = cljs.core.nth.call(null,vec__16032,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16032,(1),null);
var temp__5733__auto___16060 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16060)){
var effect_fn_16061 = temp__5733__auto___16060;
effect_fn_16061.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16062 = seq__16022;
var G__16063 = chunk__16023;
var G__16064 = count__16024;
var G__16065 = (i__16025 + (1));
seq__16022 = G__16062;
chunk__16023 = G__16063;
count__16024 = G__16064;
i__16025 = G__16065;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16022);
if(temp__5735__auto__){
var seq__16022__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16022__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16022__$1);
var G__16066 = cljs.core.chunk_rest.call(null,seq__16022__$1);
var G__16067 = c__4556__auto__;
var G__16068 = cljs.core.count.call(null,c__4556__auto__);
var G__16069 = (0);
seq__16022 = G__16066;
chunk__16023 = G__16067;
count__16024 = G__16068;
i__16025 = G__16069;
continue;
} else {
var vec__16035 = cljs.core.first.call(null,seq__16022__$1);
var effect_key = cljs.core.nth.call(null,vec__16035,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16035,(1),null);
var temp__5733__auto___16070 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16070)){
var effect_fn_16071 = temp__5733__auto___16070;
effect_fn_16071.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16072 = cljs.core.next.call(null,seq__16022__$1);
var G__16073 = null;
var G__16074 = (0);
var G__16075 = (0);
seq__16022 = G__16072;
chunk__16023 = G__16073;
count__16024 = G__16074;
i__16025 = G__16075;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16076){
var map__16077 = p__16076;
var map__16077__$1 = (((((!((map__16077 == null))))?(((((map__16077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16077):map__16077);
var effect = map__16077__$1;
var ms = cljs.core.get.call(null,map__16077__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16077__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__16079 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16080 = null;
var count__16081 = (0);
var i__16082 = (0);
while(true){
if((i__16082 < count__16081)){
var effect = cljs.core._nth.call(null,chunk__16080,i__16082);
re_frame.fx.dispatch_later.call(null,effect);


var G__16083 = seq__16079;
var G__16084 = chunk__16080;
var G__16085 = count__16081;
var G__16086 = (i__16082 + (1));
seq__16079 = G__16083;
chunk__16080 = G__16084;
count__16081 = G__16085;
i__16082 = G__16086;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16079);
if(temp__5735__auto__){
var seq__16079__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16079__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16079__$1);
var G__16087 = cljs.core.chunk_rest.call(null,seq__16079__$1);
var G__16088 = c__4556__auto__;
var G__16089 = cljs.core.count.call(null,c__4556__auto__);
var G__16090 = (0);
seq__16079 = G__16087;
chunk__16080 = G__16088;
count__16081 = G__16089;
i__16082 = G__16090;
continue;
} else {
var effect = cljs.core.first.call(null,seq__16079__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__16091 = cljs.core.next.call(null,seq__16079__$1);
var G__16092 = null;
var G__16093 = (0);
var G__16094 = (0);
seq__16079 = G__16091;
chunk__16080 = G__16092;
count__16081 = G__16093;
i__16082 = G__16094;
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
var seq__16095 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16096 = null;
var count__16097 = (0);
var i__16098 = (0);
while(true){
if((i__16098 < count__16097)){
var vec__16105 = cljs.core._nth.call(null,chunk__16096,i__16098);
var effect_key = cljs.core.nth.call(null,vec__16105,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16105,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___16111 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16111)){
var effect_fn_16112 = temp__5733__auto___16111;
effect_fn_16112.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16113 = seq__16095;
var G__16114 = chunk__16096;
var G__16115 = count__16097;
var G__16116 = (i__16098 + (1));
seq__16095 = G__16113;
chunk__16096 = G__16114;
count__16097 = G__16115;
i__16098 = G__16116;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16095);
if(temp__5735__auto__){
var seq__16095__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16095__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16095__$1);
var G__16117 = cljs.core.chunk_rest.call(null,seq__16095__$1);
var G__16118 = c__4556__auto__;
var G__16119 = cljs.core.count.call(null,c__4556__auto__);
var G__16120 = (0);
seq__16095 = G__16117;
chunk__16096 = G__16118;
count__16097 = G__16119;
i__16098 = G__16120;
continue;
} else {
var vec__16108 = cljs.core.first.call(null,seq__16095__$1);
var effect_key = cljs.core.nth.call(null,vec__16108,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16108,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___16121 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16121)){
var effect_fn_16122 = temp__5733__auto___16121;
effect_fn_16122.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16123 = cljs.core.next.call(null,seq__16095__$1);
var G__16124 = null;
var G__16125 = (0);
var G__16126 = (0);
seq__16095 = G__16123;
chunk__16096 = G__16124;
count__16097 = G__16125;
i__16098 = G__16126;
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
var seq__16127 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16128 = null;
var count__16129 = (0);
var i__16130 = (0);
while(true){
if((i__16130 < count__16129)){
var event = cljs.core._nth.call(null,chunk__16128,i__16130);
re_frame.router.dispatch.call(null,event);


var G__16131 = seq__16127;
var G__16132 = chunk__16128;
var G__16133 = count__16129;
var G__16134 = (i__16130 + (1));
seq__16127 = G__16131;
chunk__16128 = G__16132;
count__16129 = G__16133;
i__16130 = G__16134;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16127);
if(temp__5735__auto__){
var seq__16127__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16127__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16127__$1);
var G__16135 = cljs.core.chunk_rest.call(null,seq__16127__$1);
var G__16136 = c__4556__auto__;
var G__16137 = cljs.core.count.call(null,c__4556__auto__);
var G__16138 = (0);
seq__16127 = G__16135;
chunk__16128 = G__16136;
count__16129 = G__16137;
i__16130 = G__16138;
continue;
} else {
var event = cljs.core.first.call(null,seq__16127__$1);
re_frame.router.dispatch.call(null,event);


var G__16139 = cljs.core.next.call(null,seq__16127__$1);
var G__16140 = null;
var G__16141 = (0);
var G__16142 = (0);
seq__16127 = G__16139;
chunk__16128 = G__16140;
count__16129 = G__16141;
i__16130 = G__16142;
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
var seq__16143 = cljs.core.seq.call(null,value);
var chunk__16144 = null;
var count__16145 = (0);
var i__16146 = (0);
while(true){
if((i__16146 < count__16145)){
var event = cljs.core._nth.call(null,chunk__16144,i__16146);
clear_event.call(null,event);


var G__16147 = seq__16143;
var G__16148 = chunk__16144;
var G__16149 = count__16145;
var G__16150 = (i__16146 + (1));
seq__16143 = G__16147;
chunk__16144 = G__16148;
count__16145 = G__16149;
i__16146 = G__16150;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16143);
if(temp__5735__auto__){
var seq__16143__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16143__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16143__$1);
var G__16151 = cljs.core.chunk_rest.call(null,seq__16143__$1);
var G__16152 = c__4556__auto__;
var G__16153 = cljs.core.count.call(null,c__4556__auto__);
var G__16154 = (0);
seq__16143 = G__16151;
chunk__16144 = G__16152;
count__16145 = G__16153;
i__16146 = G__16154;
continue;
} else {
var event = cljs.core.first.call(null,seq__16143__$1);
clear_event.call(null,event);


var G__16155 = cljs.core.next.call(null,seq__16143__$1);
var G__16156 = null;
var G__16157 = (0);
var G__16158 = (0);
seq__16143 = G__16155;
chunk__16144 = G__16156;
count__16145 = G__16157;
i__16146 = G__16158;
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
