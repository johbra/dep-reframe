// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('com.rpl.specter.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * Do not use this protocol directly. All navigators must be created using macros
 *   in com.rpl.specter namespace.
 * @interface
 */
com.rpl.specter.protocols.RichNavigator = function(){};

var com$rpl$specter$protocols$RichNavigator$select_STAR_$dyn_10924 = (function (this$,vals,structure,next_fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.protocols.select_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(this$,vals,structure,next_fn) : m__4429__auto__.call(null,this$,vals,structure,next_fn));
} else {
var m__4426__auto__ = (com.rpl.specter.protocols.select_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(this$,vals,structure,next_fn) : m__4426__auto__.call(null,this$,vals,structure,next_fn));
} else {
throw cljs.core.missing_protocol("RichNavigator.select*",this$);
}
}
});
/**
 * An implementation of `select*` must call `next-fn` on each
 *   subvalue of `structure`. The result of `select*` is specified
 *   as follows:
 * 
 *   1. `NONE` if `next-fn` never called
 *   2. `NONE` if all calls to `next-fn` return `NONE`
 *   3. Otherwise, any non-`NONE` return value from calling `next-fn`
 *   
 */
com.rpl.specter.protocols.select_STAR_ = (function com$rpl$specter$protocols$select_STAR_(this$,vals,structure,next_fn){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 == null)))))){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(this$,vals,structure,next_fn);
} else {
return com$rpl$specter$protocols$RichNavigator$select_STAR_$dyn_10924(this$,vals,structure,next_fn);
}
});

var com$rpl$specter$protocols$RichNavigator$transform_STAR_$dyn_10925 = (function (this$,vals,structure,next_fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.protocols.transform_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(this$,vals,structure,next_fn) : m__4429__auto__.call(null,this$,vals,structure,next_fn));
} else {
var m__4426__auto__ = (com.rpl.specter.protocols.transform_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(this$,vals,structure,next_fn) : m__4426__auto__.call(null,this$,vals,structure,next_fn));
} else {
throw cljs.core.missing_protocol("RichNavigator.transform*",this$);
}
}
});
/**
 * An implementation of `transform*` must use `next-fn` to transform
 *   any subvalues of `structure` and then merge those transformed values
 *   back into `structure`. Everything else in `structure` must be unchanged.
 */
com.rpl.specter.protocols.transform_STAR_ = (function com$rpl$specter$protocols$transform_STAR_(this$,vals,structure,next_fn){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 == null)))))){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(this$,vals,structure,next_fn);
} else {
return com$rpl$specter$protocols$RichNavigator$transform_STAR_$dyn_10925(this$,vals,structure,next_fn);
}
});


/**
 * Do not use this protocol directly. All navigators must be created using
 *   macros in com.rpl.specter namespace.
 * @interface
 */
com.rpl.specter.protocols.Collector = function(){};

var com$rpl$specter$protocols$Collector$collect_val$dyn_10926 = (function (this$,structure){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.protocols.collect_val[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,structure) : m__4429__auto__.call(null,this$,structure));
} else {
var m__4426__auto__ = (com.rpl.specter.protocols.collect_val["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,structure) : m__4426__auto__.call(null,this$,structure));
} else {
throw cljs.core.missing_protocol("Collector.collect-val",this$);
}
}
});
com.rpl.specter.protocols.collect_val = (function com$rpl$specter$protocols$collect_val(this$,structure){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$protocols$Collector$collect_val$arity$2 == null)))))){
return this$.com$rpl$specter$protocols$Collector$collect_val$arity$2(this$,structure);
} else {
return com$rpl$specter$protocols$Collector$collect_val$dyn_10926(this$,structure);
}
});


/**
 * @interface
 */
com.rpl.specter.protocols.ImplicitNav = function(){};

var com$rpl$specter$protocols$ImplicitNav$implicit_nav$dyn_10927 = (function (obj){
var x__4428__auto__ = (((obj == null))?null:obj);
var m__4429__auto__ = (com.rpl.specter.protocols.implicit_nav[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4429__auto__.call(null,obj));
} else {
var m__4426__auto__ = (com.rpl.specter.protocols.implicit_nav["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4426__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ImplicitNav.implicit-nav",obj);
}
}
});
com.rpl.specter.protocols.implicit_nav = (function com$rpl$specter$protocols$implicit_nav(obj){
if((((!((obj == null)))) && ((!((obj.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 == null)))))){
return obj.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1(obj);
} else {
return com$rpl$specter$protocols$ImplicitNav$implicit_nav$dyn_10927(obj);
}
});

