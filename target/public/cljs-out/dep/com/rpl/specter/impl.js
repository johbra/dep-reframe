// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.string');
goog.require('clojure.walk');
com.rpl.specter.impl.NONE = cljs.core.cst$kw$com$rpl$specter$impl_SLASH_NONE;
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SPY:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))], 0));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15295 = arguments.length;
var i__4772__auto___15296 = (0);
while(true){
if((i__4772__auto___15296 < len__4771__auto___15295)){
args__4777__auto__.push((arguments[i__4772__auto___15296]));

var G__15297 = (i__4772__auto___15296 + (1));
i__4772__auto___15296 = G__15297;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
}));

(com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq15294){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15294));
}));

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__15298 = null;
var G__15298__0 = (function (){
return v;
});
var G__15298__1 = (function (a1){
return v;
});
var G__15298__2 = (function (a1,a2){
return v;
});
var G__15298__3 = (function (a1,a2,a3){
return v;
});
var G__15298__4 = (function (a1,a2,a3,a4){
return v;
});
var G__15298__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__15298__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__15298__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__15298__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__15298__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__15298__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__15298__11 = (function() { 
var G__15299__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__15299 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__15300__i = 0, G__15300__a = new Array(arguments.length -  10);
while (G__15300__i < G__15300__a.length) {G__15300__a[G__15300__i] = arguments[G__15300__i + 10]; ++G__15300__i;}
  r = new cljs.core.IndexedSeq(G__15300__a,0,null);
} 
return G__15299__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__15299.cljs$lang$maxFixedArity = 10;
G__15299.cljs$lang$applyTo = (function (arglist__15301){
var a1 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a2 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a3 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a4 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a5 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a6 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a7 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a8 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a9 = cljs.core.first(arglist__15301);
arglist__15301 = cljs.core.next(arglist__15301);
var a10 = cljs.core.first(arglist__15301);
var r = cljs.core.rest(arglist__15301);
return G__15299__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__15299.cljs$core$IFn$_invoke$arity$variadic = G__15299__delegate;
return G__15299;
})()
;
G__15298 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__15298__0.call(this);
case 1:
return G__15298__1.call(this,a1);
case 2:
return G__15298__2.call(this,a1,a2);
case 3:
return G__15298__3.call(this,a1,a2,a3);
case 4:
return G__15298__4.call(this,a1,a2,a3,a4);
case 5:
return G__15298__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__15298__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__15298__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__15298__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__15298__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__15298__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__15302 = null;
if (arguments.length > 10) {
var G__15303__i = 0, G__15303__a = new Array(arguments.length -  10);
while (G__15303__i < G__15303__a.length) {G__15303__a[G__15303__i] = arguments[G__15303__i + 10]; ++G__15303__i;}
G__15302 = new cljs.core.IndexedSeq(G__15303__a,0,null);
}
return G__15298__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__15302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15298.cljs$lang$maxFixedArity = 10;
G__15298.cljs$lang$applyTo = G__15298__11.cljs$lang$applyTo;
G__15298.cljs$core$IFn$_invoke$arity$0 = G__15298__0;
G__15298.cljs$core$IFn$_invoke$arity$1 = G__15298__1;
G__15298.cljs$core$IFn$_invoke$arity$2 = G__15298__2;
G__15298.cljs$core$IFn$_invoke$arity$3 = G__15298__3;
G__15298.cljs$core$IFn$_invoke$arity$4 = G__15298__4;
G__15298.cljs$core$IFn$_invoke$arity$5 = G__15298__5;
G__15298.cljs$core$IFn$_invoke$arity$6 = G__15298__6;
G__15298.cljs$core$IFn$_invoke$arity$7 = G__15298__7;
G__15298.cljs$core$IFn$_invoke$arity$8 = G__15298__8;
G__15298.cljs$core$IFn$_invoke$arity$9 = G__15298__9;
G__15298.cljs$core$IFn$_invoke$arity$10 = G__15298__10;
G__15298.cljs$core$IFn$_invoke$arity$variadic = G__15298__11.cljs$core$IFn$_invoke$arity$variadic;
return G__15298;
})()
});
com.rpl.specter.impl.throw_illegal_STAR_ = (function com$rpl$specter$impl$throw_illegal_STAR_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15305 = arguments.length;
var i__4772__auto___15306 = (0);
while(true){
if((i__4772__auto___15306 < len__4771__auto___15305)){
args__4777__auto__.push((arguments[i__4772__auto___15306]));

var G__15307 = (i__4772__auto___15306 + (1));
i__4772__auto___15306 = G__15307;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)));
}));

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$applyTo = (function (seq15304){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15304));
}));

com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["not implemented"], 0));
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["intern not supported in ClojureScript"], 0));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__4661__auto__ = cljs.core.system_time();
var ret__4662__auto__ = (function (){var n__4648__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__4648__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null));

var G__15308 = (_ + (1));
_ = G__15308;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__4661__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__4662__auto__;
});
com.rpl.specter.impl.exec_select_STAR_ = (function com$rpl$specter$impl$exec_select_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(null,vals,structure,next_fn);
});
com.rpl.specter.impl.exec_transform_STAR_ = (function com$rpl$specter$impl$exec_transform_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(null,vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

var com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_15309 = (function (paths){
var x__4463__auto__ = (((paths == null))?null:paths);
var m__4464__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4464__auto__.call(null,paths));
} else {
var m__4461__auto__ = (com.rpl.specter.impl.do_comp_paths["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4461__auto__.call(null,paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
});
com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((((!((paths == null)))) && ((!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
return com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_15309(paths);
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if((!((n == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === n.com$rpl$specter$protocols$RichNavigator$)))){
return true;
} else {
if((!n.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
}
});
com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(com.rpl.specter.impl.rich_nav_QMARK_(p)){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths(p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(com.rpl.specter.impl.rich_nav_QMARK_(this$)){
return this$;
} else {
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.com$rpl$specter$protocols$ImplicitNav$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$))){
return com.rpl.specter.protocols.implicit_nav(this$);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not a navigator: ",this$," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(this$)], 0))], 0));

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

var com$rpl$specter$impl$CoercePath$coerce_path$dyn_15312 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (com.rpl.specter.impl.coerce_path["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
});
com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
return com$rpl$specter$impl$CoercePath$coerce_path$dyn_15312(this$);
}
});

goog.object.set(com.rpl.specter.impl.CoercePath,"null",true);

goog.object.set(com.rpl.specter.impl.coerce_path,"null",(function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,this$__$1));
}));

goog.object.set(com.rpl.specter.impl.CoercePath,"_",true);

goog.object.set(com.rpl.specter.impl.coerce_path,"_",(function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));
com.rpl.specter.impl.STAY_STAR_ = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl15313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl15313 = (function (meta15314){
this.meta15314 = meta15314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl15313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15315,meta15314__$1){
var self__ = this;
var _15315__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15313(meta15314__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15315){
var self__ = this;
var _15315__$1 = this;
return self__.meta15314;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15313.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl15313.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15313.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15314], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15313.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl15313.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl15313");

(com.rpl.specter.impl.t_com$rpl$specter$impl15313.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl15313");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl15313.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl15313 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl15313(meta15314){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15313(meta15314));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl15313(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl15316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl15316 = (function (nav1,nav2,meta15317){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta15317 = meta15317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl15316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15318,meta15317__$1){
var self__ = this;
var _15318__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15316(self__.nav1,self__.nav2,meta15317__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15318){
var self__ = this;
var _15318__$1 = this;
return self__.meta15317;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15316.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl15316.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15316.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nav1,cljs.core.cst$sym$nav2,cljs.core.cst$sym$meta15317], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15316.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl15316.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl15316");

(com.rpl.specter.impl.t_com$rpl$specter$impl15316.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl15316");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl15316.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl15316 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl15316(nav1__$1,nav2__$1,meta15317){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15316(nav1__$1,nav2__$1,meta15317));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl15316(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(com.rpl.specter.impl.PathComposer,"null",true);

goog.object.set(com.rpl.specter.impl.do_comp_paths,"null",(function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

goog.object.set(com.rpl.specter.impl.PathComposer,"_",true);

goog.object.set(com.rpl.specter.impl.do_comp_paths,"_",(function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (navigators){
var navigators__$1 = this;
var coerced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.coerce_path,navigators__$1);
if(cljs.core.empty_QMARK_(coerced)){
return com.rpl.specter.impl.STAY_STAR_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coerced))){
return cljs.core.first(coerced);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.combine_two_navs,coerced);

}
}
}));

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

var com$rpl$specter$impl$PMutableCell$set_cell$dyn_15319 = (function (cell,x){
var x__4463__auto__ = (((cell == null))?null:cell);
var m__4464__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4464__auto__.call(null,cell,x));
} else {
var m__4461__auto__ = (com.rpl.specter.impl.set_cell["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4461__auto__.call(null,cell,x));
} else {
throw cljs.core.missing_protocol("PMutableCell.set_cell",cell);
}
}
});
com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((((!((cell == null)))) && ((!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
return com$rpl$specter$impl$PMutableCell$set_cell$dyn_15319(cell,x);
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
});
(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (self__.q = x);
}));

(com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$q,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$volatile_DASH_mutable,true], null))], null);
}));

(com.rpl.specter.impl.MutableCell.cljs$lang$type = true);

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell");

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter.impl/MutableCell");
}));

/**
 * Positional factory function for com.rpl.specter.impl/MutableCell.
 */
com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__15321 = arguments.length;
switch (G__15321) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
}));

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
}));

(com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1);

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell(cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = (function (){var G__15323 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__15323) : afn.call(null,G__15323));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__15326 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__15326) : result_fn.call(null,G__15326));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl15327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl15327 = (function (apath,structure,meta15328){
this.apath = apath;
this.structure = structure;
this.meta15328 = meta15328;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl15327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15329,meta15328__$1){
var self__ = this;
var _15329__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15327(self__.apath,self__.structure,meta15328__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15329){
var self__ = this;
var _15329__$1 = this;
return self__.meta15328;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15327.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15327.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(start);
com.rpl.specter.impl.compiled_traverse_STAR_(self__.apath,(function (elem){
var curr = com.rpl.specter.impl.get_cell(cell);
var newv = (afn.cljs$core$IFn$_invoke$arity$2 ? afn.cljs$core$IFn$_invoke$arity$2(curr,elem) : afn.call(null,curr,elem));
com.rpl.specter.impl.set_cell_BANG_(cell,newv);

return newv;
}),self__.structure);

return com.rpl.specter.impl.get_cell(cell);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$apath,cljs.core.cst$sym$structure,cljs.core.cst$sym$meta15328], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15327.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl15327.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl15327");

(com.rpl.specter.impl.t_com$rpl$specter$impl15327.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl15327");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl15327.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl15327 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl15327(apath__$1,structure__$1,meta15328){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15327(apath__$1,structure__$1,meta15328));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl15327(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.call_reduce_interface = (function com$rpl$specter$impl$call_reduce_interface(traverser,afn,start){
return traverser.cljs$core$IReduce$_reduce$arity$3(null,afn,start);
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl15330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl15330 = (function (apath,structure,traverser,meta15331){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta15331 = meta15331;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl15330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15332,meta15331__$1){
var self__ = this;
var _15332__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15330(self__.apath,self__.structure,self__.traverser,meta15331__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15332){
var self__ = this;
var _15332__$1 = this;
return self__.meta15331;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15330.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15330.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = com.rpl.specter.impl.call_reduce_interface(self__.traverser,afn,start);
return cljs.core.unreduced(res);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$apath,cljs.core.cst$sym$structure,cljs.core.cst$sym$traverser,cljs.core.cst$sym$meta15331], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15330.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl15330.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl15330");

(com.rpl.specter.impl.t_com$rpl$specter$impl15330.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl15330");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl15330.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl15330 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl15330(apath__$1,structure__$1,traverser__$1,meta15331){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15330(apath__$1,structure__$1,traverser__$1,meta15331));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl15330(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__15333 = null;
var G__15333__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__15333__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__15333__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__15333 = function(result,input){
switch(arguments.length){
case 0:
return G__15333__0.call(this);
case 1:
return G__15333__1.call(this,result);
case 2:
return G__15333__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15333.cljs$core$IFn$_invoke$arity$0 = G__15333__0;
G__15333.cljs$core$IFn$_invoke$arity$1 = G__15333__1;
G__15333.cljs$core$IFn$_invoke$arity$2 = G__15333__2;
return G__15333;
})()
});
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
return com.rpl.specter.impl.set_cell_BANG_(res,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(curr,structure__$1));
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

return cljs.core.persistent_BANG_(com.rpl.specter.impl.get_cell(res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((com.rpl.specter.impl.NONE === ret)){
com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Found no elements for select-one! on ",structure], 0));
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(var_args){
var G__15335 = arguments.length;
switch (G__15335) {
case 2:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (path,structure){
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(path,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (path,vals,structure){
return cljs.core.unreduced(com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,cljs.core.reduced,vals,structure));
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$lang$maxFixedArity = 3);

com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var ret = com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return (!((com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure))));
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(afn,vals,structure){
if((vals === cljs.core.PersistentVector.EMPTY)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,structure));
}
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
return com.rpl.specter.impl.terminal_STAR_(transform_fn,vals,structure__$1);
}));
});
com.rpl.specter.impl.compiled_vtransform_STAR_ = (function com$rpl$specter$impl$compiled_vtransform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,transform_fn);
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return (((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_(f)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15338,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15342 = k15338;
var G__15342__$1 = (((G__15342 instanceof cljs.core.Keyword))?G__15342.fqn:null);
switch (G__15342__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15338,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15343){
var vec__15344 = p__15343;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15344,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15344,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15337){
var self__ = this;
var G__15337__$1 = this;
return (new cljs.core.RecordIter((0),G__15337__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$sym], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15347 = (function (coll__4412__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15347(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15339,other15340){
var self__ = this;
var this15339__$1 = this;
return (((!((other15340 == null)))) && ((this15339__$1.constructor === other15340.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15339__$1.val,other15340.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15339__$1.sym,other15340.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15339__$1.__extmap,other15340.__extmap)));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,null,cljs.core.cst$kw$sym,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15337){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15348 = cljs.core.keyword_identical_QMARK_;
var expr__15349 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15351 = cljs.core.cst$kw$val;
var G__15352 = expr__15349;
return (pred__15348.cljs$core$IFn$_invoke$arity$2 ? pred__15348.cljs$core$IFn$_invoke$arity$2(G__15351,G__15352) : pred__15348.call(null,G__15351,G__15352));
})())){
return (new com.rpl.specter.impl.LocalSym(G__15337,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15353 = cljs.core.cst$kw$sym;
var G__15354 = expr__15349;
return (pred__15348.cljs$core$IFn$_invoke$arity$2 ? pred__15348.cljs$core$IFn$_invoke$arity$2(G__15353,G__15354) : pred__15348.call(null,G__15353,G__15354));
})())){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__15337,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15337),null));
}
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$val,self__.val,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sym,self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15337){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__15337,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$sym], null);
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$type = true);

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalSym",null,(1),null));
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LocalSym");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalSym.
 */
com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalSym, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__15341){
var extmap__4454__auto__ = (function (){var G__15355 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15341,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sym], 0));
if(cljs.core.record_QMARK_(G__15341)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15355);
} else {
return G__15355;
}
})();
return (new com.rpl.specter.impl.LocalSym(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__15341),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__15341),null,cljs.core.not_empty(extmap__4454__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.VarUse = (function (val,avar,sym,__meta,__extmap,__hash){
this.val = val;
this.avar = avar;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15358,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15362 = k15358;
var G__15362__$1 = (((G__15362 instanceof cljs.core.Keyword))?G__15362.fqn:null);
switch (G__15362__$1) {
case "val":
return self__.val;

break;
case "avar":
return self__.avar;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15358,else__4418__auto__);

}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15363){
var vec__15364 = p__15363;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15364,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avar,self__.avar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15357){
var self__ = this;
var G__15357__$1 = this;
return (new cljs.core.RecordIter((0),G__15357__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$avar,cljs.core.cst$kw$sym], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15367 = (function (coll__4412__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15367(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15359,other15360){
var self__ = this;
var this15359__$1 = this;
return (((!((other15360 == null)))) && ((this15359__$1.constructor === other15360.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15359__$1.val,other15360.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15359__$1.avar,other15360.avar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15359__$1.sym,other15360.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15359__$1.__extmap,other15360.__extmap)));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$avar,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$sym,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15357){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15368 = cljs.core.keyword_identical_QMARK_;
var expr__15369 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15371 = cljs.core.cst$kw$val;
var G__15372 = expr__15369;
return (pred__15368.cljs$core$IFn$_invoke$arity$2 ? pred__15368.cljs$core$IFn$_invoke$arity$2(G__15371,G__15372) : pred__15368.call(null,G__15371,G__15372));
})())){
return (new com.rpl.specter.impl.VarUse(G__15357,self__.avar,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15373 = cljs.core.cst$kw$avar;
var G__15374 = expr__15369;
return (pred__15368.cljs$core$IFn$_invoke$arity$2 ? pred__15368.cljs$core$IFn$_invoke$arity$2(G__15373,G__15374) : pred__15368.call(null,G__15373,G__15374));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,G__15357,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15375 = cljs.core.cst$kw$sym;
var G__15376 = expr__15369;
return (pred__15368.cljs$core$IFn$_invoke$arity$2 ? pred__15368.cljs$core$IFn$_invoke$arity$2(G__15375,G__15376) : pred__15368.call(null,G__15375,G__15376));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,G__15357,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15357),null));
}
}
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$val,self__.val,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$avar,self__.avar,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sym,self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15357){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,G__15357,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$avar,cljs.core.cst$sym$sym], null);
}));

(com.rpl.specter.impl.VarUse.cljs$lang$type = true);

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/VarUse",null,(1),null));
}));

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/VarUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/VarUse.
 */
com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,avar,sym){
return (new com.rpl.specter.impl.VarUse(val,avar,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/VarUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__15361){
var extmap__4454__auto__ = (function (){var G__15377 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15361,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$avar,cljs.core.cst$kw$sym], 0));
if(cljs.core.record_QMARK_(G__15361)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15377);
} else {
return G__15377;
}
})();
return (new com.rpl.specter.impl.VarUse(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__15361),cljs.core.cst$kw$avar.cljs$core$IFn$_invoke$arity$1(G__15361),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__15361),null,cljs.core.not_empty(extmap__4454__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15380,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15384 = k15380;
var G__15384__$1 = (((G__15384 instanceof cljs.core.Keyword))?G__15384.fqn:null);
switch (G__15384__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15380,else__4418__auto__);

}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15385){
var vec__15386 = p__15385;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15386,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15386,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15379){
var self__ = this;
var G__15379__$1 = this;
return (new cljs.core.RecordIter((0),G__15379__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15389 = (function (coll__4412__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15389(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15381,other15382){
var self__ = this;
var this15381__$1 = this;
return (((!((other15382 == null)))) && ((this15381__$1.constructor === other15382.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15381__$1.val,other15382.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15381__$1.code,other15382.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15381__$1.__extmap,other15382.__extmap)));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,null,cljs.core.cst$kw$code,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15379){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15390 = cljs.core.keyword_identical_QMARK_;
var expr__15391 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15393 = cljs.core.cst$kw$val;
var G__15394 = expr__15391;
return (pred__15390.cljs$core$IFn$_invoke$arity$2 ? pred__15390.cljs$core$IFn$_invoke$arity$2(G__15393,G__15394) : pred__15390.call(null,G__15393,G__15394));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(G__15379,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15395 = cljs.core.cst$kw$code;
var G__15396 = expr__15391;
return (pred__15390.cljs$core$IFn$_invoke$arity$2 ? pred__15390.cljs$core$IFn$_invoke$arity$2(G__15395,G__15396) : pred__15390.call(null,G__15395,G__15396));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__15379,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15379),null));
}
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$val,self__.val,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$code,self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15379){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__15379,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$code], null);
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true);

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/SpecialFormUse",null,(1),null));
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/SpecialFormUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/SpecialFormUse.
 */
com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/SpecialFormUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__15383){
var extmap__4454__auto__ = (function (){var G__15397 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15383,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code], 0));
if(cljs.core.record_QMARK_(G__15383)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15397);
} else {
return G__15397;
}
})();
return (new com.rpl.specter.impl.SpecialFormUse(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__15383),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__15383),null,cljs.core.not_empty(extmap__4454__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15400,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15404 = k15400;
var G__15404__$1 = (((G__15404 instanceof cljs.core.Keyword))?G__15404.fqn:null);
switch (G__15404__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15400,else__4418__auto__);

}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15405){
var vec__15406 = p__15405;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15406,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15406,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15399){
var self__ = this;
var G__15399__$1 = this;
return (new cljs.core.RecordIter((0),G__15399__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$params,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15409 = (function (coll__4412__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15409(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15401,other15402){
var self__ = this;
var this15401__$1 = this;
return (((!((other15402 == null)))) && ((this15401__$1.constructor === other15402.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15401__$1.op,other15402.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15401__$1.params,other15402.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15401__$1.code,other15402.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15401__$1.__extmap,other15402.__extmap)));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$op,null,cljs.core.cst$kw$code,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15399){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15410 = cljs.core.keyword_identical_QMARK_;
var expr__15411 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15413 = cljs.core.cst$kw$op;
var G__15414 = expr__15411;
return (pred__15410.cljs$core$IFn$_invoke$arity$2 ? pred__15410.cljs$core$IFn$_invoke$arity$2(G__15413,G__15414) : pred__15410.call(null,G__15413,G__15414));
})())){
return (new com.rpl.specter.impl.FnInvocation(G__15399,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15415 = cljs.core.cst$kw$params;
var G__15416 = expr__15411;
return (pred__15410.cljs$core$IFn$_invoke$arity$2 ? pred__15410.cljs$core$IFn$_invoke$arity$2(G__15415,G__15416) : pred__15410.call(null,G__15415,G__15416));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__15399,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15417 = cljs.core.cst$kw$code;
var G__15418 = expr__15411;
return (pred__15410.cljs$core$IFn$_invoke$arity$2 ? pred__15410.cljs$core$IFn$_invoke$arity$2(G__15417,G__15418) : pred__15410.call(null,G__15417,G__15418));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__15399,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15399),null));
}
}
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$op,self__.op,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$code,self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15399){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__15399,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$op,cljs.core.cst$sym$params,cljs.core.cst$sym$code], null);
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$type = true);

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/FnInvocation",null,(1),null));
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/FnInvocation");
}));

/**
 * Positional factory function for com.rpl.specter.impl/FnInvocation.
 */
com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/FnInvocation, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__15403){
var extmap__4454__auto__ = (function (){var G__15419 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15403,cljs.core.cst$kw$op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$code], 0));
if(cljs.core.record_QMARK_(G__15403)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15419);
} else {
return G__15419;
}
})();
return (new com.rpl.specter.impl.FnInvocation(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(G__15403),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__15403),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__15403),null,cljs.core.not_empty(extmap__4454__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15422,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15426 = k15422;
var G__15426__$1 = (((G__15426 instanceof cljs.core.Keyword))?G__15426.fqn:null);
switch (G__15426__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15422,else__4418__auto__);

}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15427){
var vec__15428 = p__15427;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15428,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15428,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15421){
var self__ = this;
var G__15421__$1 = this;
return (new cljs.core.RecordIter((0),G__15421__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15431 = (function (coll__4412__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15431(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15423,other15424){
var self__ = this;
var this15423__$1 = this;
return (((!((other15424 == null)))) && ((this15423__$1.constructor === other15424.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15423__$1.code,other15424.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15423__$1.__extmap,other15424.__extmap)));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15421){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15432 = cljs.core.keyword_identical_QMARK_;
var expr__15433 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15435 = cljs.core.cst$kw$code;
var G__15436 = expr__15433;
return (pred__15432.cljs$core$IFn$_invoke$arity$2 ? pred__15432.cljs$core$IFn$_invoke$arity$2(G__15435,G__15436) : pred__15432.call(null,G__15435,G__15436));
})())){
return (new com.rpl.specter.impl.DynamicVal(G__15421,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15421),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$code,self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15421){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__15421,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$code], null);
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicVal",null,(1),null));
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/DynamicVal");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicVal.
 */
com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicVal, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__15425){
var extmap__4454__auto__ = (function (){var G__15437 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15425,cljs.core.cst$kw$code);
if(cljs.core.record_QMARK_(G__15425)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15437);
} else {
return G__15437;
}
})();
return (new com.rpl.specter.impl.DynamicVal(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__15425),null,cljs.core.not_empty(extmap__4454__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15440,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15444 = k15440;
var G__15444__$1 = (((G__15444 instanceof cljs.core.Keyword))?G__15444.fqn:null);
switch (G__15444__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15440,else__4418__auto__);

}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15445){
var vec__15446 = p__15445;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15446,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15446,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15439){
var self__ = this;
var G__15439__$1 = this;
return (new cljs.core.RecordIter((0),G__15439__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15449 = (function (coll__4412__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15449(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15441,other15442){
var self__ = this;
var this15441__$1 = this;
return (((!((other15442 == null)))) && ((this15441__$1.constructor === other15442.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15441__$1.path,other15442.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15441__$1.__extmap,other15442.__extmap)));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15439){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15450 = cljs.core.keyword_identical_QMARK_;
var expr__15451 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15453 = cljs.core.cst$kw$path;
var G__15454 = expr__15451;
return (pred__15450.cljs$core$IFn$_invoke$arity$2 ? pred__15450.cljs$core$IFn$_invoke$arity$2(G__15453,G__15454) : pred__15450.call(null,G__15453,G__15454));
})())){
return (new com.rpl.specter.impl.DynamicPath(G__15439,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15439),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15439){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__15439,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path], null);
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicPath",null,(1),null));
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/DynamicPath");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicPath.
 */
com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicPath, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__15443){
var extmap__4454__auto__ = (function (){var G__15455 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15443,cljs.core.cst$kw$path);
if(cljs.core.record_QMARK_(G__15443)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15455);
} else {
return G__15455;
}
})();
return (new com.rpl.specter.impl.DynamicPath(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__15443),null,cljs.core.not_empty(extmap__4454__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicFunction = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15458,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15462 = k15458;
var G__15462__$1 = (((G__15462 instanceof cljs.core.Keyword))?G__15462.fqn:null);
switch (G__15462__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15458,else__4418__auto__);

}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15463){
var vec__15464 = p__15463;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15464,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15464,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15457){
var self__ = this;
var G__15457__$1 = this;
return (new cljs.core.RecordIter((0),G__15457__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$params,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15467 = (function (coll__4412__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15467(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15459,other15460){
var self__ = this;
var this15459__$1 = this;
return (((!((other15460 == null)))) && ((this15459__$1.constructor === other15460.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15459__$1.op,other15460.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15459__$1.params,other15460.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15459__$1.code,other15460.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15459__$1.__extmap,other15460.__extmap)));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$op,null,cljs.core.cst$kw$code,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15457){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15468 = cljs.core.keyword_identical_QMARK_;
var expr__15469 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15471 = cljs.core.cst$kw$op;
var G__15472 = expr__15469;
return (pred__15468.cljs$core$IFn$_invoke$arity$2 ? pred__15468.cljs$core$IFn$_invoke$arity$2(G__15471,G__15472) : pred__15468.call(null,G__15471,G__15472));
})())){
return (new com.rpl.specter.impl.DynamicFunction(G__15457,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15473 = cljs.core.cst$kw$params;
var G__15474 = expr__15469;
return (pred__15468.cljs$core$IFn$_invoke$arity$2 ? pred__15468.cljs$core$IFn$_invoke$arity$2(G__15473,G__15474) : pred__15468.call(null,G__15473,G__15474));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__15457,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15475 = cljs.core.cst$kw$code;
var G__15476 = expr__15469;
return (pred__15468.cljs$core$IFn$_invoke$arity$2 ? pred__15468.cljs$core$IFn$_invoke$arity$2(G__15475,G__15476) : pred__15468.call(null,G__15475,G__15476));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__15457,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15457),null));
}
}
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$op,self__.op,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$code,self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15457){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__15457,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$op,cljs.core.cst$sym$params,cljs.core.cst$sym$code], null);
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicFunction",null,(1),null));
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/DynamicFunction");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicFunction.
 */
com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params,code){
return (new com.rpl.specter.impl.DynamicFunction(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicFunction, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__15461){
var extmap__4454__auto__ = (function (){var G__15477 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15461,cljs.core.cst$kw$op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$code], 0));
if(cljs.core.record_QMARK_(G__15461)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15477);
} else {
return G__15477;
}
})();
return (new com.rpl.specter.impl.DynamicFunction(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(G__15461),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__15461),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__15461),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal]),cljs.core.type(o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.impl.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(com.rpl.specter.impl.static_path_QMARK_(path)){
return com.rpl.specter.impl.comp_paths_STAR_(path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath(path);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15480,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15484 = k15480;
var G__15484__$1 = (((G__15484 instanceof cljs.core.Keyword))?G__15484.fqn:null);
switch (G__15484__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15480,else__4418__auto__);

}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15485){
var vec__15486 = p__15485;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15486,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15486,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dynamic_QMARK_,self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$precompiled,self__.precompiled],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15479){
var self__ = this;
var G__15479__$1 = this;
return (new cljs.core.RecordIter((0),G__15479__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dynamic_QMARK_,cljs.core.cst$kw$precompiled], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15489 = (function (coll__4412__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15489(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15481,other15482){
var self__ = this;
var this15481__$1 = this;
return (((!((other15482 == null)))) && ((this15481__$1.constructor === other15482.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15481__$1.dynamic_QMARK_,other15482.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15481__$1.precompiled,other15482.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15481__$1.__extmap,other15482.__extmap)));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dynamic_QMARK_,null,cljs.core.cst$kw$precompiled,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15479){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15490 = cljs.core.keyword_identical_QMARK_;
var expr__15491 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15493 = cljs.core.cst$kw$dynamic_QMARK_;
var G__15494 = expr__15491;
return (pred__15490.cljs$core$IFn$_invoke$arity$2 ? pred__15490.cljs$core$IFn$_invoke$arity$2(G__15493,G__15494) : pred__15490.call(null,G__15493,G__15494));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(G__15479,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15495 = cljs.core.cst$kw$precompiled;
var G__15496 = expr__15491;
return (pred__15490.cljs$core$IFn$_invoke$arity$2 ? pred__15490.cljs$core$IFn$_invoke$arity$2(G__15495,G__15496) : pred__15490.call(null,G__15495,G__15496));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__15479,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15479),null));
}
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$dynamic_QMARK_,self__.dynamic_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$precompiled,self__.precompiled,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15479){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__15479,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dynamic_QMARK_,cljs.core.cst$sym$precompiled], null);
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true);

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/CachedPathInfo",null,(1),null));
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/CachedPathInfo");
}));

/**
 * Positional factory function for com.rpl.specter.impl/CachedPathInfo.
 */
com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/CachedPathInfo, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__15483){
var extmap__4454__auto__ = (function (){var G__15497 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15483,cljs.core.cst$kw$dynamic_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$precompiled], 0));
if(cljs.core.record_QMARK_(G__15483)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15497);
} else {
return G__15497;
}
})();
return (new com.rpl.specter.impl.CachedPathInfo(cljs.core.cst$kw$dynamic_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15483),cljs.core.cst$kw$precompiled.cljs$core$IFn$_invoke$arity$1(G__15483),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

com.rpl.specter.impl.cached_path_info_precompiled = (function com$rpl$specter$impl$cached_path_info_precompiled(c){
return c.precompiled;
});
com.rpl.specter.impl.cached_path_info_dynamic_QMARK_ = (function com$rpl$specter$impl$cached_path_info_dynamic_QMARK_(c){
return c.dynamic_QMARK_;
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});
com.rpl.specter.impl.pred_STAR_ = (function com$rpl$specter$impl$pred_STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl15499 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl15499 = (function (afn,meta15500){
this.afn = afn;
this.meta15500 = meta15500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl15499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15501,meta15500__$1){
var self__ = this;
var _15501__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15499(self__.afn,meta15500__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15501){
var self__ = this;
var _15501__$1 = this;
return self__.meta15500;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15499.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl15499.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15499.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta15500], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15499.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl15499.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl15499");

(com.rpl.specter.impl.t_com$rpl$specter$impl15499.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl15499");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl15499.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl15499 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl15499(afn__$1,meta15500){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15499(afn__$1,meta15500));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl15499(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl15502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl15502 = (function (afn,meta15503){
this.afn = afn;
this.meta15503 = meta15503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl15502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15504,meta15503__$1){
var self__ = this;
var _15504__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15502(self__.afn,meta15503__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15504){
var self__ = this;
var _15504__$1 = this;
return self__.meta15503;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15502.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl15502.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15502.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta15503], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15502.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl15502.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl15502");

(com.rpl.specter.impl.t_com$rpl$specter$impl15502.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl15502");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl15502.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl15502 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl15502(afn__$1,meta15503){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15502(afn__$1,meta15503));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl15502(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl15505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl15505 = (function (cell,meta15506){
this.cell = cell;
this.meta15506 = meta15506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl15505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15507,meta15506__$1){
var self__ = this;
var _15507__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15505(self__.cell,meta15506__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15507){
var self__ = this;
var _15507__$1 = this;
return self__.meta15506;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15505.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl15505.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15505.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cell,cljs.core.cst$sym$meta15506], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl15505.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl15505.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl15505");

(com.rpl.specter.impl.t_com$rpl$specter$impl15505.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl15505");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl15505.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl15505 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl15505(cell__$1,meta15506){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl15505(cell__$1,meta15506));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl15505(cell,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.local_declarepath = (function com$rpl$specter$impl$local_declarepath(){
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.impl.cell_nav(cell),cljs.core.assoc,cljs.core.cst$kw$com$rpl$specter$impl_SLASH_cell,cell);
});
com.rpl.specter.impl.providepath_STAR_ = (function com$rpl$specter$impl$providepath_STAR_(declared,compiled_path){
var cell = cljs.core.cst$kw$com$rpl$specter$impl_SLASH_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declared));
return com.rpl.specter.impl.set_cell_BANG_(cell,compiled_path);
});
com.rpl.specter.impl.gensyms = (function com$rpl$specter$impl$gensyms(amt){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(amt,cljs.core.gensym));
});
com.rpl.specter.impl.comp_navs = (function com$rpl$specter$impl$comp_navs(var_args){
var G__15735 = arguments.length;
switch (G__15735) {
case 0:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case 13:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 15:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case 16:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case 17:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case 18:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case 19:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___15737 = arguments.length;
var i__4772__auto___15738 = (0);
while(true){
if((i__4772__auto___15738 < len__4771__auto___15737)){
args_arr__4792__auto__.push((arguments[i__4772__auto___15738]));

var G__15739 = (i__4772__auto___15738 + (1));
i__4772__auto___15738 = G__15739;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__4793__auto__);

}
});

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__14132__auto__){
return nav1__14132__auto__;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__14132__auto__,nav2__14133__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__14132__auto__,nav2__14133__auto__);
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__15527,G__15528,G__15529){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15527,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15528,G__15529));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__15530,G__15531,G__15532,G__15533){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15530,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__15531,G__15532,G__15533));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__15534,G__15535,G__15536,G__15537,G__15538){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15534,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__15535,G__15536,G__15537,G__15538));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__15539,G__15540,G__15541,G__15542,G__15543,G__15544){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15539,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__15540,G__15541,G__15542,G__15543,G__15544));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__15545,G__15546,G__15547,G__15548,G__15549,G__15550,G__15551){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15545,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__15546,G__15547,G__15548,G__15549,G__15550,G__15551));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__15552,G__15553,G__15554,G__15555,G__15556,G__15557,G__15558,G__15559){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15552,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__15553,G__15554,G__15555,G__15556,G__15557,G__15558,G__15559));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__15560,G__15561,G__15562,G__15563,G__15564,G__15565,G__15566,G__15567,G__15568){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15560,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__15561,G__15562,G__15563,G__15564,G__15565,G__15566,G__15567,G__15568));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__15569,G__15570,G__15571,G__15572,G__15573,G__15574,G__15575,G__15576,G__15577,G__15578){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15569,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__15570,G__15571,G__15572,G__15573,G__15574,G__15575,G__15576,G__15577,G__15578));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__15579,G__15580,G__15581,G__15582,G__15583,G__15584,G__15585,G__15586,G__15587,G__15588,G__15589){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15579,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__15580,G__15581,G__15582,G__15583,G__15584,G__15585,G__15586,G__15587,G__15588,G__15589));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__15590,G__15591,G__15592,G__15593,G__15594,G__15595,G__15596,G__15597,G__15598,G__15599,G__15600,G__15601){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15590,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__15591,G__15592,G__15593,G__15594,G__15595,G__15596,G__15597,G__15598,G__15599,G__15600,G__15601));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__15602,G__15603,G__15604,G__15605,G__15606,G__15607,G__15608,G__15609,G__15610,G__15611,G__15612,G__15613,G__15614){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15602,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__15603,G__15604,G__15605,G__15606,G__15607,G__15608,G__15609,G__15610,G__15611,G__15612,G__15613,G__15614));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__15615,G__15616,G__15617,G__15618,G__15619,G__15620,G__15621,G__15622,G__15623,G__15624,G__15625,G__15626,G__15627,G__15628){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15615,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__15616,G__15617,G__15618,G__15619,G__15620,G__15621,G__15622,G__15623,G__15624,G__15625,G__15626,G__15627,G__15628));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__15629,G__15630,G__15631,G__15632,G__15633,G__15634,G__15635,G__15636,G__15637,G__15638,G__15639,G__15640,G__15641,G__15642,G__15643){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15629,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__15630,G__15631,G__15632,G__15633,G__15634,G__15635,G__15636,G__15637,G__15638,G__15639,G__15640,G__15641,G__15642,G__15643));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__15644,G__15645,G__15646,G__15647,G__15648,G__15649,G__15650,G__15651,G__15652,G__15653,G__15654,G__15655,G__15656,G__15657,G__15658,G__15659){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15644,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__15645,G__15646,G__15647,G__15648,G__15649,G__15650,G__15651,G__15652,G__15653,G__15654,G__15655,G__15656,G__15657,G__15658,G__15659));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__15660,G__15661,G__15662,G__15663,G__15664,G__15665,G__15666,G__15667,G__15668,G__15669,G__15670,G__15671,G__15672,G__15673,G__15674,G__15675,G__15676){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15660,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__15661,G__15662,G__15663,G__15664,G__15665,G__15666,G__15667,G__15668,G__15669,G__15670,G__15671,G__15672,G__15673,G__15674,G__15675,G__15676));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__15677,G__15678,G__15679,G__15680,G__15681,G__15682,G__15683,G__15684,G__15685,G__15686,G__15687,G__15688,G__15689,G__15690,G__15691,G__15692,G__15693,G__15694){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15677,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__15678,G__15679,G__15680,G__15681,G__15682,G__15683,G__15684,G__15685,G__15686,G__15687,G__15688,G__15689,G__15690,G__15691,G__15692,G__15693,G__15694));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__15695,G__15696,G__15697,G__15698,G__15699,G__15700,G__15701,G__15702,G__15703,G__15704,G__15705,G__15706,G__15707,G__15708,G__15709,G__15710,G__15711,G__15712,G__15713){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__15695,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__15696,G__15697,G__15698,G__15699,G__15700,G__15701,G__15702,G__15703,G__15704,G__15705,G__15706,G__15707,G__15708,G__15709,G__15710,G__15711,G__15712,G__15713));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__15508,G__15509,G__15510,G__15511,G__15512,G__15513,G__15514,G__15515,G__15516,G__15517,G__15518,G__15519,G__15520,G__15521,G__15522,G__15523,G__15524,G__15525,G__15526,rest__14134__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__15508,G__15509,G__15510,G__15511,G__15512,G__15513,G__15514,G__15515,G__15516,G__15517,G__15518,G__15519,G__15520,G__15521,G__15522,G__15523,G__15524,G__15525,G__15526),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__14134__auto__));
}));

/** @this {Function} */
(com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq15715){
var G__15716 = cljs.core.first(seq15715);
var seq15715__$1 = cljs.core.next(seq15715);
var G__15717 = cljs.core.first(seq15715__$1);
var seq15715__$2 = cljs.core.next(seq15715__$1);
var G__15718 = cljs.core.first(seq15715__$2);
var seq15715__$3 = cljs.core.next(seq15715__$2);
var G__15719 = cljs.core.first(seq15715__$3);
var seq15715__$4 = cljs.core.next(seq15715__$3);
var G__15720 = cljs.core.first(seq15715__$4);
var seq15715__$5 = cljs.core.next(seq15715__$4);
var G__15721 = cljs.core.first(seq15715__$5);
var seq15715__$6 = cljs.core.next(seq15715__$5);
var G__15722 = cljs.core.first(seq15715__$6);
var seq15715__$7 = cljs.core.next(seq15715__$6);
var G__15723 = cljs.core.first(seq15715__$7);
var seq15715__$8 = cljs.core.next(seq15715__$7);
var G__15724 = cljs.core.first(seq15715__$8);
var seq15715__$9 = cljs.core.next(seq15715__$8);
var G__15725 = cljs.core.first(seq15715__$9);
var seq15715__$10 = cljs.core.next(seq15715__$9);
var G__15726 = cljs.core.first(seq15715__$10);
var seq15715__$11 = cljs.core.next(seq15715__$10);
var G__15727 = cljs.core.first(seq15715__$11);
var seq15715__$12 = cljs.core.next(seq15715__$11);
var G__15728 = cljs.core.first(seq15715__$12);
var seq15715__$13 = cljs.core.next(seq15715__$12);
var G__15729 = cljs.core.first(seq15715__$13);
var seq15715__$14 = cljs.core.next(seq15715__$13);
var G__15730 = cljs.core.first(seq15715__$14);
var seq15715__$15 = cljs.core.next(seq15715__$14);
var G__15731 = cljs.core.first(seq15715__$15);
var seq15715__$16 = cljs.core.next(seq15715__$15);
var G__15732 = cljs.core.first(seq15715__$16);
var seq15715__$17 = cljs.core.next(seq15715__$16);
var G__15733 = cljs.core.first(seq15715__$17);
var seq15715__$18 = cljs.core.next(seq15715__$17);
var G__15734 = cljs.core.first(seq15715__$18);
var seq15715__$19 = cljs.core.next(seq15715__$18);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15716,G__15717,G__15718,G__15719,G__15720,G__15721,G__15722,G__15723,G__15724,G__15725,G__15726,G__15727,G__15728,G__15729,G__15730,G__15731,G__15732,G__15733,G__15734,seq15715__$19);
}));

(com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19));

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__15740 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15740) : next_fn.call(null,G__15740));
})();
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,((structure).length))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__15741 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15741) : next_fn.call(null,G__15741));
})();
var res = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,(0),start),newpart,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,end,cljs.core.count(structure))], 0));
if(cljs.core.vector_QMARK_(structure)){
return cljs.core.vec(res);
} else {
return res;
}
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(e) : p.call(null,e)))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__15742,i){
var vec__15743 = p__15742;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15743,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15743,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15743,(2),null);
var curr = vec__15743;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.matching_indices(aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
com.rpl.specter.impl.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$impl$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__15746){
var vec__15747 = p__15746;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15747,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15747,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_(structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse(com.rpl.specter.impl.matching_ranges(structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
var ret = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(((com.rpl.specter.impl.fn_invocation_QMARK_(structure)) && (com.rpl.specter.impl.fn_invocation_QMARK_(ret)))){
return cljs.core.with_meta(ret,cljs.core.meta(structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var walker = (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure__$1) : pred.call(null,structure__$1)))){
var r = (continue_fn.cljs$core$IFn$_invoke$arity$1 ? continue_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : continue_fn.call(null,structure__$1));
if((!((r === com.rpl.specter.impl.NONE)))){
com.rpl.specter.impl.set_cell_BANG_(ret,r);
} else {
}

return r;
} else {
return clojure.walk.walk(com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});
walker(structure);

return com.rpl.specter.impl.get_cell(ret);
});
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.coerce_nav = (function com$rpl$specter$impl$coerce_nav(o){
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.com$rpl$specter$protocols$RichNavigator$))))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o))){
return o;
} else {
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.comp_paths_STAR_(o);
} else {
return com.rpl.specter.protocols.implicit_nav(o);

}
}
});
com.rpl.specter.impl.dynamic_var_QMARK_ = (function com$rpl$specter$impl$dynamic_var_QMARK_(v){
return cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
});
com.rpl.specter.impl.direct_nav_obj = (function com$rpl$specter$impl$direct_nav_obj(o){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(o,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direct_DASH_nav,true,cljs.core.cst$kw$original_DASH_obj,o], null));
});
com.rpl.specter.impl.maybe_direct_nav = (function com$rpl$specter$impl$maybe_direct_nav(obj,direct_nav_QMARK_){
if(cljs.core.truth_(direct_nav_QMARK_)){
return com.rpl.specter.impl.direct_nav_obj(obj);
} else {
return obj;
}
});
com.rpl.specter.impl.original_obj = (function com$rpl$specter$impl$original_obj(o){
while(true){
var orig = cljs.core.cst$kw$original_DASH_obj.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(orig)){
var G__15757 = orig;
o = G__15757;
continue;
} else {
return o;
}
break;
}
});
com.rpl.specter.impl.direct_nav_QMARK_ = (function com$rpl$specter$impl$direct_nav_QMARK_(o){
return cljs.core.cst$kw$direct_DASH_nav.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
});
com.rpl.specter.impl.all_static_QMARK_ = (function com$rpl$specter$impl$all_static_QMARK_(params){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,params));
});
com.rpl.specter.impl.late_resolved_fn = (function com$rpl$specter$impl$late_resolved_fn(afn){
return (function() { 
var G__15758__delegate = function (args){
if(com.rpl.specter.impl.all_static_QMARK_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__15758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15759__i = 0, G__15759__a = new Array(arguments.length -  0);
while (G__15759__i < G__15759__a.length) {G__15759__a[G__15759__i] = arguments[G__15759__i + 0]; ++G__15759__i;}
  args = new cljs.core.IndexedSeq(G__15759__a,0,null);
} 
return G__15758__delegate.call(this,args);};
G__15758.cljs$lang$maxFixedArity = 0;
G__15758.cljs$lang$applyTo = (function (arglist__15760){
var args = cljs.core.seq(arglist__15760);
return G__15758__delegate(args);
});
G__15758.cljs$core$IFn$_invoke$arity$variadic = G__15758__delegate;
return G__15758;
})()
;
});
com.rpl.specter.impl.preserve_map = (function com$rpl$specter$impl$preserve_map(afn,o){
if(((cljs.core.list_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(o),cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o));
}
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(o){
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.preserve_map(com.rpl.specter.impl.magic_precompilation_STAR_,o);
} else {
if((o instanceof com.rpl.specter.impl.VarUse)){
var v = o.avar;
if(cljs.core.truth_((function (){var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return com.rpl.specter.impl.dynamic_var_QMARK_(v);
} else {
return and__4149__auto__;
}
})())){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(o.sym,(function (){var or__4160__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(v);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(o.val,(function (){var or__4160__auto__ = (function (){var and__4149__auto__ = v;
if(cljs.core.truth_(and__4149__auto__)){
return com.rpl.specter.impl.direct_nav_QMARK_(v);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.val);
}
}
})());
}
} else {
if((o instanceof com.rpl.specter.impl.LocalSym)){
return com.rpl.specter.impl.__GT_DynamicVal(o.sym);
} else {
if((o instanceof com.rpl.specter.impl.SpecialFormUse)){
return com.rpl.specter.impl.__GT_DynamicVal(o.code);
} else {
if((o instanceof com.rpl.specter.impl.FnInvocation)){
var op = (function (){var G__15761 = o.op;
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__15761) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__15761));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,o.params));
if(cljs.core.truth_((function (){var or__4160__auto__ = cljs.core.cst$kw$dynamicnav.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__15762 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__15762) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__15762));
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(op,params,o.code);
}
} else {
return o;

}
}
}
}
}
});
com.rpl.specter.impl.static_combine = (function com$rpl$specter$impl$static_combine(var_args){
var G__15766 = arguments.length;
switch (G__15766) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1 = (function (o){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o,true);
}));

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2 = (function (o,nav_pos_QMARK_){
if(cljs.core.sequential_QMARK_(o)){
if(cljs.core.truth_(nav_pos_QMARK_)){
var res = com.rpl.specter.impl.continuous_subseqs_transform_STAR_(com.rpl.specter.impl.rich_nav_QMARK_,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.static_combine,cljs.core.flatten(o))),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.comp_paths_STAR_(s)], null);
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(res))){
return cljs.core.first(res);
} else {
return res;
}
} else {
return com.rpl.specter.impl.preserve_map((function (p1__15763_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__15763_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o.op,false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15764_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__15764_SHARP_,false);
}),o.params)),o.code);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.__GT_DynamicPath(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(o.path));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return o;
} else {
if(cljs.core.truth_(nav_pos_QMARK_)){
return com.rpl.specter.impl.coerce_nav(o);
} else {
return o;
}

}
}
}
}
}));

(com.rpl.specter.impl.static_combine.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
com.rpl.specter.impl.LateResolve = function(){};

var com$rpl$specter$impl$LateResolve$late_resolve$dyn_16755 = (function (this$,dynamic_params){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4464__auto__.call(null,this$,dynamic_params));
} else {
var m__4461__auto__ = (com.rpl.specter.impl.late_resolve["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4461__auto__.call(null,this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
});
com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
return com$rpl$specter$impl$LateResolve$late_resolve$dyn_16755(this$,dynamic_params);
}
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalParam = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15769,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15773 = k15769;
var G__15773__$1 = (((G__15773 instanceof cljs.core.Keyword))?G__15773.fqn:null);
switch (G__15773__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15769,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15774){
var vec__15775 = p__15774;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15775,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15775,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$idx,self__.idx],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15768){
var self__ = this;
var G__15768__$1 = this;
return (new cljs.core.RecordIter((0),G__15768__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idx], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15778 = (function (coll__4412__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15778(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15770,other15771){
var self__ = this;
var this15770__$1 = this;
return (((!((other15771 == null)))) && ((this15770__$1.constructor === other15771.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15770__$1.idx,other15771.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15770__$1.__extmap,other15771.__extmap)));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$idx,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15768){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15779 = cljs.core.keyword_identical_QMARK_;
var expr__15780 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15782 = cljs.core.cst$kw$idx;
var G__15783 = expr__15780;
return (pred__15779.cljs$core$IFn$_invoke$arity$2 ? pred__15779.cljs$core$IFn$_invoke$arity$2(G__15782,G__15783) : pred__15779.call(null,G__15782,G__15783));
})())){
return (new com.rpl.specter.impl.LocalParam(G__15768,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15768),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$idx,self__.idx,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15768){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__15768,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx], null);
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$type = true);

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalParam",null,(1),null));
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LocalParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalParam.
 */
com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__15772){
var extmap__4454__auto__ = (function (){var G__15784 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15772,cljs.core.cst$kw$idx);
if(cljs.core.record_QMARK_(G__15772)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15784);
} else {
return G__15784;
}
})();
return (new com.rpl.specter.impl.LocalParam(cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(G__15772),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.StaticParam = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15786,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15790 = k15786;
var G__15790__$1 = (((G__15790 instanceof cljs.core.Keyword))?G__15790.fqn:null);
switch (G__15790__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15786,else__4418__auto__);

}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15791){
var vec__15792 = p__15791;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15792,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15792,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15785){
var self__ = this;
var G__15785__$1 = this;
return (new cljs.core.RecordIter((0),G__15785__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15795 = (function (coll__4412__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15795(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15787,other15788){
var self__ = this;
var this15787__$1 = this;
return (((!((other15788 == null)))) && ((this15787__$1.constructor === other15788.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15787__$1.val,other15788.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15787__$1.__extmap,other15788.__extmap)));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$val,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15785){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15796 = cljs.core.keyword_identical_QMARK_;
var expr__15797 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15799 = cljs.core.cst$kw$val;
var G__15800 = expr__15797;
return (pred__15796.cljs$core$IFn$_invoke$arity$2 ? pred__15796.cljs$core$IFn$_invoke$arity$2(G__15799,G__15800) : pred__15796.call(null,G__15799,G__15800));
})())){
return (new com.rpl.specter.impl.StaticParam(G__15785,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15785),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$val,self__.val,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15785){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__15785,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$type = true);

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/StaticParam",null,(1),null));
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/StaticParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/StaticParam.
 */
com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/StaticParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__15789){
var extmap__4454__auto__ = (function (){var G__15801 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15789,cljs.core.cst$kw$val);
if(cljs.core.record_QMARK_(G__15789)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15801);
} else {
return G__15801;
}
})();
return (new com.rpl.specter.impl.StaticParam(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__15789),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn0 = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15823,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15827 = k15823;
var G__15827__$1 = (((G__15827 instanceof cljs.core.Keyword))?G__15827.fqn:null);
switch (G__15827__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15823,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15828){
var vec__15829 = p__15828;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15802){
var self__ = this;
var this__14162__auto____$1 = this;
var fexpr__15832 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15802);
return (fexpr__15832.cljs$core$IFn$_invoke$arity$0 ? fexpr__15832.cljs$core$IFn$_invoke$arity$0() : fexpr__15832.call(null));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15822){
var self__ = this;
var G__15822__$1 = this;
return (new cljs.core.RecordIter((0),G__15822__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15833 = (function (coll__4412__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15833(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15824,other15825){
var self__ = this;
var this15824__$1 = this;
return (((!((other15825 == null)))) && ((this15824__$1.constructor === other15825.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15824__$1.fn,other15825.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15824__$1.__extmap,other15825.__extmap)));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15822){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15834 = cljs.core.keyword_identical_QMARK_;
var expr__15835 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15837 = cljs.core.cst$kw$fn;
var G__15838 = expr__15835;
return (pred__15834.cljs$core$IFn$_invoke$arity$2 ? pred__15834.cljs$core$IFn$_invoke$arity$2(G__15837,G__15838) : pred__15834.call(null,G__15837,G__15838));
})())){
return (new com.rpl.specter.impl.LateFn0(G__15822,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15822),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15822){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__15822,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn], null);
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn0",null,(1),null));
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn0");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn0.
 */
com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn0, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__15826){
var extmap__4454__auto__ = (function (){var G__15839 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15826,cljs.core.cst$kw$fn);
if(cljs.core.record_QMARK_(G__15826)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15839);
} else {
return G__15839;
}
})();
return (new com.rpl.specter.impl.LateFn0(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__15826),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn1 = (function (fn,arg0,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15841,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15845 = k15841;
var G__15845__$1 = (((G__15845 instanceof cljs.core.Keyword))?G__15845.fqn:null);
switch (G__15845__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15841,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15846){
var vec__15847 = p__15846;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15847,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15847,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15803){
var self__ = this;
var this__14162__auto____$1 = this;
var G__15851 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15803);
var fexpr__15850 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15803);
return (fexpr__15850.cljs$core$IFn$_invoke$arity$1 ? fexpr__15850.cljs$core$IFn$_invoke$arity$1(G__15851) : fexpr__15850.call(null,G__15851));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15840){
var self__ = this;
var G__15840__$1 = this;
return (new cljs.core.RecordIter((0),G__15840__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15852 = (function (coll__4412__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15852(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15842,other15843){
var self__ = this;
var this15842__$1 = this;
return (((!((other15843 == null)))) && ((this15842__$1.constructor === other15843.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15842__$1.fn,other15843.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15842__$1.arg0,other15843.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15842__$1.__extmap,other15843.__extmap)));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg0,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15840){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15853 = cljs.core.keyword_identical_QMARK_;
var expr__15854 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15856 = cljs.core.cst$kw$fn;
var G__15857 = expr__15854;
return (pred__15853.cljs$core$IFn$_invoke$arity$2 ? pred__15853.cljs$core$IFn$_invoke$arity$2(G__15856,G__15857) : pred__15853.call(null,G__15856,G__15857));
})())){
return (new com.rpl.specter.impl.LateFn1(G__15840,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15858 = cljs.core.cst$kw$arg0;
var G__15859 = expr__15854;
return (pred__15853.cljs$core$IFn$_invoke$arity$2 ? pred__15853.cljs$core$IFn$_invoke$arity$2(G__15858,G__15859) : pred__15853.call(null,G__15858,G__15859));
})())){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__15840,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15840),null));
}
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15840){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__15840,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0], null);
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn1",null,(1),null));
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn1");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn1.
 */
com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn1, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__15844){
var extmap__4454__auto__ = (function (){var G__15860 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15844,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0], 0));
if(cljs.core.record_QMARK_(G__15844)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15860);
} else {
return G__15860;
}
})();
return (new com.rpl.specter.impl.LateFn1(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__15844),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__15844),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn2 = (function (fn,arg0,arg1,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15862,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15866 = k15862;
var G__15866__$1 = (((G__15866 instanceof cljs.core.Keyword))?G__15866.fqn:null);
switch (G__15866__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15862,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15867){
var vec__15868 = p__15867;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15868,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15868,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15804){
var self__ = this;
var this__14162__auto____$1 = this;
var G__15872 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15804);
var G__15873 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15804);
var fexpr__15871 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15804);
return (fexpr__15871.cljs$core$IFn$_invoke$arity$2 ? fexpr__15871.cljs$core$IFn$_invoke$arity$2(G__15872,G__15873) : fexpr__15871.call(null,G__15872,G__15873));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15861){
var self__ = this;
var G__15861__$1 = this;
return (new cljs.core.RecordIter((0),G__15861__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15874 = (function (coll__4412__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15874(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15863,other15864){
var self__ = this;
var this15863__$1 = this;
return (((!((other15864 == null)))) && ((this15863__$1.constructor === other15864.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15863__$1.fn,other15864.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15863__$1.arg0,other15864.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15863__$1.arg1,other15864.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15863__$1.__extmap,other15864.__extmap)));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15861){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15875 = cljs.core.keyword_identical_QMARK_;
var expr__15876 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15878 = cljs.core.cst$kw$fn;
var G__15879 = expr__15876;
return (pred__15875.cljs$core$IFn$_invoke$arity$2 ? pred__15875.cljs$core$IFn$_invoke$arity$2(G__15878,G__15879) : pred__15875.call(null,G__15878,G__15879));
})())){
return (new com.rpl.specter.impl.LateFn2(G__15861,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15880 = cljs.core.cst$kw$arg0;
var G__15881 = expr__15876;
return (pred__15875.cljs$core$IFn$_invoke$arity$2 ? pred__15875.cljs$core$IFn$_invoke$arity$2(G__15880,G__15881) : pred__15875.call(null,G__15880,G__15881));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__15861,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15882 = cljs.core.cst$kw$arg1;
var G__15883 = expr__15876;
return (pred__15875.cljs$core$IFn$_invoke$arity$2 ? pred__15875.cljs$core$IFn$_invoke$arity$2(G__15882,G__15883) : pred__15875.call(null,G__15882,G__15883));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__15861,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15861),null));
}
}
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15861){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__15861,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1], null);
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn2",null,(1),null));
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn2");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn2.
 */
com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn2, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__15865){
var extmap__4454__auto__ = (function (){var G__15884 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15865,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1], 0));
if(cljs.core.record_QMARK_(G__15865)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15884);
} else {
return G__15884;
}
})();
return (new com.rpl.specter.impl.LateFn2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__15865),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__15865),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__15865),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn3 = (function (fn,arg0,arg1,arg2,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15886,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15890 = k15886;
var G__15890__$1 = (((G__15890 instanceof cljs.core.Keyword))?G__15890.fqn:null);
switch (G__15890__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15886,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15891){
var vec__15892 = p__15891;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15892,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15892,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15805){
var self__ = this;
var this__14162__auto____$1 = this;
var G__15896 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15805);
var G__15897 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15805);
var G__15898 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15805);
var fexpr__15895 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15805);
return (fexpr__15895.cljs$core$IFn$_invoke$arity$3 ? fexpr__15895.cljs$core$IFn$_invoke$arity$3(G__15896,G__15897,G__15898) : fexpr__15895.call(null,G__15896,G__15897,G__15898));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15885){
var self__ = this;
var G__15885__$1 = this;
return (new cljs.core.RecordIter((0),G__15885__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15899 = (function (coll__4412__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15899(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15887,other15888){
var self__ = this;
var this15887__$1 = this;
return (((!((other15888 == null)))) && ((this15887__$1.constructor === other15888.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15887__$1.fn,other15888.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15887__$1.arg0,other15888.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15887__$1.arg1,other15888.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15887__$1.arg2,other15888.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15887__$1.__extmap,other15888.__extmap)));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15885){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15900 = cljs.core.keyword_identical_QMARK_;
var expr__15901 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15903 = cljs.core.cst$kw$fn;
var G__15904 = expr__15901;
return (pred__15900.cljs$core$IFn$_invoke$arity$2 ? pred__15900.cljs$core$IFn$_invoke$arity$2(G__15903,G__15904) : pred__15900.call(null,G__15903,G__15904));
})())){
return (new com.rpl.specter.impl.LateFn3(G__15885,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15905 = cljs.core.cst$kw$arg0;
var G__15906 = expr__15901;
return (pred__15900.cljs$core$IFn$_invoke$arity$2 ? pred__15900.cljs$core$IFn$_invoke$arity$2(G__15905,G__15906) : pred__15900.call(null,G__15905,G__15906));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__15885,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15907 = cljs.core.cst$kw$arg1;
var G__15908 = expr__15901;
return (pred__15900.cljs$core$IFn$_invoke$arity$2 ? pred__15900.cljs$core$IFn$_invoke$arity$2(G__15907,G__15908) : pred__15900.call(null,G__15907,G__15908));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__15885,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15909 = cljs.core.cst$kw$arg2;
var G__15910 = expr__15901;
return (pred__15900.cljs$core$IFn$_invoke$arity$2 ? pred__15900.cljs$core$IFn$_invoke$arity$2(G__15909,G__15910) : pred__15900.call(null,G__15909,G__15910));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__15885,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15885),null));
}
}
}
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15885){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15885,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2], null);
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn3",null,(1),null));
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn3");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn3.
 */
com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn3, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__15889){
var extmap__4454__auto__ = (function (){var G__15911 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15889,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2], 0));
if(cljs.core.record_QMARK_(G__15889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15911);
} else {
return G__15911;
}
})();
return (new com.rpl.specter.impl.LateFn3(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__15889),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__15889),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__15889),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__15889),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn4 = (function (fn,arg0,arg1,arg2,arg3,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15913,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15917 = k15913;
var G__15917__$1 = (((G__15917 instanceof cljs.core.Keyword))?G__15917.fqn:null);
switch (G__15917__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15913,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15918){
var vec__15919 = p__15918;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15919,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15919,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15806){
var self__ = this;
var this__14162__auto____$1 = this;
var G__15923 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15806);
var G__15924 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15806);
var G__15925 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15806);
var G__15926 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15806);
var fexpr__15922 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15806);
return (fexpr__15922.cljs$core$IFn$_invoke$arity$4 ? fexpr__15922.cljs$core$IFn$_invoke$arity$4(G__15923,G__15924,G__15925,G__15926) : fexpr__15922.call(null,G__15923,G__15924,G__15925,G__15926));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15912){
var self__ = this;
var G__15912__$1 = this;
return (new cljs.core.RecordIter((0),G__15912__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15927 = (function (coll__4412__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15927(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15914,other15915){
var self__ = this;
var this15914__$1 = this;
return (((!((other15915 == null)))) && ((this15914__$1.constructor === other15915.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15914__$1.fn,other15915.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15914__$1.arg0,other15915.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15914__$1.arg1,other15915.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15914__$1.arg2,other15915.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15914__$1.arg3,other15915.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15914__$1.__extmap,other15915.__extmap)));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15912){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15928 = cljs.core.keyword_identical_QMARK_;
var expr__15929 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15931 = cljs.core.cst$kw$fn;
var G__15932 = expr__15929;
return (pred__15928.cljs$core$IFn$_invoke$arity$2 ? pred__15928.cljs$core$IFn$_invoke$arity$2(G__15931,G__15932) : pred__15928.call(null,G__15931,G__15932));
})())){
return (new com.rpl.specter.impl.LateFn4(G__15912,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15933 = cljs.core.cst$kw$arg0;
var G__15934 = expr__15929;
return (pred__15928.cljs$core$IFn$_invoke$arity$2 ? pred__15928.cljs$core$IFn$_invoke$arity$2(G__15933,G__15934) : pred__15928.call(null,G__15933,G__15934));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__15912,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15935 = cljs.core.cst$kw$arg1;
var G__15936 = expr__15929;
return (pred__15928.cljs$core$IFn$_invoke$arity$2 ? pred__15928.cljs$core$IFn$_invoke$arity$2(G__15935,G__15936) : pred__15928.call(null,G__15935,G__15936));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__15912,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15937 = cljs.core.cst$kw$arg2;
var G__15938 = expr__15929;
return (pred__15928.cljs$core$IFn$_invoke$arity$2 ? pred__15928.cljs$core$IFn$_invoke$arity$2(G__15937,G__15938) : pred__15928.call(null,G__15937,G__15938));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__15912,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15939 = cljs.core.cst$kw$arg3;
var G__15940 = expr__15929;
return (pred__15928.cljs$core$IFn$_invoke$arity$2 ? pred__15928.cljs$core$IFn$_invoke$arity$2(G__15939,G__15940) : pred__15928.call(null,G__15939,G__15940));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15912,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15912),null));
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15912){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15912,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3], null);
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn4",null,(1),null));
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn4");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn4.
 */
com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn4, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__15916){
var extmap__4454__auto__ = (function (){var G__15941 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15916,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3], 0));
if(cljs.core.record_QMARK_(G__15916)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15941);
} else {
return G__15941;
}
})();
return (new com.rpl.specter.impl.LateFn4(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__15916),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__15916),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__15916),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__15916),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__15916),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn5 = (function (fn,arg0,arg1,arg2,arg3,arg4,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15943,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15947 = k15943;
var G__15947__$1 = (((G__15947 instanceof cljs.core.Keyword))?G__15947.fqn:null);
switch (G__15947__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15943,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15948){
var vec__15949 = p__15948;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15949,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15949,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15807){
var self__ = this;
var this__14162__auto____$1 = this;
var G__15953 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15807);
var G__15954 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15807);
var G__15955 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15807);
var G__15956 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15807);
var G__15957 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15807);
var fexpr__15952 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15807);
return (fexpr__15952.cljs$core$IFn$_invoke$arity$5 ? fexpr__15952.cljs$core$IFn$_invoke$arity$5(G__15953,G__15954,G__15955,G__15956,G__15957) : fexpr__15952.call(null,G__15953,G__15954,G__15955,G__15956,G__15957));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15942){
var self__ = this;
var G__15942__$1 = this;
return (new cljs.core.RecordIter((0),G__15942__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15958 = (function (coll__4412__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15958(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15944,other15945){
var self__ = this;
var this15944__$1 = this;
return (((!((other15945 == null)))) && ((this15944__$1.constructor === other15945.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15944__$1.fn,other15945.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15944__$1.arg0,other15945.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15944__$1.arg1,other15945.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15944__$1.arg2,other15945.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15944__$1.arg3,other15945.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15944__$1.arg4,other15945.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15944__$1.__extmap,other15945.__extmap)));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15942){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15959 = cljs.core.keyword_identical_QMARK_;
var expr__15960 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15962 = cljs.core.cst$kw$fn;
var G__15963 = expr__15960;
return (pred__15959.cljs$core$IFn$_invoke$arity$2 ? pred__15959.cljs$core$IFn$_invoke$arity$2(G__15962,G__15963) : pred__15959.call(null,G__15962,G__15963));
})())){
return (new com.rpl.specter.impl.LateFn5(G__15942,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15964 = cljs.core.cst$kw$arg0;
var G__15965 = expr__15960;
return (pred__15959.cljs$core$IFn$_invoke$arity$2 ? pred__15959.cljs$core$IFn$_invoke$arity$2(G__15964,G__15965) : pred__15959.call(null,G__15964,G__15965));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__15942,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15966 = cljs.core.cst$kw$arg1;
var G__15967 = expr__15960;
return (pred__15959.cljs$core$IFn$_invoke$arity$2 ? pred__15959.cljs$core$IFn$_invoke$arity$2(G__15966,G__15967) : pred__15959.call(null,G__15966,G__15967));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__15942,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15968 = cljs.core.cst$kw$arg2;
var G__15969 = expr__15960;
return (pred__15959.cljs$core$IFn$_invoke$arity$2 ? pred__15959.cljs$core$IFn$_invoke$arity$2(G__15968,G__15969) : pred__15959.call(null,G__15968,G__15969));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__15942,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15970 = cljs.core.cst$kw$arg3;
var G__15971 = expr__15960;
return (pred__15959.cljs$core$IFn$_invoke$arity$2 ? pred__15959.cljs$core$IFn$_invoke$arity$2(G__15970,G__15971) : pred__15959.call(null,G__15970,G__15971));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15942,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15972 = cljs.core.cst$kw$arg4;
var G__15973 = expr__15960;
return (pred__15959.cljs$core$IFn$_invoke$arity$2 ? pred__15959.cljs$core$IFn$_invoke$arity$2(G__15972,G__15973) : pred__15959.call(null,G__15972,G__15973));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15942,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15942),null));
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15942){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__15942,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4], null);
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn5",null,(1),null));
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn5");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn5.
 */
com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn5, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__15946){
var extmap__4454__auto__ = (function (){var G__15974 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15946,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4], 0));
if(cljs.core.record_QMARK_(G__15946)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15974);
} else {
return G__15974;
}
})();
return (new com.rpl.specter.impl.LateFn5(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__15946),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__15946),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__15946),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__15946),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__15946),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__15946),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn6 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k15976,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__15980 = k15976;
var G__15980__$1 = (((G__15980 instanceof cljs.core.Keyword))?G__15980.fqn:null);
switch (G__15980__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15976,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__15981){
var vec__15982 = p__15981;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15982,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15982,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15808){
var self__ = this;
var this__14162__auto____$1 = this;
var G__15986 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15808);
var G__15987 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15808);
var G__15988 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15808);
var G__15989 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15808);
var G__15990 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15808);
var G__15991 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15808);
var fexpr__15985 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15808);
return (fexpr__15985.cljs$core$IFn$_invoke$arity$6 ? fexpr__15985.cljs$core$IFn$_invoke$arity$6(G__15986,G__15987,G__15988,G__15989,G__15990,G__15991) : fexpr__15985.call(null,G__15986,G__15987,G__15988,G__15989,G__15990,G__15991));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15975){
var self__ = this;
var G__15975__$1 = this;
return (new cljs.core.RecordIter((0),G__15975__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__15992 = (function (coll__4412__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__15992(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15977,other15978){
var self__ = this;
var this15977__$1 = this;
return (((!((other15978 == null)))) && ((this15977__$1.constructor === other15978.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15977__$1.fn,other15978.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15977__$1.arg0,other15978.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15977__$1.arg1,other15978.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15977__$1.arg2,other15978.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15977__$1.arg3,other15978.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15977__$1.arg4,other15978.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15977__$1.arg5,other15978.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15977__$1.__extmap,other15978.__extmap)));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__15975){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__15993 = cljs.core.keyword_identical_QMARK_;
var expr__15994 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__15996 = cljs.core.cst$kw$fn;
var G__15997 = expr__15994;
return (pred__15993.cljs$core$IFn$_invoke$arity$2 ? pred__15993.cljs$core$IFn$_invoke$arity$2(G__15996,G__15997) : pred__15993.call(null,G__15996,G__15997));
})())){
return (new com.rpl.specter.impl.LateFn6(G__15975,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15998 = cljs.core.cst$kw$arg0;
var G__15999 = expr__15994;
return (pred__15993.cljs$core$IFn$_invoke$arity$2 ? pred__15993.cljs$core$IFn$_invoke$arity$2(G__15998,G__15999) : pred__15993.call(null,G__15998,G__15999));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__15975,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16000 = cljs.core.cst$kw$arg1;
var G__16001 = expr__15994;
return (pred__15993.cljs$core$IFn$_invoke$arity$2 ? pred__15993.cljs$core$IFn$_invoke$arity$2(G__16000,G__16001) : pred__15993.call(null,G__16000,G__16001));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__15975,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16002 = cljs.core.cst$kw$arg2;
var G__16003 = expr__15994;
return (pred__15993.cljs$core$IFn$_invoke$arity$2 ? pred__15993.cljs$core$IFn$_invoke$arity$2(G__16002,G__16003) : pred__15993.call(null,G__16002,G__16003));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__15975,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16004 = cljs.core.cst$kw$arg3;
var G__16005 = expr__15994;
return (pred__15993.cljs$core$IFn$_invoke$arity$2 ? pred__15993.cljs$core$IFn$_invoke$arity$2(G__16004,G__16005) : pred__15993.call(null,G__16004,G__16005));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__15975,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16006 = cljs.core.cst$kw$arg4;
var G__16007 = expr__15994;
return (pred__15993.cljs$core$IFn$_invoke$arity$2 ? pred__15993.cljs$core$IFn$_invoke$arity$2(G__16006,G__16007) : pred__15993.call(null,G__16006,G__16007));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__15975,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16008 = cljs.core.cst$kw$arg5;
var G__16009 = expr__15994;
return (pred__15993.cljs$core$IFn$_invoke$arity$2 ? pred__15993.cljs$core$IFn$_invoke$arity$2(G__16008,G__16009) : pred__15993.call(null,G__16008,G__16009));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__15975,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__15975),null));
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__15975){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__15975,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5], null);
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn6",null,(1),null));
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn6");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn6.
 */
com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn6, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__15979){
var extmap__4454__auto__ = (function (){var G__16010 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15979,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5], 0));
if(cljs.core.record_QMARK_(G__15979)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16010);
} else {
return G__16010;
}
})();
return (new com.rpl.specter.impl.LateFn6(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__15979),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__15979),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__15979),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__15979),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__15979),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__15979),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__15979),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn7 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16012,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16016 = k16012;
var G__16016__$1 = (((G__16016 instanceof cljs.core.Keyword))?G__16016.fqn:null);
switch (G__16016__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16012,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16017){
var vec__16018 = p__16017;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16018,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16018,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15809){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16022 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15809);
var G__16023 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15809);
var G__16024 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15809);
var G__16025 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15809);
var G__16026 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15809);
var G__16027 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15809);
var G__16028 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15809);
var fexpr__16021 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15809);
return (fexpr__16021.cljs$core$IFn$_invoke$arity$7 ? fexpr__16021.cljs$core$IFn$_invoke$arity$7(G__16022,G__16023,G__16024,G__16025,G__16026,G__16027,G__16028) : fexpr__16021.call(null,G__16022,G__16023,G__16024,G__16025,G__16026,G__16027,G__16028));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16011){
var self__ = this;
var G__16011__$1 = this;
return (new cljs.core.RecordIter((0),G__16011__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16029 = (function (coll__4412__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16029(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16013,other16014){
var self__ = this;
var this16013__$1 = this;
return (((!((other16014 == null)))) && ((this16013__$1.constructor === other16014.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.fn,other16014.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.arg0,other16014.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.arg1,other16014.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.arg2,other16014.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.arg3,other16014.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.arg4,other16014.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.arg5,other16014.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.arg6,other16014.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16013__$1.__extmap,other16014.__extmap)));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16011){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16030 = cljs.core.keyword_identical_QMARK_;
var expr__16031 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16033 = cljs.core.cst$kw$fn;
var G__16034 = expr__16031;
return (pred__16030.cljs$core$IFn$_invoke$arity$2 ? pred__16030.cljs$core$IFn$_invoke$arity$2(G__16033,G__16034) : pred__16030.call(null,G__16033,G__16034));
})())){
return (new com.rpl.specter.impl.LateFn7(G__16011,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16035 = cljs.core.cst$kw$arg0;
var G__16036 = expr__16031;
return (pred__16030.cljs$core$IFn$_invoke$arity$2 ? pred__16030.cljs$core$IFn$_invoke$arity$2(G__16035,G__16036) : pred__16030.call(null,G__16035,G__16036));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__16011,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16037 = cljs.core.cst$kw$arg1;
var G__16038 = expr__16031;
return (pred__16030.cljs$core$IFn$_invoke$arity$2 ? pred__16030.cljs$core$IFn$_invoke$arity$2(G__16037,G__16038) : pred__16030.call(null,G__16037,G__16038));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__16011,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16039 = cljs.core.cst$kw$arg2;
var G__16040 = expr__16031;
return (pred__16030.cljs$core$IFn$_invoke$arity$2 ? pred__16030.cljs$core$IFn$_invoke$arity$2(G__16039,G__16040) : pred__16030.call(null,G__16039,G__16040));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__16011,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16041 = cljs.core.cst$kw$arg3;
var G__16042 = expr__16031;
return (pred__16030.cljs$core$IFn$_invoke$arity$2 ? pred__16030.cljs$core$IFn$_invoke$arity$2(G__16041,G__16042) : pred__16030.call(null,G__16041,G__16042));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16011,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16043 = cljs.core.cst$kw$arg4;
var G__16044 = expr__16031;
return (pred__16030.cljs$core$IFn$_invoke$arity$2 ? pred__16030.cljs$core$IFn$_invoke$arity$2(G__16043,G__16044) : pred__16030.call(null,G__16043,G__16044));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16011,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16045 = cljs.core.cst$kw$arg5;
var G__16046 = expr__16031;
return (pred__16030.cljs$core$IFn$_invoke$arity$2 ? pred__16030.cljs$core$IFn$_invoke$arity$2(G__16045,G__16046) : pred__16030.call(null,G__16045,G__16046));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16011,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16047 = cljs.core.cst$kw$arg6;
var G__16048 = expr__16031;
return (pred__16030.cljs$core$IFn$_invoke$arity$2 ? pred__16030.cljs$core$IFn$_invoke$arity$2(G__16047,G__16048) : pred__16030.call(null,G__16047,G__16048));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16011,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16011),null));
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16011){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16011,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6], null);
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn7",null,(1),null));
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn7");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn7.
 */
com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn7, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__16015){
var extmap__4454__auto__ = (function (){var G__16049 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16015,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6], 0));
if(cljs.core.record_QMARK_(G__16015)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16049);
} else {
return G__16049;
}
})();
return (new com.rpl.specter.impl.LateFn7(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16015),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16015),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16015),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16015),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16015),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16015),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16015),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16015),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn8 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16051,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16055 = k16051;
var G__16055__$1 = (((G__16055 instanceof cljs.core.Keyword))?G__16055.fqn:null);
switch (G__16055__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16051,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16056){
var vec__16057 = p__16056;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16057,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16057,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15810){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16061 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15810);
var G__16062 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15810);
var G__16063 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15810);
var G__16064 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15810);
var G__16065 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15810);
var G__16066 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15810);
var G__16067 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15810);
var G__16068 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15810);
var fexpr__16060 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15810);
return (fexpr__16060.cljs$core$IFn$_invoke$arity$8 ? fexpr__16060.cljs$core$IFn$_invoke$arity$8(G__16061,G__16062,G__16063,G__16064,G__16065,G__16066,G__16067,G__16068) : fexpr__16060.call(null,G__16061,G__16062,G__16063,G__16064,G__16065,G__16066,G__16067,G__16068));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16050){
var self__ = this;
var G__16050__$1 = this;
return (new cljs.core.RecordIter((0),G__16050__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16069 = (function (coll__4412__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16069(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16052,other16053){
var self__ = this;
var this16052__$1 = this;
return (((!((other16053 == null)))) && ((this16052__$1.constructor === other16053.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.fn,other16053.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.arg0,other16053.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.arg1,other16053.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.arg2,other16053.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.arg3,other16053.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.arg4,other16053.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.arg5,other16053.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.arg6,other16053.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.arg7,other16053.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16052__$1.__extmap,other16053.__extmap)));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16050){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16070 = cljs.core.keyword_identical_QMARK_;
var expr__16071 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16073 = cljs.core.cst$kw$fn;
var G__16074 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16073,G__16074) : pred__16070.call(null,G__16073,G__16074));
})())){
return (new com.rpl.specter.impl.LateFn8(G__16050,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16075 = cljs.core.cst$kw$arg0;
var G__16076 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16075,G__16076) : pred__16070.call(null,G__16075,G__16076));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__16050,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16077 = cljs.core.cst$kw$arg1;
var G__16078 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16077,G__16078) : pred__16070.call(null,G__16077,G__16078));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__16050,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16079 = cljs.core.cst$kw$arg2;
var G__16080 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16079,G__16080) : pred__16070.call(null,G__16079,G__16080));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__16050,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16081 = cljs.core.cst$kw$arg3;
var G__16082 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16081,G__16082) : pred__16070.call(null,G__16081,G__16082));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16050,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16083 = cljs.core.cst$kw$arg4;
var G__16084 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16083,G__16084) : pred__16070.call(null,G__16083,G__16084));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16050,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16085 = cljs.core.cst$kw$arg5;
var G__16086 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16085,G__16086) : pred__16070.call(null,G__16085,G__16086));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16050,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16087 = cljs.core.cst$kw$arg6;
var G__16088 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16087,G__16088) : pred__16070.call(null,G__16087,G__16088));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16050,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16089 = cljs.core.cst$kw$arg7;
var G__16090 = expr__16071;
return (pred__16070.cljs$core$IFn$_invoke$arity$2 ? pred__16070.cljs$core$IFn$_invoke$arity$2(G__16089,G__16090) : pred__16070.call(null,G__16089,G__16090));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16050,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16050),null));
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16050){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16050,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7], null);
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn8",null,(1),null));
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn8");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn8.
 */
com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn8, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__16054){
var extmap__4454__auto__ = (function (){var G__16091 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16054,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7], 0));
if(cljs.core.record_QMARK_(G__16054)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16091);
} else {
return G__16091;
}
})();
return (new com.rpl.specter.impl.LateFn8(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16054),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16054),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16054),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16054),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16054),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16054),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16054),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16054),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16054),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn9 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16093,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16097 = k16093;
var G__16097__$1 = (((G__16097 instanceof cljs.core.Keyword))?G__16097.fqn:null);
switch (G__16097__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16093,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16098){
var vec__16099 = p__16098;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16099,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16099,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15811){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16103 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15811);
var G__16104 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15811);
var G__16105 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15811);
var G__16106 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15811);
var G__16107 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15811);
var G__16108 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15811);
var G__16109 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15811);
var G__16110 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15811);
var G__16111 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15811);
var fexpr__16102 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15811);
return (fexpr__16102.cljs$core$IFn$_invoke$arity$9 ? fexpr__16102.cljs$core$IFn$_invoke$arity$9(G__16103,G__16104,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111) : fexpr__16102.call(null,G__16103,G__16104,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16092){
var self__ = this;
var G__16092__$1 = this;
return (new cljs.core.RecordIter((0),G__16092__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16112 = (function (coll__4412__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16112(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16094,other16095){
var self__ = this;
var this16094__$1 = this;
return (((!((other16095 == null)))) && ((this16094__$1.constructor === other16095.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.fn,other16095.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg0,other16095.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg1,other16095.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg2,other16095.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg3,other16095.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg4,other16095.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg5,other16095.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg6,other16095.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg7,other16095.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.arg8,other16095.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16094__$1.__extmap,other16095.__extmap)));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16092){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16113 = cljs.core.keyword_identical_QMARK_;
var expr__16114 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16116 = cljs.core.cst$kw$fn;
var G__16117 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16116,G__16117) : pred__16113.call(null,G__16116,G__16117));
})())){
return (new com.rpl.specter.impl.LateFn9(G__16092,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16118 = cljs.core.cst$kw$arg0;
var G__16119 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16118,G__16119) : pred__16113.call(null,G__16118,G__16119));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__16092,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16120 = cljs.core.cst$kw$arg1;
var G__16121 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16120,G__16121) : pred__16113.call(null,G__16120,G__16121));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__16092,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16122 = cljs.core.cst$kw$arg2;
var G__16123 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16122,G__16123) : pred__16113.call(null,G__16122,G__16123));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__16092,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16124 = cljs.core.cst$kw$arg3;
var G__16125 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16124,G__16125) : pred__16113.call(null,G__16124,G__16125));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16092,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16126 = cljs.core.cst$kw$arg4;
var G__16127 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16126,G__16127) : pred__16113.call(null,G__16126,G__16127));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16092,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16128 = cljs.core.cst$kw$arg5;
var G__16129 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16128,G__16129) : pred__16113.call(null,G__16128,G__16129));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16092,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16130 = cljs.core.cst$kw$arg6;
var G__16131 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16130,G__16131) : pred__16113.call(null,G__16130,G__16131));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16092,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16132 = cljs.core.cst$kw$arg7;
var G__16133 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16132,G__16133) : pred__16113.call(null,G__16132,G__16133));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16092,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16134 = cljs.core.cst$kw$arg8;
var G__16135 = expr__16114;
return (pred__16113.cljs$core$IFn$_invoke$arity$2 ? pred__16113.cljs$core$IFn$_invoke$arity$2(G__16134,G__16135) : pred__16113.call(null,G__16134,G__16135));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16092,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16092),null));
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16092){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16092,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8], null);
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn9",null,(1),null));
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn9");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn9.
 */
com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn9, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__16096){
var extmap__4454__auto__ = (function (){var G__16136 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16096,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8], 0));
if(cljs.core.record_QMARK_(G__16096)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16136);
} else {
return G__16136;
}
})();
return (new com.rpl.specter.impl.LateFn9(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16096),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16096),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn10 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16138,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16142 = k16138;
var G__16142__$1 = (((G__16142 instanceof cljs.core.Keyword))?G__16142.fqn:null);
switch (G__16142__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16138,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16143){
var vec__16144 = p__16143;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16144,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16144,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15812){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16148 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15812);
var G__16149 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15812);
var G__16150 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15812);
var G__16151 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15812);
var G__16152 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15812);
var G__16153 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15812);
var G__16154 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15812);
var G__16155 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15812);
var G__16156 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15812);
var G__16157 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15812);
var fexpr__16147 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15812);
return (fexpr__16147.cljs$core$IFn$_invoke$arity$10 ? fexpr__16147.cljs$core$IFn$_invoke$arity$10(G__16148,G__16149,G__16150,G__16151,G__16152,G__16153,G__16154,G__16155,G__16156,G__16157) : fexpr__16147.call(null,G__16148,G__16149,G__16150,G__16151,G__16152,G__16153,G__16154,G__16155,G__16156,G__16157));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16137){
var self__ = this;
var G__16137__$1 = this;
return (new cljs.core.RecordIter((0),G__16137__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16158 = (function (coll__4412__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16158(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16139,other16140){
var self__ = this;
var this16139__$1 = this;
return (((!((other16140 == null)))) && ((this16139__$1.constructor === other16140.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.fn,other16140.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg0,other16140.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg1,other16140.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg2,other16140.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg3,other16140.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg4,other16140.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg5,other16140.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg6,other16140.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg7,other16140.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg8,other16140.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.arg9,other16140.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16139__$1.__extmap,other16140.__extmap)));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16137){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16159 = cljs.core.keyword_identical_QMARK_;
var expr__16160 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16162 = cljs.core.cst$kw$fn;
var G__16163 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16162,G__16163) : pred__16159.call(null,G__16162,G__16163));
})())){
return (new com.rpl.specter.impl.LateFn10(G__16137,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16164 = cljs.core.cst$kw$arg0;
var G__16165 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16164,G__16165) : pred__16159.call(null,G__16164,G__16165));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__16137,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16166 = cljs.core.cst$kw$arg1;
var G__16167 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16166,G__16167) : pred__16159.call(null,G__16166,G__16167));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__16137,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16168 = cljs.core.cst$kw$arg2;
var G__16169 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16168,G__16169) : pred__16159.call(null,G__16168,G__16169));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__16137,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16170 = cljs.core.cst$kw$arg3;
var G__16171 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16170,G__16171) : pred__16159.call(null,G__16170,G__16171));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16137,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16172 = cljs.core.cst$kw$arg4;
var G__16173 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16172,G__16173) : pred__16159.call(null,G__16172,G__16173));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16137,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16174 = cljs.core.cst$kw$arg5;
var G__16175 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16174,G__16175) : pred__16159.call(null,G__16174,G__16175));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16137,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16176 = cljs.core.cst$kw$arg6;
var G__16177 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16176,G__16177) : pred__16159.call(null,G__16176,G__16177));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16137,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16178 = cljs.core.cst$kw$arg7;
var G__16179 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16178,G__16179) : pred__16159.call(null,G__16178,G__16179));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16137,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16180 = cljs.core.cst$kw$arg8;
var G__16181 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16180,G__16181) : pred__16159.call(null,G__16180,G__16181));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16137,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16182 = cljs.core.cst$kw$arg9;
var G__16183 = expr__16160;
return (pred__16159.cljs$core$IFn$_invoke$arity$2 ? pred__16159.cljs$core$IFn$_invoke$arity$2(G__16182,G__16183) : pred__16159.call(null,G__16182,G__16183));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16137,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16137),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16137){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16137,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9], null);
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn10",null,(1),null));
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn10");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn10.
 */
com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn10, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__16141){
var extmap__4454__auto__ = (function (){var G__16184 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16141,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9], 0));
if(cljs.core.record_QMARK_(G__16141)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16184);
} else {
return G__16184;
}
})();
return (new com.rpl.specter.impl.LateFn10(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16141),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16141),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn11 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16186,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16190 = k16186;
var G__16190__$1 = (((G__16190 instanceof cljs.core.Keyword))?G__16190.fqn:null);
switch (G__16190__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16186,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16191){
var vec__16192 = p__16191;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16192,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16192,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15813){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16196 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15813);
var G__16197 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15813);
var G__16198 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15813);
var G__16199 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15813);
var G__16200 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15813);
var G__16201 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15813);
var G__16202 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15813);
var G__16203 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15813);
var G__16204 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15813);
var G__16205 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15813);
var G__16206 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15813);
var fexpr__16195 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15813);
return (fexpr__16195.cljs$core$IFn$_invoke$arity$11 ? fexpr__16195.cljs$core$IFn$_invoke$arity$11(G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16202,G__16203,G__16204,G__16205,G__16206) : fexpr__16195.call(null,G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16202,G__16203,G__16204,G__16205,G__16206));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16185){
var self__ = this;
var G__16185__$1 = this;
return (new cljs.core.RecordIter((0),G__16185__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16207 = (function (coll__4412__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16207(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16187,other16188){
var self__ = this;
var this16187__$1 = this;
return (((!((other16188 == null)))) && ((this16187__$1.constructor === other16188.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.fn,other16188.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg0,other16188.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg1,other16188.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg2,other16188.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg3,other16188.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg4,other16188.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg5,other16188.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg6,other16188.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg7,other16188.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg8,other16188.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg9,other16188.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.arg10,other16188.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16187__$1.__extmap,other16188.__extmap)));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16185){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16208 = cljs.core.keyword_identical_QMARK_;
var expr__16209 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16211 = cljs.core.cst$kw$fn;
var G__16212 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16211,G__16212) : pred__16208.call(null,G__16211,G__16212));
})())){
return (new com.rpl.specter.impl.LateFn11(G__16185,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16213 = cljs.core.cst$kw$arg0;
var G__16214 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16213,G__16214) : pred__16208.call(null,G__16213,G__16214));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__16185,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16215 = cljs.core.cst$kw$arg1;
var G__16216 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16215,G__16216) : pred__16208.call(null,G__16215,G__16216));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__16185,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16217 = cljs.core.cst$kw$arg2;
var G__16218 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16217,G__16218) : pred__16208.call(null,G__16217,G__16218));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__16185,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16219 = cljs.core.cst$kw$arg3;
var G__16220 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16219,G__16220) : pred__16208.call(null,G__16219,G__16220));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16185,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16221 = cljs.core.cst$kw$arg4;
var G__16222 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16221,G__16222) : pred__16208.call(null,G__16221,G__16222));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16185,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16223 = cljs.core.cst$kw$arg5;
var G__16224 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16223,G__16224) : pred__16208.call(null,G__16223,G__16224));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16185,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16225 = cljs.core.cst$kw$arg6;
var G__16226 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16225,G__16226) : pred__16208.call(null,G__16225,G__16226));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16185,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16227 = cljs.core.cst$kw$arg7;
var G__16228 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16227,G__16228) : pred__16208.call(null,G__16227,G__16228));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16185,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16229 = cljs.core.cst$kw$arg8;
var G__16230 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16229,G__16230) : pred__16208.call(null,G__16229,G__16230));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16185,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16231 = cljs.core.cst$kw$arg9;
var G__16232 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16231,G__16232) : pred__16208.call(null,G__16231,G__16232));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16185,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16233 = cljs.core.cst$kw$arg10;
var G__16234 = expr__16209;
return (pred__16208.cljs$core$IFn$_invoke$arity$2 ? pred__16208.cljs$core$IFn$_invoke$arity$2(G__16233,G__16234) : pred__16208.call(null,G__16233,G__16234));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16185,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16185),null));
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16185){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16185,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10], null);
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn11",null,(1),null));
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn11");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn11.
 */
com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn11, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__16189){
var extmap__4454__auto__ = (function (){var G__16235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16189,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10], 0));
if(cljs.core.record_QMARK_(G__16189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16235);
} else {
return G__16235;
}
})();
return (new com.rpl.specter.impl.LateFn11(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16189),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16189),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn12 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16237,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16241 = k16237;
var G__16241__$1 = (((G__16241 instanceof cljs.core.Keyword))?G__16241.fqn:null);
switch (G__16241__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16237,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16242){
var vec__16243 = p__16242;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16243,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16243,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15814){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16247 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15814);
var G__16248 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15814);
var G__16249 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15814);
var G__16250 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15814);
var G__16251 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15814);
var G__16252 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15814);
var G__16253 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15814);
var G__16254 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15814);
var G__16255 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15814);
var G__16256 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15814);
var G__16257 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15814);
var G__16258 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15814);
var fexpr__16246 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15814);
return (fexpr__16246.cljs$core$IFn$_invoke$arity$12 ? fexpr__16246.cljs$core$IFn$_invoke$arity$12(G__16247,G__16248,G__16249,G__16250,G__16251,G__16252,G__16253,G__16254,G__16255,G__16256,G__16257,G__16258) : fexpr__16246.call(null,G__16247,G__16248,G__16249,G__16250,G__16251,G__16252,G__16253,G__16254,G__16255,G__16256,G__16257,G__16258));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16236){
var self__ = this;
var G__16236__$1 = this;
return (new cljs.core.RecordIter((0),G__16236__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16259 = (function (coll__4412__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16259(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16238,other16239){
var self__ = this;
var this16238__$1 = this;
return (((!((other16239 == null)))) && ((this16238__$1.constructor === other16239.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.fn,other16239.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg0,other16239.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg1,other16239.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg2,other16239.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg3,other16239.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg4,other16239.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg5,other16239.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg6,other16239.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg7,other16239.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg8,other16239.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg9,other16239.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg10,other16239.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.arg11,other16239.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16238__$1.__extmap,other16239.__extmap)));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16236){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16260 = cljs.core.keyword_identical_QMARK_;
var expr__16261 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16263 = cljs.core.cst$kw$fn;
var G__16264 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16263,G__16264) : pred__16260.call(null,G__16263,G__16264));
})())){
return (new com.rpl.specter.impl.LateFn12(G__16236,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16265 = cljs.core.cst$kw$arg0;
var G__16266 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16265,G__16266) : pred__16260.call(null,G__16265,G__16266));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__16236,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16267 = cljs.core.cst$kw$arg1;
var G__16268 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16267,G__16268) : pred__16260.call(null,G__16267,G__16268));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__16236,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16269 = cljs.core.cst$kw$arg2;
var G__16270 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16269,G__16270) : pred__16260.call(null,G__16269,G__16270));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__16236,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16271 = cljs.core.cst$kw$arg3;
var G__16272 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16271,G__16272) : pred__16260.call(null,G__16271,G__16272));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16236,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16273 = cljs.core.cst$kw$arg4;
var G__16274 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16273,G__16274) : pred__16260.call(null,G__16273,G__16274));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16236,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16275 = cljs.core.cst$kw$arg5;
var G__16276 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16275,G__16276) : pred__16260.call(null,G__16275,G__16276));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16236,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16277 = cljs.core.cst$kw$arg6;
var G__16278 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16277,G__16278) : pred__16260.call(null,G__16277,G__16278));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16236,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16279 = cljs.core.cst$kw$arg7;
var G__16280 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16279,G__16280) : pred__16260.call(null,G__16279,G__16280));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16236,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16281 = cljs.core.cst$kw$arg8;
var G__16282 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16281,G__16282) : pred__16260.call(null,G__16281,G__16282));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16236,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16283 = cljs.core.cst$kw$arg9;
var G__16284 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16283,G__16284) : pred__16260.call(null,G__16283,G__16284));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16236,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16285 = cljs.core.cst$kw$arg10;
var G__16286 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16285,G__16286) : pred__16260.call(null,G__16285,G__16286));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16236,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16287 = cljs.core.cst$kw$arg11;
var G__16288 = expr__16261;
return (pred__16260.cljs$core$IFn$_invoke$arity$2 ? pred__16260.cljs$core$IFn$_invoke$arity$2(G__16287,G__16288) : pred__16260.call(null,G__16287,G__16288));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16236,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16236),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16236){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16236,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11], null);
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn12",null,(1),null));
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn12");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn12.
 */
com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn12, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__16240){
var extmap__4454__auto__ = (function (){var G__16289 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16240,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11], 0));
if(cljs.core.record_QMARK_(G__16240)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16289);
} else {
return G__16289;
}
})();
return (new com.rpl.specter.impl.LateFn12(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16240),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__16240),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn13 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16291,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16295 = k16291;
var G__16295__$1 = (((G__16295 instanceof cljs.core.Keyword))?G__16295.fqn:null);
switch (G__16295__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16291,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16296){
var vec__16297 = p__16296;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16297,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16297,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15815){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16301 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15815);
var G__16302 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15815);
var G__16303 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15815);
var G__16304 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15815);
var G__16305 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15815);
var G__16306 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15815);
var G__16307 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15815);
var G__16308 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15815);
var G__16309 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15815);
var G__16310 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15815);
var G__16311 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15815);
var G__16312 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15815);
var G__16313 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15815);
var fexpr__16300 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15815);
return (fexpr__16300.cljs$core$IFn$_invoke$arity$13 ? fexpr__16300.cljs$core$IFn$_invoke$arity$13(G__16301,G__16302,G__16303,G__16304,G__16305,G__16306,G__16307,G__16308,G__16309,G__16310,G__16311,G__16312,G__16313) : fexpr__16300.call(null,G__16301,G__16302,G__16303,G__16304,G__16305,G__16306,G__16307,G__16308,G__16309,G__16310,G__16311,G__16312,G__16313));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16290){
var self__ = this;
var G__16290__$1 = this;
return (new cljs.core.RecordIter((0),G__16290__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16314 = (function (coll__4412__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16314(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16292,other16293){
var self__ = this;
var this16292__$1 = this;
return (((!((other16293 == null)))) && ((this16292__$1.constructor === other16293.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.fn,other16293.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg0,other16293.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg1,other16293.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg2,other16293.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg3,other16293.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg4,other16293.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg5,other16293.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg6,other16293.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg7,other16293.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg8,other16293.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg9,other16293.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg10,other16293.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg11,other16293.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.arg12,other16293.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16292__$1.__extmap,other16293.__extmap)));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16290){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16315 = cljs.core.keyword_identical_QMARK_;
var expr__16316 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16318 = cljs.core.cst$kw$fn;
var G__16319 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16318,G__16319) : pred__16315.call(null,G__16318,G__16319));
})())){
return (new com.rpl.specter.impl.LateFn13(G__16290,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16320 = cljs.core.cst$kw$arg0;
var G__16321 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16320,G__16321) : pred__16315.call(null,G__16320,G__16321));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__16290,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16322 = cljs.core.cst$kw$arg1;
var G__16323 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16322,G__16323) : pred__16315.call(null,G__16322,G__16323));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__16290,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16324 = cljs.core.cst$kw$arg2;
var G__16325 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16324,G__16325) : pred__16315.call(null,G__16324,G__16325));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__16290,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16326 = cljs.core.cst$kw$arg3;
var G__16327 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16326,G__16327) : pred__16315.call(null,G__16326,G__16327));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16290,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16328 = cljs.core.cst$kw$arg4;
var G__16329 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16328,G__16329) : pred__16315.call(null,G__16328,G__16329));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16290,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16330 = cljs.core.cst$kw$arg5;
var G__16331 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16330,G__16331) : pred__16315.call(null,G__16330,G__16331));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16290,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16332 = cljs.core.cst$kw$arg6;
var G__16333 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16332,G__16333) : pred__16315.call(null,G__16332,G__16333));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16290,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16334 = cljs.core.cst$kw$arg7;
var G__16335 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16334,G__16335) : pred__16315.call(null,G__16334,G__16335));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16290,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16336 = cljs.core.cst$kw$arg8;
var G__16337 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16336,G__16337) : pred__16315.call(null,G__16336,G__16337));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16290,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16338 = cljs.core.cst$kw$arg9;
var G__16339 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16338,G__16339) : pred__16315.call(null,G__16338,G__16339));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16290,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16340 = cljs.core.cst$kw$arg10;
var G__16341 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16340,G__16341) : pred__16315.call(null,G__16340,G__16341));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16290,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16342 = cljs.core.cst$kw$arg11;
var G__16343 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16342,G__16343) : pred__16315.call(null,G__16342,G__16343));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16290,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16344 = cljs.core.cst$kw$arg12;
var G__16345 = expr__16316;
return (pred__16315.cljs$core$IFn$_invoke$arity$2 ? pred__16315.cljs$core$IFn$_invoke$arity$2(G__16344,G__16345) : pred__16315.call(null,G__16344,G__16345));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16290,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16290),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16290){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16290,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12], null);
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn13",null,(1),null));
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn13");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn13.
 */
com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn13, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__16294){
var extmap__4454__auto__ = (function (){var G__16346 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16294,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12], 0));
if(cljs.core.record_QMARK_(G__16294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16346);
} else {
return G__16346;
}
})();
return (new com.rpl.specter.impl.LateFn13(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__16294),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__16294),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn14 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16348,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16352 = k16348;
var G__16352__$1 = (((G__16352 instanceof cljs.core.Keyword))?G__16352.fqn:null);
switch (G__16352__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16348,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16353){
var vec__16354 = p__16353;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16354,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16354,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15816){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16358 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15816);
var G__16359 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15816);
var G__16360 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15816);
var G__16361 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15816);
var G__16362 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15816);
var G__16363 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15816);
var G__16364 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15816);
var G__16365 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15816);
var G__16366 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15816);
var G__16367 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15816);
var G__16368 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15816);
var G__16369 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15816);
var G__16370 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15816);
var G__16371 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15816);
var fexpr__16357 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15816);
return (fexpr__16357.cljs$core$IFn$_invoke$arity$14 ? fexpr__16357.cljs$core$IFn$_invoke$arity$14(G__16358,G__16359,G__16360,G__16361,G__16362,G__16363,G__16364,G__16365,G__16366,G__16367,G__16368,G__16369,G__16370,G__16371) : fexpr__16357.call(null,G__16358,G__16359,G__16360,G__16361,G__16362,G__16363,G__16364,G__16365,G__16366,G__16367,G__16368,G__16369,G__16370,G__16371));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16347){
var self__ = this;
var G__16347__$1 = this;
return (new cljs.core.RecordIter((0),G__16347__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16372 = (function (coll__4412__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16372(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16349,other16350){
var self__ = this;
var this16349__$1 = this;
return (((!((other16350 == null)))) && ((this16349__$1.constructor === other16350.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.fn,other16350.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg0,other16350.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg1,other16350.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg2,other16350.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg3,other16350.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg4,other16350.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg5,other16350.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg6,other16350.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg7,other16350.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg8,other16350.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg9,other16350.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg10,other16350.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg11,other16350.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg12,other16350.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.arg13,other16350.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16349__$1.__extmap,other16350.__extmap)));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16347){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16373 = cljs.core.keyword_identical_QMARK_;
var expr__16374 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16376 = cljs.core.cst$kw$fn;
var G__16377 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16376,G__16377) : pred__16373.call(null,G__16376,G__16377));
})())){
return (new com.rpl.specter.impl.LateFn14(G__16347,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16378 = cljs.core.cst$kw$arg0;
var G__16379 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16378,G__16379) : pred__16373.call(null,G__16378,G__16379));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__16347,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16380 = cljs.core.cst$kw$arg1;
var G__16381 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16380,G__16381) : pred__16373.call(null,G__16380,G__16381));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__16347,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16382 = cljs.core.cst$kw$arg2;
var G__16383 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16382,G__16383) : pred__16373.call(null,G__16382,G__16383));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__16347,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16384 = cljs.core.cst$kw$arg3;
var G__16385 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16384,G__16385) : pred__16373.call(null,G__16384,G__16385));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16347,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16386 = cljs.core.cst$kw$arg4;
var G__16387 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16386,G__16387) : pred__16373.call(null,G__16386,G__16387));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16347,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16388 = cljs.core.cst$kw$arg5;
var G__16389 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16388,G__16389) : pred__16373.call(null,G__16388,G__16389));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16347,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16390 = cljs.core.cst$kw$arg6;
var G__16391 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16390,G__16391) : pred__16373.call(null,G__16390,G__16391));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16347,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16392 = cljs.core.cst$kw$arg7;
var G__16393 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16392,G__16393) : pred__16373.call(null,G__16392,G__16393));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16347,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16394 = cljs.core.cst$kw$arg8;
var G__16395 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16394,G__16395) : pred__16373.call(null,G__16394,G__16395));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16347,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16396 = cljs.core.cst$kw$arg9;
var G__16397 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16396,G__16397) : pred__16373.call(null,G__16396,G__16397));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16347,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16398 = cljs.core.cst$kw$arg10;
var G__16399 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16398,G__16399) : pred__16373.call(null,G__16398,G__16399));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16347,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16400 = cljs.core.cst$kw$arg11;
var G__16401 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16400,G__16401) : pred__16373.call(null,G__16400,G__16401));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16347,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16402 = cljs.core.cst$kw$arg12;
var G__16403 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16402,G__16403) : pred__16373.call(null,G__16402,G__16403));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16347,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16404 = cljs.core.cst$kw$arg13;
var G__16405 = expr__16374;
return (pred__16373.cljs$core$IFn$_invoke$arity$2 ? pred__16373.cljs$core$IFn$_invoke$arity$2(G__16404,G__16405) : pred__16373.call(null,G__16404,G__16405));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16347,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16347),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16347){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16347,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13], null);
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn14",null,(1),null));
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn14");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn14.
 */
com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn14, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__16351){
var extmap__4454__auto__ = (function (){var G__16406 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16351,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13], 0));
if(cljs.core.record_QMARK_(G__16351)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16406);
} else {
return G__16406;
}
})();
return (new com.rpl.specter.impl.LateFn14(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__16351),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__16351),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn15 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16408,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16412 = k16408;
var G__16412__$1 = (((G__16412 instanceof cljs.core.Keyword))?G__16412.fqn:null);
switch (G__16412__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16408,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16413){
var vec__16414 = p__16413;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16414,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16414,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15817){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16418 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15817);
var G__16419 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15817);
var G__16420 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15817);
var G__16421 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15817);
var G__16422 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15817);
var G__16423 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15817);
var G__16424 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15817);
var G__16425 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15817);
var G__16426 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15817);
var G__16427 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15817);
var G__16428 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15817);
var G__16429 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15817);
var G__16430 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15817);
var G__16431 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15817);
var G__16432 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15817);
var fexpr__16417 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15817);
return (fexpr__16417.cljs$core$IFn$_invoke$arity$15 ? fexpr__16417.cljs$core$IFn$_invoke$arity$15(G__16418,G__16419,G__16420,G__16421,G__16422,G__16423,G__16424,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430,G__16431,G__16432) : fexpr__16417.call(null,G__16418,G__16419,G__16420,G__16421,G__16422,G__16423,G__16424,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430,G__16431,G__16432));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16407){
var self__ = this;
var G__16407__$1 = this;
return (new cljs.core.RecordIter((0),G__16407__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16433 = (function (coll__4412__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16433(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16409,other16410){
var self__ = this;
var this16409__$1 = this;
return (((!((other16410 == null)))) && ((this16409__$1.constructor === other16410.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.fn,other16410.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg0,other16410.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg1,other16410.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg2,other16410.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg3,other16410.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg4,other16410.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg5,other16410.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg6,other16410.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg7,other16410.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg8,other16410.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg9,other16410.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg10,other16410.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg11,other16410.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg12,other16410.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg13,other16410.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.arg14,other16410.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16409__$1.__extmap,other16410.__extmap)));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16407){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16434 = cljs.core.keyword_identical_QMARK_;
var expr__16435 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16437 = cljs.core.cst$kw$fn;
var G__16438 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16437,G__16438) : pred__16434.call(null,G__16437,G__16438));
})())){
return (new com.rpl.specter.impl.LateFn15(G__16407,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16439 = cljs.core.cst$kw$arg0;
var G__16440 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16439,G__16440) : pred__16434.call(null,G__16439,G__16440));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__16407,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16441 = cljs.core.cst$kw$arg1;
var G__16442 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16441,G__16442) : pred__16434.call(null,G__16441,G__16442));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__16407,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16443 = cljs.core.cst$kw$arg2;
var G__16444 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16443,G__16444) : pred__16434.call(null,G__16443,G__16444));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__16407,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16445 = cljs.core.cst$kw$arg3;
var G__16446 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16445,G__16446) : pred__16434.call(null,G__16445,G__16446));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16407,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16447 = cljs.core.cst$kw$arg4;
var G__16448 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16447,G__16448) : pred__16434.call(null,G__16447,G__16448));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16407,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16449 = cljs.core.cst$kw$arg5;
var G__16450 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16449,G__16450) : pred__16434.call(null,G__16449,G__16450));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16407,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16451 = cljs.core.cst$kw$arg6;
var G__16452 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16451,G__16452) : pred__16434.call(null,G__16451,G__16452));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16407,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16453 = cljs.core.cst$kw$arg7;
var G__16454 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16453,G__16454) : pred__16434.call(null,G__16453,G__16454));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16407,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16455 = cljs.core.cst$kw$arg8;
var G__16456 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16455,G__16456) : pred__16434.call(null,G__16455,G__16456));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16407,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16457 = cljs.core.cst$kw$arg9;
var G__16458 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16457,G__16458) : pred__16434.call(null,G__16457,G__16458));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16407,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16459 = cljs.core.cst$kw$arg10;
var G__16460 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16459,G__16460) : pred__16434.call(null,G__16459,G__16460));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16407,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16461 = cljs.core.cst$kw$arg11;
var G__16462 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16461,G__16462) : pred__16434.call(null,G__16461,G__16462));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16407,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16463 = cljs.core.cst$kw$arg12;
var G__16464 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16463,G__16464) : pred__16434.call(null,G__16463,G__16464));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16407,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16465 = cljs.core.cst$kw$arg13;
var G__16466 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16465,G__16466) : pred__16434.call(null,G__16465,G__16466));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16407,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16467 = cljs.core.cst$kw$arg14;
var G__16468 = expr__16435;
return (pred__16434.cljs$core$IFn$_invoke$arity$2 ? pred__16434.cljs$core$IFn$_invoke$arity$2(G__16467,G__16468) : pred__16434.call(null,G__16467,G__16468));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16407,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16407),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16407){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16407,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14], null);
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn15",null,(1),null));
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn15");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn15.
 */
com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn15, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__16411){
var extmap__4454__auto__ = (function (){var G__16469 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16411,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14], 0));
if(cljs.core.record_QMARK_(G__16411)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16469);
} else {
return G__16469;
}
})();
return (new com.rpl.specter.impl.LateFn15(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__16411),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__16411),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn16 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16471,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16475 = k16471;
var G__16475__$1 = (((G__16475 instanceof cljs.core.Keyword))?G__16475.fqn:null);
switch (G__16475__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16471,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16476){
var vec__16477 = p__16476;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16477,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16477,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15818){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16481 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15818);
var G__16482 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15818);
var G__16483 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15818);
var G__16484 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15818);
var G__16485 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15818);
var G__16486 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15818);
var G__16487 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15818);
var G__16488 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15818);
var G__16489 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15818);
var G__16490 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15818);
var G__16491 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15818);
var G__16492 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15818);
var G__16493 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15818);
var G__16494 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15818);
var G__16495 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15818);
var G__16496 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params15818);
var fexpr__16480 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15818);
return (fexpr__16480.cljs$core$IFn$_invoke$arity$16 ? fexpr__16480.cljs$core$IFn$_invoke$arity$16(G__16481,G__16482,G__16483,G__16484,G__16485,G__16486,G__16487,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496) : fexpr__16480.call(null,G__16481,G__16482,G__16483,G__16484,G__16485,G__16486,G__16487,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16470){
var self__ = this;
var G__16470__$1 = this;
return (new cljs.core.RecordIter((0),G__16470__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16497 = (function (coll__4412__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16497(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16472,other16473){
var self__ = this;
var this16472__$1 = this;
return (((!((other16473 == null)))) && ((this16472__$1.constructor === other16473.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.fn,other16473.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg0,other16473.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg1,other16473.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg2,other16473.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg3,other16473.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg4,other16473.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg5,other16473.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg6,other16473.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg7,other16473.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg8,other16473.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg9,other16473.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg10,other16473.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg11,other16473.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg12,other16473.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg13,other16473.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg14,other16473.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.arg15,other16473.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16472__$1.__extmap,other16473.__extmap)));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16470){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16498 = cljs.core.keyword_identical_QMARK_;
var expr__16499 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16501 = cljs.core.cst$kw$fn;
var G__16502 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16501,G__16502) : pred__16498.call(null,G__16501,G__16502));
})())){
return (new com.rpl.specter.impl.LateFn16(G__16470,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16503 = cljs.core.cst$kw$arg0;
var G__16504 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16503,G__16504) : pred__16498.call(null,G__16503,G__16504));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__16470,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16505 = cljs.core.cst$kw$arg1;
var G__16506 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16505,G__16506) : pred__16498.call(null,G__16505,G__16506));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__16470,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16507 = cljs.core.cst$kw$arg2;
var G__16508 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16507,G__16508) : pred__16498.call(null,G__16507,G__16508));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__16470,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16509 = cljs.core.cst$kw$arg3;
var G__16510 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16509,G__16510) : pred__16498.call(null,G__16509,G__16510));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16470,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16511 = cljs.core.cst$kw$arg4;
var G__16512 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16511,G__16512) : pred__16498.call(null,G__16511,G__16512));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16470,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16513 = cljs.core.cst$kw$arg5;
var G__16514 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16513,G__16514) : pred__16498.call(null,G__16513,G__16514));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16470,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16515 = cljs.core.cst$kw$arg6;
var G__16516 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16515,G__16516) : pred__16498.call(null,G__16515,G__16516));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16470,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16517 = cljs.core.cst$kw$arg7;
var G__16518 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16517,G__16518) : pred__16498.call(null,G__16517,G__16518));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16470,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16519 = cljs.core.cst$kw$arg8;
var G__16520 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16519,G__16520) : pred__16498.call(null,G__16519,G__16520));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16470,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16521 = cljs.core.cst$kw$arg9;
var G__16522 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16521,G__16522) : pred__16498.call(null,G__16521,G__16522));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16470,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16523 = cljs.core.cst$kw$arg10;
var G__16524 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16523,G__16524) : pred__16498.call(null,G__16523,G__16524));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16470,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16525 = cljs.core.cst$kw$arg11;
var G__16526 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16525,G__16526) : pred__16498.call(null,G__16525,G__16526));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16470,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16527 = cljs.core.cst$kw$arg12;
var G__16528 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16527,G__16528) : pred__16498.call(null,G__16527,G__16528));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16470,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16529 = cljs.core.cst$kw$arg13;
var G__16530 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16529,G__16530) : pred__16498.call(null,G__16529,G__16530));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16470,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16531 = cljs.core.cst$kw$arg14;
var G__16532 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16531,G__16532) : pred__16498.call(null,G__16531,G__16532));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16470,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16533 = cljs.core.cst$kw$arg15;
var G__16534 = expr__16499;
return (pred__16498.cljs$core$IFn$_invoke$arity$2 ? pred__16498.cljs$core$IFn$_invoke$arity$2(G__16533,G__16534) : pred__16498.call(null,G__16533,G__16534));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16470,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16470),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg15,self__.arg15,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16470){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__16470,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15], null);
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn16",null,(1),null));
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn16");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn16.
 */
com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn16, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__16474){
var extmap__4454__auto__ = (function (){var G__16535 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16474,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15], 0));
if(cljs.core.record_QMARK_(G__16474)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16535);
} else {
return G__16535;
}
})();
return (new com.rpl.specter.impl.LateFn16(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__16474),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn17 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16537,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16541 = k16537;
var G__16541__$1 = (((G__16541 instanceof cljs.core.Keyword))?G__16541.fqn:null);
switch (G__16541__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16537,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16542){
var vec__16543 = p__16542;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15819){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16547 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15819);
var G__16548 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15819);
var G__16549 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15819);
var G__16550 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15819);
var G__16551 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15819);
var G__16552 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15819);
var G__16553 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15819);
var G__16554 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15819);
var G__16555 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15819);
var G__16556 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15819);
var G__16557 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15819);
var G__16558 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15819);
var G__16559 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15819);
var G__16560 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15819);
var G__16561 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15819);
var G__16562 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params15819);
var G__16563 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params15819);
var fexpr__16546 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15819);
return (fexpr__16546.cljs$core$IFn$_invoke$arity$17 ? fexpr__16546.cljs$core$IFn$_invoke$arity$17(G__16547,G__16548,G__16549,G__16550,G__16551,G__16552,G__16553,G__16554,G__16555,G__16556,G__16557,G__16558,G__16559,G__16560,G__16561,G__16562,G__16563) : fexpr__16546.call(null,G__16547,G__16548,G__16549,G__16550,G__16551,G__16552,G__16553,G__16554,G__16555,G__16556,G__16557,G__16558,G__16559,G__16560,G__16561,G__16562,G__16563));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16536){
var self__ = this;
var G__16536__$1 = this;
return (new cljs.core.RecordIter((0),G__16536__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16564 = (function (coll__4412__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16564(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16538,other16539){
var self__ = this;
var this16538__$1 = this;
return (((!((other16539 == null)))) && ((this16538__$1.constructor === other16539.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.fn,other16539.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg0,other16539.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg1,other16539.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg2,other16539.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg3,other16539.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg4,other16539.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg5,other16539.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg6,other16539.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg7,other16539.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg8,other16539.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg9,other16539.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg10,other16539.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg11,other16539.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg12,other16539.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg13,other16539.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg14,other16539.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg15,other16539.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.arg16,other16539.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16538__$1.__extmap,other16539.__extmap)));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16536){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16565 = cljs.core.keyword_identical_QMARK_;
var expr__16566 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16568 = cljs.core.cst$kw$fn;
var G__16569 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16568,G__16569) : pred__16565.call(null,G__16568,G__16569));
})())){
return (new com.rpl.specter.impl.LateFn17(G__16536,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16570 = cljs.core.cst$kw$arg0;
var G__16571 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16570,G__16571) : pred__16565.call(null,G__16570,G__16571));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__16536,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16572 = cljs.core.cst$kw$arg1;
var G__16573 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16572,G__16573) : pred__16565.call(null,G__16572,G__16573));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__16536,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16574 = cljs.core.cst$kw$arg2;
var G__16575 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16574,G__16575) : pred__16565.call(null,G__16574,G__16575));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__16536,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16576 = cljs.core.cst$kw$arg3;
var G__16577 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16576,G__16577) : pred__16565.call(null,G__16576,G__16577));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16536,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16578 = cljs.core.cst$kw$arg4;
var G__16579 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16578,G__16579) : pred__16565.call(null,G__16578,G__16579));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16536,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16580 = cljs.core.cst$kw$arg5;
var G__16581 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16580,G__16581) : pred__16565.call(null,G__16580,G__16581));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16536,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16582 = cljs.core.cst$kw$arg6;
var G__16583 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16582,G__16583) : pred__16565.call(null,G__16582,G__16583));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16536,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16584 = cljs.core.cst$kw$arg7;
var G__16585 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16584,G__16585) : pred__16565.call(null,G__16584,G__16585));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16536,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16586 = cljs.core.cst$kw$arg8;
var G__16587 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16586,G__16587) : pred__16565.call(null,G__16586,G__16587));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16536,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16588 = cljs.core.cst$kw$arg9;
var G__16589 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16588,G__16589) : pred__16565.call(null,G__16588,G__16589));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16536,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16590 = cljs.core.cst$kw$arg10;
var G__16591 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16590,G__16591) : pred__16565.call(null,G__16590,G__16591));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16536,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16592 = cljs.core.cst$kw$arg11;
var G__16593 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16592,G__16593) : pred__16565.call(null,G__16592,G__16593));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16536,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16594 = cljs.core.cst$kw$arg12;
var G__16595 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16594,G__16595) : pred__16565.call(null,G__16594,G__16595));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16536,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16596 = cljs.core.cst$kw$arg13;
var G__16597 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16596,G__16597) : pred__16565.call(null,G__16596,G__16597));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16536,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16598 = cljs.core.cst$kw$arg14;
var G__16599 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16598,G__16599) : pred__16565.call(null,G__16598,G__16599));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16536,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16600 = cljs.core.cst$kw$arg15;
var G__16601 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16600,G__16601) : pred__16565.call(null,G__16600,G__16601));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16536,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16602 = cljs.core.cst$kw$arg16;
var G__16603 = expr__16566;
return (pred__16565.cljs$core$IFn$_invoke$arity$2 ? pred__16565.cljs$core$IFn$_invoke$arity$2(G__16602,G__16603) : pred__16565.call(null,G__16602,G__16603));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__16536,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16536),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg15,self__.arg15,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg16,self__.arg16,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16536){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__16536,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16], null);
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn17",null,(1),null));
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn17");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn17.
 */
com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn17, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__16540){
var extmap__4454__auto__ = (function (){var G__16604 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16540,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16], 0));
if(cljs.core.record_QMARK_(G__16540)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16604);
} else {
return G__16604;
}
})();
return (new com.rpl.specter.impl.LateFn17(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__16540),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__16540),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn18 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16606,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16610 = k16606;
var G__16610__$1 = (((G__16610 instanceof cljs.core.Keyword))?G__16610.fqn:null);
switch (G__16610__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16606,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16611){
var vec__16612 = p__16611;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15820){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16616 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15820);
var G__16617 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15820);
var G__16618 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15820);
var G__16619 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15820);
var G__16620 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15820);
var G__16621 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15820);
var G__16622 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15820);
var G__16623 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15820);
var G__16624 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15820);
var G__16625 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15820);
var G__16626 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15820);
var G__16627 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15820);
var G__16628 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15820);
var G__16629 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15820);
var G__16630 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15820);
var G__16631 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params15820);
var G__16632 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params15820);
var G__16633 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params15820);
var fexpr__16615 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15820);
return (fexpr__16615.cljs$core$IFn$_invoke$arity$18 ? fexpr__16615.cljs$core$IFn$_invoke$arity$18(G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623,G__16624,G__16625,G__16626,G__16627,G__16628,G__16629,G__16630,G__16631,G__16632,G__16633) : fexpr__16615.call(null,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623,G__16624,G__16625,G__16626,G__16627,G__16628,G__16629,G__16630,G__16631,G__16632,G__16633));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg17,self__.arg17],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16605){
var self__ = this;
var G__16605__$1 = this;
return (new cljs.core.RecordIter((0),G__16605__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16634 = (function (coll__4412__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16634(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16607,other16608){
var self__ = this;
var this16607__$1 = this;
return (((!((other16608 == null)))) && ((this16607__$1.constructor === other16608.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.fn,other16608.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg0,other16608.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg1,other16608.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg2,other16608.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg3,other16608.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg4,other16608.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg5,other16608.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg6,other16608.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg7,other16608.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg8,other16608.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg9,other16608.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg10,other16608.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg11,other16608.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg12,other16608.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg13,other16608.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg14,other16608.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg15,other16608.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg16,other16608.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.arg17,other16608.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16607__$1.__extmap,other16608.__extmap)));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg17,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16605){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16635 = cljs.core.keyword_identical_QMARK_;
var expr__16636 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16638 = cljs.core.cst$kw$fn;
var G__16639 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16638,G__16639) : pred__16635.call(null,G__16638,G__16639));
})())){
return (new com.rpl.specter.impl.LateFn18(G__16605,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16640 = cljs.core.cst$kw$arg0;
var G__16641 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16640,G__16641) : pred__16635.call(null,G__16640,G__16641));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__16605,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16642 = cljs.core.cst$kw$arg1;
var G__16643 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16642,G__16643) : pred__16635.call(null,G__16642,G__16643));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__16605,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16644 = cljs.core.cst$kw$arg2;
var G__16645 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16644,G__16645) : pred__16635.call(null,G__16644,G__16645));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__16605,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16646 = cljs.core.cst$kw$arg3;
var G__16647 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16646,G__16647) : pred__16635.call(null,G__16646,G__16647));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16605,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16648 = cljs.core.cst$kw$arg4;
var G__16649 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16648,G__16649) : pred__16635.call(null,G__16648,G__16649));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16605,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16650 = cljs.core.cst$kw$arg5;
var G__16651 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16650,G__16651) : pred__16635.call(null,G__16650,G__16651));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16605,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16652 = cljs.core.cst$kw$arg6;
var G__16653 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16652,G__16653) : pred__16635.call(null,G__16652,G__16653));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16605,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16654 = cljs.core.cst$kw$arg7;
var G__16655 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16654,G__16655) : pred__16635.call(null,G__16654,G__16655));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16605,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16656 = cljs.core.cst$kw$arg8;
var G__16657 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16656,G__16657) : pred__16635.call(null,G__16656,G__16657));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16605,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16658 = cljs.core.cst$kw$arg9;
var G__16659 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16658,G__16659) : pred__16635.call(null,G__16658,G__16659));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16605,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16660 = cljs.core.cst$kw$arg10;
var G__16661 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16660,G__16661) : pred__16635.call(null,G__16660,G__16661));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16605,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16662 = cljs.core.cst$kw$arg11;
var G__16663 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16662,G__16663) : pred__16635.call(null,G__16662,G__16663));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16605,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16664 = cljs.core.cst$kw$arg12;
var G__16665 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16664,G__16665) : pred__16635.call(null,G__16664,G__16665));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16605,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16666 = cljs.core.cst$kw$arg13;
var G__16667 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16666,G__16667) : pred__16635.call(null,G__16666,G__16667));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16605,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16668 = cljs.core.cst$kw$arg14;
var G__16669 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16668,G__16669) : pred__16635.call(null,G__16668,G__16669));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16605,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16670 = cljs.core.cst$kw$arg15;
var G__16671 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16670,G__16671) : pred__16635.call(null,G__16670,G__16671));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16605,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16672 = cljs.core.cst$kw$arg16;
var G__16673 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16672,G__16673) : pred__16635.call(null,G__16672,G__16673));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__16605,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16674 = cljs.core.cst$kw$arg17;
var G__16675 = expr__16636;
return (pred__16635.cljs$core$IFn$_invoke$arity$2 ? pred__16635.cljs$core$IFn$_invoke$arity$2(G__16674,G__16675) : pred__16635.call(null,G__16674,G__16675));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__16605,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16605),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg15,self__.arg15,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg16,self__.arg16,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg17,self__.arg17,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16605){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__16605,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16,cljs.core.cst$sym$arg17], null);
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn18",null,(1),null));
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn18");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn18.
 */
com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn18, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__16609){
var extmap__4454__auto__ = (function (){var G__16676 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16609,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17], 0));
if(cljs.core.record_QMARK_(G__16609)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16676);
} else {
return G__16676;
}
})();
return (new com.rpl.specter.impl.LateFn18(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__16609),cljs.core.cst$kw$arg17.cljs$core$IFn$_invoke$arity$1(G__16609),null,cljs.core.not_empty(extmap__4454__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn19 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.arg18 = arg18;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k16678,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__16682 = k16678;
var G__16682__$1 = (((G__16682 instanceof cljs.core.Keyword))?G__16682.fqn:null);
switch (G__16682__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
case "arg18":
return self__.arg18;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16678,else__4418__auto__);

}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__16683){
var vec__16684 = p__16683;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16684,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16684,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__14162__auto__,dynamic_params15821){
var self__ = this;
var this__14162__auto____$1 = this;
var G__16688 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params15821);
var G__16689 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params15821);
var G__16690 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params15821);
var G__16691 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params15821);
var G__16692 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params15821);
var G__16693 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params15821);
var G__16694 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params15821);
var G__16695 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params15821);
var G__16696 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params15821);
var G__16697 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params15821);
var G__16698 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params15821);
var G__16699 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params15821);
var G__16700 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params15821);
var G__16701 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params15821);
var G__16702 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params15821);
var G__16703 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params15821);
var G__16704 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params15821);
var G__16705 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params15821);
var G__16706 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params15821);
var fexpr__16687 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params15821);
return (fexpr__16687.cljs$core$IFn$_invoke$arity$19 ? fexpr__16687.cljs$core$IFn$_invoke$arity$19(G__16688,G__16689,G__16690,G__16691,G__16692,G__16693,G__16694,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706) : fexpr__16687.call(null,G__16688,G__16689,G__16690,G__16691,G__16692,G__16693,G__16694,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg17,self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg18,self__.arg18],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16677){
var self__ = this;
var G__16677__$1 = this;
return (new cljs.core.RecordIter((0),G__16677__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17,cljs.core.cst$kw$arg18], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (){var fexpr__16707 = (function (coll__4412__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
});
return fexpr__16707(this__4411__auto____$1);
})();
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16679,other16680){
var self__ = this;
var this16679__$1 = this;
return (((!((other16680 == null)))) && ((this16679__$1.constructor === other16680.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.fn,other16680.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg0,other16680.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg1,other16680.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg2,other16680.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg3,other16680.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg4,other16680.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg5,other16680.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg6,other16680.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg7,other16680.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg8,other16680.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg9,other16680.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg10,other16680.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg11,other16680.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg12,other16680.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg13,other16680.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg14,other16680.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg15,other16680.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg16,other16680.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg17,other16680.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.arg18,other16680.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16679__$1.__extmap,other16680.__extmap)));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg17,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg18,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__16677){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__16708 = cljs.core.keyword_identical_QMARK_;
var expr__16709 = k__4423__auto__;
if(cljs.core.truth_((function (){var G__16711 = cljs.core.cst$kw$fn;
var G__16712 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16711,G__16712) : pred__16708.call(null,G__16711,G__16712));
})())){
return (new com.rpl.specter.impl.LateFn19(G__16677,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16713 = cljs.core.cst$kw$arg0;
var G__16714 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16713,G__16714) : pred__16708.call(null,G__16713,G__16714));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__16677,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16715 = cljs.core.cst$kw$arg1;
var G__16716 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16715,G__16716) : pred__16708.call(null,G__16715,G__16716));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__16677,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16717 = cljs.core.cst$kw$arg2;
var G__16718 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16717,G__16718) : pred__16708.call(null,G__16717,G__16718));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__16677,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16719 = cljs.core.cst$kw$arg3;
var G__16720 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16719,G__16720) : pred__16708.call(null,G__16719,G__16720));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__16677,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16721 = cljs.core.cst$kw$arg4;
var G__16722 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16721,G__16722) : pred__16708.call(null,G__16721,G__16722));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__16677,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16723 = cljs.core.cst$kw$arg5;
var G__16724 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16723,G__16724) : pred__16708.call(null,G__16723,G__16724));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__16677,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16725 = cljs.core.cst$kw$arg6;
var G__16726 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16725,G__16726) : pred__16708.call(null,G__16725,G__16726));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__16677,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16727 = cljs.core.cst$kw$arg7;
var G__16728 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16727,G__16728) : pred__16708.call(null,G__16727,G__16728));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__16677,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16729 = cljs.core.cst$kw$arg8;
var G__16730 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16729,G__16730) : pred__16708.call(null,G__16729,G__16730));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__16677,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16731 = cljs.core.cst$kw$arg9;
var G__16732 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16731,G__16732) : pred__16708.call(null,G__16731,G__16732));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__16677,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16733 = cljs.core.cst$kw$arg10;
var G__16734 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16733,G__16734) : pred__16708.call(null,G__16733,G__16734));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__16677,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16735 = cljs.core.cst$kw$arg11;
var G__16736 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16735,G__16736) : pred__16708.call(null,G__16735,G__16736));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__16677,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16737 = cljs.core.cst$kw$arg12;
var G__16738 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16737,G__16738) : pred__16708.call(null,G__16737,G__16738));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__16677,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16739 = cljs.core.cst$kw$arg13;
var G__16740 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16739,G__16740) : pred__16708.call(null,G__16739,G__16740));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__16677,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16741 = cljs.core.cst$kw$arg14;
var G__16742 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16741,G__16742) : pred__16708.call(null,G__16741,G__16742));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__16677,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16743 = cljs.core.cst$kw$arg15;
var G__16744 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16743,G__16744) : pred__16708.call(null,G__16743,G__16744));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__16677,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16745 = cljs.core.cst$kw$arg16;
var G__16746 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16745,G__16746) : pred__16708.call(null,G__16745,G__16746));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__16677,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16747 = cljs.core.cst$kw$arg17;
var G__16748 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16747,G__16748) : pred__16708.call(null,G__16747,G__16748));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__16677,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16749 = cljs.core.cst$kw$arg18;
var G__16750 = expr__16709;
return (pred__16708.cljs$core$IFn$_invoke$arity$2 ? pred__16708.cljs$core$IFn$_invoke$arity$2(G__16749,G__16750) : pred__16708.call(null,G__16749,G__16750));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__16677,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__16677),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg15,self__.arg15,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg16,self__.arg16,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg17,self__.arg17,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg18,self__.arg18,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__16677){
var self__ = this;
var this__4414__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__16677,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16,cljs.core.cst$sym$arg17,cljs.core.cst$sym$arg18], null);
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn19",null,(1),null));
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"com.rpl.specter.impl/LateFn19");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn19.
 */
com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn19, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__16681){
var extmap__4454__auto__ = (function (){var G__16751 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16681,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17,cljs.core.cst$kw$arg18], 0));
if(cljs.core.record_QMARK_(G__16681)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16751);
} else {
return G__16751;
}
})();
return (new com.rpl.specter.impl.LateFn19(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg17.cljs$core$IFn$_invoke$arity$1(G__16681),cljs.core.cst$kw$arg18.cljs$core$IFn$_invoke$arity$1(G__16681),null,cljs.core.not_empty(extmap__4454__auto__),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn16752,args16753){
var G__16754 = cljs.core.count(args16753);
switch (G__16754) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn16752);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn16752,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args16753,(17)));

break;
default:
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot have late function with more than 18 args"], 0));

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(com.rpl.specter.impl.__GT_StaticParam(afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__16779 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779,(0),null);
if((i == null)){
com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not find ",code," in possible params ",possible_params], 0));
} else {
}

return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_LocalParam(i),com.rpl.specter.impl.direct_nav_QMARK_(code));
});
com.rpl.specter.impl.static_val_code = (function com$rpl$specter$impl$static_val_code(o){
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_StaticParam(o),com.rpl.specter.impl.direct_nav_QMARK_(o));
});
com.rpl.specter.impl.dynamic__GT_code = (function com$rpl$specter$impl$dynamic__GT_code(o){
return com.rpl.specter.impl.walk_until(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.cst$kw$code,o);
});
com.rpl.specter.impl.resolve_arg_code = (function com$rpl$specter$impl$resolve_arg_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var op = (function (){var G__16783 = o.op;
var G__16784 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__16783,G__16784) : com.rpl.specter.impl.resolve_arg_code.call(null,G__16783,G__16784));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16782_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__16782_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__16782_SHARP_,possible_params));
}),o.params);
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.dynamic_fn_code(com.rpl.specter.impl.original_obj(op),params),com.rpl.specter.impl.direct_nav_QMARK_(o.op));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return com.rpl.specter.impl.dynamic_val_code(o.code,possible_params);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(o,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,o,possible_params));
} else {
if((com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,o))){
return com.rpl.specter.impl.static_val_code(o);
} else {
var G__16785 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__16786 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__16785,G__16786) : com.rpl.specter.impl.resolve_arg_code.call(null,G__16785,G__16786));
}

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = o.path;
if(cljs.core.sequential_QMARK_(path)){
var resolved = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16787_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__16787_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__16787_SHARP_,possible_params));
}),path));
if(cljs.core.empty_QMARK_(resolved)){
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.STAY_STAR_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(resolved))){
return cljs.core.first(resolved);
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.comp_navs,resolved);

}
}
} else {
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(path,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,path,possible_params));
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
var code = o.code;
var d = com.rpl.specter.impl.dynamic_val_code(code,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(code))){
return d;
} else {
if(((cljs.core.set_QMARK_(code)) || (((com.rpl.specter.impl.fn_invocation_QMARK_(code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn_STAR_,cljs.core.first(code))))))){
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.pred_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));

}
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var res = com.rpl.specter.impl.resolve_arg_code(o,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(res))){
return res;
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
} else {
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.coerce_nav(o));

}
}
}
});
com.rpl.specter.impl.used_locals = (function com$rpl$specter$impl$used_locals(locals_set,form){
var used_locals_cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (e){
if(cljs.core.contains_QMARK_(locals_set,e)){
return com.rpl.specter.impl.update_cell_BANG_(used_locals_cell,(function (p1__16788_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16788_SHARP_,e);
}));
} else {
return e;
}
}),form);

return com.rpl.specter.impl.get_cell(used_locals_cell);
});
com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_ = false;
com.rpl.specter.impl.mk_fn_name_strs = (function com$rpl$specter$impl$mk_fn_name_strs(o){
return clojure.walk.postwalk((function (e){
if(cljs.core.fn_QMARK_(e)){
return cljs.core.re_find(/ .*/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));
} else {
return e;
}
}),o);
});
com.rpl.specter.impl._STAR_path_compile_files_STAR_ = false;
com.rpl.specter.impl.mk_dynamic_path_maker = (function com$rpl$specter$impl$mk_dynamic_path_maker(resolved_code,ns_str,used_locals_list,possible_params){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Possible params:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([possible_params], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nProduced dynamic object:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.rpl.specter.impl.mk_fn_name_strs(resolved_code)], 0));

cljs.core.println();
} else {
}

return (function (dynamic_params){
return com.rpl.specter.impl.late_resolve(resolved_code,dynamic_params);
});
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(path,ns_str,used_locals_list,possible_params){
var magic_path = com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.magic_precompilation_STAR_(path));
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Inline caching debug information"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Input path:",path,"\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processed path:",magic_path,"\n"], 0));
} else {
}

if(com.rpl.specter.impl.rich_nav_QMARK_(magic_path)){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Static result:",magic_path], 0));
} else {
}

return com.rpl.specter.impl.__GT_CachedPathInfo(false,magic_path);
} else {
var maker = com.rpl.specter.impl.mk_dynamic_path_maker(com.rpl.specter.impl.resolve_nav_code(com.rpl.specter.impl.__GT_DynamicPath(magic_path),possible_params),ns_str,used_locals_list,possible_params);
return com.rpl.specter.impl.__GT_CachedPathInfo(true,maker);
}
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.fast_constantly(val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___16800 = arguments.length;
var i__4772__auto___16801 = (0);
while(true){
if((i__4772__auto___16801 < len__4771__auto___16800)){
args__4777__auto__.push((arguments[i__4772__auto___16801]));

var G__16802 = (i__4772__auto___16801 + (1));
i__4772__auto___16801 = G__16802;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__16793){
var map__16794 = p__16793;
var map__16794__$1 = cljs.core.__destructure_map(map__16794);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16794__$1,cljs.core.cst$kw$merge_DASH_fn,cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,(function() { 
var G__16803__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__16795 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__16798 = com.rpl.specter.impl.get_cell(state);
var G__16799 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__16798,G__16799) : merge_fn.call(null,G__16798,G__16799));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__16803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16804__i = 0, G__16804__a = new Array(arguments.length -  0);
while (G__16804__i < G__16804__a.length) {G__16804__a[G__16804__i] = arguments[G__16804__i + 0]; ++G__16804__i;}
  args = new cljs.core.IndexedSeq(G__16804__a,0,null);
} 
return G__16803__delegate.call(this,args);};
G__16803.cljs$lang$maxFixedArity = 0;
G__16803.cljs$lang$applyTo = (function (arglist__16805){
var args = cljs.core.seq(arglist__16805);
return G__16803__delegate(args);
});
G__16803.cljs$core$IFn$_invoke$arity$variadic = G__16803__delegate;
return G__16803;
})()
,structure),com.rpl.specter.impl.get_cell(state)], null);
}));

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq16789){
var G__16790 = cljs.core.first(seq16789);
var seq16789__$1 = cljs.core.next(seq16789);
var G__16791 = cljs.core.first(seq16789__$1);
var seq16789__$2 = cljs.core.next(seq16789__$1);
var G__16792 = cljs.core.first(seq16789__$2);
var seq16789__$3 = cljs.core.next(seq16789__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16790,G__16791,G__16792,seq16789__$3);
}));

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__4777__auto__ = [];
var len__4771__auto___16807 = arguments.length;
var i__4772__auto___16808 = (0);
while(true){
if((i__4772__auto___16808 < len__4771__auto___16807)){
args__4777__auto__.push((arguments[i__4772__auto___16808]));

var G__16809 = (i__4772__auto___16808 + (1));
i__4772__auto___16808 = G__16809;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav], 0));
}));

(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq16806){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16806));
}));

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});
