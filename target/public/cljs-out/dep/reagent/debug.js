// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__14757__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14758__i = 0, G__14758__a = new Array(arguments.length -  0);
while (G__14758__i < G__14758__a.length) {G__14758__a[G__14758__i] = arguments[G__14758__i + 0]; ++G__14758__i;}
  args = new cljs.core.IndexedSeq(G__14758__a,0,null);
} 
return G__14757__delegate.call(this,args);};
G__14757.cljs$lang$maxFixedArity = 0;
G__14757.cljs$lang$applyTo = (function (arglist__14759){
var args = cljs.core.seq(arglist__14759);
return G__14757__delegate(args);
});
G__14757.cljs$core$IFn$_invoke$arity$variadic = G__14757__delegate;
return G__14757;
})()
);

(o.error = (function() { 
var G__14760__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14761__i = 0, G__14761__a = new Array(arguments.length -  0);
while (G__14761__i < G__14761__a.length) {G__14761__a[G__14761__i] = arguments[G__14761__i + 0]; ++G__14761__i;}
  args = new cljs.core.IndexedSeq(G__14761__a,0,null);
} 
return G__14760__delegate.call(this,args);};
G__14760.cljs$lang$maxFixedArity = 0;
G__14760.cljs$lang$applyTo = (function (arglist__14762){
var args = cljs.core.seq(arglist__14762);
return G__14760__delegate(args);
});
G__14760.cljs$core$IFn$_invoke$arity$variadic = G__14760__delegate;
return G__14760;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
