// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
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
return cljs.core.every_QMARK_(cljs.core.identity,(function (){var iter__4564__auto__ = (function reagent_data_table$core$filter_row_$_iter__30430(s__30431){
return (new cljs.core.LazySeq(null,(function (){
var s__30431__$1 = s__30431;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30431__$1);
if(temp__5753__auto__){
var s__30431__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30431__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30431__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30433 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30432 = (0);
while(true){
if((i__30432 < size__4563__auto__)){
var filter = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30432);
cljs.core.chunk_append(b__30433,cljs.core.some(cljs.core.identity,(function (){var iter__4564__auto__ = ((function (i__30432,filter,c__4562__auto__,size__4563__auto__,b__30433,s__30431__$2,temp__5753__auto__){
return (function reagent_data_table$core$filter_row_$_iter__30430_$_iter__30434(s__30435){
return (new cljs.core.LazySeq(null,((function (i__30432,filter,c__4562__auto__,size__4563__auto__,b__30433,s__30431__$2,temp__5753__auto__){
return (function (){
var s__30435__$1 = s__30435;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__30435__$1);
if(temp__5753__auto____$1){
var s__30435__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30435__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__30435__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__30437 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__30436 = (0);
while(true){
if((i__30436 < size__4563__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto____$1,i__30436);
cljs.core.chunk_append(b__30437,clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

var G__30444 = (i__30436 + (1));
i__30436 = G__30444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30437),reagent_data_table$core$filter_row_$_iter__30430_$_iter__30434(cljs.core.chunk_rest(s__30435__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30437),null);
}
} else {
var col = cljs.core.first(s__30435__$2);
return cljs.core.cons(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))),reagent_data_table$core$filter_row_$_iter__30430_$_iter__30434(cljs.core.rest(s__30435__$2)));
}
} else {
return null;
}
break;
}
});})(i__30432,filter,c__4562__auto__,size__4563__auto__,b__30433,s__30431__$2,temp__5753__auto__))
,null,null));
});})(i__30432,filter,c__4562__auto__,size__4563__auto__,b__30433,s__30431__$2,temp__5753__auto__))
;
return iter__4564__auto__((function (){var fexpr__30438 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,filter_cols);
return (fexpr__30438.cljs$core$IFn$_invoke$arity$1 ? fexpr__30438.cljs$core$IFn$_invoke$arity$1(row_map) : fexpr__30438.call(null,row_map));
})());
})()));

var G__30445 = (i__30432 + (1));
i__30432 = G__30445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30433),reagent_data_table$core$filter_row_$_iter__30430(cljs.core.chunk_rest(s__30431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30433),null);
}
} else {
var filter = cljs.core.first(s__30431__$2);
return cljs.core.cons(cljs.core.some(cljs.core.identity,(function (){var iter__4564__auto__ = ((function (filter,s__30431__$2,temp__5753__auto__){
return (function reagent_data_table$core$filter_row_$_iter__30430_$_iter__30439(s__30440){
return (new cljs.core.LazySeq(null,(function (){
var s__30440__$1 = s__30440;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__30440__$1);
if(temp__5753__auto____$1){
var s__30440__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30440__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30440__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30442 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30441 = (0);
while(true){
if((i__30441 < size__4563__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30441);
cljs.core.chunk_append(b__30442,clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

var G__30446 = (i__30441 + (1));
i__30441 = G__30446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30442),reagent_data_table$core$filter_row_$_iter__30430_$_iter__30439(cljs.core.chunk_rest(s__30440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30442),null);
}
} else {
var col = cljs.core.first(s__30440__$2);
return cljs.core.cons(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))),reagent_data_table$core$filter_row_$_iter__30430_$_iter__30439(cljs.core.rest(s__30440__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(filter,s__30431__$2,temp__5753__auto__))
;
return iter__4564__auto__((function (){var fexpr__30443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,filter_cols);
return (fexpr__30443.cljs$core$IFn$_invoke$arity$1 ? fexpr__30443.cljs$core$IFn$_invoke$arity$1(row_map) : fexpr__30443.call(null,row_map));
})());
})()),reagent_data_table$core$filter_row_$_iter__30430(cljs.core.rest(s__30431__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(reagent_data_table.core.filter_tokens(s));
})());
});
/**
 * Generates the image component for the little arrows next to the column name indicating the sort orders
 */
reagent_data_table.core.sort_indicator = (function reagent_data_table$core$sort_indicator(id,p__30447,sort_image_base){
var map__30448 = p__30447;
var map__30448__$1 = cljs.core.__destructure_map(map__30448);
var sc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30448__$1,cljs.core.cst$kw$sort_DASH_columns);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__30453){
var vec__30454 = p__30453;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30454,(0),null);
var reverse_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30454,(1),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(col,(cljs.core.truth_(reverse_QMARK_)?(function (p1__30450_SHARP_,p2__30449_SHARP_){
return cljs.core.compare(p2__30449_SHARP_,p1__30450_SHARP_);
}):(function (p1__30451_SHARP_,p2__30452_SHARP_){
return cljs.core.compare(p1__30451_SHARP_,p2__30452_SHARP_);
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
var G__30457__delegate = function (args){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$child_DASH_rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),cljs.core.cst$kw$expanded_QMARK_], null),cljs.core.not);

var expanding_QMARK__30458 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$child_DASH_rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),cljs.core.cst$kw$expanded_QMARK_], null));
(expand_on_click.cljs$core$IFn$_invoke$arity$2 ? expand_on_click.cljs$core$IFn$_invoke$arity$2(row_data,expanding_QMARK__30458) : expand_on_click.call(null,row_data,expanding_QMARK__30458));

return args;
};
var G__30457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30459__i = 0, G__30459__a = new Array(arguments.length -  0);
while (G__30459__i < G__30459__a.length) {G__30459__a[G__30459__i] = arguments[G__30459__i + 0]; ++G__30459__i;}
  args = new cljs.core.IndexedSeq(G__30459__a,0,null);
} 
return G__30457__delegate.call(this,args);};
G__30457.cljs$lang$maxFixedArity = 0;
G__30457.cljs$lang$applyTo = (function (arglist__30460){
var args = cljs.core.seq(arglist__30460);
return G__30457__delegate(args);
});
G__30457.cljs$core$IFn$_invoke$arity$variadic = G__30457__delegate;
return G__30457;
})()
;
});
reagent_data_table.core.expand_button = (function reagent_data_table$core$expand_button(p__30461,table_state,row_data,table_id){
var map__30462 = p__30461;
var map__30462__$1 = cljs.core.__destructure_map(map__30462);
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30462__$1,cljs.core.cst$kw$expanded_DASH_class,"expanded");
var collapsed_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30462__$1,cljs.core.cst$kw$collapsed_DASH_class,"collapsed");
var expand_on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30462__$1,cljs.core.cst$kw$expand_DASH_on_DASH_click,cljs.core.constantly(null));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(cljs.core.truth_(reagent_data_table.core.row_expanded_QMARK_(table_state,row_data,table_id))?expanded_class:collapsed_class),cljs.core.cst$kw$on_DASH_click,reagent_data_table.core.toggle_child_row_fn(table_state,row_data,table_id,expand_on_click)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,"expand-button",table_id], null)], null));
});
reagent_data_table.core.add_expand_button = (function reagent_data_table$core$add_expand_button(p__30463,tr,table_state,row_data,table_id){
var map__30464 = p__30463;
var map__30464__$1 = cljs.core.__destructure_map(map__30464);
var child_row_opts = map__30464__$1;
var expand_button_alignment = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30464__$1,cljs.core.cst$kw$expand_DASH_button_DASH_alignment,cljs.core.cst$kw$right);
var expand_button = reagent_data_table.core.expand_button(child_row_opts,table_state,row_data,table_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,expand_button_alignment)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tr),expand_button], null),cljs.core.rest(tr)),cljs.core.meta(tr));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tr,expand_button);
}
});
reagent_data_table.core.render_child_row = (function reagent_data_table$core$render_child_row(p__30465,table_state,row_data,table_id){
var map__30466 = p__30465;
var map__30466__$1 = cljs.core.__destructure_map(map__30466);
var child_row_render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30466__$1,cljs.core.cst$kw$child_DASH_row_DASH_render_DASH_fn);
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30466__$1,cljs.core.cst$kw$expanded_DASH_class,"expanded");
var collapsed_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30466__$1,cljs.core.cst$kw$collapsed_DASH_class,"collapsed");
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(reagent_data_table.core.row_expanded_QMARK_(table_state,row_data,table_id))?expanded_class:collapsed_class)], null),(child_row_render_fn.cljs$core$IFn$_invoke$arity$1 ? child_row_render_fn.cljs$core$IFn$_invoke$arity$1(row_data) : child_row_render_fn.call(null,row_data))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,"child-row",table_id], null)], null));
});
reagent_data_table.core.row_with_child_row = (function reagent_data_table$core$row_with_child_row(p__30467,table_id,table_state,tr,row_data){
var map__30468 = p__30467;
var map__30468__$1 = cljs.core.__destructure_map(map__30468);
var child_row_opts = map__30468__$1;
var child_row_render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30468__$1,cljs.core.cst$kw$child_DASH_row_DASH_render_DASH_fn);
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
reagent_data_table.core.render_thead = (function reagent_data_table$core$render_thead(p__30469,table_state){
var map__30470 = p__30469;
var map__30470__$1 = cljs.core.__destructure_map(map__30470);
var child_row_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30470__$1,cljs.core.cst$kw$child_DASH_row_DASH_opts);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30470__$1,cljs.core.cst$kw$headers);
var sortable_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30470__$1,cljs.core.cst$kw$sortable_DASH_columns);
var sort_image_base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30470__$1,cljs.core.cst$kw$sort_DASH_image_DASH_base);
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30470__$1,cljs.core.cst$kw$table_DASH_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead_GT_tr,(function (){var headers__$1 = (cljs.core.truth_(child_row_opts)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,cljs.core.cst$kw$expand_DASH_button_DASH_alignment.cljs$core$IFn$_invoke$arity$1(child_row_opts)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expand-buttons",""], null)], null),headers):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expand-buttons",""], null))):headers);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function reagent_data_table$core$render_thead_$_iter__30471(s__30472){
return (new cljs.core.LazySeq(null,(function (){
var s__30472__$1 = s__30472;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30472__$1);
if(temp__5753__auto__){
var s__30472__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30472__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30472__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30474 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30473 = (0);
while(true){
if((i__30473 < size__4563__auto__)){
var vec__30475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30473);
var col_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30475,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30475,(1),null);
cljs.core.chunk_append(b__30474,cljs.core.with_meta((cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([col_id]),sortable_columns))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (i__30473,vec__30475,col_id,title,c__4562__auto__,size__4563__auto__,b__30474,s__30472__$2,temp__5753__auto__,headers__$1,map__30470,map__30470__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id){
return (function (){
return reagent_data_table.core.update_sort_BANG_(col_id,table_state);
});})(i__30473,vec__30475,col_id,title,c__4562__auto__,size__4563__auto__,b__30474,s__30472__$2,temp__5753__auto__,headers__$1,map__30470,map__30470__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id))
], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.sort_indicator,col_id,cljs.core.deref(table_state),sort_image_base], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,title], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id,table_id], null)], null)));

var G__30481 = (i__30473 + (1));
i__30473 = G__30481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30474),reagent_data_table$core$render_thead_$_iter__30471(cljs.core.chunk_rest(s__30472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30474),null);
}
} else {
var vec__30478 = cljs.core.first(s__30472__$2);
var col_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30478,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30478,(1),null);
return cljs.core.cons(cljs.core.with_meta((cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([col_id]),sortable_columns))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (vec__30478,col_id,title,s__30472__$2,temp__5753__auto__,headers__$1,map__30470,map__30470__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id){
return (function (){
return reagent_data_table.core.update_sort_BANG_(col_id,table_state);
});})(vec__30478,col_id,title,s__30472__$2,temp__5753__auto__,headers__$1,map__30470,map__30470__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id))
], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.sort_indicator,col_id,cljs.core.deref(table_state),sort_image_base], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,title], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id,table_id], null)], null)),reagent_data_table$core$render_thead_$_iter__30471(cljs.core.rest(s__30472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(headers__$1);
})());
})()], null);
});
reagent_data_table.core.render_tbody = (function reagent_data_table$core$render_tbody(p__30483,table_state){
var map__30484 = p__30483;
var map__30484__$1 = cljs.core.__destructure_map(map__30484);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30484__$1,cljs.core.cst$kw$headers);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30484__$1,cljs.core.cst$kw$rows);
var filterable_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30484__$1,cljs.core.cst$kw$filterable_DASH_columns);
var td_render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30484__$1,cljs.core.cst$kw$td_DASH_render_DASH_fn,(function (row,k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,k);
}));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30484__$1,cljs.core.cst$kw$table_DASH_id);
var child_row_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30484__$1,cljs.core.cst$kw$child_DASH_row_DASH_opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4564__auto__ = (function reagent_data_table$core$render_tbody_$_iter__30485(s__30486){
return (new cljs.core.LazySeq(null,(function (){
var s__30486__$1 = s__30486;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30486__$1);
if(temp__5753__auto__){
var s__30486__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30486__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30486__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30488 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30487 = (0);
while(true){
if((i__30487 < size__4563__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30487);
cljs.core.chunk_append(b__30488,(function (){var tr = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),(function (){var iter__4564__auto__ = ((function (i__30487,row,c__4562__auto__,size__4563__auto__,b__30488,s__30486__$2,temp__5753__auto__,map__30484,map__30484__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function reagent_data_table$core$render_tbody_$_iter__30485_$_iter__30489(s__30490){
return (new cljs.core.LazySeq(null,((function (i__30487,row,c__4562__auto__,size__4563__auto__,b__30488,s__30486__$2,temp__5753__auto__,map__30484,map__30484__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function (){
var s__30490__$1 = s__30490;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__30490__$1);
if(temp__5753__auto____$1){
var s__30490__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30490__$2)){
var c__4562__auto____$1 = cljs.core.chunk_first(s__30490__$2);
var size__4563__auto____$1 = cljs.core.count(c__4562__auto____$1);
var b__30492 = cljs.core.chunk_buffer(size__4563__auto____$1);
if((function (){var i__30491 = (0);
while(true){
if((i__30491 < size__4563__auto____$1)){
var vec__30493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto____$1,i__30491);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30493,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30493,(1),null);
cljs.core.chunk_append(b__30492,reagent_data_table.core.render_td(td_render_fn,table_id,headers,row,k));

var G__30510 = (i__30491 + (1));
i__30491 = G__30510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30492),reagent_data_table$core$render_tbody_$_iter__30485_$_iter__30489(cljs.core.chunk_rest(s__30490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30492),null);
}
} else {
var vec__30496 = cljs.core.first(s__30490__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30496,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30496,(1),null);
return cljs.core.cons(reagent_data_table.core.render_td(td_render_fn,table_id,headers,row,k),reagent_data_table$core$render_tbody_$_iter__30485_$_iter__30489(cljs.core.rest(s__30490__$2)));
}
} else {
return null;
}
break;
}
});})(i__30487,row,c__4562__auto__,size__4563__auto__,b__30488,s__30486__$2,temp__5753__auto__,map__30484,map__30484__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
,null,null));
});})(i__30487,row,c__4562__auto__,size__4563__auto__,b__30488,s__30486__$2,temp__5753__auto__,map__30484,map__30484__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
;
return iter__4564__auto__(headers);
})()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,table_id], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$child_DASH_row_DASH_render_DASH_fn.cljs$core$IFn$_invoke$arity$1(child_row_opts))){
return reagent_data_table.core.row_with_child_row(child_row_opts,table_id,table_state,tr,row);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr], null);
}
})());

var G__30511 = (i__30487 + (1));
i__30487 = G__30511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30488),reagent_data_table$core$render_tbody_$_iter__30485(cljs.core.chunk_rest(s__30486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30488),null);
}
} else {
var row = cljs.core.first(s__30486__$2);
return cljs.core.cons((function (){var tr = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),(function (){var iter__4564__auto__ = ((function (row,s__30486__$2,temp__5753__auto__,map__30484,map__30484__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function reagent_data_table$core$render_tbody_$_iter__30485_$_iter__30499(s__30500){
return (new cljs.core.LazySeq(null,(function (){
var s__30500__$1 = s__30500;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__30500__$1);
if(temp__5753__auto____$1){
var s__30500__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30500__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__30500__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__30502 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__30501 = (0);
while(true){
if((i__30501 < size__4563__auto__)){
var vec__30503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__30501);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30503,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30503,(1),null);
cljs.core.chunk_append(b__30502,reagent_data_table.core.render_td(td_render_fn,table_id,headers,row,k));

var G__30512 = (i__30501 + (1));
i__30501 = G__30512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30502),reagent_data_table$core$render_tbody_$_iter__30485_$_iter__30499(cljs.core.chunk_rest(s__30500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30502),null);
}
} else {
var vec__30506 = cljs.core.first(s__30500__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30506,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30506,(1),null);
return cljs.core.cons(reagent_data_table.core.render_td(td_render_fn,table_id,headers,row,k),reagent_data_table$core$render_tbody_$_iter__30485_$_iter__30499(cljs.core.rest(s__30500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__30486__$2,temp__5753__auto__,map__30484,map__30484__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
;
return iter__4564__auto__(headers);
})()),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,table_id], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$child_DASH_row_DASH_render_DASH_fn.cljs$core$IFn$_invoke$arity$1(child_row_opts))){
return reagent_data_table.core.row_with_child_row(child_row_opts,table_id,table_state,tr,row);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr], null);
}
})(),reagent_data_table$core$render_tbody_$_iter__30485(cljs.core.rest(s__30486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__((function (){var G__30509 = rows;
var G__30509__$1 = ((cljs.core.seq(filterable_columns))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30482_SHARP_){
return reagent_data_table.core.filter_row(cljs.core.cst$kw$filter_DASH_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state)),filterable_columns,p1__30482_SHARP_);
}),G__30509):G__30509);
if(cljs.core.truth_(cljs.core.cst$kw$sort_DASH_columns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state)))){
return reagent_data_table.core.do_sort(cljs.core.cst$kw$sort_DASH_columns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state)),G__30509__$1);
} else {
return G__30509__$1;
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
reagent_data_table.core.data_table = (function reagent_data_table$core$data_table(p__30514){
var map__30515 = p__30514;
var map__30515__$1 = cljs.core.__destructure_map(map__30515);
var child_row_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,cljs.core.cst$kw$child_DASH_row_DASH_opts);
var sort_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,cljs.core.cst$kw$sort_DASH_columns);
var table_state_change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,cljs.core.cst$kw$table_DASH_state_DASH_change_DASH_fn);
var sortable_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,cljs.core.cst$kw$sortable_DASH_columns);
var sf_input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30515__$1,cljs.core.cst$kw$sf_DASH_input_DASH_id,"dt-sf-input");
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30515__$1,cljs.core.cst$kw$table_DASH_id,"");
var table_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30515__$1,cljs.core.cst$kw$table_DASH_class,"table table-striped table-bordered");
var sort_image_base = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30515__$1,cljs.core.cst$kw$sort_DASH_image_DASH_base,"/img/");
var filter_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,cljs.core.cst$kw$filter_DASH_string);
var table_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$filter_DASH_string,(function (){var or__4160__auto__ = filter_string;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$sort_DASH_columns,(function (){var or__4160__auto__ = sort_columns;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
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

return (function (p__30516){
var map__30517 = p__30516;
var map__30517__$1 = cljs.core.__destructure_map(map__30517);
var opts = map__30517__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30517__$1,cljs.core.cst$kw$headers);
var filterable_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30517__$1,cljs.core.cst$kw$filterable_DASH_columns);
var filter_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30517__$1,cljs.core.cst$kw$filter_DASH_label);
var opts_with_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sort_DASH_image_DASH_base,sort_image_base], null)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((cljs.core.seq(filterable_columns))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,(function (){var or__4160__auto__ = filter_label;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return ["Filter by ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,headers),filterable_columns)),":"].join('');
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,sf_input_id,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,cljs.core.cst$kw$8px], null),cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$filter_DASH_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_state)),cljs.core.cst$kw$on_DASH_change,(function (p1__30513_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_state,cljs.core.assoc,cljs.core.cst$kw$filter_DASH_string,p1__30513_SHARP_.target.value);
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,table_id,cljs.core.cst$kw$class,table_class,cljs.core.cst$kw$cell_DASH_spacing,"0",cljs.core.cst$kw$width,"100%"], null),reagent_data_table.core.render_thead(opts_with_defaults,table_state),reagent_data_table.core.render_tbody(opts_with_defaults,table_state)], null)], null);
});
});
