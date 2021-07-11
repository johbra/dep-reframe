// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.throbber');
goog.require('re_com.input_text');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__20140){
var map__20141 = p__20140;
var map__20141__$1 = (((((!((map__20141 == null))))?(((((map__20141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20141):map__20141);
var args = map__20141__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20141__$1,cljs.core.cst$kw$on_DASH_change);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20141__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20141__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20141__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20141__$1,cljs.core.cst$kw$data_DASH_source);
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20141__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20141__$1,cljs.core.cst$kw$debounce_DASH_delay);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20141__$1,cljs.core.cst$kw$model);
var external_model_value = re_com.util.deref_or_value(model);
var G__20143 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$waiting_QMARK_,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$c_DASH_search,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$suggestions,cljs.core.cst$kw$c_DASH_input,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model],[false,(function (){var or__4126__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__20143,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__20143,external_model_value));
} else {
return G__20143;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__20144,event){
var map__20145 = p__20144;
var map__20145__$1 = (((((!((map__20145 == null))))?(((((map__20145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20145):map__20145);
var state = map__20145__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20145__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20145__$1,cljs.core.cst$kw$rigid_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20145__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__20147 = event;
var G__20147__$1 = (((G__20147 instanceof cljs.core.Keyword))?G__20147.fqn:null);
switch (G__20147__$1) {
case "input-text-blurred":
var and__4115__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4115__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
if(cljs.core.not(rigid_QMARK___$1)){
var or__4126__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__20149,event){
var map__20150 = p__20149;
var map__20150__$1 = (((((!((map__20150 == null))))?(((((map__20150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20150):map__20150);
var state = map__20150__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__20152 = event;
var G__20152__$1 = (((G__20152 instanceof cljs.core.Keyword))?G__20152.fqn:null);
switch (G__20152__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__20154,new_value){
var map__20155 = p__20154;
var map__20155__$1 = (((((!((map__20155 == null))))?(((((map__20155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20155):map__20155);
var state = map__20155__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20155__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$model,new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__20157,suggestion){
var map__20158 = p__20157;
var map__20158__$1 = (((((!((map__20158 == null))))?(((((map__20158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20158):map__20158);
var state = map__20158__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20158__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__20160 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__20160,cljs.core.cst$kw$input_DASH_text,suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,true], 0));
} else {
return G__20160;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suggestion_DASH_active_DASH_index], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__20161,index){
var map__20162 = p__20161;
var map__20162__$1 = (((((!((map__20162 == null))))?(((((map__20162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20162):map__20162);
var state = map__20162__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__20164 = state;
var G__20164__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20164,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,index)
;
var G__20164__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))?re_com.typeahead.update_model(G__20164__$1,suggestion):G__20164__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))){
return re_com.typeahead.display_suggestion(G__20164__$2,suggestion);
} else {
return G__20164__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__20165,index){
var map__20166 = p__20165;
var map__20166__$1 = (((((!((map__20166 == null))))?(((((map__20166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20166):map__20166);
var state = map__20166__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20166__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__20168){
var map__20169 = p__20168;
var map__20169__$1 = (((((!((map__20169 == null))))?(((((map__20169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20169):map__20169);
var state = map__20169__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__20171 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__20171,suggestion_active_index);
} else {
return G__20171;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__20172){
var map__20173 = p__20172;
var map__20173__$1 = (((((!((map__20173 == null))))?(((((map__20173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20173):map__20173);
var state = map__20173__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20173__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20173__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__20175 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__20175,re_com.typeahead.wrap(((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__20175;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__20176){
var map__20177 = p__20176;
var map__20177__$1 = (((((!((map__20177 == null))))?(((((map__20177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20177):map__20177);
var state = map__20177__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20177__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20177__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__20179 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__20179,re_com.typeahead.wrap(((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__20179;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__20180 = state;
var G__20180__$1 = re_com.typeahead.clear_suggestions(G__20180)
;
var G__20180__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__20180__$1,cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_text,"",cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__20180__$2,null);
} else {
return G__20180__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__20181){
var map__20182 = p__20181;
var map__20182__$1 = (((((!((map__20182 == null))))?(((((map__20182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20182):map__20182);
var state = map__20182__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20182__$1,cljs.core.cst$kw$input_DASH_text);
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20182__$1,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20182__$1,cljs.core.cst$kw$model);
if(cljs.core.truth_(((cljs.core.not(displaying_suggestion_QMARK_))?re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_blurred):false))){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$input_DASH_text,input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),cljs.core.cst$kw$data_DASH_source,data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),cljs.core.cst$kw$external_DASH_model,new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5733__auto__ = (function (){var G__20185 = text;
var G__20186 = (function (p1__20184_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__20184_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__20185,G__20186) : data_source.call(null,G__20185,G__20186));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var return_value = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$waiting_QMARK_,true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_20204){
var state_val_20205 = (state_20204[(1)]);
if((state_val_20205 === (1))){
var state_20204__$1 = state_20204;
var statearr_20206_20220 = state_20204__$1;
(statearr_20206_20220[(2)] = null);

(statearr_20206_20220[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20205 === (2))){
var state_20204__$1 = state_20204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20204__$1,(4),c_search);
} else {
if((state_val_20205 === (3))){
var inst_20202 = (state_20204[(2)]);
var state_20204__$1 = state_20204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20204__$1,inst_20202);
} else {
if((state_val_20205 === (4))){
var inst_20189 = (state_20204[(7)]);
var inst_20189__$1 = (state_20204[(2)]);
var inst_20190 = cljs.core.deref(state_atom);
var inst_20191 = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(inst_20190);
var inst_20192 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_20189__$1);
var state_20204__$1 = (function (){var statearr_20207 = state_20204;
(statearr_20207[(8)] = inst_20191);

(statearr_20207[(7)] = inst_20189__$1);

return statearr_20207;
})();
if(inst_20192){
var statearr_20208_20221 = state_20204__$1;
(statearr_20208_20221[(1)] = (5));

} else {
var statearr_20209_20222 = state_20204__$1;
(statearr_20209_20222[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20205 === (5))){
var inst_20191 = (state_20204[(8)]);
var inst_20194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_20195 = re_com.typeahead.search_data_source_BANG_(inst_20191,state_atom,"");
var state_20204__$1 = (function (){var statearr_20210 = state_20204;
(statearr_20210[(9)] = inst_20194);

return statearr_20210;
})();
var statearr_20211_20223 = state_20204__$1;
(statearr_20211_20223[(2)] = inst_20195);

(statearr_20211_20223[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20205 === (6))){
var inst_20191 = (state_20204[(8)]);
var inst_20189 = (state_20204[(7)]);
var inst_20197 = re_com.typeahead.search_data_source_BANG_(inst_20191,state_atom,inst_20189);
var state_20204__$1 = state_20204;
var statearr_20212_20224 = state_20204__$1;
(statearr_20212_20224[(2)] = inst_20197);

(statearr_20212_20224[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20205 === (7))){
var inst_20199 = (state_20204[(2)]);
var state_20204__$1 = (function (){var statearr_20213 = state_20204;
(statearr_20213[(10)] = inst_20199);

return statearr_20213;
})();
var statearr_20214_20225 = state_20204__$1;
(statearr_20214_20225[(2)] = null);

(statearr_20214_20225[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto____0 = (function (){
var statearr_20215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20215[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto__);

(statearr_20215[(1)] = (1));

return statearr_20215;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto____1 = (function (state_20204){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_20204);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e20216){var ex__17035__auto__ = e20216;
var statearr_20217_20226 = state_20204;
(statearr_20217_20226[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_20204[(4)]))){
var statearr_20218_20227 = state_20204;
(statearr_20218_20227[(1)] = cljs.core.first((state_20204[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__20228 = state_20204;
state_20204 = G__20228;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto__ = function(state_20204){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto____1.call(this,state_20204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_20219 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_20219[(6)] = c__17106__auto__);

return statearr_20219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__20230 = cljs.core.deref(state_atom);
var map__20230__$1 = (((((!((map__20230 == null))))?(((((map__20230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20230):map__20230);
var state = map__20230__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20230__$1,cljs.core.cst$kw$input_DASH_text);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20230__$1,cljs.core.cst$kw$c_DASH_input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__20229_SHARP_){
var G__20232 = p1__20229_SHARP_;
var G__20232__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__20232,cljs.core.cst$kw$input_DASH_text,new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__20232__$1,new_text);
} else {
return G__20232__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__20233 = cljs.core._EQ_;
var expr__20234 = event.which;
if(cljs.core.truth_((pred__20233.cljs$core$IFn$_invoke$arity$2 ? pred__20233.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__20234) : pred__20233.call(null,goog.events.KeyCodes.UP,expr__20234)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__20233.cljs$core$IFn$_invoke$arity$2 ? pred__20233.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__20234) : pred__20233.call(null,goog.events.KeyCodes.DOWN,expr__20234)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__20233.cljs$core$IFn$_invoke$arity$2 ? pred__20233.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__20234) : pred__20233.call(null,goog.events.KeyCodes.ENTER,expr__20234)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__20233.cljs$core$IFn$_invoke$arity$2 ? pred__20233.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__20234) : pred__20233.call(null,goog.events.KeyCodes.ESC,expr__20234)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__20233.cljs$core$IFn$_invoke$arity$2 ? pred__20233.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__20234) : pred__20233.call(null,goog.events.KeyCodes.TAB,expr__20234)))){
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"string -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"object | r/atom",cljs.core.cst$kw$description,"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(250),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.integer_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_suggestion,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"render fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"suggestion -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"the outer container"], null),", rather than the textbox)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$suggestions_DASH_container,null,cljs.core.cst$kw$suggestion,null,cljs.core.cst$kw$throbber,null], null), null)),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20258 = arguments.length;
var i__4737__auto___20259 = (0);
while(true){
if((i__4737__auto___20259 < len__4736__auto___20258)){
args__4742__auto__.push((arguments[i__4737__auto___20259]));

var G__20260 = (i__4737__auto___20259 + (1));
i__4737__auto___20259 = G__20260;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__20238){
var map__20239 = p__20238;
var map__20239__$1 = (((((!((map__20239 == null))))?(((((map__20239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20239):map__20239);
var args = map__20239__$1;
var or__4126__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var map__20241 = re_com.typeahead.make_typeahead_state(args);
var map__20241__$1 = (((((!((map__20241 == null))))?(((((map__20241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20241):map__20241);
var state = map__20241__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241__$1,cljs.core.cst$kw$c_DASH_search);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241__$1,cljs.core.cst$kw$c_DASH_input);
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_text], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__20243){
var map__20244 = p__20243;
var map__20244__$1 = (((((!((map__20244 == null))))?(((((map__20244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20244):map__20244);
var args__$1 = map__20244__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$disabled_QMARK_);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$model);
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$_debounce_DASH_delay);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$attr);
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$_on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$placeholder);
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$render_DASH_suggestion);
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$_suggestion_DASH_to_DASH_string);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$width);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$data_DASH_source);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$src);
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$_rigid_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$style);
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$_change_DASH_on_DASH_blur_QMARK_);
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$_immediate_DASH_model_DASH_update_QMARK_);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$debug_DASH_as);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20244__$1,cljs.core.cst$kw$class);
var or__4126__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var map__20246 = cljs.core.deref(state_atom);
var map__20246__$1 = (((((!((map__20246 == null))))?(((((map__20246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20246):map__20246);
var state__$1 = map__20246__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20246__$1,cljs.core.cst$kw$suggestions);
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20246__$1,cljs.core.cst$kw$waiting_QMARK_);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20246__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20246__$1,cljs.core.cst$kw$external_DASH_model);
var last_data_source = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4126__auto____$2 = width;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4126__auto____$2 = debug_as;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})(),cljs.core.cst$kw$class,"rc-typeahead",cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,293], null)),cljs.core.cst$kw$model,input_text_model,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$status_DASH_icon_QMARK_,status_icon_QMARK_,cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_tooltip,status_tooltip,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),cljs.core.cst$kw$on_DASH_focus,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.cst$kw$on_DASH_blur,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4126__auto____$2 = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,312], null)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,315], null)),cljs.core.cst$kw$class,["rc-typeahead-suggestions-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestions_DASH_container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,319], null)),cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,322], null)),cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$class,["rc-typeahead-throbber ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$throbber,cljs.core.cst$kw$class], null)))].join('')], null)], null):null),(function (){var iter__4529__auto__ = (function re_com$typeahead$typeahead_render_$_iter__20248(s__20249){
return (new cljs.core.LazySeq(null,(function (){
var s__20249__$1 = s__20249;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__20249__$1);
if(temp__5735__auto__){
var s__20249__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20249__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__20249__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__20251 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__20250 = (0);
while(true){
if((i__20250 < size__4528__auto__)){
var vec__20252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__20250);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20252,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20252,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__20251,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,329], null)),cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestion,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__20250,selected_QMARK_,vec__20252,i,s,c__4527__auto__,size__4528__auto__,b__20251,s__20249__$2,temp__5735__auto__,map__20246,map__20246__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__20244,map__20244__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__20241,map__20241__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__20239,map__20239__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__20250,selected_QMARK_,vec__20252,i,s,c__4527__auto__,size__4528__auto__,b__20251,s__20249__$2,temp__5735__auto__,map__20246,map__20246__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__20244,map__20244__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__20241,map__20241__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__20239,map__20239__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (i__20250,selected_QMARK_,vec__20252,i,s,c__4527__auto__,size__4528__auto__,b__20251,s__20249__$2,temp__5735__auto__,map__20246,map__20246__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__20244,map__20244__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__20241,map__20241__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__20239,map__20239__$1,args){
return (function (p1__20236_SHARP_){
p1__20236_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__20250,selected_QMARK_,vec__20252,i,s,c__4527__auto__,size__4528__auto__,b__20251,s__20249__$2,temp__5735__auto__,map__20246,map__20246__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__20244,map__20244__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__20241,map__20241__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__20239,map__20239__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__20261 = (i__20250 + (1));
i__20250 = G__20261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20251),re_com$typeahead$typeahead_render_$_iter__20248(cljs.core.chunk_rest(s__20249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20251),null);
}
} else {
var vec__20255 = cljs.core.first(s__20249__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,329], null)),cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestion,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,vec__20255,i,s,s__20249__$2,temp__5735__auto__,map__20246,map__20246__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__20244,map__20244__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__20241,map__20241__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__20239,map__20239__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__20255,i,s,s__20249__$2,temp__5735__auto__,map__20246,map__20246__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__20244,map__20244__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__20241,map__20241__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__20239,map__20239__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,vec__20255,i,s,s__20249__$2,temp__5735__auto__,map__20246,map__20246__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__20244,map__20244__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__20241,map__20241__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__20239,map__20239__$1,args){
return (function (p1__20236_SHARP_){
p1__20236_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__20255,i,s,s__20249__$2,temp__5735__auto__,map__20246,map__20246__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4126__auto____$1,map__20244,map__20244__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__20241,map__20241__$1,state,c_search,c_input,state_atom,input_text_model,or__4126__auto__,map__20239,map__20239__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),re_com$typeahead$typeahead_render_$_iter__20248(cljs.core.rest(s__20249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__20243 = null;
if (arguments.length > 0) {
var G__20262__i = 0, G__20262__a = new Array(arguments.length -  0);
while (G__20262__i < G__20262__a.length) {G__20262__a[G__20262__i] = arguments[G__20262__i + 0]; ++G__20262__i;}
  p__20243 = new cljs.core.IndexedSeq(G__20262__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__20243);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__20263){
var p__20243 = cljs.core.seq(arglist__20263);
return re_com$typeahead$typeahead_render__delegate(p__20243);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq20237){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20237));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__17106__auto___20346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_20315){
var state_val_20316 = (state_20315[(1)]);
if((state_val_20316 === (7))){
var inst_20269 = (state_20315[(2)]);
var state_20315__$1 = state_20315;
var statearr_20317_20347 = state_20315__$1;
(statearr_20317_20347[(2)] = inst_20269);

(statearr_20317_20347[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (1))){
var inst_20264 = null;
var state_20315__$1 = (function (){var statearr_20318 = state_20315;
(statearr_20318[(7)] = inst_20264);

return statearr_20318;
})();
var statearr_20319_20348 = state_20315__$1;
(statearr_20319_20348[(2)] = null);

(statearr_20319_20348[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (4))){
var state_20315__$1 = state_20315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20315__$1,(7),in$);
} else {
if((state_val_20316 === (15))){
var inst_20300 = (state_20315[(2)]);
var state_20315__$1 = (function (){var statearr_20320 = state_20315;
(statearr_20320[(8)] = inst_20300);

return statearr_20320;
})();
var statearr_20321_20349 = state_20315__$1;
(statearr_20321_20349[(2)] = null);

(statearr_20321_20349[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (13))){
var inst_20288 = (state_20315[(9)]);
var inst_20302 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20288,cljs.core.cst$kw$default);
var state_20315__$1 = state_20315;
if(inst_20302){
var statearr_20322_20350 = state_20315__$1;
(statearr_20322_20350[(1)] = (16));

} else {
var statearr_20323_20351 = state_20315__$1;
(statearr_20323_20351[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (6))){
var inst_20273 = (state_20315[(10)]);
var inst_20281 = (state_20315[(11)]);
var inst_20272 = (state_20315[(2)]);
var inst_20273__$1 = cljs.core.async.timeout(ms);
var inst_20281__$1 = in$;
var inst_20282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20283 = [inst_20281__$1,inst_20273__$1];
var inst_20284 = (new cljs.core.PersistentVector(null,2,(5),inst_20282,inst_20283,null));
var state_20315__$1 = (function (){var statearr_20324 = state_20315;
(statearr_20324[(10)] = inst_20273__$1);

(statearr_20324[(12)] = inst_20272);

(statearr_20324[(11)] = inst_20281__$1);

return statearr_20324;
})();
return cljs.core.async.ioc_alts_BANG_(state_20315__$1,(8),inst_20284);
} else {
if((state_val_20316 === (17))){
var state_20315__$1 = state_20315;
var statearr_20325_20352 = state_20315__$1;
(statearr_20325_20352[(2)] = null);

(statearr_20325_20352[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (3))){
var inst_20313 = (state_20315[(2)]);
var state_20315__$1 = state_20315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20315__$1,inst_20313);
} else {
if((state_val_20316 === (12))){
var inst_20272 = (state_20315[(12)]);
var state_20315__$1 = state_20315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20315__$1,(15),out,inst_20272);
} else {
if((state_val_20316 === (2))){
var inst_20264 = (state_20315[(7)]);
var inst_20266 = (inst_20264 == null);
var state_20315__$1 = state_20315;
if(cljs.core.truth_(inst_20266)){
var statearr_20326_20353 = state_20315__$1;
(statearr_20326_20353[(1)] = (4));

} else {
var statearr_20327_20354 = state_20315__$1;
(statearr_20327_20354[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (11))){
var inst_20310 = (state_20315[(2)]);
var inst_20264 = inst_20310;
var state_20315__$1 = (function (){var statearr_20328 = state_20315;
(statearr_20328[(7)] = inst_20264);

return statearr_20328;
})();
var statearr_20329_20355 = state_20315__$1;
(statearr_20329_20355[(2)] = null);

(statearr_20329_20355[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (9))){
var inst_20286 = (state_20315[(13)]);
var inst_20294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20286,(0),null);
var inst_20295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20286,(1),null);
var state_20315__$1 = (function (){var statearr_20330 = state_20315;
(statearr_20330[(14)] = inst_20295);

return statearr_20330;
})();
var statearr_20331_20356 = state_20315__$1;
(statearr_20331_20356[(2)] = inst_20294);

(statearr_20331_20356[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (5))){
var inst_20264 = (state_20315[(7)]);
var state_20315__$1 = state_20315;
var statearr_20332_20357 = state_20315__$1;
(statearr_20332_20357[(2)] = inst_20264);

(statearr_20332_20357[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (14))){
var inst_20308 = (state_20315[(2)]);
var state_20315__$1 = state_20315;
var statearr_20333_20358 = state_20315__$1;
(statearr_20333_20358[(2)] = inst_20308);

(statearr_20333_20358[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (16))){
var inst_20287 = (state_20315[(15)]);
var state_20315__$1 = state_20315;
var statearr_20334_20359 = state_20315__$1;
(statearr_20334_20359[(2)] = inst_20287);

(statearr_20334_20359[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (10))){
var inst_20273 = (state_20315[(10)]);
var inst_20288 = (state_20315[(9)]);
var inst_20297 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20288,inst_20273);
var state_20315__$1 = state_20315;
if(inst_20297){
var statearr_20335_20360 = state_20315__$1;
(statearr_20335_20360[(1)] = (12));

} else {
var statearr_20336_20361 = state_20315__$1;
(statearr_20336_20361[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (18))){
var inst_20306 = (state_20315[(2)]);
var state_20315__$1 = state_20315;
var statearr_20337_20362 = state_20315__$1;
(statearr_20337_20362[(2)] = inst_20306);

(statearr_20337_20362[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20316 === (8))){
var inst_20286 = (state_20315[(13)]);
var inst_20288 = (state_20315[(9)]);
var inst_20281 = (state_20315[(11)]);
var inst_20286__$1 = (state_20315[(2)]);
var inst_20287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20286__$1,(0),null);
var inst_20288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20286__$1,(1),null);
var inst_20289 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20288__$1,inst_20281);
var state_20315__$1 = (function (){var statearr_20338 = state_20315;
(statearr_20338[(13)] = inst_20286__$1);

(statearr_20338[(15)] = inst_20287);

(statearr_20338[(9)] = inst_20288__$1);

return statearr_20338;
})();
if(inst_20289){
var statearr_20339_20363 = state_20315__$1;
(statearr_20339_20363[(1)] = (9));

} else {
var statearr_20340_20364 = state_20315__$1;
(statearr_20340_20364[(1)] = (10));

}

return cljs.core.cst$kw$recur;
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
var re_com$typeahead$debounce_$_state_machine__17032__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__17032__auto____0 = (function (){
var statearr_20341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20341[(0)] = re_com$typeahead$debounce_$_state_machine__17032__auto__);

(statearr_20341[(1)] = (1));

return statearr_20341;
});
var re_com$typeahead$debounce_$_state_machine__17032__auto____1 = (function (state_20315){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_20315);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e20342){var ex__17035__auto__ = e20342;
var statearr_20343_20365 = state_20315;
(statearr_20343_20365[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_20315[(4)]))){
var statearr_20344_20366 = state_20315;
(statearr_20344_20366[(1)] = cljs.core.first((state_20315[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__20367 = state_20315;
state_20315 = G__20367;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__17032__auto__ = function(state_20315){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__17032__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__17032__auto____1.call(this,state_20315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__17032__auto____0;
re_com$typeahead$debounce_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__17032__auto____1;
return re_com$typeahead$debounce_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_20345 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_20345[(6)] = c__17106__auto___20346);

return statearr_20345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


return out;
});
