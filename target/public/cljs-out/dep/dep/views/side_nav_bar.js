// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.views.side_nav_bar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dep.model.quartal');
goog.require('re_frame.core');
goog.require('dep.views.dozenten');
goog.require('dep.views.manipels');
goog.require('dep.views.module');
goog.require('dep.views.planung');
goog.require('dep.views.datensicherung');
goog.require('dep.views.studienrichtungen');
goog.require('re_com.core');
dep.views.side_nav_bar.menu_item = (function dep$views$side_nav_bar$menu_item(item,callback_fn){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$label,item,cljs.core.cst$kw$class," bg-light",cljs.core.cst$kw$on_DASH_click,(function (){
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(item) : callback_fn.call(null,item));
})], null);
});
/**
 * Komponente für das Menü am linken Rand.
 */
dep.views.side_nav_bar.sidebar = (function dep$views$side_nav_bar$sidebar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_sidebar_DASH_wrapper,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$class,"bg-light",cljs.core.cst$kw$min_DASH_width,"240px",cljs.core.cst$kw$gap,"15px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Planung",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_item_DASH_selected,cljs.core.cst$kw$hauptseite], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Dozenten",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_item_DASH_selected,cljs.core.cst$kw$dozenten], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Module",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_item_DASH_selected,cljs.core.cst$kw$module], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Manipel",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_item_DASH_selected,cljs.core.cst$kw$manipels], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Studienrichtungen",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_item_DASH_selected,cljs.core.cst$kw$studienrichtungen], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Datensicherung",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_item_DASH_selected,cljs.core.cst$kw$datensicherung], null));
})], null)], null)], null)], null);
});
/**
 * Das in der Sidebar platzierte Menü.
 */
dep.views.side_nav_bar.menu_actions = (function dep$views$side_nav_bar$menu_actions(selected){
if(cljs.core.truth_(selected)){
var G__31427 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$dozenten,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.dozenten.dozenten], null),cljs.core.cst$kw$manipels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.manipels.manipels], null),cljs.core.cst$kw$module,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.module.module], null),cljs.core.cst$kw$studienrichtungen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.studienrichtungen.studienrichtungen], null),cljs.core.cst$kw$datensicherung,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.datensicherung.datensicherung], null),cljs.core.cst$kw$hauptseite,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.planung.planung], null)], null);
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__31427) : selected.call(null,G__31427));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.planung.planung], null);
}
});
dep.views.side_nav_bar.select_box = (function dep$views$side_nav_bar$select_box(lable,values,selected_value,callback_fn){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"5px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,lable], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,cljs.core.cst$kw$choices,(function (){var iter__4564__auto__ = (function dep$views$side_nav_bar$select_box_$_iter__31428(s__31429){
return (new cljs.core.LazySeq(null,(function (){
var s__31429__$1 = s__31429;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31429__$1);
if(temp__5753__auto__){
var s__31429__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31429__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__31429__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__31431 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__31430 = (0);
while(true){
if((i__31430 < size__4563__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__31430);
cljs.core.chunk_append(b__31431,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null),cljs.core.cst$kw$label,v], null));

var G__31432 = (i__31430 + (1));
i__31430 = G__31432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31431),dep$views$side_nav_bar$select_box_$_iter__31428(cljs.core.chunk_rest(s__31429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31431),null);
}
} else {
var v = cljs.core.first(s__31429__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null),cljs.core.cst$kw$label,v], null),dep$views$side_nav_bar$select_box_$_iter__31428(cljs.core.rest(s__31429__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(values);
})(),cljs.core.cst$kw$model,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,selected_value], null),cljs.core.cst$kw$on_DASH_change,callback_fn], null)], null)], null);
});
/**
 * Die Auswahlboxen für Geschäftsjahr und Quartal und die Planungsschaltfläche.
 */
dep.views.side_nav_bar.geschaeftjahr_quartal_form = (function dep$views$side_nav_bar$geschaeftjahr_quartal_form(){
var jahre = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jahre], null)));
var quartale = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quartale], null)));
var quartal = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quartal], null)));
var geschaeftsjahr = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geschaeftsjahr], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$class,"bg-light border-right",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.select_box("Gesch\u00E4ftsjahr:",jahre,geschaeftsjahr,(function (p1__31433_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geschaeftsjahr,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p1__31433_SHARP_)], null));
})),dep.views.side_nav_bar.select_box("Quartal:",quartale,dep.model.quartal.quartal__GT_string(quartal),(function (p1__31434_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quartal,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p1__31434_SHARP_)], null));
})),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.planung.plane_quartal();
}),cljs.core.cst$kw$label,"Plane Quartal"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,(function (){
return dep.views.planung.neues_geschaeftjahr();
}),cljs.core.cst$kw$label,"neues G-Jahr anlegen"], null)], null)], null);
});
