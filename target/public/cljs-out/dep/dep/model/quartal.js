// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.model.quartal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.test.check');
goog.require('clojure.test.check.properties');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$dep$model$quartal_SLASH_nr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),"null",(4),"null",(3),"null",(2),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_int_DASH_in,(0),(3000)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28154__28155__auto__], null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_int_DASH_in_DASH_range_QMARK_,(0),(3000),cljs.core.cst$sym$p1__28154__28155__auto__))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_int_DASH_in_DASH_range_QMARK_,(0),(3000),cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,(function (p1__28154__28155__auto__){
return cljs.spec.alpha.int_in_range_QMARK_((0),(3000),p1__28154__28155__auto__);
})], null),null),(function (){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,((3000) - (1))], null)], 0));
}),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29201){
return cljs.core.map_QMARK_(G__29201);
}),(function (G__29201){
return cljs.core.contains_QMARK_(G__29201,cljs.core.cst$kw$jahr);
}),(function (G__29201){
return cljs.core.contains_QMARK_(G__29201,cljs.core.cst$kw$nr);
})], null),(function (G__29201){
return ((cljs.core.map_QMARK_(G__29201)) && (cljs.core.contains_QMARK_(G__29201,cljs.core.cst$kw$jahr)) && (cljs.core.contains_QMARK_(G__29201,cljs.core.cst$kw$nr)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jahr,cljs.core.cst$kw$nr], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$jahr)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$nr))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$nr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr),cljs.core.cst$kw$ret,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$fn,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29202_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29202_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29202_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29203_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29203_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29203_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$jahr))))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$nr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nr,cljs.core.cst$kw$jahr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$nr,cljs.core.cst$kw$dep$model$quartal_SLASH_nr,cljs.core.cst$kw$jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,null,null),cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29202_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29202_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29202_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29203_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29203_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29203_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$jahr)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$jahr)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__29202_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__29202_SHARP_)),cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__29202_SHARP_)));
}),(function (p1__29203_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__29203_SHARP_)),cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__29203_SHARP_)));
})], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29202_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29202_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29202_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29203_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29203_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29203_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$jahr)))),null));
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
cljs.spec.alpha.def_impl(cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.cst$kw$ret,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$fn,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29204_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29204_SHARP_,cljs.core.cst$kw$ret),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29204_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$nr),(4)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29204_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr),(1)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29204_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr))))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quartal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_quartal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_quartal], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,null,null),cljs.core.cst$kw$dep$model$quartal_SLASH_jahr,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$nr),(4)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr),(1)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$quartal,cljs.core.cst$kw$jahr)))),(function (p1__29204_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__29204_SHARP_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__29204_SHARP_))),(4)))?(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__29204_SHARP_))) + (1)):cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$quartal.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__29204_SHARP_)))));
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
cljs.spec.alpha.def_impl(cljs.core.cst$sym$dep$model$quartal_SLASH_minus,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$q1,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$q2,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29205_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29205_SHARP_,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29205_SHARP_,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))),cljs.core.cst$kw$ret,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$fn,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29206_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29206_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29206_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29207_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$q1,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$q2,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29205_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29205_SHARP_,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29205_SHARP_,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$q1,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$q2,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$q1,cljs.core.cst$kw$q2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal], null)),(function (p1__29205_SHARP_){
return (cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q1.cljs$core$IFn$_invoke$arity$1(p1__29205_SHARP_)) >= cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q2.cljs$core$IFn$_invoke$arity$1(p1__29205_SHARP_)));
})], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$q1,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$q2,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29205_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29205_SHARP_,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29205_SHARP_,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,null,null),cljs.core.cst$kw$dep$model$quartal_SLASH_quartal,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29206_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29206_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29206_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29207_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr))))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$args,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__29206_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__29206_SHARP_)),cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__29206_SHARP_))));
}),(function (p1__29207_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1__29207_SHARP_)),(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__29207_SHARP_))) - cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q2.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(p1__29207_SHARP_)))));
})], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29206_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29206_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$nr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29206_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$nr))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__29207_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$ret,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q1,cljs.core.cst$kw$jahr),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,cljs.core.cst$sym$p1__29207_SHARP_,cljs.core.cst$kw$args,cljs.core.cst$kw$q2,cljs.core.cst$kw$jahr))))),null));
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
var vec__29208 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dep.model.quartal.parse_int,clojure.string.split.cljs$core$IFn$_invoke$arity$2(strng,/-/));
var jahr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208,(0),null);
var quartal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208,(1),null);
return dep.model.quartal.__GT_Quartal(quartal,jahr);
});
/**
 * Ermittelt aus dem Studienbeginn (stb) und der Jahr-Semesterzuordnung (jsz) eines
 *   Manipels das Quartal des Semesters sem.
 */
dep.model.quartal.semester__GT_quartal = (function dep$model$quartal$semester__GT_quartal(sem,stb,jsz){
var sq = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,(function (){var G__29213 = cljs.core.group_by(cljs.core.val,jsz);
var fexpr__29212 = (function (p1__29211_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29211_SHARP_,sem);
});
return fexpr__29212(G__29213);
})()));
return dep.model.quartal.__GT_Quartal(cljs.core.cst$kw$nr.cljs$core$IFn$_invoke$arity$1(sq),(cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(stb) + cljs.core.cst$kw$jahr.cljs$core$IFn$_invoke$arity$1(sq)));
});
/**
 * Liefert Quartals-Strings für die 7 Semester eines Manipels.
 */
dep.model.quartal.sieben_semester__GT_quartstrng = (function dep$model$quartal$sieben_semester__GT_quartstrng(stb,jsz){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4564__auto__ = (function dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__29214(s__29215){
return (new cljs.core.LazySeq(null,(function (){
var s__29215__$1 = s__29215;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29215__$1);
if(temp__5753__auto__){
var s__29215__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29215__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__29215__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__29217 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__29216 = (0);
while(true){
if((i__29216 < size__4563__auto__)){
var sem = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__29216);
cljs.core.chunk_append(b__29217,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep.model.quartal.quartal__GT_string(dep.model.quartal.semester__GT_quartal(sem,stb,jsz))]));

var G__29218 = (i__29216 + (1));
i__29216 = G__29218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29217),dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__29214(cljs.core.chunk_rest(s__29215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29217),null);
}
} else {
var sem = cljs.core.first(s__29215__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep.model.quartal.quartal__GT_string(dep.model.quartal.semester__GT_quartal(sem,stb,jsz))]),dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__29214(cljs.core.rest(s__29215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(8)));
})());
});
var opts29221_29233 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__28982__auto__,p__29222){
var vec__29223 = p__29222;
var ___28983__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29223,(0),null);
var f__28984__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29223,(1),null);
var sym__28985__auto__ = (f__28984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28984__auto__.cljs$core$IFn$_invoke$arity$0() : f__28984__auto__.call(null));
var G__29226 = ret__28982__auto__;
if(cljs.core.truth_(sym__28985__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29226,sym__28985__auto__);
} else {
return G__29226;
}
}),cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28981__28986__auto__){
var G__29228 = cljs.core.first(p1__28981__28986__auto__);
var fexpr__29227 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts29221_29233);
return (fexpr__29227.cljs$core$IFn$_invoke$arity$1 ? fexpr__29227.cljs$core$IFn$_invoke$arity$1(G__29228) : fexpr__29227.call(null,G__29228));
}),cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var checked__28948__auto__ = (function (){var G__29230 = cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal;
var G__29231 = new cljs.core.Var(function(){return dep.model.quartal.__GT_Quartal;},cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dep$model$quartal,cljs.core.cst$sym$_DASH__GT_Quartal,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/src/dep/model/quartal.cljc",16,1,20,20,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nr,cljs.core.cst$sym$jahr], null)),"Erzeugt ein Quartalsexemplar.",(cljs.core.truth_(dep.model.quartal.__GT_Quartal)?dep.model.quartal.__GT_Quartal.cljs$lang$test:null)]));
var G__29232 = opts29221_29233;
var fexpr__29229 = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},cljs.core.cst$sym$cljs$spec$test$alpha_SLASH_instrument_DASH_1_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$test$alpha,cljs.core.cst$sym$instrument_DASH_1_STAR_,"target/public/cljs-out/dep/cljs/spec/test/alpha.cljs",21,1,156,156,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s,cljs.core.cst$sym$v,cljs.core.cst$sym$opts], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__29229.cljs$core$IFn$_invoke$arity$3 ? fexpr__29229.cljs$core$IFn$_invoke$arity$3(G__29230,G__29231,G__29232) : fexpr__29229.call(null,G__29230,G__29231,G__29232));
})();
if(cljs.core.truth_(checked__28948__auto__)){
(dep.model.quartal.__GT_Quartal = checked__28948__auto__);
} else {
}

return cljs.core.cst$sym$dep$model$quartal_SLASH__DASH__GT_Quartal;
})], null)))));
var opts29236_29248 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__28982__auto__,p__29237){
var vec__29238 = p__29237;
var ___28983__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29238,(0),null);
var f__28984__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29238,(1),null);
var sym__28985__auto__ = (f__28984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28984__auto__.cljs$core$IFn$_invoke$arity$0() : f__28984__auto__.call(null));
var G__29241 = ret__28982__auto__;
if(cljs.core.truth_(sym__28985__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29241,sym__28985__auto__);
} else {
return G__29241;
}
}),cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28981__28986__auto__){
var G__29243 = cljs.core.first(p1__28981__28986__auto__);
var fexpr__29242 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts29236_29248);
return (fexpr__29242.cljs$core$IFn$_invoke$arity$1 ? fexpr__29242.cljs$core$IFn$_invoke$arity$1(G__29243) : fexpr__29242.call(null,G__29243));
}),cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var checked__28948__auto__ = (function (){var G__29245 = cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl;
var G__29246 = new cljs.core.Var(function(){return dep.model.quartal.geschaeftsjahreszahl;},cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dep$model$quartal,cljs.core.cst$sym$geschaeftsjahreszahl,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/src/dep/model/quartal.cljc",27,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$quartal], null)),"Liefert das Gesch\u00E4ftsjahr, in dem Quartal liegt.",(cljs.core.truth_(dep.model.quartal.geschaeftsjahreszahl)?dep.model.quartal.geschaeftsjahreszahl.cljs$lang$test:null)]));
var G__29247 = opts29236_29248;
var fexpr__29244 = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},cljs.core.cst$sym$cljs$spec$test$alpha_SLASH_instrument_DASH_1_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$test$alpha,cljs.core.cst$sym$instrument_DASH_1_STAR_,"target/public/cljs-out/dep/cljs/spec/test/alpha.cljs",21,1,156,156,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s,cljs.core.cst$sym$v,cljs.core.cst$sym$opts], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__29244.cljs$core$IFn$_invoke$arity$3 ? fexpr__29244.cljs$core$IFn$_invoke$arity$3(G__29245,G__29246,G__29247) : fexpr__29244.call(null,G__29245,G__29246,G__29247));
})();
if(cljs.core.truth_(checked__28948__auto__)){
(dep.model.quartal.geschaeftsjahreszahl = checked__28948__auto__);
} else {
}

return cljs.core.cst$sym$dep$model$quartal_SLASH_geschaeftsjahreszahl;
})], null)))));
var opts29251_29263 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__28982__auto__,p__29252){
var vec__29253 = p__29252;
var ___28983__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29253,(0),null);
var f__28984__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29253,(1),null);
var sym__28985__auto__ = (f__28984__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28984__auto__.cljs$core$IFn$_invoke$arity$0() : f__28984__auto__.call(null));
var G__29256 = ret__28982__auto__;
if(cljs.core.truth_(sym__28985__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29256,sym__28985__auto__);
} else {
return G__29256;
}
}),cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28981__28986__auto__){
var G__29258 = cljs.core.first(p1__28981__28986__auto__);
var fexpr__29257 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts29251_29263);
return (fexpr__29257.cljs$core$IFn$_invoke$arity$1 ? fexpr__29257.cljs$core$IFn$_invoke$arity$1(G__29258) : fexpr__29257.call(null,G__29258));
}),cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dep$model$quartal_SLASH_minus], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var checked__28948__auto__ = (function (){var G__29260 = cljs.core.cst$sym$dep$model$quartal_SLASH_minus;
var G__29261 = new cljs.core.Var(function(){return dep.model.quartal.minus;},cljs.core.cst$sym$dep$model$quartal_SLASH_minus,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$dep$model$quartal,cljs.core.cst$sym$minus,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/src/dep/model/quartal.cljc",12,1,52,52,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$q1,cljs.core.cst$sym$q2], null)),"Bildet die Differenz zweier Quartale",(cljs.core.truth_(dep.model.quartal.minus)?dep.model.quartal.minus.cljs$lang$test:null)]));
var G__29262 = opts29251_29263;
var fexpr__29259 = new cljs.core.Var(function(){return cljs.spec.test.alpha.instrument_1_STAR_;},cljs.core.cst$sym$cljs$spec$test$alpha_SLASH_instrument_DASH_1_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$test$alpha,cljs.core.cst$sym$instrument_DASH_1_STAR_,"target/public/cljs-out/dep/cljs/spec/test/alpha.cljs",21,1,156,156,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s,cljs.core.cst$sym$v,cljs.core.cst$sym$opts], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.instrument_1_STAR_)?cljs.spec.test.alpha.instrument_1_STAR_.cljs$lang$test:null)]));
return (fexpr__29259.cljs$core$IFn$_invoke$arity$3 ? fexpr__29259.cljs$core$IFn$_invoke$arity$3(G__29260,G__29261,G__29262) : fexpr__29259.call(null,G__29260,G__29261,G__29262));
})();
if(cljs.core.truth_(checked__28948__auto__)){
(dep.model.quartal.minus = checked__28948__auto__);
} else {
}

return cljs.core.cst$sym$dep$model$quartal_SLASH_minus;
})], null)))));
