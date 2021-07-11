// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if((typeof cljs !== 'undefined') && (typeof cljs.stacktrace !== 'undefined') && (typeof cljs.stacktrace.parse_stacktrace !== 'undefined')){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),(function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__29544 = cljs.core.reduce.call(null,(function (p__29550,p__29551){
var vec__29552 = p__29550;
var pre = cljs.core.nth.call(null,vec__29552,(0),null);
var post = cljs.core.nth.call(null,vec__29552,(1),null);
var vec__29555 = p__29551;
var x = cljs.core.nth.call(null,vec__29555,(0),null);
var i = cljs.core.nth.call(null,vec__29555,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__29544,(0),null);
var vec__29547 = cljs.core.nth.call(null,vec__29544,(1),null);
var line = cljs.core.nth.call(null,vec__29547,(0),null);
var column = cljs.core.nth.call(null,vec__29547,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29558 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__29558,"(","");
} else {
return G__29558;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__29559 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__29559,")","");
} else {
return G__29559;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__29560 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__29560,")","");
} else {
return G__29560;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__29561,file,p__29562){
var map__29563 = p__29561;
var map__29563__$1 = (((((!((map__29563 == null))))?(((((map__29563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29563):map__29563);
var repl_env = map__29563__$1;
var host = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__29564 = p__29562;
var map__29564__$1 = (((((!((map__29564 == null))))?(((((map__29564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29564):map__29564);
var opts = map__29564__$1;
var asset_path = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = host_port;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = asset_path;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),"/"].join('')),"");
} else {
var temp__5733__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var asset_root = temp__5733__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__29567 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__29567,(0),null);
var flc = cljs.core.nth.call(null,vec__29567,(1),null);
var vec__29570 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__29570,(0),null);
var line = cljs.core.nth.call(null,vec__29570,(1),null);
var column = cljs.core.nth.call(null,vec__29570,(2),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = file;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = function$;
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = line;
if(cljs.core.truth_(and__4115__auto____$2)){
return column;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__29575_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__29575_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__29574_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_.call(null,p1__29574_SHARP_,"    at eval")));
}),cljs.core.drop_while.call(null,(function (p1__29573_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__29573_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__29576 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__29576,(0),null);
var flc = cljs.core.nth.call(null,vec__29576,(1),null);
var vec__29579 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__29579,(0),null);
var line = cljs.core.nth.call(null,vec__29579,(1),null);
var column = cljs.core.nth.call(null,vec__29579,(2),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = file;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = function$;
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = line;
if(cljs.core.truth_(and__4115__auto____$2)){
return column;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__29584_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__29584_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__29583_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_.call(null,p1__29583_SHARP_,"eval code")));
}),cljs.core.drop_while.call(null,(function (p1__29582_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__29582_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__29585 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__29585,(0),null);
var flc = cljs.core.nth.call(null,vec__29585,(1),null);
var vec__29588 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__29588,(0),null);
var line = cljs.core.nth.call(null,vec__29588,(1),null);
var column = cljs.core.nth.call(null,vec__29588,(2),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = file;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = function$;
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = line;
if(cljs.core.truth_(and__4115__auto____$2)){
return column;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__29593_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__29593_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__29592_SHARP_){
return cljs.core._EQ_.call(null,p1__29592_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__29591_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__29591_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__29594){
var map__29595 = p__29594;
var map__29595__$1 = (((((!((map__29595 == null))))?(((((map__29595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29595):map__29595);
var opts = map__29595__$1;
var output_dir = cljs.core.get.call(null,map__29595__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return (!(clojure.string.blank_QMARK_.call(null,x)));
} else {
return and__4115__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__29604 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__29604,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__29604,(1),null);
var vec__29607 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__29607,(0),null);
var line_part = cljs.core.nth.call(null,vec__29607,(1),null);
var col_part = cljs.core.nth.call(null,vec__29607,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__29610 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__29610,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__29610;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__4126__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,(function (p1__29611_SHARP_){
return (p1__29611_SHARP_ <= (column__$1 - (1)));
}),cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});
var adjust = (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__29612_SHARP_,p2__29613_SHARP_){
return p1__29612_SHARP_.call(null,p2__29613_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5733__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__5733__auto__)){
var columns = temp__5733__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__29614,sms,opts){
var map__29615 = p__29614;
var map__29615__$1 = (((((!((map__29615 == null))))?(((((map__29615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29615):map__29615);
var function$ = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__29617 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29617,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29617,(1),null);
var call = cljs.core.nth.call(null,vec__29617,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?["NO_SOURCE_FILE",(cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null)].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__29623 = arguments.length;
switch (G__29623) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__29620_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__29620_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,(function (p1__29621_SHARP_){
return cljs.core.dissoc.call(null,p1__29621_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
}),mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
}));

(cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3);

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__29626 = arguments.length;
switch (G__29626) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29627_29644 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29628_29645 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29629_29646 = true;
var _STAR_print_fn_STAR__temp_val__29630_29647 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29629_29646);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29630_29647);

try{var seq__29631_29648 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__29632_29649 = null;
var count__29633_29650 = (0);
var i__29634_29651 = (0);
while(true){
if((i__29634_29651 < count__29633_29650)){
var map__29639_29652 = cljs.core._nth.call(null,chunk__29632_29649,i__29634_29651);
var map__29639_29653__$1 = (((((!((map__29639_29652 == null))))?(((((map__29639_29652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29639_29652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29639_29652):map__29639_29652);
var function_29654 = cljs.core.get.call(null,map__29639_29653__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_29655 = cljs.core.get.call(null,map__29639_29653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_29656 = cljs.core.get.call(null,map__29639_29653__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29657 = cljs.core.get.call(null,map__29639_29653__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[(cljs.core.truth_(function_29654)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_29654)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_29655),(cljs.core.truth_(line_29656)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29656)].join(''):null),(cljs.core.truth_(column_29657)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29657)].join(''):null),")"].join(''));


var G__29658 = seq__29631_29648;
var G__29659 = chunk__29632_29649;
var G__29660 = count__29633_29650;
var G__29661 = (i__29634_29651 + (1));
seq__29631_29648 = G__29658;
chunk__29632_29649 = G__29659;
count__29633_29650 = G__29660;
i__29634_29651 = G__29661;
continue;
} else {
var temp__5735__auto___29662 = cljs.core.seq.call(null,seq__29631_29648);
if(temp__5735__auto___29662){
var seq__29631_29663__$1 = temp__5735__auto___29662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29631_29663__$1)){
var c__4556__auto___29664 = cljs.core.chunk_first.call(null,seq__29631_29663__$1);
var G__29665 = cljs.core.chunk_rest.call(null,seq__29631_29663__$1);
var G__29666 = c__4556__auto___29664;
var G__29667 = cljs.core.count.call(null,c__4556__auto___29664);
var G__29668 = (0);
seq__29631_29648 = G__29665;
chunk__29632_29649 = G__29666;
count__29633_29650 = G__29667;
i__29634_29651 = G__29668;
continue;
} else {
var map__29641_29669 = cljs.core.first.call(null,seq__29631_29663__$1);
var map__29641_29670__$1 = (((((!((map__29641_29669 == null))))?(((((map__29641_29669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29641_29669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641_29669):map__29641_29669);
var function_29671 = cljs.core.get.call(null,map__29641_29670__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_29672 = cljs.core.get.call(null,map__29641_29670__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_29673 = cljs.core.get.call(null,map__29641_29670__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29674 = cljs.core.get.call(null,map__29641_29670__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[(cljs.core.truth_(function_29671)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_29671)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_29672),(cljs.core.truth_(line_29673)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29673)].join(''):null),(cljs.core.truth_(column_29674)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29674)].join(''):null),")"].join(''));


var G__29675 = cljs.core.next.call(null,seq__29631_29663__$1);
var G__29676 = null;
var G__29677 = (0);
var G__29678 = (0);
seq__29631_29648 = G__29675;
chunk__29632_29649 = G__29676;
count__29633_29650 = G__29677;
i__29634_29651 = G__29678;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29628_29645);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29627_29644);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=stacktrace.js.map
