// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28396){
var map__28398 = p__28396;
var map__28398__$1 = (((((!((map__28398 == null))))?(((((map__28398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28398):map__28398);
var m = map__28398__$1;
var n = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28413_28504 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28414_28505 = null;
var count__28415_28506 = (0);
var i__28416_28507 = (0);
while(true){
if((i__28416_28507 < count__28415_28506)){
var f_28508 = cljs.core._nth.call(null,chunk__28414_28505,i__28416_28507);
cljs.core.println.call(null,"  ",f_28508);


var G__28509 = seq__28413_28504;
var G__28510 = chunk__28414_28505;
var G__28511 = count__28415_28506;
var G__28512 = (i__28416_28507 + (1));
seq__28413_28504 = G__28509;
chunk__28414_28505 = G__28510;
count__28415_28506 = G__28511;
i__28416_28507 = G__28512;
continue;
} else {
var temp__5735__auto___28513 = cljs.core.seq.call(null,seq__28413_28504);
if(temp__5735__auto___28513){
var seq__28413_28514__$1 = temp__5735__auto___28513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28413_28514__$1)){
var c__4556__auto___28515 = cljs.core.chunk_first.call(null,seq__28413_28514__$1);
var G__28516 = cljs.core.chunk_rest.call(null,seq__28413_28514__$1);
var G__28517 = c__4556__auto___28515;
var G__28518 = cljs.core.count.call(null,c__4556__auto___28515);
var G__28519 = (0);
seq__28413_28504 = G__28516;
chunk__28414_28505 = G__28517;
count__28415_28506 = G__28518;
i__28416_28507 = G__28519;
continue;
} else {
var f_28520 = cljs.core.first.call(null,seq__28413_28514__$1);
cljs.core.println.call(null,"  ",f_28520);


var G__28521 = cljs.core.next.call(null,seq__28413_28514__$1);
var G__28522 = null;
var G__28523 = (0);
var G__28524 = (0);
seq__28413_28504 = G__28521;
chunk__28414_28505 = G__28522;
count__28415_28506 = G__28523;
i__28416_28507 = G__28524;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28525 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28525);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28525)))?cljs.core.second.call(null,arglists_28525):arglists_28525));
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
var seq__28424_28533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28425_28534 = null;
var count__28426_28535 = (0);
var i__28427_28536 = (0);
while(true){
if((i__28427_28536 < count__28426_28535)){
var vec__28453_28537 = cljs.core._nth.call(null,chunk__28425_28534,i__28427_28536);
var name_28538 = cljs.core.nth.call(null,vec__28453_28537,(0),null);
var map__28456_28539 = cljs.core.nth.call(null,vec__28453_28537,(1),null);
var map__28456_28540__$1 = (((((!((map__28456_28539 == null))))?(((((map__28456_28539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28456_28539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28456_28539):map__28456_28539);
var doc_28541 = cljs.core.get.call(null,map__28456_28540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28542 = cljs.core.get.call(null,map__28456_28540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28538);

cljs.core.println.call(null," ",arglists_28542);

if(cljs.core.truth_(doc_28541)){
cljs.core.println.call(null," ",doc_28541);
} else {
}


var G__28543 = seq__28424_28533;
var G__28544 = chunk__28425_28534;
var G__28545 = count__28426_28535;
var G__28546 = (i__28427_28536 + (1));
seq__28424_28533 = G__28543;
chunk__28425_28534 = G__28544;
count__28426_28535 = G__28545;
i__28427_28536 = G__28546;
continue;
} else {
var temp__5735__auto___28547 = cljs.core.seq.call(null,seq__28424_28533);
if(temp__5735__auto___28547){
var seq__28424_28548__$1 = temp__5735__auto___28547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28424_28548__$1)){
var c__4556__auto___28549 = cljs.core.chunk_first.call(null,seq__28424_28548__$1);
var G__28550 = cljs.core.chunk_rest.call(null,seq__28424_28548__$1);
var G__28551 = c__4556__auto___28549;
var G__28552 = cljs.core.count.call(null,c__4556__auto___28549);
var G__28553 = (0);
seq__28424_28533 = G__28550;
chunk__28425_28534 = G__28551;
count__28426_28535 = G__28552;
i__28427_28536 = G__28553;
continue;
} else {
var vec__28458_28554 = cljs.core.first.call(null,seq__28424_28548__$1);
var name_28555 = cljs.core.nth.call(null,vec__28458_28554,(0),null);
var map__28461_28556 = cljs.core.nth.call(null,vec__28458_28554,(1),null);
var map__28461_28557__$1 = (((((!((map__28461_28556 == null))))?(((((map__28461_28556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28461_28556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28461_28556):map__28461_28556);
var doc_28558 = cljs.core.get.call(null,map__28461_28557__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28559 = cljs.core.get.call(null,map__28461_28557__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28555);

cljs.core.println.call(null," ",arglists_28559);

if(cljs.core.truth_(doc_28558)){
cljs.core.println.call(null," ",doc_28558);
} else {
}


var G__28560 = cljs.core.next.call(null,seq__28424_28548__$1);
var G__28561 = null;
var G__28562 = (0);
var G__28563 = (0);
seq__28424_28533 = G__28560;
chunk__28425_28534 = G__28561;
count__28426_28535 = G__28562;
i__28427_28536 = G__28563;
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

var seq__28473 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28474 = null;
var count__28475 = (0);
var i__28476 = (0);
while(true){
if((i__28476 < count__28475)){
var role = cljs.core._nth.call(null,chunk__28474,i__28476);
var temp__5735__auto___28564__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28564__$1)){
var spec_28565 = temp__5735__auto___28564__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28565));
} else {
}


var G__28574 = seq__28473;
var G__28575 = chunk__28474;
var G__28576 = count__28475;
var G__28577 = (i__28476 + (1));
seq__28473 = G__28574;
chunk__28474 = G__28575;
count__28475 = G__28576;
i__28476 = G__28577;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28473);
if(temp__5735__auto____$1){
var seq__28473__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28473__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28473__$1);
var G__28579 = cljs.core.chunk_rest.call(null,seq__28473__$1);
var G__28580 = c__4556__auto__;
var G__28581 = cljs.core.count.call(null,c__4556__auto__);
var G__28582 = (0);
seq__28473 = G__28579;
chunk__28474 = G__28580;
count__28475 = G__28581;
i__28476 = G__28582;
continue;
} else {
var role = cljs.core.first.call(null,seq__28473__$1);
var temp__5735__auto___28583__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28583__$2)){
var spec_28584 = temp__5735__auto___28583__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28584));
} else {
}


var G__28585 = cljs.core.next.call(null,seq__28473__$1);
var G__28586 = null;
var G__28587 = (0);
var G__28588 = (0);
seq__28473 = G__28585;
chunk__28474 = G__28586;
count__28475 = G__28587;
i__28476 = G__28588;
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
var G__28605 = cljs.core.conj.call(null,via,t);
var G__28606 = cljs.core.ex_cause.call(null,t);
via = G__28605;
t = G__28606;
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
var map__28611 = datafied_throwable;
var map__28611__$1 = (((((!((map__28611 == null))))?(((((map__28611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28611):map__28611);
var via = cljs.core.get.call(null,map__28611__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28611__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28611__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28612 = cljs.core.last.call(null,via);
var map__28612__$1 = (((((!((map__28612 == null))))?(((((map__28612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28612):map__28612);
var type = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28613 = data;
var map__28613__$1 = (((((!((map__28613 == null))))?(((((map__28613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28613):map__28613);
var problems = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28614 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28614__$1 = (((((!((map__28614 == null))))?(((((map__28614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28614):map__28614);
var top_data = map__28614__$1;
var source = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28626 = phase;
var G__28626__$1 = (((G__28626 instanceof cljs.core.Keyword))?G__28626.fqn:null);
switch (G__28626__$1) {
case "read-source":
var map__28627 = data;
var map__28627__$1 = (((((!((map__28627 == null))))?(((((map__28627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28627):map__28627);
var line = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28629 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28629__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28629,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28629);
var G__28629__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28629__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28629__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28629__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28629__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28630 = top_data;
var G__28630__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28630,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28630);
var G__28630__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28630__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28630__$1);
var G__28630__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28630__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28630__$2);
var G__28630__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28630__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28630__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28630__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28630__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28631 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28631,(0),null);
var method = cljs.core.nth.call(null,vec__28631,(1),null);
var file = cljs.core.nth.call(null,vec__28631,(2),null);
var line = cljs.core.nth.call(null,vec__28631,(3),null);
var G__28634 = top_data;
var G__28634__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28634,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28634);
var G__28634__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28634__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28634__$1);
var G__28634__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__28634__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28634__$2);
var G__28634__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28634__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28634__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28634__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28634__$4;
}

break;
case "execution":
var vec__28648 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28648,(0),null);
var method = cljs.core.nth.call(null,vec__28648,(1),null);
var file = cljs.core.nth.call(null,vec__28648,(2),null);
var line = cljs.core.nth.call(null,vec__28648,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28610_SHARP_){
var or__4126__auto__ = (p1__28610_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28610_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__28651 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28651__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28651,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28651);
var G__28651__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28651__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28651__$1);
var G__28651__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__28651__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28651__$2);
var G__28651__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28651__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28651__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28651__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28651__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28626__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28678){
var map__28679 = p__28678;
var map__28679__$1 = (((((!((map__28679 == null))))?(((((map__28679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28679):map__28679);
var triage_data = map__28679__$1;
var phase = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__28681 = phase;
var G__28681__$1 = (((G__28681 instanceof cljs.core.Keyword))?G__28681.fqn:null);
switch (G__28681__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28682_28691 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28683_28692 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28684_28693 = true;
var _STAR_print_fn_STAR__temp_val__28685_28694 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28684_28693);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28685_28694);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28676_SHARP_){
return cljs.core.dissoc.call(null,p1__28676_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28683_28692);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28682_28691);
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
var _STAR_print_newline_STAR__orig_val__28686_28695 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28687_28696 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28688_28697 = true;
var _STAR_print_fn_STAR__temp_val__28689_28698 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28688_28697);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28689_28698);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28677_SHARP_){
return cljs.core.dissoc.call(null,p1__28677_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28687_28696);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28686_28695);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28681__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
