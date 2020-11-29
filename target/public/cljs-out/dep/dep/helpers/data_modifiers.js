// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.helpers.data_modifiers');
goog.require('cljs.core');
goog.require('re_frame.core');
dep.helpers.data_modifiers.remove_dataset = (function dep$helpers$data_modifiers$remove_dataset(form_state,app_db_key,data_set_key,form_key){
var data_sets = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key], null)));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key,cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__20042_SHARP_){
return cljs.core._EQ_.call(null,data_set_key.call(null,p1__20042_SHARP_),form_key.call(null,cljs.core.deref.call(null,form_state)));
}),data_sets))], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false], null));
});
dep.helpers.data_modifiers.replace_dataset = (function dep$helpers$data_modifiers$replace_dataset(app_db_key,data_set_key,new_dataset){
var data_sets = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key], null)));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__20043_SHARP_){
return cljs.core._EQ_.call(null,data_set_key.call(null,p1__20043_SHARP_),data_set_key.call(null,new_dataset));
}),data_sets)),new_dataset)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false], null));
});
dep.helpers.data_modifiers.duplicate_dataset = (function dep$helpers$data_modifiers$duplicate_dataset(app_db_key,data_set_key,new_dataset){
var data_sets = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key], null)));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_key,cljs.core.conj.call(null,data_sets,new_dataset)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),false], null));
});

//# sourceMappingURL=data_modifiers.js.map
