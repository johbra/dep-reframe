// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('dep.model.quartal');
goog.require('dep.db');
goog.require('dep.helpers.drop_file_stream');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"welt","welt",-1673248721),(function (_,p__32260){
var vec__32261 = p__32260;
var ___$1 = cljs.core.nth.call(null,vec__32261,(0),null);
var welt = cljs.core.nth.call(null,vec__32261,(1),null);
return welt;
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (db){
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,db);

var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (1))){
var inst_32264 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32265 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_32272__$1 = (function (){var statearr_32274 = state_32272;
(statearr_32274[(7)] = inst_32264);

return statearr_32274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32272__$1,(2),inst_32265);
} else {
if((state_val_32273 === (2))){
var inst_32264 = (state_32272[(7)]);
var inst_32267 = (state_32272[(2)]);
var inst_32268 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_32267];
var inst_32269 = (new cljs.core.PersistentVector(null,2,(5),inst_32264,inst_32268,null));
var inst_32270 = re_frame.core.dispatch.call(null,inst_32269);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32272__$1,inst_32270);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__24054__auto__ = null;
var dep$events$state_machine__24054__auto____0 = (function (){
var statearr_32275 = [null,null,null,null,null,null,null,null];
(statearr_32275[(0)] = dep$events$state_machine__24054__auto__);

(statearr_32275[(1)] = (1));

return statearr_32275;
});
var dep$events$state_machine__24054__auto____1 = (function (state_32272){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_32272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e32276){var ex__24057__auto__ = e32276;
var statearr_32277_32280 = state_32272;
(statearr_32277_32280[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_32272[(4)]))){
var statearr_32278_32281 = state_32272;
(statearr_32278_32281[(1)] = cljs.core.first.call(null,(state_32272[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32282 = state_32272;
state_32272 = G__32282;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
dep$events$state_machine__24054__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return dep$events$state_machine__24054__auto____0.call(this);
case 1:
return dep$events$state_machine__24054__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__24054__auto____0;
dep$events$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__24054__auto____1;
return dep$events$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_32279 = f__24128__auto__.call(null);
(statearr_32279[(6)] = c__24127__auto__);

return statearr_32279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),dep.db.default_db], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"table-sort","table-sort",365090451),(function (db,p__32283){
var vec__32284 = p__32283;
var _ = cljs.core.nth.call(null,vec__32284,(0),null);
var item = cljs.core.nth.call(null,vec__32284,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"table-sort","table-sort",365090451),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-sort-sequence","change-sort-sequence",1576198616),(function (db,p__32287){
var vec__32288 = p__32287;
var _ = cljs.core.nth.call(null,vec__32288,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-sort","table-sort",365090451),new cljs.core.Keyword(null,"ascending","ascending",-988350486)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"ascending","ascending",-988350486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-sort","table-sort",365090451).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-sort-column","change-sort-column",-1968489168),(function (db,p__32291){
var vec__32292 = p__32291;
var _ = cljs.core.nth.call(null,vec__32292,(0),null);
var item = cljs.core.nth.call(null,vec__32292,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-sort","table-sort",365090451),new cljs.core.Keyword(null,"sort-column","sort-column",-893300107)], null),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),(function (db,p__32295){
var vec__32296 = p__32295;
var _ = cljs.core.nth.call(null,vec__32296,(0),null);
var item = cljs.core.nth.call(null,vec__32296,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected","selected",574897764),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),(function (db,p__32299){
var vec__32300 = p__32299;
var _ = cljs.core.nth.call(null,vec__32300,(0),null);
var item = cljs.core.nth.call(null,vec__32300,(1),null);
var form = cljs.core.nth.call(null,vec__32300,(2),null);
var edit_component = cljs.core.nth.call(null,vec__32300,(3),null);
var buttons = cljs.core.nth.call(null,vec__32300,(4),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),item,new cljs.core.Keyword(null,"modal-form","modal-form",293545775),form,new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),edit_component,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),(function (db,p__32303){
var vec__32304 = p__32303;
var _ = cljs.core.nth.call(null,vec__32304,(0),null);
var item = cljs.core.nth.call(null,vec__32304,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),parseInt(item),new cljs.core.Keyword(null,"quartal","quartal",-467113586),cljs.core.first.call(null,dep.model.quartal.quartale_fuer_jahr.call(null,item)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586),(function (db,p__32307){
var vec__32308 = p__32307;
var _ = cljs.core.nth.call(null,vec__32308,(0),null);
var item = cljs.core.nth.call(null,vec__32308,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.string__GT_quartal.call(null,item));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jahre","jahre",2053865477),(function (db,p__32311){
var vec__32312 = p__32311;
var _ = cljs.core.nth.call(null,vec__32312,(0),null);
var item = cljs.core.nth.call(null,vec__32312,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"jahre","jahre",2053865477),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),(function (db,p__32315){
var vec__32316 = p__32315;
var _ = cljs.core.nth.call(null,vec__32316,(0),null);
var item = cljs.core.nth.call(null,vec__32316,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),(function (db,p__32319){
var vec__32320 = p__32319;
var _ = cljs.core.nth.call(null,vec__32320,(0),null);
var item = cljs.core.nth.call(null,vec__32320,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"manipels","manipels",626202456),(function (db,p__32323){
var vec__32324 = p__32323;
var _ = cljs.core.nth.call(null,vec__32324,(0),null);
var item = cljs.core.nth.call(null,vec__32324,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"manipels","manipels",626202456),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"module","module",1424618191),(function (db,p__32327){
var vec__32328 = p__32327;
var _ = cljs.core.nth.call(null,vec__32328,(0),null);
var item = cljs.core.nth.call(null,vec__32328,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"module","module",1424618191),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"lven","lven",294854909),(function (db,p__32331){
var vec__32332 = p__32331;
var _ = cljs.core.nth.call(null,vec__32332,(0),null);
var item = cljs.core.nth.call(null,vec__32332,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lven","lven",294854909),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dateien","dateien",64338828),(function (db,p__32335){
var vec__32336 = p__32335;
var _ = cljs.core.nth.call(null,vec__32336,(0),null);
var item = cljs.core.nth.call(null,vec__32336,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dateien","dateien",64338828),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),(function (db,p__32339){
var vec__32340 = p__32339;
var _ = cljs.core.nth.call(null,vec__32340,(0),null);
var dateien = cljs.core.nth.call(null,vec__32340,(1),null);
var datei = cljs.core.nth.call(null,vec__32340,(2),null);
var c__24127__auto___32355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_32348){
var state_val_32349 = (state_32348[(1)]);
if((state_val_32349 === (1))){
var inst_32343 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(datei);
var inst_32344 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_32343);
var state_32348__$1 = state_32348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32348__$1,(2),inst_32344);
} else {
if((state_val_32349 === (2))){
var inst_32346 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32348__$1,inst_32346);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__24054__auto__ = null;
var dep$events$state_machine__24054__auto____0 = (function (){
var statearr_32350 = [null,null,null,null,null,null,null];
(statearr_32350[(0)] = dep$events$state_machine__24054__auto__);

(statearr_32350[(1)] = (1));

return statearr_32350;
});
var dep$events$state_machine__24054__auto____1 = (function (state_32348){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_32348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e32351){var ex__24057__auto__ = e32351;
var statearr_32352_32356 = state_32348;
(statearr_32352_32356[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_32348[(4)]))){
var statearr_32353_32357 = state_32348;
(statearr_32353_32357[(1)] = cljs.core.first.call(null,(state_32348[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32358 = state_32348;
state_32348 = G__32358;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
dep$events$state_machine__24054__auto__ = function(state_32348){
switch(arguments.length){
case 0:
return dep$events$state_machine__24054__auto____0.call(this);
case 1:
return dep$events$state_machine__24054__auto____1.call(this,state_32348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__24054__auto____0;
dep$events$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__24054__auto____1;
return dep$events$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_32354 = f__24128__auto__.call(null);
(statearr_32354[(6)] = c__24127__auto___32355);

return statearr_32354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dateien","dateien",64338828),dateien);
}));

//# sourceMappingURL=events.js.map
