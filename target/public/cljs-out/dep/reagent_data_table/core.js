// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent_data_table.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
/**
 * Splits a string of filter text into tokens
 */
reagent_data_table.core.filter_tokens = (function reagent_data_table$core$filter_tokens(s){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
});
/**
 * Predicate fn for deciding whether to show a row when filtering is being applied. All filters must match somewhere
 * in a row for it to be shown
 */
reagent_data_table.core.filter_row = (function reagent_data_table$core$filter_row(s,filter_cols,row_map){
return cljs.core.every_QMARK_(cljs.core.identity,(function (){var iter__4529__auto__ = (function reagent_data_table$core$filter_row_$_iter__24139(s__24140){
return (new cljs.core.LazySeq(null,(function (){
var s__24140__$1 = s__24140;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__24140__$1);
if(temp__5735__auto__){
var s__24140__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24140__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24140__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24142 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24141 = (0);
while(true){
if((i__24141 < size__4528__auto__)){
var filter = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__24141);
cljs.core.chunk_append(b__24142,cljs.core.some(cljs.core.identity,(function (){var iter__4529__auto__ = ((function (i__24141,filter,c__4527__auto__,size__4528__auto__,b__24142,s__24140__$2,temp__5735__auto__){
return (function reagent_data_table$core$filter_row_$_iter__24139_$_iter__24143(s__24144){
return (new cljs.core.LazySeq(null,((function (i__24141,filter,c__4527__auto__,size__4528__auto__,b__24142,s__24140__$2,temp__5735__auto__){
return (function (){
var s__24144__$1 = s__24144;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__24144__$1);
if(temp__5735__auto____$1){
var s__24144__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24144__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__24144__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__24146 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__24145 = (0);
while(true){
if((i__24145 < size__4528__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__24145);
cljs.core.chunk_append(b__24146,clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

var G__24153 = (i__24145 + (1));
i__24145 = G__24153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24146),reagent_data_table$core$filter_row_$_iter__24139_$_iter__24143(cljs.core.chunk_rest(s__24144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24146),null);
}
} else {
var col = cljs.core.first(s__24144__$2);
return cljs.core.cons(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))),reagent_data_table$core$filter_row_$_iter__24139_$_iter__24143(cljs.core.rest(s__24144__$2)));
}
} else {
return null;
}
break;
}
});})(i__24141,filter,c__4527__auto__,size__4528__auto__,b__24142,s__24140__$2,temp__5735__auto__))
,null,null));
});})(i__24141,filter,c__4527__auto__,size__4528__auto__,b__24142,s__24140__$2,temp__5735__auto__))
;
return iter__4529__auto__((function (){var fexpr__24147 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,filter_cols);
return (fexpr__24147.cljs$core$IFn$_invoke$arity$1 ? fexpr__24147.cljs$core$IFn$_invoke$arity$1(row_map) : fexpr__24147.call(null,row_map));
})());
})()));

var G__24154 = (i__24141 + (1));
i__24141 = G__24154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24142),reagent_data_table$core$filter_row_$_iter__24139(cljs.core.chunk_rest(s__24140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24142),null);
}
} else {
var filter = cljs.core.first(s__24140__$2);
return cljs.core.cons(cljs.core.some(cljs.core.identity,(function (){var iter__4529__auto__ = ((function (filter,s__24140__$2,temp__5735__auto__){
return (function reagent_data_table$core$filter_row_$_iter__24139_$_iter__24148(s__24149){
return (new cljs.core.LazySeq(null,(function (){
var s__24149__$1 = s__24149;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__24149__$1);
if(temp__5735__auto____$1){
var s__24149__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24149__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24149__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24151 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24150 = (0);
while(true){
if((i__24150 < size__4528__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__24150);
cljs.core.chunk_append(b__24151,clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

var G__24155 = (i__24150 + (1));
i__24150 = G__24155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24151),reagent_data_table$core$filter_row_$_iter__24139_$_iter__24148(cljs.core.chunk_rest(s__24149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24151),null);
}
} else {
var col = cljs.core.first(s__24149__$2);
return cljs.core.cons(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))),reagent_data_table$core$filter_row_$_iter__24139_$_iter__24148(cljs.core.rest(s__24149__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(filter,s__24140__$2,temp__5735__auto__))
;
return iter__4529__auto__((function (){var fexpr__24152 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,filter_cols);
return (fexpr__24152.cljs$core$IFn$_invoke$arity$1 ? fexpr__24152.cljs$core$IFn$_invoke$arity$1(row_map) : fexpr__24152.call(null,row_map));
})());
})()),reagent_data_table$core$filter_row_$_iter__24139(cljs.core.rest(s__24140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(reagent_data_table.core.filter_tokens(s));
})());
});
/**
 * Generates the image component for the little arrows next to the column name indicating the sort orders
 */
reagent_data_table.core.sort_indicator = (function reagent_data_table$core$sort_indicator(id,p__24156,sort_image_base){
var map__24157 = p__24156;
var map__24157__$1 = (((((!((map__24157 == null))))?(((((map__24157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24157):map__24157);
var sc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24157__$1,cljs.core.cst$kw$sort_DASH_columns);
var h = (function reagent_data_table$core$sort_indicator_$_h(url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sort_image_base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,cljs.core.cst$kw$8px], null),cljs.core.cst$kw$src,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.first(sc))))?(cljs.core.truth_(cljs.core.second(cljs.core.first(sc)))?h("sort_asc.png"):h("sort_desc.png")):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.second(sc))))?(cljs.core.truth_(cljs.core.second(cljs.core.second(sc)))?h("sort_asc_2nd.png"):h("sort_desc_2nd.png")):h("sort_both.png")
))], null)], null);
});
/**
 * If the first sort-column is already `id` then reverse its sort-order,
 * Otherwise insert [id false] as the first and remove other instances of `id` from the list
 */
reagent_data_table.core.update_sort_columns = (function reagent_data_table$core$update_sort_columns(current_columns,id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.ffirst(current_columns))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.not(cljs.core.second(cljs.core.first(current_columns)))], null),cljs.core.rest(current_columns));
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,false], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(col));
}),current_columns));
}
});
/**
 * On-click handler for updating the sort-columns field in the table's state when
 */
reagent_data_table.core.update_sort_BANG_ = (function reagent_data_table$core$update_sort_BANG_(id,table_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(table_state,cljs.core.update,cljs.core.cst$kw$sort_DASH_columns,reagent_data_table.core.update_sort_columns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
/**
 * Applies the sorting in `sort-columns` to the data in `rows`
 */
reagent_data_table.core.do_sort = (function reagent_data_table$core$do_sort(sort_columns,rows){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__24163){
var vec__24164 = p__24163;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(0),null);
var reverse_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(1),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(col,(cljs.core.truth_(reverse_QMARK_)?(function (p1__24160_SHARP_,p2__24159_SHARP_){
return cljs.core.compare(p2__24159_SHARP_,p1__24160_SHARP_);
}):(function (p1__24161_SHARP_,p2__24162_SHARP_){
return cljs.core.compare(p1__24161_SHARP_,p2__24162_SHARP_);
})),r);
}),rows,cljs.core.reverse(sort_columns));
});
reagent_data_table.core.row_expanded_QMARK_ = (function reagent_data_table$core$row_expanded_QMARK_(table_state,row_data,table_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$child_DASH_rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),cljs.core.cst$kw$expanded_QMARK_], null));
});
/**
 * Returns a fn that toggles `:expanded?` for a specific row.
 * fn will return args so that it may be composed with a pre-existing on-click handler
 */
reagent_data_table.core.toggle_child_row_fn = (function reagent_data_table$core$toggle_child_row_fn(table_state,row_data,table_id,expand_on_click){
return (function() { 
var G__24167__delegate = function (args){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$child_DASH_rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),cljs.core.cst$kw$expanded_QMARK_], null),cljs.core.not);

var expanding_QMARK__24168 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$child_DASH_rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),cljs.core.cst$kw$expanded_QMARK_], null));
(expand_on_click.cljs$core$IFn$_invoke$arity$2 ? expand_on_click.cljs$core$IFn$_invoke$arity$2(row_data,expanding_QMARK__24168) : expand_on_click.call(null,row_data,expanding_QMARK__24168));

return args;
};
var G__24167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24169__i = 0, G__24169__a = new Array(arguments.length -  0);
while (G__24169__i < G__24169__a.length) {G__24169__a[G__24169__i] = arguments[G__24169__i + 0]; ++G__24169__i;}
  args = new cljs.core.IndexedSeq(G__24169__a,0,null);
} 
return G__24167__delegate.call(this,args);};
G__24167.cljs$lang$maxFixedArity = 0;
G__24167.cljs$lang$applyTo = (function (arglist__24170){
var args = cljs.core.seq(arglist__24170);
return G__24167__delegate(args);
});
G__24167.cljs$core$IFn$_invoke$arity$variadic = G__24167__delegate;
return G__24167;
})()
;
});
reagent_data_table.core.expand_button = (function reagent_data_table$core$expand_button(p__24171,table_state,row_data,table_id){
var map__24172 = p__24171;
var map__24172__$1 = (((((!((map__24172 == null))))?(((((map__24172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24172):map__24172);
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24172__$1,cljs.core.cst$kw$expanded_DASH_class,"expanded");
var collapsed_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24172__$1,cljs.core.cst$kw$collapsed_DASH_class,"collapsed");
var expand_on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24172__$1,cljs.core.cst$kw$expand_DASH_on_DASH_click,cljs.core.constantly(null));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(cljs.core.truth_(reagent_data_table.core.row_expanded_QMARK_(table_state,row_data,table_id))?expanded_class:collapsed_class),cljs.core.cst$kw$on_DASH_click,reagent_data_table.core.toggle_child_row_fn(table_state,row_data,table_id,expand_on_click)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,"expand-button",table_id], null)], null));
});
reagent_data_table.core.add_expand_button = (function reagent_data_table$core$add_expand_button(p__24174,tr,table_state,row_data,table_id){
var map__24175 = p__24174;
var map__24175__$1 = (((((!((map__24175 == null))))?(((((map__24175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24175):map__24175);
var child_row_opts = map__24175__$1;
var expand_button_alignment = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24175__$1,cljs.core.cst$kw$expand_DASH_button_DASH_alignment,cljs.core.cst$kw$right);
var expand_button = reagent_data_table.core.expand_button(child_row_opts,table_state,row_data,table_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,expand_button_alignment)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tr),expand_button], null),cljs.core.rest(tr)),cljs.core.meta(tr));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tr,expand_button);
}
});
reagent_data_table.core.render_child_row = (function reagent_data_table$core$render_child_row(p__24177,table_state,row_data,table_id){
var map__24178 = p__24177;
var map__24178__$1 = (((((!((map__24178 == null))))?(((((map__24178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24178):map__24178);
var child_row_render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24178__$1,cljs.core.cst$kw$child_DASH_row_DASH_render_DASH_fn);
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24178__$1,cljs.core.cst$kw$expanded_DASH_class,"expanded");
var collapsed_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24178__$1,cljs.core.cst$kw$collapsed_DASH_class,"collapsed");
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(reagent_data_table.core.row_expanded_QMARK_(table_state,row_data,table_id))?expanded_class:collapsed_class)], null),(child_row_render_fn.cljs$core$IFn$_invoke$arity$1 ? child_row_render_fn.cljs$core$IFn$_invoke$arity$1(row_data) : child_row_render_fn.call(null,row_data))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,"child-row",table_id], null)], null));
});
reagent_data_table.core.row_with_child_row = (function reagent_data_table$core$row_with_child_row(p__24180,table_id,table_state,tr,row_data){
var map__24181 = p__24180;
var map__24181__$1 = (((((!((map__24181 == null))))?(((((map__24181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24181):map__24181);
var child_row_opts = map__24181__$1;
var child_row_render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24181__$1,cljs.core.cst$kw$child_DASH_row_DASH_render_DASH_fn);
var child_row = reagent_data_table.core.render_child_row(child_row_opts,table_state,row_data,table_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.add_expand_button(child_row_opts,tr,table_state,row_data,table_id),child_row], null);
});
reagent_data_table.core.render_td = (function reagent_data_table$core$render_td(td_render_fn,table_id,headers,row,k){
return cljs.core.with_meta((function (){var cell = (td_render_fn.cljs$core$IFn$_invoke$arity$2 ? td_render_fn.cljs$core$IFn$_invoke$arity$2(row,k) : td_render_fn.call(null,row,k));
if(((cljs.core.vector_QMARK_(cell)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$td,cljs.core.first(cell))))){
return cell;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cell], null);
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,k,table_id], null)], null));
});
reagent_data_table.core.render_thead = (function reagent_data_table$core$render_thead(p__24183,table_state){
var map__24184 = p__24183;
var map__24184__$1 = (((((!((map__24184 == null))))?(((((map__24184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24184):map__24184);
var child_row_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24184__$1,cljs.core.cst$kw$child_DASH_row_DASH_opts);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24184__$1,cljs.core.cst$kw$headers);
var sortable_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24184__$1,cljs.core.cst$kw$sortable_DASH_columns);
var sort_image_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24184__$1,cljs.core.cst$kw$sort_DASH_image_DASH_base);
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24184__$1,cljs.core.cst$kw$table_DASH_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead_GT_tr,(function (){var headers__$1 = (cljs.core.truth_(child_row_opts)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,cljs.core.cst$kw$expand_DASH_button_DASH_alignment.cljs$core$IFn$_invoke$arity$1(child_row_opts)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expand-buttons",""], null)], null),headers):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expand-buttons",""], null))):headers);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function reagent_data_table$core$render_thead_$_iter__24186(s__24187){
return (new cljs.core.LazySeq(null,(function (){
var s__24187__$1 = s__24187;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__24187__$1);
if(temp__5735__auto__){
var s__24187__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24187__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24187__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24189 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24188 = (0);
while(true){
if((i__24188 < size__4528__auto__)){
var vec__24190 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__24188);
var col_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24190,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24190,(1),null);
cljs.core.chunk_append(b__24189,cljs.core.with_meta((cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([col_id]),sortable_columns))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (i__24188,vec__24190,col_id,title,c__4527__auto__,size__4528__auto__,b__24189,s__24187__$2,temp__5735__auto__,headers__$1,map__24184,map__24184__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id){
return (function (){
return reagent_data_table.core.update_sort_BANG_(col_id,table_state);
});})(i__24188,vec__24190,col_id,title,c__4527__auto__,size__4528__auto__,b__24189,s__24187__$2,temp__5735__auto__,headers__$1,map__24184,map__24184__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id))
], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.sort_indicator,col_id,cljs.core.deref(table_state),sort_image_base], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,title], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id,table_id], null)], null)));

var G__24196 = (i__24188 + (1));
i__24188 = G__24196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24189),reagent_data_table$core$render_thead_$_iter__24186(cljs.core.chunk_rest(s__24187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24189),null);
}
} else {
var vec__24193 = cljs.core.first(s__24187__$2);
var col_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24193,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24193,(1),null);
return cljs.core.cons(cljs.core.with_meta((cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([col_id]),sortable_columns))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (vec__24193,col_id,title,s__24187__$2,temp__5735__auto__,headers__$1,map__24184,map__24184__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id){
return (function (){
return reagent_data_table.core.update_sort_BANG_(col_id,table_state);
});})(vec__24193,col_id,title,s__24187__$2,temp__5735__auto__,headers__$1,map__24184,map__24184__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id))
], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.sort_indicator,col_id,cljs.core.deref(table_state),sort_image_base], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,title], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id,table_id], null)], null)),reagent_data_table$core$render_thead_$_iter__24186(cljs.core.rest(s__24187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(headers__$1);
})());
})()], null);
});
reagent_data_table.core.render_tbody = (function reagent_data_table$core$render_tbody(p__24198,table_state){
var map__24199 = p__24198;
var map__24199__$1 = (((((!((map__24199 == null))))?(((((map__24199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24199):map__24199);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,cljs.core.cst$kw$headers);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,cljs.core.cst$kw$rows);
var filterable_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,cljs.core.cst$kw$filterable_DASH_columns);
var td_render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24199__$1,cljs.core.cst$kw$td_DASH_render_DASH_fn,(function (row,k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
}));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,cljs.core.cst$kw$table_DASH_id);
var child_row_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,cljs.core.cst$kw$child_DASH_row_DASH_opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function reagent_data_table$core$render_tbody_$_iter__24201(s__24202){
return (new cljs.core.LazySeq(null,(function (){
var s__24202__$1 = s__24202;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__24202__$1);
if(temp__5735__auto__){
var s__24202__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24202__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24202__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24204 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24203 = (0);
while(true){
if((i__24203 < size__4528__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__24203);
cljs.core.chunk_append(b__24204,(function (){var tr = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),(function (){var iter__4529__auto__ = ((function (i__24203,row,c__4527__auto__,size__4528__auto__,b__24204,s__24202__$2,temp__5735__auto__,map__24199,map__24199__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function reagent_data_table$core$render_tbody_$_iter__24201_$_iter__24205(s__24206){
return (new cljs.core.LazySeq(null,((function (i__24203,row,c__4527__auto__,size__4528__auto__,b__24204,s__24202__$2,temp__5735__auto__,map__24199,map__24199__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function (){
var s__24206__$1 = s__24206;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__24206__$1);
if(temp__5735__auto____$1){
var s__24206__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24206__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__24206__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__24208 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__24207 = (0);
while(true){
if((i__24207 < size__4528__auto____$1)){
var vec__24209 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__24207);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24209,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24209,(1),null);
cljs.core.chunk_append(b__24208,reagent_data_table.core.render_td(td_render_fn,table_id,headers,row,k));

var G__24226 = (i__24207 + (1));
i__24207 = G__24226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24208),reagent_data_table$core$render_tbody_$_iter__24201_$_iter__24205(cljs.core.chunk_rest(s__24206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24208),null);
}
} else {
var vec__24212 = cljs.core.first(s__24206__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24212,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24212,(1),null);
return cljs.core.cons(reagent_data_table.core.render_td(td_render_fn,table_id,headers,row,k),reagent_data_table$core$render_tbody_$_iter__24201_$_iter__24205(cljs.core.rest(s__24206__$2)));
}
} else {
return null;
}
break;
}
});})(i__24203,row,c__4527__auto__,size__4528__auto__,b__24204,s__24202__$2,temp__5735__auto__,map__24199,map__24199__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
,null,null));
});})(i__24203,row,c__4527__auto__,size__4528__auto__,b__24204,s__24202__$2,temp__5735__auto__,map__24199,map__24199__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
;
return iter__4529__auto__(headers);
})()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,table_id], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$child_DASH_row_DASH_render_DASH_fn.cljs$core$IFn$_invoke$arity$1(child_row_opts))){
return reagent_data_table.core.row_with_child_row(child_row_opts,table_id,table_state,tr,row);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr], null);
}
})());

var G__24227 = (i__24203 + (1));
i__24203 = G__24227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24204),reagent_data_table$core$render_tbody_$_iter__24201(cljs.core.chunk_rest(s__24202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24204),null);
}
} else {
var row = cljs.core.first(s__24202__$2);
return cljs.core.cons((function (){var tr = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),(function (){var iter__4529__auto__ = ((function (row,s__24202__$2,temp__5735__auto__,map__24199,map__24199__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function reagent_data_table$core$render_tbody_$_iter__24201_$_iter__24215(s__24216){
return (new cljs.core.LazySeq(null,(function (){
var s__24216__$1 = s__24216;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__24216__$1);
if(temp__5735__auto____$1){
var s__24216__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24216__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24216__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24218 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24217 = (0);
while(true){
if((i__24217 < size__4528__auto__)){
var vec__24219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__24217);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24219,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24219,(1),null);
cljs.core.chunk_append(b__24218,reagent_data_table.core.render_td(td_render_fn,table_id,headers,row,k));

var G__24228 = (i__24217 + (1));
i__24217 = G__24228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24218),reagent_data_table$core$render_tbody_$_iter__24201_$_iter__24215(cljs.core.chunk_rest(s__24216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24218),null);
}
} else {
var vec__24222 = cljs.core.first(s__24216__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222,(1),null);
return cljs.core.cons(reagent_data_table.core.render_td(td_render_fn,table_id,headers,row,k),reagent_data_table$core$render_tbody_$_iter__24201_$_iter__24215(cljs.core.rest(s__24216__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__24202__$2,temp__5735__auto__,map__24199,map__24199__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
;
return iter__4529__auto__(headers);
})()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,table_id], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$child_DASH_row_DASH_render_DASH_fn.cljs$core$IFn$_invoke$arity$1(child_row_opts))){
return reagent_data_table.core.row_with_child_row(child_row_opts,table_id,table_state,tr,row);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr], null);
}
})(),reagent_data_table$core$render_tbody_$_iter__24201(cljs.core.rest(s__24202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((function (){var G__24225 = rows;
var G__24225__$1 = ((cljs.core.seq(filterable_columns))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24197_SHARP_){
return reagent_data_table.core.filter_row(cljs.core.cst$kw$filter_DASH_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state)),filterable_columns,p1__24197_SHARP_);
}),G__24225):G__24225);
if(cljs.core.truth_(cljs.core.cst$kw$sort_DASH_columns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state)))){
return reagent_data_table.core.do_sort(cljs.core.cst$kw$sort_DASH_columns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state)),G__24225__$1);
} else {
return G__24225__$1;
}
})());
})()], 0)))], null);
});
/**
 * Reagent component for a sortable/filterable table.
 * The basic model is that the rows are defined by a seq of maps. Each map contains keys whose values correspond
 * to the data which will be shown in the table.
 * 
 * Takes a single arg which is a map, uses the following keys from that map:
 * 
 * `:headers`            - A seq of `[col-id text]` where `col-id` is the key looked up in the row-maps, and `text` is the column heading
 * `:rows`               - A seq of maps which make provide the table's data
 * 
 * `:td-render-fn`       - A fn of two args, row and col-id which can return a reagent td element or just the content of it.
 * `:child-row-render-fn`- A fn of one arg, a row which, if supplied, can be used to emit a child row after
 * `:child-row-opts`     - A map with keys:
 *     `:child-row-render-fn`     - A fn of one arg, a row which, if supplied, can be used to emit a child row after each row.
 *                                - The top level element should be a valid child of `<tr>` i.e `<th>` or `<td>`
 *                                - fn should return falsey if a child row shouldn't be rendered this row
 *     `:expand-button-alignment` - `:left` or `:right` (default: `:right`)
 *     `:expanded-class`      - (optional) The CSS class to assign to expanded rows. Defaults to "expanded"
 *     `:collapsed-class`     - (optional) The CSS class to assign to collapsed rows. Defaults to "collapsed"
 *     `:expand-on-click`     - (optional) A fn which takes row-data and a boolean parameter which reports if the child row is expanded.
 *                              This function is invoked on the on-click of the child-row's expand button.
 *                              It can be used to generate side-effects on the expanding/collapsing action for a child row.
 * 
 * `:sortable-columns`   - A seq of `col-id` which dictates which columns will be sortable
 * `:filterable-columns` - A seq of `col-id` which dictates which columns will be filterable
 * `:filter-label`       - A string used as a label for the filter input. Defaults to: "Filter by: <col-1-name>, <col-2-name>..."
 * 
 * `:filter-string`      - A string to pre-populate the filter input
 * `:sort-columns`       - A seq of `[col-id reverse-order?]` pairs which can specify the inital filtering
 * `:sort-image-base`    - Where to find the files `sort_asc.png` &c. Default is `/img/`
 * 
 * `:table-id`           - The value to use as the HTML `id` attribute for the table.  Must be unique if there are multiple tables shown
 * `:table-class`        - The value used for the `class` attribute of the table
 *                         Defaults to `table table-striped table-bordered` which is OK for Bootstrap
 * `:sf-input-id`        - The value to use as the HTML `id` attribute for the search input field. Default to `dt-sf-input`
 * 
 * `:table-state-change-fn` - Optionally provide a one-arg fn which is called whenever the state of the table (sorting/filtering) changes
 *                            This is useful if some other part of your app needs to know about the sorting/filtering (saving user prefs, etc)
 */
reagent_data_table.core.data_table = (function reagent_data_table$core$data_table(p__24230){
var map__24231 = p__24230;
var map__24231__$1 = (((((!((map__24231 == null))))?(((((map__24231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24231):map__24231);
var child_row_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231__$1,cljs.core.cst$kw$child_DASH_row_DASH_opts);
var sort_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231__$1,cljs.core.cst$kw$sort_DASH_columns);
var table_state_change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231__$1,cljs.core.cst$kw$table_DASH_state_DASH_change_DASH_fn);
var sortable_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231__$1,cljs.core.cst$kw$sortable_DASH_columns);
var sf_input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24231__$1,cljs.core.cst$kw$sf_DASH_input_DASH_id,"dt-sf-input");
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24231__$1,cljs.core.cst$kw$table_DASH_id,"");
var table_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24231__$1,cljs.core.cst$kw$table_DASH_class,"table table-striped table-bordered");
var sort_image_base = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24231__$1,cljs.core.cst$kw$sort_DASH_image_DASH_base,"/img/");
var filter_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24231__$1,cljs.core.cst$kw$filter_DASH_string);
var table_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$filter_DASH_string,(function (){var or__4126__auto__ = filter_string;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$sort_DASH_columns,(function (){var or__4126__auto__ = sort_columns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (col){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,false], null);
}),sortable_columns);
}
})()], null));
if(cljs.core.truth_(table_state_change_fn)){
cljs.core.add_watch(table_state,cljs.core.cst$kw$blah,(function (_,___$1,___$2,new$){
return (table_state_change_fn.cljs$core$IFn$_invoke$arity$1 ? table_state_change_fn.cljs$core$IFn$_invoke$arity$1(new$) : table_state_change_fn.call(null,new$));
}));
} else {
}

return (function (p__24233){
var map__24234 = p__24233;
var map__24234__$1 = (((((!((map__24234 == null))))?(((((map__24234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24234):map__24234);
var opts = map__24234__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24234__$1,cljs.core.cst$kw$headers);
var filterable_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24234__$1,cljs.core.cst$kw$filterable_DASH_columns);
var filter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24234__$1,cljs.core.cst$kw$filter_DASH_label);
var opts_with_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sort_DASH_image_DASH_base,sort_image_base], null)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((cljs.core.seq(filterable_columns))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,(function (){var or__4126__auto__ = filter_label;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["Filter by ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,headers),filterable_columns)),":"].join('');
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,sf_input_id,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,cljs.core.cst$kw$8px], null),cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$filter_DASH_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state)),cljs.core.cst$kw$on_DASH_change,(function (p1__24229_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_state,cljs.core.assoc,cljs.core.cst$kw$filter_DASH_string,p1__24229_SHARP_.target.value);
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,table_id,cljs.core.cst$kw$class,table_class,cljs.core.cst$kw$cell_DASH_spacing,"0",cljs.core.cst$kw$width,"100%"], null),reagent_data_table.core.render_thead(opts_with_defaults,table_state),reagent_data_table.core.render_tbody(opts_with_defaults,table_state)], null)], null);
});
});
