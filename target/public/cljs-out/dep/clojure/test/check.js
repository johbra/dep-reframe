// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.results');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed,start_time,reporter_fn){
var time_elapsed_ms = (clojure.test.check.impl.get_current_time_millis() - start_time);
var G__25874_25875 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,cljs.core.cst$kw$complete,cljs.core.cst$kw$property,property,cljs.core.cst$kw$result,true,cljs.core.cst$kw$pass_QMARK_,true,cljs.core.cst$kw$num_DASH_tests,num_trials,cljs.core.cst$kw$time_DASH_elapsed_DASH_ms,time_elapsed_ms,cljs.core.cst$kw$seed,seed], null);
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__25874_25875) : reporter_fn.call(null,G__25874_25875));

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$result,true,cljs.core.cst$kw$pass_QMARK_,true,cljs.core.cst$kw$num_DASH_tests,num_trials,cljs.core.cst$kw$time_DASH_elapsed_DASH_ms,time_elapsed_ms,cljs.core.cst$kw$seed,seed], null);
});
/**
 * Returns a value for the legacy :result key, which has the peculiar
 *   property of conflating returned exceptions with thrown exceptions.
 */
clojure.test.check.legacy_result = (function clojure$test$check$legacy_result(result){
if((((!((result == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === result.clojure$test$check$results$Result$))))?true:(((!result.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(clojure.test.check.results.Result,result):false)):cljs.core.native_satisfies_QMARK_(clojure.test.check.results.Result,result))){
var d = clojure.test.check.results.result_data(result);
var temp__5751__auto__ = cljs.core.find(d,cljs.core.cst$kw$clojure$test$check$properties_SLASH_error);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__25877 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25877,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25877,(1),null);
if((e instanceof Error)){
return e;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Non-Error object thrown in test",cljs.core.PersistentArrayMap.EMPTY,e);
}
} else {
return clojure.test.check.results.pass_QMARK_(result);
}
} else {
return result;
}
});
/**
 * Tests `property` `num-tests` times.
 * 
 *   Takes several optional keys:
 * 
 *   `:seed`
 *  Can be used to re-run previous tests, as the seed used is returned
 *  after a test is run.
 * 
 *   `:max-size`.
 *  can be used to control the 'size' of generated values. The size will
 *  start at 0, and grow up to max-size, as the number of tests increases.
 *  Generators will use the size parameter to bound their growth. This
 *  prevents, for example, generating a five-thousand element vector on
 *  the very first test.
 * 
 *   `:reporter-fn`
 *  A callback function that will be called at various points in the test
 *  run, with a map like:
 * 
 *    ;; called after a passing trial
 *    {:type            :trial
 *     :args            [...]
 *     :num-tests       <number of tests run so far>
 *     :num-tests-total <total number of tests to be run>
 *     :seed            42
 *     :pass?           true
 *     :property        #<...>
 *     :result          true
 *     :result-data     {...}}
 * 
 *    ;; called after the first failing trial
 *    {:type         :failure
 *     :fail         [...failing args...]
 *     :failing-size 13
 *     :num-tests    <tests ran before failure found>
 *     :pass?        false
 *     :property     #<...>
 *     :result       false/exception
 *     :result-data  {...}
 *     :seed         42}
 * 
 *  It will also be called on :complete, :shrink-step and :shrunk. Many
 *  of the keys also appear in the quick-check return value, and are
 *  documented below.
 * 
 *   If the test passes, the return value will be something like:
 * 
 *    {:num-tests       100,
 *     :pass?           true,
 *     :result          true,
 *     :seed            1561826505982,
 *     :time-elapsed-ms 24}
 * 
 *   If the test fails, the return value will be something like:
 * 
 *    {:fail            [0],
 *     :failed-after-ms 0,
 *     :failing-size    0,
 *     :num-tests       1,
 *     :pass?           false,
 *     :result          false,
 *     :result-data     nil,
 *     :seed            1561826506080,
 *     :shrunk
 *     {:depth               0,
 *      :pass?               false,
 *      :result              false,
 *      :result-data         nil,
 *      :smallest            [0],
 *      :time-shrinking-ms   0,
 *      :total-nodes-visited 0}}
 * 
 *   The meaning of the individual entries is:
 * 
 *    :num-tests
 *    The total number of trials that was were run, not including
 *    shrinking (if applicable)
 * 
 *    :pass?
 *    A boolean indicating whether the test passed or failed
 * 
 *    :result
 *    A legacy entry that is similar to :pass?
 * 
 *    :seed
 *    The seed used for the entire test run; can be used to reproduce
 *    a test run by passing it as the :seed option to quick-check
 * 
 *    :time-elapsed-ms
 *    The total time, in milliseconds, of a successful test run
 * 
 *    :fail
 *    The generated values for the first failure; note that this is
 *    always a vector, since prop/for-all can have multiple clauses
 * 
 *    :failed-after-ms
 *    The total time, in milliseconds, spent finding the first failing
 *    trial
 * 
 *    :failing-size
 *    The value of the size parameter used to generate the first
 *    failure
 * 
 *    :result-data
 *    The result data, if any, of the first failing trial (to take
 *    advantage of this a property must return an object satisfying
 *    the clojure.test.check.results/Result protocol)
 * 
 *    :shrunk
 *    A map of data about the shrinking process; nested keys that
 *    appear at the top level have the same meaning; other keys are
 *    documented next
 * 
 *    :shrunk / :depth
 *    The depth in the shrink tree that the smallest failing instance
 *    was found; this is essentially the idea of how many times the
 *    original failure was successfully shrunk
 * 
 *    :smallest
 *    The smallest values found in the shrinking process that still
 *    fail the test; this is a vector of the same type as :fail
 * 
 *    :time-shrinking-ms
 *    The total time, in milliseconds, spent shrinking
 * 
 *    :total-nodes-visited
 *    The total number of steps in the shrinking process
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/nat] (> (* a a) a)))
 * 
 *    (quick-check 100 p)
 *    (quick-check 200 p
 *                 :seed 42
 *                 :max-size 50
 *                 :reporter-fn (fn [m]
 *                                (when (= :failure (:type m))
 *                                  (println "Uh oh..."))))
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25902 = arguments.length;
var i__4772__auto___25903 = (0);
while(true){
if((i__4772__auto___25903 < len__4771__auto___25902)){
args__4777__auto__.push((arguments[i__4772__auto___25903]));

var G__25904 = (i__4772__auto___25903 + (1));
i__4772__auto___25903 = G__25904;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__25883){
var map__25884 = p__25883;
var map__25884__$1 = cljs.core.__destructure_map(map__25884);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25884__$1,cljs.core.cst$kw$seed);
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25884__$1,cljs.core.cst$kw$max_DASH_size,(200));
var reporter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25884__$1,cljs.core.cst$kw$reporter_DASH_fn,cljs.core.constantly(null));
var vec__25885 = clojure.test.check.make_rng(seed);
var created_seed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(0),null);
var rng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
var start_time = clojure.test.check.impl.get_current_time_millis();
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete(property,num_tests,created_seed,start_time,reporter_fn);
} else {
var vec__25895 = size_seq__$1;
var seq__25896 = cljs.core.seq(vec__25895);
var first__25897 = cljs.core.first(seq__25896);
var seq__25896__$1 = cljs.core.next(seq__25896);
var size = first__25897;
var rest_size_seq = seq__25896__$1;
var vec__25898 = clojure.test.check.random.split(rstate);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen(property,r1,size);
var result_map = clojure.test.check.rose_tree.root(result_map_rose);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(result_map);
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(result_map);
var so_far__$1 = (so_far + (1));
if(cljs.core.truth_(clojure.test.check.results.pass_QMARK_(result))){
var G__25901_25905 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$args,cljs.core.cst$kw$num_DASH_tests_DASH_total,cljs.core.cst$kw$property,cljs.core.cst$kw$num_DASH_tests,cljs.core.cst$kw$type,cljs.core.cst$kw$seed,cljs.core.cst$kw$result,cljs.core.cst$kw$result_DASH_data,cljs.core.cst$kw$pass_QMARK_],[args,num_tests,property,so_far__$1,cljs.core.cst$kw$trial,seed,result,clojure.test.check.results.result_data(result),true]);
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__25901_25905) : reporter_fn.call(null,G__25901_25905));

var G__25906 = so_far__$1;
var G__25907 = rest_size_seq;
var G__25908 = r2;
so_far = G__25906;
size_seq__$1 = G__25907;
rstate = G__25908;
continue;
} else {
return (clojure.test.check.failure.cljs$core$IFn$_invoke$arity$7 ? clojure.test.check.failure.cljs$core$IFn$_invoke$arity$7(property,result_map_rose,so_far__$1,size,created_seed,start_time,reporter_fn) : clojure.test.check.failure.call(null,property,result_map_rose,so_far__$1,size,created_seed,start_time,reporter_fn));
}
}
break;
}
}));

(clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq25880){
var G__25881 = cljs.core.first(seq25880);
var seq25880__$1 = cljs.core.next(seq25880);
var G__25882 = cljs.core.first(seq25880__$1);
var seq25880__$2 = cljs.core.next(seq25880__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25881,G__25882,seq25880__$2);
}));

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest,start_time){
var map__25909 = smallest;
var map__25909__$1 = cljs.core.__destructure_map(map__25909);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25909__$1,cljs.core.cst$kw$result);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$total_DASH_nodes_DASH_visited,total_nodes_visited,cljs.core.cst$kw$depth,depth,cljs.core.cst$kw$pass_QMARK_,false,cljs.core.cst$kw$result,clojure.test.check.legacy_result(result),cljs.core.cst$kw$result_DASH_data,clojure.test.check.results.result_data(result),cljs.core.cst$kw$time_DASH_shrinking_DASH_ms,(clojure.test.check.impl.get_current_time_millis() - start_time),cljs.core.cst$kw$smallest,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 * 
 *   Calls reporter-fn on every shrink step.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree,reporter_fn){
var start_time = clojure.test.check.impl.get_current_time_millis();
var shrinks_this_depth = clojure.test.check.rose_tree.children(rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root(rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_(nodes)){
return clojure.test.check.smallest_shrink(total_nodes_visited,depth,current_smallest,start_time);
} else {
var head = cljs.core.first(nodes);
var tail = cljs.core.rest(nodes);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
var pass_QMARK_ = clojure.test.check.results.pass_QMARK_(result);
var reporter_fn_arg = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$shrink_DASH_step,cljs.core.cst$kw$shrinking,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$args,args,cljs.core.cst$kw$depth,depth,cljs.core.cst$kw$pass_QMARK_,cljs.core.boolean$(pass_QMARK_),cljs.core.cst$kw$result,result,cljs.core.cst$kw$result_DASH_data,clojure.test.check.results.result_data(result),cljs.core.cst$kw$smallest,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(current_smallest),cljs.core.cst$kw$total_DASH_nodes_DASH_visited,total_nodes_visited], null)], null);
if(cljs.core.truth_(pass_QMARK_)){
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(reporter_fn_arg) : reporter_fn.call(null,reporter_fn_arg));

var G__25912 = tail;
var G__25913 = current_smallest;
var G__25914 = (total_nodes_visited + (1));
var G__25915 = depth;
nodes = G__25912;
current_smallest = G__25913;
total_nodes_visited = G__25914;
depth = G__25915;
continue;
} else {
var new_smallest = clojure.test.check.rose_tree.root(head);
var G__25911_25916 = cljs.core.assoc_in(reporter_fn_arg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shrinking,cljs.core.cst$kw$smallest], null),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(new_smallest));
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__25911_25916) : reporter_fn.call(null,G__25911_25916));

var temp__5751__auto__ = cljs.core.seq(clojure.test.check.rose_tree.children(head));
if(temp__5751__auto__){
var children = temp__5751__auto__;
var G__25917 = children;
var G__25918 = new_smallest;
var G__25919 = (total_nodes_visited + (1));
var G__25920 = (depth + (1));
nodes = G__25917;
current_smallest = G__25918;
total_nodes_visited = G__25919;
depth = G__25920;
continue;
} else {
var G__25921 = tail;
var G__25922 = new_smallest;
var G__25923 = (total_nodes_visited + (1));
var G__25924 = depth;
nodes = G__25921;
current_smallest = G__25922;
total_nodes_visited = G__25923;
depth = G__25924;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed,start_time,reporter_fn){
var failed_after_ms = (clojure.test.check.impl.get_current_time_millis() - start_time);
var root = clojure.test.check.rose_tree.root(failing_rose_tree);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(root);
var failure_data = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$failed_DASH_after_DASH_ms,cljs.core.cst$kw$property,cljs.core.cst$kw$num_DASH_tests,cljs.core.cst$kw$seed,cljs.core.cst$kw$fail,cljs.core.cst$kw$result,cljs.core.cst$kw$result_DASH_data,cljs.core.cst$kw$failing_DASH_size,cljs.core.cst$kw$pass_QMARK_],[failed_after_ms,property,trial_number,seed,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(root),clojure.test.check.legacy_result(result),clojure.test.check.results.result_data(result),size,false]);
var G__25926_25929 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failure_data,cljs.core.cst$kw$type,cljs.core.cst$kw$failure);
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__25926_25929) : reporter_fn.call(null,G__25926_25929));

var shrunk = clojure.test.check.shrink_loop(failing_rose_tree,(function (p1__25925_SHARP_){
var G__25927 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure_data,p1__25925_SHARP_], 0));
return (reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__25927) : reporter_fn.call(null,G__25927));
}));
var G__25928_25930 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(failure_data,cljs.core.cst$kw$type,cljs.core.cst$kw$shrunk,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$shrunk,shrunk], 0));
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__25928_25930) : reporter_fn.call(null,G__25928_25930));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(failure_data,cljs.core.cst$kw$property),cljs.core.cst$kw$shrunk,shrunk);
});
