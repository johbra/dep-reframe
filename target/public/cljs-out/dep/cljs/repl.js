// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29530){
var map__29531 = p__29530;
var map__29531__$1 = (((((!((map__29531 == null))))?(((((map__29531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29531):map__29531);
var m = map__29531__$1;
var n = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29533_29565 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29534_29566 = null;
var count__29535_29567 = (0);
var i__29536_29568 = (0);
while(true){
if((i__29536_29568 < count__29535_29567)){
var f_29569 = cljs.core._nth.call(null,chunk__29534_29566,i__29536_29568);
cljs.core.println.call(null,"  ",f_29569);


var G__29570 = seq__29533_29565;
var G__29571 = chunk__29534_29566;
var G__29572 = count__29535_29567;
var G__29573 = (i__29536_29568 + (1));
seq__29533_29565 = G__29570;
chunk__29534_29566 = G__29571;
count__29535_29567 = G__29572;
i__29536_29568 = G__29573;
continue;
} else {
var temp__5735__auto___29574 = cljs.core.seq.call(null,seq__29533_29565);
if(temp__5735__auto___29574){
var seq__29533_29575__$1 = temp__5735__auto___29574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29533_29575__$1)){
var c__4556__auto___29576 = cljs.core.chunk_first.call(null,seq__29533_29575__$1);
var G__29577 = cljs.core.chunk_rest.call(null,seq__29533_29575__$1);
var G__29578 = c__4556__auto___29576;
var G__29579 = cljs.core.count.call(null,c__4556__auto___29576);
var G__29580 = (0);
seq__29533_29565 = G__29577;
chunk__29534_29566 = G__29578;
count__29535_29567 = G__29579;
i__29536_29568 = G__29580;
continue;
} else {
var f_29581 = cljs.core.first.call(null,seq__29533_29575__$1);
cljs.core.println.call(null,"  ",f_29581);


var G__29582 = cljs.core.next.call(null,seq__29533_29575__$1);
var G__29583 = null;
var G__29584 = (0);
var G__29585 = (0);
seq__29533_29565 = G__29582;
chunk__29534_29566 = G__29583;
count__29535_29567 = G__29584;
i__29536_29568 = G__29585;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29586 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29586);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29586)))?cljs.core.second.call(null,arglists_29586):arglists_29586));
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
var seq__29537_29587 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29538_29588 = null;
var count__29539_29589 = (0);
var i__29540_29590 = (0);
while(true){
if((i__29540_29590 < count__29539_29589)){
var vec__29551_29591 = cljs.core._nth.call(null,chunk__29538_29588,i__29540_29590);
var name_29592 = cljs.core.nth.call(null,vec__29551_29591,(0),null);
var map__29554_29593 = cljs.core.nth.call(null,vec__29551_29591,(1),null);
var map__29554_29594__$1 = (((((!((map__29554_29593 == null))))?(((((map__29554_29593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29554_29593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29554_29593):map__29554_29593);
var doc_29595 = cljs.core.get.call(null,map__29554_29594__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29596 = cljs.core.get.call(null,map__29554_29594__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29592);

cljs.core.println.call(null," ",arglists_29596);

if(cljs.core.truth_(doc_29595)){
cljs.core.println.call(null," ",doc_29595);
} else {
}


var G__29597 = seq__29537_29587;
var G__29598 = chunk__29538_29588;
var G__29599 = count__29539_29589;
var G__29600 = (i__29540_29590 + (1));
seq__29537_29587 = G__29597;
chunk__29538_29588 = G__29598;
count__29539_29589 = G__29599;
i__29540_29590 = G__29600;
continue;
} else {
var temp__5735__auto___29601 = cljs.core.seq.call(null,seq__29537_29587);
if(temp__5735__auto___29601){
var seq__29537_29602__$1 = temp__5735__auto___29601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29537_29602__$1)){
var c__4556__auto___29603 = cljs.core.chunk_first.call(null,seq__29537_29602__$1);
var G__29604 = cljs.core.chunk_rest.call(null,seq__29537_29602__$1);
var G__29605 = c__4556__auto___29603;
var G__29606 = cljs.core.count.call(null,c__4556__auto___29603);
var G__29607 = (0);
seq__29537_29587 = G__29604;
chunk__29538_29588 = G__29605;
count__29539_29589 = G__29606;
i__29540_29590 = G__29607;
continue;
} else {
var vec__29556_29608 = cljs.core.first.call(null,seq__29537_29602__$1);
var name_29609 = cljs.core.nth.call(null,vec__29556_29608,(0),null);
var map__29559_29610 = cljs.core.nth.call(null,vec__29556_29608,(1),null);
var map__29559_29611__$1 = (((((!((map__29559_29610 == null))))?(((((map__29559_29610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29559_29610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29559_29610):map__29559_29610);
var doc_29612 = cljs.core.get.call(null,map__29559_29611__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29613 = cljs.core.get.call(null,map__29559_29611__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29609);

cljs.core.println.call(null," ",arglists_29613);

if(cljs.core.truth_(doc_29612)){
cljs.core.println.call(null," ",doc_29612);
} else {
}


var G__29614 = cljs.core.next.call(null,seq__29537_29602__$1);
var G__29615 = null;
var G__29616 = (0);
var G__29617 = (0);
seq__29537_29587 = G__29614;
chunk__29538_29588 = G__29615;
count__29539_29589 = G__29616;
i__29540_29590 = G__29617;
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

var seq__29561 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29562 = null;
var count__29563 = (0);
var i__29564 = (0);
while(true){
if((i__29564 < count__29563)){
var role = cljs.core._nth.call(null,chunk__29562,i__29564);
var temp__5735__auto___29618__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29618__$1)){
var spec_29619 = temp__5735__auto___29618__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29619));
} else {
}


var G__29620 = seq__29561;
var G__29621 = chunk__29562;
var G__29622 = count__29563;
var G__29623 = (i__29564 + (1));
seq__29561 = G__29620;
chunk__29562 = G__29621;
count__29563 = G__29622;
i__29564 = G__29623;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__29561);
if(temp__5735__auto____$1){
var seq__29561__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29561__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29561__$1);
var G__29624 = cljs.core.chunk_rest.call(null,seq__29561__$1);
var G__29625 = c__4556__auto__;
var G__29626 = cljs.core.count.call(null,c__4556__auto__);
var G__29627 = (0);
seq__29561 = G__29624;
chunk__29562 = G__29625;
count__29563 = G__29626;
i__29564 = G__29627;
continue;
} else {
var role = cljs.core.first.call(null,seq__29561__$1);
var temp__5735__auto___29628__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29628__$2)){
var spec_29629 = temp__5735__auto___29628__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29629));
} else {
}


var G__29630 = cljs.core.next.call(null,seq__29561__$1);
var G__29631 = null;
var G__29632 = (0);
var G__29633 = (0);
seq__29561 = G__29630;
chunk__29562 = G__29631;
count__29563 = G__29632;
i__29564 = G__29633;
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
var G__29634 = cljs.core.conj.call(null,via,t);
var G__29635 = cljs.core.ex_cause.call(null,t);
via = G__29634;
t = G__29635;
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
var map__29638 = datafied_throwable;
var map__29638__$1 = (((((!((map__29638 == null))))?(((((map__29638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29638):map__29638);
var via = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29638__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29639 = cljs.core.last.call(null,via);
var map__29639__$1 = (((((!((map__29639 == null))))?(((((map__29639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29639):map__29639);
var type = cljs.core.get.call(null,map__29639__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29639__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29639__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29640 = data;
var map__29640__$1 = (((((!((map__29640 == null))))?(((((map__29640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29640):map__29640);
var problems = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29641 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29641__$1 = (((((!((map__29641 == null))))?(((((map__29641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641):map__29641);
var top_data = map__29641__$1;
var source = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29646 = phase;
var G__29646__$1 = (((G__29646 instanceof cljs.core.Keyword))?G__29646.fqn:null);
switch (G__29646__$1) {
case "read-source":
var map__29647 = data;
var map__29647__$1 = (((((!((map__29647 == null))))?(((((map__29647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29647):map__29647);
var line = cljs.core.get.call(null,map__29647__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29647__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29649 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29649__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29649,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29649);
var G__29649__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29649__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29649__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29649__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29649__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29650 = top_data;
var G__29650__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29650,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29650);
var G__29650__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29650__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29650__$1);
var G__29650__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29650__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29650__$2);
var G__29650__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29650__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29650__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29650__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29650__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29651 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29651,(0),null);
var method = cljs.core.nth.call(null,vec__29651,(1),null);
var file = cljs.core.nth.call(null,vec__29651,(2),null);
var line = cljs.core.nth.call(null,vec__29651,(3),null);
var G__29654 = top_data;
var G__29654__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29654,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29654);
var G__29654__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29654__$1);
var G__29654__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__29654__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29654__$2);
var G__29654__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29654__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29654__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29654__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29654__$4;
}

break;
case "execution":
var vec__29655 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29655,(0),null);
var method = cljs.core.nth.call(null,vec__29655,(1),null);
var file = cljs.core.nth.call(null,vec__29655,(2),null);
var line = cljs.core.nth.call(null,vec__29655,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29637_SHARP_){
var or__4126__auto__ = (p1__29637_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29637_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__29658 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29658__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29658,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29658);
var G__29658__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29658__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29658__$1);
var G__29658__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29658__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29658__$2);
var G__29658__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29658__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29658__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29658__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29658__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29646__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29662){
var map__29663 = p__29662;
var map__29663__$1 = (((((!((map__29663 == null))))?(((((map__29663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29663):map__29663);
var triage_data = map__29663__$1;
var phase = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29665 = phase;
var G__29665__$1 = (((G__29665 instanceof cljs.core.Keyword))?G__29665.fqn:null);
switch (G__29665__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29666_29675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29667_29676 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29668_29677 = true;
var _STAR_print_fn_STAR__temp_val__29669_29678 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29668_29677);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29669_29678);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29660_SHARP_){
return cljs.core.dissoc.call(null,p1__29660_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29667_29676);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29666_29675);
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
var _STAR_print_newline_STAR__orig_val__29670_29679 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29671_29680 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29672_29681 = true;
var _STAR_print_fn_STAR__temp_val__29673_29682 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29672_29681);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29673_29682);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29661_SHARP_){
return cljs.core.dissoc.call(null,p1__29661_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29671_29680);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29670_29679);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29665__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
