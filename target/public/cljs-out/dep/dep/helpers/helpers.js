// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.helpers.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('medley.core');
dep.helpers.helpers.round1 = (function dep$helpers$helpers$round1(x){
return ((function (){var G__30740 = ((10) * x);
return Math.ceil(G__30740);
})() / (10));
});
dep.helpers.helpers.index_of_map_in_vector = (function dep$helpers$helpers$index_of_map_in_vector(v,key,val){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__30742_SHARP_,p2__30741_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(p2__30741_SHARP_) : key.call(null,p2__30741_SHARP_)),val)){
return p1__30742_SHARP_;
} else {
return null;
}
}),v));
});
