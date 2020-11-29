// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent_data_table.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
/**
 * Splits a string of filter text into tokens
 */
reagent_data_table.core.filter_tokens = (function reagent_data_table$core$filter_tokens(s){
return cljs.core.remove.call(null,cljs.core.empty_QMARK_,clojure.string.split.call(null,s,/\s+/));
});
/**
 * Predicate fn for deciding whether to show a row when filtering is being applied. All filters must match somewhere
 * in a row for it to be shown
 */
reagent_data_table.core.filter_row = (function reagent_data_table$core$filter_row(s,filter_cols,row_map){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = (function reagent_data_table$core$filter_row_$_iter__25830(s__25831){
return (new cljs.core.LazySeq(null,(function (){
var s__25831__$1 = s__25831;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25831__$1);
if(temp__5735__auto__){
var s__25831__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25831__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25831__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25833 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25832 = (0);
while(true){
if((i__25832 < size__4528__auto__)){
var filter = cljs.core._nth.call(null,c__4527__auto__,i__25832);
cljs.core.chunk_append.call(null,b__25833,cljs.core.some.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = ((function (i__25832,filter,c__4527__auto__,size__4528__auto__,b__25833,s__25831__$2,temp__5735__auto__){
return (function reagent_data_table$core$filter_row_$_iter__25830_$_iter__25834(s__25835){
return (new cljs.core.LazySeq(null,((function (i__25832,filter,c__4527__auto__,size__4528__auto__,b__25833,s__25831__$2,temp__5735__auto__){
return (function (){
var s__25835__$1 = s__25835;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25835__$1);
if(temp__5735__auto____$1){
var s__25835__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25835__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__25835__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__25837 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__25836 = (0);
while(true){
if((i__25836 < size__4528__auto____$1)){
var col = cljs.core._nth.call(null,c__4527__auto____$1,i__25836);
cljs.core.chunk_append.call(null,b__25837,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

var G__25842 = (i__25836 + (1));
i__25836 = G__25842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25837),reagent_data_table$core$filter_row_$_iter__25830_$_iter__25834.call(null,cljs.core.chunk_rest.call(null,s__25835__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25837),null);
}
} else {
var col = cljs.core.first.call(null,s__25835__$2);
return cljs.core.cons.call(null,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))),reagent_data_table$core$filter_row_$_iter__25830_$_iter__25834.call(null,cljs.core.rest.call(null,s__25835__$2)));
}
} else {
return null;
}
break;
}
});})(i__25832,filter,c__4527__auto__,size__4528__auto__,b__25833,s__25831__$2,temp__5735__auto__))
,null,null));
});})(i__25832,filter,c__4527__auto__,size__4528__auto__,b__25833,s__25831__$2,temp__5735__auto__))
;
return iter__4529__auto__.call(null,cljs.core.apply.call(null,cljs.core.juxt,filter_cols).call(null,row_map));
})()));

var G__25843 = (i__25832 + (1));
i__25832 = G__25843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25833),reagent_data_table$core$filter_row_$_iter__25830.call(null,cljs.core.chunk_rest.call(null,s__25831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25833),null);
}
} else {
var filter = cljs.core.first.call(null,s__25831__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = ((function (filter,s__25831__$2,temp__5735__auto__){
return (function reagent_data_table$core$filter_row_$_iter__25830_$_iter__25838(s__25839){
return (new cljs.core.LazySeq(null,(function (){
var s__25839__$1 = s__25839;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25839__$1);
if(temp__5735__auto____$1){
var s__25839__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25839__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25839__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25841 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25840 = (0);
while(true){
if((i__25840 < size__4528__auto__)){
var col = cljs.core._nth.call(null,c__4527__auto__,i__25840);
cljs.core.chunk_append.call(null,b__25841,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

var G__25844 = (i__25840 + (1));
i__25840 = G__25844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25841),reagent_data_table$core$filter_row_$_iter__25830_$_iter__25838.call(null,cljs.core.chunk_rest.call(null,s__25839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25841),null);
}
} else {
var col = cljs.core.first.call(null,s__25839__$2);
return cljs.core.cons.call(null,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))),reagent_data_table$core$filter_row_$_iter__25830_$_iter__25838.call(null,cljs.core.rest.call(null,s__25839__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(filter,s__25831__$2,temp__5735__auto__))
;
return iter__4529__auto__.call(null,cljs.core.apply.call(null,cljs.core.juxt,filter_cols).call(null,row_map));
})()),reagent_data_table$core$filter_row_$_iter__25830.call(null,cljs.core.rest.call(null,s__25831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,reagent_data_table.core.filter_tokens.call(null,s));
})());
});
/**
 * Generates the image component for the little arrows next to the column name indicating the sort orders
 */
reagent_data_table.core.sort_indicator = (function reagent_data_table$core$sort_indicator(id,p__25845,sort_image_base){
var map__25846 = p__25845;
var map__25846__$1 = (((((!((map__25846 == null))))?(((((map__25846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25846):map__25846);
var sc = cljs.core.get.call(null,map__25846__$1,new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968));
var h = (function reagent_data_table$core$sort_indicator_$_h(url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sort_image_base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"8px","8px",-1434652563)], null),new cljs.core.Keyword(null,"src","src",-1651076051),((cljs.core._EQ_.call(null,id,cljs.core.first.call(null,cljs.core.first.call(null,sc))))?(cljs.core.truth_(cljs.core.second.call(null,cljs.core.first.call(null,sc)))?h.call(null,"sort_asc.png"):h.call(null,"sort_desc.png")):((cljs.core._EQ_.call(null,id,cljs.core.first.call(null,cljs.core.second.call(null,sc))))?(cljs.core.truth_(cljs.core.second.call(null,cljs.core.second.call(null,sc)))?h.call(null,"sort_asc_2nd.png"):h.call(null,"sort_desc_2nd.png")):h.call(null,"sort_both.png")
))], null)], null);
});
/**
 * If the first sort-column is already `id` then reverse its sort-order,
 * Otherwise insert [id false] as the first and remove other instances of `id` from the list
 */
reagent_data_table.core.update_sort_columns = (function reagent_data_table$core$update_sort_columns(current_columns,id){
if(cljs.core._EQ_.call(null,id,cljs.core.ffirst.call(null,current_columns))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.not.call(null,cljs.core.second.call(null,cljs.core.first.call(null,current_columns)))], null),cljs.core.rest.call(null,current_columns));
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,false], null),cljs.core.remove.call(null,(function (col){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,col));
}),current_columns));
}
});
/**
 * On-click handler for updating the sort-columns field in the table's state when
 */
reagent_data_table.core.update_sort_BANG_ = (function reagent_data_table$core$update_sort_BANG_(id,table_state){
return cljs.core.swap_BANG_.call(null,table_state,cljs.core.update,new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968),reagent_data_table.core.update_sort_columns,id);
});
/**
 * Applies the sorting in `sort-columns` to the data in `rows`
 */
reagent_data_table.core.do_sort = (function reagent_data_table$core$do_sort(sort_columns,rows){
return cljs.core.reduce.call(null,(function (r,p__25852){
var vec__25853 = p__25852;
var col = cljs.core.nth.call(null,vec__25853,(0),null);
var reverse_QMARK_ = cljs.core.nth.call(null,vec__25853,(1),null);
return cljs.core.sort_by.call(null,col,(cljs.core.truth_(reverse_QMARK_)?(function (p1__25849_SHARP_,p2__25848_SHARP_){
return cljs.core.compare.call(null,p2__25848_SHARP_,p1__25849_SHARP_);
}):(function (p1__25850_SHARP_,p2__25851_SHARP_){
return cljs.core.compare.call(null,p1__25850_SHARP_,p2__25851_SHARP_);
})),r);
}),rows,cljs.core.reverse.call(null,sort_columns));
});
reagent_data_table.core.row_expanded_QMARK_ = (function reagent_data_table$core$row_expanded_QMARK_(table_state,row_data,table_id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,table_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-rows","child-rows",74320101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null));
});
/**
 * Returns a fn that toggles `:expanded?` for a specific row.
 * fn will return args so that it may be composed with a pre-existing on-click handler
 */
reagent_data_table.core.toggle_child_row_fn = (function reagent_data_table$core$toggle_child_row_fn(table_state,row_data,table_id,expand_on_click){
return (function() { 
var G__25856__delegate = function (args){
cljs.core.swap_BANG_.call(null,table_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-rows","child-rows",74320101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),cljs.core.not);

var expanding_QMARK__25857 = cljs.core.get_in.call(null,cljs.core.deref.call(null,table_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-rows","child-rows",74320101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null));
expand_on_click.call(null,row_data,expanding_QMARK__25857);

return args;
};
var G__25856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25858__i = 0, G__25858__a = new Array(arguments.length -  0);
while (G__25858__i < G__25858__a.length) {G__25858__a[G__25858__i] = arguments[G__25858__i + 0]; ++G__25858__i;}
  args = new cljs.core.IndexedSeq(G__25858__a,0,null);
} 
return G__25856__delegate.call(this,args);};
G__25856.cljs$lang$maxFixedArity = 0;
G__25856.cljs$lang$applyTo = (function (arglist__25859){
var args = cljs.core.seq(arglist__25859);
return G__25856__delegate(args);
});
G__25856.cljs$core$IFn$_invoke$arity$variadic = G__25856__delegate;
return G__25856;
})()
;
});
reagent_data_table.core.expand_button = (function reagent_data_table$core$expand_button(p__25860,table_state,row_data,table_id){
var map__25861 = p__25860;
var map__25861__$1 = (((((!((map__25861 == null))))?(((((map__25861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25861):map__25861);
var expanded_class = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"expanded");
var collapsed_class = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"collapsed-class","collapsed-class",1609340628),"collapsed");
var expand_on_click = cljs.core.get.call(null,map__25861__$1,new cljs.core.Keyword(null,"expand-on-click","expand-on-click",-700021864),cljs.core.constantly.call(null,null));
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(reagent_data_table.core.row_expanded_QMARK_.call(null,table_state,row_data,table_id))?expanded_class:collapsed_class),new cljs.core.Keyword(null,"on-click","on-click",1632826543),reagent_data_table.core.toggle_child_row_fn.call(null,table_state,row_data,table_id,expand_on_click)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,"expand-button",table_id], null)], null));
});
reagent_data_table.core.add_expand_button = (function reagent_data_table$core$add_expand_button(p__25863,tr,table_state,row_data,table_id){
var map__25864 = p__25863;
var map__25864__$1 = (((((!((map__25864 == null))))?(((((map__25864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25864):map__25864);
var child_row_opts = map__25864__$1;
var expand_button_alignment = cljs.core.get.call(null,map__25864__$1,new cljs.core.Keyword(null,"expand-button-alignment","expand-button-alignment",-1159181300),new cljs.core.Keyword(null,"right","right",-452581833));
var expand_button = reagent_data_table.core.expand_button.call(null,child_row_opts,table_state,row_data,table_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expand_button_alignment)){
return cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,tr),expand_button], null),cljs.core.rest.call(null,tr)),cljs.core.meta.call(null,tr));
} else {
return cljs.core.conj.call(null,tr,expand_button);
}
});
reagent_data_table.core.render_child_row = (function reagent_data_table$core$render_child_row(p__25866,table_state,row_data,table_id){
var map__25867 = p__25866;
var map__25867__$1 = (((((!((map__25867 == null))))?(((((map__25867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25867):map__25867);
var child_row_render_fn = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword(null,"child-row-render-fn","child-row-render-fn",1946128907));
var expanded_class = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"expanded");
var collapsed_class = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword(null,"collapsed-class","collapsed-class",1609340628),"collapsed");
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(reagent_data_table.core.row_expanded_QMARK_.call(null,table_state,row_data,table_id))?expanded_class:collapsed_class)], null),child_row_render_fn.call(null,row_data)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,"child-row",table_id], null)], null));
});
reagent_data_table.core.row_with_child_row = (function reagent_data_table$core$row_with_child_row(p__25869,table_id,table_state,tr,row_data){
var map__25870 = p__25869;
var map__25870__$1 = (((((!((map__25870 == null))))?(((((map__25870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25870):map__25870);
var child_row_opts = map__25870__$1;
var child_row_render_fn = cljs.core.get.call(null,map__25870__$1,new cljs.core.Keyword(null,"child-row-render-fn","child-row-render-fn",1946128907));
var child_row = reagent_data_table.core.render_child_row.call(null,child_row_opts,table_state,row_data,table_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.add_expand_button.call(null,child_row_opts,tr,table_state,row_data,table_id),child_row], null);
});
reagent_data_table.core.render_td = (function reagent_data_table$core$render_td(td_render_fn,table_id,headers,row,k){
return cljs.core.with_meta.call(null,(function (){var cell = td_render_fn.call(null,row,k);
if(((cljs.core.vector_QMARK_.call(null,cell)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.first.call(null,cell))))){
return cell;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cell], null);
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,k,table_id], null)], null));
});
reagent_data_table.core.render_thead = (function reagent_data_table$core$render_thead(p__25872,table_state){
var map__25873 = p__25872;
var map__25873__$1 = (((((!((map__25873 == null))))?(((((map__25873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25873):map__25873);
var child_row_opts = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"child-row-opts","child-row-opts",-2081884867));
var headers = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var sortable_columns = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414));
var sort_image_base = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"sort-image-base","sort-image-base",-1035377103));
var table_id = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),(function (){var headers__$1 = (cljs.core.truth_(child_row_opts)?((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"expand-button-alignment","expand-button-alignment",-1159181300).cljs$core$IFn$_invoke$arity$1(child_row_opts)))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expand-buttons",""], null)], null),headers):cljs.core.conj.call(null,headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expand-buttons",""], null))):headers);
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function reagent_data_table$core$render_thead_$_iter__25875(s__25876){
return (new cljs.core.LazySeq(null,(function (){
var s__25876__$1 = s__25876;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25876__$1);
if(temp__5735__auto__){
var s__25876__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25876__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25876__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25878 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25877 = (0);
while(true){
if((i__25877 < size__4528__auto__)){
var vec__25879 = cljs.core._nth.call(null,c__4527__auto__,i__25877);
var col_id = cljs.core.nth.call(null,vec__25879,(0),null);
var title = cljs.core.nth.call(null,vec__25879,(1),null);
cljs.core.chunk_append.call(null,b__25878,cljs.core.with_meta.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([col_id]),sortable_columns))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__25877,vec__25879,col_id,title,c__4527__auto__,size__4528__auto__,b__25878,s__25876__$2,temp__5735__auto__,headers__$1,map__25873,map__25873__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id){
return (function (){
return reagent_data_table.core.update_sort_BANG_.call(null,col_id,table_state);
});})(i__25877,vec__25879,col_id,title,c__4527__auto__,size__4528__auto__,b__25878,s__25876__$2,temp__5735__auto__,headers__$1,map__25873,map__25873__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id))
], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.sort_indicator,col_id,cljs.core.deref.call(null,table_state),sort_image_base], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),title], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id,table_id], null)], null)));

var G__25885 = (i__25877 + (1));
i__25877 = G__25885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25878),reagent_data_table$core$render_thead_$_iter__25875.call(null,cljs.core.chunk_rest.call(null,s__25876__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25878),null);
}
} else {
var vec__25882 = cljs.core.first.call(null,s__25876__$2);
var col_id = cljs.core.nth.call(null,vec__25882,(0),null);
var title = cljs.core.nth.call(null,vec__25882,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([col_id]),sortable_columns))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__25882,col_id,title,s__25876__$2,temp__5735__auto__,headers__$1,map__25873,map__25873__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id){
return (function (){
return reagent_data_table.core.update_sort_BANG_.call(null,col_id,table_state);
});})(vec__25882,col_id,title,s__25876__$2,temp__5735__auto__,headers__$1,map__25873,map__25873__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id))
], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.sort_indicator,col_id,cljs.core.deref.call(null,table_state),sort_image_base], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),title], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id,table_id], null)], null)),reagent_data_table$core$render_thead_$_iter__25875.call(null,cljs.core.rest.call(null,s__25876__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,headers__$1);
})());
})()], null);
});
reagent_data_table.core.render_tbody = (function reagent_data_table$core$render_tbody(p__25887,table_state){
var map__25888 = p__25887;
var map__25888__$1 = (((((!((map__25888 == null))))?(((((map__25888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25888):map__25888);
var headers = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var rows = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var filterable_columns = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"filterable-columns","filterable-columns",-1774226458));
var td_render_fn = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"td-render-fn","td-render-fn",-1742852),(function (row,k){
return cljs.core.get.call(null,row,k);
}));
var table_id = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
var child_row_opts = cljs.core.get.call(null,map__25888__$1,new cljs.core.Keyword(null,"child-row-opts","child-row-opts",-2081884867));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = (function reagent_data_table$core$render_tbody_$_iter__25890(s__25891){
return (new cljs.core.LazySeq(null,(function (){
var s__25891__$1 = s__25891;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25891__$1);
if(temp__5735__auto__){
var s__25891__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25891__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25891__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25893 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25892 = (0);
while(true){
if((i__25892 < size__4528__auto__)){
var row = cljs.core._nth.call(null,c__4527__auto__,i__25892);
cljs.core.chunk_append.call(null,b__25893,(function (){var tr = cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4529__auto__ = ((function (i__25892,row,c__4527__auto__,size__4528__auto__,b__25893,s__25891__$2,temp__5735__auto__,map__25888,map__25888__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function reagent_data_table$core$render_tbody_$_iter__25890_$_iter__25894(s__25895){
return (new cljs.core.LazySeq(null,((function (i__25892,row,c__4527__auto__,size__4528__auto__,b__25893,s__25891__$2,temp__5735__auto__,map__25888,map__25888__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function (){
var s__25895__$1 = s__25895;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25895__$1);
if(temp__5735__auto____$1){
var s__25895__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25895__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__25895__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__25897 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__25896 = (0);
while(true){
if((i__25896 < size__4528__auto____$1)){
var vec__25898 = cljs.core._nth.call(null,c__4527__auto____$1,i__25896);
var k = cljs.core.nth.call(null,vec__25898,(0),null);
var _ = cljs.core.nth.call(null,vec__25898,(1),null);
cljs.core.chunk_append.call(null,b__25897,reagent_data_table.core.render_td.call(null,td_render_fn,table_id,headers,row,k));

var G__25915 = (i__25896 + (1));
i__25896 = G__25915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25897),reagent_data_table$core$render_tbody_$_iter__25890_$_iter__25894.call(null,cljs.core.chunk_rest.call(null,s__25895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25897),null);
}
} else {
var vec__25901 = cljs.core.first.call(null,s__25895__$2);
var k = cljs.core.nth.call(null,vec__25901,(0),null);
var _ = cljs.core.nth.call(null,vec__25901,(1),null);
return cljs.core.cons.call(null,reagent_data_table.core.render_td.call(null,td_render_fn,table_id,headers,row,k),reagent_data_table$core$render_tbody_$_iter__25890_$_iter__25894.call(null,cljs.core.rest.call(null,s__25895__$2)));
}
} else {
return null;
}
break;
}
});})(i__25892,row,c__4527__auto__,size__4528__auto__,b__25893,s__25891__$2,temp__5735__auto__,map__25888,map__25888__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
,null,null));
});})(i__25892,row,c__4527__auto__,size__4528__auto__,b__25893,s__25891__$2,temp__5735__auto__,map__25888,map__25888__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
;
return iter__4529__auto__.call(null,headers);
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,table_id], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"child-row-render-fn","child-row-render-fn",1946128907).cljs$core$IFn$_invoke$arity$1(child_row_opts))){
return reagent_data_table.core.row_with_child_row.call(null,child_row_opts,table_id,table_state,tr,row);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr], null);
}
})());

var G__25916 = (i__25892 + (1));
i__25892 = G__25916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25893),reagent_data_table$core$render_tbody_$_iter__25890.call(null,cljs.core.chunk_rest.call(null,s__25891__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25893),null);
}
} else {
var row = cljs.core.first.call(null,s__25891__$2);
return cljs.core.cons.call(null,(function (){var tr = cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4529__auto__ = ((function (row,s__25891__$2,temp__5735__auto__,map__25888,map__25888__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function reagent_data_table$core$render_tbody_$_iter__25890_$_iter__25904(s__25905){
return (new cljs.core.LazySeq(null,(function (){
var s__25905__$1 = s__25905;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__25905__$1);
if(temp__5735__auto____$1){
var s__25905__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25905__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25905__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25907 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25906 = (0);
while(true){
if((i__25906 < size__4528__auto__)){
var vec__25908 = cljs.core._nth.call(null,c__4527__auto__,i__25906);
var k = cljs.core.nth.call(null,vec__25908,(0),null);
var _ = cljs.core.nth.call(null,vec__25908,(1),null);
cljs.core.chunk_append.call(null,b__25907,reagent_data_table.core.render_td.call(null,td_render_fn,table_id,headers,row,k));

var G__25917 = (i__25906 + (1));
i__25906 = G__25917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25907),reagent_data_table$core$render_tbody_$_iter__25890_$_iter__25904.call(null,cljs.core.chunk_rest.call(null,s__25905__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25907),null);
}
} else {
var vec__25911 = cljs.core.first.call(null,s__25905__$2);
var k = cljs.core.nth.call(null,vec__25911,(0),null);
var _ = cljs.core.nth.call(null,vec__25911,(1),null);
return cljs.core.cons.call(null,reagent_data_table.core.render_td.call(null,td_render_fn,table_id,headers,row,k),reagent_data_table$core$render_tbody_$_iter__25890_$_iter__25904.call(null,cljs.core.rest.call(null,s__25905__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__25891__$2,temp__5735__auto__,map__25888,map__25888__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
;
return iter__4529__auto__.call(null,headers);
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,table_id], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"child-row-render-fn","child-row-render-fn",1946128907).cljs$core$IFn$_invoke$arity$1(child_row_opts))){
return reagent_data_table.core.row_with_child_row.call(null,child_row_opts,table_id,table_state,tr,row);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr], null);
}
})(),reagent_data_table$core$render_tbody_$_iter__25890.call(null,cljs.core.rest.call(null,s__25891__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,(function (){var G__25914 = rows;
var G__25914__$1 = ((cljs.core.seq.call(null,filterable_columns))?cljs.core.filter.call(null,(function (p1__25886_SHARP_){
return reagent_data_table.core.filter_row.call(null,new cljs.core.Keyword(null,"filter-string","filter-string",141473560).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),filterable_columns,p1__25886_SHARP_);
}),G__25914):G__25914);
if(cljs.core.truth_(new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)))){
return reagent_data_table.core.do_sort.call(null,new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),G__25914__$1);
} else {
return G__25914__$1;
}
})());
})()))], null);
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
reagent_data_table.core.data_table = (function reagent_data_table$core$data_table(p__25919){
var map__25920 = p__25919;
var map__25920__$1 = (((((!((map__25920 == null))))?(((((map__25920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25920):map__25920);
var child_row_opts = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"child-row-opts","child-row-opts",-2081884867));
var sort_columns = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968));
var table_state_change_fn = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"table-state-change-fn","table-state-change-fn",1846790912));
var sortable_columns = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414));
var sf_input_id = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"sf-input-id","sf-input-id",1040438086),"dt-sf-input");
var table_id = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),"");
var table_class = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"table-class","table-class",-1392889269),"table table-striped table-bordered");
var sort_image_base = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"sort-image-base","sort-image-base",-1035377103),"/img/");
var filter_string = cljs.core.get.call(null,map__25920__$1,new cljs.core.Keyword(null,"filter-string","filter-string",141473560));
var table_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-string","filter-string",141473560),(function (){var or__4126__auto__ = filter_string;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968),(function (){var or__4126__auto__ = sort_columns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.map.call(null,(function (col){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,false], null);
}),sortable_columns);
}
})()], null));
if(cljs.core.truth_(table_state_change_fn)){
cljs.core.add_watch.call(null,table_state,new cljs.core.Keyword(null,"blah","blah",1501156574),(function (_,___$1,___$2,new$){
return table_state_change_fn.call(null,new$);
}));
} else {
}

return (function (p__25922){
var map__25923 = p__25922;
var map__25923__$1 = (((((!((map__25923 == null))))?(((((map__25923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25923):map__25923);
var opts = map__25923__$1;
var headers = cljs.core.get.call(null,map__25923__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var filterable_columns = cljs.core.get.call(null,map__25923__$1,new cljs.core.Keyword(null,"filterable-columns","filterable-columns",-1774226458));
var filter_label = cljs.core.get.call(null,map__25923__$1,new cljs.core.Keyword(null,"filter-label","filter-label",-596413416));
var opts_with_defaults = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort-image-base","sort-image-base",-1035377103),sort_image_base], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.seq.call(null,filterable_columns))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__4126__auto__ = filter_label;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["Filter by ",clojure.string.join.call(null,", ",cljs.core.map.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,headers),filterable_columns)),":"].join('');
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),sf_input_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"8px","8px",-1434652563)], null),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"filter-string","filter-string",141473560).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25918_SHARP_){
return cljs.core.swap_BANG_.call(null,table_state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-string","filter-string",141473560),p1__25918_SHARP_.target.value);
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),table_id,new cljs.core.Keyword(null,"class","class",-2030961996),table_class,new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),"0",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),reagent_data_table.core.render_thead.call(null,opts_with_defaults,table_state),reagent_data_table.core.render_tbody.call(null,opts_with_defaults,table_state)], null)], null);
});
});

//# sourceMappingURL=core.js.map
