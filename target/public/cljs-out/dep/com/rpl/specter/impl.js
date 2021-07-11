// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
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
var args__4742__auto__ = [];
var len__4736__auto___12113 = arguments.length;
var i__4737__auto___12114 = (0);
while(true){
if((i__4737__auto___12114 < len__4736__auto___12113)){
args__4742__auto__.push((arguments[i__4737__auto___12114]));

var G__12115 = (i__4737__auto___12114 + (1));
i__4737__auto___12114 = G__12115;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
}));

(com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq12112){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12112));
}));

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__12116 = null;
var G__12116__0 = (function (){
return v;
});
var G__12116__1 = (function (a1){
return v;
});
var G__12116__2 = (function (a1,a2){
return v;
});
var G__12116__3 = (function (a1,a2,a3){
return v;
});
var G__12116__4 = (function (a1,a2,a3,a4){
return v;
});
var G__12116__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__12116__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__12116__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__12116__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__12116__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__12116__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__12116__11 = (function() { 
var G__12117__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__12117 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__12118__i = 0, G__12118__a = new Array(arguments.length -  10);
while (G__12118__i < G__12118__a.length) {G__12118__a[G__12118__i] = arguments[G__12118__i + 10]; ++G__12118__i;}
  r = new cljs.core.IndexedSeq(G__12118__a,0,null);
} 
return G__12117__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__12117.cljs$lang$maxFixedArity = 10;
G__12117.cljs$lang$applyTo = (function (arglist__12119){
var a1 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a2 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a3 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a4 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a5 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a6 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a7 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a8 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a9 = cljs.core.first(arglist__12119);
arglist__12119 = cljs.core.next(arglist__12119);
var a10 = cljs.core.first(arglist__12119);
var r = cljs.core.rest(arglist__12119);
return G__12117__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__12117.cljs$core$IFn$_invoke$arity$variadic = G__12117__delegate;
return G__12117;
})()
;
G__12116 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__12116__0.call(this);
case 1:
return G__12116__1.call(this,a1);
case 2:
return G__12116__2.call(this,a1,a2);
case 3:
return G__12116__3.call(this,a1,a2,a3);
case 4:
return G__12116__4.call(this,a1,a2,a3,a4);
case 5:
return G__12116__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__12116__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__12116__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__12116__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__12116__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__12116__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__12120 = null;
if (arguments.length > 10) {
var G__12121__i = 0, G__12121__a = new Array(arguments.length -  10);
while (G__12121__i < G__12121__a.length) {G__12121__a[G__12121__i] = arguments[G__12121__i + 10]; ++G__12121__i;}
G__12120 = new cljs.core.IndexedSeq(G__12121__a,0,null);
}
return G__12116__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__12120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12116.cljs$lang$maxFixedArity = 10;
G__12116.cljs$lang$applyTo = G__12116__11.cljs$lang$applyTo;
G__12116.cljs$core$IFn$_invoke$arity$0 = G__12116__0;
G__12116.cljs$core$IFn$_invoke$arity$1 = G__12116__1;
G__12116.cljs$core$IFn$_invoke$arity$2 = G__12116__2;
G__12116.cljs$core$IFn$_invoke$arity$3 = G__12116__3;
G__12116.cljs$core$IFn$_invoke$arity$4 = G__12116__4;
G__12116.cljs$core$IFn$_invoke$arity$5 = G__12116__5;
G__12116.cljs$core$IFn$_invoke$arity$6 = G__12116__6;
G__12116.cljs$core$IFn$_invoke$arity$7 = G__12116__7;
G__12116.cljs$core$IFn$_invoke$arity$8 = G__12116__8;
G__12116.cljs$core$IFn$_invoke$arity$9 = G__12116__9;
G__12116.cljs$core$IFn$_invoke$arity$10 = G__12116__10;
G__12116.cljs$core$IFn$_invoke$arity$variadic = G__12116__11.cljs$core$IFn$_invoke$arity$variadic;
return G__12116;
})()
});
com.rpl.specter.impl.throw_illegal_STAR_ = (function com$rpl$specter$impl$throw_illegal_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12123 = arguments.length;
var i__4737__auto___12124 = (0);
while(true){
if((i__4737__auto___12124 < len__4736__auto___12123)){
args__4742__auto__.push((arguments[i__4737__auto___12124]));

var G__12125 = (i__4737__auto___12124 + (1));
i__4737__auto___12124 = G__12125;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)));
}));

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$applyTo = (function (seq12122){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12122));
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
var start__4626__auto__ = cljs.core.system_time();
var ret__4627__auto__ = (function (){var n__4613__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__4613__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null));

var G__12126 = (_ + (1));
_ = G__12126;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__4626__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__4627__auto__;
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

var com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_12127 = (function (paths){
var x__4428__auto__ = (((paths == null))?null:paths);
var m__4429__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4429__auto__.call(null,paths));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.do_comp_paths["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4426__auto__.call(null,paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
});
com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((((!((paths == null)))) && ((!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
return com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_12127(paths);
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

var com$rpl$specter$impl$CoercePath$coerce_path$dyn_12130 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.coerce_path["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
});
com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
return com$rpl$specter$impl$CoercePath$coerce_path$dyn_12130(this$);
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12131 = (function (meta12132){
this.meta12132 = meta12132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl12131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12133,meta12132__$1){
var self__ = this;
var _12133__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12131(meta12132__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12133){
var self__ = this;
var _12133__$1 = this;
return self__.meta12132;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12131.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl12131.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12131.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta12132], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12131.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl12131.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12131");

(com.rpl.specter.impl.t_com$rpl$specter$impl12131.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12131");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12131.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12131 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl12131(meta12132){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12131(meta12132));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12131(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12134 = (function (nav1,nav2,meta12135){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta12135 = meta12135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl12134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12136,meta12135__$1){
var self__ = this;
var _12136__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12134(self__.nav1,self__.nav2,meta12135__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12136){
var self__ = this;
var _12136__$1 = this;
return self__.meta12135;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12134.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl12134.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12134.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nav1,cljs.core.cst$sym$nav2,cljs.core.cst$sym$meta12135], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12134.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl12134.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12134");

(com.rpl.specter.impl.t_com$rpl$specter$impl12134.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12134");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12134.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12134 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl12134(nav1__$1,nav2__$1,meta12135){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12134(nav1__$1,nav2__$1,meta12135));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12134(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
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

var com$rpl$specter$impl$PMutableCell$set_cell$dyn_12137 = (function (cell,x){
var x__4428__auto__ = (((cell == null))?null:cell);
var m__4429__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4429__auto__.call(null,cell,x));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.set_cell["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4426__auto__.call(null,cell,x));
} else {
throw cljs.core.missing_protocol("PMutableCell.set_cell",cell);
}
}
});
com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((((!((cell == null)))) && ((!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
return com$rpl$specter$impl$PMutableCell$set_cell$dyn_12137(cell,x);
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

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/MutableCell");
}));

/**
 * Positional factory function for com.rpl.specter.impl/MutableCell.
 */
com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__12139 = arguments.length;
switch (G__12139) {
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
var ret = (function (){var G__12141 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__12141) : afn.call(null,G__12141));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__12144 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__12144) : result_fn.call(null,G__12144));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12145 = (function (apath,structure,meta12146){
this.apath = apath;
this.structure = structure;
this.meta12146 = meta12146;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl12145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12147,meta12146__$1){
var self__ = this;
var _12147__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12145(self__.apath,self__.structure,meta12146__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12147){
var self__ = this;
var _12147__$1 = this;
return self__.meta12146;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12145.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12145.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
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

(com.rpl.specter.impl.t_com$rpl$specter$impl12145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$apath,cljs.core.cst$sym$structure,cljs.core.cst$sym$meta12146], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12145.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl12145.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12145");

(com.rpl.specter.impl.t_com$rpl$specter$impl12145.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12145");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12145.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12145 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl12145(apath__$1,structure__$1,meta12146){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12145(apath__$1,structure__$1,meta12146));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12145(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.call_reduce_interface = (function com$rpl$specter$impl$call_reduce_interface(traverser,afn,start){
return traverser.cljs$core$IReduce$_reduce$arity$3(null,afn,start);
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12148 = (function (apath,structure,traverser,meta12149){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta12149 = meta12149;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl12148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12150,meta12149__$1){
var self__ = this;
var _12150__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12148(self__.apath,self__.structure,self__.traverser,meta12149__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12150){
var self__ = this;
var _12150__$1 = this;
return self__.meta12149;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12148.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12148.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = com.rpl.specter.impl.call_reduce_interface(self__.traverser,afn,start);
return cljs.core.unreduced(res);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$apath,cljs.core.cst$sym$structure,cljs.core.cst$sym$traverser,cljs.core.cst$sym$meta12149], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12148.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl12148.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12148");

(com.rpl.specter.impl.t_com$rpl$specter$impl12148.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12148");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12148.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12148 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl12148(apath__$1,structure__$1,traverser__$1,meta12149){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12148(apath__$1,structure__$1,traverser__$1,meta12149));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12148(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__12151 = null;
var G__12151__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__12151__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__12151__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__12151 = function(result,input){
switch(arguments.length){
case 0:
return G__12151__0.call(this);
case 1:
return G__12151__1.call(this,result);
case 2:
return G__12151__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12151.cljs$core$IFn$_invoke$arity$0 = G__12151__0;
G__12151.cljs$core$IFn$_invoke$arity$1 = G__12151__1;
G__12151.cljs$core$IFn$_invoke$arity$2 = G__12151__2;
return G__12151;
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
var G__12153 = arguments.length;
switch (G__12153) {
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
(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12156,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12160 = k12156;
var G__12160__$1 = (((G__12160 instanceof cljs.core.Keyword))?G__12160.fqn:null);
switch (G__12160__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12156,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12161){
var vec__12162 = p__12161;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12162,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12162,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12155){
var self__ = this;
var G__12155__$1 = this;
return (new cljs.core.RecordIter((0),G__12155__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$sym], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12165 = (function (coll__4377__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12165(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12157,other12158){
var self__ = this;
var this12157__$1 = this;
return (((!((other12158 == null)))) && ((this12157__$1.constructor === other12158.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12157__$1.val,other12158.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12157__$1.sym,other12158.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12157__$1.__extmap,other12158.__extmap)));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,null,cljs.core.cst$kw$sym,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12155){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12166 = cljs.core.keyword_identical_QMARK_;
var expr__12167 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12169 = cljs.core.cst$kw$val;
var G__12170 = expr__12167;
return (pred__12166.cljs$core$IFn$_invoke$arity$2 ? pred__12166.cljs$core$IFn$_invoke$arity$2(G__12169,G__12170) : pred__12166.call(null,G__12169,G__12170));
})())){
return (new com.rpl.specter.impl.LocalSym(G__12155,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12171 = cljs.core.cst$kw$sym;
var G__12172 = expr__12167;
return (pred__12166.cljs$core$IFn$_invoke$arity$2 ? pred__12166.cljs$core$IFn$_invoke$arity$2(G__12171,G__12172) : pred__12166.call(null,G__12171,G__12172));
})())){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__12155,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12155),null));
}
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$val,self__.val,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sym,self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12155){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__12155,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$sym], null);
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$type = true);

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalSym",null,(1),null));
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LocalSym");
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
com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__12159){
var extmap__4419__auto__ = (function (){var G__12173 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12159,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sym], 0));
if(cljs.core.record_QMARK_(G__12159)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12173);
} else {
return G__12173;
}
})();
return (new com.rpl.specter.impl.LocalSym(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__12159),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__12159),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12176,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12180 = k12176;
var G__12180__$1 = (((G__12180 instanceof cljs.core.Keyword))?G__12180.fqn:null);
switch (G__12180__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12176,else__4383__auto__);

}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12181){
var vec__12182 = p__12181;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12182,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12182,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avar,self__.avar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12175){
var self__ = this;
var G__12175__$1 = this;
return (new cljs.core.RecordIter((0),G__12175__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$avar,cljs.core.cst$kw$sym], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12185 = (function (coll__4377__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12185(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12177,other12178){
var self__ = this;
var this12177__$1 = this;
return (((!((other12178 == null)))) && ((this12177__$1.constructor === other12178.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12177__$1.val,other12178.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12177__$1.avar,other12178.avar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12177__$1.sym,other12178.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12177__$1.__extmap,other12178.__extmap)));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$avar,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$sym,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12175){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12186 = cljs.core.keyword_identical_QMARK_;
var expr__12187 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12189 = cljs.core.cst$kw$val;
var G__12190 = expr__12187;
return (pred__12186.cljs$core$IFn$_invoke$arity$2 ? pred__12186.cljs$core$IFn$_invoke$arity$2(G__12189,G__12190) : pred__12186.call(null,G__12189,G__12190));
})())){
return (new com.rpl.specter.impl.VarUse(G__12175,self__.avar,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12191 = cljs.core.cst$kw$avar;
var G__12192 = expr__12187;
return (pred__12186.cljs$core$IFn$_invoke$arity$2 ? pred__12186.cljs$core$IFn$_invoke$arity$2(G__12191,G__12192) : pred__12186.call(null,G__12191,G__12192));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,G__12175,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12193 = cljs.core.cst$kw$sym;
var G__12194 = expr__12187;
return (pred__12186.cljs$core$IFn$_invoke$arity$2 ? pred__12186.cljs$core$IFn$_invoke$arity$2(G__12193,G__12194) : pred__12186.call(null,G__12193,G__12194));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,G__12175,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12175),null));
}
}
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$val,self__.val,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$avar,self__.avar,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sym,self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12175){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,G__12175,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$avar,cljs.core.cst$sym$sym], null);
}));

(com.rpl.specter.impl.VarUse.cljs$lang$type = true);

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/VarUse",null,(1),null));
}));

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/VarUse");
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
com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__12179){
var extmap__4419__auto__ = (function (){var G__12195 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12179,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$avar,cljs.core.cst$kw$sym], 0));
if(cljs.core.record_QMARK_(G__12179)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12195);
} else {
return G__12195;
}
})();
return (new com.rpl.specter.impl.VarUse(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__12179),cljs.core.cst$kw$avar.cljs$core$IFn$_invoke$arity$1(G__12179),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__12179),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12198,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12202 = k12198;
var G__12202__$1 = (((G__12202 instanceof cljs.core.Keyword))?G__12202.fqn:null);
switch (G__12202__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12198,else__4383__auto__);

}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12203){
var vec__12204 = p__12203;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12204,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12204,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12197){
var self__ = this;
var G__12197__$1 = this;
return (new cljs.core.RecordIter((0),G__12197__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12207 = (function (coll__4377__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12207(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12199,other12200){
var self__ = this;
var this12199__$1 = this;
return (((!((other12200 == null)))) && ((this12199__$1.constructor === other12200.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12199__$1.val,other12200.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12199__$1.code,other12200.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12199__$1.__extmap,other12200.__extmap)));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,null,cljs.core.cst$kw$code,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12197){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12208 = cljs.core.keyword_identical_QMARK_;
var expr__12209 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12211 = cljs.core.cst$kw$val;
var G__12212 = expr__12209;
return (pred__12208.cljs$core$IFn$_invoke$arity$2 ? pred__12208.cljs$core$IFn$_invoke$arity$2(G__12211,G__12212) : pred__12208.call(null,G__12211,G__12212));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(G__12197,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12213 = cljs.core.cst$kw$code;
var G__12214 = expr__12209;
return (pred__12208.cljs$core$IFn$_invoke$arity$2 ? pred__12208.cljs$core$IFn$_invoke$arity$2(G__12213,G__12214) : pred__12208.call(null,G__12213,G__12214));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__12197,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12197),null));
}
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$val,self__.val,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$code,self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12197){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__12197,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$code], null);
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true);

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/SpecialFormUse",null,(1),null));
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/SpecialFormUse");
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
com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__12201){
var extmap__4419__auto__ = (function (){var G__12215 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12201,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code], 0));
if(cljs.core.record_QMARK_(G__12201)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12215);
} else {
return G__12215;
}
})();
return (new com.rpl.specter.impl.SpecialFormUse(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__12201),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__12201),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12218,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12222 = k12218;
var G__12222__$1 = (((G__12222 instanceof cljs.core.Keyword))?G__12222.fqn:null);
switch (G__12222__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12218,else__4383__auto__);

}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12223){
var vec__12224 = p__12223;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12224,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12224,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12217){
var self__ = this;
var G__12217__$1 = this;
return (new cljs.core.RecordIter((0),G__12217__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$params,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12227 = (function (coll__4377__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12227(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12219,other12220){
var self__ = this;
var this12219__$1 = this;
return (((!((other12220 == null)))) && ((this12219__$1.constructor === other12220.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12219__$1.op,other12220.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12219__$1.params,other12220.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12219__$1.code,other12220.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12219__$1.__extmap,other12220.__extmap)));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$op,null,cljs.core.cst$kw$code,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12217){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12228 = cljs.core.keyword_identical_QMARK_;
var expr__12229 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12231 = cljs.core.cst$kw$op;
var G__12232 = expr__12229;
return (pred__12228.cljs$core$IFn$_invoke$arity$2 ? pred__12228.cljs$core$IFn$_invoke$arity$2(G__12231,G__12232) : pred__12228.call(null,G__12231,G__12232));
})())){
return (new com.rpl.specter.impl.FnInvocation(G__12217,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12233 = cljs.core.cst$kw$params;
var G__12234 = expr__12229;
return (pred__12228.cljs$core$IFn$_invoke$arity$2 ? pred__12228.cljs$core$IFn$_invoke$arity$2(G__12233,G__12234) : pred__12228.call(null,G__12233,G__12234));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__12217,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12235 = cljs.core.cst$kw$code;
var G__12236 = expr__12229;
return (pred__12228.cljs$core$IFn$_invoke$arity$2 ? pred__12228.cljs$core$IFn$_invoke$arity$2(G__12235,G__12236) : pred__12228.call(null,G__12235,G__12236));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__12217,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12217),null));
}
}
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$op,self__.op,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$code,self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12217){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__12217,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$op,cljs.core.cst$sym$params,cljs.core.cst$sym$code], null);
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$type = true);

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/FnInvocation",null,(1),null));
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/FnInvocation");
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
com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__12221){
var extmap__4419__auto__ = (function (){var G__12237 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12221,cljs.core.cst$kw$op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$code], 0));
if(cljs.core.record_QMARK_(G__12221)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12237);
} else {
return G__12237;
}
})();
return (new com.rpl.specter.impl.FnInvocation(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(G__12221),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__12221),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__12221),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12240,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12244 = k12240;
var G__12244__$1 = (((G__12244 instanceof cljs.core.Keyword))?G__12244.fqn:null);
switch (G__12244__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12240,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12245){
var vec__12246 = p__12245;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12246,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12246,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12239){
var self__ = this;
var G__12239__$1 = this;
return (new cljs.core.RecordIter((0),G__12239__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12249 = (function (coll__4377__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12249(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12241,other12242){
var self__ = this;
var this12241__$1 = this;
return (((!((other12242 == null)))) && ((this12241__$1.constructor === other12242.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12241__$1.code,other12242.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12241__$1.__extmap,other12242.__extmap)));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12239){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12250 = cljs.core.keyword_identical_QMARK_;
var expr__12251 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12253 = cljs.core.cst$kw$code;
var G__12254 = expr__12251;
return (pred__12250.cljs$core$IFn$_invoke$arity$2 ? pred__12250.cljs$core$IFn$_invoke$arity$2(G__12253,G__12254) : pred__12250.call(null,G__12253,G__12254));
})())){
return (new com.rpl.specter.impl.DynamicVal(G__12239,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12239),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$code,self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12239){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__12239,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$code], null);
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicVal",null,(1),null));
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicVal");
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
com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__12243){
var extmap__4419__auto__ = (function (){var G__12255 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12243,cljs.core.cst$kw$code);
if(cljs.core.record_QMARK_(G__12243)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12255);
} else {
return G__12255;
}
})();
return (new com.rpl.specter.impl.DynamicVal(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__12243),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12258,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12262 = k12258;
var G__12262__$1 = (((G__12262 instanceof cljs.core.Keyword))?G__12262.fqn:null);
switch (G__12262__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12258,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12263){
var vec__12264 = p__12263;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12264,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12264,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12257){
var self__ = this;
var G__12257__$1 = this;
return (new cljs.core.RecordIter((0),G__12257__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12267 = (function (coll__4377__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12267(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12259,other12260){
var self__ = this;
var this12259__$1 = this;
return (((!((other12260 == null)))) && ((this12259__$1.constructor === other12260.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12259__$1.path,other12260.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12259__$1.__extmap,other12260.__extmap)));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12257){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12268 = cljs.core.keyword_identical_QMARK_;
var expr__12269 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12271 = cljs.core.cst$kw$path;
var G__12272 = expr__12269;
return (pred__12268.cljs$core$IFn$_invoke$arity$2 ? pred__12268.cljs$core$IFn$_invoke$arity$2(G__12271,G__12272) : pred__12268.call(null,G__12271,G__12272));
})())){
return (new com.rpl.specter.impl.DynamicPath(G__12257,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12257),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12257){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__12257,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path], null);
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicPath",null,(1),null));
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicPath");
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
com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__12261){
var extmap__4419__auto__ = (function (){var G__12273 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12261,cljs.core.cst$kw$path);
if(cljs.core.record_QMARK_(G__12261)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12273);
} else {
return G__12273;
}
})();
return (new com.rpl.specter.impl.DynamicPath(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__12261),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12276,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12280 = k12276;
var G__12280__$1 = (((G__12280 instanceof cljs.core.Keyword))?G__12280.fqn:null);
switch (G__12280__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12276,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12281){
var vec__12282 = p__12281;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12282,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12282,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12275){
var self__ = this;
var G__12275__$1 = this;
return (new cljs.core.RecordIter((0),G__12275__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$params,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12285 = (function (coll__4377__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12285(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12277,other12278){
var self__ = this;
var this12277__$1 = this;
return (((!((other12278 == null)))) && ((this12277__$1.constructor === other12278.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12277__$1.op,other12278.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12277__$1.params,other12278.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12277__$1.code,other12278.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12277__$1.__extmap,other12278.__extmap)));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$op,null,cljs.core.cst$kw$code,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12275){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12286 = cljs.core.keyword_identical_QMARK_;
var expr__12287 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12289 = cljs.core.cst$kw$op;
var G__12290 = expr__12287;
return (pred__12286.cljs$core$IFn$_invoke$arity$2 ? pred__12286.cljs$core$IFn$_invoke$arity$2(G__12289,G__12290) : pred__12286.call(null,G__12289,G__12290));
})())){
return (new com.rpl.specter.impl.DynamicFunction(G__12275,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12291 = cljs.core.cst$kw$params;
var G__12292 = expr__12287;
return (pred__12286.cljs$core$IFn$_invoke$arity$2 ? pred__12286.cljs$core$IFn$_invoke$arity$2(G__12291,G__12292) : pred__12286.call(null,G__12291,G__12292));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__12275,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12293 = cljs.core.cst$kw$code;
var G__12294 = expr__12287;
return (pred__12286.cljs$core$IFn$_invoke$arity$2 ? pred__12286.cljs$core$IFn$_invoke$arity$2(G__12293,G__12294) : pred__12286.call(null,G__12293,G__12294));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__12275,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12275),null));
}
}
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$op,self__.op,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$code,self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12275){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__12275,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$op,cljs.core.cst$sym$params,cljs.core.cst$sym$code], null);
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicFunction",null,(1),null));
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicFunction");
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
com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__12279){
var extmap__4419__auto__ = (function (){var G__12295 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12279,cljs.core.cst$kw$op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$code], 0));
if(cljs.core.record_QMARK_(G__12279)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12295);
} else {
return G__12295;
}
})();
return (new com.rpl.specter.impl.DynamicFunction(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(G__12279),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__12279),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__12279),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12298,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12302 = k12298;
var G__12302__$1 = (((G__12302 instanceof cljs.core.Keyword))?G__12302.fqn:null);
switch (G__12302__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12298,else__4383__auto__);

}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12303){
var vec__12304 = p__12303;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12304,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12304,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dynamic_QMARK_,self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$precompiled,self__.precompiled],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12297){
var self__ = this;
var G__12297__$1 = this;
return (new cljs.core.RecordIter((0),G__12297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dynamic_QMARK_,cljs.core.cst$kw$precompiled], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12307 = (function (coll__4377__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12307(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12299,other12300){
var self__ = this;
var this12299__$1 = this;
return (((!((other12300 == null)))) && ((this12299__$1.constructor === other12300.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12299__$1.dynamic_QMARK_,other12300.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12299__$1.precompiled,other12300.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12299__$1.__extmap,other12300.__extmap)));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dynamic_QMARK_,null,cljs.core.cst$kw$precompiled,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12297){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12308 = cljs.core.keyword_identical_QMARK_;
var expr__12309 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12311 = cljs.core.cst$kw$dynamic_QMARK_;
var G__12312 = expr__12309;
return (pred__12308.cljs$core$IFn$_invoke$arity$2 ? pred__12308.cljs$core$IFn$_invoke$arity$2(G__12311,G__12312) : pred__12308.call(null,G__12311,G__12312));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(G__12297,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12313 = cljs.core.cst$kw$precompiled;
var G__12314 = expr__12309;
return (pred__12308.cljs$core$IFn$_invoke$arity$2 ? pred__12308.cljs$core$IFn$_invoke$arity$2(G__12313,G__12314) : pred__12308.call(null,G__12313,G__12314));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__12297,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12297),null));
}
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$dynamic_QMARK_,self__.dynamic_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$precompiled,self__.precompiled,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12297){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__12297,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dynamic_QMARK_,cljs.core.cst$sym$precompiled], null);
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true);

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/CachedPathInfo",null,(1),null));
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/CachedPathInfo");
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
com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__12301){
var extmap__4419__auto__ = (function (){var G__12315 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12301,cljs.core.cst$kw$dynamic_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$precompiled], 0));
if(cljs.core.record_QMARK_(G__12301)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12315);
} else {
return G__12315;
}
})();
return (new com.rpl.specter.impl.CachedPathInfo(cljs.core.cst$kw$dynamic_QMARK_.cljs$core$IFn$_invoke$arity$1(G__12301),cljs.core.cst$kw$precompiled.cljs$core$IFn$_invoke$arity$1(G__12301),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12317 = (function (afn,meta12318){
this.afn = afn;
this.meta12318 = meta12318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl12317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12319,meta12318__$1){
var self__ = this;
var _12319__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12317(self__.afn,meta12318__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12319){
var self__ = this;
var _12319__$1 = this;
return self__.meta12318;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12317.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl12317.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12317.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta12318], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12317.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl12317.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12317");

(com.rpl.specter.impl.t_com$rpl$specter$impl12317.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12317");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12317.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12317 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl12317(afn__$1,meta12318){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12317(afn__$1,meta12318));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12317(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12320 = (function (afn,meta12321){
this.afn = afn;
this.meta12321 = meta12321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl12320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12322,meta12321__$1){
var self__ = this;
var _12322__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12320(self__.afn,meta12321__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12322){
var self__ = this;
var _12322__$1 = this;
return self__.meta12321;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12320.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl12320.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12320.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta12321], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12320.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl12320.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12320");

(com.rpl.specter.impl.t_com$rpl$specter$impl12320.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12320");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12320.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12320 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl12320(afn__$1,meta12321){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12320(afn__$1,meta12321));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12320(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl12323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl12323 = (function (cell,meta12324){
this.cell = cell;
this.meta12324 = meta12324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl12323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12325,meta12324__$1){
var self__ = this;
var _12325__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12323(self__.cell,meta12324__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12325){
var self__ = this;
var _12325__$1 = this;
return self__.meta12324;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12323.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl12323.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12323.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cell,cljs.core.cst$sym$meta12324], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl12323.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl12323.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl12323");

(com.rpl.specter.impl.t_com$rpl$specter$impl12323.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl12323");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl12323.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl12323 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl12323(cell__$1,meta12324){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl12323(cell__$1,meta12324));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl12323(cell,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12553 = arguments.length;
switch (G__12553) {
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
var args_arr__4757__auto__ = [];
var len__4736__auto___12555 = arguments.length;
var i__4737__auto___12556 = (0);
while(true){
if((i__4737__auto___12556 < len__4736__auto___12555)){
args_arr__4757__auto__.push((arguments[i__4737__auto___12556]));

var G__12557 = (i__4737__auto___12556 + (1));
i__4737__auto___12556 = G__12557;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__4758__auto__);

}
});

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__10950__auto__){
return nav1__10950__auto__;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__10950__auto__,nav2__10951__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__10950__auto__,nav2__10951__auto__);
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__12345,G__12346,G__12347){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12345,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12346,G__12347));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__12348,G__12349,G__12350,G__12351){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12348,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__12349,G__12350,G__12351));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__12352,G__12353,G__12354,G__12355,G__12356){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12352,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__12353,G__12354,G__12355,G__12356));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__12357,G__12358,G__12359,G__12360,G__12361,G__12362){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12357,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__12358,G__12359,G__12360,G__12361,G__12362));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__12363,G__12364,G__12365,G__12366,G__12367,G__12368,G__12369){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12363,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__12364,G__12365,G__12366,G__12367,G__12368,G__12369));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__12370,G__12371,G__12372,G__12373,G__12374,G__12375,G__12376,G__12377){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12370,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__12371,G__12372,G__12373,G__12374,G__12375,G__12376,G__12377));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__12378,G__12379,G__12380,G__12381,G__12382,G__12383,G__12384,G__12385,G__12386){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12378,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__12379,G__12380,G__12381,G__12382,G__12383,G__12384,G__12385,G__12386));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__12387,G__12388,G__12389,G__12390,G__12391,G__12392,G__12393,G__12394,G__12395,G__12396){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12387,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__12388,G__12389,G__12390,G__12391,G__12392,G__12393,G__12394,G__12395,G__12396));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__12397,G__12398,G__12399,G__12400,G__12401,G__12402,G__12403,G__12404,G__12405,G__12406,G__12407){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12397,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__12398,G__12399,G__12400,G__12401,G__12402,G__12403,G__12404,G__12405,G__12406,G__12407));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__12408,G__12409,G__12410,G__12411,G__12412,G__12413,G__12414,G__12415,G__12416,G__12417,G__12418,G__12419){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12408,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__12409,G__12410,G__12411,G__12412,G__12413,G__12414,G__12415,G__12416,G__12417,G__12418,G__12419));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__12420,G__12421,G__12422,G__12423,G__12424,G__12425,G__12426,G__12427,G__12428,G__12429,G__12430,G__12431,G__12432){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12420,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__12421,G__12422,G__12423,G__12424,G__12425,G__12426,G__12427,G__12428,G__12429,G__12430,G__12431,G__12432));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__12433,G__12434,G__12435,G__12436,G__12437,G__12438,G__12439,G__12440,G__12441,G__12442,G__12443,G__12444,G__12445,G__12446){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12433,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__12434,G__12435,G__12436,G__12437,G__12438,G__12439,G__12440,G__12441,G__12442,G__12443,G__12444,G__12445,G__12446));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__12447,G__12448,G__12449,G__12450,G__12451,G__12452,G__12453,G__12454,G__12455,G__12456,G__12457,G__12458,G__12459,G__12460,G__12461){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12447,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__12448,G__12449,G__12450,G__12451,G__12452,G__12453,G__12454,G__12455,G__12456,G__12457,G__12458,G__12459,G__12460,G__12461));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__12462,G__12463,G__12464,G__12465,G__12466,G__12467,G__12468,G__12469,G__12470,G__12471,G__12472,G__12473,G__12474,G__12475,G__12476,G__12477){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12462,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__12463,G__12464,G__12465,G__12466,G__12467,G__12468,G__12469,G__12470,G__12471,G__12472,G__12473,G__12474,G__12475,G__12476,G__12477));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__12478,G__12479,G__12480,G__12481,G__12482,G__12483,G__12484,G__12485,G__12486,G__12487,G__12488,G__12489,G__12490,G__12491,G__12492,G__12493,G__12494){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12478,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__12479,G__12480,G__12481,G__12482,G__12483,G__12484,G__12485,G__12486,G__12487,G__12488,G__12489,G__12490,G__12491,G__12492,G__12493,G__12494));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__12495,G__12496,G__12497,G__12498,G__12499,G__12500,G__12501,G__12502,G__12503,G__12504,G__12505,G__12506,G__12507,G__12508,G__12509,G__12510,G__12511,G__12512){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12495,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__12496,G__12497,G__12498,G__12499,G__12500,G__12501,G__12502,G__12503,G__12504,G__12505,G__12506,G__12507,G__12508,G__12509,G__12510,G__12511,G__12512));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__12513,G__12514,G__12515,G__12516,G__12517,G__12518,G__12519,G__12520,G__12521,G__12522,G__12523,G__12524,G__12525,G__12526,G__12527,G__12528,G__12529,G__12530,G__12531){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__12513,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__12514,G__12515,G__12516,G__12517,G__12518,G__12519,G__12520,G__12521,G__12522,G__12523,G__12524,G__12525,G__12526,G__12527,G__12528,G__12529,G__12530,G__12531));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338,G__12339,G__12340,G__12341,G__12342,G__12343,G__12344,rest__10952__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334,G__12335,G__12336,G__12337,G__12338,G__12339,G__12340,G__12341,G__12342,G__12343,G__12344),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__10952__auto__));
}));

/** @this {Function} */
(com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq12533){
var G__12534 = cljs.core.first(seq12533);
var seq12533__$1 = cljs.core.next(seq12533);
var G__12535 = cljs.core.first(seq12533__$1);
var seq12533__$2 = cljs.core.next(seq12533__$1);
var G__12536 = cljs.core.first(seq12533__$2);
var seq12533__$3 = cljs.core.next(seq12533__$2);
var G__12537 = cljs.core.first(seq12533__$3);
var seq12533__$4 = cljs.core.next(seq12533__$3);
var G__12538 = cljs.core.first(seq12533__$4);
var seq12533__$5 = cljs.core.next(seq12533__$4);
var G__12539 = cljs.core.first(seq12533__$5);
var seq12533__$6 = cljs.core.next(seq12533__$5);
var G__12540 = cljs.core.first(seq12533__$6);
var seq12533__$7 = cljs.core.next(seq12533__$6);
var G__12541 = cljs.core.first(seq12533__$7);
var seq12533__$8 = cljs.core.next(seq12533__$7);
var G__12542 = cljs.core.first(seq12533__$8);
var seq12533__$9 = cljs.core.next(seq12533__$8);
var G__12543 = cljs.core.first(seq12533__$9);
var seq12533__$10 = cljs.core.next(seq12533__$9);
var G__12544 = cljs.core.first(seq12533__$10);
var seq12533__$11 = cljs.core.next(seq12533__$10);
var G__12545 = cljs.core.first(seq12533__$11);
var seq12533__$12 = cljs.core.next(seq12533__$11);
var G__12546 = cljs.core.first(seq12533__$12);
var seq12533__$13 = cljs.core.next(seq12533__$12);
var G__12547 = cljs.core.first(seq12533__$13);
var seq12533__$14 = cljs.core.next(seq12533__$13);
var G__12548 = cljs.core.first(seq12533__$14);
var seq12533__$15 = cljs.core.next(seq12533__$14);
var G__12549 = cljs.core.first(seq12533__$15);
var seq12533__$16 = cljs.core.next(seq12533__$15);
var G__12550 = cljs.core.first(seq12533__$16);
var seq12533__$17 = cljs.core.next(seq12533__$16);
var G__12551 = cljs.core.first(seq12533__$17);
var seq12533__$18 = cljs.core.next(seq12533__$17);
var G__12552 = cljs.core.first(seq12533__$18);
var seq12533__$19 = cljs.core.next(seq12533__$18);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12534,G__12535,G__12536,G__12537,G__12538,G__12539,G__12540,G__12541,G__12542,G__12543,G__12544,G__12545,G__12546,G__12547,G__12548,G__12549,G__12550,G__12551,G__12552,seq12533__$19);
}));

(com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19));

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__12558 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__12558) : next_fn.call(null,G__12558));
})();
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,((structure).length))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__12559 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__12559) : next_fn.call(null,G__12559));
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
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__12560,i){
var vec__12561 = p__12560;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(2),null);
var curr = vec__12561;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__12564){
var vec__12565 = p__12564;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(1),null);
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
var G__12575 = orig;
o = G__12575;
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
var G__12576__delegate = function (args){
if(com.rpl.specter.impl.all_static_QMARK_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__12576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12577__i = 0, G__12577__a = new Array(arguments.length -  0);
while (G__12577__i < G__12577__a.length) {G__12577__a[G__12577__i] = arguments[G__12577__i + 0]; ++G__12577__i;}
  args = new cljs.core.IndexedSeq(G__12577__a,0,null);
} 
return G__12576__delegate.call(this,args);};
G__12576.cljs$lang$maxFixedArity = 0;
G__12576.cljs$lang$applyTo = (function (arglist__12578){
var args = cljs.core.seq(arglist__12578);
return G__12576__delegate(args);
});
G__12576.cljs$core$IFn$_invoke$arity$variadic = G__12576__delegate;
return G__12576;
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
if(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return com.rpl.specter.impl.dynamic_var_QMARK_(v);
} else {
return and__4115__auto__;
}
})())){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(o.sym,(function (){var or__4126__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(o.val,(function (){var or__4126__auto__ = (function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return com.rpl.specter.impl.direct_nav_QMARK_(v);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
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
var op = (function (){var G__12579 = o.op;
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__12579) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__12579));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,o.params));
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.cst$kw$dynamicnav.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__12580 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__12580) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__12580));
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
var G__12584 = arguments.length;
switch (G__12584) {
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
return com.rpl.specter.impl.preserve_map((function (p1__12581_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__12581_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o.op,false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12582_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__12582_SHARP_,false);
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

var com$rpl$specter$impl$LateResolve$late_resolve$dyn_13573 = (function (this$,dynamic_params){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4429__auto__.call(null,this$,dynamic_params));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.late_resolve["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4426__auto__.call(null,this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
});
com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
return com$rpl$specter$impl$LateResolve$late_resolve$dyn_13573(this$,dynamic_params);
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
(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12587,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12591 = k12587;
var G__12591__$1 = (((G__12591 instanceof cljs.core.Keyword))?G__12591.fqn:null);
switch (G__12591__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12587,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12592){
var vec__12593 = p__12592;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$idx,self__.idx],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12586){
var self__ = this;
var G__12586__$1 = this;
return (new cljs.core.RecordIter((0),G__12586__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idx], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12596 = (function (coll__4377__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12596(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12588,other12589){
var self__ = this;
var this12588__$1 = this;
return (((!((other12589 == null)))) && ((this12588__$1.constructor === other12589.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12588__$1.idx,other12589.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12588__$1.__extmap,other12589.__extmap)));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$idx,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12586){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12597 = cljs.core.keyword_identical_QMARK_;
var expr__12598 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12600 = cljs.core.cst$kw$idx;
var G__12601 = expr__12598;
return (pred__12597.cljs$core$IFn$_invoke$arity$2 ? pred__12597.cljs$core$IFn$_invoke$arity$2(G__12600,G__12601) : pred__12597.call(null,G__12600,G__12601));
})())){
return (new com.rpl.specter.impl.LocalParam(G__12586,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12586),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$idx,self__.idx,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12586){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__12586,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx], null);
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$type = true);

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalParam",null,(1),null));
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LocalParam");
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
com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__12590){
var extmap__4419__auto__ = (function (){var G__12602 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12590,cljs.core.cst$kw$idx);
if(cljs.core.record_QMARK_(G__12590)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12602);
} else {
return G__12602;
}
})();
return (new com.rpl.specter.impl.LocalParam(cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(G__12590),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12604,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12608 = k12604;
var G__12608__$1 = (((G__12608 instanceof cljs.core.Keyword))?G__12608.fqn:null);
switch (G__12608__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12604,else__4383__auto__);

}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12609){
var vec__12610 = p__12609;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12603){
var self__ = this;
var G__12603__$1 = this;
return (new cljs.core.RecordIter((0),G__12603__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12613 = (function (coll__4377__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12613(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12605,other12606){
var self__ = this;
var this12605__$1 = this;
return (((!((other12606 == null)))) && ((this12605__$1.constructor === other12606.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12605__$1.val,other12606.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12605__$1.__extmap,other12606.__extmap)));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$val,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12603){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12614 = cljs.core.keyword_identical_QMARK_;
var expr__12615 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12617 = cljs.core.cst$kw$val;
var G__12618 = expr__12615;
return (pred__12614.cljs$core$IFn$_invoke$arity$2 ? pred__12614.cljs$core$IFn$_invoke$arity$2(G__12617,G__12618) : pred__12614.call(null,G__12617,G__12618));
})())){
return (new com.rpl.specter.impl.StaticParam(G__12603,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12603),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$val,self__.val,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12603){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__12603,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$type = true);

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/StaticParam",null,(1),null));
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/StaticParam");
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
com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__12607){
var extmap__4419__auto__ = (function (){var G__12619 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12607,cljs.core.cst$kw$val);
if(cljs.core.record_QMARK_(G__12607)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12619);
} else {
return G__12619;
}
})();
return (new com.rpl.specter.impl.StaticParam(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__12607),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12641,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12645 = k12641;
var G__12645__$1 = (((G__12645 instanceof cljs.core.Keyword))?G__12645.fqn:null);
switch (G__12645__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12641,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12646){
var vec__12647 = p__12646;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12620){
var self__ = this;
var this__10980__auto____$1 = this;
var fexpr__12650 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12620);
return (fexpr__12650.cljs$core$IFn$_invoke$arity$0 ? fexpr__12650.cljs$core$IFn$_invoke$arity$0() : fexpr__12650.call(null));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12640){
var self__ = this;
var G__12640__$1 = this;
return (new cljs.core.RecordIter((0),G__12640__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12651 = (function (coll__4377__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12651(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12642,other12643){
var self__ = this;
var this12642__$1 = this;
return (((!((other12643 == null)))) && ((this12642__$1.constructor === other12643.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12642__$1.fn,other12643.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12642__$1.__extmap,other12643.__extmap)));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12640){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12652 = cljs.core.keyword_identical_QMARK_;
var expr__12653 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12655 = cljs.core.cst$kw$fn;
var G__12656 = expr__12653;
return (pred__12652.cljs$core$IFn$_invoke$arity$2 ? pred__12652.cljs$core$IFn$_invoke$arity$2(G__12655,G__12656) : pred__12652.call(null,G__12655,G__12656));
})())){
return (new com.rpl.specter.impl.LateFn0(G__12640,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12640),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12640){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__12640,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn], null);
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn0",null,(1),null));
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn0");
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
com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__12644){
var extmap__4419__auto__ = (function (){var G__12657 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12644,cljs.core.cst$kw$fn);
if(cljs.core.record_QMARK_(G__12644)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12657);
} else {
return G__12657;
}
})();
return (new com.rpl.specter.impl.LateFn0(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12644),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12659,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12663 = k12659;
var G__12663__$1 = (((G__12663 instanceof cljs.core.Keyword))?G__12663.fqn:null);
switch (G__12663__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12659,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12664){
var vec__12665 = p__12664;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12665,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12665,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12621){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12669 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12621);
var fexpr__12668 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12621);
return (fexpr__12668.cljs$core$IFn$_invoke$arity$1 ? fexpr__12668.cljs$core$IFn$_invoke$arity$1(G__12669) : fexpr__12668.call(null,G__12669));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12658){
var self__ = this;
var G__12658__$1 = this;
return (new cljs.core.RecordIter((0),G__12658__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12670 = (function (coll__4377__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12670(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12660,other12661){
var self__ = this;
var this12660__$1 = this;
return (((!((other12661 == null)))) && ((this12660__$1.constructor === other12661.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12660__$1.fn,other12661.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12660__$1.arg0,other12661.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12660__$1.__extmap,other12661.__extmap)));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg0,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12658){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12671 = cljs.core.keyword_identical_QMARK_;
var expr__12672 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12674 = cljs.core.cst$kw$fn;
var G__12675 = expr__12672;
return (pred__12671.cljs$core$IFn$_invoke$arity$2 ? pred__12671.cljs$core$IFn$_invoke$arity$2(G__12674,G__12675) : pred__12671.call(null,G__12674,G__12675));
})())){
return (new com.rpl.specter.impl.LateFn1(G__12658,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12676 = cljs.core.cst$kw$arg0;
var G__12677 = expr__12672;
return (pred__12671.cljs$core$IFn$_invoke$arity$2 ? pred__12671.cljs$core$IFn$_invoke$arity$2(G__12676,G__12677) : pred__12671.call(null,G__12676,G__12677));
})())){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__12658,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12658),null));
}
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12658){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__12658,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0], null);
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn1",null,(1),null));
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn1");
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
com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__12662){
var extmap__4419__auto__ = (function (){var G__12678 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12662,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0], 0));
if(cljs.core.record_QMARK_(G__12662)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12678);
} else {
return G__12678;
}
})();
return (new com.rpl.specter.impl.LateFn1(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12662),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12662),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12680,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12684 = k12680;
var G__12684__$1 = (((G__12684 instanceof cljs.core.Keyword))?G__12684.fqn:null);
switch (G__12684__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12680,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12685){
var vec__12686 = p__12685;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12622){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12690 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12622);
var G__12691 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12622);
var fexpr__12689 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12622);
return (fexpr__12689.cljs$core$IFn$_invoke$arity$2 ? fexpr__12689.cljs$core$IFn$_invoke$arity$2(G__12690,G__12691) : fexpr__12689.call(null,G__12690,G__12691));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12679){
var self__ = this;
var G__12679__$1 = this;
return (new cljs.core.RecordIter((0),G__12679__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12692 = (function (coll__4377__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12692(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12681,other12682){
var self__ = this;
var this12681__$1 = this;
return (((!((other12682 == null)))) && ((this12681__$1.constructor === other12682.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12681__$1.fn,other12682.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12681__$1.arg0,other12682.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12681__$1.arg1,other12682.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12681__$1.__extmap,other12682.__extmap)));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12679){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12693 = cljs.core.keyword_identical_QMARK_;
var expr__12694 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12696 = cljs.core.cst$kw$fn;
var G__12697 = expr__12694;
return (pred__12693.cljs$core$IFn$_invoke$arity$2 ? pred__12693.cljs$core$IFn$_invoke$arity$2(G__12696,G__12697) : pred__12693.call(null,G__12696,G__12697));
})())){
return (new com.rpl.specter.impl.LateFn2(G__12679,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12698 = cljs.core.cst$kw$arg0;
var G__12699 = expr__12694;
return (pred__12693.cljs$core$IFn$_invoke$arity$2 ? pred__12693.cljs$core$IFn$_invoke$arity$2(G__12698,G__12699) : pred__12693.call(null,G__12698,G__12699));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__12679,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12700 = cljs.core.cst$kw$arg1;
var G__12701 = expr__12694;
return (pred__12693.cljs$core$IFn$_invoke$arity$2 ? pred__12693.cljs$core$IFn$_invoke$arity$2(G__12700,G__12701) : pred__12693.call(null,G__12700,G__12701));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__12679,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12679),null));
}
}
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12679){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__12679,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1], null);
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn2",null,(1),null));
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn2");
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
com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__12683){
var extmap__4419__auto__ = (function (){var G__12702 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12683,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1], 0));
if(cljs.core.record_QMARK_(G__12683)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12702);
} else {
return G__12702;
}
})();
return (new com.rpl.specter.impl.LateFn2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12683),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12683),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12683),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12704,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12708 = k12704;
var G__12708__$1 = (((G__12708 instanceof cljs.core.Keyword))?G__12708.fqn:null);
switch (G__12708__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12704,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12709){
var vec__12710 = p__12709;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12710,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12710,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12623){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12714 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12623);
var G__12715 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12623);
var G__12716 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12623);
var fexpr__12713 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12623);
return (fexpr__12713.cljs$core$IFn$_invoke$arity$3 ? fexpr__12713.cljs$core$IFn$_invoke$arity$3(G__12714,G__12715,G__12716) : fexpr__12713.call(null,G__12714,G__12715,G__12716));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12703){
var self__ = this;
var G__12703__$1 = this;
return (new cljs.core.RecordIter((0),G__12703__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12717 = (function (coll__4377__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12717(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12705,other12706){
var self__ = this;
var this12705__$1 = this;
return (((!((other12706 == null)))) && ((this12705__$1.constructor === other12706.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12705__$1.fn,other12706.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12705__$1.arg0,other12706.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12705__$1.arg1,other12706.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12705__$1.arg2,other12706.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12705__$1.__extmap,other12706.__extmap)));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12703){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12718 = cljs.core.keyword_identical_QMARK_;
var expr__12719 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12721 = cljs.core.cst$kw$fn;
var G__12722 = expr__12719;
return (pred__12718.cljs$core$IFn$_invoke$arity$2 ? pred__12718.cljs$core$IFn$_invoke$arity$2(G__12721,G__12722) : pred__12718.call(null,G__12721,G__12722));
})())){
return (new com.rpl.specter.impl.LateFn3(G__12703,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12723 = cljs.core.cst$kw$arg0;
var G__12724 = expr__12719;
return (pred__12718.cljs$core$IFn$_invoke$arity$2 ? pred__12718.cljs$core$IFn$_invoke$arity$2(G__12723,G__12724) : pred__12718.call(null,G__12723,G__12724));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__12703,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12725 = cljs.core.cst$kw$arg1;
var G__12726 = expr__12719;
return (pred__12718.cljs$core$IFn$_invoke$arity$2 ? pred__12718.cljs$core$IFn$_invoke$arity$2(G__12725,G__12726) : pred__12718.call(null,G__12725,G__12726));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__12703,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12727 = cljs.core.cst$kw$arg2;
var G__12728 = expr__12719;
return (pred__12718.cljs$core$IFn$_invoke$arity$2 ? pred__12718.cljs$core$IFn$_invoke$arity$2(G__12727,G__12728) : pred__12718.call(null,G__12727,G__12728));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__12703,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12703),null));
}
}
}
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12703){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12703,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2], null);
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn3",null,(1),null));
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn3");
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
com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__12707){
var extmap__4419__auto__ = (function (){var G__12729 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12707,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2], 0));
if(cljs.core.record_QMARK_(G__12707)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12729);
} else {
return G__12729;
}
})();
return (new com.rpl.specter.impl.LateFn3(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12707),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12707),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12707),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__12707),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12731,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12735 = k12731;
var G__12735__$1 = (((G__12735 instanceof cljs.core.Keyword))?G__12735.fqn:null);
switch (G__12735__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12731,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12736){
var vec__12737 = p__12736;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12737,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12737,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12624){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12741 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12624);
var G__12742 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12624);
var G__12743 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12624);
var G__12744 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12624);
var fexpr__12740 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12624);
return (fexpr__12740.cljs$core$IFn$_invoke$arity$4 ? fexpr__12740.cljs$core$IFn$_invoke$arity$4(G__12741,G__12742,G__12743,G__12744) : fexpr__12740.call(null,G__12741,G__12742,G__12743,G__12744));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12730){
var self__ = this;
var G__12730__$1 = this;
return (new cljs.core.RecordIter((0),G__12730__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12745 = (function (coll__4377__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12745(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12732,other12733){
var self__ = this;
var this12732__$1 = this;
return (((!((other12733 == null)))) && ((this12732__$1.constructor === other12733.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12732__$1.fn,other12733.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12732__$1.arg0,other12733.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12732__$1.arg1,other12733.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12732__$1.arg2,other12733.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12732__$1.arg3,other12733.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12732__$1.__extmap,other12733.__extmap)));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12730){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12746 = cljs.core.keyword_identical_QMARK_;
var expr__12747 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12749 = cljs.core.cst$kw$fn;
var G__12750 = expr__12747;
return (pred__12746.cljs$core$IFn$_invoke$arity$2 ? pred__12746.cljs$core$IFn$_invoke$arity$2(G__12749,G__12750) : pred__12746.call(null,G__12749,G__12750));
})())){
return (new com.rpl.specter.impl.LateFn4(G__12730,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12751 = cljs.core.cst$kw$arg0;
var G__12752 = expr__12747;
return (pred__12746.cljs$core$IFn$_invoke$arity$2 ? pred__12746.cljs$core$IFn$_invoke$arity$2(G__12751,G__12752) : pred__12746.call(null,G__12751,G__12752));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__12730,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12753 = cljs.core.cst$kw$arg1;
var G__12754 = expr__12747;
return (pred__12746.cljs$core$IFn$_invoke$arity$2 ? pred__12746.cljs$core$IFn$_invoke$arity$2(G__12753,G__12754) : pred__12746.call(null,G__12753,G__12754));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__12730,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12755 = cljs.core.cst$kw$arg2;
var G__12756 = expr__12747;
return (pred__12746.cljs$core$IFn$_invoke$arity$2 ? pred__12746.cljs$core$IFn$_invoke$arity$2(G__12755,G__12756) : pred__12746.call(null,G__12755,G__12756));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__12730,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12757 = cljs.core.cst$kw$arg3;
var G__12758 = expr__12747;
return (pred__12746.cljs$core$IFn$_invoke$arity$2 ? pred__12746.cljs$core$IFn$_invoke$arity$2(G__12757,G__12758) : pred__12746.call(null,G__12757,G__12758));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12730,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12730),null));
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12730){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__12730,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3], null);
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn4",null,(1),null));
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn4");
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
com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__12734){
var extmap__4419__auto__ = (function (){var G__12759 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12734,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3], 0));
if(cljs.core.record_QMARK_(G__12734)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12759);
} else {
return G__12759;
}
})();
return (new com.rpl.specter.impl.LateFn4(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12734),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12734),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12734),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__12734),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__12734),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12761,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12765 = k12761;
var G__12765__$1 = (((G__12765 instanceof cljs.core.Keyword))?G__12765.fqn:null);
switch (G__12765__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12761,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12766){
var vec__12767 = p__12766;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12625){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12771 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12625);
var G__12772 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12625);
var G__12773 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12625);
var G__12774 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12625);
var G__12775 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12625);
var fexpr__12770 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12625);
return (fexpr__12770.cljs$core$IFn$_invoke$arity$5 ? fexpr__12770.cljs$core$IFn$_invoke$arity$5(G__12771,G__12772,G__12773,G__12774,G__12775) : fexpr__12770.call(null,G__12771,G__12772,G__12773,G__12774,G__12775));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12760){
var self__ = this;
var G__12760__$1 = this;
return (new cljs.core.RecordIter((0),G__12760__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12776 = (function (coll__4377__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12776(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12762,other12763){
var self__ = this;
var this12762__$1 = this;
return (((!((other12763 == null)))) && ((this12762__$1.constructor === other12763.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12762__$1.fn,other12763.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12762__$1.arg0,other12763.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12762__$1.arg1,other12763.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12762__$1.arg2,other12763.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12762__$1.arg3,other12763.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12762__$1.arg4,other12763.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12762__$1.__extmap,other12763.__extmap)));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12760){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12777 = cljs.core.keyword_identical_QMARK_;
var expr__12778 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12780 = cljs.core.cst$kw$fn;
var G__12781 = expr__12778;
return (pred__12777.cljs$core$IFn$_invoke$arity$2 ? pred__12777.cljs$core$IFn$_invoke$arity$2(G__12780,G__12781) : pred__12777.call(null,G__12780,G__12781));
})())){
return (new com.rpl.specter.impl.LateFn5(G__12760,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12782 = cljs.core.cst$kw$arg0;
var G__12783 = expr__12778;
return (pred__12777.cljs$core$IFn$_invoke$arity$2 ? pred__12777.cljs$core$IFn$_invoke$arity$2(G__12782,G__12783) : pred__12777.call(null,G__12782,G__12783));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__12760,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12784 = cljs.core.cst$kw$arg1;
var G__12785 = expr__12778;
return (pred__12777.cljs$core$IFn$_invoke$arity$2 ? pred__12777.cljs$core$IFn$_invoke$arity$2(G__12784,G__12785) : pred__12777.call(null,G__12784,G__12785));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__12760,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12786 = cljs.core.cst$kw$arg2;
var G__12787 = expr__12778;
return (pred__12777.cljs$core$IFn$_invoke$arity$2 ? pred__12777.cljs$core$IFn$_invoke$arity$2(G__12786,G__12787) : pred__12777.call(null,G__12786,G__12787));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__12760,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12788 = cljs.core.cst$kw$arg3;
var G__12789 = expr__12778;
return (pred__12777.cljs$core$IFn$_invoke$arity$2 ? pred__12777.cljs$core$IFn$_invoke$arity$2(G__12788,G__12789) : pred__12777.call(null,G__12788,G__12789));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12760,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12790 = cljs.core.cst$kw$arg4;
var G__12791 = expr__12778;
return (pred__12777.cljs$core$IFn$_invoke$arity$2 ? pred__12777.cljs$core$IFn$_invoke$arity$2(G__12790,G__12791) : pred__12777.call(null,G__12790,G__12791));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__12760,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12760),null));
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12760){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__12760,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4], null);
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn5",null,(1),null));
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn5");
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
com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__12764){
var extmap__4419__auto__ = (function (){var G__12792 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12764,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4], 0));
if(cljs.core.record_QMARK_(G__12764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12792);
} else {
return G__12792;
}
})();
return (new com.rpl.specter.impl.LateFn5(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12764),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12764),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12764),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__12764),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__12764),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__12764),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12794,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12798 = k12794;
var G__12798__$1 = (((G__12798 instanceof cljs.core.Keyword))?G__12798.fqn:null);
switch (G__12798__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12794,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12799){
var vec__12800 = p__12799;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12800,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12800,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12626){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12804 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12626);
var G__12805 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12626);
var G__12806 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12626);
var G__12807 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12626);
var G__12808 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12626);
var G__12809 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12626);
var fexpr__12803 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12626);
return (fexpr__12803.cljs$core$IFn$_invoke$arity$6 ? fexpr__12803.cljs$core$IFn$_invoke$arity$6(G__12804,G__12805,G__12806,G__12807,G__12808,G__12809) : fexpr__12803.call(null,G__12804,G__12805,G__12806,G__12807,G__12808,G__12809));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12793){
var self__ = this;
var G__12793__$1 = this;
return (new cljs.core.RecordIter((0),G__12793__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12810 = (function (coll__4377__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12810(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12795,other12796){
var self__ = this;
var this12795__$1 = this;
return (((!((other12796 == null)))) && ((this12795__$1.constructor === other12796.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12795__$1.fn,other12796.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12795__$1.arg0,other12796.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12795__$1.arg1,other12796.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12795__$1.arg2,other12796.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12795__$1.arg3,other12796.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12795__$1.arg4,other12796.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12795__$1.arg5,other12796.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12795__$1.__extmap,other12796.__extmap)));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12793){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12811 = cljs.core.keyword_identical_QMARK_;
var expr__12812 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12814 = cljs.core.cst$kw$fn;
var G__12815 = expr__12812;
return (pred__12811.cljs$core$IFn$_invoke$arity$2 ? pred__12811.cljs$core$IFn$_invoke$arity$2(G__12814,G__12815) : pred__12811.call(null,G__12814,G__12815));
})())){
return (new com.rpl.specter.impl.LateFn6(G__12793,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12816 = cljs.core.cst$kw$arg0;
var G__12817 = expr__12812;
return (pred__12811.cljs$core$IFn$_invoke$arity$2 ? pred__12811.cljs$core$IFn$_invoke$arity$2(G__12816,G__12817) : pred__12811.call(null,G__12816,G__12817));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__12793,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12818 = cljs.core.cst$kw$arg1;
var G__12819 = expr__12812;
return (pred__12811.cljs$core$IFn$_invoke$arity$2 ? pred__12811.cljs$core$IFn$_invoke$arity$2(G__12818,G__12819) : pred__12811.call(null,G__12818,G__12819));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__12793,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12820 = cljs.core.cst$kw$arg2;
var G__12821 = expr__12812;
return (pred__12811.cljs$core$IFn$_invoke$arity$2 ? pred__12811.cljs$core$IFn$_invoke$arity$2(G__12820,G__12821) : pred__12811.call(null,G__12820,G__12821));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__12793,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12822 = cljs.core.cst$kw$arg3;
var G__12823 = expr__12812;
return (pred__12811.cljs$core$IFn$_invoke$arity$2 ? pred__12811.cljs$core$IFn$_invoke$arity$2(G__12822,G__12823) : pred__12811.call(null,G__12822,G__12823));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12793,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12824 = cljs.core.cst$kw$arg4;
var G__12825 = expr__12812;
return (pred__12811.cljs$core$IFn$_invoke$arity$2 ? pred__12811.cljs$core$IFn$_invoke$arity$2(G__12824,G__12825) : pred__12811.call(null,G__12824,G__12825));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__12793,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12826 = cljs.core.cst$kw$arg5;
var G__12827 = expr__12812;
return (pred__12811.cljs$core$IFn$_invoke$arity$2 ? pred__12811.cljs$core$IFn$_invoke$arity$2(G__12826,G__12827) : pred__12811.call(null,G__12826,G__12827));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__12793,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12793),null));
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12793){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__12793,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5], null);
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn6",null,(1),null));
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn6");
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
com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__12797){
var extmap__4419__auto__ = (function (){var G__12828 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12797,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5], 0));
if(cljs.core.record_QMARK_(G__12797)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12828);
} else {
return G__12828;
}
})();
return (new com.rpl.specter.impl.LateFn6(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12797),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12797),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12797),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__12797),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__12797),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__12797),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__12797),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12830,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12834 = k12830;
var G__12834__$1 = (((G__12834 instanceof cljs.core.Keyword))?G__12834.fqn:null);
switch (G__12834__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12830,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12835){
var vec__12836 = p__12835;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12836,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12836,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12627){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12840 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12627);
var G__12841 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12627);
var G__12842 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12627);
var G__12843 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12627);
var G__12844 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12627);
var G__12845 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12627);
var G__12846 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12627);
var fexpr__12839 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12627);
return (fexpr__12839.cljs$core$IFn$_invoke$arity$7 ? fexpr__12839.cljs$core$IFn$_invoke$arity$7(G__12840,G__12841,G__12842,G__12843,G__12844,G__12845,G__12846) : fexpr__12839.call(null,G__12840,G__12841,G__12842,G__12843,G__12844,G__12845,G__12846));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12829){
var self__ = this;
var G__12829__$1 = this;
return (new cljs.core.RecordIter((0),G__12829__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12847 = (function (coll__4377__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12847(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12831,other12832){
var self__ = this;
var this12831__$1 = this;
return (((!((other12832 == null)))) && ((this12831__$1.constructor === other12832.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.fn,other12832.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.arg0,other12832.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.arg1,other12832.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.arg2,other12832.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.arg3,other12832.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.arg4,other12832.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.arg5,other12832.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.arg6,other12832.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12831__$1.__extmap,other12832.__extmap)));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12829){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12848 = cljs.core.keyword_identical_QMARK_;
var expr__12849 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12851 = cljs.core.cst$kw$fn;
var G__12852 = expr__12849;
return (pred__12848.cljs$core$IFn$_invoke$arity$2 ? pred__12848.cljs$core$IFn$_invoke$arity$2(G__12851,G__12852) : pred__12848.call(null,G__12851,G__12852));
})())){
return (new com.rpl.specter.impl.LateFn7(G__12829,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12853 = cljs.core.cst$kw$arg0;
var G__12854 = expr__12849;
return (pred__12848.cljs$core$IFn$_invoke$arity$2 ? pred__12848.cljs$core$IFn$_invoke$arity$2(G__12853,G__12854) : pred__12848.call(null,G__12853,G__12854));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__12829,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12855 = cljs.core.cst$kw$arg1;
var G__12856 = expr__12849;
return (pred__12848.cljs$core$IFn$_invoke$arity$2 ? pred__12848.cljs$core$IFn$_invoke$arity$2(G__12855,G__12856) : pred__12848.call(null,G__12855,G__12856));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__12829,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12857 = cljs.core.cst$kw$arg2;
var G__12858 = expr__12849;
return (pred__12848.cljs$core$IFn$_invoke$arity$2 ? pred__12848.cljs$core$IFn$_invoke$arity$2(G__12857,G__12858) : pred__12848.call(null,G__12857,G__12858));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__12829,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12859 = cljs.core.cst$kw$arg3;
var G__12860 = expr__12849;
return (pred__12848.cljs$core$IFn$_invoke$arity$2 ? pred__12848.cljs$core$IFn$_invoke$arity$2(G__12859,G__12860) : pred__12848.call(null,G__12859,G__12860));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12829,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12861 = cljs.core.cst$kw$arg4;
var G__12862 = expr__12849;
return (pred__12848.cljs$core$IFn$_invoke$arity$2 ? pred__12848.cljs$core$IFn$_invoke$arity$2(G__12861,G__12862) : pred__12848.call(null,G__12861,G__12862));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__12829,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12863 = cljs.core.cst$kw$arg5;
var G__12864 = expr__12849;
return (pred__12848.cljs$core$IFn$_invoke$arity$2 ? pred__12848.cljs$core$IFn$_invoke$arity$2(G__12863,G__12864) : pred__12848.call(null,G__12863,G__12864));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__12829,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12865 = cljs.core.cst$kw$arg6;
var G__12866 = expr__12849;
return (pred__12848.cljs$core$IFn$_invoke$arity$2 ? pred__12848.cljs$core$IFn$_invoke$arity$2(G__12865,G__12866) : pred__12848.call(null,G__12865,G__12866));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__12829,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12829),null));
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12829){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__12829,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6], null);
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn7",null,(1),null));
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn7");
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
com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__12833){
var extmap__4419__auto__ = (function (){var G__12867 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12833,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6], 0));
if(cljs.core.record_QMARK_(G__12833)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12867);
} else {
return G__12867;
}
})();
return (new com.rpl.specter.impl.LateFn7(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12833),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12833),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12833),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__12833),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__12833),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__12833),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__12833),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__12833),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12869,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12873 = k12869;
var G__12873__$1 = (((G__12873 instanceof cljs.core.Keyword))?G__12873.fqn:null);
switch (G__12873__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12869,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12874){
var vec__12875 = p__12874;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12875,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12628){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12879 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12628);
var G__12880 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12628);
var G__12881 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12628);
var G__12882 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12628);
var G__12883 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12628);
var G__12884 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12628);
var G__12885 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12628);
var G__12886 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12628);
var fexpr__12878 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12628);
return (fexpr__12878.cljs$core$IFn$_invoke$arity$8 ? fexpr__12878.cljs$core$IFn$_invoke$arity$8(G__12879,G__12880,G__12881,G__12882,G__12883,G__12884,G__12885,G__12886) : fexpr__12878.call(null,G__12879,G__12880,G__12881,G__12882,G__12883,G__12884,G__12885,G__12886));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12868){
var self__ = this;
var G__12868__$1 = this;
return (new cljs.core.RecordIter((0),G__12868__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12887 = (function (coll__4377__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12887(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12870,other12871){
var self__ = this;
var this12870__$1 = this;
return (((!((other12871 == null)))) && ((this12870__$1.constructor === other12871.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.fn,other12871.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.arg0,other12871.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.arg1,other12871.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.arg2,other12871.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.arg3,other12871.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.arg4,other12871.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.arg5,other12871.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.arg6,other12871.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.arg7,other12871.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12870__$1.__extmap,other12871.__extmap)));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12868){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12888 = cljs.core.keyword_identical_QMARK_;
var expr__12889 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12891 = cljs.core.cst$kw$fn;
var G__12892 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12891,G__12892) : pred__12888.call(null,G__12891,G__12892));
})())){
return (new com.rpl.specter.impl.LateFn8(G__12868,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12893 = cljs.core.cst$kw$arg0;
var G__12894 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12893,G__12894) : pred__12888.call(null,G__12893,G__12894));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__12868,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12895 = cljs.core.cst$kw$arg1;
var G__12896 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12895,G__12896) : pred__12888.call(null,G__12895,G__12896));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__12868,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12897 = cljs.core.cst$kw$arg2;
var G__12898 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12897,G__12898) : pred__12888.call(null,G__12897,G__12898));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__12868,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12899 = cljs.core.cst$kw$arg3;
var G__12900 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12899,G__12900) : pred__12888.call(null,G__12899,G__12900));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12868,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12901 = cljs.core.cst$kw$arg4;
var G__12902 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12901,G__12902) : pred__12888.call(null,G__12901,G__12902));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__12868,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12903 = cljs.core.cst$kw$arg5;
var G__12904 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12903,G__12904) : pred__12888.call(null,G__12903,G__12904));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__12868,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12905 = cljs.core.cst$kw$arg6;
var G__12906 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12905,G__12906) : pred__12888.call(null,G__12905,G__12906));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__12868,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12907 = cljs.core.cst$kw$arg7;
var G__12908 = expr__12889;
return (pred__12888.cljs$core$IFn$_invoke$arity$2 ? pred__12888.cljs$core$IFn$_invoke$arity$2(G__12907,G__12908) : pred__12888.call(null,G__12907,G__12908));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__12868,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12868),null));
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

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12868){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__12868,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7], null);
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn8",null,(1),null));
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn8");
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
com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__12872){
var extmap__4419__auto__ = (function (){var G__12909 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12872,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7], 0));
if(cljs.core.record_QMARK_(G__12872)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12909);
} else {
return G__12909;
}
})();
return (new com.rpl.specter.impl.LateFn8(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12872),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12872),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12872),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__12872),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__12872),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__12872),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__12872),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__12872),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__12872),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12911,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12915 = k12911;
var G__12915__$1 = (((G__12915 instanceof cljs.core.Keyword))?G__12915.fqn:null);
switch (G__12915__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12911,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12916){
var vec__12917 = p__12916;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12629){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12921 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12629);
var G__12922 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12629);
var G__12923 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12629);
var G__12924 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12629);
var G__12925 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12629);
var G__12926 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12629);
var G__12927 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12629);
var G__12928 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12629);
var G__12929 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12629);
var fexpr__12920 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12629);
return (fexpr__12920.cljs$core$IFn$_invoke$arity$9 ? fexpr__12920.cljs$core$IFn$_invoke$arity$9(G__12921,G__12922,G__12923,G__12924,G__12925,G__12926,G__12927,G__12928,G__12929) : fexpr__12920.call(null,G__12921,G__12922,G__12923,G__12924,G__12925,G__12926,G__12927,G__12928,G__12929));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12910){
var self__ = this;
var G__12910__$1 = this;
return (new cljs.core.RecordIter((0),G__12910__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12930 = (function (coll__4377__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12930(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12912,other12913){
var self__ = this;
var this12912__$1 = this;
return (((!((other12913 == null)))) && ((this12912__$1.constructor === other12913.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.fn,other12913.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg0,other12913.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg1,other12913.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg2,other12913.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg3,other12913.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg4,other12913.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg5,other12913.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg6,other12913.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg7,other12913.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.arg8,other12913.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12912__$1.__extmap,other12913.__extmap)));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12910){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12931 = cljs.core.keyword_identical_QMARK_;
var expr__12932 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12934 = cljs.core.cst$kw$fn;
var G__12935 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12934,G__12935) : pred__12931.call(null,G__12934,G__12935));
})())){
return (new com.rpl.specter.impl.LateFn9(G__12910,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12936 = cljs.core.cst$kw$arg0;
var G__12937 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12936,G__12937) : pred__12931.call(null,G__12936,G__12937));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__12910,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12938 = cljs.core.cst$kw$arg1;
var G__12939 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12938,G__12939) : pred__12931.call(null,G__12938,G__12939));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__12910,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12940 = cljs.core.cst$kw$arg2;
var G__12941 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12940,G__12941) : pred__12931.call(null,G__12940,G__12941));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__12910,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12942 = cljs.core.cst$kw$arg3;
var G__12943 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12942,G__12943) : pred__12931.call(null,G__12942,G__12943));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12910,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12944 = cljs.core.cst$kw$arg4;
var G__12945 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12944,G__12945) : pred__12931.call(null,G__12944,G__12945));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__12910,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12946 = cljs.core.cst$kw$arg5;
var G__12947 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12946,G__12947) : pred__12931.call(null,G__12946,G__12947));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__12910,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12948 = cljs.core.cst$kw$arg6;
var G__12949 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12948,G__12949) : pred__12931.call(null,G__12948,G__12949));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__12910,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12950 = cljs.core.cst$kw$arg7;
var G__12951 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12950,G__12951) : pred__12931.call(null,G__12950,G__12951));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__12910,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12952 = cljs.core.cst$kw$arg8;
var G__12953 = expr__12932;
return (pred__12931.cljs$core$IFn$_invoke$arity$2 ? pred__12931.cljs$core$IFn$_invoke$arity$2(G__12952,G__12953) : pred__12931.call(null,G__12952,G__12953));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__12910,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12910),null));
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

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12910){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__12910,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8], null);
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn9",null,(1),null));
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn9");
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
com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__12914){
var extmap__4419__auto__ = (function (){var G__12954 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12914,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8], 0));
if(cljs.core.record_QMARK_(G__12914)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12954);
} else {
return G__12954;
}
})();
return (new com.rpl.specter.impl.LateFn9(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__12914),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__12914),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12956,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12960 = k12956;
var G__12960__$1 = (((G__12960 instanceof cljs.core.Keyword))?G__12960.fqn:null);
switch (G__12960__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12956,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__12961){
var vec__12962 = p__12961;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12962,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12962,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12630){
var self__ = this;
var this__10980__auto____$1 = this;
var G__12966 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12630);
var G__12967 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12630);
var G__12968 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12630);
var G__12969 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12630);
var G__12970 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12630);
var G__12971 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12630);
var G__12972 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12630);
var G__12973 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12630);
var G__12974 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12630);
var G__12975 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12630);
var fexpr__12965 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12630);
return (fexpr__12965.cljs$core$IFn$_invoke$arity$10 ? fexpr__12965.cljs$core$IFn$_invoke$arity$10(G__12966,G__12967,G__12968,G__12969,G__12970,G__12971,G__12972,G__12973,G__12974,G__12975) : fexpr__12965.call(null,G__12966,G__12967,G__12968,G__12969,G__12970,G__12971,G__12972,G__12973,G__12974,G__12975));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12955){
var self__ = this;
var G__12955__$1 = this;
return (new cljs.core.RecordIter((0),G__12955__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__12976 = (function (coll__4377__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__12976(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12957,other12958){
var self__ = this;
var this12957__$1 = this;
return (((!((other12958 == null)))) && ((this12957__$1.constructor === other12958.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.fn,other12958.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg0,other12958.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg1,other12958.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg2,other12958.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg3,other12958.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg4,other12958.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg5,other12958.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg6,other12958.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg7,other12958.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg8,other12958.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.arg9,other12958.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12957__$1.__extmap,other12958.__extmap)));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12955){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12977 = cljs.core.keyword_identical_QMARK_;
var expr__12978 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__12980 = cljs.core.cst$kw$fn;
var G__12981 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12980,G__12981) : pred__12977.call(null,G__12980,G__12981));
})())){
return (new com.rpl.specter.impl.LateFn10(G__12955,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12982 = cljs.core.cst$kw$arg0;
var G__12983 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12982,G__12983) : pred__12977.call(null,G__12982,G__12983));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__12955,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12984 = cljs.core.cst$kw$arg1;
var G__12985 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12984,G__12985) : pred__12977.call(null,G__12984,G__12985));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__12955,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12986 = cljs.core.cst$kw$arg2;
var G__12987 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12986,G__12987) : pred__12977.call(null,G__12986,G__12987));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__12955,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12988 = cljs.core.cst$kw$arg3;
var G__12989 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12988,G__12989) : pred__12977.call(null,G__12988,G__12989));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__12955,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12990 = cljs.core.cst$kw$arg4;
var G__12991 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12990,G__12991) : pred__12977.call(null,G__12990,G__12991));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__12955,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12992 = cljs.core.cst$kw$arg5;
var G__12993 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12992,G__12993) : pred__12977.call(null,G__12992,G__12993));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__12955,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12994 = cljs.core.cst$kw$arg6;
var G__12995 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12994,G__12995) : pred__12977.call(null,G__12994,G__12995));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__12955,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12996 = cljs.core.cst$kw$arg7;
var G__12997 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12996,G__12997) : pred__12977.call(null,G__12996,G__12997));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__12955,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__12998 = cljs.core.cst$kw$arg8;
var G__12999 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__12998,G__12999) : pred__12977.call(null,G__12998,G__12999));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__12955,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13000 = cljs.core.cst$kw$arg9;
var G__13001 = expr__12978;
return (pred__12977.cljs$core$IFn$_invoke$arity$2 ? pred__12977.cljs$core$IFn$_invoke$arity$2(G__13000,G__13001) : pred__12977.call(null,G__13000,G__13001));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__12955,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__12955),null));
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

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12955){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__12955,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9], null);
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn10",null,(1),null));
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn10");
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
com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__12959){
var extmap__4419__auto__ = (function (){var G__13002 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12959,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9], 0));
if(cljs.core.record_QMARK_(G__12959)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13002);
} else {
return G__13002;
}
})();
return (new com.rpl.specter.impl.LateFn10(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__12959),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__12959),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13004,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13008 = k13004;
var G__13008__$1 = (((G__13008 instanceof cljs.core.Keyword))?G__13008.fqn:null);
switch (G__13008__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13004,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13009){
var vec__13010 = p__13009;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13010,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13010,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12631){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13014 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12631);
var G__13015 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12631);
var G__13016 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12631);
var G__13017 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12631);
var G__13018 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12631);
var G__13019 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12631);
var G__13020 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12631);
var G__13021 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12631);
var G__13022 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12631);
var G__13023 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12631);
var G__13024 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12631);
var fexpr__13013 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12631);
return (fexpr__13013.cljs$core$IFn$_invoke$arity$11 ? fexpr__13013.cljs$core$IFn$_invoke$arity$11(G__13014,G__13015,G__13016,G__13017,G__13018,G__13019,G__13020,G__13021,G__13022,G__13023,G__13024) : fexpr__13013.call(null,G__13014,G__13015,G__13016,G__13017,G__13018,G__13019,G__13020,G__13021,G__13022,G__13023,G__13024));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13003){
var self__ = this;
var G__13003__$1 = this;
return (new cljs.core.RecordIter((0),G__13003__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13025 = (function (coll__4377__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13025(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13005,other13006){
var self__ = this;
var this13005__$1 = this;
return (((!((other13006 == null)))) && ((this13005__$1.constructor === other13006.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.fn,other13006.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg0,other13006.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg1,other13006.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg2,other13006.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg3,other13006.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg4,other13006.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg5,other13006.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg6,other13006.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg7,other13006.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg8,other13006.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg9,other13006.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.arg10,other13006.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13005__$1.__extmap,other13006.__extmap)));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13003){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13026 = cljs.core.keyword_identical_QMARK_;
var expr__13027 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13029 = cljs.core.cst$kw$fn;
var G__13030 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13029,G__13030) : pred__13026.call(null,G__13029,G__13030));
})())){
return (new com.rpl.specter.impl.LateFn11(G__13003,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13031 = cljs.core.cst$kw$arg0;
var G__13032 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13031,G__13032) : pred__13026.call(null,G__13031,G__13032));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__13003,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13033 = cljs.core.cst$kw$arg1;
var G__13034 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13033,G__13034) : pred__13026.call(null,G__13033,G__13034));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__13003,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13035 = cljs.core.cst$kw$arg2;
var G__13036 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13035,G__13036) : pred__13026.call(null,G__13035,G__13036));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__13003,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13037 = cljs.core.cst$kw$arg3;
var G__13038 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13037,G__13038) : pred__13026.call(null,G__13037,G__13038));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13003,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13039 = cljs.core.cst$kw$arg4;
var G__13040 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13039,G__13040) : pred__13026.call(null,G__13039,G__13040));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13003,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13041 = cljs.core.cst$kw$arg5;
var G__13042 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13041,G__13042) : pred__13026.call(null,G__13041,G__13042));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13003,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13043 = cljs.core.cst$kw$arg6;
var G__13044 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13043,G__13044) : pred__13026.call(null,G__13043,G__13044));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13003,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13045 = cljs.core.cst$kw$arg7;
var G__13046 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13045,G__13046) : pred__13026.call(null,G__13045,G__13046));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13003,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13047 = cljs.core.cst$kw$arg8;
var G__13048 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13047,G__13048) : pred__13026.call(null,G__13047,G__13048));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13003,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13049 = cljs.core.cst$kw$arg9;
var G__13050 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13049,G__13050) : pred__13026.call(null,G__13049,G__13050));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13003,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13051 = cljs.core.cst$kw$arg10;
var G__13052 = expr__13027;
return (pred__13026.cljs$core$IFn$_invoke$arity$2 ? pred__13026.cljs$core$IFn$_invoke$arity$2(G__13051,G__13052) : pred__13026.call(null,G__13051,G__13052));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13003,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13003),null));
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

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13003){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13003,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10], null);
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn11",null,(1),null));
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn11");
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
com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__13007){
var extmap__4419__auto__ = (function (){var G__13053 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13007,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10], 0));
if(cljs.core.record_QMARK_(G__13007)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13053);
} else {
return G__13053;
}
})();
return (new com.rpl.specter.impl.LateFn11(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13007),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13007),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13055,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13059 = k13055;
var G__13059__$1 = (((G__13059 instanceof cljs.core.Keyword))?G__13059.fqn:null);
switch (G__13059__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13055,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13060){
var vec__13061 = p__13060;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12632){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13065 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12632);
var G__13066 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12632);
var G__13067 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12632);
var G__13068 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12632);
var G__13069 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12632);
var G__13070 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12632);
var G__13071 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12632);
var G__13072 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12632);
var G__13073 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12632);
var G__13074 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12632);
var G__13075 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12632);
var G__13076 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12632);
var fexpr__13064 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12632);
return (fexpr__13064.cljs$core$IFn$_invoke$arity$12 ? fexpr__13064.cljs$core$IFn$_invoke$arity$12(G__13065,G__13066,G__13067,G__13068,G__13069,G__13070,G__13071,G__13072,G__13073,G__13074,G__13075,G__13076) : fexpr__13064.call(null,G__13065,G__13066,G__13067,G__13068,G__13069,G__13070,G__13071,G__13072,G__13073,G__13074,G__13075,G__13076));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13054){
var self__ = this;
var G__13054__$1 = this;
return (new cljs.core.RecordIter((0),G__13054__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13077 = (function (coll__4377__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13077(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13056,other13057){
var self__ = this;
var this13056__$1 = this;
return (((!((other13057 == null)))) && ((this13056__$1.constructor === other13057.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.fn,other13057.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg0,other13057.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg1,other13057.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg2,other13057.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg3,other13057.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg4,other13057.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg5,other13057.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg6,other13057.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg7,other13057.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg8,other13057.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg9,other13057.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg10,other13057.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.arg11,other13057.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13056__$1.__extmap,other13057.__extmap)));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13054){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13078 = cljs.core.keyword_identical_QMARK_;
var expr__13079 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13081 = cljs.core.cst$kw$fn;
var G__13082 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13081,G__13082) : pred__13078.call(null,G__13081,G__13082));
})())){
return (new com.rpl.specter.impl.LateFn12(G__13054,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13083 = cljs.core.cst$kw$arg0;
var G__13084 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13083,G__13084) : pred__13078.call(null,G__13083,G__13084));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__13054,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13085 = cljs.core.cst$kw$arg1;
var G__13086 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13085,G__13086) : pred__13078.call(null,G__13085,G__13086));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__13054,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13087 = cljs.core.cst$kw$arg2;
var G__13088 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13087,G__13088) : pred__13078.call(null,G__13087,G__13088));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__13054,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13089 = cljs.core.cst$kw$arg3;
var G__13090 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13089,G__13090) : pred__13078.call(null,G__13089,G__13090));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13054,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13091 = cljs.core.cst$kw$arg4;
var G__13092 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13091,G__13092) : pred__13078.call(null,G__13091,G__13092));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13054,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13093 = cljs.core.cst$kw$arg5;
var G__13094 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13093,G__13094) : pred__13078.call(null,G__13093,G__13094));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13054,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13095 = cljs.core.cst$kw$arg6;
var G__13096 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13095,G__13096) : pred__13078.call(null,G__13095,G__13096));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13054,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13097 = cljs.core.cst$kw$arg7;
var G__13098 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13097,G__13098) : pred__13078.call(null,G__13097,G__13098));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13054,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13099 = cljs.core.cst$kw$arg8;
var G__13100 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13099,G__13100) : pred__13078.call(null,G__13099,G__13100));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13054,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13101 = cljs.core.cst$kw$arg9;
var G__13102 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13101,G__13102) : pred__13078.call(null,G__13101,G__13102));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13054,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13103 = cljs.core.cst$kw$arg10;
var G__13104 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13103,G__13104) : pred__13078.call(null,G__13103,G__13104));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13054,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13105 = cljs.core.cst$kw$arg11;
var G__13106 = expr__13079;
return (pred__13078.cljs$core$IFn$_invoke$arity$2 ? pred__13078.cljs$core$IFn$_invoke$arity$2(G__13105,G__13106) : pred__13078.call(null,G__13105,G__13106));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13054,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13054),null));
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

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13054){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13054,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11], null);
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn12",null,(1),null));
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn12");
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
com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__13058){
var extmap__4419__auto__ = (function (){var G__13107 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13058,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11], 0));
if(cljs.core.record_QMARK_(G__13058)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13107);
} else {
return G__13107;
}
})();
return (new com.rpl.specter.impl.LateFn12(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13058),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__13058),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13109,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13113 = k13109;
var G__13113__$1 = (((G__13113 instanceof cljs.core.Keyword))?G__13113.fqn:null);
switch (G__13113__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13109,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13114){
var vec__13115 = p__13114;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12633){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13119 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12633);
var G__13120 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12633);
var G__13121 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12633);
var G__13122 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12633);
var G__13123 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12633);
var G__13124 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12633);
var G__13125 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12633);
var G__13126 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12633);
var G__13127 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12633);
var G__13128 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12633);
var G__13129 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12633);
var G__13130 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12633);
var G__13131 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12633);
var fexpr__13118 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12633);
return (fexpr__13118.cljs$core$IFn$_invoke$arity$13 ? fexpr__13118.cljs$core$IFn$_invoke$arity$13(G__13119,G__13120,G__13121,G__13122,G__13123,G__13124,G__13125,G__13126,G__13127,G__13128,G__13129,G__13130,G__13131) : fexpr__13118.call(null,G__13119,G__13120,G__13121,G__13122,G__13123,G__13124,G__13125,G__13126,G__13127,G__13128,G__13129,G__13130,G__13131));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13108){
var self__ = this;
var G__13108__$1 = this;
return (new cljs.core.RecordIter((0),G__13108__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13132 = (function (coll__4377__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13132(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13110,other13111){
var self__ = this;
var this13110__$1 = this;
return (((!((other13111 == null)))) && ((this13110__$1.constructor === other13111.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.fn,other13111.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg0,other13111.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg1,other13111.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg2,other13111.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg3,other13111.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg4,other13111.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg5,other13111.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg6,other13111.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg7,other13111.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg8,other13111.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg9,other13111.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg10,other13111.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg11,other13111.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.arg12,other13111.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13110__$1.__extmap,other13111.__extmap)));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13108){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13133 = cljs.core.keyword_identical_QMARK_;
var expr__13134 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13136 = cljs.core.cst$kw$fn;
var G__13137 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13136,G__13137) : pred__13133.call(null,G__13136,G__13137));
})())){
return (new com.rpl.specter.impl.LateFn13(G__13108,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13138 = cljs.core.cst$kw$arg0;
var G__13139 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13138,G__13139) : pred__13133.call(null,G__13138,G__13139));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__13108,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13140 = cljs.core.cst$kw$arg1;
var G__13141 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13140,G__13141) : pred__13133.call(null,G__13140,G__13141));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__13108,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13142 = cljs.core.cst$kw$arg2;
var G__13143 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13142,G__13143) : pred__13133.call(null,G__13142,G__13143));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__13108,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13144 = cljs.core.cst$kw$arg3;
var G__13145 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13144,G__13145) : pred__13133.call(null,G__13144,G__13145));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13108,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13146 = cljs.core.cst$kw$arg4;
var G__13147 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13146,G__13147) : pred__13133.call(null,G__13146,G__13147));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13108,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13148 = cljs.core.cst$kw$arg5;
var G__13149 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13148,G__13149) : pred__13133.call(null,G__13148,G__13149));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13108,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13150 = cljs.core.cst$kw$arg6;
var G__13151 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13150,G__13151) : pred__13133.call(null,G__13150,G__13151));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13108,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13152 = cljs.core.cst$kw$arg7;
var G__13153 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13152,G__13153) : pred__13133.call(null,G__13152,G__13153));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13108,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13154 = cljs.core.cst$kw$arg8;
var G__13155 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13154,G__13155) : pred__13133.call(null,G__13154,G__13155));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13108,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13156 = cljs.core.cst$kw$arg9;
var G__13157 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13156,G__13157) : pred__13133.call(null,G__13156,G__13157));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13108,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13158 = cljs.core.cst$kw$arg10;
var G__13159 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13158,G__13159) : pred__13133.call(null,G__13158,G__13159));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13108,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13160 = cljs.core.cst$kw$arg11;
var G__13161 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13160,G__13161) : pred__13133.call(null,G__13160,G__13161));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13108,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13162 = cljs.core.cst$kw$arg12;
var G__13163 = expr__13134;
return (pred__13133.cljs$core$IFn$_invoke$arity$2 ? pred__13133.cljs$core$IFn$_invoke$arity$2(G__13162,G__13163) : pred__13133.call(null,G__13162,G__13163));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13108,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13108),null));
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

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13108){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13108,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12], null);
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn13",null,(1),null));
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn13");
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
com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__13112){
var extmap__4419__auto__ = (function (){var G__13164 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13112,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12], 0));
if(cljs.core.record_QMARK_(G__13112)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13164);
} else {
return G__13164;
}
})();
return (new com.rpl.specter.impl.LateFn13(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__13112),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__13112),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13166,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13170 = k13166;
var G__13170__$1 = (((G__13170 instanceof cljs.core.Keyword))?G__13170.fqn:null);
switch (G__13170__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13166,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13171){
var vec__13172 = p__13171;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12634){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13176 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12634);
var G__13177 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12634);
var G__13178 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12634);
var G__13179 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12634);
var G__13180 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12634);
var G__13181 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12634);
var G__13182 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12634);
var G__13183 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12634);
var G__13184 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12634);
var G__13185 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12634);
var G__13186 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12634);
var G__13187 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12634);
var G__13188 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12634);
var G__13189 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12634);
var fexpr__13175 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12634);
return (fexpr__13175.cljs$core$IFn$_invoke$arity$14 ? fexpr__13175.cljs$core$IFn$_invoke$arity$14(G__13176,G__13177,G__13178,G__13179,G__13180,G__13181,G__13182,G__13183,G__13184,G__13185,G__13186,G__13187,G__13188,G__13189) : fexpr__13175.call(null,G__13176,G__13177,G__13178,G__13179,G__13180,G__13181,G__13182,G__13183,G__13184,G__13185,G__13186,G__13187,G__13188,G__13189));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13165){
var self__ = this;
var G__13165__$1 = this;
return (new cljs.core.RecordIter((0),G__13165__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13190 = (function (coll__4377__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13190(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13167,other13168){
var self__ = this;
var this13167__$1 = this;
return (((!((other13168 == null)))) && ((this13167__$1.constructor === other13168.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.fn,other13168.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg0,other13168.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg1,other13168.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg2,other13168.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg3,other13168.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg4,other13168.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg5,other13168.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg6,other13168.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg7,other13168.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg8,other13168.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg9,other13168.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg10,other13168.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg11,other13168.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg12,other13168.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.arg13,other13168.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13167__$1.__extmap,other13168.__extmap)));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13165){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13191 = cljs.core.keyword_identical_QMARK_;
var expr__13192 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13194 = cljs.core.cst$kw$fn;
var G__13195 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13194,G__13195) : pred__13191.call(null,G__13194,G__13195));
})())){
return (new com.rpl.specter.impl.LateFn14(G__13165,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13196 = cljs.core.cst$kw$arg0;
var G__13197 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13196,G__13197) : pred__13191.call(null,G__13196,G__13197));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__13165,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13198 = cljs.core.cst$kw$arg1;
var G__13199 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13198,G__13199) : pred__13191.call(null,G__13198,G__13199));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__13165,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13200 = cljs.core.cst$kw$arg2;
var G__13201 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13200,G__13201) : pred__13191.call(null,G__13200,G__13201));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__13165,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13202 = cljs.core.cst$kw$arg3;
var G__13203 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13202,G__13203) : pred__13191.call(null,G__13202,G__13203));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13165,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13204 = cljs.core.cst$kw$arg4;
var G__13205 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13204,G__13205) : pred__13191.call(null,G__13204,G__13205));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13165,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13206 = cljs.core.cst$kw$arg5;
var G__13207 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13206,G__13207) : pred__13191.call(null,G__13206,G__13207));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13165,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13208 = cljs.core.cst$kw$arg6;
var G__13209 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13208,G__13209) : pred__13191.call(null,G__13208,G__13209));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13165,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13210 = cljs.core.cst$kw$arg7;
var G__13211 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13210,G__13211) : pred__13191.call(null,G__13210,G__13211));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13165,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13212 = cljs.core.cst$kw$arg8;
var G__13213 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13212,G__13213) : pred__13191.call(null,G__13212,G__13213));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13165,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13214 = cljs.core.cst$kw$arg9;
var G__13215 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13214,G__13215) : pred__13191.call(null,G__13214,G__13215));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13165,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13216 = cljs.core.cst$kw$arg10;
var G__13217 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13216,G__13217) : pred__13191.call(null,G__13216,G__13217));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13165,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13218 = cljs.core.cst$kw$arg11;
var G__13219 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13218,G__13219) : pred__13191.call(null,G__13218,G__13219));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13165,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13220 = cljs.core.cst$kw$arg12;
var G__13221 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13220,G__13221) : pred__13191.call(null,G__13220,G__13221));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13165,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13222 = cljs.core.cst$kw$arg13;
var G__13223 = expr__13192;
return (pred__13191.cljs$core$IFn$_invoke$arity$2 ? pred__13191.cljs$core$IFn$_invoke$arity$2(G__13222,G__13223) : pred__13191.call(null,G__13222,G__13223));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13165,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13165),null));
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

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13165){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13165,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13], null);
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn14",null,(1),null));
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn14");
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
com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__13169){
var extmap__4419__auto__ = (function (){var G__13224 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13169,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13], 0));
if(cljs.core.record_QMARK_(G__13169)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13224);
} else {
return G__13224;
}
})();
return (new com.rpl.specter.impl.LateFn14(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__13169),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__13169),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13226,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13230 = k13226;
var G__13230__$1 = (((G__13230 instanceof cljs.core.Keyword))?G__13230.fqn:null);
switch (G__13230__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13226,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13231){
var vec__13232 = p__13231;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13232,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13232,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12635){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13236 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12635);
var G__13237 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12635);
var G__13238 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12635);
var G__13239 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12635);
var G__13240 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12635);
var G__13241 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12635);
var G__13242 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12635);
var G__13243 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12635);
var G__13244 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12635);
var G__13245 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12635);
var G__13246 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12635);
var G__13247 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12635);
var G__13248 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12635);
var G__13249 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12635);
var G__13250 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12635);
var fexpr__13235 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12635);
return (fexpr__13235.cljs$core$IFn$_invoke$arity$15 ? fexpr__13235.cljs$core$IFn$_invoke$arity$15(G__13236,G__13237,G__13238,G__13239,G__13240,G__13241,G__13242,G__13243,G__13244,G__13245,G__13246,G__13247,G__13248,G__13249,G__13250) : fexpr__13235.call(null,G__13236,G__13237,G__13238,G__13239,G__13240,G__13241,G__13242,G__13243,G__13244,G__13245,G__13246,G__13247,G__13248,G__13249,G__13250));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13225){
var self__ = this;
var G__13225__$1 = this;
return (new cljs.core.RecordIter((0),G__13225__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13251 = (function (coll__4377__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13251(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13227,other13228){
var self__ = this;
var this13227__$1 = this;
return (((!((other13228 == null)))) && ((this13227__$1.constructor === other13228.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.fn,other13228.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg0,other13228.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg1,other13228.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg2,other13228.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg3,other13228.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg4,other13228.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg5,other13228.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg6,other13228.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg7,other13228.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg8,other13228.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg9,other13228.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg10,other13228.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg11,other13228.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg12,other13228.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg13,other13228.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.arg14,other13228.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13227__$1.__extmap,other13228.__extmap)));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13225){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13252 = cljs.core.keyword_identical_QMARK_;
var expr__13253 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13255 = cljs.core.cst$kw$fn;
var G__13256 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13255,G__13256) : pred__13252.call(null,G__13255,G__13256));
})())){
return (new com.rpl.specter.impl.LateFn15(G__13225,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13257 = cljs.core.cst$kw$arg0;
var G__13258 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13257,G__13258) : pred__13252.call(null,G__13257,G__13258));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__13225,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13259 = cljs.core.cst$kw$arg1;
var G__13260 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13259,G__13260) : pred__13252.call(null,G__13259,G__13260));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__13225,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13261 = cljs.core.cst$kw$arg2;
var G__13262 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13261,G__13262) : pred__13252.call(null,G__13261,G__13262));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__13225,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13263 = cljs.core.cst$kw$arg3;
var G__13264 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13263,G__13264) : pred__13252.call(null,G__13263,G__13264));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13225,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13265 = cljs.core.cst$kw$arg4;
var G__13266 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13265,G__13266) : pred__13252.call(null,G__13265,G__13266));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13225,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13267 = cljs.core.cst$kw$arg5;
var G__13268 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13267,G__13268) : pred__13252.call(null,G__13267,G__13268));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13225,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13269 = cljs.core.cst$kw$arg6;
var G__13270 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13269,G__13270) : pred__13252.call(null,G__13269,G__13270));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13225,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13271 = cljs.core.cst$kw$arg7;
var G__13272 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13271,G__13272) : pred__13252.call(null,G__13271,G__13272));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13225,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13273 = cljs.core.cst$kw$arg8;
var G__13274 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13273,G__13274) : pred__13252.call(null,G__13273,G__13274));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13225,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13275 = cljs.core.cst$kw$arg9;
var G__13276 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13275,G__13276) : pred__13252.call(null,G__13275,G__13276));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13225,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13277 = cljs.core.cst$kw$arg10;
var G__13278 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13277,G__13278) : pred__13252.call(null,G__13277,G__13278));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13225,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13279 = cljs.core.cst$kw$arg11;
var G__13280 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13279,G__13280) : pred__13252.call(null,G__13279,G__13280));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13225,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13281 = cljs.core.cst$kw$arg12;
var G__13282 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13281,G__13282) : pred__13252.call(null,G__13281,G__13282));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13225,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13283 = cljs.core.cst$kw$arg13;
var G__13284 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13283,G__13284) : pred__13252.call(null,G__13283,G__13284));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13225,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13285 = cljs.core.cst$kw$arg14;
var G__13286 = expr__13253;
return (pred__13252.cljs$core$IFn$_invoke$arity$2 ? pred__13252.cljs$core$IFn$_invoke$arity$2(G__13285,G__13286) : pred__13252.call(null,G__13285,G__13286));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13225,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13225),null));
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

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13225){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13225,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14], null);
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn15",null,(1),null));
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn15");
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
com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__13229){
var extmap__4419__auto__ = (function (){var G__13287 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13229,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14], 0));
if(cljs.core.record_QMARK_(G__13229)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13287);
} else {
return G__13287;
}
})();
return (new com.rpl.specter.impl.LateFn15(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__13229),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__13229),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13289,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13293 = k13289;
var G__13293__$1 = (((G__13293 instanceof cljs.core.Keyword))?G__13293.fqn:null);
switch (G__13293__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13289,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13294){
var vec__13295 = p__13294;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13295,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13295,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12636){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13299 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12636);
var G__13300 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12636);
var G__13301 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12636);
var G__13302 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12636);
var G__13303 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12636);
var G__13304 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12636);
var G__13305 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12636);
var G__13306 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12636);
var G__13307 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12636);
var G__13308 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12636);
var G__13309 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12636);
var G__13310 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12636);
var G__13311 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12636);
var G__13312 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12636);
var G__13313 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12636);
var G__13314 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params12636);
var fexpr__13298 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12636);
return (fexpr__13298.cljs$core$IFn$_invoke$arity$16 ? fexpr__13298.cljs$core$IFn$_invoke$arity$16(G__13299,G__13300,G__13301,G__13302,G__13303,G__13304,G__13305,G__13306,G__13307,G__13308,G__13309,G__13310,G__13311,G__13312,G__13313,G__13314) : fexpr__13298.call(null,G__13299,G__13300,G__13301,G__13302,G__13303,G__13304,G__13305,G__13306,G__13307,G__13308,G__13309,G__13310,G__13311,G__13312,G__13313,G__13314));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13288){
var self__ = this;
var G__13288__$1 = this;
return (new cljs.core.RecordIter((0),G__13288__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13315 = (function (coll__4377__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13315(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13290,other13291){
var self__ = this;
var this13290__$1 = this;
return (((!((other13291 == null)))) && ((this13290__$1.constructor === other13291.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.fn,other13291.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg0,other13291.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg1,other13291.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg2,other13291.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg3,other13291.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg4,other13291.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg5,other13291.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg6,other13291.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg7,other13291.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg8,other13291.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg9,other13291.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg10,other13291.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg11,other13291.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg12,other13291.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg13,other13291.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg14,other13291.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.arg15,other13291.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13290__$1.__extmap,other13291.__extmap)));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13288){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13316 = cljs.core.keyword_identical_QMARK_;
var expr__13317 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13319 = cljs.core.cst$kw$fn;
var G__13320 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13319,G__13320) : pred__13316.call(null,G__13319,G__13320));
})())){
return (new com.rpl.specter.impl.LateFn16(G__13288,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13321 = cljs.core.cst$kw$arg0;
var G__13322 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13321,G__13322) : pred__13316.call(null,G__13321,G__13322));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__13288,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13323 = cljs.core.cst$kw$arg1;
var G__13324 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13323,G__13324) : pred__13316.call(null,G__13323,G__13324));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__13288,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13325 = cljs.core.cst$kw$arg2;
var G__13326 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13325,G__13326) : pred__13316.call(null,G__13325,G__13326));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__13288,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13327 = cljs.core.cst$kw$arg3;
var G__13328 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13327,G__13328) : pred__13316.call(null,G__13327,G__13328));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13288,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13329 = cljs.core.cst$kw$arg4;
var G__13330 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13329,G__13330) : pred__13316.call(null,G__13329,G__13330));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13288,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13331 = cljs.core.cst$kw$arg5;
var G__13332 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13331,G__13332) : pred__13316.call(null,G__13331,G__13332));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13288,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13333 = cljs.core.cst$kw$arg6;
var G__13334 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13333,G__13334) : pred__13316.call(null,G__13333,G__13334));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13288,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13335 = cljs.core.cst$kw$arg7;
var G__13336 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13335,G__13336) : pred__13316.call(null,G__13335,G__13336));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13288,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13337 = cljs.core.cst$kw$arg8;
var G__13338 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13337,G__13338) : pred__13316.call(null,G__13337,G__13338));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13288,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13339 = cljs.core.cst$kw$arg9;
var G__13340 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13339,G__13340) : pred__13316.call(null,G__13339,G__13340));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13288,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13341 = cljs.core.cst$kw$arg10;
var G__13342 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13341,G__13342) : pred__13316.call(null,G__13341,G__13342));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13288,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13343 = cljs.core.cst$kw$arg11;
var G__13344 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13343,G__13344) : pred__13316.call(null,G__13343,G__13344));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13288,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13345 = cljs.core.cst$kw$arg12;
var G__13346 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13345,G__13346) : pred__13316.call(null,G__13345,G__13346));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13288,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13347 = cljs.core.cst$kw$arg13;
var G__13348 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13347,G__13348) : pred__13316.call(null,G__13347,G__13348));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13288,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13349 = cljs.core.cst$kw$arg14;
var G__13350 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13349,G__13350) : pred__13316.call(null,G__13349,G__13350));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13288,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13351 = cljs.core.cst$kw$arg15;
var G__13352 = expr__13317;
return (pred__13316.cljs$core$IFn$_invoke$arity$2 ? pred__13316.cljs$core$IFn$_invoke$arity$2(G__13351,G__13352) : pred__13316.call(null,G__13351,G__13352));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13288,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13288),null));
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

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg15,self__.arg15,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13288){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__13288,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15], null);
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn16",null,(1),null));
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn16");
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
com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__13292){
var extmap__4419__auto__ = (function (){var G__13353 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13292,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15], 0));
if(cljs.core.record_QMARK_(G__13292)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13353);
} else {
return G__13353;
}
})();
return (new com.rpl.specter.impl.LateFn16(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__13292),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__13292),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13355,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13359 = k13355;
var G__13359__$1 = (((G__13359 instanceof cljs.core.Keyword))?G__13359.fqn:null);
switch (G__13359__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13355,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13360){
var vec__13361 = p__13360;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13361,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13361,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12637){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13365 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12637);
var G__13366 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12637);
var G__13367 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12637);
var G__13368 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12637);
var G__13369 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12637);
var G__13370 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12637);
var G__13371 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12637);
var G__13372 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12637);
var G__13373 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12637);
var G__13374 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12637);
var G__13375 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12637);
var G__13376 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12637);
var G__13377 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12637);
var G__13378 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12637);
var G__13379 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12637);
var G__13380 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params12637);
var G__13381 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params12637);
var fexpr__13364 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12637);
return (fexpr__13364.cljs$core$IFn$_invoke$arity$17 ? fexpr__13364.cljs$core$IFn$_invoke$arity$17(G__13365,G__13366,G__13367,G__13368,G__13369,G__13370,G__13371,G__13372,G__13373,G__13374,G__13375,G__13376,G__13377,G__13378,G__13379,G__13380,G__13381) : fexpr__13364.call(null,G__13365,G__13366,G__13367,G__13368,G__13369,G__13370,G__13371,G__13372,G__13373,G__13374,G__13375,G__13376,G__13377,G__13378,G__13379,G__13380,G__13381));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13354){
var self__ = this;
var G__13354__$1 = this;
return (new cljs.core.RecordIter((0),G__13354__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13382 = (function (coll__4377__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13382(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13356,other13357){
var self__ = this;
var this13356__$1 = this;
return (((!((other13357 == null)))) && ((this13356__$1.constructor === other13357.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.fn,other13357.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg0,other13357.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg1,other13357.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg2,other13357.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg3,other13357.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg4,other13357.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg5,other13357.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg6,other13357.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg7,other13357.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg8,other13357.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg9,other13357.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg10,other13357.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg11,other13357.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg12,other13357.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg13,other13357.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg14,other13357.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg15,other13357.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.arg16,other13357.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13356__$1.__extmap,other13357.__extmap)));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13354){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13383 = cljs.core.keyword_identical_QMARK_;
var expr__13384 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13386 = cljs.core.cst$kw$fn;
var G__13387 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13386,G__13387) : pred__13383.call(null,G__13386,G__13387));
})())){
return (new com.rpl.specter.impl.LateFn17(G__13354,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13388 = cljs.core.cst$kw$arg0;
var G__13389 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13388,G__13389) : pred__13383.call(null,G__13388,G__13389));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__13354,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13390 = cljs.core.cst$kw$arg1;
var G__13391 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13390,G__13391) : pred__13383.call(null,G__13390,G__13391));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__13354,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13392 = cljs.core.cst$kw$arg2;
var G__13393 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13392,G__13393) : pred__13383.call(null,G__13392,G__13393));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__13354,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13394 = cljs.core.cst$kw$arg3;
var G__13395 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13394,G__13395) : pred__13383.call(null,G__13394,G__13395));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13354,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13396 = cljs.core.cst$kw$arg4;
var G__13397 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13396,G__13397) : pred__13383.call(null,G__13396,G__13397));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13354,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13398 = cljs.core.cst$kw$arg5;
var G__13399 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13398,G__13399) : pred__13383.call(null,G__13398,G__13399));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13354,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13400 = cljs.core.cst$kw$arg6;
var G__13401 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13400,G__13401) : pred__13383.call(null,G__13400,G__13401));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13354,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13402 = cljs.core.cst$kw$arg7;
var G__13403 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13402,G__13403) : pred__13383.call(null,G__13402,G__13403));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13354,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13404 = cljs.core.cst$kw$arg8;
var G__13405 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13404,G__13405) : pred__13383.call(null,G__13404,G__13405));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13354,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13406 = cljs.core.cst$kw$arg9;
var G__13407 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13406,G__13407) : pred__13383.call(null,G__13406,G__13407));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13354,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13408 = cljs.core.cst$kw$arg10;
var G__13409 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13408,G__13409) : pred__13383.call(null,G__13408,G__13409));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13354,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13410 = cljs.core.cst$kw$arg11;
var G__13411 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13410,G__13411) : pred__13383.call(null,G__13410,G__13411));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13354,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13412 = cljs.core.cst$kw$arg12;
var G__13413 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13412,G__13413) : pred__13383.call(null,G__13412,G__13413));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13354,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13414 = cljs.core.cst$kw$arg13;
var G__13415 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13414,G__13415) : pred__13383.call(null,G__13414,G__13415));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13354,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13416 = cljs.core.cst$kw$arg14;
var G__13417 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13416,G__13417) : pred__13383.call(null,G__13416,G__13417));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13354,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13418 = cljs.core.cst$kw$arg15;
var G__13419 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13418,G__13419) : pred__13383.call(null,G__13418,G__13419));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13354,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13420 = cljs.core.cst$kw$arg16;
var G__13421 = expr__13384;
return (pred__13383.cljs$core$IFn$_invoke$arity$2 ? pred__13383.cljs$core$IFn$_invoke$arity$2(G__13420,G__13421) : pred__13383.call(null,G__13420,G__13421));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__13354,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13354),null));
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

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg15,self__.arg15,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg16,self__.arg16,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13354){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__13354,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16], null);
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn17",null,(1),null));
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn17");
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
com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__13358){
var extmap__4419__auto__ = (function (){var G__13422 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13358,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16], 0));
if(cljs.core.record_QMARK_(G__13358)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13422);
} else {
return G__13422;
}
})();
return (new com.rpl.specter.impl.LateFn17(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__13358),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__13358),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13424,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13428 = k13424;
var G__13428__$1 = (((G__13428 instanceof cljs.core.Keyword))?G__13428.fqn:null);
switch (G__13428__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13424,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13429){
var vec__13430 = p__13429;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13430,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13430,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12638){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13434 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12638);
var G__13435 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12638);
var G__13436 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12638);
var G__13437 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12638);
var G__13438 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12638);
var G__13439 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12638);
var G__13440 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12638);
var G__13441 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12638);
var G__13442 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12638);
var G__13443 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12638);
var G__13444 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12638);
var G__13445 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12638);
var G__13446 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12638);
var G__13447 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12638);
var G__13448 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12638);
var G__13449 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params12638);
var G__13450 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params12638);
var G__13451 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params12638);
var fexpr__13433 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12638);
return (fexpr__13433.cljs$core$IFn$_invoke$arity$18 ? fexpr__13433.cljs$core$IFn$_invoke$arity$18(G__13434,G__13435,G__13436,G__13437,G__13438,G__13439,G__13440,G__13441,G__13442,G__13443,G__13444,G__13445,G__13446,G__13447,G__13448,G__13449,G__13450,G__13451) : fexpr__13433.call(null,G__13434,G__13435,G__13436,G__13437,G__13438,G__13439,G__13440,G__13441,G__13442,G__13443,G__13444,G__13445,G__13446,G__13447,G__13448,G__13449,G__13450,G__13451));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg17,self__.arg17],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13423){
var self__ = this;
var G__13423__$1 = this;
return (new cljs.core.RecordIter((0),G__13423__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13452 = (function (coll__4377__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13452(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13425,other13426){
var self__ = this;
var this13425__$1 = this;
return (((!((other13426 == null)))) && ((this13425__$1.constructor === other13426.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.fn,other13426.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg0,other13426.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg1,other13426.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg2,other13426.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg3,other13426.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg4,other13426.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg5,other13426.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg6,other13426.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg7,other13426.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg8,other13426.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg9,other13426.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg10,other13426.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg11,other13426.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg12,other13426.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg13,other13426.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg14,other13426.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg15,other13426.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg16,other13426.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.arg17,other13426.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13425__$1.__extmap,other13426.__extmap)));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg17,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13423){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13453 = cljs.core.keyword_identical_QMARK_;
var expr__13454 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13456 = cljs.core.cst$kw$fn;
var G__13457 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13456,G__13457) : pred__13453.call(null,G__13456,G__13457));
})())){
return (new com.rpl.specter.impl.LateFn18(G__13423,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13458 = cljs.core.cst$kw$arg0;
var G__13459 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13458,G__13459) : pred__13453.call(null,G__13458,G__13459));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__13423,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13460 = cljs.core.cst$kw$arg1;
var G__13461 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13460,G__13461) : pred__13453.call(null,G__13460,G__13461));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__13423,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13462 = cljs.core.cst$kw$arg2;
var G__13463 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13462,G__13463) : pred__13453.call(null,G__13462,G__13463));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__13423,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13464 = cljs.core.cst$kw$arg3;
var G__13465 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13464,G__13465) : pred__13453.call(null,G__13464,G__13465));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13423,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13466 = cljs.core.cst$kw$arg4;
var G__13467 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13466,G__13467) : pred__13453.call(null,G__13466,G__13467));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13423,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13468 = cljs.core.cst$kw$arg5;
var G__13469 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13468,G__13469) : pred__13453.call(null,G__13468,G__13469));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13423,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13470 = cljs.core.cst$kw$arg6;
var G__13471 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13470,G__13471) : pred__13453.call(null,G__13470,G__13471));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13423,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13472 = cljs.core.cst$kw$arg7;
var G__13473 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13472,G__13473) : pred__13453.call(null,G__13472,G__13473));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13423,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13474 = cljs.core.cst$kw$arg8;
var G__13475 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13474,G__13475) : pred__13453.call(null,G__13474,G__13475));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13423,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13476 = cljs.core.cst$kw$arg9;
var G__13477 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13476,G__13477) : pred__13453.call(null,G__13476,G__13477));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13423,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13478 = cljs.core.cst$kw$arg10;
var G__13479 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13478,G__13479) : pred__13453.call(null,G__13478,G__13479));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13423,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13480 = cljs.core.cst$kw$arg11;
var G__13481 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13480,G__13481) : pred__13453.call(null,G__13480,G__13481));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13423,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13482 = cljs.core.cst$kw$arg12;
var G__13483 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13482,G__13483) : pred__13453.call(null,G__13482,G__13483));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13423,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13484 = cljs.core.cst$kw$arg13;
var G__13485 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13484,G__13485) : pred__13453.call(null,G__13484,G__13485));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13423,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13486 = cljs.core.cst$kw$arg14;
var G__13487 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13486,G__13487) : pred__13453.call(null,G__13486,G__13487));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13423,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13488 = cljs.core.cst$kw$arg15;
var G__13489 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13488,G__13489) : pred__13453.call(null,G__13488,G__13489));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13423,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13490 = cljs.core.cst$kw$arg16;
var G__13491 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13490,G__13491) : pred__13453.call(null,G__13490,G__13491));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__13423,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13492 = cljs.core.cst$kw$arg17;
var G__13493 = expr__13454;
return (pred__13453.cljs$core$IFn$_invoke$arity$2 ? pred__13453.cljs$core$IFn$_invoke$arity$2(G__13492,G__13493) : pred__13453.call(null,G__13492,G__13493));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__13423,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13423),null));
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

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg15,self__.arg15,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg16,self__.arg16,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg17,self__.arg17,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13423){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__13423,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16,cljs.core.cst$sym$arg17], null);
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn18",null,(1),null));
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn18");
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
com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__13427){
var extmap__4419__auto__ = (function (){var G__13494 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13427,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17], 0));
if(cljs.core.record_QMARK_(G__13427)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13494);
} else {
return G__13494;
}
})();
return (new com.rpl.specter.impl.LateFn18(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__13427),cljs.core.cst$kw$arg17.cljs$core$IFn$_invoke$arity$1(G__13427),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k13496,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__13500 = k13496;
var G__13500__$1 = (((G__13500 instanceof cljs.core.Keyword))?G__13500.fqn:null);
switch (G__13500__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13496,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__13501){
var vec__13502 = p__13501;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13502,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13502,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__10980__auto__,dynamic_params12639){
var self__ = this;
var this__10980__auto____$1 = this;
var G__13506 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params12639);
var G__13507 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params12639);
var G__13508 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params12639);
var G__13509 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params12639);
var G__13510 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params12639);
var G__13511 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params12639);
var G__13512 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params12639);
var G__13513 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params12639);
var G__13514 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params12639);
var G__13515 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params12639);
var G__13516 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params12639);
var G__13517 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params12639);
var G__13518 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params12639);
var G__13519 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params12639);
var G__13520 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params12639);
var G__13521 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params12639);
var G__13522 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params12639);
var G__13523 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params12639);
var G__13524 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params12639);
var fexpr__13505 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params12639);
return (fexpr__13505.cljs$core$IFn$_invoke$arity$19 ? fexpr__13505.cljs$core$IFn$_invoke$arity$19(G__13506,G__13507,G__13508,G__13509,G__13510,G__13511,G__13512,G__13513,G__13514,G__13515,G__13516,G__13517,G__13518,G__13519,G__13520,G__13521,G__13522,G__13523,G__13524) : fexpr__13505.call(null,G__13506,G__13507,G__13508,G__13509,G__13510,G__13511,G__13512,G__13513,G__13514,G__13515,G__13516,G__13517,G__13518,G__13519,G__13520,G__13521,G__13522,G__13523,G__13524));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg17,self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg18,self__.arg18],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13495){
var self__ = this;
var G__13495__$1 = this;
return (new cljs.core.RecordIter((0),G__13495__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17,cljs.core.cst$kw$arg18], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__13525 = (function (coll__4377__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__13525(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13497,other13498){
var self__ = this;
var this13497__$1 = this;
return (((!((other13498 == null)))) && ((this13497__$1.constructor === other13498.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.fn,other13498.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg0,other13498.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg1,other13498.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg2,other13498.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg3,other13498.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg4,other13498.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg5,other13498.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg6,other13498.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg7,other13498.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg8,other13498.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg9,other13498.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg10,other13498.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg11,other13498.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg12,other13498.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg13,other13498.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg14,other13498.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg15,other13498.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg16,other13498.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg17,other13498.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.arg18,other13498.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13497__$1.__extmap,other13498.__extmap)));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg17,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg18,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__13495){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__13526 = cljs.core.keyword_identical_QMARK_;
var expr__13527 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__13529 = cljs.core.cst$kw$fn;
var G__13530 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13529,G__13530) : pred__13526.call(null,G__13529,G__13530));
})())){
return (new com.rpl.specter.impl.LateFn19(G__13495,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13531 = cljs.core.cst$kw$arg0;
var G__13532 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13531,G__13532) : pred__13526.call(null,G__13531,G__13532));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__13495,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13533 = cljs.core.cst$kw$arg1;
var G__13534 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13533,G__13534) : pred__13526.call(null,G__13533,G__13534));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__13495,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13535 = cljs.core.cst$kw$arg2;
var G__13536 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13535,G__13536) : pred__13526.call(null,G__13535,G__13536));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__13495,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13537 = cljs.core.cst$kw$arg3;
var G__13538 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13537,G__13538) : pred__13526.call(null,G__13537,G__13538));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__13495,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13539 = cljs.core.cst$kw$arg4;
var G__13540 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13539,G__13540) : pred__13526.call(null,G__13539,G__13540));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__13495,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13541 = cljs.core.cst$kw$arg5;
var G__13542 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13541,G__13542) : pred__13526.call(null,G__13541,G__13542));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__13495,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13543 = cljs.core.cst$kw$arg6;
var G__13544 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13543,G__13544) : pred__13526.call(null,G__13543,G__13544));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__13495,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13545 = cljs.core.cst$kw$arg7;
var G__13546 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13545,G__13546) : pred__13526.call(null,G__13545,G__13546));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__13495,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13547 = cljs.core.cst$kw$arg8;
var G__13548 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13547,G__13548) : pred__13526.call(null,G__13547,G__13548));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__13495,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13549 = cljs.core.cst$kw$arg9;
var G__13550 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13549,G__13550) : pred__13526.call(null,G__13549,G__13550));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__13495,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13551 = cljs.core.cst$kw$arg10;
var G__13552 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13551,G__13552) : pred__13526.call(null,G__13551,G__13552));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__13495,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13553 = cljs.core.cst$kw$arg11;
var G__13554 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13553,G__13554) : pred__13526.call(null,G__13553,G__13554));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__13495,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13555 = cljs.core.cst$kw$arg12;
var G__13556 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13555,G__13556) : pred__13526.call(null,G__13555,G__13556));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__13495,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13557 = cljs.core.cst$kw$arg13;
var G__13558 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13557,G__13558) : pred__13526.call(null,G__13557,G__13558));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__13495,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13559 = cljs.core.cst$kw$arg14;
var G__13560 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13559,G__13560) : pred__13526.call(null,G__13559,G__13560));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__13495,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13561 = cljs.core.cst$kw$arg15;
var G__13562 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13561,G__13562) : pred__13526.call(null,G__13561,G__13562));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__13495,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13563 = cljs.core.cst$kw$arg16;
var G__13564 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13563,G__13564) : pred__13526.call(null,G__13563,G__13564));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__13495,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13565 = cljs.core.cst$kw$arg17;
var G__13566 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13565,G__13566) : pred__13526.call(null,G__13565,G__13566));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__13495,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13567 = cljs.core.cst$kw$arg18;
var G__13568 = expr__13527;
return (pred__13526.cljs$core$IFn$_invoke$arity$2 ? pred__13526.cljs$core$IFn$_invoke$arity$2(G__13567,G__13568) : pred__13526.call(null,G__13567,G__13568));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__13495,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__13495),null));
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

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg0,self__.arg0,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg1,self__.arg1,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg2,self__.arg2,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg3,self__.arg3,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg4,self__.arg4,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg5,self__.arg5,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg6,self__.arg6,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg7,self__.arg7,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg8,self__.arg8,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg9,self__.arg9,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg10,self__.arg10,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg11,self__.arg11,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg12,self__.arg12,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg13,self__.arg13,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg14,self__.arg14,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg15,self__.arg15,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg16,self__.arg16,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg17,self__.arg17,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$arg18,self__.arg18,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__13495){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__13495,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16,cljs.core.cst$sym$arg17,cljs.core.cst$sym$arg18], null);
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn19",null,(1),null));
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn19");
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
com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__13499){
var extmap__4419__auto__ = (function (){var G__13569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13499,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17,cljs.core.cst$kw$arg18], 0));
if(cljs.core.record_QMARK_(G__13499)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13569);
} else {
return G__13569;
}
})();
return (new com.rpl.specter.impl.LateFn19(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg17.cljs$core$IFn$_invoke$arity$1(G__13499),cljs.core.cst$kw$arg18.cljs$core$IFn$_invoke$arity$1(G__13499),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn13570,args13571){
var G__13572 = cljs.core.count(args13571);
switch (G__13572) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn13570);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn13570,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args13571,(17)));

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
var vec__13597 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13597,(0),null);
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
var op = (function (){var G__13601 = o.op;
var G__13602 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__13601,G__13602) : com.rpl.specter.impl.resolve_arg_code.call(null,G__13601,G__13602));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13600_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__13600_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__13600_SHARP_,possible_params));
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
var G__13603 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__13604 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__13603,G__13604) : com.rpl.specter.impl.resolve_arg_code.call(null,G__13603,G__13604));
}

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = o.path;
if(cljs.core.sequential_QMARK_(path)){
var resolved = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13605_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__13605_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__13605_SHARP_,possible_params));
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
return com.rpl.specter.impl.update_cell_BANG_(used_locals_cell,(function (p1__13606_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13606_SHARP_,e);
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
var args__4742__auto__ = [];
var len__4736__auto___13619 = arguments.length;
var i__4737__auto___13620 = (0);
while(true){
if((i__4737__auto___13620 < len__4736__auto___13619)){
args__4742__auto__.push((arguments[i__4737__auto___13620]));

var G__13621 = (i__4737__auto___13620 + (1));
i__4737__auto___13620 = G__13621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__13611){
var map__13612 = p__13611;
var map__13612__$1 = (((((!((map__13612 == null))))?(((((map__13612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13612):map__13612);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13612__$1,cljs.core.cst$kw$merge_DASH_fn,cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,(function() { 
var G__13622__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__13614 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13614,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13614,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__13617 = com.rpl.specter.impl.get_cell(state);
var G__13618 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__13617,G__13618) : merge_fn.call(null,G__13617,G__13618));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__13622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13623__i = 0, G__13623__a = new Array(arguments.length -  0);
while (G__13623__i < G__13623__a.length) {G__13623__a[G__13623__i] = arguments[G__13623__i + 0]; ++G__13623__i;}
  args = new cljs.core.IndexedSeq(G__13623__a,0,null);
} 
return G__13622__delegate.call(this,args);};
G__13622.cljs$lang$maxFixedArity = 0;
G__13622.cljs$lang$applyTo = (function (arglist__13624){
var args = cljs.core.seq(arglist__13624);
return G__13622__delegate(args);
});
G__13622.cljs$core$IFn$_invoke$arity$variadic = G__13622__delegate;
return G__13622;
})()
,structure),com.rpl.specter.impl.get_cell(state)], null);
}));

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq13607){
var G__13608 = cljs.core.first(seq13607);
var seq13607__$1 = cljs.core.next(seq13607);
var G__13609 = cljs.core.first(seq13607__$1);
var seq13607__$2 = cljs.core.next(seq13607__$1);
var G__13610 = cljs.core.first(seq13607__$2);
var seq13607__$3 = cljs.core.next(seq13607__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13608,G__13609,G__13610,seq13607__$3);
}));

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13626 = arguments.length;
var i__4737__auto___13627 = (0);
while(true){
if((i__4737__auto___13627 < len__4736__auto___13626)){
args__4742__auto__.push((arguments[i__4737__auto___13627]));

var G__13628 = (i__4737__auto___13627 + (1));
i__4737__auto___13627 = G__13628;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav], 0));
}));

(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq13625){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13625));
}));

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});
