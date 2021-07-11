// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.helpers.helpers');
goog.require('cljs.core');
goog.require('medley.core');
dep.helpers.helpers.round1 = (function dep$helpers$helpers$round1(x){
return (Math.ceil(((10) * x)) / (10));
});
dep.helpers.helpers.index_of_map_in_vector = (function dep$helpers$helpers$index_of_map_in_vector(v,key,val){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__31444_SHARP_,p2__31443_SHARP_){
if(cljs.core._EQ_.call(null,key.call(null,p2__31443_SHARP_),val)){
return p1__31444_SHARP_;
} else {
return null;
}
}),v));
});

//# sourceMappingURL=helpers.js.map
