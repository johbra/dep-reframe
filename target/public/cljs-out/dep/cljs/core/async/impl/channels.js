// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215 = (function (val,meta19216){
this.val = val;
this.meta19216 = meta19216;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19217,meta19216__$1){
var self__ = this;
var _19217__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215(self__.val,meta19216__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19217){
var self__ = this;
var _19217__$1 = this;
return self__.meta19216;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta19216], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels19215");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels19215");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels19215.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels19215 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels19215(val__$1,meta19216){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215(val__$1,meta19216));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels19215(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_19218 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_19218(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_19230 = self__.puts.pop();
if((putter_19230 == null)){
} else {
var put_handler_19231 = putter_19230.handler;
var val_19232 = putter_19230.val;
if(put_handler_19231.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_19233 = put_handler_19231.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_19233,put_handler_19231,val_19232,putter_19230,this$__$1){
return (function (){
return (put_cb_19233.cljs$core$IFn$_invoke$arity$1 ? put_cb_19233.cljs$core$IFn$_invoke$arity$1(true) : put_cb_19233.call(null,true));
});})(put_cb_19233,put_handler_19231,val_19232,putter_19230,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = self__.buf;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4149__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__19234 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__19234;
continue;
} else {
var G__19235 = takers;
takers = G__19235;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__19219_19236 = cljs.core.seq(take_cbs);
var chunk__19220_19237 = null;
var count__19221_19238 = (0);
var i__19222_19239 = (0);
while(true){
if((i__19222_19239 < count__19221_19238)){
var f_19240 = chunk__19220_19237.cljs$core$IIndexed$_nth$arity$2(null,i__19222_19239);
cljs.core.async.impl.dispatch.run(f_19240);


var G__19241 = seq__19219_19236;
var G__19242 = chunk__19220_19237;
var G__19243 = count__19221_19238;
var G__19244 = (i__19222_19239 + (1));
seq__19219_19236 = G__19241;
chunk__19220_19237 = G__19242;
count__19221_19238 = G__19243;
i__19222_19239 = G__19244;
continue;
} else {
var temp__5753__auto___19245 = cljs.core.seq(seq__19219_19236);
if(temp__5753__auto___19245){
var seq__19219_19246__$1 = temp__5753__auto___19245;
if(cljs.core.chunked_seq_QMARK_(seq__19219_19246__$1)){
var c__4591__auto___19247 = cljs.core.chunk_first(seq__19219_19246__$1);
var G__19248 = cljs.core.chunk_rest(seq__19219_19246__$1);
var G__19249 = c__4591__auto___19247;
var G__19250 = cljs.core.count(c__4591__auto___19247);
var G__19251 = (0);
seq__19219_19236 = G__19248;
chunk__19220_19237 = G__19249;
count__19221_19238 = G__19250;
i__19222_19239 = G__19251;
continue;
} else {
var f_19252 = cljs.core.first(seq__19219_19246__$1);
cljs.core.async.impl.dispatch.run(f_19252);


var G__19253 = cljs.core.next(seq__19219_19246__$1);
var G__19254 = null;
var G__19255 = (0);
var G__19256 = (0);
seq__19219_19236 = G__19253;
chunk__19220_19237 = G__19254;
count__19221_19238 = G__19255;
i__19222_19239 = G__19256;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5751__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5751__auto__)){
var take_cb = temp__5751__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__19223 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))?put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))){
var G__19257 = cbs__$1;
cbs = G__19257;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19223,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19223,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__19226_19258 = cljs.core.seq(cbs);
var chunk__19227_19259 = null;
var count__19228_19260 = (0);
var i__19229_19261 = (0);
while(true){
if((i__19229_19261 < count__19228_19260)){
var cb_19262 = chunk__19227_19259.cljs$core$IIndexed$_nth$arity$2(null,i__19229_19261);
cljs.core.async.impl.dispatch.run(((function (seq__19226_19258,chunk__19227_19259,count__19228_19260,i__19229_19261,cb_19262,val,vec__19223,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return (cb_19262.cljs$core$IFn$_invoke$arity$1 ? cb_19262.cljs$core$IFn$_invoke$arity$1(true) : cb_19262.call(null,true));
});})(seq__19226_19258,chunk__19227_19259,count__19228_19260,i__19229_19261,cb_19262,val,vec__19223,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__19263 = seq__19226_19258;
var G__19264 = chunk__19227_19259;
var G__19265 = count__19228_19260;
var G__19266 = (i__19229_19261 + (1));
seq__19226_19258 = G__19263;
chunk__19227_19259 = G__19264;
count__19228_19260 = G__19265;
i__19229_19261 = G__19266;
continue;
} else {
var temp__5753__auto___19267 = cljs.core.seq(seq__19226_19258);
if(temp__5753__auto___19267){
var seq__19226_19268__$1 = temp__5753__auto___19267;
if(cljs.core.chunked_seq_QMARK_(seq__19226_19268__$1)){
var c__4591__auto___19269 = cljs.core.chunk_first(seq__19226_19268__$1);
var G__19270 = cljs.core.chunk_rest(seq__19226_19268__$1);
var G__19271 = c__4591__auto___19269;
var G__19272 = cljs.core.count(c__4591__auto___19269);
var G__19273 = (0);
seq__19226_19258 = G__19270;
chunk__19227_19259 = G__19271;
count__19228_19260 = G__19272;
i__19229_19261 = G__19273;
continue;
} else {
var cb_19274 = cljs.core.first(seq__19226_19268__$1);
cljs.core.async.impl.dispatch.run(((function (seq__19226_19258,chunk__19227_19259,count__19228_19260,i__19229_19261,cb_19274,seq__19226_19268__$1,temp__5753__auto___19267,val,vec__19223,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return (cb_19274.cljs$core$IFn$_invoke$arity$1 ? cb_19274.cljs$core$IFn$_invoke$arity$1(true) : cb_19274.call(null,true));
});})(seq__19226_19258,chunk__19227_19259,count__19228_19260,i__19229_19261,cb_19274,seq__19226_19268__$1,temp__5753__auto___19267,val,vec__19223,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__19275 = cljs.core.next(seq__19226_19268__$1);
var G__19276 = null;
var G__19277 = (0);
var G__19278 = (0);
seq__19226_19258 = G__19275;
chunk__19227_19259 = G__19276;
count__19228_19260 = G__19277;
i__19229_19261 = G__19278;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4149__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})())){
var has_val = (function (){var and__4149__auto__ = self__.buf;
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4149__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4149__auto__ = self__.buf;
if(cljs.core.truth_(and__4149__auto__)){
return (self__.puts.length === (0));
} else {
return and__4149__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_19279 = self__.takes.pop();
if((taker_19279 == null)){
} else {
if(taker_19279.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_19280 = taker_19279.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_19281 = (cljs.core.truth_((function (){var and__4149__auto__ = self__.buf;
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4149__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_19280,val_19281,taker_19279,this$__$1){
return (function (){
return (take_cb_19280.cljs$core$IFn$_invoke$arity$1 ? take_cb_19280.cljs$core$IFn$_invoke$arity$1(val_19281) : take_cb_19280.call(null,val_19281));
});})(take_cb_19280,val_19281,taker_19279,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__19282 = (function (){var or__4160__auto__ = exh;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__19282.cljs$core$IFn$_invoke$arity$1 ? fexpr__19282.cljs$core$IFn$_invoke$arity$1(t) : fexpr__19282.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__19284 = arguments.length;
switch (G__19284) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__19288 = null;
var G__19288__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e19285){var t = e19285;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__19288__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e19286){var t = e19286;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__19288 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__19288__1.call(this,buf__$1);
case 2:
return G__19288__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19288.cljs$core$IFn$_invoke$arity$1 = G__19288__1;
G__19288.cljs$core$IFn$_invoke$arity$2 = G__19288__2;
return G__19288;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);

