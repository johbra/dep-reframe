// Compiled by ClojureScript 1.10.773 {}
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.crypt.base64');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"amqp","amqp",-994422895),(5672),new cljs.core.Keyword(null,"http","http",382524695),(80),new cljs.core.Keyword(null,"https","https",-1983909665),(443),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),(3306),new cljs.core.Keyword(null,"postgresql","postgresql",-1568339962),(5432),new cljs.core.Keyword(null,"rabbitmq","rabbitmq",1046897371),(5672),new cljs.core.Keyword(null,"zookeeper","zookeeper",17281735),(2181)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@\/]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?#]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
 * Split the string `s` by the regex `pattern`.
 */
no.en.core.split_by_regex = (function no$en$core$split_by_regex(s,pattern){
if(cljs.core.sequential_QMARK_.call(null,s)){
return s;
} else {
if((!(clojure.string.blank_QMARK_.call(null,s)))){
return clojure.string.split.call(null,s,pattern);
} else {
return null;
}
}
});
/**
 * Split the string `s` by comma.
 */
no.en.core.split_by_comma = (function no$en$core$split_by_comma(s){
return no.en.core.split_by_regex.call(null,s,/\s*,\s*/);
});
/**
 * Returns `bytes` as an UTF-8 encoded string.
 */
no.en.core.utf8_string = (function no$en$core$utf8_string(bytes){
throw cljs.core.ex_info.call(null,"utf8-string not implemented yet",bytes);
});
/**
 * Returns `s` as a Base64 encoded string.
 */
no.en.core.base64_encode = (function no$en$core$base64_encode(bytes){
if(cljs.core.truth_(bytes)){
return goog.crypt.base64.encodeString(bytes,false);
} else {
return null;
}
});
/**
 * Returns `s` as a Base64 decoded string.
 */
no.en.core.base64_decode = (function no$en$core$base64_decode(s){
if(cljs.core.truth_(s)){
return goog.crypt.base64.decodeString(s,false);
} else {
return null;
}
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
no.en.core.compact_map = (function no$en$core$compact_map(m){
return cljs.core.reduce.call(null,(function (m__$1,k){
var v = cljs.core.get.call(null,m__$1,k);
if((((v == null)) || (((((cljs.core.map_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v)))) && (cljs.core.empty_QMARK_.call(null,v)))))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
/**
 * Returns `s` as an URL encoded string.
 */
no.en.core.url_encode = (function no$en$core$url_encode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26640 = arguments.length;
var i__4737__auto___26641 = (0);
while(true){
if((i__4737__auto___26641 < len__4736__auto___26640)){
args__4742__auto__.push((arguments[i__4737__auto___26641]));

var G__26642 = (i__4737__auto___26641 + (1));
i__4737__auto___26641 = G__26642;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__26636){
var vec__26637 = p__26636;
var encoding = cljs.core.nth.call(null,vec__26637,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),"*","%2A");
} else {
return null;
}
}));

(no.en.core.url_encode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.url_encode.cljs$lang$applyTo = (function (seq26634){
var G__26635 = cljs.core.first.call(null,seq26634);
var seq26634__$1 = cljs.core.next.call(null,seq26634);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26635,seq26634__$1);
}));

/**
 * Returns `s` as an URL decoded string.
 */
no.en.core.url_decode = (function no$en$core$url_decode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26649 = arguments.length;
var i__4737__auto___26650 = (0);
while(true){
if((i__4737__auto___26650 < len__4736__auto___26649)){
args__4742__auto__.push((arguments[i__4737__auto___26650]));

var G__26651 = (i__4737__auto___26650 + (1));
i__4737__auto___26650 = G__26651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__26645){
var vec__26646 = p__26645;
var encoding = cljs.core.nth.call(null,vec__26646,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
}));

(no.en.core.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.url_decode.cljs$lang$applyTo = (function (seq26643){
var G__26644 = cljs.core.first.call(null,seq26643);
var seq26643__$1 = cljs.core.next.call(null,seq26643);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26644,seq26643__$1);
}));

no.en.core.pow = (function no$en$core$pow(n,x){
return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow.call(null,(1024),(4)),no.en.core.pow.call(null,(1024),(1)),no.en.core.pow.call(null,(1024),(3)),no.en.core.pow.call(null,(1024),(2)),no.en.core.pow.call(null,(1024),(8)),no.en.core.pow.call(null,(1024),(7)),no.en.core.pow.call(null,(1024),(6)),no.en.core.pow.call(null,(1024),(0)),no.en.core.pow.call(null,(1024),(5))]);
no.en.core.apply_unit = (function no$en$core$apply_unit(number,unit){
if(typeof unit === 'string'){
var G__26652 = clojure.string.upper_case.call(null,unit);
switch (G__26652) {
default:
var G__26653 = unit;
switch (G__26653) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error(["No matching clause: ",G__26653].join('')));

}

}
} else {
return number;
}
});
no.en.core.parse_number = (function no$en$core$parse_number(s,parse_fn){
var temp__5733__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5733__auto__)){
var matches = temp__5733__auto__;
var number = parse_fn.call(null,cljs.core.nth.call(null,matches,(1)));
var unit = cljs.core.nth.call(null,matches,(3));
if(cljs.core.not.call(null,isNaN(number))){
return no.en.core.apply_unit.call(null,number,unit);
} else {
return null;
}
} else {
return null;
}
});
no.en.core.parse_bytes = (function no$en$core$parse_bytes(s){
var temp__5733__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5733__auto__)){
var matches = temp__5733__auto__;
var number = cljs.reader.read_string.call(null,cljs.core.nth.call(null,matches,(1)));
var unit = cljs.core.nth.call(null,matches,(3));
return cljs.core.long$.call(null,(cljs.core.long$.call(null,cljs.reader.read_string.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,matches,(1))))) * cljs.core.get.call(null,no.en.core.byte_scale,clojure.string.upper_case.call(null,(function (){var or__4126__auto__ = unit;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),(1))));
} else {
return null;
}
});
/**
 * Parse `s` as a integer number.
 */
no.en.core.parse_integer = (function no$en$core$parse_integer(s){
return no.en.core.parse_number.call(null,s,(function (p1__26656_SHARP_){
return parseInt(p1__26656_SHARP_);
}));
});
/**
 * Parse `s` as a long number.
 */
no.en.core.parse_long = (function no$en$core$parse_long(s){
return no.en.core.parse_number.call(null,s,(function (p1__26657_SHARP_){
return parseInt(p1__26657_SHARP_);
}));
});
/**
 * Parse `s` as a double number.
 */
no.en.core.parse_double = (function no$en$core$parse_double(s){
return no.en.core.parse_number.call(null,s,(function (p1__26658_SHARP_){
return parseFloat(p1__26658_SHARP_);
}));
});
/**
 * Parse `s` as a float number.
 */
no.en.core.parse_float = (function no$en$core$parse_float(s){
return no.en.core.parse_number.call(null,s,(function (p1__26659_SHARP_){
return parseFloat(p1__26659_SHARP_);
}));
});
/**
 * Format the map `m` into a query parameter string.
 */
no.en.core.format_query_params = (function no$en$core$format_query_params(m){
var params = clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__26662_SHARP_){
return clojure.string.join.call(null,"=",p1__26662_SHARP_);
}),cljs.core.map.call(null,(function (p1__26661_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode.call(null,cljs.core.name.call(null,cljs.core.first.call(null,p1__26661_SHARP_))),no.en.core.url_encode.call(null,cljs.core.second.call(null,p1__26661_SHARP_))],null));
}),cljs.core.remove.call(null,(function (p1__26660_SHARP_){
return clojure.string.blank_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26660_SHARP_)));
}),cljs.core.sort_by.call(null,cljs.core.first,cljs.core.seq.call(null,m))))));
if((!(clojure.string.blank_QMARK_.call(null,params)))){
return params;
} else {
return null;
}
});
/**
 * Format the Ring map as an url.
 */
no.en.core.format_url = (function no$en$core$format_url(m){
if((!(cljs.core.empty_QMARK_.call(null,m)))){
var query_params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(m);
return [(cljs.core.truth_(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m)),"://"].join(''):null),(function (){var map__26665 = m;
var map__26665__$1 = (((((!((map__26665 == null))))?(((((map__26665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26665):map__26665);
var username = cljs.core.get.call(null,map__26665__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var password = cljs.core.get.call(null,map__26665__$1,new cljs.core.Keyword(null,"password","password",417022471));
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),(cljs.core.truth_(password)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join(''):null),"@"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"server-name","server-name",-1012104295).cljs$core$IFn$_invoke$arity$1(m)),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"server-port","server-port",663745648).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5733__auto__)){
var port = temp__5733__auto__;
if((!(cljs.core._EQ_.call(null,port,no.en.core.port_number.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m)))))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m) == null)) && ((!(cljs.core.empty_QMARK_.call(null,query_params))))))?"/":new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m))),(((!(cljs.core.empty_QMARK_.call(null,query_params))))?["?",no.en.core.format_query_params.call(null,query_params)].join(''):null),(((!(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m)))))?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m))].join(''):null)].join('');
} else {
return null;
}
});
/**
 * Return the formatted `url` without password as a string.
 */
no.en.core.public_url = (function no$en$core$public_url(url){
return no.en.core.format_url.call(null,cljs.core.dissoc.call(null,url,new cljs.core.Keyword(null,"password","password",417022471)));
});
/**
 * Parse `s` as a percentage.
 */
no.en.core.parse_percent = (function no$en$core$parse_percent(s){
return no.en.core.parse_double.call(null,clojure.string.replace.call(null,s,"%",""));
});
/**
 * Quote the special characters in `s` that are used in regular expressions.
 */
no.en.core.pattern_quote = (function no$en$core$pattern_quote(s){
return clojure.string.replace.call(null,cljs.core.name.call(null,s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
 * Returns the first string that separates the components in `s`.
 */
no.en.core.separator = (function no$en$core$separator(s){
var temp__5733__auto__ = cljs.core.re_matches.call(null,/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);
if(cljs.core.truth_(temp__5733__auto__)){
var matches = temp__5733__auto__;
return cljs.core.nth.call(null,matches,(2));
} else {
return null;
}
});
/**
 * Parse the query parameter string `s` and return a map.
 */
no.en.core.parse_query_params = (function no$en$core$parse_query_params(s){
if(cljs.core.truth_(s)){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__26669_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,no.en.core.url_decode.call(null,cljs.core.first.call(null,p1__26669_SHARP_))),no.en.core.url_decode.call(null,cljs.core.second.call(null,p1__26669_SHARP_))],null));
}),cljs.core.filter.call(null,(function (p1__26668_SHARP_){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,p1__26668_SHARP_));
}),cljs.core.map.call(null,(function (p1__26667_SHARP_){
return clojure.string.split.call(null,p1__26667_SHARP_,/=/);
}),clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/)))));
} else {
return null;
}
});
/**
 * Parse the url `s` and return a Ring compatible map.
 */
no.en.core.parse_url = (function no$en$core$parse_url(s){
var temp__5733__auto__ = cljs.core.re_matches.call(null,no.en.core.url_regex,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5733__auto__)){
var matches = temp__5733__auto__;
var scheme = cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,(1)));
return no.en.core.compact_map.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"scheme","scheme",90199613)],[cljs.core.nth.call(null,matches,(4)),cljs.core.nth.call(null,matches,(14)),cljs.core.nth.call(null,matches,(3)),(function (){var or__4126__auto__ = no.en.core.parse_integer.call(null,cljs.core.nth.call(null,matches,(8)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return no.en.core.port_number.call(null,scheme);
}
})(),no.en.core.parse_query_params.call(null,cljs.core.nth.call(null,matches,(12))),cljs.core.nth.call(null,matches,(10)),cljs.core.nth.call(null,matches,(6)),cljs.core.nth.call(null,matches,(12)),scheme]));
} else {
return null;
}
});
var ret__4785__auto___26674 = (function (){
no.en.core.prog1 = (function no$en$core$prog1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26675 = arguments.length;
var i__4737__auto___26676 = (0);
while(true){
if((i__4737__auto___26676 < len__4736__auto___26675)){
args__4742__auto__.push((arguments[i__4737__auto___26676]));

var G__26677 = (i__4737__auto___26676 + (1));
i__4737__auto___26676 = G__26677;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__26670__auto__","result__26670__auto__",-1156304453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,body),null,(1),null)))))),null,(1),null)),cljs.core.rest.call(null,body),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__26670__auto__","result__26670__auto__",-1156304453,null),null,(1),null)))));
}));

(no.en.core.prog1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(no.en.core.prog1.cljs$lang$applyTo = (function (seq26671){
var G__26672 = cljs.core.first.call(null,seq26671);
var seq26671__$1 = cljs.core.next.call(null,seq26671);
var G__26673 = cljs.core.first.call(null,seq26671__$1);
var seq26671__$2 = cljs.core.next.call(null,seq26671__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26672,G__26673,seq26671__$2);
}));

return null;
})()
;
(no.en.core.prog1.cljs$lang$macro = true);

/**
 * Executes thunk. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries_STAR_ = (function no$en$core$with_retries_STAR_(n,thunk){
var n__$1 = n;
while(true){
var temp__5733__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thunk.call(null)], null);
}catch (e26678){if((e26678 instanceof Error)){
var e = e26678;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e26678;

}
}})();
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return result.call(null,(0));
} else {
var G__26679 = (n__$1 - (1));
n__$1 = G__26679;
continue;
}
break;
}
});
var ret__4785__auto___26684 = (function (){
/**
 * Executes body. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries = (function no$en$core$with_retries(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26685 = arguments.length;
var i__4737__auto___26686 = (0);
while(true){
if((i__4737__auto___26686 < len__4736__auto___26685)){
args__4742__auto__.push((arguments[i__4737__auto___26686]));

var G__26687 = (i__4737__auto___26686 + (1));
i__4737__auto___26686 = G__26687;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("no.en.core","with-retries*","no.en.core/with-retries*",172357687,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(no.en.core.with_retries.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(no.en.core.with_retries.cljs$lang$applyTo = (function (seq26680){
var G__26681 = cljs.core.first.call(null,seq26680);
var seq26680__$1 = cljs.core.next.call(null,seq26680);
var G__26682 = cljs.core.first.call(null,seq26680__$1);
var seq26680__$2 = cljs.core.next.call(null,seq26680__$1);
var G__26683 = cljs.core.first.call(null,seq26680__$2);
var seq26680__$3 = cljs.core.next.call(null,seq26680__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26681,G__26682,G__26683,seq26680__$3);
}));

return null;
})()
;
(no.en.core.with_retries.cljs$lang$macro = true);

no.en.core.editable_QMARK_ = (function no$en$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
no.en.core.reduce_map = (function no$en$core$reduce_map(f,coll){
if(no.en.core.editable_QMARK_.call(null,coll)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll)),coll));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll),coll);
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
no.en.core.map_keys = (function no$en$core$map_keys(f,coll){
return no.en.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
no.en.core.map_vals = (function no$en$core$map_vals(f,coll){
return no.en.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
});
/**
 * Like merge, but merges maps recursively.
 */
no.en.core.deep_merge = (function no$en$core$deep_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26690 = arguments.length;
var i__4737__auto___26691 = (0);
while(true){
if((i__4737__auto___26691 < len__4736__auto___26690)){
args__4742__auto__.push((arguments[i__4737__auto___26691]));

var G__26692 = (i__4737__auto___26691 + (1));
i__4737__auto___26691 = G__26692;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,no.en.core.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
}));

(no.en.core.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(no.en.core.deep_merge.cljs$lang$applyTo = (function (seq26689){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26689));
}));

/**
 * Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 */
no.en.core.deep_merge_with = (function no$en$core$deep_merge_with(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26695 = arguments.length;
var i__4737__auto___26696 = (0);
while(true){
if((i__4737__auto___26696 < len__4736__auto___26695)){
args__4742__auto__.push((arguments[i__4737__auto___26696]));

var G__26697 = (i__4737__auto___26696 + (1));
i__4737__auto___26696 = G__26697;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.call(null,(function() { 
var no$en$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.call(null,cljs.core.merge_with,no$en$core$m,maps__$1);
} else {
return cljs.core.apply.call(null,f,maps__$1);
}
};
var no$en$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__26698__i = 0, G__26698__a = new Array(arguments.length -  0);
while (G__26698__i < G__26698__a.length) {G__26698__a[G__26698__i] = arguments[G__26698__i + 0]; ++G__26698__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__26698__a,0,null);
} 
return no$en$core$m__delegate.call(this,maps__$1);};
no$en$core$m.cljs$lang$maxFixedArity = 0;
no$en$core$m.cljs$lang$applyTo = (function (arglist__26699){
var maps__$1 = cljs.core.seq(arglist__26699);
return no$en$core$m__delegate(maps__$1);
});
no$en$core$m.cljs$core$IFn$_invoke$arity$variadic = no$en$core$m__delegate;
return no$en$core$m;
})()
,maps);
}));

(no.en.core.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.deep_merge_with.cljs$lang$applyTo = (function (seq26693){
var G__26694 = cljs.core.first.call(null,seq26693);
var seq26693__$1 = cljs.core.next.call(null,seq26693);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26694,seq26693__$1);
}));


//# sourceMappingURL=core.js.map
