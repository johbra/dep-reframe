// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.results');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

var clojure$test$check$results$Result$pass_QMARK_$dyn_19017 = (function (result){
var x__4463__auto__ = (((result == null))?null:result);
var m__4464__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4464__auto__.call(null,result));
} else {
var m__4461__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4461__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
});
/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
return clojure$test$check$results$Result$pass_QMARK_$dyn_19017(result);
}
});

var clojure$test$check$results$Result$result_data$dyn_19018 = (function (result){
var x__4463__auto__ = (((result == null))?null:result);
var m__4464__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4464__auto__.call(null,result));
} else {
var m__4461__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4461__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
});
/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
return clojure$test$check$results$Result$result_data$dyn_19018(result);
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

goog.object.set(clojure.test.check.results.pass_QMARK_,"_",(function (this$){
return cljs.core.boolean$(this$);
}));

goog.object.set(clojure.test.check.results.result_data,"_",(function (this$){
return null;
}));

goog.object.set(clojure.test.check.results.Result,"null",true);

goog.object.set(clojure.test.check.results.pass_QMARK_,"null",(function (this$){
return false;
}));

goog.object.set(clojure.test.check.results.result_data,"null",(function (this$){
return null;
}));
