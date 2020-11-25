// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__20975){
var map__20976 = p__20975;
var map__20976__$1 = (((((!((map__20976 == null))))?(((((map__20976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20976):map__20976);
var args = map__20976__$1;
var on_change = cljs.core.get.call(null,map__20976__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__20976__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__20976__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__20976__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.call(null,map__20976__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__20976__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__20976__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__20976__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__20978 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4126__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__20978,external_model_value);
} else {
return G__20978;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__20979,event){
var map__20980 = p__20979;
var map__20980__$1 = (((((!((map__20980 == null))))?(((((map__20980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20980):map__20980);
var state = map__20980__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__20980__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__20980__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__20980__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value.call(null,immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__20982 = event;
var G__20982__$1 = (((G__20982 instanceof cljs.core.Keyword))?G__20982.fqn:null);
switch (G__20982__$1) {
case "input-text-blurred":
var and__4115__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4115__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
if(cljs.core.not.call(null,rigid_QMARK___$1)){
var or__4126__auto__ = cljs.core.not.call(null,change_on_blur_QMARK___$1);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return false;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__20984,event){
var map__20985 = p__20984;
var map__20985__$1 = (((((!((map__20985 == null))))?(((((map__20985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20985):map__20985);
var state = map__20985__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__20985__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__20987 = event;
var G__20987__$1 = (((G__20987 instanceof cljs.core.Keyword))?G__20987.fqn:null);
switch (G__20987__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__20989,new_value){
var map__20990 = p__20989;
var map__20990__$1 = (((((!((map__20990 == null))))?(((((map__20990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20990):map__20990);
var state = map__20990__$1;
var on_change = cljs.core.get.call(null,map__20990__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__20992,suggestion){
var map__20993 = p__20992;
var map__20993__$1 = (((((!((map__20993 == null))))?(((((map__20993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20993):map__20993);
var state = map__20993__$1;
var suggestion_to_string = cljs.core.get.call(null,map__20993__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__20995 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__20995,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__20995;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__20996,index){
var map__20997 = p__20996;
var map__20997__$1 = (((((!((map__20997 == null))))?(((((map__20997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20997):map__20997);
var state = map__20997__$1;
var suggestions = cljs.core.get.call(null,map__20997__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__20999 = state;
var G__20999__$1 = cljs.core.assoc.call(null,G__20999,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__20999__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__20999__$1,suggestion):G__20999__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__20999__$2,suggestion);
} else {
return G__20999__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__21000,index){
var map__21001 = p__21000;
var map__21001__$1 = (((((!((map__21001 == null))))?(((((map__21001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21001):map__21001);
var state = map__21001__$1;
var suggestions = cljs.core.get.call(null,map__21001__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__21003){
var map__21004 = p__21003;
var map__21004__$1 = (((((!((map__21004 == null))))?(((((map__21004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21004):map__21004);
var state = map__21004__$1;
var suggestion_active_index = cljs.core.get.call(null,map__21004__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__21006 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__21006,suggestion_active_index);
} else {
return G__21006;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__21007){
var map__21008 = p__21007;
var map__21008__$1 = (((((!((map__21008 == null))))?(((((map__21008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21008):map__21008);
var state = map__21008__$1;
var suggestions = cljs.core.get.call(null,map__21008__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__21008__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__21010 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__21010,re_com.typeahead.wrap.call(null,((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__21010;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__21011){
var map__21012 = p__21011;
var map__21012__$1 = (((((!((map__21012 == null))))?(((((map__21012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21012):map__21012);
var state = map__21012__$1;
var suggestions = cljs.core.get.call(null,map__21012__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__21012__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__21014 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__21014,re_com.typeahead.wrap.call(null,((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__21014;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__21015 = state;
var G__21015__$1 = re_com.typeahead.clear_suggestions.call(null,G__21015)
;
var G__21015__$2 = cljs.core.assoc.call(null,G__21015__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__21015__$2,null);
} else {
return G__21015__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__21016){
var map__21017 = p__21016;
var map__21017__$1 = (((((!((map__21017 == null))))?(((((map__21017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21017):map__21017);
var state = map__21017__$1;
var input_text = cljs.core.get.call(null,map__21017__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__21017__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.call(null,map__21017__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((cljs.core.not.call(null,displaying_suggestion_QMARK_))?re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307)):false))){
return re_com.typeahead.update_model.call(null,state,input_text);
} else {
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5733__auto__ = data_source.call(null,text,(function (p1__21019_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__21019_SHARP_);
}));
if(cljs.core.truth_(temp__5733__auto__)){
var return_value = temp__5733__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_21037){
var state_val_21038 = (state_21037[(1)]);
if((state_val_21038 === (1))){
var state_21037__$1 = state_21037;
var statearr_21039_21053 = state_21037__$1;
(statearr_21039_21053[(2)] = null);

(statearr_21039_21053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21038 === (2))){
var state_21037__$1 = state_21037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21037__$1,(4),c_search);
} else {
if((state_val_21038 === (3))){
var inst_21035 = (state_21037[(2)]);
var state_21037__$1 = state_21037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21037__$1,inst_21035);
} else {
if((state_val_21038 === (4))){
var inst_21022 = (state_21037[(7)]);
var inst_21022__$1 = (state_21037[(2)]);
var inst_21023 = cljs.core.deref.call(null,state_atom);
var inst_21024 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_21023);
var inst_21025 = cljs.core._EQ_.call(null,"",inst_21022__$1);
var state_21037__$1 = (function (){var statearr_21040 = state_21037;
(statearr_21040[(8)] = inst_21024);

(statearr_21040[(7)] = inst_21022__$1);

return statearr_21040;
})();
if(inst_21025){
var statearr_21041_21054 = state_21037__$1;
(statearr_21041_21054[(1)] = (5));

} else {
var statearr_21042_21055 = state_21037__$1;
(statearr_21042_21055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21038 === (5))){
var inst_21024 = (state_21037[(8)]);
var inst_21027 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var inst_21028 = re_com.typeahead.search_data_source_BANG_.call(null,inst_21024,state_atom,"");
var state_21037__$1 = (function (){var statearr_21043 = state_21037;
(statearr_21043[(9)] = inst_21027);

return statearr_21043;
})();
var statearr_21044_21056 = state_21037__$1;
(statearr_21044_21056[(2)] = inst_21028);

(statearr_21044_21056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21038 === (6))){
var inst_21024 = (state_21037[(8)]);
var inst_21022 = (state_21037[(7)]);
var inst_21030 = re_com.typeahead.search_data_source_BANG_.call(null,inst_21024,state_atom,inst_21022);
var state_21037__$1 = state_21037;
var statearr_21045_21057 = state_21037__$1;
(statearr_21045_21057[(2)] = inst_21030);

(statearr_21045_21057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21038 === (7))){
var inst_21032 = (state_21037[(2)]);
var state_21037__$1 = (function (){var statearr_21046 = state_21037;
(statearr_21046[(10)] = inst_21032);

return statearr_21046;
})();
var statearr_21047_21058 = state_21037__$1;
(statearr_21047_21058[(2)] = null);

(statearr_21047_21058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto____0 = (function (){
var statearr_21048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21048[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto__);

(statearr_21048[(1)] = (1));

return statearr_21048;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto____1 = (function (state_21037){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_21037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e21049){var ex__18821__auto__ = e21049;
var statearr_21050_21059 = state_21037;
(statearr_21050_21059[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_21037[(4)]))){
var statearr_21051_21060 = state_21037;
(statearr_21051_21060[(1)] = cljs.core.first.call(null,(state_21037[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21061 = state_21037;
state_21037 = G__21061;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto__ = function(state_21037){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto____1.call(this,state_21037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_21052 = f__18892__auto__.call(null);
(statearr_21052[(6)] = c__18891__auto__);

return statearr_21052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__21063 = cljs.core.deref.call(null,state_atom);
var map__21063__$1 = (((((!((map__21063 == null))))?(((((map__21063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21063):map__21063);
var state = map__21063__$1;
var input_text = cljs.core.get.call(null,map__21063__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__21063__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);

return cljs.core.swap_BANG_.call(null,state_atom,(function (p1__21062_SHARP_){
var G__21065 = p1__21062_SHARP_;
var G__21065__$1 = cljs.core.assoc.call(null,G__21065,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__21065__$1,new_text);
} else {
return G__21065__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__21066 = cljs.core._EQ_;
var expr__21067 = event.which;
if(cljs.core.truth_(pred__21066.call(null,goog.events.KeyCodes.UP,expr__21067))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__21066.call(null,goog.events.KeyCodes.DOWN,expr__21067))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__21066.call(null,goog.events.KeyCodes.ENTER,expr__21067))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__21066.call(null,goog.events.KeyCodes.ESC,expr__21067))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_(pred__21066.call(null,goog.events.KeyCodes.TAB,expr__21067))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21091 = arguments.length;
var i__4737__auto___21092 = (0);
while(true){
if((i__4737__auto___21092 < len__4736__auto___21091)){
args__4742__auto__.push((arguments[i__4737__auto___21092]));

var G__21093 = (i__4737__auto___21092 + (1));
i__4737__auto___21092 = G__21093;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__21071){
var map__21072 = p__21071;
var map__21072__$1 = (((((!((map__21072 == null))))?(((((map__21072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21072):map__21072);
var args = map__21072__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__21074 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__21074__$1 = (((((!((map__21074 == null))))?(((((map__21074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21074):map__21074);
var state = map__21074__$1;
var c_search = cljs.core.get.call(null,map__21074__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__21074__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return (function() { 
var G__21094__delegate = function (p__21076){
var map__21077 = p__21076;
var map__21077__$1 = (((((!((map__21077 == null))))?(((((map__21077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21077):map__21077);
var args__$1 = map__21077__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__21077__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__21079 = cljs.core.deref.call(null,state_atom);
var map__21079__$1 = (((((!((map__21079 == null))))?(((((map__21079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21079):map__21079);
var state__$1 = map__21079__$1;
var suggestions = cljs.core.get.call(null,map__21079__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__21079__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__21079__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__21079__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4529__auto__ = (function re_com$typeahead$iter__21081(s__21082){
return (new cljs.core.LazySeq(null,(function (){
var s__21082__$1 = s__21082;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21082__$1);
if(temp__5735__auto__){
var s__21082__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21082__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21082__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21084 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21083 = (0);
while(true){
if((i__21083 < size__4528__auto__)){
var vec__21085 = cljs.core._nth.call(null,c__4527__auto__,i__21083);
var i = cljs.core.nth.call(null,vec__21085,(0),null);
var s = cljs.core.nth.call(null,vec__21085,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__21084,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__21083,selected_QMARK_,vec__21085,i,s,c__4527__auto__,size__4528__auto__,b__21084,s__21082__$2,temp__5735__auto__,map__21079,map__21079__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21077,map__21077__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__21074,map__21074__$1,state,c_search,c_input,state_atom,input_text_model,map__21072,map__21072__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__21083,selected_QMARK_,vec__21085,i,s,c__4527__auto__,size__4528__auto__,b__21084,s__21082__$2,temp__5735__auto__,map__21079,map__21079__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21077,map__21077__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__21074,map__21074__$1,state,c_search,c_input,state_atom,input_text_model,map__21072,map__21072__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__21083,selected_QMARK_,vec__21085,i,s,c__4527__auto__,size__4528__auto__,b__21084,s__21082__$2,temp__5735__auto__,map__21079,map__21079__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21077,map__21077__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__21074,map__21074__$1,state,c_search,c_input,state_atom,input_text_model,map__21072,map__21072__$1,args){
return (function (p1__21069_SHARP_){
p1__21069_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__21083,selected_QMARK_,vec__21085,i,s,c__4527__auto__,size__4528__auto__,b__21084,s__21082__$2,temp__5735__auto__,map__21079,map__21079__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21077,map__21077__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__21074,map__21074__$1,state,c_search,c_input,state_atom,input_text_model,map__21072,map__21072__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__21095 = (i__21083 + (1));
i__21083 = G__21095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21084),re_com$typeahead$iter__21081.call(null,cljs.core.chunk_rest.call(null,s__21082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21084),null);
}
} else {
var vec__21088 = cljs.core.first.call(null,s__21082__$2);
var i = cljs.core.nth.call(null,vec__21088,(0),null);
var s = cljs.core.nth.call(null,vec__21088,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__21088,i,s,s__21082__$2,temp__5735__auto__,map__21079,map__21079__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21077,map__21077__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__21074,map__21074__$1,state,c_search,c_input,state_atom,input_text_model,map__21072,map__21072__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__21088,i,s,s__21082__$2,temp__5735__auto__,map__21079,map__21079__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21077,map__21077__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__21074,map__21074__$1,state,c_search,c_input,state_atom,input_text_model,map__21072,map__21072__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__21088,i,s,s__21082__$2,temp__5735__auto__,map__21079,map__21079__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21077,map__21077__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__21074,map__21074__$1,state,c_search,c_input,state_atom,input_text_model,map__21072,map__21072__$1,args){
return (function (p1__21069_SHARP_){
p1__21069_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__21088,i,s,s__21082__$2,temp__5735__auto__,map__21079,map__21079__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__21077,map__21077__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__21074,map__21074__$1,state,c_search,c_input,state_atom,input_text_model,map__21072,map__21072__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__21081.call(null,cljs.core.rest.call(null,s__21082__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__21094 = function (var_args){
var p__21076 = null;
if (arguments.length > 0) {
var G__21096__i = 0, G__21096__a = new Array(arguments.length -  0);
while (G__21096__i < G__21096__a.length) {G__21096__a[G__21096__i] = arguments[G__21096__i + 0]; ++G__21096__i;}
  p__21076 = new cljs.core.IndexedSeq(G__21096__a,0,null);
} 
return G__21094__delegate.call(this,p__21076);};
G__21094.cljs$lang$maxFixedArity = 0;
G__21094.cljs$lang$applyTo = (function (arglist__21097){
var p__21076 = cljs.core.seq(arglist__21097);
return G__21094__delegate(p__21076);
});
G__21094.cljs$core$IFn$_invoke$arity$variadic = G__21094__delegate;
return G__21094;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq21070){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21070));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__18891__auto___21180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_21149){
var state_val_21150 = (state_21149[(1)]);
if((state_val_21150 === (7))){
var inst_21103 = (state_21149[(2)]);
var state_21149__$1 = state_21149;
var statearr_21151_21181 = state_21149__$1;
(statearr_21151_21181[(2)] = inst_21103);

(statearr_21151_21181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (1))){
var inst_21098 = null;
var state_21149__$1 = (function (){var statearr_21152 = state_21149;
(statearr_21152[(7)] = inst_21098);

return statearr_21152;
})();
var statearr_21153_21182 = state_21149__$1;
(statearr_21153_21182[(2)] = null);

(statearr_21153_21182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (4))){
var state_21149__$1 = state_21149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21149__$1,(7),in$);
} else {
if((state_val_21150 === (15))){
var inst_21134 = (state_21149[(2)]);
var state_21149__$1 = (function (){var statearr_21154 = state_21149;
(statearr_21154[(8)] = inst_21134);

return statearr_21154;
})();
var statearr_21155_21183 = state_21149__$1;
(statearr_21155_21183[(2)] = null);

(statearr_21155_21183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (13))){
var inst_21122 = (state_21149[(9)]);
var inst_21136 = cljs.core._EQ_.call(null,inst_21122,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_21149__$1 = state_21149;
if(inst_21136){
var statearr_21156_21184 = state_21149__$1;
(statearr_21156_21184[(1)] = (16));

} else {
var statearr_21157_21185 = state_21149__$1;
(statearr_21157_21185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (6))){
var inst_21115 = (state_21149[(10)]);
var inst_21107 = (state_21149[(11)]);
var inst_21106 = (state_21149[(2)]);
var inst_21107__$1 = cljs.core.async.timeout.call(null,ms);
var inst_21115__$1 = in$;
var inst_21116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21117 = [inst_21115__$1,inst_21107__$1];
var inst_21118 = (new cljs.core.PersistentVector(null,2,(5),inst_21116,inst_21117,null));
var state_21149__$1 = (function (){var statearr_21158 = state_21149;
(statearr_21158[(10)] = inst_21115__$1);

(statearr_21158[(11)] = inst_21107__$1);

(statearr_21158[(12)] = inst_21106);

return statearr_21158;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21149__$1,(8),inst_21118);
} else {
if((state_val_21150 === (17))){
var state_21149__$1 = state_21149;
var statearr_21159_21186 = state_21149__$1;
(statearr_21159_21186[(2)] = null);

(statearr_21159_21186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (3))){
var inst_21147 = (state_21149[(2)]);
var state_21149__$1 = state_21149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21149__$1,inst_21147);
} else {
if((state_val_21150 === (12))){
var inst_21106 = (state_21149[(12)]);
var state_21149__$1 = state_21149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21149__$1,(15),out,inst_21106);
} else {
if((state_val_21150 === (2))){
var inst_21098 = (state_21149[(7)]);
var inst_21100 = (inst_21098 == null);
var state_21149__$1 = state_21149;
if(cljs.core.truth_(inst_21100)){
var statearr_21160_21187 = state_21149__$1;
(statearr_21160_21187[(1)] = (4));

} else {
var statearr_21161_21188 = state_21149__$1;
(statearr_21161_21188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (11))){
var inst_21144 = (state_21149[(2)]);
var inst_21098 = inst_21144;
var state_21149__$1 = (function (){var statearr_21162 = state_21149;
(statearr_21162[(7)] = inst_21098);

return statearr_21162;
})();
var statearr_21163_21189 = state_21149__$1;
(statearr_21163_21189[(2)] = null);

(statearr_21163_21189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (9))){
var inst_21120 = (state_21149[(13)]);
var inst_21128 = cljs.core.nth.call(null,inst_21120,(0),null);
var inst_21129 = cljs.core.nth.call(null,inst_21120,(1),null);
var state_21149__$1 = (function (){var statearr_21164 = state_21149;
(statearr_21164[(14)] = inst_21129);

return statearr_21164;
})();
var statearr_21165_21190 = state_21149__$1;
(statearr_21165_21190[(2)] = inst_21128);

(statearr_21165_21190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (5))){
var inst_21098 = (state_21149[(7)]);
var state_21149__$1 = state_21149;
var statearr_21166_21191 = state_21149__$1;
(statearr_21166_21191[(2)] = inst_21098);

(statearr_21166_21191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (14))){
var inst_21142 = (state_21149[(2)]);
var state_21149__$1 = state_21149;
var statearr_21167_21192 = state_21149__$1;
(statearr_21167_21192[(2)] = inst_21142);

(statearr_21167_21192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (16))){
var inst_21121 = (state_21149[(15)]);
var state_21149__$1 = state_21149;
var statearr_21168_21193 = state_21149__$1;
(statearr_21168_21193[(2)] = inst_21121);

(statearr_21168_21193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (10))){
var inst_21107 = (state_21149[(11)]);
var inst_21122 = (state_21149[(9)]);
var inst_21131 = cljs.core._EQ_.call(null,inst_21122,inst_21107);
var state_21149__$1 = state_21149;
if(inst_21131){
var statearr_21169_21194 = state_21149__$1;
(statearr_21169_21194[(1)] = (12));

} else {
var statearr_21170_21195 = state_21149__$1;
(statearr_21170_21195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (18))){
var inst_21140 = (state_21149[(2)]);
var state_21149__$1 = state_21149;
var statearr_21171_21196 = state_21149__$1;
(statearr_21171_21196[(2)] = inst_21140);

(statearr_21171_21196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21150 === (8))){
var inst_21120 = (state_21149[(13)]);
var inst_21115 = (state_21149[(10)]);
var inst_21122 = (state_21149[(9)]);
var inst_21120__$1 = (state_21149[(2)]);
var inst_21121 = cljs.core.nth.call(null,inst_21120__$1,(0),null);
var inst_21122__$1 = cljs.core.nth.call(null,inst_21120__$1,(1),null);
var inst_21123 = cljs.core._EQ_.call(null,inst_21122__$1,inst_21115);
var state_21149__$1 = (function (){var statearr_21172 = state_21149;
(statearr_21172[(13)] = inst_21120__$1);

(statearr_21172[(15)] = inst_21121);

(statearr_21172[(9)] = inst_21122__$1);

return statearr_21172;
})();
if(inst_21123){
var statearr_21173_21197 = state_21149__$1;
(statearr_21173_21197[(1)] = (9));

} else {
var statearr_21174_21198 = state_21149__$1;
(statearr_21174_21198[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__18818__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__18818__auto____0 = (function (){
var statearr_21175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21175[(0)] = re_com$typeahead$debounce_$_state_machine__18818__auto__);

(statearr_21175[(1)] = (1));

return statearr_21175;
});
var re_com$typeahead$debounce_$_state_machine__18818__auto____1 = (function (state_21149){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_21149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e21176){var ex__18821__auto__ = e21176;
var statearr_21177_21199 = state_21149;
(statearr_21177_21199[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_21149[(4)]))){
var statearr_21178_21200 = state_21149;
(statearr_21178_21200[(1)] = cljs.core.first.call(null,(state_21149[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21201 = state_21149;
state_21149 = G__21201;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__18818__auto__ = function(state_21149){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__18818__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__18818__auto____1.call(this,state_21149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__18818__auto____0;
re_com$typeahead$debounce_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__18818__auto____1;
return re_com$typeahead$debounce_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_21179 = f__18892__auto__.call(null);
(statearr_21179[(6)] = c__18891__auto___21180);

return statearr_21179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


return out;
});

//# sourceMappingURL=typeahead.js.map
