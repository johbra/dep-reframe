// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('dep.helpers.form_helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_com.core');
/**
 * Erzeugt ein Eingabefeld mithilfe von re-com.
 */
dep.helpers.form_helpers.rc_input_box = (function dep$helpers$form_helpers$rc_input_box(labl,model,form_key,validation_regex,convert_fn,disabled_QMARK_,s){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$label,labl], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,cljs.core.cst$kw$model,model,cljs.core.cst$kw$on_DASH_change,(function (p1__24798_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,form_key,(convert_fn.cljs$core$IFn$_invoke$arity$1 ? convert_fn.cljs$core$IFn$_invoke$arity$1(p1__24798_SHARP_) : convert_fn.call(null,p1__24798_SHARP_)));
}),cljs.core.cst$kw$placeholder,"",cljs.core.cst$kw$validation_DASH_regex,validation_regex,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,labl], null));
});
/**
 * Erzeugt eine Checkbox mithilfe von re-com
 */
dep.helpers.form_helpers.rc_check_box = (function dep$helpers$form_helpers$rc_check_box(labl,form_key,s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$label,labl], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$model,(function (){var G__24800 = cljs.core.deref(s);
return (form_key.cljs$core$IFn$_invoke$arity$1 ? form_key.cljs$core$IFn$_invoke$arity$1(G__24800) : form_key.call(null,G__24800));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__24799_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,form_key,p1__24799_SHARP_);
})], null)], null)], null);
});
/**
 * Erzeugt ein Dropdown-Eingabefeld mithilfe von re-com.
 */
dep.helpers.form_helpers.rc_dropdown = (function dep$helpers$form_helpers$rc_dropdown(labl,form_key,choices,disabled_QMARK_,s){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$label,labl], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,cljs.core.cst$kw$width,"250px",cljs.core.cst$kw$choices,choices,cljs.core.cst$kw$model,(function (){var G__24802 = cljs.core.deref(s);
return (form_key.cljs$core$IFn$_invoke$arity$1 ? form_key.cljs$core$IFn$_invoke$arity$1(G__24802) : form_key.call(null,G__24802));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__24801_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,form_key,p1__24801_SHARP_);
}),cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_], null)], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.helpers.form_helpers.standard_form = (function dep$helpers$form_helpers$standard_form(fields,form_data,buttons,process_cancel){
var form_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(form_data);
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,cljs.core.cst$kw$border,"1px solid #eee",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"cornsilk"], null),cljs.core.cst$kw$children,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((fields.cljs$core$IFn$_invoke$arity$1 ? fields.cljs$core$IFn$_invoke$arity$1(form_state) : fields.call(null,form_state)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,cljs.core.cst$kw$color,"#ddd",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px 0 10px"], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"12px",cljs.core.cst$kw$children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((buttons.cljs$core$IFn$_invoke$arity$1 ? buttons.cljs$core$IFn$_invoke$arity$1(form_state) : buttons.call(null,form_state)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"schlie\u00DFen",cljs.core.cst$kw$on_DASH_click,process_cancel], null))], null)], null)], 0))], null)], null);
});
});
