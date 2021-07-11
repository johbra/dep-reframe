// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12883__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12884__i = 0, G__12884__a = new Array(arguments.length -  0);
while (G__12884__i < G__12884__a.length) {G__12884__a[G__12884__i] = arguments[G__12884__i + 0]; ++G__12884__i;}
  args = new cljs.core.IndexedSeq(G__12884__a,0,null);
} 
return G__12883__delegate.call(this,args);};
G__12883.cljs$lang$maxFixedArity = 0;
G__12883.cljs$lang$applyTo = (function (arglist__12885){
var args = cljs.core.seq(arglist__12885);
return G__12883__delegate(args);
});
G__12883.cljs$core$IFn$_invoke$arity$variadic = G__12883__delegate;
return G__12883;
})()
);

(o.error = (function() { 
var G__12886__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12887__i = 0, G__12887__a = new Array(arguments.length -  0);
while (G__12887__i < G__12887__a.length) {G__12887__a[G__12887__i] = arguments[G__12887__i + 0]; ++G__12887__i;}
  args = new cljs.core.IndexedSeq(G__12887__a,0,null);
} 
return G__12886__delegate.call(this,args);};
G__12886.cljs$lang$maxFixedArity = 0;
G__12886.cljs$lang$applyTo = (function (arglist__12888){
var args = cljs.core.seq(arglist__12888);
return G__12886__delegate(args);
});
G__12886.cljs$core$IFn$_invoke$arity$variadic = G__12886__delegate;
return G__12886;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
