// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('dep.model.quartal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.test.check');
goog.require('clojure.test.check.properties');
goog.require('cljs.pprint');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$dep$model$quartal_SLASH_nr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),"null",(4),"null",(3),"null",(2),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_int_DASH_in,(0),(3000)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24510__24511__auto__], null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_int_DASH_in_DASH_range_QMARK_,(0),(3000),cljs.core.cst$sym$p1__24510__24511__auto__))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_int_DASH_in_DASH_range_QMARK_,(0),(3000),cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,(function (p1__24510__24511__auto__){
return cljs.spec.alpha.int_in_range_QMARK_((0),(3000),p1__24510__24511__auto__);
})], null),null),(function (){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,((3000) - (1))], null)], 0));
}),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__25579){
return cljs.core.map_QMARK_(G__25579);
}),(function (G__25579){
return cljs.core.contains_QMARK_(G__25579,cljs.core.cst$kw$jahr);
}),(function (G__25579){
return cljs.core.contains_QMARK_(G__25579,cljs.core.cst$kw$nr);
})], null),(function (G__25579){
return ((cljs.core.map_QMARK_(G__25579)) && (cljs.core.contains_QMARK_(G__25579,cljs.core.cst$kw$jahr)) && (cljs.core.contains_QMARK_(G__25579,cljs.core.cst$kw$nr)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jahr,cljs.core.cst$kw$nr], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$jahr)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$nr))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$nr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr),cljs.core.cst$kw$ret,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$fn,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25580_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25580_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25580_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25581_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25581_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25581_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$jahr))))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$nr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nr,cljs.core.cst$kw$jahr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$nr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,null,null),cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25580_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25580_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25580_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25581_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25581_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25581_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$jahr)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$jahr)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__25580_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__25580_SHARP_)),cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__25580_SHARP_)));
}),(function (p1__25581_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__25581_SHARP_)),cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__25581_SHARP_)));
})], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25580_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25580_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25580_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25581_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25581_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25581_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$jahr)))),null));
/**
 * Erzeugt ein Quartalsexemplar.
 */
dep.model.quartal.__GT_Quartal = (function dep$model$quartal$__GT_Quartal(nr,jahr){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nr,nr,cljs.core.cst$kw$jahr,jahr], null);
});
/**
 * Wandelt strng in number.
 */
dep.model.quartal.parse_int = (function dep$model$quartal$parse_int(strng){
return parseInt(strng);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.cst$kw$ret,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$fn,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25582_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25582_SHARP_,cljs.core.cst$kw$ret),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25582_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$nr),(4)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25582_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr),(1)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25582_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr))))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quartal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_quartal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_quartal], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,null,null),cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$nr),(4)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr),(1)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr)))),(function (p1__25582_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__25582_SHARP_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__25582_SHARP_))),(4)))?(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__25582_SHARP_))) + (1)):cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__25582_SHARP_)))));
}),null,null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$nr),(4)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr),(1)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr)))),null));
/**
 * Liefert das Geschäftsjahr, in dem Quartal liegt.
 */
dep.model.quartal.geschaeftsjahreszahl = (function dep$model$quartal$geschaeftsjahreszahl(quartal){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(quartal),(4))){
return (cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(quartal) + (1));
} else {
return cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(quartal);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$dep$model$quartal_SLASH_minus,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$q1,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$q2,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25583_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25583_SHARP_,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25583_SHARP_,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))),cljs.core.cst$kw$ret,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$fn,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25584_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25584_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25584_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25585_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$q1,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$q2,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25583_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25583_SHARP_,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25583_SHARP_,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$q1,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$q2,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$q1,cljs.core.cst$kw$q2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal], null)),(function (p1__25583_SHARP_){
return (cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q1.cljs$core$IFn$_invoke$arity$1(p1__25583_SHARP_)) >= cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q2.cljs$core$IFn$_invoke$arity$1(p1__25583_SHARP_)));
})], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$q1,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$q2,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25583_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25583_SHARP_,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25583_SHARP_,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,null,null),cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25584_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25584_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25584_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25585_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr))))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__25584_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__25584_SHARP_)),cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__25584_SHARP_))));
}),(function (p1__25585_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__25585_SHARP_)),(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__25585_SHARP_))) - cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q2.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__25585_SHARP_)))));
})], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25584_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25584_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25584_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__25585_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__25585_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr))))),null));
/**
 * Bildet die Differenz zweier Quartale
 */
dep.model.quartal.minus = (function dep$model$quartal$minus(q1,q2){
return dep.model.quartal.__GT_Quartal(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(q1),(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(q1) - cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(q2)));
});
/**
 * Liefert true, wenn q1 vor q2 liegt.
 */
dep.model.quartal.vor_QMARK_ = (function dep$model$quartal$vor_QMARK_(q1,q2){
return (((cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(q1) < cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(q2))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(q1),cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(q2))) && ((cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(q1) <= cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(q2))))));
});
/**
 * Liefert true, wenn q1 zwischen q2 und q3 liegt.
 */
dep.model.quartal.liegt_zwischen_QMARK_ = (function dep$model$quartal$liegt_zwischen_QMARK_(q1,q2,q3){
return ((dep.model.quartal.vor_QMARK_(q2,q1)) && (dep.model.quartal.vor_QMARK_(q1,q3)));
});
/**
 * Liefert die Quartale für das Geschäftsjahr jahr.
 */
dep.model.quartal.quartale_fuer_jahr = (function dep$model$quartal$quartale_fuer_jahr(jahr){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.model.quartal.__GT_Quartal((4),(jahr - (1))),dep.model.quartal.__GT_Quartal((1),jahr),dep.model.quartal.__GT_Quartal((2),jahr),dep.model.quartal.__GT_Quartal((3),jahr)], null);
});
dep.model.quartal.quartal__GT_string = (function dep$model$quartal$quartal__GT_string(quartal){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(quartal)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(quartal))].join('');
});
dep.model.quartal.string__GT_quartal = (function dep$model$quartal$string__GT_quartal(strng){
var vec__25586 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dep.model.quartal.parse_int,clojure.string.split.cljs$core$IFn$_invoke$arity$2(strng,/-/));
var jahr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25586,(0),null);
var quartal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25586,(1),null);
return dep.model.quartal.__GT_Quartal(quartal,jahr);
});
/**
 * Ermittelt aus dem Studienbeginn (stb) und der Jahr-Semesterzuordnung (jsz) eines
 *   Manipels das Quartal des Semesters sem.
 */
dep.model.quartal.semester__GT_quartal = (function dep$model$quartal$semester__GT_quartal(sem,stb,jsz){
var sq = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,(function (){var G__25591 = cljs.core.group_by(cljs.core.val,jsz);
var fexpr__25590 = (function (p1__25589_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__25589_SHARP_,sem);
});
return fexpr__25590(G__25591);
})()));
return dep.model.quartal.__GT_Quartal(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(sq),(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(stb) + cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(sq)));
});
/**
 * Liefert Quartals-Strings für die 7 Semester eines Manipels.
 */
dep.model.quartal.sieben_semester__GT_quartstrng = (function dep$model$quartal$sieben_semester__GT_quartstrng(stb,jsz){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__25592(s__25593){
return (new cljs.core.LazySeq(null,(function (){
var s__25593__$1 = s__25593;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25593__$1);
if(temp__5735__auto__){
var s__25593__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25593__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25593__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25595 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25594 = (0);
while(true){
if((i__25594 < size__4528__auto__)){
var sem = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__25594);
cljs.core.chunk_append(b__25595,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep.model.quartal.quartal__GT_string(dep.model.quartal.semester__GT_quartal(sem,stb,jsz))]));

var G__25596 = (i__25594 + (1));
i__25594 = G__25596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25595),dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__25592(cljs.core.chunk_rest(s__25593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25595),null);
}
} else {
var sem = cljs.core.first(s__25593__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep.model.quartal.quartal__GT_string(dep.model.quartal.semester__GT_quartal(sem,stb,jsz))]),dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__25592(cljs.core.rest(s__25593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
})());
});
var opts25599_25611 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__25354__auto__,p__25600){
var vec__25601 = p__25600;
var ___25355__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25601,(0),null);
var f__25356__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25601,(1),null);
var sym__25357__auto__ = (f__25356__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25356__auto__.cljs$core$IFn$_invoke$arity$0() : f__25356__auto__.call(null));
var G__25604 = ret__25354__auto__;
if(cljs.core.truth_(sym__25357__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__25604,sym__25357__auto__);
} else {
return G__25604;
}
}),cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25353__25358__auto__){
var G__25606 = cljs.core.first(p1__25353__25358__auto__);
var fexpr__25605 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts25599_25611);
return (fexpr__25605.cljs$core$IFn$_invoke$arity$1 ? fexpr__25605.cljs$core$IFn$_invoke$arity$1(G__25606) : fexpr__25605.call(null,G__25606));
}),cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var checked__25320__auto__ = (function (){var G__25608 = cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal;
var G__25609 = new cljs.core.Var(function(){return dep.model.quartal.__GT_Quartal;},cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dep$model$quartal,cljs.core.cst$sym$_DASH__GT_Quartal,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/src/dep/model/quartal.cljc",16,1,21,21,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nr,cljs.core.cst$sym$jahr], null)),"Erzeugt ein Quartalsexemplar.",(cljs.core.truth_(dep.model.quartal.__GT_Quartal)?dep.model.quartal.__GT_Quartal.cljs$lang$test:null)]));
var G__25610 = opts25599_25611;
var fexpr__25607 = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},cljs.core.cst$sym$cljs$spec$test$alpha_SLASH_instrument_DASH_1_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$test$alpha,cljs.core.cst$sym$instrument_DASH_1_STAR_,"target/public/cljs-out/dep/cljs/spec/test/alpha.cljs",21,1,156,156,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s,cljs.core.cst$sym$v,cljs.core.cst$sym$opts], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__25607.cljs$core$IFn$_invoke$arity$3 ? fexpr__25607.cljs$core$IFn$_invoke$arity$3(G__25608,G__25609,G__25610) : fexpr__25607.call(null,G__25608,G__25609,G__25610));
})();
if(cljs.core.truth_(checked__25320__auto__)){
(dep.model.quartal.__GT_Quartal = checked__25320__auto__);
} else {
}

return cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal;
})], null)))));
var opts25614_25626 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__25354__auto__,p__25615){
var vec__25616 = p__25615;
var ___25355__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25616,(0),null);
var f__25356__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25616,(1),null);
var sym__25357__auto__ = (f__25356__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25356__auto__.cljs$core$IFn$_invoke$arity$0() : f__25356__auto__.call(null));
var G__25619 = ret__25354__auto__;
if(cljs.core.truth_(sym__25357__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__25619,sym__25357__auto__);
} else {
return G__25619;
}
}),cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25353__25358__auto__){
var G__25621 = cljs.core.first(p1__25353__25358__auto__);
var fexpr__25620 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts25614_25626);
return (fexpr__25620.cljs$core$IFn$_invoke$arity$1 ? fexpr__25620.cljs$core$IFn$_invoke$arity$1(G__25621) : fexpr__25620.call(null,G__25621));
}),cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var checked__25320__auto__ = (function (){var G__25623 = cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl;
var G__25624 = new cljs.core.Var(function(){return dep.model.quartal.geschaeftsjahreszahl;},cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dep$model$quartal,cljs.core.cst$sym$geschaeftsjahreszahl,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/src/dep/model/quartal.cljc",27,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$quartal], null)),"Liefert das Gesch\u00E4ftsjahr, in dem Quartal liegt.",(cljs.core.truth_(dep.model.quartal.geschaeftsjahreszahl)?dep.model.quartal.geschaeftsjahreszahl.cljs$lang$test:null)]));
var G__25625 = opts25614_25626;
var fexpr__25622 = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},cljs.core.cst$sym$cljs$spec$test$alpha_SLASH_instrument_DASH_1_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$test$alpha,cljs.core.cst$sym$instrument_DASH_1_STAR_,"target/public/cljs-out/dep/cljs/spec/test/alpha.cljs",21,1,156,156,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s,cljs.core.cst$sym$v,cljs.core.cst$sym$opts], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__25622.cljs$core$IFn$_invoke$arity$3 ? fexpr__25622.cljs$core$IFn$_invoke$arity$3(G__25623,G__25624,G__25625) : fexpr__25622.call(null,G__25623,G__25624,G__25625));
})();
if(cljs.core.truth_(checked__25320__auto__)){
(dep.model.quartal.geschaeftsjahreszahl = checked__25320__auto__);
} else {
}

return cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl;
})], null)))));
var opts25629_25641 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__25354__auto__,p__25630){
var vec__25631 = p__25630;
var ___25355__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25631,(0),null);
var f__25356__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25631,(1),null);
var sym__25357__auto__ = (f__25356__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25356__auto__.cljs$core$IFn$_invoke$arity$0() : f__25356__auto__.call(null));
var G__25634 = ret__25354__auto__;
if(cljs.core.truth_(sym__25357__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__25634,sym__25357__auto__);
} else {
return G__25634;
}
}),cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25353__25358__auto__){
var G__25636 = cljs.core.first(p1__25353__25358__auto__);
var fexpr__25635 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts25629_25641);
return (fexpr__25635.cljs$core$IFn$_invoke$arity$1 ? fexpr__25635.cljs$core$IFn$_invoke$arity$1(G__25636) : fexpr__25635.call(null,G__25636));
}),cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dep$model$quartal_SLASH_minus], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var checked__25320__auto__ = (function (){var G__25638 = cljs.core.cst$sym$dep$model$quartal_SLASH_minus;
var G__25639 = new cljs.core.Var(function(){return dep.model.quartal.minus;},cljs.core.cst$sym$dep$model$quartal_SLASH_minus,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dep$model$quartal,cljs.core.cst$sym$minus,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/src/dep/model/quartal.cljc",12,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$q1,cljs.core.cst$sym$q2], null)),"Bildet die Differenz zweier Quartale",(cljs.core.truth_(dep.model.quartal.minus)?dep.model.quartal.minus.cljs$lang$test:null)]));
var G__25640 = opts25629_25641;
var fexpr__25637 = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},cljs.core.cst$sym$cljs$spec$test$alpha_SLASH_instrument_DASH_1_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$test$alpha,cljs.core.cst$sym$instrument_DASH_1_STAR_,"target/public/cljs-out/dep/cljs/spec/test/alpha.cljs",21,1,156,156,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s,cljs.core.cst$sym$v,cljs.core.cst$sym$opts], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__25637.cljs$core$IFn$_invoke$arity$3 ? fexpr__25637.cljs$core$IFn$_invoke$arity$3(G__25638,G__25639,G__25640) : fexpr__25637.call(null,G__25638,G__25639,G__25640));
})();
if(cljs.core.truth_(checked__25320__auto__)){
(dep.model.quartal.minus = checked__25320__auto__);
} else {
}

return cljs.core.cst$sym$dep$model$quartal_SLASH_minus;
})], null)))));
