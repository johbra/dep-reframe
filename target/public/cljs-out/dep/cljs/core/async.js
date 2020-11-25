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
var G__18951 = arguments.length;
switch (G__18951) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18952 = (function (f,blockable,meta18953){
this.f = f;
this.blockable = blockable;
this.meta18953 = meta18953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18954,meta18953__$1){
var self__ = this;
var _18954__$1 = this;
return (new cljs.core.async.t_cljs$core$async18952(self__.f,self__.blockable,meta18953__$1));
}));

(cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18954){
var self__ = this;
var _18954__$1 = this;
return self__.meta18953;
}));

(cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18953","meta18953",-957923148,null)], null);
}));

(cljs.core.async.t_cljs$core$async18952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18952");

(cljs.core.async.t_cljs$core$async18952.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18952.
 */
cljs.core.async.__GT_t_cljs$core$async18952 = (function cljs$core$async$__GT_t_cljs$core$async18952(f__$1,blockable__$1,meta18953){
return (new cljs.core.async.t_cljs$core$async18952(f__$1,blockable__$1,meta18953));
});

}

return (new cljs.core.async.t_cljs$core$async18952(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18958 = arguments.length;
switch (G__18958) {
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
var G__18961 = arguments.length;
switch (G__18961) {
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
var G__18964 = arguments.length;
switch (G__18964) {
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
var val_18966 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18966);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_18966);
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
var G__18968 = arguments.length;
switch (G__18968) {
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
var n__4613__auto___18970 = n;
var x_18971 = (0);
while(true){
if((x_18971 < n__4613__auto___18970)){
(a[x_18971] = x_18971);

var G__18972 = (x_18971 + (1));
x_18971 = G__18972;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18973 = (function (flag,meta18974){
this.flag = flag;
this.meta18974 = meta18974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18975,meta18974__$1){
var self__ = this;
var _18975__$1 = this;
return (new cljs.core.async.t_cljs$core$async18973(self__.flag,meta18974__$1));
}));

(cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18975){
var self__ = this;
var _18975__$1 = this;
return self__.meta18974;
}));

(cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18974","meta18974",213654395,null)], null);
}));

(cljs.core.async.t_cljs$core$async18973.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18973");

(cljs.core.async.t_cljs$core$async18973.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18973");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18973.
 */
cljs.core.async.__GT_t_cljs$core$async18973 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18973(flag__$1,meta18974){
return (new cljs.core.async.t_cljs$core$async18973(flag__$1,meta18974));
});

}

return (new cljs.core.async.t_cljs$core$async18973(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18976 = (function (flag,cb,meta18977){
this.flag = flag;
this.cb = cb;
this.meta18977 = meta18977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18978,meta18977__$1){
var self__ = this;
var _18978__$1 = this;
return (new cljs.core.async.t_cljs$core$async18976(self__.flag,self__.cb,meta18977__$1));
}));

(cljs.core.async.t_cljs$core$async18976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18978){
var self__ = this;
var _18978__$1 = this;
return self__.meta18977;
}));

(cljs.core.async.t_cljs$core$async18976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18977","meta18977",1432368508,null)], null);
}));

(cljs.core.async.t_cljs$core$async18976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18976");

(cljs.core.async.t_cljs$core$async18976.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18976.
 */
cljs.core.async.__GT_t_cljs$core$async18976 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18976(flag__$1,cb__$1,meta18977){
return (new cljs.core.async.t_cljs$core$async18976(flag__$1,cb__$1,meta18977));
});

}

return (new cljs.core.async.t_cljs$core$async18976(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18979_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18979_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18980_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18980_SHARP_,port], null));
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
var G__18981 = (i + (1));
i = G__18981;
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
var len__4736__auto___18987 = arguments.length;
var i__4737__auto___18988 = (0);
while(true){
if((i__4737__auto___18988 < len__4736__auto___18987)){
args__4742__auto__.push((arguments[i__4737__auto___18988]));

var G__18989 = (i__4737__auto___18988 + (1));
i__4737__auto___18988 = G__18989;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18984){
var map__18985 = p__18984;
var map__18985__$1 = (((((!((map__18985 == null))))?(((((map__18985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18985):map__18985);
var opts = map__18985__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18982){
var G__18983 = cljs.core.first.call(null,seq18982);
var seq18982__$1 = cljs.core.next.call(null,seq18982);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18983,seq18982__$1);
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
var G__18991 = arguments.length;
switch (G__18991) {
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
var c__18891__auto___19038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19015){
var state_val_19016 = (state_19015[(1)]);
if((state_val_19016 === (7))){
var inst_19011 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
var statearr_19017_19039 = state_19015__$1;
(statearr_19017_19039[(2)] = inst_19011);

(statearr_19017_19039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (1))){
var state_19015__$1 = state_19015;
var statearr_19018_19040 = state_19015__$1;
(statearr_19018_19040[(2)] = null);

(statearr_19018_19040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (4))){
var inst_18994 = (state_19015[(7)]);
var inst_18994__$1 = (state_19015[(2)]);
var inst_18995 = (inst_18994__$1 == null);
var state_19015__$1 = (function (){var statearr_19019 = state_19015;
(statearr_19019[(7)] = inst_18994__$1);

return statearr_19019;
})();
if(cljs.core.truth_(inst_18995)){
var statearr_19020_19041 = state_19015__$1;
(statearr_19020_19041[(1)] = (5));

} else {
var statearr_19021_19042 = state_19015__$1;
(statearr_19021_19042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (13))){
var state_19015__$1 = state_19015;
var statearr_19022_19043 = state_19015__$1;
(statearr_19022_19043[(2)] = null);

(statearr_19022_19043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (6))){
var inst_18994 = (state_19015[(7)]);
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19015__$1,(11),to,inst_18994);
} else {
if((state_val_19016 === (3))){
var inst_19013 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19015__$1,inst_19013);
} else {
if((state_val_19016 === (12))){
var state_19015__$1 = state_19015;
var statearr_19023_19044 = state_19015__$1;
(statearr_19023_19044[(2)] = null);

(statearr_19023_19044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (2))){
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19015__$1,(4),from);
} else {
if((state_val_19016 === (11))){
var inst_19004 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
if(cljs.core.truth_(inst_19004)){
var statearr_19024_19045 = state_19015__$1;
(statearr_19024_19045[(1)] = (12));

} else {
var statearr_19025_19046 = state_19015__$1;
(statearr_19025_19046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (9))){
var state_19015__$1 = state_19015;
var statearr_19026_19047 = state_19015__$1;
(statearr_19026_19047[(2)] = null);

(statearr_19026_19047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (5))){
var state_19015__$1 = state_19015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19027_19048 = state_19015__$1;
(statearr_19027_19048[(1)] = (8));

} else {
var statearr_19028_19049 = state_19015__$1;
(statearr_19028_19049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (14))){
var inst_19009 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
var statearr_19029_19050 = state_19015__$1;
(statearr_19029_19050[(2)] = inst_19009);

(statearr_19029_19050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (10))){
var inst_19001 = (state_19015[(2)]);
var state_19015__$1 = state_19015;
var statearr_19030_19051 = state_19015__$1;
(statearr_19030_19051[(2)] = inst_19001);

(statearr_19030_19051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19016 === (8))){
var inst_18998 = cljs.core.async.close_BANG_.call(null,to);
var state_19015__$1 = state_19015;
var statearr_19031_19052 = state_19015__$1;
(statearr_19031_19052[(2)] = inst_18998);

(statearr_19031_19052[(1)] = (10));


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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_19032 = [null,null,null,null,null,null,null,null];
(statearr_19032[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_19032[(1)] = (1));

return statearr_19032;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_19015){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19033){var ex__18821__auto__ = e19033;
var statearr_19034_19053 = state_19015;
(statearr_19034_19053[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19015[(4)]))){
var statearr_19035_19054 = state_19015;
(statearr_19035_19054[(1)] = cljs.core.first.call(null,(state_19015[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19055 = state_19015;
state_19015 = G__19055;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_19015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_19015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19036 = f__18892__auto__.call(null);
(statearr_19036[(6)] = c__18891__auto___19038);

return statearr_19036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
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
var process = (function (p__19056){
var vec__19057 = p__19056;
var v = cljs.core.nth.call(null,vec__19057,(0),null);
var p = cljs.core.nth.call(null,vec__19057,(1),null);
var job = vec__19057;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18891__auto___19233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19064){
var state_val_19065 = (state_19064[(1)]);
if((state_val_19065 === (1))){
var state_19064__$1 = state_19064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19064__$1,(2),res,v);
} else {
if((state_val_19065 === (2))){
var inst_19061 = (state_19064[(2)]);
var inst_19062 = cljs.core.async.close_BANG_.call(null,res);
var state_19064__$1 = (function (){var statearr_19066 = state_19064;
(statearr_19066[(7)] = inst_19061);

return statearr_19066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19064__$1,inst_19062);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0 = (function (){
var statearr_19067 = [null,null,null,null,null,null,null,null];
(statearr_19067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__);

(statearr_19067[(1)] = (1));

return statearr_19067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1 = (function (state_19064){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19068){var ex__18821__auto__ = e19068;
var statearr_19069_19234 = state_19064;
(statearr_19069_19234[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19064[(4)]))){
var statearr_19070_19235 = state_19064;
(statearr_19070_19235[(1)] = cljs.core.first.call(null,(state_19064[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19236 = state_19064;
state_19064 = G__19236;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = function(state_19064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1.call(this,state_19064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19071 = f__18892__auto__.call(null);
(statearr_19071[(6)] = c__18891__auto___19233);

return statearr_19071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__19072){
var vec__19073 = p__19072;
var v = cljs.core.nth.call(null,vec__19073,(0),null);
var p = cljs.core.nth.call(null,vec__19073,(1),null);
var job = vec__19073;
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
var n__4613__auto___19237 = n;
var __19238 = (0);
while(true){
if((__19238 < n__4613__auto___19237)){
var G__19076_19239 = type;
var G__19076_19240__$1 = (((G__19076_19239 instanceof cljs.core.Keyword))?G__19076_19239.fqn:null);
switch (G__19076_19240__$1) {
case "compute":
var c__18891__auto___19242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19238,c__18891__auto___19242,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async){
return (function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = ((function (__19238,c__18891__auto___19242,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async){
return (function (state_19089){
var state_val_19090 = (state_19089[(1)]);
if((state_val_19090 === (1))){
var state_19089__$1 = state_19089;
var statearr_19091_19243 = state_19089__$1;
(statearr_19091_19243[(2)] = null);

(statearr_19091_19243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19090 === (2))){
var state_19089__$1 = state_19089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19089__$1,(4),jobs);
} else {
if((state_val_19090 === (3))){
var inst_19087 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19089__$1,inst_19087);
} else {
if((state_val_19090 === (4))){
var inst_19079 = (state_19089[(2)]);
var inst_19080 = process.call(null,inst_19079);
var state_19089__$1 = state_19089;
if(cljs.core.truth_(inst_19080)){
var statearr_19092_19244 = state_19089__$1;
(statearr_19092_19244[(1)] = (5));

} else {
var statearr_19093_19245 = state_19089__$1;
(statearr_19093_19245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19090 === (5))){
var state_19089__$1 = state_19089;
var statearr_19094_19246 = state_19089__$1;
(statearr_19094_19246[(2)] = null);

(statearr_19094_19246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19090 === (6))){
var state_19089__$1 = state_19089;
var statearr_19095_19247 = state_19089__$1;
(statearr_19095_19247[(2)] = null);

(statearr_19095_19247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19090 === (7))){
var inst_19085 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
var statearr_19096_19248 = state_19089__$1;
(statearr_19096_19248[(2)] = inst_19085);

(statearr_19096_19248[(1)] = (3));


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
});})(__19238,c__18891__auto___19242,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async))
;
return ((function (__19238,switch__18817__auto__,c__18891__auto___19242,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0 = (function (){
var statearr_19097 = [null,null,null,null,null,null,null];
(statearr_19097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__);

(statearr_19097[(1)] = (1));

return statearr_19097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1 = (function (state_19089){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19098){var ex__18821__auto__ = e19098;
var statearr_19099_19249 = state_19089;
(statearr_19099_19249[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19089[(4)]))){
var statearr_19100_19250 = state_19089;
(statearr_19100_19250[(1)] = cljs.core.first.call(null,(state_19089[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19251 = state_19089;
state_19089 = G__19251;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = function(state_19089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1.call(this,state_19089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__;
})()
;})(__19238,switch__18817__auto__,c__18891__auto___19242,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async))
})();
var state__18893__auto__ = (function (){var statearr_19101 = f__18892__auto__.call(null);
(statearr_19101[(6)] = c__18891__auto___19242);

return statearr_19101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
});})(__19238,c__18891__auto___19242,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async))
);


break;
case "async":
var c__18891__auto___19252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19238,c__18891__auto___19252,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async){
return (function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = ((function (__19238,c__18891__auto___19252,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async){
return (function (state_19114){
var state_val_19115 = (state_19114[(1)]);
if((state_val_19115 === (1))){
var state_19114__$1 = state_19114;
var statearr_19116_19253 = state_19114__$1;
(statearr_19116_19253[(2)] = null);

(statearr_19116_19253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (2))){
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19114__$1,(4),jobs);
} else {
if((state_val_19115 === (3))){
var inst_19112 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19114__$1,inst_19112);
} else {
if((state_val_19115 === (4))){
var inst_19104 = (state_19114[(2)]);
var inst_19105 = async.call(null,inst_19104);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19105)){
var statearr_19117_19254 = state_19114__$1;
(statearr_19117_19254[(1)] = (5));

} else {
var statearr_19118_19255 = state_19114__$1;
(statearr_19118_19255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (5))){
var state_19114__$1 = state_19114;
var statearr_19119_19256 = state_19114__$1;
(statearr_19119_19256[(2)] = null);

(statearr_19119_19256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (6))){
var state_19114__$1 = state_19114;
var statearr_19120_19257 = state_19114__$1;
(statearr_19120_19257[(2)] = null);

(statearr_19120_19257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (7))){
var inst_19110 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19121_19258 = state_19114__$1;
(statearr_19121_19258[(2)] = inst_19110);

(statearr_19121_19258[(1)] = (3));


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
});})(__19238,c__18891__auto___19252,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async))
;
return ((function (__19238,switch__18817__auto__,c__18891__auto___19252,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0 = (function (){
var statearr_19122 = [null,null,null,null,null,null,null];
(statearr_19122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__);

(statearr_19122[(1)] = (1));

return statearr_19122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1 = (function (state_19114){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19123){var ex__18821__auto__ = e19123;
var statearr_19124_19259 = state_19114;
(statearr_19124_19259[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19114[(4)]))){
var statearr_19125_19260 = state_19114;
(statearr_19125_19260[(1)] = cljs.core.first.call(null,(state_19114[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19261 = state_19114;
state_19114 = G__19261;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = function(state_19114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1.call(this,state_19114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__;
})()
;})(__19238,switch__18817__auto__,c__18891__auto___19252,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async))
})();
var state__18893__auto__ = (function (){var statearr_19126 = f__18892__auto__.call(null);
(statearr_19126[(6)] = c__18891__auto___19252);

return statearr_19126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
});})(__19238,c__18891__auto___19252,G__19076_19239,G__19076_19240__$1,n__4613__auto___19237,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19076_19240__$1)].join('')));

}

var G__19262 = (__19238 + (1));
__19238 = G__19262;
continue;
} else {
}
break;
}

var c__18891__auto___19263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19148){
var state_val_19149 = (state_19148[(1)]);
if((state_val_19149 === (7))){
var inst_19144 = (state_19148[(2)]);
var state_19148__$1 = state_19148;
var statearr_19150_19264 = state_19148__$1;
(statearr_19150_19264[(2)] = inst_19144);

(statearr_19150_19264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19149 === (1))){
var state_19148__$1 = state_19148;
var statearr_19151_19265 = state_19148__$1;
(statearr_19151_19265[(2)] = null);

(statearr_19151_19265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19149 === (4))){
var inst_19129 = (state_19148[(7)]);
var inst_19129__$1 = (state_19148[(2)]);
var inst_19130 = (inst_19129__$1 == null);
var state_19148__$1 = (function (){var statearr_19152 = state_19148;
(statearr_19152[(7)] = inst_19129__$1);

return statearr_19152;
})();
if(cljs.core.truth_(inst_19130)){
var statearr_19153_19266 = state_19148__$1;
(statearr_19153_19266[(1)] = (5));

} else {
var statearr_19154_19267 = state_19148__$1;
(statearr_19154_19267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19149 === (6))){
var inst_19129 = (state_19148[(7)]);
var inst_19134 = (state_19148[(8)]);
var inst_19134__$1 = cljs.core.async.chan.call(null,(1));
var inst_19135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19136 = [inst_19129,inst_19134__$1];
var inst_19137 = (new cljs.core.PersistentVector(null,2,(5),inst_19135,inst_19136,null));
var state_19148__$1 = (function (){var statearr_19155 = state_19148;
(statearr_19155[(8)] = inst_19134__$1);

return statearr_19155;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19148__$1,(8),jobs,inst_19137);
} else {
if((state_val_19149 === (3))){
var inst_19146 = (state_19148[(2)]);
var state_19148__$1 = state_19148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19148__$1,inst_19146);
} else {
if((state_val_19149 === (2))){
var state_19148__$1 = state_19148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19148__$1,(4),from);
} else {
if((state_val_19149 === (9))){
var inst_19141 = (state_19148[(2)]);
var state_19148__$1 = (function (){var statearr_19156 = state_19148;
(statearr_19156[(9)] = inst_19141);

return statearr_19156;
})();
var statearr_19157_19268 = state_19148__$1;
(statearr_19157_19268[(2)] = null);

(statearr_19157_19268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19149 === (5))){
var inst_19132 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19148__$1 = state_19148;
var statearr_19158_19269 = state_19148__$1;
(statearr_19158_19269[(2)] = inst_19132);

(statearr_19158_19269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19149 === (8))){
var inst_19134 = (state_19148[(8)]);
var inst_19139 = (state_19148[(2)]);
var state_19148__$1 = (function (){var statearr_19159 = state_19148;
(statearr_19159[(10)] = inst_19139);

return statearr_19159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19148__$1,(9),results,inst_19134);
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
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0 = (function (){
var statearr_19160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__);

(statearr_19160[(1)] = (1));

return statearr_19160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1 = (function (state_19148){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19161){var ex__18821__auto__ = e19161;
var statearr_19162_19270 = state_19148;
(statearr_19162_19270[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19148[(4)]))){
var statearr_19163_19271 = state_19148;
(statearr_19163_19271[(1)] = cljs.core.first.call(null,(state_19148[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19272 = state_19148;
state_19148 = G__19272;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = function(state_19148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1.call(this,state_19148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19164 = f__18892__auto__.call(null);
(statearr_19164[(6)] = c__18891__auto___19263);

return statearr_19164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19202){
var state_val_19203 = (state_19202[(1)]);
if((state_val_19203 === (7))){
var inst_19198 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
var statearr_19204_19273 = state_19202__$1;
(statearr_19204_19273[(2)] = inst_19198);

(statearr_19204_19273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (20))){
var state_19202__$1 = state_19202;
var statearr_19205_19274 = state_19202__$1;
(statearr_19205_19274[(2)] = null);

(statearr_19205_19274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (1))){
var state_19202__$1 = state_19202;
var statearr_19206_19275 = state_19202__$1;
(statearr_19206_19275[(2)] = null);

(statearr_19206_19275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (4))){
var inst_19167 = (state_19202[(7)]);
var inst_19167__$1 = (state_19202[(2)]);
var inst_19168 = (inst_19167__$1 == null);
var state_19202__$1 = (function (){var statearr_19207 = state_19202;
(statearr_19207[(7)] = inst_19167__$1);

return statearr_19207;
})();
if(cljs.core.truth_(inst_19168)){
var statearr_19208_19276 = state_19202__$1;
(statearr_19208_19276[(1)] = (5));

} else {
var statearr_19209_19277 = state_19202__$1;
(statearr_19209_19277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (15))){
var inst_19180 = (state_19202[(8)]);
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19202__$1,(18),to,inst_19180);
} else {
if((state_val_19203 === (21))){
var inst_19193 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
var statearr_19210_19278 = state_19202__$1;
(statearr_19210_19278[(2)] = inst_19193);

(statearr_19210_19278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (13))){
var inst_19195 = (state_19202[(2)]);
var state_19202__$1 = (function (){var statearr_19211 = state_19202;
(statearr_19211[(9)] = inst_19195);

return statearr_19211;
})();
var statearr_19212_19279 = state_19202__$1;
(statearr_19212_19279[(2)] = null);

(statearr_19212_19279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (6))){
var inst_19167 = (state_19202[(7)]);
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19202__$1,(11),inst_19167);
} else {
if((state_val_19203 === (17))){
var inst_19188 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
if(cljs.core.truth_(inst_19188)){
var statearr_19213_19280 = state_19202__$1;
(statearr_19213_19280[(1)] = (19));

} else {
var statearr_19214_19281 = state_19202__$1;
(statearr_19214_19281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (3))){
var inst_19200 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19202__$1,inst_19200);
} else {
if((state_val_19203 === (12))){
var inst_19177 = (state_19202[(10)]);
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19202__$1,(14),inst_19177);
} else {
if((state_val_19203 === (2))){
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19202__$1,(4),results);
} else {
if((state_val_19203 === (19))){
var state_19202__$1 = state_19202;
var statearr_19215_19282 = state_19202__$1;
(statearr_19215_19282[(2)] = null);

(statearr_19215_19282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (11))){
var inst_19177 = (state_19202[(2)]);
var state_19202__$1 = (function (){var statearr_19216 = state_19202;
(statearr_19216[(10)] = inst_19177);

return statearr_19216;
})();
var statearr_19217_19283 = state_19202__$1;
(statearr_19217_19283[(2)] = null);

(statearr_19217_19283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (9))){
var state_19202__$1 = state_19202;
var statearr_19218_19284 = state_19202__$1;
(statearr_19218_19284[(2)] = null);

(statearr_19218_19284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (5))){
var state_19202__$1 = state_19202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19219_19285 = state_19202__$1;
(statearr_19219_19285[(1)] = (8));

} else {
var statearr_19220_19286 = state_19202__$1;
(statearr_19220_19286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (14))){
var inst_19180 = (state_19202[(8)]);
var inst_19180__$1 = (state_19202[(2)]);
var inst_19181 = (inst_19180__$1 == null);
var inst_19182 = cljs.core.not.call(null,inst_19181);
var state_19202__$1 = (function (){var statearr_19221 = state_19202;
(statearr_19221[(8)] = inst_19180__$1);

return statearr_19221;
})();
if(inst_19182){
var statearr_19222_19287 = state_19202__$1;
(statearr_19222_19287[(1)] = (15));

} else {
var statearr_19223_19288 = state_19202__$1;
(statearr_19223_19288[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (16))){
var state_19202__$1 = state_19202;
var statearr_19224_19289 = state_19202__$1;
(statearr_19224_19289[(2)] = false);

(statearr_19224_19289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (10))){
var inst_19174 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
var statearr_19225_19290 = state_19202__$1;
(statearr_19225_19290[(2)] = inst_19174);

(statearr_19225_19290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (18))){
var inst_19185 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
var statearr_19226_19291 = state_19202__$1;
(statearr_19226_19291[(2)] = inst_19185);

(statearr_19226_19291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (8))){
var inst_19171 = cljs.core.async.close_BANG_.call(null,to);
var state_19202__$1 = state_19202;
var statearr_19227_19292 = state_19202__$1;
(statearr_19227_19292[(2)] = inst_19171);

(statearr_19227_19292[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0 = (function (){
var statearr_19228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__);

(statearr_19228[(1)] = (1));

return statearr_19228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1 = (function (state_19202){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19229){var ex__18821__auto__ = e19229;
var statearr_19230_19293 = state_19202;
(statearr_19230_19293[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19202[(4)]))){
var statearr_19231_19294 = state_19202;
(statearr_19231_19294[(1)] = cljs.core.first.call(null,(state_19202[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19295 = state_19202;
state_19202 = G__19295;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__ = function(state_19202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1.call(this,state_19202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19232 = f__18892__auto__.call(null);
(statearr_19232[(6)] = c__18891__auto__);

return statearr_19232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
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
var G__19297 = arguments.length;
switch (G__19297) {
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
var G__19300 = arguments.length;
switch (G__19300) {
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
var G__19303 = arguments.length;
switch (G__19303) {
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
var c__18891__auto___19353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19329){
var state_val_19330 = (state_19329[(1)]);
if((state_val_19330 === (7))){
var inst_19325 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19331_19354 = state_19329__$1;
(statearr_19331_19354[(2)] = inst_19325);

(statearr_19331_19354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (1))){
var state_19329__$1 = state_19329;
var statearr_19332_19355 = state_19329__$1;
(statearr_19332_19355[(2)] = null);

(statearr_19332_19355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (4))){
var inst_19306 = (state_19329[(7)]);
var inst_19306__$1 = (state_19329[(2)]);
var inst_19307 = (inst_19306__$1 == null);
var state_19329__$1 = (function (){var statearr_19333 = state_19329;
(statearr_19333[(7)] = inst_19306__$1);

return statearr_19333;
})();
if(cljs.core.truth_(inst_19307)){
var statearr_19334_19356 = state_19329__$1;
(statearr_19334_19356[(1)] = (5));

} else {
var statearr_19335_19357 = state_19329__$1;
(statearr_19335_19357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (13))){
var state_19329__$1 = state_19329;
var statearr_19336_19358 = state_19329__$1;
(statearr_19336_19358[(2)] = null);

(statearr_19336_19358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (6))){
var inst_19306 = (state_19329[(7)]);
var inst_19312 = p.call(null,inst_19306);
var state_19329__$1 = state_19329;
if(cljs.core.truth_(inst_19312)){
var statearr_19337_19359 = state_19329__$1;
(statearr_19337_19359[(1)] = (9));

} else {
var statearr_19338_19360 = state_19329__$1;
(statearr_19338_19360[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (3))){
var inst_19327 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19329__$1,inst_19327);
} else {
if((state_val_19330 === (12))){
var state_19329__$1 = state_19329;
var statearr_19339_19361 = state_19329__$1;
(statearr_19339_19361[(2)] = null);

(statearr_19339_19361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (2))){
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19329__$1,(4),ch);
} else {
if((state_val_19330 === (11))){
var inst_19306 = (state_19329[(7)]);
var inst_19316 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19329__$1,(8),inst_19316,inst_19306);
} else {
if((state_val_19330 === (9))){
var state_19329__$1 = state_19329;
var statearr_19340_19362 = state_19329__$1;
(statearr_19340_19362[(2)] = tc);

(statearr_19340_19362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (5))){
var inst_19309 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19310 = cljs.core.async.close_BANG_.call(null,fc);
var state_19329__$1 = (function (){var statearr_19341 = state_19329;
(statearr_19341[(8)] = inst_19309);

return statearr_19341;
})();
var statearr_19342_19363 = state_19329__$1;
(statearr_19342_19363[(2)] = inst_19310);

(statearr_19342_19363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (14))){
var inst_19323 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19343_19364 = state_19329__$1;
(statearr_19343_19364[(2)] = inst_19323);

(statearr_19343_19364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (10))){
var state_19329__$1 = state_19329;
var statearr_19344_19365 = state_19329__$1;
(statearr_19344_19365[(2)] = fc);

(statearr_19344_19365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19330 === (8))){
var inst_19318 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
if(cljs.core.truth_(inst_19318)){
var statearr_19345_19366 = state_19329__$1;
(statearr_19345_19366[(1)] = (12));

} else {
var statearr_19346_19367 = state_19329__$1;
(statearr_19346_19367[(1)] = (13));

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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_19347 = [null,null,null,null,null,null,null,null,null];
(statearr_19347[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_19347[(1)] = (1));

return statearr_19347;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_19329){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19348){var ex__18821__auto__ = e19348;
var statearr_19349_19368 = state_19329;
(statearr_19349_19368[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19329[(4)]))){
var statearr_19350_19369 = state_19329;
(statearr_19350_19369[(1)] = cljs.core.first.call(null,(state_19329[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19370 = state_19329;
state_19329 = G__19370;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_19329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_19329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19351 = f__18892__auto__.call(null);
(statearr_19351[(6)] = c__18891__auto___19353);

return statearr_19351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
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
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19392){
var state_val_19393 = (state_19392[(1)]);
if((state_val_19393 === (7))){
var inst_19388 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
var statearr_19394_19413 = state_19392__$1;
(statearr_19394_19413[(2)] = inst_19388);

(statearr_19394_19413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (1))){
var inst_19371 = init;
var inst_19372 = inst_19371;
var state_19392__$1 = (function (){var statearr_19395 = state_19392;
(statearr_19395[(7)] = inst_19372);

return statearr_19395;
})();
var statearr_19396_19414 = state_19392__$1;
(statearr_19396_19414[(2)] = null);

(statearr_19396_19414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (4))){
var inst_19375 = (state_19392[(8)]);
var inst_19375__$1 = (state_19392[(2)]);
var inst_19376 = (inst_19375__$1 == null);
var state_19392__$1 = (function (){var statearr_19397 = state_19392;
(statearr_19397[(8)] = inst_19375__$1);

return statearr_19397;
})();
if(cljs.core.truth_(inst_19376)){
var statearr_19398_19415 = state_19392__$1;
(statearr_19398_19415[(1)] = (5));

} else {
var statearr_19399_19416 = state_19392__$1;
(statearr_19399_19416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (6))){
var inst_19372 = (state_19392[(7)]);
var inst_19379 = (state_19392[(9)]);
var inst_19375 = (state_19392[(8)]);
var inst_19379__$1 = f.call(null,inst_19372,inst_19375);
var inst_19380 = cljs.core.reduced_QMARK_.call(null,inst_19379__$1);
var state_19392__$1 = (function (){var statearr_19400 = state_19392;
(statearr_19400[(9)] = inst_19379__$1);

return statearr_19400;
})();
if(inst_19380){
var statearr_19401_19417 = state_19392__$1;
(statearr_19401_19417[(1)] = (8));

} else {
var statearr_19402_19418 = state_19392__$1;
(statearr_19402_19418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (3))){
var inst_19390 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19392__$1,inst_19390);
} else {
if((state_val_19393 === (2))){
var state_19392__$1 = state_19392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19392__$1,(4),ch);
} else {
if((state_val_19393 === (9))){
var inst_19379 = (state_19392[(9)]);
var inst_19372 = inst_19379;
var state_19392__$1 = (function (){var statearr_19403 = state_19392;
(statearr_19403[(7)] = inst_19372);

return statearr_19403;
})();
var statearr_19404_19419 = state_19392__$1;
(statearr_19404_19419[(2)] = null);

(statearr_19404_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (5))){
var inst_19372 = (state_19392[(7)]);
var state_19392__$1 = state_19392;
var statearr_19405_19420 = state_19392__$1;
(statearr_19405_19420[(2)] = inst_19372);

(statearr_19405_19420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (10))){
var inst_19386 = (state_19392[(2)]);
var state_19392__$1 = state_19392;
var statearr_19406_19421 = state_19392__$1;
(statearr_19406_19421[(2)] = inst_19386);

(statearr_19406_19421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19393 === (8))){
var inst_19379 = (state_19392[(9)]);
var inst_19382 = cljs.core.deref.call(null,inst_19379);
var state_19392__$1 = state_19392;
var statearr_19407_19422 = state_19392__$1;
(statearr_19407_19422[(2)] = inst_19382);

(statearr_19407_19422[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__18818__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18818__auto____0 = (function (){
var statearr_19408 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19408[(0)] = cljs$core$async$reduce_$_state_machine__18818__auto__);

(statearr_19408[(1)] = (1));

return statearr_19408;
});
var cljs$core$async$reduce_$_state_machine__18818__auto____1 = (function (state_19392){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19409){var ex__18821__auto__ = e19409;
var statearr_19410_19423 = state_19392;
(statearr_19410_19423[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19392[(4)]))){
var statearr_19411_19424 = state_19392;
(statearr_19411_19424[(1)] = cljs.core.first.call(null,(state_19392[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19425 = state_19392;
state_19392 = G__19425;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18818__auto__ = function(state_19392){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18818__auto____1.call(this,state_19392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18818__auto____0;
cljs$core$async$reduce_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18818__auto____1;
return cljs$core$async$reduce_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19412 = f__18892__auto__.call(null);
(statearr_19412[(6)] = c__18891__auto__);

return statearr_19412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19431){
var state_val_19432 = (state_19431[(1)]);
if((state_val_19432 === (1))){
var inst_19426 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19431__$1,(2),inst_19426);
} else {
if((state_val_19432 === (2))){
var inst_19428 = (state_19431[(2)]);
var inst_19429 = f__$1.call(null,inst_19428);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19431__$1,inst_19429);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18818__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18818__auto____0 = (function (){
var statearr_19433 = [null,null,null,null,null,null,null];
(statearr_19433[(0)] = cljs$core$async$transduce_$_state_machine__18818__auto__);

(statearr_19433[(1)] = (1));

return statearr_19433;
});
var cljs$core$async$transduce_$_state_machine__18818__auto____1 = (function (state_19431){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19434){var ex__18821__auto__ = e19434;
var statearr_19435_19438 = state_19431;
(statearr_19435_19438[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19431[(4)]))){
var statearr_19436_19439 = state_19431;
(statearr_19436_19439[(1)] = cljs.core.first.call(null,(state_19431[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19440 = state_19431;
state_19431 = G__19440;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18818__auto__ = function(state_19431){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18818__auto____1.call(this,state_19431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18818__auto____0;
cljs$core$async$transduce_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18818__auto____1;
return cljs$core$async$transduce_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19437 = f__18892__auto__.call(null);
(statearr_19437[(6)] = c__18891__auto__);

return statearr_19437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
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
var G__19442 = arguments.length;
switch (G__19442) {
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
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19467){
var state_val_19468 = (state_19467[(1)]);
if((state_val_19468 === (7))){
var inst_19449 = (state_19467[(2)]);
var state_19467__$1 = state_19467;
var statearr_19469_19491 = state_19467__$1;
(statearr_19469_19491[(2)] = inst_19449);

(statearr_19469_19491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (1))){
var inst_19443 = cljs.core.seq.call(null,coll);
var inst_19444 = inst_19443;
var state_19467__$1 = (function (){var statearr_19470 = state_19467;
(statearr_19470[(7)] = inst_19444);

return statearr_19470;
})();
var statearr_19471_19492 = state_19467__$1;
(statearr_19471_19492[(2)] = null);

(statearr_19471_19492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (4))){
var inst_19444 = (state_19467[(7)]);
var inst_19447 = cljs.core.first.call(null,inst_19444);
var state_19467__$1 = state_19467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19467__$1,(7),ch,inst_19447);
} else {
if((state_val_19468 === (13))){
var inst_19461 = (state_19467[(2)]);
var state_19467__$1 = state_19467;
var statearr_19472_19493 = state_19467__$1;
(statearr_19472_19493[(2)] = inst_19461);

(statearr_19472_19493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (6))){
var inst_19452 = (state_19467[(2)]);
var state_19467__$1 = state_19467;
if(cljs.core.truth_(inst_19452)){
var statearr_19473_19494 = state_19467__$1;
(statearr_19473_19494[(1)] = (8));

} else {
var statearr_19474_19495 = state_19467__$1;
(statearr_19474_19495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (3))){
var inst_19465 = (state_19467[(2)]);
var state_19467__$1 = state_19467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19467__$1,inst_19465);
} else {
if((state_val_19468 === (12))){
var state_19467__$1 = state_19467;
var statearr_19475_19496 = state_19467__$1;
(statearr_19475_19496[(2)] = null);

(statearr_19475_19496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (2))){
var inst_19444 = (state_19467[(7)]);
var state_19467__$1 = state_19467;
if(cljs.core.truth_(inst_19444)){
var statearr_19476_19497 = state_19467__$1;
(statearr_19476_19497[(1)] = (4));

} else {
var statearr_19477_19498 = state_19467__$1;
(statearr_19477_19498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (11))){
var inst_19458 = cljs.core.async.close_BANG_.call(null,ch);
var state_19467__$1 = state_19467;
var statearr_19478_19499 = state_19467__$1;
(statearr_19478_19499[(2)] = inst_19458);

(statearr_19478_19499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (9))){
var state_19467__$1 = state_19467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19479_19500 = state_19467__$1;
(statearr_19479_19500[(1)] = (11));

} else {
var statearr_19480_19501 = state_19467__$1;
(statearr_19480_19501[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (5))){
var inst_19444 = (state_19467[(7)]);
var state_19467__$1 = state_19467;
var statearr_19481_19502 = state_19467__$1;
(statearr_19481_19502[(2)] = inst_19444);

(statearr_19481_19502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (10))){
var inst_19463 = (state_19467[(2)]);
var state_19467__$1 = state_19467;
var statearr_19482_19503 = state_19467__$1;
(statearr_19482_19503[(2)] = inst_19463);

(statearr_19482_19503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19468 === (8))){
var inst_19444 = (state_19467[(7)]);
var inst_19454 = cljs.core.next.call(null,inst_19444);
var inst_19444__$1 = inst_19454;
var state_19467__$1 = (function (){var statearr_19483 = state_19467;
(statearr_19483[(7)] = inst_19444__$1);

return statearr_19483;
})();
var statearr_19484_19504 = state_19467__$1;
(statearr_19484_19504[(2)] = null);

(statearr_19484_19504[(1)] = (2));


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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_19485 = [null,null,null,null,null,null,null,null];
(statearr_19485[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_19485[(1)] = (1));

return statearr_19485;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_19467){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19486){var ex__18821__auto__ = e19486;
var statearr_19487_19505 = state_19467;
(statearr_19487_19505[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19467[(4)]))){
var statearr_19488_19506 = state_19467;
(statearr_19488_19506[(1)] = cljs.core.first.call(null,(state_19467[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19507 = state_19467;
state_19467 = G__19507;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_19467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_19467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19489 = f__18892__auto__.call(null);
(statearr_19489[(6)] = c__18891__auto__);

return statearr_19489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
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
var G__19509 = arguments.length;
switch (G__19509) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19511 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19511.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19512 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19512.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19513 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19513.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19514 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19514.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19515 = (function (ch,cs,meta19516){
this.ch = ch;
this.cs = cs;
this.meta19516 = meta19516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19517,meta19516__$1){
var self__ = this;
var _19517__$1 = this;
return (new cljs.core.async.t_cljs$core$async19515(self__.ch,self__.cs,meta19516__$1));
}));

(cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19517){
var self__ = this;
var _19517__$1 = this;
return self__.meta19516;
}));

(cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19516","meta19516",-1134560671,null)], null);
}));

(cljs.core.async.t_cljs$core$async19515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19515");

(cljs.core.async.t_cljs$core$async19515.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19515.
 */
cljs.core.async.__GT_t_cljs$core$async19515 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19515(ch__$1,cs__$1,meta19516){
return (new cljs.core.async.t_cljs$core$async19515(ch__$1,cs__$1,meta19516));
});

}

return (new cljs.core.async.t_cljs$core$async19515(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18891__auto___19734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19650){
var state_val_19651 = (state_19650[(1)]);
if((state_val_19651 === (7))){
var inst_19646 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19652_19735 = state_19650__$1;
(statearr_19652_19735[(2)] = inst_19646);

(statearr_19652_19735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (20))){
var inst_19551 = (state_19650[(7)]);
var inst_19563 = cljs.core.first.call(null,inst_19551);
var inst_19564 = cljs.core.nth.call(null,inst_19563,(0),null);
var inst_19565 = cljs.core.nth.call(null,inst_19563,(1),null);
var state_19650__$1 = (function (){var statearr_19653 = state_19650;
(statearr_19653[(8)] = inst_19564);

return statearr_19653;
})();
if(cljs.core.truth_(inst_19565)){
var statearr_19654_19736 = state_19650__$1;
(statearr_19654_19736[(1)] = (22));

} else {
var statearr_19655_19737 = state_19650__$1;
(statearr_19655_19737[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (27))){
var inst_19520 = (state_19650[(9)]);
var inst_19595 = (state_19650[(10)]);
var inst_19593 = (state_19650[(11)]);
var inst_19600 = (state_19650[(12)]);
var inst_19600__$1 = cljs.core._nth.call(null,inst_19593,inst_19595);
var inst_19601 = cljs.core.async.put_BANG_.call(null,inst_19600__$1,inst_19520,done);
var state_19650__$1 = (function (){var statearr_19656 = state_19650;
(statearr_19656[(12)] = inst_19600__$1);

return statearr_19656;
})();
if(cljs.core.truth_(inst_19601)){
var statearr_19657_19738 = state_19650__$1;
(statearr_19657_19738[(1)] = (30));

} else {
var statearr_19658_19739 = state_19650__$1;
(statearr_19658_19739[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (1))){
var state_19650__$1 = state_19650;
var statearr_19659_19740 = state_19650__$1;
(statearr_19659_19740[(2)] = null);

(statearr_19659_19740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (24))){
var inst_19551 = (state_19650[(7)]);
var inst_19570 = (state_19650[(2)]);
var inst_19571 = cljs.core.next.call(null,inst_19551);
var inst_19529 = inst_19571;
var inst_19530 = null;
var inst_19531 = (0);
var inst_19532 = (0);
var state_19650__$1 = (function (){var statearr_19660 = state_19650;
(statearr_19660[(13)] = inst_19531);

(statearr_19660[(14)] = inst_19570);

(statearr_19660[(15)] = inst_19529);

(statearr_19660[(16)] = inst_19532);

(statearr_19660[(17)] = inst_19530);

return statearr_19660;
})();
var statearr_19661_19741 = state_19650__$1;
(statearr_19661_19741[(2)] = null);

(statearr_19661_19741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (39))){
var state_19650__$1 = state_19650;
var statearr_19665_19742 = state_19650__$1;
(statearr_19665_19742[(2)] = null);

(statearr_19665_19742[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (4))){
var inst_19520 = (state_19650[(9)]);
var inst_19520__$1 = (state_19650[(2)]);
var inst_19521 = (inst_19520__$1 == null);
var state_19650__$1 = (function (){var statearr_19666 = state_19650;
(statearr_19666[(9)] = inst_19520__$1);

return statearr_19666;
})();
if(cljs.core.truth_(inst_19521)){
var statearr_19667_19743 = state_19650__$1;
(statearr_19667_19743[(1)] = (5));

} else {
var statearr_19668_19744 = state_19650__$1;
(statearr_19668_19744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (15))){
var inst_19531 = (state_19650[(13)]);
var inst_19529 = (state_19650[(15)]);
var inst_19532 = (state_19650[(16)]);
var inst_19530 = (state_19650[(17)]);
var inst_19547 = (state_19650[(2)]);
var inst_19548 = (inst_19532 + (1));
var tmp19662 = inst_19531;
var tmp19663 = inst_19529;
var tmp19664 = inst_19530;
var inst_19529__$1 = tmp19663;
var inst_19530__$1 = tmp19664;
var inst_19531__$1 = tmp19662;
var inst_19532__$1 = inst_19548;
var state_19650__$1 = (function (){var statearr_19669 = state_19650;
(statearr_19669[(13)] = inst_19531__$1);

(statearr_19669[(15)] = inst_19529__$1);

(statearr_19669[(16)] = inst_19532__$1);

(statearr_19669[(17)] = inst_19530__$1);

(statearr_19669[(18)] = inst_19547);

return statearr_19669;
})();
var statearr_19670_19745 = state_19650__$1;
(statearr_19670_19745[(2)] = null);

(statearr_19670_19745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (21))){
var inst_19574 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19674_19746 = state_19650__$1;
(statearr_19674_19746[(2)] = inst_19574);

(statearr_19674_19746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (31))){
var inst_19600 = (state_19650[(12)]);
var inst_19604 = cljs.core.async.untap_STAR_.call(null,m,inst_19600);
var state_19650__$1 = state_19650;
var statearr_19675_19747 = state_19650__$1;
(statearr_19675_19747[(2)] = inst_19604);

(statearr_19675_19747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (32))){
var inst_19592 = (state_19650[(19)]);
var inst_19594 = (state_19650[(20)]);
var inst_19595 = (state_19650[(10)]);
var inst_19593 = (state_19650[(11)]);
var inst_19606 = (state_19650[(2)]);
var inst_19607 = (inst_19595 + (1));
var tmp19671 = inst_19592;
var tmp19672 = inst_19594;
var tmp19673 = inst_19593;
var inst_19592__$1 = tmp19671;
var inst_19593__$1 = tmp19673;
var inst_19594__$1 = tmp19672;
var inst_19595__$1 = inst_19607;
var state_19650__$1 = (function (){var statearr_19676 = state_19650;
(statearr_19676[(21)] = inst_19606);

(statearr_19676[(19)] = inst_19592__$1);

(statearr_19676[(20)] = inst_19594__$1);

(statearr_19676[(10)] = inst_19595__$1);

(statearr_19676[(11)] = inst_19593__$1);

return statearr_19676;
})();
var statearr_19677_19748 = state_19650__$1;
(statearr_19677_19748[(2)] = null);

(statearr_19677_19748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (40))){
var inst_19619 = (state_19650[(22)]);
var inst_19623 = cljs.core.async.untap_STAR_.call(null,m,inst_19619);
var state_19650__$1 = state_19650;
var statearr_19678_19749 = state_19650__$1;
(statearr_19678_19749[(2)] = inst_19623);

(statearr_19678_19749[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (33))){
var inst_19610 = (state_19650[(23)]);
var inst_19612 = cljs.core.chunked_seq_QMARK_.call(null,inst_19610);
var state_19650__$1 = state_19650;
if(inst_19612){
var statearr_19679_19750 = state_19650__$1;
(statearr_19679_19750[(1)] = (36));

} else {
var statearr_19680_19751 = state_19650__$1;
(statearr_19680_19751[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (13))){
var inst_19541 = (state_19650[(24)]);
var inst_19544 = cljs.core.async.close_BANG_.call(null,inst_19541);
var state_19650__$1 = state_19650;
var statearr_19681_19752 = state_19650__$1;
(statearr_19681_19752[(2)] = inst_19544);

(statearr_19681_19752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (22))){
var inst_19564 = (state_19650[(8)]);
var inst_19567 = cljs.core.async.close_BANG_.call(null,inst_19564);
var state_19650__$1 = state_19650;
var statearr_19682_19753 = state_19650__$1;
(statearr_19682_19753[(2)] = inst_19567);

(statearr_19682_19753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (36))){
var inst_19610 = (state_19650[(23)]);
var inst_19614 = cljs.core.chunk_first.call(null,inst_19610);
var inst_19615 = cljs.core.chunk_rest.call(null,inst_19610);
var inst_19616 = cljs.core.count.call(null,inst_19614);
var inst_19592 = inst_19615;
var inst_19593 = inst_19614;
var inst_19594 = inst_19616;
var inst_19595 = (0);
var state_19650__$1 = (function (){var statearr_19683 = state_19650;
(statearr_19683[(19)] = inst_19592);

(statearr_19683[(20)] = inst_19594);

(statearr_19683[(10)] = inst_19595);

(statearr_19683[(11)] = inst_19593);

return statearr_19683;
})();
var statearr_19684_19754 = state_19650__$1;
(statearr_19684_19754[(2)] = null);

(statearr_19684_19754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (41))){
var inst_19610 = (state_19650[(23)]);
var inst_19625 = (state_19650[(2)]);
var inst_19626 = cljs.core.next.call(null,inst_19610);
var inst_19592 = inst_19626;
var inst_19593 = null;
var inst_19594 = (0);
var inst_19595 = (0);
var state_19650__$1 = (function (){var statearr_19685 = state_19650;
(statearr_19685[(19)] = inst_19592);

(statearr_19685[(25)] = inst_19625);

(statearr_19685[(20)] = inst_19594);

(statearr_19685[(10)] = inst_19595);

(statearr_19685[(11)] = inst_19593);

return statearr_19685;
})();
var statearr_19686_19755 = state_19650__$1;
(statearr_19686_19755[(2)] = null);

(statearr_19686_19755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (43))){
var state_19650__$1 = state_19650;
var statearr_19687_19756 = state_19650__$1;
(statearr_19687_19756[(2)] = null);

(statearr_19687_19756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (29))){
var inst_19634 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19688_19757 = state_19650__$1;
(statearr_19688_19757[(2)] = inst_19634);

(statearr_19688_19757[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (44))){
var inst_19643 = (state_19650[(2)]);
var state_19650__$1 = (function (){var statearr_19689 = state_19650;
(statearr_19689[(26)] = inst_19643);

return statearr_19689;
})();
var statearr_19690_19758 = state_19650__$1;
(statearr_19690_19758[(2)] = null);

(statearr_19690_19758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (6))){
var inst_19584 = (state_19650[(27)]);
var inst_19583 = cljs.core.deref.call(null,cs);
var inst_19584__$1 = cljs.core.keys.call(null,inst_19583);
var inst_19585 = cljs.core.count.call(null,inst_19584__$1);
var inst_19586 = cljs.core.reset_BANG_.call(null,dctr,inst_19585);
var inst_19591 = cljs.core.seq.call(null,inst_19584__$1);
var inst_19592 = inst_19591;
var inst_19593 = null;
var inst_19594 = (0);
var inst_19595 = (0);
var state_19650__$1 = (function (){var statearr_19691 = state_19650;
(statearr_19691[(27)] = inst_19584__$1);

(statearr_19691[(19)] = inst_19592);

(statearr_19691[(20)] = inst_19594);

(statearr_19691[(28)] = inst_19586);

(statearr_19691[(10)] = inst_19595);

(statearr_19691[(11)] = inst_19593);

return statearr_19691;
})();
var statearr_19692_19759 = state_19650__$1;
(statearr_19692_19759[(2)] = null);

(statearr_19692_19759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (28))){
var inst_19610 = (state_19650[(23)]);
var inst_19592 = (state_19650[(19)]);
var inst_19610__$1 = cljs.core.seq.call(null,inst_19592);
var state_19650__$1 = (function (){var statearr_19693 = state_19650;
(statearr_19693[(23)] = inst_19610__$1);

return statearr_19693;
})();
if(inst_19610__$1){
var statearr_19694_19760 = state_19650__$1;
(statearr_19694_19760[(1)] = (33));

} else {
var statearr_19695_19761 = state_19650__$1;
(statearr_19695_19761[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (25))){
var inst_19594 = (state_19650[(20)]);
var inst_19595 = (state_19650[(10)]);
var inst_19597 = (inst_19595 < inst_19594);
var inst_19598 = inst_19597;
var state_19650__$1 = state_19650;
if(cljs.core.truth_(inst_19598)){
var statearr_19696_19762 = state_19650__$1;
(statearr_19696_19762[(1)] = (27));

} else {
var statearr_19697_19763 = state_19650__$1;
(statearr_19697_19763[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (34))){
var state_19650__$1 = state_19650;
var statearr_19698_19764 = state_19650__$1;
(statearr_19698_19764[(2)] = null);

(statearr_19698_19764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (17))){
var state_19650__$1 = state_19650;
var statearr_19699_19765 = state_19650__$1;
(statearr_19699_19765[(2)] = null);

(statearr_19699_19765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (3))){
var inst_19648 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19650__$1,inst_19648);
} else {
if((state_val_19651 === (12))){
var inst_19579 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19700_19766 = state_19650__$1;
(statearr_19700_19766[(2)] = inst_19579);

(statearr_19700_19766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (2))){
var state_19650__$1 = state_19650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19650__$1,(4),ch);
} else {
if((state_val_19651 === (23))){
var state_19650__$1 = state_19650;
var statearr_19701_19767 = state_19650__$1;
(statearr_19701_19767[(2)] = null);

(statearr_19701_19767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (35))){
var inst_19632 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19702_19768 = state_19650__$1;
(statearr_19702_19768[(2)] = inst_19632);

(statearr_19702_19768[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (19))){
var inst_19551 = (state_19650[(7)]);
var inst_19555 = cljs.core.chunk_first.call(null,inst_19551);
var inst_19556 = cljs.core.chunk_rest.call(null,inst_19551);
var inst_19557 = cljs.core.count.call(null,inst_19555);
var inst_19529 = inst_19556;
var inst_19530 = inst_19555;
var inst_19531 = inst_19557;
var inst_19532 = (0);
var state_19650__$1 = (function (){var statearr_19703 = state_19650;
(statearr_19703[(13)] = inst_19531);

(statearr_19703[(15)] = inst_19529);

(statearr_19703[(16)] = inst_19532);

(statearr_19703[(17)] = inst_19530);

return statearr_19703;
})();
var statearr_19704_19769 = state_19650__$1;
(statearr_19704_19769[(2)] = null);

(statearr_19704_19769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (11))){
var inst_19529 = (state_19650[(15)]);
var inst_19551 = (state_19650[(7)]);
var inst_19551__$1 = cljs.core.seq.call(null,inst_19529);
var state_19650__$1 = (function (){var statearr_19705 = state_19650;
(statearr_19705[(7)] = inst_19551__$1);

return statearr_19705;
})();
if(inst_19551__$1){
var statearr_19706_19770 = state_19650__$1;
(statearr_19706_19770[(1)] = (16));

} else {
var statearr_19707_19771 = state_19650__$1;
(statearr_19707_19771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (9))){
var inst_19581 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19708_19772 = state_19650__$1;
(statearr_19708_19772[(2)] = inst_19581);

(statearr_19708_19772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (5))){
var inst_19527 = cljs.core.deref.call(null,cs);
var inst_19528 = cljs.core.seq.call(null,inst_19527);
var inst_19529 = inst_19528;
var inst_19530 = null;
var inst_19531 = (0);
var inst_19532 = (0);
var state_19650__$1 = (function (){var statearr_19709 = state_19650;
(statearr_19709[(13)] = inst_19531);

(statearr_19709[(15)] = inst_19529);

(statearr_19709[(16)] = inst_19532);

(statearr_19709[(17)] = inst_19530);

return statearr_19709;
})();
var statearr_19710_19773 = state_19650__$1;
(statearr_19710_19773[(2)] = null);

(statearr_19710_19773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (14))){
var state_19650__$1 = state_19650;
var statearr_19711_19774 = state_19650__$1;
(statearr_19711_19774[(2)] = null);

(statearr_19711_19774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (45))){
var inst_19640 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19712_19775 = state_19650__$1;
(statearr_19712_19775[(2)] = inst_19640);

(statearr_19712_19775[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (26))){
var inst_19584 = (state_19650[(27)]);
var inst_19636 = (state_19650[(2)]);
var inst_19637 = cljs.core.seq.call(null,inst_19584);
var state_19650__$1 = (function (){var statearr_19713 = state_19650;
(statearr_19713[(29)] = inst_19636);

return statearr_19713;
})();
if(inst_19637){
var statearr_19714_19776 = state_19650__$1;
(statearr_19714_19776[(1)] = (42));

} else {
var statearr_19715_19777 = state_19650__$1;
(statearr_19715_19777[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (16))){
var inst_19551 = (state_19650[(7)]);
var inst_19553 = cljs.core.chunked_seq_QMARK_.call(null,inst_19551);
var state_19650__$1 = state_19650;
if(inst_19553){
var statearr_19716_19778 = state_19650__$1;
(statearr_19716_19778[(1)] = (19));

} else {
var statearr_19717_19779 = state_19650__$1;
(statearr_19717_19779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (38))){
var inst_19629 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19718_19780 = state_19650__$1;
(statearr_19718_19780[(2)] = inst_19629);

(statearr_19718_19780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (30))){
var state_19650__$1 = state_19650;
var statearr_19719_19781 = state_19650__$1;
(statearr_19719_19781[(2)] = null);

(statearr_19719_19781[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (10))){
var inst_19532 = (state_19650[(16)]);
var inst_19530 = (state_19650[(17)]);
var inst_19540 = cljs.core._nth.call(null,inst_19530,inst_19532);
var inst_19541 = cljs.core.nth.call(null,inst_19540,(0),null);
var inst_19542 = cljs.core.nth.call(null,inst_19540,(1),null);
var state_19650__$1 = (function (){var statearr_19720 = state_19650;
(statearr_19720[(24)] = inst_19541);

return statearr_19720;
})();
if(cljs.core.truth_(inst_19542)){
var statearr_19721_19782 = state_19650__$1;
(statearr_19721_19782[(1)] = (13));

} else {
var statearr_19722_19783 = state_19650__$1;
(statearr_19722_19783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (18))){
var inst_19577 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19723_19784 = state_19650__$1;
(statearr_19723_19784[(2)] = inst_19577);

(statearr_19723_19784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (42))){
var state_19650__$1 = state_19650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19650__$1,(45),dchan);
} else {
if((state_val_19651 === (37))){
var inst_19610 = (state_19650[(23)]);
var inst_19520 = (state_19650[(9)]);
var inst_19619 = (state_19650[(22)]);
var inst_19619__$1 = cljs.core.first.call(null,inst_19610);
var inst_19620 = cljs.core.async.put_BANG_.call(null,inst_19619__$1,inst_19520,done);
var state_19650__$1 = (function (){var statearr_19724 = state_19650;
(statearr_19724[(22)] = inst_19619__$1);

return statearr_19724;
})();
if(cljs.core.truth_(inst_19620)){
var statearr_19725_19785 = state_19650__$1;
(statearr_19725_19785[(1)] = (39));

} else {
var statearr_19726_19786 = state_19650__$1;
(statearr_19726_19786[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (8))){
var inst_19531 = (state_19650[(13)]);
var inst_19532 = (state_19650[(16)]);
var inst_19534 = (inst_19532 < inst_19531);
var inst_19535 = inst_19534;
var state_19650__$1 = state_19650;
if(cljs.core.truth_(inst_19535)){
var statearr_19727_19787 = state_19650__$1;
(statearr_19727_19787[(1)] = (10));

} else {
var statearr_19728_19788 = state_19650__$1;
(statearr_19728_19788[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__18818__auto__ = null;
var cljs$core$async$mult_$_state_machine__18818__auto____0 = (function (){
var statearr_19729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19729[(0)] = cljs$core$async$mult_$_state_machine__18818__auto__);

(statearr_19729[(1)] = (1));

return statearr_19729;
});
var cljs$core$async$mult_$_state_machine__18818__auto____1 = (function (state_19650){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19730){var ex__18821__auto__ = e19730;
var statearr_19731_19789 = state_19650;
(statearr_19731_19789[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19650[(4)]))){
var statearr_19732_19790 = state_19650;
(statearr_19732_19790[(1)] = cljs.core.first.call(null,(state_19650[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19791 = state_19650;
state_19650 = G__19791;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18818__auto__ = function(state_19650){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18818__auto____1.call(this,state_19650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18818__auto____0;
cljs$core$async$mult_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18818__auto____1;
return cljs$core$async$mult_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19733 = f__18892__auto__.call(null);
(statearr_19733[(6)] = c__18891__auto___19734);

return statearr_19733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
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
var G__19793 = arguments.length;
switch (G__19793) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19795 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19795.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19796 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19796.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19797 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19797.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19798 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19798.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19799 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19799.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19810 = arguments.length;
var i__4737__auto___19811 = (0);
while(true){
if((i__4737__auto___19811 < len__4736__auto___19810)){
args__4742__auto__.push((arguments[i__4737__auto___19811]));

var G__19812 = (i__4737__auto___19811 + (1));
i__4737__auto___19811 = G__19812;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19804){
var map__19805 = p__19804;
var map__19805__$1 = (((((!((map__19805 == null))))?(((((map__19805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19805):map__19805);
var opts = map__19805__$1;
var statearr_19807_19813 = state;
(statearr_19807_19813[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_19808_19814 = state;
(statearr_19808_19814[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_19809_19815 = state;
(statearr_19809_19815[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19800){
var G__19801 = cljs.core.first.call(null,seq19800);
var seq19800__$1 = cljs.core.next.call(null,seq19800);
var G__19802 = cljs.core.first.call(null,seq19800__$1);
var seq19800__$2 = cljs.core.next.call(null,seq19800__$1);
var G__19803 = cljs.core.first.call(null,seq19800__$2);
var seq19800__$3 = cljs.core.next.call(null,seq19800__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19801,G__19802,G__19803,seq19800__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19816 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19817){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19817 = meta19817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19818,meta19817__$1){
var self__ = this;
var _19818__$1 = this;
return (new cljs.core.async.t_cljs$core$async19816(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19817__$1));
}));

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19818){
var self__ = this;
var _19818__$1 = this;
return self__.meta19817;
}));

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19816.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19817","meta19817",800091631,null)], null);
}));

(cljs.core.async.t_cljs$core$async19816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19816");

(cljs.core.async.t_cljs$core$async19816.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19816.
 */
cljs.core.async.__GT_t_cljs$core$async19816 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19817){
return (new cljs.core.async.t_cljs$core$async19816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19817));
});

}

return (new cljs.core.async.t_cljs$core$async19816(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18891__auto___19981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_19920){
var state_val_19921 = (state_19920[(1)]);
if((state_val_19921 === (7))){
var inst_19835 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19922_19982 = state_19920__$1;
(statearr_19922_19982[(2)] = inst_19835);

(statearr_19922_19982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (20))){
var inst_19847 = (state_19920[(7)]);
var state_19920__$1 = state_19920;
var statearr_19923_19983 = state_19920__$1;
(statearr_19923_19983[(2)] = inst_19847);

(statearr_19923_19983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (27))){
var state_19920__$1 = state_19920;
var statearr_19924_19984 = state_19920__$1;
(statearr_19924_19984[(2)] = null);

(statearr_19924_19984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (1))){
var inst_19822 = (state_19920[(8)]);
var inst_19822__$1 = calc_state.call(null);
var inst_19824 = (inst_19822__$1 == null);
var inst_19825 = cljs.core.not.call(null,inst_19824);
var state_19920__$1 = (function (){var statearr_19925 = state_19920;
(statearr_19925[(8)] = inst_19822__$1);

return statearr_19925;
})();
if(inst_19825){
var statearr_19926_19985 = state_19920__$1;
(statearr_19926_19985[(1)] = (2));

} else {
var statearr_19927_19986 = state_19920__$1;
(statearr_19927_19986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (24))){
var inst_19880 = (state_19920[(9)]);
var inst_19894 = (state_19920[(10)]);
var inst_19871 = (state_19920[(11)]);
var inst_19894__$1 = inst_19871.call(null,inst_19880);
var state_19920__$1 = (function (){var statearr_19928 = state_19920;
(statearr_19928[(10)] = inst_19894__$1);

return statearr_19928;
})();
if(cljs.core.truth_(inst_19894__$1)){
var statearr_19929_19987 = state_19920__$1;
(statearr_19929_19987[(1)] = (29));

} else {
var statearr_19930_19988 = state_19920__$1;
(statearr_19930_19988[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (4))){
var inst_19838 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19838)){
var statearr_19931_19989 = state_19920__$1;
(statearr_19931_19989[(1)] = (8));

} else {
var statearr_19932_19990 = state_19920__$1;
(statearr_19932_19990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (15))){
var inst_19865 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19865)){
var statearr_19933_19991 = state_19920__$1;
(statearr_19933_19991[(1)] = (19));

} else {
var statearr_19934_19992 = state_19920__$1;
(statearr_19934_19992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (21))){
var inst_19870 = (state_19920[(12)]);
var inst_19870__$1 = (state_19920[(2)]);
var inst_19871 = cljs.core.get.call(null,inst_19870__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19872 = cljs.core.get.call(null,inst_19870__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19873 = cljs.core.get.call(null,inst_19870__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19920__$1 = (function (){var statearr_19935 = state_19920;
(statearr_19935[(12)] = inst_19870__$1);

(statearr_19935[(11)] = inst_19871);

(statearr_19935[(13)] = inst_19872);

return statearr_19935;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19920__$1,(22),inst_19873);
} else {
if((state_val_19921 === (31))){
var inst_19902 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19902)){
var statearr_19936_19993 = state_19920__$1;
(statearr_19936_19993[(1)] = (32));

} else {
var statearr_19937_19994 = state_19920__$1;
(statearr_19937_19994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (32))){
var inst_19879 = (state_19920[(14)]);
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19920__$1,(35),out,inst_19879);
} else {
if((state_val_19921 === (33))){
var inst_19870 = (state_19920[(12)]);
var inst_19847 = inst_19870;
var state_19920__$1 = (function (){var statearr_19938 = state_19920;
(statearr_19938[(7)] = inst_19847);

return statearr_19938;
})();
var statearr_19939_19995 = state_19920__$1;
(statearr_19939_19995[(2)] = null);

(statearr_19939_19995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (13))){
var inst_19847 = (state_19920[(7)]);
var inst_19854 = inst_19847.cljs$lang$protocol_mask$partition0$;
var inst_19855 = (inst_19854 & (64));
var inst_19856 = inst_19847.cljs$core$ISeq$;
var inst_19857 = (cljs.core.PROTOCOL_SENTINEL === inst_19856);
var inst_19858 = ((inst_19855) || (inst_19857));
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19858)){
var statearr_19940_19996 = state_19920__$1;
(statearr_19940_19996[(1)] = (16));

} else {
var statearr_19941_19997 = state_19920__$1;
(statearr_19941_19997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (22))){
var inst_19880 = (state_19920[(9)]);
var inst_19879 = (state_19920[(14)]);
var inst_19878 = (state_19920[(2)]);
var inst_19879__$1 = cljs.core.nth.call(null,inst_19878,(0),null);
var inst_19880__$1 = cljs.core.nth.call(null,inst_19878,(1),null);
var inst_19881 = (inst_19879__$1 == null);
var inst_19882 = cljs.core._EQ_.call(null,inst_19880__$1,change);
var inst_19883 = ((inst_19881) || (inst_19882));
var state_19920__$1 = (function (){var statearr_19942 = state_19920;
(statearr_19942[(9)] = inst_19880__$1);

(statearr_19942[(14)] = inst_19879__$1);

return statearr_19942;
})();
if(cljs.core.truth_(inst_19883)){
var statearr_19943_19998 = state_19920__$1;
(statearr_19943_19998[(1)] = (23));

} else {
var statearr_19944_19999 = state_19920__$1;
(statearr_19944_19999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (36))){
var inst_19870 = (state_19920[(12)]);
var inst_19847 = inst_19870;
var state_19920__$1 = (function (){var statearr_19945 = state_19920;
(statearr_19945[(7)] = inst_19847);

return statearr_19945;
})();
var statearr_19946_20000 = state_19920__$1;
(statearr_19946_20000[(2)] = null);

(statearr_19946_20000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (29))){
var inst_19894 = (state_19920[(10)]);
var state_19920__$1 = state_19920;
var statearr_19947_20001 = state_19920__$1;
(statearr_19947_20001[(2)] = inst_19894);

(statearr_19947_20001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (6))){
var state_19920__$1 = state_19920;
var statearr_19948_20002 = state_19920__$1;
(statearr_19948_20002[(2)] = false);

(statearr_19948_20002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (28))){
var inst_19890 = (state_19920[(2)]);
var inst_19891 = calc_state.call(null);
var inst_19847 = inst_19891;
var state_19920__$1 = (function (){var statearr_19949 = state_19920;
(statearr_19949[(15)] = inst_19890);

(statearr_19949[(7)] = inst_19847);

return statearr_19949;
})();
var statearr_19950_20003 = state_19920__$1;
(statearr_19950_20003[(2)] = null);

(statearr_19950_20003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (25))){
var inst_19916 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19951_20004 = state_19920__$1;
(statearr_19951_20004[(2)] = inst_19916);

(statearr_19951_20004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (34))){
var inst_19914 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19952_20005 = state_19920__$1;
(statearr_19952_20005[(2)] = inst_19914);

(statearr_19952_20005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (17))){
var state_19920__$1 = state_19920;
var statearr_19953_20006 = state_19920__$1;
(statearr_19953_20006[(2)] = false);

(statearr_19953_20006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (3))){
var state_19920__$1 = state_19920;
var statearr_19954_20007 = state_19920__$1;
(statearr_19954_20007[(2)] = false);

(statearr_19954_20007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (12))){
var inst_19918 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19920__$1,inst_19918);
} else {
if((state_val_19921 === (2))){
var inst_19822 = (state_19920[(8)]);
var inst_19827 = inst_19822.cljs$lang$protocol_mask$partition0$;
var inst_19828 = (inst_19827 & (64));
var inst_19829 = inst_19822.cljs$core$ISeq$;
var inst_19830 = (cljs.core.PROTOCOL_SENTINEL === inst_19829);
var inst_19831 = ((inst_19828) || (inst_19830));
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19831)){
var statearr_19955_20008 = state_19920__$1;
(statearr_19955_20008[(1)] = (5));

} else {
var statearr_19956_20009 = state_19920__$1;
(statearr_19956_20009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (23))){
var inst_19879 = (state_19920[(14)]);
var inst_19885 = (inst_19879 == null);
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19885)){
var statearr_19957_20010 = state_19920__$1;
(statearr_19957_20010[(1)] = (26));

} else {
var statearr_19958_20011 = state_19920__$1;
(statearr_19958_20011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (35))){
var inst_19905 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
if(cljs.core.truth_(inst_19905)){
var statearr_19959_20012 = state_19920__$1;
(statearr_19959_20012[(1)] = (36));

} else {
var statearr_19960_20013 = state_19920__$1;
(statearr_19960_20013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (19))){
var inst_19847 = (state_19920[(7)]);
var inst_19867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19847);
var state_19920__$1 = state_19920;
var statearr_19961_20014 = state_19920__$1;
(statearr_19961_20014[(2)] = inst_19867);

(statearr_19961_20014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (11))){
var inst_19847 = (state_19920[(7)]);
var inst_19851 = (inst_19847 == null);
var inst_19852 = cljs.core.not.call(null,inst_19851);
var state_19920__$1 = state_19920;
if(inst_19852){
var statearr_19962_20015 = state_19920__$1;
(statearr_19962_20015[(1)] = (13));

} else {
var statearr_19963_20016 = state_19920__$1;
(statearr_19963_20016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (9))){
var inst_19822 = (state_19920[(8)]);
var state_19920__$1 = state_19920;
var statearr_19964_20017 = state_19920__$1;
(statearr_19964_20017[(2)] = inst_19822);

(statearr_19964_20017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (5))){
var state_19920__$1 = state_19920;
var statearr_19965_20018 = state_19920__$1;
(statearr_19965_20018[(2)] = true);

(statearr_19965_20018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (14))){
var state_19920__$1 = state_19920;
var statearr_19966_20019 = state_19920__$1;
(statearr_19966_20019[(2)] = false);

(statearr_19966_20019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (26))){
var inst_19880 = (state_19920[(9)]);
var inst_19887 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19880);
var state_19920__$1 = state_19920;
var statearr_19967_20020 = state_19920__$1;
(statearr_19967_20020[(2)] = inst_19887);

(statearr_19967_20020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (16))){
var state_19920__$1 = state_19920;
var statearr_19968_20021 = state_19920__$1;
(statearr_19968_20021[(2)] = true);

(statearr_19968_20021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (38))){
var inst_19910 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19969_20022 = state_19920__$1;
(statearr_19969_20022[(2)] = inst_19910);

(statearr_19969_20022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (30))){
var inst_19880 = (state_19920[(9)]);
var inst_19871 = (state_19920[(11)]);
var inst_19872 = (state_19920[(13)]);
var inst_19897 = cljs.core.empty_QMARK_.call(null,inst_19871);
var inst_19898 = inst_19872.call(null,inst_19880);
var inst_19899 = cljs.core.not.call(null,inst_19898);
var inst_19900 = ((inst_19897) && (inst_19899));
var state_19920__$1 = state_19920;
var statearr_19970_20023 = state_19920__$1;
(statearr_19970_20023[(2)] = inst_19900);

(statearr_19970_20023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (10))){
var inst_19822 = (state_19920[(8)]);
var inst_19843 = (state_19920[(2)]);
var inst_19844 = cljs.core.get.call(null,inst_19843,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19845 = cljs.core.get.call(null,inst_19843,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19846 = cljs.core.get.call(null,inst_19843,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19847 = inst_19822;
var state_19920__$1 = (function (){var statearr_19971 = state_19920;
(statearr_19971[(16)] = inst_19844);

(statearr_19971[(17)] = inst_19846);

(statearr_19971[(18)] = inst_19845);

(statearr_19971[(7)] = inst_19847);

return statearr_19971;
})();
var statearr_19972_20024 = state_19920__$1;
(statearr_19972_20024[(2)] = null);

(statearr_19972_20024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (18))){
var inst_19862 = (state_19920[(2)]);
var state_19920__$1 = state_19920;
var statearr_19973_20025 = state_19920__$1;
(statearr_19973_20025[(2)] = inst_19862);

(statearr_19973_20025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (37))){
var state_19920__$1 = state_19920;
var statearr_19974_20026 = state_19920__$1;
(statearr_19974_20026[(2)] = null);

(statearr_19974_20026[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19921 === (8))){
var inst_19822 = (state_19920[(8)]);
var inst_19840 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19822);
var state_19920__$1 = state_19920;
var statearr_19975_20027 = state_19920__$1;
(statearr_19975_20027[(2)] = inst_19840);

(statearr_19975_20027[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__18818__auto__ = null;
var cljs$core$async$mix_$_state_machine__18818__auto____0 = (function (){
var statearr_19976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19976[(0)] = cljs$core$async$mix_$_state_machine__18818__auto__);

(statearr_19976[(1)] = (1));

return statearr_19976;
});
var cljs$core$async$mix_$_state_machine__18818__auto____1 = (function (state_19920){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_19920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e19977){var ex__18821__auto__ = e19977;
var statearr_19978_20028 = state_19920;
(statearr_19978_20028[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_19920[(4)]))){
var statearr_19979_20029 = state_19920;
(statearr_19979_20029[(1)] = cljs.core.first.call(null,(state_19920[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20030 = state_19920;
state_19920 = G__20030;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18818__auto__ = function(state_19920){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18818__auto____1.call(this,state_19920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18818__auto____0;
cljs$core$async$mix_$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18818__auto____1;
return cljs$core$async$mix_$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_19980 = f__18892__auto__.call(null);
(statearr_19980[(6)] = c__18891__auto___19981);

return statearr_19980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_20033 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_20033.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20034 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_20034.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20035 = (function() {
var G__20036 = null;
var G__20036__1 = (function (p){
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
var G__20036__2 = (function (p,v){
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
G__20036 = function(p,v){
switch(arguments.length){
case 1:
return G__20036__1.call(this,p);
case 2:
return G__20036__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20036.cljs$core$IFn$_invoke$arity$1 = G__20036__1;
G__20036.cljs$core$IFn$_invoke$arity$2 = G__20036__2;
return G__20036;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20032 = arguments.length;
switch (G__20032) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20035.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20035.call(null,p,v);
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
var G__20040 = arguments.length;
switch (G__20040) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__20038_SHARP_){
if(cljs.core.truth_(p1__20038_SHARP_.call(null,topic))){
return p1__20038_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20038_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20041 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20042){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20042 = meta20042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20043,meta20042__$1){
var self__ = this;
var _20043__$1 = this;
return (new cljs.core.async.t_cljs$core$async20041(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20042__$1));
}));

(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20043){
var self__ = this;
var _20043__$1 = this;
return self__.meta20042;
}));

(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async20041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async20041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20042","meta20042",2029954921,null)], null);
}));

(cljs.core.async.t_cljs$core$async20041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20041");

(cljs.core.async.t_cljs$core$async20041.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20041.
 */
cljs.core.async.__GT_t_cljs$core$async20041 = (function cljs$core$async$__GT_t_cljs$core$async20041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20042){
return (new cljs.core.async.t_cljs$core$async20041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20042));
});

}

return (new cljs.core.async.t_cljs$core$async20041(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18891__auto___20162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20115){
var state_val_20116 = (state_20115[(1)]);
if((state_val_20116 === (7))){
var inst_20111 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20117_20163 = state_20115__$1;
(statearr_20117_20163[(2)] = inst_20111);

(statearr_20117_20163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (20))){
var state_20115__$1 = state_20115;
var statearr_20118_20164 = state_20115__$1;
(statearr_20118_20164[(2)] = null);

(statearr_20118_20164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (1))){
var state_20115__$1 = state_20115;
var statearr_20119_20165 = state_20115__$1;
(statearr_20119_20165[(2)] = null);

(statearr_20119_20165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (24))){
var inst_20094 = (state_20115[(7)]);
var inst_20103 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20094);
var state_20115__$1 = state_20115;
var statearr_20120_20166 = state_20115__$1;
(statearr_20120_20166[(2)] = inst_20103);

(statearr_20120_20166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (4))){
var inst_20046 = (state_20115[(8)]);
var inst_20046__$1 = (state_20115[(2)]);
var inst_20047 = (inst_20046__$1 == null);
var state_20115__$1 = (function (){var statearr_20121 = state_20115;
(statearr_20121[(8)] = inst_20046__$1);

return statearr_20121;
})();
if(cljs.core.truth_(inst_20047)){
var statearr_20122_20167 = state_20115__$1;
(statearr_20122_20167[(1)] = (5));

} else {
var statearr_20123_20168 = state_20115__$1;
(statearr_20123_20168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (15))){
var inst_20088 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20124_20169 = state_20115__$1;
(statearr_20124_20169[(2)] = inst_20088);

(statearr_20124_20169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (21))){
var inst_20108 = (state_20115[(2)]);
var state_20115__$1 = (function (){var statearr_20125 = state_20115;
(statearr_20125[(9)] = inst_20108);

return statearr_20125;
})();
var statearr_20126_20170 = state_20115__$1;
(statearr_20126_20170[(2)] = null);

(statearr_20126_20170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (13))){
var inst_20070 = (state_20115[(10)]);
var inst_20072 = cljs.core.chunked_seq_QMARK_.call(null,inst_20070);
var state_20115__$1 = state_20115;
if(inst_20072){
var statearr_20127_20171 = state_20115__$1;
(statearr_20127_20171[(1)] = (16));

} else {
var statearr_20128_20172 = state_20115__$1;
(statearr_20128_20172[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (22))){
var inst_20100 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
if(cljs.core.truth_(inst_20100)){
var statearr_20129_20173 = state_20115__$1;
(statearr_20129_20173[(1)] = (23));

} else {
var statearr_20130_20174 = state_20115__$1;
(statearr_20130_20174[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (6))){
var inst_20096 = (state_20115[(11)]);
var inst_20046 = (state_20115[(8)]);
var inst_20094 = (state_20115[(7)]);
var inst_20094__$1 = topic_fn.call(null,inst_20046);
var inst_20095 = cljs.core.deref.call(null,mults);
var inst_20096__$1 = cljs.core.get.call(null,inst_20095,inst_20094__$1);
var state_20115__$1 = (function (){var statearr_20131 = state_20115;
(statearr_20131[(11)] = inst_20096__$1);

(statearr_20131[(7)] = inst_20094__$1);

return statearr_20131;
})();
if(cljs.core.truth_(inst_20096__$1)){
var statearr_20132_20175 = state_20115__$1;
(statearr_20132_20175[(1)] = (19));

} else {
var statearr_20133_20176 = state_20115__$1;
(statearr_20133_20176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (25))){
var inst_20105 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20134_20177 = state_20115__$1;
(statearr_20134_20177[(2)] = inst_20105);

(statearr_20134_20177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (17))){
var inst_20070 = (state_20115[(10)]);
var inst_20079 = cljs.core.first.call(null,inst_20070);
var inst_20080 = cljs.core.async.muxch_STAR_.call(null,inst_20079);
var inst_20081 = cljs.core.async.close_BANG_.call(null,inst_20080);
var inst_20082 = cljs.core.next.call(null,inst_20070);
var inst_20056 = inst_20082;
var inst_20057 = null;
var inst_20058 = (0);
var inst_20059 = (0);
var state_20115__$1 = (function (){var statearr_20135 = state_20115;
(statearr_20135[(12)] = inst_20058);

(statearr_20135[(13)] = inst_20057);

(statearr_20135[(14)] = inst_20056);

(statearr_20135[(15)] = inst_20081);

(statearr_20135[(16)] = inst_20059);

return statearr_20135;
})();
var statearr_20136_20178 = state_20115__$1;
(statearr_20136_20178[(2)] = null);

(statearr_20136_20178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (3))){
var inst_20113 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20115__$1,inst_20113);
} else {
if((state_val_20116 === (12))){
var inst_20090 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20137_20179 = state_20115__$1;
(statearr_20137_20179[(2)] = inst_20090);

(statearr_20137_20179[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (2))){
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20115__$1,(4),ch);
} else {
if((state_val_20116 === (23))){
var state_20115__$1 = state_20115;
var statearr_20138_20180 = state_20115__$1;
(statearr_20138_20180[(2)] = null);

(statearr_20138_20180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (19))){
var inst_20096 = (state_20115[(11)]);
var inst_20046 = (state_20115[(8)]);
var inst_20098 = cljs.core.async.muxch_STAR_.call(null,inst_20096);
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20115__$1,(22),inst_20098,inst_20046);
} else {
if((state_val_20116 === (11))){
var inst_20070 = (state_20115[(10)]);
var inst_20056 = (state_20115[(14)]);
var inst_20070__$1 = cljs.core.seq.call(null,inst_20056);
var state_20115__$1 = (function (){var statearr_20139 = state_20115;
(statearr_20139[(10)] = inst_20070__$1);

return statearr_20139;
})();
if(inst_20070__$1){
var statearr_20140_20181 = state_20115__$1;
(statearr_20140_20181[(1)] = (13));

} else {
var statearr_20141_20182 = state_20115__$1;
(statearr_20141_20182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (9))){
var inst_20092 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20142_20183 = state_20115__$1;
(statearr_20142_20183[(2)] = inst_20092);

(statearr_20142_20183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (5))){
var inst_20053 = cljs.core.deref.call(null,mults);
var inst_20054 = cljs.core.vals.call(null,inst_20053);
var inst_20055 = cljs.core.seq.call(null,inst_20054);
var inst_20056 = inst_20055;
var inst_20057 = null;
var inst_20058 = (0);
var inst_20059 = (0);
var state_20115__$1 = (function (){var statearr_20143 = state_20115;
(statearr_20143[(12)] = inst_20058);

(statearr_20143[(13)] = inst_20057);

(statearr_20143[(14)] = inst_20056);

(statearr_20143[(16)] = inst_20059);

return statearr_20143;
})();
var statearr_20144_20184 = state_20115__$1;
(statearr_20144_20184[(2)] = null);

(statearr_20144_20184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (14))){
var state_20115__$1 = state_20115;
var statearr_20148_20185 = state_20115__$1;
(statearr_20148_20185[(2)] = null);

(statearr_20148_20185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (16))){
var inst_20070 = (state_20115[(10)]);
var inst_20074 = cljs.core.chunk_first.call(null,inst_20070);
var inst_20075 = cljs.core.chunk_rest.call(null,inst_20070);
var inst_20076 = cljs.core.count.call(null,inst_20074);
var inst_20056 = inst_20075;
var inst_20057 = inst_20074;
var inst_20058 = inst_20076;
var inst_20059 = (0);
var state_20115__$1 = (function (){var statearr_20149 = state_20115;
(statearr_20149[(12)] = inst_20058);

(statearr_20149[(13)] = inst_20057);

(statearr_20149[(14)] = inst_20056);

(statearr_20149[(16)] = inst_20059);

return statearr_20149;
})();
var statearr_20150_20186 = state_20115__$1;
(statearr_20150_20186[(2)] = null);

(statearr_20150_20186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (10))){
var inst_20058 = (state_20115[(12)]);
var inst_20057 = (state_20115[(13)]);
var inst_20056 = (state_20115[(14)]);
var inst_20059 = (state_20115[(16)]);
var inst_20064 = cljs.core._nth.call(null,inst_20057,inst_20059);
var inst_20065 = cljs.core.async.muxch_STAR_.call(null,inst_20064);
var inst_20066 = cljs.core.async.close_BANG_.call(null,inst_20065);
var inst_20067 = (inst_20059 + (1));
var tmp20145 = inst_20058;
var tmp20146 = inst_20057;
var tmp20147 = inst_20056;
var inst_20056__$1 = tmp20147;
var inst_20057__$1 = tmp20146;
var inst_20058__$1 = tmp20145;
var inst_20059__$1 = inst_20067;
var state_20115__$1 = (function (){var statearr_20151 = state_20115;
(statearr_20151[(12)] = inst_20058__$1);

(statearr_20151[(17)] = inst_20066);

(statearr_20151[(13)] = inst_20057__$1);

(statearr_20151[(14)] = inst_20056__$1);

(statearr_20151[(16)] = inst_20059__$1);

return statearr_20151;
})();
var statearr_20152_20187 = state_20115__$1;
(statearr_20152_20187[(2)] = null);

(statearr_20152_20187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (18))){
var inst_20085 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20153_20188 = state_20115__$1;
(statearr_20153_20188[(2)] = inst_20085);

(statearr_20153_20188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (8))){
var inst_20058 = (state_20115[(12)]);
var inst_20059 = (state_20115[(16)]);
var inst_20061 = (inst_20059 < inst_20058);
var inst_20062 = inst_20061;
var state_20115__$1 = state_20115;
if(cljs.core.truth_(inst_20062)){
var statearr_20154_20189 = state_20115__$1;
(statearr_20154_20189[(1)] = (10));

} else {
var statearr_20155_20190 = state_20115__$1;
(statearr_20155_20190[(1)] = (11));

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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_20156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20156[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_20156[(1)] = (1));

return statearr_20156;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_20115){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20157){var ex__18821__auto__ = e20157;
var statearr_20158_20191 = state_20115;
(statearr_20158_20191[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20115[(4)]))){
var statearr_20159_20192 = state_20115;
(statearr_20159_20192[(1)] = cljs.core.first.call(null,(state_20115[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20193 = state_20115;
state_20115 = G__20193;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_20115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_20115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20160 = f__18892__auto__.call(null);
(statearr_20160[(6)] = c__18891__auto___20162);

return statearr_20160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
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
var G__20195 = arguments.length;
switch (G__20195) {
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
var G__20198 = arguments.length;
switch (G__20198) {
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
var G__20201 = arguments.length;
switch (G__20201) {
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
var c__18891__auto___20279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20244){
var state_val_20245 = (state_20244[(1)]);
if((state_val_20245 === (7))){
var state_20244__$1 = state_20244;
var statearr_20246_20280 = state_20244__$1;
(statearr_20246_20280[(2)] = null);

(statearr_20246_20280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (1))){
var state_20244__$1 = state_20244;
var statearr_20247_20281 = state_20244__$1;
(statearr_20247_20281[(2)] = null);

(statearr_20247_20281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (4))){
var inst_20204 = (state_20244[(7)]);
var inst_20205 = (state_20244[(8)]);
var inst_20207 = (inst_20205 < inst_20204);
var state_20244__$1 = state_20244;
if(cljs.core.truth_(inst_20207)){
var statearr_20248_20282 = state_20244__$1;
(statearr_20248_20282[(1)] = (6));

} else {
var statearr_20249_20283 = state_20244__$1;
(statearr_20249_20283[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (15))){
var inst_20230 = (state_20244[(9)]);
var inst_20235 = cljs.core.apply.call(null,f,inst_20230);
var state_20244__$1 = state_20244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20244__$1,(17),out,inst_20235);
} else {
if((state_val_20245 === (13))){
var inst_20230 = (state_20244[(9)]);
var inst_20230__$1 = (state_20244[(2)]);
var inst_20231 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20230__$1);
var state_20244__$1 = (function (){var statearr_20250 = state_20244;
(statearr_20250[(9)] = inst_20230__$1);

return statearr_20250;
})();
if(cljs.core.truth_(inst_20231)){
var statearr_20251_20284 = state_20244__$1;
(statearr_20251_20284[(1)] = (14));

} else {
var statearr_20252_20285 = state_20244__$1;
(statearr_20252_20285[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (6))){
var state_20244__$1 = state_20244;
var statearr_20253_20286 = state_20244__$1;
(statearr_20253_20286[(2)] = null);

(statearr_20253_20286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (17))){
var inst_20237 = (state_20244[(2)]);
var state_20244__$1 = (function (){var statearr_20255 = state_20244;
(statearr_20255[(10)] = inst_20237);

return statearr_20255;
})();
var statearr_20256_20287 = state_20244__$1;
(statearr_20256_20287[(2)] = null);

(statearr_20256_20287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (3))){
var inst_20242 = (state_20244[(2)]);
var state_20244__$1 = state_20244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20244__$1,inst_20242);
} else {
if((state_val_20245 === (12))){
var _ = (function (){var statearr_20257 = state_20244;
(statearr_20257[(4)] = cljs.core.rest.call(null,(state_20244[(4)])));

return statearr_20257;
})();
var state_20244__$1 = state_20244;
var ex20254 = (state_20244__$1[(2)]);
var statearr_20258_20288 = state_20244__$1;
(statearr_20258_20288[(5)] = ex20254);


if((ex20254 instanceof Object)){
var statearr_20259_20289 = state_20244__$1;
(statearr_20259_20289[(1)] = (11));

(statearr_20259_20289[(5)] = null);

} else {
throw ex20254;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (2))){
var inst_20203 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20204 = cnt;
var inst_20205 = (0);
var state_20244__$1 = (function (){var statearr_20260 = state_20244;
(statearr_20260[(11)] = inst_20203);

(statearr_20260[(7)] = inst_20204);

(statearr_20260[(8)] = inst_20205);

return statearr_20260;
})();
var statearr_20261_20290 = state_20244__$1;
(statearr_20261_20290[(2)] = null);

(statearr_20261_20290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (11))){
var inst_20209 = (state_20244[(2)]);
var inst_20210 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20244__$1 = (function (){var statearr_20262 = state_20244;
(statearr_20262[(12)] = inst_20209);

return statearr_20262;
})();
var statearr_20263_20291 = state_20244__$1;
(statearr_20263_20291[(2)] = inst_20210);

(statearr_20263_20291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (9))){
var inst_20205 = (state_20244[(8)]);
var _ = (function (){var statearr_20264 = state_20244;
(statearr_20264[(4)] = cljs.core.cons.call(null,(12),(state_20244[(4)])));

return statearr_20264;
})();
var inst_20216 = chs__$1.call(null,inst_20205);
var inst_20217 = done.call(null,inst_20205);
var inst_20218 = cljs.core.async.take_BANG_.call(null,inst_20216,inst_20217);
var ___$1 = (function (){var statearr_20265 = state_20244;
(statearr_20265[(4)] = cljs.core.rest.call(null,(state_20244[(4)])));

return statearr_20265;
})();
var state_20244__$1 = state_20244;
var statearr_20266_20292 = state_20244__$1;
(statearr_20266_20292[(2)] = inst_20218);

(statearr_20266_20292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (5))){
var inst_20228 = (state_20244[(2)]);
var state_20244__$1 = (function (){var statearr_20267 = state_20244;
(statearr_20267[(13)] = inst_20228);

return statearr_20267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20244__$1,(13),dchan);
} else {
if((state_val_20245 === (14))){
var inst_20233 = cljs.core.async.close_BANG_.call(null,out);
var state_20244__$1 = state_20244;
var statearr_20268_20293 = state_20244__$1;
(statearr_20268_20293[(2)] = inst_20233);

(statearr_20268_20293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (16))){
var inst_20240 = (state_20244[(2)]);
var state_20244__$1 = state_20244;
var statearr_20269_20294 = state_20244__$1;
(statearr_20269_20294[(2)] = inst_20240);

(statearr_20269_20294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (10))){
var inst_20205 = (state_20244[(8)]);
var inst_20221 = (state_20244[(2)]);
var inst_20222 = (inst_20205 + (1));
var inst_20205__$1 = inst_20222;
var state_20244__$1 = (function (){var statearr_20270 = state_20244;
(statearr_20270[(14)] = inst_20221);

(statearr_20270[(8)] = inst_20205__$1);

return statearr_20270;
})();
var statearr_20271_20295 = state_20244__$1;
(statearr_20271_20295[(2)] = null);

(statearr_20271_20295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20245 === (8))){
var inst_20226 = (state_20244[(2)]);
var state_20244__$1 = state_20244;
var statearr_20272_20296 = state_20244__$1;
(statearr_20272_20296[(2)] = inst_20226);

(statearr_20272_20296[(1)] = (5));


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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_20273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20273[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_20273[(1)] = (1));

return statearr_20273;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_20244){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20274){var ex__18821__auto__ = e20274;
var statearr_20275_20297 = state_20244;
(statearr_20275_20297[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20244[(4)]))){
var statearr_20276_20298 = state_20244;
(statearr_20276_20298[(1)] = cljs.core.first.call(null,(state_20244[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20299 = state_20244;
state_20244 = G__20299;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_20244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_20244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20277 = f__18892__auto__.call(null);
(statearr_20277[(6)] = c__18891__auto___20279);

return statearr_20277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
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
var G__20302 = arguments.length;
switch (G__20302) {
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
var c__18891__auto___20357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20334){
var state_val_20335 = (state_20334[(1)]);
if((state_val_20335 === (7))){
var inst_20314 = (state_20334[(7)]);
var inst_20313 = (state_20334[(8)]);
var inst_20313__$1 = (state_20334[(2)]);
var inst_20314__$1 = cljs.core.nth.call(null,inst_20313__$1,(0),null);
var inst_20315 = cljs.core.nth.call(null,inst_20313__$1,(1),null);
var inst_20316 = (inst_20314__$1 == null);
var state_20334__$1 = (function (){var statearr_20336 = state_20334;
(statearr_20336[(7)] = inst_20314__$1);

(statearr_20336[(8)] = inst_20313__$1);

(statearr_20336[(9)] = inst_20315);

return statearr_20336;
})();
if(cljs.core.truth_(inst_20316)){
var statearr_20337_20358 = state_20334__$1;
(statearr_20337_20358[(1)] = (8));

} else {
var statearr_20338_20359 = state_20334__$1;
(statearr_20338_20359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (1))){
var inst_20303 = cljs.core.vec.call(null,chs);
var inst_20304 = inst_20303;
var state_20334__$1 = (function (){var statearr_20339 = state_20334;
(statearr_20339[(10)] = inst_20304);

return statearr_20339;
})();
var statearr_20340_20360 = state_20334__$1;
(statearr_20340_20360[(2)] = null);

(statearr_20340_20360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (4))){
var inst_20304 = (state_20334[(10)]);
var state_20334__$1 = state_20334;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20334__$1,(7),inst_20304);
} else {
if((state_val_20335 === (6))){
var inst_20330 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20341_20361 = state_20334__$1;
(statearr_20341_20361[(2)] = inst_20330);

(statearr_20341_20361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (3))){
var inst_20332 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20334__$1,inst_20332);
} else {
if((state_val_20335 === (2))){
var inst_20304 = (state_20334[(10)]);
var inst_20306 = cljs.core.count.call(null,inst_20304);
var inst_20307 = (inst_20306 > (0));
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20307)){
var statearr_20343_20362 = state_20334__$1;
(statearr_20343_20362[(1)] = (4));

} else {
var statearr_20344_20363 = state_20334__$1;
(statearr_20344_20363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (11))){
var inst_20304 = (state_20334[(10)]);
var inst_20323 = (state_20334[(2)]);
var tmp20342 = inst_20304;
var inst_20304__$1 = tmp20342;
var state_20334__$1 = (function (){var statearr_20345 = state_20334;
(statearr_20345[(11)] = inst_20323);

(statearr_20345[(10)] = inst_20304__$1);

return statearr_20345;
})();
var statearr_20346_20364 = state_20334__$1;
(statearr_20346_20364[(2)] = null);

(statearr_20346_20364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (9))){
var inst_20314 = (state_20334[(7)]);
var state_20334__$1 = state_20334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20334__$1,(11),out,inst_20314);
} else {
if((state_val_20335 === (5))){
var inst_20328 = cljs.core.async.close_BANG_.call(null,out);
var state_20334__$1 = state_20334;
var statearr_20347_20365 = state_20334__$1;
(statearr_20347_20365[(2)] = inst_20328);

(statearr_20347_20365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (10))){
var inst_20326 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20348_20366 = state_20334__$1;
(statearr_20348_20366[(2)] = inst_20326);

(statearr_20348_20366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (8))){
var inst_20314 = (state_20334[(7)]);
var inst_20313 = (state_20334[(8)]);
var inst_20315 = (state_20334[(9)]);
var inst_20304 = (state_20334[(10)]);
var inst_20318 = (function (){var cs = inst_20304;
var vec__20309 = inst_20313;
var v = inst_20314;
var c = inst_20315;
return (function (p1__20300_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20300_SHARP_);
});
})();
var inst_20319 = cljs.core.filterv.call(null,inst_20318,inst_20304);
var inst_20304__$1 = inst_20319;
var state_20334__$1 = (function (){var statearr_20349 = state_20334;
(statearr_20349[(10)] = inst_20304__$1);

return statearr_20349;
})();
var statearr_20350_20367 = state_20334__$1;
(statearr_20350_20367[(2)] = null);

(statearr_20350_20367[(1)] = (2));


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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_20351 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20351[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_20351[(1)] = (1));

return statearr_20351;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_20334){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20352){var ex__18821__auto__ = e20352;
var statearr_20353_20368 = state_20334;
(statearr_20353_20368[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20334[(4)]))){
var statearr_20354_20369 = state_20334;
(statearr_20354_20369[(1)] = cljs.core.first.call(null,(state_20334[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20370 = state_20334;
state_20334 = G__20370;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_20334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_20334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20355 = f__18892__auto__.call(null);
(statearr_20355[(6)] = c__18891__auto___20357);

return statearr_20355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
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
var G__20372 = arguments.length;
switch (G__20372) {
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
var c__18891__auto___20418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20396){
var state_val_20397 = (state_20396[(1)]);
if((state_val_20397 === (7))){
var inst_20378 = (state_20396[(7)]);
var inst_20378__$1 = (state_20396[(2)]);
var inst_20379 = (inst_20378__$1 == null);
var inst_20380 = cljs.core.not.call(null,inst_20379);
var state_20396__$1 = (function (){var statearr_20398 = state_20396;
(statearr_20398[(7)] = inst_20378__$1);

return statearr_20398;
})();
if(inst_20380){
var statearr_20399_20419 = state_20396__$1;
(statearr_20399_20419[(1)] = (8));

} else {
var statearr_20400_20420 = state_20396__$1;
(statearr_20400_20420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (1))){
var inst_20373 = (0);
var state_20396__$1 = (function (){var statearr_20401 = state_20396;
(statearr_20401[(8)] = inst_20373);

return statearr_20401;
})();
var statearr_20402_20421 = state_20396__$1;
(statearr_20402_20421[(2)] = null);

(statearr_20402_20421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (4))){
var state_20396__$1 = state_20396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20396__$1,(7),ch);
} else {
if((state_val_20397 === (6))){
var inst_20391 = (state_20396[(2)]);
var state_20396__$1 = state_20396;
var statearr_20403_20422 = state_20396__$1;
(statearr_20403_20422[(2)] = inst_20391);

(statearr_20403_20422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (3))){
var inst_20393 = (state_20396[(2)]);
var inst_20394 = cljs.core.async.close_BANG_.call(null,out);
var state_20396__$1 = (function (){var statearr_20404 = state_20396;
(statearr_20404[(9)] = inst_20393);

return statearr_20404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20396__$1,inst_20394);
} else {
if((state_val_20397 === (2))){
var inst_20373 = (state_20396[(8)]);
var inst_20375 = (inst_20373 < n);
var state_20396__$1 = state_20396;
if(cljs.core.truth_(inst_20375)){
var statearr_20405_20423 = state_20396__$1;
(statearr_20405_20423[(1)] = (4));

} else {
var statearr_20406_20424 = state_20396__$1;
(statearr_20406_20424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (11))){
var inst_20373 = (state_20396[(8)]);
var inst_20383 = (state_20396[(2)]);
var inst_20384 = (inst_20373 + (1));
var inst_20373__$1 = inst_20384;
var state_20396__$1 = (function (){var statearr_20407 = state_20396;
(statearr_20407[(8)] = inst_20373__$1);

(statearr_20407[(10)] = inst_20383);

return statearr_20407;
})();
var statearr_20408_20425 = state_20396__$1;
(statearr_20408_20425[(2)] = null);

(statearr_20408_20425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (9))){
var state_20396__$1 = state_20396;
var statearr_20409_20426 = state_20396__$1;
(statearr_20409_20426[(2)] = null);

(statearr_20409_20426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (5))){
var state_20396__$1 = state_20396;
var statearr_20410_20427 = state_20396__$1;
(statearr_20410_20427[(2)] = null);

(statearr_20410_20427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (10))){
var inst_20388 = (state_20396[(2)]);
var state_20396__$1 = state_20396;
var statearr_20411_20428 = state_20396__$1;
(statearr_20411_20428[(2)] = inst_20388);

(statearr_20411_20428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (8))){
var inst_20378 = (state_20396[(7)]);
var state_20396__$1 = state_20396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20396__$1,(11),out,inst_20378);
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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_20412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20412[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_20412[(1)] = (1));

return statearr_20412;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_20396){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20413){var ex__18821__auto__ = e20413;
var statearr_20414_20429 = state_20396;
(statearr_20414_20429[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20396[(4)]))){
var statearr_20415_20430 = state_20396;
(statearr_20415_20430[(1)] = cljs.core.first.call(null,(state_20396[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20431 = state_20396;
state_20396 = G__20431;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_20396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_20396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20416 = f__18892__auto__.call(null);
(statearr_20416[(6)] = c__18891__auto___20418);

return statearr_20416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20433 = (function (f,ch,meta20434){
this.f = f;
this.ch = ch;
this.meta20434 = meta20434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20435,meta20434__$1){
var self__ = this;
var _20435__$1 = this;
return (new cljs.core.async.t_cljs$core$async20433(self__.f,self__.ch,meta20434__$1));
}));

(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20435){
var self__ = this;
var _20435__$1 = this;
return self__.meta20434;
}));

(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20436 = (function (f,ch,meta20434,_,fn1,meta20437){
this.f = f;
this.ch = ch;
this.meta20434 = meta20434;
this._ = _;
this.fn1 = fn1;
this.meta20437 = meta20437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20438,meta20437__$1){
var self__ = this;
var _20438__$1 = this;
return (new cljs.core.async.t_cljs$core$async20436(self__.f,self__.ch,self__.meta20434,self__._,self__.fn1,meta20437__$1));
}));

(cljs.core.async.t_cljs$core$async20436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20438){
var self__ = this;
var _20438__$1 = this;
return self__.meta20437;
}));

(cljs.core.async.t_cljs$core$async20436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__20432_SHARP_){
return f1.call(null,(((p1__20432_SHARP_ == null))?null:self__.f.call(null,p1__20432_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async20436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20434","meta20434",2014507427,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20433","cljs.core.async/t_cljs$core$async20433",1098327854,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20437","meta20437",-107804133,null)], null);
}));

(cljs.core.async.t_cljs$core$async20436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20436");

(cljs.core.async.t_cljs$core$async20436.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20436.
 */
cljs.core.async.__GT_t_cljs$core$async20436 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20436(f__$1,ch__$1,meta20434__$1,___$2,fn1__$1,meta20437){
return (new cljs.core.async.t_cljs$core$async20436(f__$1,ch__$1,meta20434__$1,___$2,fn1__$1,meta20437));
});

}

return (new cljs.core.async.t_cljs$core$async20436(self__.f,self__.ch,self__.meta20434,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20434","meta20434",2014507427,null)], null);
}));

(cljs.core.async.t_cljs$core$async20433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20433");

(cljs.core.async.t_cljs$core$async20433.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20433.
 */
cljs.core.async.__GT_t_cljs$core$async20433 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20433(f__$1,ch__$1,meta20434){
return (new cljs.core.async.t_cljs$core$async20433(f__$1,ch__$1,meta20434));
});

}

return (new cljs.core.async.t_cljs$core$async20433(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20439 = (function (f,ch,meta20440){
this.f = f;
this.ch = ch;
this.meta20440 = meta20440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20441,meta20440__$1){
var self__ = this;
var _20441__$1 = this;
return (new cljs.core.async.t_cljs$core$async20439(self__.f,self__.ch,meta20440__$1));
}));

(cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20441){
var self__ = this;
var _20441__$1 = this;
return self__.meta20440;
}));

(cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async20439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20440","meta20440",971000844,null)], null);
}));

(cljs.core.async.t_cljs$core$async20439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20439");

(cljs.core.async.t_cljs$core$async20439.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20439.
 */
cljs.core.async.__GT_t_cljs$core$async20439 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20439(f__$1,ch__$1,meta20440){
return (new cljs.core.async.t_cljs$core$async20439(f__$1,ch__$1,meta20440));
});

}

return (new cljs.core.async.t_cljs$core$async20439(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20442 = (function (p,ch,meta20443){
this.p = p;
this.ch = ch;
this.meta20443 = meta20443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20444,meta20443__$1){
var self__ = this;
var _20444__$1 = this;
return (new cljs.core.async.t_cljs$core$async20442(self__.p,self__.ch,meta20443__$1));
}));

(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20444){
var self__ = this;
var _20444__$1 = this;
return self__.meta20443;
}));

(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20443","meta20443",-340809928,null)], null);
}));

(cljs.core.async.t_cljs$core$async20442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20442");

(cljs.core.async.t_cljs$core$async20442.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20442.
 */
cljs.core.async.__GT_t_cljs$core$async20442 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20442(p__$1,ch__$1,meta20443){
return (new cljs.core.async.t_cljs$core$async20442(p__$1,ch__$1,meta20443));
});

}

return (new cljs.core.async.t_cljs$core$async20442(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20446 = arguments.length;
switch (G__20446) {
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
var c__18891__auto___20487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20467){
var state_val_20468 = (state_20467[(1)]);
if((state_val_20468 === (7))){
var inst_20463 = (state_20467[(2)]);
var state_20467__$1 = state_20467;
var statearr_20469_20488 = state_20467__$1;
(statearr_20469_20488[(2)] = inst_20463);

(statearr_20469_20488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (1))){
var state_20467__$1 = state_20467;
var statearr_20470_20489 = state_20467__$1;
(statearr_20470_20489[(2)] = null);

(statearr_20470_20489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (4))){
var inst_20449 = (state_20467[(7)]);
var inst_20449__$1 = (state_20467[(2)]);
var inst_20450 = (inst_20449__$1 == null);
var state_20467__$1 = (function (){var statearr_20471 = state_20467;
(statearr_20471[(7)] = inst_20449__$1);

return statearr_20471;
})();
if(cljs.core.truth_(inst_20450)){
var statearr_20472_20490 = state_20467__$1;
(statearr_20472_20490[(1)] = (5));

} else {
var statearr_20473_20491 = state_20467__$1;
(statearr_20473_20491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (6))){
var inst_20449 = (state_20467[(7)]);
var inst_20454 = p.call(null,inst_20449);
var state_20467__$1 = state_20467;
if(cljs.core.truth_(inst_20454)){
var statearr_20474_20492 = state_20467__$1;
(statearr_20474_20492[(1)] = (8));

} else {
var statearr_20475_20493 = state_20467__$1;
(statearr_20475_20493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (3))){
var inst_20465 = (state_20467[(2)]);
var state_20467__$1 = state_20467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20467__$1,inst_20465);
} else {
if((state_val_20468 === (2))){
var state_20467__$1 = state_20467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20467__$1,(4),ch);
} else {
if((state_val_20468 === (11))){
var inst_20457 = (state_20467[(2)]);
var state_20467__$1 = state_20467;
var statearr_20476_20494 = state_20467__$1;
(statearr_20476_20494[(2)] = inst_20457);

(statearr_20476_20494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (9))){
var state_20467__$1 = state_20467;
var statearr_20477_20495 = state_20467__$1;
(statearr_20477_20495[(2)] = null);

(statearr_20477_20495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (5))){
var inst_20452 = cljs.core.async.close_BANG_.call(null,out);
var state_20467__$1 = state_20467;
var statearr_20478_20496 = state_20467__$1;
(statearr_20478_20496[(2)] = inst_20452);

(statearr_20478_20496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (10))){
var inst_20460 = (state_20467[(2)]);
var state_20467__$1 = (function (){var statearr_20479 = state_20467;
(statearr_20479[(8)] = inst_20460);

return statearr_20479;
})();
var statearr_20480_20497 = state_20467__$1;
(statearr_20480_20497[(2)] = null);

(statearr_20480_20497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (8))){
var inst_20449 = (state_20467[(7)]);
var state_20467__$1 = state_20467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20467__$1,(11),out,inst_20449);
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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_20481 = [null,null,null,null,null,null,null,null,null];
(statearr_20481[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_20481[(1)] = (1));

return statearr_20481;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_20467){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20482){var ex__18821__auto__ = e20482;
var statearr_20483_20498 = state_20467;
(statearr_20483_20498[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20467[(4)]))){
var statearr_20484_20499 = state_20467;
(statearr_20484_20499[(1)] = cljs.core.first.call(null,(state_20467[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20500 = state_20467;
state_20467 = G__20500;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_20467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_20467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20485 = f__18892__auto__.call(null);
(statearr_20485[(6)] = c__18891__auto___20487);

return statearr_20485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20502 = arguments.length;
switch (G__20502) {
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
var c__18891__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20565){
var state_val_20566 = (state_20565[(1)]);
if((state_val_20566 === (7))){
var inst_20561 = (state_20565[(2)]);
var state_20565__$1 = state_20565;
var statearr_20567_20606 = state_20565__$1;
(statearr_20567_20606[(2)] = inst_20561);

(statearr_20567_20606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (20))){
var inst_20531 = (state_20565[(7)]);
var inst_20542 = (state_20565[(2)]);
var inst_20543 = cljs.core.next.call(null,inst_20531);
var inst_20517 = inst_20543;
var inst_20518 = null;
var inst_20519 = (0);
var inst_20520 = (0);
var state_20565__$1 = (function (){var statearr_20568 = state_20565;
(statearr_20568[(8)] = inst_20518);

(statearr_20568[(9)] = inst_20542);

(statearr_20568[(10)] = inst_20520);

(statearr_20568[(11)] = inst_20517);

(statearr_20568[(12)] = inst_20519);

return statearr_20568;
})();
var statearr_20569_20607 = state_20565__$1;
(statearr_20569_20607[(2)] = null);

(statearr_20569_20607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (1))){
var state_20565__$1 = state_20565;
var statearr_20570_20608 = state_20565__$1;
(statearr_20570_20608[(2)] = null);

(statearr_20570_20608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (4))){
var inst_20506 = (state_20565[(13)]);
var inst_20506__$1 = (state_20565[(2)]);
var inst_20507 = (inst_20506__$1 == null);
var state_20565__$1 = (function (){var statearr_20571 = state_20565;
(statearr_20571[(13)] = inst_20506__$1);

return statearr_20571;
})();
if(cljs.core.truth_(inst_20507)){
var statearr_20572_20609 = state_20565__$1;
(statearr_20572_20609[(1)] = (5));

} else {
var statearr_20573_20610 = state_20565__$1;
(statearr_20573_20610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (15))){
var state_20565__$1 = state_20565;
var statearr_20577_20611 = state_20565__$1;
(statearr_20577_20611[(2)] = null);

(statearr_20577_20611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (21))){
var state_20565__$1 = state_20565;
var statearr_20578_20612 = state_20565__$1;
(statearr_20578_20612[(2)] = null);

(statearr_20578_20612[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (13))){
var inst_20518 = (state_20565[(8)]);
var inst_20520 = (state_20565[(10)]);
var inst_20517 = (state_20565[(11)]);
var inst_20519 = (state_20565[(12)]);
var inst_20527 = (state_20565[(2)]);
var inst_20528 = (inst_20520 + (1));
var tmp20574 = inst_20518;
var tmp20575 = inst_20517;
var tmp20576 = inst_20519;
var inst_20517__$1 = tmp20575;
var inst_20518__$1 = tmp20574;
var inst_20519__$1 = tmp20576;
var inst_20520__$1 = inst_20528;
var state_20565__$1 = (function (){var statearr_20579 = state_20565;
(statearr_20579[(8)] = inst_20518__$1);

(statearr_20579[(10)] = inst_20520__$1);

(statearr_20579[(11)] = inst_20517__$1);

(statearr_20579[(12)] = inst_20519__$1);

(statearr_20579[(14)] = inst_20527);

return statearr_20579;
})();
var statearr_20580_20613 = state_20565__$1;
(statearr_20580_20613[(2)] = null);

(statearr_20580_20613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (22))){
var state_20565__$1 = state_20565;
var statearr_20581_20614 = state_20565__$1;
(statearr_20581_20614[(2)] = null);

(statearr_20581_20614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (6))){
var inst_20506 = (state_20565[(13)]);
var inst_20515 = f.call(null,inst_20506);
var inst_20516 = cljs.core.seq.call(null,inst_20515);
var inst_20517 = inst_20516;
var inst_20518 = null;
var inst_20519 = (0);
var inst_20520 = (0);
var state_20565__$1 = (function (){var statearr_20582 = state_20565;
(statearr_20582[(8)] = inst_20518);

(statearr_20582[(10)] = inst_20520);

(statearr_20582[(11)] = inst_20517);

(statearr_20582[(12)] = inst_20519);

return statearr_20582;
})();
var statearr_20583_20615 = state_20565__$1;
(statearr_20583_20615[(2)] = null);

(statearr_20583_20615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (17))){
var inst_20531 = (state_20565[(7)]);
var inst_20535 = cljs.core.chunk_first.call(null,inst_20531);
var inst_20536 = cljs.core.chunk_rest.call(null,inst_20531);
var inst_20537 = cljs.core.count.call(null,inst_20535);
var inst_20517 = inst_20536;
var inst_20518 = inst_20535;
var inst_20519 = inst_20537;
var inst_20520 = (0);
var state_20565__$1 = (function (){var statearr_20584 = state_20565;
(statearr_20584[(8)] = inst_20518);

(statearr_20584[(10)] = inst_20520);

(statearr_20584[(11)] = inst_20517);

(statearr_20584[(12)] = inst_20519);

return statearr_20584;
})();
var statearr_20585_20616 = state_20565__$1;
(statearr_20585_20616[(2)] = null);

(statearr_20585_20616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (3))){
var inst_20563 = (state_20565[(2)]);
var state_20565__$1 = state_20565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20565__$1,inst_20563);
} else {
if((state_val_20566 === (12))){
var inst_20551 = (state_20565[(2)]);
var state_20565__$1 = state_20565;
var statearr_20586_20617 = state_20565__$1;
(statearr_20586_20617[(2)] = inst_20551);

(statearr_20586_20617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (2))){
var state_20565__$1 = state_20565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20565__$1,(4),in$);
} else {
if((state_val_20566 === (23))){
var inst_20559 = (state_20565[(2)]);
var state_20565__$1 = state_20565;
var statearr_20587_20618 = state_20565__$1;
(statearr_20587_20618[(2)] = inst_20559);

(statearr_20587_20618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (19))){
var inst_20546 = (state_20565[(2)]);
var state_20565__$1 = state_20565;
var statearr_20588_20619 = state_20565__$1;
(statearr_20588_20619[(2)] = inst_20546);

(statearr_20588_20619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (11))){
var inst_20531 = (state_20565[(7)]);
var inst_20517 = (state_20565[(11)]);
var inst_20531__$1 = cljs.core.seq.call(null,inst_20517);
var state_20565__$1 = (function (){var statearr_20589 = state_20565;
(statearr_20589[(7)] = inst_20531__$1);

return statearr_20589;
})();
if(inst_20531__$1){
var statearr_20590_20620 = state_20565__$1;
(statearr_20590_20620[(1)] = (14));

} else {
var statearr_20591_20621 = state_20565__$1;
(statearr_20591_20621[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (9))){
var inst_20553 = (state_20565[(2)]);
var inst_20554 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20565__$1 = (function (){var statearr_20592 = state_20565;
(statearr_20592[(15)] = inst_20553);

return statearr_20592;
})();
if(cljs.core.truth_(inst_20554)){
var statearr_20593_20622 = state_20565__$1;
(statearr_20593_20622[(1)] = (21));

} else {
var statearr_20594_20623 = state_20565__$1;
(statearr_20594_20623[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (5))){
var inst_20509 = cljs.core.async.close_BANG_.call(null,out);
var state_20565__$1 = state_20565;
var statearr_20595_20624 = state_20565__$1;
(statearr_20595_20624[(2)] = inst_20509);

(statearr_20595_20624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (14))){
var inst_20531 = (state_20565[(7)]);
var inst_20533 = cljs.core.chunked_seq_QMARK_.call(null,inst_20531);
var state_20565__$1 = state_20565;
if(inst_20533){
var statearr_20596_20625 = state_20565__$1;
(statearr_20596_20625[(1)] = (17));

} else {
var statearr_20597_20626 = state_20565__$1;
(statearr_20597_20626[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (16))){
var inst_20549 = (state_20565[(2)]);
var state_20565__$1 = state_20565;
var statearr_20598_20627 = state_20565__$1;
(statearr_20598_20627[(2)] = inst_20549);

(statearr_20598_20627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20566 === (10))){
var inst_20518 = (state_20565[(8)]);
var inst_20520 = (state_20565[(10)]);
var inst_20525 = cljs.core._nth.call(null,inst_20518,inst_20520);
var state_20565__$1 = state_20565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20565__$1,(13),out,inst_20525);
} else {
if((state_val_20566 === (18))){
var inst_20531 = (state_20565[(7)]);
var inst_20540 = cljs.core.first.call(null,inst_20531);
var state_20565__$1 = state_20565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20565__$1,(20),out,inst_20540);
} else {
if((state_val_20566 === (8))){
var inst_20520 = (state_20565[(10)]);
var inst_20519 = (state_20565[(12)]);
var inst_20522 = (inst_20520 < inst_20519);
var inst_20523 = inst_20522;
var state_20565__$1 = state_20565;
if(cljs.core.truth_(inst_20523)){
var statearr_20599_20628 = state_20565__$1;
(statearr_20599_20628[(1)] = (10));

} else {
var statearr_20600_20629 = state_20565__$1;
(statearr_20600_20629[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__18818__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18818__auto____0 = (function (){
var statearr_20601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20601[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18818__auto__);

(statearr_20601[(1)] = (1));

return statearr_20601;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18818__auto____1 = (function (state_20565){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20602){var ex__18821__auto__ = e20602;
var statearr_20603_20630 = state_20565;
(statearr_20603_20630[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20565[(4)]))){
var statearr_20604_20631 = state_20565;
(statearr_20604_20631[(1)] = cljs.core.first.call(null,(state_20565[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20632 = state_20565;
state_20565 = G__20632;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18818__auto__ = function(state_20565){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18818__auto____1.call(this,state_20565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18818__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18818__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20605 = f__18892__auto__.call(null);
(statearr_20605[(6)] = c__18891__auto__);

return statearr_20605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));

return c__18891__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20634 = arguments.length;
switch (G__20634) {
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
var G__20637 = arguments.length;
switch (G__20637) {
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
var G__20640 = arguments.length;
switch (G__20640) {
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
var c__18891__auto___20688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20664){
var state_val_20665 = (state_20664[(1)]);
if((state_val_20665 === (7))){
var inst_20659 = (state_20664[(2)]);
var state_20664__$1 = state_20664;
var statearr_20666_20689 = state_20664__$1;
(statearr_20666_20689[(2)] = inst_20659);

(statearr_20666_20689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (1))){
var inst_20641 = null;
var state_20664__$1 = (function (){var statearr_20667 = state_20664;
(statearr_20667[(7)] = inst_20641);

return statearr_20667;
})();
var statearr_20668_20690 = state_20664__$1;
(statearr_20668_20690[(2)] = null);

(statearr_20668_20690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (4))){
var inst_20644 = (state_20664[(8)]);
var inst_20644__$1 = (state_20664[(2)]);
var inst_20645 = (inst_20644__$1 == null);
var inst_20646 = cljs.core.not.call(null,inst_20645);
var state_20664__$1 = (function (){var statearr_20669 = state_20664;
(statearr_20669[(8)] = inst_20644__$1);

return statearr_20669;
})();
if(inst_20646){
var statearr_20670_20691 = state_20664__$1;
(statearr_20670_20691[(1)] = (5));

} else {
var statearr_20671_20692 = state_20664__$1;
(statearr_20671_20692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (6))){
var state_20664__$1 = state_20664;
var statearr_20672_20693 = state_20664__$1;
(statearr_20672_20693[(2)] = null);

(statearr_20672_20693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (3))){
var inst_20661 = (state_20664[(2)]);
var inst_20662 = cljs.core.async.close_BANG_.call(null,out);
var state_20664__$1 = (function (){var statearr_20673 = state_20664;
(statearr_20673[(9)] = inst_20661);

return statearr_20673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20664__$1,inst_20662);
} else {
if((state_val_20665 === (2))){
var state_20664__$1 = state_20664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20664__$1,(4),ch);
} else {
if((state_val_20665 === (11))){
var inst_20644 = (state_20664[(8)]);
var inst_20653 = (state_20664[(2)]);
var inst_20641 = inst_20644;
var state_20664__$1 = (function (){var statearr_20674 = state_20664;
(statearr_20674[(10)] = inst_20653);

(statearr_20674[(7)] = inst_20641);

return statearr_20674;
})();
var statearr_20675_20694 = state_20664__$1;
(statearr_20675_20694[(2)] = null);

(statearr_20675_20694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (9))){
var inst_20644 = (state_20664[(8)]);
var state_20664__$1 = state_20664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20664__$1,(11),out,inst_20644);
} else {
if((state_val_20665 === (5))){
var inst_20641 = (state_20664[(7)]);
var inst_20644 = (state_20664[(8)]);
var inst_20648 = cljs.core._EQ_.call(null,inst_20644,inst_20641);
var state_20664__$1 = state_20664;
if(inst_20648){
var statearr_20677_20695 = state_20664__$1;
(statearr_20677_20695[(1)] = (8));

} else {
var statearr_20678_20696 = state_20664__$1;
(statearr_20678_20696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (10))){
var inst_20656 = (state_20664[(2)]);
var state_20664__$1 = state_20664;
var statearr_20679_20697 = state_20664__$1;
(statearr_20679_20697[(2)] = inst_20656);

(statearr_20679_20697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20665 === (8))){
var inst_20641 = (state_20664[(7)]);
var tmp20676 = inst_20641;
var inst_20641__$1 = tmp20676;
var state_20664__$1 = (function (){var statearr_20680 = state_20664;
(statearr_20680[(7)] = inst_20641__$1);

return statearr_20680;
})();
var statearr_20681_20698 = state_20664__$1;
(statearr_20681_20698[(2)] = null);

(statearr_20681_20698[(1)] = (2));


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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_20682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20682[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_20682[(1)] = (1));

return statearr_20682;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_20664){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20683){var ex__18821__auto__ = e20683;
var statearr_20684_20699 = state_20664;
(statearr_20684_20699[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20664[(4)]))){
var statearr_20685_20700 = state_20664;
(statearr_20685_20700[(1)] = cljs.core.first.call(null,(state_20664[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20701 = state_20664;
state_20664 = G__20701;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_20664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_20664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20686 = f__18892__auto__.call(null);
(statearr_20686[(6)] = c__18891__auto___20688);

return statearr_20686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20703 = arguments.length;
switch (G__20703) {
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
var c__18891__auto___20770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20741){
var state_val_20742 = (state_20741[(1)]);
if((state_val_20742 === (7))){
var inst_20737 = (state_20741[(2)]);
var state_20741__$1 = state_20741;
var statearr_20743_20771 = state_20741__$1;
(statearr_20743_20771[(2)] = inst_20737);

(statearr_20743_20771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (1))){
var inst_20704 = (new Array(n));
var inst_20705 = inst_20704;
var inst_20706 = (0);
var state_20741__$1 = (function (){var statearr_20744 = state_20741;
(statearr_20744[(7)] = inst_20705);

(statearr_20744[(8)] = inst_20706);

return statearr_20744;
})();
var statearr_20745_20772 = state_20741__$1;
(statearr_20745_20772[(2)] = null);

(statearr_20745_20772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (4))){
var inst_20709 = (state_20741[(9)]);
var inst_20709__$1 = (state_20741[(2)]);
var inst_20710 = (inst_20709__$1 == null);
var inst_20711 = cljs.core.not.call(null,inst_20710);
var state_20741__$1 = (function (){var statearr_20746 = state_20741;
(statearr_20746[(9)] = inst_20709__$1);

return statearr_20746;
})();
if(inst_20711){
var statearr_20747_20773 = state_20741__$1;
(statearr_20747_20773[(1)] = (5));

} else {
var statearr_20748_20774 = state_20741__$1;
(statearr_20748_20774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (15))){
var inst_20731 = (state_20741[(2)]);
var state_20741__$1 = state_20741;
var statearr_20749_20775 = state_20741__$1;
(statearr_20749_20775[(2)] = inst_20731);

(statearr_20749_20775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (13))){
var state_20741__$1 = state_20741;
var statearr_20750_20776 = state_20741__$1;
(statearr_20750_20776[(2)] = null);

(statearr_20750_20776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (6))){
var inst_20706 = (state_20741[(8)]);
var inst_20727 = (inst_20706 > (0));
var state_20741__$1 = state_20741;
if(cljs.core.truth_(inst_20727)){
var statearr_20751_20777 = state_20741__$1;
(statearr_20751_20777[(1)] = (12));

} else {
var statearr_20752_20778 = state_20741__$1;
(statearr_20752_20778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (3))){
var inst_20739 = (state_20741[(2)]);
var state_20741__$1 = state_20741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20741__$1,inst_20739);
} else {
if((state_val_20742 === (12))){
var inst_20705 = (state_20741[(7)]);
var inst_20729 = cljs.core.vec.call(null,inst_20705);
var state_20741__$1 = state_20741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20741__$1,(15),out,inst_20729);
} else {
if((state_val_20742 === (2))){
var state_20741__$1 = state_20741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20741__$1,(4),ch);
} else {
if((state_val_20742 === (11))){
var inst_20721 = (state_20741[(2)]);
var inst_20722 = (new Array(n));
var inst_20705 = inst_20722;
var inst_20706 = (0);
var state_20741__$1 = (function (){var statearr_20753 = state_20741;
(statearr_20753[(10)] = inst_20721);

(statearr_20753[(7)] = inst_20705);

(statearr_20753[(8)] = inst_20706);

return statearr_20753;
})();
var statearr_20754_20779 = state_20741__$1;
(statearr_20754_20779[(2)] = null);

(statearr_20754_20779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (9))){
var inst_20705 = (state_20741[(7)]);
var inst_20719 = cljs.core.vec.call(null,inst_20705);
var state_20741__$1 = state_20741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20741__$1,(11),out,inst_20719);
} else {
if((state_val_20742 === (5))){
var inst_20709 = (state_20741[(9)]);
var inst_20705 = (state_20741[(7)]);
var inst_20714 = (state_20741[(11)]);
var inst_20706 = (state_20741[(8)]);
var inst_20713 = (inst_20705[inst_20706] = inst_20709);
var inst_20714__$1 = (inst_20706 + (1));
var inst_20715 = (inst_20714__$1 < n);
var state_20741__$1 = (function (){var statearr_20755 = state_20741;
(statearr_20755[(12)] = inst_20713);

(statearr_20755[(11)] = inst_20714__$1);

return statearr_20755;
})();
if(cljs.core.truth_(inst_20715)){
var statearr_20756_20780 = state_20741__$1;
(statearr_20756_20780[(1)] = (8));

} else {
var statearr_20757_20781 = state_20741__$1;
(statearr_20757_20781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (14))){
var inst_20734 = (state_20741[(2)]);
var inst_20735 = cljs.core.async.close_BANG_.call(null,out);
var state_20741__$1 = (function (){var statearr_20759 = state_20741;
(statearr_20759[(13)] = inst_20734);

return statearr_20759;
})();
var statearr_20760_20782 = state_20741__$1;
(statearr_20760_20782[(2)] = inst_20735);

(statearr_20760_20782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (10))){
var inst_20725 = (state_20741[(2)]);
var state_20741__$1 = state_20741;
var statearr_20761_20783 = state_20741__$1;
(statearr_20761_20783[(2)] = inst_20725);

(statearr_20761_20783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20742 === (8))){
var inst_20705 = (state_20741[(7)]);
var inst_20714 = (state_20741[(11)]);
var tmp20758 = inst_20705;
var inst_20705__$1 = tmp20758;
var inst_20706 = inst_20714;
var state_20741__$1 = (function (){var statearr_20762 = state_20741;
(statearr_20762[(7)] = inst_20705__$1);

(statearr_20762[(8)] = inst_20706);

return statearr_20762;
})();
var statearr_20763_20784 = state_20741__$1;
(statearr_20763_20784[(2)] = null);

(statearr_20763_20784[(1)] = (2));


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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_20764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20764[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_20764[(1)] = (1));

return statearr_20764;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_20741){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20765){var ex__18821__auto__ = e20765;
var statearr_20766_20785 = state_20741;
(statearr_20766_20785[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20741[(4)]))){
var statearr_20767_20786 = state_20741;
(statearr_20767_20786[(1)] = cljs.core.first.call(null,(state_20741[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20787 = state_20741;
state_20741 = G__20787;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_20741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_20741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20768 = f__18892__auto__.call(null);
(statearr_20768[(6)] = c__18891__auto___20770);

return statearr_20768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20789 = arguments.length;
switch (G__20789) {
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
var c__18891__auto___20860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18892__auto__ = (function (){var switch__18817__auto__ = (function (state_20831){
var state_val_20832 = (state_20831[(1)]);
if((state_val_20832 === (7))){
var inst_20827 = (state_20831[(2)]);
var state_20831__$1 = state_20831;
var statearr_20833_20861 = state_20831__$1;
(statearr_20833_20861[(2)] = inst_20827);

(statearr_20833_20861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (1))){
var inst_20790 = [];
var inst_20791 = inst_20790;
var inst_20792 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20831__$1 = (function (){var statearr_20834 = state_20831;
(statearr_20834[(7)] = inst_20792);

(statearr_20834[(8)] = inst_20791);

return statearr_20834;
})();
var statearr_20835_20862 = state_20831__$1;
(statearr_20835_20862[(2)] = null);

(statearr_20835_20862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (4))){
var inst_20795 = (state_20831[(9)]);
var inst_20795__$1 = (state_20831[(2)]);
var inst_20796 = (inst_20795__$1 == null);
var inst_20797 = cljs.core.not.call(null,inst_20796);
var state_20831__$1 = (function (){var statearr_20836 = state_20831;
(statearr_20836[(9)] = inst_20795__$1);

return statearr_20836;
})();
if(inst_20797){
var statearr_20837_20863 = state_20831__$1;
(statearr_20837_20863[(1)] = (5));

} else {
var statearr_20838_20864 = state_20831__$1;
(statearr_20838_20864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (15))){
var inst_20821 = (state_20831[(2)]);
var state_20831__$1 = state_20831;
var statearr_20839_20865 = state_20831__$1;
(statearr_20839_20865[(2)] = inst_20821);

(statearr_20839_20865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (13))){
var state_20831__$1 = state_20831;
var statearr_20840_20866 = state_20831__$1;
(statearr_20840_20866[(2)] = null);

(statearr_20840_20866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (6))){
var inst_20791 = (state_20831[(8)]);
var inst_20816 = inst_20791.length;
var inst_20817 = (inst_20816 > (0));
var state_20831__$1 = state_20831;
if(cljs.core.truth_(inst_20817)){
var statearr_20841_20867 = state_20831__$1;
(statearr_20841_20867[(1)] = (12));

} else {
var statearr_20842_20868 = state_20831__$1;
(statearr_20842_20868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (3))){
var inst_20829 = (state_20831[(2)]);
var state_20831__$1 = state_20831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20831__$1,inst_20829);
} else {
if((state_val_20832 === (12))){
var inst_20791 = (state_20831[(8)]);
var inst_20819 = cljs.core.vec.call(null,inst_20791);
var state_20831__$1 = state_20831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20831__$1,(15),out,inst_20819);
} else {
if((state_val_20832 === (2))){
var state_20831__$1 = state_20831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20831__$1,(4),ch);
} else {
if((state_val_20832 === (11))){
var inst_20795 = (state_20831[(9)]);
var inst_20799 = (state_20831[(10)]);
var inst_20809 = (state_20831[(2)]);
var inst_20810 = [];
var inst_20811 = inst_20810.push(inst_20795);
var inst_20791 = inst_20810;
var inst_20792 = inst_20799;
var state_20831__$1 = (function (){var statearr_20843 = state_20831;
(statearr_20843[(7)] = inst_20792);

(statearr_20843[(11)] = inst_20811);

(statearr_20843[(8)] = inst_20791);

(statearr_20843[(12)] = inst_20809);

return statearr_20843;
})();
var statearr_20844_20869 = state_20831__$1;
(statearr_20844_20869[(2)] = null);

(statearr_20844_20869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (9))){
var inst_20791 = (state_20831[(8)]);
var inst_20807 = cljs.core.vec.call(null,inst_20791);
var state_20831__$1 = state_20831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20831__$1,(11),out,inst_20807);
} else {
if((state_val_20832 === (5))){
var inst_20792 = (state_20831[(7)]);
var inst_20795 = (state_20831[(9)]);
var inst_20799 = (state_20831[(10)]);
var inst_20799__$1 = f.call(null,inst_20795);
var inst_20800 = cljs.core._EQ_.call(null,inst_20799__$1,inst_20792);
var inst_20801 = cljs.core.keyword_identical_QMARK_.call(null,inst_20792,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20802 = ((inst_20800) || (inst_20801));
var state_20831__$1 = (function (){var statearr_20845 = state_20831;
(statearr_20845[(10)] = inst_20799__$1);

return statearr_20845;
})();
if(cljs.core.truth_(inst_20802)){
var statearr_20846_20870 = state_20831__$1;
(statearr_20846_20870[(1)] = (8));

} else {
var statearr_20847_20871 = state_20831__$1;
(statearr_20847_20871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (14))){
var inst_20824 = (state_20831[(2)]);
var inst_20825 = cljs.core.async.close_BANG_.call(null,out);
var state_20831__$1 = (function (){var statearr_20849 = state_20831;
(statearr_20849[(13)] = inst_20824);

return statearr_20849;
})();
var statearr_20850_20872 = state_20831__$1;
(statearr_20850_20872[(2)] = inst_20825);

(statearr_20850_20872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (10))){
var inst_20814 = (state_20831[(2)]);
var state_20831__$1 = state_20831;
var statearr_20851_20873 = state_20831__$1;
(statearr_20851_20873[(2)] = inst_20814);

(statearr_20851_20873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20832 === (8))){
var inst_20795 = (state_20831[(9)]);
var inst_20791 = (state_20831[(8)]);
var inst_20799 = (state_20831[(10)]);
var inst_20804 = inst_20791.push(inst_20795);
var tmp20848 = inst_20791;
var inst_20791__$1 = tmp20848;
var inst_20792 = inst_20799;
var state_20831__$1 = (function (){var statearr_20852 = state_20831;
(statearr_20852[(14)] = inst_20804);

(statearr_20852[(7)] = inst_20792);

(statearr_20852[(8)] = inst_20791__$1);

return statearr_20852;
})();
var statearr_20853_20874 = state_20831__$1;
(statearr_20853_20874[(2)] = null);

(statearr_20853_20874[(1)] = (2));


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
var cljs$core$async$state_machine__18818__auto__ = null;
var cljs$core$async$state_machine__18818__auto____0 = (function (){
var statearr_20854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20854[(0)] = cljs$core$async$state_machine__18818__auto__);

(statearr_20854[(1)] = (1));

return statearr_20854;
});
var cljs$core$async$state_machine__18818__auto____1 = (function (state_20831){
while(true){
var ret_value__18819__auto__ = (function (){try{while(true){
var result__18820__auto__ = switch__18817__auto__.call(null,state_20831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18820__auto__;
}
break;
}
}catch (e20855){var ex__18821__auto__ = e20855;
var statearr_20856_20875 = state_20831;
(statearr_20856_20875[(2)] = ex__18821__auto__);


if(cljs.core.seq.call(null,(state_20831[(4)]))){
var statearr_20857_20876 = state_20831;
(statearr_20857_20876[(1)] = cljs.core.first.call(null,(state_20831[(4)])));

} else {
throw ex__18821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20877 = state_20831;
state_20831 = G__20877;
continue;
} else {
return ret_value__18819__auto__;
}
break;
}
});
cljs$core$async$state_machine__18818__auto__ = function(state_20831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18818__auto____1.call(this,state_20831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18818__auto____0;
cljs$core$async$state_machine__18818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18818__auto____1;
return cljs$core$async$state_machine__18818__auto__;
})()
})();
var state__18893__auto__ = (function (){var statearr_20858 = f__18892__auto__.call(null);
(statearr_20858[(6)] = c__18891__auto___20860);

return statearr_20858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18893__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
