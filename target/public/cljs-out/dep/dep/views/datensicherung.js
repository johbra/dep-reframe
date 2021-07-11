// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.datensicherung');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25610_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__25610_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25611_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__25611_SHARP_),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dateien], null)))));
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loesche_DASH_datei,dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__18254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18255__auto__ = (function (){var switch__18216__auto__ = (function (state_25628){
var state_val_25629 = (state_25628[(1)]);
if((state_val_25629 === (1))){
var inst_25612 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(d);
var inst_25613 = dep.helpers.drop_file_stream.read_edn_file(inst_25612);
var state_25628__$1 = state_25628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25628__$1,(2),inst_25613);
} else {
if((state_val_25629 === (2))){
var inst_25615 = (state_25628[(2)]);
var inst_25616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25617 = [cljs.core.cst$kw$welt,inst_25615];
var inst_25618 = (new cljs.core.PersistentVector(null,2,(5),inst_25616,inst_25617,null));
var inst_25619 = re_frame.core.dispatch(inst_25618);
var inst_25620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25621 = dep.helpers.drop_file_stream.list_folder();
var state_25628__$1 = (function (){var statearr_25630 = state_25628;
(statearr_25630[(7)] = inst_25619);

(statearr_25630[(8)] = inst_25620);

return statearr_25630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25628__$1,(3),inst_25621);
} else {
if((state_val_25629 === (3))){
var inst_25620 = (state_25628[(8)]);
var inst_25623 = (state_25628[(2)]);
var inst_25624 = [cljs.core.cst$kw$dateien,inst_25623];
var inst_25625 = (new cljs.core.PersistentVector(null,2,(5),inst_25620,inst_25624,null));
var inst_25626 = re_frame.core.dispatch(inst_25625);
var state_25628__$1 = state_25628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25628__$1,inst_25626);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto____0 = (function (){
var statearr_25631 = [null,null,null,null,null,null,null,null,null];
(statearr_25631[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto__);

(statearr_25631[(1)] = (1));

return statearr_25631;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto____1 = (function (state_25628){
while(true){
var ret_value__18218__auto__ = (function (){try{while(true){
var result__18219__auto__ = switch__18216__auto__(state_25628);
if(cljs.core.keyword_identical_QMARK_(result__18219__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18219__auto__;
}
break;
}
}catch (e25632){var ex__18220__auto__ = e25632;
var statearr_25633_25636 = state_25628;
(statearr_25633_25636[(2)] = ex__18220__auto__);


if(cljs.core.seq((state_25628[(4)]))){
var statearr_25634_25637 = state_25628;
(statearr_25634_25637[(1)] = cljs.core.first((state_25628[(4)])));

} else {
throw ex__18220__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18218__auto__,cljs.core.cst$kw$recur)){
var G__25638 = state_25628;
state_25628 = G__25638;
continue;
} else {
return ret_value__18218__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto__ = function(state_25628){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto____1.call(this,state_25628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__18217__auto__;
})()
})();
var state__18256__auto__ = (function (){var statearr_25635 = (f__18255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18255__auto__.cljs$core$IFn$_invoke$arity$0() : f__18255__auto__.call(null));
(statearr_25635[(6)] = c__18254__auto__);

return statearr_25635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18256__auto__);
}));

return c__18254__auto__;
});
dep.views.datensicherung.umbenenne_datei = (function dep$views$datensicherung$umbenenne_datei(alter_name,neuer_name){
var dateien = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dateien], null)));
if(cljs.core.truth_(dep.views.datensicherung.datei_mit_namen(dateien,neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__18254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18255__auto__ = (function (){var switch__18216__auto__ = (function (state_25654){
var state_val_25655 = (state_25654[(1)]);
if((state_val_25655 === (1))){
var inst_25639 = dep.helpers.drop_file_stream.rename_file(alter_name,neuer_name);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25654__$1,(2),inst_25639);
} else {
if((state_val_25655 === (2))){
var inst_25641 = (state_25654[(2)]);
var inst_25642 = dep.helpers.drop_file_stream.list_folder();
var state_25654__$1 = (function (){var statearr_25656 = state_25654;
(statearr_25656[(7)] = inst_25641);

return statearr_25656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25654__$1,(3),inst_25642);
} else {
if((state_val_25655 === (3))){
var inst_25644 = (state_25654[(2)]);
var inst_25645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25646 = [cljs.core.cst$kw$dateien,inst_25644];
var inst_25647 = (new cljs.core.PersistentVector(null,2,(5),inst_25645,inst_25646,null));
var inst_25648 = re_frame.core.dispatch_sync(inst_25647);
var inst_25649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25650 = [cljs.core.cst$kw$show_DASH_modal,false];
var inst_25651 = (new cljs.core.PersistentVector(null,2,(5),inst_25649,inst_25650,null));
var inst_25652 = re_frame.core.dispatch(inst_25651);
var state_25654__$1 = (function (){var statearr_25657 = state_25654;
(statearr_25657[(8)] = inst_25648);

return statearr_25657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25654__$1,inst_25652);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto____0 = (function (){
var statearr_25658 = [null,null,null,null,null,null,null,null,null];
(statearr_25658[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto__);

(statearr_25658[(1)] = (1));

return statearr_25658;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto____1 = (function (state_25654){
while(true){
var ret_value__18218__auto__ = (function (){try{while(true){
var result__18219__auto__ = switch__18216__auto__(state_25654);
if(cljs.core.keyword_identical_QMARK_(result__18219__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18219__auto__;
}
break;
}
}catch (e25659){var ex__18220__auto__ = e25659;
var statearr_25660_25663 = state_25654;
(statearr_25660_25663[(2)] = ex__18220__auto__);


if(cljs.core.seq((state_25654[(4)]))){
var statearr_25661_25664 = state_25654;
(statearr_25661_25664[(1)] = cljs.core.first((state_25654[(4)])));

} else {
throw ex__18220__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18218__auto__,cljs.core.cst$kw$recur)){
var G__25665 = state_25654;
state_25654 = G__25665;
continue;
} else {
return ret_value__18218__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto__ = function(state_25654){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto____1.call(this,state_25654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__18217__auto__;
})()
})();
var state__18256__auto__ = (function (){var statearr_25662 = (f__18255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18255__auto__.cljs$core$IFn$_invoke$arity$0() : f__18255__auto__.call(null));
(statearr_25662[(6)] = c__18254__auto__);

return statearr_25662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18256__auto__);
}));

return c__18254__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.views.datensicherung.dateien__GT_table = (function dep$views$datensicherung$dateien__GT_table(dateien){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__25666_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$Name,cljs.core.cst$kw$Zeitstempel,cljs.core.cst$kw$Aktion1,cljs.core.cst$kw$Aktion2,cljs.core.cst$kw$alter_DASH_name],[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__25666_SHARP_),cljs.core.cst$kw$client_modified.cljs$core$IFn$_invoke$arity$1(p1__25666_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.datensicherung.loesche_datei(p1__25666_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.datensicherung.lade_welt_aus_datei(p1__25666_SHARP_);
})], null),"laden"], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__25666_SHARP_)]);
}),dateien);
});
dep.views.datensicherung.datei_form_felder = (function dep$views$datensicherung$datei_form_felder(form_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Datei",cljs.core.cst$kw$level,cljs.core.cst$kw$level2], null),dep.helpers.form_helpers.rc_input_box("Name",cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$Name,null,cljs.core.identity,false,form_state),dep.helpers.form_helpers.rc_input_box("Zeitstempel",cljs.core.cst$kw$Zeitstempel.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_state)),cljs.core.cst$kw$Zeitstempel,null,cljs.core.identity,true,form_state)], null);
});
dep.views.datensicherung.buttons = (function dep$views$datensicherung$buttons(form){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Name \u00E4ndern",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.datensicherung.umbenenne_datei(cljs.core.cst$kw$alter_DASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)));
})], null)], null);
});
/**
 * Komponente für das Laden und Speichern von Planungsdaten.
 */
dep.views.datensicherung.datensicherung = (function dep$views$datensicherung$datensicherung(){
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datei,"pldaten.edn"], null));
return (function (){
var dateien = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dateien], null)));
var welt = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$welt], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level2,cljs.core.cst$kw$label,"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"12px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.helpers.form_helpers.rc_input_box,"Daten in Datei",cljs.core.cst$kw$datei.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),cljs.core.cst$kw$datei,null,cljs.core.identity,false,s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"sichern",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
var c__18254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18255__auto__ = (function (){var switch__18216__auto__ = (function (state_25681){
var state_val_25682 = (state_25681[(1)]);
if((state_val_25682 === (1))){
var inst_25667 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([welt], 0));
var inst_25668 = cljs.core.deref(s);
var inst_25669 = cljs.core.cst$kw$datei.cljs$core$IFn$_invoke$arity$1(inst_25668);
var inst_25670 = dep.helpers.drop_file_stream.write_text(inst_25667,inst_25669);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25681__$1,(2),inst_25670);
} else {
if((state_val_25682 === (2))){
var inst_25672 = (state_25681[(2)]);
var inst_25673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25674 = dep.helpers.drop_file_stream.list_folder();
var state_25681__$1 = (function (){var statearr_25683 = state_25681;
(statearr_25683[(7)] = inst_25673);

(statearr_25683[(8)] = inst_25672);

return statearr_25683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25681__$1,(3),inst_25674);
} else {
if((state_val_25682 === (3))){
var inst_25673 = (state_25681[(7)]);
var inst_25676 = (state_25681[(2)]);
var inst_25677 = [cljs.core.cst$kw$dateien,inst_25676];
var inst_25678 = (new cljs.core.PersistentVector(null,2,(5),inst_25673,inst_25677,null));
var inst_25679 = re_frame.core.dispatch_sync(inst_25678);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25681__$1,inst_25679);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__18217__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__18217__auto____0 = (function (){
var statearr_25684 = [null,null,null,null,null,null,null,null,null];
(statearr_25684[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__18217__auto__);

(statearr_25684[(1)] = (1));

return statearr_25684;
});
var dep$views$datensicherung$datensicherung_$_state_machine__18217__auto____1 = (function (state_25681){
while(true){
var ret_value__18218__auto__ = (function (){try{while(true){
var result__18219__auto__ = switch__18216__auto__(state_25681);
if(cljs.core.keyword_identical_QMARK_(result__18219__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18219__auto__;
}
break;
}
}catch (e25685){var ex__18220__auto__ = e25685;
var statearr_25686_25689 = state_25681;
(statearr_25686_25689[(2)] = ex__18220__auto__);


if(cljs.core.seq((state_25681[(4)]))){
var statearr_25687_25690 = state_25681;
(statearr_25687_25690[(1)] = cljs.core.first((state_25681[(4)])));

} else {
throw ex__18220__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18218__auto__,cljs.core.cst$kw$recur)){
var G__25691 = state_25681;
state_25681 = G__25691;
continue;
} else {
return ret_value__18218__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__18217__auto__ = function(state_25681){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__18217__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__18217__auto____1.call(this,state_25681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__18217__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__18217__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__18217__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__18217__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__18217__auto__;
})()
})();
var state__18256__auto__ = (function (){var statearr_25688 = (f__18255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18255__auto__.cljs$core$IFn$_invoke$arity$0() : f__18255__auto__.call(null));
(statearr_25688[(6)] = c__18254__auto__);

return statearr_25688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18256__auto__);
}));

return c__18254__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table(dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,cljs.core.cst$kw$Zeitstempel,cljs.core.cst$kw$Aktion1,cljs.core.cst$kw$Aktion2], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,cljs.core.cst$kw$Zeitstempel,cljs.core.cst$kw$Aktion1,cljs.core.cst$kw$Aktion2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Name,false], null)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dep.views.table.td_render_fn,cljs.core.cst$kw$Name,dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});
