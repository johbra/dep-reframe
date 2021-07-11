// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__19650 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19651 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19651);

try{var G__19652 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__19653 = container;
var G__19654 = (function (){
var _STAR_always_update_STAR__orig_val__19655 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19656 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19656);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19655);
}});
return reagent.dom.global$module$react_dom.render(G__19652,G__19653,G__19654);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19650);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__19658 = arguments.length;
switch (G__19658) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__19659 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19659,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19659,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__19663_19679 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__19664_19680 = null;
var count__19665_19681 = (0);
var i__19666_19682 = (0);
while(true){
if((i__19666_19682 < count__19665_19681)){
var vec__19673_19683 = chunk__19664_19680.cljs$core$IIndexed$_nth$arity$2(null,i__19666_19682);
var container_19684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19673_19683,(0),null);
var comp_19685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19673_19683,(1),null);
reagent.dom.re_render_component(comp_19685,container_19684);


var G__19686 = seq__19663_19679;
var G__19687 = chunk__19664_19680;
var G__19688 = count__19665_19681;
var G__19689 = (i__19666_19682 + (1));
seq__19663_19679 = G__19686;
chunk__19664_19680 = G__19687;
count__19665_19681 = G__19688;
i__19666_19682 = G__19689;
continue;
} else {
var temp__5735__auto___19690 = cljs.core.seq(seq__19663_19679);
if(temp__5735__auto___19690){
var seq__19663_19691__$1 = temp__5735__auto___19690;
if(cljs.core.chunked_seq_QMARK_(seq__19663_19691__$1)){
var c__4556__auto___19692 = cljs.core.chunk_first(seq__19663_19691__$1);
var G__19693 = cljs.core.chunk_rest(seq__19663_19691__$1);
var G__19694 = c__4556__auto___19692;
var G__19695 = cljs.core.count(c__4556__auto___19692);
var G__19696 = (0);
seq__19663_19679 = G__19693;
chunk__19664_19680 = G__19694;
count__19665_19681 = G__19695;
i__19666_19682 = G__19696;
continue;
} else {
var vec__19676_19697 = cljs.core.first(seq__19663_19691__$1);
var container_19698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19676_19697,(0),null);
var comp_19699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19676_19697,(1),null);
reagent.dom.re_render_component(comp_19699,container_19698);


var G__19700 = cljs.core.next(seq__19663_19691__$1);
var G__19701 = null;
var G__19702 = (0);
var G__19703 = (0);
seq__19663_19679 = G__19700;
chunk__19664_19680 = G__19701;
count__19665_19681 = G__19702;
i__19666_19682 = G__19703;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
