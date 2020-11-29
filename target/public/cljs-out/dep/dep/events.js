// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('dep.model.quartal');
goog.require('dep.db');
goog.require('dep.helpers.drop_file_stream');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"welt","welt",-1673248721),(function (_,p__27357){
var vec__27358 = p__27357;
var ___$1 = cljs.core.nth.call(null,vec__27358,(0),null);
var welt = cljs.core.nth.call(null,vec__27358,(1),null);
return welt;
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (db){
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,db);

var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27369){
var state_val_27370 = (state_27369[(1)]);
if((state_val_27370 === (1))){
var inst_27361 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27362 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_27369__$1 = (function (){var statearr_27371 = state_27369;
(statearr_27371[(7)] = inst_27361);

return statearr_27371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27369__$1,(2),inst_27362);
} else {
if((state_val_27370 === (2))){
var inst_27361 = (state_27369[(7)]);
var inst_27364 = (state_27369[(2)]);
var inst_27365 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_27364];
var inst_27366 = (new cljs.core.PersistentVector(null,2,(5),inst_27361,inst_27365,null));
var inst_27367 = re_frame.core.dispatch.call(null,inst_27366);
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27369__$1,inst_27367);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__18795__auto__ = null;
var dep$events$state_machine__18795__auto____0 = (function (){
var statearr_27372 = [null,null,null,null,null,null,null,null];
(statearr_27372[(0)] = dep$events$state_machine__18795__auto__);

(statearr_27372[(1)] = (1));

return statearr_27372;
});
var dep$events$state_machine__18795__auto____1 = (function (state_27369){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27373){var ex__18798__auto__ = e27373;
var statearr_27374_27377 = state_27369;
(statearr_27374_27377[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27369[(4)]))){
var statearr_27375_27378 = state_27369;
(statearr_27375_27378[(1)] = cljs.core.first.call(null,(state_27369[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27379 = state_27369;
state_27369 = G__27379;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$events$state_machine__18795__auto__ = function(state_27369){
switch(arguments.length){
case 0:
return dep$events$state_machine__18795__auto____0.call(this);
case 1:
return dep$events$state_machine__18795__auto____1.call(this,state_27369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__18795__auto____0;
dep$events$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__18795__auto____1;
return dep$events$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27376 = f__18869__auto__.call(null);
(statearr_27376[(6)] = c__18868__auto__);

return statearr_27376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),dep.db.default_db], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"table-sort","table-sort",365090451),(function (db,p__27380){
var vec__27381 = p__27380;
var _ = cljs.core.nth.call(null,vec__27381,(0),null);
var item = cljs.core.nth.call(null,vec__27381,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"table-sort","table-sort",365090451),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-sort-sequence","change-sort-sequence",1576198616),(function (db,p__27384){
var vec__27385 = p__27384;
var _ = cljs.core.nth.call(null,vec__27385,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-sort","table-sort",365090451),new cljs.core.Keyword(null,"ascending","ascending",-988350486)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"ascending","ascending",-988350486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-sort","table-sort",365090451).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-sort-column","change-sort-column",-1968489168),(function (db,p__27388){
var vec__27389 = p__27388;
var _ = cljs.core.nth.call(null,vec__27389,(0),null);
var item = cljs.core.nth.call(null,vec__27389,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-sort","table-sort",365090451),new cljs.core.Keyword(null,"sort-column","sort-column",-893300107)], null),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),(function (db,p__27392){
var vec__27393 = p__27392;
var _ = cljs.core.nth.call(null,vec__27393,(0),null);
var item = cljs.core.nth.call(null,vec__27393,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected","selected",574897764),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),(function (db,p__27396){
var vec__27397 = p__27396;
var _ = cljs.core.nth.call(null,vec__27397,(0),null);
var item = cljs.core.nth.call(null,vec__27397,(1),null);
var form = cljs.core.nth.call(null,vec__27397,(2),null);
var edit_component = cljs.core.nth.call(null,vec__27397,(3),null);
var buttons = cljs.core.nth.call(null,vec__27397,(4),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),item,new cljs.core.Keyword(null,"modal-form","modal-form",293545775),form,new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),edit_component,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),(function (db,p__27400){
var vec__27401 = p__27400;
var _ = cljs.core.nth.call(null,vec__27401,(0),null);
var item = cljs.core.nth.call(null,vec__27401,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),parseInt(item),new cljs.core.Keyword(null,"quartal","quartal",-467113586),cljs.core.first.call(null,dep.model.quartal.quartale_fuer_jahr.call(null,item)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586),(function (db,p__27404){
var vec__27405 = p__27404;
var _ = cljs.core.nth.call(null,vec__27405,(0),null);
var item = cljs.core.nth.call(null,vec__27405,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.string__GT_quartal.call(null,item));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jahre","jahre",2053865477),(function (db,p__27408){
var vec__27409 = p__27408;
var _ = cljs.core.nth.call(null,vec__27409,(0),null);
var item = cljs.core.nth.call(null,vec__27409,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"jahre","jahre",2053865477),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),(function (db,p__27412){
var vec__27413 = p__27412;
var _ = cljs.core.nth.call(null,vec__27413,(0),null);
var item = cljs.core.nth.call(null,vec__27413,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),(function (db,p__27416){
var vec__27417 = p__27416;
var _ = cljs.core.nth.call(null,vec__27417,(0),null);
var item = cljs.core.nth.call(null,vec__27417,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"manipels","manipels",626202456),(function (db,p__27420){
var vec__27421 = p__27420;
var _ = cljs.core.nth.call(null,vec__27421,(0),null);
var item = cljs.core.nth.call(null,vec__27421,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"manipels","manipels",626202456),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"module","module",1424618191),(function (db,p__27424){
var vec__27425 = p__27424;
var _ = cljs.core.nth.call(null,vec__27425,(0),null);
var item = cljs.core.nth.call(null,vec__27425,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"module","module",1424618191),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"lven","lven",294854909),(function (db,p__27428){
var vec__27429 = p__27428;
var _ = cljs.core.nth.call(null,vec__27429,(0),null);
var item = cljs.core.nth.call(null,vec__27429,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lven","lven",294854909),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dateien","dateien",64338828),(function (db,p__27432){
var vec__27433 = p__27432;
var _ = cljs.core.nth.call(null,vec__27433,(0),null);
var item = cljs.core.nth.call(null,vec__27433,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dateien","dateien",64338828),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),(function (db,p__27436){
var vec__27437 = p__27436;
var _ = cljs.core.nth.call(null,vec__27437,(0),null);
var dateien = cljs.core.nth.call(null,vec__27437,(1),null);
var datei = cljs.core.nth.call(null,vec__27437,(2),null);
var c__18868__auto___27452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_27445){
var state_val_27446 = (state_27445[(1)]);
if((state_val_27446 === (1))){
var inst_27440 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(datei);
var inst_27441 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_27440);
var state_27445__$1 = state_27445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27445__$1,(2),inst_27441);
} else {
if((state_val_27446 === (2))){
var inst_27443 = (state_27445[(2)]);
var state_27445__$1 = state_27445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27445__$1,inst_27443);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__18795__auto__ = null;
var dep$events$state_machine__18795__auto____0 = (function (){
var statearr_27447 = [null,null,null,null,null,null,null];
(statearr_27447[(0)] = dep$events$state_machine__18795__auto__);

(statearr_27447[(1)] = (1));

return statearr_27447;
});
var dep$events$state_machine__18795__auto____1 = (function (state_27445){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_27445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e27448){var ex__18798__auto__ = e27448;
var statearr_27449_27453 = state_27445;
(statearr_27449_27453[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_27445[(4)]))){
var statearr_27450_27454 = state_27445;
(statearr_27450_27454[(1)] = cljs.core.first.call(null,(state_27445[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27455 = state_27445;
state_27445 = G__27455;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
dep$events$state_machine__18795__auto__ = function(state_27445){
switch(arguments.length){
case 0:
return dep$events$state_machine__18795__auto____0.call(this);
case 1:
return dep$events$state_machine__18795__auto____1.call(this,state_27445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__18795__auto____0;
dep$events$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__18795__auto____1;
return dep$events$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_27451 = f__18869__auto__.call(null);
(statearr_27451[(6)] = c__18868__auto___27452);

return statearr_27451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dateien","dateien",64338828),dateien);
}));

//# sourceMappingURL=events.js.map
