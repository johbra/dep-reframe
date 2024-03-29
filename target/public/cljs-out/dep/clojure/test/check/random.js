// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.random');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.random.doubles');
goog.require('clojure.test.check.random.longs');

/**
 * @interface
 */
clojure.test.check.random.IRandom = function(){};

var clojure$test$check$random$IRandom$rand_long$dyn_24837 = (function (rng){
var x__4463__auto__ = (((rng == null))?null:rng);
var m__4464__auto__ = (clojure.test.check.random.rand_long[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__4464__auto__.call(null,rng));
} else {
var m__4461__auto__ = (clojure.test.check.random.rand_long["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__4461__auto__.call(null,rng));
} else {
throw cljs.core.missing_protocol("IRandom.rand-long",rng);
}
}
});
/**
 * Returns a random goog.math.Long based on the given immutable RNG.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.rand_long = (function clojure$test$check$random$rand_long(rng){
if((((!((rng == null)))) && ((!((rng.clojure$test$check$random$IRandom$rand_long$arity$1 == null)))))){
return rng.clojure$test$check$random$IRandom$rand_long$arity$1(rng);
} else {
return clojure$test$check$random$IRandom$rand_long$dyn_24837(rng);
}
});

var clojure$test$check$random$IRandom$rand_double$dyn_24838 = (function (rng){
var x__4463__auto__ = (((rng == null))?null:rng);
var m__4464__auto__ = (clojure.test.check.random.rand_double[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__4464__auto__.call(null,rng));
} else {
var m__4461__auto__ = (clojure.test.check.random.rand_double["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__4461__auto__.call(null,rng));
} else {
throw cljs.core.missing_protocol("IRandom.rand-double",rng);
}
}
});
/**
 * Returns a random double between 0.0 (inclusive) and 1.0 (exclusive)
 *   based on the given immutable RNG.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.rand_double = (function clojure$test$check$random$rand_double(rng){
if((((!((rng == null)))) && ((!((rng.clojure$test$check$random$IRandom$rand_double$arity$1 == null)))))){
return rng.clojure$test$check$random$IRandom$rand_double$arity$1(rng);
} else {
return clojure$test$check$random$IRandom$rand_double$dyn_24838(rng);
}
});

var clojure$test$check$random$IRandom$split$dyn_24839 = (function (rng){
var x__4463__auto__ = (((rng == null))?null:rng);
var m__4464__auto__ = (clojure.test.check.random.split[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__4464__auto__.call(null,rng));
} else {
var m__4461__auto__ = (clojure.test.check.random.split["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(rng) : m__4461__auto__.call(null,rng));
} else {
throw cljs.core.missing_protocol("IRandom.split",rng);
}
}
});
/**
 * Returns two new RNGs [rng1 rng2], which should generate
 *   sufficiently independent random data.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.split = (function clojure$test$check$random$split(rng){
if((((!((rng == null)))) && ((!((rng.clojure$test$check$random$IRandom$split$arity$1 == null)))))){
return rng.clojure$test$check$random$IRandom$split$arity$1(rng);
} else {
return clojure$test$check$random$IRandom$split$dyn_24839(rng);
}
});

var clojure$test$check$random$IRandom$split_n$dyn_24840 = (function (rng,n){
var x__4463__auto__ = (((rng == null))?null:rng);
var m__4464__auto__ = (clojure.test.check.random.split_n[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(rng,n) : m__4464__auto__.call(null,rng,n));
} else {
var m__4461__auto__ = (clojure.test.check.random.split_n["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(rng,n) : m__4461__auto__.call(null,rng,n));
} else {
throw cljs.core.missing_protocol("IRandom.split-n",rng);
}
}
});
/**
 * Returns a collection of `n` RNGs, which should generate
 *   sufficiently independent random data.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
clojure.test.check.random.split_n = (function clojure$test$check$random$split_n(rng,n){
if((((!((rng == null)))) && ((!((rng.clojure$test$check$random$IRandom$split_n$arity$2 == null)))))){
return rng.clojure$test$check$random$IRandom$split_n$arity$2(rng,n);
} else {
return clojure$test$check$random$IRandom$split_n$dyn_24840(rng,n);
}
});

/**
 * Helper for defining constants.
 */
clojure.test.check.random.hex_long = (function clojure$test$check$random$hex_long(s){
return clojure.test.check.random.longs.from_string(s,(16));
});
/**
 * Performs (-> x (unsigned-bit-shift-right n) (bit-xor x)).
 */
clojure.test.check.random.bxoubsr = (function clojure$test$check$random$bxoubsr(x,n){
return clojure.test.check.random.longs.bit_xor(clojure.test.check.random.longs.unsigned_bit_shift_right(x,n),x);
});
clojure.test.check.random.mix_64_const_1 = clojure.test.check.random.hex_long("bf58476d1ce4e5b9");
clojure.test.check.random.mix_64_const_2 = clojure.test.check.random.hex_long("94d049bb133111eb");
clojure.test.check.random.mix_64 = (function clojure$test$check$random$mix_64(n){
return clojure.test.check.random.bxoubsr(clojure.test.check.random.longs._STAR_(clojure.test.check.random.bxoubsr(clojure.test.check.random.longs._STAR_(clojure.test.check.random.bxoubsr(n,(30)),clojure.test.check.random.mix_64_const_1),(27)),clojure.test.check.random.mix_64_const_2),(31));
});
clojure.test.check.random.mix_gamma_const_1 = clojure.test.check.random.hex_long("ff51afd7ed558ccd");
clojure.test.check.random.mix_gamma_const_2 = clojure.test.check.random.hex_long("c4ceb9fe1a85ec53");
clojure.test.check.random.mix_gamma_const_3 = clojure.test.check.random.hex_long("aaaaaaaaaaaaaaaa");
clojure.test.check.random.mix_gamma = (function clojure$test$check$random$mix_gamma(n){
var z = clojure.test.check.random.longs.bit_or(clojure.test.check.random.bxoubsr(clojure.test.check.random.longs._STAR_(clojure.test.check.random.bxoubsr(clojure.test.check.random.longs._STAR_(clojure.test.check.random.bxoubsr(n,(33)),clojure.test.check.random.mix_gamma_const_1),(33)),clojure.test.check.random.mix_gamma_const_2),(33)),clojure.test.check.random.longs.ONE);
var G__24841 = z;
if(((24) > (function (){var G__24842 = clojure.test.check.random.bxoubsr(z,(1));
return (clojure.test.check.random.longs.bit_count.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.random.longs.bit_count.cljs$core$IFn$_invoke$arity$1(G__24842) : clojure.test.check.random.longs.bit_count.call(null,G__24842));
})())){
return clojure.test.check.random.longs.bit_xor(G__24841,clojure.test.check.random.mix_gamma_const_3);
} else {
return G__24841;
}
});

/**
* @constructor
 * @implements {clojure.test.check.random.IRandom}
*/
clojure.test.check.random.JavaUtilSplittableRandom = (function (gamma,state){
this.gamma = gamma;
this.state = state;
});
(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_long$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return clojure.test.check.random.mix_64(clojure.test.check.random.longs._PLUS_(self__.state,self__.gamma));
}));

(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_double$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.test.check.random.doubles.rand_long__GT_rand_double(this$__$1.clojure$test$check$random$IRandom$rand_long$arity$1(null));
}));

(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var state_SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_(self__.gamma,self__.state);
var state_SINGLEQUOTE__SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_(self__.gamma,state_SINGLEQUOTE_);
var gamma_SINGLEQUOTE_ = clojure.test.check.random.mix_gamma(state_SINGLEQUOTE__SINGLEQUOTE_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new clojure.test.check.random.JavaUtilSplittableRandom(self__.gamma,state_SINGLEQUOTE__SINGLEQUOTE_)),(new clojure.test.check.random.JavaUtilSplittableRandom(gamma_SINGLEQUOTE_,clojure.test.check.random.mix_64(state_SINGLEQUOTE_)))], null);
}));

(clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split_n$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
var G__24843 = n;
switch (G__24843) {
case (0):
return cljs.core.PersistentVector.EMPTY;

break;
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null);

break;
default:
var n_dec = (n - (1));
var state__$1 = self__.state;
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_dec,cljs.core.count(ret))){
return cljs.core.persistent_BANG_(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,(new clojure.test.check.random.JavaUtilSplittableRandom(self__.gamma,state__$1))));
} else {
var state_SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_(self__.gamma,state__$1);
var state_SINGLEQUOTE__SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_(self__.gamma,state_SINGLEQUOTE_);
var gamma_SINGLEQUOTE_ = clojure.test.check.random.mix_gamma(state_SINGLEQUOTE__SINGLEQUOTE_);
var new_rng = (new clojure.test.check.random.JavaUtilSplittableRandom(gamma_SINGLEQUOTE_,clojure.test.check.random.mix_64(state_SINGLEQUOTE_)));
var G__24845 = state_SINGLEQUOTE__SINGLEQUOTE_;
var G__24846 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,new_rng);
state__$1 = G__24845;
ret = G__24846;
continue;
}
break;
}

}
}));

(clojure.test.check.random.JavaUtilSplittableRandom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$gamma,cljs.core.cst$sym$state], null);
}));

(clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$type = true);

(clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorStr = "clojure.test.check.random/JavaUtilSplittableRandom");

(clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"clojure.test.check.random/JavaUtilSplittableRandom");
}));

/**
 * Positional factory function for clojure.test.check.random/JavaUtilSplittableRandom.
 */
clojure.test.check.random.__GT_JavaUtilSplittableRandom = (function clojure$test$check$random$__GT_JavaUtilSplittableRandom(gamma,state){
return (new clojure.test.check.random.JavaUtilSplittableRandom(gamma,state));
});

clojure.test.check.random.golden_gamma = clojure.test.check.random.hex_long("9e3779b97f4a7c15");
clojure.test.check.random.make_java_util_splittable_random = (function clojure$test$check$random$make_java_util_splittable_random(seed){
return (new clojure.test.check.random.JavaUtilSplittableRandom(clojure.test.check.random.golden_gamma,(function (){var or__4160__auto__ = clojure.test.check.random.longs.__GT_long(seed);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Bad random seed!",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$seed,seed], null));
}
})()));
});
clojure.test.check.random.next_rng = (function (){var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,clojure.test.check.random.make_java_util_splittable_random((new Date()).valueOf())], null));
return (function (){
return cljs.core.cst$kw$returned.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p__24847){
var map__24848 = p__24847;
var map__24848__$1 = cljs.core.__destructure_map(map__24848);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24848__$1,cljs.core.cst$kw$state);
var vec__24849 = clojure.test.check.random.split(state);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24849,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24849,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,r1,cljs.core.cst$kw$returned,r2], null);
})));
});
})();
/**
 * Given an optional integer (or goog.math.Long) seed, returns an
 *   implementation of the IRandom protocol.
 */
clojure.test.check.random.make_random = (function clojure$test$check$random$make_random(var_args){
var G__24853 = arguments.length;
switch (G__24853) {
case 0:
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0 = (function (){
return (clojure.test.check.random.next_rng.cljs$core$IFn$_invoke$arity$0 ? clojure.test.check.random.next_rng.cljs$core$IFn$_invoke$arity$0() : clojure.test.check.random.next_rng.call(null));
}));

(clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return clojure.test.check.random.make_java_util_splittable_random(seed);
}));

(clojure.test.check.random.make_random.cljs$lang$maxFixedArity = 1);

