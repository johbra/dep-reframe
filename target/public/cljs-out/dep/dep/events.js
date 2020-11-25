// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('dep.model.quartal');
goog.require('dep.db');
goog.require('dep.helpers.drop_file_stream');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"welt","welt",-1673248721),(function (_,p__27380){
var vec__27381 = p__27380;
var ___$1 = cljs.core.nth.call(null,vec__27381,(0),null);
var welt = cljs.core.nth.call(null,vec__27381,(1),null);
return welt;
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (db){
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,db);

var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27392){
var state_val_27393 = (state_27392[(1)]);
if((state_val_27393 === (1))){
var inst_27384 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27385 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_27392__$1 = (function (){var statearr_27394 = state_27392;
(statearr_27394[(7)] = inst_27384);

return statearr_27394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(2),inst_27385);
} else {
if((state_val_27393 === (2))){
var inst_27384 = (state_27392[(7)]);
var inst_27387 = (state_27392[(2)]);
var inst_27388 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_27387];
var inst_27389 = (new cljs.core.PersistentVector(null,2,(5),inst_27384,inst_27388,null));
var inst_27390 = re_frame.core.dispatch.call(null,inst_27389);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27392__$1,inst_27390);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__18818__auto__ = null;
var dep$events$state_machine__18818__auto____0 = (function (){
var statearr_27395 = [null,null,null,null,null,null,null,null];
(statearr_27395[(0)] = dep$events$state_machine__18818__auto__);

(statearr_27395[(1)] = (1));

return statearr_27395;
});
var dep$events$state_machine__18818__auto____1 = (function (state_27392){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27396){var ex__18821__auto__ = e27396;
var statearr_27397_27400 = state_27392;
(statearr_27397_27400[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27392[(4)]))){
var statearr_27398_27401 = state_27392;
(statearr_27398_27401[(1)] = cljs.core.first.call(null,(state_27392[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27402 = state_27392;
state_27392 = G__27402;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$events$state_machine__18818__auto__ = function(state_27392){
switch(arguments.length){
case 0:
return dep$events$state_machine__18818__auto____0.call(this);
case 1:
return dep$events$state_machine__18818__auto____1.call(this,state_27392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__18818__auto____0;
dep$events$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__18818__auto____1;
return dep$events$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27399 = f__18892__auto__.call(null);
(statearr_27399[(6)] = c__18891__auto__);

return statearr_27399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),dep.db.default_db], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"table-sort","table-sort",365090451),(function (db,p__27403){
var vec__27404 = p__27403;
var _ = cljs.core.nth.call(null,vec__27404,(0),null);
var item = cljs.core.nth.call(null,vec__27404,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"table-sort","table-sort",365090451),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-sort-sequence","change-sort-sequence",1576198616),(function (db,p__27407){
var vec__27408 = p__27407;
var _ = cljs.core.nth.call(null,vec__27408,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-sort","table-sort",365090451),new cljs.core.Keyword(null,"ascending","ascending",-988350486)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"ascending","ascending",-988350486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-sort","table-sort",365090451).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-sort-column","change-sort-column",-1968489168),(function (db,p__27411){
var vec__27412 = p__27411;
var _ = cljs.core.nth.call(null,vec__27412,(0),null);
var item = cljs.core.nth.call(null,vec__27412,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-sort","table-sort",365090451),new cljs.core.Keyword(null,"sort-column","sort-column",-893300107)], null),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),(function (db,p__27415){
var vec__27416 = p__27415;
var _ = cljs.core.nth.call(null,vec__27416,(0),null);
var item = cljs.core.nth.call(null,vec__27416,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected","selected",574897764),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),(function (db,p__27419){
var vec__27420 = p__27419;
var _ = cljs.core.nth.call(null,vec__27420,(0),null);
var item = cljs.core.nth.call(null,vec__27420,(1),null);
var form = cljs.core.nth.call(null,vec__27420,(2),null);
var edit_component = cljs.core.nth.call(null,vec__27420,(3),null);
var buttons = cljs.core.nth.call(null,vec__27420,(4),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),item,new cljs.core.Keyword(null,"modal-form","modal-form",293545775),form,new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),edit_component,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),(function (db,p__27423){
var vec__27424 = p__27423;
var _ = cljs.core.nth.call(null,vec__27424,(0),null);
var item = cljs.core.nth.call(null,vec__27424,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),parseInt(item),new cljs.core.Keyword(null,"quartal","quartal",-467113586),cljs.core.first.call(null,dep.model.quartal.quartale_fuer_jahr.call(null,item)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586),(function (db,p__27427){
var vec__27428 = p__27427;
var _ = cljs.core.nth.call(null,vec__27428,(0),null);
var item = cljs.core.nth.call(null,vec__27428,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.string__GT_quartal.call(null,item));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jahre","jahre",2053865477),(function (db,p__27431){
var vec__27432 = p__27431;
var _ = cljs.core.nth.call(null,vec__27432,(0),null);
var item = cljs.core.nth.call(null,vec__27432,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"jahre","jahre",2053865477),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),(function (db,p__27435){
var vec__27436 = p__27435;
var _ = cljs.core.nth.call(null,vec__27436,(0),null);
var item = cljs.core.nth.call(null,vec__27436,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),(function (db,p__27439){
var vec__27440 = p__27439;
var _ = cljs.core.nth.call(null,vec__27440,(0),null);
var item = cljs.core.nth.call(null,vec__27440,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"manipels","manipels",626202456),(function (db,p__27443){
var vec__27444 = p__27443;
var _ = cljs.core.nth.call(null,vec__27444,(0),null);
var item = cljs.core.nth.call(null,vec__27444,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"manipels","manipels",626202456),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"module","module",1424618191),(function (db,p__27447){
var vec__27448 = p__27447;
var _ = cljs.core.nth.call(null,vec__27448,(0),null);
var item = cljs.core.nth.call(null,vec__27448,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"module","module",1424618191),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"lven","lven",294854909),(function (db,p__27451){
var vec__27452 = p__27451;
var _ = cljs.core.nth.call(null,vec__27452,(0),null);
var item = cljs.core.nth.call(null,vec__27452,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lven","lven",294854909),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dateien","dateien",64338828),(function (db,p__27455){
var vec__27456 = p__27455;
var _ = cljs.core.nth.call(null,vec__27456,(0),null);
var item = cljs.core.nth.call(null,vec__27456,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dateien","dateien",64338828),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),(function (db,p__27459){
var vec__27460 = p__27459;
var _ = cljs.core.nth.call(null,vec__27460,(0),null);
var dateien = cljs.core.nth.call(null,vec__27460,(1),null);
var datei = cljs.core.nth.call(null,vec__27460,(2),null);
var c__18891__auto___27475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_27468){
var state_val_27469 = (state_27468[(1)]);
if((state_val_27469 === (1))){
var inst_27463 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(datei);
var inst_27464 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_27463);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27468__$1,(2),inst_27464);
} else {
if((state_val_27469 === (2))){
var inst_27466 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27468__$1,inst_27466);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__18818__auto__ = null;
var dep$events$state_machine__18818__auto____0 = (function (){
var statearr_27470 = [null,null,null,null,null,null,null];
(statearr_27470[(0)] = dep$events$state_machine__18818__auto__);

(statearr_27470[(1)] = (1));

return statearr_27470;
});
var dep$events$state_machine__18818__auto____1 = (function (state_27468){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_27468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e27471){var ex__18821__auto__ = e27471;
var statearr_27472_27476 = state_27468;
(statearr_27472_27476[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_27468[(4)]))){
var statearr_27473_27477 = state_27468;
(statearr_27473_27477[(1)] = cljs.core.first.call(null,(state_27468[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27478 = state_27468;
state_27468 = G__27478;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
dep$events$state_machine__18818__auto__ = function(state_27468){
switch(arguments.length){
case 0:
return dep$events$state_machine__18818__auto____0.call(this);
case 1:
return dep$events$state_machine__18818__auto____1.call(this,state_27468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__18818__auto____0;
dep$events$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__18818__auto____1;
return dep$events$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_27474 = f__18892__auto__.call(null);
(statearr_27474[(6)] = c__18891__auto___27475);

return statearr_27474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dateien","dateien",64338828),dateien);
}));

//# sourceMappingURL=events.js.map
