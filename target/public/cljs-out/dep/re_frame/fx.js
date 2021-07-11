// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
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
var _STAR_current_trace_STAR__orig_val__25694 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25695 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25695);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5735__auto___25730 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___25730)){
var new_db_25731 = temp__5735__auto___25730;
var fexpr__25696_25732 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__25696_25732.cljs$core$IFn$_invoke$arity$1 ? fexpr__25696_25732.cljs$core$IFn$_invoke$arity$1(new_db_25731) : fexpr__25696_25732.call(null,new_db_25731));
} else {
}

var seq__25697 = cljs.core.seq(effects_without_db);
var chunk__25698 = null;
var count__25699 = (0);
var i__25700 = (0);
while(true){
if((i__25700 < count__25699)){
var vec__25707 = chunk__25698.cljs$core$IIndexed$_nth$arity$2(null,i__25700);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25707,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25707,(1),null);
var temp__5733__auto___25733 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25733)){
var effect_fn_25734 = temp__5733__auto___25733;
(effect_fn_25734.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25734.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25734.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25735 = seq__25697;
var G__25736 = chunk__25698;
var G__25737 = count__25699;
var G__25738 = (i__25700 + (1));
seq__25697 = G__25735;
chunk__25698 = G__25736;
count__25699 = G__25737;
i__25700 = G__25738;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25697);
if(temp__5735__auto__){
var seq__25697__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25697__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25697__$1);
var G__25739 = cljs.core.chunk_rest(seq__25697__$1);
var G__25740 = c__4556__auto__;
var G__25741 = cljs.core.count(c__4556__auto__);
var G__25742 = (0);
seq__25697 = G__25739;
chunk__25698 = G__25740;
count__25699 = G__25741;
i__25700 = G__25742;
continue;
} else {
var vec__25710 = cljs.core.first(seq__25697__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25710,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25710,(1),null);
var temp__5733__auto___25743 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25743)){
var effect_fn_25744 = temp__5733__auto___25743;
(effect_fn_25744.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25744.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25744.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25745 = cljs.core.next(seq__25697__$1);
var G__25746 = null;
var G__25747 = (0);
var G__25748 = (0);
seq__25697 = G__25745;
chunk__25698 = G__25746;
count__25699 = G__25747;
i__25700 = G__25748;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14942__auto___25749 = re_frame.interop.now();
var duration__14943__auto___25750 = (end__14942__auto___25749 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14943__auto___25750,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14942__auto___25749);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25694);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5735__auto___25751 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___25751)){
var new_db_25752 = temp__5735__auto___25751;
var fexpr__25713_25753 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__25713_25753.cljs$core$IFn$_invoke$arity$1 ? fexpr__25713_25753.cljs$core$IFn$_invoke$arity$1(new_db_25752) : fexpr__25713_25753.call(null,new_db_25752));
} else {
}

var seq__25714 = cljs.core.seq(effects_without_db);
var chunk__25715 = null;
var count__25716 = (0);
var i__25717 = (0);
while(true){
if((i__25717 < count__25716)){
var vec__25724 = chunk__25715.cljs$core$IIndexed$_nth$arity$2(null,i__25717);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25724,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25724,(1),null);
var temp__5733__auto___25754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25754)){
var effect_fn_25755 = temp__5733__auto___25754;
(effect_fn_25755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25756 = seq__25714;
var G__25757 = chunk__25715;
var G__25758 = count__25716;
var G__25759 = (i__25717 + (1));
seq__25714 = G__25756;
chunk__25715 = G__25757;
count__25716 = G__25758;
i__25717 = G__25759;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25714);
if(temp__5735__auto__){
var seq__25714__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25714__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25714__$1);
var G__25760 = cljs.core.chunk_rest(seq__25714__$1);
var G__25761 = c__4556__auto__;
var G__25762 = cljs.core.count(c__4556__auto__);
var G__25763 = (0);
seq__25714 = G__25760;
chunk__25715 = G__25761;
count__25716 = G__25762;
i__25717 = G__25763;
continue;
} else {
var vec__25727 = cljs.core.first(seq__25714__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25727,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25727,(1),null);
var temp__5733__auto___25764 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25764)){
var effect_fn_25765 = temp__5733__auto___25764;
(effect_fn_25765.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25765.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25765.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25766 = cljs.core.next(seq__25714__$1);
var G__25767 = null;
var G__25768 = (0);
var G__25769 = (0);
seq__25714 = G__25766;
chunk__25715 = G__25767;
count__25716 = G__25768;
i__25717 = G__25769;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__25770){
var map__25771 = p__25770;
var map__25771__$1 = (((((!((map__25771 == null))))?(((((map__25771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25771):map__25771);
var effect = map__25771__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25771__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25771__$1,cljs.core.cst$kw$dispatch);
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
var seq__25773 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25774 = null;
var count__25775 = (0);
var i__25776 = (0);
while(true){
if((i__25776 < count__25775)){
var effect = chunk__25774.cljs$core$IIndexed$_nth$arity$2(null,i__25776);
re_frame.fx.dispatch_later(effect);


var G__25777 = seq__25773;
var G__25778 = chunk__25774;
var G__25779 = count__25775;
var G__25780 = (i__25776 + (1));
seq__25773 = G__25777;
chunk__25774 = G__25778;
count__25775 = G__25779;
i__25776 = G__25780;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25773);
if(temp__5735__auto__){
var seq__25773__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25773__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25773__$1);
var G__25781 = cljs.core.chunk_rest(seq__25773__$1);
var G__25782 = c__4556__auto__;
var G__25783 = cljs.core.count(c__4556__auto__);
var G__25784 = (0);
seq__25773 = G__25781;
chunk__25774 = G__25782;
count__25775 = G__25783;
i__25776 = G__25784;
continue;
} else {
var effect = cljs.core.first(seq__25773__$1);
re_frame.fx.dispatch_later(effect);


var G__25785 = cljs.core.next(seq__25773__$1);
var G__25786 = null;
var G__25787 = (0);
var G__25788 = (0);
seq__25773 = G__25785;
chunk__25774 = G__25786;
count__25775 = G__25787;
i__25776 = G__25788;
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
var seq__25789 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__25790 = null;
var count__25791 = (0);
var i__25792 = (0);
while(true){
if((i__25792 < count__25791)){
var vec__25799 = chunk__25790.cljs$core$IIndexed$_nth$arity$2(null,i__25792);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25799,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___25805 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25805)){
var effect_fn_25806 = temp__5733__auto___25805;
(effect_fn_25806.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25806.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25806.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25807 = seq__25789;
var G__25808 = chunk__25790;
var G__25809 = count__25791;
var G__25810 = (i__25792 + (1));
seq__25789 = G__25807;
chunk__25790 = G__25808;
count__25791 = G__25809;
i__25792 = G__25810;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25789);
if(temp__5735__auto__){
var seq__25789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25789__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25789__$1);
var G__25811 = cljs.core.chunk_rest(seq__25789__$1);
var G__25812 = c__4556__auto__;
var G__25813 = cljs.core.count(c__4556__auto__);
var G__25814 = (0);
seq__25789 = G__25811;
chunk__25790 = G__25812;
count__25791 = G__25813;
i__25792 = G__25814;
continue;
} else {
var vec__25802 = cljs.core.first(seq__25789__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25802,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___25815 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25815)){
var effect_fn_25816 = temp__5733__auto___25815;
(effect_fn_25816.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25816.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25816.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25817 = cljs.core.next(seq__25789__$1);
var G__25818 = null;
var G__25819 = (0);
var G__25820 = (0);
seq__25789 = G__25817;
chunk__25790 = G__25818;
count__25791 = G__25819;
i__25792 = G__25820;
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
var seq__25821 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25822 = null;
var count__25823 = (0);
var i__25824 = (0);
while(true){
if((i__25824 < count__25823)){
var event = chunk__25822.cljs$core$IIndexed$_nth$arity$2(null,i__25824);
re_frame.router.dispatch(event);


var G__25825 = seq__25821;
var G__25826 = chunk__25822;
var G__25827 = count__25823;
var G__25828 = (i__25824 + (1));
seq__25821 = G__25825;
chunk__25822 = G__25826;
count__25823 = G__25827;
i__25824 = G__25828;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25821);
if(temp__5735__auto__){
var seq__25821__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25821__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25821__$1);
var G__25829 = cljs.core.chunk_rest(seq__25821__$1);
var G__25830 = c__4556__auto__;
var G__25831 = cljs.core.count(c__4556__auto__);
var G__25832 = (0);
seq__25821 = G__25829;
chunk__25822 = G__25830;
count__25823 = G__25831;
i__25824 = G__25832;
continue;
} else {
var event = cljs.core.first(seq__25821__$1);
re_frame.router.dispatch(event);


var G__25833 = cljs.core.next(seq__25821__$1);
var G__25834 = null;
var G__25835 = (0);
var G__25836 = (0);
seq__25821 = G__25833;
chunk__25822 = G__25834;
count__25823 = G__25835;
i__25824 = G__25836;
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
var seq__25837 = cljs.core.seq(value);
var chunk__25838 = null;
var count__25839 = (0);
var i__25840 = (0);
while(true){
if((i__25840 < count__25839)){
var event = chunk__25838.cljs$core$IIndexed$_nth$arity$2(null,i__25840);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__25841 = seq__25837;
var G__25842 = chunk__25838;
var G__25843 = count__25839;
var G__25844 = (i__25840 + (1));
seq__25837 = G__25841;
chunk__25838 = G__25842;
count__25839 = G__25843;
i__25840 = G__25844;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25837);
if(temp__5735__auto__){
var seq__25837__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25837__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25837__$1);
var G__25845 = cljs.core.chunk_rest(seq__25837__$1);
var G__25846 = c__4556__auto__;
var G__25847 = cljs.core.count(c__4556__auto__);
var G__25848 = (0);
seq__25837 = G__25845;
chunk__25838 = G__25846;
count__25839 = G__25847;
i__25840 = G__25848;
continue;
} else {
var event = cljs.core.first(seq__25837__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__25849 = cljs.core.next(seq__25837__$1);
var G__25850 = null;
var G__25851 = (0);
var G__25852 = (0);
seq__25837 = G__25849;
chunk__25838 = G__25850;
count__25839 = G__25851;
i__25840 = G__25852;
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
