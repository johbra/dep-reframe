// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29507){
var map__29508 = p__29507;
var map__29508__$1 = (((((!((map__29508 == null))))?(((((map__29508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29508):map__29508);
var m = map__29508__$1;
var n = cljs.core.get.call(null,map__29508__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29510_29542 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29511_29543 = null;
var count__29512_29544 = (0);
var i__29513_29545 = (0);
while(true){
if((i__29513_29545 < count__29512_29544)){
var f_29546 = cljs.core._nth.call(null,chunk__29511_29543,i__29513_29545);
cljs.core.println.call(null,"  ",f_29546);


var G__29547 = seq__29510_29542;
var G__29548 = chunk__29511_29543;
var G__29549 = count__29512_29544;
var G__29550 = (i__29513_29545 + (1));
seq__29510_29542 = G__29547;
chunk__29511_29543 = G__29548;
count__29512_29544 = G__29549;
i__29513_29545 = G__29550;
continue;
} else {
var temp__5735__auto___29551 = cljs.core.seq.call(null,seq__29510_29542);
if(temp__5735__auto___29551){
var seq__29510_29552__$1 = temp__5735__auto___29551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29510_29552__$1)){
var c__4556__auto___29553 = cljs.core.chunk_first.call(null,seq__29510_29552__$1);
var G__29554 = cljs.core.chunk_rest.call(null,seq__29510_29552__$1);
var G__29555 = c__4556__auto___29553;
var G__29556 = cljs.core.count.call(null,c__4556__auto___29553);
var G__29557 = (0);
seq__29510_29542 = G__29554;
chunk__29511_29543 = G__29555;
count__29512_29544 = G__29556;
i__29513_29545 = G__29557;
continue;
} else {
var f_29558 = cljs.core.first.call(null,seq__29510_29552__$1);
cljs.core.println.call(null,"  ",f_29558);


var G__29559 = cljs.core.next.call(null,seq__29510_29552__$1);
var G__29560 = null;
var G__29561 = (0);
var G__29562 = (0);
seq__29510_29542 = G__29559;
chunk__29511_29543 = G__29560;
count__29512_29544 = G__29561;
i__29513_29545 = G__29562;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29563 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29563);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29563)))?cljs.core.second.call(null,arglists_29563):arglists_29563));
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
var seq__29514_29564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29515_29565 = null;
var count__29516_29566 = (0);
var i__29517_29567 = (0);
while(true){
if((i__29517_29567 < count__29516_29566)){
var vec__29528_29568 = cljs.core._nth.call(null,chunk__29515_29565,i__29517_29567);
var name_29569 = cljs.core.nth.call(null,vec__29528_29568,(0),null);
var map__29531_29570 = cljs.core.nth.call(null,vec__29528_29568,(1),null);
var map__29531_29571__$1 = (((((!((map__29531_29570 == null))))?(((((map__29531_29570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29531_29570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29531_29570):map__29531_29570);
var doc_29572 = cljs.core.get.call(null,map__29531_29571__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29573 = cljs.core.get.call(null,map__29531_29571__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29569);

cljs.core.println.call(null," ",arglists_29573);

if(cljs.core.truth_(doc_29572)){
cljs.core.println.call(null," ",doc_29572);
} else {
}


var G__29574 = seq__29514_29564;
var G__29575 = chunk__29515_29565;
var G__29576 = count__29516_29566;
var G__29577 = (i__29517_29567 + (1));
seq__29514_29564 = G__29574;
chunk__29515_29565 = G__29575;
count__29516_29566 = G__29576;
i__29517_29567 = G__29577;
continue;
} else {
var temp__5735__auto___29578 = cljs.core.seq.call(null,seq__29514_29564);
if(temp__5735__auto___29578){
var seq__29514_29579__$1 = temp__5735__auto___29578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29514_29579__$1)){
var c__4556__auto___29580 = cljs.core.chunk_first.call(null,seq__29514_29579__$1);
var G__29581 = cljs.core.chunk_rest.call(null,seq__29514_29579__$1);
var G__29582 = c__4556__auto___29580;
var G__29583 = cljs.core.count.call(null,c__4556__auto___29580);
var G__29584 = (0);
seq__29514_29564 = G__29581;
chunk__29515_29565 = G__29582;
count__29516_29566 = G__29583;
i__29517_29567 = G__29584;
continue;
} else {
var vec__29533_29585 = cljs.core.first.call(null,seq__29514_29579__$1);
var name_29586 = cljs.core.nth.call(null,vec__29533_29585,(0),null);
var map__29536_29587 = cljs.core.nth.call(null,vec__29533_29585,(1),null);
var map__29536_29588__$1 = (((((!((map__29536_29587 == null))))?(((((map__29536_29587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29536_29587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29536_29587):map__29536_29587);
var doc_29589 = cljs.core.get.call(null,map__29536_29588__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29590 = cljs.core.get.call(null,map__29536_29588__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29586);

cljs.core.println.call(null," ",arglists_29590);

if(cljs.core.truth_(doc_29589)){
cljs.core.println.call(null," ",doc_29589);
} else {
}


var G__29591 = cljs.core.next.call(null,seq__29514_29579__$1);
var G__29592 = null;
var G__29593 = (0);
var G__29594 = (0);
seq__29514_29564 = G__29591;
chunk__29515_29565 = G__29592;
count__29516_29566 = G__29593;
i__29517_29567 = G__29594;
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

var seq__29538 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29539 = null;
var count__29540 = (0);
var i__29541 = (0);
while(true){
if((i__29541 < count__29540)){
var role = cljs.core._nth.call(null,chunk__29539,i__29541);
var temp__5735__auto___29595__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29595__$1)){
var spec_29596 = temp__5735__auto___29595__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29596));
} else {
}


var G__29597 = seq__29538;
var G__29598 = chunk__29539;
var G__29599 = count__29540;
var G__29600 = (i__29541 + (1));
seq__29538 = G__29597;
chunk__29539 = G__29598;
count__29540 = G__29599;
i__29541 = G__29600;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__29538);
if(temp__5735__auto____$1){
var seq__29538__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29538__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29538__$1);
var G__29601 = cljs.core.chunk_rest.call(null,seq__29538__$1);
var G__29602 = c__4556__auto__;
var G__29603 = cljs.core.count.call(null,c__4556__auto__);
var G__29604 = (0);
seq__29538 = G__29601;
chunk__29539 = G__29602;
count__29540 = G__29603;
i__29541 = G__29604;
continue;
} else {
var role = cljs.core.first.call(null,seq__29538__$1);
var temp__5735__auto___29605__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29605__$2)){
var spec_29606 = temp__5735__auto___29605__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29606));
} else {
}


var G__29607 = cljs.core.next.call(null,seq__29538__$1);
var G__29608 = null;
var G__29609 = (0);
var G__29610 = (0);
seq__29538 = G__29607;
chunk__29539 = G__29608;
count__29540 = G__29609;
i__29541 = G__29610;
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
var G__29611 = cljs.core.conj.call(null,via,t);
var G__29612 = cljs.core.ex_cause.call(null,t);
via = G__29611;
t = G__29612;
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
var map__29615 = datafied_throwable;
var map__29615__$1 = (((((!((map__29615 == null))))?(((((map__29615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29615):map__29615);
var via = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29616 = cljs.core.last.call(null,via);
var map__29616__$1 = (((((!((map__29616 == null))))?(((((map__29616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29616):map__29616);
var type = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29617 = data;
var map__29617__$1 = (((((!((map__29617 == null))))?(((((map__29617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29617):map__29617);
var problems = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29618 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29618__$1 = (((((!((map__29618 == null))))?(((((map__29618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29618):map__29618);
var top_data = map__29618__$1;
var source = cljs.core.get.call(null,map__29618__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29623 = phase;
var G__29623__$1 = (((G__29623 instanceof cljs.core.Keyword))?G__29623.fqn:null);
switch (G__29623__$1) {
case "read-source":
var map__29624 = data;
var map__29624__$1 = (((((!((map__29624 == null))))?(((((map__29624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29624):map__29624);
var line = cljs.core.get.call(null,map__29624__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29624__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29626 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29626__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29626,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29626);
var G__29626__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29626__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29626__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29626__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29626__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29627 = top_data;
var G__29627__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29627,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29627);
var G__29627__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29627__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29627__$1);
var G__29627__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29627__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29627__$2);
var G__29627__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29627__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29627__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29627__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29627__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29628 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29628,(0),null);
var method = cljs.core.nth.call(null,vec__29628,(1),null);
var file = cljs.core.nth.call(null,vec__29628,(2),null);
var line = cljs.core.nth.call(null,vec__29628,(3),null);
var G__29631 = top_data;
var G__29631__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29631,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29631);
var G__29631__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29631__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29631__$1);
var G__29631__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__29631__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29631__$2);
var G__29631__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29631__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29631__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29631__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29631__$4;
}

break;
case "execution":
var vec__29632 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29632,(0),null);
var method = cljs.core.nth.call(null,vec__29632,(1),null);
var file = cljs.core.nth.call(null,vec__29632,(2),null);
var line = cljs.core.nth.call(null,vec__29632,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29614_SHARP_){
var or__4126__auto__ = (p1__29614_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29614_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__29635 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29635__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29635,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29635);
var G__29635__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29635__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29635__$1);
var G__29635__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29635__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29635__$2);
var G__29635__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29635__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29635__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29635__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29635__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29623__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29639){
var map__29640 = p__29639;
var map__29640__$1 = (((((!((map__29640 == null))))?(((((map__29640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29640):map__29640);
var triage_data = map__29640__$1;
var phase = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29642 = phase;
var G__29642__$1 = (((G__29642 instanceof cljs.core.Keyword))?G__29642.fqn:null);
switch (G__29642__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29643_29652 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29644_29653 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29645_29654 = true;
var _STAR_print_fn_STAR__temp_val__29646_29655 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29645_29654);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29646_29655);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29637_SHARP_){
return cljs.core.dissoc.call(null,p1__29637_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29644_29653);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29643_29652);
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
var _STAR_print_newline_STAR__orig_val__29647_29656 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29648_29657 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29649_29658 = true;
var _STAR_print_fn_STAR__temp_val__29650_29659 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29649_29658);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29650_29659);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29638_SHARP_){
return cljs.core.dissoc.call(null,p1__29638_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29648_29657);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29647_29656);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29642__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
