// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_26386){
var state_val_26387 = (state_26386[(1)]);
if((state_val_26387 === (1))){
var inst_26371 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_26372 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$headers];
var inst_26373 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_26374 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_26371,"text/plain; charset=utf-8"];
var inst_26375 = cljs.core.PersistentHashMap.fromArrays(inst_26373,inst_26374);
var inst_26376 = [false,inst_26375];
var inst_26377 = cljs.core.PersistentHashMap.fromArrays(inst_26372,inst_26376);
var inst_26378 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://content.dropboxapi.com/2/files/download",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26377], 0));
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26386__$1,(2),inst_26378);
} else {
if((state_val_26387 === (2))){
var inst_26380 = (state_26386[(2)]);
var inst_26381 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_26380);
var inst_26382 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26381) : f.call(null,inst_26381));
var inst_26383 = cljs.core.vec(inst_26382);
var inst_26384 = cljs.core.reset_BANG_(w,inst_26383);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26386__$1,inst_26384);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto____0 = (function (){
var statearr_26388 = [null,null,null,null,null,null,null];
(statearr_26388[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto__);

(statearr_26388[(1)] = (1));

return statearr_26388;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto____1 = (function (state_26386){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_26386);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e26389){var ex__17035__auto__ = e26389;
var statearr_26390_26393 = state_26386;
(statearr_26390_26393[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_26386[(4)]))){
var statearr_26391_26394 = state_26386;
(statearr_26391_26394[(1)] = cljs.core.first((state_26386[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__26395 = state_26386;
state_26386 = G__26395;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto__ = function(state_26386){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto____1.call(this,state_26386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_26392 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_26392[(6)] = c__17106__auto__);

return statearr_26392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
/**
 * Schreibt den text in eine Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.write_text = (function dep$helpers$drop_file_stream$write_text(text,f_name){
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_26407){
var state_val_26408 = (state_26407[(1)]);
if((state_val_26408 === (1))){
var inst_26396 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_26397 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$headers,cljs.core.cst$kw$body];
var inst_26398 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_26399 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_26396,"application/octet-stream"];
var inst_26400 = cljs.core.PersistentHashMap.fromArrays(inst_26398,inst_26399);
var inst_26401 = [false,inst_26400,text];
var inst_26402 = cljs.core.PersistentHashMap.fromArrays(inst_26397,inst_26401);
var inst_26403 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://content.dropboxapi.com/2/files/upload",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26402], 0));
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26407__$1,(2),inst_26403);
} else {
if((state_val_26408 === (2))){
var inst_26405 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26407__$1,inst_26405);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto__ = null;
var dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto____0 = (function (){
var statearr_26409 = [null,null,null,null,null,null,null];
(statearr_26409[(0)] = dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto__);

(statearr_26409[(1)] = (1));

return statearr_26409;
});
var dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto____1 = (function (state_26407){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_26407);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e26410){var ex__17035__auto__ = e26410;
var statearr_26411_26414 = state_26407;
(statearr_26411_26414[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_26407[(4)]))){
var statearr_26412_26415 = state_26407;
(statearr_26412_26415[(1)] = cljs.core.first((state_26407[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__26416 = state_26407;
state_26407 = G__26416;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto__ = function(state_26407){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto____1.call(this,state_26407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto____0;
dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto____1;
return dep$helpers$drop_file_stream$write_text_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_26413 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_26413[(6)] = c__17106__auto__);

return statearr_26413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
/**
 * Liefert die Liste der Dateien im Basisverzeichnis.
 */
dep.helpers.drop_file_stream.list_folder = (function dep$helpers$drop_file_stream$list_folder(){
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_26432){
var state_val_26433 = (state_26432[(1)]);
if((state_val_26433 === (1))){
var inst_26417 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$headers,cljs.core.cst$kw$json_DASH_params];
var inst_26418 = ["Authorization","Content-Type"];
var inst_26419 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-","application/json"];
var inst_26420 = cljs.core.PersistentHashMap.fromArrays(inst_26418,inst_26419);
var inst_26421 = [cljs.core.cst$kw$path];
var inst_26422 = [""];
var inst_26423 = cljs.core.PersistentHashMap.fromArrays(inst_26421,inst_26422);
var inst_26424 = [false,inst_26420,inst_26423];
var inst_26425 = cljs.core.PersistentHashMap.fromArrays(inst_26417,inst_26424);
var inst_26426 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://api.dropboxapi.com/2/files/list_folder",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26425], 0));
var state_26432__$1 = state_26432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26432__$1,(2),inst_26426);
} else {
if((state_val_26433 === (2))){
var inst_26428 = (state_26432[(2)]);
var inst_26429 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_26428);
var inst_26430 = cljs.core.cst$kw$entries.cljs$core$IFn$_invoke$arity$1(inst_26429);
var state_26432__$1 = state_26432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26432__$1,inst_26430);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto__ = null;
var dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto____0 = (function (){
var statearr_26434 = [null,null,null,null,null,null,null];
(statearr_26434[(0)] = dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto__);

(statearr_26434[(1)] = (1));

return statearr_26434;
});
var dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto____1 = (function (state_26432){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_26432);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e26435){var ex__17035__auto__ = e26435;
var statearr_26436_26439 = state_26432;
(statearr_26436_26439[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_26432[(4)]))){
var statearr_26437_26440 = state_26432;
(statearr_26437_26440[(1)] = cljs.core.first((state_26432[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__26441 = state_26432;
state_26432 = G__26441;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto__ = function(state_26432){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto____1.call(this,state_26432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto____0;
dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto____1;
return dep$helpers$drop_file_stream$list_folder_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_26438 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_26438[(6)] = c__17106__auto__);

return statearr_26438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
/**
 * Löscht die Datei mit dem Namen f-name aus dem Basisverzeichnis.
 */
dep.helpers.drop_file_stream.delete_file_named = (function dep$helpers$drop_file_stream$delete_file_named(f_name){
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_26456){
var state_val_26457 = (state_26456[(1)]);
if((state_val_26457 === (1))){
var inst_26442 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_26443 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$headers,cljs.core.cst$kw$json_DASH_params];
var inst_26444 = ["Authorization"];
var inst_26445 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_26446 = cljs.core.PersistentHashMap.fromArrays(inst_26444,inst_26445);
var inst_26447 = [cljs.core.cst$kw$path];
var inst_26448 = [inst_26442];
var inst_26449 = cljs.core.PersistentHashMap.fromArrays(inst_26447,inst_26448);
var inst_26450 = [false,inst_26446,inst_26449];
var inst_26451 = cljs.core.PersistentHashMap.fromArrays(inst_26443,inst_26450);
var inst_26452 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://api.dropboxapi.com/2/files/delete_v2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26451], 0));
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26456__$1,(2),inst_26452);
} else {
if((state_val_26457 === (2))){
var inst_26454 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26456__$1,inst_26454);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto__ = null;
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto____0 = (function (){
var statearr_26458 = [null,null,null,null,null,null,null];
(statearr_26458[(0)] = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto__);

(statearr_26458[(1)] = (1));

return statearr_26458;
});
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto____1 = (function (state_26456){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_26456);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e26459){var ex__17035__auto__ = e26459;
var statearr_26460_26463 = state_26456;
(statearr_26460_26463[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_26456[(4)]))){
var statearr_26461_26464 = state_26456;
(statearr_26461_26464[(1)] = cljs.core.first((state_26456[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__26465 = state_26456;
state_26456 = G__26465;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto__ = function(state_26456){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto____1.call(this,state_26456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto____0;
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto____1;
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_26462 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_26462[(6)] = c__17106__auto__);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
/**
 * Liefert den Inhalt der EDN-Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.read_edn_file = (function dep$helpers$drop_file_stream$read_edn_file(f_name){
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_26479){
var state_val_26480 = (state_26479[(1)]);
if((state_val_26480 === (1))){
var inst_26466 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_26467 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$headers];
var inst_26468 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_26469 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_26466,"text/plain; charset=utf-8"];
var inst_26470 = cljs.core.PersistentHashMap.fromArrays(inst_26468,inst_26469);
var inst_26471 = [false,inst_26470];
var inst_26472 = cljs.core.PersistentHashMap.fromArrays(inst_26467,inst_26471);
var inst_26473 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://content.dropboxapi.com/2/files/download",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26472], 0));
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26479__$1,(2),inst_26473);
} else {
if((state_val_26480 === (2))){
var inst_26475 = (state_26479[(2)]);
var inst_26476 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_26475);
var inst_26477 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_26476);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26479__$1,inst_26477);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto__ = null;
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto____0 = (function (){
var statearr_26481 = [null,null,null,null,null,null,null];
(statearr_26481[(0)] = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto__);

(statearr_26481[(1)] = (1));

return statearr_26481;
});
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto____1 = (function (state_26479){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_26479);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e26482){var ex__17035__auto__ = e26482;
var statearr_26483_26486 = state_26479;
(statearr_26483_26486[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_26479[(4)]))){
var statearr_26484_26487 = state_26479;
(statearr_26484_26487[(1)] = cljs.core.first((state_26479[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__26488 = state_26479;
state_26479 = G__26488;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto__ = function(state_26479){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto____1.call(this,state_26479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto____0;
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto____1;
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_26485 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_26485[(6)] = c__17106__auto__);

return statearr_26485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
/**
 * Benennt die Datei mit dem Namen f-name-old in f-name-new um.
 */
dep.helpers.drop_file_stream.rename_file = (function dep$helpers$drop_file_stream$rename_file(f_name_old,f_name_new){
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_26504){
var state_val_26505 = (state_26504[(1)]);
if((state_val_26505 === (1))){
var inst_26489 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_old)].join('');
var inst_26490 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_new)].join('');
var inst_26491 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$headers,cljs.core.cst$kw$json_DASH_params];
var inst_26492 = ["Authorization"];
var inst_26493 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_26494 = cljs.core.PersistentHashMap.fromArrays(inst_26492,inst_26493);
var inst_26495 = [cljs.core.cst$kw$from_path,cljs.core.cst$kw$to_path];
var inst_26496 = [inst_26489,inst_26490];
var inst_26497 = cljs.core.PersistentHashMap.fromArrays(inst_26495,inst_26496);
var inst_26498 = [false,inst_26494,inst_26497];
var inst_26499 = cljs.core.PersistentHashMap.fromArrays(inst_26491,inst_26498);
var inst_26500 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("https://api.dropboxapi.com/2/files/move_v2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26499], 0));
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26504__$1,(2),inst_26500);
} else {
if((state_val_26505 === (2))){
var inst_26502 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26504__$1,inst_26502);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto__ = null;
var dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto____0 = (function (){
var statearr_26506 = [null,null,null,null,null,null,null];
(statearr_26506[(0)] = dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto__);

(statearr_26506[(1)] = (1));

return statearr_26506;
});
var dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto____1 = (function (state_26504){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_26504);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e26507){var ex__17035__auto__ = e26507;
var statearr_26508_26511 = state_26504;
(statearr_26508_26511[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_26504[(4)]))){
var statearr_26509_26512 = state_26504;
(statearr_26509_26512[(1)] = cljs.core.first((state_26504[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__26513 = state_26504;
state_26504 = G__26513;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto__ = function(state_26504){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto____1.call(this,state_26504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto____0;
dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto____1;
return dep$helpers$drop_file_stream$rename_file_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_26510 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_26510[(6)] = c__17106__auto__);

return statearr_26510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
