// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__31746){
var vec__31747 = p__31746;
var k = cljs.core.nth.call(null,vec__31747,(0),null);
var v = cljs.core.nth.call(null,vec__31747,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__31750 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__31750)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__31750)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__31750)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__31750)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__31750)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__31750)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31750)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__31751){
var map__31752 = p__31751;
var map__31752__$1 = (((((!((map__31752 == null))))?(((((map__31752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31752):map__31752);
var request = map__31752__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__31754 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__31754,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__31754,response_type);

G__31754.setTimeoutInterval(timeout);

G__31754.setWithCredentials(send_credentials);

return G__31754;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__31755){
var map__31756 = p__31755;
var map__31756__$1 = (((((!((map__31756 == null))))?(((((map__31756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31756):map__31756);
var request = map__31756__$1;
var request_method = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_31781 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__31758_31782 = xhr;
G__31758_31782.setProgressEventsEnabled(true);

G__31758_31782.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_31781,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__31758_31782.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_31781,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__24127__auto___31783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_31769){
var state_val_31770 = (state_31769[(1)]);
if((state_val_31770 === (1))){
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31769__$1,(2),cancel);
} else {
if((state_val_31770 === (2))){
var inst_31760 = (state_31769[(2)]);
var inst_31761 = xhr.isComplete();
var inst_31762 = cljs.core.not.call(null,inst_31761);
var state_31769__$1 = (function (){var statearr_31771 = state_31769;
(statearr_31771[(7)] = inst_31760);

return statearr_31771;
})();
if(inst_31762){
var statearr_31772_31784 = state_31769__$1;
(statearr_31772_31784[(1)] = (3));

} else {
var statearr_31773_31785 = state_31769__$1;
(statearr_31773_31785[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (3))){
var inst_31764 = xhr.abort();
var state_31769__$1 = state_31769;
var statearr_31774_31786 = state_31769__$1;
(statearr_31774_31786[(2)] = inst_31764);

(statearr_31774_31786[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (4))){
var state_31769__$1 = state_31769;
var statearr_31775_31787 = state_31769__$1;
(statearr_31775_31787[(2)] = null);

(statearr_31775_31787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (5))){
var inst_31767 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31769__$1,inst_31767);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__24054__auto__ = null;
var cljs_http$core$xhr_$_state_machine__24054__auto____0 = (function (){
var statearr_31776 = [null,null,null,null,null,null,null,null];
(statearr_31776[(0)] = cljs_http$core$xhr_$_state_machine__24054__auto__);

(statearr_31776[(1)] = (1));

return statearr_31776;
});
var cljs_http$core$xhr_$_state_machine__24054__auto____1 = (function (state_31769){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_31769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e31777){var ex__24057__auto__ = e31777;
var statearr_31778_31788 = state_31769;
(statearr_31778_31788[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_31769[(4)]))){
var statearr_31779_31789 = state_31769;
(statearr_31779_31789[(1)] = cljs.core.first.call(null,(state_31769[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31790 = state_31769;
state_31769 = G__31790;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__24054__auto__ = function(state_31769){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__24054__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__24054__auto____1.call(this,state_31769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__24054__auto____0;
cljs_http$core$xhr_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__24054__auto____1;
return cljs_http$core$xhr_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_31780 = f__24128__auto__.call(null);
(statearr_31780[(6)] = c__24127__auto___31783);

return statearr_31780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__31791){
var map__31792 = p__31791;
var map__31792__$1 = (((((!((map__31792 == null))))?(((((map__31792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31792):map__31792);
var request = map__31792__$1;
var timeout = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_31806 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_31806], null));

if(cljs.core.truth_(cancel)){
var c__24127__auto___31807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_31798){
var state_val_31799 = (state_31798[(1)]);
if((state_val_31799 === (1))){
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31798__$1,(2),cancel);
} else {
if((state_val_31799 === (2))){
var inst_31795 = (state_31798[(2)]);
var inst_31796 = jsonp.cancel(req_31806);
var state_31798__$1 = (function (){var statearr_31800 = state_31798;
(statearr_31800[(7)] = inst_31795);

return statearr_31800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31798__$1,inst_31796);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__24054__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__24054__auto____0 = (function (){
var statearr_31801 = [null,null,null,null,null,null,null,null];
(statearr_31801[(0)] = cljs_http$core$jsonp_$_state_machine__24054__auto__);

(statearr_31801[(1)] = (1));

return statearr_31801;
});
var cljs_http$core$jsonp_$_state_machine__24054__auto____1 = (function (state_31798){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_31798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e31802){var ex__24057__auto__ = e31802;
var statearr_31803_31808 = state_31798;
(statearr_31803_31808[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_31798[(4)]))){
var statearr_31804_31809 = state_31798;
(statearr_31804_31809[(1)] = cljs.core.first.call(null,(state_31798[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31810 = state_31798;
state_31798 = G__31810;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__24054__auto__ = function(state_31798){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__24054__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__24054__auto____1.call(this,state_31798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__24054__auto____0;
cljs_http$core$jsonp_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__24054__auto____1;
return cljs_http$core$jsonp_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_31805 = f__24128__auto__.call(null);
(statearr_31805[(6)] = c__24127__auto___31807);

return statearr_31805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__31811){
var map__31812 = p__31811;
var map__31812__$1 = (((((!((map__31812 == null))))?(((((map__31812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31812):map__31812);
var request = map__31812__$1;
var request_method = cljs.core.get.call(null,map__31812__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
