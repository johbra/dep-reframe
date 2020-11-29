// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.table');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('reagent_data_table.core');
goog.require('dep.helpers.form_helpers');
dep.views.table.td_render_fn = (function dep$views$table$td_render_fn(data_key,form_fields,buttons,row,col_id){
if(cljs.core._EQ_.call(null,data_key,col_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-modal","show-modal",-11429385),true,row,cljs.core.partial.call(null,dep.helpers.form_helpers.standard_form,form_fields),buttons], null));
})], null),cljs.core.get.call(null,row,col_id)], null)], null);
} else {
if(cljs.core.boolean_QMARK_.call(null,cljs.core.get.call(null,row,col_id))){
return new cljs.core.PersistentArrayMap(null, 2, [true,"ja",false,"nein"], null).call(null,cljs.core.get.call(null,row,col_id));
} else {
return cljs.core.get.call(null,row,col_id);

}
}
});
/**
 * Komponente für die Darstellung einer reagent-data-table-Tabelle.
 */
dep.views.table.table_ui = (function dep$views$table$table_ui(data,table_title,headers,sortable_columns,sort_columns,td_render){
var table_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null));
var _ = cljs.core.swap_BANG_.call(null,table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),new cljs.core.Keyword(null,"data","data",-232669377)], null),data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),table_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-container.tableFixHead","div.table-container.tableFixHead",2016542914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.data_table,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"table-id","table-id",-766649466),table_title,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.map.call(null,(function (p1__20154_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20154_SHARP_,p1__20154_SHARP_],null));
}),headers),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-data","table-data",-1783738205).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state))),new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414),sortable_columns,new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968),sort_columns,new cljs.core.Keyword(null,"td-render-fn","td-render-fn",-1742852),td_render], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=table.js.map
