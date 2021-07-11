// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_com.debug');
goog.require('cljs.core');
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
return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.last.call(null,clojure.string.split.call(null,component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_.call(null,args)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.call(null,args,new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__16976){
var map__16977 = p__16976;
var map__16977__$1 = (((((!((map__16977 == null))))?(((((map__16977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16977):map__16977);
var args = map__16977__$1;
var src = cljs.core.get.call(null,map__16977__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.call(null,map__16977__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null)));
}
})();
var rc_args = re_com.debug.loggable_args.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
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

var temp__5735__auto__ = cljs.core.get_in.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var user_ref_fn = temp__5735__auto__;
if(cljs.core.fn_QMARK_.call(null,user_ref_fn)){
return user_ref_fn.call(null,el);
} else {
return null;
}
} else {
return null;
}
});
var map__16979 = src;
var map__16979__$1 = (((((!((map__16979 == null))))?(((((map__16979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16979):map__16979);
var file = cljs.core.get.call(null,map__16979__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__16979__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__16981 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__16981,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__16981;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__16983 = arguments.length;
switch (G__16983) {
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
return re_com.debug.component_stack.call(null,cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not.call(null,el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.call(null,((cljs.core._EQ_.call(null,"stack-spy",component))?stack:cljs.core.conj.call(null,stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
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

var seq__16987_17011 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (p1__16986_SHARP_,p2__16985_SHARP_){
return cljs.core.assoc.call(null,p2__16985_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__16986_SHARP_ + (1)));
}),stack));
var chunk__16988_17012 = null;
var count__16989_17013 = (0);
var i__16990_17014 = (0);
while(true){
if((i__16990_17014 < count__16989_17013)){
var map__17001_17015 = cljs.core._nth.call(null,chunk__16988_17012,i__16990_17014);
var map__17001_17016__$1 = (((((!((map__17001_17015 == null))))?(((((map__17001_17015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17001_17015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17001_17015):map__17001_17015);
var i_17017 = cljs.core.get.call(null,map__17001_17016__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_17018 = cljs.core.get.call(null,map__17001_17016__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_17019 = cljs.core.get.call(null,map__17001_17016__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_17020 = cljs.core.get.call(null,map__17001_17016__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_17021 = cljs.core.get.call(null,map__17001_17016__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_17019)){
if(cljs.core.truth_(src_17020)){
var vec__17003_17022 = clojure.string.split.call(null,src_17020,/:/);
var file_17023 = cljs.core.nth.call(null,vec__17003_17022,(0),null);
var line_17024 = cljs.core.nth.call(null,vec__17003_17022,(1),null);
if(cljs.core.truth_(args_17021)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_17017),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_17019)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_17023),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_17024),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_17021,el_17018);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_17017),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_17019)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_17023),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_17024),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_17018);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_17017),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_17019)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_17021,el_17018);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_17017),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_17018);
}


var G__17025 = seq__16987_17011;
var G__17026 = chunk__16988_17012;
var G__17027 = count__16989_17013;
var G__17028 = (i__16990_17014 + (1));
seq__16987_17011 = G__17025;
chunk__16988_17012 = G__17026;
count__16989_17013 = G__17027;
i__16990_17014 = G__17028;
continue;
} else {
var temp__5735__auto___17029 = cljs.core.seq.call(null,seq__16987_17011);
if(temp__5735__auto___17029){
var seq__16987_17030__$1 = temp__5735__auto___17029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16987_17030__$1)){
var c__4556__auto___17031 = cljs.core.chunk_first.call(null,seq__16987_17030__$1);
var G__17032 = cljs.core.chunk_rest.call(null,seq__16987_17030__$1);
var G__17033 = c__4556__auto___17031;
var G__17034 = cljs.core.count.call(null,c__4556__auto___17031);
var G__17035 = (0);
seq__16987_17011 = G__17032;
chunk__16988_17012 = G__17033;
count__16989_17013 = G__17034;
i__16990_17014 = G__17035;
continue;
} else {
var map__17006_17036 = cljs.core.first.call(null,seq__16987_17030__$1);
var map__17006_17037__$1 = (((((!((map__17006_17036 == null))))?(((((map__17006_17036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17006_17036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17006_17036):map__17006_17036);
var i_17038 = cljs.core.get.call(null,map__17006_17037__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_17039 = cljs.core.get.call(null,map__17006_17037__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_17040 = cljs.core.get.call(null,map__17006_17037__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_17041 = cljs.core.get.call(null,map__17006_17037__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_17042 = cljs.core.get.call(null,map__17006_17037__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_17040)){
if(cljs.core.truth_(src_17041)){
var vec__17008_17043 = clojure.string.split.call(null,src_17041,/:/);
var file_17044 = cljs.core.nth.call(null,vec__17008_17043,(0),null);
var line_17045 = cljs.core.nth.call(null,vec__17008_17043,(1),null);
if(cljs.core.truth_(args_17042)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_17038),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_17040)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_17044),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_17045),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_17042,el_17039);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_17038),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_17040)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_17044),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_17045),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_17039);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_17038),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_17040)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_17042,el_17039);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_17038),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_17039);
}


var G__17046 = cljs.core.next.call(null,seq__16987_17030__$1);
var G__17047 = null;
var G__17048 = (0);
var G__17049 = (0);
seq__16987_17011 = G__17046;
chunk__16988_17012 = G__17047;
count__16989_17013 = G__17048;
i__16990_17014 = G__17049;
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
var seq__17050 = cljs.core.seq.call(null,problems);
var chunk__17051 = null;
var count__17052 = (0);
var i__17053 = (0);
while(true){
if((i__17053 < count__17052)){
var map__17060 = cljs.core._nth.call(null,chunk__17051,i__17053);
var map__17060__$1 = (((((!((map__17060 == null))))?(((((map__17060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17060):map__17060);
var problem = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__17062_17066 = problem;
var G__17062_17067__$1 = (((G__17062_17066 instanceof cljs.core.Keyword))?G__17062_17066.fqn:null);
switch (G__17062_17067__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__17069 = seq__17050;
var G__17070 = chunk__17051;
var G__17071 = count__17052;
var G__17072 = (i__17053 + (1));
seq__17050 = G__17069;
chunk__17051 = G__17070;
count__17052 = G__17071;
i__17053 = G__17072;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__17050);
if(temp__5735__auto__){
var seq__17050__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17050__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__17050__$1);
var G__17073 = cljs.core.chunk_rest.call(null,seq__17050__$1);
var G__17074 = c__4556__auto__;
var G__17075 = cljs.core.count.call(null,c__4556__auto__);
var G__17076 = (0);
seq__17050 = G__17073;
chunk__17051 = G__17074;
count__17052 = G__17075;
i__17053 = G__17076;
continue;
} else {
var map__17063 = cljs.core.first.call(null,seq__17050__$1);
var map__17063__$1 = (((((!((map__17063 == null))))?(((((map__17063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17063):map__17063);
var problem = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__17065_17077 = problem;
var G__17065_17078__$1 = (((G__17065_17077 instanceof cljs.core.Keyword))?G__17065_17077.fqn:null);
switch (G__17065_17078__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__17080 = cljs.core.next.call(null,seq__17050__$1);
var G__17081 = null;
var G__17082 = (0);
var G__17083 = (0);
seq__17050 = G__17080;
chunk__17051 = G__17081;
count__17052 = G__17082;
i__17053 = G__17083;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__17084){
var map__17085 = p__17084;
var map__17085__$1 = (((((!((map__17085 == null))))?(((((map__17085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17085):map__17085);
var src = map__17085__$1;
var file = cljs.core.get.call(null,map__17085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__17085__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_.call(null,re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems.call(null,problems);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,cljs.core.deref.call(null,element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17094 = arguments.length;
var i__4737__auto___17095 = (0);
while(true){
if((i__4737__auto___17095 < len__4736__auto___17094)){
args__4742__auto__.push((arguments[i__4737__auto___17095]));

var G__17096 = (i__4737__auto___17095 + (1));
i__4737__auto___17095 = G__17096;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__17088){
var map__17089 = p__17088;
var map__17089__$1 = (((((!((map__17089 == null))))?(((((map__17089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17089):map__17089);
var problems = cljs.core.get.call(null,map__17089__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.call(null,map__17089__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.call(null,map__17089__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.call(null,problems);
var internal_component = cljs.core.atom.call(null,component);
var internal_args = cljs.core.atom.call(null,args);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__17097__delegate = function (p__17091){
var map__17092 = p__17091;
var map__17092__$1 = (((((!((map__17092 == null))))?(((((map__17092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17092):map__17092);
var problems__$1 = cljs.core.get.call(null,map__17092__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.call(null,map__17092__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.call(null,map__17092__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_.call(null,internal_problems,problems__$1);

cljs.core.reset_BANG_.call(null,internal_component,component__$1);

cljs.core.reset_BANG_.call(null,internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style.call(null)], null)),re_com.debug.collision_icon], null);
};
var G__17097 = function (var_args){
var p__17091 = null;
if (arguments.length > 0) {
var G__17098__i = 0, G__17098__a = new Array(arguments.length -  0);
while (G__17098__i < G__17098__a.length) {G__17098__a[G__17098__i] = arguments[G__17098__i + 0]; ++G__17098__i;}
  p__17091 = new cljs.core.IndexedSeq(G__17098__a,0,null);
} 
return G__17097__delegate.call(this,p__17091);};
G__17097.cljs$lang$maxFixedArity = 0;
G__17097.cljs$lang$applyTo = (function (arglist__17099){
var p__17091 = cljs.core.seq(arglist__17099);
return G__17097__delegate(p__17091);
});
G__17097.cljs$core$IFn$_invoke$arity$variadic = G__17097__delegate;
return G__17097;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq17087){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17087));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17107 = arguments.length;
var i__4737__auto___17108 = (0);
while(true){
if((i__4737__auto___17108 < len__4736__auto___17107)){
args__4742__auto__.push((arguments[i__4737__auto___17108]));

var G__17109 = (i__4737__auto___17108 + (1));
i__4737__auto___17108 = G__17109;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__17101){
var map__17102 = p__17101;
var map__17102__$1 = (((((!((map__17102 == null))))?(((((map__17102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17102):map__17102);
var component = cljs.core.get.call(null,map__17102__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.call(null,map__17102__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref.call(null,element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first.call(null,el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__17110__delegate = function (p__17104){
var map__17105 = p__17104;
var map__17105__$1 = (((((!((map__17105 == null))))?(((((map__17105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17105):map__17105);
var component__$1 = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__17110 = function (var_args){
var p__17104 = null;
if (arguments.length > 0) {
var G__17111__i = 0, G__17111__a = new Array(arguments.length -  0);
while (G__17111__i < G__17111__a.length) {G__17111__a[G__17111__i] = arguments[G__17111__i + 0]; ++G__17111__i;}
  p__17104 = new cljs.core.IndexedSeq(G__17111__a,0,null);
} 
return G__17110__delegate.call(this,p__17104);};
G__17110.cljs$lang$maxFixedArity = 0;
G__17110.cljs$lang$applyTo = (function (arglist__17112){
var p__17104 = cljs.core.seq(arglist__17112);
return G__17110__delegate(p__17104);
});
G__17110.cljs$core$IFn$_invoke$arity$variadic = G__17110__delegate;
return G__17110;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq17100){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17100));
}));


//# sourceMappingURL=debug.js.map
