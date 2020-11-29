// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_com.datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('re_com.validate');
goog.require('cljs_time.predicates');
goog.require('cljs_time.format');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.popover');
re_com.datepicker.month_format = cljs_time.format.formatter.call(null,"MMMM yyyy");
re_com.datepicker.week_format = cljs_time.format.formatter.call(null,"ww");
re_com.datepicker.date_format = cljs_time.format.formatter.call(null,"yyyy MMM dd");
re_com.datepicker.iso8601__GT_date = (function re_com$datepicker$iso8601__GT_date(iso8601){
if(cljs.core.seq.call(null,iso8601)){
return cljs_time.format.parse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date","basic-date",1566551506)),iso8601);
} else {
return null;
}
});
re_com.datepicker.month_label = (function re_com$datepicker$month_label(date){
return cljs_time.format.unparse.call(null,re_com.datepicker.month_format,date);
});
re_com.datepicker.dec_month = (function re_com$datepicker$dec_month(date){
return cljs_time.core.minus.call(null,date,cljs_time.core.months.call(null,(1)));
});
re_com.datepicker.inc_month = (function re_com$datepicker$inc_month(date){
return cljs_time.core.plus.call(null,date,cljs_time.core.months.call(null,(1)));
});
re_com.datepicker.inc_date = (function re_com$datepicker$inc_date(date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.days.call(null,n));
});
/**
 * If date fails pred, subtract period until true, otherwise answer date
 */
re_com.datepicker.previous = (function re_com$datepicker$previous(var_args){
var G__15751 = arguments.length;
switch (G__15751) {
case 1:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return re_com.datepicker.previous.call(null,pred,re_com.util.now__GT_utc.call(null));
}));

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2 = (function (pred,date){
return re_com.datepicker.previous.call(null,pred,date,cljs_time.core.days.call(null,(1)));
}));

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3 = (function (pred,date,period){
while(true){
if(cljs.core.truth_(pred.call(null,date))){
return date;
} else {
var G__15753 = pred;
var G__15754 = cljs_time.core.minus.call(null,date,period);
var G__15755 = period;
pred = G__15753;
date = G__15754;
period = G__15755;
continue;
}
break;
}
}));

(re_com.datepicker.previous.cljs$lang$maxFixedArity = 3);

re_com.datepicker._EQ_date = (function re_com$datepicker$_EQ_date(date1,date2){
return ((cljs.core._EQ_.call(null,cljs_time.core.year.call(null,date1),cljs_time.core.year.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.month.call(null,date1),cljs_time.core.month.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.day.call(null,date1),cljs_time.core.day.call(null,date2))));
});
re_com.datepicker._LT__EQ_date = (function re_com$datepicker$_LT__EQ_date(date1,date2){
var or__4126__auto__ = re_com.datepicker._EQ_date.call(null,date1,date2);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs_time.core.before_QMARK_.call(null,date1,date2);
}
});
re_com.datepicker._GT__EQ_date = (function re_com$datepicker$_GT__EQ_date(date1,date2){
var or__4126__auto__ = re_com.datepicker._EQ_date.call(null,date1,date2);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs_time.core.after_QMARK_.call(null,date1,date2);
}
});
re_com.datepicker.days_vector = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Mo","Mo",706762113),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"M",new cljs.core.Keyword(null,"name","name",1843675177),"MON"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Tu","Tu",-1088052995),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"TUE"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"We","We",-705480743),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"W",new cljs.core.Keyword(null,"name","name",1843675177),"WED"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Th","Th",1409372402),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"THU"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Fr","Fr",1051514106),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"F",new cljs.core.Keyword(null,"name","name",1843675177),"FRI"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Sa","Sa",1909936819),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SAT"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Su","Su",1604604633),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SUN"], null)], null);
re_com.datepicker.rotate = (function re_com$datepicker$rotate(n,coll){
var c = cljs.core.count.call(null,coll);
return cljs.core.take.call(null,c,cljs.core.drop.call(null,cljs.core.mod.call(null,n,c),cljs.core.cycle.call(null,coll)));
});
re_com.datepicker.is_day_pred = (function re_com$datepicker$is_day_pred(d){
return (function (p1__15756_SHARP_){
return cljs.core._EQ_.call(null,cljs_time.core.day_of_week.call(null,p1__15756_SHARP_),(d + (1)));
});
});
re_com.datepicker.main_div_with = (function re_com$datepicker$main_div_with(table_div,hide_border_QMARK_,class$,style,attr){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-wrapper",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"radius","radius",-2073122258),"4px",new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK_)?"none":null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker datepicker noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"position","position",-2011731912),"static"], null),style)], null),attr),table_div], null)], null)], null)], null);
});
/**
 * Answer 2 x rows showing month with nav buttons and days NOTE: not internationalized
 */
re_com.datepicker.table_thead = (function re_com$datepicker$table_thead(display_month,p__15757){
var map__15758 = p__15757;
var map__15758__$1 = (((((!((map__15758 == null))))?(((((map__15758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15758):map__15758);
var show_weeks_QMARK_ = cljs.core.get.call(null,map__15758__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var minimum = cljs.core.get.call(null,map__15758__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__15758__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var start_of_week = cljs.core.get.call(null,map__15758__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824));
var prev_date = re_com.datepicker.dec_month.call(null,cljs.core.deref.call(null,display_month));
var minimum__$1 = re_com.util.deref_or_value.call(null,minimum);
var maximum__$1 = re_com.util.deref_or_value.call(null,maximum);
var prev_enabled_QMARK_ = (cljs.core.truth_(minimum__$1)?cljs_time.core.after_QMARK_.call(null,prev_date,re_com.datepicker.dec_month.call(null,minimum__$1)):true);
var next_date = re_com.datepicker.inc_month.call(null,cljs.core.deref.call(null,display_month));
var next_enabled_QMARK_ = (cljs.core.truth_(maximum__$1)?cljs_time.core.before_QMARK_.call(null,next_date,maximum__$1):true);
var template_row = (cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.conj.call(null,template_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["prev ",(cljs.core.truth_(prev_enabled_QMARK_)?"available selectable":"disabled")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(prev_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,display_month,prev_date);
} else {
}

return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-chevron-left","i.zmdi.zmdi-chevron-left",-1877271880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"col-span","col-span",-232603210),"5"], null),re_com.datepicker.month_label.call(null,cljs.core.deref.call(null,display_month))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["next ",(cljs.core.truth_(next_enabled_QMARK_)?"available selectable":"disabled")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(next_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,display_month,next_date);
} else {
}

return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-chevron-right","i.zmdi.zmdi-chevron-right",1358259812),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)),cljs.core.conj.call(null,template_row,(function (){var iter__4529__auto__ = (function re_com$datepicker$table_thead_$_iter__15760(s__15761){
return (new cljs.core.LazySeq(null,(function (){
var s__15761__$1 = s__15761;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__15761__$1);
if(temp__5735__auto__){
var s__15761__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15761__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15761__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15763 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15762 = (0);
while(true){
if((i__15762 < size__4528__auto__)){
var day = cljs.core._nth.call(null,c__4527__auto__,i__15762);
cljs.core.chunk_append.call(null,b__15763,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)));

var G__15764 = (i__15762 + (1));
i__15762 = G__15764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15763),re_com$datepicker$table_thead_$_iter__15760.call(null,cljs.core.chunk_rest.call(null,s__15761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15763),null);
}
} else {
var day = cljs.core.first.call(null,s__15761__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)),re_com$datepicker$table_thead_$_iter__15760.call(null,cljs.core.rest.call(null,s__15761__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,re_com.datepicker.rotate.call(null,start_of_week,re_com.datepicker.days_vector));
})())], null);
});
re_com.datepicker.selection_changed = (function re_com$datepicker$selection_changed(selection,change_callback){
return change_callback.call(null,selection);
});
re_com.datepicker.table_td = (function re_com$datepicker$table_td(date,focus_month,selected,today,p__15765,disabled_QMARK_,on_change){
var map__15766 = p__15765;
var map__15766__$1 = (((((!((map__15766 == null))))?(((((map__15766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15766):map__15766);
var attributes = map__15766__$1;
var minimum = cljs.core.get.call(null,map__15766__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__15766__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var minimum__$1 = re_com.util.deref_or_value.call(null,minimum);
var maximum__$1 = re_com.util.deref_or_value.call(null,maximum);
var enabled_min = (cljs.core.truth_(minimum__$1)?re_com.datepicker._GT__EQ_date.call(null,date,minimum__$1):true);
var enabled_max = (cljs.core.truth_(maximum__$1)?re_com.datepicker._LT__EQ_date.call(null,date,maximum__$1):true);
var enabled_day = (function (){var and__4115__auto__ = enabled_min;
if(cljs.core.truth_(and__4115__auto__)){
return enabled_max;
} else {
return and__4115__auto__;
}
})();
var disabled_day_QMARK_ = (cljs.core.truth_(enabled_day)?cljs.core.not.call(null,new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes).call(null,date)):true);
var classes = (cljs.core.truth_(disabled_QMARK_)?"off":((disabled_day_QMARK_)?"off":((cljs.core._EQ_.call(null,focus_month,cljs_time.core.month.call(null,date)))?"available":"available off"
)));
var classes__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = selected;
if(cljs.core.truth_(and__4115__auto__)){
return re_com.datepicker._EQ_date.call(null,selected,date);
} else {
return and__4115__auto__;
}
})())?[classes," active start-date end-date"].join(''):(cljs.core.truth_((function (){var and__4115__auto__ = today;
if(cljs.core.truth_(and__4115__auto__)){
return re_com.datepicker._EQ_date.call(null,date,today);
} else {
return and__4115__auto__;
}
})())?[classes," today"].join(''):classes
));
var on_click = (function (){
if(cljs.core.truth_((function (){var or__4126__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return disabled_day_QMARK_;
}
})())){
return null;
} else {
return re_com.datepicker.selection_changed.call(null,date,on_change);
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),classes__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
on_click.call(null);

return null;
})], null),cljs_time.core.day.call(null,date)], null);
});
re_com.datepicker.week_td = (function re_com$datepicker$week_td(date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"week"], null),cljs_time.format.unparse.call(null,re_com.datepicker.week_format,date)], null);
});
/**
 * Return 7 columns of date cells from date inclusive
 */
re_com.datepicker.table_tr = (function re_com$datepicker$table_tr(date,focus_month,selected,attributes,disabled_QMARK_,on_change){
var table_row = (cljs.core.truth_(new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221).cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),re_com.datepicker.week_td.call(null,date)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
var row_dates = cljs.core.map.call(null,(function (p1__15768_SHARP_){
return re_com.datepicker.inc_date.call(null,date,p1__15768_SHARP_);
}),cljs.core.range.call(null,(7)));
var today = (cljs.core.truth_(new cljs.core.Keyword(null,"show-today?","show-today?",513056415).cljs$core$IFn$_invoke$arity$1(attributes))?re_com.util.now__GT_utc.call(null):null);
return cljs.core.into.call(null,table_row,cljs.core.map.call(null,(function (p1__15769_SHARP_){
return re_com.datepicker.table_td.call(null,p1__15769_SHARP_,focus_month,selected,today,attributes,disabled_QMARK_,on_change);
}),row_dates));
});
/**
 * Return matrix of 6 rows x 7 cols table cells representing 41 days from start-date inclusive
 */
re_com.datepicker.table_tbody = (function re_com$datepicker$table_tbody(display_month,selected,attributes,disabled_QMARK_,on_change){
var start_of_week = new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824).cljs$core$IFn$_invoke$arity$1(attributes);
var current_start = re_com.datepicker.previous.call(null,re_com.datepicker.is_day_pred.call(null,start_of_week),display_month);
var focus_month = cljs_time.core.month.call(null,display_month);
var row_start_dates = cljs.core.map.call(null,(function (p1__15770_SHARP_){
return re_com.datepicker.inc_date.call(null,current_start,((7) * p1__15770_SHARP_));
}),cljs.core.range.call(null,(6)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.call(null,(function (p1__15771_SHARP_){
return re_com.datepicker.table_tr.call(null,p1__15771_SHARP_,focus_month,selected,attributes,disabled_QMARK_,on_change);
}),row_start_dates));
});
/**
 * Augment passed attributes with extra info/defaults
 */
re_com.datepicker.configure = (function re_com$datepicker$configure(attributes){
var selectable_fn = ((cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes)))?new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes):cljs.core.constantly.call(null,true));
return cljs.core.merge.call(null,attributes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),selectable_fn], null));
});
re_com.datepicker.datepicker_args_desc = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the selected date. If provided, should pass pred ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":selectable-fn"], null),". If not provided, (now->utc) will be used and the returned date will be a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"goog.date.UtcDateTime"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when a new selection is made. Returned type is the same as model (unless model is nil, in which case it will be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"goog.date.UtcDateTime"], null),")"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the user can't select dates but can navigate"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"(fn [date] true)",new cljs.core.Keyword(null,"type","type",1174270348),"pred",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Predicate is passed a date. If it answers false, day will be shown disabled and can't be selected."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, week numbers are shown to the left"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-today?","show-today?",513056415),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, today's date is highlighted"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation before this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation after this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(6),new cljs.core.Keyword(null,"type","type",1174270348),"int",new cljs.core.Keyword(null,"description","description",-1428560544),"first day of week (Monday = 0 ... Sunday = 6)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the border is not displayed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer border div, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the outer border div, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," allowed (applies to the outer border div, not the wrapping div)"], null)], null)], null);
re_com.datepicker.datepicker = (function re_com$datepicker$datepicker(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15779 = arguments.length;
var i__4737__auto___15780 = (0);
while(true){
if((i__4737__auto___15780 < len__4736__auto___15779)){
args__4742__auto__.push((arguments[i__4737__auto___15780]));

var G__15781 = (i__4737__auto___15780 + (1));
i__4737__auto___15780 = G__15781;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic = (function (p__15773){
var map__15774 = p__15773;
var map__15774__$1 = (((((!((map__15774 == null))))?(((((map__15774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15774):map__15774);
var args = map__15774__$1;
var model = cljs.core.get.call(null,map__15774__$1,new cljs.core.Keyword(null,"model","model",331153215));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_args_desc),args,"datepicker"))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-args-desc args \"datepicker\")"));
}

var external_model = reagent.core.atom.call(null,re_com.util.deref_or_value.call(null,model));
var internal_model = reagent.core.atom.call(null,cljs.core.deref.call(null,external_model));
var display_month = reagent.core.atom.call(null,cljs_time.core.first_day_of_the_month.call(null,(function (){var or__4126__auto__ = cljs.core.deref.call(null,internal_model);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return re_com.util.now__GT_utc.call(null);
}
})()));
return (function() { 
var re_com$datepicker$datepicker_component__delegate = function (p__15776){
var map__15777 = p__15776;
var map__15777__$1 = (((((!((map__15777 == null))))?(((((map__15777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15777):map__15777);
var args__$1 = map__15777__$1;
var model__$1 = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var start_of_week = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),(6));
var hide_border_QMARK_ = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var class$ = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_args_desc),args__$1,"datepicker"))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-args-desc args \"datepicker\")"));
}

var latest_ext_model = re_com.util.deref_or_value.call(null,model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var props_with_defaults = cljs.core.merge.call(null,args__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),start_of_week], null));
var configuration = re_com.datepicker.configure.call(null,props_with_defaults);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_model),latest_ext_model)){
cljs.core.reset_BANG_.call(null,external_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,internal_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,display_month,cljs_time.core.first_day_of_the_month.call(null,(function (){var or__4126__auto__ = cljs.core.deref.call(null,internal_model);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return re_com.util.now__GT_utc.call(null);
}
})()));
} else {
}

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.main_div_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-condensed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_thead,display_month,configuration], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_tbody,cljs.core.deref.call(null,display_month),cljs.core.deref.call(null,internal_model),configuration,disabled_QMARK___$1,on_change], null)], null),hide_border_QMARK_,class$,style,attr], null);
};
var re_com$datepicker$datepicker_component = function (var_args){
var p__15776 = null;
if (arguments.length > 0) {
var G__15782__i = 0, G__15782__a = new Array(arguments.length -  0);
while (G__15782__i < G__15782__a.length) {G__15782__a[G__15782__i] = arguments[G__15782__i + 0]; ++G__15782__i;}
  p__15776 = new cljs.core.IndexedSeq(G__15782__a,0,null);
} 
return re_com$datepicker$datepicker_component__delegate.call(this,p__15776);};
re_com$datepicker$datepicker_component.cljs$lang$maxFixedArity = 0;
re_com$datepicker$datepicker_component.cljs$lang$applyTo = (function (arglist__15783){
var p__15776 = cljs.core.seq(arglist__15783);
return re_com$datepicker$datepicker_component__delegate(p__15776);
});
re_com$datepicker$datepicker_component.cljs$core$IFn$_invoke$arity$variadic = re_com$datepicker$datepicker_component__delegate;
return re_com$datepicker$datepicker_component;
})()
;
}));

(re_com.datepicker.datepicker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.datepicker.cljs$lang$applyTo = (function (seq15772){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15772));
}));

/**
 * Provide clickable field with current date label and dropdown button e.g. [ 2014 Sep 17 | # ]
 */
re_com.datepicker.anchor_button = (function re_com$datepicker$anchor_button(shown_QMARK_,model,format,placeholder){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-dropdown-anchor input-group display-flex noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.call(null,shown_QMARK_,cljs.core.not);

return null;
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10em",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"10em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control dropdown-button"], null),((re_com.validate.date_like_QMARK_.call(null,re_com.util.deref_or_value.call(null,model)))?cljs_time.format.unparse.call(null,((cljs.core.seq.call(null,format))?cljs_time.format.formatter.call(null,format):re_com.datepicker.date_format),re_com.util.deref_or_value.call(null,model)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),placeholder], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-button.activator.input-group-addon","span.dropdown-button.activator.input-group-addon",-1049661492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 0px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-apps","i.zmdi.zmdi-apps",-641069407),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)], null)], null)], null);
});
re_com.datepicker.datepicker_dropdown_args_desc = cljs.core.conj.call(null,re_com.datepicker.datepicker_args_desc,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"yyyy MMM dd",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] a representation of a date format. See cljs_time.format"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] placeholder text for when a date is not selected."], null));
re_com.datepicker.datepicker_dropdown = (function re_com$datepicker$datepicker_dropdown(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15791 = arguments.length;
var i__4737__auto___15792 = (0);
while(true){
if((i__4737__auto___15792 < len__4736__auto___15791)){
args__4742__auto__.push((arguments[i__4737__auto___15792]));

var G__15793 = (i__4737__auto___15792 + (1));
i__4737__auto___15792 = G__15793;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__15785){
var map__15786 = p__15785;
var map__15786__$1 = (((((!((map__15786 == null))))?(((((map__15786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15786):map__15786);
var args = map__15786__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_dropdown_args_desc),args,"datepicker-dropdown"))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-dropdown-args-desc args \"datepicker-dropdown\")"));
}

var shown_QMARK_ = reagent.core.atom.call(null,false);
var cancel_popover = (function (){
return cljs.core.reset_BANG_.call(null,shown_QMARK_,false);
});
var position = new cljs.core.Keyword(null,"below-left","below-left",1233934732);
return (function() { 
var G__15794__delegate = function (p__15788){
var map__15789 = p__15788;
var map__15789__$1 = (((((!((map__15789 == null))))?(((((map__15789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15789):map__15789);
var passthrough_args = map__15789__$1;
var model = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"model","model",331153215));
var show_weeks_QMARK_ = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var on_change = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var format = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var no_clip_QMARK_ = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true);
var placeholder = cljs.core.get.call(null,map__15789__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var collapse_on_select = (function (new_model){
cljs.core.reset_BANG_.call(null,shown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return on_change.call(null,new_model);
} else {
return null;
}
});
var passthrough_args__$1 = cljs.core.dissoc.call(null,passthrough_args,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var passthrough_args__$2 = cljs.core.flatten.call(null,cljs.core.vec.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true], null),cljs.core.assoc.call(null,passthrough_args__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),collapse_on_select))));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-datepicker-dropdown-wrapper",new cljs.core.Keyword(null,"showing?","showing?",2094921488),shown_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.anchor_button,shown_QMARK_,model,format,placeholder], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),(cljs.core.truth_(show_weeks_QMARK_)?(43):(44)),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),no_clip_QMARK_,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(0),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(0),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(3),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),cancel_popover,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.datepicker], null),passthrough_args__$2)], null)], null);
};
var G__15794 = function (var_args){
var p__15788 = null;
if (arguments.length > 0) {
var G__15795__i = 0, G__15795__a = new Array(arguments.length -  0);
while (G__15795__i < G__15795__a.length) {G__15795__a[G__15795__i] = arguments[G__15795__i + 0]; ++G__15795__i;}
  p__15788 = new cljs.core.IndexedSeq(G__15795__a,0,null);
} 
return G__15794__delegate.call(this,p__15788);};
G__15794.cljs$lang$maxFixedArity = 0;
G__15794.cljs$lang$applyTo = (function (arglist__15796){
var p__15788 = cljs.core.seq(arglist__15796);
return G__15794__delegate(p__15788);
});
G__15794.cljs$core$IFn$_invoke$arity$variadic = G__15794__delegate;
return G__15794;
})()
;
}));

(re_com.datepicker.datepicker_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.datepicker_dropdown.cljs$lang$applyTo = (function (seq15784){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15784));
}));


//# sourceMappingURL=datepicker.js.map
