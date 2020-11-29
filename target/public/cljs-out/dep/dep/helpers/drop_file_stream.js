// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27126){
var state_val_27127 = (state_27126[(1)]);
if((state_val_27127 === (1))){
var inst_27111 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_27112 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_27113 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_27114 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_27111,"text/plain; charset=utf-8"];
var inst_27115 = cljs.core.PersistentHashMap.fromArrays(inst_27113,inst_27114);
var inst_27116 = [false,inst_27115];
var inst_27117 = cljs.core.PersistentHashMap.fromArrays(inst_27112,inst_27116);
var inst_27118 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_27117);
var state_27126__$1 = state_27126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27126__$1,(2),inst_27118);
} else {
if((state_val_27127 === (2))){
var inst_27120 = (state_27126[(2)]);
var inst_27121 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27120);
var inst_27122 = f.call(null,inst_27121);
var inst_27123 = cljs.core.vec.call(null,inst_27122);
var inst_27124 = cljs.core.reset_BANG_.call(null,w,inst_27123);
var state_27126__$1 = state_27126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27126__$1,inst_27124);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto____0 = (function (){
var statearr_27128 = [null,null,null,null,null,null,null];
(statearr_27128[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto__);

(statearr_27128[(1)] = (1));

return statearr_27128;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto____1 = (function (state_27126){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27129){var ex__18798__auto__ = e27129;
var statearr_27130_27133 = state_27126;
(statearr_27130_27133[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27126[(4)]))){
var statearr_27131_27134 = state_27126;
(statearr_27131_27134[(1)] = cljs.core.first.call(null,(state_27126[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27135 = state_27126;
state_27126 = G__27135;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto__ = function(state_27126){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto____1.call(this,state_27126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27132 = f__18869__auto__.call(null);
(statearr_27132[(6)] = c__18868__auto__);

return statearr_27132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
/**
 * Schreibt den text in eine Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.write_text = (function dep$helpers$drop_file_stream$write_text(text,f_name){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27147){
var state_val_27148 = (state_27147[(1)]);
if((state_val_27148 === (1))){
var inst_27136 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_27137 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_27138 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_27139 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_27136,"application/octet-stream"];
var inst_27140 = cljs.core.PersistentHashMap.fromArrays(inst_27138,inst_27139);
var inst_27141 = [false,inst_27140,text];
var inst_27142 = cljs.core.PersistentHashMap.fromArrays(inst_27137,inst_27141);
var inst_27143 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_27142);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27147__$1,(2),inst_27143);
} else {
if((state_val_27148 === (2))){
var inst_27145 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27147__$1,inst_27145);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto__ = null;
var dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto____0 = (function (){
var statearr_27149 = [null,null,null,null,null,null,null];
(statearr_27149[(0)] = dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto__);

(statearr_27149[(1)] = (1));

return statearr_27149;
});
var dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto____1 = (function (state_27147){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27150){var ex__18798__auto__ = e27150;
var statearr_27151_27154 = state_27147;
(statearr_27151_27154[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27147[(4)]))){
var statearr_27152_27155 = state_27147;
(statearr_27152_27155[(1)] = cljs.core.first.call(null,(state_27147[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27156 = state_27147;
state_27147 = G__27156;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto__ = function(state_27147){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto____1.call(this,state_27147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto____0;
dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto____1;
return dep$helpers$drop_file_stream$write_text_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27153 = f__18869__auto__.call(null);
(statearr_27153[(6)] = c__18868__auto__);

return statearr_27153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
/**
 * Liefert die Liste der Dateien im Basisverzeichnis.
 */
dep.helpers.drop_file_stream.list_folder = (function dep$helpers$drop_file_stream$list_folder(){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27172){
var state_val_27173 = (state_27172[(1)]);
if((state_val_27173 === (1))){
var inst_27157 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_27158 = ["Authorization","Content-Type"];
var inst_27159 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-","application/json"];
var inst_27160 = cljs.core.PersistentHashMap.fromArrays(inst_27158,inst_27159);
var inst_27161 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_27162 = [""];
var inst_27163 = cljs.core.PersistentHashMap.fromArrays(inst_27161,inst_27162);
var inst_27164 = [false,inst_27160,inst_27163];
var inst_27165 = cljs.core.PersistentHashMap.fromArrays(inst_27157,inst_27164);
var inst_27166 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/list_folder",inst_27165);
var state_27172__$1 = state_27172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27172__$1,(2),inst_27166);
} else {
if((state_val_27173 === (2))){
var inst_27168 = (state_27172[(2)]);
var inst_27169 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27168);
var inst_27170 = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(inst_27169);
var state_27172__$1 = state_27172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27172__$1,inst_27170);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto__ = null;
var dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto____0 = (function (){
var statearr_27174 = [null,null,null,null,null,null,null];
(statearr_27174[(0)] = dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto__);

(statearr_27174[(1)] = (1));

return statearr_27174;
});
var dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto____1 = (function (state_27172){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27175){var ex__18798__auto__ = e27175;
var statearr_27176_27179 = state_27172;
(statearr_27176_27179[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27172[(4)]))){
var statearr_27177_27180 = state_27172;
(statearr_27177_27180[(1)] = cljs.core.first.call(null,(state_27172[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27181 = state_27172;
state_27172 = G__27181;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto__ = function(state_27172){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto____1.call(this,state_27172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto____0;
dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto____1;
return dep$helpers$drop_file_stream$list_folder_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27178 = f__18869__auto__.call(null);
(statearr_27178[(6)] = c__18868__auto__);

return statearr_27178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
/**
 * Löscht die Datei mit dem Namen f-name aus dem Basisverzeichnis.
 */
dep.helpers.drop_file_stream.delete_file_named = (function dep$helpers$drop_file_stream$delete_file_named(f_name){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27196){
var state_val_27197 = (state_27196[(1)]);
if((state_val_27197 === (1))){
var inst_27182 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_27183 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_27184 = ["Authorization"];
var inst_27185 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_27186 = cljs.core.PersistentHashMap.fromArrays(inst_27184,inst_27185);
var inst_27187 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_27188 = [inst_27182];
var inst_27189 = cljs.core.PersistentHashMap.fromArrays(inst_27187,inst_27188);
var inst_27190 = [false,inst_27186,inst_27189];
var inst_27191 = cljs.core.PersistentHashMap.fromArrays(inst_27183,inst_27190);
var inst_27192 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_27191);
var state_27196__$1 = state_27196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27196__$1,(2),inst_27192);
} else {
if((state_val_27197 === (2))){
var inst_27194 = (state_27196[(2)]);
var state_27196__$1 = state_27196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27196__$1,inst_27194);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto__ = null;
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto____0 = (function (){
var statearr_27198 = [null,null,null,null,null,null,null];
(statearr_27198[(0)] = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto__);

(statearr_27198[(1)] = (1));

return statearr_27198;
});
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto____1 = (function (state_27196){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27199){var ex__18798__auto__ = e27199;
var statearr_27200_27203 = state_27196;
(statearr_27200_27203[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27196[(4)]))){
var statearr_27201_27204 = state_27196;
(statearr_27201_27204[(1)] = cljs.core.first.call(null,(state_27196[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27205 = state_27196;
state_27196 = G__27205;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto__ = function(state_27196){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto____1.call(this,state_27196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto____0;
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto____1;
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27202 = f__18869__auto__.call(null);
(statearr_27202[(6)] = c__18868__auto__);

return statearr_27202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
/**
 * Liefert den Inhalt der EDN-Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.read_edn_file = (function dep$helpers$drop_file_stream$read_edn_file(f_name){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27219){
var state_val_27220 = (state_27219[(1)]);
if((state_val_27220 === (1))){
var inst_27206 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_27207 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_27208 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_27209 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_27206,"text/plain; charset=utf-8"];
var inst_27210 = cljs.core.PersistentHashMap.fromArrays(inst_27208,inst_27209);
var inst_27211 = [false,inst_27210];
var inst_27212 = cljs.core.PersistentHashMap.fromArrays(inst_27207,inst_27211);
var inst_27213 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_27212);
var state_27219__$1 = state_27219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27219__$1,(2),inst_27213);
} else {
if((state_val_27220 === (2))){
var inst_27215 = (state_27219[(2)]);
var inst_27216 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27215);
var inst_27217 = cljs.reader.read_string.call(null,inst_27216);
var state_27219__$1 = state_27219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27219__$1,inst_27217);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto__ = null;
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto____0 = (function (){
var statearr_27221 = [null,null,null,null,null,null,null];
(statearr_27221[(0)] = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto__);

(statearr_27221[(1)] = (1));

return statearr_27221;
});
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto____1 = (function (state_27219){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27222){var ex__18798__auto__ = e27222;
var statearr_27223_27226 = state_27219;
(statearr_27223_27226[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27219[(4)]))){
var statearr_27224_27227 = state_27219;
(statearr_27224_27227[(1)] = cljs.core.first.call(null,(state_27219[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27228 = state_27219;
state_27219 = G__27228;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto__ = function(state_27219){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto____1.call(this,state_27219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto____0;
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto____1;
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27225 = f__18869__auto__.call(null);
(statearr_27225[(6)] = c__18868__auto__);

return statearr_27225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
/**
 * Benennt die Datei mit dem Namen f-name-old in f-name-new um.
 */
dep.helpers.drop_file_stream.rename_file = (function dep$helpers$drop_file_stream$rename_file(f_name_old,f_name_new){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27244){
var state_val_27245 = (state_27244[(1)]);
if((state_val_27245 === (1))){
var inst_27229 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_old)].join('');
var inst_27230 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_new)].join('');
var inst_27231 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_27232 = ["Authorization"];
var inst_27233 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_27234 = cljs.core.PersistentHashMap.fromArrays(inst_27232,inst_27233);
var inst_27235 = [new cljs.core.Keyword(null,"from_path","from_path",-1479414992),new cljs.core.Keyword(null,"to_path","to_path",343919595)];
var inst_27236 = [inst_27229,inst_27230];
var inst_27237 = cljs.core.PersistentHashMap.fromArrays(inst_27235,inst_27236);
var inst_27238 = [false,inst_27234,inst_27237];
var inst_27239 = cljs.core.PersistentHashMap.fromArrays(inst_27231,inst_27238);
var inst_27240 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/move_v2",inst_27239);
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27244__$1,(2),inst_27240);
} else {
if((state_val_27245 === (2))){
var inst_27242 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27244__$1,inst_27242);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto__ = null;
var dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto____0 = (function (){
var statearr_27246 = [null,null,null,null,null,null,null];
(statearr_27246[(0)] = dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto__);

(statearr_27246[(1)] = (1));

return statearr_27246;
});
var dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto____1 = (function (state_27244){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27247){var ex__18798__auto__ = e27247;
var statearr_27248_27251 = state_27244;
(statearr_27248_27251[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27244[(4)]))){
var statearr_27249_27252 = state_27244;
(statearr_27249_27252[(1)] = cljs.core.first.call(null,(state_27244[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27253 = state_27244;
state_27244 = G__27253;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto__ = function(state_27244){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto____1.call(this,state_27244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto____0;
dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto____1;
return dep$helpers$drop_file_stream$rename_file_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27250 = f__18869__auto__.call(null);
(statearr_27250[(6)] = c__18868__auto__);

return statearr_27250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
