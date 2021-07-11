// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('dep.helpers.data_modifiers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
dep.helpers.data_modifiers.remove_dataset = (function dep$helpers$data_modifiers$remove_dataset(form_state,app_db_key,data_set_key,form_key){
var data_sets = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key], null)));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24748_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((data_set_key.cljs$core$IFn$_invoke$arity$1 ? data_set_key.cljs$core$IFn$_invoke$arity$1(p1__24748_SHARP_) : data_set_key.call(null,p1__24748_SHARP_)),(function (){var G__24749 = cljs.core.deref(form_state);
return (form_key.cljs$core$IFn$_invoke$arity$1 ? form_key.cljs$core$IFn$_invoke$arity$1(G__24749) : form_key.call(null,G__24749));
})());
}),data_sets))], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_modal,false], null));
});
dep.helpers.data_modifiers.replace_dataset = (function dep$helpers$data_modifiers$replace_dataset(app_db_key,data_set_key,new_dataset){
var data_sets = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key], null)));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24750_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((data_set_key.cljs$core$IFn$_invoke$arity$1 ? data_set_key.cljs$core$IFn$_invoke$arity$1(p1__24750_SHARP_) : data_set_key.call(null,p1__24750_SHARP_)),(data_set_key.cljs$core$IFn$_invoke$arity$1 ? data_set_key.cljs$core$IFn$_invoke$arity$1(new_dataset) : data_set_key.call(null,new_dataset)));
}),data_sets)),new_dataset)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_modal,false], null));
});
dep.helpers.data_modifiers.duplicate_dataset = (function dep$helpers$data_modifiers$duplicate_dataset(app_db_key,data_set_key,new_dataset){
var data_sets = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key], null)));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_sets,new_dataset)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_modal,false], null));
});
