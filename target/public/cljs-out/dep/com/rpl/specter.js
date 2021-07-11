// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__15444__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__15444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15445__i = 0, G__15445__a = new Array(arguments.length -  0);
while (G__15445__i < G__15445__a.length) {G__15445__a[G__15445__i] = arguments[G__15445__i + 0]; ++G__15445__i;}
  args = new cljs.core.IndexedSeq(G__15445__a,0,null);
} 
return G__15444__delegate.call(this,args);};
G__15444.cljs$lang$maxFixedArity = 0;
G__15444.cljs$lang$applyTo = (function (arglist__15446){
var args = cljs.core.seq(arglist__15446);
return G__15444__delegate(args);
});
G__15444.cljs$core$IFn$_invoke$arity$variadic = G__15444__delegate;
return G__15444;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15463 = arguments.length;
var i__4737__auto___15464 = (0);
while(true){
if((i__4737__auto___15464 < len__4736__auto___15463)){
args__4742__auto__.push((arguments[i__4737__auto___15464]));

var G__15465 = (i__4737__auto___15464 + (1));
i__4737__auto___15464 = G__15465;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq15462){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15462));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__15466 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15467 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__15466,G__15467) : com.rpl.specter.compiled_select.call(null,G__15466,G__15467));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__15468 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15469 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__15468,G__15469) : com.rpl.specter.compiled_select_one.call(null,G__15468,G__15469));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__15470 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15471 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__15470,G__15471) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__15470,G__15471));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__15472 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15473 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__15472,G__15473) : com.rpl.specter.compiled_select_first.call(null,G__15472,G__15473));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__15474 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15475 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__15474,G__15475) : com.rpl.specter.compiled_select_any.call(null,G__15474,G__15475));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__15476 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15477 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__15476,G__15477) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__15476,G__15477));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__15478 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__15479 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__15478,G__15479) : com.rpl.specter.compiled_traverse.call(null,G__15478,G__15479));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__15480 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__15480) : com.rpl.specter.compiled_traverse_all.call(null,G__15480));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__15481 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15482 = transform_fn;
var G__15483 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__15481,G__15482,G__15483) : com.rpl.specter.compiled_transform.call(null,G__15481,G__15482,G__15483));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__15484 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15485 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__15484,G__15485) : com.rpl.specter.compiled_multi_transform.call(null,G__15484,G__15485));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__15486 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15487 = val;
var G__15488 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__15486,G__15487,G__15488) : com.rpl.specter.compiled_setval.call(null,G__15486,G__15487,G__15488));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15501 = arguments.length;
var i__4737__auto___15502 = (0);
while(true){
if((i__4737__auto___15502 < len__4736__auto___15501)){
args__4742__auto__.push((arguments[i__4737__auto___15502]));

var G__15503 = (i__4737__auto___15502 + (1));
i__4737__auto___15502 = G__15503;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__15493){
var map__15494 = p__15493;
var map__15494__$1 = (((((!((map__15494 == null))))?(((((map__15494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15494):map__15494);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15494__$1,cljs.core.cst$kw$merge_DASH_fn,cljs.core.concat);
var G__15496 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__15497 = transform_fn;
var G__15498 = structure;
var G__15499 = cljs.core.cst$kw$merge_DASH_fn;
var G__15500 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__15496,G__15497,G__15498,G__15499,G__15500) : com.rpl.specter.compiled_replace_in.call(null,G__15496,G__15497,G__15498,G__15499,G__15500));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq15489){
var G__15490 = cljs.core.first(seq15489);
var seq15489__$1 = cljs.core.next(seq15489);
var G__15491 = cljs.core.first(seq15489__$1);
var seq15489__$2 = cljs.core.next(seq15489__$1);
var G__15492 = cljs.core.first(seq15489__$2);
var seq15489__$3 = cljs.core.next(seq15489__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15490,G__15491,G__15492,seq15489__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15504__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__15504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15505__i = 0, G__15505__a = new Array(arguments.length -  0);
while (G__15505__i < G__15505__a.length) {G__15505__a[G__15505__i] = arguments[G__15505__i + 0]; ++G__15505__i;}
  args = new cljs.core.IndexedSeq(G__15505__a,0,null);
} 
return G__15504__delegate.call(this,args);};
G__15504.cljs$lang$maxFixedArity = 0;
G__15504.cljs$lang$applyTo = (function (arglist__15506){
var args = cljs.core.seq(arglist__15506);
return G__15504__delegate(args);
});
G__15504.cljs$core$IFn$_invoke$arity$variadic = G__15504__delegate;
return G__15504;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15507 = (function (meta15508){
this.meta15508 = meta15508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15509,meta15508__$1){
var self__ = this;
var _15509__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15507(meta15508__$1));
}));

(com.rpl.specter.t_com$rpl$specter15507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15509){
var self__ = this;
var _15509__$1 = this;
return self__.meta15508;
}));

(com.rpl.specter.t_com$rpl$specter15507.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15507.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter15507.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter15507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15508], null);
}));

(com.rpl.specter.t_com$rpl$specter15507.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15507.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15507");

(com.rpl.specter.t_com$rpl$specter15507.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15507");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15507.
 */
com.rpl.specter.__GT_t_com$rpl$specter15507 = (function com$rpl$specter$__GT_t_com$rpl$specter15507(meta15508){
return (new com.rpl.specter.t_com$rpl$specter15507(meta15508));
});

}

return (new com.rpl.specter.t_com$rpl$specter15507(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15510 = (function (afn,meta15511){
this.afn = afn;
this.meta15511 = meta15511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15512,meta15511__$1){
var self__ = this;
var _15512__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15510(self__.afn,meta15511__$1));
}));

(com.rpl.specter.t_com$rpl$specter15510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15512){
var self__ = this;
var _15512__$1 = this;
return self__.meta15511;
}));

(com.rpl.specter.t_com$rpl$specter15510.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15510.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter15510.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter15510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta15511], null);
}));

(com.rpl.specter.t_com$rpl$specter15510.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15510.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15510");

(com.rpl.specter.t_com$rpl$specter15510.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15510");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15510.
 */
com.rpl.specter.__GT_t_com$rpl$specter15510 = (function com$rpl$specter$__GT_t_com$rpl$specter15510(afn__$1,meta15511){
return (new com.rpl.specter.t_com$rpl$specter15510(afn__$1,meta15511));
});

}

return (new com.rpl.specter.t_com$rpl$specter15510(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15513 = (function (afn,meta15514){
this.afn = afn;
this.meta15514 = meta15514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15515,meta15514__$1){
var self__ = this;
var _15515__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15513(self__.afn,meta15514__$1));
}));

(com.rpl.specter.t_com$rpl$specter15513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15515){
var self__ = this;
var _15515__$1 = this;
return self__.meta15514;
}));

(com.rpl.specter.t_com$rpl$specter15513.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15513.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter15513.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter15513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta15514], null);
}));

(com.rpl.specter.t_com$rpl$specter15513.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15513.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15513");

(com.rpl.specter.t_com$rpl$specter15513.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15513");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15513.
 */
com.rpl.specter.__GT_t_com$rpl$specter15513 = (function com$rpl$specter$__GT_t_com$rpl$specter15513(afn__$1,meta15514){
return (new com.rpl.specter.t_com$rpl$specter15513(afn__$1,meta15514));
});

}

return (new com.rpl.specter.t_com$rpl$specter15513(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__15516 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__15516) : com.rpl.specter.terminal.call(null,G__15516));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15517 = (function (meta15518){
this.meta15518 = meta15518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15519,meta15518__$1){
var self__ = this;
var _15519__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15517(meta15518__$1));
}));

(com.rpl.specter.t_com$rpl$specter15517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15519){
var self__ = this;
var _15519__$1 = this;
return self__.meta15518;
}));

(com.rpl.specter.t_com$rpl$specter15517.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15517.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15517.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15518], null);
}));

(com.rpl.specter.t_com$rpl$specter15517.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15517.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15517");

(com.rpl.specter.t_com$rpl$specter15517.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15517");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15517.
 */
com.rpl.specter.__GT_t_com$rpl$specter15517 = (function com$rpl$specter$__GT_t_com$rpl$specter15517(meta15518){
return (new com.rpl.specter.t_com$rpl$specter15517(meta15518));
});

}

return (new com.rpl.specter.t_com$rpl$specter15517(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15520 = (function (meta15521){
this.meta15521 = meta15521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15522,meta15521__$1){
var self__ = this;
var _15522__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15520(meta15521__$1));
}));

(com.rpl.specter.t_com$rpl$specter15520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15522){
var self__ = this;
var _15522__$1 = this;
return self__.meta15521;
}));

(com.rpl.specter.t_com$rpl$specter15520.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15520.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15520.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter15520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15521], null);
}));

(com.rpl.specter.t_com$rpl$specter15520.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15520.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15520");

(com.rpl.specter.t_com$rpl$specter15520.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15520");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15520.
 */
com.rpl.specter.__GT_t_com$rpl$specter15520 = (function com$rpl$specter$__GT_t_com$rpl$specter15520(meta15521){
return (new com.rpl.specter.t_com$rpl$specter15520(meta15521));
});

}

return (new com.rpl.specter.t_com$rpl$specter15520(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,v){
var ret__10939__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15523 = (function (meta15524){
this.meta15524 = meta15524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15525,meta15524__$1){
var self__ = this;
var _15525__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15523(meta15524__$1));
}));

(com.rpl.specter.t_com$rpl$specter15523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15525){
var self__ = this;
var _15525__$1 = this;
return self__.meta15524;
}));

(com.rpl.specter.t_com$rpl$specter15523.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15523.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,v){
var ret__10939__auto__ = next_fn(v);
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter15523.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15524], null);
}));

(com.rpl.specter.t_com$rpl$specter15523.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15523.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15523");

(com.rpl.specter.t_com$rpl$specter15523.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15523");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15523.
 */
com.rpl.specter.__GT_t_com$rpl$specter15523 = (function com$rpl$specter$__GT_t_com$rpl$specter15523(meta15524){
return (new com.rpl.specter.t_com$rpl$specter15523(meta15524));
});

}

return (new com.rpl.specter.t_com$rpl$specter15523(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,k){
var ret__10939__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15526 = (function (meta15527){
this.meta15527 = meta15527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15528,meta15527__$1){
var self__ = this;
var _15528__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15526(meta15527__$1));
}));

(com.rpl.specter.t_com$rpl$specter15526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15528){
var self__ = this;
var _15528__$1 = this;
return self__.meta15527;
}));

(com.rpl.specter.t_com$rpl$specter15526.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15526.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,k){
var ret__10939__auto__ = next_fn(k);
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter15526.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15527], null);
}));

(com.rpl.specter.t_com$rpl$specter15526.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15526.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15526");

(com.rpl.specter.t_com$rpl$specter15526.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15526");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15526.
 */
com.rpl.specter.__GT_t_com$rpl$specter15526 = (function com$rpl$specter$__GT_t_com$rpl$specter15526(meta15527){
return (new com.rpl.specter.t_com$rpl$specter15526(meta15527));
});

}

return (new com.rpl.specter.t_com$rpl$specter15526(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15529 = (function (meta15530){
this.meta15530 = meta15530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15531,meta15530__$1){
var self__ = this;
var _15531__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15529(meta15530__$1));
}));

(com.rpl.specter.t_com$rpl$specter15529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15531){
var self__ = this;
var _15531__$1 = this;
return self__.meta15530;
}));

(com.rpl.specter.t_com$rpl$specter15529.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15529.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14447__auto__,vals__14448__auto__,structure,next_fn__14449__auto__){
var self__ = this;
var this__14447__auto____$1 = this;
var G__15532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__14448__auto__,structure);
var G__15533 = structure;
return (next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2(G__15532,G__15533) : next_fn__14449__auto__.call(null,G__15532,G__15533));
}));

(com.rpl.specter.t_com$rpl$specter15529.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14447__auto__,vals__14448__auto__,structure,next_fn__14449__auto__){
var self__ = this;
var this__14447__auto____$1 = this;
var G__15534 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__14448__auto__,structure);
var G__15535 = structure;
return (next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2(G__15534,G__15535) : next_fn__14449__auto__.call(null,G__15534,G__15535));
}));

(com.rpl.specter.t_com$rpl$specter15529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15530], null);
}));

(com.rpl.specter.t_com$rpl$specter15529.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15529.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15529");

(com.rpl.specter.t_com$rpl$specter15529.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15529");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15529.
 */
com.rpl.specter.__GT_t_com$rpl$specter15529 = (function com$rpl$specter$__GT_t_com$rpl$specter15529(meta15530){
return (new com.rpl.specter.t_com$rpl$specter15529(meta15530));
});

}

return (new com.rpl.specter.t_com$rpl$specter15529(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__15536 = structure;
var G__15537 = s;
var G__15538 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__15539 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__15536,G__15537,G__15538,G__15539) : com.rpl.specter.navs.srange_transform.call(null,G__15536,G__15537,G__15538,G__15539));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15540 = (function (start_index_fn,end_index_fn,meta15541){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta15541 = meta15541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15542,meta15541__$1){
var self__ = this;
var _15542__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15540(self__.start_index_fn,self__.end_index_fn,meta15541__$1));
}));

(com.rpl.specter.t_com$rpl$specter15540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15542){
var self__ = this;
var _15542__$1 = this;
return self__.meta15541;
}));

(com.rpl.specter.t_com$rpl$specter15540.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15540.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15540.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__15543 = structure;
var G__15544 = s;
var G__15545 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__15546 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__15543,G__15544,G__15545,G__15546) : com.rpl.specter.navs.srange_transform.call(null,G__15543,G__15544,G__15545,G__15546));
}));

(com.rpl.specter.t_com$rpl$specter15540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start_DASH_index_DASH_fn,cljs.core.cst$sym$end_DASH_index_DASH_fn,cljs.core.cst$sym$meta15541], null);
}));

(com.rpl.specter.t_com$rpl$specter15540.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15540.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15540");

(com.rpl.specter.t_com$rpl$specter15540.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15540");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15540.
 */
com.rpl.specter.__GT_t_com$rpl$specter15540 = (function com$rpl$specter$__GT_t_com$rpl$specter15540(start_index_fn__$1,end_index_fn__$1,meta15541){
return (new com.rpl.specter.t_com$rpl$specter15540(start_index_fn__$1,end_index_fn__$1,meta15541));
});

}

return (new com.rpl.specter.t_com$rpl$specter15540(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15547 = (function (start,end,meta15548){
this.start = start;
this.end = end;
this.meta15548 = meta15548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15549,meta15548__$1){
var self__ = this;
var _15549__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15547(self__.start,self__.end,meta15548__$1));
}));

(com.rpl.specter.t_com$rpl$specter15547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15549){
var self__ = this;
var _15549__$1 = this;
return self__.meta15548;
}));

(com.rpl.specter.t_com$rpl$specter15547.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15547.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15547.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter15547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$end,cljs.core.cst$sym$meta15548], null);
}));

(com.rpl.specter.t_com$rpl$specter15547.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15547.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15547");

(com.rpl.specter.t_com$rpl$specter15547.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15547");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15547.
 */
com.rpl.specter.__GT_t_com$rpl$specter15547 = (function com$rpl$specter$__GT_t_com$rpl$specter15547(start__$1,end__$1,meta15548){
return (new com.rpl.specter.t_com$rpl$specter15547(start__$1,end__$1,meta15548));
});

}

return (new com.rpl.specter.t_com$rpl$specter15547(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,p__15550){
var vec__15551 = p__15550;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15551,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15551,(1),null);
var ret__10939__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15554 = (function (pred,meta15555){
this.pred = pred;
this.meta15555 = meta15555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15556,meta15555__$1){
var self__ = this;
var _15556__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15554(self__.pred,meta15555__$1));
}));

(com.rpl.specter.t_com$rpl$specter15554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15556){
var self__ = this;
var _15556__$1 = this;
return self__.meta15555;
}));

(com.rpl.specter.t_com$rpl$specter15554.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15554.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,p__15557){
var vec__15558 = p__15557;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15558,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15558,(1),null);
var ret__10939__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter15554.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pred,cljs.core.cst$sym$meta15555], null);
}));

(com.rpl.specter.t_com$rpl$specter15554.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15554.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15554");

(com.rpl.specter.t_com$rpl$specter15554.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15554");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15554.
 */
com.rpl.specter.__GT_t_com$rpl$specter15554 = (function com$rpl$specter$__GT_t_com$rpl$specter15554(pred__$1,meta15555){
return (new com.rpl.specter.t_com$rpl$specter15554(pred__$1,meta15555));
});

}

return (new com.rpl.specter.t_com$rpl$specter15554(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__15561 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15561) : next_fn.call(null,G__15561));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__15562 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15562) : next_fn.call(null,G__15562));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15563 = (function (meta15564){
this.meta15564 = meta15564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15565,meta15564__$1){
var self__ = this;
var _15565__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15563(meta15564__$1));
}));

(com.rpl.specter.t_com$rpl$specter15563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15565){
var self__ = this;
var _15565__$1 = this;
return self__.meta15564;
}));

(com.rpl.specter.t_com$rpl$specter15563.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15563.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter15563.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter15563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15564], null);
}));

(com.rpl.specter.t_com$rpl$specter15563.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15563.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15563");

(com.rpl.specter.t_com$rpl$specter15563.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15563");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15563.
 */
com.rpl.specter.__GT_t_com$rpl$specter15563 = (function com$rpl$specter$__GT_t_com$rpl$specter15563(meta15564){
return (new com.rpl.specter.t_com$rpl$specter15563(meta15564));
});

}

return (new com.rpl.specter.t_com$rpl$specter15563(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__15566 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15566) : next_fn.call(null,G__15566));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__15567 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15567) : next_fn.call(null,G__15567));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15568 = (function (meta15569){
this.meta15569 = meta15569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15570,meta15569__$1){
var self__ = this;
var _15570__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15568(meta15569__$1));
}));

(com.rpl.specter.t_com$rpl$specter15568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15570){
var self__ = this;
var _15570__$1 = this;
return self__.meta15569;
}));

(com.rpl.specter.t_com$rpl$specter15568.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15568.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter15568.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter15568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15569], null);
}));

(com.rpl.specter.t_com$rpl$specter15568.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15568.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15568");

(com.rpl.specter.t_com$rpl$specter15568.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15568");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15568.
 */
com.rpl.specter.__GT_t_com$rpl$specter15568 = (function com$rpl$specter$__GT_t_com$rpl$specter15568(meta15569){
return (new com.rpl.specter.t_com$rpl$specter15568(meta15569));
});

}

return (new com.rpl.specter.t_com$rpl$specter15568(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15571 = (function (meta15572){
this.meta15572 = meta15572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15573,meta15572__$1){
var self__ = this;
var _15573__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15571(meta15572__$1));
}));

(com.rpl.specter.t_com$rpl$specter15571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15573){
var self__ = this;
var _15573__$1 = this;
return self__.meta15572;
}));

(com.rpl.specter.t_com$rpl$specter15571.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15571.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter15571.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter15571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15572], null);
}));

(com.rpl.specter.t_com$rpl$specter15571.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15571.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15571");

(com.rpl.specter.t_com$rpl$specter15571.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15571");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15571.
 */
com.rpl.specter.__GT_t_com$rpl$specter15571 = (function com$rpl$specter$__GT_t_com$rpl$specter15571(meta15572){
return (new com.rpl.specter.t_com$rpl$specter15571(meta15572));
});

}

return (new com.rpl.specter.t_com$rpl$specter15571(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15574 = (function (meta15575){
this.meta15575 = meta15575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15576,meta15575__$1){
var self__ = this;
var _15576__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15574(meta15575__$1));
}));

(com.rpl.specter.t_com$rpl$specter15574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15576){
var self__ = this;
var _15576__$1 = this;
return self__.meta15575;
}));

(com.rpl.specter.t_com$rpl$specter15574.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15574.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter15574.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter15574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15575], null);
}));

(com.rpl.specter.t_com$rpl$specter15574.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15574.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15574");

(com.rpl.specter.t_com$rpl$specter15574.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15574");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15574.
 */
com.rpl.specter.__GT_t_com$rpl$specter15574 = (function com$rpl$specter$__GT_t_com$rpl$specter15574(meta15575){
return (new com.rpl.specter.t_com$rpl$specter15574(meta15575));
});

}

return (new com.rpl.specter.t_com$rpl$specter15574(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15577 = (function (meta15578){
this.meta15578 = meta15578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15579,meta15578__$1){
var self__ = this;
var _15579__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15577(meta15578__$1));
}));

(com.rpl.specter.t_com$rpl$specter15577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15579){
var self__ = this;
var _15579__$1 = this;
return self__.meta15578;
}));

(com.rpl.specter.t_com$rpl$specter15577.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15577.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter15577.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter15577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15578], null);
}));

(com.rpl.specter.t_com$rpl$specter15577.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15577.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15577");

(com.rpl.specter.t_com$rpl$specter15577.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15577");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15577.
 */
com.rpl.specter.__GT_t_com$rpl$specter15577 = (function com$rpl$specter$__GT_t_com$rpl$specter15577(meta15578){
return (new com.rpl.specter.t_com$rpl$specter15577(meta15578));
});

}

return (new com.rpl.specter.t_com$rpl$specter15577(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__15580 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15580) : next_fn.call(null,G__15580));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15581 = (function (aset,meta15582){
this.aset = aset;
this.meta15582 = meta15582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15583,meta15582__$1){
var self__ = this;
var _15583__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15581(self__.aset,meta15582__$1));
}));

(com.rpl.specter.t_com$rpl$specter15581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15583){
var self__ = this;
var _15583__$1 = this;
return self__.meta15582;
}));

(com.rpl.specter.t_com$rpl$specter15581.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15581.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter15581.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter15581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$aset,cljs.core.cst$sym$meta15582], null);
}));

(com.rpl.specter.t_com$rpl$specter15581.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15581.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15581");

(com.rpl.specter.t_com$rpl$specter15581.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15581");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15581.
 */
com.rpl.specter.__GT_t_com$rpl$specter15581 = (function com$rpl$specter$__GT_t_com$rpl$specter15581(aset__$1,meta15582){
return (new com.rpl.specter.t_com$rpl$specter15581(aset__$1,meta15582));
});

}

return (new com.rpl.specter.t_com$rpl$specter15581(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__15584 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15584) : next_fn.call(null,G__15584));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15585 = (function (m_keys,meta15586){
this.m_keys = m_keys;
this.meta15586 = meta15586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15587,meta15586__$1){
var self__ = this;
var _15587__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15585(self__.m_keys,meta15586__$1));
}));

(com.rpl.specter.t_com$rpl$specter15585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15587){
var self__ = this;
var _15587__$1 = this;
return self__.meta15586;
}));

(com.rpl.specter.t_com$rpl$specter15585.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15585.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter15585.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter15585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m_DASH_keys,cljs.core.cst$sym$meta15586], null);
}));

(com.rpl.specter.t_com$rpl$specter15585.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15585.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15585");

(com.rpl.specter.t_com$rpl$specter15585.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15585");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15585.
 */
com.rpl.specter.__GT_t_com$rpl$specter15585 = (function com$rpl$specter$__GT_t_com$rpl$specter15585(m_keys__$1,meta15586){
return (new com.rpl.specter.t_com$rpl$specter15585(m_keys__$1,meta15586));
});

}

return (new com.rpl.specter.t_com$rpl$specter15585(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15594__delegate = function (path){
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15588 = (function (path,late,meta15589){
this.path = path;
this.late = late;
this.meta15589 = meta15589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15590,meta15589__$1){
var self__ = this;
var _15590__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15588(self__.path,self__.late,meta15589__$1));
}));

(com.rpl.specter.t_com$rpl$specter15588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15590){
var self__ = this;
var _15590__$1 = this;
return self__.meta15589;
}));

(com.rpl.specter.t_com$rpl$specter15588.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15588.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter15588.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__15591 = self__.late;
var G__15592 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__15593 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__15591,G__15592,G__15593) : com.rpl.specter.compiled_transform.call(null,G__15591,G__15592,G__15593));
}));

(com.rpl.specter.t_com$rpl$specter15588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta15589], null);
}));

(com.rpl.specter.t_com$rpl$specter15588.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15588.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15588");

(com.rpl.specter.t_com$rpl$specter15588.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15588");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15588.
 */
com.rpl.specter.__GT_t_com$rpl$specter15588 = (function com$rpl$specter$__GT_t_com$rpl$specter15588(path__$1,late__$1,meta15589){
return (new com.rpl.specter.t_com$rpl$specter15588(path__$1,late__$1,meta15589));
});

}

return (new com.rpl.specter.t_com$rpl$specter15588(path,late,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
};
var G__15594 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15595__i = 0, G__15595__a = new Array(arguments.length -  0);
while (G__15595__i < G__15595__a.length) {G__15595__a[G__15595__i] = arguments[G__15595__i + 0]; ++G__15595__i;}
  path = new cljs.core.IndexedSeq(G__15595__a,0,null);
} 
return G__15594__delegate.call(this,path);};
G__15594.cljs$lang$maxFixedArity = 0;
G__15594.cljs$lang$applyTo = (function (arglist__15596){
var path = cljs.core.seq(arglist__15596);
return G__15594__delegate(path);
});
G__15594.cljs$core$IFn$_invoke$arity$variadic = G__15594__delegate;
return G__15594;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15597 = (function (key,meta15598){
this.key = key;
this.meta15598 = meta15598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15599,meta15598__$1){
var self__ = this;
var _15599__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15597(self__.key,meta15598__$1));
}));

(com.rpl.specter.t_com$rpl$specter15597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15599){
var self__ = this;
var _15599__$1 = this;
return self__.meta15598;
}));

(com.rpl.specter.t_com$rpl$specter15597.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15597.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter15597.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter15597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key,cljs.core.cst$sym$meta15598], null);
}));

(com.rpl.specter.t_com$rpl$specter15597.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15597.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15597");

(com.rpl.specter.t_com$rpl$specter15597.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15597");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15597.
 */
com.rpl.specter.__GT_t_com$rpl$specter15597 = (function com$rpl$specter$__GT_t_com$rpl$specter15597(key__$1,meta15598){
return (new com.rpl.specter.t_com$rpl$specter15597(key__$1,meta15598));
});

}

return (new com.rpl.specter.t_com$rpl$specter15597(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15600 = (function (elem,meta15601){
this.elem = elem;
this.meta15601 = meta15601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15602,meta15601__$1){
var self__ = this;
var _15602__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15600(self__.elem,meta15601__$1));
}));

(com.rpl.specter.t_com$rpl$specter15600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15602){
var self__ = this;
var _15602__$1 = this;
return self__.meta15601;
}));

(com.rpl.specter.t_com$rpl$specter15600.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15600.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter15600.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter15600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$meta15601], null);
}));

(com.rpl.specter.t_com$rpl$specter15600.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15600.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15600");

(com.rpl.specter.t_com$rpl$specter15600.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15600");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15600.
 */
com.rpl.specter.__GT_t_com$rpl$specter15600 = (function com$rpl$specter$__GT_t_com$rpl$specter15600(elem__$1,meta15601){
return (new com.rpl.specter.t_com$rpl$specter15600(elem__$1,meta15601));
});

}

return (new com.rpl.specter.t_com$rpl$specter15600(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15603 = (function (index,meta15604){
this.index = index;
this.meta15604 = meta15604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15605,meta15604__$1){
var self__ = this;
var _15605__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15603(self__.index,meta15604__$1));
}));

(com.rpl.specter.t_com$rpl$specter15603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15605){
var self__ = this;
var _15605__$1 = this;
return self__.meta15604;
}));

(com.rpl.specter.t_com$rpl$specter15603.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15603.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter15603.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15606;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15607 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},cljs.core.cst$sym$com$rpl$specter_SLASH_srange,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$srange,"target/public/cljs-out/dep/com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),cljs.core.cst$sym$srange),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,cljs.core.cst$sym$index),com.rpl.specter.impl.__GT_LocalSym(self__.index,cljs.core.cst$sym$index)], null),cljs.core.list(cljs.core.cst$sym$srange,cljs.core.cst$sym$index,cljs.core.cst$sym$index))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index,cljs.core.cst$sym$index], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$srange,cljs.core.cst$sym$index,cljs.core.cst$sym$index], null));
com.rpl.specter.pathcache15606 = info15607;

return info15607;
})():info__14457__auto__);
var precompiled15608 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15609 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled15608.cljs$core$IFn$_invoke$arity$1 ? precompiled15608.cljs$core$IFn$_invoke$arity$1(G__15609) : precompiled15608.call(null,G__15609));
} else {
return precompiled15608;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter15603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index,cljs.core.cst$sym$meta15604], null);
}));

(com.rpl.specter.t_com$rpl$specter15603.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15603.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15603");

(com.rpl.specter.t_com$rpl$specter15603.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15603");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15603.
 */
com.rpl.specter.__GT_t_com$rpl$specter15603 = (function com$rpl$specter$__GT_t_com$rpl$specter15603(index__$1,meta15604){
return (new com.rpl.specter.t_com$rpl$specter15603(index__$1,meta15604));
});

}

return (new com.rpl.specter.t_com$rpl$specter15603(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15610 = (function (i,meta15611){
this.i = i;
this.meta15611 = meta15611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15612,meta15611__$1){
var self__ = this;
var _15612__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15610(self__.i,meta15611__$1));
}));

(com.rpl.specter.t_com$rpl$specter15610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15612){
var self__ = this;
var _15612__$1 = this;
return self__.meta15611;
}));

(com.rpl.specter.t_com$rpl$specter15610.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15610.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter15610.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__15621 = (j - (1));
var G__15622 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__15621;
s = G__15622;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__15623 = (j + (1));
var G__15624 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__15623;
s = G__15624;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15613;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15614 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},cljs.core.cst$sym$com$rpl$specter_SLASH_before_DASH_index,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$before_DASH_index,"target/public/cljs-out/dep/com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),cljs.core.cst$sym$before_DASH_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,cljs.core.cst$sym$newi)], null),cljs.core.list(cljs.core.cst$sym$before_DASH_index,cljs.core.cst$sym$newi))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$before_DASH_index,cljs.core.cst$sym$newi], null));
com.rpl.specter.pathcache15613 = info15614;

return info15614;
})():info__14457__auto__);
var precompiled15615 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled15615.cljs$core$IFn$_invoke$arity$1 ? precompiled15615.cljs$core$IFn$_invoke$arity$1(G__15616) : precompiled15615.call(null,G__15616));
} else {
return precompiled15615;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15617;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15618 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},cljs.core.cst$sym$com$rpl$specter_SLASH_nthpath,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$nthpath,"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),cljs.core.cst$sym$nthpath),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$nthpath,cljs.core.cst$sym$i))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nthpath,cljs.core.cst$sym$i], null));
com.rpl.specter.pathcache15617 = info15618;

return info15618;
})():info__14457__auto__);
var precompiled15619 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled15619.cljs$core$IFn$_invoke$arity$1 ? precompiled15619.cljs$core$IFn$_invoke$arity$1(G__15620) : precompiled15619.call(null,G__15620));
} else {
return precompiled15619;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter15610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$meta15611], null);
}));

(com.rpl.specter.t_com$rpl$specter15610.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15610.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15610");

(com.rpl.specter.t_com$rpl$specter15610.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15610");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15610.
 */
com.rpl.specter.__GT_t_com$rpl$specter15610 = (function com$rpl$specter$__GT_t_com$rpl$specter15610(i__$1,meta15611){
return (new com.rpl.specter.t_com$rpl$specter15610(i__$1,meta15611));
});

}

return (new com.rpl.specter.t_com$rpl$specter15610(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,e){
var ret__10939__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__15627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15627) : next_fn.call(null,G__15627));
})()
;
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__15628 = (function (){var G__15631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15631) : next_fn.call(null,G__15631));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15628,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15628,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15632;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15633 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL,"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),cljs.core.cst$sym$ALL),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__15625_SHARP_){
return (p1__15625_SHARP_ >= (curri + (1)));
}),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15625_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__15625_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri)))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__15626_SHARP_){
return (p1__15626_SHARP_ <= newi);
}),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15626_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__15626_SHARP_,cljs.core.cst$sym$newi)))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri,cljs.core.cst$sym$newi], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15625_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__15625_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15626_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__15626_SHARP_,cljs.core.cst$sym$newi))], null),cljs.core.cst$sym$ALL,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15625_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__15625_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15626_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__15626_SHARP_,cljs.core.cst$sym$newi))], null));
com.rpl.specter.pathcache15632 = info15633;

return info15633;
})():info__14457__auto__);
var precompiled15634 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15635 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__15625_SHARP_){
return (p1__15625_SHARP_ >= (curri + (1)));
}),(function (p1__15626_SHARP_){
return (p1__15626_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__15625_SHARP_){
return (p1__15625_SHARP_ >= (curri + (1)));
}),(function (p1__15626_SHARP_){
return (p1__15626_SHARP_ <= newi);
})], null);
return (precompiled15634.cljs$core$IFn$_invoke$arity$1 ? precompiled15634.cljs$core$IFn$_invoke$arity$1(G__15635) : precompiled15634.call(null,G__15635));
} else {
return precompiled15634;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15636;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15637 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},cljs.core.cst$sym$com$rpl$specter_SLASH_index_DASH_nav,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$index_DASH_nav,"target/public/cljs-out/dep/com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),cljs.core.cst$sym$index_DASH_nav),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,cljs.core.cst$sym$curri)], null),cljs.core.list(cljs.core.cst$sym$index_DASH_nav,cljs.core.cst$sym$curri))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index_DASH_nav,cljs.core.cst$sym$curri], null));
com.rpl.specter.pathcache15636 = info15637;

return info15637;
})():info__14457__auto__);
var precompiled15638 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled15638.cljs$core$IFn$_invoke$arity$1 ? precompiled15638.cljs$core$IFn$_invoke$arity$1(G__15639) : precompiled15638.call(null,G__15639));
} else {
return precompiled15638;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15640;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15641 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},cljs.core.cst$sym$com$rpl$specter_SLASH_nthpath,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$nthpath,"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),cljs.core.cst$sym$nthpath),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,cljs.core.cst$sym$curri)], null),cljs.core.list(cljs.core.cst$sym$nthpath,cljs.core.cst$sym$curri))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nthpath,cljs.core.cst$sym$curri], null));
com.rpl.specter.pathcache15640 = info15641;

return info15641;
})():info__14457__auto__);
var precompiled15642 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled15642.cljs$core$IFn$_invoke$arity$1 ? precompiled15642.cljs$core$IFn$_invoke$arity$1(G__15643) : precompiled15642.call(null,G__15643));
} else {
return precompiled15642;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15644 = (function (start,meta15645){
this.start = start;
this.meta15645 = meta15645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15646,meta15645__$1){
var self__ = this;
var _15646__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15644(self__.start,meta15645__$1));
}));

(com.rpl.specter.t_com$rpl$specter15644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15646){
var self__ = this;
var _15646__$1 = this;
return self__.meta15645;
}));

(com.rpl.specter.t_com$rpl$specter15644.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15644.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,e){
var ret__10939__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter15644.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__15647 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15647,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15647,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15650;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15651 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL,"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),cljs.core.cst$sym$ALL),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__15625_SHARP_){
return (p1__15625_SHARP_ >= (curri + (1)));
}),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15625_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__15625_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri)))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__15626_SHARP_){
return (p1__15626_SHARP_ <= newi);
}),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15626_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__15626_SHARP_,cljs.core.cst$sym$newi)))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri,cljs.core.cst$sym$newi], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15625_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__15625_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15626_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__15626_SHARP_,cljs.core.cst$sym$newi))], null),cljs.core.cst$sym$ALL,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15625_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__15625_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15626_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__15626_SHARP_,cljs.core.cst$sym$newi))], null));
com.rpl.specter.pathcache15650 = info15651;

return info15651;
})():info__14457__auto__);
var precompiled15652 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15653 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__15625_SHARP_){
return (p1__15625_SHARP_ >= (curri + (1)));
}),(function (p1__15626_SHARP_){
return (p1__15626_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__15625_SHARP_){
return (p1__15625_SHARP_ >= (curri + (1)));
}),(function (p1__15626_SHARP_){
return (p1__15626_SHARP_ <= newi);
})], null);
return (precompiled15652.cljs$core$IFn$_invoke$arity$1 ? precompiled15652.cljs$core$IFn$_invoke$arity$1(G__15653) : precompiled15652.call(null,G__15653));
} else {
return precompiled15652;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15654;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15655 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},cljs.core.cst$sym$com$rpl$specter_SLASH_index_DASH_nav,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$index_DASH_nav,"target/public/cljs-out/dep/com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),cljs.core.cst$sym$index_DASH_nav),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,cljs.core.cst$sym$curri)], null),cljs.core.list(cljs.core.cst$sym$index_DASH_nav,cljs.core.cst$sym$curri))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index_DASH_nav,cljs.core.cst$sym$curri], null));
com.rpl.specter.pathcache15654 = info15655;

return info15655;
})():info__14457__auto__);
var precompiled15656 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled15656.cljs$core$IFn$_invoke$arity$1 ? precompiled15656.cljs$core$IFn$_invoke$arity$1(G__15657) : precompiled15656.call(null,G__15657));
} else {
return precompiled15656;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__14457__auto__ = com.rpl.specter.pathcache15658;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15659 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},cljs.core.cst$sym$com$rpl$specter_SLASH_nthpath,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$nthpath,"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),cljs.core.cst$sym$nthpath),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,cljs.core.cst$sym$curri)], null),cljs.core.list(cljs.core.cst$sym$nthpath,cljs.core.cst$sym$curri))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nthpath,cljs.core.cst$sym$curri], null));
com.rpl.specter.pathcache15658 = info15659;

return info15659;
})():info__14457__auto__);
var precompiled15660 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled15660.cljs$core$IFn$_invoke$arity$1 ? precompiled15660.cljs$core$IFn$_invoke$arity$1(G__15661) : precompiled15660.call(null,G__15661));
} else {
return precompiled15660;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter15644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$meta15645], null);
}));

(com.rpl.specter.t_com$rpl$specter15644.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15644.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15644");

(com.rpl.specter.t_com$rpl$specter15644.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15644");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15644.
 */
com.rpl.specter.__GT_t_com$rpl$specter15644 = (function com$rpl$specter$__GT_t_com$rpl$specter15644(start__$1,meta15645){
return (new com.rpl.specter.t_com$rpl$specter15644(start__$1,meta15645));
});

}

return (new com.rpl.specter.t_com$rpl$specter15644(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15662 = (function (afn,meta15663){
this.afn = afn;
this.meta15663 = meta15663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15664,meta15663__$1){
var self__ = this;
var _15664__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15662(self__.afn,meta15663__$1));
}));

(com.rpl.specter.t_com$rpl$specter15662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15664){
var self__ = this;
var _15664__$1 = this;
return self__.meta15663;
}));

(com.rpl.specter.t_com$rpl$specter15662.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15662.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__15665 = vals;
var G__15666 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__15665,G__15666) : next_fn.call(null,G__15665,G__15666));
}));

(com.rpl.specter.t_com$rpl$specter15662.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__15667 = vals;
var G__15668 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__15667,G__15668) : next_fn.call(null,G__15667,G__15668));
}));

(com.rpl.specter.t_com$rpl$specter15662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta15663], null);
}));

(com.rpl.specter.t_com$rpl$specter15662.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15662.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15662");

(com.rpl.specter.t_com$rpl$specter15662.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15662");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15662.
 */
com.rpl.specter.__GT_t_com$rpl$specter15662 = (function com$rpl$specter$__GT_t_com$rpl$specter15662(afn__$1,meta15663){
return (new com.rpl.specter.t_com$rpl$specter15662(afn__$1,meta15663));
});

}

return (new com.rpl.specter.t_com$rpl$specter15662(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__15669 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15669) : next_fn.call(null,G__15669));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__15670 = (function (){var G__15671 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15671) : next_fn.call(null,G__15671));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__15670) : unparse_fn.call(null,G__15670));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15672 = (function (parse_fn,unparse_fn,meta15673){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta15673 = meta15673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15674,meta15673__$1){
var self__ = this;
var _15674__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15672(self__.parse_fn,self__.unparse_fn,meta15673__$1));
}));

(com.rpl.specter.t_com$rpl$specter15672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15674){
var self__ = this;
var _15674__$1 = this;
return self__.meta15673;
}));

(com.rpl.specter.t_com$rpl$specter15672.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15672.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter15672.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var G__15675 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__15675) : self__.unparse_fn.call(null,G__15675));
}));

(com.rpl.specter.t_com$rpl$specter15672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parse_DASH_fn,cljs.core.cst$sym$unparse_DASH_fn,cljs.core.cst$sym$meta15673], null);
}));

(com.rpl.specter.t_com$rpl$specter15672.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15672.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15672");

(com.rpl.specter.t_com$rpl$specter15672.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15672");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15672.
 */
com.rpl.specter.__GT_t_com$rpl$specter15672 = (function com$rpl$specter$__GT_t_com$rpl$specter15672(parse_fn__$1,unparse_fn__$1,meta15673){
return (new com.rpl.specter.t_com$rpl$specter15672(parse_fn__$1,unparse_fn__$1,meta15673));
});

}

return (new com.rpl.specter.t_com$rpl$specter15672(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__15676 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15676) : next_fn.call(null,G__15676));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15677 = (function (meta15678){
this.meta15678 = meta15678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15679,meta15678__$1){
var self__ = this;
var _15679__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15677(meta15678__$1));
}));

(com.rpl.specter.t_com$rpl$specter15677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15679){
var self__ = this;
var _15679__$1 = this;
return self__.meta15678;
}));

(com.rpl.specter.t_com$rpl$specter15677.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15677.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter15677.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter15677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15678], null);
}));

(com.rpl.specter.t_com$rpl$specter15677.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15677.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15677");

(com.rpl.specter.t_com$rpl$specter15677.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15677");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15677.
 */
com.rpl.specter.__GT_t_com$rpl$specter15677 = (function com$rpl$specter$__GT_t_com$rpl$specter15677(meta15678){
return (new com.rpl.specter.t_com$rpl$specter15677(meta15678));
});

}

return (new com.rpl.specter.t_com$rpl$specter15677(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,s){
var ret__10939__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15680 = (function (re,meta15681){
this.re = re;
this.meta15681 = meta15681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15682,meta15681__$1){
var self__ = this;
var _15682__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15680(self__.re,meta15681__$1));
}));

(com.rpl.specter.t_com$rpl$specter15680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15682){
var self__ = this;
var _15682__$1 = this;
return self__.meta15681;
}));

(com.rpl.specter.t_com$rpl$specter15680.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15680.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__10938__auto__,s){
var ret__10939__auto__ = next_fn(s);
if((ret__10939__auto__ === com.rpl.specter.NONE)){
return curr__10938__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__10939__auto__)){
return cljs.core.reduced(ret__10939__auto__);
} else {
return ret__10939__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter15680.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$meta15681], null);
}));

(com.rpl.specter.t_com$rpl$specter15680.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15680.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15680");

(com.rpl.specter.t_com$rpl$specter15680.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15680");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15680.
 */
com.rpl.specter.__GT_t_com$rpl$specter15680 = (function com$rpl$specter$__GT_t_com$rpl$specter15680(re__$1,meta15681){
return (new com.rpl.specter.t_com$rpl$specter15680(re__$1,meta15681));
});

}

return (new com.rpl.specter.t_com$rpl$specter15680(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15688__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15685 = (function (path,temp__5733__auto__,late,meta15686){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta15686 = meta15686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15687,meta15686__$1){
var self__ = this;
var _15687__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15685(self__.path,self__.temp__5733__auto__,self__.late,meta15686__$1));
}));

(com.rpl.specter.t_com$rpl$specter15685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15687){
var self__ = this;
var _15687__$1 = this;
return self__.meta15686;
}));

(com.rpl.specter.t_com$rpl$specter15685.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15685.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__15683_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__15683_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15685.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__15684_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__15684_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$temp__5733__auto__,cljs.core.cst$sym$late,cljs.core.cst$sym$meta15686], null);
}));

(com.rpl.specter.t_com$rpl$specter15685.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15685.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15685");

(com.rpl.specter.t_com$rpl$specter15685.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15685");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15685.
 */
com.rpl.specter.__GT_t_com$rpl$specter15685 = (function com$rpl$specter$__GT_t_com$rpl$specter15685(path__$1,temp__5733__auto____$1,late__$1,meta15686){
return (new com.rpl.specter.t_com$rpl$specter15685(path__$1,temp__5733__auto____$1,late__$1,meta15686));
});

}

return (new com.rpl.specter.t_com$rpl$specter15685(path,temp__5733__auto__,late,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
}
};
var G__15688 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15689__i = 0, G__15689__a = new Array(arguments.length -  0);
while (G__15689__i < G__15689__a.length) {G__15689__a[G__15689__i] = arguments[G__15689__i + 0]; ++G__15689__i;}
  path = new cljs.core.IndexedSeq(G__15689__a,0,null);
} 
return G__15688__delegate.call(this,path);};
G__15688.cljs$lang$maxFixedArity = 0;
G__15688.cljs$lang$applyTo = (function (arglist__15690){
var path = cljs.core.seq(arglist__15690);
return G__15688__delegate(path);
});
G__15688.cljs$core$IFn$_invoke$arity$variadic = G__15688__delegate;
return G__15688;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15696__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15693 = (function (path,temp__5733__auto__,late,meta15694){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta15694 = meta15694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15695,meta15694__$1){
var self__ = this;
var _15695__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15693(self__.path,self__.temp__5733__auto__,self__.late,meta15694__$1));
}));

(com.rpl.specter.t_com$rpl$specter15693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15695){
var self__ = this;
var _15695__$1 = this;
return self__.meta15694;
}));

(com.rpl.specter.t_com$rpl$specter15693.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15693.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__15691_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__15691_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15693.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__15692_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__15692_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$temp__5733__auto__,cljs.core.cst$sym$late,cljs.core.cst$sym$meta15694], null);
}));

(com.rpl.specter.t_com$rpl$specter15693.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15693.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15693");

(com.rpl.specter.t_com$rpl$specter15693.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15693");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15693.
 */
com.rpl.specter.__GT_t_com$rpl$specter15693 = (function com$rpl$specter$__GT_t_com$rpl$specter15693(path__$1,temp__5733__auto____$1,late__$1,meta15694){
return (new com.rpl.specter.t_com$rpl$specter15693(path__$1,temp__5733__auto____$1,late__$1,meta15694));
});

}

return (new com.rpl.specter.t_com$rpl$specter15693(path,temp__5733__auto__,late,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
}
};
var G__15696 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15697__i = 0, G__15697__a = new Array(arguments.length -  0);
while (G__15697__i < G__15697__a.length) {G__15697__a[G__15697__i] = arguments[G__15697__i + 0]; ++G__15697__i;}
  path = new cljs.core.IndexedSeq(G__15697__a,0,null);
} 
return G__15696__delegate.call(this,path);};
G__15696.cljs$lang$maxFixedArity = 0;
G__15696.cljs$lang$applyTo = (function (arglist__15698){
var path = cljs.core.seq(arglist__15698);
return G__15696__delegate(path);
});
G__15696.cljs$core$IFn$_invoke$arity$variadic = G__15696__delegate;
return G__15696;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15701__delegate = function (path){
var G__15699 = com.rpl.specter.ALL;
var G__15700 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__15699,G__15700) : com.rpl.specter.subselect.call(null,G__15699,G__15700));
};
var G__15701 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15702__i = 0, G__15702__a = new Array(arguments.length -  0);
while (G__15702__i < G__15702__a.length) {G__15702__a[G__15702__i] = arguments[G__15702__i + 0]; ++G__15702__i;}
  path = new cljs.core.IndexedSeq(G__15702__a,0,null);
} 
return G__15701__delegate.call(this,path);};
G__15701.cljs$lang$maxFixedArity = 0;
G__15701.cljs$lang$applyTo = (function (arglist__15703){
var path = cljs.core.seq(arglist__15703);
return G__15701__delegate(path);
});
G__15701.cljs$core$IFn$_invoke$arity$variadic = G__15701__delegate;
return G__15701;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15704 = (function (path,update_fn,late,late_fn,meta15705){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta15705 = meta15705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15706,meta15705__$1){
var self__ = this;
var _15706__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15704(self__.path,self__.update_fn,self__.late,self__.late_fn,meta15705__$1));
}));

(com.rpl.specter.t_com$rpl$specter15704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15706){
var self__ = this;
var _15706__$1 = this;
return self__.meta15705;
}));

(com.rpl.specter.t_com$rpl$specter15704.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15704.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter15704.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter15704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$update_DASH_fn,cljs.core.cst$sym$late,cljs.core.cst$sym$late_DASH_fn,cljs.core.cst$sym$meta15705], null);
}));

(com.rpl.specter.t_com$rpl$specter15704.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15704.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15704");

(com.rpl.specter.t_com$rpl$specter15704.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15704");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15704.
 */
com.rpl.specter.__GT_t_com$rpl$specter15704 = (function com$rpl$specter$__GT_t_com$rpl$specter15704(path__$1,update_fn__$1,late__$1,late_fn__$1,meta15705){
return (new com.rpl.specter.t_com$rpl$specter15704(path__$1,update_fn__$1,late__$1,late_fn__$1,meta15705));
});

}

return (new com.rpl.specter.t_com$rpl$specter15704(path,update_fn,late,late_fn,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15707 = (function (path,reduce_fn,late,late_fn,meta15708){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta15708 = meta15708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15709,meta15708__$1){
var self__ = this;
var _15709__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15707(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta15708__$1));
}));

(com.rpl.specter.t_com$rpl$specter15707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15709){
var self__ = this;
var _15709__$1 = this;
return self__.meta15708;
}));

(com.rpl.specter.t_com$rpl$specter15707.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15707.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter15707.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter15707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$reduce_DASH_fn,cljs.core.cst$sym$late,cljs.core.cst$sym$late_DASH_fn,cljs.core.cst$sym$meta15708], null);
}));

(com.rpl.specter.t_com$rpl$specter15707.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15707.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15707");

(com.rpl.specter.t_com$rpl$specter15707.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15707");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15707.
 */
com.rpl.specter.__GT_t_com$rpl$specter15707 = (function com$rpl$specter$__GT_t_com$rpl$specter15707(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta15708){
return (new com.rpl.specter.t_com$rpl$specter15707(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta15708));
});

}

return (new com.rpl.specter.t_com$rpl$specter15707(path,reduce_fn,late,late_fn,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__15711 = (function (p1__15710_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15710_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__15711) : com.rpl.specter.pred.call(null,G__15711));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__15713 = (function (p1__15712_SHARP_){
return (p1__15712_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__15713) : com.rpl.specter.pred.call(null,G__15713));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__15715 = (function (p1__15714_SHARP_){
return (p1__15714_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__15715) : com.rpl.specter.pred.call(null,G__15715));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__15717 = (function (p1__15716_SHARP_){
return (p1__15716_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__15717) : com.rpl.specter.pred.call(null,G__15717));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__15719 = (function (p1__15718_SHARP_){
return (p1__15718_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__15719) : com.rpl.specter.pred.call(null,G__15719));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"null",(function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"string",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"number",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"boolean",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"function",(function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__15720 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15720) : next_fn.call(null,G__15720));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__15721 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15721) : next_fn.call(null,G__15721));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15722 = (function (v,meta15723){
this.v = v;
this.meta15723 = meta15723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15724,meta15723__$1){
var self__ = this;
var _15724__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15722(self__.v,meta15723__$1));
}));

(com.rpl.specter.t_com$rpl$specter15722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15724){
var self__ = this;
var _15724__$1 = this;
return self__.meta15723;
}));

(com.rpl.specter.t_com$rpl$specter15722.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15722.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter15722.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter15722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v,cljs.core.cst$sym$meta15723], null);
}));

(com.rpl.specter.t_com$rpl$specter15722.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15722.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15722");

(com.rpl.specter.t_com$rpl$specter15722.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15722");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15722.
 */
com.rpl.specter.__GT_t_com$rpl$specter15722 = (function com$rpl$specter$__GT_t_com$rpl$specter15722(v__$1,meta15723){
return (new com.rpl.specter.t_com$rpl$specter15722(v__$1,meta15723));
});

}

return (new com.rpl.specter.t_com$rpl$specter15722(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__15725 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__15725) : com.rpl.specter.nil__GT_val.call(null,G__15725));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__15726 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__15726) : com.rpl.specter.nil__GT_val.call(null,G__15726));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__15727 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__15727) : com.rpl.specter.nil__GT_val.call(null,G__15727));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__15728 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15728) : next_fn.call(null,G__15728));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__15729 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15729) : next_fn.call(null,G__15729));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15730 = (function (meta15731){
this.meta15731 = meta15731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15732,meta15731__$1){
var self__ = this;
var _15732__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15730(meta15731__$1));
}));

(com.rpl.specter.t_com$rpl$specter15730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15732){
var self__ = this;
var _15732__$1 = this;
return self__.meta15731;
}));

(com.rpl.specter.t_com$rpl$specter15730.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15730.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter15730.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter15730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15731], null);
}));

(com.rpl.specter.t_com$rpl$specter15730.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15730.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15730");

(com.rpl.specter.t_com$rpl$specter15730.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15730");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15730.
 */
com.rpl.specter.__GT_t_com$rpl$specter15730 = (function com$rpl$specter$__GT_t_com$rpl$specter15730(meta15731){
return (new com.rpl.specter.t_com$rpl$specter15730(meta15731));
});

}

return (new com.rpl.specter.t_com$rpl$specter15730(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__15733 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15733) : next_fn.call(null,G__15733));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__15734 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15734) : next_fn.call(null,G__15734));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15735 = (function (meta15736){
this.meta15736 = meta15736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15737,meta15736__$1){
var self__ = this;
var _15737__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15735(meta15736__$1));
}));

(com.rpl.specter.t_com$rpl$specter15735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15737){
var self__ = this;
var _15737__$1 = this;
return self__.meta15736;
}));

(com.rpl.specter.t_com$rpl$specter15735.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15735.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter15735.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter15735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15736], null);
}));

(com.rpl.specter.t_com$rpl$specter15735.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15735.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15735");

(com.rpl.specter.t_com$rpl$specter15735.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15735");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15735.
 */
com.rpl.specter.__GT_t_com$rpl$specter15735 = (function com$rpl$specter$__GT_t_com$rpl$specter15735(meta15736){
return (new com.rpl.specter.t_com$rpl$specter15735(meta15736));
});

}

return (new com.rpl.specter.t_com$rpl$specter15735(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__15738 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15738) : next_fn.call(null,G__15738));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__15739 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__15739) : next_fn.call(null,G__15739));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15740 = (function (meta15741){
this.meta15741 = meta15741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15742,meta15741__$1){
var self__ = this;
var _15742__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15740(meta15741__$1));
}));

(com.rpl.specter.t_com$rpl$specter15740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15742){
var self__ = this;
var _15742__$1 = this;
return self__.meta15741;
}));

(com.rpl.specter.t_com$rpl$specter15740.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15740.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter15740.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__13663__auto__,vals__13664__auto__,structure,next_fn__13665__auto__){
var self__ = this;
var this__13663__auto____$1 = this;
var next_fn = (function (s__13666__auto__){
return (next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__13665__auto__.cljs$core$IFn$_invoke$arity$2(vals__13664__auto__,s__13666__auto__) : next_fn__13665__auto__.call(null,vals__13664__auto__,s__13666__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter15740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15741], null);
}));

(com.rpl.specter.t_com$rpl$specter15740.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15740.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15740");

(com.rpl.specter.t_com$rpl$specter15740.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15740");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15740.
 */
com.rpl.specter.__GT_t_com$rpl$specter15740 = (function com$rpl$specter$__GT_t_com$rpl$specter15740(meta15741){
return (new com.rpl.specter.t_com$rpl$specter15740(meta15741));
});

}

return (new com.rpl.specter.t_com$rpl$specter15740(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15750__delegate = function (path){
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15743 = (function (path,late,meta15744){
this.path = path;
this.late = late;
this.meta15744 = meta15744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15745,meta15744__$1){
var self__ = this;
var _15745__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15743(self__.path,self__.late,meta15744__$1));
}));

(com.rpl.specter.t_com$rpl$specter15743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15745){
var self__ = this;
var _15745__$1 = this;
return self__.meta15744;
}));

(com.rpl.specter.t_com$rpl$specter15743.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15743.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14447__auto__,vals__14448__auto__,structure,next_fn__14449__auto__){
var self__ = this;
var this__14447__auto____$1 = this;
var G__15746 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__14448__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__15747 = structure;
return (next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2(G__15746,G__15747) : next_fn__14449__auto__.call(null,G__15746,G__15747));
}));

(com.rpl.specter.t_com$rpl$specter15743.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14447__auto__,vals__14448__auto__,structure,next_fn__14449__auto__){
var self__ = this;
var this__14447__auto____$1 = this;
var G__15748 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__14448__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__15749 = structure;
return (next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2(G__15748,G__15749) : next_fn__14449__auto__.call(null,G__15748,G__15749));
}));

(com.rpl.specter.t_com$rpl$specter15743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta15744], null);
}));

(com.rpl.specter.t_com$rpl$specter15743.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15743.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15743");

(com.rpl.specter.t_com$rpl$specter15743.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15743");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15743.
 */
com.rpl.specter.__GT_t_com$rpl$specter15743 = (function com$rpl$specter$__GT_t_com$rpl$specter15743(path__$1,late__$1,meta15744){
return (new com.rpl.specter.t_com$rpl$specter15743(path__$1,late__$1,meta15744));
});

}

return (new com.rpl.specter.t_com$rpl$specter15743(path,late,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
};
var G__15750 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15751__i = 0, G__15751__a = new Array(arguments.length -  0);
while (G__15751__i < G__15751__a.length) {G__15751__a[G__15751__i] = arguments[G__15751__i + 0]; ++G__15751__i;}
  path = new cljs.core.IndexedSeq(G__15751__a,0,null);
} 
return G__15750__delegate.call(this,path);};
G__15750.cljs$lang$maxFixedArity = 0;
G__15750.cljs$lang$applyTo = (function (arglist__15752){
var path = cljs.core.seq(arglist__15752);
return G__15750__delegate(path);
});
G__15750.cljs$core$IFn$_invoke$arity$variadic = G__15750__delegate;
return G__15750;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15760__delegate = function (path){
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15753 = (function (path,late,meta15754){
this.path = path;
this.late = late;
this.meta15754 = meta15754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15755,meta15754__$1){
var self__ = this;
var _15755__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15753(self__.path,self__.late,meta15754__$1));
}));

(com.rpl.specter.t_com$rpl$specter15753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15755){
var self__ = this;
var _15755__$1 = this;
return self__.meta15754;
}));

(com.rpl.specter.t_com$rpl$specter15753.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15753.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14447__auto__,vals__14448__auto__,structure,next_fn__14449__auto__){
var self__ = this;
var this__14447__auto____$1 = this;
var G__15756 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__14448__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__15757 = structure;
return (next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2(G__15756,G__15757) : next_fn__14449__auto__.call(null,G__15756,G__15757));
}));

(com.rpl.specter.t_com$rpl$specter15753.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14447__auto__,vals__14448__auto__,structure,next_fn__14449__auto__){
var self__ = this;
var this__14447__auto____$1 = this;
var G__15758 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__14448__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__15759 = structure;
return (next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2(G__15758,G__15759) : next_fn__14449__auto__.call(null,G__15758,G__15759));
}));

(com.rpl.specter.t_com$rpl$specter15753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta15754], null);
}));

(com.rpl.specter.t_com$rpl$specter15753.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15753.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15753");

(com.rpl.specter.t_com$rpl$specter15753.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15753");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15753.
 */
com.rpl.specter.__GT_t_com$rpl$specter15753 = (function com$rpl$specter$__GT_t_com$rpl$specter15753(path__$1,late__$1,meta15754){
return (new com.rpl.specter.t_com$rpl$specter15753(path__$1,late__$1,meta15754));
});

}

return (new com.rpl.specter.t_com$rpl$specter15753(path,late,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
};
var G__15760 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15761__i = 0, G__15761__a = new Array(arguments.length -  0);
while (G__15761__i < G__15761__a.length) {G__15761__a[G__15761__i] = arguments[G__15761__i + 0]; ++G__15761__i;}
  path = new cljs.core.IndexedSeq(G__15761__a,0,null);
} 
return G__15760__delegate.call(this,path);};
G__15760.cljs$lang$maxFixedArity = 0;
G__15760.cljs$lang$applyTo = (function (arglist__15762){
var path = cljs.core.seq(arglist__15762);
return G__15760__delegate(path);
});
G__15760.cljs$core$IFn$_invoke$arity$variadic = G__15760__delegate;
return G__15760;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15763 = (function (val,meta15764){
this.val = val;
this.meta15764 = meta15764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15765,meta15764__$1){
var self__ = this;
var _15765__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15763(self__.val,meta15764__$1));
}));

(com.rpl.specter.t_com$rpl$specter15763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15765){
var self__ = this;
var _15765__$1 = this;
return self__.meta15764;
}));

(com.rpl.specter.t_com$rpl$specter15763.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15763.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__14447__auto__,vals__14448__auto__,structure,next_fn__14449__auto__){
var self__ = this;
var this__14447__auto____$1 = this;
var G__15766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__14448__auto__,self__.val);
var G__15767 = structure;
return (next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2(G__15766,G__15767) : next_fn__14449__auto__.call(null,G__15766,G__15767));
}));

(com.rpl.specter.t_com$rpl$specter15763.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__14447__auto__,vals__14448__auto__,structure,next_fn__14449__auto__){
var self__ = this;
var this__14447__auto____$1 = this;
var G__15768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__14448__auto__,self__.val);
var G__15769 = structure;
return (next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__14449__auto__.cljs$core$IFn$_invoke$arity$2(G__15768,G__15769) : next_fn__14449__auto__.call(null,G__15768,G__15769));
}));

(com.rpl.specter.t_com$rpl$specter15763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta15764], null);
}));

(com.rpl.specter.t_com$rpl$specter15763.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15763.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15763");

(com.rpl.specter.t_com$rpl$specter15763.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15763");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15763.
 */
com.rpl.specter.__GT_t_com$rpl$specter15763 = (function com$rpl$specter$__GT_t_com$rpl$specter15763(val__$1,meta15764){
return (new com.rpl.specter.t_com$rpl$specter15763(val__$1,meta15764));
});

}

return (new com.rpl.specter.t_com$rpl$specter15763(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15775__delegate = function (path){
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15770 = (function (path,late,meta15771){
this.path = path;
this.late = late;
this.meta15771 = meta15771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15772,meta15771__$1){
var self__ = this;
var _15772__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15770(self__.path,self__.late,meta15771__$1));
}));

(com.rpl.specter.t_com$rpl$specter15770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15772){
var self__ = this;
var _15772__$1 = this;
return self__.meta15771;
}));

(com.rpl.specter.t_com$rpl$specter15770.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15770.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter15770.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter15770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta15771], null);
}));

(com.rpl.specter.t_com$rpl$specter15770.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15770.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15770");

(com.rpl.specter.t_com$rpl$specter15770.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15770");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15770.
 */
com.rpl.specter.__GT_t_com$rpl$specter15770 = (function com$rpl$specter$__GT_t_com$rpl$specter15770(path__$1,late__$1,meta15771){
return (new com.rpl.specter.t_com$rpl$specter15770(path__$1,late__$1,meta15771));
});

}

return (new com.rpl.specter.t_com$rpl$specter15770(path,late,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
};
var G__15775 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15776__i = 0, G__15776__a = new Array(arguments.length -  0);
while (G__15776__i < G__15776__a.length) {G__15776__a[G__15776__i] = arguments[G__15776__i + 0]; ++G__15776__i;}
  path = new cljs.core.IndexedSeq(G__15776__a,0,null);
} 
return G__15775__delegate.call(this,path);};
G__15775.cljs$lang$maxFixedArity = 0;
G__15775.cljs$lang$applyTo = (function (arglist__15777){
var path = cljs.core.seq(arglist__15777);
return G__15775__delegate(path);
});
G__15775.cljs$core$IFn$_invoke$arity$variadic = G__15775__delegate;
return G__15775;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15778 = (function (meta15779){
this.meta15779 = meta15779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15780,meta15779__$1){
var self__ = this;
var _15780__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15778(meta15779__$1));
}));

(com.rpl.specter.t_com$rpl$specter15778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15780){
var self__ = this;
var _15780__$1 = this;
return self__.meta15779;
}));

(com.rpl.specter.t_com$rpl$specter15778.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15778.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__15781 = cljs.core.PersistentVector.EMPTY;
var G__15782 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__15781,G__15782) : next_fn.call(null,G__15781,G__15782));
}));

(com.rpl.specter.t_com$rpl$specter15778.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__15783 = cljs.core.PersistentVector.EMPTY;
var G__15784 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__15783,G__15784) : next_fn.call(null,G__15783,G__15784));
}));

(com.rpl.specter.t_com$rpl$specter15778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15779], null);
}));

(com.rpl.specter.t_com$rpl$specter15778.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15778.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15778");

(com.rpl.specter.t_com$rpl$specter15778.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15778");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15778.
 */
com.rpl.specter.__GT_t_com$rpl$specter15778 = (function com$rpl$specter$__GT_t_com$rpl$specter15778(meta15779){
return (new com.rpl.specter.t_com$rpl$specter15778(meta15779));
});

}

return (new com.rpl.specter.t_com$rpl$specter15778(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__15793 = null;
var G__15793__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__15793__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15787 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta15788){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta15788 = meta15788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15789,meta15788__$1){
var self__ = this;
var _15789__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15787(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta15788__$1));
}));

(com.rpl.specter.t_com$rpl$specter15787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15789){
var self__ = this;
var _15789__$1 = this;
return self__.meta15788;
}));

(com.rpl.specter.t_com$rpl$specter15787.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15787.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter15787.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter15787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_p,cljs.core.cst$sym$then_DASH_path,cljs.core.cst$sym$else_DASH_path,cljs.core.cst$sym$temp__5733__auto__,cljs.core.cst$sym$afn,cljs.core.cst$sym$late_DASH_then,cljs.core.cst$sym$late_DASH_else,cljs.core.cst$sym$meta15788], null);
}));

(com.rpl.specter.t_com$rpl$specter15787.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15787.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15787");

(com.rpl.specter.t_com$rpl$specter15787.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15787");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15787.
 */
com.rpl.specter.__GT_t_com$rpl$specter15787 = (function com$rpl$specter$__GT_t_com$rpl$specter15787(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta15788){
return (new com.rpl.specter.t_com$rpl$specter15787(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta15788));
});

}

return (new com.rpl.specter.t_com$rpl$specter15787(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
} else {
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15790 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta15791){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta15791 = meta15791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15792,meta15791__$1){
var self__ = this;
var _15792__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15790(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta15791__$1));
}));

(com.rpl.specter.t_com$rpl$specter15790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15792){
var self__ = this;
var _15792__$1 = this;
return self__.meta15791;
}));

(com.rpl.specter.t_com$rpl$specter15790.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15790.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__15785_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__15785_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter15790.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__15786_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__15786_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter15790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_p,cljs.core.cst$sym$then_DASH_path,cljs.core.cst$sym$else_DASH_path,cljs.core.cst$sym$temp__5733__auto__,cljs.core.cst$sym$late_DASH_cond,cljs.core.cst$sym$late_DASH_then,cljs.core.cst$sym$late_DASH_else,cljs.core.cst$sym$meta15791], null);
}));

(com.rpl.specter.t_com$rpl$specter15790.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15790.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15790");

(com.rpl.specter.t_com$rpl$specter15790.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15790");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15790.
 */
com.rpl.specter.__GT_t_com$rpl$specter15790 = (function com$rpl$specter$__GT_t_com$rpl$specter15790(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta15791){
return (new com.rpl.specter.t_com$rpl$specter15790(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta15791));
});

}

return (new com.rpl.specter.t_com$rpl$specter15790(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
}
});
G__15793 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__15793__2.call(this,cond_p,then_path);
case 3:
return G__15793__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15793.cljs$core$IFn$_invoke$arity$2 = G__15793__2;
G__15793.cljs$core$IFn$_invoke$arity$3 = G__15793__3;
return G__15793;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15798__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__15794){
var vec__15795 = p__15794;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15795,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15795,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__15798 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__15799__i = 0, G__15799__a = new Array(arguments.length -  0);
while (G__15799__i < G__15799__a.length) {G__15799__a[G__15799__i] = arguments[G__15799__i + 0]; ++G__15799__i;}
  conds = new cljs.core.IndexedSeq(G__15799__a,0,null);
} 
return G__15798__delegate.call(this,conds);};
G__15798.cljs$lang$maxFixedArity = 0;
G__15798.cljs$lang$applyTo = (function (arglist__15800){
var conds = cljs.core.seq(arglist__15800);
return G__15798__delegate(conds);
});
G__15798.cljs$core$IFn$_invoke$arity$variadic = G__15798__delegate;
return G__15798;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__15808 = null;
var G__15808__0 = (function (){
return com.rpl.specter.STAY;
});
var G__15808__1 = (function (path){
return path;
});
var G__15808__2 = (function (path1,path2){
var builder__14450__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter15801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter15801 = (function (path1,path2,late1,late2,meta15802){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta15802 = meta15802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter15801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15803,meta15802__$1){
var self__ = this;
var _15803__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter15801(self__.path1,self__.path2,self__.late1,self__.late2,meta15802__$1));
}));

(com.rpl.specter.t_com$rpl$specter15801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15803){
var self__ = this;
var _15803__$1 = this;
return self__.meta15802;
}));

(com.rpl.specter.t_com$rpl$specter15801.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter15801.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter15801.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter15801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path1,cljs.core.cst$sym$path2,cljs.core.cst$sym$late1,cljs.core.cst$sym$late2,cljs.core.cst$sym$meta15802], null);
}));

(com.rpl.specter.t_com$rpl$specter15801.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter15801.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter15801");

(com.rpl.specter.t_com$rpl$specter15801.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter15801");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter15801.
 */
com.rpl.specter.__GT_t_com$rpl$specter15801 = (function com$rpl$specter$__GT_t_com$rpl$specter15801(path1__$1,path2__$1,late1__$1,late2__$1,meta15802){
return (new com.rpl.specter.t_com$rpl$specter15801(path1__$1,path2__$1,late1__$1,late2__$1,meta15802));
});

}

return (new com.rpl.specter.t_com$rpl$specter15801(path1,path2,late1,late2,null));
}));
var curr_params__14451__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__14451__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__14450__auto__,curr_params__14451__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__14450__auto__,curr_params__14451__auto__,null);
}
});
var G__15808__3 = (function() { 
var G__15809__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__15809 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__15810__i = 0, G__15810__a = new Array(arguments.length -  2);
while (G__15810__i < G__15810__a.length) {G__15810__a[G__15810__i] = arguments[G__15810__i + 2]; ++G__15810__i;}
  paths = new cljs.core.IndexedSeq(G__15810__a,0,null);
} 
return G__15809__delegate.call(this,path1,path2,paths);};
G__15809.cljs$lang$maxFixedArity = 2;
G__15809.cljs$lang$applyTo = (function (arglist__15811){
var path1 = cljs.core.first(arglist__15811);
arglist__15811 = cljs.core.next(arglist__15811);
var path2 = cljs.core.first(arglist__15811);
var paths = cljs.core.rest(arglist__15811);
return G__15809__delegate(path1,path2,paths);
});
G__15809.cljs$core$IFn$_invoke$arity$variadic = G__15809__delegate;
return G__15809;
})()
;
G__15808 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__15808__0.call(this);
case 1:
return G__15808__1.call(this,path1);
case 2:
return G__15808__2.call(this,path1,path2);
default:
var G__15812 = null;
if (arguments.length > 2) {
var G__15813__i = 0, G__15813__a = new Array(arguments.length -  2);
while (G__15813__i < G__15813__a.length) {G__15813__a[G__15813__i] = arguments[G__15813__i + 2]; ++G__15813__i;}
G__15812 = new cljs.core.IndexedSeq(G__15813__a,0,null);
}
return G__15808__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__15812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15808.cljs$lang$maxFixedArity = 2;
G__15808.cljs$lang$applyTo = G__15808__3.cljs$lang$applyTo;
G__15808.cljs$core$IFn$_invoke$arity$0 = G__15808__0;
G__15808.cljs$core$IFn$_invoke$arity$1 = G__15808__1;
G__15808.cljs$core$IFn$_invoke$arity$2 = G__15808__2;
G__15808.cljs$core$IFn$_invoke$arity$variadic = G__15808__3.cljs$core$IFn$_invoke$arity$variadic;
return G__15808;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15814__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__15814 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15815__i = 0, G__15815__a = new Array(arguments.length -  0);
while (G__15815__i < G__15815__a.length) {G__15815__a[G__15815__i] = arguments[G__15815__i + 0]; ++G__15815__i;}
  path = new cljs.core.IndexedSeq(G__15815__a,0,null);
} 
return G__15814__delegate.call(this,path);};
G__15814.cljs$lang$maxFixedArity = 0;
G__15814.cljs$lang$applyTo = (function (arglist__15816){
var path = cljs.core.seq(arglist__15816);
return G__15814__delegate(path);
});
G__15814.cljs$core$IFn$_invoke$arity$variadic = G__15814__delegate;
return G__15814;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15817__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__15817 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15818__i = 0, G__15818__a = new Array(arguments.length -  0);
while (G__15818__i < G__15818__a.length) {G__15818__a[G__15818__i] = arguments[G__15818__i + 0]; ++G__15818__i;}
  path = new cljs.core.IndexedSeq(G__15818__a,0,null);
} 
return G__15817__delegate.call(this,path);};
G__15817.cljs$lang$maxFixedArity = 0;
G__15817.cljs$lang$applyTo = (function (arglist__15819){
var path = cljs.core.seq(arglist__15819);
return G__15817__delegate(path);
});
G__15817.cljs$core$IFn$_invoke$arity$variadic = G__15817__delegate;
return G__15817;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__14457__auto__ = com.rpl.specter.pathcache15820;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15821 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},cljs.core.cst$sym$com$rpl$specter_SLASH_cond_DASH_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$cond_DASH_path,"target/public/cljs-out/dep/com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),cljs.core.cst$sym$cond_DASH_path),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},cljs.core.cst$sym$com$rpl$specter_SLASH_pred,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$direct_DASH_nav,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$pred,"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),cljs.core.cst$sym$pred),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,cljs.core.cst$sym$afn)], null),cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},cljs.core.cst$sym$com$rpl$specter_SLASH_STAY,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$STAY,"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),cljs.core.cst$sym$STAY),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$coll_QMARK_,"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),cljs.core.cst$sym$coll_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL,"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),cljs.core.cst$sym$ALL),com.rpl.specter.impl.__GT_LocalSym(p,cljs.core.cst$sym$p)], null)], null),cljs.core.list(cljs.core.cst$sym$cond_DASH_path,cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn),cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$p], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_path,cljs.core.cst$sym$pred,cljs.core.cst$sym$afn,cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null),cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null));
com.rpl.specter.pathcache15820 = info15821;

return info15821;
})():info__14457__auto__);
var precompiled15822 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15823 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled15822.cljs$core$IFn$_invoke$arity$1 ? precompiled15822.cljs$core$IFn$_invoke$arity$1(G__15823) : precompiled15822.call(null,G__15823));
} else {
return precompiled15822;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__14457__auto__ = com.rpl.specter.pathcache15824;
var info__14457__auto____$1 = (((info__14457__auto__ == null))?(function (){var info15825 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},cljs.core.cst$sym$com$rpl$specter_SLASH_cond_DASH_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$cond_DASH_path,"target/public/cljs-out/dep/com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),cljs.core.cst$sym$cond_DASH_path),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},cljs.core.cst$sym$com$rpl$specter_SLASH_pred,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$direct_DASH_nav,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$pred,"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),cljs.core.cst$sym$pred),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,cljs.core.cst$sym$afn)], null),cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},cljs.core.cst$sym$com$rpl$specter_SLASH_STAY,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$STAY,"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),cljs.core.cst$sym$STAY),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$coll_QMARK_,"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),cljs.core.cst$sym$coll_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL_DASH_WITH_DASH_META,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,"target/public/cljs-out/dep/com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),cljs.core.cst$sym$ALL_DASH_WITH_DASH_META),com.rpl.specter.impl.__GT_LocalSym(p,cljs.core.cst$sym$p)], null)], null),cljs.core.list(cljs.core.cst$sym$cond_DASH_path,cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn),cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$p], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_path,cljs.core.cst$sym$pred,cljs.core.cst$sym$afn,cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null),cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null));
com.rpl.specter.pathcache15824 = info15825;

return info15825;
})():info__14457__auto__);
var precompiled15826 = com.rpl.specter.impl.cached_path_info_precompiled(info__14457__auto____$1);
var dynamic_QMARK___14458__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__14457__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___14458__auto__)){
var G__15827 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled15826.cljs$core$IFn$_invoke$arity$1 ? precompiled15826.cljs$core$IFn$_invoke$arity$1(G__15827) : precompiled15826.call(null,G__15827));
} else {
return precompiled15826;
}
})());

return p;
}));
var empty__GT_NONE_15830 = (function (){var G__15828 = cljs.core.empty_QMARK_;
var G__15829 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__15828,G__15829) : com.rpl.specter.if_path.call(null,G__15828,G__15829));
})();
var compact_STAR__15831 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_15830) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_15830));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__15832__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__15831,path);
};
var G__15832 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__15833__i = 0, G__15833__a = new Array(arguments.length -  0);
while (G__15833__i < G__15833__a.length) {G__15833__a[G__15833__i] = arguments[G__15833__i + 0]; ++G__15833__i;}
  path = new cljs.core.IndexedSeq(G__15833__a,0,null);
} 
return G__15832__delegate.call(this,path);};
G__15832.cljs$lang$maxFixedArity = 0;
G__15832.cljs$lang$applyTo = (function (arglist__15834){
var path = cljs.core.seq(arglist__15834);
return G__15832__delegate(path);
});
G__15832.cljs$core$IFn$_invoke$arity$variadic = G__15832__delegate;
return G__15832;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
