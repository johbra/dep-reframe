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
var G__15156__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15157__i = 0, G__15157__a = new Array(arguments.length -  0);
while (G__15157__i < G__15157__a.length) {G__15157__a[G__15157__i] = arguments[G__15157__i + 0]; ++G__15157__i;}
  args = new cljs.core.IndexedSeq(G__15157__a,0,null);
} 
return G__15156__delegate.call(this,args);};
G__15156.cljs$lang$maxFixedArity = 0;
G__15156.cljs$lang$applyTo = (function (arglist__15158){
var args = cljs.core.seq(arglist__15158);
return G__15156__delegate(args);
});
G__15156.cljs$core$IFn$_invoke$arity$variadic = G__15156__delegate;
return G__15156;
})()
);

(o.error = (function() { 
var G__15159__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15160__i = 0, G__15160__a = new Array(arguments.length -  0);
while (G__15160__i < G__15160__a.length) {G__15160__a[G__15160__i] = arguments[G__15160__i + 0]; ++G__15160__i;}
  args = new cljs.core.IndexedSeq(G__15160__a,0,null);
} 
return G__15159__delegate.call(this,args);};
G__15159.cljs$lang$maxFixedArity = 0;
G__15159.cljs$lang$applyTo = (function (arglist__15161){
var args = cljs.core.seq(arglist__15161);
return G__15159__delegate(args);
});
G__15159.cljs$core$IFn$_invoke$arity$variadic = G__15159__delegate;
return G__15159;
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
