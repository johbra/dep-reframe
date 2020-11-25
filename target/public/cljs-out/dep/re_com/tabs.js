// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21213 = arguments.length;
var i__4737__auto___21214 = (0);
while(true){
if((i__4737__auto___21214 < len__4736__auto___21213)){
args__4742__auto__.push((arguments[i__4737__auto___21214]));

var G__21215 = (i__4737__auto___21214 + (1));
i__4737__auto___21214 = G__21215;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21206){
var map__21207 = p__21206;
var map__21207__$1 = (((((!((map__21207 == null))))?(((((map__21207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21207):map__21207);
var args = map__21207__$1;
var model = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__21207__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__21204_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__21204_SHARP_));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__21204#] (= current (id-fn p1__21204#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs nav nav-tabs noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),attr),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__21209(s__21210){
return (new cljs.core.LazySeq(null,(function (){
var s__21210__$1 = s__21210;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21210__$1);
if(temp__5735__auto__){
var s__21210__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21210__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21210__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21212 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21211 = (0);
while(true){
if((i__21211 < size__4528__auto__)){
var t = cljs.core._nth.call(null,c__4527__auto__,i__21211);
cljs.core.chunk_append.call(null,b__21212,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__21211,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__21212,s__21210__$2,temp__5735__auto__,current,tabs__$1,_,map__21207,map__21207__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
on_change.call(null,id);

return null;
});})(i__21211,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__21212,s__21210__$2,temp__5735__auto__,current,tabs__$1,_,map__21207,map__21207__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})());

var G__21216 = (i__21211 + (1));
i__21211 = G__21216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21212),re_com$tabs$iter__21209.call(null,cljs.core.chunk_rest.call(null,s__21210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21212),null);
}
} else {
var t = cljs.core.first.call(null,s__21210__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__21210__$2,temp__5735__auto__,current,tabs__$1,_,map__21207,map__21207__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__21210__$2,temp__5735__auto__,current,tabs__$1,_,map__21207,map__21207__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__21209.call(null,cljs.core.rest.call(null,s__21210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tabs__$1);
})()], null);
}));

(re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq21205){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21205));
}));

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21226 = arguments.length;
var i__4737__auto___21227 = (0);
while(true){
if((i__4737__auto___21227 < len__4736__auto___21226)){
args__4742__auto__.push((arguments[i__4737__auto___21227]));

var G__21228 = (i__4737__auto___21227 + (1));
i__4737__auto___21227 = G__21228;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21219){
var map__21220 = p__21219;
var map__21220__$1 = (((((!((map__21220 == null))))?(((((map__21220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21220):map__21220);
var on_change = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var id_fn = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.call(null,map__21220__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__21217_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__21217_SHARP_));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__21217#] (= current (id-fn p1__21217#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),attr),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__21222(s__21223){
return (new cljs.core.LazySeq(null,(function (){
var s__21223__$1 = s__21223;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21223__$1);
if(temp__5735__auto__){
var s__21223__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21223__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21223__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21225 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21224 = (0);
while(true){
if((i__21224 < size__4528__auto__)){
var t = cljs.core._nth.call(null,c__4527__auto__,i__21224);
cljs.core.chunk_append.call(null,b__21225,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__21224,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__21225,s__21223__$2,temp__5735__auto__,current,tabs__$1,_,map__21220,map__21220__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__21224,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__21225,s__21223__$2,temp__5735__auto__,current,tabs__$1,_,map__21220,map__21220__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})());

var G__21229 = (i__21224 + (1));
i__21224 = G__21229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21225),re_com$tabs$iter__21222.call(null,cljs.core.chunk_rest.call(null,s__21223__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21225),null);
}
} else {
var t = cljs.core.first.call(null,s__21223__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__21223__$2,temp__5735__auto__,current,tabs__$1,_,map__21220,map__21220__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__21223__$2,temp__5735__auto__,current,tabs__$1,_,map__21220,map__21220__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__21222.call(null,cljs.core.rest.call(null,s__21223__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tabs__$1);
})()], null);
}));

(re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq21218){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21218));
}));

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21234 = arguments.length;
var i__4737__auto___21235 = (0);
while(true){
if((i__4737__auto___21235 < len__4736__auto___21234)){
args__4742__auto__.push((arguments[i__4737__auto___21235]));

var G__21236 = (i__4737__auto___21235 + (1));
i__4737__auto___21235 = G__21236;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21231){
var map__21232 = p__21231;
var map__21232__$1 = (((((!((map__21232 == null))))?(((((map__21232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21232):map__21232);
var args = map__21232__$1;
var model = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__21232__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
}));

(re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq21230){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21230));
}));

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21241 = arguments.length;
var i__4737__auto___21242 = (0);
while(true){
if((i__4737__auto___21242 < len__4736__auto___21241)){
args__4742__auto__.push((arguments[i__4737__auto___21242]));

var G__21243 = (i__4737__auto___21242 + (1));
i__4737__auto___21242 = G__21243;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21238){
var map__21239 = p__21238;
var map__21239__$1 = (((((!((map__21239 == null))))?(((((map__21239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21239):map__21239);
var args = map__21239__$1;
var model = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
}));

(re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq21237){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21237));
}));

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21253 = arguments.length;
var i__4737__auto___21254 = (0);
while(true){
if((i__4737__auto___21254 < len__4736__auto___21253)){
args__4742__auto__.push((arguments[i__4737__auto___21254]));

var G__21255 = (i__4737__auto___21254 + (1));
i__4737__auto___21254 = G__21255;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21246){
var map__21247 = p__21246;
var map__21247__$1 = (((((!((map__21247 == null))))?(((((map__21247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21247):map__21247);
var on_change = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var id_fn = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.call(null,map__21247__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__21244_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__21244_SHARP_));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__21244#] (= current (id-fn p1__21244#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),attr),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__21249(s__21250){
return (new cljs.core.LazySeq(null,(function (){
var s__21250__$1 = s__21250;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21250__$1);
if(temp__5735__auto__){
var s__21250__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21250__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21250__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21252 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21251 = (0);
while(true){
if((i__21251 < size__4528__auto__)){
var t = cljs.core._nth.call(null,c__4527__auto__,i__21251);
cljs.core.chunk_append.call(null,b__21252,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__21251,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__21252,s__21250__$2,temp__5735__auto__,current,tabs__$1,_,map__21247,map__21247__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__21251,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__21252,s__21250__$2,temp__5735__auto__,current,tabs__$1,_,map__21247,map__21247__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__21256 = (i__21251 + (1));
i__21251 = G__21256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21252),re_com$tabs$iter__21249.call(null,cljs.core.chunk_rest.call(null,s__21250__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21252),null);
}
} else {
var t = cljs.core.first.call(null,s__21250__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__21250__$2,temp__5735__auto__,current,tabs__$1,_,map__21247,map__21247__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__21250__$2,temp__5735__auto__,current,tabs__$1,_,map__21247,map__21247__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__21249.call(null,cljs.core.rest.call(null,s__21250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tabs__$1);
})()], null);
}));

(re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq21245){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21245));
}));

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21261 = arguments.length;
var i__4737__auto___21262 = (0);
while(true){
if((i__4737__auto___21262 < len__4736__auto___21261)){
args__4742__auto__.push((arguments[i__4737__auto___21262]));

var G__21263 = (i__4737__auto___21262 + (1));
i__4737__auto___21262 = G__21263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21258){
var map__21259 = p__21258;
var map__21259__$1 = (((((!((map__21259 == null))))?(((((map__21259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21259):map__21259);
var args = map__21259__$1;
var model = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
}));

(re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq21257){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21257));
}));

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21268 = arguments.length;
var i__4737__auto___21269 = (0);
while(true){
if((i__4737__auto___21269 < len__4736__auto___21268)){
args__4742__auto__.push((arguments[i__4737__auto___21269]));

var G__21270 = (i__4737__auto___21269 + (1));
i__4737__auto___21269 = G__21270;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21265){
var map__21266 = p__21265;
var map__21266__$1 = (((((!((map__21266 == null))))?(((((map__21266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21266):map__21266);
var args = map__21266__$1;
var model = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs"))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
}));

(re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq21264){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21264));
}));


//# sourceMappingURL=tabs.js.map
