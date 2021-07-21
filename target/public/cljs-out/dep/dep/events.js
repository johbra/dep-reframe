// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('dep.model.quartal');
goog.require('dep.db');
goog.require('dep.helpers.drop_file_stream');
goog.require('day8.re_frame.http_fx');
re_frame.core.reg_fx(cljs.core.cst$kw$reset,(function (db){
return cljs.core.reset_BANG_(re_frame.db.app_db,db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialise_DASH_db,(function (p__31439){
var map__31440 = p__31439;
var map__31440__$1 = cljs.core.__destructure_map(map__31440);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31440__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset,dep.db.default_db], null)], null),cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,dep.helpers.drop_file_stream.ajax_request_list_folder_on_dropbox()], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$welt,(function (p__31441,p__31442){
var map__31443 = p__31441;
var map__31443__$1 = cljs.core.__destructure_map(map__31443);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,cljs.core.cst$kw$db);
var vec__31444 = p__31442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31444,(0),null);
var datei = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31444,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$reading,true),cljs.core.cst$kw$http_DASH_xhrio,dep.helpers.drop_file_stream.ajax_request_read_edn_from_dropbox(datei)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sichere_DASH_welt,(function (p__31447,p__31448){
var map__31449 = p__31447;
var map__31449__$1 = cljs.core.__destructure_map(map__31449);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31449__$1,cljs.core.cst$kw$db);
var vec__31450 = p__31448;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31450,(0),null);
var dateiinhalt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31450,(1),null);
var datei = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31450,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$writing,true),cljs.core.cst$kw$http_DASH_xhrio,dep.helpers.drop_file_stream.ajax_request_write_edn_to_dropbox(dateiinhalt,datei)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$umbenenne_DASH_datei,(function (p__31453,p__31454){
var map__31455 = p__31453;
var map__31455__$1 = cljs.core.__destructure_map(map__31455);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31455__$1,cljs.core.cst$kw$db);
var vec__31456 = p__31454;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(0),null);
var f_name_old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(1),null);
var f_name_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31456,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$renaming,true),cljs.core.cst$kw$http_DASH_xhrio,dep.helpers.drop_file_stream.ajax_request_rename_file_on_dropbox(f_name_old,f_name_new)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loesche_DASH_datei,(function (p__31459,p__31460){
var map__31461 = p__31459;
var map__31461__$1 = cljs.core.__destructure_map(map__31461);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31461__$1,cljs.core.cst$kw$db);
var vec__31462 = p__31460;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31462,(0),null);
var dateien = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31462,(1),null);
var datei = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31462,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$deleting,true),cljs.core.cst$kw$http_DASH_xhrio,dep.helpers.drop_file_stream.ajax_request_delete_file_from_dropbox(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(datei),dateien)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_list_DASH_folder_DASH_request,(function (db,p__31465){
var vec__31466 = p__31465;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31466,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31466,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$dateien,cljs.core.cst$kw$entries.cljs$core$IFn$_invoke$arity$1(response),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$loading,false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_written,(function (db,p__31469){
var vec__31470 = p__31469;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31470,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31470,(1),null);
cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$writing,false);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$dateien,cljs.core.conj,response);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_renamed,(function (p__31473,p__31474){
var map__31475 = p__31473;
var map__31475__$1 = cljs.core.__destructure_map(map__31475);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31475__$1,cljs.core.cst$kw$db);
var vec__31476 = p__31474;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31476,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$renaming,false),cljs.core.cst$kw$http_DASH_xhrio,dep.helpers.drop_file_stream.ajax_request_list_folder_on_dropbox()], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_read,(function (p__31479,p__31480){
var map__31481 = p__31479;
var map__31481__$1 = cljs.core.__destructure_map(map__31481);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31481__$1,cljs.core.cst$kw$db);
var vec__31482 = p__31480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31482,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31482,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response)], null)], null),cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$reading,false),cljs.core.cst$kw$http_DASH_xhrio,dep.helpers.drop_file_stream.ajax_request_list_folder_on_dropbox()], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_deleted,(function (db,p__31485){
var vec__31486 = p__31485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31486,(0),null);
var files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31486,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31486,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$deleting,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dateien,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(response));
}),files))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bad_DASH_resp,(function (db,p__31489){
var vec__31490 = p__31489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31490,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31490,(1),null);
alert(response);

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$table_DASH_sort,(function (db,p__31493){
var vec__31494 = p__31493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31494,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31494,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$table_DASH_sort,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_sort_DASH_sequence,(function (db,p__31497){
var vec__31498 = p__31497;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31498,(0),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_sort,cljs.core.cst$kw$ascending], null),cljs.core.not(cljs.core.cst$kw$ascending.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$table_DASH_sort.cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change_DASH_sort_DASH_column,(function (db,p__31501){
var vec__31502 = p__31501;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31502,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31502,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_sort,cljs.core.cst$kw$sort_DASH_column], null),item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$menu_DASH_item_DASH_selected,(function (db,p__31505){
var vec__31506 = p__31505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31506,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31506,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_modal,(function (db,p__31509){
var vec__31510 = p__31509;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31510,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31510,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31510,(2),null);
var edit_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31510,(3),null);
var buttons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31510,(4),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$show_DASH_modal,item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$modal_DASH_form,form,cljs.core.cst$kw$edit_DASH_component,edit_component,cljs.core.cst$kw$buttons,buttons], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$geschaeftsjahr,(function (db,p__31513){
var vec__31514 = p__31513;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31514,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31514,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$geschaeftsjahr,parseInt(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quartal,cljs.core.first(dep.model.quartal.quartale_fuer_jahr(item))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$quartal,(function (db,p__31517){
var vec__31518 = p__31517;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31518,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31518,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$quartal,dep.model.quartal.string__GT_quartal(item));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jahre,(function (db,p__31521){
var vec__31522 = p__31521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31522,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31522,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$jahre,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dozenten,(function (db,p__31525){
var vec__31526 = p__31525;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31526,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31526,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$dozenten,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$studienrichtungen,(function (db,p__31529){
var vec__31530 = p__31529;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31530,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31530,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$studienrichtungen,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$manipels,(function (db,p__31533){
var vec__31534 = p__31533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31534,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31534,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$manipels,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$module,(function (db,p__31537){
var vec__31538 = p__31537;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31538,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31538,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$module,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lven,(function (db,p__31541){
var vec__31542 = p__31541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31542,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31542,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$lven,item);
}));
