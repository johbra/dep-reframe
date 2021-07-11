// Compiled by ClojureScript 1.10.773 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_.call(null,path)){
return cljs.core.every_QMARK_.call(null,com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_.call(null,path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__20897__delegate = function (args){
var ret = cljs.core.apply.call(null,f,args);
if(((cljs.core.sequential_QMARK_.call(null,ret)) && (com.rpl.specter.static_path_QMARK_.call(null,ret)))){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,ret);
} else {
if(((cljs.core.sequential_QMARK_.call(null,ret)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ret))))){
return cljs.core.first.call(null,ret);
} else {
return ret;

}
}
};
var G__20897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20898__i = 0, G__20898__a = new Array(arguments.length -  0);
while (G__20898__i < G__20898__a.length) {G__20898__a[G__20898__i] = arguments[G__20898__i + 0]; ++G__20898__i;}
  args = new cljs.core.IndexedSeq(G__20898__a,0,null);
} 
return G__20897__delegate.call(this,args);};
G__20897.cljs$lang$maxFixedArity = 0;
G__20897.cljs$lang$applyTo = (function (arglist__20899){
var args = cljs.core.seq(arglist__20899);
return G__20897__delegate(args);
});
G__20897.cljs$core$IFn$_invoke$arity$variadic = G__20897__delegate;
return G__20897;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20916 = arguments.length;
var i__4737__auto___20917 = (0);
while(true){
if((i__4737__auto___20917 < len__4736__auto___20916)){
args__4742__auto__.push((arguments[i__4737__auto___20917]));

var G__20918 = (i__4737__auto___20917 + (1));
i__4737__auto___20917 = G__20918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq20915){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20915));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
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
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
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
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
return com.rpl.specter.compiled_traverse_all.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath));
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
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
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
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
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
var len__4736__auto___20926 = arguments.length;
var i__4737__auto___20927 = (0);
while(true){
if((i__4737__auto___20927 < len__4736__auto___20926)){
args__4742__auto__.push((arguments[i__4737__auto___20927]));

var G__20928 = (i__4737__auto___20927 + (1));
i__4737__auto___20927 = G__20928;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__20923){
var map__20924 = p__20923;
var map__20924__$1 = (((((!((map__20924 == null))))?(((((map__20924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20924):map__20924);
var merge_fn = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq20919){
var G__20920 = cljs.core.first.call(null,seq20919);
var seq20919__$1 = cljs.core.next.call(null,seq20919);
var G__20921 = cljs.core.first.call(null,seq20919__$1);
var seq20919__$2 = cljs.core.next.call(null,seq20919__$1);
var G__20922 = cljs.core.first.call(null,seq20919__$2);
var seq20919__$3 = cljs.core.next.call(null,seq20919__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20920,G__20921,G__20922,seq20919__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20929__delegate = function (args){
return cljs.core.map.call(null,latenavfn,args);
};
var G__20929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20930__i = 0, G__20930__a = new Array(arguments.length -  0);
while (G__20930__i < G__20930__a.length) {G__20930__a[G__20930__i] = arguments[G__20930__i + 0]; ++G__20930__i;}
  args = new cljs.core.IndexedSeq(G__20930__a,0,null);
} 
return G__20929__delegate.call(this,args);};
G__20929.cljs$lang$maxFixedArity = 0;
G__20929.cljs$lang$applyTo = (function (arglist__20931){
var args = cljs.core.seq(arglist__20931);
return G__20929__delegate(args);
});
G__20929.cljs$core$IFn$_invoke$arity$variadic = G__20929__delegate;
return G__20929;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20932 = (function (meta20933){
this.meta20933 = meta20933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20934,meta20933__$1){
var self__ = this;
var _20934__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20932(meta20933__$1));
}));

(com.rpl.specter.t_com$rpl$specter20932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20934){
var self__ = this;
var _20934__$1 = this;
return self__.meta20933;
}));

(com.rpl.specter.t_com$rpl$specter20932.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20932.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter20932.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter20932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20933","meta20933",908179893,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20932.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20932.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20932");

(com.rpl.specter.t_com$rpl$specter20932.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20932");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20932.
 */
com.rpl.specter.__GT_t_com$rpl$specter20932 = (function com$rpl$specter$__GT_t_com$rpl$specter20932(meta20933){
return (new com.rpl.specter.t_com$rpl$specter20932(meta20933));
});

}

return (new com.rpl.specter.t_com$rpl$specter20932(null));
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
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20935 = (function (afn,meta20936){
this.afn = afn;
this.meta20936 = meta20936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20937,meta20936__$1){
var self__ = this;
var _20937__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20935(self__.afn,meta20936__$1));
}));

(com.rpl.specter.t_com$rpl$specter20935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20937){
var self__ = this;
var _20937__$1 = this;
return self__.meta20936;
}));

(com.rpl.specter.t_com$rpl$specter20935.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20935.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter20935.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter20935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta20936","meta20936",1798880966,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20935.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20935.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20935");

(com.rpl.specter.t_com$rpl$specter20935.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20935");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20935.
 */
com.rpl.specter.__GT_t_com$rpl$specter20935 = (function com$rpl$specter$__GT_t_com$rpl$specter20935(afn__$1,meta20936){
return (new com.rpl.specter.t_com$rpl$specter20935(afn__$1,meta20936));
});

}

return (new com.rpl.specter.t_com$rpl$specter20935(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20938 = (function (afn,meta20939){
this.afn = afn;
this.meta20939 = meta20939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20940,meta20939__$1){
var self__ = this;
var _20940__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20938(self__.afn,meta20939__$1));
}));

(com.rpl.specter.t_com$rpl$specter20938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20940){
var self__ = this;
var _20940__$1 = this;
return self__.meta20939;
}));

(com.rpl.specter.t_com$rpl$specter20938.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20938.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter20938.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return self__.afn.call(null,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter20938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta20939","meta20939",-70220132,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20938.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20938.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20938");

(com.rpl.specter.t_com$rpl$specter20938.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20938");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20938.
 */
com.rpl.specter.__GT_t_com$rpl$specter20938 = (function com$rpl$specter$__GT_t_com$rpl$specter20938(afn__$1,meta20939){
return (new com.rpl.specter.t_com$rpl$specter20938(afn__$1,meta20939));
});

}

return (new com.rpl.specter.t_com$rpl$specter20938(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
return com.rpl.specter.terminal.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20941 = (function (meta20942){
this.meta20942 = meta20942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20943,meta20942__$1){
var self__ = this;
var _20943__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20941(meta20942__$1));
}));

(com.rpl.specter.t_com$rpl$specter20941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20943){
var self__ = this;
var _20943__$1 = this;
return self__.meta20942;
}));

(com.rpl.specter.t_com$rpl$specter20941.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20941.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20941.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20942","meta20942",-1016803795,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20941.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20941.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20941");

(com.rpl.specter.t_com$rpl$specter20941.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20941");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20941.
 */
com.rpl.specter.__GT_t_com$rpl$specter20941 = (function com$rpl$specter$__GT_t_com$rpl$specter20941(meta20942){
return (new com.rpl.specter.t_com$rpl$specter20941(meta20942));
});

}

return (new com.rpl.specter.t_com$rpl$specter20941(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20944 = (function (meta20945){
this.meta20945 = meta20945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20946,meta20945__$1){
var self__ = this;
var _20946__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20944(meta20945__$1));
}));

(com.rpl.specter.t_com$rpl$specter20944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20946){
var self__ = this;
var _20946__$1 = this;
return self__.meta20945;
}));

(com.rpl.specter.t_com$rpl$specter20944.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20944.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20944.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter20944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20945","meta20945",1721633035,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20944.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20944.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20944");

(com.rpl.specter.t_com$rpl$specter20944.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20944");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20944.
 */
com.rpl.specter.__GT_t_com$rpl$specter20944 = (function com$rpl$specter$__GT_t_com$rpl$specter20944(meta20945){
return (new com.rpl.specter.t_com$rpl$specter20944(meta20945));
});

}

return (new com.rpl.specter.t_com$rpl$specter20944(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__17129__auto__,v){
var ret__17130__auto__ = next_fn.call(null,v);
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20947 = (function (meta20948){
this.meta20948 = meta20948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20949,meta20948__$1){
var self__ = this;
var _20949__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20947(meta20948__$1));
}));

(com.rpl.specter.t_com$rpl$specter20947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20949){
var self__ = this;
var _20949__$1 = this;
return self__.meta20948;
}));

(com.rpl.specter.t_com$rpl$specter20947.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20947.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return cljs.core.reduce.call(null,(function (curr__17129__auto__,v){
var ret__17130__auto__ = next_fn.call(null,v);
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20947.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20948","meta20948",-741477953,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20947.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20947.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20947");

(com.rpl.specter.t_com$rpl$specter20947.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20947");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20947.
 */
com.rpl.specter.__GT_t_com$rpl$specter20947 = (function com$rpl$specter$__GT_t_com$rpl$specter20947(meta20948){
return (new com.rpl.specter.t_com$rpl$specter20947(meta20948));
});

}

return (new com.rpl.specter.t_com$rpl$specter20947(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__17129__auto__,k){
var ret__17130__auto__ = next_fn.call(null,k);
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20950 = (function (meta20951){
this.meta20951 = meta20951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20952,meta20951__$1){
var self__ = this;
var _20952__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20950(meta20951__$1));
}));

(com.rpl.specter.t_com$rpl$specter20950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20952){
var self__ = this;
var _20952__$1 = this;
return self__.meta20951;
}));

(com.rpl.specter.t_com$rpl$specter20950.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20950.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return cljs.core.reduce.call(null,(function (curr__17129__auto__,k){
var ret__17130__auto__ = next_fn.call(null,k);
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20950.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20951","meta20951",-2038450333,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20950.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20950.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20950");

(com.rpl.specter.t_com$rpl$specter20950.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20950");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20950.
 */
com.rpl.specter.__GT_t_com$rpl$specter20950 = (function com$rpl$specter$__GT_t_com$rpl$specter20950(meta20951){
return (new com.rpl.specter.t_com$rpl$specter20950(meta20951));
});

}

return (new com.rpl.specter.t_com$rpl$specter20950(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20953 = (function (meta20954){
this.meta20954 = meta20954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20955,meta20954__$1){
var self__ = this;
var _20955__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20953(meta20954__$1));
}));

(com.rpl.specter.t_com$rpl$specter20953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20955){
var self__ = this;
var _20955__$1 = this;
return self__.meta20954;
}));

(com.rpl.specter.t_com$rpl$specter20953.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20953.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19928__auto__,vals__19929__auto__,structure,next_fn__19930__auto__){
var self__ = this;
var this__19928__auto____$1 = this;
return next_fn__19930__auto__.call(null,cljs.core.conj.call(null,vals__19929__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter20953.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19928__auto__,vals__19929__auto__,structure,next_fn__19930__auto__){
var self__ = this;
var this__19928__auto____$1 = this;
return next_fn__19930__auto__.call(null,cljs.core.conj.call(null,vals__19929__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter20953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20954","meta20954",-1643648710,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20953.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20953.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20953");

(com.rpl.specter.t_com$rpl$specter20953.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20953");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20953.
 */
com.rpl.specter.__GT_t_com$rpl$specter20953 = (function com$rpl$specter$__GT_t_com$rpl$specter20953(meta20954){
return (new com.rpl.specter.t_com$rpl$specter20953(meta20954));
});

}

return (new com.rpl.specter.t_com$rpl$specter20953(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last);
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first);


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20956 = (function (start_index_fn,end_index_fn,meta20957){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta20957 = meta20957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20958,meta20957__$1){
var self__ = this;
var _20958__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20956(self__.start_index_fn,self__.end_index_fn,meta20957__$1));
}));

(com.rpl.specter.t_com$rpl$specter20956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20958){
var self__ = this;
var _20958__$1 = this;
return self__.meta20957;
}));

(com.rpl.specter.t_com$rpl$specter20956.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20956.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20956.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta20957","meta20957",864768968,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20956.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20956.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20956");

(com.rpl.specter.t_com$rpl$specter20956.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20956");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20956.
 */
com.rpl.specter.__GT_t_com$rpl$specter20956 = (function com$rpl$specter$__GT_t_com$rpl$specter20956(start_index_fn__$1,end_index_fn__$1,meta20957){
return (new com.rpl.specter.t_com$rpl$specter20956(start_index_fn__$1,end_index_fn__$1,meta20957));
});

}

return (new com.rpl.specter.t_com$rpl$specter20956(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn);
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20959 = (function (start,end,meta20960){
this.start = start;
this.end = end;
this.meta20960 = meta20960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20961,meta20960__$1){
var self__ = this;
var _20961__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20959(self__.start,self__.end,meta20960__$1));
}));

(com.rpl.specter.t_com$rpl$specter20959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20961){
var self__ = this;
var _20961__$1 = this;
return self__.meta20960;
}));

(com.rpl.specter.t_com$rpl$specter20959.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20959.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20959.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta20960","meta20960",-2084932563,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20959.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20959.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20959");

(com.rpl.specter.t_com$rpl$specter20959.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20959");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20959.
 */
com.rpl.specter.__GT_t_com$rpl$specter20959 = (function com$rpl$specter$__GT_t_com$rpl$specter20959(start__$1,end__$1,meta20960){
return (new com.rpl.specter.t_com$rpl$specter20959(start__$1,end__$1,meta20960));
});

}

return (new com.rpl.specter.t_com$rpl$specter20959(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__17129__auto__,p__20962){
var vec__20963 = p__20962;
var s = cljs.core.nth.call(null,vec__20963,(0),null);
var e = cljs.core.nth.call(null,vec__20963,(1),null);
var ret__17130__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20966 = (function (pred,meta20967){
this.pred = pred;
this.meta20967 = meta20967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20968,meta20967__$1){
var self__ = this;
var _20968__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20966(self__.pred,meta20967__$1));
}));

(com.rpl.specter.t_com$rpl$specter20966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20968){
var self__ = this;
var _20968__$1 = this;
return self__.meta20967;
}));

(com.rpl.specter.t_com$rpl$specter20966.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20966.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return cljs.core.reduce.call(null,(function (curr__17129__auto__,p__20969){
var vec__20970 = p__20969;
var s = cljs.core.nth.call(null,vec__20970,(0),null);
var e = cljs.core.nth.call(null,vec__20970,(1),null);
var ret__17130__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter20966.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta20967","meta20967",1432941813,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20966.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20966.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20966");

(com.rpl.specter.t_com$rpl$specter20966.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20966");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20966.
 */
com.rpl.specter.__GT_t_com$rpl$specter20966 = (function com$rpl$specter$__GT_t_com$rpl$specter20966(pred__$1,meta20967){
return (new com.rpl.specter.t_com$rpl$specter20966(pred__$1,meta20967));
});

}

return (new com.rpl.specter.t_com$rpl$specter20966(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20973 = (function (meta20974){
this.meta20974 = meta20974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20975,meta20974__$1){
var self__ = this;
var _20975__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20973(meta20974__$1));
}));

(com.rpl.specter.t_com$rpl$specter20973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20975){
var self__ = this;
var _20975__$1 = this;
return self__.meta20974;
}));

(com.rpl.specter.t_com$rpl$specter20973.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20973.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter20973.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter20973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20974","meta20974",-804325812,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20973.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20973.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20973");

(com.rpl.specter.t_com$rpl$specter20973.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20973");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20973.
 */
com.rpl.specter.__GT_t_com$rpl$specter20973 = (function com$rpl$specter$__GT_t_com$rpl$specter20973(meta20974){
return (new com.rpl.specter.t_com$rpl$specter20973(meta20974));
});

}

return (new com.rpl.specter.t_com$rpl$specter20973(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20976 = (function (meta20977){
this.meta20977 = meta20977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20978,meta20977__$1){
var self__ = this;
var _20978__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20976(meta20977__$1));
}));

(com.rpl.specter.t_com$rpl$specter20976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20978){
var self__ = this;
var _20978__$1 = this;
return self__.meta20977;
}));

(com.rpl.specter.t_com$rpl$specter20976.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20976.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter20976.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter20976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20977","meta20977",-43803074,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20976.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20976.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20976");

(com.rpl.specter.t_com$rpl$specter20976.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20976");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20976.
 */
com.rpl.specter.__GT_t_com$rpl$specter20976 = (function com$rpl$specter$__GT_t_com$rpl$specter20976(meta20977){
return (new com.rpl.specter.t_com$rpl$specter20976(meta20977));
});

}

return (new com.rpl.specter.t_com$rpl$specter20976(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20979 = (function (meta20980){
this.meta20980 = meta20980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20981,meta20980__$1){
var self__ = this;
var _20981__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20979(meta20980__$1));
}));

(com.rpl.specter.t_com$rpl$specter20979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20981){
var self__ = this;
var _20981__$1 = this;
return self__.meta20980;
}));

(com.rpl.specter.t_com$rpl$specter20979.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20979.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter20979.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter20979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20980","meta20980",28820970,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20979.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20979.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20979");

(com.rpl.specter.t_com$rpl$specter20979.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20979");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20979.
 */
com.rpl.specter.__GT_t_com$rpl$specter20979 = (function com$rpl$specter$__GT_t_com$rpl$specter20979(meta20980){
return (new com.rpl.specter.t_com$rpl$specter20979(meta20980));
});

}

return (new com.rpl.specter.t_com$rpl$specter20979(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20982 = (function (meta20983){
this.meta20983 = meta20983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20984,meta20983__$1){
var self__ = this;
var _20984__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20982(meta20983__$1));
}));

(com.rpl.specter.t_com$rpl$specter20982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20984){
var self__ = this;
var _20984__$1 = this;
return self__.meta20983;
}));

(com.rpl.specter.t_com$rpl$specter20982.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20982.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter20982.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter20982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20983","meta20983",-1224501936,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20982.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20982.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20982");

(com.rpl.specter.t_com$rpl$specter20982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20982");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20982.
 */
com.rpl.specter.__GT_t_com$rpl$specter20982 = (function com$rpl$specter$__GT_t_com$rpl$specter20982(meta20983){
return (new com.rpl.specter.t_com$rpl$specter20982(meta20983));
});

}

return (new com.rpl.specter.t_com$rpl$specter20982(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20985 = (function (meta20986){
this.meta20986 = meta20986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20987,meta20986__$1){
var self__ = this;
var _20987__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20985(meta20986__$1));
}));

(com.rpl.specter.t_com$rpl$specter20985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20987){
var self__ = this;
var _20987__$1 = this;
return self__.meta20986;
}));

(com.rpl.specter.t_com$rpl$specter20985.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20985.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter20985.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter20985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20986","meta20986",934636958,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20985.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20985.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20985");

(com.rpl.specter.t_com$rpl$specter20985.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20985");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20985.
 */
com.rpl.specter.__GT_t_com$rpl$specter20985 = (function com$rpl$specter$__GT_t_com$rpl$specter20985(meta20986){
return (new com.rpl.specter.t_com$rpl$specter20985(meta20986));
});

}

return (new com.rpl.specter.t_com$rpl$specter20985(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj.call(null,(function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20988 = (function (aset,meta20989){
this.aset = aset;
this.meta20989 = meta20989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20990,meta20989__$1){
var self__ = this;
var _20990__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20988(self__.aset,meta20989__$1));
}));

(com.rpl.specter.t_com$rpl$specter20988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20990){
var self__ = this;
var _20990__$1 = this;
return self__.meta20989;
}));

(com.rpl.specter.t_com$rpl$specter20988.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20988.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter20988.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter20988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta20989","meta20989",307214617,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20988.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20988.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20988");

(com.rpl.specter.t_com$rpl$specter20988.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20988");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20988.
 */
com.rpl.specter.__GT_t_com$rpl$specter20988 = (function com$rpl$specter$__GT_t_com$rpl$specter20988(aset__$1,meta20989){
return (new com.rpl.specter.t_com$rpl$specter20988(aset__$1,meta20989));
});

}

return (new com.rpl.specter.t_com$rpl$specter20988(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj.call(null,(function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20991 = (function (m_keys,meta20992){
this.m_keys = m_keys;
this.meta20992 = meta20992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20993,meta20992__$1){
var self__ = this;
var _20993__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20991(self__.m_keys,meta20992__$1));
}));

(com.rpl.specter.t_com$rpl$specter20991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20993){
var self__ = this;
var _20993__$1 = this;
return self__.meta20992;
}));

(com.rpl.specter.t_com$rpl$specter20991.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20991.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter20991.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
}));

(com.rpl.specter.t_com$rpl$specter20991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta20992","meta20992",563192964,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20991.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20991.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20991");

(com.rpl.specter.t_com$rpl$specter20991.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20991");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20991.
 */
com.rpl.specter.__GT_t_com$rpl$specter20991 = (function com$rpl$specter$__GT_t_com$rpl$specter20991(m_keys__$1,meta20992){
return (new com.rpl.specter.t_com$rpl$specter20991(m_keys__$1,meta20992));
});

}

return (new com.rpl.specter.t_com$rpl$specter20991(m_keys,null));
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
com.rpl.specter.subselect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20997__delegate = function (path){
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20994 = (function (path,late,meta20995){
this.path = path;
this.late = late;
this.meta20995 = meta20995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20996,meta20995__$1){
var self__ = this;
var _20996__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20994(self__.path,self__.late,meta20995__$1));
}));

(com.rpl.specter.t_com$rpl$specter20994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20996){
var self__ = this;
var _20996__$1 = this;
return self__.meta20995;
}));

(com.rpl.specter.t_com$rpl$specter20994.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20994.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
}));

(com.rpl.specter.t_com$rpl$specter20994.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.seq.call(null,transformed));
return com.rpl.specter.compiled_transform.call(null,self__.late,(function (_){
var vs = com.rpl.specter.impl.get_cell.call(null,values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.next);

return cljs.core.first.call(null,vs);
} else {
return com.rpl.specter.NONE;
}
}),structure);
}));

(com.rpl.specter.t_com$rpl$specter20994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta20995","meta20995",-74161042,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20994.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20994.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20994");

(com.rpl.specter.t_com$rpl$specter20994.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter20994");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20994.
 */
com.rpl.specter.__GT_t_com$rpl$specter20994 = (function com$rpl$specter$__GT_t_com$rpl$specter20994(path__$1,late__$1,meta20995){
return (new com.rpl.specter.t_com$rpl$specter20994(path__$1,late__$1,meta20995));
});

}

return (new com.rpl.specter.t_com$rpl$specter20994(path,late,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
};
var G__20997 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20998__i = 0, G__20998__a = new Array(arguments.length -  0);
while (G__20998__i < G__20998__a.length) {G__20998__a[G__20998__i] = arguments[G__20998__i + 0]; ++G__20998__i;}
  path = new cljs.core.IndexedSeq(G__20998__a,0,null);
} 
return G__20997__delegate.call(this,path);};
G__20997.cljs$lang$maxFixedArity = 0;
G__20997.cljs$lang$applyTo = (function (arglist__20999){
var path = cljs.core.seq(arglist__20999);
return G__20997__delegate(path);
});
G__20997.cljs$core$IFn$_invoke$arity$variadic = G__20997__delegate;
return G__20997;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21000 = (function (key,meta21001){
this.key = key;
this.meta21001 = meta21001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21002,meta21001__$1){
var self__ = this;
var _21002__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21000(self__.key,meta21001__$1));
}));

(com.rpl.specter.t_com$rpl$specter21000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21002){
var self__ = this;
var _21002__$1 = this;
return self__.meta21001;
}));

(com.rpl.specter.t_com$rpl$specter21000.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21000.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
return next_fn.call(null,vals,self__.key);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter21000.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
var newkey = next_fn.call(null,vals,self__.key);
var dissoced = cljs.core.dissoc.call(null,structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.call(null,dissoced,newkey,cljs.core.get.call(null,structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter21000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta21001","meta21001",-828864240,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21000.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21000.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21000");

(com.rpl.specter.t_com$rpl$specter21000.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21000");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21000.
 */
com.rpl.specter.__GT_t_com$rpl$specter21000 = (function com$rpl$specter$__GT_t_com$rpl$specter21000(key__$1,meta21001){
return (new com.rpl.specter.t_com$rpl$specter21000(key__$1,meta21001));
});

}

return (new com.rpl.specter.t_com$rpl$specter21000(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj.call(null,(function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21003 = (function (elem,meta21004){
this.elem = elem;
this.meta21004 = meta21004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21005,meta21004__$1){
var self__ = this;
var _21005__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21003(self__.elem,meta21004__$1));
}));

(com.rpl.specter.t_com$rpl$specter21003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21005){
var self__ = this;
var _21005__$1 = this;
return self__.meta21004;
}));

(com.rpl.specter.t_com$rpl$specter21003.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21003.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
return next_fn.call(null,vals,self__.elem);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter21003.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
var newelem = next_fn.call(null,vals,self__.elem);
var removed = cljs.core.disj.call(null,structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.call(null,removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter21003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta21004","meta21004",-131134280,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21003.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21003.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21003");

(com.rpl.specter.t_com$rpl$specter21003.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21003");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21003.
 */
com.rpl.specter.__GT_t_com$rpl$specter21003 = (function com$rpl$specter$__GT_t_com$rpl$specter21003(elem__$1,meta21004){
return (new com.rpl.specter.t_com$rpl$specter21003(elem__$1,meta21004));
});

}

return (new com.rpl.specter.t_com$rpl$specter21003(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_);
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj.call(null,(function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21006 = (function (index,meta21007){
this.index = index;
this.meta21007 = meta21007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21008,meta21007__$1){
var self__ = this;
var _21008__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21006(self__.index,meta21007__$1));
}));

(com.rpl.specter.t_com$rpl$specter21006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21008){
var self__ = this;
var _21008__$1 = this;
return self__.meta21007;
}));

(com.rpl.specter.t_com$rpl$specter21006.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21006.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter21006.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = next_fn.call(null,vals,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21009;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21010 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache21009 = info21010;

return info21010;
})():info__19938__auto__);
var precompiled21011 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21011.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null));
} else {
return precompiled21011;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter21006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta21007","meta21007",910082987,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21006.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21006.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21006");

(com.rpl.specter.t_com$rpl$specter21006.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21006");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21006.
 */
com.rpl.specter.__GT_t_com$rpl$specter21006 = (function com$rpl$specter$__GT_t_com$rpl$specter21006(index__$1,meta21007){
return (new com.rpl.specter.t_com$rpl$specter21006(index__$1,meta21007));
});

}

return (new com.rpl.specter.t_com$rpl$specter21006(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21012 = (function (i,meta21013){
this.i = i;
this.meta21013 = meta21013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21014,meta21013__$1){
var self__ = this;
var _21014__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21012(self__.i,meta21013__$1));
}));

(com.rpl.specter.t_com$rpl$specter21012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21014){
var self__ = this;
var _21014__$1 = this;
return self__.meta21013;
}));

(com.rpl.specter.t_com$rpl$specter21012.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21012.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
return next_fn.call(null,vals,self__.i);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter21012.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
var newi = next_fn.call(null,vals,self__.i);
if(cljs.core._EQ_.call(null,newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.call(null,structure,self__.i);
if(cljs.core.vector_QMARK_.call(null,structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__21021 = (j - (1));
var G__21022 = cljs.core.assoc.call(null,s,(j + (1)),cljs.core.nth.call(null,s,j));
j = G__21021;
s = G__21022;
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
var G__21023 = (j + (1));
var G__21024 = cljs.core.assoc.call(null,s,(j - (1)),cljs.core.nth.call(null,s,j));
j = G__21023;
s = G__21024;
continue;
}
break;
}
})());
return cljs.core.assoc.call(null,shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21015;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21016 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache21015 = info21016;

return info21016;
})():info__19938__auto__);
var precompiled21017 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21017.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null));
} else {
return precompiled21017;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21018;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21019 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache21018 = info21019;

return info21019;
})():info__19938__auto__);
var precompiled21020 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21020.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null));
} else {
return precompiled21020;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter21012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta21013","meta21013",1679385643,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21012.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21012.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21012");

(com.rpl.specter.t_com$rpl$specter21012.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21012");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21012.
 */
com.rpl.specter.__GT_t_com$rpl$specter21012 = (function com$rpl$specter$__GT_t_com$rpl$specter21012(i__$1,meta21013){
return (new com.rpl.specter.t_com$rpl$specter21012(i__$1,meta21013));
});

}

return (new com.rpl.specter.t_com$rpl$specter21012(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.call(null,(start - (1)));
return cljs.core.reduce.call(null,(function (curr__17129__auto__,e){
var ret__17130__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__21027 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__21027,(0),null);
var newe = cljs.core.nth.call(null,vec__21027,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21030;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21031 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__21025_SHARP_){
return (p1__21025_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__21026_SHARP_){
return (p1__21026_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache21030 = info21031;

return info21031;
})():info__19938__auto__);
var precompiled21032 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21032.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__21025_SHARP_){
return (p1__21025_SHARP_ >= (curri + (1)));
}),(function (p1__21026_SHARP_){
return (p1__21026_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__21025_SHARP_){
return (p1__21025_SHARP_ >= (curri + (1)));
}),(function (p1__21026_SHARP_){
return (p1__21026_SHARP_ <= newi);
})], null));
} else {
return precompiled21032;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21033;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21034 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache21033 = info21034;

return info21034;
})():info__19938__auto__);
var precompiled21035 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21035.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled21035;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21036;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21037 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache21036 = info21037;

return info21037;
})():info__19938__auto__);
var precompiled21038 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21038.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled21038;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21039 = (function (start,meta21040){
this.start = start;
this.meta21040 = meta21040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21041,meta21040__$1){
var self__ = this;
var _21041__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21039(self__.start,meta21040__$1));
}));

(com.rpl.specter.t_com$rpl$specter21039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21041){
var self__ = this;
var _21041__$1 = this;
return self__.meta21040;
}));

(com.rpl.specter.t_com$rpl$specter21039.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21039.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var i = com.rpl.specter.impl.mutable_cell.call(null,(self__.start - (1)));
return cljs.core.reduce.call(null,(function (curr__17129__auto__,e){
var ret__17130__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter21039.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__21042 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__21042,(0),null);
var newe = cljs.core.nth.call(null,vec__21042,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21045;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21046 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__21025_SHARP_){
return (p1__21025_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__21026_SHARP_){
return (p1__21026_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__21025#","p1__21025#",1241046685,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__21026#","p1__21026#",-481241345,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache21045 = info21046;

return info21046;
})():info__19938__auto__);
var precompiled21047 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21047.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__21025_SHARP_){
return (p1__21025_SHARP_ >= (curri + (1)));
}),(function (p1__21026_SHARP_){
return (p1__21026_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__21025_SHARP_){
return (p1__21025_SHARP_ >= (curri + (1)));
}),(function (p1__21026_SHARP_){
return (p1__21026_SHARP_ <= newi);
})], null));
} else {
return precompiled21047;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21048;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21049 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache21048 = info21049;

return info21049;
})():info__19938__auto__);
var precompiled21050 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21050.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled21050;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21051;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21052 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache21051 = info21052;

return info21052;
})():info__19938__auto__);
var precompiled21053 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21053.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled21053;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter21039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta21040","meta21040",-1071322032,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21039.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21039.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21039");

(com.rpl.specter.t_com$rpl$specter21039.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21039");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21039.
 */
com.rpl.specter.__GT_t_com$rpl$specter21039 = (function com$rpl$specter$__GT_t_com$rpl$specter21039(start__$1,meta21040){
return (new com.rpl.specter.t_com$rpl$specter21039(start__$1,meta21040));
});

}

return (new com.rpl.specter.t_com$rpl$specter21039(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = com.rpl.specter.indexed_vals.call(null,(0));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21054 = (function (afn,meta21055){
this.afn = afn;
this.meta21055 = meta21055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21056,meta21055__$1){
var self__ = this;
var _21056__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21054(self__.afn,meta21055__$1));
}));

(com.rpl.specter.t_com$rpl$specter21054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21056){
var self__ = this;
var _21056__$1 = this;
return self__.meta21055;
}));

(com.rpl.specter.t_com$rpl$specter21054.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21054.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter21054.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter21054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta21055","meta21055",-1141182563,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21054.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21054.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21054");

(com.rpl.specter.t_com$rpl$specter21054.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21054");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21054.
 */
com.rpl.specter.__GT_t_com$rpl$specter21054 = (function com$rpl$specter$__GT_t_com$rpl$specter21054(afn__$1,meta21055){
return (new com.rpl.specter.t_com$rpl$specter21054(afn__$1,meta21055));
});

}

return (new com.rpl.specter.t_com$rpl$specter21054(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
return next_fn.call(null,parse_fn.call(null,structure));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj.call(null,(function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21057 = (function (parse_fn,unparse_fn,meta21058){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta21058 = meta21058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21059,meta21058__$1){
var self__ = this;
var _21059__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21057(self__.parse_fn,self__.unparse_fn,meta21058__$1));
}));

(com.rpl.specter.t_com$rpl$specter21057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21059){
var self__ = this;
var _21059__$1 = this;
return self__.meta21058;
}));

(com.rpl.specter.t_com$rpl$specter21057.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21057.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,self__.parse_fn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter21057.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter21057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta21058","meta21058",1859993911,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21057.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21057.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21057");

(com.rpl.specter.t_com$rpl$specter21057.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21057");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21057.
 */
com.rpl.specter.__GT_t_com$rpl$specter21057 = (function com$rpl$specter$__GT_t_com$rpl$specter21057(parse_fn__$1,unparse_fn__$1,meta21058){
return (new com.rpl.specter.t_com$rpl$specter21057(parse_fn__$1,unparse_fn__$1,meta21058));
});

}

return (new com.rpl.specter.t_com$rpl$specter21057(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21060 = (function (meta21061){
this.meta21061 = meta21061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21062,meta21061__$1){
var self__ = this;
var _21062__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21060(meta21061__$1));
}));

(com.rpl.specter.t_com$rpl$specter21060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21062){
var self__ = this;
var _21062__$1 = this;
return self__.meta21061;
}));

(com.rpl.specter.t_com$rpl$specter21060.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21060.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,cljs.core.deref.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter21060.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter21060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21061","meta21061",-1076768031,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21060.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21060.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21060");

(com.rpl.specter.t_com$rpl$specter21060.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21060");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21060.
 */
com.rpl.specter.__GT_t_com$rpl$specter21060 = (function com$rpl$specter$__GT_t_com$rpl$specter21060(meta21061){
return (new com.rpl.specter.t_com$rpl$specter21060(meta21061));
});

}

return (new com.rpl.specter.t_com$rpl$specter21060(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__17129__auto__,s){
var ret__17130__auto__ = next_fn.call(null,s);
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace.call(null,structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21063 = (function (re,meta21064){
this.re = re;
this.meta21064 = meta21064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21065,meta21064__$1){
var self__ = this;
var _21065__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21063(self__.re,meta21064__$1));
}));

(com.rpl.specter.t_com$rpl$specter21063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21065){
var self__ = this;
var _21065__$1 = this;
return self__.meta21064;
}));

(com.rpl.specter.t_com$rpl$specter21063.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21063.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return cljs.core.reduce.call(null,(function (curr__17129__auto__,s){
var ret__17130__auto__ = next_fn.call(null,s);
if((ret__17130__auto__ === com.rpl.specter.NONE)){
return curr__17129__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__17130__auto__)){
return cljs.core.reduced.call(null,ret__17130__auto__);
} else {
return ret__17130__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter21063.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return clojure.string.replace.call(null,structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter21063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta21064","meta21064",-1392488243,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21063.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21063.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21063");

(com.rpl.specter.t_com$rpl$specter21063.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21063");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21063.
 */
com.rpl.specter.__GT_t_com$rpl$specter21063 = (function com$rpl$specter$__GT_t_com$rpl$specter21063(re__$1,meta21064){
return (new com.rpl.specter.t_com$rpl$specter21063(re__$1,meta21064));
});

}

return (new com.rpl.specter.t_com$rpl$specter21063(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21071__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21068 = (function (path,temp__5733__auto__,late,meta21069){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta21069 = meta21069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21070,meta21069__$1){
var self__ = this;
var _21070__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21068(self__.path,self__.temp__5733__auto__,self__.late,meta21069__$1));
}));

(com.rpl.specter.t_com$rpl$specter21068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21070){
var self__ = this;
var _21070__$1 = this;
return self__.meta21069;
}));

(com.rpl.specter.t_com$rpl$specter21068.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21068.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__21066_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__21066_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter21068.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__21067_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__21067_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter21068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta21069","meta21069",-509212874,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21068.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21068.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21068");

(com.rpl.specter.t_com$rpl$specter21068.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21068");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21068.
 */
com.rpl.specter.__GT_t_com$rpl$specter21068 = (function com$rpl$specter$__GT_t_com$rpl$specter21068(path__$1,temp__5733__auto____$1,late__$1,meta21069){
return (new com.rpl.specter.t_com$rpl$specter21068(path__$1,temp__5733__auto____$1,late__$1,meta21069));
});

}

return (new com.rpl.specter.t_com$rpl$specter21068(path,temp__5733__auto__,late,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
}
};
var G__21071 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21072__i = 0, G__21072__a = new Array(arguments.length -  0);
while (G__21072__i < G__21072__a.length) {G__21072__a[G__21072__i] = arguments[G__21072__i + 0]; ++G__21072__i;}
  path = new cljs.core.IndexedSeq(G__21072__a,0,null);
} 
return G__21071__delegate.call(this,path);};
G__21071.cljs$lang$maxFixedArity = 0;
G__21071.cljs$lang$applyTo = (function (arglist__21073){
var path = cljs.core.seq(arglist__21073);
return G__21071__delegate(path);
});
G__21071.cljs$core$IFn$_invoke$arity$variadic = G__21071__delegate;
return G__21071;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21079__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
} else {
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21076 = (function (path,temp__5733__auto__,late,meta21077){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta21077 = meta21077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21078,meta21077__$1){
var self__ = this;
var _21078__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21076(self__.path,self__.temp__5733__auto__,self__.late,meta21077__$1));
}));

(com.rpl.specter.t_com$rpl$specter21076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21078){
var self__ = this;
var _21078__$1 = this;
return self__.meta21077;
}));

(com.rpl.specter.t_com$rpl$specter21076.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21076.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__21074_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__21074_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter21076.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__21075_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__21075_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter21076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta21077","meta21077",549972085,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21076.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21076.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21076");

(com.rpl.specter.t_com$rpl$specter21076.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21076");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21076.
 */
com.rpl.specter.__GT_t_com$rpl$specter21076 = (function com$rpl$specter$__GT_t_com$rpl$specter21076(path__$1,temp__5733__auto____$1,late__$1,meta21077){
return (new com.rpl.specter.t_com$rpl$specter21076(path__$1,temp__5733__auto____$1,late__$1,meta21077));
});

}

return (new com.rpl.specter.t_com$rpl$specter21076(path,temp__5733__auto__,late,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
}
};
var G__21079 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21080__i = 0, G__21080__a = new Array(arguments.length -  0);
while (G__21080__i < G__21080__a.length) {G__21080__a[G__21080__i] = arguments[G__21080__i + 0]; ++G__21080__i;}
  path = new cljs.core.IndexedSeq(G__21080__a,0,null);
} 
return G__21079__delegate.call(this,path);};
G__21079.cljs$lang$maxFixedArity = 0;
G__21079.cljs$lang$applyTo = (function (arglist__21081){
var path = cljs.core.seq(arglist__21081);
return G__21079__delegate(path);
});
G__21079.cljs$core$IFn$_invoke$arity$variadic = G__21079__delegate;
return G__21079;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21082__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__21082 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21083__i = 0, G__21083__a = new Array(arguments.length -  0);
while (G__21083__i < G__21083__a.length) {G__21083__a[G__21083__i] = arguments[G__21083__i + 0]; ++G__21083__i;}
  path = new cljs.core.IndexedSeq(G__21083__a,0,null);
} 
return G__21082__delegate.call(this,path);};
G__21082.cljs$lang$maxFixedArity = 0;
G__21082.cljs$lang$applyTo = (function (arglist__21084){
var path = cljs.core.seq(arglist__21084);
return G__21082__delegate(path);
});
G__21082.cljs$core$IFn$_invoke$arity$variadic = G__21082__delegate;
return G__21082;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,update_fn){
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21085 = (function (path,update_fn,late,late_fn,meta21086){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta21086 = meta21086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21087,meta21086__$1){
var self__ = this;
var _21087__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21085(self__.path,self__.update_fn,self__.late,self__.late_fn,meta21086__$1));
}));

(com.rpl.specter.t_com$rpl$specter21085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21087){
var self__ = this;
var _21087__$1 = this;
return self__.meta21086;
}));

(com.rpl.specter.t_com$rpl$specter21085.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21085.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter21085.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter21085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta21086","meta21086",360134220,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21085.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21085.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21085");

(com.rpl.specter.t_com$rpl$specter21085.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21085");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21085.
 */
com.rpl.specter.__GT_t_com$rpl$specter21085 = (function com$rpl$specter$__GT_t_com$rpl$specter21085(path__$1,update_fn__$1,late__$1,late_fn__$1,meta21086){
return (new com.rpl.specter.t_com$rpl$specter21085(path__$1,update_fn__$1,late__$1,late_fn__$1,meta21086));
});

}

return (new com.rpl.specter.t_com$rpl$specter21085(path,update_fn,late,late_fn,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,reduce_fn){
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21088 = (function (path,reduce_fn,late,late_fn,meta21089){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta21089 = meta21089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21090,meta21089__$1){
var self__ = this;
var _21090__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21088(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta21089__$1));
}));

(com.rpl.specter.t_com$rpl$specter21088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21090){
var self__ = this;
var _21090__$1 = this;
return self__.meta21089;
}));

(com.rpl.specter.t_com$rpl$specter21088.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21088.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter21088.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter21088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta21089","meta21089",2037096502,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21088.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21088.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21088");

(com.rpl.specter.t_com$rpl$specter21088.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21088");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21088.
 */
com.rpl.specter.__GT_t_com$rpl$specter21088 = (function com$rpl$specter$__GT_t_com$rpl$specter21088(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta21089){
return (new com.rpl.specter.t_com$rpl$specter21088(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta21089));
});

}

return (new com.rpl.specter.t_com$rpl$specter21088(path,reduce_fn,late,late_fn,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__21091_SHARP_){
return cljs.core._EQ_.call(null,p1__21091_SHARP_,v);
}));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
return com.rpl.specter.pred.call(null,(function (p1__21092_SHARP_){
return (p1__21092_SHARP_ < v);
}));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
return com.rpl.specter.pred.call(null,(function (p1__21093_SHARP_){
return (p1__21093_SHARP_ > v);
}));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__21094_SHARP_){
return (p1__21094_SHARP_ <= v);
}));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__21095_SHARP_){
return (p1__21095_SHARP_ >= v);
}));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"null",(function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"string",(function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"number",(function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"boolean",(function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"function",(function (this$){
return com.rpl.specter.pred.call(null,this$);
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.pred.call(null,this$__$1);
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.regex_nav.call(null,this$__$1);
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj.call(null,(function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21096 = (function (v,meta21097){
this.v = v;
this.meta21097 = meta21097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21098,meta21097__$1){
var self__ = this;
var _21098__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21096(self__.v,meta21097__$1));
}));

(com.rpl.specter.t_com$rpl$specter21096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21098){
var self__ = this;
var _21098__$1 = this;
return self__.meta21097;
}));

(com.rpl.specter.t_com$rpl$specter21096.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21096.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter21096.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter21096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta21097","meta21097",-1124107314,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21096.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21096.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21096");

(com.rpl.specter.t_com$rpl$specter21096.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21096");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21096.
 */
com.rpl.specter.__GT_t_com$rpl$specter21096 = (function com$rpl$specter$__GT_t_com$rpl$specter21096(v__$1,meta21097){
return (new com.rpl.specter.t_com$rpl$specter21096(v__$1,meta21097));
});

}

return (new com.rpl.specter.t_com$rpl$specter21096(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21099 = (function (meta21100){
this.meta21100 = meta21100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21101,meta21100__$1){
var self__ = this;
var _21101__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21099(meta21100__$1));
}));

(com.rpl.specter.t_com$rpl$specter21099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21101){
var self__ = this;
var _21101__$1 = this;
return self__.meta21100;
}));

(com.rpl.specter.t_com$rpl$specter21099.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21099.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,cljs.core.meta.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter21099.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter21099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21100","meta21100",-868734582,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21099.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21099.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21099");

(com.rpl.specter.t_com$rpl$specter21099.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21099");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21099.
 */
com.rpl.specter.__GT_t_com$rpl$specter21099 = (function com$rpl$specter$__GT_t_com$rpl$specter21099(meta21100){
return (new com.rpl.specter.t_com$rpl$specter21099(meta21100));
});

}

return (new com.rpl.specter.t_com$rpl$specter21099(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.name.call(null,structure));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.call(null,"NAME can only be used on symbols or keywords - ",structure);

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21102 = (function (meta21103){
this.meta21103 = meta21103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21104,meta21103__$1){
var self__ = this;
var _21104__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21102(meta21103__$1));
}));

(com.rpl.specter.t_com$rpl$specter21102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21104){
var self__ = this;
var _21104__$1 = this;
return self__.meta21103;
}));

(com.rpl.specter.t_com$rpl$specter21102.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21102.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,cljs.core.name.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter21102.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.call(null,"NAME can only be used on symbols or keywords - ",structure);

}
}
}));

(com.rpl.specter.t_com$rpl$specter21102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21103","meta21103",451748497,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21102.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21102.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21102");

(com.rpl.specter.t_com$rpl$specter21102.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21102");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21102.
 */
com.rpl.specter.__GT_t_com$rpl$specter21102 = (function com$rpl$specter$__GT_t_com$rpl$specter21102(meta21103){
return (new com.rpl.specter.t_com$rpl$specter21102(meta21103));
});

}

return (new com.rpl.specter.t_com$rpl$specter21102(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.namespace.call(null,structure));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.call(null,"NAMESPACE can only be used on symbols or keywords - ",structure);

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21105 = (function (meta21106){
this.meta21106 = meta21106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21107,meta21106__$1){
var self__ = this;
var _21107__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21105(meta21106__$1));
}));

(com.rpl.specter.t_com$rpl$specter21105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21107){
var self__ = this;
var _21107__$1 = this;
return self__.meta21106;
}));

(com.rpl.specter.t_com$rpl$specter21105.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21105.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
return next_fn.call(null,cljs.core.namespace.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter21105.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19144__auto__,vals__19145__auto__,structure,next_fn__19146__auto__){
var self__ = this;
var this__19144__auto____$1 = this;
var next_fn = (function (s__19147__auto__){
return next_fn__19146__auto__.call(null,vals__19145__auto__,s__19147__auto__);
});
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.call(null,"NAMESPACE can only be used on symbols or keywords - ",structure);

}
}
}));

(com.rpl.specter.t_com$rpl$specter21105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21106","meta21106",819650719,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21105.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21105.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21105");

(com.rpl.specter.t_com$rpl$specter21105.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21105");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21105.
 */
com.rpl.specter.__GT_t_com$rpl$specter21105 = (function com$rpl$specter$__GT_t_com$rpl$specter21105(meta21106){
return (new com.rpl.specter.t_com$rpl$specter21105(meta21106));
});

}

return (new com.rpl.specter.t_com$rpl$specter21105(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21111__delegate = function (path){
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21108 = (function (path,late,meta21109){
this.path = path;
this.late = late;
this.meta21109 = meta21109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21110,meta21109__$1){
var self__ = this;
var _21110__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21108(self__.path,self__.late,meta21109__$1));
}));

(com.rpl.specter.t_com$rpl$specter21108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21110){
var self__ = this;
var _21110__$1 = this;
return self__.meta21109;
}));

(com.rpl.specter.t_com$rpl$specter21108.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21108.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19928__auto__,vals__19929__auto__,structure,next_fn__19930__auto__){
var self__ = this;
var this__19928__auto____$1 = this;
return next_fn__19930__auto__.call(null,cljs.core.conj.call(null,vals__19929__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter21108.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19928__auto__,vals__19929__auto__,structure,next_fn__19930__auto__){
var self__ = this;
var this__19928__auto____$1 = this;
return next_fn__19930__auto__.call(null,cljs.core.conj.call(null,vals__19929__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter21108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta21109","meta21109",-1860934939,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21108.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21108.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21108");

(com.rpl.specter.t_com$rpl$specter21108.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21108");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21108.
 */
com.rpl.specter.__GT_t_com$rpl$specter21108 = (function com$rpl$specter$__GT_t_com$rpl$specter21108(path__$1,late__$1,meta21109){
return (new com.rpl.specter.t_com$rpl$specter21108(path__$1,late__$1,meta21109));
});

}

return (new com.rpl.specter.t_com$rpl$specter21108(path,late,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
};
var G__21111 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21112__i = 0, G__21112__a = new Array(arguments.length -  0);
while (G__21112__i < G__21112__a.length) {G__21112__a[G__21112__i] = arguments[G__21112__i + 0]; ++G__21112__i;}
  path = new cljs.core.IndexedSeq(G__21112__a,0,null);
} 
return G__21111__delegate.call(this,path);};
G__21111.cljs$lang$maxFixedArity = 0;
G__21111.cljs$lang$applyTo = (function (arglist__21113){
var path = cljs.core.seq(arglist__21113);
return G__21111__delegate(path);
});
G__21111.cljs$core$IFn$_invoke$arity$variadic = G__21111__delegate;
return G__21111;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21117__delegate = function (path){
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21114 = (function (path,late,meta21115){
this.path = path;
this.late = late;
this.meta21115 = meta21115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21116,meta21115__$1){
var self__ = this;
var _21116__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21114(self__.path,self__.late,meta21115__$1));
}));

(com.rpl.specter.t_com$rpl$specter21114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21116){
var self__ = this;
var _21116__$1 = this;
return self__.meta21115;
}));

(com.rpl.specter.t_com$rpl$specter21114.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21114.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19928__auto__,vals__19929__auto__,structure,next_fn__19930__auto__){
var self__ = this;
var this__19928__auto____$1 = this;
return next_fn__19930__auto__.call(null,cljs.core.conj.call(null,vals__19929__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter21114.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19928__auto__,vals__19929__auto__,structure,next_fn__19930__auto__){
var self__ = this;
var this__19928__auto____$1 = this;
return next_fn__19930__auto__.call(null,cljs.core.conj.call(null,vals__19929__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter21114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta21115","meta21115",-140903145,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21114.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21114.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21114");

(com.rpl.specter.t_com$rpl$specter21114.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21114");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21114.
 */
com.rpl.specter.__GT_t_com$rpl$specter21114 = (function com$rpl$specter$__GT_t_com$rpl$specter21114(path__$1,late__$1,meta21115){
return (new com.rpl.specter.t_com$rpl$specter21114(path__$1,late__$1,meta21115));
});

}

return (new com.rpl.specter.t_com$rpl$specter21114(path,late,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
};
var G__21117 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21118__i = 0, G__21118__a = new Array(arguments.length -  0);
while (G__21118__i < G__21118__a.length) {G__21118__a[G__21118__i] = arguments[G__21118__i + 0]; ++G__21118__i;}
  path = new cljs.core.IndexedSeq(G__21118__a,0,null);
} 
return G__21117__delegate.call(this,path);};
G__21117.cljs$lang$maxFixedArity = 0;
G__21117.cljs$lang$applyTo = (function (arglist__21119){
var path = cljs.core.seq(arglist__21119);
return G__21117__delegate(path);
});
G__21117.cljs$core$IFn$_invoke$arity$variadic = G__21117__delegate;
return G__21117;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj.call(null,(function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21120 = (function (val,meta21121){
this.val = val;
this.meta21121 = meta21121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21122,meta21121__$1){
var self__ = this;
var _21122__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21120(self__.val,meta21121__$1));
}));

(com.rpl.specter.t_com$rpl$specter21120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21122){
var self__ = this;
var _21122__$1 = this;
return self__.meta21121;
}));

(com.rpl.specter.t_com$rpl$specter21120.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21120.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19928__auto__,vals__19929__auto__,structure,next_fn__19930__auto__){
var self__ = this;
var this__19928__auto____$1 = this;
return next_fn__19930__auto__.call(null,cljs.core.conj.call(null,vals__19929__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter21120.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19928__auto__,vals__19929__auto__,structure,next_fn__19930__auto__){
var self__ = this;
var this__19928__auto____$1 = this;
return next_fn__19930__auto__.call(null,cljs.core.conj.call(null,vals__19929__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter21120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta21121","meta21121",-1523246389,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21120.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21120.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21120");

(com.rpl.specter.t_com$rpl$specter21120.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21120");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21120.
 */
com.rpl.specter.__GT_t_com$rpl$specter21120 = (function com$rpl$specter$__GT_t_com$rpl$specter21120(val__$1,meta21121){
return (new com.rpl.specter.t_com$rpl$specter21120(val__$1,meta21121));
});

}

return (new com.rpl.specter.t_com$rpl$specter21120(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21128__delegate = function (path){
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21123 = (function (path,late,meta21124){
this.path = path;
this.late = late;
this.meta21124 = meta21124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21125,meta21124__$1){
var self__ = this;
var _21125__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21123(self__.path,self__.late,meta21124__$1));
}));

(com.rpl.specter.t_com$rpl$specter21123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21125){
var self__ = this;
var _21125__$1 = this;
return self__.meta21124;
}));

(com.rpl.specter.t_com$rpl$specter21123.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21123.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter21123.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter21123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta21124","meta21124",1203839947,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21123.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21123.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21123");

(com.rpl.specter.t_com$rpl$specter21123.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21123");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21123.
 */
com.rpl.specter.__GT_t_com$rpl$specter21123 = (function com$rpl$specter$__GT_t_com$rpl$specter21123(path__$1,late__$1,meta21124){
return (new com.rpl.specter.t_com$rpl$specter21123(path__$1,late__$1,meta21124));
});

}

return (new com.rpl.specter.t_com$rpl$specter21123(path,late,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
};
var G__21128 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21129__i = 0, G__21129__a = new Array(arguments.length -  0);
while (G__21129__i < G__21129__a.length) {G__21129__a[G__21129__i] = arguments[G__21129__i + 0]; ++G__21129__i;}
  path = new cljs.core.IndexedSeq(G__21129__a,0,null);
} 
return G__21128__delegate.call(this,path);};
G__21128.cljs$lang$maxFixedArity = 0;
G__21128.cljs$lang$applyTo = (function (arglist__21130){
var path = cljs.core.seq(arglist__21130);
return G__21128__delegate(path);
});
G__21128.cljs$core$IFn$_invoke$arity$variadic = G__21128__delegate;
return G__21128;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21131 = (function (meta21132){
this.meta21132 = meta21132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21133,meta21132__$1){
var self__ = this;
var _21133__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21131(meta21132__$1));
}));

(com.rpl.specter.t_com$rpl$specter21131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21133){
var self__ = this;
var _21133__$1 = this;
return self__.meta21132;
}));

(com.rpl.specter.t_com$rpl$specter21131.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21131.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter21131.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter21131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21132","meta21132",-1616558890,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21131.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21131.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21131");

(com.rpl.specter.t_com$rpl$specter21131.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21131");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21131.
 */
com.rpl.specter.__GT_t_com$rpl$specter21131 = (function com$rpl$specter$__GT_t_com$rpl$specter21131(meta21132){
return (new com.rpl.specter.t_com$rpl$specter21131(meta21132));
});

}

return (new com.rpl.specter.t_com$rpl$specter21131(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__21142 = null;
var G__21142__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__21142__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21136 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta21137){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta21137 = meta21137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21138,meta21137__$1){
var self__ = this;
var _21138__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21136(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta21137__$1));
}));

(com.rpl.specter.t_com$rpl$specter21136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21138){
var self__ = this;
var _21138__$1 = this;
return self__.meta21137;
}));

(com.rpl.specter.t_com$rpl$specter21136.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21136.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter21136.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter21136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta21137","meta21137",1741562251,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21136.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21136.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21136");

(com.rpl.specter.t_com$rpl$specter21136.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21136");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21136.
 */
com.rpl.specter.__GT_t_com$rpl$specter21136 = (function com$rpl$specter$__GT_t_com$rpl$specter21136(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta21137){
return (new com.rpl.specter.t_com$rpl$specter21136(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta21137));
});

}

return (new com.rpl.specter.t_com$rpl$specter21136(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
} else {
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21139 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta21140){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta21140 = meta21140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21141,meta21140__$1){
var self__ = this;
var _21141__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21139(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta21140__$1));
}));

(com.rpl.specter.t_com$rpl$specter21139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21141){
var self__ = this;
var _21141__$1 = this;
return self__.meta21140;
}));

(com.rpl.specter.t_com$rpl$specter21139.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21139.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,(function (p1__21134_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__21134_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter21139.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,(function (p1__21135_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__21135_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter21139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta21140","meta21140",144115189,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21139.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21139.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21139");

(com.rpl.specter.t_com$rpl$specter21139.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21139");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21139.
 */
com.rpl.specter.__GT_t_com$rpl$specter21139 = (function com$rpl$specter$__GT_t_com$rpl$specter21139(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta21140){
return (new com.rpl.specter.t_com$rpl$specter21139(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta21140));
});

}

return (new com.rpl.specter.t_com$rpl$specter21139(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
}
});
G__21142 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__21142__2.call(this,cond_p,then_path);
case 3:
return G__21142__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21142.cljs$core$IFn$_invoke$arity$2 = G__21142__2;
G__21142.cljs$core$IFn$_invoke$arity$3 = G__21142__3;
return G__21142;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21147__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,(function (p,p__21143){
var vec__21144 = p__21143;
var tester = cljs.core.nth.call(null,vec__21144,(0),null);
var apath = cljs.core.nth.call(null,vec__21144,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
}),com.rpl.specter.STOP,pairs);
};
var G__21147 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__21148__i = 0, G__21148__a = new Array(arguments.length -  0);
while (G__21148__i < G__21148__a.length) {G__21148__a[G__21148__i] = arguments[G__21148__i + 0]; ++G__21148__i;}
  conds = new cljs.core.IndexedSeq(G__21148__a,0,null);
} 
return G__21147__delegate.call(this,conds);};
G__21147.cljs$lang$maxFixedArity = 0;
G__21147.cljs$lang$applyTo = (function (arglist__21149){
var conds = cljs.core.seq(arglist__21149);
return G__21147__delegate(conds);
});
G__21147.cljs$core$IFn$_invoke$arity$variadic = G__21147__delegate;
return G__21147;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__21157 = null;
var G__21157__0 = (function (){
return com.rpl.specter.STAY;
});
var G__21157__1 = (function (path){
return path;
});
var G__21157__2 = (function (path1,path2){
var builder__19931__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter21150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter21150 = (function (path1,path2,late1,late2,meta21151){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta21151 = meta21151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter21150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21152,meta21151__$1){
var self__ = this;
var _21152__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter21150(self__.path1,self__.path2,self__.late1,self__.late2,meta21151__$1));
}));

(com.rpl.specter.t_com$rpl$specter21150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21152){
var self__ = this;
var _21152__$1 = this;
return self__.meta21151;
}));

(com.rpl.specter.t_com$rpl$specter21150.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter21150.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_.call(null,res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter21150.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter21150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta21151","meta21151",-1930479448,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter21150.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter21150.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter21150");

(com.rpl.specter.t_com$rpl$specter21150.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter21150");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter21150.
 */
com.rpl.specter.__GT_t_com$rpl$specter21150 = (function com$rpl$specter$__GT_t_com$rpl$specter21150(path1__$1,path2__$1,late1__$1,late2__$1,meta21151){
return (new com.rpl.specter.t_com$rpl$specter21150(path1__$1,path2__$1,late1__$1,late2__$1,meta21151));
});

}

return (new com.rpl.specter.t_com$rpl$specter21150(path1,path2,late1,late2,null));
}));
var curr_params__19932__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19932__auto__)){
return cljs.core.apply.call(null,builder__19931__auto__,curr_params__19932__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19931__auto__,curr_params__19932__auto__,null);
}
});
var G__21157__3 = (function() { 
var G__21158__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__21158 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__21159__i = 0, G__21159__a = new Array(arguments.length -  2);
while (G__21159__i < G__21159__a.length) {G__21159__a[G__21159__i] = arguments[G__21159__i + 2]; ++G__21159__i;}
  paths = new cljs.core.IndexedSeq(G__21159__a,0,null);
} 
return G__21158__delegate.call(this,path1,path2,paths);};
G__21158.cljs$lang$maxFixedArity = 2;
G__21158.cljs$lang$applyTo = (function (arglist__21160){
var path1 = cljs.core.first(arglist__21160);
arglist__21160 = cljs.core.next(arglist__21160);
var path2 = cljs.core.first(arglist__21160);
var paths = cljs.core.rest(arglist__21160);
return G__21158__delegate(path1,path2,paths);
});
G__21158.cljs$core$IFn$_invoke$arity$variadic = G__21158__delegate;
return G__21158;
})()
;
G__21157 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__21157__0.call(this);
case 1:
return G__21157__1.call(this,path1);
case 2:
return G__21157__2.call(this,path1,path2);
default:
var G__21161 = null;
if (arguments.length > 2) {
var G__21162__i = 0, G__21162__a = new Array(arguments.length -  2);
while (G__21162__i < G__21162__a.length) {G__21162__a[G__21162__i] = arguments[G__21162__i + 2]; ++G__21162__i;}
G__21161 = new cljs.core.IndexedSeq(G__21162__a,0,null);
}
return G__21157__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__21161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21157.cljs$lang$maxFixedArity = 2;
G__21157.cljs$lang$applyTo = G__21157__3.cljs$lang$applyTo;
G__21157.cljs$core$IFn$_invoke$arity$0 = G__21157__0;
G__21157.cljs$core$IFn$_invoke$arity$1 = G__21157__1;
G__21157.cljs$core$IFn$_invoke$arity$2 = G__21157__2;
G__21157.cljs$core$IFn$_invoke$arity$variadic = G__21157__3.cljs$core$IFn$_invoke$arity$variadic;
return G__21157;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21163__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__21163 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21164__i = 0, G__21164__a = new Array(arguments.length -  0);
while (G__21164__i < G__21164__a.length) {G__21164__a[G__21164__i] = arguments[G__21164__i + 0]; ++G__21164__i;}
  path = new cljs.core.IndexedSeq(G__21164__a,0,null);
} 
return G__21163__delegate.call(this,path);};
G__21163.cljs$lang$maxFixedArity = 0;
G__21163.cljs$lang$applyTo = (function (arglist__21165){
var path = cljs.core.seq(arglist__21165);
return G__21163__delegate(path);
});
G__21163.cljs$core$IFn$_invoke$arity$variadic = G__21163__delegate;
return G__21163;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21166__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__21166 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21167__i = 0, G__21167__a = new Array(arguments.length -  0);
while (G__21167__i < G__21167__a.length) {G__21167__a[G__21167__i] = arguments[G__21167__i + 0]; ++G__21167__i;}
  path = new cljs.core.IndexedSeq(G__21167__a,0,null);
} 
return G__21166__delegate.call(this,path);};
G__21166.cljs$lang$maxFixedArity = 0;
G__21166.cljs$lang$applyTo = (function (arglist__21168){
var path = cljs.core.seq(arglist__21168);
return G__21166__delegate(path);
});
G__21166.cljs$core$IFn$_invoke$arity$variadic = G__21166__delegate;
return G__21166;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21169;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21170 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2133),(2133),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache21169 = info21170;

return info21170;
})():info__19938__auto__);
var precompiled21171 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21171.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null));
} else {
return precompiled21171;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__19938__auto__ = com.rpl.specter.pathcache21172;
var info__19938__auto____$1 = (((info__19938__auto__ == null))?(function (){var info21173 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2133),(2133),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"target/public/cljs-out/dep/com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache21172 = info21173;

return info21173;
})():info__19938__auto__);
var precompiled21174 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19938__auto____$1);
var dynamic_QMARK___19939__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19938__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19939__auto__)){
return precompiled21174.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null));
} else {
return precompiled21174;
}
})());

return p;
}));
var empty__GT_NONE_21175 = com.rpl.specter.if_path.call(null,cljs.core.empty_QMARK_,com.rpl.specter.terminal_val.call(null,com.rpl.specter.NONE));
var compact_STAR__21176 = (function (nav){
return com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_21175);
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__21177__delegate = function (path){
return cljs.core.map.call(null,compact_STAR__21176,path);
};
var G__21177 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__21178__i = 0, G__21178__a = new Array(arguments.length -  0);
while (G__21178__i < G__21178__a.length) {G__21178__a[G__21178__i] = arguments[G__21178__i + 0]; ++G__21178__i;}
  path = new cljs.core.IndexedSeq(G__21178__a,0,null);
} 
return G__21177__delegate.call(this,path);};
G__21177.cljs$lang$maxFixedArity = 0;
G__21177.cljs$lang$applyTo = (function (arglist__21179){
var path = cljs.core.seq(arglist__21179);
return G__21177__delegate(path);
});
G__21177.cljs$core$IFn$_invoke$arity$variadic = G__21177__delegate;
return G__21177;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map
