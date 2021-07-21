// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__23921){
var map__23922 = p__23921;
var map__23922__$1 = cljs.core.__destructure_map(map__23922);
var args = map__23922__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,cljs.core.cst$kw$on_DASH_change);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,cljs.core.cst$kw$data_DASH_source);
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,cljs.core.cst$kw$debounce_DASH_delay);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23922__$1,cljs.core.cst$kw$model);
var external_model_value = re_com.util.deref_or_value(model);
var G__23923 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$waiting_QMARK_,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$c_DASH_search,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$suggestions,cljs.core.cst$kw$c_DASH_input,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model],[false,(function (){var or__4160__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__23923,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__23923,external_model_value));
} else {
return G__23923;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__23924,event){
var map__23925 = p__23924;
var map__23925__$1 = cljs.core.__destructure_map(map__23925);
var state = map__23925__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23925__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23925__$1,cljs.core.cst$kw$rigid_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23925__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__23926 = event;
var G__23926__$1 = (((G__23926 instanceof cljs.core.Keyword))?G__23926.fqn:null);
switch (G__23926__$1) {
case "input-text-blurred":
var and__4149__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4149__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
if(cljs.core.not(rigid_QMARK___$1)){
var or__4160__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4160__auto__){
return or__4160__auto__;
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__23928,event){
var map__23929 = p__23928;
var map__23929__$1 = cljs.core.__destructure_map(map__23929);
var state = map__23929__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23929__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__23930 = event;
var G__23930__$1 = (((G__23930 instanceof cljs.core.Keyword))?G__23930.fqn:null);
switch (G__23930__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__23932,new_value){
var map__23933 = p__23932;
var map__23933__$1 = cljs.core.__destructure_map(map__23933);
var state = map__23933__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23933__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$model,new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__23934,suggestion){
var map__23935 = p__23934;
var map__23935__$1 = cljs.core.__destructure_map(map__23935);
var state = map__23935__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23935__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__23936 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__23936,cljs.core.cst$kw$input_DASH_text,suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,true], 0));
} else {
return G__23936;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suggestion_DASH_active_DASH_index], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__23937,index){
var map__23938 = p__23937;
var map__23938__$1 = cljs.core.__destructure_map(map__23938);
var state = map__23938__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23938__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__23939 = state;
var G__23939__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23939,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,index)
;
var G__23939__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))?re_com.typeahead.update_model(G__23939__$1,suggestion):G__23939__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))){
return re_com.typeahead.display_suggestion(G__23939__$2,suggestion);
} else {
return G__23939__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__23940,index){
var map__23941 = p__23940;
var map__23941__$1 = cljs.core.__destructure_map(map__23941);
var state = map__23941__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23941__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__23942){
var map__23943 = p__23942;
var map__23943__$1 = cljs.core.__destructure_map(map__23943);
var state = map__23943__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23943__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__23944 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__23944,suggestion_active_index);
} else {
return G__23944;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__23945){
var map__23946 = p__23945;
var map__23946__$1 = cljs.core.__destructure_map(map__23946);
var state = map__23946__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__23947 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__23947,re_com.typeahead.wrap(((function (){var or__4160__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__23947;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__23948){
var map__23949 = p__23948;
var map__23949__$1 = cljs.core.__destructure_map(map__23949);
var state = map__23949__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23949__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23949__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__23950 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__23950,re_com.typeahead.wrap(((function (){var or__4160__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__23950;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__23951 = state;
var G__23951__$1 = re_com.typeahead.clear_suggestions(G__23951)
;
var G__23951__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__23951__$1,cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_text,"",cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__23951__$2,null);
} else {
return G__23951__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__23952){
var map__23953 = p__23952;
var map__23953__$1 = cljs.core.__destructure_map(map__23953);
var state = map__23953__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23953__$1,cljs.core.cst$kw$input_DASH_text);
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23953__$1,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23953__$1,cljs.core.cst$kw$model);
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
var temp__5751__auto__ = (function (){var G__23955 = text;
var G__23956 = (function (p1__23954_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__23954_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__23955,G__23956) : data_source.call(null,G__23955,G__23956));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var return_value = temp__5751__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$waiting_QMARK_,true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__22000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23974){
var state_val_23975 = (state_23974[(1)]);
if((state_val_23975 === (1))){
var state_23974__$1 = state_23974;
var statearr_23976_23990 = state_23974__$1;
(statearr_23976_23990[(2)] = null);

(statearr_23976_23990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23975 === (2))){
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23974__$1,(4),c_search);
} else {
if((state_val_23975 === (3))){
var inst_23972 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23974__$1,inst_23972);
} else {
if((state_val_23975 === (4))){
var inst_23959 = (state_23974[(7)]);
var inst_23959__$1 = (state_23974[(2)]);
var inst_23960 = cljs.core.deref(state_atom);
var inst_23961 = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(inst_23960);
var inst_23962 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_23959__$1);
var state_23974__$1 = (function (){var statearr_23977 = state_23974;
(statearr_23977[(7)] = inst_23959__$1);

(statearr_23977[(8)] = inst_23961);

return statearr_23977;
})();
if(inst_23962){
var statearr_23978_23991 = state_23974__$1;
(statearr_23978_23991[(1)] = (5));

} else {
var statearr_23979_23992 = state_23974__$1;
(statearr_23979_23992[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23975 === (5))){
var inst_23961 = (state_23974[(8)]);
var inst_23964 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_23965 = re_com.typeahead.search_data_source_BANG_(inst_23961,state_atom,"");
var state_23974__$1 = (function (){var statearr_23980 = state_23974;
(statearr_23980[(9)] = inst_23964);

return statearr_23980;
})();
var statearr_23981_23993 = state_23974__$1;
(statearr_23981_23993[(2)] = inst_23965);

(statearr_23981_23993[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23975 === (6))){
var inst_23959 = (state_23974[(7)]);
var inst_23961 = (state_23974[(8)]);
var inst_23967 = re_com.typeahead.search_data_source_BANG_(inst_23961,state_atom,inst_23959);
var state_23974__$1 = state_23974;
var statearr_23982_23994 = state_23974__$1;
(statearr_23982_23994[(2)] = inst_23967);

(statearr_23982_23994[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23975 === (7))){
var inst_23969 = (state_23974[(2)]);
var state_23974__$1 = (function (){var statearr_23983 = state_23974;
(statearr_23983[(10)] = inst_23969);

return statearr_23983;
})();
var statearr_23984_23995 = state_23974__$1;
(statearr_23984_23995[(2)] = null);

(statearr_23984_23995[(1)] = (2));


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
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto____0 = (function (){
var statearr_23985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23985[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto__);

(statearr_23985[(1)] = (1));

return statearr_23985;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto____1 = (function (state_23974){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23974);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23986){var ex__21929__auto__ = e23986;
var statearr_23987_23996 = state_23974;
(statearr_23987_23996[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23974[(4)]))){
var statearr_23988_23997 = state_23974;
(statearr_23988_23997[(1)] = cljs.core.first((state_23974[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23998 = state_23974;
state_23974 = G__23998;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto__ = function(state_23974){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto____1.call(this,state_23974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23989 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23989[(6)] = c__22000__auto__);

return statearr_23989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));

return c__22000__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__24000 = cljs.core.deref(state_atom);
var map__24000__$1 = cljs.core.__destructure_map(map__24000);
var state = map__24000__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24000__$1,cljs.core.cst$kw$input_DASH_text);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24000__$1,cljs.core.cst$kw$c_DASH_input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__23999_SHARP_){
var G__24001 = p1__23999_SHARP_;
var G__24001__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__24001,cljs.core.cst$kw$input_DASH_text,new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__24001__$1,new_text);
} else {
return G__24001__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__24002 = cljs.core._EQ_;
var expr__24003 = event.which;
if(cljs.core.truth_((pred__24002.cljs$core$IFn$_invoke$arity$2 ? pred__24002.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__24003) : pred__24002.call(null,goog.events.KeyCodes.UP,expr__24003)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__24002.cljs$core$IFn$_invoke$arity$2 ? pred__24002.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__24003) : pred__24002.call(null,goog.events.KeyCodes.DOWN,expr__24003)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__24002.cljs$core$IFn$_invoke$arity$2 ? pred__24002.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__24003) : pred__24002.call(null,goog.events.KeyCodes.ENTER,expr__24003)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__24002.cljs$core$IFn$_invoke$arity$2 ? pred__24002.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__24003) : pred__24002.call(null,goog.events.KeyCodes.ESC,expr__24003)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__24002.cljs$core$IFn$_invoke$arity$2 ? pred__24002.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__24003) : pred__24002.call(null,goog.events.KeyCodes.TAB,expr__24003)))){
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
var args__4777__auto__ = [];
var len__4771__auto___24023 = arguments.length;
var i__4772__auto___24024 = (0);
while(true){
if((i__4772__auto___24024 < len__4771__auto___24023)){
args__4777__auto__.push((arguments[i__4772__auto___24024]));

var G__24025 = (i__4772__auto___24024 + (1));
i__4772__auto___24024 = G__24025;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__24007){
var map__24008 = p__24007;
var map__24008__$1 = cljs.core.__destructure_map(map__24008);
var args = map__24008__$1;
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var map__24009 = re_com.typeahead.make_typeahead_state(args);
var map__24009__$1 = cljs.core.__destructure_map(map__24009);
var state = map__24009__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24009__$1,cljs.core.cst$kw$c_DASH_search);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24009__$1,cljs.core.cst$kw$c_DASH_input);
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_text], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__24010){
var map__24011 = p__24010;
var map__24011__$1 = cljs.core.__destructure_map(map__24011);
var args__$1 = map__24011__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$disabled_QMARK_);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$model);
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$_debounce_DASH_delay);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$attr);
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$_on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$placeholder);
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$render_DASH_suggestion);
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$_suggestion_DASH_to_DASH_string);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$width);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$data_DASH_source);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$src);
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$_rigid_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$style);
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$_change_DASH_on_DASH_blur_QMARK_);
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$_immediate_DASH_model_DASH_update_QMARK_);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$debug_DASH_as);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24011__$1,cljs.core.cst$kw$class);
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var map__24012 = cljs.core.deref(state_atom);
var map__24012__$1 = cljs.core.__destructure_map(map__24012);
var state__$1 = map__24012__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24012__$1,cljs.core.cst$kw$suggestions);
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24012__$1,cljs.core.cst$kw$waiting_QMARK_);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24012__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24012__$1,cljs.core.cst$kw$external_DASH_model);
var last_data_source = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4160__auto____$2 = width;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
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

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$2 = debug_as;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})(),cljs.core.cst$kw$class,"rc-typeahead",cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,293], null)),cljs.core.cst$kw$model,input_text_model,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$status_DASH_icon_QMARK_,status_icon_QMARK_,cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_tooltip,status_tooltip,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),cljs.core.cst$kw$on_DASH_focus,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.cst$kw$on_DASH_blur,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4160__auto____$2 = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,312], null)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,315], null)),cljs.core.cst$kw$class,["rc-typeahead-suggestions-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestions_DASH_container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,319], null)),cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,322], null)),cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$class,["rc-typeahead-throbber ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$throbber,cljs.core.cst$kw$class], null)))].join('')], null)], null):null),(function (){var iter__4564__auto__ = (function re_com$typeahead$typeahead_render_$_iter__24013(s__24014){
return (new cljs.core.LazySeq(null,(function (){
var s__24014__$1 = s__24014;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__24014__$1);
if(temp__5753__auto__){
var s__24014__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24014__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__24014__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__24016 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__24015 = (0);
while(true){
if((i__24015 < size__4563__auto__)){
var vec__24017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__24015);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__24016,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,329], null)),cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestion,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__24015,selected_QMARK_,vec__24017,i,s,c__4562__auto__,size__4563__auto__,b__24016,s__24014__$2,temp__5753__auto__,map__24012,map__24012__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__24011,map__24011__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__24009,map__24009__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__24008,map__24008__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__24015,selected_QMARK_,vec__24017,i,s,c__4562__auto__,size__4563__auto__,b__24016,s__24014__$2,temp__5753__auto__,map__24012,map__24012__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__24011,map__24011__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__24009,map__24009__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__24008,map__24008__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (i__24015,selected_QMARK_,vec__24017,i,s,c__4562__auto__,size__4563__auto__,b__24016,s__24014__$2,temp__5753__auto__,map__24012,map__24012__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__24011,map__24011__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__24009,map__24009__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__24008,map__24008__$1,args){
return (function (p1__24005_SHARP_){
p1__24005_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__24015,selected_QMARK_,vec__24017,i,s,c__4562__auto__,size__4563__auto__,b__24016,s__24014__$2,temp__5753__auto__,map__24012,map__24012__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__24011,map__24011__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__24009,map__24009__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__24008,map__24008__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__24026 = (i__24015 + (1));
i__24015 = G__24026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24016),re_com$typeahead$typeahead_render_$_iter__24013(cljs.core.chunk_rest(s__24014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24016),null);
}
} else {
var vec__24020 = cljs.core.first(s__24014__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24020,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24020,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/typeahead.cljs",cljs.core.cst$kw$line,329], null)),cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestion,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,vec__24020,i,s,s__24014__$2,temp__5753__auto__,map__24012,map__24012__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__24011,map__24011__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__24009,map__24009__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__24008,map__24008__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__24020,i,s,s__24014__$2,temp__5753__auto__,map__24012,map__24012__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__24011,map__24011__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__24009,map__24009__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__24008,map__24008__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,vec__24020,i,s,s__24014__$2,temp__5753__auto__,map__24012,map__24012__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__24011,map__24011__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__24009,map__24009__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__24008,map__24008__$1,args){
return (function (p1__24005_SHARP_){
p1__24005_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__24020,i,s,s__24014__$2,temp__5753__auto__,map__24012,map__24012__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__24011,map__24011__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__24009,map__24009__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__24008,map__24008__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),re_com$typeahead$typeahead_render_$_iter__24013(cljs.core.rest(s__24014__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__24010 = null;
if (arguments.length > 0) {
var G__24027__i = 0, G__24027__a = new Array(arguments.length -  0);
while (G__24027__i < G__24027__a.length) {G__24027__a[G__24027__i] = arguments[G__24027__i + 0]; ++G__24027__i;}
  p__24010 = new cljs.core.IndexedSeq(G__24027__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__24010);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__24028){
var p__24010 = cljs.core.seq(arglist__24028);
return re_com$typeahead$typeahead_render__delegate(p__24010);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq24006){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24006));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__22000__auto___24111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_24080){
var state_val_24081 = (state_24080[(1)]);
if((state_val_24081 === (7))){
var inst_24034 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24082_24112 = state_24080__$1;
(statearr_24082_24112[(2)] = inst_24034);

(statearr_24082_24112[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (1))){
var inst_24029 = null;
var state_24080__$1 = (function (){var statearr_24083 = state_24080;
(statearr_24083[(7)] = inst_24029);

return statearr_24083;
})();
var statearr_24084_24113 = state_24080__$1;
(statearr_24084_24113[(2)] = null);

(statearr_24084_24113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (4))){
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24080__$1,(7),in$);
} else {
if((state_val_24081 === (15))){
var inst_24065 = (state_24080[(2)]);
var state_24080__$1 = (function (){var statearr_24085 = state_24080;
(statearr_24085[(8)] = inst_24065);

return statearr_24085;
})();
var statearr_24086_24114 = state_24080__$1;
(statearr_24086_24114[(2)] = null);

(statearr_24086_24114[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (13))){
var inst_24053 = (state_24080[(9)]);
var inst_24067 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24053,cljs.core.cst$kw$default);
var state_24080__$1 = state_24080;
if(inst_24067){
var statearr_24087_24115 = state_24080__$1;
(statearr_24087_24115[(1)] = (16));

} else {
var statearr_24088_24116 = state_24080__$1;
(statearr_24088_24116[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (6))){
var inst_24046 = (state_24080[(10)]);
var inst_24038 = (state_24080[(11)]);
var inst_24037 = (state_24080[(2)]);
var inst_24038__$1 = cljs.core.async.timeout(ms);
var inst_24046__$1 = in$;
var inst_24047 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24048 = [inst_24046__$1,inst_24038__$1];
var inst_24049 = (new cljs.core.PersistentVector(null,2,(5),inst_24047,inst_24048,null));
var state_24080__$1 = (function (){var statearr_24089 = state_24080;
(statearr_24089[(10)] = inst_24046__$1);

(statearr_24089[(12)] = inst_24037);

(statearr_24089[(11)] = inst_24038__$1);

return statearr_24089;
})();
return cljs.core.async.ioc_alts_BANG_(state_24080__$1,(8),inst_24049);
} else {
if((state_val_24081 === (17))){
var state_24080__$1 = state_24080;
var statearr_24090_24117 = state_24080__$1;
(statearr_24090_24117[(2)] = null);

(statearr_24090_24117[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (3))){
var inst_24078 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24080__$1,inst_24078);
} else {
if((state_val_24081 === (12))){
var inst_24037 = (state_24080[(12)]);
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24080__$1,(15),out,inst_24037);
} else {
if((state_val_24081 === (2))){
var inst_24029 = (state_24080[(7)]);
var inst_24031 = (inst_24029 == null);
var state_24080__$1 = state_24080;
if(cljs.core.truth_(inst_24031)){
var statearr_24091_24118 = state_24080__$1;
(statearr_24091_24118[(1)] = (4));

} else {
var statearr_24092_24119 = state_24080__$1;
(statearr_24092_24119[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (11))){
var inst_24075 = (state_24080[(2)]);
var inst_24029 = inst_24075;
var state_24080__$1 = (function (){var statearr_24093 = state_24080;
(statearr_24093[(7)] = inst_24029);

return statearr_24093;
})();
var statearr_24094_24120 = state_24080__$1;
(statearr_24094_24120[(2)] = null);

(statearr_24094_24120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (9))){
var inst_24051 = (state_24080[(13)]);
var inst_24059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24051,(0),null);
var inst_24060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24051,(1),null);
var state_24080__$1 = (function (){var statearr_24095 = state_24080;
(statearr_24095[(14)] = inst_24060);

return statearr_24095;
})();
var statearr_24096_24121 = state_24080__$1;
(statearr_24096_24121[(2)] = inst_24059);

(statearr_24096_24121[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (5))){
var inst_24029 = (state_24080[(7)]);
var state_24080__$1 = state_24080;
var statearr_24097_24122 = state_24080__$1;
(statearr_24097_24122[(2)] = inst_24029);

(statearr_24097_24122[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (14))){
var inst_24073 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24098_24123 = state_24080__$1;
(statearr_24098_24123[(2)] = inst_24073);

(statearr_24098_24123[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (16))){
var inst_24052 = (state_24080[(15)]);
var state_24080__$1 = state_24080;
var statearr_24099_24124 = state_24080__$1;
(statearr_24099_24124[(2)] = inst_24052);

(statearr_24099_24124[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (10))){
var inst_24038 = (state_24080[(11)]);
var inst_24053 = (state_24080[(9)]);
var inst_24062 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24053,inst_24038);
var state_24080__$1 = state_24080;
if(inst_24062){
var statearr_24100_24125 = state_24080__$1;
(statearr_24100_24125[(1)] = (12));

} else {
var statearr_24101_24126 = state_24080__$1;
(statearr_24101_24126[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (18))){
var inst_24071 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24102_24127 = state_24080__$1;
(statearr_24102_24127[(2)] = inst_24071);

(statearr_24102_24127[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24081 === (8))){
var inst_24046 = (state_24080[(10)]);
var inst_24051 = (state_24080[(13)]);
var inst_24053 = (state_24080[(9)]);
var inst_24051__$1 = (state_24080[(2)]);
var inst_24052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24051__$1,(0),null);
var inst_24053__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24051__$1,(1),null);
var inst_24054 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24053__$1,inst_24046);
var state_24080__$1 = (function (){var statearr_24103 = state_24080;
(statearr_24103[(15)] = inst_24052);

(statearr_24103[(13)] = inst_24051__$1);

(statearr_24103[(9)] = inst_24053__$1);

return statearr_24103;
})();
if(inst_24054){
var statearr_24104_24128 = state_24080__$1;
(statearr_24104_24128[(1)] = (9));

} else {
var statearr_24105_24129 = state_24080__$1;
(statearr_24105_24129[(1)] = (10));

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
var re_com$typeahead$debounce_$_state_machine__21926__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__21926__auto____0 = (function (){
var statearr_24106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24106[(0)] = re_com$typeahead$debounce_$_state_machine__21926__auto__);

(statearr_24106[(1)] = (1));

return statearr_24106;
});
var re_com$typeahead$debounce_$_state_machine__21926__auto____1 = (function (state_24080){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_24080);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e24107){var ex__21929__auto__ = e24107;
var statearr_24108_24130 = state_24080;
(statearr_24108_24130[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_24080[(4)]))){
var statearr_24109_24131 = state_24080;
(statearr_24109_24131[(1)] = cljs.core.first((state_24080[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__24132 = state_24080;
state_24080 = G__24132;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__21926__auto__ = function(state_24080){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__21926__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__21926__auto____1.call(this,state_24080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__21926__auto____0;
re_com$typeahead$debounce_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__21926__auto____1;
return re_com$typeahead$debounce_$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_24110 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_24110[(6)] = c__22000__auto___24111);

return statearr_24110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


return out;
});
