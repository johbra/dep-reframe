// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34410){
var map__34411 = p__34410;
var map__34411__$1 = (((((!((map__34411 == null))))?(((((map__34411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34411):map__34411);
var m = map__34411__$1;
var n = cljs.core.get.call(null,map__34411__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34413_34445 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34414_34446 = null;
var count__34415_34447 = (0);
var i__34416_34448 = (0);
while(true){
if((i__34416_34448 < count__34415_34447)){
var f_34449 = cljs.core._nth.call(null,chunk__34414_34446,i__34416_34448);
cljs.core.println.call(null,"  ",f_34449);


var G__34450 = seq__34413_34445;
var G__34451 = chunk__34414_34446;
var G__34452 = count__34415_34447;
var G__34453 = (i__34416_34448 + (1));
seq__34413_34445 = G__34450;
chunk__34414_34446 = G__34451;
count__34415_34447 = G__34452;
i__34416_34448 = G__34453;
continue;
} else {
var temp__5735__auto___34454 = cljs.core.seq.call(null,seq__34413_34445);
if(temp__5735__auto___34454){
var seq__34413_34455__$1 = temp__5735__auto___34454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34413_34455__$1)){
var c__4556__auto___34456 = cljs.core.chunk_first.call(null,seq__34413_34455__$1);
var G__34457 = cljs.core.chunk_rest.call(null,seq__34413_34455__$1);
var G__34458 = c__4556__auto___34456;
var G__34459 = cljs.core.count.call(null,c__4556__auto___34456);
var G__34460 = (0);
seq__34413_34445 = G__34457;
chunk__34414_34446 = G__34458;
count__34415_34447 = G__34459;
i__34416_34448 = G__34460;
continue;
} else {
var f_34461 = cljs.core.first.call(null,seq__34413_34455__$1);
cljs.core.println.call(null,"  ",f_34461);


var G__34462 = cljs.core.next.call(null,seq__34413_34455__$1);
var G__34463 = null;
var G__34464 = (0);
var G__34465 = (0);
seq__34413_34445 = G__34462;
chunk__34414_34446 = G__34463;
count__34415_34447 = G__34464;
i__34416_34448 = G__34465;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34466 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34466);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34466)))?cljs.core.second.call(null,arglists_34466):arglists_34466));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34417_34467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34418_34468 = null;
var count__34419_34469 = (0);
var i__34420_34470 = (0);
while(true){
if((i__34420_34470 < count__34419_34469)){
var vec__34431_34471 = cljs.core._nth.call(null,chunk__34418_34468,i__34420_34470);
var name_34472 = cljs.core.nth.call(null,vec__34431_34471,(0),null);
var map__34434_34473 = cljs.core.nth.call(null,vec__34431_34471,(1),null);
var map__34434_34474__$1 = (((((!((map__34434_34473 == null))))?(((((map__34434_34473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34434_34473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34434_34473):map__34434_34473);
var doc_34475 = cljs.core.get.call(null,map__34434_34474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34476 = cljs.core.get.call(null,map__34434_34474__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34472);

cljs.core.println.call(null," ",arglists_34476);

if(cljs.core.truth_(doc_34475)){
cljs.core.println.call(null," ",doc_34475);
} else {
}


var G__34477 = seq__34417_34467;
var G__34478 = chunk__34418_34468;
var G__34479 = count__34419_34469;
var G__34480 = (i__34420_34470 + (1));
seq__34417_34467 = G__34477;
chunk__34418_34468 = G__34478;
count__34419_34469 = G__34479;
i__34420_34470 = G__34480;
continue;
} else {
var temp__5735__auto___34481 = cljs.core.seq.call(null,seq__34417_34467);
if(temp__5735__auto___34481){
var seq__34417_34482__$1 = temp__5735__auto___34481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34417_34482__$1)){
var c__4556__auto___34483 = cljs.core.chunk_first.call(null,seq__34417_34482__$1);
var G__34484 = cljs.core.chunk_rest.call(null,seq__34417_34482__$1);
var G__34485 = c__4556__auto___34483;
var G__34486 = cljs.core.count.call(null,c__4556__auto___34483);
var G__34487 = (0);
seq__34417_34467 = G__34484;
chunk__34418_34468 = G__34485;
count__34419_34469 = G__34486;
i__34420_34470 = G__34487;
continue;
} else {
var vec__34436_34488 = cljs.core.first.call(null,seq__34417_34482__$1);
var name_34489 = cljs.core.nth.call(null,vec__34436_34488,(0),null);
var map__34439_34490 = cljs.core.nth.call(null,vec__34436_34488,(1),null);
var map__34439_34491__$1 = (((((!((map__34439_34490 == null))))?(((((map__34439_34490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34439_34490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34439_34490):map__34439_34490);
var doc_34492 = cljs.core.get.call(null,map__34439_34491__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34493 = cljs.core.get.call(null,map__34439_34491__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34489);

cljs.core.println.call(null," ",arglists_34493);

if(cljs.core.truth_(doc_34492)){
cljs.core.println.call(null," ",doc_34492);
} else {
}


var G__34494 = cljs.core.next.call(null,seq__34417_34482__$1);
var G__34495 = null;
var G__34496 = (0);
var G__34497 = (0);
seq__34417_34467 = G__34494;
chunk__34418_34468 = G__34495;
count__34419_34469 = G__34496;
i__34420_34470 = G__34497;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__34441 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34442 = null;
var count__34443 = (0);
var i__34444 = (0);
while(true){
if((i__34444 < count__34443)){
var role = cljs.core._nth.call(null,chunk__34442,i__34444);
var temp__5735__auto___34498__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34498__$1)){
var spec_34499 = temp__5735__auto___34498__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34499));
} else {
}


var G__34500 = seq__34441;
var G__34501 = chunk__34442;
var G__34502 = count__34443;
var G__34503 = (i__34444 + (1));
seq__34441 = G__34500;
chunk__34442 = G__34501;
count__34443 = G__34502;
i__34444 = G__34503;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__34441);
if(temp__5735__auto____$1){
var seq__34441__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34441__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34441__$1);
var G__34504 = cljs.core.chunk_rest.call(null,seq__34441__$1);
var G__34505 = c__4556__auto__;
var G__34506 = cljs.core.count.call(null,c__4556__auto__);
var G__34507 = (0);
seq__34441 = G__34504;
chunk__34442 = G__34505;
count__34443 = G__34506;
i__34444 = G__34507;
continue;
} else {
var role = cljs.core.first.call(null,seq__34441__$1);
var temp__5735__auto___34508__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34508__$2)){
var spec_34509 = temp__5735__auto___34508__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34509));
} else {
}


var G__34510 = cljs.core.next.call(null,seq__34441__$1);
var G__34511 = null;
var G__34512 = (0);
var G__34513 = (0);
seq__34441 = G__34510;
chunk__34442 = G__34511;
count__34443 = G__34512;
i__34444 = G__34513;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34514 = cljs.core.conj.call(null,via,t);
var G__34515 = cljs.core.ex_cause.call(null,t);
via = G__34514;
t = G__34515;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34518 = datafied_throwable;
var map__34518__$1 = (((((!((map__34518 == null))))?(((((map__34518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34518):map__34518);
var via = cljs.core.get.call(null,map__34518__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34518__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34518__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34519 = cljs.core.last.call(null,via);
var map__34519__$1 = (((((!((map__34519 == null))))?(((((map__34519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34519):map__34519);
var type = cljs.core.get.call(null,map__34519__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34519__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34519__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34520 = data;
var map__34520__$1 = (((((!((map__34520 == null))))?(((((map__34520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34520):map__34520);
var problems = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34521 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34521__$1 = (((((!((map__34521 == null))))?(((((map__34521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34521):map__34521);
var top_data = map__34521__$1;
var source = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34526 = phase;
var G__34526__$1 = (((G__34526 instanceof cljs.core.Keyword))?G__34526.fqn:null);
switch (G__34526__$1) {
case "read-source":
var map__34527 = data;
var map__34527__$1 = (((((!((map__34527 == null))))?(((((map__34527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34527):map__34527);
var line = cljs.core.get.call(null,map__34527__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34527__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34529 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34529__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34529,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34529);
var G__34529__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34529__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34529__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34529__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34529__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34530 = top_data;
var G__34530__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34530,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34530);
var G__34530__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34530__$1);
var G__34530__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34530__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34530__$2);
var G__34530__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34530__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34530__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34530__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34530__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34531 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34531,(0),null);
var method = cljs.core.nth.call(null,vec__34531,(1),null);
var file = cljs.core.nth.call(null,vec__34531,(2),null);
var line = cljs.core.nth.call(null,vec__34531,(3),null);
var G__34534 = top_data;
var G__34534__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34534,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34534);
var G__34534__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34534__$1);
var G__34534__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__34534__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34534__$2);
var G__34534__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34534__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34534__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34534__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34534__$4;
}

break;
case "execution":
var vec__34535 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34535,(0),null);
var method = cljs.core.nth.call(null,vec__34535,(1),null);
var file = cljs.core.nth.call(null,vec__34535,(2),null);
var line = cljs.core.nth.call(null,vec__34535,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__34517_SHARP_){
var or__4126__auto__ = (p1__34517_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34517_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34538 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34538__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34538,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34538);
var G__34538__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34538__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34538__$1);
var G__34538__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__34538__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34538__$2);
var G__34538__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34538__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34538__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34538__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34538__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34526__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34542){
var map__34543 = p__34542;
var map__34543__$1 = (((((!((map__34543 == null))))?(((((map__34543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34543):map__34543);
var triage_data = map__34543__$1;
var phase = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34543__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34545 = phase;
var G__34545__$1 = (((G__34545 instanceof cljs.core.Keyword))?G__34545.fqn:null);
switch (G__34545__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34546_34555 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34547_34556 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34548_34557 = true;
var _STAR_print_fn_STAR__temp_val__34549_34558 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34548_34557);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34549_34558);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34540_SHARP_){
return cljs.core.dissoc.call(null,p1__34540_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34547_34556);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34546_34555);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34550_34559 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34551_34560 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34552_34561 = true;
var _STAR_print_fn_STAR__temp_val__34553_34562 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34552_34561);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34553_34562);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34541_SHARP_){
return cljs.core.dissoc.call(null,p1__34541_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34551_34560);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34550_34559);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34545__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
