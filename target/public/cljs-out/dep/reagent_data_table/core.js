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
return cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = (function reagent_data_table$core$filter_row_$_iter__20057(s__20058){
return (new cljs.core.LazySeq(null,(function (){
var s__20058__$1 = s__20058;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20058__$1);
if(temp__5735__auto__){
var s__20058__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20058__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20058__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20060 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20059 = (0);
while(true){
if((i__20059 < size__4528__auto__)){
var filter = cljs.core._nth.call(null,c__4527__auto__,i__20059);
cljs.core.chunk_append.call(null,b__20060,cljs.core.some.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = ((function (i__20059,filter,c__4527__auto__,size__4528__auto__,b__20060,s__20058__$2,temp__5735__auto__){
return (function reagent_data_table$core$filter_row_$_iter__20057_$_iter__20061(s__20062){
return (new cljs.core.LazySeq(null,((function (i__20059,filter,c__4527__auto__,size__4528__auto__,b__20060,s__20058__$2,temp__5735__auto__){
return (function (){
var s__20062__$1 = s__20062;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__20062__$1);
if(temp__5735__auto____$1){
var s__20062__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20062__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__20062__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__20064 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__20063 = (0);
while(true){
if((i__20063 < size__4528__auto____$1)){
var col = cljs.core._nth.call(null,c__4527__auto____$1,i__20063);
cljs.core.chunk_append.call(null,b__20064,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

var G__20069 = (i__20063 + (1));
i__20063 = G__20069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20064),reagent_data_table$core$filter_row_$_iter__20057_$_iter__20061.call(null,cljs.core.chunk_rest.call(null,s__20062__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20064),null);
}
} else {
var col = cljs.core.first.call(null,s__20062__$2);
return cljs.core.cons.call(null,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))),reagent_data_table$core$filter_row_$_iter__20057_$_iter__20061.call(null,cljs.core.rest.call(null,s__20062__$2)));
}
} else {
return null;
}
break;
}
});})(i__20059,filter,c__4527__auto__,size__4528__auto__,b__20060,s__20058__$2,temp__5735__auto__))
,null,null));
});})(i__20059,filter,c__4527__auto__,size__4528__auto__,b__20060,s__20058__$2,temp__5735__auto__))
;
return iter__4529__auto__.call(null,cljs.core.apply.call(null,cljs.core.juxt,filter_cols).call(null,row_map));
})()));

var G__20070 = (i__20059 + (1));
i__20059 = G__20070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20060),reagent_data_table$core$filter_row_$_iter__20057.call(null,cljs.core.chunk_rest.call(null,s__20058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20060),null);
}
} else {
var filter = cljs.core.first.call(null,s__20058__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = ((function (filter,s__20058__$2,temp__5735__auto__){
return (function reagent_data_table$core$filter_row_$_iter__20057_$_iter__20065(s__20066){
return (new cljs.core.LazySeq(null,(function (){
var s__20066__$1 = s__20066;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__20066__$1);
if(temp__5735__auto____$1){
var s__20066__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20066__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20066__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20068 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20067 = (0);
while(true){
if((i__20067 < size__4528__auto__)){
var col = cljs.core._nth.call(null,c__4527__auto__,i__20067);
cljs.core.chunk_append.call(null,b__20068,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

var G__20071 = (i__20067 + (1));
i__20067 = G__20071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20068),reagent_data_table$core$filter_row_$_iter__20057_$_iter__20065.call(null,cljs.core.chunk_rest.call(null,s__20066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20068),null);
}
} else {
var col = cljs.core.first.call(null,s__20066__$2);
return cljs.core.cons.call(null,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),clojure.string.upper_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))),reagent_data_table$core$filter_row_$_iter__20057_$_iter__20065.call(null,cljs.core.rest.call(null,s__20066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(filter,s__20058__$2,temp__5735__auto__))
;
return iter__4529__auto__.call(null,cljs.core.apply.call(null,cljs.core.juxt,filter_cols).call(null,row_map));
})()),reagent_data_table$core$filter_row_$_iter__20057.call(null,cljs.core.rest.call(null,s__20058__$2)));
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
reagent_data_table.core.sort_indicator = (function reagent_data_table$core$sort_indicator(id,p__20072,sort_image_base){
var map__20073 = p__20072;
var map__20073__$1 = (((((!((map__20073 == null))))?(((((map__20073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20073):map__20073);
var sc = cljs.core.get.call(null,map__20073__$1,new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968));
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
return cljs.core.reduce.call(null,(function (r,p__20079){
var vec__20080 = p__20079;
var col = cljs.core.nth.call(null,vec__20080,(0),null);
var reverse_QMARK_ = cljs.core.nth.call(null,vec__20080,(1),null);
return cljs.core.sort_by.call(null,col,(cljs.core.truth_(reverse_QMARK_)?(function (p1__20076_SHARP_,p2__20075_SHARP_){
return cljs.core.compare.call(null,p2__20075_SHARP_,p1__20076_SHARP_);
}):(function (p1__20077_SHARP_,p2__20078_SHARP_){
return cljs.core.compare.call(null,p1__20077_SHARP_,p2__20078_SHARP_);
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
var G__20083__delegate = function (args){
cljs.core.swap_BANG_.call(null,table_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-rows","child-rows",74320101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),cljs.core.not);

var expanding_QMARK__20084 = cljs.core.get_in.call(null,cljs.core.deref.call(null,table_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-rows","child-rows",74320101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,table_id], null),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null));
expand_on_click.call(null,row_data,expanding_QMARK__20084);

return args;
};
var G__20083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20085__i = 0, G__20085__a = new Array(arguments.length -  0);
while (G__20085__i < G__20085__a.length) {G__20085__a[G__20085__i] = arguments[G__20085__i + 0]; ++G__20085__i;}
  args = new cljs.core.IndexedSeq(G__20085__a,0,null);
} 
return G__20083__delegate.call(this,args);};
G__20083.cljs$lang$maxFixedArity = 0;
G__20083.cljs$lang$applyTo = (function (arglist__20086){
var args = cljs.core.seq(arglist__20086);
return G__20083__delegate(args);
});
G__20083.cljs$core$IFn$_invoke$arity$variadic = G__20083__delegate;
return G__20083;
})()
;
});
reagent_data_table.core.expand_button = (function reagent_data_table$core$expand_button(p__20087,table_state,row_data,table_id){
var map__20088 = p__20087;
var map__20088__$1 = (((((!((map__20088 == null))))?(((((map__20088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20088):map__20088);
var expanded_class = cljs.core.get.call(null,map__20088__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"expanded");
var collapsed_class = cljs.core.get.call(null,map__20088__$1,new cljs.core.Keyword(null,"collapsed-class","collapsed-class",1609340628),"collapsed");
var expand_on_click = cljs.core.get.call(null,map__20088__$1,new cljs.core.Keyword(null,"expand-on-click","expand-on-click",-700021864),cljs.core.constantly.call(null,null));
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(reagent_data_table.core.row_expanded_QMARK_.call(null,table_state,row_data,table_id))?expanded_class:collapsed_class),new cljs.core.Keyword(null,"on-click","on-click",1632826543),reagent_data_table.core.toggle_child_row_fn.call(null,table_state,row_data,table_id,expand_on_click)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,"expand-button",table_id], null)], null));
});
reagent_data_table.core.add_expand_button = (function reagent_data_table$core$add_expand_button(p__20090,tr,table_state,row_data,table_id){
var map__20091 = p__20090;
var map__20091__$1 = (((((!((map__20091 == null))))?(((((map__20091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20091):map__20091);
var child_row_opts = map__20091__$1;
var expand_button_alignment = cljs.core.get.call(null,map__20091__$1,new cljs.core.Keyword(null,"expand-button-alignment","expand-button-alignment",-1159181300),new cljs.core.Keyword(null,"right","right",-452581833));
var expand_button = reagent_data_table.core.expand_button.call(null,child_row_opts,table_state,row_data,table_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expand_button_alignment)){
return cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,tr),expand_button], null),cljs.core.rest.call(null,tr)),cljs.core.meta.call(null,tr));
} else {
return cljs.core.conj.call(null,tr,expand_button);
}
});
reagent_data_table.core.render_child_row = (function reagent_data_table$core$render_child_row(p__20093,table_state,row_data,table_id){
var map__20094 = p__20093;
var map__20094__$1 = (((((!((map__20094 == null))))?(((((map__20094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20094):map__20094);
var child_row_render_fn = cljs.core.get.call(null,map__20094__$1,new cljs.core.Keyword(null,"child-row-render-fn","child-row-render-fn",1946128907));
var expanded_class = cljs.core.get.call(null,map__20094__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"expanded");
var collapsed_class = cljs.core.get.call(null,map__20094__$1,new cljs.core.Keyword(null,"collapsed-class","collapsed-class",1609340628),"collapsed");
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(reagent_data_table.core.row_expanded_QMARK_.call(null,table_state,row_data,table_id))?expanded_class:collapsed_class)], null),child_row_render_fn.call(null,row_data)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_data,"child-row",table_id], null)], null));
});
reagent_data_table.core.row_with_child_row = (function reagent_data_table$core$row_with_child_row(p__20096,table_id,table_state,tr,row_data){
var map__20097 = p__20096;
var map__20097__$1 = (((((!((map__20097 == null))))?(((((map__20097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20097):map__20097);
var child_row_opts = map__20097__$1;
var child_row_render_fn = cljs.core.get.call(null,map__20097__$1,new cljs.core.Keyword(null,"child-row-render-fn","child-row-render-fn",1946128907));
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
reagent_data_table.core.render_thead = (function reagent_data_table$core$render_thead(p__20099,table_state){
var map__20100 = p__20099;
var map__20100__$1 = (((((!((map__20100 == null))))?(((((map__20100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20100):map__20100);
var child_row_opts = cljs.core.get.call(null,map__20100__$1,new cljs.core.Keyword(null,"child-row-opts","child-row-opts",-2081884867));
var headers = cljs.core.get.call(null,map__20100__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var sortable_columns = cljs.core.get.call(null,map__20100__$1,new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414));
var sort_image_base = cljs.core.get.call(null,map__20100__$1,new cljs.core.Keyword(null,"sort-image-base","sort-image-base",-1035377103));
var table_id = cljs.core.get.call(null,map__20100__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),(function (){var headers__$1 = (cljs.core.truth_(child_row_opts)?((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"expand-button-alignment","expand-button-alignment",-1159181300).cljs$core$IFn$_invoke$arity$1(child_row_opts)))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expand-buttons",""], null)], null),headers):cljs.core.conj.call(null,headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expand-buttons",""], null))):headers);
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function reagent_data_table$core$render_thead_$_iter__20102(s__20103){
return (new cljs.core.LazySeq(null,(function (){
var s__20103__$1 = s__20103;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20103__$1);
if(temp__5735__auto__){
var s__20103__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20103__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20103__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20105 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20104 = (0);
while(true){
if((i__20104 < size__4528__auto__)){
var vec__20106 = cljs.core._nth.call(null,c__4527__auto__,i__20104);
var col_id = cljs.core.nth.call(null,vec__20106,(0),null);
var title = cljs.core.nth.call(null,vec__20106,(1),null);
cljs.core.chunk_append.call(null,b__20105,cljs.core.with_meta.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([col_id]),sortable_columns))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20104,vec__20106,col_id,title,c__4527__auto__,size__4528__auto__,b__20105,s__20103__$2,temp__5735__auto__,headers__$1,map__20100,map__20100__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id){
return (function (){
return reagent_data_table.core.update_sort_BANG_.call(null,col_id,table_state);
});})(i__20104,vec__20106,col_id,title,c__4527__auto__,size__4528__auto__,b__20105,s__20103__$2,temp__5735__auto__,headers__$1,map__20100,map__20100__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id))
], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.sort_indicator,col_id,cljs.core.deref.call(null,table_state),sort_image_base], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),title], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id,table_id], null)], null)));

var G__20112 = (i__20104 + (1));
i__20104 = G__20112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20105),reagent_data_table$core$render_thead_$_iter__20102.call(null,cljs.core.chunk_rest.call(null,s__20103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20105),null);
}
} else {
var vec__20109 = cljs.core.first.call(null,s__20103__$2);
var col_id = cljs.core.nth.call(null,vec__20109,(0),null);
var title = cljs.core.nth.call(null,vec__20109,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([col_id]),sortable_columns))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__20109,col_id,title,s__20103__$2,temp__5735__auto__,headers__$1,map__20100,map__20100__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id){
return (function (){
return reagent_data_table.core.update_sort_BANG_.call(null,col_id,table_state);
});})(vec__20109,col_id,title,s__20103__$2,temp__5735__auto__,headers__$1,map__20100,map__20100__$1,child_row_opts,headers,sortable_columns,sort_image_base,table_id))
], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_data_table.core.sort_indicator,col_id,cljs.core.deref.call(null,table_state),sort_image_base], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),title], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_id,table_id], null)], null)),reagent_data_table$core$render_thead_$_iter__20102.call(null,cljs.core.rest.call(null,s__20103__$2)));
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
reagent_data_table.core.render_tbody = (function reagent_data_table$core$render_tbody(p__20114,table_state){
var map__20115 = p__20114;
var map__20115__$1 = (((((!((map__20115 == null))))?(((((map__20115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20115):map__20115);
var headers = cljs.core.get.call(null,map__20115__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var rows = cljs.core.get.call(null,map__20115__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var filterable_columns = cljs.core.get.call(null,map__20115__$1,new cljs.core.Keyword(null,"filterable-columns","filterable-columns",-1774226458));
var td_render_fn = cljs.core.get.call(null,map__20115__$1,new cljs.core.Keyword(null,"td-render-fn","td-render-fn",-1742852),(function (row,k){
return cljs.core.get.call(null,row,k);
}));
var table_id = cljs.core.get.call(null,map__20115__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
var child_row_opts = cljs.core.get.call(null,map__20115__$1,new cljs.core.Keyword(null,"child-row-opts","child-row-opts",-2081884867));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = (function reagent_data_table$core$render_tbody_$_iter__20117(s__20118){
return (new cljs.core.LazySeq(null,(function (){
var s__20118__$1 = s__20118;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20118__$1);
if(temp__5735__auto__){
var s__20118__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20118__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20118__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20120 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20119 = (0);
while(true){
if((i__20119 < size__4528__auto__)){
var row = cljs.core._nth.call(null,c__4527__auto__,i__20119);
cljs.core.chunk_append.call(null,b__20120,(function (){var tr = cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4529__auto__ = ((function (i__20119,row,c__4527__auto__,size__4528__auto__,b__20120,s__20118__$2,temp__5735__auto__,map__20115,map__20115__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function reagent_data_table$core$render_tbody_$_iter__20117_$_iter__20121(s__20122){
return (new cljs.core.LazySeq(null,((function (i__20119,row,c__4527__auto__,size__4528__auto__,b__20120,s__20118__$2,temp__5735__auto__,map__20115,map__20115__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function (){
var s__20122__$1 = s__20122;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__20122__$1);
if(temp__5735__auto____$1){
var s__20122__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20122__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__20122__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__20124 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__20123 = (0);
while(true){
if((i__20123 < size__4528__auto____$1)){
var vec__20125 = cljs.core._nth.call(null,c__4527__auto____$1,i__20123);
var k = cljs.core.nth.call(null,vec__20125,(0),null);
var _ = cljs.core.nth.call(null,vec__20125,(1),null);
cljs.core.chunk_append.call(null,b__20124,reagent_data_table.core.render_td.call(null,td_render_fn,table_id,headers,row,k));

var G__20142 = (i__20123 + (1));
i__20123 = G__20142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20124),reagent_data_table$core$render_tbody_$_iter__20117_$_iter__20121.call(null,cljs.core.chunk_rest.call(null,s__20122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20124),null);
}
} else {
var vec__20128 = cljs.core.first.call(null,s__20122__$2);
var k = cljs.core.nth.call(null,vec__20128,(0),null);
var _ = cljs.core.nth.call(null,vec__20128,(1),null);
return cljs.core.cons.call(null,reagent_data_table.core.render_td.call(null,td_render_fn,table_id,headers,row,k),reagent_data_table$core$render_tbody_$_iter__20117_$_iter__20121.call(null,cljs.core.rest.call(null,s__20122__$2)));
}
} else {
return null;
}
break;
}
});})(i__20119,row,c__4527__auto__,size__4528__auto__,b__20120,s__20118__$2,temp__5735__auto__,map__20115,map__20115__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
,null,null));
});})(i__20119,row,c__4527__auto__,size__4528__auto__,b__20120,s__20118__$2,temp__5735__auto__,map__20115,map__20115__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
;
return iter__4529__auto__.call(null,headers);
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,table_id], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"child-row-render-fn","child-row-render-fn",1946128907).cljs$core$IFn$_invoke$arity$1(child_row_opts))){
return reagent_data_table.core.row_with_child_row.call(null,child_row_opts,table_id,table_state,tr,row);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr], null);
}
})());

var G__20143 = (i__20119 + (1));
i__20119 = G__20143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20120),reagent_data_table$core$render_tbody_$_iter__20117.call(null,cljs.core.chunk_rest.call(null,s__20118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20120),null);
}
} else {
var row = cljs.core.first.call(null,s__20118__$2);
return cljs.core.cons.call(null,(function (){var tr = cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4529__auto__ = ((function (row,s__20118__$2,temp__5735__auto__,map__20115,map__20115__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts){
return (function reagent_data_table$core$render_tbody_$_iter__20117_$_iter__20131(s__20132){
return (new cljs.core.LazySeq(null,(function (){
var s__20132__$1 = s__20132;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__20132__$1);
if(temp__5735__auto____$1){
var s__20132__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20132__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20132__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20134 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20133 = (0);
while(true){
if((i__20133 < size__4528__auto__)){
var vec__20135 = cljs.core._nth.call(null,c__4527__auto__,i__20133);
var k = cljs.core.nth.call(null,vec__20135,(0),null);
var _ = cljs.core.nth.call(null,vec__20135,(1),null);
cljs.core.chunk_append.call(null,b__20134,reagent_data_table.core.render_td.call(null,td_render_fn,table_id,headers,row,k));

var G__20144 = (i__20133 + (1));
i__20133 = G__20144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20134),reagent_data_table$core$render_tbody_$_iter__20117_$_iter__20131.call(null,cljs.core.chunk_rest.call(null,s__20132__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20134),null);
}
} else {
var vec__20138 = cljs.core.first.call(null,s__20132__$2);
var k = cljs.core.nth.call(null,vec__20138,(0),null);
var _ = cljs.core.nth.call(null,vec__20138,(1),null);
return cljs.core.cons.call(null,reagent_data_table.core.render_td.call(null,td_render_fn,table_id,headers,row,k),reagent_data_table$core$render_tbody_$_iter__20117_$_iter__20131.call(null,cljs.core.rest.call(null,s__20132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__20118__$2,temp__5735__auto__,map__20115,map__20115__$1,headers,rows,filterable_columns,td_render_fn,table_id,child_row_opts))
;
return iter__4529__auto__.call(null,headers);
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,table_id], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"child-row-render-fn","child-row-render-fn",1946128907).cljs$core$IFn$_invoke$arity$1(child_row_opts))){
return reagent_data_table.core.row_with_child_row.call(null,child_row_opts,table_id,table_state,tr,row);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tr], null);
}
})(),reagent_data_table$core$render_tbody_$_iter__20117.call(null,cljs.core.rest.call(null,s__20118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,(function (){var G__20141 = rows;
var G__20141__$1 = ((cljs.core.seq.call(null,filterable_columns))?cljs.core.filter.call(null,(function (p1__20113_SHARP_){
return reagent_data_table.core.filter_row.call(null,new cljs.core.Keyword(null,"filter-string","filter-string",141473560).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),filterable_columns,p1__20113_SHARP_);
}),G__20141):G__20141);
if(cljs.core.truth_(new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)))){
return reagent_data_table.core.do_sort.call(null,new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),G__20141__$1);
} else {
return G__20141__$1;
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
reagent_data_table.core.data_table = (function reagent_data_table$core$data_table(p__20146){
var map__20147 = p__20146;
var map__20147__$1 = (((((!((map__20147 == null))))?(((((map__20147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20147):map__20147);
var child_row_opts = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"child-row-opts","child-row-opts",-2081884867));
var sort_columns = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"sort-columns","sort-columns",-41703968));
var table_state_change_fn = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"table-state-change-fn","table-state-change-fn",1846790912));
var sortable_columns = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414));
var sf_input_id = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"sf-input-id","sf-input-id",1040438086),"dt-sf-input");
var table_id = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466),"");
var table_class = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"table-class","table-class",-1392889269),"table table-striped table-bordered");
var sort_image_base = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"sort-image-base","sort-image-base",-1035377103),"/img/");
var filter_string = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"filter-string","filter-string",141473560));
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

return (function (p__20149){
var map__20150 = p__20149;
var map__20150__$1 = (((((!((map__20150 == null))))?(((((map__20150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20150):map__20150);
var opts = map__20150__$1;
var headers = cljs.core.get.call(null,map__20150__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var filterable_columns = cljs.core.get.call(null,map__20150__$1,new cljs.core.Keyword(null,"filterable-columns","filterable-columns",-1774226458));
var filter_label = cljs.core.get.call(null,map__20150__$1,new cljs.core.Keyword(null,"filter-label","filter-label",-596413416));
var opts_with_defaults = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort-image-base","sort-image-base",-1035377103),sort_image_base], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.seq.call(null,filterable_columns))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__4126__auto__ = filter_label;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["Filter by ",clojure.string.join.call(null,", ",cljs.core.map.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,headers),filterable_columns)),":"].join('');
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),sf_input_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"8px","8px",-1434652563)], null),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"filter-string","filter-string",141473560).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20145_SHARP_){
return cljs.core.swap_BANG_.call(null,table_state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-string","filter-string",141473560),p1__20145_SHARP_.target.value);
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),table_id,new cljs.core.Keyword(null,"class","class",-2030961996),table_class,new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),"0",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),reagent_data_table.core.render_thead.call(null,opts_with_defaults,table_state),reagent_data_table.core.render_tbody.call(null,opts_with_defaults,table_state)], null)], null);
});
});

//# sourceMappingURL=core.js.map