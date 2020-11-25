// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27149){
var state_val_27150 = (state_27149[(1)]);
if((state_val_27150 === (1))){
var inst_27134 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_27135 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_27136 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_27137 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_27134,"text/plain; charset=utf-8"];
var inst_27138 = cljs.core.PersistentHashMap.fromArrays(inst_27136,inst_27137);
var inst_27139 = [false,inst_27138];
var inst_27140 = cljs.core.PersistentHashMap.fromArrays(inst_27135,inst_27139);
var inst_27141 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_27140);
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27149__$1,(2),inst_27141);
} else {
if((state_val_27150 === (2))){
var inst_27143 = (state_27149[(2)]);
var inst_27144 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27143);
var inst_27145 = f.call(null,inst_27144);
var inst_27146 = cljs.core.vec.call(null,inst_27145);
var inst_27147 = cljs.core.reset_BANG_.call(null,w,inst_27146);
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27149__$1,inst_27147);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto____0 = (function (){
var statearr_27151 = [null,null,null,null,null,null,null];
(statearr_27151[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto__);

(statearr_27151[(1)] = (1));

return statearr_27151;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto____1 = (function (state_27149){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27152){var ex__18821__auto__ = e27152;
var statearr_27153_27156 = state_27149;
(statearr_27153_27156[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27149[(4)]))){
var statearr_27154_27157 = state_27149;
(statearr_27154_27157[(1)] = cljs.core.first.call(null,(state_27149[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27158 = state_27149;
state_27149 = G__27158;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto__ = function(state_27149){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto____1.call(this,state_27149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27155 = f__18892__auto__.call(null);
(statearr_27155[(6)] = c__18891__auto__);

return statearr_27155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
/**
 * Schreibt den text in eine Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.write_text = (function dep$helpers$drop_file_stream$write_text(text,f_name){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27170){
var state_val_27171 = (state_27170[(1)]);
if((state_val_27171 === (1))){
var inst_27159 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_27160 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_27161 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_27162 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_27159,"application/octet-stream"];
var inst_27163 = cljs.core.PersistentHashMap.fromArrays(inst_27161,inst_27162);
var inst_27164 = [false,inst_27163,text];
var inst_27165 = cljs.core.PersistentHashMap.fromArrays(inst_27160,inst_27164);
var inst_27166 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_27165);
var state_27170__$1 = state_27170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27170__$1,(2),inst_27166);
} else {
if((state_val_27171 === (2))){
var inst_27168 = (state_27170[(2)]);
var state_27170__$1 = state_27170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27170__$1,inst_27168);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto__ = null;
var dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto____0 = (function (){
var statearr_27172 = [null,null,null,null,null,null,null];
(statearr_27172[(0)] = dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto__);

(statearr_27172[(1)] = (1));

return statearr_27172;
});
var dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto____1 = (function (state_27170){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27173){var ex__18821__auto__ = e27173;
var statearr_27174_27177 = state_27170;
(statearr_27174_27177[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27170[(4)]))){
var statearr_27175_27178 = state_27170;
(statearr_27175_27178[(1)] = cljs.core.first.call(null,(state_27170[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27179 = state_27170;
state_27170 = G__27179;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto__ = function(state_27170){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto____1.call(this,state_27170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto____0;
dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto____1;
return dep$helpers$drop_file_stream$write_text_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27176 = f__18892__auto__.call(null);
(statearr_27176[(6)] = c__18891__auto__);

return statearr_27176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
/**
 * Liefert die Liste der Dateien im Basisverzeichnis.
 */
dep.helpers.drop_file_stream.list_folder = (function dep$helpers$drop_file_stream$list_folder(){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27195){
var state_val_27196 = (state_27195[(1)]);
if((state_val_27196 === (1))){
var inst_27180 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_27181 = ["Authorization","Content-Type"];
var inst_27182 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-","application/json"];
var inst_27183 = cljs.core.PersistentHashMap.fromArrays(inst_27181,inst_27182);
var inst_27184 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_27185 = [""];
var inst_27186 = cljs.core.PersistentHashMap.fromArrays(inst_27184,inst_27185);
var inst_27187 = [false,inst_27183,inst_27186];
var inst_27188 = cljs.core.PersistentHashMap.fromArrays(inst_27180,inst_27187);
var inst_27189 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/list_folder",inst_27188);
var state_27195__$1 = state_27195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27195__$1,(2),inst_27189);
} else {
if((state_val_27196 === (2))){
var inst_27191 = (state_27195[(2)]);
var inst_27192 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27191);
var inst_27193 = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(inst_27192);
var state_27195__$1 = state_27195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27195__$1,inst_27193);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto__ = null;
var dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto____0 = (function (){
var statearr_27197 = [null,null,null,null,null,null,null];
(statearr_27197[(0)] = dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto__);

(statearr_27197[(1)] = (1));

return statearr_27197;
});
var dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto____1 = (function (state_27195){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27198){var ex__18821__auto__ = e27198;
var statearr_27199_27202 = state_27195;
(statearr_27199_27202[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27195[(4)]))){
var statearr_27200_27203 = state_27195;
(statearr_27200_27203[(1)] = cljs.core.first.call(null,(state_27195[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27204 = state_27195;
state_27195 = G__27204;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto__ = function(state_27195){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto____1.call(this,state_27195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto____0;
dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto____1;
return dep$helpers$drop_file_stream$list_folder_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27201 = f__18892__auto__.call(null);
(statearr_27201[(6)] = c__18891__auto__);

return statearr_27201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
/**
 * Löscht die Datei mit dem Namen f-name aus dem Basisverzeichnis.
 */
dep.helpers.drop_file_stream.delete_file_named = (function dep$helpers$drop_file_stream$delete_file_named(f_name){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27219){
var state_val_27220 = (state_27219[(1)]);
if((state_val_27220 === (1))){
var inst_27205 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_27206 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_27207 = ["Authorization"];
var inst_27208 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_27209 = cljs.core.PersistentHashMap.fromArrays(inst_27207,inst_27208);
var inst_27210 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_27211 = [inst_27205];
var inst_27212 = cljs.core.PersistentHashMap.fromArrays(inst_27210,inst_27211);
var inst_27213 = [false,inst_27209,inst_27212];
var inst_27214 = cljs.core.PersistentHashMap.fromArrays(inst_27206,inst_27213);
var inst_27215 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_27214);
var state_27219__$1 = state_27219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27219__$1,(2),inst_27215);
} else {
if((state_val_27220 === (2))){
var inst_27217 = (state_27219[(2)]);
var state_27219__$1 = state_27219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27219__$1,inst_27217);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto__ = null;
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto____0 = (function (){
var statearr_27221 = [null,null,null,null,null,null,null];
(statearr_27221[(0)] = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto__);

(statearr_27221[(1)] = (1));

return statearr_27221;
});
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto____1 = (function (state_27219){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27222){var ex__18821__auto__ = e27222;
var statearr_27223_27226 = state_27219;
(statearr_27223_27226[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27219[(4)]))){
var statearr_27224_27227 = state_27219;
(statearr_27224_27227[(1)] = cljs.core.first.call(null,(state_27219[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27228 = state_27219;
state_27219 = G__27228;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto__ = function(state_27219){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto____1.call(this,state_27219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto____0;
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto____1;
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27225 = f__18892__auto__.call(null);
(statearr_27225[(6)] = c__18891__auto__);

return statearr_27225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
/**
 * Liefert den Inhalt der EDN-Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.read_edn_file = (function dep$helpers$drop_file_stream$read_edn_file(f_name){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27242){
var state_val_27243 = (state_27242[(1)]);
if((state_val_27243 === (1))){
var inst_27229 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_27230 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_27231 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_27232 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_27229,"text/plain; charset=utf-8"];
var inst_27233 = cljs.core.PersistentHashMap.fromArrays(inst_27231,inst_27232);
var inst_27234 = [false,inst_27233];
var inst_27235 = cljs.core.PersistentHashMap.fromArrays(inst_27230,inst_27234);
var inst_27236 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_27235);
var state_27242__$1 = state_27242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27242__$1,(2),inst_27236);
} else {
if((state_val_27243 === (2))){
var inst_27238 = (state_27242[(2)]);
var inst_27239 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27238);
var inst_27240 = cljs.reader.read_string.call(null,inst_27239);
var state_27242__$1 = state_27242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27242__$1,inst_27240);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto__ = null;
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto____0 = (function (){
var statearr_27244 = [null,null,null,null,null,null,null];
(statearr_27244[(0)] = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto__);

(statearr_27244[(1)] = (1));

return statearr_27244;
});
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto____1 = (function (state_27242){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27245){var ex__18821__auto__ = e27245;
var statearr_27246_27249 = state_27242;
(statearr_27246_27249[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27242[(4)]))){
var statearr_27247_27250 = state_27242;
(statearr_27247_27250[(1)] = cljs.core.first.call(null,(state_27242[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27251 = state_27242;
state_27242 = G__27251;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto__ = function(state_27242){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto____1.call(this,state_27242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto____0;
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto____1;
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27248 = f__18892__auto__.call(null);
(statearr_27248[(6)] = c__18891__auto__);

return statearr_27248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
/**
 * Benennt die Datei mit dem Namen f-name-old in f-name-new um.
 */
dep.helpers.drop_file_stream.rename_file = (function dep$helpers$drop_file_stream$rename_file(f_name_old,f_name_new){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27267){
var state_val_27268 = (state_27267[(1)]);
if((state_val_27268 === (1))){
var inst_27252 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_old)].join('');
var inst_27253 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_new)].join('');
var inst_27254 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_27255 = ["Authorization"];
var inst_27256 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_27257 = cljs.core.PersistentHashMap.fromArrays(inst_27255,inst_27256);
var inst_27258 = [new cljs.core.Keyword(null,"from_path","from_path",-1479414992),new cljs.core.Keyword(null,"to_path","to_path",343919595)];
var inst_27259 = [inst_27252,inst_27253];
var inst_27260 = cljs.core.PersistentHashMap.fromArrays(inst_27258,inst_27259);
var inst_27261 = [false,inst_27257,inst_27260];
var inst_27262 = cljs.core.PersistentHashMap.fromArrays(inst_27254,inst_27261);
var inst_27263 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/move_v2",inst_27262);
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27267__$1,(2),inst_27263);
} else {
if((state_val_27268 === (2))){
var inst_27265 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27267__$1,inst_27265);
} else {
return null;
}
}
});
return (function() {
var dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto__ = null;
var dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto____0 = (function (){
var statearr_27269 = [null,null,null,null,null,null,null];
(statearr_27269[(0)] = dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto__);

(statearr_27269[(1)] = (1));

return statearr_27269;
});
var dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto____1 = (function (state_27267){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27270){var ex__18821__auto__ = e27270;
var statearr_27271_27274 = state_27267;
(statearr_27271_27274[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27267[(4)]))){
var statearr_27272_27275 = state_27267;
(statearr_27272_27275[(1)] = cljs.core.first.call(null,(state_27267[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27276 = state_27267;
state_27267 = G__27276;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto__ = function(state_27267){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto____1.call(this,state_27267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto____0;
dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto____1;
return dep$helpers$drop_file_stream$rename_file_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27273 = f__18892__auto__.call(null);
(statearr_27273[(6)] = c__18891__auto__);

return statearr_27273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
