// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21353){
var state_val_21354 = (state_21353[(1)]);
if((state_val_21354 === (1))){
var inst_21338 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21339 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21340 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21341 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_21338,"text/plain; charset=utf-8"];
var inst_21342 = cljs.core.PersistentHashMap.fromArrays(inst_21340,inst_21341);
var inst_21343 = [false,inst_21342];
var inst_21344 = cljs.core.PersistentHashMap.fromArrays(inst_21339,inst_21343);
var inst_21345 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21344);
var state_21353__$1 = state_21353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21353__$1,(2),inst_21345);
} else {
if((state_val_21354 === (2))){
var inst_21347 = (state_21353[(2)]);
var inst_21348 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21347);
var inst_21349 = f.call(null,inst_21348);
var inst_21350 = cljs.core.vec.call(null,inst_21349);
var inst_21351 = cljs.core.reset_BANG_.call(null,w,inst_21350);
var state_21353__$1 = state_21353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21353__$1,inst_21351);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto____0 = (function (){
var statearr_21355 = [null,null,null,null,null,null,null];
(statearr_21355[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto__);

(statearr_21355[(1)] = (1));

return statearr_21355;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto____1 = (function (state_21353){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21356){var ex__13025__auto__ = e21356;
var statearr_21357_21360 = state_21353;
(statearr_21357_21360[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21353[(4)]))){
var statearr_21358_21361 = state_21353;
(statearr_21358_21361[(1)] = cljs.core.first.call(null,(state_21353[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21362 = state_21353;
state_21353 = G__21362;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto__ = function(state_21353){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto____1.call(this,state_21353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21359 = f__13096__auto__.call(null);
(statearr_21359[(6)] = c__13095__auto__);

return statearr_21359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});
/**
 * Schreibt den text in eine Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.write_text = (function dep$helpers$drop_file_stream$write_text(text,f_name){
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21374){
var state_val_21375 = (state_21374[(1)]);
if((state_val_21375 === (1))){
var inst_21363 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_21364 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_21365 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21366 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_21363,"application/octet-stream"];
var inst_21367 = cljs.core.PersistentHashMap.fromArrays(inst_21365,inst_21366);
var inst_21368 = [false,inst_21367,text];
var inst_21369 = cljs.core.PersistentHashMap.fromArrays(inst_21364,inst_21368);
var inst_21370 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_21369);
var state_21374__$1 = state_21374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21374__$1,(2),inst_21370);
} else {
if((state_val_21375 === (2))){
var inst_21372 = (state_21374[(2)]);
var state_21374__$1 = state_21374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21374__$1,inst_21372);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto__ = null;
var dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto____0 = (function (){
var statearr_21376 = [null,null,null,null,null,null,null];
(statearr_21376[(0)] = dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto__);

(statearr_21376[(1)] = (1));

return statearr_21376;
});
var dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto____1 = (function (state_21374){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21377){var ex__13025__auto__ = e21377;
var statearr_21378_21381 = state_21374;
(statearr_21378_21381[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21374[(4)]))){
var statearr_21379_21382 = state_21374;
(statearr_21379_21382[(1)] = cljs.core.first.call(null,(state_21374[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21383 = state_21374;
state_21374 = G__21383;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto__ = function(state_21374){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto____1.call(this,state_21374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto____0;
dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto____1;
return dep$helpers$drop_file_stream$write_text_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21380 = f__13096__auto__.call(null);
(statearr_21380[(6)] = c__13095__auto__);

return statearr_21380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});
/**
 * Liefert die Liste der Dateien im Basisverzeichnis.
 */
dep.helpers.drop_file_stream.list_folder = (function dep$helpers$drop_file_stream$list_folder(){
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21399){
var state_val_21400 = (state_21399[(1)]);
if((state_val_21400 === (1))){
var inst_21384 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_21385 = ["Authorization","Content-Type"];
var inst_21386 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-","application/json"];
var inst_21387 = cljs.core.PersistentHashMap.fromArrays(inst_21385,inst_21386);
var inst_21388 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_21389 = [""];
var inst_21390 = cljs.core.PersistentHashMap.fromArrays(inst_21388,inst_21389);
var inst_21391 = [false,inst_21387,inst_21390];
var inst_21392 = cljs.core.PersistentHashMap.fromArrays(inst_21384,inst_21391);
var inst_21393 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/list_folder",inst_21392);
var state_21399__$1 = state_21399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21399__$1,(2),inst_21393);
} else {
if((state_val_21400 === (2))){
var inst_21395 = (state_21399[(2)]);
var inst_21396 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21395);
var inst_21397 = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(inst_21396);
var state_21399__$1 = state_21399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21399__$1,inst_21397);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto__ = null;
var dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto____0 = (function (){
var statearr_21401 = [null,null,null,null,null,null,null];
(statearr_21401[(0)] = dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto__);

(statearr_21401[(1)] = (1));

return statearr_21401;
});
var dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto____1 = (function (state_21399){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21402){var ex__13025__auto__ = e21402;
var statearr_21403_21406 = state_21399;
(statearr_21403_21406[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21399[(4)]))){
var statearr_21404_21407 = state_21399;
(statearr_21404_21407[(1)] = cljs.core.first.call(null,(state_21399[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21408 = state_21399;
state_21399 = G__21408;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto__ = function(state_21399){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto____1.call(this,state_21399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto____0;
dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto____1;
return dep$helpers$drop_file_stream$list_folder_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21405 = f__13096__auto__.call(null);
(statearr_21405[(6)] = c__13095__auto__);

return statearr_21405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});
/**
 * Löscht die Datei mit dem Namen f-name aus dem Basisverzeichnis.
 */
dep.helpers.drop_file_stream.delete_file_named = (function dep$helpers$drop_file_stream$delete_file_named(f_name){
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21423){
var state_val_21424 = (state_21423[(1)]);
if((state_val_21424 === (1))){
var inst_21409 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_21410 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_21411 = ["Authorization"];
var inst_21412 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_21413 = cljs.core.PersistentHashMap.fromArrays(inst_21411,inst_21412);
var inst_21414 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_21415 = [inst_21409];
var inst_21416 = cljs.core.PersistentHashMap.fromArrays(inst_21414,inst_21415);
var inst_21417 = [false,inst_21413,inst_21416];
var inst_21418 = cljs.core.PersistentHashMap.fromArrays(inst_21410,inst_21417);
var inst_21419 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_21418);
var state_21423__$1 = state_21423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21423__$1,(2),inst_21419);
} else {
if((state_val_21424 === (2))){
var inst_21421 = (state_21423[(2)]);
var state_21423__$1 = state_21423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21423__$1,inst_21421);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto__ = null;
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto____0 = (function (){
var statearr_21425 = [null,null,null,null,null,null,null];
(statearr_21425[(0)] = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto__);

(statearr_21425[(1)] = (1));

return statearr_21425;
});
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto____1 = (function (state_21423){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21426){var ex__13025__auto__ = e21426;
var statearr_21427_21430 = state_21423;
(statearr_21427_21430[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21423[(4)]))){
var statearr_21428_21431 = state_21423;
(statearr_21428_21431[(1)] = cljs.core.first.call(null,(state_21423[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21432 = state_21423;
state_21423 = G__21432;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto__ = function(state_21423){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto____1.call(this,state_21423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto____0;
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto____1;
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21429 = f__13096__auto__.call(null);
(statearr_21429[(6)] = c__13095__auto__);

return statearr_21429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});
/**
 * Liefert den Inhalt der EDN-Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.read_edn_file = (function dep$helpers$drop_file_stream$read_edn_file(f_name){
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21446){
var state_val_21447 = (state_21446[(1)]);
if((state_val_21447 === (1))){
var inst_21433 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21434 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21435 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21436 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_21433,"text/plain; charset=utf-8"];
var inst_21437 = cljs.core.PersistentHashMap.fromArrays(inst_21435,inst_21436);
var inst_21438 = [false,inst_21437];
var inst_21439 = cljs.core.PersistentHashMap.fromArrays(inst_21434,inst_21438);
var inst_21440 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21439);
var state_21446__$1 = state_21446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21446__$1,(2),inst_21440);
} else {
if((state_val_21447 === (2))){
var inst_21442 = (state_21446[(2)]);
var inst_21443 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21442);
var inst_21444 = cljs.reader.read_string.call(null,inst_21443);
var state_21446__$1 = state_21446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21446__$1,inst_21444);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto__ = null;
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto____0 = (function (){
var statearr_21448 = [null,null,null,null,null,null,null];
(statearr_21448[(0)] = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto__);

(statearr_21448[(1)] = (1));

return statearr_21448;
});
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto____1 = (function (state_21446){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21449){var ex__13025__auto__ = e21449;
var statearr_21450_21453 = state_21446;
(statearr_21450_21453[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21446[(4)]))){
var statearr_21451_21454 = state_21446;
(statearr_21451_21454[(1)] = cljs.core.first.call(null,(state_21446[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21455 = state_21446;
state_21446 = G__21455;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto__ = function(state_21446){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto____1.call(this,state_21446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto____0;
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto____1;
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21452 = f__13096__auto__.call(null);
(statearr_21452[(6)] = c__13095__auto__);

return statearr_21452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});
/**
 * Benennt die Datei mit dem Namen f-name-old in f-name-new um.
 */
dep.helpers.drop_file_stream.rename_file = (function dep$helpers$drop_file_stream$rename_file(f_name_old,f_name_new){
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21471){
var state_val_21472 = (state_21471[(1)]);
if((state_val_21472 === (1))){
var inst_21456 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_old)].join('');
var inst_21457 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_new)].join('');
var inst_21458 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_21459 = ["Authorization"];
var inst_21460 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_21461 = cljs.core.PersistentHashMap.fromArrays(inst_21459,inst_21460);
var inst_21462 = [new cljs.core.Keyword(null,"from_path","from_path",-1479414992),new cljs.core.Keyword(null,"to_path","to_path",343919595)];
var inst_21463 = [inst_21456,inst_21457];
var inst_21464 = cljs.core.PersistentHashMap.fromArrays(inst_21462,inst_21463);
var inst_21465 = [false,inst_21461,inst_21464];
var inst_21466 = cljs.core.PersistentHashMap.fromArrays(inst_21458,inst_21465);
var inst_21467 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/move_v2",inst_21466);
var state_21471__$1 = state_21471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21471__$1,(2),inst_21467);
} else {
if((state_val_21472 === (2))){
var inst_21469 = (state_21471[(2)]);
var state_21471__$1 = state_21471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21471__$1,inst_21469);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto__ = null;
var dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto____0 = (function (){
var statearr_21473 = [null,null,null,null,null,null,null];
(statearr_21473[(0)] = dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto__);

(statearr_21473[(1)] = (1));

return statearr_21473;
});
var dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto____1 = (function (state_21471){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21474){var ex__13025__auto__ = e21474;
var statearr_21475_21478 = state_21471;
(statearr_21475_21478[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21471[(4)]))){
var statearr_21476_21479 = state_21471;
(statearr_21476_21479[(1)] = cljs.core.first.call(null,(state_21471[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21480 = state_21471;
state_21471 = G__21480;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto__ = function(state_21471){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto____1.call(this,state_21471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto____0;
dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto____1;
return dep$helpers$drop_file_stream$rename_file_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21477 = f__13096__auto__.call(null);
(statearr_21477[(6)] = c__13095__auto__);

return statearr_21477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
