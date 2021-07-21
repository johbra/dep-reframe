// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_com.v_table');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.validate');
goog.require('re_com.dmm_tracker');
re_com.v_table.scrollbar_thickness = (10);
re_com.v_table.scrollbar_margin = (2);
re_com.v_table.scrollbar_tot_thick = (re_com.v_table.scrollbar_thickness + ((2) * re_com.v_table.scrollbar_margin));
re_com.v_table.px = cljs.core.memoize(re_com.util.px);
/**
 * Make a call to this function in the click event of your row renderer, then every time they Alt+Click on a row,
 *   The raw cljs object used to render that row will be popped into DevTools :-)
 *   Here is what the line might look like:
 *   :on-click (handler-fn (v-table/show-row-data-on-alt-click row row-index event))
 */
re_com.v_table.show_row_data_on_alt_click = (function re_com$v_table$show_row_data_on_alt_click(row,row_index,event){
if(cljs.core.truth_(event.altKey)){
return console.log(["ROW-INDEX[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_index),"]"].join(''),row);
} else {
return null;
}
});
/**
 * Render a horizontal or vertical scrollbar
 * 
 *   Arguments:
 * - type           [keyword] scrollbar type (:horizontal or :vertical)
 * - length         [number] px size of the long edge. If not specified, scrollbar will fill space provided
 * - width          [optional number, default = 10] px size of the short edge
 * - content-length [number] px length of the content this scrollbar will be in charge of
 * - scroll-pos     [number] current px scroll position for the beginning of the scrollbar 'thumb'
 * - on-change      [fn] called every time the thumb is dragged. Args: new-scroll-pos
 * - style          [map] CSS style map
 * 
 */
re_com.v_table.scrollbar = (function re_com$v_table$scrollbar(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20069 = arguments.length;
var i__4772__auto___20070 = (0);
while(true){
if((i__4772__auto___20070 < len__4771__auto___20069)){
args__4777__auto__.push((arguments[i__4772__auto___20070]));

var G__20071 = (i__4772__auto___20070 + (1));
i__4772__auto___20070 = G__20071;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.v_table.scrollbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.v_table.scrollbar.cljs$core$IFn$_invoke$arity$variadic = (function (p__20057){
var map__20058 = p__20057;
var map__20058__$1 = cljs.core.__destructure_map(map__20058);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20058__$1,cljs.core.cst$kw$type);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20058__$1,cljs.core.cst$kw$width,(10));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20058__$1,cljs.core.cst$kw$on_DASH_change);
var horizontal_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$horizontal);
var radius = (function (){var G__20059 = (width / (2));
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20059) : re_com.v_table.px.call(null,G__20059));
})();
var scrollbar_color = "#eee";
var scrollbar_hover_color = "#ccc";
var thumb_color = "#bbb";
var thumb_hover_color = "#999";
var thumb_drag_color = "#777";
var mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var pos_on_scrollbar = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var pos_on_thumb = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var tracker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var calcs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var on_drag_change = (function re_com$v_table$on_drag_change(_delta_x,_delta_y,curr_x,curr_y,_ctrlKey,_shiftKey,_event){
var curr_pos = ((horizontal_QMARK_)?curr_x:curr_y);
var pos_on_scrollbar__$1 = (curr_pos - cljs.core.deref(pos_on_scrollbar));
var new_internal_scroll_pos = (pos_on_scrollbar__$1 - cljs.core.deref(pos_on_thumb));
var beginning_or_beyond_QMARK_ = (new_internal_scroll_pos <= (0));
var end_or_beyond_QMARK_ = (new_internal_scroll_pos >= cljs.core.cst$kw$max_DASH_scroll_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)));
var new_external_scroll_pos = Math.round((new_internal_scroll_pos * cljs.core.cst$kw$scrollbar_DASH_content_DASH_ratio.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs))));
if(beginning_or_beyond_QMARK_){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1((0)) : on_change.call(null,(0)));
} else {
if(end_or_beyond_QMARK_){
var G__20060 = Math.round((cljs.core.cst$kw$max_DASH_scroll_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)) * cljs.core.cst$kw$scrollbar_DASH_content_DASH_ratio.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs))));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20060) : on_change.call(null,G__20060));
} else {
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_external_scroll_pos) : on_change.call(null,new_external_scroll_pos));

}
}
});
var on_drag_end = (function re_com$v_table$on_drag_end(_ctrlKey,_shiftKey,_event){
cljs.core.reset_BANG_(dragging_QMARK_,false);

return cljs.core.reset_BANG_(tracker,null);
});
var on_mouse_enter = (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,true);

return null;
});
var on_mouse_leave = (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,false);

return null;
});
var scrollbar_mouse_down = (function re_com$v_table$scrollbar_mouse_down(event){
var target = event.target;
var bounding_rect = (((target == null))?cljs.core.PersistentArrayMap.EMPTY:target.getBoundingClientRect());
var click_pos = ((horizontal_QMARK_)?(event.clientX - bounding_rect.left):(event.clientY - bounding_rect.top));
var op = (((click_pos <= cljs.core.cst$kw$internal_DASH_scroll_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs))))?cljs.core._:cljs.core._PLUS_);
var new_internal_scroll_pos = (cljs.core.cst$kw$internal_DASH_scroll_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)) + (function (){var G__20061 = (cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)) / cljs.core.cst$kw$thumb_DASH_ratio.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)));
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(G__20061) : op.call(null,G__20061));
})());
var new_external_scroll_pos = (function (){var G__20062 = cljs.core.cst$kw$scroll_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs));
var G__20063 = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__20062,G__20063) : op.call(null,G__20062,G__20063));
})();
var beginning_or_beyond_QMARK_ = (new_internal_scroll_pos <= (0));
var end_or_beyond_QMARK_ = (new_internal_scroll_pos >= cljs.core.cst$kw$max_DASH_scroll_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)));
if(beginning_or_beyond_QMARK_){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1((0)) : on_change.call(null,(0)));
} else {
if(end_or_beyond_QMARK_){
var G__20064 = Math.round((cljs.core.cst$kw$max_DASH_scroll_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)) * cljs.core.cst$kw$scrollbar_DASH_content_DASH_ratio.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs))));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20064) : on_change.call(null,G__20064));
} else {
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_external_scroll_pos) : on_change.call(null,new_external_scroll_pos));

}
}
});
var thumb_mouse_down = (function re_com$v_table$thumb_mouse_down(event,internal_scroll_pos){
var parent = event.target.parentNode;
var bounding_rect = (((parent == null))?cljs.core.PersistentArrayMap.EMPTY:parent.getBoundingClientRect());
cljs.core.reset_BANG_(pos_on_scrollbar,((horizontal_QMARK_)?bounding_rect.left:bounding_rect.top));

cljs.core.reset_BANG_(pos_on_thumb,((horizontal_QMARK_)?((event.clientX - cljs.core.deref(pos_on_scrollbar)) - internal_scroll_pos):((event.clientY - cljs.core.deref(pos_on_scrollbar)) - internal_scroll_pos)));

cljs.core.reset_BANG_(tracker,re_com.dmm_tracker.make_dmm_tracker(on_drag_change,on_drag_end));

re_com.dmm_tracker.captureMouseMoves(cljs.core.deref(tracker),event);

cljs.core.reset_BANG_(dragging_QMARK_,true);

return event.stopPropagation();
});
return (function() { 
var re_com$v_table$scrollbar_renderer__delegate = function (p__20065){
var map__20066 = p__20065;
var map__20066__$1 = cljs.core.__destructure_map(map__20066);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,cljs.core.cst$kw$length);
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20066__$1,cljs.core.cst$kw$width,(10));
var content_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,cljs.core.cst$kw$content_DASH_length);
var scroll_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,cljs.core.cst$kw$scroll_DASH_pos);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,cljs.core.cst$kw$style);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20066__$1,cljs.core.cst$kw$src);
var thumb_ratio = (content_length / length);
var thumb_length = (function (){var x__4249__auto__ = (1.5 * width__$1);
var y__4250__auto__ = (length / thumb_ratio);
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})();
var show_QMARK_ = (content_length > length);
var max_scroll_pos = (length - thumb_length);
var scrollbar_content_ratio = ((content_length - length) / max_scroll_pos);
var internal_scroll_pos = (scroll_pos / scrollbar_content_ratio);
cljs.core.reset_BANG_(calcs,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$length,length,cljs.core.cst$kw$scroll_DASH_pos,scroll_pos,cljs.core.cst$kw$thumb_DASH_ratio,thumb_ratio,cljs.core.cst$kw$thumb_DASH_length,thumb_length,cljs.core.cst$kw$max_DASH_scroll_DASH_pos,max_scroll_pos,cljs.core.cst$kw$scrollbar_DASH_content_DASH_ratio,scrollbar_content_ratio,cljs.core.cst$kw$internal_DASH_scroll_DASH_pos,internal_scroll_pos], null));

return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$width,((horizontal_QMARK_)?(cljs.core.truth_(length)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(length) : re_com.v_table.px.call(null,length)):null):(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(width__$1) : re_com.v_table.px.call(null,width__$1))),cljs.core.cst$kw$height,((horizontal_QMARK_)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(width__$1) : re_com.v_table.px.call(null,width__$1)):(cljs.core.truth_(length)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(length) : re_com.v_table.px.call(null,length)):null)),cljs.core.cst$kw$class,[((horizontal_QMARK_)?"horizontal":"vertical"),"-scrollbar"].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,((show_QMARK_)?(cljs.core.truth_((function (){var or__4160__auto__ = cljs.core.deref(mouse_over_QMARK_);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.deref(dragging_QMARK_);
}
})())?scrollbar_hover_color:scrollbar_color):null),cljs.core.cst$kw$border_DASH_radius,radius,cljs.core.cst$kw$overflow,"hidden"], null),style], 0)),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_enter,on_mouse_enter,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,on_mouse_leave,cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
if(show_QMARK_){
scrollbar_mouse_down(event);
} else {
}

return null;
})], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,144], null)),cljs.core.cst$kw$width,((horizontal_QMARK_)?(function (){var G__20067 = ((show_QMARK_)?thumb_length:(0));
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20067) : re_com.v_table.px.call(null,G__20067));
})():(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(width__$1) : re_com.v_table.px.call(null,width__$1))),cljs.core.cst$kw$height,((horizontal_QMARK_)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(width__$1) : re_com.v_table.px.call(null,width__$1)):(function (){var G__20068 = ((show_QMARK_)?thumb_length:(0));
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20068) : re_com.v_table.px.call(null,G__20068));
})()),cljs.core.cst$kw$style,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_((function (){var or__4160__auto__ = cljs.core.deref(mouse_over_QMARK_);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.deref(dragging_QMARK_);
}
})())?(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))?thumb_drag_color:thumb_hover_color):thumb_color),cljs.core.cst$kw$cursor,"default",cljs.core.cst$kw$border_DASH_radius,radius,((horizontal_QMARK_)?cljs.core.cst$kw$margin_DASH_left:cljs.core.cst$kw$margin_DASH_top),(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(internal_scroll_pos) : re_com.v_table.px.call(null,internal_scroll_pos))]),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
thumb_mouse_down(event,internal_scroll_pos);

return null;
})], null),cljs.core.cst$kw$child,""], null)], null);
};
var re_com$v_table$scrollbar_renderer = function (var_args){
var p__20065 = null;
if (arguments.length > 0) {
var G__20072__i = 0, G__20072__a = new Array(arguments.length -  0);
while (G__20072__i < G__20072__a.length) {G__20072__a[G__20072__i] = arguments[G__20072__i + 0]; ++G__20072__i;}
  p__20065 = new cljs.core.IndexedSeq(G__20072__a,0,null);
} 
return re_com$v_table$scrollbar_renderer__delegate.call(this,p__20065);};
re_com$v_table$scrollbar_renderer.cljs$lang$maxFixedArity = 0;
re_com$v_table$scrollbar_renderer.cljs$lang$applyTo = (function (arglist__20073){
var p__20065 = cljs.core.seq(arglist__20073);
return re_com$v_table$scrollbar_renderer__delegate(p__20065);
});
re_com$v_table$scrollbar_renderer.cljs$core$IFn$_invoke$arity$variadic = re_com$v_table$scrollbar_renderer__delegate;
return re_com$v_table$scrollbar_renderer;
})()
;
}));

(re_com.v_table.scrollbar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.v_table.scrollbar.cljs$lang$applyTo = (function (seq20056){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20056));
}));

/**
 * Render section 1 - the content component
 */
re_com.v_table.top_left_content = (function re_com$v_table$top_left_content(top_left_renderer,column_header_height,class$,style,attr){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,169], null)),cljs.core.cst$kw$class,["rc-v-table-top-left rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$height,(function (){var G__20074 = (function (){var or__4160__auto__ = column_header_height;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20074) : re_com.v_table.px.call(null,G__20074));
})(),cljs.core.cst$kw$child,(cljs.core.truth_(top_left_renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [top_left_renderer], null):"")], null);
});
/**
 * The row-header section 'content' component. Takes a function that renders row-headers and draws all of
 *   them in section 2 (sections explained below).
 *   When in virtual? mode, only a screen-full of row-headers are passed to this component at any one time.
 *   This component is also responsible for setting the vertical scroll position of this section based on scroll-y
 * 
 *   Arguments:
 * - row-header-renderer function that knows how to render row-headers (will be passed the 0-based row-index and row to get the data from)
 * - key-fn              function/keyword that returns a unique id out of the row map/object, or nil to use the row's 0-based row-index
 * - top-row-index       the 0-based index of the row that is currently at the top of the viewport (for virtual mode)
 * - rows                a vector of row maps (or objects) to render the row-headers from
 * - scroll-y            current horizontal scrollbar position in px
 *   
 */
re_com.v_table.row_header_content = (function re_com$v_table$row_header_content(row_header_renderer,key_fn,top_row_index,rows,scroll_y,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,195], null)),cljs.core.cst$kw$class,["rc-v-table-row-header-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,(function (){var G__20075 = scroll_y;
var G__20076 = cljs.core.cst$kw$negative;
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$2 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$2(G__20075,G__20076) : re_com.v_table.px.call(null,G__20075,G__20076));
})()], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$children,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (index,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_header_renderer,index,row], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(row) : key_fn.call(null,row)):index)], null));
}),cljs.core.iterate(cljs.core.inc,top_row_index),rows)], null);
});
/**
 * Render section 2 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.row_header_viewport = (function re_com$v_table$row_header_viewport(row_header_renderer,key_fn,top_row_index,rows,scroll_y,row_header_selection_fn,p__20077,selection_allowed_QMARK_,row_viewport_height,content_rows_height,class$,style,attr,sel_class,sel_style,sel_attr,content_class,content_style,content_attr){
var vec__20078 = p__20077;
var selection_renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,(0),null);
var on_mouse_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,(1),null);
var on_mouse_enter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,(2),null);
var on_mouse_leave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,(3),null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,216], null)),cljs.core.cst$kw$class,["rc-v-table-row-headers rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$max_DASH_height,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(content_rows_height) : re_com.v_table.px.call(null,content_rows_height))], null),style], 0)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(row_header_selection_fn)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
var G__20081_20088 = cljs.core.cst$kw$row_DASH_header;
var G__20082_20089 = row_header_selection_fn;
var G__20083_20090 = content_rows_height;
var G__20084_20091 = (0);
var G__20085_20092 = event;
(on_mouse_down.cljs$core$IFn$_invoke$arity$5 ? on_mouse_down.cljs$core$IFn$_invoke$arity$5(G__20081_20088,G__20082_20089,G__20083_20090,G__20084_20091,G__20085_20092) : on_mouse_down.call(null,G__20081_20088,G__20082_20089,G__20083_20090,G__20084_20091,G__20085_20092));

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,(function (event){
var G__20086_20093 = cljs.core.cst$kw$row_DASH_header;
(on_mouse_enter.cljs$core$IFn$_invoke$arity$1 ? on_mouse_enter.cljs$core$IFn$_invoke$arity$1(G__20086_20093) : on_mouse_enter.call(null,G__20086_20093));

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,(function (event){
var G__20087_20094 = cljs.core.cst$kw$row_DASH_header;
(on_mouse_leave.cljs$core$IFn$_invoke$arity$1 ? on_mouse_leave.cljs$core$IFn$_invoke$arity$1(G__20087_20094) : on_mouse_leave.call(null,G__20087_20094));

return null;
})], null):null),attr], 0)),cljs.core.cst$kw$size,(cljs.core.truth_(row_viewport_height)?"none":"auto"),cljs.core.cst$kw$height,(cljs.core.truth_(row_viewport_height)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(row_viewport_height) : re_com.v_table.px.call(null,row_viewport_height)):null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selection_allowed_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_renderer,sel_class,sel_style,sel_attr], null):null),(cljs.core.truth_(row_header_renderer)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_header_content,row_header_renderer,key_fn,top_row_index,rows,scroll_y,content_class,content_style,content_attr], null):"")], null)], null);
});
/**
 * Render section 3 - the content component
 */
re_com.v_table.bottom_left_content = (function re_com$v_table$bottom_left_content(bottom_left_renderer,column_footer_height,class$,style,attr){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,242], null)),cljs.core.cst$kw$class,["rc-v-table-bottom-left rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$height,(function (){var G__20095 = (function (){var or__4160__auto__ = column_footer_height;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20095) : re_com.v_table.px.call(null,G__20095));
})(),cljs.core.cst$kw$child,(cljs.core.truth_(bottom_left_renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bottom_left_renderer], null):"")], null);
});
/**
 * The column-header section 'content' component. Takes a function that renders column-headers and draws all of
 *   them in section 4 (sections explained below).
 *   This component is also responsible for setting the horizontal scroll position of this section based on scroll-x
 * 
 *   Arguments:
 * - column-header-renderer function that knows how to render column-headers
 * - scroll-x               current horizontal scrollbar position in px
 *   
 */
re_com.v_table.column_header_content = (function re_com$v_table$column_header_content(column_header_renderer,scroll_x,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,264], null)),cljs.core.cst$kw$class,["rc-v-table-column-header-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,(function (){var G__20096 = scroll_x;
var G__20097 = cljs.core.cst$kw$negative;
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$2 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$2(G__20096,G__20097) : re_com.v_table.px.call(null,G__20096,G__20097));
})()], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_header_renderer], null)], null);
});
/**
 * Render section 4 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.column_header_viewport = (function re_com$v_table$column_header_viewport(column_header_renderer,scroll_x,column_header_selection_fn,p__20098,selection_allowed_QMARK_,row_viewport_width,column_header_height,content_rows_width,class$,style,attr,sel_class,sel_style,sel_attr,content_class,content_style,content_attr){
var vec__20099 = p__20098;
var selection_renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20099,(0),null);
var on_mouse_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20099,(1),null);
var on_mouse_enter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20099,(2),null);
var on_mouse_leave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20099,(3),null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,281], null)),cljs.core.cst$kw$class,["rc-v-table-column-headers rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$position,"relative"], null),style], 0)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(column_header_selection_fn)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
var G__20102_20110 = cljs.core.cst$kw$column_DASH_header;
var G__20103_20111 = column_header_selection_fn;
var G__20104_20112 = column_header_height;
var G__20105_20113 = content_rows_width;
var G__20106_20114 = event;
(on_mouse_down.cljs$core$IFn$_invoke$arity$5 ? on_mouse_down.cljs$core$IFn$_invoke$arity$5(G__20102_20110,G__20103_20111,G__20104_20112,G__20105_20113,G__20106_20114) : on_mouse_down.call(null,G__20102_20110,G__20103_20111,G__20104_20112,G__20105_20113,G__20106_20114));

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,(function (event){
var G__20107_20115 = cljs.core.cst$kw$column_DASH_header;
(on_mouse_enter.cljs$core$IFn$_invoke$arity$1 ? on_mouse_enter.cljs$core$IFn$_invoke$arity$1(G__20107_20115) : on_mouse_enter.call(null,G__20107_20115));

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,(function (event){
var G__20108_20116 = cljs.core.cst$kw$column_DASH_header;
(on_mouse_leave.cljs$core$IFn$_invoke$arity$1 ? on_mouse_leave.cljs$core$IFn$_invoke$arity$1(G__20108_20116) : on_mouse_leave.call(null,G__20108_20116));

return null;
})], null):null),attr], 0)),cljs.core.cst$kw$width,(cljs.core.truth_(row_viewport_width)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(row_viewport_width) : re_com.v_table.px.call(null,row_viewport_width)):null),cljs.core.cst$kw$height,(function (){var G__20109 = (function (){var or__4160__auto__ = column_header_height;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20109) : re_com.v_table.px.call(null,G__20109));
})(),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selection_allowed_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_renderer,sel_class,sel_style,sel_attr], null):null),(cljs.core.truth_(column_header_renderer)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.column_header_content,column_header_renderer,scroll_x,content_class,content_style,content_attr], null):"")], null)], null);
});
/**
 * The rows section 'content' component. Takes a function that renders rows and draws all of them in section 5 (sections explained below).
 *   When in virtual? mode, only a screen-full of rows are passed to this component at any one time.
 *   This component is also responsible for setting the horizontal and vertical scroll position of this section based on scroll-x and scroll-y
 * 
 *   Arguments:
 * - row-renderer  function that knows how to render rows (will be passed the 0-based row-index and row to render)
 * - key-fn        function/keyword that returns a unique id out of the row map/object, or nil to use the row's 0-based row-index
 * - top-row-index the 0-based index of the row that is currently at the top of the viewport (for virtual mode)
 * - rows          a vector of row maps (or objects) to render
 * - scroll-x      current horizontal scrollbar position in px
 * - scroll-y      current horizontal scrollbar position in px
 *   
 */
re_com.v_table.row_content = (function re_com$v_table$row_content(row_renderer,key_fn,top_row_index,rows,scroll_x,scroll_y,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,317], null)),cljs.core.cst$kw$class,["rc-v-table-row-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_left,(function (){var G__20117 = scroll_x;
var G__20118 = cljs.core.cst$kw$negative;
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$2 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$2(G__20117,G__20118) : re_com.v_table.px.call(null,G__20117,G__20118));
})(),cljs.core.cst$kw$margin_DASH_top,(function (){var G__20119 = scroll_y;
var G__20120 = cljs.core.cst$kw$negative;
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$2 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$2(G__20119,G__20120) : re_com.v_table.px.call(null,G__20119,G__20120));
})()], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$children,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (index,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_renderer,index,row], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(row) : key_fn.call(null,row)):index)], null));
}),cljs.core.iterate(cljs.core.inc,top_row_index),rows)], null);
});
/**
 * Render section 5 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.row_viewport = (function re_com$v_table$row_viewport(row_renderer,key_fn,top_row_index,rows,scroll_x,scroll_y,row_selection_fn,p__20121,selection_allowed_QMARK_,row_viewport_height,row_viewport_width,row_viewport_id,content_rows_height,content_rows_width,class$,style,attr,sel_class,sel_style,sel_attr,content_class,content_style,content_attr){
var vec__20122 = p__20121;
var selection_renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,(0),null);
var on_mouse_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,(1),null);
var on_mouse_enter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,(2),null);
var on_mouse_leave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,(3),null);
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,339], null)),cljs.core.cst$kw$class,["rc-v-table-rows rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$max_DASH_height,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(content_rows_height) : re_com.v_table.px.call(null,content_rows_height))], null),style], 0)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(row_selection_fn)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
var G__20125_20132 = cljs.core.cst$kw$row;
var G__20126_20133 = row_selection_fn;
var G__20127_20134 = content_rows_height;
var G__20128_20135 = content_rows_width;
var G__20129_20136 = event;
(on_mouse_down.cljs$core$IFn$_invoke$arity$5 ? on_mouse_down.cljs$core$IFn$_invoke$arity$5(G__20125_20132,G__20126_20133,G__20127_20134,G__20128_20135,G__20129_20136) : on_mouse_down.call(null,G__20125_20132,G__20126_20133,G__20127_20134,G__20128_20135,G__20129_20136));

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,(function (event){
var G__20130_20137 = cljs.core.cst$kw$row;
(on_mouse_enter.cljs$core$IFn$_invoke$arity$1 ? on_mouse_enter.cljs$core$IFn$_invoke$arity$1(G__20130_20137) : on_mouse_enter.call(null,G__20130_20137));

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,(function (event){
var G__20131_20138 = cljs.core.cst$kw$row;
(on_mouse_leave.cljs$core$IFn$_invoke$arity$1 ? on_mouse_leave.cljs$core$IFn$_invoke$arity$1(G__20131_20138) : on_mouse_leave.call(null,G__20131_20138));

return null;
})], null):null),attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,row_viewport_id], null)], 0)),cljs.core.cst$kw$size,(cljs.core.truth_(row_viewport_height)?"none":"auto"),cljs.core.cst$kw$width,(cljs.core.truth_(row_viewport_width)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(row_viewport_width) : re_com.v_table.px.call(null,row_viewport_width)):null),cljs.core.cst$kw$height,(cljs.core.truth_(row_viewport_height)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(row_viewport_height) : re_com.v_table.px.call(null,row_viewport_height)):null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selection_allowed_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_renderer,sel_class,sel_style,sel_attr], null):null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_content,row_renderer,key_fn,top_row_index,rows,scroll_x,scroll_y,content_class,content_style,content_attr], null)], null)], null);
});
/**
 * The column-footer section 'content' component. Takes a function that renders column-footers and draws all of
 *   them in section 6 (sections explained below).
 *   This component is also responsible for setting the horizontal scroll position of this section based on scroll-x
 * 
 *   Arguments:
 * - column-footer-renderer function that knows how to render column-footers
 * - scroll-x            current horizontal scrollbar position in px
 *   
 */
re_com.v_table.column_footer_content = (function re_com$v_table$column_footer_content(column_footer_renderer,scroll_x,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,372], null)),cljs.core.cst$kw$class,["rc-v-table-column-footer-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,(function (){var G__20139 = scroll_x;
var G__20140 = cljs.core.cst$kw$negative;
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$2 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$2(G__20139,G__20140) : re_com.v_table.px.call(null,G__20139,G__20140));
})()], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_footer_renderer], null)], null);
});
/**
 * Render section 6 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.column_footer_viewport = (function re_com$v_table$column_footer_viewport(column_footer_renderer,scroll_x,row_viewport_width,column_footer_height,class$,style,attr,content_class,content_style,content_attr){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,386], null)),cljs.core.cst$kw$class,["rc-v-table-column-footers rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$width,(cljs.core.truth_(row_viewport_width)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(row_viewport_width) : re_com.v_table.px.call(null,row_viewport_width)):null),cljs.core.cst$kw$height,(function (){var G__20141 = (function (){var or__4160__auto__ = column_footer_height;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20141) : re_com.v_table.px.call(null,G__20141));
})(),cljs.core.cst$kw$child,(cljs.core.truth_(column_footer_renderer)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.column_footer_content,column_footer_renderer,scroll_x,content_class,content_style,content_attr], null):"")], null);
});
/**
 * Render section 7 - the content component
 */
re_com.v_table.top_right_content = (function re_com$v_table$top_right_content(top_right_renderer,column_header_height,class$,style,attr){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,404], null)),cljs.core.cst$kw$class,["rc-v-table-top-right rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$height,(function (){var G__20142 = (function (){var or__4160__auto__ = column_header_height;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20142) : re_com.v_table.px.call(null,G__20142));
})(),cljs.core.cst$kw$child,(cljs.core.truth_(top_right_renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [top_right_renderer], null):"")], null);
});
/**
 * The row-footer section 'content' component. Takes a function that renders row-footers and draws all of
 *   them in section 8 (sections explained below).
 *   When in virtual? mode, only a screen-full of row-footers are passed to this component at any one time.
 *   This component is also responsible for setting the vertical scroll position of this section based on scroll-y
 * 
 *   Arguments:
 * - row-footer-renderer function that knows how to render row-footers (will be passed the 0-based row-index and row to get the data from)
 * - key-fn              function/keyword that returns a unique id out of the row map/object, or nil to use the row's 0-based row-index
 * - top-row-index       the 0-based index of the row that is currently at the top of the viewport (for virtual mode)
 * - rows                a vector of row maps (or objects) to render the row-footers from
 * - scroll-y            current horizontal scrollbar position in px
 *   
 */
re_com.v_table.row_footer_content = (function re_com$v_table$row_footer_content(row_footer_renderer,key_fn,top_row_index,rows,scroll_y,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,430], null)),cljs.core.cst$kw$class,["rc-v-table-row-footer-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,(function (){var G__20143 = scroll_y;
var G__20144 = cljs.core.cst$kw$negative;
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$2 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$2(G__20143,G__20144) : re_com.v_table.px.call(null,G__20143,G__20144));
})()], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$children,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (index,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_footer_renderer,index,row], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(row) : key_fn.call(null,row)):index)], null));
}),cljs.core.iterate(cljs.core.inc,top_row_index),rows)], null);
});
/**
 * Render section 8 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.row_footer_viewport = (function re_com$v_table$row_footer_viewport(row_footer_renderer,key_fn,top_row_index,rows,scroll_y,row_viewport_height,content_rows_height,class$,style,attr,content_class,content_style,content_attr){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,449], null)),cljs.core.cst$kw$class,["rc-v-table-row-footers rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$max_DASH_height,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(content_rows_height) : re_com.v_table.px.call(null,content_rows_height))], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$size,(cljs.core.truth_(row_viewport_height)?"none":"auto"),cljs.core.cst$kw$height,(cljs.core.truth_(row_viewport_height)?(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(row_viewport_height) : re_com.v_table.px.call(null,row_viewport_height)):null),cljs.core.cst$kw$child,(cljs.core.truth_(row_footer_renderer)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_footer_content,row_footer_renderer,key_fn,top_row_index,rows,scroll_y,content_class,content_style,content_attr], null):"")], null);
});
/**
 * Render section 9 - the content component
 */
re_com.v_table.bottom_right_content = (function re_com$v_table$bottom_right_content(bottom_right_renderer,column_footer_height,class$,style,attr){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,468], null)),cljs.core.cst$kw$class,["rc-v-table-bottom-right rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),style], 0)),cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$height,(function (){var G__20145 = (function (){var or__4160__auto__ = column_footer_height;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})();
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20145) : re_com.v_table.px.call(null,G__20145));
})(),cljs.core.cst$kw$child,(cljs.core.truth_(bottom_right_renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bottom_right_renderer], null):"")], null);
});
re_com.v_table.v_table_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-v-table-wrapper",cljs.core.cst$kw$impl,"[v-table]",cljs.core.cst$kw$notes,"Outer container of the v-table"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_section,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-v-table-left-section",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"The left v-box container section of the table, containing sections 1,2,3"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$top_DASH_left,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-top-left rc-v-table-content",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"Top left section (1)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_headers,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-row-headers rc-v-table-viewport",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"Row header viewport section (2)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_header_DASH_selection_DASH_rect,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-selection",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The row-header rectangle used for click+drag selection of row headers"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_header_DASH_content,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-row-header-content rc-v-table-content",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"The v-box containing one row header (row-header-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$bottom_DASH_left,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-bottom-left rc-v-table-content",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"Bottom left section (3)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$middle_DASH_section,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-v-table-middle-section",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"The middle v-box container section of the table, containing sections 4,5,6"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_headers,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-column-headers rc-v-table-viewport",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"Column header viewport section (4)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_header_DASH_selection_DASH_rect,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-selection",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The column-header rectangle used for click+drag selection of column headers"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_header_DASH_content,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-column-header-content rc-v-table-content",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The box containing the column header (column-header-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$rows,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-rows rc-v-table-viewport",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"Main row viewport section (5)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_selection_DASH_rect,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-selection",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The ROW rectangle used for click+drag selection of rows"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_content,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-row-content rc-v-table-content",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"The v-box containing one row (row-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_footers,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-column-footers rc-v-table-viewport",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"Column footer viewport section (6)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_footer_DASH_content,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-column-footer-content rc-v-table-content",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The box containing the column footer (column-footer-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$h_DASH_scroll,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-h-scroll",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The horizontal scrollbar"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$right_DASH_section,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-v-table-right-section",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"The right container section v-box of the table, containing sections 7,8,9"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$top_DASH_right,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-top-right rc-v-table-content",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"Top right section (7)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_footers,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-row-footers rc-v-table-viewport",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"Row footer viewport section (8)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_footer_DASH_content,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-row-footer-content rc-v-table-content",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"The v-box containing one row footer (row-footer-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$bottom_DASH_right,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-table-bottom-right rc-v-table-content",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"Bottom right section (9)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$v_DASH_scroll_DASH_section,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-v-table-v-scroll-section",cljs.core.cst$kw$impl,"[v-box]",cljs.core.cst$kw$notes,"The v-box containing the vertical scrollbar:"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$name_DASH_label,"-",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"Legacy"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-table-v-scroll",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The vertical scrollbar"], null)], null):null);
re_com.v_table.v_table_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.v_table.v_table_parts_desc)):null);
re_com.v_table.v_table_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"atom containing vec of maps",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_atom_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"One element for each row displayed in the table. Typically, a vector of maps, but can be a seq of anything, with your functions like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":key-fn"], null)," extracting values."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$key_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"nil",cljs.core.cst$kw$type,"map -> anything",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.ifn_or_nil_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A function/keyword or nil. Given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null),", it should return its unique identifier which is used by Reagent as a unique id. If not specified or nil passed, the element's 0-based row-index will be used"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$virtual_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, only those rows that are visible are rendered to the DOM. Otherwise DOM will be generated for all rows, which might be prohibitive if there are a large number of rows."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_height,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"px height of each row, in sections 2, 5 and 8."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_header_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"px height of the column header. Impacts the upper sections 1, 4 and 7. If not provided, defaults to 0, meaning these three sections will not be visible."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_footer_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"px height of the column footer. Impacts the lower sections 3, 6 and 9. If not provided, defaults to 0, meaning these three sections will not be visible."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_content_DASH_width,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"px width of sections 4, 5, 6. The renderers for these sections are expected to return hiccup to fill these spaces."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"Standard CSS max-width setting of the entire table. If not provided, table will fill available space"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$top_DASH_left_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A function taking no args which returns the hiccup for the top left (section 1). The hiccup should fill the height specified via ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":column-header-height"], null),". The width of the three left sections is self-determined as the maximum of their own content."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_header_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"row-index, row -> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A function. Given the 0-based row-index and an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null),", it will return the hiccup for the row header (section 2)."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$bottom_DASH_left_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"A function taking no args which returns the hiccup for the bottom left (section 3)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_header_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"A function taking no args which returns the hiccup for the column header (section 4)."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_renderer,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"row-index, row -> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A function. Given the 0-based row-index and an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null),", it will return the hiccup for a single content row (section 5). This renderer is called once for each displayed row. As vertical scrolling occurs, more calls will be made."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_footer_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"A function taking no args which returns the hiccup for the entire column footer (section 6)."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$top_DASH_right_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"A function taking no args which returns the hiccup for the top right (section 7)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_footer_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"row-index, row -> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A function. Given the 0-based row-index and an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null),", it will return the hiccup for the row footer (section 8)."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$bottom_DASH_right_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"A function taking no args which returns the hiccup for the bottom right (section 9)."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_header_DASH_selection_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"(5 args) -> ",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"See v-table docstring for arg details. If present, this function will be called on mouse-down, mouse-move and mouse-up events, allowing you to capture user selection of cells, columns or rows in section 2."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_header_DASH_selection_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"(5 args) -> ",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"See v-table docstring for arg details. If present, this function will be called on mouse-down, mouse-move and mouse-up events, allowing you to capture user selection of cells, columns or rows in section 4."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_selection_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"(5 args) -> ",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"See v-table docstring for arg details. If present, this function will be called on mouse-down, mouse-move and mouse-up events, allowing you to capture user selection of cells, columns or rows in section 5."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_viewport_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"px width of the row viewport area (section 5). If not specified, the component takes all the horizontal space available."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_viewport_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"px height of the row viewport area (section 5). If not specified,the component takes all the vertical space available."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_row_DASH_viewport_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"maximum"], null)], null)," px height of the row viewport area (section 5), excluding height of sections 4 and 6 (and horizontal scrollbar). If not specified, value determined by parent height and number of rows"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$scroll_DASH_rows_DASH_into_DASH_view,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"atom containing map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.map_atom_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Scrolls the table to a particular row range. Must be an atom. The map contains the keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":start-row"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":end-row"], null)," (row indexes)."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$scroll_DASH_columns_DASH_into_DASH_view,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"atom containing map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.map_atom_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Scrolls the table of a particular column range. Must be an atom. Map that contains the keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":start-col"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":end-col"], null)," in pixel units."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$remove_DASH_empty_DASH_row_DASH_space_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"If true, removes whitespace between the last row and the horizontal scrollbar. Useful for tables without many rows where otherwise there would be a big gap between the last row and the horizontal scrollbar at the bottom of the available space."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (these are applied to the table's outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.v_table.v_table_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Renders a scrollable table with optional fixed column and row headers and footers, totalling nine addressable sections
 *   By default, it only displays rows that are visible, so is very efficient for large data structures
 *   The table supports click+drag selections within the rows section (5), row header section (2) and col header section (4)
 * 
 *   The table is laid out using an h-box for the outer component, with four v-box 'container
 *   sections' sitting next to each other:
 * 
 *   +-----+---------+-----+-+
 *   |     |         |     | |
 *   |     |         |     | |
 *   |     |         |     | |
 *   |LEFT | MIDDLE  |RIGHT|VS
 *   |     |         |     | |
 *   |     |         |     | |
 *   |     |         |     | |
 *   |- - -|- - - - -|- - -|-|
 *   +-----+---HS----+-----+-+
 * 
 *   The four 'container section' v-boxes are named:
 * - LEFT:   contains the row headers (and corresponding two corner sections)
 * - MIDDLE: contains the main content area (the rows), along with column headers and footers and the horizontal scrollbar (HS)
 * - RIGHT:  contains the row footers (and corresponding two corner sections)
 * - VS:     contains the vertical scrollbar
 * 
 *   Each container section holds 'sections' which are numbered:
 * 
 *   +-----+---------+-----+
 *   |  1  |    4    |  7  |
 *   +-----+---------+-----+-+
 *   |     |         |     | |
 *   |  2  |    5    |  8  |VS
 *   |     |         |     | |
 *   +-----+---------+-----+ +
 *   |  3  |    6    |  9  |
 *   +-----+---------+-----+
 *      +---HS----+
 * 
 *   The nine 'sections' are named:
 * - 1: top-left
 * - 2: row-headers
 * - 3: bottom-left
 * - 4: column-headers
 * - 5: rows
 * - 6: column-footers
 * - 7: top-right
 * - 8: row-footers
 * - 9: bottom-right
 * 
 *   The corner sections (1, 3, 7, 9) are fixed (i.e. do not scroll) and consist of a single 'content' area
 * 
 *   The other sections are scrollable: (2, 8) vertical, (4, 6) horizontal and (5) vertical & horizontal as
 *   a 'viewport' onto their (potentially larger) 'content' area
 * 
 * 
 *   Arguments:
 * 
 * - model                    [mandatory atom containing vector of maps (or other data structures)]
 *                            The data to be displayed, consisting of rows. Each row is normally a map but could be anything)
 *                            Rows MUST contain a unique id (specified via :key-fn arg)
 *                            They are passed to the row-renderer (section 5), row-header-renderer (section 2) and row-footer-renderer (section 8)
 *                            NOTE: data for sections 1, 3, 4, 6, 7 and 9 are not included in model
 * 
 * - key-fn                   [optional fn or keyword to extract a unique id from the row data, or not specified/nil to indicate
 *                            that v-table should use the internally generated 0-based row-id]
 *                            A row is passed to key-fn and it returns the unique identifier for that row
 * 
 * - virtual?                 [optional bool, default = true]
 *                            When true, use virtual feature where only a screen-full (viewport) of rows are rendered at any one time
 *                            Use true for tables with many rows to reduce initialisation time and resource usage
 *                            You can use false for smaller tables to improve performance of vertical scrolling
 * 
 * - remove-empty-row-space?  [optional bool, default = true]
 *                            Specifies whether to remove empty row space (the space between the last row and the horizontal scrollbar)
 *                            for small tables that don't fill the space available to the v-table
 *                            This will cause the horizontal scrollbar section to be nestled against the last row, and whatever is
 *                            underneath the v-table to be brought up with it
 * 
 * - max-width                [optional string, default = nil (table will fill available space)]
 *                            MAXIMUM width of the entire v-table
 *                            NOTE: This is specified as a normal CSS value, e.g. "1024px" or "90%"
 * 
 * 
 *   ========== SECTION 1 - top-left
 * 
 * - top-left-renderer        [optional (fn [])]
 *                            Render the top left section
 *                            Height is determined by the :column-header-height arg
 *                            Width is determined by the component itself
 *                            Passed args: none
 * 
 * 
 *   ========== SECTION 2 - row-headers
 * 
 * - row-header-renderer      [optional (fn [row-index row])]
 *                            Render a single row header
 *                            Height is determined by the row-height arg
 *                            Width is determined by the component itself
 *                            Passed args: row-index (0-based), row (a map, or other data structure from model)
 * 
 * - row-header-selection-fn  [optional (fn [selection-event coords ctrlKey shiftKey event])]
 *                            If provided, indicates that the row header section is selectable via click+drag
 *                            Passed args: see row-selection-fn below for details
 *                            Use the :row-header-selection-rect style-part to style the selection rectangle
 * 
 * 
 *   ========== SECTION 3 - bottom-left
 * 
 * - bottom-left-renderer     [optional (fn [])]
 *                            Render the bottom left section
 *                            Height is determined by the column-footer-height arg
 *                            Width is determined by the component itself
 *                            Passed args: none
 * 
 *                            NOTE: The width of the LEFT container section (encompassing sections 1, 2 and 3 above)
 *                                  is determined by the widest section
 * 
 * 
 *   ========== SECTION 4 - column-headers
 * 
 * - column-header-renderer   [optional (fn [])]
 *                            Render the entire column header
 *                            Height is determined by the column-header-height arg
 *                            Width is determined by the width available to the v-table OR the row-viewport-width arg if specified
 *                            Passed args: none
 * 
 * - column-header-height     [optional number, default = 0]
 *                            px height of the column header section
 * 
 * - column-header-selection-fn  [optional (fn [selection-event coords ctrlKey shiftKey event])]
 *                            if provided, indicates that the column header section is selectable via click+drag
 *                            Passed args: see row-selection-fn below for details
 *                            Use the :column-header-selection-rect style-part to style the selection rectangle
 * 
 * 
 *   ========== SECTION 5 - rows (main content area)
 * 
 * - row-renderer             [mandatory (fn [row-index row])]
 *                            Render a single content row
 *                            [DJ] Wants to state that columns are not virtual and all horizontal content is rendered
 *                            Height is determined by the row-height arg
 *                            Width is determined by the width available to the v-table OR the row-viewport-width arg if specified
 *                            Passed args: row-index (0-based), row (a map, or other data structure from model)
 * 
 * - row-height               [mandatory number]
 *                            px height of each row
 * 
 * - row-content-width        [mandatory number]
 *                            px width of the content rendered by row-renderer
 * 
 * - row-viewport-width       [optional number, default = nil (take up all available width)]
 *                            px width of the row viewport area
 *                            If not specified, takes up all width available to it
 * 
 * - row-viewport-height      [optional number, default = nil (take up all available height)]
 *                            px height of the row viewport area
 *                            If not specified, takes up all height available to it
 * 
 * - max-row-viewport-height  [optional number, default = nil (determined by parent height and number of rows)]
 *                            MAXIMUM px height of the row viewport area
 *                            Conveniently excludes height of col header and footer and horizontal scrollbar
 *                            For this to be effective, the parent of the v-table component should have ':size none'
 * 
 * - row-selection-fn         [optional (fn [selection-event coords ctrlKey shiftKey event])]
 *                            If provided, indicates that the row section is selectable via click+drag
 *                            The fn will be called (on mouse-down, mouse-move and mouse-up) with four positional args
 *                            Passed args:
 *                                  selection-event: One of :selection-start, :selecting or :selection-end
 *                                  coords:          {:start-row integer   ;; rows are returned as zero-based row numbers (except column-header which returns px)
 *                                                    :end-row   integer
 *                                                    :start-col integer   ;; cols are returned as px offsets
 *                                                    :end-col   integer}
 *                                  ctrlKey:         When true, Control key is currently pressed
 *                                  shiftKey:        When true, Shift key is currently pressed
 *                                  event            The original MouseEvent (https://developer.mozilla.org/en/docs/Web/API/MouseEvent)
 *                            Use the :selection-rect style-part to style the selection rectangle
 * 
 * 
 *   ========== SECTION 6 - column-footers
 * 
 * - column-footer-renderer   [optional (fn [])]
 *                            Render the entire column footer
 *                            Height is determined by the column-footer-height arg
 *                            Width is determined by the width available to the v-table OR the row-viewport-width arg if specified
 *                            Passed args: none
 * 
 * - column-footer-height     [optional number, default = 0]
 *                            px height of the column footer section
 * 
 * 
 *   ========== SECTION 7 - top right
 * 
 * - top-right-renderer       [optional (fn [])]
 *                            Render the top right section
 *                            Height is determined by the column-header-height arg
 *                            Width is determined by the component itself
 *                            Passed args: none
 * 
 * 
 *   ========== SECTION 8 - row-footers
 * 
 * - row-footer-renderer      [optional (fn [row-index row])]
 *                            Render a single row footer
 *                            Height is determined by the row-height arg
 *                            Width is determined by the component itself
 *                            Passed args: row-index (0-based), row (a map, or other data structure from model)
 * 
 * 
 *   ========== SECTION 9 - bottom-right
 * 
 * - bottom-right-renderer    [optional (fn [])]
 *                            Render the bottom right section
 *                            Height is determined by the column-footer-height arg
 *                            Width is determined by the component itself
 *                            Passed args: none
 * 
 *                            NOTE: The width of the RIGHT container section (encompassing sections 7, 8 and 9 above)
 *                                  is determined by the widest section
 * 
 * 
 *   ========== Scrolling the table so that a block of rows/columns become visible
 * 
 * - scroll-rows-into-view    [optional atom map]
 *                            Set this argument to scroll the table to a particular row range
 *                            map example:
 *                              {:start-row   12   ;; Start row number (zero-based) to be scrolled into view
 *                               :end-row     14}  ;; End row number to be scrolled into view
 * 
 * - scroll-columns-into-view [optional atom map]
 *                            Set this argument to scroll the table to a particular column range (in this case columns are pixels!)
 *                            map example:
 *                              {:start-col   200  ;; Start column px offset to be scrolled into view
 *                               :end-col     300} ;; End column px offset to be scrolled into view
 * 
 * 
 *   ========== Styling different parts of the table (and setting attributes for those parts)
 * 
 * - class                    Add extra class(es) to the outer container
 * 
 * - parts                    [optional nested map]
 *                            Allows classes, styles and attributes (e.g. custom event handlers) to be specified for each part of the table
 * 
 *                            Keys can be:
 * 
 *                             - :wrapper                             The outer container of the table
 * 
 *                             - :left-section                        The left v-box container section of the table, containing:
 *                                - :top-left                         Top left section (1)
 *                                - :row-headers                      Row header viewport section (2)
 *                                   - :row-header-selection-rect     The row-header rectangle used for click+drag selection of row headers
 *                                   - :row-header-content            The v-box containing one row header (row-header-render renders in here)
 *                                - :bottom-left                      Bottom left section (3)
 * 
 *                             - :middle-section                      The middle v-box container section of the table, containing:
 *                                - :column-headers                   Column header viewport section (4)
 *                                   - :column-header-selection-rect  The column-header rectangle used for click+drag selection of column headers
 *                                   - :column-header-content         The box containing the column header (column-header-render renders in here)
 *                                - :rows                             Main row viewport section (5)
 *                                   - :row-selection-rect            The ROW rectangle used for click+drag selection of rows
 *                                                                    Defaults to being above the rows (:z-index 1). Set to 0 to place it underneath rows
 *                                   - :row-content                   The v-box containing one row (row-render renders in here)
 *                                - :column-footers                   Column footer viewport section (6)
 *                                   - :column-footer-content         The box containing the column footer (column-footer-render renders in here)
 *                                - :h-scroll                         The horizontal scrollbar
 *                                                                    
 *                             - :right-section                       The right container section v-box of the table, containing:
 *                                - :top-right                        Top right section (7)
 *                                - :row-footers                      Row footer viewport section (8)
 *                                   - :row-footer-content            The v-box containing one row footer (row-footer-render renders in here)
 *                                - :bottom-right                     Bottom right section (9)
 *                                                                    
 *                             - :v-scroll-section                    The v-box containing the vertical scrollbar:
 *                                - :v-scroll                         The vertical scrollbar
 * 
 */
re_com.v_table.v_table = (function re_com$v_table$v_table(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20173 = arguments.length;
var i__4772__auto___20174 = (0);
while(true){
if((i__4772__auto___20174 < len__4771__auto___20173)){
args__4777__auto__.push((arguments[i__4772__auto___20174]));

var G__20175 = (i__4772__auto___20174 + (1));
i__4772__auto___20174 = G__20175;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.v_table.v_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.v_table.v_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__20149){
var map__20150 = p__20149;
var map__20150__$1 = cljs.core.__destructure_map(map__20150);
var args = map__20150__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,cljs.core.cst$kw$model);
var virtual_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20150__$1,cljs.core.cst$kw$virtual_QMARK_,true);
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,cljs.core.cst$kw$row_DASH_height);
var row_viewport_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,cljs.core.cst$kw$row_DASH_viewport_DASH_width);
var row_viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,cljs.core.cst$kw$row_DASH_viewport_DASH_height);
var max_row_viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,cljs.core.cst$kw$max_DASH_row_DASH_viewport_DASH_height);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,cljs.core.cst$kw$src);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.v_table.v_table_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var scroll_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var scroll_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var content_rows_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var content_rows_height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var row_viewport_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("row-viewport-");
var row_viewport_element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rl_row_viewport_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var rl_row_viewport_height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var x__4252__auto__ = (row_height * cljs.core.count(cljs.core.deref(model)));
var y__4253__auto__ = max_row_viewport_height;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})());
var internal_scroll_rows_into_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var internal_scroll_columns_into_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var m_size = reagent.ratom.make_reaction((function (){
return cljs.core.count(cljs.core.deref(model));
}));
var rows_per_viewport = reagent.ratom.make_reaction((function (){
return Math.round((cljs.core.deref(rl_row_viewport_height) / row_height));
}));
var max_scroll_x = reagent.ratom.make_reaction((function (){
return (cljs.core.deref(content_rows_width) - cljs.core.deref(rl_row_viewport_width));
}));
var max_scroll_y = reagent.ratom.make_reaction((function (){
return (cljs.core.deref(content_rows_height) - cljs.core.deref(rl_row_viewport_height));
}));
var top_row_index = reagent.ratom.make_reaction((function (){
return ((cljs.core.deref(scroll_y) / row_height) | (0));
}));
var bot_row_index = reagent.ratom.make_reaction((function (){
var x__4252__auto__ = (cljs.core.deref(top_row_index) + (cljs.core.deref(rows_per_viewport) - (1)));
var y__4253__auto__ = cljs.core.deref(m_size);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
}));
var virtual_scroll_y = reagent.ratom.make_reaction((function (){
return cljs.core.mod(cljs.core.deref(scroll_y),row_height);
}));
var virtual_rows = reagent.ratom.make_reaction((function (){
if((cljs.core.deref(m_size) > (0))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(model),(function (){var x__4252__auto__ = cljs.core.deref(top_row_index);
var y__4253__auto__ = cljs.core.deref(m_size);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})(),(function (){var x__4252__auto__ = ((cljs.core.deref(top_row_index) + cljs.core.deref(rows_per_viewport)) + (2));
var y__4253__auto__ = cljs.core.deref(m_size);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})());
} else {
return null;
}
}));
var on_h_scroll_change = (function (p1__20146_SHARP_){
return cljs.core.reset_BANG_(scroll_x,p1__20146_SHARP_);
});
var on_v_scroll_change = (function (p1__20147_SHARP_){
return cljs.core.reset_BANG_(scroll_y,p1__20147_SHARP_);
});
var on_viewport_resize = (function re_com$v_table$on_viewport_resize(event){
var target = event.target;
var bounding_rect = (((target == null))?cljs.core.PersistentArrayMap.EMPTY:target.getBoundingClientRect());
cljs.core.reset_BANG_(rl_row_viewport_width,(function (){var or__4160__auto____$1 = row_viewport_width;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return bounding_rect.width;
}
})());

cljs.core.reset_BANG_(rl_row_viewport_height,(function (){var or__4160__auto____$1 = row_viewport_height;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return bounding_rect.height;
}
})());

cljs.core.reset_BANG_(scroll_x,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_x);
var y__4253__auto__ = cljs.core.deref(scroll_x);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());

return cljs.core.reset_BANG_(scroll_y,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_y);
var y__4253__auto__ = cljs.core.deref(scroll_y);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());
});
var on_wheel = (function re_com$v_table$on_wheel(event){
var delta_x = event.deltaX;
var new_delta_x = delta_x;
var delta_y = event.deltaY;
var new_delta_y = delta_y;
cljs.core.reset_BANG_(scroll_x,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_x);
var y__4253__auto__ = (cljs.core.deref(scroll_x) + new_delta_x);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());

return cljs.core.reset_BANG_(scroll_y,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_y);
var y__4253__auto__ = (cljs.core.deref(scroll_y) + new_delta_y);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());
});
var dmm_tracker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sel_parent_bounding_rect = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sel_content_x_start = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sel_content_y_start = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sel_content_x_end = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sel_content_y_end = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var selection_renderer = (function re_com$v_table$selection_renderer(class$,style,attr){
var selecting_down_QMARK_ = (cljs.core.deref(sel_content_y_end) > cljs.core.deref(sel_content_y_start));
var selecting_right_QMARK_ = (cljs.core.deref(sel_content_x_end) > cljs.core.deref(sel_content_x_start));
var width = ((selecting_right_QMARK_)?(cljs.core.deref(sel_content_x_end) - cljs.core.deref(sel_content_x_start)):(cljs.core.deref(sel_content_x_start) - cljs.core.deref(sel_content_x_end)));
var height = ((selecting_down_QMARK_)?(cljs.core.deref(sel_content_y_end) - cljs.core.deref(sel_content_y_start)):(cljs.core.deref(sel_content_y_start) - cljs.core.deref(sel_content_y_end)));
var top = ((selecting_down_QMARK_)?(cljs.core.deref(sel_content_y_start) - cljs.core.deref(scroll_y)):((cljs.core.deref(sel_content_y_start) - cljs.core.deref(scroll_y)) - height));
var left = ((selecting_right_QMARK_)?(cljs.core.deref(sel_content_x_start) - cljs.core.deref(scroll_x)):((cljs.core.deref(sel_content_x_start) - cljs.core.deref(scroll_x)) - width));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-v-table-selection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$top,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(top) : re_com.v_table.px.call(null,top)),cljs.core.cst$kw$left,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(left) : re_com.v_table.px.call(null,left)),cljs.core.cst$kw$width,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(width) : re_com.v_table.px.call(null,width)),cljs.core.cst$kw$height,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(height) : re_com.v_table.px.call(null,height)),cljs.core.cst$kw$background_DASH_color,"rgba(0,0,255,0.1)",cljs.core.cst$kw$border,"1px solid rgba(0,0,255,0.4)"], null),style], 0))], null),attr], 0)),""], null);
});
var coords_debug = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var event_debug = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var selection_target = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sel_max_content_rows_px = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sel_max_content_cols_px = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var selection_coords = (function re_com$v_table$selection_coords(){
if(cljs.core.truth_(cljs.core.deref(sel_parent_bounding_rect))){
var selecting_down_QMARK_ = (cljs.core.deref(sel_content_y_end) > cljs.core.deref(sel_content_y_start));
var selecting_right_QMARK_ = (cljs.core.deref(sel_content_x_end) > cljs.core.deref(sel_content_x_start));
var use_rows_numbers_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),cljs.core.cst$kw$column_DASH_header);
var start_row_px = ((selecting_down_QMARK_)?cljs.core.deref(sel_content_y_start):cljs.core.deref(sel_content_y_end));
var end_row_px = ((selecting_down_QMARK_)?cljs.core.deref(sel_content_y_end):cljs.core.deref(sel_content_y_start));
var start_col_px = ((selecting_right_QMARK_)?cljs.core.deref(sel_content_x_start):cljs.core.deref(sel_content_x_end));
var end_col_px = ((selecting_right_QMARK_)?cljs.core.deref(sel_content_x_end):cljs.core.deref(sel_content_x_start));
var start_row_px_clipped = (function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(sel_max_content_rows_px);
var y__4253__auto__ = start_row_px;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})();
var end_row_px_clipped = (function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(sel_max_content_rows_px);
var y__4253__auto__ = end_row_px;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})();
var coords = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$start_DASH_row,((use_rows_numbers_QMARK_)?((start_row_px_clipped / row_height) | (0)):start_row_px_clipped),cljs.core.cst$kw$end_DASH_row,((use_rows_numbers_QMARK_)?((end_row_px_clipped / row_height) | (0)):end_row_px_clipped),cljs.core.cst$kw$start_DASH_col,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(sel_max_content_cols_px);
var y__4253__auto__ = start_col_px;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})(),cljs.core.cst$kw$end_DASH_col,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(sel_max_content_cols_px);
var y__4253__auto__ = end_col_px;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})()], null);
if(re_com.config.debug_QMARK_){
cljs.core.reset_BANG_(coords_debug,coords);
} else {
}

return coords;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dragging_outside_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var on_drag_change = (function re_com$v_table$on_drag_change(sel_fn,_delta_x,_delta_y,curr_x,curr_y,ctrlKey,shiftKey,event){
var top_offset = cljs.core.deref(sel_parent_bounding_rect).top;
var left_offset = cljs.core.deref(sel_parent_bounding_rect).left;
var bottom_offset = cljs.core.deref(sel_parent_bounding_rect).bottom;
var right_offset = cljs.core.deref(sel_parent_bounding_rect).right;
var scroll_delta_y = (cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.deref(dragging_outside_QMARK_);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),cljs.core.cst$kw$column_DASH_header);
} else {
return and__4149__auto__;
}
})())?(((curr_y < top_offset))?(curr_y - top_offset):(((curr_y > bottom_offset))?(curr_y - bottom_offset):(0)
)):(0));
var scroll_delta_x = (cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.deref(dragging_outside_QMARK_);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),cljs.core.cst$kw$row_DASH_header);
} else {
return and__4149__auto__;
}
})())?(((curr_x < left_offset))?(curr_x - left_offset):(((curr_x > right_offset))?(curr_x - right_offset):(0)
)):(0));
cljs.core.reset_BANG_(sel_content_x_end,((curr_x + (- left_offset)) + cljs.core.deref(scroll_x)));

cljs.core.reset_BANG_(sel_content_y_end,((curr_y + (- top_offset)) + cljs.core.deref(scroll_y)));

cljs.core.reset_BANG_(scroll_x,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_x);
var y__4253__auto__ = (cljs.core.deref(scroll_x) + scroll_delta_x);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());

cljs.core.reset_BANG_(scroll_y,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_y);
var y__4253__auto__ = (cljs.core.deref(scroll_y) + scroll_delta_y);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());

if(re_com.config.debug_QMARK_){
cljs.core.reset_BANG_(event_debug,event);
} else {
}

var G__20151 = cljs.core.cst$kw$selecting;
var G__20152 = selection_coords();
var G__20153 = ctrlKey;
var G__20154 = shiftKey;
var G__20155 = event;
return (sel_fn.cljs$core$IFn$_invoke$arity$5 ? sel_fn.cljs$core$IFn$_invoke$arity$5(G__20151,G__20152,G__20153,G__20154,G__20155) : sel_fn.call(null,G__20151,G__20152,G__20153,G__20154,G__20155));
});
var on_drag_end = (function re_com$v_table$on_drag_end(sel_fn,ctrlKey,shiftKey,event){
if(re_com.config.debug_QMARK_){
cljs.core.reset_BANG_(coords_debug,null);
} else {
}

if(re_com.config.debug_QMARK_){
cljs.core.reset_BANG_(event_debug,event);
} else {
}

var G__20156_20176 = cljs.core.cst$kw$selection_DASH_end;
var G__20157_20177 = selection_coords();
var G__20158_20178 = ctrlKey;
var G__20159_20179 = shiftKey;
var G__20160_20180 = event;
(sel_fn.cljs$core$IFn$_invoke$arity$5 ? sel_fn.cljs$core$IFn$_invoke$arity$5(G__20156_20176,G__20157_20177,G__20158_20178,G__20159_20179,G__20160_20180) : sel_fn.call(null,G__20156_20176,G__20157_20177,G__20158_20178,G__20159_20179,G__20160_20180));

cljs.core.reset_BANG_(dragging_QMARK_,false);

cljs.core.reset_BANG_(dragging_outside_QMARK_,false);

cljs.core.reset_BANG_(sel_parent_bounding_rect,null);

return cljs.core.reset_BANG_(dmm_tracker,null);
});
var on_mouse_down = (function re_com$v_table$on_mouse_down(sel_target,sel_fn,max_rows_px,max_cols_px,event){
cljs.core.reset_BANG_(selection_target,sel_target);

cljs.core.reset_BANG_(sel_max_content_rows_px,(max_rows_px - (1)));

cljs.core.reset_BANG_(sel_max_content_cols_px,(max_cols_px - (1)));

cljs.core.reset_BANG_(sel_parent_bounding_rect,event.currentTarget.getBoundingClientRect());

var top_offset = (- cljs.core.deref(sel_parent_bounding_rect).top);
var left_offset = (- cljs.core.deref(sel_parent_bounding_rect).left);
cljs.core.reset_BANG_(sel_content_x_start,((event.clientX + left_offset) + cljs.core.deref(scroll_x)));

cljs.core.reset_BANG_(sel_content_y_start,((event.clientY + top_offset) + cljs.core.deref(scroll_y)));

cljs.core.reset_BANG_(sel_content_x_end,cljs.core.deref(sel_content_x_start));

cljs.core.reset_BANG_(sel_content_y_end,cljs.core.deref(sel_content_y_start));

if(re_com.config.debug_QMARK_){
cljs.core.reset_BANG_(event_debug,event);
} else {
}

var G__20161_20181 = cljs.core.cst$kw$selection_DASH_start;
var G__20162_20182 = selection_coords();
var G__20163_20183 = event.ctrlKey;
var G__20164_20184 = event.shiftKey;
var G__20165_20185 = event;
(sel_fn.cljs$core$IFn$_invoke$arity$5 ? sel_fn.cljs$core$IFn$_invoke$arity$5(G__20161_20181,G__20162_20182,G__20163_20183,G__20164_20184,G__20165_20185) : sel_fn.call(null,G__20161_20181,G__20162_20182,G__20163_20183,G__20164_20184,G__20165_20185));

cljs.core.reset_BANG_(dmm_tracker,re_com.dmm_tracker.make_dmm_tracker(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_drag_change,sel_fn),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_drag_end,sel_fn)));

re_com.dmm_tracker.captureMouseMoves(cljs.core.deref(dmm_tracker),event);

cljs.core.reset_BANG_(dragging_QMARK_,true);

return cljs.core.reset_BANG_(dragging_outside_QMARK_,false);
});
var on_mouse_enter = (function re_com$v_table$on_mouse_enter(sel_target){
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.deref(dragging_QMARK_);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),sel_target);
} else {
return and__4149__auto__;
}
})())){
return cljs.core.reset_BANG_(dragging_outside_QMARK_,false);
} else {
return null;
}
});
var on_mouse_leave = (function re_com$v_table$on_mouse_leave(sel_target){
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.deref(dragging_QMARK_);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),sel_target);
} else {
return and__4149__auto__;
}
})())){
return cljs.core.reset_BANG_(dragging_outside_QMARK_,true);
} else {
return null;
}
});
var selection_fns = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_renderer,on_mouse_down,on_mouse_enter,on_mouse_leave], null);
if(cljs.core.not((function (){var or__4160__auto____$1 = window.hasOwnProperty("addResizeListener");
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return window.hasOwnProperty("removeResizeListener");
}
})())){
return console.error("Your project is missing detect-element-resize.js or detect-element-resize-externs.js\n         could not setup v-table. See https://re-com.day8.com.au/#/v-table requirements");
} else {
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"v-table",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function re_com$v_table$v_table_component_did_mount(){
cljs.core.reset_BANG_(row_viewport_element,document.getElementById(row_viewport_id));

return window.addResizeListener(cljs.core.deref(row_viewport_element),on_viewport_resize);
}),cljs.core.cst$kw$component_DASH_will_DASH_unmount,(function re_com$v_table$v_table_component_will_unmount(){
window.removeResizeListener(cljs.core.deref(row_viewport_element),on_viewport_resize);

return cljs.core.reset_BANG_(row_viewport_element,null);
}),cljs.core.cst$kw$reagent_DASH_render,(function() { 
var re_com$v_table$v_table_render__delegate = function (p__20166){
var map__20167 = p__20166;
var map__20167__$1 = cljs.core.__destructure_map(map__20167);
var args__$1 = map__20167__$1;
var bottom_left_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$bottom_DASH_left_DASH_renderer);
var row_footer_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_footer_DASH_renderer);
var bottom_right_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$bottom_DASH_right_DASH_renderer);
var max_row_viewport_height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$max_DASH_row_DASH_viewport_DASH_height);
var row_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_renderer);
var virtual_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20167__$1,cljs.core.cst$kw$virtual_QMARK_,true);
var top_left_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$top_DASH_left_DASH_renderer);
var column_footer_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$column_DASH_footer_DASH_renderer);
var row_header_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_header_DASH_renderer);
var row_viewport_width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_viewport_DASH_width);
var remove_empty_row_space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20167__$1,cljs.core.cst$kw$remove_DASH_empty_DASH_row_DASH_space_QMARK_,true);
var scroll_rows_into_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$scroll_DASH_rows_DASH_into_DASH_view);
var row_selection_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_selection_DASH_fn);
var column_header_selection_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$column_DASH_header_DASH_selection_DASH_fn);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$parts);
var row_height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_height);
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$max_DASH_width);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$src);
var top_right_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$top_DASH_right_DASH_renderer);
var row_content_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_content_DASH_width);
var column_footer_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$column_DASH_footer_DASH_height);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20167__$1,cljs.core.cst$kw$key_DASH_fn,null);
var column_header_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$column_DASH_header_DASH_height);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$debug_DASH_as);
var scroll_columns_into_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$scroll_DASH_columns_DASH_into_DASH_view);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$class);
var row_viewport_height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_viewport_DASH_height);
var column_header_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$column_DASH_header_DASH_renderer);
var row_header_selection_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20167__$1,cljs.core.cst$kw$row_DASH_header_DASH_selection_DASH_fn);
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.v_table.v_table_args_desc),args__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
cljs.core.reset_BANG_(content_rows_width,row_content_width);

cljs.core.reset_BANG_(content_rows_height,(cljs.core.deref(m_size) * row_height__$1));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(re_com.util.deref_or_value(scroll_rows_into_view),cljs.core.deref(internal_scroll_rows_into_view))){
var map__20168_20186 = re_com.util.deref_or_value(scroll_rows_into_view);
var map__20168_20187__$1 = cljs.core.__destructure_map(map__20168_20186);
var start_row_20188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20168_20187__$1,cljs.core.cst$kw$start_DASH_row);
var end_row_20189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20168_20187__$1,cljs.core.cst$kw$end_DASH_row);
var new_scroll_y_20190 = (((((start_row_20188 == null)) && ((end_row_20189 == null))))?null:(((start_row_20188 <= cljs.core.deref(top_row_index)))?(start_row_20188 * row_height__$1):(((end_row_20189 >= cljs.core.deref(bot_row_index)))?(((end_row_20189 * row_height__$1) + row_height__$1) + (- cljs.core.deref(rl_row_viewport_height))):null
)));
if((!((new_scroll_y_20190 == null)))){
cljs.core.reset_BANG_(scroll_y,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_y);
var y__4253__auto__ = new_scroll_y_20190;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());
} else {
}

cljs.core.reset_BANG_(internal_scroll_rows_into_view,re_com.util.deref_or_value(scroll_rows_into_view));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(re_com.util.deref_or_value(scroll_columns_into_view),cljs.core.deref(internal_scroll_columns_into_view))){
var map__20169_20191 = re_com.util.deref_or_value(scroll_columns_into_view);
var map__20169_20192__$1 = cljs.core.__destructure_map(map__20169_20191);
var start_col_20193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169_20192__$1,cljs.core.cst$kw$start_DASH_col);
var end_col_20194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169_20192__$1,cljs.core.cst$kw$end_DASH_col);
var left_col_px_20195 = cljs.core.deref(scroll_x);
var right_col_px_20196 = ((cljs.core.deref(scroll_x) + cljs.core.deref(rl_row_viewport_width)) + (-1));
var new_scroll_x_20197 = (((start_col_20193 < left_col_px_20195))?start_col_20193:(((end_col_20194 > right_col_px_20196))?(end_col_20194 - cljs.core.deref(rl_row_viewport_width)):null
));
if((!((new_scroll_x_20197 == null)))){
cljs.core.reset_BANG_(scroll_x,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_x);
var y__4253__auto__ = new_scroll_x_20197;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());
} else {
}

cljs.core.reset_BANG_(internal_scroll_columns_into_view,re_com.util.deref_or_value(scroll_columns_into_view));
} else {
}

if((cljs.core.deref(scroll_y) > cljs.core.deref(max_scroll_y))){
cljs.core.reset_BANG_(scroll_y,(function (){var x__4249__auto__ = (0);
var y__4250__auto__ = (function (){var x__4252__auto__ = cljs.core.deref(max_scroll_y);
var y__4253__auto__ = cljs.core.deref(scroll_y);
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})());
} else {
}

return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,src__$1,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$2 = debug_as;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})(),cljs.core.cst$kw$class,["rc-v-table ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,max_width,cljs.core.cst$kw$max_DASH_height,(cljs.core.truth_(remove_empty_row_space_QMARK_)?((((function (){var or__4160__auto____$2 = column_header_height;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return (0);
}
})() + (function (){var or__4160__auto____$2 = max_row_viewport_height__$1;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return (cljs.core.deref(content_rows_height) + (1));
}
})()) + (function (){var or__4160__auto____$2 = column_footer_height;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return (0);
}
})()) + re_com.v_table.scrollbar_tot_thick):null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_wheel,(function (event){
on_wheel(event);

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1164], null)),cljs.core.cst$kw$class,["rc-v-table-left-section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_section,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_section,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_section,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.top_left_content,top_left_renderer,column_header_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_left,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_left,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_left,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_header_viewport,row_header_renderer,key_fn,cljs.core.deref(top_row_index),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_rows):cljs.core.deref(model)),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_scroll_y):cljs.core.deref(scroll_y)),row_header_selection_fn,selection_fns,(function (){var and__4149__auto__ = row_header_selection_fn;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = cljs.core.deref(sel_parent_bounding_rect);
if(cljs.core.truth_(and__4149__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),cljs.core.cst$kw$row_DASH_header);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})(),row_viewport_height__$1,cljs.core.deref(content_rows_height),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_headers,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_headers,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_headers,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_header_DASH_selection_DASH_rect,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_header_DASH_selection_DASH_rect,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_header_DASH_selection_DASH_rect,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_header_DASH_content,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_header_DASH_content,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_header_DASH_content,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.bottom_left_content,bottom_left_renderer,column_footer_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom_DASH_left,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom_DASH_left,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom_DASH_left,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1218], null)),cljs.core.cst$kw$size,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(re_com.v_table.scrollbar_tot_thick) : re_com.v_table.px.call(null,re_com.v_table.scrollbar_tot_thick))], null)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1224], null)),cljs.core.cst$kw$class,["rc-v-table-middle-section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_section,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,(function (){var G__20170 = cljs.core.deref(content_rows_width);
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20170) : re_com.v_table.px.call(null,G__20170));
})()], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_section,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_section,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$size,(cljs.core.truth_(row_viewport_width__$1)?"none":"auto"),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.column_header_viewport,column_header_renderer,cljs.core.deref(scroll_x),column_header_selection_fn,selection_fns,(function (){var and__4149__auto__ = column_header_selection_fn;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = cljs.core.deref(sel_parent_bounding_rect);
if(cljs.core.truth_(and__4149__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),cljs.core.cst$kw$column_DASH_header);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})(),row_viewport_width__$1,column_header_height,cljs.core.deref(content_rows_width),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_headers,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_headers,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_headers,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_header_DASH_selection_DASH_rect,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_header_DASH_selection_DASH_rect,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_header_DASH_selection_DASH_rect,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_header_DASH_content,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_header_DASH_content,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_header_DASH_content,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_viewport,row_renderer,key_fn,cljs.core.deref(top_row_index),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_rows):cljs.core.deref(model)),cljs.core.deref(scroll_x),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_scroll_y):cljs.core.deref(scroll_y)),row_selection_fn,selection_fns,(function (){var and__4149__auto__ = row_selection_fn;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = cljs.core.deref(sel_parent_bounding_rect);
if(cljs.core.truth_(and__4149__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),cljs.core.cst$kw$row);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})(),row_viewport_height__$1,row_viewport_width__$1,row_viewport_id,cljs.core.deref(content_rows_height),cljs.core.deref(content_rows_width),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rows,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rows,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rows,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_selection_DASH_rect,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_selection_DASH_rect,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_selection_DASH_rect,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_content,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_content,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_content,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.column_footer_viewport,column_footer_renderer,cljs.core.deref(scroll_x),row_viewport_width__$1,column_footer_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_footers,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_footers,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_footers,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_footer_DASH_content,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_footer_DASH_content,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$column_DASH_footer_DASH_content,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.scrollbar,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1304], null)),cljs.core.cst$kw$class,["rc-v-table-h-scroll ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h_DASH_scroll,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$type,cljs.core.cst$kw$horizontal,cljs.core.cst$kw$length,cljs.core.deref(rl_row_viewport_width),cljs.core.cst$kw$width,re_com.v_table.scrollbar_thickness,cljs.core.cst$kw$content_DASH_length,cljs.core.deref(content_rows_width),cljs.core.cst$kw$scroll_DASH_pos,cljs.core.deref(scroll_x),cljs.core.cst$kw$on_DASH_change,on_h_scroll_change,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.v_table.scrollbar_margin,(0)], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h_DASH_scroll,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h_DASH_scroll,cljs.core.cst$kw$attr], null))], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1319], null)),cljs.core.cst$kw$class,["rc-v-table-right-section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_section,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_section,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_section,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.top_right_content,top_right_renderer,column_header_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_right,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_right,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_right,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_footer_viewport,row_footer_renderer,key_fn,cljs.core.deref(top_row_index),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_rows):cljs.core.deref(model)),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_scroll_y):cljs.core.deref(scroll_y)),row_viewport_height__$1,cljs.core.deref(content_rows_height),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_footers,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_footers,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_footers,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_footer_DASH_content,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_footer_DASH_content,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_footer_DASH_content,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.bottom_right_content,bottom_right_renderer,column_footer_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom_DASH_right,cljs.core.cst$kw$class], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom_DASH_right,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom_DASH_right,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1366], null)),cljs.core.cst$kw$size,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(re_com.v_table.scrollbar_tot_thick) : re_com.v_table.px.call(null,re_com.v_table.scrollbar_tot_thick))], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1372], null)),cljs.core.cst$kw$class,["rc-v-table-v-scroll-section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_scroll_DASH_section,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_scroll_DASH_section,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_scroll_DASH_section,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1377], null)),cljs.core.cst$kw$size,(function (){var G__20171 = (function (){var or__4160__auto____$2 = column_header_height;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return (0);
}
})();
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20171) : re_com.v_table.px.call(null,G__20171));
})()], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1380], null)),cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.scrollbar,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1383], null)),cljs.core.cst$kw$class,["rc-v-table-v-scroll ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$type,cljs.core.cst$kw$vertical,cljs.core.cst$kw$length,cljs.core.deref(rl_row_viewport_height),cljs.core.cst$kw$width,re_com.v_table.scrollbar_thickness,cljs.core.cst$kw$content_DASH_length,cljs.core.deref(content_rows_height),cljs.core.cst$kw$scroll_DASH_pos,cljs.core.deref(scroll_y),cljs.core.cst$kw$on_DASH_change,on_v_scroll_change,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),re_com.v_table.scrollbar_margin], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$attr], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1395], null)),cljs.core.cst$kw$size,(function (){var G__20172 = (function (){var or__4160__auto____$2 = column_footer_height;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return (0);
}
})();
return (re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(G__20172) : re_com.v_table.px.call(null,G__20172));
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Google-Drive/Planung/Clojure-Script/dep-reframe/target/public/cljs-out/dep/re_com/v_table.cljs",cljs.core.cst$kw$line,1398], null)),cljs.core.cst$kw$size,(re_com.v_table.px.cljs$core$IFn$_invoke$arity$1 ? re_com.v_table.px.cljs$core$IFn$_invoke$arity$1(re_com.v_table.scrollbar_tot_thick) : re_com.v_table.px.call(null,re_com.v_table.scrollbar_tot_thick))], null)], null)], null)], null)], null);
}
};
var re_com$v_table$v_table_render = function (var_args){
var p__20166 = null;
if (arguments.length > 0) {
var G__20198__i = 0, G__20198__a = new Array(arguments.length -  0);
while (G__20198__i < G__20198__a.length) {G__20198__a[G__20198__i] = arguments[G__20198__i + 0]; ++G__20198__i;}
  p__20166 = new cljs.core.IndexedSeq(G__20198__a,0,null);
} 
return re_com$v_table$v_table_render__delegate.call(this,p__20166);};
re_com$v_table$v_table_render.cljs$lang$maxFixedArity = 0;
re_com$v_table$v_table_render.cljs$lang$applyTo = (function (arglist__20199){
var p__20166 = cljs.core.seq(arglist__20199);
return re_com$v_table$v_table_render__delegate(p__20166);
});
re_com$v_table$v_table_render.cljs$core$IFn$_invoke$arity$variadic = re_com$v_table$v_table_render__delegate;
return re_com$v_table$v_table_render;
})()
], null));
}
}
}));

(re_com.v_table.v_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.v_table.v_table.cljs$lang$applyTo = (function (seq20148){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20148));
}));

