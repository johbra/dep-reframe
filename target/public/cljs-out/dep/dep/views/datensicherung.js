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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27256_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27256_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__27257_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27257_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)))));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27274){
var state_val_27275 = (state_27274[(1)]);
if((state_val_27275 === (1))){
var inst_27258 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_27259 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_27258);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(2),inst_27259);
} else {
if((state_val_27275 === (2))){
var inst_27261 = (state_27274[(2)]);
var inst_27262 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27263 = [new cljs.core.Keyword(null,"welt","welt",-1673248721),inst_27261];
var inst_27264 = (new cljs.core.PersistentVector(null,2,(5),inst_27262,inst_27263,null));
var inst_27265 = re_frame.core.dispatch.call(null,inst_27264);
var inst_27266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27267 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_27274__$1 = (function (){var statearr_27276 = state_27274;
(statearr_27276[(7)] = inst_27265);

(statearr_27276[(8)] = inst_27266);

return statearr_27276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(3),inst_27267);
} else {
if((state_val_27275 === (3))){
var inst_27266 = (state_27274[(8)]);
var inst_27269 = (state_27274[(2)]);
var inst_27270 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_27269];
var inst_27271 = (new cljs.core.PersistentVector(null,2,(5),inst_27266,inst_27270,null));
var inst_27272 = re_frame.core.dispatch.call(null,inst_27271);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27274__$1,inst_27272);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____0 = (function (){
var statearr_27277 = [null,null,null,null,null,null,null,null,null];
(statearr_27277[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__);

(statearr_27277[(1)] = (1));

return statearr_27277;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____1 = (function (state_27274){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27278){var ex__18798__auto__ = e27278;
var statearr_27279_27282 = state_27274;
(statearr_27279_27282[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27274[(4)]))){
var statearr_27280_27283 = state_27274;
(statearr_27280_27283[(1)] = cljs.core.first.call(null,(state_27274[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27284 = state_27274;
state_27274 = G__27284;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__ = function(state_27274){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____1.call(this,state_27274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27281 = f__18869__auto__.call(null);
(statearr_27281[(6)] = c__18868__auto__);

return statearr_27281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
dep.views.datensicherung.umbenenne_datei = (function dep$views$datensicherung$umbenenne_datei(alter_name,neuer_name){
var dateien = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)));
if(cljs.core.truth_(dep.views.datensicherung.datei_mit_namen.call(null,dateien,neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27300){
var state_val_27301 = (state_27300[(1)]);
if((state_val_27301 === (1))){
var inst_27285 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_27300__$1 = state_27300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27300__$1,(2),inst_27285);
} else {
if((state_val_27301 === (2))){
var inst_27287 = (state_27300[(2)]);
var inst_27288 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_27300__$1 = (function (){var statearr_27302 = state_27300;
(statearr_27302[(7)] = inst_27287);

return statearr_27302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27300__$1,(3),inst_27288);
} else {
if((state_val_27301 === (3))){
var inst_27290 = (state_27300[(2)]);
var inst_27291 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27292 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_27290];
var inst_27293 = (new cljs.core.PersistentVector(null,2,(5),inst_27291,inst_27292,null));
var inst_27294 = re_frame.core.dispatch_sync.call(null,inst_27293);
var inst_27295 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27296 = [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false];
var inst_27297 = (new cljs.core.PersistentVector(null,2,(5),inst_27295,inst_27296,null));
var inst_27298 = re_frame.core.dispatch.call(null,inst_27297);
var state_27300__$1 = (function (){var statearr_27303 = state_27300;
(statearr_27303[(8)] = inst_27294);

return statearr_27303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27300__$1,inst_27298);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____0 = (function (){
var statearr_27304 = [null,null,null,null,null,null,null,null,null];
(statearr_27304[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__);

(statearr_27304[(1)] = (1));

return statearr_27304;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____1 = (function (state_27300){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27305){var ex__18798__auto__ = e27305;
var statearr_27306_27309 = state_27300;
(statearr_27306_27309[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27300[(4)]))){
var statearr_27307_27310 = state_27300;
(statearr_27307_27310[(1)] = cljs.core.first.call(null,(state_27300[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27311 = state_27300;
state_27300 = G__27311;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__ = function(state_27300){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____1.call(this,state_27300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27308 = f__18869__auto__.call(null);
(statearr_27308[(6)] = c__18868__auto__);

return statearr_27308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.views.datensicherung.dateien__GT_table = (function dep$views$datensicherung$dateien__GT_table(dateien){
return cljs.core.mapv.call(null,(function (p1__27312_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572),new cljs.core.Keyword(null,"alter-name","alter-name",1575294286)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27312_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__27312_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.loesche_datei.call(null,p1__27312_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.lade_welt_aus_datei.call(null,p1__27312_SHARP_);
})], null),"laden"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27312_SHARP_)]);
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
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27327){
var state_val_27328 = (state_27327[(1)]);
if((state_val_27328 === (1))){
var inst_27313 = cljs.core.prn_str.call(null,welt);
var inst_27314 = cljs.core.deref.call(null,s);
var inst_27315 = new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(inst_27314);
var inst_27316 = dep.helpers.drop_file_stream.write_text.call(null,inst_27313,inst_27315);
var state_27327__$1 = state_27327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27327__$1,(2),inst_27316);
} else {
if((state_val_27328 === (2))){
var inst_27318 = (state_27327[(2)]);
var inst_27319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27320 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_27327__$1 = (function (){var statearr_27329 = state_27327;
(statearr_27329[(7)] = inst_27318);

(statearr_27329[(8)] = inst_27319);

return statearr_27329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27327__$1,(3),inst_27320);
} else {
if((state_val_27328 === (3))){
var inst_27319 = (state_27327[(8)]);
var inst_27322 = (state_27327[(2)]);
var inst_27323 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_27322];
var inst_27324 = (new cljs.core.PersistentVector(null,2,(5),inst_27319,inst_27323,null));
var inst_27325 = re_frame.core.dispatch_sync.call(null,inst_27324);
var state_27327__$1 = state_27327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27327__$1,inst_27325);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____0 = (function (){
var statearr_27330 = [null,null,null,null,null,null,null,null,null];
(statearr_27330[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__);

(statearr_27330[(1)] = (1));

return statearr_27330;
});
var dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____1 = (function (state_27327){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27331){var ex__18798__auto__ = e27331;
var statearr_27332_27335 = state_27327;
(statearr_27332_27335[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27327[(4)]))){
var statearr_27333_27336 = state_27327;
(statearr_27333_27336[(1)] = cljs.core.first.call(null,(state_27327[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27337 = state_27327;
state_27327 = G__27337;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__ = function(state_27327){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____1.call(this,state_27327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__18795__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27334 = f__18869__auto__.call(null);
(statearr_27334[(6)] = c__18868__auto__);

return statearr_27334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table.call(null,dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
