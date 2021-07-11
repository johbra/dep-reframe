// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24187 = arguments.length;
switch (G__24187) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24188 = (function (f,blockable,meta24189){
this.f = f;
this.blockable = blockable;
this.meta24189 = meta24189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24190,meta24189__$1){
var self__ = this;
var _24190__$1 = this;
return (new cljs.core.async.t_cljs$core$async24188(self__.f,self__.blockable,meta24189__$1));
}));

(cljs.core.async.t_cljs$core$async24188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24190){
var self__ = this;
var _24190__$1 = this;
return self__.meta24189;
}));

(cljs.core.async.t_cljs$core$async24188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24189","meta24189",257990994,null)], null);
}));

(cljs.core.async.t_cljs$core$async24188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24188");

(cljs.core.async.t_cljs$core$async24188.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24188.
 */
cljs.core.async.__GT_t_cljs$core$async24188 = (function cljs$core$async$__GT_t_cljs$core$async24188(f__$1,blockable__$1,meta24189){
return (new cljs.core.async.t_cljs$core$async24188(f__$1,blockable__$1,meta24189));
});

}

return (new cljs.core.async.t_cljs$core$async24188(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24194 = arguments.length;
switch (G__24194) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24197 = arguments.length;
switch (G__24197) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24200 = arguments.length;
switch (G__24200) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24202 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24202);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24202);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24204 = arguments.length;
switch (G__24204) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___24206 = n;
var x_24207 = (0);
while(true){
if((x_24207 < n__4613__auto___24206)){
(a[x_24207] = x_24207);

var G__24208 = (x_24207 + (1));
x_24207 = G__24208;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24209 = (function (flag,meta24210){
this.flag = flag;
this.meta24210 = meta24210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24211,meta24210__$1){
var self__ = this;
var _24211__$1 = this;
return (new cljs.core.async.t_cljs$core$async24209(self__.flag,meta24210__$1));
}));

(cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24211){
var self__ = this;
var _24211__$1 = this;
return self__.meta24210;
}));

(cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24210","meta24210",-617084847,null)], null);
}));

(cljs.core.async.t_cljs$core$async24209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24209");

(cljs.core.async.t_cljs$core$async24209.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24209.
 */
cljs.core.async.__GT_t_cljs$core$async24209 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24209(flag__$1,meta24210){
return (new cljs.core.async.t_cljs$core$async24209(flag__$1,meta24210));
});

}

return (new cljs.core.async.t_cljs$core$async24209(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24212 = (function (flag,cb,meta24213){
this.flag = flag;
this.cb = cb;
this.meta24213 = meta24213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24214,meta24213__$1){
var self__ = this;
var _24214__$1 = this;
return (new cljs.core.async.t_cljs$core$async24212(self__.flag,self__.cb,meta24213__$1));
}));

(cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24214){
var self__ = this;
var _24214__$1 = this;
return self__.meta24213;
}));

(cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24213","meta24213",-1132361434,null)], null);
}));

(cljs.core.async.t_cljs$core$async24212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24212");

(cljs.core.async.t_cljs$core$async24212.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24212.
 */
cljs.core.async.__GT_t_cljs$core$async24212 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24212(flag__$1,cb__$1,meta24213){
return (new cljs.core.async.t_cljs$core$async24212(flag__$1,cb__$1,meta24213));
});

}

return (new cljs.core.async.t_cljs$core$async24212(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24215_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24215_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24216_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24216_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24217 = (i + (1));
i = G__24217;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24223 = arguments.length;
var i__4737__auto___24224 = (0);
while(true){
if((i__4737__auto___24224 < len__4736__auto___24223)){
args__4742__auto__.push((arguments[i__4737__auto___24224]));

var G__24225 = (i__4737__auto___24224 + (1));
i__4737__auto___24224 = G__24225;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24220){
var map__24221 = p__24220;
var map__24221__$1 = (((((!((map__24221 == null))))?(((((map__24221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24221):map__24221);
var opts = map__24221__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24218){
var G__24219 = cljs.core.first.call(null,seq24218);
var seq24218__$1 = cljs.core.next.call(null,seq24218);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24219,seq24218__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24227 = arguments.length;
switch (G__24227) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24127__auto___24274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24251){
var state_val_24252 = (state_24251[(1)]);
if((state_val_24252 === (7))){
var inst_24247 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24253_24275 = state_24251__$1;
(statearr_24253_24275[(2)] = inst_24247);

(statearr_24253_24275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (1))){
var state_24251__$1 = state_24251;
var statearr_24254_24276 = state_24251__$1;
(statearr_24254_24276[(2)] = null);

(statearr_24254_24276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (4))){
var inst_24230 = (state_24251[(7)]);
var inst_24230__$1 = (state_24251[(2)]);
var inst_24231 = (inst_24230__$1 == null);
var state_24251__$1 = (function (){var statearr_24255 = state_24251;
(statearr_24255[(7)] = inst_24230__$1);

return statearr_24255;
})();
if(cljs.core.truth_(inst_24231)){
var statearr_24256_24277 = state_24251__$1;
(statearr_24256_24277[(1)] = (5));

} else {
var statearr_24257_24278 = state_24251__$1;
(statearr_24257_24278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (13))){
var state_24251__$1 = state_24251;
var statearr_24258_24279 = state_24251__$1;
(statearr_24258_24279[(2)] = null);

(statearr_24258_24279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (6))){
var inst_24230 = (state_24251[(7)]);
var state_24251__$1 = state_24251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24251__$1,(11),to,inst_24230);
} else {
if((state_val_24252 === (3))){
var inst_24249 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24251__$1,inst_24249);
} else {
if((state_val_24252 === (12))){
var state_24251__$1 = state_24251;
var statearr_24259_24280 = state_24251__$1;
(statearr_24259_24280[(2)] = null);

(statearr_24259_24280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (2))){
var state_24251__$1 = state_24251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24251__$1,(4),from);
} else {
if((state_val_24252 === (11))){
var inst_24240 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24240)){
var statearr_24260_24281 = state_24251__$1;
(statearr_24260_24281[(1)] = (12));

} else {
var statearr_24261_24282 = state_24251__$1;
(statearr_24261_24282[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (9))){
var state_24251__$1 = state_24251;
var statearr_24262_24283 = state_24251__$1;
(statearr_24262_24283[(2)] = null);

(statearr_24262_24283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (5))){
var state_24251__$1 = state_24251;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24263_24284 = state_24251__$1;
(statearr_24263_24284[(1)] = (8));

} else {
var statearr_24264_24285 = state_24251__$1;
(statearr_24264_24285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (14))){
var inst_24245 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24265_24286 = state_24251__$1;
(statearr_24265_24286[(2)] = inst_24245);

(statearr_24265_24286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (10))){
var inst_24237 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24266_24287 = state_24251__$1;
(statearr_24266_24287[(2)] = inst_24237);

(statearr_24266_24287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (8))){
var inst_24234 = cljs.core.async.close_BANG_.call(null,to);
var state_24251__$1 = state_24251;
var statearr_24267_24288 = state_24251__$1;
(statearr_24267_24288[(2)] = inst_24234);

(statearr_24267_24288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_24268 = [null,null,null,null,null,null,null,null];
(statearr_24268[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_24268[(1)] = (1));

return statearr_24268;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_24251){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24269){var ex__24057__auto__ = e24269;
var statearr_24270_24289 = state_24251;
(statearr_24270_24289[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24251[(4)]))){
var statearr_24271_24290 = state_24251;
(statearr_24271_24290[(1)] = cljs.core.first.call(null,(state_24251[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24291 = state_24251;
state_24251 = G__24291;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_24251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_24251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24272 = f__24128__auto__.call(null);
(statearr_24272[(6)] = c__24127__auto___24274);

return statearr_24272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__24292){
var vec__24293 = p__24292;
var v = cljs.core.nth.call(null,vec__24293,(0),null);
var p = cljs.core.nth.call(null,vec__24293,(1),null);
var job = vec__24293;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24127__auto___24469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24300){
var state_val_24301 = (state_24300[(1)]);
if((state_val_24301 === (1))){
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24300__$1,(2),res,v);
} else {
if((state_val_24301 === (2))){
var inst_24297 = (state_24300[(2)]);
var inst_24298 = cljs.core.async.close_BANG_.call(null,res);
var state_24300__$1 = (function (){var statearr_24302 = state_24300;
(statearr_24302[(7)] = inst_24297);

return statearr_24302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24300__$1,inst_24298);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0 = (function (){
var statearr_24303 = [null,null,null,null,null,null,null,null];
(statearr_24303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__);

(statearr_24303[(1)] = (1));

return statearr_24303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1 = (function (state_24300){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24304){var ex__24057__auto__ = e24304;
var statearr_24305_24470 = state_24300;
(statearr_24305_24470[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24300[(4)]))){
var statearr_24306_24471 = state_24300;
(statearr_24306_24471[(1)] = cljs.core.first.call(null,(state_24300[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24472 = state_24300;
state_24300 = G__24472;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = function(state_24300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1.call(this,state_24300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24307 = f__24128__auto__.call(null);
(statearr_24307[(6)] = c__24127__auto___24469);

return statearr_24307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24308){
var vec__24309 = p__24308;
var v = cljs.core.nth.call(null,vec__24309,(0),null);
var p = cljs.core.nth.call(null,vec__24309,(1),null);
var job = vec__24309;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___24473 = n;
var __24474 = (0);
while(true){
if((__24474 < n__4613__auto___24473)){
var G__24312_24475 = type;
var G__24312_24476__$1 = (((G__24312_24475 instanceof cljs.core.Keyword))?G__24312_24475.fqn:null);
switch (G__24312_24476__$1) {
case "compute":
var c__24127__auto___24478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24474,c__24127__auto___24478,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async){
return (function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = ((function (__24474,c__24127__auto___24478,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async){
return (function (state_24325){
var state_val_24326 = (state_24325[(1)]);
if((state_val_24326 === (1))){
var state_24325__$1 = state_24325;
var statearr_24327_24479 = state_24325__$1;
(statearr_24327_24479[(2)] = null);

(statearr_24327_24479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (2))){
var state_24325__$1 = state_24325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24325__$1,(4),jobs);
} else {
if((state_val_24326 === (3))){
var inst_24323 = (state_24325[(2)]);
var state_24325__$1 = state_24325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24325__$1,inst_24323);
} else {
if((state_val_24326 === (4))){
var inst_24315 = (state_24325[(2)]);
var inst_24316 = process.call(null,inst_24315);
var state_24325__$1 = state_24325;
if(cljs.core.truth_(inst_24316)){
var statearr_24328_24480 = state_24325__$1;
(statearr_24328_24480[(1)] = (5));

} else {
var statearr_24329_24481 = state_24325__$1;
(statearr_24329_24481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (5))){
var state_24325__$1 = state_24325;
var statearr_24330_24482 = state_24325__$1;
(statearr_24330_24482[(2)] = null);

(statearr_24330_24482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (6))){
var state_24325__$1 = state_24325;
var statearr_24331_24483 = state_24325__$1;
(statearr_24331_24483[(2)] = null);

(statearr_24331_24483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (7))){
var inst_24321 = (state_24325[(2)]);
var state_24325__$1 = state_24325;
var statearr_24332_24484 = state_24325__$1;
(statearr_24332_24484[(2)] = inst_24321);

(statearr_24332_24484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24474,c__24127__auto___24478,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async))
;
return ((function (__24474,switch__24053__auto__,c__24127__auto___24478,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0 = (function (){
var statearr_24333 = [null,null,null,null,null,null,null];
(statearr_24333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__);

(statearr_24333[(1)] = (1));

return statearr_24333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1 = (function (state_24325){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24334){var ex__24057__auto__ = e24334;
var statearr_24335_24485 = state_24325;
(statearr_24335_24485[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24325[(4)]))){
var statearr_24336_24486 = state_24325;
(statearr_24336_24486[(1)] = cljs.core.first.call(null,(state_24325[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24487 = state_24325;
state_24325 = G__24487;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = function(state_24325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1.call(this,state_24325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__;
})()
;})(__24474,switch__24053__auto__,c__24127__auto___24478,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async))
})();
var state__24129__auto__ = (function (){var statearr_24337 = f__24128__auto__.call(null);
(statearr_24337[(6)] = c__24127__auto___24478);

return statearr_24337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
});})(__24474,c__24127__auto___24478,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async))
);


break;
case "async":
var c__24127__auto___24488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24474,c__24127__auto___24488,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async){
return (function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = ((function (__24474,c__24127__auto___24488,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async){
return (function (state_24350){
var state_val_24351 = (state_24350[(1)]);
if((state_val_24351 === (1))){
var state_24350__$1 = state_24350;
var statearr_24352_24489 = state_24350__$1;
(statearr_24352_24489[(2)] = null);

(statearr_24352_24489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (2))){
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24350__$1,(4),jobs);
} else {
if((state_val_24351 === (3))){
var inst_24348 = (state_24350[(2)]);
var state_24350__$1 = state_24350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24350__$1,inst_24348);
} else {
if((state_val_24351 === (4))){
var inst_24340 = (state_24350[(2)]);
var inst_24341 = async.call(null,inst_24340);
var state_24350__$1 = state_24350;
if(cljs.core.truth_(inst_24341)){
var statearr_24353_24490 = state_24350__$1;
(statearr_24353_24490[(1)] = (5));

} else {
var statearr_24354_24491 = state_24350__$1;
(statearr_24354_24491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (5))){
var state_24350__$1 = state_24350;
var statearr_24355_24492 = state_24350__$1;
(statearr_24355_24492[(2)] = null);

(statearr_24355_24492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (6))){
var state_24350__$1 = state_24350;
var statearr_24356_24493 = state_24350__$1;
(statearr_24356_24493[(2)] = null);

(statearr_24356_24493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24351 === (7))){
var inst_24346 = (state_24350[(2)]);
var state_24350__$1 = state_24350;
var statearr_24357_24494 = state_24350__$1;
(statearr_24357_24494[(2)] = inst_24346);

(statearr_24357_24494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24474,c__24127__auto___24488,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async))
;
return ((function (__24474,switch__24053__auto__,c__24127__auto___24488,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0 = (function (){
var statearr_24358 = [null,null,null,null,null,null,null];
(statearr_24358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__);

(statearr_24358[(1)] = (1));

return statearr_24358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1 = (function (state_24350){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24359){var ex__24057__auto__ = e24359;
var statearr_24360_24495 = state_24350;
(statearr_24360_24495[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24350[(4)]))){
var statearr_24361_24496 = state_24350;
(statearr_24361_24496[(1)] = cljs.core.first.call(null,(state_24350[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24497 = state_24350;
state_24350 = G__24497;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = function(state_24350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1.call(this,state_24350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__;
})()
;})(__24474,switch__24053__auto__,c__24127__auto___24488,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async))
})();
var state__24129__auto__ = (function (){var statearr_24362 = f__24128__auto__.call(null);
(statearr_24362[(6)] = c__24127__auto___24488);

return statearr_24362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
});})(__24474,c__24127__auto___24488,G__24312_24475,G__24312_24476__$1,n__4613__auto___24473,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24312_24476__$1)].join('')));

}

var G__24498 = (__24474 + (1));
__24474 = G__24498;
continue;
} else {
}
break;
}

var c__24127__auto___24499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24384){
var state_val_24385 = (state_24384[(1)]);
if((state_val_24385 === (7))){
var inst_24380 = (state_24384[(2)]);
var state_24384__$1 = state_24384;
var statearr_24386_24500 = state_24384__$1;
(statearr_24386_24500[(2)] = inst_24380);

(statearr_24386_24500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24385 === (1))){
var state_24384__$1 = state_24384;
var statearr_24387_24501 = state_24384__$1;
(statearr_24387_24501[(2)] = null);

(statearr_24387_24501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24385 === (4))){
var inst_24365 = (state_24384[(7)]);
var inst_24365__$1 = (state_24384[(2)]);
var inst_24366 = (inst_24365__$1 == null);
var state_24384__$1 = (function (){var statearr_24388 = state_24384;
(statearr_24388[(7)] = inst_24365__$1);

return statearr_24388;
})();
if(cljs.core.truth_(inst_24366)){
var statearr_24389_24502 = state_24384__$1;
(statearr_24389_24502[(1)] = (5));

} else {
var statearr_24390_24503 = state_24384__$1;
(statearr_24390_24503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24385 === (6))){
var inst_24370 = (state_24384[(8)]);
var inst_24365 = (state_24384[(7)]);
var inst_24370__$1 = cljs.core.async.chan.call(null,(1));
var inst_24371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24372 = [inst_24365,inst_24370__$1];
var inst_24373 = (new cljs.core.PersistentVector(null,2,(5),inst_24371,inst_24372,null));
var state_24384__$1 = (function (){var statearr_24391 = state_24384;
(statearr_24391[(8)] = inst_24370__$1);

return statearr_24391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24384__$1,(8),jobs,inst_24373);
} else {
if((state_val_24385 === (3))){
var inst_24382 = (state_24384[(2)]);
var state_24384__$1 = state_24384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24384__$1,inst_24382);
} else {
if((state_val_24385 === (2))){
var state_24384__$1 = state_24384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24384__$1,(4),from);
} else {
if((state_val_24385 === (9))){
var inst_24377 = (state_24384[(2)]);
var state_24384__$1 = (function (){var statearr_24392 = state_24384;
(statearr_24392[(9)] = inst_24377);

return statearr_24392;
})();
var statearr_24393_24504 = state_24384__$1;
(statearr_24393_24504[(2)] = null);

(statearr_24393_24504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24385 === (5))){
var inst_24368 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24384__$1 = state_24384;
var statearr_24394_24505 = state_24384__$1;
(statearr_24394_24505[(2)] = inst_24368);

(statearr_24394_24505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24385 === (8))){
var inst_24370 = (state_24384[(8)]);
var inst_24375 = (state_24384[(2)]);
var state_24384__$1 = (function (){var statearr_24395 = state_24384;
(statearr_24395[(10)] = inst_24375);

return statearr_24395;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24384__$1,(9),results,inst_24370);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0 = (function (){
var statearr_24396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__);

(statearr_24396[(1)] = (1));

return statearr_24396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1 = (function (state_24384){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24397){var ex__24057__auto__ = e24397;
var statearr_24398_24506 = state_24384;
(statearr_24398_24506[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24384[(4)]))){
var statearr_24399_24507 = state_24384;
(statearr_24399_24507[(1)] = cljs.core.first.call(null,(state_24384[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24508 = state_24384;
state_24384 = G__24508;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = function(state_24384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1.call(this,state_24384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24400 = f__24128__auto__.call(null);
(statearr_24400[(6)] = c__24127__auto___24499);

return statearr_24400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24438){
var state_val_24439 = (state_24438[(1)]);
if((state_val_24439 === (7))){
var inst_24434 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24440_24509 = state_24438__$1;
(statearr_24440_24509[(2)] = inst_24434);

(statearr_24440_24509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (20))){
var state_24438__$1 = state_24438;
var statearr_24441_24510 = state_24438__$1;
(statearr_24441_24510[(2)] = null);

(statearr_24441_24510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (1))){
var state_24438__$1 = state_24438;
var statearr_24442_24511 = state_24438__$1;
(statearr_24442_24511[(2)] = null);

(statearr_24442_24511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (4))){
var inst_24403 = (state_24438[(7)]);
var inst_24403__$1 = (state_24438[(2)]);
var inst_24404 = (inst_24403__$1 == null);
var state_24438__$1 = (function (){var statearr_24443 = state_24438;
(statearr_24443[(7)] = inst_24403__$1);

return statearr_24443;
})();
if(cljs.core.truth_(inst_24404)){
var statearr_24444_24512 = state_24438__$1;
(statearr_24444_24512[(1)] = (5));

} else {
var statearr_24445_24513 = state_24438__$1;
(statearr_24445_24513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (15))){
var inst_24416 = (state_24438[(8)]);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24438__$1,(18),to,inst_24416);
} else {
if((state_val_24439 === (21))){
var inst_24429 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24446_24514 = state_24438__$1;
(statearr_24446_24514[(2)] = inst_24429);

(statearr_24446_24514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (13))){
var inst_24431 = (state_24438[(2)]);
var state_24438__$1 = (function (){var statearr_24447 = state_24438;
(statearr_24447[(9)] = inst_24431);

return statearr_24447;
})();
var statearr_24448_24515 = state_24438__$1;
(statearr_24448_24515[(2)] = null);

(statearr_24448_24515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (6))){
var inst_24403 = (state_24438[(7)]);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24438__$1,(11),inst_24403);
} else {
if((state_val_24439 === (17))){
var inst_24424 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
if(cljs.core.truth_(inst_24424)){
var statearr_24449_24516 = state_24438__$1;
(statearr_24449_24516[(1)] = (19));

} else {
var statearr_24450_24517 = state_24438__$1;
(statearr_24450_24517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (3))){
var inst_24436 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24438__$1,inst_24436);
} else {
if((state_val_24439 === (12))){
var inst_24413 = (state_24438[(10)]);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24438__$1,(14),inst_24413);
} else {
if((state_val_24439 === (2))){
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24438__$1,(4),results);
} else {
if((state_val_24439 === (19))){
var state_24438__$1 = state_24438;
var statearr_24451_24518 = state_24438__$1;
(statearr_24451_24518[(2)] = null);

(statearr_24451_24518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (11))){
var inst_24413 = (state_24438[(2)]);
var state_24438__$1 = (function (){var statearr_24452 = state_24438;
(statearr_24452[(10)] = inst_24413);

return statearr_24452;
})();
var statearr_24453_24519 = state_24438__$1;
(statearr_24453_24519[(2)] = null);

(statearr_24453_24519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (9))){
var state_24438__$1 = state_24438;
var statearr_24454_24520 = state_24438__$1;
(statearr_24454_24520[(2)] = null);

(statearr_24454_24520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (5))){
var state_24438__$1 = state_24438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24455_24521 = state_24438__$1;
(statearr_24455_24521[(1)] = (8));

} else {
var statearr_24456_24522 = state_24438__$1;
(statearr_24456_24522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (14))){
var inst_24416 = (state_24438[(8)]);
var inst_24416__$1 = (state_24438[(2)]);
var inst_24417 = (inst_24416__$1 == null);
var inst_24418 = cljs.core.not.call(null,inst_24417);
var state_24438__$1 = (function (){var statearr_24457 = state_24438;
(statearr_24457[(8)] = inst_24416__$1);

return statearr_24457;
})();
if(inst_24418){
var statearr_24458_24523 = state_24438__$1;
(statearr_24458_24523[(1)] = (15));

} else {
var statearr_24459_24524 = state_24438__$1;
(statearr_24459_24524[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (16))){
var state_24438__$1 = state_24438;
var statearr_24460_24525 = state_24438__$1;
(statearr_24460_24525[(2)] = false);

(statearr_24460_24525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (10))){
var inst_24410 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24461_24526 = state_24438__$1;
(statearr_24461_24526[(2)] = inst_24410);

(statearr_24461_24526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (18))){
var inst_24421 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24462_24527 = state_24438__$1;
(statearr_24462_24527[(2)] = inst_24421);

(statearr_24462_24527[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (8))){
var inst_24407 = cljs.core.async.close_BANG_.call(null,to);
var state_24438__$1 = state_24438;
var statearr_24463_24528 = state_24438__$1;
(statearr_24463_24528[(2)] = inst_24407);

(statearr_24463_24528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0 = (function (){
var statearr_24464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__);

(statearr_24464[(1)] = (1));

return statearr_24464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1 = (function (state_24438){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24465){var ex__24057__auto__ = e24465;
var statearr_24466_24529 = state_24438;
(statearr_24466_24529[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24438[(4)]))){
var statearr_24467_24530 = state_24438;
(statearr_24467_24530[(1)] = cljs.core.first.call(null,(state_24438[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24531 = state_24438;
state_24438 = G__24531;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__ = function(state_24438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1.call(this,state_24438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24468 = f__24128__auto__.call(null);
(statearr_24468[(6)] = c__24127__auto__);

return statearr_24468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24533 = arguments.length;
switch (G__24533) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24536 = arguments.length;
switch (G__24536) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24539 = arguments.length;
switch (G__24539) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24127__auto___24589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24565){
var state_val_24566 = (state_24565[(1)]);
if((state_val_24566 === (7))){
var inst_24561 = (state_24565[(2)]);
var state_24565__$1 = state_24565;
var statearr_24567_24590 = state_24565__$1;
(statearr_24567_24590[(2)] = inst_24561);

(statearr_24567_24590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (1))){
var state_24565__$1 = state_24565;
var statearr_24568_24591 = state_24565__$1;
(statearr_24568_24591[(2)] = null);

(statearr_24568_24591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (4))){
var inst_24542 = (state_24565[(7)]);
var inst_24542__$1 = (state_24565[(2)]);
var inst_24543 = (inst_24542__$1 == null);
var state_24565__$1 = (function (){var statearr_24569 = state_24565;
(statearr_24569[(7)] = inst_24542__$1);

return statearr_24569;
})();
if(cljs.core.truth_(inst_24543)){
var statearr_24570_24592 = state_24565__$1;
(statearr_24570_24592[(1)] = (5));

} else {
var statearr_24571_24593 = state_24565__$1;
(statearr_24571_24593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (13))){
var state_24565__$1 = state_24565;
var statearr_24572_24594 = state_24565__$1;
(statearr_24572_24594[(2)] = null);

(statearr_24572_24594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (6))){
var inst_24542 = (state_24565[(7)]);
var inst_24548 = p.call(null,inst_24542);
var state_24565__$1 = state_24565;
if(cljs.core.truth_(inst_24548)){
var statearr_24573_24595 = state_24565__$1;
(statearr_24573_24595[(1)] = (9));

} else {
var statearr_24574_24596 = state_24565__$1;
(statearr_24574_24596[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (3))){
var inst_24563 = (state_24565[(2)]);
var state_24565__$1 = state_24565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24565__$1,inst_24563);
} else {
if((state_val_24566 === (12))){
var state_24565__$1 = state_24565;
var statearr_24575_24597 = state_24565__$1;
(statearr_24575_24597[(2)] = null);

(statearr_24575_24597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (2))){
var state_24565__$1 = state_24565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24565__$1,(4),ch);
} else {
if((state_val_24566 === (11))){
var inst_24542 = (state_24565[(7)]);
var inst_24552 = (state_24565[(2)]);
var state_24565__$1 = state_24565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24565__$1,(8),inst_24552,inst_24542);
} else {
if((state_val_24566 === (9))){
var state_24565__$1 = state_24565;
var statearr_24576_24598 = state_24565__$1;
(statearr_24576_24598[(2)] = tc);

(statearr_24576_24598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (5))){
var inst_24545 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24546 = cljs.core.async.close_BANG_.call(null,fc);
var state_24565__$1 = (function (){var statearr_24577 = state_24565;
(statearr_24577[(8)] = inst_24545);

return statearr_24577;
})();
var statearr_24578_24599 = state_24565__$1;
(statearr_24578_24599[(2)] = inst_24546);

(statearr_24578_24599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (14))){
var inst_24559 = (state_24565[(2)]);
var state_24565__$1 = state_24565;
var statearr_24579_24600 = state_24565__$1;
(statearr_24579_24600[(2)] = inst_24559);

(statearr_24579_24600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (10))){
var state_24565__$1 = state_24565;
var statearr_24580_24601 = state_24565__$1;
(statearr_24580_24601[(2)] = fc);

(statearr_24580_24601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24566 === (8))){
var inst_24554 = (state_24565[(2)]);
var state_24565__$1 = state_24565;
if(cljs.core.truth_(inst_24554)){
var statearr_24581_24602 = state_24565__$1;
(statearr_24581_24602[(1)] = (12));

} else {
var statearr_24582_24603 = state_24565__$1;
(statearr_24582_24603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_24583 = [null,null,null,null,null,null,null,null,null];
(statearr_24583[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_24583[(1)] = (1));

return statearr_24583;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_24565){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24584){var ex__24057__auto__ = e24584;
var statearr_24585_24604 = state_24565;
(statearr_24585_24604[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24565[(4)]))){
var statearr_24586_24605 = state_24565;
(statearr_24586_24605[(1)] = cljs.core.first.call(null,(state_24565[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24606 = state_24565;
state_24565 = G__24606;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_24565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_24565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24587 = f__24128__auto__.call(null);
(statearr_24587[(6)] = c__24127__auto___24589);

return statearr_24587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24628){
var state_val_24629 = (state_24628[(1)]);
if((state_val_24629 === (7))){
var inst_24624 = (state_24628[(2)]);
var state_24628__$1 = state_24628;
var statearr_24630_24649 = state_24628__$1;
(statearr_24630_24649[(2)] = inst_24624);

(statearr_24630_24649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (1))){
var inst_24607 = init;
var inst_24608 = inst_24607;
var state_24628__$1 = (function (){var statearr_24631 = state_24628;
(statearr_24631[(7)] = inst_24608);

return statearr_24631;
})();
var statearr_24632_24650 = state_24628__$1;
(statearr_24632_24650[(2)] = null);

(statearr_24632_24650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (4))){
var inst_24611 = (state_24628[(8)]);
var inst_24611__$1 = (state_24628[(2)]);
var inst_24612 = (inst_24611__$1 == null);
var state_24628__$1 = (function (){var statearr_24633 = state_24628;
(statearr_24633[(8)] = inst_24611__$1);

return statearr_24633;
})();
if(cljs.core.truth_(inst_24612)){
var statearr_24634_24651 = state_24628__$1;
(statearr_24634_24651[(1)] = (5));

} else {
var statearr_24635_24652 = state_24628__$1;
(statearr_24635_24652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (6))){
var inst_24615 = (state_24628[(9)]);
var inst_24611 = (state_24628[(8)]);
var inst_24608 = (state_24628[(7)]);
var inst_24615__$1 = f.call(null,inst_24608,inst_24611);
var inst_24616 = cljs.core.reduced_QMARK_.call(null,inst_24615__$1);
var state_24628__$1 = (function (){var statearr_24636 = state_24628;
(statearr_24636[(9)] = inst_24615__$1);

return statearr_24636;
})();
if(inst_24616){
var statearr_24637_24653 = state_24628__$1;
(statearr_24637_24653[(1)] = (8));

} else {
var statearr_24638_24654 = state_24628__$1;
(statearr_24638_24654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (3))){
var inst_24626 = (state_24628[(2)]);
var state_24628__$1 = state_24628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24628__$1,inst_24626);
} else {
if((state_val_24629 === (2))){
var state_24628__$1 = state_24628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24628__$1,(4),ch);
} else {
if((state_val_24629 === (9))){
var inst_24615 = (state_24628[(9)]);
var inst_24608 = inst_24615;
var state_24628__$1 = (function (){var statearr_24639 = state_24628;
(statearr_24639[(7)] = inst_24608);

return statearr_24639;
})();
var statearr_24640_24655 = state_24628__$1;
(statearr_24640_24655[(2)] = null);

(statearr_24640_24655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (5))){
var inst_24608 = (state_24628[(7)]);
var state_24628__$1 = state_24628;
var statearr_24641_24656 = state_24628__$1;
(statearr_24641_24656[(2)] = inst_24608);

(statearr_24641_24656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (10))){
var inst_24622 = (state_24628[(2)]);
var state_24628__$1 = state_24628;
var statearr_24642_24657 = state_24628__$1;
(statearr_24642_24657[(2)] = inst_24622);

(statearr_24642_24657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (8))){
var inst_24615 = (state_24628[(9)]);
var inst_24618 = cljs.core.deref.call(null,inst_24615);
var state_24628__$1 = state_24628;
var statearr_24643_24658 = state_24628__$1;
(statearr_24643_24658[(2)] = inst_24618);

(statearr_24643_24658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24054__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24054__auto____0 = (function (){
var statearr_24644 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24644[(0)] = cljs$core$async$reduce_$_state_machine__24054__auto__);

(statearr_24644[(1)] = (1));

return statearr_24644;
});
var cljs$core$async$reduce_$_state_machine__24054__auto____1 = (function (state_24628){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24645){var ex__24057__auto__ = e24645;
var statearr_24646_24659 = state_24628;
(statearr_24646_24659[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24628[(4)]))){
var statearr_24647_24660 = state_24628;
(statearr_24647_24660[(1)] = cljs.core.first.call(null,(state_24628[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24661 = state_24628;
state_24628 = G__24661;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24054__auto__ = function(state_24628){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24054__auto____1.call(this,state_24628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24054__auto____0;
cljs$core$async$reduce_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24054__auto____1;
return cljs$core$async$reduce_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24648 = f__24128__auto__.call(null);
(statearr_24648[(6)] = c__24127__auto__);

return statearr_24648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24667){
var state_val_24668 = (state_24667[(1)]);
if((state_val_24668 === (1))){
var inst_24662 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24667__$1 = state_24667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24667__$1,(2),inst_24662);
} else {
if((state_val_24668 === (2))){
var inst_24664 = (state_24667[(2)]);
var inst_24665 = f__$1.call(null,inst_24664);
var state_24667__$1 = state_24667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24667__$1,inst_24665);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24054__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24054__auto____0 = (function (){
var statearr_24669 = [null,null,null,null,null,null,null];
(statearr_24669[(0)] = cljs$core$async$transduce_$_state_machine__24054__auto__);

(statearr_24669[(1)] = (1));

return statearr_24669;
});
var cljs$core$async$transduce_$_state_machine__24054__auto____1 = (function (state_24667){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24670){var ex__24057__auto__ = e24670;
var statearr_24671_24674 = state_24667;
(statearr_24671_24674[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24667[(4)]))){
var statearr_24672_24675 = state_24667;
(statearr_24672_24675[(1)] = cljs.core.first.call(null,(state_24667[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24676 = state_24667;
state_24667 = G__24676;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24054__auto__ = function(state_24667){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24054__auto____1.call(this,state_24667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24054__auto____0;
cljs$core$async$transduce_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24054__auto____1;
return cljs$core$async$transduce_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24673 = f__24128__auto__.call(null);
(statearr_24673[(6)] = c__24127__auto__);

return statearr_24673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__24678 = arguments.length;
switch (G__24678) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24703){
var state_val_24704 = (state_24703[(1)]);
if((state_val_24704 === (7))){
var inst_24685 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24705_24727 = state_24703__$1;
(statearr_24705_24727[(2)] = inst_24685);

(statearr_24705_24727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (1))){
var inst_24679 = cljs.core.seq.call(null,coll);
var inst_24680 = inst_24679;
var state_24703__$1 = (function (){var statearr_24706 = state_24703;
(statearr_24706[(7)] = inst_24680);

return statearr_24706;
})();
var statearr_24707_24728 = state_24703__$1;
(statearr_24707_24728[(2)] = null);

(statearr_24707_24728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (4))){
var inst_24680 = (state_24703[(7)]);
var inst_24683 = cljs.core.first.call(null,inst_24680);
var state_24703__$1 = state_24703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24703__$1,(7),ch,inst_24683);
} else {
if((state_val_24704 === (13))){
var inst_24697 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24708_24729 = state_24703__$1;
(statearr_24708_24729[(2)] = inst_24697);

(statearr_24708_24729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (6))){
var inst_24688 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
if(cljs.core.truth_(inst_24688)){
var statearr_24709_24730 = state_24703__$1;
(statearr_24709_24730[(1)] = (8));

} else {
var statearr_24710_24731 = state_24703__$1;
(statearr_24710_24731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (3))){
var inst_24701 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24703__$1,inst_24701);
} else {
if((state_val_24704 === (12))){
var state_24703__$1 = state_24703;
var statearr_24711_24732 = state_24703__$1;
(statearr_24711_24732[(2)] = null);

(statearr_24711_24732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (2))){
var inst_24680 = (state_24703[(7)]);
var state_24703__$1 = state_24703;
if(cljs.core.truth_(inst_24680)){
var statearr_24712_24733 = state_24703__$1;
(statearr_24712_24733[(1)] = (4));

} else {
var statearr_24713_24734 = state_24703__$1;
(statearr_24713_24734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (11))){
var inst_24694 = cljs.core.async.close_BANG_.call(null,ch);
var state_24703__$1 = state_24703;
var statearr_24714_24735 = state_24703__$1;
(statearr_24714_24735[(2)] = inst_24694);

(statearr_24714_24735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (9))){
var state_24703__$1 = state_24703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24715_24736 = state_24703__$1;
(statearr_24715_24736[(1)] = (11));

} else {
var statearr_24716_24737 = state_24703__$1;
(statearr_24716_24737[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (5))){
var inst_24680 = (state_24703[(7)]);
var state_24703__$1 = state_24703;
var statearr_24717_24738 = state_24703__$1;
(statearr_24717_24738[(2)] = inst_24680);

(statearr_24717_24738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (10))){
var inst_24699 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24718_24739 = state_24703__$1;
(statearr_24718_24739[(2)] = inst_24699);

(statearr_24718_24739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (8))){
var inst_24680 = (state_24703[(7)]);
var inst_24690 = cljs.core.next.call(null,inst_24680);
var inst_24680__$1 = inst_24690;
var state_24703__$1 = (function (){var statearr_24719 = state_24703;
(statearr_24719[(7)] = inst_24680__$1);

return statearr_24719;
})();
var statearr_24720_24740 = state_24703__$1;
(statearr_24720_24740[(2)] = null);

(statearr_24720_24740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_24721 = [null,null,null,null,null,null,null,null];
(statearr_24721[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_24721[(1)] = (1));

return statearr_24721;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_24703){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24722){var ex__24057__auto__ = e24722;
var statearr_24723_24741 = state_24703;
(statearr_24723_24741[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24703[(4)]))){
var statearr_24724_24742 = state_24703;
(statearr_24724_24742[(1)] = cljs.core.first.call(null,(state_24703[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24743 = state_24703;
state_24703 = G__24743;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_24703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_24703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24725 = f__24128__auto__.call(null);
(statearr_24725[(6)] = c__24127__auto__);

return statearr_24725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24745 = arguments.length;
switch (G__24745) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_24747 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_24747.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24748 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_24748.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24749 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_24749.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24750 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_24750.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24751 = (function (ch,cs,meta24752){
this.ch = ch;
this.cs = cs;
this.meta24752 = meta24752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24753,meta24752__$1){
var self__ = this;
var _24753__$1 = this;
return (new cljs.core.async.t_cljs$core$async24751(self__.ch,self__.cs,meta24752__$1));
}));

(cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24753){
var self__ = this;
var _24753__$1 = this;
return self__.meta24752;
}));

(cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24752","meta24752",-1516728639,null)], null);
}));

(cljs.core.async.t_cljs$core$async24751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24751");

(cljs.core.async.t_cljs$core$async24751.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24751.
 */
cljs.core.async.__GT_t_cljs$core$async24751 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24751(ch__$1,cs__$1,meta24752){
return (new cljs.core.async.t_cljs$core$async24751(ch__$1,cs__$1,meta24752));
});

}

return (new cljs.core.async.t_cljs$core$async24751(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__24127__auto___24970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_24886){
var state_val_24887 = (state_24886[(1)]);
if((state_val_24887 === (7))){
var inst_24882 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24888_24971 = state_24886__$1;
(statearr_24888_24971[(2)] = inst_24882);

(statearr_24888_24971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (20))){
var inst_24787 = (state_24886[(7)]);
var inst_24799 = cljs.core.first.call(null,inst_24787);
var inst_24800 = cljs.core.nth.call(null,inst_24799,(0),null);
var inst_24801 = cljs.core.nth.call(null,inst_24799,(1),null);
var state_24886__$1 = (function (){var statearr_24889 = state_24886;
(statearr_24889[(8)] = inst_24800);

return statearr_24889;
})();
if(cljs.core.truth_(inst_24801)){
var statearr_24890_24972 = state_24886__$1;
(statearr_24890_24972[(1)] = (22));

} else {
var statearr_24891_24973 = state_24886__$1;
(statearr_24891_24973[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (27))){
var inst_24756 = (state_24886[(9)]);
var inst_24829 = (state_24886[(10)]);
var inst_24831 = (state_24886[(11)]);
var inst_24836 = (state_24886[(12)]);
var inst_24836__$1 = cljs.core._nth.call(null,inst_24829,inst_24831);
var inst_24837 = cljs.core.async.put_BANG_.call(null,inst_24836__$1,inst_24756,done);
var state_24886__$1 = (function (){var statearr_24892 = state_24886;
(statearr_24892[(12)] = inst_24836__$1);

return statearr_24892;
})();
if(cljs.core.truth_(inst_24837)){
var statearr_24893_24974 = state_24886__$1;
(statearr_24893_24974[(1)] = (30));

} else {
var statearr_24894_24975 = state_24886__$1;
(statearr_24894_24975[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (1))){
var state_24886__$1 = state_24886;
var statearr_24895_24976 = state_24886__$1;
(statearr_24895_24976[(2)] = null);

(statearr_24895_24976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (24))){
var inst_24787 = (state_24886[(7)]);
var inst_24806 = (state_24886[(2)]);
var inst_24807 = cljs.core.next.call(null,inst_24787);
var inst_24765 = inst_24807;
var inst_24766 = null;
var inst_24767 = (0);
var inst_24768 = (0);
var state_24886__$1 = (function (){var statearr_24896 = state_24886;
(statearr_24896[(13)] = inst_24768);

(statearr_24896[(14)] = inst_24766);

(statearr_24896[(15)] = inst_24806);

(statearr_24896[(16)] = inst_24765);

(statearr_24896[(17)] = inst_24767);

return statearr_24896;
})();
var statearr_24897_24977 = state_24886__$1;
(statearr_24897_24977[(2)] = null);

(statearr_24897_24977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (39))){
var state_24886__$1 = state_24886;
var statearr_24901_24978 = state_24886__$1;
(statearr_24901_24978[(2)] = null);

(statearr_24901_24978[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (4))){
var inst_24756 = (state_24886[(9)]);
var inst_24756__$1 = (state_24886[(2)]);
var inst_24757 = (inst_24756__$1 == null);
var state_24886__$1 = (function (){var statearr_24902 = state_24886;
(statearr_24902[(9)] = inst_24756__$1);

return statearr_24902;
})();
if(cljs.core.truth_(inst_24757)){
var statearr_24903_24979 = state_24886__$1;
(statearr_24903_24979[(1)] = (5));

} else {
var statearr_24904_24980 = state_24886__$1;
(statearr_24904_24980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (15))){
var inst_24768 = (state_24886[(13)]);
var inst_24766 = (state_24886[(14)]);
var inst_24765 = (state_24886[(16)]);
var inst_24767 = (state_24886[(17)]);
var inst_24783 = (state_24886[(2)]);
var inst_24784 = (inst_24768 + (1));
var tmp24898 = inst_24766;
var tmp24899 = inst_24765;
var tmp24900 = inst_24767;
var inst_24765__$1 = tmp24899;
var inst_24766__$1 = tmp24898;
var inst_24767__$1 = tmp24900;
var inst_24768__$1 = inst_24784;
var state_24886__$1 = (function (){var statearr_24905 = state_24886;
(statearr_24905[(18)] = inst_24783);

(statearr_24905[(13)] = inst_24768__$1);

(statearr_24905[(14)] = inst_24766__$1);

(statearr_24905[(16)] = inst_24765__$1);

(statearr_24905[(17)] = inst_24767__$1);

return statearr_24905;
})();
var statearr_24906_24981 = state_24886__$1;
(statearr_24906_24981[(2)] = null);

(statearr_24906_24981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (21))){
var inst_24810 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24910_24982 = state_24886__$1;
(statearr_24910_24982[(2)] = inst_24810);

(statearr_24910_24982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (31))){
var inst_24836 = (state_24886[(12)]);
var inst_24840 = cljs.core.async.untap_STAR_.call(null,m,inst_24836);
var state_24886__$1 = state_24886;
var statearr_24911_24983 = state_24886__$1;
(statearr_24911_24983[(2)] = inst_24840);

(statearr_24911_24983[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (32))){
var inst_24829 = (state_24886[(10)]);
var inst_24831 = (state_24886[(11)]);
var inst_24828 = (state_24886[(19)]);
var inst_24830 = (state_24886[(20)]);
var inst_24842 = (state_24886[(2)]);
var inst_24843 = (inst_24831 + (1));
var tmp24907 = inst_24829;
var tmp24908 = inst_24828;
var tmp24909 = inst_24830;
var inst_24828__$1 = tmp24908;
var inst_24829__$1 = tmp24907;
var inst_24830__$1 = tmp24909;
var inst_24831__$1 = inst_24843;
var state_24886__$1 = (function (){var statearr_24912 = state_24886;
(statearr_24912[(21)] = inst_24842);

(statearr_24912[(10)] = inst_24829__$1);

(statearr_24912[(11)] = inst_24831__$1);

(statearr_24912[(19)] = inst_24828__$1);

(statearr_24912[(20)] = inst_24830__$1);

return statearr_24912;
})();
var statearr_24913_24984 = state_24886__$1;
(statearr_24913_24984[(2)] = null);

(statearr_24913_24984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (40))){
var inst_24855 = (state_24886[(22)]);
var inst_24859 = cljs.core.async.untap_STAR_.call(null,m,inst_24855);
var state_24886__$1 = state_24886;
var statearr_24914_24985 = state_24886__$1;
(statearr_24914_24985[(2)] = inst_24859);

(statearr_24914_24985[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (33))){
var inst_24846 = (state_24886[(23)]);
var inst_24848 = cljs.core.chunked_seq_QMARK_.call(null,inst_24846);
var state_24886__$1 = state_24886;
if(inst_24848){
var statearr_24915_24986 = state_24886__$1;
(statearr_24915_24986[(1)] = (36));

} else {
var statearr_24916_24987 = state_24886__$1;
(statearr_24916_24987[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (13))){
var inst_24777 = (state_24886[(24)]);
var inst_24780 = cljs.core.async.close_BANG_.call(null,inst_24777);
var state_24886__$1 = state_24886;
var statearr_24917_24988 = state_24886__$1;
(statearr_24917_24988[(2)] = inst_24780);

(statearr_24917_24988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (22))){
var inst_24800 = (state_24886[(8)]);
var inst_24803 = cljs.core.async.close_BANG_.call(null,inst_24800);
var state_24886__$1 = state_24886;
var statearr_24918_24989 = state_24886__$1;
(statearr_24918_24989[(2)] = inst_24803);

(statearr_24918_24989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (36))){
var inst_24846 = (state_24886[(23)]);
var inst_24850 = cljs.core.chunk_first.call(null,inst_24846);
var inst_24851 = cljs.core.chunk_rest.call(null,inst_24846);
var inst_24852 = cljs.core.count.call(null,inst_24850);
var inst_24828 = inst_24851;
var inst_24829 = inst_24850;
var inst_24830 = inst_24852;
var inst_24831 = (0);
var state_24886__$1 = (function (){var statearr_24919 = state_24886;
(statearr_24919[(10)] = inst_24829);

(statearr_24919[(11)] = inst_24831);

(statearr_24919[(19)] = inst_24828);

(statearr_24919[(20)] = inst_24830);

return statearr_24919;
})();
var statearr_24920_24990 = state_24886__$1;
(statearr_24920_24990[(2)] = null);

(statearr_24920_24990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (41))){
var inst_24846 = (state_24886[(23)]);
var inst_24861 = (state_24886[(2)]);
var inst_24862 = cljs.core.next.call(null,inst_24846);
var inst_24828 = inst_24862;
var inst_24829 = null;
var inst_24830 = (0);
var inst_24831 = (0);
var state_24886__$1 = (function (){var statearr_24921 = state_24886;
(statearr_24921[(10)] = inst_24829);

(statearr_24921[(11)] = inst_24831);

(statearr_24921[(19)] = inst_24828);

(statearr_24921[(20)] = inst_24830);

(statearr_24921[(25)] = inst_24861);

return statearr_24921;
})();
var statearr_24922_24991 = state_24886__$1;
(statearr_24922_24991[(2)] = null);

(statearr_24922_24991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (43))){
var state_24886__$1 = state_24886;
var statearr_24923_24992 = state_24886__$1;
(statearr_24923_24992[(2)] = null);

(statearr_24923_24992[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (29))){
var inst_24870 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24924_24993 = state_24886__$1;
(statearr_24924_24993[(2)] = inst_24870);

(statearr_24924_24993[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (44))){
var inst_24879 = (state_24886[(2)]);
var state_24886__$1 = (function (){var statearr_24925 = state_24886;
(statearr_24925[(26)] = inst_24879);

return statearr_24925;
})();
var statearr_24926_24994 = state_24886__$1;
(statearr_24926_24994[(2)] = null);

(statearr_24926_24994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (6))){
var inst_24820 = (state_24886[(27)]);
var inst_24819 = cljs.core.deref.call(null,cs);
var inst_24820__$1 = cljs.core.keys.call(null,inst_24819);
var inst_24821 = cljs.core.count.call(null,inst_24820__$1);
var inst_24822 = cljs.core.reset_BANG_.call(null,dctr,inst_24821);
var inst_24827 = cljs.core.seq.call(null,inst_24820__$1);
var inst_24828 = inst_24827;
var inst_24829 = null;
var inst_24830 = (0);
var inst_24831 = (0);
var state_24886__$1 = (function (){var statearr_24927 = state_24886;
(statearr_24927[(28)] = inst_24822);

(statearr_24927[(10)] = inst_24829);

(statearr_24927[(11)] = inst_24831);

(statearr_24927[(27)] = inst_24820__$1);

(statearr_24927[(19)] = inst_24828);

(statearr_24927[(20)] = inst_24830);

return statearr_24927;
})();
var statearr_24928_24995 = state_24886__$1;
(statearr_24928_24995[(2)] = null);

(statearr_24928_24995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (28))){
var inst_24846 = (state_24886[(23)]);
var inst_24828 = (state_24886[(19)]);
var inst_24846__$1 = cljs.core.seq.call(null,inst_24828);
var state_24886__$1 = (function (){var statearr_24929 = state_24886;
(statearr_24929[(23)] = inst_24846__$1);

return statearr_24929;
})();
if(inst_24846__$1){
var statearr_24930_24996 = state_24886__$1;
(statearr_24930_24996[(1)] = (33));

} else {
var statearr_24931_24997 = state_24886__$1;
(statearr_24931_24997[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (25))){
var inst_24831 = (state_24886[(11)]);
var inst_24830 = (state_24886[(20)]);
var inst_24833 = (inst_24831 < inst_24830);
var inst_24834 = inst_24833;
var state_24886__$1 = state_24886;
if(cljs.core.truth_(inst_24834)){
var statearr_24932_24998 = state_24886__$1;
(statearr_24932_24998[(1)] = (27));

} else {
var statearr_24933_24999 = state_24886__$1;
(statearr_24933_24999[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (34))){
var state_24886__$1 = state_24886;
var statearr_24934_25000 = state_24886__$1;
(statearr_24934_25000[(2)] = null);

(statearr_24934_25000[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (17))){
var state_24886__$1 = state_24886;
var statearr_24935_25001 = state_24886__$1;
(statearr_24935_25001[(2)] = null);

(statearr_24935_25001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (3))){
var inst_24884 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24886__$1,inst_24884);
} else {
if((state_val_24887 === (12))){
var inst_24815 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24936_25002 = state_24886__$1;
(statearr_24936_25002[(2)] = inst_24815);

(statearr_24936_25002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (2))){
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24886__$1,(4),ch);
} else {
if((state_val_24887 === (23))){
var state_24886__$1 = state_24886;
var statearr_24937_25003 = state_24886__$1;
(statearr_24937_25003[(2)] = null);

(statearr_24937_25003[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (35))){
var inst_24868 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24938_25004 = state_24886__$1;
(statearr_24938_25004[(2)] = inst_24868);

(statearr_24938_25004[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (19))){
var inst_24787 = (state_24886[(7)]);
var inst_24791 = cljs.core.chunk_first.call(null,inst_24787);
var inst_24792 = cljs.core.chunk_rest.call(null,inst_24787);
var inst_24793 = cljs.core.count.call(null,inst_24791);
var inst_24765 = inst_24792;
var inst_24766 = inst_24791;
var inst_24767 = inst_24793;
var inst_24768 = (0);
var state_24886__$1 = (function (){var statearr_24939 = state_24886;
(statearr_24939[(13)] = inst_24768);

(statearr_24939[(14)] = inst_24766);

(statearr_24939[(16)] = inst_24765);

(statearr_24939[(17)] = inst_24767);

return statearr_24939;
})();
var statearr_24940_25005 = state_24886__$1;
(statearr_24940_25005[(2)] = null);

(statearr_24940_25005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (11))){
var inst_24765 = (state_24886[(16)]);
var inst_24787 = (state_24886[(7)]);
var inst_24787__$1 = cljs.core.seq.call(null,inst_24765);
var state_24886__$1 = (function (){var statearr_24941 = state_24886;
(statearr_24941[(7)] = inst_24787__$1);

return statearr_24941;
})();
if(inst_24787__$1){
var statearr_24942_25006 = state_24886__$1;
(statearr_24942_25006[(1)] = (16));

} else {
var statearr_24943_25007 = state_24886__$1;
(statearr_24943_25007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (9))){
var inst_24817 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24944_25008 = state_24886__$1;
(statearr_24944_25008[(2)] = inst_24817);

(statearr_24944_25008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (5))){
var inst_24763 = cljs.core.deref.call(null,cs);
var inst_24764 = cljs.core.seq.call(null,inst_24763);
var inst_24765 = inst_24764;
var inst_24766 = null;
var inst_24767 = (0);
var inst_24768 = (0);
var state_24886__$1 = (function (){var statearr_24945 = state_24886;
(statearr_24945[(13)] = inst_24768);

(statearr_24945[(14)] = inst_24766);

(statearr_24945[(16)] = inst_24765);

(statearr_24945[(17)] = inst_24767);

return statearr_24945;
})();
var statearr_24946_25009 = state_24886__$1;
(statearr_24946_25009[(2)] = null);

(statearr_24946_25009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (14))){
var state_24886__$1 = state_24886;
var statearr_24947_25010 = state_24886__$1;
(statearr_24947_25010[(2)] = null);

(statearr_24947_25010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (45))){
var inst_24876 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24948_25011 = state_24886__$1;
(statearr_24948_25011[(2)] = inst_24876);

(statearr_24948_25011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (26))){
var inst_24820 = (state_24886[(27)]);
var inst_24872 = (state_24886[(2)]);
var inst_24873 = cljs.core.seq.call(null,inst_24820);
var state_24886__$1 = (function (){var statearr_24949 = state_24886;
(statearr_24949[(29)] = inst_24872);

return statearr_24949;
})();
if(inst_24873){
var statearr_24950_25012 = state_24886__$1;
(statearr_24950_25012[(1)] = (42));

} else {
var statearr_24951_25013 = state_24886__$1;
(statearr_24951_25013[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (16))){
var inst_24787 = (state_24886[(7)]);
var inst_24789 = cljs.core.chunked_seq_QMARK_.call(null,inst_24787);
var state_24886__$1 = state_24886;
if(inst_24789){
var statearr_24952_25014 = state_24886__$1;
(statearr_24952_25014[(1)] = (19));

} else {
var statearr_24953_25015 = state_24886__$1;
(statearr_24953_25015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (38))){
var inst_24865 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24954_25016 = state_24886__$1;
(statearr_24954_25016[(2)] = inst_24865);

(statearr_24954_25016[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (30))){
var state_24886__$1 = state_24886;
var statearr_24955_25017 = state_24886__$1;
(statearr_24955_25017[(2)] = null);

(statearr_24955_25017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (10))){
var inst_24768 = (state_24886[(13)]);
var inst_24766 = (state_24886[(14)]);
var inst_24776 = cljs.core._nth.call(null,inst_24766,inst_24768);
var inst_24777 = cljs.core.nth.call(null,inst_24776,(0),null);
var inst_24778 = cljs.core.nth.call(null,inst_24776,(1),null);
var state_24886__$1 = (function (){var statearr_24956 = state_24886;
(statearr_24956[(24)] = inst_24777);

return statearr_24956;
})();
if(cljs.core.truth_(inst_24778)){
var statearr_24957_25018 = state_24886__$1;
(statearr_24957_25018[(1)] = (13));

} else {
var statearr_24958_25019 = state_24886__$1;
(statearr_24958_25019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (18))){
var inst_24813 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24959_25020 = state_24886__$1;
(statearr_24959_25020[(2)] = inst_24813);

(statearr_24959_25020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (42))){
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24886__$1,(45),dchan);
} else {
if((state_val_24887 === (37))){
var inst_24756 = (state_24886[(9)]);
var inst_24855 = (state_24886[(22)]);
var inst_24846 = (state_24886[(23)]);
var inst_24855__$1 = cljs.core.first.call(null,inst_24846);
var inst_24856 = cljs.core.async.put_BANG_.call(null,inst_24855__$1,inst_24756,done);
var state_24886__$1 = (function (){var statearr_24960 = state_24886;
(statearr_24960[(22)] = inst_24855__$1);

return statearr_24960;
})();
if(cljs.core.truth_(inst_24856)){
var statearr_24961_25021 = state_24886__$1;
(statearr_24961_25021[(1)] = (39));

} else {
var statearr_24962_25022 = state_24886__$1;
(statearr_24962_25022[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (8))){
var inst_24768 = (state_24886[(13)]);
var inst_24767 = (state_24886[(17)]);
var inst_24770 = (inst_24768 < inst_24767);
var inst_24771 = inst_24770;
var state_24886__$1 = state_24886;
if(cljs.core.truth_(inst_24771)){
var statearr_24963_25023 = state_24886__$1;
(statearr_24963_25023[(1)] = (10));

} else {
var statearr_24964_25024 = state_24886__$1;
(statearr_24964_25024[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__24054__auto__ = null;
var cljs$core$async$mult_$_state_machine__24054__auto____0 = (function (){
var statearr_24965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24965[(0)] = cljs$core$async$mult_$_state_machine__24054__auto__);

(statearr_24965[(1)] = (1));

return statearr_24965;
});
var cljs$core$async$mult_$_state_machine__24054__auto____1 = (function (state_24886){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_24886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e24966){var ex__24057__auto__ = e24966;
var statearr_24967_25025 = state_24886;
(statearr_24967_25025[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_24886[(4)]))){
var statearr_24968_25026 = state_24886;
(statearr_24968_25026[(1)] = cljs.core.first.call(null,(state_24886[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25027 = state_24886;
state_24886 = G__25027;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24054__auto__ = function(state_24886){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24054__auto____1.call(this,state_24886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24054__auto____0;
cljs$core$async$mult_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24054__auto____1;
return cljs$core$async$mult_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_24969 = f__24128__auto__.call(null);
(statearr_24969[(6)] = c__24127__auto___24970);

return statearr_24969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25029 = arguments.length;
switch (G__25029) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_25031 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25031.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25032 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25032.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25033 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25033.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25034 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25034.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25035 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25035.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25046 = arguments.length;
var i__4737__auto___25047 = (0);
while(true){
if((i__4737__auto___25047 < len__4736__auto___25046)){
args__4742__auto__.push((arguments[i__4737__auto___25047]));

var G__25048 = (i__4737__auto___25047 + (1));
i__4737__auto___25047 = G__25048;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25040){
var map__25041 = p__25040;
var map__25041__$1 = (((((!((map__25041 == null))))?(((((map__25041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25041):map__25041);
var opts = map__25041__$1;
var statearr_25043_25049 = state;
(statearr_25043_25049[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25044_25050 = state;
(statearr_25044_25050[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25045_25051 = state;
(statearr_25045_25051[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25036){
var G__25037 = cljs.core.first.call(null,seq25036);
var seq25036__$1 = cljs.core.next.call(null,seq25036);
var G__25038 = cljs.core.first.call(null,seq25036__$1);
var seq25036__$2 = cljs.core.next.call(null,seq25036__$1);
var G__25039 = cljs.core.first.call(null,seq25036__$2);
var seq25036__$3 = cljs.core.next.call(null,seq25036__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25037,G__25038,G__25039,seq25036__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25052 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25053){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25053 = meta25053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25054,meta25053__$1){
var self__ = this;
var _25054__$1 = this;
return (new cljs.core.async.t_cljs$core$async25052(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25053__$1));
}));

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25054){
var self__ = this;
var _25054__$1 = this;
return self__.meta25053;
}));

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25053","meta25053",-138858875,null)], null);
}));

(cljs.core.async.t_cljs$core$async25052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25052");

(cljs.core.async.t_cljs$core$async25052.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25052.
 */
cljs.core.async.__GT_t_cljs$core$async25052 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25052(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25053){
return (new cljs.core.async.t_cljs$core$async25052(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25053));
});

}

return (new cljs.core.async.t_cljs$core$async25052(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24127__auto___25217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25156){
var state_val_25157 = (state_25156[(1)]);
if((state_val_25157 === (7))){
var inst_25071 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25158_25218 = state_25156__$1;
(statearr_25158_25218[(2)] = inst_25071);

(statearr_25158_25218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (20))){
var inst_25083 = (state_25156[(7)]);
var state_25156__$1 = state_25156;
var statearr_25159_25219 = state_25156__$1;
(statearr_25159_25219[(2)] = inst_25083);

(statearr_25159_25219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (27))){
var state_25156__$1 = state_25156;
var statearr_25160_25220 = state_25156__$1;
(statearr_25160_25220[(2)] = null);

(statearr_25160_25220[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (1))){
var inst_25058 = (state_25156[(8)]);
var inst_25058__$1 = calc_state.call(null);
var inst_25060 = (inst_25058__$1 == null);
var inst_25061 = cljs.core.not.call(null,inst_25060);
var state_25156__$1 = (function (){var statearr_25161 = state_25156;
(statearr_25161[(8)] = inst_25058__$1);

return statearr_25161;
})();
if(inst_25061){
var statearr_25162_25221 = state_25156__$1;
(statearr_25162_25221[(1)] = (2));

} else {
var statearr_25163_25222 = state_25156__$1;
(statearr_25163_25222[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (24))){
var inst_25107 = (state_25156[(9)]);
var inst_25116 = (state_25156[(10)]);
var inst_25130 = (state_25156[(11)]);
var inst_25130__$1 = inst_25107.call(null,inst_25116);
var state_25156__$1 = (function (){var statearr_25164 = state_25156;
(statearr_25164[(11)] = inst_25130__$1);

return statearr_25164;
})();
if(cljs.core.truth_(inst_25130__$1)){
var statearr_25165_25223 = state_25156__$1;
(statearr_25165_25223[(1)] = (29));

} else {
var statearr_25166_25224 = state_25156__$1;
(statearr_25166_25224[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (4))){
var inst_25074 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25074)){
var statearr_25167_25225 = state_25156__$1;
(statearr_25167_25225[(1)] = (8));

} else {
var statearr_25168_25226 = state_25156__$1;
(statearr_25168_25226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (15))){
var inst_25101 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25101)){
var statearr_25169_25227 = state_25156__$1;
(statearr_25169_25227[(1)] = (19));

} else {
var statearr_25170_25228 = state_25156__$1;
(statearr_25170_25228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (21))){
var inst_25106 = (state_25156[(12)]);
var inst_25106__$1 = (state_25156[(2)]);
var inst_25107 = cljs.core.get.call(null,inst_25106__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25108 = cljs.core.get.call(null,inst_25106__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25109 = cljs.core.get.call(null,inst_25106__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25156__$1 = (function (){var statearr_25171 = state_25156;
(statearr_25171[(9)] = inst_25107);

(statearr_25171[(12)] = inst_25106__$1);

(statearr_25171[(13)] = inst_25108);

return statearr_25171;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25156__$1,(22),inst_25109);
} else {
if((state_val_25157 === (31))){
var inst_25138 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25138)){
var statearr_25172_25229 = state_25156__$1;
(statearr_25172_25229[(1)] = (32));

} else {
var statearr_25173_25230 = state_25156__$1;
(statearr_25173_25230[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (32))){
var inst_25115 = (state_25156[(14)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(35),out,inst_25115);
} else {
if((state_val_25157 === (33))){
var inst_25106 = (state_25156[(12)]);
var inst_25083 = inst_25106;
var state_25156__$1 = (function (){var statearr_25174 = state_25156;
(statearr_25174[(7)] = inst_25083);

return statearr_25174;
})();
var statearr_25175_25231 = state_25156__$1;
(statearr_25175_25231[(2)] = null);

(statearr_25175_25231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (13))){
var inst_25083 = (state_25156[(7)]);
var inst_25090 = inst_25083.cljs$lang$protocol_mask$partition0$;
var inst_25091 = (inst_25090 & (64));
var inst_25092 = inst_25083.cljs$core$ISeq$;
var inst_25093 = (cljs.core.PROTOCOL_SENTINEL === inst_25092);
var inst_25094 = ((inst_25091) || (inst_25093));
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25094)){
var statearr_25176_25232 = state_25156__$1;
(statearr_25176_25232[(1)] = (16));

} else {
var statearr_25177_25233 = state_25156__$1;
(statearr_25177_25233[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (22))){
var inst_25116 = (state_25156[(10)]);
var inst_25115 = (state_25156[(14)]);
var inst_25114 = (state_25156[(2)]);
var inst_25115__$1 = cljs.core.nth.call(null,inst_25114,(0),null);
var inst_25116__$1 = cljs.core.nth.call(null,inst_25114,(1),null);
var inst_25117 = (inst_25115__$1 == null);
var inst_25118 = cljs.core._EQ_.call(null,inst_25116__$1,change);
var inst_25119 = ((inst_25117) || (inst_25118));
var state_25156__$1 = (function (){var statearr_25178 = state_25156;
(statearr_25178[(10)] = inst_25116__$1);

(statearr_25178[(14)] = inst_25115__$1);

return statearr_25178;
})();
if(cljs.core.truth_(inst_25119)){
var statearr_25179_25234 = state_25156__$1;
(statearr_25179_25234[(1)] = (23));

} else {
var statearr_25180_25235 = state_25156__$1;
(statearr_25180_25235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (36))){
var inst_25106 = (state_25156[(12)]);
var inst_25083 = inst_25106;
var state_25156__$1 = (function (){var statearr_25181 = state_25156;
(statearr_25181[(7)] = inst_25083);

return statearr_25181;
})();
var statearr_25182_25236 = state_25156__$1;
(statearr_25182_25236[(2)] = null);

(statearr_25182_25236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (29))){
var inst_25130 = (state_25156[(11)]);
var state_25156__$1 = state_25156;
var statearr_25183_25237 = state_25156__$1;
(statearr_25183_25237[(2)] = inst_25130);

(statearr_25183_25237[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (6))){
var state_25156__$1 = state_25156;
var statearr_25184_25238 = state_25156__$1;
(statearr_25184_25238[(2)] = false);

(statearr_25184_25238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (28))){
var inst_25126 = (state_25156[(2)]);
var inst_25127 = calc_state.call(null);
var inst_25083 = inst_25127;
var state_25156__$1 = (function (){var statearr_25185 = state_25156;
(statearr_25185[(7)] = inst_25083);

(statearr_25185[(15)] = inst_25126);

return statearr_25185;
})();
var statearr_25186_25239 = state_25156__$1;
(statearr_25186_25239[(2)] = null);

(statearr_25186_25239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (25))){
var inst_25152 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25187_25240 = state_25156__$1;
(statearr_25187_25240[(2)] = inst_25152);

(statearr_25187_25240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (34))){
var inst_25150 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25188_25241 = state_25156__$1;
(statearr_25188_25241[(2)] = inst_25150);

(statearr_25188_25241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (17))){
var state_25156__$1 = state_25156;
var statearr_25189_25242 = state_25156__$1;
(statearr_25189_25242[(2)] = false);

(statearr_25189_25242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (3))){
var state_25156__$1 = state_25156;
var statearr_25190_25243 = state_25156__$1;
(statearr_25190_25243[(2)] = false);

(statearr_25190_25243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (12))){
var inst_25154 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25156__$1,inst_25154);
} else {
if((state_val_25157 === (2))){
var inst_25058 = (state_25156[(8)]);
var inst_25063 = inst_25058.cljs$lang$protocol_mask$partition0$;
var inst_25064 = (inst_25063 & (64));
var inst_25065 = inst_25058.cljs$core$ISeq$;
var inst_25066 = (cljs.core.PROTOCOL_SENTINEL === inst_25065);
var inst_25067 = ((inst_25064) || (inst_25066));
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25067)){
var statearr_25191_25244 = state_25156__$1;
(statearr_25191_25244[(1)] = (5));

} else {
var statearr_25192_25245 = state_25156__$1;
(statearr_25192_25245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (23))){
var inst_25115 = (state_25156[(14)]);
var inst_25121 = (inst_25115 == null);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25121)){
var statearr_25193_25246 = state_25156__$1;
(statearr_25193_25246[(1)] = (26));

} else {
var statearr_25194_25247 = state_25156__$1;
(statearr_25194_25247[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (35))){
var inst_25141 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25141)){
var statearr_25195_25248 = state_25156__$1;
(statearr_25195_25248[(1)] = (36));

} else {
var statearr_25196_25249 = state_25156__$1;
(statearr_25196_25249[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (19))){
var inst_25083 = (state_25156[(7)]);
var inst_25103 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25083);
var state_25156__$1 = state_25156;
var statearr_25197_25250 = state_25156__$1;
(statearr_25197_25250[(2)] = inst_25103);

(statearr_25197_25250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (11))){
var inst_25083 = (state_25156[(7)]);
var inst_25087 = (inst_25083 == null);
var inst_25088 = cljs.core.not.call(null,inst_25087);
var state_25156__$1 = state_25156;
if(inst_25088){
var statearr_25198_25251 = state_25156__$1;
(statearr_25198_25251[(1)] = (13));

} else {
var statearr_25199_25252 = state_25156__$1;
(statearr_25199_25252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (9))){
var inst_25058 = (state_25156[(8)]);
var state_25156__$1 = state_25156;
var statearr_25200_25253 = state_25156__$1;
(statearr_25200_25253[(2)] = inst_25058);

(statearr_25200_25253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (5))){
var state_25156__$1 = state_25156;
var statearr_25201_25254 = state_25156__$1;
(statearr_25201_25254[(2)] = true);

(statearr_25201_25254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (14))){
var state_25156__$1 = state_25156;
var statearr_25202_25255 = state_25156__$1;
(statearr_25202_25255[(2)] = false);

(statearr_25202_25255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (26))){
var inst_25116 = (state_25156[(10)]);
var inst_25123 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25116);
var state_25156__$1 = state_25156;
var statearr_25203_25256 = state_25156__$1;
(statearr_25203_25256[(2)] = inst_25123);

(statearr_25203_25256[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (16))){
var state_25156__$1 = state_25156;
var statearr_25204_25257 = state_25156__$1;
(statearr_25204_25257[(2)] = true);

(statearr_25204_25257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (38))){
var inst_25146 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25205_25258 = state_25156__$1;
(statearr_25205_25258[(2)] = inst_25146);

(statearr_25205_25258[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (30))){
var inst_25107 = (state_25156[(9)]);
var inst_25116 = (state_25156[(10)]);
var inst_25108 = (state_25156[(13)]);
var inst_25133 = cljs.core.empty_QMARK_.call(null,inst_25107);
var inst_25134 = inst_25108.call(null,inst_25116);
var inst_25135 = cljs.core.not.call(null,inst_25134);
var inst_25136 = ((inst_25133) && (inst_25135));
var state_25156__$1 = state_25156;
var statearr_25206_25259 = state_25156__$1;
(statearr_25206_25259[(2)] = inst_25136);

(statearr_25206_25259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (10))){
var inst_25058 = (state_25156[(8)]);
var inst_25079 = (state_25156[(2)]);
var inst_25080 = cljs.core.get.call(null,inst_25079,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25081 = cljs.core.get.call(null,inst_25079,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25082 = cljs.core.get.call(null,inst_25079,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25083 = inst_25058;
var state_25156__$1 = (function (){var statearr_25207 = state_25156;
(statearr_25207[(16)] = inst_25081);

(statearr_25207[(7)] = inst_25083);

(statearr_25207[(17)] = inst_25082);

(statearr_25207[(18)] = inst_25080);

return statearr_25207;
})();
var statearr_25208_25260 = state_25156__$1;
(statearr_25208_25260[(2)] = null);

(statearr_25208_25260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (18))){
var inst_25098 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25209_25261 = state_25156__$1;
(statearr_25209_25261[(2)] = inst_25098);

(statearr_25209_25261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (37))){
var state_25156__$1 = state_25156;
var statearr_25210_25262 = state_25156__$1;
(statearr_25210_25262[(2)] = null);

(statearr_25210_25262[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (8))){
var inst_25058 = (state_25156[(8)]);
var inst_25076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25058);
var state_25156__$1 = state_25156;
var statearr_25211_25263 = state_25156__$1;
(statearr_25211_25263[(2)] = inst_25076);

(statearr_25211_25263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__24054__auto__ = null;
var cljs$core$async$mix_$_state_machine__24054__auto____0 = (function (){
var statearr_25212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25212[(0)] = cljs$core$async$mix_$_state_machine__24054__auto__);

(statearr_25212[(1)] = (1));

return statearr_25212;
});
var cljs$core$async$mix_$_state_machine__24054__auto____1 = (function (state_25156){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e25213){var ex__24057__auto__ = e25213;
var statearr_25214_25264 = state_25156;
(statearr_25214_25264[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25156[(4)]))){
var statearr_25215_25265 = state_25156;
(statearr_25215_25265[(1)] = cljs.core.first.call(null,(state_25156[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25266 = state_25156;
state_25156 = G__25266;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24054__auto__ = function(state_25156){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24054__auto____1.call(this,state_25156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24054__auto____0;
cljs$core$async$mix_$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24054__auto____1;
return cljs$core$async$mix_$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_25216 = f__24128__auto__.call(null);
(statearr_25216[(6)] = c__24127__auto___25217);

return statearr_25216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_25269 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25269.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25270 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25270.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25271 = (function() {
var G__25272 = null;
var G__25272__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__25272__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__25272 = function(p,v){
switch(arguments.length){
case 1:
return G__25272__1.call(this,p);
case 2:
return G__25272__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25272.cljs$core$IFn$_invoke$arity$1 = G__25272__1;
G__25272.cljs$core$IFn$_invoke$arity$2 = G__25272__2;
return G__25272;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25268 = arguments.length;
switch (G__25268) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25271.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25271.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25276 = arguments.length;
switch (G__25276) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25274_SHARP_){
if(cljs.core.truth_(p1__25274_SHARP_.call(null,topic))){
return p1__25274_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25274_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25277 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25278){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25278 = meta25278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25279,meta25278__$1){
var self__ = this;
var _25279__$1 = this;
return (new cljs.core.async.t_cljs$core$async25277(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25278__$1));
}));

(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25279){
var self__ = this;
var _25279__$1 = this;
return self__.meta25278;
}));

(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25277.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25278","meta25278",-1912933702,null)], null);
}));

(cljs.core.async.t_cljs$core$async25277.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25277");

(cljs.core.async.t_cljs$core$async25277.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25277");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25277.
 */
cljs.core.async.__GT_t_cljs$core$async25277 = (function cljs$core$async$__GT_t_cljs$core$async25277(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25278){
return (new cljs.core.async.t_cljs$core$async25277(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25278));
});

}

return (new cljs.core.async.t_cljs$core$async25277(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24127__auto___25398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25351){
var state_val_25352 = (state_25351[(1)]);
if((state_val_25352 === (7))){
var inst_25347 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25353_25399 = state_25351__$1;
(statearr_25353_25399[(2)] = inst_25347);

(statearr_25353_25399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (20))){
var state_25351__$1 = state_25351;
var statearr_25354_25400 = state_25351__$1;
(statearr_25354_25400[(2)] = null);

(statearr_25354_25400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (1))){
var state_25351__$1 = state_25351;
var statearr_25355_25401 = state_25351__$1;
(statearr_25355_25401[(2)] = null);

(statearr_25355_25401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (24))){
var inst_25330 = (state_25351[(7)]);
var inst_25339 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25330);
var state_25351__$1 = state_25351;
var statearr_25356_25402 = state_25351__$1;
(statearr_25356_25402[(2)] = inst_25339);

(statearr_25356_25402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (4))){
var inst_25282 = (state_25351[(8)]);
var inst_25282__$1 = (state_25351[(2)]);
var inst_25283 = (inst_25282__$1 == null);
var state_25351__$1 = (function (){var statearr_25357 = state_25351;
(statearr_25357[(8)] = inst_25282__$1);

return statearr_25357;
})();
if(cljs.core.truth_(inst_25283)){
var statearr_25358_25403 = state_25351__$1;
(statearr_25358_25403[(1)] = (5));

} else {
var statearr_25359_25404 = state_25351__$1;
(statearr_25359_25404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (15))){
var inst_25324 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25360_25405 = state_25351__$1;
(statearr_25360_25405[(2)] = inst_25324);

(statearr_25360_25405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (21))){
var inst_25344 = (state_25351[(2)]);
var state_25351__$1 = (function (){var statearr_25361 = state_25351;
(statearr_25361[(9)] = inst_25344);

return statearr_25361;
})();
var statearr_25362_25406 = state_25351__$1;
(statearr_25362_25406[(2)] = null);

(statearr_25362_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (13))){
var inst_25306 = (state_25351[(10)]);
var inst_25308 = cljs.core.chunked_seq_QMARK_.call(null,inst_25306);
var state_25351__$1 = state_25351;
if(inst_25308){
var statearr_25363_25407 = state_25351__$1;
(statearr_25363_25407[(1)] = (16));

} else {
var statearr_25364_25408 = state_25351__$1;
(statearr_25364_25408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (22))){
var inst_25336 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
if(cljs.core.truth_(inst_25336)){
var statearr_25365_25409 = state_25351__$1;
(statearr_25365_25409[(1)] = (23));

} else {
var statearr_25366_25410 = state_25351__$1;
(statearr_25366_25410[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (6))){
var inst_25332 = (state_25351[(11)]);
var inst_25282 = (state_25351[(8)]);
var inst_25330 = (state_25351[(7)]);
var inst_25330__$1 = topic_fn.call(null,inst_25282);
var inst_25331 = cljs.core.deref.call(null,mults);
var inst_25332__$1 = cljs.core.get.call(null,inst_25331,inst_25330__$1);
var state_25351__$1 = (function (){var statearr_25367 = state_25351;
(statearr_25367[(11)] = inst_25332__$1);

(statearr_25367[(7)] = inst_25330__$1);

return statearr_25367;
})();
if(cljs.core.truth_(inst_25332__$1)){
var statearr_25368_25411 = state_25351__$1;
(statearr_25368_25411[(1)] = (19));

} else {
var statearr_25369_25412 = state_25351__$1;
(statearr_25369_25412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (25))){
var inst_25341 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25370_25413 = state_25351__$1;
(statearr_25370_25413[(2)] = inst_25341);

(statearr_25370_25413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (17))){
var inst_25306 = (state_25351[(10)]);
var inst_25315 = cljs.core.first.call(null,inst_25306);
var inst_25316 = cljs.core.async.muxch_STAR_.call(null,inst_25315);
var inst_25317 = cljs.core.async.close_BANG_.call(null,inst_25316);
var inst_25318 = cljs.core.next.call(null,inst_25306);
var inst_25292 = inst_25318;
var inst_25293 = null;
var inst_25294 = (0);
var inst_25295 = (0);
var state_25351__$1 = (function (){var statearr_25371 = state_25351;
(statearr_25371[(12)] = inst_25292);

(statearr_25371[(13)] = inst_25294);

(statearr_25371[(14)] = inst_25317);

(statearr_25371[(15)] = inst_25295);

(statearr_25371[(16)] = inst_25293);

return statearr_25371;
})();
var statearr_25372_25414 = state_25351__$1;
(statearr_25372_25414[(2)] = null);

(statearr_25372_25414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (3))){
var inst_25349 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25351__$1,inst_25349);
} else {
if((state_val_25352 === (12))){
var inst_25326 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25373_25415 = state_25351__$1;
(statearr_25373_25415[(2)] = inst_25326);

(statearr_25373_25415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (2))){
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25351__$1,(4),ch);
} else {
if((state_val_25352 === (23))){
var state_25351__$1 = state_25351;
var statearr_25374_25416 = state_25351__$1;
(statearr_25374_25416[(2)] = null);

(statearr_25374_25416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (19))){
var inst_25332 = (state_25351[(11)]);
var inst_25282 = (state_25351[(8)]);
var inst_25334 = cljs.core.async.muxch_STAR_.call(null,inst_25332);
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25351__$1,(22),inst_25334,inst_25282);
} else {
if((state_val_25352 === (11))){
var inst_25292 = (state_25351[(12)]);
var inst_25306 = (state_25351[(10)]);
var inst_25306__$1 = cljs.core.seq.call(null,inst_25292);
var state_25351__$1 = (function (){var statearr_25375 = state_25351;
(statearr_25375[(10)] = inst_25306__$1);

return statearr_25375;
})();
if(inst_25306__$1){
var statearr_25376_25417 = state_25351__$1;
(statearr_25376_25417[(1)] = (13));

} else {
var statearr_25377_25418 = state_25351__$1;
(statearr_25377_25418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (9))){
var inst_25328 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25378_25419 = state_25351__$1;
(statearr_25378_25419[(2)] = inst_25328);

(statearr_25378_25419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (5))){
var inst_25289 = cljs.core.deref.call(null,mults);
var inst_25290 = cljs.core.vals.call(null,inst_25289);
var inst_25291 = cljs.core.seq.call(null,inst_25290);
var inst_25292 = inst_25291;
var inst_25293 = null;
var inst_25294 = (0);
var inst_25295 = (0);
var state_25351__$1 = (function (){var statearr_25379 = state_25351;
(statearr_25379[(12)] = inst_25292);

(statearr_25379[(13)] = inst_25294);

(statearr_25379[(15)] = inst_25295);

(statearr_25379[(16)] = inst_25293);

return statearr_25379;
})();
var statearr_25380_25420 = state_25351__$1;
(statearr_25380_25420[(2)] = null);

(statearr_25380_25420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (14))){
var state_25351__$1 = state_25351;
var statearr_25384_25421 = state_25351__$1;
(statearr_25384_25421[(2)] = null);

(statearr_25384_25421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (16))){
var inst_25306 = (state_25351[(10)]);
var inst_25310 = cljs.core.chunk_first.call(null,inst_25306);
var inst_25311 = cljs.core.chunk_rest.call(null,inst_25306);
var inst_25312 = cljs.core.count.call(null,inst_25310);
var inst_25292 = inst_25311;
var inst_25293 = inst_25310;
var inst_25294 = inst_25312;
var inst_25295 = (0);
var state_25351__$1 = (function (){var statearr_25385 = state_25351;
(statearr_25385[(12)] = inst_25292);

(statearr_25385[(13)] = inst_25294);

(statearr_25385[(15)] = inst_25295);

(statearr_25385[(16)] = inst_25293);

return statearr_25385;
})();
var statearr_25386_25422 = state_25351__$1;
(statearr_25386_25422[(2)] = null);

(statearr_25386_25422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (10))){
var inst_25292 = (state_25351[(12)]);
var inst_25294 = (state_25351[(13)]);
var inst_25295 = (state_25351[(15)]);
var inst_25293 = (state_25351[(16)]);
var inst_25300 = cljs.core._nth.call(null,inst_25293,inst_25295);
var inst_25301 = cljs.core.async.muxch_STAR_.call(null,inst_25300);
var inst_25302 = cljs.core.async.close_BANG_.call(null,inst_25301);
var inst_25303 = (inst_25295 + (1));
var tmp25381 = inst_25292;
var tmp25382 = inst_25294;
var tmp25383 = inst_25293;
var inst_25292__$1 = tmp25381;
var inst_25293__$1 = tmp25383;
var inst_25294__$1 = tmp25382;
var inst_25295__$1 = inst_25303;
var state_25351__$1 = (function (){var statearr_25387 = state_25351;
(statearr_25387[(17)] = inst_25302);

(statearr_25387[(12)] = inst_25292__$1);

(statearr_25387[(13)] = inst_25294__$1);

(statearr_25387[(15)] = inst_25295__$1);

(statearr_25387[(16)] = inst_25293__$1);

return statearr_25387;
})();
var statearr_25388_25423 = state_25351__$1;
(statearr_25388_25423[(2)] = null);

(statearr_25388_25423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (18))){
var inst_25321 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25389_25424 = state_25351__$1;
(statearr_25389_25424[(2)] = inst_25321);

(statearr_25389_25424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (8))){
var inst_25294 = (state_25351[(13)]);
var inst_25295 = (state_25351[(15)]);
var inst_25297 = (inst_25295 < inst_25294);
var inst_25298 = inst_25297;
var state_25351__$1 = state_25351;
if(cljs.core.truth_(inst_25298)){
var statearr_25390_25425 = state_25351__$1;
(statearr_25390_25425[(1)] = (10));

} else {
var statearr_25391_25426 = state_25351__$1;
(statearr_25391_25426[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_25392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25392[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_25392[(1)] = (1));

return statearr_25392;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_25351){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e25393){var ex__24057__auto__ = e25393;
var statearr_25394_25427 = state_25351;
(statearr_25394_25427[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25351[(4)]))){
var statearr_25395_25428 = state_25351;
(statearr_25395_25428[(1)] = cljs.core.first.call(null,(state_25351[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25429 = state_25351;
state_25351 = G__25429;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_25351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_25351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_25396 = f__24128__auto__.call(null);
(statearr_25396[(6)] = c__24127__auto___25398);

return statearr_25396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25431 = arguments.length;
switch (G__25431) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25434 = arguments.length;
switch (G__25434) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25437 = arguments.length;
switch (G__25437) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__24127__auto___25515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25480){
var state_val_25481 = (state_25480[(1)]);
if((state_val_25481 === (7))){
var state_25480__$1 = state_25480;
var statearr_25482_25516 = state_25480__$1;
(statearr_25482_25516[(2)] = null);

(statearr_25482_25516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (1))){
var state_25480__$1 = state_25480;
var statearr_25483_25517 = state_25480__$1;
(statearr_25483_25517[(2)] = null);

(statearr_25483_25517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (4))){
var inst_25441 = (state_25480[(7)]);
var inst_25440 = (state_25480[(8)]);
var inst_25443 = (inst_25441 < inst_25440);
var state_25480__$1 = state_25480;
if(cljs.core.truth_(inst_25443)){
var statearr_25484_25518 = state_25480__$1;
(statearr_25484_25518[(1)] = (6));

} else {
var statearr_25485_25519 = state_25480__$1;
(statearr_25485_25519[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (15))){
var inst_25466 = (state_25480[(9)]);
var inst_25471 = cljs.core.apply.call(null,f,inst_25466);
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25480__$1,(17),out,inst_25471);
} else {
if((state_val_25481 === (13))){
var inst_25466 = (state_25480[(9)]);
var inst_25466__$1 = (state_25480[(2)]);
var inst_25467 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25466__$1);
var state_25480__$1 = (function (){var statearr_25486 = state_25480;
(statearr_25486[(9)] = inst_25466__$1);

return statearr_25486;
})();
if(cljs.core.truth_(inst_25467)){
var statearr_25487_25520 = state_25480__$1;
(statearr_25487_25520[(1)] = (14));

} else {
var statearr_25488_25521 = state_25480__$1;
(statearr_25488_25521[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (6))){
var state_25480__$1 = state_25480;
var statearr_25489_25522 = state_25480__$1;
(statearr_25489_25522[(2)] = null);

(statearr_25489_25522[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (17))){
var inst_25473 = (state_25480[(2)]);
var state_25480__$1 = (function (){var statearr_25491 = state_25480;
(statearr_25491[(10)] = inst_25473);

return statearr_25491;
})();
var statearr_25492_25523 = state_25480__$1;
(statearr_25492_25523[(2)] = null);

(statearr_25492_25523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (3))){
var inst_25478 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25480__$1,inst_25478);
} else {
if((state_val_25481 === (12))){
var _ = (function (){var statearr_25493 = state_25480;
(statearr_25493[(4)] = cljs.core.rest.call(null,(state_25480[(4)])));

return statearr_25493;
})();
var state_25480__$1 = state_25480;
var ex25490 = (state_25480__$1[(2)]);
var statearr_25494_25524 = state_25480__$1;
(statearr_25494_25524[(5)] = ex25490);


if((ex25490 instanceof Object)){
var statearr_25495_25525 = state_25480__$1;
(statearr_25495_25525[(1)] = (11));

(statearr_25495_25525[(5)] = null);

} else {
throw ex25490;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (2))){
var inst_25439 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25440 = cnt;
var inst_25441 = (0);
var state_25480__$1 = (function (){var statearr_25496 = state_25480;
(statearr_25496[(7)] = inst_25441);

(statearr_25496[(8)] = inst_25440);

(statearr_25496[(11)] = inst_25439);

return statearr_25496;
})();
var statearr_25497_25526 = state_25480__$1;
(statearr_25497_25526[(2)] = null);

(statearr_25497_25526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (11))){
var inst_25445 = (state_25480[(2)]);
var inst_25446 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25480__$1 = (function (){var statearr_25498 = state_25480;
(statearr_25498[(12)] = inst_25445);

return statearr_25498;
})();
var statearr_25499_25527 = state_25480__$1;
(statearr_25499_25527[(2)] = inst_25446);

(statearr_25499_25527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (9))){
var inst_25441 = (state_25480[(7)]);
var _ = (function (){var statearr_25500 = state_25480;
(statearr_25500[(4)] = cljs.core.cons.call(null,(12),(state_25480[(4)])));

return statearr_25500;
})();
var inst_25452 = chs__$1.call(null,inst_25441);
var inst_25453 = done.call(null,inst_25441);
var inst_25454 = cljs.core.async.take_BANG_.call(null,inst_25452,inst_25453);
var ___$1 = (function (){var statearr_25501 = state_25480;
(statearr_25501[(4)] = cljs.core.rest.call(null,(state_25480[(4)])));

return statearr_25501;
})();
var state_25480__$1 = state_25480;
var statearr_25502_25528 = state_25480__$1;
(statearr_25502_25528[(2)] = inst_25454);

(statearr_25502_25528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (5))){
var inst_25464 = (state_25480[(2)]);
var state_25480__$1 = (function (){var statearr_25503 = state_25480;
(statearr_25503[(13)] = inst_25464);

return statearr_25503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25480__$1,(13),dchan);
} else {
if((state_val_25481 === (14))){
var inst_25469 = cljs.core.async.close_BANG_.call(null,out);
var state_25480__$1 = state_25480;
var statearr_25504_25529 = state_25480__$1;
(statearr_25504_25529[(2)] = inst_25469);

(statearr_25504_25529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (16))){
var inst_25476 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25505_25530 = state_25480__$1;
(statearr_25505_25530[(2)] = inst_25476);

(statearr_25505_25530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (10))){
var inst_25441 = (state_25480[(7)]);
var inst_25457 = (state_25480[(2)]);
var inst_25458 = (inst_25441 + (1));
var inst_25441__$1 = inst_25458;
var state_25480__$1 = (function (){var statearr_25506 = state_25480;
(statearr_25506[(7)] = inst_25441__$1);

(statearr_25506[(14)] = inst_25457);

return statearr_25506;
})();
var statearr_25507_25531 = state_25480__$1;
(statearr_25507_25531[(2)] = null);

(statearr_25507_25531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (8))){
var inst_25462 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25508_25532 = state_25480__$1;
(statearr_25508_25532[(2)] = inst_25462);

(statearr_25508_25532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_25509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25509[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_25509[(1)] = (1));

return statearr_25509;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_25480){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e25510){var ex__24057__auto__ = e25510;
var statearr_25511_25533 = state_25480;
(statearr_25511_25533[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25480[(4)]))){
var statearr_25512_25534 = state_25480;
(statearr_25512_25534[(1)] = cljs.core.first.call(null,(state_25480[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25535 = state_25480;
state_25480 = G__25535;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_25480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_25480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_25513 = f__24128__auto__.call(null);
(statearr_25513[(6)] = c__24127__auto___25515);

return statearr_25513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25538 = arguments.length;
switch (G__25538) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24127__auto___25593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25570){
var state_val_25571 = (state_25570[(1)]);
if((state_val_25571 === (7))){
var inst_25550 = (state_25570[(7)]);
var inst_25549 = (state_25570[(8)]);
var inst_25549__$1 = (state_25570[(2)]);
var inst_25550__$1 = cljs.core.nth.call(null,inst_25549__$1,(0),null);
var inst_25551 = cljs.core.nth.call(null,inst_25549__$1,(1),null);
var inst_25552 = (inst_25550__$1 == null);
var state_25570__$1 = (function (){var statearr_25572 = state_25570;
(statearr_25572[(7)] = inst_25550__$1);

(statearr_25572[(9)] = inst_25551);

(statearr_25572[(8)] = inst_25549__$1);

return statearr_25572;
})();
if(cljs.core.truth_(inst_25552)){
var statearr_25573_25594 = state_25570__$1;
(statearr_25573_25594[(1)] = (8));

} else {
var statearr_25574_25595 = state_25570__$1;
(statearr_25574_25595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (1))){
var inst_25539 = cljs.core.vec.call(null,chs);
var inst_25540 = inst_25539;
var state_25570__$1 = (function (){var statearr_25575 = state_25570;
(statearr_25575[(10)] = inst_25540);

return statearr_25575;
})();
var statearr_25576_25596 = state_25570__$1;
(statearr_25576_25596[(2)] = null);

(statearr_25576_25596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (4))){
var inst_25540 = (state_25570[(10)]);
var state_25570__$1 = state_25570;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25570__$1,(7),inst_25540);
} else {
if((state_val_25571 === (6))){
var inst_25566 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25577_25597 = state_25570__$1;
(statearr_25577_25597[(2)] = inst_25566);

(statearr_25577_25597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (3))){
var inst_25568 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25570__$1,inst_25568);
} else {
if((state_val_25571 === (2))){
var inst_25540 = (state_25570[(10)]);
var inst_25542 = cljs.core.count.call(null,inst_25540);
var inst_25543 = (inst_25542 > (0));
var state_25570__$1 = state_25570;
if(cljs.core.truth_(inst_25543)){
var statearr_25579_25598 = state_25570__$1;
(statearr_25579_25598[(1)] = (4));

} else {
var statearr_25580_25599 = state_25570__$1;
(statearr_25580_25599[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (11))){
var inst_25540 = (state_25570[(10)]);
var inst_25559 = (state_25570[(2)]);
var tmp25578 = inst_25540;
var inst_25540__$1 = tmp25578;
var state_25570__$1 = (function (){var statearr_25581 = state_25570;
(statearr_25581[(10)] = inst_25540__$1);

(statearr_25581[(11)] = inst_25559);

return statearr_25581;
})();
var statearr_25582_25600 = state_25570__$1;
(statearr_25582_25600[(2)] = null);

(statearr_25582_25600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (9))){
var inst_25550 = (state_25570[(7)]);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25570__$1,(11),out,inst_25550);
} else {
if((state_val_25571 === (5))){
var inst_25564 = cljs.core.async.close_BANG_.call(null,out);
var state_25570__$1 = state_25570;
var statearr_25583_25601 = state_25570__$1;
(statearr_25583_25601[(2)] = inst_25564);

(statearr_25583_25601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (10))){
var inst_25562 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25584_25602 = state_25570__$1;
(statearr_25584_25602[(2)] = inst_25562);

(statearr_25584_25602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (8))){
var inst_25550 = (state_25570[(7)]);
var inst_25540 = (state_25570[(10)]);
var inst_25551 = (state_25570[(9)]);
var inst_25549 = (state_25570[(8)]);
var inst_25554 = (function (){var cs = inst_25540;
var vec__25545 = inst_25549;
var v = inst_25550;
var c = inst_25551;
return (function (p1__25536_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25536_SHARP_);
});
})();
var inst_25555 = cljs.core.filterv.call(null,inst_25554,inst_25540);
var inst_25540__$1 = inst_25555;
var state_25570__$1 = (function (){var statearr_25585 = state_25570;
(statearr_25585[(10)] = inst_25540__$1);

return statearr_25585;
})();
var statearr_25586_25603 = state_25570__$1;
(statearr_25586_25603[(2)] = null);

(statearr_25586_25603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_25587 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25587[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_25587[(1)] = (1));

return statearr_25587;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_25570){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e25588){var ex__24057__auto__ = e25588;
var statearr_25589_25604 = state_25570;
(statearr_25589_25604[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25570[(4)]))){
var statearr_25590_25605 = state_25570;
(statearr_25590_25605[(1)] = cljs.core.first.call(null,(state_25570[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25606 = state_25570;
state_25570 = G__25606;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_25570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_25570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_25591 = f__24128__auto__.call(null);
(statearr_25591[(6)] = c__24127__auto___25593);

return statearr_25591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25608 = arguments.length;
switch (G__25608) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24127__auto___25654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25632){
var state_val_25633 = (state_25632[(1)]);
if((state_val_25633 === (7))){
var inst_25614 = (state_25632[(7)]);
var inst_25614__$1 = (state_25632[(2)]);
var inst_25615 = (inst_25614__$1 == null);
var inst_25616 = cljs.core.not.call(null,inst_25615);
var state_25632__$1 = (function (){var statearr_25634 = state_25632;
(statearr_25634[(7)] = inst_25614__$1);

return statearr_25634;
})();
if(inst_25616){
var statearr_25635_25655 = state_25632__$1;
(statearr_25635_25655[(1)] = (8));

} else {
var statearr_25636_25656 = state_25632__$1;
(statearr_25636_25656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (1))){
var inst_25609 = (0);
var state_25632__$1 = (function (){var statearr_25637 = state_25632;
(statearr_25637[(8)] = inst_25609);

return statearr_25637;
})();
var statearr_25638_25657 = state_25632__$1;
(statearr_25638_25657[(2)] = null);

(statearr_25638_25657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (4))){
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25632__$1,(7),ch);
} else {
if((state_val_25633 === (6))){
var inst_25627 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25639_25658 = state_25632__$1;
(statearr_25639_25658[(2)] = inst_25627);

(statearr_25639_25658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (3))){
var inst_25629 = (state_25632[(2)]);
var inst_25630 = cljs.core.async.close_BANG_.call(null,out);
var state_25632__$1 = (function (){var statearr_25640 = state_25632;
(statearr_25640[(9)] = inst_25629);

return statearr_25640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25632__$1,inst_25630);
} else {
if((state_val_25633 === (2))){
var inst_25609 = (state_25632[(8)]);
var inst_25611 = (inst_25609 < n);
var state_25632__$1 = state_25632;
if(cljs.core.truth_(inst_25611)){
var statearr_25641_25659 = state_25632__$1;
(statearr_25641_25659[(1)] = (4));

} else {
var statearr_25642_25660 = state_25632__$1;
(statearr_25642_25660[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (11))){
var inst_25609 = (state_25632[(8)]);
var inst_25619 = (state_25632[(2)]);
var inst_25620 = (inst_25609 + (1));
var inst_25609__$1 = inst_25620;
var state_25632__$1 = (function (){var statearr_25643 = state_25632;
(statearr_25643[(8)] = inst_25609__$1);

(statearr_25643[(10)] = inst_25619);

return statearr_25643;
})();
var statearr_25644_25661 = state_25632__$1;
(statearr_25644_25661[(2)] = null);

(statearr_25644_25661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (9))){
var state_25632__$1 = state_25632;
var statearr_25645_25662 = state_25632__$1;
(statearr_25645_25662[(2)] = null);

(statearr_25645_25662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (5))){
var state_25632__$1 = state_25632;
var statearr_25646_25663 = state_25632__$1;
(statearr_25646_25663[(2)] = null);

(statearr_25646_25663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (10))){
var inst_25624 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25647_25664 = state_25632__$1;
(statearr_25647_25664[(2)] = inst_25624);

(statearr_25647_25664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (8))){
var inst_25614 = (state_25632[(7)]);
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25632__$1,(11),out,inst_25614);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_25648 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25648[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_25648[(1)] = (1));

return statearr_25648;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_25632){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e25649){var ex__24057__auto__ = e25649;
var statearr_25650_25665 = state_25632;
(statearr_25650_25665[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25632[(4)]))){
var statearr_25651_25666 = state_25632;
(statearr_25651_25666[(1)] = cljs.core.first.call(null,(state_25632[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25667 = state_25632;
state_25632 = G__25667;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_25632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_25632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_25652 = f__24128__auto__.call(null);
(statearr_25652[(6)] = c__24127__auto___25654);

return statearr_25652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25669 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25669 = (function (f,ch,meta25670){
this.f = f;
this.ch = ch;
this.meta25670 = meta25670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25671,meta25670__$1){
var self__ = this;
var _25671__$1 = this;
return (new cljs.core.async.t_cljs$core$async25669(self__.f,self__.ch,meta25670__$1));
}));

(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25671){
var self__ = this;
var _25671__$1 = this;
return self__.meta25670;
}));

(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25672 = (function (f,ch,meta25670,_,fn1,meta25673){
this.f = f;
this.ch = ch;
this.meta25670 = meta25670;
this._ = _;
this.fn1 = fn1;
this.meta25673 = meta25673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25674,meta25673__$1){
var self__ = this;
var _25674__$1 = this;
return (new cljs.core.async.t_cljs$core$async25672(self__.f,self__.ch,self__.meta25670,self__._,self__.fn1,meta25673__$1));
}));

(cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25674){
var self__ = this;
var _25674__$1 = this;
return self__.meta25673;
}));

(cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25668_SHARP_){
return f1.call(null,(((p1__25668_SHARP_ == null))?null:self__.f.call(null,p1__25668_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25670","meta25670",831807589,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25669","cljs.core.async/t_cljs$core$async25669",-311491831,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25673","meta25673",-827414933,null)], null);
}));

(cljs.core.async.t_cljs$core$async25672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25672");

(cljs.core.async.t_cljs$core$async25672.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25672.
 */
cljs.core.async.__GT_t_cljs$core$async25672 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25672(f__$1,ch__$1,meta25670__$1,___$2,fn1__$1,meta25673){
return (new cljs.core.async.t_cljs$core$async25672(f__$1,ch__$1,meta25670__$1,___$2,fn1__$1,meta25673));
});

}

return (new cljs.core.async.t_cljs$core$async25672(self__.f,self__.ch,self__.meta25670,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25669.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25670","meta25670",831807589,null)], null);
}));

(cljs.core.async.t_cljs$core$async25669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25669");

(cljs.core.async.t_cljs$core$async25669.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25669.
 */
cljs.core.async.__GT_t_cljs$core$async25669 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25669(f__$1,ch__$1,meta25670){
return (new cljs.core.async.t_cljs$core$async25669(f__$1,ch__$1,meta25670));
});

}

return (new cljs.core.async.t_cljs$core$async25669(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25675 = (function (f,ch,meta25676){
this.f = f;
this.ch = ch;
this.meta25676 = meta25676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25677,meta25676__$1){
var self__ = this;
var _25677__$1 = this;
return (new cljs.core.async.t_cljs$core$async25675(self__.f,self__.ch,meta25676__$1));
}));

(cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25677){
var self__ = this;
var _25677__$1 = this;
return self__.meta25676;
}));

(cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25676","meta25676",1078103423,null)], null);
}));

(cljs.core.async.t_cljs$core$async25675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25675");

(cljs.core.async.t_cljs$core$async25675.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25675.
 */
cljs.core.async.__GT_t_cljs$core$async25675 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25675(f__$1,ch__$1,meta25676){
return (new cljs.core.async.t_cljs$core$async25675(f__$1,ch__$1,meta25676));
});

}

return (new cljs.core.async.t_cljs$core$async25675(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25678 = (function (p,ch,meta25679){
this.p = p;
this.ch = ch;
this.meta25679 = meta25679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25680,meta25679__$1){
var self__ = this;
var _25680__$1 = this;
return (new cljs.core.async.t_cljs$core$async25678(self__.p,self__.ch,meta25679__$1));
}));

(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25680){
var self__ = this;
var _25680__$1 = this;
return self__.meta25679;
}));

(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25679","meta25679",1276157926,null)], null);
}));

(cljs.core.async.t_cljs$core$async25678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25678");

(cljs.core.async.t_cljs$core$async25678.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25678.
 */
cljs.core.async.__GT_t_cljs$core$async25678 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25678(p__$1,ch__$1,meta25679){
return (new cljs.core.async.t_cljs$core$async25678(p__$1,ch__$1,meta25679));
});

}

return (new cljs.core.async.t_cljs$core$async25678(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25682 = arguments.length;
switch (G__25682) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24127__auto___25723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25703){
var state_val_25704 = (state_25703[(1)]);
if((state_val_25704 === (7))){
var inst_25699 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25705_25724 = state_25703__$1;
(statearr_25705_25724[(2)] = inst_25699);

(statearr_25705_25724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (1))){
var state_25703__$1 = state_25703;
var statearr_25706_25725 = state_25703__$1;
(statearr_25706_25725[(2)] = null);

(statearr_25706_25725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (4))){
var inst_25685 = (state_25703[(7)]);
var inst_25685__$1 = (state_25703[(2)]);
var inst_25686 = (inst_25685__$1 == null);
var state_25703__$1 = (function (){var statearr_25707 = state_25703;
(statearr_25707[(7)] = inst_25685__$1);

return statearr_25707;
})();
if(cljs.core.truth_(inst_25686)){
var statearr_25708_25726 = state_25703__$1;
(statearr_25708_25726[(1)] = (5));

} else {
var statearr_25709_25727 = state_25703__$1;
(statearr_25709_25727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (6))){
var inst_25685 = (state_25703[(7)]);
var inst_25690 = p.call(null,inst_25685);
var state_25703__$1 = state_25703;
if(cljs.core.truth_(inst_25690)){
var statearr_25710_25728 = state_25703__$1;
(statearr_25710_25728[(1)] = (8));

} else {
var statearr_25711_25729 = state_25703__$1;
(statearr_25711_25729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (3))){
var inst_25701 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25703__$1,inst_25701);
} else {
if((state_val_25704 === (2))){
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25703__$1,(4),ch);
} else {
if((state_val_25704 === (11))){
var inst_25693 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25712_25730 = state_25703__$1;
(statearr_25712_25730[(2)] = inst_25693);

(statearr_25712_25730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (9))){
var state_25703__$1 = state_25703;
var statearr_25713_25731 = state_25703__$1;
(statearr_25713_25731[(2)] = null);

(statearr_25713_25731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (5))){
var inst_25688 = cljs.core.async.close_BANG_.call(null,out);
var state_25703__$1 = state_25703;
var statearr_25714_25732 = state_25703__$1;
(statearr_25714_25732[(2)] = inst_25688);

(statearr_25714_25732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (10))){
var inst_25696 = (state_25703[(2)]);
var state_25703__$1 = (function (){var statearr_25715 = state_25703;
(statearr_25715[(8)] = inst_25696);

return statearr_25715;
})();
var statearr_25716_25733 = state_25703__$1;
(statearr_25716_25733[(2)] = null);

(statearr_25716_25733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (8))){
var inst_25685 = (state_25703[(7)]);
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25703__$1,(11),out,inst_25685);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_25717 = [null,null,null,null,null,null,null,null,null];
(statearr_25717[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_25717[(1)] = (1));

return statearr_25717;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_25703){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e25718){var ex__24057__auto__ = e25718;
var statearr_25719_25734 = state_25703;
(statearr_25719_25734[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25703[(4)]))){
var statearr_25720_25735 = state_25703;
(statearr_25720_25735[(1)] = cljs.core.first.call(null,(state_25703[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25736 = state_25703;
state_25703 = G__25736;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_25703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_25703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_25721 = f__24128__auto__.call(null);
(statearr_25721[(6)] = c__24127__auto___25723);

return statearr_25721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25738 = arguments.length;
switch (G__25738) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24127__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25801){
var state_val_25802 = (state_25801[(1)]);
if((state_val_25802 === (7))){
var inst_25797 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25803_25842 = state_25801__$1;
(statearr_25803_25842[(2)] = inst_25797);

(statearr_25803_25842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (20))){
var inst_25767 = (state_25801[(7)]);
var inst_25778 = (state_25801[(2)]);
var inst_25779 = cljs.core.next.call(null,inst_25767);
var inst_25753 = inst_25779;
var inst_25754 = null;
var inst_25755 = (0);
var inst_25756 = (0);
var state_25801__$1 = (function (){var statearr_25804 = state_25801;
(statearr_25804[(8)] = inst_25756);

(statearr_25804[(9)] = inst_25755);

(statearr_25804[(10)] = inst_25753);

(statearr_25804[(11)] = inst_25754);

(statearr_25804[(12)] = inst_25778);

return statearr_25804;
})();
var statearr_25805_25843 = state_25801__$1;
(statearr_25805_25843[(2)] = null);

(statearr_25805_25843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (1))){
var state_25801__$1 = state_25801;
var statearr_25806_25844 = state_25801__$1;
(statearr_25806_25844[(2)] = null);

(statearr_25806_25844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (4))){
var inst_25742 = (state_25801[(13)]);
var inst_25742__$1 = (state_25801[(2)]);
var inst_25743 = (inst_25742__$1 == null);
var state_25801__$1 = (function (){var statearr_25807 = state_25801;
(statearr_25807[(13)] = inst_25742__$1);

return statearr_25807;
})();
if(cljs.core.truth_(inst_25743)){
var statearr_25808_25845 = state_25801__$1;
(statearr_25808_25845[(1)] = (5));

} else {
var statearr_25809_25846 = state_25801__$1;
(statearr_25809_25846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (15))){
var state_25801__$1 = state_25801;
var statearr_25813_25847 = state_25801__$1;
(statearr_25813_25847[(2)] = null);

(statearr_25813_25847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (21))){
var state_25801__$1 = state_25801;
var statearr_25814_25848 = state_25801__$1;
(statearr_25814_25848[(2)] = null);

(statearr_25814_25848[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (13))){
var inst_25756 = (state_25801[(8)]);
var inst_25755 = (state_25801[(9)]);
var inst_25753 = (state_25801[(10)]);
var inst_25754 = (state_25801[(11)]);
var inst_25763 = (state_25801[(2)]);
var inst_25764 = (inst_25756 + (1));
var tmp25810 = inst_25755;
var tmp25811 = inst_25753;
var tmp25812 = inst_25754;
var inst_25753__$1 = tmp25811;
var inst_25754__$1 = tmp25812;
var inst_25755__$1 = tmp25810;
var inst_25756__$1 = inst_25764;
var state_25801__$1 = (function (){var statearr_25815 = state_25801;
(statearr_25815[(8)] = inst_25756__$1);

(statearr_25815[(9)] = inst_25755__$1);

(statearr_25815[(10)] = inst_25753__$1);

(statearr_25815[(11)] = inst_25754__$1);

(statearr_25815[(14)] = inst_25763);

return statearr_25815;
})();
var statearr_25816_25849 = state_25801__$1;
(statearr_25816_25849[(2)] = null);

(statearr_25816_25849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (22))){
var state_25801__$1 = state_25801;
var statearr_25817_25850 = state_25801__$1;
(statearr_25817_25850[(2)] = null);

(statearr_25817_25850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (6))){
var inst_25742 = (state_25801[(13)]);
var inst_25751 = f.call(null,inst_25742);
var inst_25752 = cljs.core.seq.call(null,inst_25751);
var inst_25753 = inst_25752;
var inst_25754 = null;
var inst_25755 = (0);
var inst_25756 = (0);
var state_25801__$1 = (function (){var statearr_25818 = state_25801;
(statearr_25818[(8)] = inst_25756);

(statearr_25818[(9)] = inst_25755);

(statearr_25818[(10)] = inst_25753);

(statearr_25818[(11)] = inst_25754);

return statearr_25818;
})();
var statearr_25819_25851 = state_25801__$1;
(statearr_25819_25851[(2)] = null);

(statearr_25819_25851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (17))){
var inst_25767 = (state_25801[(7)]);
var inst_25771 = cljs.core.chunk_first.call(null,inst_25767);
var inst_25772 = cljs.core.chunk_rest.call(null,inst_25767);
var inst_25773 = cljs.core.count.call(null,inst_25771);
var inst_25753 = inst_25772;
var inst_25754 = inst_25771;
var inst_25755 = inst_25773;
var inst_25756 = (0);
var state_25801__$1 = (function (){var statearr_25820 = state_25801;
(statearr_25820[(8)] = inst_25756);

(statearr_25820[(9)] = inst_25755);

(statearr_25820[(10)] = inst_25753);

(statearr_25820[(11)] = inst_25754);

return statearr_25820;
})();
var statearr_25821_25852 = state_25801__$1;
(statearr_25821_25852[(2)] = null);

(statearr_25821_25852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (3))){
var inst_25799 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25801__$1,inst_25799);
} else {
if((state_val_25802 === (12))){
var inst_25787 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25822_25853 = state_25801__$1;
(statearr_25822_25853[(2)] = inst_25787);

(statearr_25822_25853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (2))){
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25801__$1,(4),in$);
} else {
if((state_val_25802 === (23))){
var inst_25795 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25823_25854 = state_25801__$1;
(statearr_25823_25854[(2)] = inst_25795);

(statearr_25823_25854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (19))){
var inst_25782 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25824_25855 = state_25801__$1;
(statearr_25824_25855[(2)] = inst_25782);

(statearr_25824_25855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (11))){
var inst_25753 = (state_25801[(10)]);
var inst_25767 = (state_25801[(7)]);
var inst_25767__$1 = cljs.core.seq.call(null,inst_25753);
var state_25801__$1 = (function (){var statearr_25825 = state_25801;
(statearr_25825[(7)] = inst_25767__$1);

return statearr_25825;
})();
if(inst_25767__$1){
var statearr_25826_25856 = state_25801__$1;
(statearr_25826_25856[(1)] = (14));

} else {
var statearr_25827_25857 = state_25801__$1;
(statearr_25827_25857[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (9))){
var inst_25789 = (state_25801[(2)]);
var inst_25790 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25801__$1 = (function (){var statearr_25828 = state_25801;
(statearr_25828[(15)] = inst_25789);

return statearr_25828;
})();
if(cljs.core.truth_(inst_25790)){
var statearr_25829_25858 = state_25801__$1;
(statearr_25829_25858[(1)] = (21));

} else {
var statearr_25830_25859 = state_25801__$1;
(statearr_25830_25859[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (5))){
var inst_25745 = cljs.core.async.close_BANG_.call(null,out);
var state_25801__$1 = state_25801;
var statearr_25831_25860 = state_25801__$1;
(statearr_25831_25860[(2)] = inst_25745);

(statearr_25831_25860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (14))){
var inst_25767 = (state_25801[(7)]);
var inst_25769 = cljs.core.chunked_seq_QMARK_.call(null,inst_25767);
var state_25801__$1 = state_25801;
if(inst_25769){
var statearr_25832_25861 = state_25801__$1;
(statearr_25832_25861[(1)] = (17));

} else {
var statearr_25833_25862 = state_25801__$1;
(statearr_25833_25862[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (16))){
var inst_25785 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25834_25863 = state_25801__$1;
(statearr_25834_25863[(2)] = inst_25785);

(statearr_25834_25863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (10))){
var inst_25756 = (state_25801[(8)]);
var inst_25754 = (state_25801[(11)]);
var inst_25761 = cljs.core._nth.call(null,inst_25754,inst_25756);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25801__$1,(13),out,inst_25761);
} else {
if((state_val_25802 === (18))){
var inst_25767 = (state_25801[(7)]);
var inst_25776 = cljs.core.first.call(null,inst_25767);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25801__$1,(20),out,inst_25776);
} else {
if((state_val_25802 === (8))){
var inst_25756 = (state_25801[(8)]);
var inst_25755 = (state_25801[(9)]);
var inst_25758 = (inst_25756 < inst_25755);
var inst_25759 = inst_25758;
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25759)){
var statearr_25835_25864 = state_25801__$1;
(statearr_25835_25864[(1)] = (10));

} else {
var statearr_25836_25865 = state_25801__$1;
(statearr_25836_25865[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24054__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24054__auto____0 = (function (){
var statearr_25837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25837[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24054__auto__);

(statearr_25837[(1)] = (1));

return statearr_25837;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24054__auto____1 = (function (state_25801){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e25838){var ex__24057__auto__ = e25838;
var statearr_25839_25866 = state_25801;
(statearr_25839_25866[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25801[(4)]))){
var statearr_25840_25867 = state_25801;
(statearr_25840_25867[(1)] = cljs.core.first.call(null,(state_25801[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25868 = state_25801;
state_25801 = G__25868;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24054__auto__ = function(state_25801){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24054__auto____1.call(this,state_25801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24054__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24054__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_25841 = f__24128__auto__.call(null);
(statearr_25841[(6)] = c__24127__auto__);

return statearr_25841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));

return c__24127__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25870 = arguments.length;
switch (G__25870) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25873 = arguments.length;
switch (G__25873) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25876 = arguments.length;
switch (G__25876) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24127__auto___25924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25900){
var state_val_25901 = (state_25900[(1)]);
if((state_val_25901 === (7))){
var inst_25895 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25902_25925 = state_25900__$1;
(statearr_25902_25925[(2)] = inst_25895);

(statearr_25902_25925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (1))){
var inst_25877 = null;
var state_25900__$1 = (function (){var statearr_25903 = state_25900;
(statearr_25903[(7)] = inst_25877);

return statearr_25903;
})();
var statearr_25904_25926 = state_25900__$1;
(statearr_25904_25926[(2)] = null);

(statearr_25904_25926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (4))){
var inst_25880 = (state_25900[(8)]);
var inst_25880__$1 = (state_25900[(2)]);
var inst_25881 = (inst_25880__$1 == null);
var inst_25882 = cljs.core.not.call(null,inst_25881);
var state_25900__$1 = (function (){var statearr_25905 = state_25900;
(statearr_25905[(8)] = inst_25880__$1);

return statearr_25905;
})();
if(inst_25882){
var statearr_25906_25927 = state_25900__$1;
(statearr_25906_25927[(1)] = (5));

} else {
var statearr_25907_25928 = state_25900__$1;
(statearr_25907_25928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (6))){
var state_25900__$1 = state_25900;
var statearr_25908_25929 = state_25900__$1;
(statearr_25908_25929[(2)] = null);

(statearr_25908_25929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (3))){
var inst_25897 = (state_25900[(2)]);
var inst_25898 = cljs.core.async.close_BANG_.call(null,out);
var state_25900__$1 = (function (){var statearr_25909 = state_25900;
(statearr_25909[(9)] = inst_25897);

return statearr_25909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25900__$1,inst_25898);
} else {
if((state_val_25901 === (2))){
var state_25900__$1 = state_25900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25900__$1,(4),ch);
} else {
if((state_val_25901 === (11))){
var inst_25880 = (state_25900[(8)]);
var inst_25889 = (state_25900[(2)]);
var inst_25877 = inst_25880;
var state_25900__$1 = (function (){var statearr_25910 = state_25900;
(statearr_25910[(10)] = inst_25889);

(statearr_25910[(7)] = inst_25877);

return statearr_25910;
})();
var statearr_25911_25930 = state_25900__$1;
(statearr_25911_25930[(2)] = null);

(statearr_25911_25930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (9))){
var inst_25880 = (state_25900[(8)]);
var state_25900__$1 = state_25900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25900__$1,(11),out,inst_25880);
} else {
if((state_val_25901 === (5))){
var inst_25880 = (state_25900[(8)]);
var inst_25877 = (state_25900[(7)]);
var inst_25884 = cljs.core._EQ_.call(null,inst_25880,inst_25877);
var state_25900__$1 = state_25900;
if(inst_25884){
var statearr_25913_25931 = state_25900__$1;
(statearr_25913_25931[(1)] = (8));

} else {
var statearr_25914_25932 = state_25900__$1;
(statearr_25914_25932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (10))){
var inst_25892 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25915_25933 = state_25900__$1;
(statearr_25915_25933[(2)] = inst_25892);

(statearr_25915_25933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (8))){
var inst_25877 = (state_25900[(7)]);
var tmp25912 = inst_25877;
var inst_25877__$1 = tmp25912;
var state_25900__$1 = (function (){var statearr_25916 = state_25900;
(statearr_25916[(7)] = inst_25877__$1);

return statearr_25916;
})();
var statearr_25917_25934 = state_25900__$1;
(statearr_25917_25934[(2)] = null);

(statearr_25917_25934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_25918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25918[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_25918[(1)] = (1));

return statearr_25918;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_25900){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e25919){var ex__24057__auto__ = e25919;
var statearr_25920_25935 = state_25900;
(statearr_25920_25935[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25900[(4)]))){
var statearr_25921_25936 = state_25900;
(statearr_25921_25936[(1)] = cljs.core.first.call(null,(state_25900[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25937 = state_25900;
state_25900 = G__25937;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_25900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_25900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_25922 = f__24128__auto__.call(null);
(statearr_25922[(6)] = c__24127__auto___25924);

return statearr_25922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25939 = arguments.length;
switch (G__25939) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24127__auto___26006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_25977){
var state_val_25978 = (state_25977[(1)]);
if((state_val_25978 === (7))){
var inst_25973 = (state_25977[(2)]);
var state_25977__$1 = state_25977;
var statearr_25979_26007 = state_25977__$1;
(statearr_25979_26007[(2)] = inst_25973);

(statearr_25979_26007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (1))){
var inst_25940 = (new Array(n));
var inst_25941 = inst_25940;
var inst_25942 = (0);
var state_25977__$1 = (function (){var statearr_25980 = state_25977;
(statearr_25980[(7)] = inst_25941);

(statearr_25980[(8)] = inst_25942);

return statearr_25980;
})();
var statearr_25981_26008 = state_25977__$1;
(statearr_25981_26008[(2)] = null);

(statearr_25981_26008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (4))){
var inst_25945 = (state_25977[(9)]);
var inst_25945__$1 = (state_25977[(2)]);
var inst_25946 = (inst_25945__$1 == null);
var inst_25947 = cljs.core.not.call(null,inst_25946);
var state_25977__$1 = (function (){var statearr_25982 = state_25977;
(statearr_25982[(9)] = inst_25945__$1);

return statearr_25982;
})();
if(inst_25947){
var statearr_25983_26009 = state_25977__$1;
(statearr_25983_26009[(1)] = (5));

} else {
var statearr_25984_26010 = state_25977__$1;
(statearr_25984_26010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (15))){
var inst_25967 = (state_25977[(2)]);
var state_25977__$1 = state_25977;
var statearr_25985_26011 = state_25977__$1;
(statearr_25985_26011[(2)] = inst_25967);

(statearr_25985_26011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (13))){
var state_25977__$1 = state_25977;
var statearr_25986_26012 = state_25977__$1;
(statearr_25986_26012[(2)] = null);

(statearr_25986_26012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (6))){
var inst_25942 = (state_25977[(8)]);
var inst_25963 = (inst_25942 > (0));
var state_25977__$1 = state_25977;
if(cljs.core.truth_(inst_25963)){
var statearr_25987_26013 = state_25977__$1;
(statearr_25987_26013[(1)] = (12));

} else {
var statearr_25988_26014 = state_25977__$1;
(statearr_25988_26014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (3))){
var inst_25975 = (state_25977[(2)]);
var state_25977__$1 = state_25977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25977__$1,inst_25975);
} else {
if((state_val_25978 === (12))){
var inst_25941 = (state_25977[(7)]);
var inst_25965 = cljs.core.vec.call(null,inst_25941);
var state_25977__$1 = state_25977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25977__$1,(15),out,inst_25965);
} else {
if((state_val_25978 === (2))){
var state_25977__$1 = state_25977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25977__$1,(4),ch);
} else {
if((state_val_25978 === (11))){
var inst_25957 = (state_25977[(2)]);
var inst_25958 = (new Array(n));
var inst_25941 = inst_25958;
var inst_25942 = (0);
var state_25977__$1 = (function (){var statearr_25989 = state_25977;
(statearr_25989[(7)] = inst_25941);

(statearr_25989[(8)] = inst_25942);

(statearr_25989[(10)] = inst_25957);

return statearr_25989;
})();
var statearr_25990_26015 = state_25977__$1;
(statearr_25990_26015[(2)] = null);

(statearr_25990_26015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (9))){
var inst_25941 = (state_25977[(7)]);
var inst_25955 = cljs.core.vec.call(null,inst_25941);
var state_25977__$1 = state_25977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25977__$1,(11),out,inst_25955);
} else {
if((state_val_25978 === (5))){
var inst_25941 = (state_25977[(7)]);
var inst_25942 = (state_25977[(8)]);
var inst_25945 = (state_25977[(9)]);
var inst_25950 = (state_25977[(11)]);
var inst_25949 = (inst_25941[inst_25942] = inst_25945);
var inst_25950__$1 = (inst_25942 + (1));
var inst_25951 = (inst_25950__$1 < n);
var state_25977__$1 = (function (){var statearr_25991 = state_25977;
(statearr_25991[(12)] = inst_25949);

(statearr_25991[(11)] = inst_25950__$1);

return statearr_25991;
})();
if(cljs.core.truth_(inst_25951)){
var statearr_25992_26016 = state_25977__$1;
(statearr_25992_26016[(1)] = (8));

} else {
var statearr_25993_26017 = state_25977__$1;
(statearr_25993_26017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (14))){
var inst_25970 = (state_25977[(2)]);
var inst_25971 = cljs.core.async.close_BANG_.call(null,out);
var state_25977__$1 = (function (){var statearr_25995 = state_25977;
(statearr_25995[(13)] = inst_25970);

return statearr_25995;
})();
var statearr_25996_26018 = state_25977__$1;
(statearr_25996_26018[(2)] = inst_25971);

(statearr_25996_26018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (10))){
var inst_25961 = (state_25977[(2)]);
var state_25977__$1 = state_25977;
var statearr_25997_26019 = state_25977__$1;
(statearr_25997_26019[(2)] = inst_25961);

(statearr_25997_26019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25978 === (8))){
var inst_25941 = (state_25977[(7)]);
var inst_25950 = (state_25977[(11)]);
var tmp25994 = inst_25941;
var inst_25941__$1 = tmp25994;
var inst_25942 = inst_25950;
var state_25977__$1 = (function (){var statearr_25998 = state_25977;
(statearr_25998[(7)] = inst_25941__$1);

(statearr_25998[(8)] = inst_25942);

return statearr_25998;
})();
var statearr_25999_26020 = state_25977__$1;
(statearr_25999_26020[(2)] = null);

(statearr_25999_26020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_26000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26000[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_26000[(1)] = (1));

return statearr_26000;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_25977){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_25977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e26001){var ex__24057__auto__ = e26001;
var statearr_26002_26021 = state_25977;
(statearr_26002_26021[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_25977[(4)]))){
var statearr_26003_26022 = state_25977;
(statearr_26003_26022[(1)] = cljs.core.first.call(null,(state_25977[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26023 = state_25977;
state_25977 = G__26023;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_25977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_25977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_26004 = f__24128__auto__.call(null);
(statearr_26004[(6)] = c__24127__auto___26006);

return statearr_26004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26025 = arguments.length;
switch (G__26025) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24127__auto___26096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24128__auto__ = (function (){var switch__24053__auto__ = (function (state_26067){
var state_val_26068 = (state_26067[(1)]);
if((state_val_26068 === (7))){
var inst_26063 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26069_26097 = state_26067__$1;
(statearr_26069_26097[(2)] = inst_26063);

(statearr_26069_26097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (1))){
var inst_26026 = [];
var inst_26027 = inst_26026;
var inst_26028 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26067__$1 = (function (){var statearr_26070 = state_26067;
(statearr_26070[(7)] = inst_26027);

(statearr_26070[(8)] = inst_26028);

return statearr_26070;
})();
var statearr_26071_26098 = state_26067__$1;
(statearr_26071_26098[(2)] = null);

(statearr_26071_26098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (4))){
var inst_26031 = (state_26067[(9)]);
var inst_26031__$1 = (state_26067[(2)]);
var inst_26032 = (inst_26031__$1 == null);
var inst_26033 = cljs.core.not.call(null,inst_26032);
var state_26067__$1 = (function (){var statearr_26072 = state_26067;
(statearr_26072[(9)] = inst_26031__$1);

return statearr_26072;
})();
if(inst_26033){
var statearr_26073_26099 = state_26067__$1;
(statearr_26073_26099[(1)] = (5));

} else {
var statearr_26074_26100 = state_26067__$1;
(statearr_26074_26100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (15))){
var inst_26057 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26075_26101 = state_26067__$1;
(statearr_26075_26101[(2)] = inst_26057);

(statearr_26075_26101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (13))){
var state_26067__$1 = state_26067;
var statearr_26076_26102 = state_26067__$1;
(statearr_26076_26102[(2)] = null);

(statearr_26076_26102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (6))){
var inst_26027 = (state_26067[(7)]);
var inst_26052 = inst_26027.length;
var inst_26053 = (inst_26052 > (0));
var state_26067__$1 = state_26067;
if(cljs.core.truth_(inst_26053)){
var statearr_26077_26103 = state_26067__$1;
(statearr_26077_26103[(1)] = (12));

} else {
var statearr_26078_26104 = state_26067__$1;
(statearr_26078_26104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (3))){
var inst_26065 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26067__$1,inst_26065);
} else {
if((state_val_26068 === (12))){
var inst_26027 = (state_26067[(7)]);
var inst_26055 = cljs.core.vec.call(null,inst_26027);
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26067__$1,(15),out,inst_26055);
} else {
if((state_val_26068 === (2))){
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26067__$1,(4),ch);
} else {
if((state_val_26068 === (11))){
var inst_26031 = (state_26067[(9)]);
var inst_26035 = (state_26067[(10)]);
var inst_26045 = (state_26067[(2)]);
var inst_26046 = [];
var inst_26047 = inst_26046.push(inst_26031);
var inst_26027 = inst_26046;
var inst_26028 = inst_26035;
var state_26067__$1 = (function (){var statearr_26079 = state_26067;
(statearr_26079[(11)] = inst_26045);

(statearr_26079[(7)] = inst_26027);

(statearr_26079[(12)] = inst_26047);

(statearr_26079[(8)] = inst_26028);

return statearr_26079;
})();
var statearr_26080_26105 = state_26067__$1;
(statearr_26080_26105[(2)] = null);

(statearr_26080_26105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (9))){
var inst_26027 = (state_26067[(7)]);
var inst_26043 = cljs.core.vec.call(null,inst_26027);
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26067__$1,(11),out,inst_26043);
} else {
if((state_val_26068 === (5))){
var inst_26031 = (state_26067[(9)]);
var inst_26035 = (state_26067[(10)]);
var inst_26028 = (state_26067[(8)]);
var inst_26035__$1 = f.call(null,inst_26031);
var inst_26036 = cljs.core._EQ_.call(null,inst_26035__$1,inst_26028);
var inst_26037 = cljs.core.keyword_identical_QMARK_.call(null,inst_26028,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26038 = ((inst_26036) || (inst_26037));
var state_26067__$1 = (function (){var statearr_26081 = state_26067;
(statearr_26081[(10)] = inst_26035__$1);

return statearr_26081;
})();
if(cljs.core.truth_(inst_26038)){
var statearr_26082_26106 = state_26067__$1;
(statearr_26082_26106[(1)] = (8));

} else {
var statearr_26083_26107 = state_26067__$1;
(statearr_26083_26107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (14))){
var inst_26060 = (state_26067[(2)]);
var inst_26061 = cljs.core.async.close_BANG_.call(null,out);
var state_26067__$1 = (function (){var statearr_26085 = state_26067;
(statearr_26085[(13)] = inst_26060);

return statearr_26085;
})();
var statearr_26086_26108 = state_26067__$1;
(statearr_26086_26108[(2)] = inst_26061);

(statearr_26086_26108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (10))){
var inst_26050 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26087_26109 = state_26067__$1;
(statearr_26087_26109[(2)] = inst_26050);

(statearr_26087_26109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (8))){
var inst_26031 = (state_26067[(9)]);
var inst_26027 = (state_26067[(7)]);
var inst_26035 = (state_26067[(10)]);
var inst_26040 = inst_26027.push(inst_26031);
var tmp26084 = inst_26027;
var inst_26027__$1 = tmp26084;
var inst_26028 = inst_26035;
var state_26067__$1 = (function (){var statearr_26088 = state_26067;
(statearr_26088[(14)] = inst_26040);

(statearr_26088[(7)] = inst_26027__$1);

(statearr_26088[(8)] = inst_26028);

return statearr_26088;
})();
var statearr_26089_26110 = state_26067__$1;
(statearr_26089_26110[(2)] = null);

(statearr_26089_26110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24054__auto__ = null;
var cljs$core$async$state_machine__24054__auto____0 = (function (){
var statearr_26090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26090[(0)] = cljs$core$async$state_machine__24054__auto__);

(statearr_26090[(1)] = (1));

return statearr_26090;
});
var cljs$core$async$state_machine__24054__auto____1 = (function (state_26067){
while(true){
var ret_value__24055__auto__ = (function (){try{while(true){
var result__24056__auto__ = switch__24053__auto__.call(null,state_26067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24056__auto__;
}
break;
}
}catch (e26091){var ex__24057__auto__ = e26091;
var statearr_26092_26111 = state_26067;
(statearr_26092_26111[(2)] = ex__24057__auto__);


if(cljs.core.seq.call(null,(state_26067[(4)]))){
var statearr_26093_26112 = state_26067;
(statearr_26093_26112[(1)] = cljs.core.first.call(null,(state_26067[(4)])));

} else {
throw ex__24057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26113 = state_26067;
state_26067 = G__26113;
continue;
} else {
return ret_value__24055__auto__;
}
break;
}
});
cljs$core$async$state_machine__24054__auto__ = function(state_26067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24054__auto____1.call(this,state_26067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24054__auto____0;
cljs$core$async$state_machine__24054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24054__auto____1;
return cljs$core$async$state_machine__24054__auto__;
})()
})();
var state__24129__auto__ = (function (){var statearr_26094 = f__24128__auto__.call(null);
(statearr_26094[(6)] = c__24127__auto___26096);

return statearr_26094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24129__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
