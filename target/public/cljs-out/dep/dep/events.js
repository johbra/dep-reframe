// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('dep.model.quartal');
goog.require('dep.db');
goog.require('dep.helpers.drop_file_stream');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"welt","welt",-1673248721),(function (_,p__21584){
var vec__21585 = p__21584;
var ___$1 = cljs.core.nth.call(null,vec__21585,(0),null);
var welt = cljs.core.nth.call(null,vec__21585,(1),null);
return welt;
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (db){
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,db);

var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21596){
var state_val_21597 = (state_21596[(1)]);
if((state_val_21597 === (1))){
var inst_21588 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21589 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_21596__$1 = (function (){var statearr_21598 = state_21596;
(statearr_21598[(7)] = inst_21588);

return statearr_21598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21596__$1,(2),inst_21589);
} else {
if((state_val_21597 === (2))){
var inst_21588 = (state_21596[(7)]);
var inst_21591 = (state_21596[(2)]);
var inst_21592 = [new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_21591];
var inst_21593 = (new cljs.core.PersistentVector(null,2,(5),inst_21588,inst_21592,null));
var inst_21594 = re_frame.core.dispatch.call(null,inst_21593);
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21596__$1,inst_21594);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__13022__auto__ = null;
var dep$events$state_machine__13022__auto____0 = (function (){
var statearr_21599 = [null,null,null,null,null,null,null,null];
(statearr_21599[(0)] = dep$events$state_machine__13022__auto__);

(statearr_21599[(1)] = (1));

return statearr_21599;
});
var dep$events$state_machine__13022__auto____1 = (function (state_21596){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21600){var ex__13025__auto__ = e21600;
var statearr_21601_21604 = state_21596;
(statearr_21601_21604[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21596[(4)]))){
var statearr_21602_21605 = state_21596;
(statearr_21602_21605[(1)] = cljs.core.first.call(null,(state_21596[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21606 = state_21596;
state_21596 = G__21606;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$events$state_machine__13022__auto__ = function(state_21596){
switch(arguments.length){
case 0:
return dep$events$state_machine__13022__auto____0.call(this);
case 1:
return dep$events$state_machine__13022__auto____1.call(this,state_21596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__13022__auto____0;
dep$events$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__13022__auto____1;
return dep$events$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21603 = f__13096__auto__.call(null);
(statearr_21603[(6)] = c__13095__auto__);

return statearr_21603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),dep.db.default_db], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"table-sort","table-sort",365090451),(function (db,p__21607){
var vec__21608 = p__21607;
var _ = cljs.core.nth.call(null,vec__21608,(0),null);
var item = cljs.core.nth.call(null,vec__21608,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"table-sort","table-sort",365090451),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-sort-sequence","change-sort-sequence",1576198616),(function (db,p__21611){
var vec__21612 = p__21611;
var _ = cljs.core.nth.call(null,vec__21612,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-sort","table-sort",365090451),new cljs.core.Keyword(null,"ascending","ascending",-988350486)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"ascending","ascending",-988350486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-sort","table-sort",365090451).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-sort-column","change-sort-column",-1968489168),(function (db,p__21615){
var vec__21616 = p__21615;
var _ = cljs.core.nth.call(null,vec__21616,(0),null);
var item = cljs.core.nth.call(null,vec__21616,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-sort","table-sort",365090451),new cljs.core.Keyword(null,"sort-column","sort-column",-893300107)], null),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),(function (db,p__21619){
var vec__21620 = p__21619;
var _ = cljs.core.nth.call(null,vec__21620,(0),null);
var item = cljs.core.nth.call(null,vec__21620,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected","selected",574897764),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),(function (db,p__21623){
var vec__21624 = p__21623;
var _ = cljs.core.nth.call(null,vec__21624,(0),null);
var item = cljs.core.nth.call(null,vec__21624,(1),null);
var form = cljs.core.nth.call(null,vec__21624,(2),null);
var edit_component = cljs.core.nth.call(null,vec__21624,(3),null);
var buttons = cljs.core.nth.call(null,vec__21624,(4),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),item,new cljs.core.Keyword(null,"modal-form","modal-form",293545775),form,new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),edit_component,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),(function (db,p__21627){
var vec__21628 = p__21627;
var _ = cljs.core.nth.call(null,vec__21628,(0),null);
var item = cljs.core.nth.call(null,vec__21628,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),parseInt(item),new cljs.core.Keyword(null,"quartal","quartal",-467113586),cljs.core.first.call(null,dep.model.quartal.quartale_fuer_jahr.call(null,item)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586),(function (db,p__21631){
var vec__21632 = p__21631;
var _ = cljs.core.nth.call(null,vec__21632,(0),null);
var item = cljs.core.nth.call(null,vec__21632,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.string__GT_quartal.call(null,item));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jahre","jahre",2053865477),(function (db,p__21635){
var vec__21636 = p__21635;
var _ = cljs.core.nth.call(null,vec__21636,(0),null);
var item = cljs.core.nth.call(null,vec__21636,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"jahre","jahre",2053865477),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),(function (db,p__21639){
var vec__21640 = p__21639;
var _ = cljs.core.nth.call(null,vec__21640,(0),null);
var item = cljs.core.nth.call(null,vec__21640,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),(function (db,p__21643){
var vec__21644 = p__21643;
var _ = cljs.core.nth.call(null,vec__21644,(0),null);
var item = cljs.core.nth.call(null,vec__21644,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"manipels","manipels",626202456),(function (db,p__21647){
var vec__21648 = p__21647;
var _ = cljs.core.nth.call(null,vec__21648,(0),null);
var item = cljs.core.nth.call(null,vec__21648,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"manipels","manipels",626202456),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"module","module",1424618191),(function (db,p__21651){
var vec__21652 = p__21651;
var _ = cljs.core.nth.call(null,vec__21652,(0),null);
var item = cljs.core.nth.call(null,vec__21652,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"module","module",1424618191),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"lven","lven",294854909),(function (db,p__21655){
var vec__21656 = p__21655;
var _ = cljs.core.nth.call(null,vec__21656,(0),null);
var item = cljs.core.nth.call(null,vec__21656,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lven","lven",294854909),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dateien","dateien",64338828),(function (db,p__21659){
var vec__21660 = p__21659;
var _ = cljs.core.nth.call(null,vec__21660,(0),null);
var item = cljs.core.nth.call(null,vec__21660,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dateien","dateien",64338828),item);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"loesche-datei","loesche-datei",-467738605),(function (db,p__21663){
var vec__21664 = p__21663;
var _ = cljs.core.nth.call(null,vec__21664,(0),null);
var dateien = cljs.core.nth.call(null,vec__21664,(1),null);
var datei = cljs.core.nth.call(null,vec__21664,(2),null);
var c__13095__auto___21679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_21672){
var state_val_21673 = (state_21672[(1)]);
if((state_val_21673 === (1))){
var inst_21667 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(datei);
var inst_21668 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_21667);
var state_21672__$1 = state_21672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21672__$1,(2),inst_21668);
} else {
if((state_val_21673 === (2))){
var inst_21670 = (state_21672[(2)]);
var state_21672__$1 = state_21672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21672__$1,inst_21670);
} else {
return null;
}
}
});
return (function() {
var dep$events$state_machine__13022__auto__ = null;
var dep$events$state_machine__13022__auto____0 = (function (){
var statearr_21674 = [null,null,null,null,null,null,null];
(statearr_21674[(0)] = dep$events$state_machine__13022__auto__);

(statearr_21674[(1)] = (1));

return statearr_21674;
});
var dep$events$state_machine__13022__auto____1 = (function (state_21672){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_21672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e21675){var ex__13025__auto__ = e21675;
var statearr_21676_21680 = state_21672;
(statearr_21676_21680[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_21672[(4)]))){
var statearr_21677_21681 = state_21672;
(statearr_21677_21681[(1)] = cljs.core.first.call(null,(state_21672[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21682 = state_21672;
state_21672 = G__21682;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
dep$events$state_machine__13022__auto__ = function(state_21672){
switch(arguments.length){
case 0:
return dep$events$state_machine__13022__auto____0.call(this);
case 1:
return dep$events$state_machine__13022__auto____1.call(this,state_21672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$events$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = dep$events$state_machine__13022__auto____0;
dep$events$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = dep$events$state_machine__13022__auto____1;
return dep$events$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_21678 = f__13096__auto__.call(null);
(statearr_21678[(6)] = c__13095__auto___21679);

return statearr_21678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dateien","dateien",64338828),dateien);
}));

//# sourceMappingURL=events.js.map
