// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_com.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.impl.component');
goog.require('re_com.config');
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$child,cljs.core.cst$kw$children,cljs.core.cst$kw$panel_DASH_1,cljs.core.cst$kw$panel_DASH_2,cljs.core.cst$kw$debug_DASH_as], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__13982){
var map__13983 = p__13982;
var map__13983__$1 = cljs.core.__destructure_map(map__13983);
var args = map__13983__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13983__$1,cljs.core.cst$kw$src);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13983__$1,cljs.core.cst$kw$debug_DASH_as);
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4160__auto__ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__4160__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
goog.object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$ref], null));
if(cljs.core.truth_(temp__5753__auto__)){
var user_ref_fn = temp__5753__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__13984 = src;
var map__13984__$1 = cljs.core.__destructure_map(map__13984);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$line);
var G__13985 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ref,ref_fn,cljs.core.cst$kw$data_DASH_rc,rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13985,cljs.core.cst$kw$data_DASH_rc_DASH_src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__13985;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__13987 = arguments.length;
switch (G__13987) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$el,el,cljs.core.cst$kw$src,el.dataset.rcSrc,cljs.core.cst$kw$component,component,cljs.core.cst$kw$args,goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_width,"32px",cljs.core.cst$kw$min_DASH_height,"32px",cljs.core.cst$kw$font_DASH_size,"1.4em",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$vertical_DASH_align,"center",cljs.core.cst$kw$background,"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__13991_14011 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__13990_SHARP_,p2__13989_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__13989_SHARP_,cljs.core.cst$kw$i,(p1__13990_SHARP_ + (1)));
}),stack));
var chunk__13992_14012 = null;
var count__13993_14013 = (0);
var i__13994_14014 = (0);
while(true){
if((i__13994_14014 < count__13993_14013)){
var map__14003_14015 = chunk__13992_14012.cljs$core$IIndexed$_nth$arity$2(null,i__13994_14014);
var map__14003_14016__$1 = cljs.core.__destructure_map(map__14003_14015);
var i_14017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003_14016__$1,cljs.core.cst$kw$i);
var el_14018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003_14016__$1,cljs.core.cst$kw$el);
var component_14019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003_14016__$1,cljs.core.cst$kw$component);
var src_14020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003_14016__$1,cljs.core.cst$kw$src);
var args_14021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003_14016__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_(component_14019)){
if(cljs.core.truth_(src_14020)){
var vec__14004_14022 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_14020,/:/);
var file_14023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14004_14022,(0),null);
var line_14024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14004_14022,(1),null);
if(cljs.core.truth_(args_14021)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14017),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14019)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14023),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14024),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14021,el_14018);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14017),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14019)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14023),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14024),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14018);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14017),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14019)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14021,el_14018);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14017),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14018);
}


var G__14025 = seq__13991_14011;
var G__14026 = chunk__13992_14012;
var G__14027 = count__13993_14013;
var G__14028 = (i__13994_14014 + (1));
seq__13991_14011 = G__14025;
chunk__13992_14012 = G__14026;
count__13993_14013 = G__14027;
i__13994_14014 = G__14028;
continue;
} else {
var temp__5753__auto___14029 = cljs.core.seq(seq__13991_14011);
if(temp__5753__auto___14029){
var seq__13991_14030__$1 = temp__5753__auto___14029;
if(cljs.core.chunked_seq_QMARK_(seq__13991_14030__$1)){
var c__4591__auto___14031 = cljs.core.chunk_first(seq__13991_14030__$1);
var G__14032 = cljs.core.chunk_rest(seq__13991_14030__$1);
var G__14033 = c__4591__auto___14031;
var G__14034 = cljs.core.count(c__4591__auto___14031);
var G__14035 = (0);
seq__13991_14011 = G__14032;
chunk__13992_14012 = G__14033;
count__13993_14013 = G__14034;
i__13994_14014 = G__14035;
continue;
} else {
var map__14007_14036 = cljs.core.first(seq__13991_14030__$1);
var map__14007_14037__$1 = cljs.core.__destructure_map(map__14007_14036);
var i_14038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14007_14037__$1,cljs.core.cst$kw$i);
var el_14039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14007_14037__$1,cljs.core.cst$kw$el);
var component_14040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14007_14037__$1,cljs.core.cst$kw$component);
var src_14041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14007_14037__$1,cljs.core.cst$kw$src);
var args_14042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14007_14037__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_(component_14040)){
if(cljs.core.truth_(src_14041)){
var vec__14008_14043 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_14041,/:/);
var file_14044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008_14043,(0),null);
var line_14045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008_14043,(1),null);
if(cljs.core.truth_(args_14042)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14038),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14040)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14044),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14045),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14042,el_14039);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14038),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14040)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14044),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14045),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14039);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14038),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14040)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14042,el_14039);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14038),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14039);
}


var G__14046 = cljs.core.next(seq__13991_14030__$1);
var G__14047 = null;
var G__14048 = (0);
var G__14049 = (0);
seq__13991_14011 = G__14046;
chunk__13992_14012 = G__14047;
count__13993_14013 = G__14048;
i__13994_14014 = G__14049;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__14050 = cljs.core.seq(problems);
var chunk__14051 = null;
var count__14052 = (0);
var i__14053 = (0);
while(true){
if((i__14053 < count__14052)){
var map__14058 = chunk__14051.cljs$core$IIndexed$_nth$arity$2(null,i__14053);
var map__14058__$1 = cljs.core.__destructure_map(map__14058);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14058__$1,cljs.core.cst$kw$problem);
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14058__$1,cljs.core.cst$kw$arg_DASH_name);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14058__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14058__$1,cljs.core.cst$kw$actual);
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14058__$1,cljs.core.cst$kw$validate_DASH_fn_DASH_result);
var G__14059_14062 = problem;
var G__14059_14063__$1 = (((G__14059_14062 instanceof cljs.core.Keyword))?G__14059_14062.fqn:null);
switch (G__14059_14063__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__14065 = seq__14050;
var G__14066 = chunk__14051;
var G__14067 = count__14052;
var G__14068 = (i__14053 + (1));
seq__14050 = G__14065;
chunk__14051 = G__14066;
count__14052 = G__14067;
i__14053 = G__14068;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__14050);
if(temp__5753__auto__){
var seq__14050__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14050__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__14050__$1);
var G__14069 = cljs.core.chunk_rest(seq__14050__$1);
var G__14070 = c__4591__auto__;
var G__14071 = cljs.core.count(c__4591__auto__);
var G__14072 = (0);
seq__14050 = G__14069;
chunk__14051 = G__14070;
count__14052 = G__14071;
i__14053 = G__14072;
continue;
} else {
var map__14060 = cljs.core.first(seq__14050__$1);
var map__14060__$1 = cljs.core.__destructure_map(map__14060);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14060__$1,cljs.core.cst$kw$problem);
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14060__$1,cljs.core.cst$kw$arg_DASH_name);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14060__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14060__$1,cljs.core.cst$kw$actual);
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14060__$1,cljs.core.cst$kw$validate_DASH_fn_DASH_result);
var G__14061_14073 = problem;
var G__14061_14074__$1 = (((G__14061_14073 instanceof cljs.core.Keyword))?G__14061_14073.fqn:null);
switch (G__14061_14074__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__14076 = cljs.core.next(seq__14050__$1);
var G__14077 = null;
var G__14078 = (0);
var G__14079 = (0);
seq__14050 = G__14076;
chunk__14051 = G__14077;
count__14052 = G__14078;
i__14053 = G__14079;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__14080){
var map__14081 = p__14080;
var map__14081__$1 = cljs.core.__destructure_map(map__14081);
var src = map__14081__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14081__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14081__$1,cljs.core.cst$kw$line);
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4777__auto__ = [];
var len__4771__auto___14087 = arguments.length;
var i__4772__auto___14088 = (0);
while(true){
if((i__4772__auto___14088 < len__4771__auto___14087)){
args__4777__auto__.push((arguments[i__4772__auto___14088]));

var G__14089 = (i__4772__auto___14088 + (1));
i__4772__auto___14088 = G__14089;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__14083){
var map__14084 = p__14083;
var map__14084__$1 = cljs.core.__destructure_map(map__14084);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.cst$kw$problems);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.cst$kw$component);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.cst$kw$args);
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"validate-args-error",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__14090__delegate = function (p__14085){
var map__14086 = p__14085;
var map__14086__$1 = cljs.core.__destructure_map(map__14086);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086__$1,cljs.core.cst$kw$problems);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086__$1,cljs.core.cst$kw$component);
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086__$1,cljs.core.cst$kw$args);
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(args__$1),cljs.core.cst$kw$debug_DASH_as,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,component__$1,cljs.core.cst$kw$args,args__$1], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"re-com validation error. Look in the DevTools console.",cljs.core.cst$kw$style,re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__14090 = function (var_args){
var p__14085 = null;
if (arguments.length > 0) {
var G__14091__i = 0, G__14091__a = new Array(arguments.length -  0);
while (G__14091__i < G__14091__a.length) {G__14091__a[G__14091__i] = arguments[G__14091__i + 0]; ++G__14091__i;}
  p__14085 = new cljs.core.IndexedSeq(G__14091__a,0,null);
} 
return G__14090__delegate.call(this,p__14085);};
G__14090.cljs$lang$maxFixedArity = 0;
G__14090.cljs$lang$applyTo = (function (arglist__14092){
var p__14085 = cljs.core.seq(arglist__14092);
return G__14090__delegate(p__14085);
});
G__14090.cljs$core$IFn$_invoke$arity$variadic = G__14090__delegate;
return G__14090;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq14082){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14082));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4777__auto__ = [];
var len__4771__auto___14098 = arguments.length;
var i__4772__auto___14099 = (0);
while(true){
if((i__4772__auto___14099 < len__4771__auto___14098)){
args__4777__auto__.push((arguments[i__4772__auto___14099]));

var G__14100 = (i__4772__auto___14099 + (1));
i__4772__auto___14099 = G__14100;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__14094){
var map__14095 = p__14094;
var map__14095__$1 = cljs.core.__destructure_map(map__14095);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.cst$kw$component);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.cst$kw$src);
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"stack-spy",cljs.core.cst$kw$component_DASH_did_DASH_mount,log_fn,cljs.core.cst$kw$component_DASH_did_DASH_update,log_fn,cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__14101__delegate = function (p__14096){
var map__14097 = p__14096;
var map__14097__$1 = cljs.core.__destructure_map(map__14097);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.cst$kw$component);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.cst$kw$src);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,src__$1,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref_fn], null)], null)),component__$1], null);
};
var G__14101 = function (var_args){
var p__14096 = null;
if (arguments.length > 0) {
var G__14102__i = 0, G__14102__a = new Array(arguments.length -  0);
while (G__14102__i < G__14102__a.length) {G__14102__a[G__14102__i] = arguments[G__14102__i + 0]; ++G__14102__i;}
  p__14096 = new cljs.core.IndexedSeq(G__14102__a,0,null);
} 
return G__14101__delegate.call(this,p__14096);};
G__14101.cljs$lang$maxFixedArity = 0;
G__14101.cljs$lang$applyTo = (function (arglist__14103){
var p__14096 = cljs.core.seq(arglist__14103);
return G__14101__delegate(p__14096);
});
G__14101.cljs$core$IFn$_invoke$arity$variadic = G__14101__delegate;
return G__14101;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq14093){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14093));
}));

