// Compiled by ClojureScript 1.10.773 {}
goog.provide('medley.core');
goog.require('cljs.core');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__25936 = arguments.length;
switch (G__25936) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__25938 = null;
var G__25938__0 = (function (){
return rf.call(null);
});
var G__25938__1 = (function (result){
return rf.call(null,result);
});
var G__25938__2 = (function (result,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,rf.call(null,result,x));
} else {
return result;
}
});
G__25938 = function(result,x){
switch(arguments.length){
case 0:
return G__25938__0.call(this);
case 1:
return G__25938__1.call(this,result);
case 2:
return G__25938__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25938.cljs$core$IFn$_invoke$arity$0 = G__25938__0;
G__25938.cljs$core$IFn$_invoke$arity$1 = G__25938__1;
G__25938.cljs$core$IFn$_invoke$arity$2 = G__25938__2;
return G__25938;
})()
});
}));

(medley.core.find_first.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.call(null,(function (_,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.reduced.call(null,x);
} else {
return null;
}
}),null,coll);
}));

(medley.core.find_first.cljs$lang$maxFixedArity = 2);

/**
 * Dissociate a value in a nested associative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(var_args){
var G__25943 = arguments.length;
switch (G__25943) {
case 2:
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___25951 = arguments.length;
var i__4737__auto___25952 = (0);
while(true){
if((i__4737__auto___25952 < len__4736__auto___25951)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25952]));

var G__25953 = (i__4737__auto___25952 + (1));
i__4737__auto___25952 = G__25953;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
var temp__5733__auto__ = cljs.core.seq.call(null,ks);
if(temp__5733__auto__){
var vec__25944 = temp__5733__auto__;
var seq__25945 = cljs.core.seq.call(null,vec__25944);
var first__25946 = cljs.core.first.call(null,seq__25945);
var seq__25945__$1 = cljs.core.next.call(null,seq__25945);
var k = first__25946;
var ks__$1 = seq__25945__$1;
if(cljs.core.seq.call(null,ks__$1)){
var v = medley.core.dissoc_in.call(null,cljs.core.get.call(null,m,k),ks__$1);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
}));

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,kss){
while(true){
var temp__5733__auto__ = cljs.core.seq.call(null,kss);
if(temp__5733__auto__){
var vec__25947 = temp__5733__auto__;
var seq__25948 = cljs.core.seq.call(null,vec__25947);
var first__25949 = cljs.core.first.call(null,seq__25948);
var seq__25948__$1 = cljs.core.next.call(null,seq__25948);
var ks_SINGLEQUOTE_ = first__25949;
var kss__$1 = seq__25948__$1;
var G__25954 = medley.core.dissoc_in.call(null,m,ks);
var G__25955 = ks_SINGLEQUOTE_;
var G__25956 = kss__$1;
m = G__25954;
ks = G__25955;
kss = G__25956;
continue;
} else {
return medley.core.dissoc_in.call(null,m,ks);
}
break;
}
}));

/** @this {Function} */
(medley.core.dissoc_in.cljs$lang$applyTo = (function (seq25940){
var G__25941 = cljs.core.first.call(null,seq25940);
var seq25940__$1 = cljs.core.next.call(null,seq25940);
var G__25942 = cljs.core.first.call(null,seq25940__$1);
var seq25940__$2 = cljs.core.next.call(null,seq25940__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25941,G__25942,seq25940__$2);
}));

(medley.core.dissoc_in.cljs$lang$maxFixedArity = (2));

/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__25962 = arguments.length;
switch (G__25962) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___25968 = arguments.length;
var i__4737__auto___25969 = (0);
while(true){
if((i__4737__auto___25969 < len__4736__auto___25968)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25969]));

var G__25970 = (i__4737__auto___25969 + (1));
i__4737__auto___25969 = G__25970;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}));

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.call(null,(function (m__$1,p__25963){
var vec__25964 = p__25963;
var k__$1 = cljs.core.nth.call(null,vec__25964,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__25964,(1),null);
return medley.core.assoc_some.call(null,m__$1,k__$1,v__$1);
}),medley.core.assoc_some.call(null,m,k,v),cljs.core.partition.call(null,(2),kvs));
}));

/** @this {Function} */
(medley.core.assoc_some.cljs$lang$applyTo = (function (seq25958){
var G__25959 = cljs.core.first.call(null,seq25958);
var seq25958__$1 = cljs.core.next.call(null,seq25958);
var G__25960 = cljs.core.first.call(null,seq25958__$1);
var seq25958__$2 = cljs.core.next.call(null,seq25958__$1);
var G__25961 = cljs.core.first.call(null,seq25958__$2);
var seq25958__$3 = cljs.core.next.call(null,seq25958__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25959,G__25960,G__25961,seq25958__$3);
}));

(medley.core.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Updates a value in a map given a key and a function, if and only if the key
 *   exists in the map. See: `clojure.core/update`.
 */
medley.core.update_existing = (function medley$core$update_existing(var_args){
var G__25979 = arguments.length;
switch (G__25979) {
case 3:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___25981 = arguments.length;
var i__4737__auto___25982 = (0);
while(true){
if((i__4737__auto___25982 < len__4736__auto___25981)){
args_arr__4757__auto__.push((arguments[i__4737__auto___25982]));

var G__25983 = (i__4737__auto___25982 + (1));
i__4737__auto___25982 = G__25983;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((6)),(0),null));
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4758__auto__);

}
});

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
var temp__5733__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.val.call(null,kv)));
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x){
var temp__5733__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.val.call(null,kv),x));
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x,y){
var temp__5733__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.val.call(null,kv),x,y));
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,x,y,z){
var temp__5733__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.val.call(null,kv),x,y,z));
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x,y,z,more){
var temp__5733__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.val.call(null,kv),x,y,z,more));
} else {
return m;
}
}));

/** @this {Function} */
(medley.core.update_existing.cljs$lang$applyTo = (function (seq25972){
var G__25973 = cljs.core.first.call(null,seq25972);
var seq25972__$1 = cljs.core.next.call(null,seq25972);
var G__25974 = cljs.core.first.call(null,seq25972__$1);
var seq25972__$2 = cljs.core.next.call(null,seq25972__$1);
var G__25975 = cljs.core.first.call(null,seq25972__$2);
var seq25972__$3 = cljs.core.next.call(null,seq25972__$2);
var G__25976 = cljs.core.first.call(null,seq25972__$3);
var seq25972__$4 = cljs.core.next.call(null,seq25972__$3);
var G__25977 = cljs.core.first.call(null,seq25972__$4);
var seq25972__$5 = cljs.core.next.call(null,seq25972__$4);
var G__25978 = cljs.core.first.call(null,seq25972__$5);
var seq25972__$6 = cljs.core.next.call(null,seq25972__$5);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25973,G__25974,G__25975,G__25976,G__25977,G__25978,seq25972__$6);
}));

(medley.core.update_existing.cljs$lang$maxFixedArity = (6));

/**
 * Updates a value in a nested associative structure, if and only if the key
 *   path exists. See: `clojure.core/update-in`.
 */
medley.core.update_existing_in = (function medley$core$update_existing_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25991 = arguments.length;
var i__4737__auto___25992 = (0);
while(true){
if((i__4737__auto___25992 < len__4736__auto___25991)){
args__4742__auto__.push((arguments[i__4737__auto___25992]));

var G__25993 = (i__4737__auto___25992 + (1));
i__4737__auto___25992 = G__25993;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var up = (function medley$core$up(m__$1,ks__$1,f__$1,args__$1){
var vec__25988 = ks__$1;
var seq__25989 = cljs.core.seq.call(null,vec__25988);
var first__25990 = cljs.core.first.call(null,seq__25989);
var seq__25989__$1 = cljs.core.next.call(null,seq__25989);
var k = first__25990;
var ks__$2 = seq__25989__$1;
var temp__5733__auto__ = cljs.core.find.call(null,m__$1,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kv = temp__5733__auto__;
if(ks__$2){
return cljs.core.assoc.call(null,m__$1,k,medley$core$up.call(null,cljs.core.val.call(null,kv),ks__$2,f__$1,args__$1));
} else {
return cljs.core.assoc.call(null,m__$1,k,cljs.core.apply.call(null,f__$1,cljs.core.val.call(null,kv),args__$1));
}
} else {
return m__$1;
}
});
return up.call(null,m,ks,f,args);
}));

(medley.core.update_existing_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(medley.core.update_existing_in.cljs$lang$applyTo = (function (seq25984){
var G__25985 = cljs.core.first.call(null,seq25984);
var seq25984__$1 = cljs.core.next.call(null,seq25984);
var G__25986 = cljs.core.first.call(null,seq25984__$1);
var seq25984__$2 = cljs.core.next.call(null,seq25984__$1);
var G__25987 = cljs.core.first.call(null,seq25984__$2);
var seq25984__$3 = cljs.core.next.call(null,seq25984__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25985,G__25986,G__25987,seq25984__$3);
}));

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
var coll_SINGLEQUOTE_ = ((cljs.core.record_QMARK_.call(null,coll))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,coll):coll);
if(medley.core.editable_QMARK_.call(null,coll_SINGLEQUOTE_)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll_SINGLEQUOTE_)),coll_SINGLEQUOTE_));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll_SINGLEQUOTE_),coll_SINGLEQUOTE_);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Maps a function over the key/value pairs of an associative collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
var vec__25995 = f.call(null,k,v);
var k__$1 = cljs.core.nth.call(null,vec__25995,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__25995,(1),null);
return xf.call(null,m,k__$1,v__$1);
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of one or more associative collections.
 *   The function should accept number-of-colls arguments. Any keys which are not
 *   shared among all collections are ignored.
 */
medley.core.map_vals = (function medley$core$map_vals(var_args){
var G__26004 = arguments.length;
switch (G__26004) {
case 2:
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26006 = arguments.length;
var i__4737__auto___26007 = (0);
while(true){
if((i__4737__auto___26007 < len__4736__auto___26006)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26007]));

var G__26008 = (i__4737__auto___26007 + (1));
i__4737__auto___26007 = G__26008;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
}));

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (f,c1,colls){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.every_QMARK_.call(null,(function (p1__25998_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__25998_SHARP_,k);
}),colls)){
return xf.call(null,m,k,cljs.core.apply.call(null,f,v,cljs.core.map.call(null,(function (p1__25999_SHARP_){
return cljs.core.get.call(null,p1__25999_SHARP_,k);
}),colls)));
} else {
return m;
}
});
}),c1);
}));

/** @this {Function} */
(medley.core.map_vals.cljs$lang$applyTo = (function (seq26001){
var G__26002 = cljs.core.first.call(null,seq26001);
var seq26001__$1 = cljs.core.next.call(null,seq26001);
var G__26003 = cljs.core.first.call(null,seq26001__$1);
var seq26001__$2 = cljs.core.next.call(null,seq26001__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26002,G__26003,seq26001__$2);
}));

(medley.core.map_vals.cljs$lang$maxFixedArity = (2));

/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new key.
 */
medley.core.map_kv_keys = (function medley$core$map_kv_keys(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k,v),v);
});
}),coll);
});
/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new value.
 */
medley.core.map_kv_vals = (function medley$core$map_kv_vals(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,k,v));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__26010 = arguments.length;
switch (G__26010) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,medley.core.queue.call(null),coll);
}));

(medley.core.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return ((x === true) || (x === false));
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var G__26016 = arguments.length;
switch (G__26016) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26018 = arguments.length;
var i__4737__auto___26019 = (0);
while(true){
if((i__4737__auto___26019 < len__4736__auto___26018)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26019]));

var G__26020 = (i__4737__auto___26019 + (1));
i__4737__auto___26019 = G__26020;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) < (0))){
return a;
} else {
return b;
}
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.least,medley.core.least.call(null,a,b),more);
}));

/** @this {Function} */
(medley.core.least.cljs$lang$applyTo = (function (seq26013){
var G__26014 = cljs.core.first.call(null,seq26013);
var seq26013__$1 = cljs.core.next.call(null,seq26013);
var G__26015 = cljs.core.first.call(null,seq26013__$1);
var seq26013__$2 = cljs.core.next.call(null,seq26013__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26014,G__26015,seq26013__$2);
}));

(medley.core.least.cljs$lang$maxFixedArity = (2));

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__26025 = arguments.length;
switch (G__26025) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26027 = arguments.length;
var i__4737__auto___26028 = (0);
while(true){
if((i__4737__auto___26028 < len__4736__auto___26027)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26028]));

var G__26029 = (i__4737__auto___26028 + (1));
i__4737__auto___26028 = G__26029;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) > (0))){
return a;
} else {
return b;
}
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.greatest,medley.core.greatest.call(null,a,b),more);
}));

/** @this {Function} */
(medley.core.greatest.cljs$lang$applyTo = (function (seq26022){
var G__26023 = cljs.core.first.call(null,seq26022);
var seq26022__$1 = cljs.core.next.call(null,seq26022);
var G__26024 = cljs.core.first.call(null,seq26022__$1);
var seq26022__$2 = cljs.core.next.call(null,seq26022__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26023,G__26024,seq26022__$2);
}));

(medley.core.greatest.cljs$lang$maxFixedArity = (2));

/**
 * Lazily concatenates a collection of collections into a flat sequence.
 */
medley.core.join = (function medley$core$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = cljs.core.seq.call(null,colls);
if(temp__5735__auto__){
var s = temp__5735__auto__;
return cljs.core.concat.call(null,cljs.core.first.call(null,s),medley.core.join.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
});
/**
 * Recursively merges maps together. If all the maps supplied have nested maps
 *   under the same keys, these nested maps are merged. Otherwise the value is
 *   overwritten, as in `clojure.core/merge`.
 */
medley.core.deep_merge = (function medley$core$deep_merge(var_args){
var G__26034 = arguments.length;
switch (G__26034) {
case 0:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26036 = arguments.length;
var i__4737__auto___26037 = (0);
while(true){
if((i__4737__auto___26037 < len__4736__auto___26036)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26037]));

var G__26038 = (i__4737__auto___26037 + (1));
i__4737__auto___26037 = G__26038;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_((function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return b;
}
})())){
var merge_entry = (function medley$core$merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v_SINGLEQUOTE_ = cljs.core.val.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.assoc.call(null,m,k,(function (){var v = cljs.core.get.call(null,m,k);
if(((cljs.core.map_QMARK_.call(null,v)) && (cljs.core.map_QMARK_.call(null,v_SINGLEQUOTE_)))){
return medley.core.deep_merge.call(null,v,v_SINGLEQUOTE_);
} else {
return v_SINGLEQUOTE_;
}
})());
} else {
return cljs.core.assoc.call(null,m,k,v_SINGLEQUOTE_);
}
});
return cljs.core.reduce.call(null,merge_entry,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,b));
} else {
return null;
}
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.deep_merge,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cons.call(null,b,more));
}));

/** @this {Function} */
(medley.core.deep_merge.cljs$lang$applyTo = (function (seq26031){
var G__26032 = cljs.core.first.call(null,seq26031);
var seq26031__$1 = cljs.core.next.call(null,seq26031);
var G__26033 = cljs.core.first.call(null,seq26031__$1);
var seq26031__$2 = cljs.core.next.call(null,seq26031__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26032,G__26033,seq26031__$2);
}));

(medley.core.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__26043 = arguments.length;
switch (G__26043) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26045 = arguments.length;
var i__4737__auto___26046 = (0);
while(true){
if((i__4737__auto___26046 < len__4736__auto___26045)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26046]));

var G__26047 = (i__4737__auto___26046 + (1));
i__4737__auto___26046 = G__26047;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
}));

(medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.call(null,f,a,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
}));

/** @this {Function} */
(medley.core.mapply.cljs$lang$applyTo = (function (seq26040){
var G__26041 = cljs.core.first.call(null,seq26040);
var seq26040__$1 = cljs.core.next.call(null,seq26040);
var G__26042 = cljs.core.first.call(null,seq26040__$1);
var seq26040__$2 = cljs.core.next.call(null,seq26040__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26041,G__26042,seq26040__$2);
}));

(medley.core.mapply.cljs$lang$maxFixedArity = (2));

/**
 * Returns a map of the elements of coll keyed by the result of f on each
 *   element. The value at each key will be the last element in coll associated
 *   with that key. This function is similar to `clojure.core/group-by`, except
 *   that elements with the same key are overwritten, rather than added to a
 *   vector of values.
 */
medley.core.index_by = (function medley$core$index_by(f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__26048_SHARP_,p2__26049_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__26048_SHARP_,f.call(null,p2__26049_SHARP_),p2__26049_SHARP_);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__26054 = arguments.length;
switch (G__26054) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26056 = arguments.length;
var i__4737__auto___26057 = (0);
while(true){
if((i__4737__auto___26057 < len__4736__auto___26056)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26057]));

var G__26058 = (i__4737__auto___26057 + (1));
i__4737__auto___26057 = G__26058;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if(((s1) && (s2))){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),medley.core.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
return ((s1) || (s2));
}
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
if(cljs.core.seq.call(null,ss)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,medley.core.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
}));

/** @this {Function} */
(medley.core.interleave_all.cljs$lang$applyTo = (function (seq26051){
var G__26052 = cljs.core.first.call(null,seq26051);
var seq26051__$1 = cljs.core.next.call(null,seq26051);
var G__26053 = cljs.core.first.call(null,seq26051__$1);
var seq26051__$2 = cljs.core.next.call(null,seq26051__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26052,G__26053,seq26051__$2);
}));

(medley.core.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__26060 = arguments.length;
switch (G__26060) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__26066 = null;
var G__26066__0 = (function (){
return rf.call(null);
});
var G__26066__1 = (function (result){
return rf.call(null,result);
});
var G__26066__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__26066 = function(result,x){
switch(arguments.length){
case 0:
return G__26066__0.call(this);
case 1:
return G__26066__1.call(this,result);
case 2:
return G__26066__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26066.cljs$core$IFn$_invoke$arity$0 = G__26066__0;
G__26066.cljs$core$IFn$_invoke$arity$1 = G__26066__1;
G__26066.cljs$core$IFn$_invoke$arity$2 = G__26066__2;
return G__26066;
})()
});
}));

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__26061,seen__$1){
while(true){
var vec__26062 = p__26061;
var x = cljs.core.nth.call(null,vec__26062,(0),null);
var xs__$1 = vec__26062;
var temp__5735__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5735__auto__){
var s = temp__5735__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__26067 = cljs.core.rest.call(null,s);
var G__26068 = seen__$1;
p__26061 = G__26067;
seen__$1 = G__26068;
continue;
} else {
return cljs.core.cons.call(null,x,medley$core$step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,fx)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
}));

(medley.core.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__26070 = arguments.length;
switch (G__26070) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return (function() {
var G__26072 = null;
var G__26072__0 = (function (){
return rf.call(null);
});
var G__26072__1 = (function (result){
return rf.call(null,result);
});
var G__26072__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__26072 = function(result,x){
switch(arguments.length){
case 0:
return G__26072__0.call(this);
case 1:
return G__26072__1.call(this,result);
case 2:
return G__26072__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26072.cljs$core$IFn$_invoke$arity$0 = G__26072__0;
G__26072.cljs$core$IFn$_invoke$arity$1 = G__26072__1;
G__26072.cljs$core$IFn$_invoke$arity$2 = G__26072__2;
return G__26072;
})()
});
}));

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,medley.core.dedupe_by.call(null,f),coll);
}));

(medley.core.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__26074 = arguments.length;
switch (G__26074) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__26076 = null;
var G__26076__0 = (function (){
return rf.call(null);
});
var G__26076__1 = (function (result){
return rf.call(null,result);
});
var G__26076__2 = (function (result,x){
var result__$1 = rf.call(null,result,x);
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__26076 = function(result,x){
switch(arguments.length){
case 0:
return G__26076__0.call(this);
case 1:
return G__26076__1.call(this,result);
case 2:
return G__26076__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26076.cljs$core$IFn$_invoke$arity$0 = G__26076__0;
G__26076.cljs$core$IFn$_invoke$arity$1 = G__26076__1;
G__26076.cljs$core$IFn$_invoke$arity$2 = G__26076__2;
return G__26076;
})()
});
}));

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = cljs.core.seq.call(null,coll);
if(temp__5735__auto__){
var s = temp__5735__auto__;
var x = cljs.core.first.call(null,s);
return cljs.core.cons.call(null,x,((cljs.core.not.call(null,pred.call(null,x)))?medley.core.take_upto.call(null,pred,cljs.core.rest.call(null,s)):null));
} else {
return null;
}
}),null,null));
}));

(medley.core.take_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var G__26078 = arguments.length;
switch (G__26078) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_.call(null,true);
return (function() {
var G__26080 = null;
var G__26080__0 = (function (){
return rf.call(null);
});
var G__26080__1 = (function (result){
return rf.call(null,result);
});
var G__26080__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref.call(null,dv))){
if(cljs.core.truth_(pred.call(null,x))){
cljs.core.vreset_BANG_.call(null,dv,false);
} else {
}

return result;
} else {
return rf.call(null,result,x);
}
});
G__26080 = function(result,x){
switch(arguments.length){
case 0:
return G__26080__0.call(this);
case 1:
return G__26080__1.call(this,result);
case 2:
return G__26080__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26080.cljs$core$IFn$_invoke$arity$0 = G__26080__0;
G__26080.cljs$core$IFn$_invoke$arity$1 = G__26080__1;
G__26080.cljs$core$IFn$_invoke$arity$2 = G__26080__2;
return G__26080;
})()
});
}));

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll));
}));

(medley.core.drop_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__26082 = arguments.length;
switch (G__26082) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return (function() {
var G__26084 = null;
var G__26084__0 = (function (){
return rf.call(null);
});
var G__26084__1 = (function (result){
return rf.call(null,result);
});
var G__26084__2 = (function (result,x){
return rf.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._vreset_BANG_.call(null,i,(cljs.core._deref.call(null,i) + (1))),x], null));
});
G__26084 = function(result,x){
switch(arguments.length){
case 0:
return G__26084__0.call(this);
case 1:
return G__26084__1.call(this,result);
case 2:
return G__26084__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26084.cljs$core$IFn$_invoke$arity$0 = G__26084__0;
G__26084.cljs$core$IFn$_invoke$arity$1 = G__26084__1;
G__26084.cljs$core$IFn$_invoke$arity$2 = G__26084__2;
return G__26084;
})()
});
}));

(medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
}));

(medley.core.indexed.cljs$lang$maxFixedArity = 1);

/**
 * Returns a lazy sequence of the items in coll, with a new item inserted at
 *   the supplied index, followed by all subsequent items of the collection. Runs
 *   in O(n) time.
 */
medley.core.insert_nth = (function medley$core$insert_nth(var_args){
var G__26086 = arguments.length;
switch (G__26086) {
case 2:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_.call(null,(index + (1)));
return (function() {
var G__26088 = null;
var G__26088__0 = (function (){
return rf.call(null);
});
var G__26088__1 = (function (result){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,idx),(1))){
return rf.call(null,rf.call(null,result,item));
} else {
return rf.call(null,result);
}
});
var G__26088__2 = (function (result,x){
if((cljs.core._vreset_BANG_.call(null,idx,(cljs.core._deref.call(null,idx) - (1))) === (0))){
return rf.call(null,rf.call(null,result,item),x);
} else {
return rf.call(null,result,x);
}
});
G__26088 = function(result,x){
switch(arguments.length){
case 0:
return G__26088__0.call(this);
case 1:
return G__26088__1.call(this,result);
case 2:
return G__26088__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26088.cljs$core$IFn$_invoke$arity$0 = G__26088__0;
G__26088.cljs$core$IFn$_invoke$arity$1 = G__26088__1;
G__26088.cljs$core$IFn$_invoke$arity$2 = G__26088__2;
return G__26088;
})()
});
}));

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons.call(null,item,coll);
} else {
if(cljs.core.seq.call(null,coll)){
return cljs.core.cons.call(null,cljs.core.first.call(null,coll),medley.core.insert_nth.call(null,(index - (1)),item,cljs.core.rest.call(null,coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.insert_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll, except for the item at the
 *   supplied index. Runs in O(n) time.
 */
medley.core.remove_nth = (function medley$core$remove_nth(var_args){
var G__26090 = arguments.length;
switch (G__26090) {
case 1:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1 = (function (index){
return (function (rf){
var idx = cljs.core.volatile_BANG_.call(null,(index + (1)));
return (function() {
var G__26092 = null;
var G__26092__0 = (function (){
return rf.call(null);
});
var G__26092__1 = (function (result){
return rf.call(null,result);
});
var G__26092__2 = (function (result,x){
if((cljs.core._vreset_BANG_.call(null,idx,(cljs.core._deref.call(null,idx) - (1))) === (0))){
return result;
} else {
return rf.call(null,result,x);
}
});
G__26092 = function(result,x){
switch(arguments.length){
case 0:
return G__26092__0.call(this);
case 1:
return G__26092__1.call(this,result);
case 2:
return G__26092__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26092.cljs$core$IFn$_invoke$arity$0 = G__26092__0;
G__26092.cljs$core$IFn$_invoke$arity$1 = G__26092__1;
G__26092.cljs$core$IFn$_invoke$arity$2 = G__26092__2;
return G__26092;
})()
});
}));

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.rest.call(null,coll);
} else {
if(cljs.core.seq.call(null,coll)){
return cljs.core.cons.call(null,cljs.core.first.call(null,coll),medley.core.remove_nth.call(null,(index - (1)),cljs.core.rest.call(null,coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.remove_nth.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll, with a new item replacing the
 *   item at the supplied index. Runs in O(n) time.
 */
medley.core.replace_nth = (function medley$core$replace_nth(var_args){
var G__26094 = arguments.length;
switch (G__26094) {
case 2:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_.call(null,(index + (1)));
return (function() {
var G__26096 = null;
var G__26096__0 = (function (){
return rf.call(null);
});
var G__26096__1 = (function (result){
return rf.call(null,result);
});
var G__26096__2 = (function (result,x){
if((cljs.core._vreset_BANG_.call(null,idx,(cljs.core._deref.call(null,idx) - (1))) === (0))){
return rf.call(null,result,item);
} else {
return rf.call(null,result,x);
}
});
G__26096 = function(result,x){
switch(arguments.length){
case 0:
return G__26096__0.call(this);
case 1:
return G__26096__1.call(this,result);
case 2:
return G__26096__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26096.cljs$core$IFn$_invoke$arity$0 = G__26096__0;
G__26096.cljs$core$IFn$_invoke$arity$1 = G__26096__1;
G__26096.cljs$core$IFn$_invoke$arity$2 = G__26096__2;
return G__26096;
})()
});
}));

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons.call(null,item,cljs.core.rest.call(null,coll));
} else {
if(cljs.core.seq.call(null,coll)){
return cljs.core.cons.call(null,cljs.core.first.call(null,coll),medley.core.replace_nth.call(null,(index - (1)),item,cljs.core.rest.call(null,coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.replace_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var G__26102 = arguments.length;
switch (G__26102) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26104 = arguments.length;
var i__4737__auto___26105 = (0);
while(true){
if((i__4737__auto___26105 < len__4736__auto___26104)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26105]));

var G__26106 = (i__4737__auto___26105 + (1));
i__4737__auto___26105 = G__26106;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref.call(null,atom);
cljs.core.reset_BANG_.call(null,atom,f.call(null,value));

return value;
}));

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.call(null,atom,(function (p1__26097_SHARP_){
return cljs.core.apply.call(null,f,p1__26097_SHARP_,args);
}));
}));

/** @this {Function} */
(medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq26099){
var G__26100 = cljs.core.first.call(null,seq26099);
var seq26099__$1 = cljs.core.next.call(null,seq26099);
var G__26101 = cljs.core.first.call(null,seq26099__$1);
var seq26099__$2 = cljs.core.next.call(null,seq26099__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26100,G__26101,seq26099__$2);
}));

(medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.call(null,atom,cljs.core.constantly.call(null,newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message.call(null,ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-cause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause.call(null,ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid.call(null,s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid.call(null);
});

//# sourceMappingURL=core.js.map
