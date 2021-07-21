// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
dep.helpers.drop_file_stream.authorization = "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-";
/**
 * Liest die Datei filename aus der Dropbox.
 */
dep.helpers.drop_file_stream.ajax_request_read_edn_from_dropbox = (function dep$helpers$drop_file_stream$ajax_request_read_edn_from_dropbox(filename){
var path = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),"\"}"].join('');
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,"https://content.dropboxapi.com/2/files/download",cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 3, ["Authorization",dep.helpers.drop_file_stream.authorization,"Dropbox-API-Arg",path,"Content-Type","text/plain; charset=utf-8"], null),cljs.core.cst$kw$response_DASH_format,(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_read], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bad_DASH_resp], null),cljs.core.cst$kw$body,""], null);
});
/**
 * Liest den Ordnerinhalt der App aus der Dropbox.
 */
dep.helpers.drop_file_stream.ajax_request_list_folder_on_dropbox = (function dep$helpers$drop_file_stream$ajax_request_list_folder_on_dropbox(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$format,cljs.core.cst$kw$method,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$params,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$headers,cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$on_DASH_failure,cljs.core.cst$kw$uri],[(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),cljs.core.cst$kw$post,(function (){var G__31411 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__31411) : ajax.core.json_response_format.call(null,G__31411));
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_list_DASH_folder_DASH_request], null),new cljs.core.PersistentArrayMap(null, 2, ["Authorization",dep.helpers.drop_file_stream.authorization,"Content-Type","application/json"], null),false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bad_DASH_resp], null),"https://api.dropboxapi.com/2/files/list_folder"]);
});
/**
 * Schreibt content im EDN-Format in Datei filename.
 */
dep.helpers.drop_file_stream.ajax_request_write_edn_to_dropbox = (function dep$helpers$drop_file_stream$ajax_request_write_edn_to_dropbox(content,filename){
var path = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,"https://content.dropboxapi.com/2/files/upload",cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 3, ["Authorization",dep.helpers.drop_file_stream.authorization,"Dropbox-API-Arg",path,"Content-Type","application/octet-stream"], null),cljs.core.cst$kw$response_DASH_format,(function (){var G__31412 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__31412) : ajax.core.json_response_format.call(null,G__31412));
})(),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_written], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bad_DASH_resp], null),cljs.core.cst$kw$body,content], null);
});
/**
 * Löscht Datei filename aus der Liste files und aus der Dropbox.
 */
dep.helpers.drop_file_stream.ajax_request_delete_file_from_dropbox = (function dep$helpers$drop_file_stream$ajax_request_delete_file_from_dropbox(filename,files){
var path = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$format,cljs.core.cst$kw$method,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$params,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$headers,cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$on_DASH_failure,cljs.core.cst$kw$uri],[(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),cljs.core.cst$kw$post,(function (){var G__31413 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__31413) : ajax.core.json_response_format.call(null,G__31413));
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_deleted,files], null),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",dep.helpers.drop_file_stream.authorization], null),false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bad_DASH_resp], null),"https://api.dropboxapi.com/2/files/delete"]);
});
/**
 * Benennt die Datei mit dem Namen f-name-old in f-name-new um.
 */
dep.helpers.drop_file_stream.ajax_request_rename_file_on_dropbox = (function dep$helpers$drop_file_stream$ajax_request_rename_file_on_dropbox(f_name_old,f_name_new){
var path_old = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_old)].join('');
var path_new = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_new)].join('');
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$format,cljs.core.cst$kw$method,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$params,cljs.core.cst$kw$on_DASH_success,cljs.core.cst$kw$headers,cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$on_DASH_failure,cljs.core.cst$kw$uri],[(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),cljs.core.cst$kw$post,(function (){var G__31414 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__31414) : ajax.core.json_response_format.call(null,G__31414));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from_path,path_old,cljs.core.cst$kw$to_path,path_new], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_renamed], null),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",dep.helpers.drop_file_stream.authorization], null),false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bad_DASH_resp], null),"https://api.dropboxapi.com/2/files/move_v2"]);
});
