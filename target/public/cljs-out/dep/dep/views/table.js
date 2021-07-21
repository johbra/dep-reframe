// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.table');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('reagent_data_table.core');
goog.require('dep.helpers.form_helpers');
dep.views.table.td_render_fn = (function dep$views$table$td_render_fn(data_key,form_fields,buttons,row,col_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_key,col_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_modal,true,row,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dep.helpers.form_helpers.standard_form,form_fields),buttons], null));
})], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,col_id)], null)], null);
} else {
if(cljs.core.boolean_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,col_id))){
var G__30521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,col_id);
var fexpr__30520 = new cljs.core.PersistentArrayMap(null, 3, [true,"ja",false,"nein",cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__30520.cljs$core$IFn$_invoke$arity$1 ? fexpr__30520.cljs$core$IFn$_invoke$arity$1(G__30521) : fexpr__30520.call(null,G__30521));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,col_id);

}
}
});
/**
 * Komponente für die Darstellung einer reagent-data-table-Tabelle.
 */
dep.views.table.table_ui = (function dep$views$table$table_ui(data,table_title,headers,sortable_columns,sort_columns,td_render){
var table_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$table_DASH_data,null], null));
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_data,cljs.core.cst$kw$data], null),data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level2,cljs.core.cst$kw$label,table_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$table_DASH_container$tableFixHead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.data_table,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$table_DASH_id,table_title,cljs.core.cst$kw$headers,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30522_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30522_SHARP_,p1__30522_SHARP_],null));
}),headers),cljs.core.cst$kw$rows,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$table_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state))),cljs.core.cst$kw$sortable_DASH_columns,sortable_columns,cljs.core.cst$kw$sort_DASH_columns,sort_columns,cljs.core.cst$kw$td_DASH_render_DASH_fn,td_render,cljs.core.cst$kw$sort_DASH_image_DASH_base,"img/"], null)], null)], null)], null)], null)], null);
});
