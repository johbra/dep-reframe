// Compiled by ClojureScript 1.10.773 {}
goog.provide('dep.views.side_nav_bar');
goog.require('cljs.core');
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
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),item,new cljs.core.Keyword(null,"class","class",-2030961996)," bg-light",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return callback_fn.call(null,item);
})], null);
});
/**
 * Komponente für das Menü am linken Rand.
 */
dep.views.side_nav_bar.sidebar = (function dep$views$side_nav_bar$sidebar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-wrapper","div#sidebar-wrapper",1043226224),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"bg-light",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"240px",new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Planung",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),new cljs.core.Keyword(null,"hauptseite","hauptseite",-227667578)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Dozenten",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Module",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),new cljs.core.Keyword(null,"module","module",1424618191)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Manipel",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),new cljs.core.Keyword(null,"manipels","manipels",626202456)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Studienrichtungen",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.menu_item,"Datensicherung",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-item-selected","menu-item-selected",1061049935),new cljs.core.Keyword(null,"datensicherung","datensicherung",308712383)], null));
})], null)], null)], null)], null);
});
/**
 * Das in der Sidebar platzierte Menü.
 */
dep.views.side_nav_bar.menu_actions = (function dep$views$side_nav_bar$menu_actions(selected){
if(cljs.core.truth_(selected)){
return selected.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.dozenten.dozenten], null),new cljs.core.Keyword(null,"manipels","manipels",626202456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.manipels.manipels], null),new cljs.core.Keyword(null,"module","module",1424618191),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.module.module], null),new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.studienrichtungen.studienrichtungen], null),new cljs.core.Keyword(null,"datensicherung","datensicherung",308712383),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.datensicherung.datensicherung], null),new cljs.core.Keyword(null,"hauptseite","hauptseite",-227667578),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.planung.planung], null)], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.planung.planung], null);
}
});
dep.views.side_nav_bar.select_box = (function dep$views$side_nav_bar$select_box(lable,values,selected_value,callback_fn){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),lable], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),(function (){var iter__4529__auto__ = (function dep$views$side_nav_bar$select_box_$_iter__18707(s__18708){
return (new cljs.core.LazySeq(null,(function (){
var s__18708__$1 = s__18708;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18708__$1);
if(temp__5735__auto__){
var s__18708__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18708__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18708__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18710 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18709 = (0);
while(true){
if((i__18709 < size__4528__auto__)){
var v = cljs.core._nth.call(null,c__4527__auto__,i__18709);
cljs.core.chunk_append.call(null,b__18710,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),new cljs.core.Keyword(null,"label","label",1718410804),v], null));

var G__18711 = (i__18709 + (1));
i__18709 = G__18711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18710),dep$views$side_nav_bar$select_box_$_iter__18707.call(null,cljs.core.chunk_rest.call(null,s__18708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18710),null);
}
} else {
var v = cljs.core.first.call(null,s__18708__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),new cljs.core.Keyword(null,"label","label",1718410804),v], null),dep$views$side_nav_bar$select_box_$_iter__18707.call(null,cljs.core.rest.call(null,s__18708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,values);
})(),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),selected_value], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),callback_fn], null)], null)], null);
});
/**
 * Die Auswahlboxen für Geschäftsjahr und Quartal und die Planungsschaltfläche.
 */
dep.views.side_nav_bar.geschaeftjahr_quartal_form = (function dep$views$side_nav_bar$geschaeftjahr_quartal_form(){
var jahre = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jahre","jahre",2053865477)], null)));
var quartale = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quartale","quartale",-602108134)], null)));
var quartal = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quartal","quartal",-467113586)], null)));
var geschaeftsjahr = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"bg-light border-right",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.views.side_nav_bar.select_box.call(null,"Gesch\u00E4ftsjahr:",jahre,geschaeftsjahr,(function (p1__18712_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__18712_SHARP_)], null));
})),dep.views.side_nav_bar.select_box.call(null,"Quartal:",quartale,dep.model.quartal.quartal__GT_string.call(null,quartal),(function (p1__18713_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quartal","quartal",-467113586),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__18713_SHARP_)], null));
})),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.planung.plane_quartal.call(null);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Plane Quartal"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.views.planung.neues_geschaeftjahr.call(null);
}),new cljs.core.Keyword(null,"label","label",1718410804),"neues G-Jahr anlegen"], null)], null)], null);
});

//# sourceMappingURL=side_nav_bar.js.map
