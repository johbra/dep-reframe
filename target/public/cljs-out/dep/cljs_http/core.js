// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__19118 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__19118.cljs$core$IFn$_invoke$arity$1 ? fexpr__19118.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__19118.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19119){
var vec__19120 = p__19119;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19123 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__19123)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__19123)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__19123)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__19123)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__19123)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__19123)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19123)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19124){
var map__19125 = p__19124;
var map__19125__$1 = (((((!((map__19125 == null))))?(((((map__19125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19125):map__19125);
var request = map__19125__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19125__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19125__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19125__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19127 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__19127,default_headers);

cljs_http.core.apply_response_type_BANG_(G__19127,response_type);

G__19127.setTimeoutInterval(timeout);

G__19127.setWithCredentials(send_credentials);

return G__19127;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19128){
var map__19129 = p__19128;
var map__19129__$1 = (((((!((map__19129 == null))))?(((((map__19129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19129):map__19129);
var request = map__19129__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__19131 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__19131) : cljs_http.core.error_kw.call(null,G__19131));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_19155 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__19132_19156 = xhr;
G__19132_19156.setProgressEventsEnabled(true);

G__19132_19156.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19155,cljs.core.cst$kw$upload));

G__19132_19156.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19155,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__17106__auto___19157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_19143){
var state_val_19144 = (state_19143[(1)]);
if((state_val_19144 === (1))){
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19143__$1,(2),cancel);
} else {
if((state_val_19144 === (2))){
var inst_19134 = (state_19143[(2)]);
var inst_19135 = xhr.isComplete();
var inst_19136 = cljs.core.not(inst_19135);
var state_19143__$1 = (function (){var statearr_19145 = state_19143;
(statearr_19145[(7)] = inst_19134);

return statearr_19145;
})();
if(inst_19136){
var statearr_19146_19158 = state_19143__$1;
(statearr_19146_19158[(1)] = (3));

} else {
var statearr_19147_19159 = state_19143__$1;
(statearr_19147_19159[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19144 === (3))){
var inst_19138 = xhr.abort();
var state_19143__$1 = state_19143;
var statearr_19148_19160 = state_19143__$1;
(statearr_19148_19160[(2)] = inst_19138);

(statearr_19148_19160[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19144 === (4))){
var state_19143__$1 = state_19143;
var statearr_19149_19161 = state_19143__$1;
(statearr_19149_19161[(2)] = null);

(statearr_19149_19161[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19144 === (5))){
var inst_19141 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19143__$1,inst_19141);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__17032__auto__ = null;
var cljs_http$core$xhr_$_state_machine__17032__auto____0 = (function (){
var statearr_19150 = [null,null,null,null,null,null,null,null];
(statearr_19150[(0)] = cljs_http$core$xhr_$_state_machine__17032__auto__);

(statearr_19150[(1)] = (1));

return statearr_19150;
});
var cljs_http$core$xhr_$_state_machine__17032__auto____1 = (function (state_19143){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_19143);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e19151){var ex__17035__auto__ = e19151;
var statearr_19152_19162 = state_19143;
(statearr_19152_19162[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_19143[(4)]))){
var statearr_19153_19163 = state_19143;
(statearr_19153_19163[(1)] = cljs.core.first((state_19143[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__19164 = state_19143;
state_19143 = G__19164;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__17032__auto__ = function(state_19143){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__17032__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__17032__auto____1.call(this,state_19143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__17032__auto____0;
cljs_http$core$xhr_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__17032__auto____1;
return cljs_http$core$xhr_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_19154 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_19154[(6)] = c__17106__auto___19157);

return statearr_19154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19165){
var map__19166 = p__19165;
var map__19166__$1 = (((((!((map__19166 == null))))?(((((map__19166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19166):map__19166);
var request = map__19166__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19166__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19166__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_19180 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_19180], null));

if(cljs.core.truth_(cancel)){
var c__17106__auto___19181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_19172){
var state_val_19173 = (state_19172[(1)]);
if((state_val_19173 === (1))){
var state_19172__$1 = state_19172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19172__$1,(2),cancel);
} else {
if((state_val_19173 === (2))){
var inst_19169 = (state_19172[(2)]);
var inst_19170 = jsonp.cancel(req_19180);
var state_19172__$1 = (function (){var statearr_19174 = state_19172;
(statearr_19174[(7)] = inst_19169);

return statearr_19174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19172__$1,inst_19170);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__17032__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__17032__auto____0 = (function (){
var statearr_19175 = [null,null,null,null,null,null,null,null];
(statearr_19175[(0)] = cljs_http$core$jsonp_$_state_machine__17032__auto__);

(statearr_19175[(1)] = (1));

return statearr_19175;
});
var cljs_http$core$jsonp_$_state_machine__17032__auto____1 = (function (state_19172){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_19172);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e19176){var ex__17035__auto__ = e19176;
var statearr_19177_19182 = state_19172;
(statearr_19177_19182[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_19172[(4)]))){
var statearr_19178_19183 = state_19172;
(statearr_19178_19183[(1)] = cljs.core.first((state_19172[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__19184 = state_19172;
state_19172 = G__19184;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__17032__auto__ = function(state_19172){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__17032__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__17032__auto____1.call(this,state_19172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__17032__auto____0;
cljs_http$core$jsonp_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__17032__auto____1;
return cljs_http$core$jsonp_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_19179 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_19179[(6)] = c__17106__auto___19181);

return statearr_19179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19185){
var map__19186 = p__19185;
var map__19186__$1 = (((((!((map__19186 == null))))?(((((map__19186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19186):map__19186);
var request = map__19186__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
