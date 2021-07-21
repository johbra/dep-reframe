// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__31040 = e.target.readyState;
var fexpr__31039 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__31039.cljs$core$IFn$_invoke$arity$1 ? fexpr__31039.cljs$core$IFn$_invoke$arity$1(G__31040) : fexpr__31039.call(null,G__31040));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31042,handler){
var map__31043 = p__31042;
var map__31043__$1 = cljs.core.__destructure_map(map__31043);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31043__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31043__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31043__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31043__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31043__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31043__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31043__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__31041_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__31041_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___31060 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___31060)){
var response_type_31061 = temp__5753__auto___31060;
(this$__$1.responseType = cljs.core.name(response_type_31061));
} else {
}

var seq__31044_31062 = cljs.core.seq(headers);
var chunk__31045_31063 = null;
var count__31046_31064 = (0);
var i__31047_31065 = (0);
while(true){
if((i__31047_31065 < count__31046_31064)){
var vec__31054_31066 = chunk__31045_31063.cljs$core$IIndexed$_nth$arity$2(null,i__31047_31065);
var k_31067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31054_31066,(0),null);
var v_31068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31054_31066,(1),null);
this$__$1.setRequestHeader(k_31067,v_31068);


var G__31069 = seq__31044_31062;
var G__31070 = chunk__31045_31063;
var G__31071 = count__31046_31064;
var G__31072 = (i__31047_31065 + (1));
seq__31044_31062 = G__31069;
chunk__31045_31063 = G__31070;
count__31046_31064 = G__31071;
i__31047_31065 = G__31072;
continue;
} else {
var temp__5753__auto___31073 = cljs.core.seq(seq__31044_31062);
if(temp__5753__auto___31073){
var seq__31044_31074__$1 = temp__5753__auto___31073;
if(cljs.core.chunked_seq_QMARK_(seq__31044_31074__$1)){
var c__4591__auto___31075 = cljs.core.chunk_first(seq__31044_31074__$1);
var G__31076 = cljs.core.chunk_rest(seq__31044_31074__$1);
var G__31077 = c__4591__auto___31075;
var G__31078 = cljs.core.count(c__4591__auto___31075);
var G__31079 = (0);
seq__31044_31062 = G__31076;
chunk__31045_31063 = G__31077;
count__31046_31064 = G__31078;
i__31047_31065 = G__31079;
continue;
} else {
var vec__31057_31080 = cljs.core.first(seq__31044_31074__$1);
var k_31081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31057_31080,(0),null);
var v_31082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31057_31080,(1),null);
this$__$1.setRequestHeader(k_31081,v_31082);


var G__31083 = cljs.core.next(seq__31044_31074__$1);
var G__31084 = null;
var G__31085 = (0);
var G__31086 = (0);
seq__31044_31062 = G__31083;
chunk__31045_31063 = G__31084;
count__31046_31064 = G__31085;
i__31047_31065 = G__31086;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4160__auto__ = body;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
