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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__25169_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__25169_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.views.datensicherung.loesche_datei = (function dep$views$datensicherung$loesche_datei(d){
var dateien = cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__25170_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__25170_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)))));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),dateien,d], null));
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.views.datensicherung.lade_welt_aus_datei = (function dep$views$datensicherung$lade_welt_aus_datei(d){
var c__17528__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17529__auto__ = (function (){var switch__17505__auto__ = (function (state_25187){
var state_val_25188 = (state_25187[(1)]);
if((state_val_25188 === (1))){
var inst_25171 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_25172 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_25171);
var state_25187__$1 = state_25187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25187__$1,(2),inst_25172);
} else {
if((state_val_25188 === (2))){
var inst_25174 = (state_25187[(2)]);
var inst_25175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25176 = [new cljs.core.Keyword(null,"welt","welt",-1673248721),inst_25174];
var inst_25177 = (new cljs.core.PersistentVector(null,2,(5),inst_25175,inst_25176,null));
var inst_25178 = re_frame.core.dispatch.call(null,inst_25177);
var inst_25179 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25180 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_25187__$1 = (function (){var statearr_25189 = state_25187;
(statearr_25189[(7)] = inst_25178);

(statearr_25189[(8)] = inst_25179);

return statearr_25189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25187__$1,(3),inst_25180);
} else {
if((state_val_25188 === (3))){
var inst_25179 = (state_25187[(8)]);
var inst_25182 = (state_25187[(2)]);
var inst_25183 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_25182];
var inst_25184 = (new cljs.core.PersistentVector(null,2,(5),inst_25179,inst_25183,null));
var inst_25185 = re_frame.core.dispatch.call(null,inst_25184);
var state_25187__$1 = state_25187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25187__$1,inst_25185);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto__ = null;
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto____0 = (function (){
var statearr_25190 = [null,null,null,null,null,null,null,null,null];
(statearr_25190[(0)] = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto__);

(statearr_25190[(1)] = (1));

return statearr_25190;
});
var dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto____1 = (function (state_25187){
while(true){
var ret_value__17507__auto__ = (function (){try{while(true){
var result__17508__auto__ = switch__17505__auto__.call(null,state_25187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17508__auto__;
}
break;
}
}catch (e25191){var ex__17509__auto__ = e25191;
var statearr_25192_25195 = state_25187;
(statearr_25192_25195[(2)] = ex__17509__auto__);


if(cljs.core.seq.call(null,(state_25187[(4)]))){
var statearr_25193_25196 = state_25187;
(statearr_25193_25196[(1)] = cljs.core.first.call(null,(state_25187[(4)])));

} else {
throw ex__17509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25197 = state_25187;
state_25187 = G__25197;
continue;
} else {
return ret_value__17507__auto__;
}
break;
}
});
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto__ = function(state_25187){
switch(arguments.length){
case 0:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto____0.call(this);
case 1:
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto____1.call(this,state_25187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto____0;
dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto____1;
return dep$views$datensicherung$lade_welt_aus_datei_$_state_machine__17506__auto__;
})()
})();
var state__17530__auto__ = (function (){var statearr_25194 = f__17529__auto__.call(null);
(statearr_25194[(6)] = c__17528__auto__);

return statearr_25194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17530__auto__);
}));

return c__17528__auto__;
});
dep.views.datensicherung.umbenenne_datei = (function dep$views$datensicherung$umbenenne_datei(alter_name,neuer_name){
var dateien = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null)));
if(cljs.core.truth_(dep.views.datensicherung.datei_mit_namen.call(null,dateien,neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__17528__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17529__auto__ = (function (){var switch__17505__auto__ = (function (state_25213){
var state_val_25214 = (state_25213[(1)]);
if((state_val_25214 === (1))){
var inst_25198 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25213__$1,(2),inst_25198);
} else {
if((state_val_25214 === (2))){
var inst_25200 = (state_25213[(2)]);
var inst_25201 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_25213__$1 = (function (){var statearr_25215 = state_25213;
(statearr_25215[(7)] = inst_25200);

return statearr_25215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25213__$1,(3),inst_25201);
} else {
if((state_val_25214 === (3))){
var inst_25203 = (state_25213[(2)]);
var inst_25204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25205 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_25203];
var inst_25206 = (new cljs.core.PersistentVector(null,2,(5),inst_25204,inst_25205,null));
var inst_25207 = re_frame.core.dispatch_sync.call(null,inst_25206);
var inst_25208 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25209 = [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false];
var inst_25210 = (new cljs.core.PersistentVector(null,2,(5),inst_25208,inst_25209,null));
var inst_25211 = re_frame.core.dispatch.call(null,inst_25210);
var state_25213__$1 = (function (){var statearr_25216 = state_25213;
(statearr_25216[(8)] = inst_25207);

return statearr_25216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25213__$1,inst_25211);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto__ = null;
var dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto____0 = (function (){
var statearr_25217 = [null,null,null,null,null,null,null,null,null];
(statearr_25217[(0)] = dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto__);

(statearr_25217[(1)] = (1));

return statearr_25217;
});
var dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto____1 = (function (state_25213){
while(true){
var ret_value__17507__auto__ = (function (){try{while(true){
var result__17508__auto__ = switch__17505__auto__.call(null,state_25213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17508__auto__;
}
break;
}
}catch (e25218){var ex__17509__auto__ = e25218;
var statearr_25219_25222 = state_25213;
(statearr_25219_25222[(2)] = ex__17509__auto__);


if(cljs.core.seq.call(null,(state_25213[(4)]))){
var statearr_25220_25223 = state_25213;
(statearr_25220_25223[(1)] = cljs.core.first.call(null,(state_25213[(4)])));

} else {
throw ex__17509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25224 = state_25213;
state_25213 = G__25224;
continue;
} else {
return ret_value__17507__auto__;
}
break;
}
});
dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto__ = function(state_25213){
switch(arguments.length){
case 0:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto____0.call(this);
case 1:
return dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto____1.call(this,state_25213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto____0;
dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto____1;
return dep$views$datensicherung$umbenenne_datei_$_state_machine__17506__auto__;
})()
})();
var state__17530__auto__ = (function (){var statearr_25221 = f__17529__auto__.call(null);
(statearr_25221[(6)] = c__17528__auto__);

return statearr_25221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17530__auto__);
}));

return c__17528__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.views.datensicherung.dateien__GT_table = (function dep$views$datensicherung$dateien__GT_table(dateien){
return cljs.core.mapv.call(null,(function (p1__25225_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572),new cljs.core.Keyword(null,"alter-name","alter-name",1575294286)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__25225_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__25225_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.loesche_datei.call(null,p1__25225_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.datensicherung.lade_welt_aus_datei.call(null,p1__25225_SHARP_);
})], null),"laden"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__25225_SHARP_)]);
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
var c__17528__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17529__auto__ = (function (){var switch__17505__auto__ = (function (state_25240){
var state_val_25241 = (state_25240[(1)]);
if((state_val_25241 === (1))){
var inst_25226 = cljs.core.prn_str.call(null,welt);
var inst_25227 = cljs.core.deref.call(null,s);
var inst_25228 = new cljs.core.Keyword(null,"datei","datei",936123672).cljs$core$IFn$_invoke$arity$1(inst_25227);
var inst_25229 = dep.helpers.drop_file_stream.write_text.call(null,inst_25226,inst_25228);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25240__$1,(2),inst_25229);
} else {
if((state_val_25241 === (2))){
var inst_25231 = (state_25240[(2)]);
var inst_25232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25233 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_25240__$1 = (function (){var statearr_25242 = state_25240;
(statearr_25242[(7)] = inst_25232);

(statearr_25242[(8)] = inst_25231);

return statearr_25242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25240__$1,(3),inst_25233);
} else {
if((state_val_25241 === (3))){
var inst_25232 = (state_25240[(7)]);
var inst_25235 = (state_25240[(2)]);
var inst_25236 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_25235];
var inst_25237 = (new cljs.core.PersistentVector(null,2,(5),inst_25232,inst_25236,null));
var inst_25238 = re_frame.core.dispatch_sync.call(null,inst_25237);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25240__$1,inst_25238);
} else {
return null;
}
}
}
});
return (function() {
var dep$views$datensicherung$datensicherung_$_state_machine__17506__auto__ = null;
var dep$views$datensicherung$datensicherung_$_state_machine__17506__auto____0 = (function (){
var statearr_25243 = [null,null,null,null,null,null,null,null,null];
(statearr_25243[(0)] = dep$views$datensicherung$datensicherung_$_state_machine__17506__auto__);

(statearr_25243[(1)] = (1));

return statearr_25243;
});
var dep$views$datensicherung$datensicherung_$_state_machine__17506__auto____1 = (function (state_25240){
while(true){
var ret_value__17507__auto__ = (function (){try{while(true){
var result__17508__auto__ = switch__17505__auto__.call(null,state_25240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17508__auto__;
}
break;
}
}catch (e25244){var ex__17509__auto__ = e25244;
var statearr_25245_25248 = state_25240;
(statearr_25245_25248[(2)] = ex__17509__auto__);


if(cljs.core.seq.call(null,(state_25240[(4)]))){
var statearr_25246_25249 = state_25240;
(statearr_25246_25249[(1)] = cljs.core.first.call(null,(state_25240[(4)])));

} else {
throw ex__17509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25250 = state_25240;
state_25240 = G__25250;
continue;
} else {
return ret_value__17507__auto__;
}
break;
}
});
dep$views$datensicherung$datensicherung_$_state_machine__17506__auto__ = function(state_25240){
switch(arguments.length){
case 0:
return dep$views$datensicherung$datensicherung_$_state_machine__17506__auto____0.call(this);
case 1:
return dep$views$datensicherung$datensicherung_$_state_machine__17506__auto____1.call(this,state_25240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$views$datensicherung$datensicherung_$_state_machine__17506__auto__.cljs$core$IFn$_invoke$arity$0 = dep$views$datensicherung$datensicherung_$_state_machine__17506__auto____0;
dep$views$datensicherung$datensicherung_$_state_machine__17506__auto__.cljs$core$IFn$_invoke$arity$1 = dep$views$datensicherung$datensicherung_$_state_machine__17506__auto____1;
return dep$views$datensicherung$datensicherung_$_state_machine__17506__auto__;
})()
})();
var state__17530__auto__ = (function (){var statearr_25247 = f__17529__auto__.call(null);
(statearr_25247[(6)] = c__17528__auto__);

return statearr_25247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17530__auto__);
}));

return c__17528__auto__;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.table.table_ui,dep.views.datensicherung.dateien__GT_table.call(null,dateien),"Dateien",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),false], null)], null),cljs.core.partial.call(null,dep.views.table.td_render_fn,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.views.datensicherung.datei_form_felder,dep.views.datensicherung.buttons)], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
