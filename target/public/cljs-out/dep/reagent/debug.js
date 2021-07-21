// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
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
var G__12965__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12966__i = 0, G__12966__a = new Array(arguments.length -  0);
while (G__12966__i < G__12966__a.length) {G__12966__a[G__12966__i] = arguments[G__12966__i + 0]; ++G__12966__i;}
  args = new cljs.core.IndexedSeq(G__12966__a,0,null);
} 
return G__12965__delegate.call(this,args);};
G__12965.cljs$lang$maxFixedArity = 0;
G__12965.cljs$lang$applyTo = (function (arglist__12967){
var args = cljs.core.seq(arglist__12967);
return G__12965__delegate(args);
});
G__12965.cljs$core$IFn$_invoke$arity$variadic = G__12965__delegate;
return G__12965;
})()
);

(o.error = (function() { 
var G__12968__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12969__i = 0, G__12969__a = new Array(arguments.length -  0);
while (G__12969__i < G__12969__a.length) {G__12969__a[G__12969__i] = arguments[G__12969__i + 0]; ++G__12969__i;}
  args = new cljs.core.IndexedSeq(G__12969__a,0,null);
} 
return G__12968__delegate.call(this,args);};
G__12968.cljs$lang$maxFixedArity = 0;
G__12968.cljs$lang$applyTo = (function (arglist__12970){
var args = cljs.core.seq(arglist__12970);
return G__12968__delegate(args);
});
G__12968.cljs$core$IFn$_invoke$arity$variadic = G__12968__delegate;
return G__12968;
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
