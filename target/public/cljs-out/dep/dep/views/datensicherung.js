// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.datensicherung');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('dep.views.table');
goog.require('dep.helpers.form_helpers');
goog.require('dep.helpers.drop_file_stream');
/**
 * Liefert die Datei mit dem Namen string aus der Liste von dateien.
 */
dep.views.datensicherung.datei_mit_namen = (function dep$views$datensicherung$datei_mit_namen(dateien,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27279_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27279_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__27280_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27280_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)))));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27297){
var state_val_27298 = (state_27297[(1)]);
if((state_val_27298 === (1))){
var inst_27281 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_27282 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_27281);
var state_27297__$1 = state_27297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27297__$1,(2),inst_27282);
} else {
if((state_val_27298 === (2))){
var inst_27284 = (state_27297[(2)]);
var inst_27285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27286 = [new cljs.core.Keyword(null,"welt","welt",-1673248721),inst_27284];
var inst_27287 = (new cljs.core.PersistentVector(null,2,(5),inst_27285,inst_27286,null));
var inst_27288 = re_frame.core.dispatch.call(null,inst_27287);
var inst_27289 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27290 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_27297__$1 = (function (){var statearr_27299 = state_27297;
(statearr_27299[(7)] = inst_27288);

(statearr_27299[(8)] = inst_27289);

return statearr_27299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27297__$1,(3),inst_27290);
} else {
if((state_val_27298 === (3))){
var inst_27289 = (state_27297[(8)]);
var inst_27292 = (state_27297[(2)]);
var inst_27293 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_27292];
var inst_27294 = (new cljs.core.PersistentVector(null,2,(5),inst_27289,inst_27293,null));
var inst_27295 = re_frame.core.dispatch.call(null,inst_27294);
var state_27297__$1 = state_27297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27297__$1,inst_27295);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto____0 = (function (){
var statearr_27300 = [null,null,null,null,null,null,null,null,null];
(statearr_27300[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto__);

(statearr_27300[(1)] = (1));

return statearr_27300;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto____1 = (function (state_27297){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27301){var ex__18821__auto__ = e27301;
var statearr_27302_27305 = state_27297;
(statearr_27302_27305[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27297[(4)]))){
var statearr_27303_27306 = state_27297;
(statearr_27303_27306[(1)] = cljs.core.first.call(null,(state_27297[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27307 = state_27297;
state_27297 = G__27307;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto__ = function(state_27297){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto____1.call(this,state_27297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27304 = f__18892__auto__.call(null);
(statearr_27304[(6)] = c__18891__auto__);

return statearr_27304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
dep.views.datensicherung.umbenenne_datei = (function dep$views$datensicherung$umbenenne_datei(alter_name,neuer_name){
var dateien = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)));
if(cljs.core.truth_(dep.views.datensicherung.datei_mit_namen.call(null,dateien,neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27323){
var state_val_27324 = (state_27323[(1)]);
if((state_val_27324 === (1))){
var inst_27308 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_27323__$1 = state_27323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27323__$1,(2),inst_27308);
} else {
if((state_val_27324 === (2))){
var inst_27310 = (state_27323[(2)]);
var inst_27311 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_27323__$1 = (function (){var statearr_27325 = state_27323;
(statearr_27325[(7)] = inst_27310);

return statearr_27325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27323__$1,(3),inst_27311);
} else {
if((state_val_27324 === (3))){
var inst_27313 = (state_27323[(2)]);
var inst_27314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27315 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_27313];
var inst_27316 = (new cljs.core.PersistentVector(null,2,(5),inst_27314,inst_27315,null));
var inst_27317 = re_frame.core.dispatch_sync.call(null,inst_27316);
var inst_27318 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27319 = [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false];
var inst_27320 = (new cljs.core.PersistentVector(null,2,(5),inst_27318,inst_27319,null));
var inst_27321 = re_frame.core.dispatch.call(null,inst_27320);
var state_27323__$1 = (function (){var statearr_27326 = state_27323;
(statearr_27326[(8)] = inst_27317);

return statearr_27326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27323__$1,inst_27321);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto____0 = (function (){
var statearr_27327 = [null,null,null,null,null,null,null,null,null];
(statearr_27327[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto__);

(statearr_27327[(1)] = (1));

return statearr_27327;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto____1 = (function (state_27323){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27328){var ex__18821__auto__ = e27328;
var statearr_27329_27332 = state_27323;
(statearr_27329_27332[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27323[(4)]))){
var statearr_27330_27333 = state_27323;
(statearr_27330_27333[(1)] = cljs.core.first.call(null,(state_27323[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27334 = state_27323;
state_27323 = G__27334;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto__ = function(state_27323){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto____1.call(this,state_27323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27331 = f__18892__auto__.call(null);
(statearr_27331[(6)] = c__18891__auto__);

return statearr_27331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.views.datensicherung.dateien__GT_table = (function dep$views$datensicherung$dateien__GT_table(dateien){
return cljs.core.mapv.call(null,(function (p1__27335_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572),new cljs.core.Keyword(null,"alter-name","alter-name",1575294286)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27335_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__27335_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.loesche_datei.call(null,p1__27335_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.lade_welt_aus_datei.call(null,p1__27335_SHARP_);
})], null),"laden"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27335_SHARP_)]);
}),dateien);
});
dep.views.datensicherung.datei_form_felder = (function dep$views$datensicherung$datei_form_felder(form_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Datei",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),dep.helpers.form_helpers.rc_input_box.call(null,"Name",new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Name","Name",-131211369),null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_input_box.call(null,"Zeitstempel",new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_state)),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),null,cljs.core.identity,true,form_state)], null);
});
dep.views.datensicherung.buttons = (function dep$views$datensicherung$buttons(form){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Name \u00E4ndern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.umbenenne_datei.call(null,new cljs.core.Keyword(null,"alter-name","alter-name",1575294286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form)),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form)));
})], null)], null);
});
/**
 * Komponente für das Laden und Speichern von Planungsdaten.
 */
dep.views.datensicherung.datensicherung = (function dep$views$datensicherung$datensicherung(){
var s = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datei","datei",936123672),"pldaten.edn"], null));
return (function (){
var dateien = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)));
var welt = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"welt","welt",-1673248721)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"100px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"12px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.helpers.form_helpers.rc_input_box,"Daten in Datei",new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s)),new cljs.core.Keyword(null,"datei","datei",936123672),null,cljs.core.identity,false,s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"sichern",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27350){
var state_val_27351 = (state_27350[(1)]);
if((state_val_27351 === (1))){
var inst_27336 = cljs.core.prn_str.call(null,welt);
var inst_27337 = cljs.core.deref.call(null,s);
var inst_27338 = new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(inst_27337);
var inst_27339 = dep.helpers.drop_file_stream.write_text.call(null,inst_27336,inst_27338);
var state_27350__$1 = state_27350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27350__$1,(2),inst_27339);
} else {
if((state_val_27351 === (2))){
var inst_27341 = (state_27350[(2)]);
var inst_27342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27343 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_27350__$1 = (function (){var statearr_27352 = state_27350;
(statearr_27352[(7)] = inst_27341);

(statearr_27352[(8)] = inst_27342);

return statearr_27352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27350__$1,(3),inst_27343);
} else {
if((state_val_27351 === (3))){
var inst_27342 = (state_27350[(8)]);
var inst_27345 = (state_27350[(2)]);
var inst_27346 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_27345];
var inst_27347 = (new cljs.core.PersistentVector(null,2,(5),inst_27342,inst_27346,null));
var inst_27348 = re_frame.core.dispatch_sync.call(null,inst_27347);
var state_27350__$1 = state_27350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27350__$1,inst_27348);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__18818__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__18818__auto____0 = (function (){
var statearr_27353 = [null,null,null,null,null,null,null,null,null];
(statearr_27353[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__18818__auto__);

(statearr_27353[(1)] = (1));

return statearr_27353;
});
var dep$views$datensicherung$datensicherung_$_state_machine__18818__auto____1 = (function (state_27350){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27354){var ex__18821__auto__ = e27354;
var statearr_27355_27358 = state_27350;
(statearr_27355_27358[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27350[(4)]))){
var statearr_27356_27359 = state_27350;
(statearr_27356_27359[(1)] = cljs.core.first.call(null,(state_27350[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27360 = state_27350;
state_27350 = G__27360;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__18818__auto__ = function(state_27350){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__18818__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__18818__auto____1.call(this,state_27350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__18818__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__18818__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27357 = f__18892__auto__.call(null);
(statearr_27357[(6)] = c__18891__auto__);

return statearr_27357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table.call(null,dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
