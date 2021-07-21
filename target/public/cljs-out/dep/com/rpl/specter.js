// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
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
var G__18625__delegate = function (args){
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
var G__18625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18626__i = 0, G__18626__a = new Array(arguments.length -  0);
while (G__18626__i < G__18626__a.length) {G__18626__a[G__18626__i] = arguments[G__18626__i + 0]; ++G__18626__i;}
  args = new cljs.core.IndexedSeq(G__18626__a,0,null);
} 
return G__18625__delegate.call(this,args);};
G__18625.cljs$lang$maxFixedArity = 0;
G__18625.cljs$lang$applyTo = (function (arglist__18627){
var args = cljs.core.seq(arglist__18627);
return G__18625__delegate(args);
});
G__18625.cljs$core$IFn$_invoke$arity$variadic = G__18625__delegate;
return G__18625;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4777__auto__ = [];
var len__4771__auto___18644 = arguments.length;
var i__4772__auto___18645 = (0);
while(true){
if((i__4772__auto___18645 < len__4771__auto___18644)){
args__4777__auto__.push((arguments[i__4772__auto___18645]));

var G__18646 = (i__4772__auto___18645 + (1));
i__4772__auto___18645 = G__18646;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq18643){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18643));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__18647 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18648 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__18647,G__18648) : com.rpl.specter.compiled_select.call(null,G__18647,G__18648));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__18649 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18650 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__18649,G__18650) : com.rpl.specter.compiled_select_one.call(null,G__18649,G__18650));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__18651 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18652 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__18651,G__18652) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__18651,G__18652));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__18653 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18654 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__18653,G__18654) : com.rpl.specter.compiled_select_first.call(null,G__18653,G__18654));
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
var G__18655 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18656 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__18655,G__18656) : com.rpl.specter.compiled_select_any.call(null,G__18655,G__18656));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__18657 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18658 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__18657,G__18658) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__18657,G__18658));
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
var G__18659 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__18660 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__18659,G__18660) : com.rpl.specter.compiled_traverse.call(null,G__18659,G__18660));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__18661 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__18661) : com.rpl.specter.compiled_traverse_all.call(null,G__18661));
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
var G__18662 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18663 = transform_fn;
var G__18664 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__18662,G__18663,G__18664) : com.rpl.specter.compiled_transform.call(null,G__18662,G__18663,G__18664));
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
var G__18665 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18666 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__18665,G__18666) : com.rpl.specter.compiled_multi_transform.call(null,G__18665,G__18666));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__18667 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18668 = val;
var G__18669 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__18667,G__18668,G__18669) : com.rpl.specter.compiled_setval.call(null,G__18667,G__18668,G__18669));
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
var args__4777__auto__ = [];
var len__4771__auto___18681 = arguments.length;
var i__4772__auto___18682 = (0);
while(true){
if((i__4772__auto___18682 < len__4771__auto___18681)){
args__4777__auto__.push((arguments[i__4772__auto___18682]));

var G__18683 = (i__4772__auto___18682 + (1));
i__4772__auto___18682 = G__18683;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__18674){
var map__18675 = p__18674;
var map__18675__$1 = cljs.core.__destructure_map(map__18675);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18675__$1,cljs.core.cst$kw$merge_DASH_fn,cljs.core.concat);
var G__18676 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__18677 = transform_fn;
var G__18678 = structure;
var G__18679 = cljs.core.cst$kw$merge_DASH_fn;
var G__18680 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__18676,G__18677,G__18678,G__18679,G__18680) : com.rpl.specter.compiled_replace_in.call(null,G__18676,G__18677,G__18678,G__18679,G__18680));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq18670){
var G__18671 = cljs.core.first(seq18670);
var seq18670__$1 = cljs.core.next(seq18670);
var G__18672 = cljs.core.first(seq18670__$1);
var seq18670__$2 = cljs.core.next(seq18670__$1);
var G__18673 = cljs.core.first(seq18670__$2);
var seq18670__$3 = cljs.core.next(seq18670__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18671,G__18672,G__18673,seq18670__$3);
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
var G__18684__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__18684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18685__i = 0, G__18685__a = new Array(arguments.length -  0);
while (G__18685__i < G__18685__a.length) {G__18685__a[G__18685__i] = arguments[G__18685__i + 0]; ++G__18685__i;}
  args = new cljs.core.IndexedSeq(G__18685__a,0,null);
} 
return G__18684__delegate.call(this,args);};
G__18684.cljs$lang$maxFixedArity = 0;
G__18684.cljs$lang$applyTo = (function (arglist__18686){
var args = cljs.core.seq(arglist__18686);
return G__18684__delegate(args);
});
G__18684.cljs$core$IFn$_invoke$arity$variadic = G__18684__delegate;
return G__18684;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18687 = (function (meta18688){
this.meta18688 = meta18688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18689,meta18688__$1){
var self__ = this;
var _18689__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18687(meta18688__$1));
}));

(com.rpl.specter.t_com$rpl$specter18687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18689){
var self__ = this;
var _18689__$1 = this;
return self__.meta18688;
}));

(com.rpl.specter.t_com$rpl$specter18687.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18687.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter18687.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter18687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18688], null);
}));

(com.rpl.specter.t_com$rpl$specter18687.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18687.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18687");

(com.rpl.specter.t_com$rpl$specter18687.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18687");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18687.
 */
com.rpl.specter.__GT_t_com$rpl$specter18687 = (function com$rpl$specter$__GT_t_com$rpl$specter18687(meta18688){
return (new com.rpl.specter.t_com$rpl$specter18687(meta18688));
});

}

return (new com.rpl.specter.t_com$rpl$specter18687(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18690 = (function (afn,meta18691){
this.afn = afn;
this.meta18691 = meta18691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18692,meta18691__$1){
var self__ = this;
var _18692__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18690(self__.afn,meta18691__$1));
}));

(com.rpl.specter.t_com$rpl$specter18690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18692){
var self__ = this;
var _18692__$1 = this;
return self__.meta18691;
}));

(com.rpl.specter.t_com$rpl$specter18690.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18690.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter18690.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter18690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta18691], null);
}));

(com.rpl.specter.t_com$rpl$specter18690.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18690.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18690");

(com.rpl.specter.t_com$rpl$specter18690.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18690");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18690.
 */
com.rpl.specter.__GT_t_com$rpl$specter18690 = (function com$rpl$specter$__GT_t_com$rpl$specter18690(afn__$1,meta18691){
return (new com.rpl.specter.t_com$rpl$specter18690(afn__$1,meta18691));
});

}

return (new com.rpl.specter.t_com$rpl$specter18690(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18693 = (function (afn,meta18694){
this.afn = afn;
this.meta18694 = meta18694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18695,meta18694__$1){
var self__ = this;
var _18695__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18693(self__.afn,meta18694__$1));
}));

(com.rpl.specter.t_com$rpl$specter18693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18695){
var self__ = this;
var _18695__$1 = this;
return self__.meta18694;
}));

(com.rpl.specter.t_com$rpl$specter18693.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18693.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter18693.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter18693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta18694], null);
}));

(com.rpl.specter.t_com$rpl$specter18693.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18693.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18693");

(com.rpl.specter.t_com$rpl$specter18693.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18693");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18693.
 */
com.rpl.specter.__GT_t_com$rpl$specter18693 = (function com$rpl$specter$__GT_t_com$rpl$specter18693(afn__$1,meta18694){
return (new com.rpl.specter.t_com$rpl$specter18693(afn__$1,meta18694));
});

}

return (new com.rpl.specter.t_com$rpl$specter18693(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__18696 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__18696) : com.rpl.specter.terminal.call(null,G__18696));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18697 = (function (meta18698){
this.meta18698 = meta18698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18699,meta18698__$1){
var self__ = this;
var _18699__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18697(meta18698__$1));
}));

(com.rpl.specter.t_com$rpl$specter18697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18699){
var self__ = this;
var _18699__$1 = this;
return self__.meta18698;
}));

(com.rpl.specter.t_com$rpl$specter18697.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18697.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18697.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18698], null);
}));

(com.rpl.specter.t_com$rpl$specter18697.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18697.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18697");

(com.rpl.specter.t_com$rpl$specter18697.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18697");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18697.
 */
com.rpl.specter.__GT_t_com$rpl$specter18697 = (function com$rpl$specter$__GT_t_com$rpl$specter18697(meta18698){
return (new com.rpl.specter.t_com$rpl$specter18697(meta18698));
});

}

return (new com.rpl.specter.t_com$rpl$specter18697(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18700 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18700 = (function (meta18701){
this.meta18701 = meta18701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18702,meta18701__$1){
var self__ = this;
var _18702__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18700(meta18701__$1));
}));

(com.rpl.specter.t_com$rpl$specter18700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18702){
var self__ = this;
var _18702__$1 = this;
return self__.meta18701;
}));

(com.rpl.specter.t_com$rpl$specter18700.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18700.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18700.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter18700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18701], null);
}));

(com.rpl.specter.t_com$rpl$specter18700.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18700.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18700");

(com.rpl.specter.t_com$rpl$specter18700.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18700");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18700.
 */
com.rpl.specter.__GT_t_com$rpl$specter18700 = (function com$rpl$specter$__GT_t_com$rpl$specter18700(meta18701){
return (new com.rpl.specter.t_com$rpl$specter18700(meta18701));
});

}

return (new com.rpl.specter.t_com$rpl$specter18700(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,v){
var ret__14121__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18703 = (function (meta18704){
this.meta18704 = meta18704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18705,meta18704__$1){
var self__ = this;
var _18705__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18703(meta18704__$1));
}));

(com.rpl.specter.t_com$rpl$specter18703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18705){
var self__ = this;
var _18705__$1 = this;
return self__.meta18704;
}));

(com.rpl.specter.t_com$rpl$specter18703.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18703.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,v){
var ret__14121__auto__ = next_fn(v);
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter18703.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18704], null);
}));

(com.rpl.specter.t_com$rpl$specter18703.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18703.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18703");

(com.rpl.specter.t_com$rpl$specter18703.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18703");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18703.
 */
com.rpl.specter.__GT_t_com$rpl$specter18703 = (function com$rpl$specter$__GT_t_com$rpl$specter18703(meta18704){
return (new com.rpl.specter.t_com$rpl$specter18703(meta18704));
});

}

return (new com.rpl.specter.t_com$rpl$specter18703(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,k){
var ret__14121__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18706 = (function (meta18707){
this.meta18707 = meta18707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18708,meta18707__$1){
var self__ = this;
var _18708__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18706(meta18707__$1));
}));

(com.rpl.specter.t_com$rpl$specter18706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18708){
var self__ = this;
var _18708__$1 = this;
return self__.meta18707;
}));

(com.rpl.specter.t_com$rpl$specter18706.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18706.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,k){
var ret__14121__auto__ = next_fn(k);
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter18706.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18707], null);
}));

(com.rpl.specter.t_com$rpl$specter18706.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18706.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18706");

(com.rpl.specter.t_com$rpl$specter18706.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18706");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18706.
 */
com.rpl.specter.__GT_t_com$rpl$specter18706 = (function com$rpl$specter$__GT_t_com$rpl$specter18706(meta18707){
return (new com.rpl.specter.t_com$rpl$specter18706(meta18707));
});

}

return (new com.rpl.specter.t_com$rpl$specter18706(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18709 = (function (meta18710){
this.meta18710 = meta18710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18711,meta18710__$1){
var self__ = this;
var _18711__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18709(meta18710__$1));
}));

(com.rpl.specter.t_com$rpl$specter18709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18711){
var self__ = this;
var _18711__$1 = this;
return self__.meta18710;
}));

(com.rpl.specter.t_com$rpl$specter18709.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18709.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17628__auto__,vals__17629__auto__,structure,next_fn__17630__auto__){
var self__ = this;
var this__17628__auto____$1 = this;
var G__18712 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__17629__auto__,structure);
var G__18713 = structure;
return (next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2(G__18712,G__18713) : next_fn__17630__auto__.call(null,G__18712,G__18713));
}));

(com.rpl.specter.t_com$rpl$specter18709.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17628__auto__,vals__17629__auto__,structure,next_fn__17630__auto__){
var self__ = this;
var this__17628__auto____$1 = this;
var G__18714 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__17629__auto__,structure);
var G__18715 = structure;
return (next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2(G__18714,G__18715) : next_fn__17630__auto__.call(null,G__18714,G__18715));
}));

(com.rpl.specter.t_com$rpl$specter18709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18710], null);
}));

(com.rpl.specter.t_com$rpl$specter18709.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18709.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18709");

(com.rpl.specter.t_com$rpl$specter18709.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18709");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18709.
 */
com.rpl.specter.__GT_t_com$rpl$specter18709 = (function com$rpl$specter$__GT_t_com$rpl$specter18709(meta18710){
return (new com.rpl.specter.t_com$rpl$specter18709(meta18710));
});

}

return (new com.rpl.specter.t_com$rpl$specter18709(null));
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
var G__18716 = structure;
var G__18717 = s;
var G__18718 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__18719 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__18716,G__18717,G__18718,G__18719) : com.rpl.specter.navs.srange_transform.call(null,G__18716,G__18717,G__18718,G__18719));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18720 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18720 = (function (start_index_fn,end_index_fn,meta18721){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta18721 = meta18721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18722,meta18721__$1){
var self__ = this;
var _18722__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18720(self__.start_index_fn,self__.end_index_fn,meta18721__$1));
}));

(com.rpl.specter.t_com$rpl$specter18720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18722){
var self__ = this;
var _18722__$1 = this;
return self__.meta18721;
}));

(com.rpl.specter.t_com$rpl$specter18720.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18720.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18720.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__18723 = structure;
var G__18724 = s;
var G__18725 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__18726 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__18723,G__18724,G__18725,G__18726) : com.rpl.specter.navs.srange_transform.call(null,G__18723,G__18724,G__18725,G__18726));
}));

(com.rpl.specter.t_com$rpl$specter18720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start_DASH_index_DASH_fn,cljs.core.cst$sym$end_DASH_index_DASH_fn,cljs.core.cst$sym$meta18721], null);
}));

(com.rpl.specter.t_com$rpl$specter18720.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18720.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18720");

(com.rpl.specter.t_com$rpl$specter18720.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18720");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18720.
 */
com.rpl.specter.__GT_t_com$rpl$specter18720 = (function com$rpl$specter$__GT_t_com$rpl$specter18720(start_index_fn__$1,end_index_fn__$1,meta18721){
return (new com.rpl.specter.t_com$rpl$specter18720(start_index_fn__$1,end_index_fn__$1,meta18721));
});

}

return (new com.rpl.specter.t_com$rpl$specter18720(start_index_fn,end_index_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18727 = (function (start,end,meta18728){
this.start = start;
this.end = end;
this.meta18728 = meta18728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18729,meta18728__$1){
var self__ = this;
var _18729__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18727(self__.start,self__.end,meta18728__$1));
}));

(com.rpl.specter.t_com$rpl$specter18727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18729){
var self__ = this;
var _18729__$1 = this;
return self__.meta18728;
}));

(com.rpl.specter.t_com$rpl$specter18727.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18727.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18727.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter18727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$end,cljs.core.cst$sym$meta18728], null);
}));

(com.rpl.specter.t_com$rpl$specter18727.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18727.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18727");

(com.rpl.specter.t_com$rpl$specter18727.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18727");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18727.
 */
com.rpl.specter.__GT_t_com$rpl$specter18727 = (function com$rpl$specter$__GT_t_com$rpl$specter18727(start__$1,end__$1,meta18728){
return (new com.rpl.specter.t_com$rpl$specter18727(start__$1,end__$1,meta18728));
});

}

return (new com.rpl.specter.t_com$rpl$specter18727(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,p__18730){
var vec__18731 = p__18730;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(1),null);
var ret__14121__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18734 = (function (pred,meta18735){
this.pred = pred;
this.meta18735 = meta18735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18736,meta18735__$1){
var self__ = this;
var _18736__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18734(self__.pred,meta18735__$1));
}));

(com.rpl.specter.t_com$rpl$specter18734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18736){
var self__ = this;
var _18736__$1 = this;
return self__.meta18735;
}));

(com.rpl.specter.t_com$rpl$specter18734.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18734.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,p__18737){
var vec__18738 = p__18737;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18738,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18738,(1),null);
var ret__14121__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter18734.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pred,cljs.core.cst$sym$meta18735], null);
}));

(com.rpl.specter.t_com$rpl$specter18734.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18734.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18734");

(com.rpl.specter.t_com$rpl$specter18734.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18734");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18734.
 */
com.rpl.specter.__GT_t_com$rpl$specter18734 = (function com$rpl$specter$__GT_t_com$rpl$specter18734(pred__$1,meta18735){
return (new com.rpl.specter.t_com$rpl$specter18734(pred__$1,meta18735));
});

}

return (new com.rpl.specter.t_com$rpl$specter18734(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__18741 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18741) : next_fn.call(null,G__18741));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__18742 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18742) : next_fn.call(null,G__18742));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18743 = (function (meta18744){
this.meta18744 = meta18744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18745,meta18744__$1){
var self__ = this;
var _18745__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18743(meta18744__$1));
}));

(com.rpl.specter.t_com$rpl$specter18743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18745){
var self__ = this;
var _18745__$1 = this;
return self__.meta18744;
}));

(com.rpl.specter.t_com$rpl$specter18743.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18743.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter18743.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter18743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18744], null);
}));

(com.rpl.specter.t_com$rpl$specter18743.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18743.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18743");

(com.rpl.specter.t_com$rpl$specter18743.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18743");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18743.
 */
com.rpl.specter.__GT_t_com$rpl$specter18743 = (function com$rpl$specter$__GT_t_com$rpl$specter18743(meta18744){
return (new com.rpl.specter.t_com$rpl$specter18743(meta18744));
});

}

return (new com.rpl.specter.t_com$rpl$specter18743(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__18746 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18746) : next_fn.call(null,G__18746));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__18747 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18747) : next_fn.call(null,G__18747));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18748 = (function (meta18749){
this.meta18749 = meta18749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18750,meta18749__$1){
var self__ = this;
var _18750__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18748(meta18749__$1));
}));

(com.rpl.specter.t_com$rpl$specter18748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18750){
var self__ = this;
var _18750__$1 = this;
return self__.meta18749;
}));

(com.rpl.specter.t_com$rpl$specter18748.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18748.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter18748.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter18748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18749], null);
}));

(com.rpl.specter.t_com$rpl$specter18748.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18748.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18748");

(com.rpl.specter.t_com$rpl$specter18748.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18748");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18748.
 */
com.rpl.specter.__GT_t_com$rpl$specter18748 = (function com$rpl$specter$__GT_t_com$rpl$specter18748(meta18749){
return (new com.rpl.specter.t_com$rpl$specter18748(meta18749));
});

}

return (new com.rpl.specter.t_com$rpl$specter18748(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18751 = (function (meta18752){
this.meta18752 = meta18752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18753,meta18752__$1){
var self__ = this;
var _18753__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18751(meta18752__$1));
}));

(com.rpl.specter.t_com$rpl$specter18751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18753){
var self__ = this;
var _18753__$1 = this;
return self__.meta18752;
}));

(com.rpl.specter.t_com$rpl$specter18751.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18751.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter18751.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
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

(com.rpl.specter.t_com$rpl$specter18751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18752], null);
}));

(com.rpl.specter.t_com$rpl$specter18751.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18751.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18751");

(com.rpl.specter.t_com$rpl$specter18751.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18751");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18751.
 */
com.rpl.specter.__GT_t_com$rpl$specter18751 = (function com$rpl$specter$__GT_t_com$rpl$specter18751(meta18752){
return (new com.rpl.specter.t_com$rpl$specter18751(meta18752));
});

}

return (new com.rpl.specter.t_com$rpl$specter18751(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18754 = (function (meta18755){
this.meta18755 = meta18755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18756,meta18755__$1){
var self__ = this;
var _18756__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18754(meta18755__$1));
}));

(com.rpl.specter.t_com$rpl$specter18754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18756){
var self__ = this;
var _18756__$1 = this;
return self__.meta18755;
}));

(com.rpl.specter.t_com$rpl$specter18754.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18754.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter18754.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter18754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18755], null);
}));

(com.rpl.specter.t_com$rpl$specter18754.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18754.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18754");

(com.rpl.specter.t_com$rpl$specter18754.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18754");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18754.
 */
com.rpl.specter.__GT_t_com$rpl$specter18754 = (function com$rpl$specter$__GT_t_com$rpl$specter18754(meta18755){
return (new com.rpl.specter.t_com$rpl$specter18754(meta18755));
});

}

return (new com.rpl.specter.t_com$rpl$specter18754(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18757 = (function (meta18758){
this.meta18758 = meta18758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18759,meta18758__$1){
var self__ = this;
var _18759__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18757(meta18758__$1));
}));

(com.rpl.specter.t_com$rpl$specter18757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18759){
var self__ = this;
var _18759__$1 = this;
return self__.meta18758;
}));

(com.rpl.specter.t_com$rpl$specter18757.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18757.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter18757.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter18757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18758], null);
}));

(com.rpl.specter.t_com$rpl$specter18757.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18757.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18757");

(com.rpl.specter.t_com$rpl$specter18757.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18757");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18757.
 */
com.rpl.specter.__GT_t_com$rpl$specter18757 = (function com$rpl$specter$__GT_t_com$rpl$specter18757(meta18758){
return (new com.rpl.specter.t_com$rpl$specter18757(meta18758));
});

}

return (new com.rpl.specter.t_com$rpl$specter18757(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__18760 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18760) : next_fn.call(null,G__18760));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18761 = (function (aset,meta18762){
this.aset = aset;
this.meta18762 = meta18762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18763,meta18762__$1){
var self__ = this;
var _18763__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18761(self__.aset,meta18762__$1));
}));

(com.rpl.specter.t_com$rpl$specter18761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18763){
var self__ = this;
var _18763__$1 = this;
return self__.meta18762;
}));

(com.rpl.specter.t_com$rpl$specter18761.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18761.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter18761.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter18761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$aset,cljs.core.cst$sym$meta18762], null);
}));

(com.rpl.specter.t_com$rpl$specter18761.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18761.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18761");

(com.rpl.specter.t_com$rpl$specter18761.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18761");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18761.
 */
com.rpl.specter.__GT_t_com$rpl$specter18761 = (function com$rpl$specter$__GT_t_com$rpl$specter18761(aset__$1,meta18762){
return (new com.rpl.specter.t_com$rpl$specter18761(aset__$1,meta18762));
});

}

return (new com.rpl.specter.t_com$rpl$specter18761(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__18764 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18764) : next_fn.call(null,G__18764));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18765 = (function (m_keys,meta18766){
this.m_keys = m_keys;
this.meta18766 = meta18766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18767,meta18766__$1){
var self__ = this;
var _18767__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18765(self__.m_keys,meta18766__$1));
}));

(com.rpl.specter.t_com$rpl$specter18765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18767){
var self__ = this;
var _18767__$1 = this;
return self__.meta18766;
}));

(com.rpl.specter.t_com$rpl$specter18765.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18765.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter18765.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter18765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m_DASH_keys,cljs.core.cst$sym$meta18766], null);
}));

(com.rpl.specter.t_com$rpl$specter18765.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18765.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18765");

(com.rpl.specter.t_com$rpl$specter18765.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18765");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18765.
 */
com.rpl.specter.__GT_t_com$rpl$specter18765 = (function com$rpl$specter$__GT_t_com$rpl$specter18765(m_keys__$1,meta18766){
return (new com.rpl.specter.t_com$rpl$specter18765(m_keys__$1,meta18766));
});

}

return (new com.rpl.specter.t_com$rpl$specter18765(m_keys,null));
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
var G__18774__delegate = function (path){
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18768 = (function (path,late,meta18769){
this.path = path;
this.late = late;
this.meta18769 = meta18769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18770,meta18769__$1){
var self__ = this;
var _18770__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18768(self__.path,self__.late,meta18769__$1));
}));

(com.rpl.specter.t_com$rpl$specter18768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18770){
var self__ = this;
var _18770__$1 = this;
return self__.meta18769;
}));

(com.rpl.specter.t_com$rpl$specter18768.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18768.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter18768.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__18771 = self__.late;
var G__18772 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__18773 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__18771,G__18772,G__18773) : com.rpl.specter.compiled_transform.call(null,G__18771,G__18772,G__18773));
}));

(com.rpl.specter.t_com$rpl$specter18768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta18769], null);
}));

(com.rpl.specter.t_com$rpl$specter18768.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18768.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18768");

(com.rpl.specter.t_com$rpl$specter18768.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18768");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18768.
 */
com.rpl.specter.__GT_t_com$rpl$specter18768 = (function com$rpl$specter$__GT_t_com$rpl$specter18768(path__$1,late__$1,meta18769){
return (new com.rpl.specter.t_com$rpl$specter18768(path__$1,late__$1,meta18769));
});

}

return (new com.rpl.specter.t_com$rpl$specter18768(path,late,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
};
var G__18774 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18775__i = 0, G__18775__a = new Array(arguments.length -  0);
while (G__18775__i < G__18775__a.length) {G__18775__a[G__18775__i] = arguments[G__18775__i + 0]; ++G__18775__i;}
  path = new cljs.core.IndexedSeq(G__18775__a,0,null);
} 
return G__18774__delegate.call(this,path);};
G__18774.cljs$lang$maxFixedArity = 0;
G__18774.cljs$lang$applyTo = (function (arglist__18776){
var path = cljs.core.seq(arglist__18776);
return G__18774__delegate(path);
});
G__18774.cljs$core$IFn$_invoke$arity$variadic = G__18774__delegate;
return G__18774;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18777 = (function (key,meta18778){
this.key = key;
this.meta18778 = meta18778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18779,meta18778__$1){
var self__ = this;
var _18779__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18777(self__.key,meta18778__$1));
}));

(com.rpl.specter.t_com$rpl$specter18777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18779){
var self__ = this;
var _18779__$1 = this;
return self__.meta18778;
}));

(com.rpl.specter.t_com$rpl$specter18777.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18777.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter18777.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter18777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key,cljs.core.cst$sym$meta18778], null);
}));

(com.rpl.specter.t_com$rpl$specter18777.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18777.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18777");

(com.rpl.specter.t_com$rpl$specter18777.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18777");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18777.
 */
com.rpl.specter.__GT_t_com$rpl$specter18777 = (function com$rpl$specter$__GT_t_com$rpl$specter18777(key__$1,meta18778){
return (new com.rpl.specter.t_com$rpl$specter18777(key__$1,meta18778));
});

}

return (new com.rpl.specter.t_com$rpl$specter18777(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18780 = (function (elem,meta18781){
this.elem = elem;
this.meta18781 = meta18781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18782,meta18781__$1){
var self__ = this;
var _18782__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18780(self__.elem,meta18781__$1));
}));

(com.rpl.specter.t_com$rpl$specter18780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18782){
var self__ = this;
var _18782__$1 = this;
return self__.meta18781;
}));

(com.rpl.specter.t_com$rpl$specter18780.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18780.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter18780.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter18780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$meta18781], null);
}));

(com.rpl.specter.t_com$rpl$specter18780.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18780.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18780");

(com.rpl.specter.t_com$rpl$specter18780.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18780");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18780.
 */
com.rpl.specter.__GT_t_com$rpl$specter18780 = (function com$rpl$specter$__GT_t_com$rpl$specter18780(elem__$1,meta18781){
return (new com.rpl.specter.t_com$rpl$specter18780(elem__$1,meta18781));
});

}

return (new com.rpl.specter.t_com$rpl$specter18780(elem,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18783 = (function (index,meta18784){
this.index = index;
this.meta18784 = meta18784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18785,meta18784__$1){
var self__ = this;
var _18785__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18783(self__.index,meta18784__$1));
}));

(com.rpl.specter.t_com$rpl$specter18783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18785){
var self__ = this;
var _18785__$1 = this;
return self__.meta18784;
}));

(com.rpl.specter.t_com$rpl$specter18783.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18783.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter18783.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18786;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18787 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},cljs.core.cst$sym$com$rpl$specter_SLASH_srange,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$srange,"target/public/cljs-out/dep/com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),cljs.core.cst$sym$srange),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,cljs.core.cst$sym$index),com.rpl.specter.impl.__GT_LocalSym(self__.index,cljs.core.cst$sym$index)], null),cljs.core.list(cljs.core.cst$sym$srange,cljs.core.cst$sym$index,cljs.core.cst$sym$index))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index,cljs.core.cst$sym$index], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$srange,cljs.core.cst$sym$index,cljs.core.cst$sym$index], null));
com.rpl.specter.pathcache18786 = info18787;

return info18787;
})():info__17638__auto__);
var precompiled18788 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18789 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled18788.cljs$core$IFn$_invoke$arity$1 ? precompiled18788.cljs$core$IFn$_invoke$arity$1(G__18789) : precompiled18788.call(null,G__18789));
} else {
return precompiled18788;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter18783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index,cljs.core.cst$sym$meta18784], null);
}));

(com.rpl.specter.t_com$rpl$specter18783.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18783.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18783");

(com.rpl.specter.t_com$rpl$specter18783.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18783");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18783.
 */
com.rpl.specter.__GT_t_com$rpl$specter18783 = (function com$rpl$specter$__GT_t_com$rpl$specter18783(index__$1,meta18784){
return (new com.rpl.specter.t_com$rpl$specter18783(index__$1,meta18784));
});

}

return (new com.rpl.specter.t_com$rpl$specter18783(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18790 = (function (i,meta18791){
this.i = i;
this.meta18791 = meta18791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18792,meta18791__$1){
var self__ = this;
var _18792__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18790(self__.i,meta18791__$1));
}));

(com.rpl.specter.t_com$rpl$specter18790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18792){
var self__ = this;
var _18792__$1 = this;
return self__.meta18791;
}));

(com.rpl.specter.t_com$rpl$specter18790.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18790.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter18790.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__18801 = (j - (1));
var G__18802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__18801;
s = G__18802;
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
var G__18803 = (j + (1));
var G__18804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__18803;
s = G__18804;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18793;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18794 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},cljs.core.cst$sym$com$rpl$specter_SLASH_before_DASH_index,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$before_DASH_index,"target/public/cljs-out/dep/com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),cljs.core.cst$sym$before_DASH_index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,cljs.core.cst$sym$newi)], null),cljs.core.list(cljs.core.cst$sym$before_DASH_index,cljs.core.cst$sym$newi))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$before_DASH_index,cljs.core.cst$sym$newi], null));
com.rpl.specter.pathcache18793 = info18794;

return info18794;
})():info__17638__auto__);
var precompiled18795 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled18795.cljs$core$IFn$_invoke$arity$1 ? precompiled18795.cljs$core$IFn$_invoke$arity$1(G__18796) : precompiled18795.call(null,G__18796));
} else {
return precompiled18795;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18797;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18798 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},cljs.core.cst$sym$com$rpl$specter_SLASH_nthpath,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$nthpath,"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),cljs.core.cst$sym$nthpath),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$nthpath,cljs.core.cst$sym$i))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nthpath,cljs.core.cst$sym$i], null));
com.rpl.specter.pathcache18797 = info18798;

return info18798;
})():info__17638__auto__);
var precompiled18799 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled18799.cljs$core$IFn$_invoke$arity$1 ? precompiled18799.cljs$core$IFn$_invoke$arity$1(G__18800) : precompiled18799.call(null,G__18800));
} else {
return precompiled18799;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter18790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$meta18791], null);
}));

(com.rpl.specter.t_com$rpl$specter18790.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18790.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18790");

(com.rpl.specter.t_com$rpl$specter18790.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18790");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18790.
 */
com.rpl.specter.__GT_t_com$rpl$specter18790 = (function com$rpl$specter$__GT_t_com$rpl$specter18790(i__$1,meta18791){
return (new com.rpl.specter.t_com$rpl$specter18790(i__$1,meta18791));
});

}

return (new com.rpl.specter.t_com$rpl$specter18790(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,e){
var ret__14121__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__18807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18807) : next_fn.call(null,G__18807));
})()
;
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__18808 = (function (){var G__18811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18811) : next_fn.call(null,G__18811));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18808,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18808,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18812;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18813 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL,"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),cljs.core.cst$sym$ALL),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__18805_SHARP_){
return (p1__18805_SHARP_ >= (curri + (1)));
}),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18805_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__18805_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri)))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__18806_SHARP_){
return (p1__18806_SHARP_ <= newi);
}),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18806_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__18806_SHARP_,cljs.core.cst$sym$newi)))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri,cljs.core.cst$sym$newi], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18805_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__18805_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18806_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__18806_SHARP_,cljs.core.cst$sym$newi))], null),cljs.core.cst$sym$ALL,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18805_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__18805_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18806_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__18806_SHARP_,cljs.core.cst$sym$newi))], null));
com.rpl.specter.pathcache18812 = info18813;

return info18813;
})():info__17638__auto__);
var precompiled18814 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18815 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__18805_SHARP_){
return (p1__18805_SHARP_ >= (curri + (1)));
}),(function (p1__18806_SHARP_){
return (p1__18806_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__18805_SHARP_){
return (p1__18805_SHARP_ >= (curri + (1)));
}),(function (p1__18806_SHARP_){
return (p1__18806_SHARP_ <= newi);
})], null);
return (precompiled18814.cljs$core$IFn$_invoke$arity$1 ? precompiled18814.cljs$core$IFn$_invoke$arity$1(G__18815) : precompiled18814.call(null,G__18815));
} else {
return precompiled18814;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18816;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18817 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},cljs.core.cst$sym$com$rpl$specter_SLASH_index_DASH_nav,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$index_DASH_nav,"target/public/cljs-out/dep/com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),cljs.core.cst$sym$index_DASH_nav),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,cljs.core.cst$sym$curri)], null),cljs.core.list(cljs.core.cst$sym$index_DASH_nav,cljs.core.cst$sym$curri))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index_DASH_nav,cljs.core.cst$sym$curri], null));
com.rpl.specter.pathcache18816 = info18817;

return info18817;
})():info__17638__auto__);
var precompiled18818 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18819 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled18818.cljs$core$IFn$_invoke$arity$1 ? precompiled18818.cljs$core$IFn$_invoke$arity$1(G__18819) : precompiled18818.call(null,G__18819));
} else {
return precompiled18818;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18820;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18821 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},cljs.core.cst$sym$com$rpl$specter_SLASH_nthpath,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$nthpath,"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),cljs.core.cst$sym$nthpath),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,cljs.core.cst$sym$curri)], null),cljs.core.list(cljs.core.cst$sym$nthpath,cljs.core.cst$sym$curri))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nthpath,cljs.core.cst$sym$curri], null));
com.rpl.specter.pathcache18820 = info18821;

return info18821;
})():info__17638__auto__);
var precompiled18822 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled18822.cljs$core$IFn$_invoke$arity$1 ? precompiled18822.cljs$core$IFn$_invoke$arity$1(G__18823) : precompiled18822.call(null,G__18823));
} else {
return precompiled18822;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18824 = (function (start,meta18825){
this.start = start;
this.meta18825 = meta18825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18826,meta18825__$1){
var self__ = this;
var _18826__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18824(self__.start,meta18825__$1));
}));

(com.rpl.specter.t_com$rpl$specter18824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18826){
var self__ = this;
var _18826__$1 = this;
return self__.meta18825;
}));

(com.rpl.specter.t_com$rpl$specter18824.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18824.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,e){
var ret__14121__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter18824.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__18827 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18827,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18827,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18830;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18831 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL,"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),cljs.core.cst$sym$ALL),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__18805_SHARP_){
return (p1__18805_SHARP_ >= (curri + (1)));
}),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18805_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__18805_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri)))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__18806_SHARP_){
return (p1__18806_SHARP_ <= newi);
}),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18806_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__18806_SHARP_,cljs.core.cst$sym$newi)))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri,cljs.core.cst$sym$newi], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18805_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__18805_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18806_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__18806_SHARP_,cljs.core.cst$sym$newi))], null),cljs.core.cst$sym$ALL,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18805_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$p1__18805_SHARP_,cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curri))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18806_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$p1__18806_SHARP_,cljs.core.cst$sym$newi))], null));
com.rpl.specter.pathcache18830 = info18831;

return info18831;
})():info__17638__auto__);
var precompiled18832 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18833 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__18805_SHARP_){
return (p1__18805_SHARP_ >= (curri + (1)));
}),(function (p1__18806_SHARP_){
return (p1__18806_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__18805_SHARP_){
return (p1__18805_SHARP_ >= (curri + (1)));
}),(function (p1__18806_SHARP_){
return (p1__18806_SHARP_ <= newi);
})], null);
return (precompiled18832.cljs$core$IFn$_invoke$arity$1 ? precompiled18832.cljs$core$IFn$_invoke$arity$1(G__18833) : precompiled18832.call(null,G__18833));
} else {
return precompiled18832;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18834;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18835 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},cljs.core.cst$sym$com$rpl$specter_SLASH_index_DASH_nav,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$index_DASH_nav,"target/public/cljs-out/dep/com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),cljs.core.cst$sym$index_DASH_nav),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,cljs.core.cst$sym$curri)], null),cljs.core.list(cljs.core.cst$sym$index_DASH_nav,cljs.core.cst$sym$curri))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index_DASH_nav,cljs.core.cst$sym$curri], null));
com.rpl.specter.pathcache18834 = info18835;

return info18835;
})():info__17638__auto__);
var precompiled18836 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled18836.cljs$core$IFn$_invoke$arity$1 ? precompiled18836.cljs$core$IFn$_invoke$arity$1(G__18837) : precompiled18836.call(null,G__18837));
} else {
return precompiled18836;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__17638__auto__ = com.rpl.specter.pathcache18838;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info18839 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},cljs.core.cst$sym$com$rpl$specter_SLASH_nthpath,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$nthpath,"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),cljs.core.cst$sym$nthpath),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,cljs.core.cst$sym$curri)], null),cljs.core.list(cljs.core.cst$sym$nthpath,cljs.core.cst$sym$curri))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nthpath,cljs.core.cst$sym$curri], null));
com.rpl.specter.pathcache18838 = info18839;

return info18839;
})():info__17638__auto__);
var precompiled18840 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__18841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled18840.cljs$core$IFn$_invoke$arity$1 ? precompiled18840.cljs$core$IFn$_invoke$arity$1(G__18841) : precompiled18840.call(null,G__18841));
} else {
return precompiled18840;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter18824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$meta18825], null);
}));

(com.rpl.specter.t_com$rpl$specter18824.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18824.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18824");

(com.rpl.specter.t_com$rpl$specter18824.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18824");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18824.
 */
com.rpl.specter.__GT_t_com$rpl$specter18824 = (function com$rpl$specter$__GT_t_com$rpl$specter18824(start__$1,meta18825){
return (new com.rpl.specter.t_com$rpl$specter18824(start__$1,meta18825));
});

}

return (new com.rpl.specter.t_com$rpl$specter18824(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18842 = (function (afn,meta18843){
this.afn = afn;
this.meta18843 = meta18843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18844,meta18843__$1){
var self__ = this;
var _18844__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18842(self__.afn,meta18843__$1));
}));

(com.rpl.specter.t_com$rpl$specter18842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18844){
var self__ = this;
var _18844__$1 = this;
return self__.meta18843;
}));

(com.rpl.specter.t_com$rpl$specter18842.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18842.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__18845 = vals;
var G__18846 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__18845,G__18846) : next_fn.call(null,G__18845,G__18846));
}));

(com.rpl.specter.t_com$rpl$specter18842.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__18847 = vals;
var G__18848 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__18847,G__18848) : next_fn.call(null,G__18847,G__18848));
}));

(com.rpl.specter.t_com$rpl$specter18842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta18843], null);
}));

(com.rpl.specter.t_com$rpl$specter18842.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18842.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18842");

(com.rpl.specter.t_com$rpl$specter18842.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18842");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18842.
 */
com.rpl.specter.__GT_t_com$rpl$specter18842 = (function com$rpl$specter$__GT_t_com$rpl$specter18842(afn__$1,meta18843){
return (new com.rpl.specter.t_com$rpl$specter18842(afn__$1,meta18843));
});

}

return (new com.rpl.specter.t_com$rpl$specter18842(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__18849 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18849) : next_fn.call(null,G__18849));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__18850 = (function (){var G__18851 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18851) : next_fn.call(null,G__18851));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__18850) : unparse_fn.call(null,G__18850));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18852 = (function (parse_fn,unparse_fn,meta18853){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta18853 = meta18853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18854,meta18853__$1){
var self__ = this;
var _18854__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18852(self__.parse_fn,self__.unparse_fn,meta18853__$1));
}));

(com.rpl.specter.t_com$rpl$specter18852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18854){
var self__ = this;
var _18854__$1 = this;
return self__.meta18853;
}));

(com.rpl.specter.t_com$rpl$specter18852.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18852.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter18852.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
var G__18855 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__18855) : self__.unparse_fn.call(null,G__18855));
}));

(com.rpl.specter.t_com$rpl$specter18852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parse_DASH_fn,cljs.core.cst$sym$unparse_DASH_fn,cljs.core.cst$sym$meta18853], null);
}));

(com.rpl.specter.t_com$rpl$specter18852.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18852.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18852");

(com.rpl.specter.t_com$rpl$specter18852.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18852");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18852.
 */
com.rpl.specter.__GT_t_com$rpl$specter18852 = (function com$rpl$specter$__GT_t_com$rpl$specter18852(parse_fn__$1,unparse_fn__$1,meta18853){
return (new com.rpl.specter.t_com$rpl$specter18852(parse_fn__$1,unparse_fn__$1,meta18853));
});

}

return (new com.rpl.specter.t_com$rpl$specter18852(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__18856 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18856) : next_fn.call(null,G__18856));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18857 = (function (meta18858){
this.meta18858 = meta18858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18859,meta18858__$1){
var self__ = this;
var _18859__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18857(meta18858__$1));
}));

(com.rpl.specter.t_com$rpl$specter18857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18859){
var self__ = this;
var _18859__$1 = this;
return self__.meta18858;
}));

(com.rpl.specter.t_com$rpl$specter18857.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18857.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter18857.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter18857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18858], null);
}));

(com.rpl.specter.t_com$rpl$specter18857.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18857.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18857");

(com.rpl.specter.t_com$rpl$specter18857.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18857");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18857.
 */
com.rpl.specter.__GT_t_com$rpl$specter18857 = (function com$rpl$specter$__GT_t_com$rpl$specter18857(meta18858){
return (new com.rpl.specter.t_com$rpl$specter18857(meta18858));
});

}

return (new com.rpl.specter.t_com$rpl$specter18857(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,s){
var ret__14121__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18860 = (function (re,meta18861){
this.re = re;
this.meta18861 = meta18861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18862,meta18861__$1){
var self__ = this;
var _18862__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18860(self__.re,meta18861__$1));
}));

(com.rpl.specter.t_com$rpl$specter18860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18862){
var self__ = this;
var _18862__$1 = this;
return self__.meta18861;
}));

(com.rpl.specter.t_com$rpl$specter18860.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18860.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__14120__auto__,s){
var ret__14121__auto__ = next_fn(s);
if((ret__14121__auto__ === com.rpl.specter.NONE)){
return curr__14120__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__14121__auto__)){
return cljs.core.reduced(ret__14121__auto__);
} else {
return ret__14121__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter18860.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$meta18861], null);
}));

(com.rpl.specter.t_com$rpl$specter18860.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18860.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18860");

(com.rpl.specter.t_com$rpl$specter18860.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18860");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18860.
 */
com.rpl.specter.__GT_t_com$rpl$specter18860 = (function com$rpl$specter$__GT_t_com$rpl$specter18860(re__$1,meta18861){
return (new com.rpl.specter.t_com$rpl$specter18860(re__$1,meta18861));
});

}

return (new com.rpl.specter.t_com$rpl$specter18860(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18868__delegate = function (path){
var temp__5751__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5751__auto__)){
var afn = temp__5751__auto__;
return afn;
} else {
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18865 = (function (path,temp__5751__auto__,late,meta18866){
this.path = path;
this.temp__5751__auto__ = temp__5751__auto__;
this.late = late;
this.meta18866 = meta18866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18867,meta18866__$1){
var self__ = this;
var _18867__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18865(self__.path,self__.temp__5751__auto__,self__.late,meta18866__$1));
}));

(com.rpl.specter.t_com$rpl$specter18865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18867){
var self__ = this;
var _18867__$1 = this;
return self__.meta18866;
}));

(com.rpl.specter.t_com$rpl$specter18865.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18865.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__18863_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__18863_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18865.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__18864_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__18864_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$temp__5751__auto__,cljs.core.cst$sym$late,cljs.core.cst$sym$meta18866], null);
}));

(com.rpl.specter.t_com$rpl$specter18865.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18865.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18865");

(com.rpl.specter.t_com$rpl$specter18865.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18865");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18865.
 */
com.rpl.specter.__GT_t_com$rpl$specter18865 = (function com$rpl$specter$__GT_t_com$rpl$specter18865(path__$1,temp__5751__auto____$1,late__$1,meta18866){
return (new com.rpl.specter.t_com$rpl$specter18865(path__$1,temp__5751__auto____$1,late__$1,meta18866));
});

}

return (new com.rpl.specter.t_com$rpl$specter18865(path,temp__5751__auto__,late,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
}
};
var G__18868 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18869__i = 0, G__18869__a = new Array(arguments.length -  0);
while (G__18869__i < G__18869__a.length) {G__18869__a[G__18869__i] = arguments[G__18869__i + 0]; ++G__18869__i;}
  path = new cljs.core.IndexedSeq(G__18869__a,0,null);
} 
return G__18868__delegate.call(this,path);};
G__18868.cljs$lang$maxFixedArity = 0;
G__18868.cljs$lang$applyTo = (function (arglist__18870){
var path = cljs.core.seq(arglist__18870);
return G__18868__delegate(path);
});
G__18868.cljs$core$IFn$_invoke$arity$variadic = G__18868__delegate;
return G__18868;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18876__delegate = function (path){
var temp__5751__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5751__auto__)){
var afn = temp__5751__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18873 = (function (path,temp__5751__auto__,late,meta18874){
this.path = path;
this.temp__5751__auto__ = temp__5751__auto__;
this.late = late;
this.meta18874 = meta18874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18875,meta18874__$1){
var self__ = this;
var _18875__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18873(self__.path,self__.temp__5751__auto__,self__.late,meta18874__$1));
}));

(com.rpl.specter.t_com$rpl$specter18873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18875){
var self__ = this;
var _18875__$1 = this;
return self__.meta18874;
}));

(com.rpl.specter.t_com$rpl$specter18873.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18873.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__18871_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__18871_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18873.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__18872_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__18872_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$temp__5751__auto__,cljs.core.cst$sym$late,cljs.core.cst$sym$meta18874], null);
}));

(com.rpl.specter.t_com$rpl$specter18873.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18873.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18873");

(com.rpl.specter.t_com$rpl$specter18873.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18873");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18873.
 */
com.rpl.specter.__GT_t_com$rpl$specter18873 = (function com$rpl$specter$__GT_t_com$rpl$specter18873(path__$1,temp__5751__auto____$1,late__$1,meta18874){
return (new com.rpl.specter.t_com$rpl$specter18873(path__$1,temp__5751__auto____$1,late__$1,meta18874));
});

}

return (new com.rpl.specter.t_com$rpl$specter18873(path,temp__5751__auto__,late,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
}
};
var G__18876 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18877__i = 0, G__18877__a = new Array(arguments.length -  0);
while (G__18877__i < G__18877__a.length) {G__18877__a[G__18877__i] = arguments[G__18877__i + 0]; ++G__18877__i;}
  path = new cljs.core.IndexedSeq(G__18877__a,0,null);
} 
return G__18876__delegate.call(this,path);};
G__18876.cljs$lang$maxFixedArity = 0;
G__18876.cljs$lang$applyTo = (function (arglist__18878){
var path = cljs.core.seq(arglist__18878);
return G__18876__delegate(path);
});
G__18876.cljs$core$IFn$_invoke$arity$variadic = G__18876__delegate;
return G__18876;
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
var G__18881__delegate = function (path){
var G__18879 = com.rpl.specter.ALL;
var G__18880 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__18879,G__18880) : com.rpl.specter.subselect.call(null,G__18879,G__18880));
};
var G__18881 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18882__i = 0, G__18882__a = new Array(arguments.length -  0);
while (G__18882__i < G__18882__a.length) {G__18882__a[G__18882__i] = arguments[G__18882__i + 0]; ++G__18882__i;}
  path = new cljs.core.IndexedSeq(G__18882__a,0,null);
} 
return G__18881__delegate.call(this,path);};
G__18881.cljs$lang$maxFixedArity = 0;
G__18881.cljs$lang$applyTo = (function (arglist__18883){
var path = cljs.core.seq(arglist__18883);
return G__18881__delegate(path);
});
G__18881.cljs$core$IFn$_invoke$arity$variadic = G__18881__delegate;
return G__18881;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18884 = (function (path,update_fn,late,late_fn,meta18885){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta18885 = meta18885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18886,meta18885__$1){
var self__ = this;
var _18886__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18884(self__.path,self__.update_fn,self__.late,self__.late_fn,meta18885__$1));
}));

(com.rpl.specter.t_com$rpl$specter18884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18886){
var self__ = this;
var _18886__$1 = this;
return self__.meta18885;
}));

(com.rpl.specter.t_com$rpl$specter18884.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18884.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter18884.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter18884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$update_DASH_fn,cljs.core.cst$sym$late,cljs.core.cst$sym$late_DASH_fn,cljs.core.cst$sym$meta18885], null);
}));

(com.rpl.specter.t_com$rpl$specter18884.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18884.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18884");

(com.rpl.specter.t_com$rpl$specter18884.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18884");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18884.
 */
com.rpl.specter.__GT_t_com$rpl$specter18884 = (function com$rpl$specter$__GT_t_com$rpl$specter18884(path__$1,update_fn__$1,late__$1,late_fn__$1,meta18885){
return (new com.rpl.specter.t_com$rpl$specter18884(path__$1,update_fn__$1,late__$1,late_fn__$1,meta18885));
});

}

return (new com.rpl.specter.t_com$rpl$specter18884(path,update_fn,late,late_fn,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18887 = (function (path,reduce_fn,late,late_fn,meta18888){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta18888 = meta18888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18889,meta18888__$1){
var self__ = this;
var _18889__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18887(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta18888__$1));
}));

(com.rpl.specter.t_com$rpl$specter18887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18889){
var self__ = this;
var _18889__$1 = this;
return self__.meta18888;
}));

(com.rpl.specter.t_com$rpl$specter18887.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18887.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter18887.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter18887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$reduce_DASH_fn,cljs.core.cst$sym$late,cljs.core.cst$sym$late_DASH_fn,cljs.core.cst$sym$meta18888], null);
}));

(com.rpl.specter.t_com$rpl$specter18887.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18887.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18887");

(com.rpl.specter.t_com$rpl$specter18887.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18887");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18887.
 */
com.rpl.specter.__GT_t_com$rpl$specter18887 = (function com$rpl$specter$__GT_t_com$rpl$specter18887(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta18888){
return (new com.rpl.specter.t_com$rpl$specter18887(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta18888));
});

}

return (new com.rpl.specter.t_com$rpl$specter18887(path,reduce_fn,late,late_fn,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__18891 = (function (p1__18890_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18890_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__18891) : com.rpl.specter.pred.call(null,G__18891));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__18893 = (function (p1__18892_SHARP_){
return (p1__18892_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__18893) : com.rpl.specter.pred.call(null,G__18893));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__18895 = (function (p1__18894_SHARP_){
return (p1__18894_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__18895) : com.rpl.specter.pred.call(null,G__18895));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__18897 = (function (p1__18896_SHARP_){
return (p1__18896_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__18897) : com.rpl.specter.pred.call(null,G__18897));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__18899 = (function (p1__18898_SHARP_){
return (p1__18898_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__18899) : com.rpl.specter.pred.call(null,G__18899));
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
var G__18900 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18900) : next_fn.call(null,G__18900));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__18901 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18901) : next_fn.call(null,G__18901));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18902 = (function (v,meta18903){
this.v = v;
this.meta18903 = meta18903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18904,meta18903__$1){
var self__ = this;
var _18904__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18902(self__.v,meta18903__$1));
}));

(com.rpl.specter.t_com$rpl$specter18902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18904){
var self__ = this;
var _18904__$1 = this;
return self__.meta18903;
}));

(com.rpl.specter.t_com$rpl$specter18902.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18902.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter18902.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter18902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v,cljs.core.cst$sym$meta18903], null);
}));

(com.rpl.specter.t_com$rpl$specter18902.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18902.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18902");

(com.rpl.specter.t_com$rpl$specter18902.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18902");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18902.
 */
com.rpl.specter.__GT_t_com$rpl$specter18902 = (function com$rpl$specter$__GT_t_com$rpl$specter18902(v__$1,meta18903){
return (new com.rpl.specter.t_com$rpl$specter18902(v__$1,meta18903));
});

}

return (new com.rpl.specter.t_com$rpl$specter18902(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__18905 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__18905) : com.rpl.specter.nil__GT_val.call(null,G__18905));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__18906 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__18906) : com.rpl.specter.nil__GT_val.call(null,G__18906));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__18907 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__18907) : com.rpl.specter.nil__GT_val.call(null,G__18907));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__18908 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18908) : next_fn.call(null,G__18908));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__18909 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18909) : next_fn.call(null,G__18909));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18910 = (function (meta18911){
this.meta18911 = meta18911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18912,meta18911__$1){
var self__ = this;
var _18912__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18910(meta18911__$1));
}));

(com.rpl.specter.t_com$rpl$specter18910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18912){
var self__ = this;
var _18912__$1 = this;
return self__.meta18911;
}));

(com.rpl.specter.t_com$rpl$specter18910.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18910.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter18910.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter18910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18911], null);
}));

(com.rpl.specter.t_com$rpl$specter18910.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18910.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18910");

(com.rpl.specter.t_com$rpl$specter18910.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18910");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18910.
 */
com.rpl.specter.__GT_t_com$rpl$specter18910 = (function com$rpl$specter$__GT_t_com$rpl$specter18910(meta18911){
return (new com.rpl.specter.t_com$rpl$specter18910(meta18911));
});

}

return (new com.rpl.specter.t_com$rpl$specter18910(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__18913 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18913) : next_fn.call(null,G__18913));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__18914 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18914) : next_fn.call(null,G__18914));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18915 = (function (meta18916){
this.meta18916 = meta18916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18917,meta18916__$1){
var self__ = this;
var _18917__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18915(meta18916__$1));
}));

(com.rpl.specter.t_com$rpl$specter18915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18917){
var self__ = this;
var _18917__$1 = this;
return self__.meta18916;
}));

(com.rpl.specter.t_com$rpl$specter18915.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18915.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter18915.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
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

(com.rpl.specter.t_com$rpl$specter18915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18916], null);
}));

(com.rpl.specter.t_com$rpl$specter18915.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18915.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18915");

(com.rpl.specter.t_com$rpl$specter18915.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18915");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18915.
 */
com.rpl.specter.__GT_t_com$rpl$specter18915 = (function com$rpl$specter$__GT_t_com$rpl$specter18915(meta18916){
return (new com.rpl.specter.t_com$rpl$specter18915(meta18916));
});

}

return (new com.rpl.specter.t_com$rpl$specter18915(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__18918 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18918) : next_fn.call(null,G__18918));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__18919 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__18919) : next_fn.call(null,G__18919));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18920 = (function (meta18921){
this.meta18921 = meta18921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18922,meta18921__$1){
var self__ = this;
var _18922__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18920(meta18921__$1));
}));

(com.rpl.specter.t_com$rpl$specter18920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18922){
var self__ = this;
var _18922__$1 = this;
return self__.meta18921;
}));

(com.rpl.specter.t_com$rpl$specter18920.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18920.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter18920.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16844__auto__,vals__16845__auto__,structure,next_fn__16846__auto__){
var self__ = this;
var this__16844__auto____$1 = this;
var next_fn = (function (s__16847__auto__){
return (next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__16846__auto__.cljs$core$IFn$_invoke$arity$2(vals__16845__auto__,s__16847__auto__) : next_fn__16846__auto__.call(null,vals__16845__auto__,s__16847__auto__));
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

(com.rpl.specter.t_com$rpl$specter18920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18921], null);
}));

(com.rpl.specter.t_com$rpl$specter18920.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18920.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18920");

(com.rpl.specter.t_com$rpl$specter18920.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18920");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18920.
 */
com.rpl.specter.__GT_t_com$rpl$specter18920 = (function com$rpl$specter$__GT_t_com$rpl$specter18920(meta18921){
return (new com.rpl.specter.t_com$rpl$specter18920(meta18921));
});

}

return (new com.rpl.specter.t_com$rpl$specter18920(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18930__delegate = function (path){
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18923 = (function (path,late,meta18924){
this.path = path;
this.late = late;
this.meta18924 = meta18924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18925,meta18924__$1){
var self__ = this;
var _18925__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18923(self__.path,self__.late,meta18924__$1));
}));

(com.rpl.specter.t_com$rpl$specter18923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18925){
var self__ = this;
var _18925__$1 = this;
return self__.meta18924;
}));

(com.rpl.specter.t_com$rpl$specter18923.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18923.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17628__auto__,vals__17629__auto__,structure,next_fn__17630__auto__){
var self__ = this;
var this__17628__auto____$1 = this;
var G__18926 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__17629__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__18927 = structure;
return (next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2(G__18926,G__18927) : next_fn__17630__auto__.call(null,G__18926,G__18927));
}));

(com.rpl.specter.t_com$rpl$specter18923.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17628__auto__,vals__17629__auto__,structure,next_fn__17630__auto__){
var self__ = this;
var this__17628__auto____$1 = this;
var G__18928 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__17629__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__18929 = structure;
return (next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2(G__18928,G__18929) : next_fn__17630__auto__.call(null,G__18928,G__18929));
}));

(com.rpl.specter.t_com$rpl$specter18923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta18924], null);
}));

(com.rpl.specter.t_com$rpl$specter18923.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18923.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18923");

(com.rpl.specter.t_com$rpl$specter18923.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18923");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18923.
 */
com.rpl.specter.__GT_t_com$rpl$specter18923 = (function com$rpl$specter$__GT_t_com$rpl$specter18923(path__$1,late__$1,meta18924){
return (new com.rpl.specter.t_com$rpl$specter18923(path__$1,late__$1,meta18924));
});

}

return (new com.rpl.specter.t_com$rpl$specter18923(path,late,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
};
var G__18930 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18931__i = 0, G__18931__a = new Array(arguments.length -  0);
while (G__18931__i < G__18931__a.length) {G__18931__a[G__18931__i] = arguments[G__18931__i + 0]; ++G__18931__i;}
  path = new cljs.core.IndexedSeq(G__18931__a,0,null);
} 
return G__18930__delegate.call(this,path);};
G__18930.cljs$lang$maxFixedArity = 0;
G__18930.cljs$lang$applyTo = (function (arglist__18932){
var path = cljs.core.seq(arglist__18932);
return G__18930__delegate(path);
});
G__18930.cljs$core$IFn$_invoke$arity$variadic = G__18930__delegate;
return G__18930;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18940__delegate = function (path){
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18933 = (function (path,late,meta18934){
this.path = path;
this.late = late;
this.meta18934 = meta18934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18935,meta18934__$1){
var self__ = this;
var _18935__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18933(self__.path,self__.late,meta18934__$1));
}));

(com.rpl.specter.t_com$rpl$specter18933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18935){
var self__ = this;
var _18935__$1 = this;
return self__.meta18934;
}));

(com.rpl.specter.t_com$rpl$specter18933.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18933.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17628__auto__,vals__17629__auto__,structure,next_fn__17630__auto__){
var self__ = this;
var this__17628__auto____$1 = this;
var G__18936 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__17629__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__18937 = structure;
return (next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2(G__18936,G__18937) : next_fn__17630__auto__.call(null,G__18936,G__18937));
}));

(com.rpl.specter.t_com$rpl$specter18933.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17628__auto__,vals__17629__auto__,structure,next_fn__17630__auto__){
var self__ = this;
var this__17628__auto____$1 = this;
var G__18938 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__17629__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__18939 = structure;
return (next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2(G__18938,G__18939) : next_fn__17630__auto__.call(null,G__18938,G__18939));
}));

(com.rpl.specter.t_com$rpl$specter18933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta18934], null);
}));

(com.rpl.specter.t_com$rpl$specter18933.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18933.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18933");

(com.rpl.specter.t_com$rpl$specter18933.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18933");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18933.
 */
com.rpl.specter.__GT_t_com$rpl$specter18933 = (function com$rpl$specter$__GT_t_com$rpl$specter18933(path__$1,late__$1,meta18934){
return (new com.rpl.specter.t_com$rpl$specter18933(path__$1,late__$1,meta18934));
});

}

return (new com.rpl.specter.t_com$rpl$specter18933(path,late,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
};
var G__18940 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18941__i = 0, G__18941__a = new Array(arguments.length -  0);
while (G__18941__i < G__18941__a.length) {G__18941__a[G__18941__i] = arguments[G__18941__i + 0]; ++G__18941__i;}
  path = new cljs.core.IndexedSeq(G__18941__a,0,null);
} 
return G__18940__delegate.call(this,path);};
G__18940.cljs$lang$maxFixedArity = 0;
G__18940.cljs$lang$applyTo = (function (arglist__18942){
var path = cljs.core.seq(arglist__18942);
return G__18940__delegate(path);
});
G__18940.cljs$core$IFn$_invoke$arity$variadic = G__18940__delegate;
return G__18940;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18943 = (function (val,meta18944){
this.val = val;
this.meta18944 = meta18944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18945,meta18944__$1){
var self__ = this;
var _18945__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18943(self__.val,meta18944__$1));
}));

(com.rpl.specter.t_com$rpl$specter18943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18945){
var self__ = this;
var _18945__$1 = this;
return self__.meta18944;
}));

(com.rpl.specter.t_com$rpl$specter18943.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18943.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17628__auto__,vals__17629__auto__,structure,next_fn__17630__auto__){
var self__ = this;
var this__17628__auto____$1 = this;
var G__18946 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__17629__auto__,self__.val);
var G__18947 = structure;
return (next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2(G__18946,G__18947) : next_fn__17630__auto__.call(null,G__18946,G__18947));
}));

(com.rpl.specter.t_com$rpl$specter18943.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17628__auto__,vals__17629__auto__,structure,next_fn__17630__auto__){
var self__ = this;
var this__17628__auto____$1 = this;
var G__18948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__17629__auto__,self__.val);
var G__18949 = structure;
return (next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__17630__auto__.cljs$core$IFn$_invoke$arity$2(G__18948,G__18949) : next_fn__17630__auto__.call(null,G__18948,G__18949));
}));

(com.rpl.specter.t_com$rpl$specter18943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta18944], null);
}));

(com.rpl.specter.t_com$rpl$specter18943.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18943.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18943");

(com.rpl.specter.t_com$rpl$specter18943.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18943");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18943.
 */
com.rpl.specter.__GT_t_com$rpl$specter18943 = (function com$rpl$specter$__GT_t_com$rpl$specter18943(val__$1,meta18944){
return (new com.rpl.specter.t_com$rpl$specter18943(val__$1,meta18944));
});

}

return (new com.rpl.specter.t_com$rpl$specter18943(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18955__delegate = function (path){
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18950 = (function (path,late,meta18951){
this.path = path;
this.late = late;
this.meta18951 = meta18951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18952,meta18951__$1){
var self__ = this;
var _18952__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18950(self__.path,self__.late,meta18951__$1));
}));

(com.rpl.specter.t_com$rpl$specter18950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18952){
var self__ = this;
var _18952__$1 = this;
return self__.meta18951;
}));

(com.rpl.specter.t_com$rpl$specter18950.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18950.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter18950.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter18950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta18951], null);
}));

(com.rpl.specter.t_com$rpl$specter18950.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18950.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18950");

(com.rpl.specter.t_com$rpl$specter18950.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18950");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18950.
 */
com.rpl.specter.__GT_t_com$rpl$specter18950 = (function com$rpl$specter$__GT_t_com$rpl$specter18950(path__$1,late__$1,meta18951){
return (new com.rpl.specter.t_com$rpl$specter18950(path__$1,late__$1,meta18951));
});

}

return (new com.rpl.specter.t_com$rpl$specter18950(path,late,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
};
var G__18955 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18956__i = 0, G__18956__a = new Array(arguments.length -  0);
while (G__18956__i < G__18956__a.length) {G__18956__a[G__18956__i] = arguments[G__18956__i + 0]; ++G__18956__i;}
  path = new cljs.core.IndexedSeq(G__18956__a,0,null);
} 
return G__18955__delegate.call(this,path);};
G__18955.cljs$lang$maxFixedArity = 0;
G__18955.cljs$lang$applyTo = (function (arglist__18957){
var path = cljs.core.seq(arglist__18957);
return G__18955__delegate(path);
});
G__18955.cljs$core$IFn$_invoke$arity$variadic = G__18955__delegate;
return G__18955;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18958 = (function (meta18959){
this.meta18959 = meta18959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18960,meta18959__$1){
var self__ = this;
var _18960__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18958(meta18959__$1));
}));

(com.rpl.specter.t_com$rpl$specter18958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18960){
var self__ = this;
var _18960__$1 = this;
return self__.meta18959;
}));

(com.rpl.specter.t_com$rpl$specter18958.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18958.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__18961 = cljs.core.PersistentVector.EMPTY;
var G__18962 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__18961,G__18962) : next_fn.call(null,G__18961,G__18962));
}));

(com.rpl.specter.t_com$rpl$specter18958.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__18963 = cljs.core.PersistentVector.EMPTY;
var G__18964 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__18963,G__18964) : next_fn.call(null,G__18963,G__18964));
}));

(com.rpl.specter.t_com$rpl$specter18958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta18959], null);
}));

(com.rpl.specter.t_com$rpl$specter18958.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18958.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18958");

(com.rpl.specter.t_com$rpl$specter18958.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18958");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18958.
 */
com.rpl.specter.__GT_t_com$rpl$specter18958 = (function com$rpl$specter$__GT_t_com$rpl$specter18958(meta18959){
return (new com.rpl.specter.t_com$rpl$specter18958(meta18959));
});

}

return (new com.rpl.specter.t_com$rpl$specter18958(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__18973 = null;
var G__18973__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__18973__3 = (function (cond_p,then_path,else_path){
var temp__5751__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5751__auto__)){
var afn = temp__5751__auto__;
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18967 = (function (cond_p,then_path,else_path,temp__5751__auto__,afn,late_then,late_else,meta18968){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5751__auto__ = temp__5751__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta18968 = meta18968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18969,meta18968__$1){
var self__ = this;
var _18969__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18967(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5751__auto__,self__.afn,self__.late_then,self__.late_else,meta18968__$1));
}));

(com.rpl.specter.t_com$rpl$specter18967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18969){
var self__ = this;
var _18969__$1 = this;
return self__.meta18968;
}));

(com.rpl.specter.t_com$rpl$specter18967.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18967.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter18967.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter18967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_p,cljs.core.cst$sym$then_DASH_path,cljs.core.cst$sym$else_DASH_path,cljs.core.cst$sym$temp__5751__auto__,cljs.core.cst$sym$afn,cljs.core.cst$sym$late_DASH_then,cljs.core.cst$sym$late_DASH_else,cljs.core.cst$sym$meta18968], null);
}));

(com.rpl.specter.t_com$rpl$specter18967.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18967.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18967");

(com.rpl.specter.t_com$rpl$specter18967.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18967");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18967.
 */
com.rpl.specter.__GT_t_com$rpl$specter18967 = (function com$rpl$specter$__GT_t_com$rpl$specter18967(cond_p__$1,then_path__$1,else_path__$1,temp__5751__auto____$1,afn__$1,late_then__$1,late_else__$1,meta18968){
return (new com.rpl.specter.t_com$rpl$specter18967(cond_p__$1,then_path__$1,else_path__$1,temp__5751__auto____$1,afn__$1,late_then__$1,late_else__$1,meta18968));
});

}

return (new com.rpl.specter.t_com$rpl$specter18967(cond_p,then_path,else_path,temp__5751__auto__,afn,late_then,late_else,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
} else {
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18970 = (function (cond_p,then_path,else_path,temp__5751__auto__,late_cond,late_then,late_else,meta18971){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5751__auto__ = temp__5751__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta18971 = meta18971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18972,meta18971__$1){
var self__ = this;
var _18972__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18970(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5751__auto__,self__.late_cond,self__.late_then,self__.late_else,meta18971__$1));
}));

(com.rpl.specter.t_com$rpl$specter18970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18972){
var self__ = this;
var _18972__$1 = this;
return self__.meta18971;
}));

(com.rpl.specter.t_com$rpl$specter18970.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18970.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__18965_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__18965_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter18970.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__18966_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__18966_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter18970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_p,cljs.core.cst$sym$then_DASH_path,cljs.core.cst$sym$else_DASH_path,cljs.core.cst$sym$temp__5751__auto__,cljs.core.cst$sym$late_DASH_cond,cljs.core.cst$sym$late_DASH_then,cljs.core.cst$sym$late_DASH_else,cljs.core.cst$sym$meta18971], null);
}));

(com.rpl.specter.t_com$rpl$specter18970.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18970.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18970");

(com.rpl.specter.t_com$rpl$specter18970.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18970");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18970.
 */
com.rpl.specter.__GT_t_com$rpl$specter18970 = (function com$rpl$specter$__GT_t_com$rpl$specter18970(cond_p__$1,then_path__$1,else_path__$1,temp__5751__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta18971){
return (new com.rpl.specter.t_com$rpl$specter18970(cond_p__$1,then_path__$1,else_path__$1,temp__5751__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta18971));
});

}

return (new com.rpl.specter.t_com$rpl$specter18970(cond_p,then_path,else_path,temp__5751__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
}
});
G__18973 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__18973__2.call(this,cond_p,then_path);
case 3:
return G__18973__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18973.cljs$core$IFn$_invoke$arity$2 = G__18973__2;
G__18973.cljs$core$IFn$_invoke$arity$3 = G__18973__3;
return G__18973;
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
var G__18978__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__18974){
var vec__18975 = p__18974;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18975,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18975,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__18978 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__18979__i = 0, G__18979__a = new Array(arguments.length -  0);
while (G__18979__i < G__18979__a.length) {G__18979__a[G__18979__i] = arguments[G__18979__i + 0]; ++G__18979__i;}
  conds = new cljs.core.IndexedSeq(G__18979__a,0,null);
} 
return G__18978__delegate.call(this,conds);};
G__18978.cljs$lang$maxFixedArity = 0;
G__18978.cljs$lang$applyTo = (function (arglist__18980){
var conds = cljs.core.seq(arglist__18980);
return G__18978__delegate(conds);
});
G__18978.cljs$core$IFn$_invoke$arity$variadic = G__18978__delegate;
return G__18978;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__18988 = null;
var G__18988__0 = (function (){
return com.rpl.specter.STAY;
});
var G__18988__1 = (function (path){
return path;
});
var G__18988__2 = (function (path1,path2){
var builder__17631__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter18981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter18981 = (function (path1,path2,late1,late2,meta18982){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta18982 = meta18982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter18981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18983,meta18982__$1){
var self__ = this;
var _18983__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter18981(self__.path1,self__.path2,self__.late1,self__.late2,meta18982__$1));
}));

(com.rpl.specter.t_com$rpl$specter18981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18983){
var self__ = this;
var _18983__$1 = this;
return self__.meta18982;
}));

(com.rpl.specter.t_com$rpl$specter18981.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter18981.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter18981.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter18981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path1,cljs.core.cst$sym$path2,cljs.core.cst$sym$late1,cljs.core.cst$sym$late2,cljs.core.cst$sym$meta18982], null);
}));

(com.rpl.specter.t_com$rpl$specter18981.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter18981.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter18981");

(com.rpl.specter.t_com$rpl$specter18981.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"com.rpl.specter/t_com$rpl$specter18981");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter18981.
 */
com.rpl.specter.__GT_t_com$rpl$specter18981 = (function com$rpl$specter$__GT_t_com$rpl$specter18981(path1__$1,path2__$1,late1__$1,late2__$1,meta18982){
return (new com.rpl.specter.t_com$rpl$specter18981(path1__$1,path2__$1,late1__$1,late2__$1,meta18982));
});

}

return (new com.rpl.specter.t_com$rpl$specter18981(path1,path2,late1,late2,null));
}));
var curr_params__17632__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__17632__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__17631__auto__,curr_params__17632__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__17631__auto__,curr_params__17632__auto__,null);
}
});
var G__18988__3 = (function() { 
var G__18989__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__18989 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__18990__i = 0, G__18990__a = new Array(arguments.length -  2);
while (G__18990__i < G__18990__a.length) {G__18990__a[G__18990__i] = arguments[G__18990__i + 2]; ++G__18990__i;}
  paths = new cljs.core.IndexedSeq(G__18990__a,0,null);
} 
return G__18989__delegate.call(this,path1,path2,paths);};
G__18989.cljs$lang$maxFixedArity = 2;
G__18989.cljs$lang$applyTo = (function (arglist__18991){
var path1 = cljs.core.first(arglist__18991);
arglist__18991 = cljs.core.next(arglist__18991);
var path2 = cljs.core.first(arglist__18991);
var paths = cljs.core.rest(arglist__18991);
return G__18989__delegate(path1,path2,paths);
});
G__18989.cljs$core$IFn$_invoke$arity$variadic = G__18989__delegate;
return G__18989;
})()
;
G__18988 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__18988__0.call(this);
case 1:
return G__18988__1.call(this,path1);
case 2:
return G__18988__2.call(this,path1,path2);
default:
var G__18992 = null;
if (arguments.length > 2) {
var G__18993__i = 0, G__18993__a = new Array(arguments.length -  2);
while (G__18993__i < G__18993__a.length) {G__18993__a[G__18993__i] = arguments[G__18993__i + 2]; ++G__18993__i;}
G__18992 = new cljs.core.IndexedSeq(G__18993__a,0,null);
}
return G__18988__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__18992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18988.cljs$lang$maxFixedArity = 2;
G__18988.cljs$lang$applyTo = G__18988__3.cljs$lang$applyTo;
G__18988.cljs$core$IFn$_invoke$arity$0 = G__18988__0;
G__18988.cljs$core$IFn$_invoke$arity$1 = G__18988__1;
G__18988.cljs$core$IFn$_invoke$arity$2 = G__18988__2;
G__18988.cljs$core$IFn$_invoke$arity$variadic = G__18988__3.cljs$core$IFn$_invoke$arity$variadic;
return G__18988;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18994__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__18994 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18995__i = 0, G__18995__a = new Array(arguments.length -  0);
while (G__18995__i < G__18995__a.length) {G__18995__a[G__18995__i] = arguments[G__18995__i + 0]; ++G__18995__i;}
  path = new cljs.core.IndexedSeq(G__18995__a,0,null);
} 
return G__18994__delegate.call(this,path);};
G__18994.cljs$lang$maxFixedArity = 0;
G__18994.cljs$lang$applyTo = (function (arglist__18996){
var path = cljs.core.seq(arglist__18996);
return G__18994__delegate(path);
});
G__18994.cljs$core$IFn$_invoke$arity$variadic = G__18994__delegate;
return G__18994;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__18997__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__18997 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__18998__i = 0, G__18998__a = new Array(arguments.length -  0);
while (G__18998__i < G__18998__a.length) {G__18998__a[G__18998__i] = arguments[G__18998__i + 0]; ++G__18998__i;}
  path = new cljs.core.IndexedSeq(G__18998__a,0,null);
} 
return G__18997__delegate.call(this,path);};
G__18997.cljs$lang$maxFixedArity = 0;
G__18997.cljs$lang$applyTo = (function (arglist__18999){
var path = cljs.core.seq(arglist__18999);
return G__18997__delegate(path);
});
G__18997.cljs$core$IFn$_invoke$arity$variadic = G__18997__delegate;
return G__18997;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__17638__auto__ = com.rpl.specter.pathcache19000;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info19001 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},cljs.core.cst$sym$com$rpl$specter_SLASH_cond_DASH_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$cond_DASH_path,"target/public/cljs-out/dep/com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),cljs.core.cst$sym$cond_DASH_path),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},cljs.core.cst$sym$com$rpl$specter_SLASH_pred,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$direct_DASH_nav,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$pred,"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),cljs.core.cst$sym$pred),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,cljs.core.cst$sym$afn)], null),cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},cljs.core.cst$sym$com$rpl$specter_SLASH_STAY,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$STAY,"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),cljs.core.cst$sym$STAY),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$coll_QMARK_,"cljs/core.cljs",12,1,2135,2135,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),cljs.core.cst$sym$coll_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL,"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),cljs.core.cst$sym$ALL),com.rpl.specter.impl.__GT_LocalSym(p,cljs.core.cst$sym$p)], null)], null),cljs.core.list(cljs.core.cst$sym$cond_DASH_path,cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn),cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$p], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_path,cljs.core.cst$sym$pred,cljs.core.cst$sym$afn,cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null),cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null));
com.rpl.specter.pathcache19000 = info19001;

return info19001;
})():info__17638__auto__);
var precompiled19002 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__19003 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled19002.cljs$core$IFn$_invoke$arity$1 ? precompiled19002.cljs$core$IFn$_invoke$arity$1(G__19003) : precompiled19002.call(null,G__19003));
} else {
return precompiled19002;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__17638__auto__ = com.rpl.specter.pathcache19004;
var info__17638__auto____$1 = (((info__17638__auto__ == null))?(function (){var info19005 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},cljs.core.cst$sym$com$rpl$specter_SLASH_cond_DASH_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$cond_DASH_path,"target/public/cljs-out/dep/com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),cljs.core.cst$sym$cond_DASH_path),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},cljs.core.cst$sym$com$rpl$specter_SLASH_pred,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$direct_DASH_nav,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$pred,"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),cljs.core.cst$sym$pred),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,cljs.core.cst$sym$afn)], null),cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},cljs.core.cst$sym$com$rpl$specter_SLASH_STAY,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$STAY,"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),cljs.core.cst$sym$STAY),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$coll_QMARK_,"cljs/core.cljs",12,1,2135,2135,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),cljs.core.cst$sym$coll_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL_DASH_WITH_DASH_META,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,"target/public/cljs-out/dep/com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),cljs.core.cst$sym$ALL_DASH_WITH_DASH_META),com.rpl.specter.impl.__GT_LocalSym(p,cljs.core.cst$sym$p)], null)], null),cljs.core.list(cljs.core.cst$sym$cond_DASH_path,cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn),cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$p], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_path,cljs.core.cst$sym$pred,cljs.core.cst$sym$afn,cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null),cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null));
com.rpl.specter.pathcache19004 = info19005;

return info19005;
})():info__17638__auto__);
var precompiled19006 = com.rpl.specter.impl.cached_path_info_precompiled(info__17638__auto____$1);
var dynamic_QMARK___17639__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__17638__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17639__auto__)){
var G__19007 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled19006.cljs$core$IFn$_invoke$arity$1 ? precompiled19006.cljs$core$IFn$_invoke$arity$1(G__19007) : precompiled19006.call(null,G__19007));
} else {
return precompiled19006;
}
})());

return p;
}));
var empty__GT_NONE_19010 = (function (){var G__19008 = cljs.core.empty_QMARK_;
var G__19009 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__19008,G__19009) : com.rpl.specter.if_path.call(null,G__19008,G__19009));
})();
var compact_STAR__19011 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_19010) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_19010));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__19012__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__19011,path);
};
var G__19012 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__19013__i = 0, G__19013__a = new Array(arguments.length -  0);
while (G__19013__i < G__19013__a.length) {G__19013__a[G__19013__i] = arguments[G__19013__i + 0]; ++G__19013__i;}
  path = new cljs.core.IndexedSeq(G__19013__a,0,null);
} 
return G__19012__delegate.call(this,path);};
G__19012.cljs$lang$maxFixedArity = 0;
G__19012.cljs$lang$applyTo = (function (arglist__19014){
var path = cljs.core.seq(arglist__19014);
return G__19012__delegate(path);
});
G__19012.cljs$core$IFn$_invoke$arity$variadic = G__19012__delegate;
return G__19012;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
