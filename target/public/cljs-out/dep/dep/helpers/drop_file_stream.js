// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_32029){
var state_val_32030 = (state_32029[(1)]);
if((state_val_32030 === (1))){
var inst_32014 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_32015 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_32016 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_32017 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_32014,"text/plain; charset=utf-8"];
var inst_32018 = cljs.core.PersistentHashMap.fromArrays(inst_32016,inst_32017);
var inst_32019 = [false,inst_32018];
var inst_32020 = cljs.core.PersistentHashMap.fromArrays(inst_32015,inst_32019);
var inst_32021 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_32020);
var state_32029__$1 = state_32029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32029__$1,(2),inst_32021);
} else {
if((state_val_32030 === (2))){
var inst_32023 = (state_32029[(2)]);
var inst_32024 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32023);
var inst_32025 = f.call(null,inst_32024);
var inst_32026 = cljs.core.vec.call(null,inst_32025);
var inst_32027 = cljs.core.reset_BANG_.call(null,w,inst_32026);
var state_32029__$1 = state_32029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32029__$1,inst_32027);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto____0 = (function (){
var statearr_32031 = [null,null,null,null,null,null,null];
(statearr_32031[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto__);

(statearr_32031[(1)] = (1));

return statearr_32031;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto____1 = (function (state_32029){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_32029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e32032){var ex__24057__auto__ = e32032;
var statearr_32033_32036 = state_32029;
(statearr_32033_32036[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_32029[(4)]))){
var statearr_32034_32037 = state_32029;
(statearr_32034_32037[(1)] = cljs.core.first.call(null,(state_32029[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32038 = state_32029;
state_32029 = G__32038;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto__ = function(state_32029){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto____1.call(this,state_32029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_32035 = f__24128__auto__.call(null);
(statearr_32035[(6)] = c__24127__auto__);

return statearr_32035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * Schreibt den text in eine Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.write_text = (function dep$helpers$drop_file_stream$write_text(text,f_name){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_32050){
var state_val_32051 = (state_32050[(1)]);
if((state_val_32051 === (1))){
var inst_32039 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_32040 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_32041 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_32042 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_32039,"application/octet-stream"];
var inst_32043 = cljs.core.PersistentHashMap.fromArrays(inst_32041,inst_32042);
var inst_32044 = [false,inst_32043,text];
var inst_32045 = cljs.core.PersistentHashMap.fromArrays(inst_32040,inst_32044);
var inst_32046 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_32045);
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32050__$1,(2),inst_32046);
} else {
if((state_val_32051 === (2))){
var inst_32048 = (state_32050[(2)]);
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32050__$1,inst_32048);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto__ = null;
var dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto____0 = (function (){
var statearr_32052 = [null,null,null,null,null,null,null];
(statearr_32052[(0)] = dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto__);

(statearr_32052[(1)] = (1));

return statearr_32052;
});
var dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto____1 = (function (state_32050){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_32050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e32053){var ex__24057__auto__ = e32053;
var statearr_32054_32057 = state_32050;
(statearr_32054_32057[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_32050[(4)]))){
var statearr_32055_32058 = state_32050;
(statearr_32055_32058[(1)] = cljs.core.first.call(null,(state_32050[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32059 = state_32050;
state_32050 = G__32059;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto__ = function(state_32050){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto____1.call(this,state_32050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto____0;
dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto____1;
return dep$helpers$drop_file_stream$write_text_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_32056 = f__24128__auto__.call(null);
(statearr_32056[(6)] = c__24127__auto__);

return statearr_32056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * Liefert die Liste der Dateien im Basisverzeichnis.
 */
dep.helpers.drop_file_stream.list_folder = (function dep$helpers$drop_file_stream$list_folder(){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_32075){
var state_val_32076 = (state_32075[(1)]);
if((state_val_32076 === (1))){
var inst_32060 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_32061 = ["Authorization","Content-Type"];
var inst_32062 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-","application/json"];
var inst_32063 = cljs.core.PersistentHashMap.fromArrays(inst_32061,inst_32062);
var inst_32064 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_32065 = [""];
var inst_32066 = cljs.core.PersistentHashMap.fromArrays(inst_32064,inst_32065);
var inst_32067 = [false,inst_32063,inst_32066];
var inst_32068 = cljs.core.PersistentHashMap.fromArrays(inst_32060,inst_32067);
var inst_32069 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/list_folder",inst_32068);
var state_32075__$1 = state_32075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32075__$1,(2),inst_32069);
} else {
if((state_val_32076 === (2))){
var inst_32071 = (state_32075[(2)]);
var inst_32072 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32071);
var inst_32073 = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(inst_32072);
var state_32075__$1 = state_32075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32075__$1,inst_32073);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto__ = null;
var dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto____0 = (function (){
var statearr_32077 = [null,null,null,null,null,null,null];
(statearr_32077[(0)] = dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto__);

(statearr_32077[(1)] = (1));

return statearr_32077;
});
var dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto____1 = (function (state_32075){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_32075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e32078){var ex__24057__auto__ = e32078;
var statearr_32079_32082 = state_32075;
(statearr_32079_32082[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_32075[(4)]))){
var statearr_32080_32083 = state_32075;
(statearr_32080_32083[(1)] = cljs.core.first.call(null,(state_32075[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32084 = state_32075;
state_32075 = G__32084;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto__ = function(state_32075){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto____1.call(this,state_32075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto____0;
dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto____1;
return dep$helpers$drop_file_stream$list_folder_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_32081 = f__24128__auto__.call(null);
(statearr_32081[(6)] = c__24127__auto__);

return statearr_32081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * Löscht die Datei mit dem Namen f-name aus dem Basisverzeichnis.
 */
dep.helpers.drop_file_stream.delete_file_named = (function dep$helpers$drop_file_stream$delete_file_named(f_name){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_32099){
var state_val_32100 = (state_32099[(1)]);
if((state_val_32100 === (1))){
var inst_32085 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_32086 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_32087 = ["Authorization"];
var inst_32088 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_32089 = cljs.core.PersistentHashMap.fromArrays(inst_32087,inst_32088);
var inst_32090 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_32091 = [inst_32085];
var inst_32092 = cljs.core.PersistentHashMap.fromArrays(inst_32090,inst_32091);
var inst_32093 = [false,inst_32089,inst_32092];
var inst_32094 = cljs.core.PersistentHashMap.fromArrays(inst_32086,inst_32093);
var inst_32095 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_32094);
var state_32099__$1 = state_32099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32099__$1,(2),inst_32095);
} else {
if((state_val_32100 === (2))){
var inst_32097 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32099__$1,inst_32097);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto__ = null;
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto____0 = (function (){
var statearr_32101 = [null,null,null,null,null,null,null];
(statearr_32101[(0)] = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto__);

(statearr_32101[(1)] = (1));

return statearr_32101;
});
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto____1 = (function (state_32099){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_32099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e32102){var ex__24057__auto__ = e32102;
var statearr_32103_32106 = state_32099;
(statearr_32103_32106[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_32099[(4)]))){
var statearr_32104_32107 = state_32099;
(statearr_32104_32107[(1)] = cljs.core.first.call(null,(state_32099[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32108 = state_32099;
state_32099 = G__32108;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto__ = function(state_32099){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto____1.call(this,state_32099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto____0;
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto____1;
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_32105 = f__24128__auto__.call(null);
(statearr_32105[(6)] = c__24127__auto__);

return statearr_32105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * Liefert den Inhalt der EDN-Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.read_edn_file = (function dep$helpers$drop_file_stream$read_edn_file(f_name){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_32122){
var state_val_32123 = (state_32122[(1)]);
if((state_val_32123 === (1))){
var inst_32109 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_32110 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_32111 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_32112 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_32109,"text/plain; charset=utf-8"];
var inst_32113 = cljs.core.PersistentHashMap.fromArrays(inst_32111,inst_32112);
var inst_32114 = [false,inst_32113];
var inst_32115 = cljs.core.PersistentHashMap.fromArrays(inst_32110,inst_32114);
var inst_32116 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_32115);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32122__$1,(2),inst_32116);
} else {
if((state_val_32123 === (2))){
var inst_32118 = (state_32122[(2)]);
var inst_32119 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32118);
var inst_32120 = cljs.reader.read_string.call(null,inst_32119);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32122__$1,inst_32120);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto__ = null;
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto____0 = (function (){
var statearr_32124 = [null,null,null,null,null,null,null];
(statearr_32124[(0)] = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto__);

(statearr_32124[(1)] = (1));

return statearr_32124;
});
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto____1 = (function (state_32122){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_32122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e32125){var ex__24057__auto__ = e32125;
var statearr_32126_32129 = state_32122;
(statearr_32126_32129[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_32122[(4)]))){
var statearr_32127_32130 = state_32122;
(statearr_32127_32130[(1)] = cljs.core.first.call(null,(state_32122[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32131 = state_32122;
state_32122 = G__32131;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto__ = function(state_32122){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto____1.call(this,state_32122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto____0;
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto____1;
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_32128 = f__24128__auto__.call(null);
(statearr_32128[(6)] = c__24127__auto__);

return statearr_32128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * Benennt die Datei mit dem Namen f-name-old in f-name-new um.
 */
dep.helpers.drop_file_stream.rename_file = (function dep$helpers$drop_file_stream$rename_file(f_name_old,f_name_new){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_32147){
var state_val_32148 = (state_32147[(1)]);
if((state_val_32148 === (1))){
var inst_32132 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_old)].join('');
var inst_32133 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_new)].join('');
var inst_32134 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_32135 = ["Authorization"];
var inst_32136 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_32137 = cljs.core.PersistentHashMap.fromArrays(inst_32135,inst_32136);
var inst_32138 = [new cljs.core.Keyword(null,"from_path","from_path",-1479414992),new cljs.core.Keyword(null,"to_path","to_path",343919595)];
var inst_32139 = [inst_32132,inst_32133];
var inst_32140 = cljs.core.PersistentHashMap.fromArrays(inst_32138,inst_32139);
var inst_32141 = [false,inst_32137,inst_32140];
var inst_32142 = cljs.core.PersistentHashMap.fromArrays(inst_32134,inst_32141);
var inst_32143 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/move_v2",inst_32142);
var state_32147__$1 = state_32147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32147__$1,(2),inst_32143);
} else {
if((state_val_32148 === (2))){
var inst_32145 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32147__$1,inst_32145);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto__ = null;
var dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto____0 = (function (){
var statearr_32149 = [null,null,null,null,null,null,null];
(statearr_32149[(0)] = dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto__);

(statearr_32149[(1)] = (1));

return statearr_32149;
});
var dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto____1 = (function (state_32147){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_32147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e32150){var ex__24057__auto__ = e32150;
var statearr_32151_32154 = state_32147;
(statearr_32151_32154[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_32147[(4)]))){
var statearr_32152_32155 = state_32147;
(statearr_32152_32155[(1)] = cljs.core.first.call(null,(state_32147[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32156 = state_32147;
state_32147 = G__32156;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto__ = function(state_32147){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto____1.call(this,state_32147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto____0;
dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto____1;
return dep$helpers$drop_file_stream$rename_file_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_32153 = f__24128__auto__.call(null);
(statearr_32153[(6)] = c__24127__auto__);

return statearr_32153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
