// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
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
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__13981){
var map__13982 = p__13981;
var map__13982__$1 = (((((!((map__13982 == null))))?(((((map__13982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13982):map__13982);
var args = map__13982__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13982__$1,cljs.core.cst$kw$src);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13982__$1,cljs.core.cst$kw$debug_DASH_as);
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4126__auto__ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__4126__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
goog.object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$ref], null));
if(cljs.core.truth_(temp__5735__auto__)){
var user_ref_fn = temp__5735__auto__;
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
var map__13984__$1 = (((((!((map__13984 == null))))?(((((map__13984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13984):map__13984);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$line);
var G__13986 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ref,ref_fn,cljs.core.cst$kw$data_DASH_rc,rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13986,cljs.core.cst$kw$data_DASH_rc_DASH_src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__13986;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__13988 = arguments.length;
switch (G__13988) {
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

var seq__13992_14016 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__13991_SHARP_,p2__13990_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__13990_SHARP_,cljs.core.cst$kw$i,(p1__13991_SHARP_ + (1)));
}),stack));
var chunk__13993_14017 = null;
var count__13994_14018 = (0);
var i__13995_14019 = (0);
while(true){
if((i__13995_14019 < count__13994_14018)){
var map__14006_14020 = chunk__13993_14017.cljs$core$IIndexed$_nth$arity$2(null,i__13995_14019);
var map__14006_14021__$1 = (((((!((map__14006_14020 == null))))?(((((map__14006_14020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14006_14020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14006_14020):map__14006_14020);
var i_14022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14006_14021__$1,cljs.core.cst$kw$i);
var el_14023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14006_14021__$1,cljs.core.cst$kw$el);
var component_14024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14006_14021__$1,cljs.core.cst$kw$component);
var src_14025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14006_14021__$1,cljs.core.cst$kw$src);
var args_14026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14006_14021__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_(component_14024)){
if(cljs.core.truth_(src_14025)){
var vec__14008_14027 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_14025,/:/);
var file_14028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008_14027,(0),null);
var line_14029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008_14027,(1),null);
if(cljs.core.truth_(args_14026)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14022),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14024)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14028),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14029),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14026,el_14023);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14022),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14024)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14028),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14029),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14023);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14022),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14024)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14026,el_14023);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14022),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14023);
}


var G__14030 = seq__13992_14016;
var G__14031 = chunk__13993_14017;
var G__14032 = count__13994_14018;
var G__14033 = (i__13995_14019 + (1));
seq__13992_14016 = G__14030;
chunk__13993_14017 = G__14031;
count__13994_14018 = G__14032;
i__13995_14019 = G__14033;
continue;
} else {
var temp__5735__auto___14034 = cljs.core.seq(seq__13992_14016);
if(temp__5735__auto___14034){
var seq__13992_14035__$1 = temp__5735__auto___14034;
if(cljs.core.chunked_seq_QMARK_(seq__13992_14035__$1)){
var c__4556__auto___14036 = cljs.core.chunk_first(seq__13992_14035__$1);
var G__14037 = cljs.core.chunk_rest(seq__13992_14035__$1);
var G__14038 = c__4556__auto___14036;
var G__14039 = cljs.core.count(c__4556__auto___14036);
var G__14040 = (0);
seq__13992_14016 = G__14037;
chunk__13993_14017 = G__14038;
count__13994_14018 = G__14039;
i__13995_14019 = G__14040;
continue;
} else {
var map__14011_14041 = cljs.core.first(seq__13992_14035__$1);
var map__14011_14042__$1 = (((((!((map__14011_14041 == null))))?(((((map__14011_14041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14011_14041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14011_14041):map__14011_14041);
var i_14043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14011_14042__$1,cljs.core.cst$kw$i);
var el_14044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14011_14042__$1,cljs.core.cst$kw$el);
var component_14045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14011_14042__$1,cljs.core.cst$kw$component);
var src_14046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14011_14042__$1,cljs.core.cst$kw$src);
var args_14047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14011_14042__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_(component_14045)){
if(cljs.core.truth_(src_14046)){
var vec__14013_14048 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_14046,/:/);
var file_14049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14013_14048,(0),null);
var line_14050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14013_14048,(1),null);
if(cljs.core.truth_(args_14047)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14043),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14045)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14049),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14050),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14047,el_14044);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14043),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14045)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14049),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14050),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14044);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14043),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14045)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14047,el_14044);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14043),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14044);
}


var G__14051 = cljs.core.next(seq__13992_14035__$1);
var G__14052 = null;
var G__14053 = (0);
var G__14054 = (0);
seq__13992_14016 = G__14051;
chunk__13993_14017 = G__14052;
count__13994_14018 = G__14053;
i__13995_14019 = G__14054;
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
var seq__14055 = cljs.core.seq(problems);
var chunk__14056 = null;
var count__14057 = (0);
var i__14058 = (0);
while(true){
if((i__14058 < count__14057)){
var map__14065 = chunk__14056.cljs$core$IIndexed$_nth$arity$2(null,i__14058);
var map__14065__$1 = (((((!((map__14065 == null))))?(((((map__14065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14065):map__14065);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$problem);
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$arg_DASH_name);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$actual);
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$validate_DASH_fn_DASH_result);
var G__14067_14071 = problem;
var G__14067_14072__$1 = (((G__14067_14071 instanceof cljs.core.Keyword))?G__14067_14071.fqn:null);
switch (G__14067_14072__$1) {
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


var G__14074 = seq__14055;
var G__14075 = chunk__14056;
var G__14076 = count__14057;
var G__14077 = (i__14058 + (1));
seq__14055 = G__14074;
chunk__14056 = G__14075;
count__14057 = G__14076;
i__14058 = G__14077;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14055);
if(temp__5735__auto__){
var seq__14055__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14055__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__14055__$1);
var G__14078 = cljs.core.chunk_rest(seq__14055__$1);
var G__14079 = c__4556__auto__;
var G__14080 = cljs.core.count(c__4556__auto__);
var G__14081 = (0);
seq__14055 = G__14078;
chunk__14056 = G__14079;
count__14057 = G__14080;
i__14058 = G__14081;
continue;
} else {
var map__14068 = cljs.core.first(seq__14055__$1);
var map__14068__$1 = (((((!((map__14068 == null))))?(((((map__14068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14068):map__14068);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14068__$1,cljs.core.cst$kw$problem);
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14068__$1,cljs.core.cst$kw$arg_DASH_name);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14068__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14068__$1,cljs.core.cst$kw$actual);
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14068__$1,cljs.core.cst$kw$validate_DASH_fn_DASH_result);
var G__14070_14082 = problem;
var G__14070_14083__$1 = (((G__14070_14082 instanceof cljs.core.Keyword))?G__14070_14082.fqn:null);
switch (G__14070_14083__$1) {
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


var G__14085 = cljs.core.next(seq__14055__$1);
var G__14086 = null;
var G__14087 = (0);
var G__14088 = (0);
seq__14055 = G__14085;
chunk__14056 = G__14086;
count__14057 = G__14087;
i__14058 = G__14088;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__14089){
var map__14090 = p__14089;
var map__14090__$1 = (((((!((map__14090 == null))))?(((((map__14090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14090):map__14090);
var src = map__14090__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14090__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14090__$1,cljs.core.cst$kw$line);
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
var args__4742__auto__ = [];
var len__4736__auto___14099 = arguments.length;
var i__4737__auto___14100 = (0);
while(true){
if((i__4737__auto___14100 < len__4736__auto___14099)){
args__4742__auto__.push((arguments[i__4737__auto___14100]));

var G__14101 = (i__4737__auto___14100 + (1));
i__4737__auto___14100 = G__14101;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__14093){
var map__14094 = p__14093;
var map__14094__$1 = (((((!((map__14094 == null))))?(((((map__14094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14094):map__14094);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14094__$1,cljs.core.cst$kw$problems);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14094__$1,cljs.core.cst$kw$component);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14094__$1,cljs.core.cst$kw$args);
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
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"validate-args-error",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__14102__delegate = function (p__14096){
var map__14097 = p__14096;
var map__14097__$1 = (((((!((map__14097 == null))))?(((((map__14097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14097):map__14097);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.cst$kw$problems);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.cst$kw$component);
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.cst$kw$args);
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(args__$1),cljs.core.cst$kw$debug_DASH_as,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,component__$1,cljs.core.cst$kw$args,args__$1], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"re-com validation error. Look in the DevTools console.",cljs.core.cst$kw$style,re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__14102 = function (var_args){
var p__14096 = null;
if (arguments.length > 0) {
var G__14103__i = 0, G__14103__a = new Array(arguments.length -  0);
while (G__14103__i < G__14103__a.length) {G__14103__a[G__14103__i] = arguments[G__14103__i + 0]; ++G__14103__i;}
  p__14096 = new cljs.core.IndexedSeq(G__14103__a,0,null);
} 
return G__14102__delegate.call(this,p__14096);};
G__14102.cljs$lang$maxFixedArity = 0;
G__14102.cljs$lang$applyTo = (function (arglist__14104){
var p__14096 = cljs.core.seq(arglist__14104);
return G__14102__delegate(p__14096);
});
G__14102.cljs$core$IFn$_invoke$arity$variadic = G__14102__delegate;
return G__14102;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq14092){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14092));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14112 = arguments.length;
var i__4737__auto___14113 = (0);
while(true){
if((i__4737__auto___14113 < len__4736__auto___14112)){
args__4742__auto__.push((arguments[i__4737__auto___14113]));

var G__14114 = (i__4737__auto___14113 + (1));
i__4737__auto___14113 = G__14114;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__14106){
var map__14107 = p__14106;
var map__14107__$1 = (((((!((map__14107 == null))))?(((((map__14107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14107):map__14107);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107__$1,cljs.core.cst$kw$component);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107__$1,cljs.core.cst$kw$src);
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
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"stack-spy",cljs.core.cst$kw$component_DASH_did_DASH_mount,log_fn,cljs.core.cst$kw$component_DASH_did_DASH_update,log_fn,cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__14115__delegate = function (p__14109){
var map__14110 = p__14109;
var map__14110__$1 = (((((!((map__14110 == null))))?(((((map__14110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14110):map__14110);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14110__$1,cljs.core.cst$kw$component);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14110__$1,cljs.core.cst$kw$src);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,src__$1,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref_fn], null)], null)),component__$1], null);
};
var G__14115 = function (var_args){
var p__14109 = null;
if (arguments.length > 0) {
var G__14116__i = 0, G__14116__a = new Array(arguments.length -  0);
while (G__14116__i < G__14116__a.length) {G__14116__a[G__14116__i] = arguments[G__14116__i + 0]; ++G__14116__i;}
  p__14109 = new cljs.core.IndexedSeq(G__14116__a,0,null);
} 
return G__14115__delegate.call(this,p__14109);};
G__14115.cljs$lang$maxFixedArity = 0;
G__14115.cljs$lang$applyTo = (function (arglist__14117){
var p__14109 = cljs.core.seq(arglist__14117);
return G__14115__delegate(p__14109);
});
G__14115.cljs$core$IFn$_invoke$arity$variadic = G__14115__delegate;
return G__14115;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq14105){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14105));
}));

