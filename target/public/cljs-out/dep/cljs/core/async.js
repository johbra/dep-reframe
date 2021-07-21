// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22060 = arguments.length;
switch (G__22060) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22061 = (function (f,blockable,meta22062){
this.f = f;
this.blockable = blockable;
this.meta22062 = meta22062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22063,meta22062__$1){
var self__ = this;
var _22063__$1 = this;
return (new cljs.core.async.t_cljs$core$async22061(self__.f,self__.blockable,meta22062__$1));
}));

(cljs.core.async.t_cljs$core$async22061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22063){
var self__ = this;
var _22063__$1 = this;
return self__.meta22062;
}));

(cljs.core.async.t_cljs$core$async22061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async22061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async22061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta22062], null);
}));

(cljs.core.async.t_cljs$core$async22061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22061");

(cljs.core.async.t_cljs$core$async22061.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async22061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22061.
 */
cljs.core.async.__GT_t_cljs$core$async22061 = (function cljs$core$async$__GT_t_cljs$core$async22061(f__$1,blockable__$1,meta22062){
return (new cljs.core.async.t_cljs$core$async22061(f__$1,blockable__$1,meta22062));
});

}

return (new cljs.core.async.t_cljs$core$async22061(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__22067 = arguments.length;
switch (G__22067) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__22070 = arguments.length;
switch (G__22070) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__22073 = arguments.length;
switch (G__22073) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_22075 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22075) : fn1.call(null,val_22075));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22075) : fn1.call(null,val_22075));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__22077 = arguments.length;
switch (G__22077) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___22079 = n;
var x_22080 = (0);
while(true){
if((x_22080 < n__4648__auto___22079)){
(a[x_22080] = x_22080);

var G__22081 = (x_22080 + (1));
x_22080 = G__22081;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22082 = (function (flag,meta22083){
this.flag = flag;
this.meta22083 = meta22083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22084,meta22083__$1){
var self__ = this;
var _22084__$1 = this;
return (new cljs.core.async.t_cljs$core$async22082(self__.flag,meta22083__$1));
}));

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22084){
var self__ = this;
var _22084__$1 = this;
return self__.meta22083;
}));

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async22082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta22083], null);
}));

(cljs.core.async.t_cljs$core$async22082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22082");

(cljs.core.async.t_cljs$core$async22082.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async22082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22082.
 */
cljs.core.async.__GT_t_cljs$core$async22082 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22082(flag__$1,meta22083){
return (new cljs.core.async.t_cljs$core$async22082(flag__$1,meta22083));
});

}

return (new cljs.core.async.t_cljs$core$async22082(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22085 = (function (flag,cb,meta22086){
this.flag = flag;
this.cb = cb;
this.meta22086 = meta22086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22087,meta22086__$1){
var self__ = this;
var _22087__$1 = this;
return (new cljs.core.async.t_cljs$core$async22085(self__.flag,self__.cb,meta22086__$1));
}));

(cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22087){
var self__ = this;
var _22087__$1 = this;
return self__.meta22086;
}));

(cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async22085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta22086], null);
}));

(cljs.core.async.t_cljs$core$async22085.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22085");

(cljs.core.async.t_cljs$core$async22085.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async22085");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22085.
 */
cljs.core.async.__GT_t_cljs$core$async22085 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22085(flag__$1,cb__$1,meta22086){
return (new cljs.core.async.t_cljs$core$async22085(flag__$1,cb__$1,meta22086));
});

}

return (new cljs.core.async.t_cljs$core$async22085(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22088_SHARP_){
var G__22090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22088_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22090) : fret.call(null,G__22090));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22089_SHARP_){
var G__22091 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22089_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22091) : fret.call(null,G__22091));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22092 = (i + (1));
i = G__22092;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5753__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__4777__auto__ = [];
var len__4771__auto___22097 = arguments.length;
var i__4772__auto___22098 = (0);
while(true){
if((i__4772__auto___22098 < len__4771__auto___22097)){
args__4777__auto__.push((arguments[i__4772__auto___22098]));

var G__22099 = (i__4772__auto___22098 + (1));
i__4772__auto___22098 = G__22099;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22095){
var map__22096 = p__22095;
var map__22096__$1 = cljs.core.__destructure_map(map__22096);
var opts = map__22096__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22093){
var G__22094 = cljs.core.first(seq22093);
var seq22093__$1 = cljs.core.next(seq22093);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22094,seq22093__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__22101 = arguments.length;
switch (G__22101) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22000__auto___22148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22125){
var state_val_22126 = (state_22125[(1)]);
if((state_val_22126 === (7))){
var inst_22121 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
var statearr_22127_22149 = state_22125__$1;
(statearr_22127_22149[(2)] = inst_22121);

(statearr_22127_22149[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (1))){
var state_22125__$1 = state_22125;
var statearr_22128_22150 = state_22125__$1;
(statearr_22128_22150[(2)] = null);

(statearr_22128_22150[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (4))){
var inst_22104 = (state_22125[(7)]);
var inst_22104__$1 = (state_22125[(2)]);
var inst_22105 = (inst_22104__$1 == null);
var state_22125__$1 = (function (){var statearr_22129 = state_22125;
(statearr_22129[(7)] = inst_22104__$1);

return statearr_22129;
})();
if(cljs.core.truth_(inst_22105)){
var statearr_22130_22151 = state_22125__$1;
(statearr_22130_22151[(1)] = (5));

} else {
var statearr_22131_22152 = state_22125__$1;
(statearr_22131_22152[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (13))){
var state_22125__$1 = state_22125;
var statearr_22132_22153 = state_22125__$1;
(statearr_22132_22153[(2)] = null);

(statearr_22132_22153[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (6))){
var inst_22104 = (state_22125[(7)]);
var state_22125__$1 = state_22125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22125__$1,(11),to,inst_22104);
} else {
if((state_val_22126 === (3))){
var inst_22123 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22125__$1,inst_22123);
} else {
if((state_val_22126 === (12))){
var state_22125__$1 = state_22125;
var statearr_22133_22154 = state_22125__$1;
(statearr_22133_22154[(2)] = null);

(statearr_22133_22154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (2))){
var state_22125__$1 = state_22125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22125__$1,(4),from);
} else {
if((state_val_22126 === (11))){
var inst_22114 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
if(cljs.core.truth_(inst_22114)){
var statearr_22134_22155 = state_22125__$1;
(statearr_22134_22155[(1)] = (12));

} else {
var statearr_22135_22156 = state_22125__$1;
(statearr_22135_22156[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (9))){
var state_22125__$1 = state_22125;
var statearr_22136_22157 = state_22125__$1;
(statearr_22136_22157[(2)] = null);

(statearr_22136_22157[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (5))){
var state_22125__$1 = state_22125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22137_22158 = state_22125__$1;
(statearr_22137_22158[(1)] = (8));

} else {
var statearr_22138_22159 = state_22125__$1;
(statearr_22138_22159[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (14))){
var inst_22119 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
var statearr_22139_22160 = state_22125__$1;
(statearr_22139_22160[(2)] = inst_22119);

(statearr_22139_22160[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (10))){
var inst_22111 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
var statearr_22140_22161 = state_22125__$1;
(statearr_22140_22161[(2)] = inst_22111);

(statearr_22140_22161[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22126 === (8))){
var inst_22108 = cljs.core.async.close_BANG_(to);
var state_22125__$1 = state_22125;
var statearr_22141_22162 = state_22125__$1;
(statearr_22141_22162[(2)] = inst_22108);

(statearr_22141_22162[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_22142 = [null,null,null,null,null,null,null,null];
(statearr_22142[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_22142[(1)] = (1));

return statearr_22142;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_22125){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22125);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22143){var ex__21929__auto__ = e22143;
var statearr_22144_22163 = state_22125;
(statearr_22144_22163[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22125[(4)]))){
var statearr_22145_22164 = state_22125;
(statearr_22145_22164[(1)] = cljs.core.first((state_22125[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22165 = state_22125;
state_22125 = G__22165;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_22125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_22125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22146 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22146[(6)] = c__22000__auto___22148);

return statearr_22146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__22166){
var vec__22167 = p__22166;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22167,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22167,(1),null);
var job = vec__22167;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__22000__auto___22343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22174){
var state_val_22175 = (state_22174[(1)]);
if((state_val_22175 === (1))){
var state_22174__$1 = state_22174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22174__$1,(2),res,v);
} else {
if((state_val_22175 === (2))){
var inst_22171 = (state_22174[(2)]);
var inst_22172 = cljs.core.async.close_BANG_(res);
var state_22174__$1 = (function (){var statearr_22176 = state_22174;
(statearr_22176[(7)] = inst_22171);

return statearr_22176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22174__$1,inst_22172);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0 = (function (){
var statearr_22177 = [null,null,null,null,null,null,null,null];
(statearr_22177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__);

(statearr_22177[(1)] = (1));

return statearr_22177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1 = (function (state_22174){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22174);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22178){var ex__21929__auto__ = e22178;
var statearr_22179_22344 = state_22174;
(statearr_22179_22344[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22174[(4)]))){
var statearr_22180_22345 = state_22174;
(statearr_22180_22345[(1)] = cljs.core.first((state_22174[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22346 = state_22174;
state_22174 = G__22346;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = function(state_22174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1.call(this,state_22174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22181 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22181[(6)] = c__22000__auto___22343);

return statearr_22181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__22182){
var vec__22183 = p__22182;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22183,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22183,(1),null);
var job = vec__22183;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___22347 = n;
var __22348 = (0);
while(true){
if((__22348 < n__4648__auto___22347)){
var G__22186_22349 = type;
var G__22186_22350__$1 = (((G__22186_22349 instanceof cljs.core.Keyword))?G__22186_22349.fqn:null);
switch (G__22186_22350__$1) {
case "compute":
var c__22000__auto___22352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22348,c__22000__auto___22352,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async){
return (function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = ((function (__22348,c__22000__auto___22352,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async){
return (function (state_22199){
var state_val_22200 = (state_22199[(1)]);
if((state_val_22200 === (1))){
var state_22199__$1 = state_22199;
var statearr_22201_22353 = state_22199__$1;
(statearr_22201_22353[(2)] = null);

(statearr_22201_22353[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22200 === (2))){
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22199__$1,(4),jobs);
} else {
if((state_val_22200 === (3))){
var inst_22197 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22199__$1,inst_22197);
} else {
if((state_val_22200 === (4))){
var inst_22189 = (state_22199[(2)]);
var inst_22190 = process(inst_22189);
var state_22199__$1 = state_22199;
if(cljs.core.truth_(inst_22190)){
var statearr_22202_22354 = state_22199__$1;
(statearr_22202_22354[(1)] = (5));

} else {
var statearr_22203_22355 = state_22199__$1;
(statearr_22203_22355[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22200 === (5))){
var state_22199__$1 = state_22199;
var statearr_22204_22356 = state_22199__$1;
(statearr_22204_22356[(2)] = null);

(statearr_22204_22356[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22200 === (6))){
var state_22199__$1 = state_22199;
var statearr_22205_22357 = state_22199__$1;
(statearr_22205_22357[(2)] = null);

(statearr_22205_22357[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22200 === (7))){
var inst_22195 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
var statearr_22206_22358 = state_22199__$1;
(statearr_22206_22358[(2)] = inst_22195);

(statearr_22206_22358[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22348,c__22000__auto___22352,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async))
;
return ((function (__22348,switch__21925__auto__,c__22000__auto___22352,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0 = (function (){
var statearr_22207 = [null,null,null,null,null,null,null];
(statearr_22207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__);

(statearr_22207[(1)] = (1));

return statearr_22207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1 = (function (state_22199){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22199);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22208){var ex__21929__auto__ = e22208;
var statearr_22209_22359 = state_22199;
(statearr_22209_22359[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22199[(4)]))){
var statearr_22210_22360 = state_22199;
(statearr_22210_22360[(1)] = cljs.core.first((state_22199[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22361 = state_22199;
state_22199 = G__22361;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = function(state_22199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1.call(this,state_22199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__;
})()
;})(__22348,switch__21925__auto__,c__22000__auto___22352,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async))
})();
var state__22002__auto__ = (function (){var statearr_22211 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22211[(6)] = c__22000__auto___22352);

return statearr_22211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
});})(__22348,c__22000__auto___22352,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async))
);


break;
case "async":
var c__22000__auto___22362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22348,c__22000__auto___22362,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async){
return (function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = ((function (__22348,c__22000__auto___22362,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async){
return (function (state_22224){
var state_val_22225 = (state_22224[(1)]);
if((state_val_22225 === (1))){
var state_22224__$1 = state_22224;
var statearr_22226_22363 = state_22224__$1;
(statearr_22226_22363[(2)] = null);

(statearr_22226_22363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22225 === (2))){
var state_22224__$1 = state_22224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22224__$1,(4),jobs);
} else {
if((state_val_22225 === (3))){
var inst_22222 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22224__$1,inst_22222);
} else {
if((state_val_22225 === (4))){
var inst_22214 = (state_22224[(2)]);
var inst_22215 = async(inst_22214);
var state_22224__$1 = state_22224;
if(cljs.core.truth_(inst_22215)){
var statearr_22227_22364 = state_22224__$1;
(statearr_22227_22364[(1)] = (5));

} else {
var statearr_22228_22365 = state_22224__$1;
(statearr_22228_22365[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22225 === (5))){
var state_22224__$1 = state_22224;
var statearr_22229_22366 = state_22224__$1;
(statearr_22229_22366[(2)] = null);

(statearr_22229_22366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22225 === (6))){
var state_22224__$1 = state_22224;
var statearr_22230_22367 = state_22224__$1;
(statearr_22230_22367[(2)] = null);

(statearr_22230_22367[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22225 === (7))){
var inst_22220 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
var statearr_22231_22368 = state_22224__$1;
(statearr_22231_22368[(2)] = inst_22220);

(statearr_22231_22368[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22348,c__22000__auto___22362,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async))
;
return ((function (__22348,switch__21925__auto__,c__22000__auto___22362,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0 = (function (){
var statearr_22232 = [null,null,null,null,null,null,null];
(statearr_22232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__);

(statearr_22232[(1)] = (1));

return statearr_22232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1 = (function (state_22224){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22224);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22233){var ex__21929__auto__ = e22233;
var statearr_22234_22369 = state_22224;
(statearr_22234_22369[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22224[(4)]))){
var statearr_22235_22370 = state_22224;
(statearr_22235_22370[(1)] = cljs.core.first((state_22224[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22371 = state_22224;
state_22224 = G__22371;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = function(state_22224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1.call(this,state_22224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__;
})()
;})(__22348,switch__21925__auto__,c__22000__auto___22362,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async))
})();
var state__22002__auto__ = (function (){var statearr_22236 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22236[(6)] = c__22000__auto___22362);

return statearr_22236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
});})(__22348,c__22000__auto___22362,G__22186_22349,G__22186_22350__$1,n__4648__auto___22347,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22186_22350__$1)].join('')));

}

var G__22372 = (__22348 + (1));
__22348 = G__22372;
continue;
} else {
}
break;
}

var c__22000__auto___22373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22258){
var state_val_22259 = (state_22258[(1)]);
if((state_val_22259 === (7))){
var inst_22254 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
var statearr_22260_22374 = state_22258__$1;
(statearr_22260_22374[(2)] = inst_22254);

(statearr_22260_22374[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22259 === (1))){
var state_22258__$1 = state_22258;
var statearr_22261_22375 = state_22258__$1;
(statearr_22261_22375[(2)] = null);

(statearr_22261_22375[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22259 === (4))){
var inst_22239 = (state_22258[(7)]);
var inst_22239__$1 = (state_22258[(2)]);
var inst_22240 = (inst_22239__$1 == null);
var state_22258__$1 = (function (){var statearr_22262 = state_22258;
(statearr_22262[(7)] = inst_22239__$1);

return statearr_22262;
})();
if(cljs.core.truth_(inst_22240)){
var statearr_22263_22376 = state_22258__$1;
(statearr_22263_22376[(1)] = (5));

} else {
var statearr_22264_22377 = state_22258__$1;
(statearr_22264_22377[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22259 === (6))){
var inst_22239 = (state_22258[(7)]);
var inst_22244 = (state_22258[(8)]);
var inst_22244__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22246 = [inst_22239,inst_22244__$1];
var inst_22247 = (new cljs.core.PersistentVector(null,2,(5),inst_22245,inst_22246,null));
var state_22258__$1 = (function (){var statearr_22265 = state_22258;
(statearr_22265[(8)] = inst_22244__$1);

return statearr_22265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22258__$1,(8),jobs,inst_22247);
} else {
if((state_val_22259 === (3))){
var inst_22256 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22258__$1,inst_22256);
} else {
if((state_val_22259 === (2))){
var state_22258__$1 = state_22258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22258__$1,(4),from);
} else {
if((state_val_22259 === (9))){
var inst_22251 = (state_22258[(2)]);
var state_22258__$1 = (function (){var statearr_22266 = state_22258;
(statearr_22266[(9)] = inst_22251);

return statearr_22266;
})();
var statearr_22267_22378 = state_22258__$1;
(statearr_22267_22378[(2)] = null);

(statearr_22267_22378[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22259 === (5))){
var inst_22242 = cljs.core.async.close_BANG_(jobs);
var state_22258__$1 = state_22258;
var statearr_22268_22379 = state_22258__$1;
(statearr_22268_22379[(2)] = inst_22242);

(statearr_22268_22379[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22259 === (8))){
var inst_22244 = (state_22258[(8)]);
var inst_22249 = (state_22258[(2)]);
var state_22258__$1 = (function (){var statearr_22269 = state_22258;
(statearr_22269[(10)] = inst_22249);

return statearr_22269;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22258__$1,(9),results,inst_22244);
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
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0 = (function (){
var statearr_22270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__);

(statearr_22270[(1)] = (1));

return statearr_22270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1 = (function (state_22258){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22258);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22271){var ex__21929__auto__ = e22271;
var statearr_22272_22380 = state_22258;
(statearr_22272_22380[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22258[(4)]))){
var statearr_22273_22381 = state_22258;
(statearr_22273_22381[(1)] = cljs.core.first((state_22258[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22382 = state_22258;
state_22258 = G__22382;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = function(state_22258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1.call(this,state_22258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22274 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22274[(6)] = c__22000__auto___22373);

return statearr_22274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


var c__22000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22312){
var state_val_22313 = (state_22312[(1)]);
if((state_val_22313 === (7))){
var inst_22308 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
var statearr_22314_22383 = state_22312__$1;
(statearr_22314_22383[(2)] = inst_22308);

(statearr_22314_22383[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (20))){
var state_22312__$1 = state_22312;
var statearr_22315_22384 = state_22312__$1;
(statearr_22315_22384[(2)] = null);

(statearr_22315_22384[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (1))){
var state_22312__$1 = state_22312;
var statearr_22316_22385 = state_22312__$1;
(statearr_22316_22385[(2)] = null);

(statearr_22316_22385[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (4))){
var inst_22277 = (state_22312[(7)]);
var inst_22277__$1 = (state_22312[(2)]);
var inst_22278 = (inst_22277__$1 == null);
var state_22312__$1 = (function (){var statearr_22317 = state_22312;
(statearr_22317[(7)] = inst_22277__$1);

return statearr_22317;
})();
if(cljs.core.truth_(inst_22278)){
var statearr_22318_22386 = state_22312__$1;
(statearr_22318_22386[(1)] = (5));

} else {
var statearr_22319_22387 = state_22312__$1;
(statearr_22319_22387[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (15))){
var inst_22290 = (state_22312[(8)]);
var state_22312__$1 = state_22312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22312__$1,(18),to,inst_22290);
} else {
if((state_val_22313 === (21))){
var inst_22303 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
var statearr_22320_22388 = state_22312__$1;
(statearr_22320_22388[(2)] = inst_22303);

(statearr_22320_22388[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (13))){
var inst_22305 = (state_22312[(2)]);
var state_22312__$1 = (function (){var statearr_22321 = state_22312;
(statearr_22321[(9)] = inst_22305);

return statearr_22321;
})();
var statearr_22322_22389 = state_22312__$1;
(statearr_22322_22389[(2)] = null);

(statearr_22322_22389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (6))){
var inst_22277 = (state_22312[(7)]);
var state_22312__$1 = state_22312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22312__$1,(11),inst_22277);
} else {
if((state_val_22313 === (17))){
var inst_22298 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
if(cljs.core.truth_(inst_22298)){
var statearr_22323_22390 = state_22312__$1;
(statearr_22323_22390[(1)] = (19));

} else {
var statearr_22324_22391 = state_22312__$1;
(statearr_22324_22391[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (3))){
var inst_22310 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22312__$1,inst_22310);
} else {
if((state_val_22313 === (12))){
var inst_22287 = (state_22312[(10)]);
var state_22312__$1 = state_22312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22312__$1,(14),inst_22287);
} else {
if((state_val_22313 === (2))){
var state_22312__$1 = state_22312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22312__$1,(4),results);
} else {
if((state_val_22313 === (19))){
var state_22312__$1 = state_22312;
var statearr_22325_22392 = state_22312__$1;
(statearr_22325_22392[(2)] = null);

(statearr_22325_22392[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (11))){
var inst_22287 = (state_22312[(2)]);
var state_22312__$1 = (function (){var statearr_22326 = state_22312;
(statearr_22326[(10)] = inst_22287);

return statearr_22326;
})();
var statearr_22327_22393 = state_22312__$1;
(statearr_22327_22393[(2)] = null);

(statearr_22327_22393[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (9))){
var state_22312__$1 = state_22312;
var statearr_22328_22394 = state_22312__$1;
(statearr_22328_22394[(2)] = null);

(statearr_22328_22394[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (5))){
var state_22312__$1 = state_22312;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22329_22395 = state_22312__$1;
(statearr_22329_22395[(1)] = (8));

} else {
var statearr_22330_22396 = state_22312__$1;
(statearr_22330_22396[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (14))){
var inst_22290 = (state_22312[(8)]);
var inst_22290__$1 = (state_22312[(2)]);
var inst_22291 = (inst_22290__$1 == null);
var inst_22292 = cljs.core.not(inst_22291);
var state_22312__$1 = (function (){var statearr_22331 = state_22312;
(statearr_22331[(8)] = inst_22290__$1);

return statearr_22331;
})();
if(inst_22292){
var statearr_22332_22397 = state_22312__$1;
(statearr_22332_22397[(1)] = (15));

} else {
var statearr_22333_22398 = state_22312__$1;
(statearr_22333_22398[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (16))){
var state_22312__$1 = state_22312;
var statearr_22334_22399 = state_22312__$1;
(statearr_22334_22399[(2)] = false);

(statearr_22334_22399[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (10))){
var inst_22284 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
var statearr_22335_22400 = state_22312__$1;
(statearr_22335_22400[(2)] = inst_22284);

(statearr_22335_22400[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (18))){
var inst_22295 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
var statearr_22336_22401 = state_22312__$1;
(statearr_22336_22401[(2)] = inst_22295);

(statearr_22336_22401[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22313 === (8))){
var inst_22281 = cljs.core.async.close_BANG_(to);
var state_22312__$1 = state_22312;
var statearr_22337_22402 = state_22312__$1;
(statearr_22337_22402[(2)] = inst_22281);

(statearr_22337_22402[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0 = (function (){
var statearr_22338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__);

(statearr_22338[(1)] = (1));

return statearr_22338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1 = (function (state_22312){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22312);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22339){var ex__21929__auto__ = e22339;
var statearr_22340_22403 = state_22312;
(statearr_22340_22403[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22312[(4)]))){
var statearr_22341_22404 = state_22312;
(statearr_22341_22404[(1)] = cljs.core.first((state_22312[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22405 = state_22312;
state_22312 = G__22405;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__ = function(state_22312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1.call(this,state_22312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21926__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22342 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22342[(6)] = c__22000__auto__);

return statearr_22342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));

return c__22000__auto__;
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
var G__22407 = arguments.length;
switch (G__22407) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__22410 = arguments.length;
switch (G__22410) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__22413 = arguments.length;
switch (G__22413) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__22000__auto___22463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22439){
var state_val_22440 = (state_22439[(1)]);
if((state_val_22440 === (7))){
var inst_22435 = (state_22439[(2)]);
var state_22439__$1 = state_22439;
var statearr_22441_22464 = state_22439__$1;
(statearr_22441_22464[(2)] = inst_22435);

(statearr_22441_22464[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (1))){
var state_22439__$1 = state_22439;
var statearr_22442_22465 = state_22439__$1;
(statearr_22442_22465[(2)] = null);

(statearr_22442_22465[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (4))){
var inst_22416 = (state_22439[(7)]);
var inst_22416__$1 = (state_22439[(2)]);
var inst_22417 = (inst_22416__$1 == null);
var state_22439__$1 = (function (){var statearr_22443 = state_22439;
(statearr_22443[(7)] = inst_22416__$1);

return statearr_22443;
})();
if(cljs.core.truth_(inst_22417)){
var statearr_22444_22466 = state_22439__$1;
(statearr_22444_22466[(1)] = (5));

} else {
var statearr_22445_22467 = state_22439__$1;
(statearr_22445_22467[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (13))){
var state_22439__$1 = state_22439;
var statearr_22446_22468 = state_22439__$1;
(statearr_22446_22468[(2)] = null);

(statearr_22446_22468[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (6))){
var inst_22416 = (state_22439[(7)]);
var inst_22422 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22416) : p.call(null,inst_22416));
var state_22439__$1 = state_22439;
if(cljs.core.truth_(inst_22422)){
var statearr_22447_22469 = state_22439__$1;
(statearr_22447_22469[(1)] = (9));

} else {
var statearr_22448_22470 = state_22439__$1;
(statearr_22448_22470[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (3))){
var inst_22437 = (state_22439[(2)]);
var state_22439__$1 = state_22439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22439__$1,inst_22437);
} else {
if((state_val_22440 === (12))){
var state_22439__$1 = state_22439;
var statearr_22449_22471 = state_22439__$1;
(statearr_22449_22471[(2)] = null);

(statearr_22449_22471[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (2))){
var state_22439__$1 = state_22439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22439__$1,(4),ch);
} else {
if((state_val_22440 === (11))){
var inst_22416 = (state_22439[(7)]);
var inst_22426 = (state_22439[(2)]);
var state_22439__$1 = state_22439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22439__$1,(8),inst_22426,inst_22416);
} else {
if((state_val_22440 === (9))){
var state_22439__$1 = state_22439;
var statearr_22450_22472 = state_22439__$1;
(statearr_22450_22472[(2)] = tc);

(statearr_22450_22472[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (5))){
var inst_22419 = cljs.core.async.close_BANG_(tc);
var inst_22420 = cljs.core.async.close_BANG_(fc);
var state_22439__$1 = (function (){var statearr_22451 = state_22439;
(statearr_22451[(8)] = inst_22419);

return statearr_22451;
})();
var statearr_22452_22473 = state_22439__$1;
(statearr_22452_22473[(2)] = inst_22420);

(statearr_22452_22473[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (14))){
var inst_22433 = (state_22439[(2)]);
var state_22439__$1 = state_22439;
var statearr_22453_22474 = state_22439__$1;
(statearr_22453_22474[(2)] = inst_22433);

(statearr_22453_22474[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (10))){
var state_22439__$1 = state_22439;
var statearr_22454_22475 = state_22439__$1;
(statearr_22454_22475[(2)] = fc);

(statearr_22454_22475[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22440 === (8))){
var inst_22428 = (state_22439[(2)]);
var state_22439__$1 = state_22439;
if(cljs.core.truth_(inst_22428)){
var statearr_22455_22476 = state_22439__$1;
(statearr_22455_22476[(1)] = (12));

} else {
var statearr_22456_22477 = state_22439__$1;
(statearr_22456_22477[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_22457 = [null,null,null,null,null,null,null,null,null];
(statearr_22457[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_22457[(1)] = (1));

return statearr_22457;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_22439){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22439);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22458){var ex__21929__auto__ = e22458;
var statearr_22459_22478 = state_22439;
(statearr_22459_22478[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22439[(4)]))){
var statearr_22460_22479 = state_22439;
(statearr_22460_22479[(1)] = cljs.core.first((state_22439[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22480 = state_22439;
state_22439 = G__22480;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_22439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_22439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22461 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22461[(6)] = c__22000__auto___22463);

return statearr_22461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
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
var c__22000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22502){
var state_val_22503 = (state_22502[(1)]);
if((state_val_22503 === (7))){
var inst_22498 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22504_22523 = state_22502__$1;
(statearr_22504_22523[(2)] = inst_22498);

(statearr_22504_22523[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22503 === (1))){
var inst_22481 = init;
var inst_22482 = inst_22481;
var state_22502__$1 = (function (){var statearr_22505 = state_22502;
(statearr_22505[(7)] = inst_22482);

return statearr_22505;
})();
var statearr_22506_22524 = state_22502__$1;
(statearr_22506_22524[(2)] = null);

(statearr_22506_22524[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22503 === (4))){
var inst_22485 = (state_22502[(8)]);
var inst_22485__$1 = (state_22502[(2)]);
var inst_22486 = (inst_22485__$1 == null);
var state_22502__$1 = (function (){var statearr_22507 = state_22502;
(statearr_22507[(8)] = inst_22485__$1);

return statearr_22507;
})();
if(cljs.core.truth_(inst_22486)){
var statearr_22508_22525 = state_22502__$1;
(statearr_22508_22525[(1)] = (5));

} else {
var statearr_22509_22526 = state_22502__$1;
(statearr_22509_22526[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22503 === (6))){
var inst_22489 = (state_22502[(9)]);
var inst_22482 = (state_22502[(7)]);
var inst_22485 = (state_22502[(8)]);
var inst_22489__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22482,inst_22485) : f.call(null,inst_22482,inst_22485));
var inst_22490 = cljs.core.reduced_QMARK_(inst_22489__$1);
var state_22502__$1 = (function (){var statearr_22510 = state_22502;
(statearr_22510[(9)] = inst_22489__$1);

return statearr_22510;
})();
if(inst_22490){
var statearr_22511_22527 = state_22502__$1;
(statearr_22511_22527[(1)] = (8));

} else {
var statearr_22512_22528 = state_22502__$1;
(statearr_22512_22528[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22503 === (3))){
var inst_22500 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22502__$1,inst_22500);
} else {
if((state_val_22503 === (2))){
var state_22502__$1 = state_22502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22502__$1,(4),ch);
} else {
if((state_val_22503 === (9))){
var inst_22489 = (state_22502[(9)]);
var inst_22482 = inst_22489;
var state_22502__$1 = (function (){var statearr_22513 = state_22502;
(statearr_22513[(7)] = inst_22482);

return statearr_22513;
})();
var statearr_22514_22529 = state_22502__$1;
(statearr_22514_22529[(2)] = null);

(statearr_22514_22529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22503 === (5))){
var inst_22482 = (state_22502[(7)]);
var state_22502__$1 = state_22502;
var statearr_22515_22530 = state_22502__$1;
(statearr_22515_22530[(2)] = inst_22482);

(statearr_22515_22530[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22503 === (10))){
var inst_22496 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22516_22531 = state_22502__$1;
(statearr_22516_22531[(2)] = inst_22496);

(statearr_22516_22531[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22503 === (8))){
var inst_22489 = (state_22502[(9)]);
var inst_22492 = cljs.core.deref(inst_22489);
var state_22502__$1 = state_22502;
var statearr_22517_22532 = state_22502__$1;
(statearr_22517_22532[(2)] = inst_22492);

(statearr_22517_22532[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$reduce_$_state_machine__21926__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21926__auto____0 = (function (){
var statearr_22518 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22518[(0)] = cljs$core$async$reduce_$_state_machine__21926__auto__);

(statearr_22518[(1)] = (1));

return statearr_22518;
});
var cljs$core$async$reduce_$_state_machine__21926__auto____1 = (function (state_22502){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22502);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22519){var ex__21929__auto__ = e22519;
var statearr_22520_22533 = state_22502;
(statearr_22520_22533[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22502[(4)]))){
var statearr_22521_22534 = state_22502;
(statearr_22521_22534[(1)] = cljs.core.first((state_22502[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22535 = state_22502;
state_22502 = G__22535;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21926__auto__ = function(state_22502){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21926__auto____1.call(this,state_22502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21926__auto____0;
cljs$core$async$reduce_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21926__auto____1;
return cljs$core$async$reduce_$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22522 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22522[(6)] = c__22000__auto__);

return statearr_22522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));

return c__22000__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__22000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22541){
var state_val_22542 = (state_22541[(1)]);
if((state_val_22542 === (1))){
var inst_22536 = cljs.core.async.reduce(f__$1,init,ch);
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22541__$1,(2),inst_22536);
} else {
if((state_val_22542 === (2))){
var inst_22538 = (state_22541[(2)]);
var inst_22539 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_22538) : f__$1.call(null,inst_22538));
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22541__$1,inst_22539);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21926__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21926__auto____0 = (function (){
var statearr_22543 = [null,null,null,null,null,null,null];
(statearr_22543[(0)] = cljs$core$async$transduce_$_state_machine__21926__auto__);

(statearr_22543[(1)] = (1));

return statearr_22543;
});
var cljs$core$async$transduce_$_state_machine__21926__auto____1 = (function (state_22541){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22541);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22544){var ex__21929__auto__ = e22544;
var statearr_22545_22548 = state_22541;
(statearr_22545_22548[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22541[(4)]))){
var statearr_22546_22549 = state_22541;
(statearr_22546_22549[(1)] = cljs.core.first((state_22541[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22550 = state_22541;
state_22541 = G__22550;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21926__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21926__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21926__auto____0;
cljs$core$async$transduce_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21926__auto____1;
return cljs$core$async$transduce_$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22547 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22547[(6)] = c__22000__auto__);

return statearr_22547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));

return c__22000__auto__;
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
var G__22552 = arguments.length;
switch (G__22552) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22577){
var state_val_22578 = (state_22577[(1)]);
if((state_val_22578 === (7))){
var inst_22559 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22579_22601 = state_22577__$1;
(statearr_22579_22601[(2)] = inst_22559);

(statearr_22579_22601[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (1))){
var inst_22553 = cljs.core.seq(coll);
var inst_22554 = inst_22553;
var state_22577__$1 = (function (){var statearr_22580 = state_22577;
(statearr_22580[(7)] = inst_22554);

return statearr_22580;
})();
var statearr_22581_22602 = state_22577__$1;
(statearr_22581_22602[(2)] = null);

(statearr_22581_22602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (4))){
var inst_22554 = (state_22577[(7)]);
var inst_22557 = cljs.core.first(inst_22554);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22577__$1,(7),ch,inst_22557);
} else {
if((state_val_22578 === (13))){
var inst_22571 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22582_22603 = state_22577__$1;
(statearr_22582_22603[(2)] = inst_22571);

(statearr_22582_22603[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (6))){
var inst_22562 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
if(cljs.core.truth_(inst_22562)){
var statearr_22583_22604 = state_22577__$1;
(statearr_22583_22604[(1)] = (8));

} else {
var statearr_22584_22605 = state_22577__$1;
(statearr_22584_22605[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (3))){
var inst_22575 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22577__$1,inst_22575);
} else {
if((state_val_22578 === (12))){
var state_22577__$1 = state_22577;
var statearr_22585_22606 = state_22577__$1;
(statearr_22585_22606[(2)] = null);

(statearr_22585_22606[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (2))){
var inst_22554 = (state_22577[(7)]);
var state_22577__$1 = state_22577;
if(cljs.core.truth_(inst_22554)){
var statearr_22586_22607 = state_22577__$1;
(statearr_22586_22607[(1)] = (4));

} else {
var statearr_22587_22608 = state_22577__$1;
(statearr_22587_22608[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (11))){
var inst_22568 = cljs.core.async.close_BANG_(ch);
var state_22577__$1 = state_22577;
var statearr_22588_22609 = state_22577__$1;
(statearr_22588_22609[(2)] = inst_22568);

(statearr_22588_22609[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (9))){
var state_22577__$1 = state_22577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22589_22610 = state_22577__$1;
(statearr_22589_22610[(1)] = (11));

} else {
var statearr_22590_22611 = state_22577__$1;
(statearr_22590_22611[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (5))){
var inst_22554 = (state_22577[(7)]);
var state_22577__$1 = state_22577;
var statearr_22591_22612 = state_22577__$1;
(statearr_22591_22612[(2)] = inst_22554);

(statearr_22591_22612[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (10))){
var inst_22573 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22592_22613 = state_22577__$1;
(statearr_22592_22613[(2)] = inst_22573);

(statearr_22592_22613[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (8))){
var inst_22554 = (state_22577[(7)]);
var inst_22564 = cljs.core.next(inst_22554);
var inst_22554__$1 = inst_22564;
var state_22577__$1 = (function (){var statearr_22593 = state_22577;
(statearr_22593[(7)] = inst_22554__$1);

return statearr_22593;
})();
var statearr_22594_22614 = state_22577__$1;
(statearr_22594_22614[(2)] = null);

(statearr_22594_22614[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_22595 = [null,null,null,null,null,null,null,null];
(statearr_22595[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_22595[(1)] = (1));

return statearr_22595;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_22577){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22577);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22596){var ex__21929__auto__ = e22596;
var statearr_22597_22615 = state_22577;
(statearr_22597_22615[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22577[(4)]))){
var statearr_22598_22616 = state_22577;
(statearr_22598_22616[(1)] = cljs.core.first((state_22577[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22617 = state_22577;
state_22577 = G__22617;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_22577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_22577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22599 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22599[(6)] = c__22000__auto__);

return statearr_22599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));

return c__22000__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22619 = arguments.length;
switch (G__22619) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_22621 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_22621(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22622 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_22622(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22623 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_22623(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22624 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_22624(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22625 = (function (ch,cs,meta22626){
this.ch = ch;
this.cs = cs;
this.meta22626 = meta22626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22627,meta22626__$1){
var self__ = this;
var _22627__$1 = this;
return (new cljs.core.async.t_cljs$core$async22625(self__.ch,self__.cs,meta22626__$1));
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22627){
var self__ = this;
var _22627__$1 = this;
return self__.meta22626;
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async22625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta22626], null);
}));

(cljs.core.async.t_cljs$core$async22625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22625");

(cljs.core.async.t_cljs$core$async22625.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async22625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22625.
 */
cljs.core.async.__GT_t_cljs$core$async22625 = (function cljs$core$async$mult_$___GT_t_cljs$core$async22625(ch__$1,cs__$1,meta22626){
return (new cljs.core.async.t_cljs$core$async22625(ch__$1,cs__$1,meta22626));
});

}

return (new cljs.core.async.t_cljs$core$async22625(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__22000__auto___22844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22760){
var state_val_22761 = (state_22760[(1)]);
if((state_val_22761 === (7))){
var inst_22756 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22762_22845 = state_22760__$1;
(statearr_22762_22845[(2)] = inst_22756);

(statearr_22762_22845[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (20))){
var inst_22661 = (state_22760[(7)]);
var inst_22673 = cljs.core.first(inst_22661);
var inst_22674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22673,(0),null);
var inst_22675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22673,(1),null);
var state_22760__$1 = (function (){var statearr_22763 = state_22760;
(statearr_22763[(8)] = inst_22674);

return statearr_22763;
})();
if(cljs.core.truth_(inst_22675)){
var statearr_22764_22846 = state_22760__$1;
(statearr_22764_22846[(1)] = (22));

} else {
var statearr_22765_22847 = state_22760__$1;
(statearr_22765_22847[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (27))){
var inst_22710 = (state_22760[(9)]);
var inst_22703 = (state_22760[(10)]);
var inst_22705 = (state_22760[(11)]);
var inst_22630 = (state_22760[(12)]);
var inst_22710__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22703,inst_22705);
var inst_22711 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22710__$1,inst_22630,done);
var state_22760__$1 = (function (){var statearr_22766 = state_22760;
(statearr_22766[(9)] = inst_22710__$1);

return statearr_22766;
})();
if(cljs.core.truth_(inst_22711)){
var statearr_22767_22848 = state_22760__$1;
(statearr_22767_22848[(1)] = (30));

} else {
var statearr_22768_22849 = state_22760__$1;
(statearr_22768_22849[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (1))){
var state_22760__$1 = state_22760;
var statearr_22769_22850 = state_22760__$1;
(statearr_22769_22850[(2)] = null);

(statearr_22769_22850[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (24))){
var inst_22661 = (state_22760[(7)]);
var inst_22680 = (state_22760[(2)]);
var inst_22681 = cljs.core.next(inst_22661);
var inst_22639 = inst_22681;
var inst_22640 = null;
var inst_22641 = (0);
var inst_22642 = (0);
var state_22760__$1 = (function (){var statearr_22770 = state_22760;
(statearr_22770[(13)] = inst_22642);

(statearr_22770[(14)] = inst_22680);

(statearr_22770[(15)] = inst_22640);

(statearr_22770[(16)] = inst_22641);

(statearr_22770[(17)] = inst_22639);

return statearr_22770;
})();
var statearr_22771_22851 = state_22760__$1;
(statearr_22771_22851[(2)] = null);

(statearr_22771_22851[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (39))){
var state_22760__$1 = state_22760;
var statearr_22775_22852 = state_22760__$1;
(statearr_22775_22852[(2)] = null);

(statearr_22775_22852[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (4))){
var inst_22630 = (state_22760[(12)]);
var inst_22630__$1 = (state_22760[(2)]);
var inst_22631 = (inst_22630__$1 == null);
var state_22760__$1 = (function (){var statearr_22776 = state_22760;
(statearr_22776[(12)] = inst_22630__$1);

return statearr_22776;
})();
if(cljs.core.truth_(inst_22631)){
var statearr_22777_22853 = state_22760__$1;
(statearr_22777_22853[(1)] = (5));

} else {
var statearr_22778_22854 = state_22760__$1;
(statearr_22778_22854[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (15))){
var inst_22642 = (state_22760[(13)]);
var inst_22640 = (state_22760[(15)]);
var inst_22641 = (state_22760[(16)]);
var inst_22639 = (state_22760[(17)]);
var inst_22657 = (state_22760[(2)]);
var inst_22658 = (inst_22642 + (1));
var tmp22772 = inst_22640;
var tmp22773 = inst_22641;
var tmp22774 = inst_22639;
var inst_22639__$1 = tmp22774;
var inst_22640__$1 = tmp22772;
var inst_22641__$1 = tmp22773;
var inst_22642__$1 = inst_22658;
var state_22760__$1 = (function (){var statearr_22779 = state_22760;
(statearr_22779[(13)] = inst_22642__$1);

(statearr_22779[(15)] = inst_22640__$1);

(statearr_22779[(18)] = inst_22657);

(statearr_22779[(16)] = inst_22641__$1);

(statearr_22779[(17)] = inst_22639__$1);

return statearr_22779;
})();
var statearr_22780_22855 = state_22760__$1;
(statearr_22780_22855[(2)] = null);

(statearr_22780_22855[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (21))){
var inst_22684 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22784_22856 = state_22760__$1;
(statearr_22784_22856[(2)] = inst_22684);

(statearr_22784_22856[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (31))){
var inst_22710 = (state_22760[(9)]);
var inst_22714 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22710);
var state_22760__$1 = state_22760;
var statearr_22785_22857 = state_22760__$1;
(statearr_22785_22857[(2)] = inst_22714);

(statearr_22785_22857[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (32))){
var inst_22702 = (state_22760[(19)]);
var inst_22704 = (state_22760[(20)]);
var inst_22703 = (state_22760[(10)]);
var inst_22705 = (state_22760[(11)]);
var inst_22716 = (state_22760[(2)]);
var inst_22717 = (inst_22705 + (1));
var tmp22781 = inst_22702;
var tmp22782 = inst_22704;
var tmp22783 = inst_22703;
var inst_22702__$1 = tmp22781;
var inst_22703__$1 = tmp22783;
var inst_22704__$1 = tmp22782;
var inst_22705__$1 = inst_22717;
var state_22760__$1 = (function (){var statearr_22786 = state_22760;
(statearr_22786[(19)] = inst_22702__$1);

(statearr_22786[(20)] = inst_22704__$1);

(statearr_22786[(10)] = inst_22703__$1);

(statearr_22786[(11)] = inst_22705__$1);

(statearr_22786[(21)] = inst_22716);

return statearr_22786;
})();
var statearr_22787_22858 = state_22760__$1;
(statearr_22787_22858[(2)] = null);

(statearr_22787_22858[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (40))){
var inst_22729 = (state_22760[(22)]);
var inst_22733 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22729);
var state_22760__$1 = state_22760;
var statearr_22788_22859 = state_22760__$1;
(statearr_22788_22859[(2)] = inst_22733);

(statearr_22788_22859[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (33))){
var inst_22720 = (state_22760[(23)]);
var inst_22722 = cljs.core.chunked_seq_QMARK_(inst_22720);
var state_22760__$1 = state_22760;
if(inst_22722){
var statearr_22789_22860 = state_22760__$1;
(statearr_22789_22860[(1)] = (36));

} else {
var statearr_22790_22861 = state_22760__$1;
(statearr_22790_22861[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (13))){
var inst_22651 = (state_22760[(24)]);
var inst_22654 = cljs.core.async.close_BANG_(inst_22651);
var state_22760__$1 = state_22760;
var statearr_22791_22862 = state_22760__$1;
(statearr_22791_22862[(2)] = inst_22654);

(statearr_22791_22862[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (22))){
var inst_22674 = (state_22760[(8)]);
var inst_22677 = cljs.core.async.close_BANG_(inst_22674);
var state_22760__$1 = state_22760;
var statearr_22792_22863 = state_22760__$1;
(statearr_22792_22863[(2)] = inst_22677);

(statearr_22792_22863[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (36))){
var inst_22720 = (state_22760[(23)]);
var inst_22724 = cljs.core.chunk_first(inst_22720);
var inst_22725 = cljs.core.chunk_rest(inst_22720);
var inst_22726 = cljs.core.count(inst_22724);
var inst_22702 = inst_22725;
var inst_22703 = inst_22724;
var inst_22704 = inst_22726;
var inst_22705 = (0);
var state_22760__$1 = (function (){var statearr_22793 = state_22760;
(statearr_22793[(19)] = inst_22702);

(statearr_22793[(20)] = inst_22704);

(statearr_22793[(10)] = inst_22703);

(statearr_22793[(11)] = inst_22705);

return statearr_22793;
})();
var statearr_22794_22864 = state_22760__$1;
(statearr_22794_22864[(2)] = null);

(statearr_22794_22864[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (41))){
var inst_22720 = (state_22760[(23)]);
var inst_22735 = (state_22760[(2)]);
var inst_22736 = cljs.core.next(inst_22720);
var inst_22702 = inst_22736;
var inst_22703 = null;
var inst_22704 = (0);
var inst_22705 = (0);
var state_22760__$1 = (function (){var statearr_22795 = state_22760;
(statearr_22795[(19)] = inst_22702);

(statearr_22795[(20)] = inst_22704);

(statearr_22795[(10)] = inst_22703);

(statearr_22795[(11)] = inst_22705);

(statearr_22795[(25)] = inst_22735);

return statearr_22795;
})();
var statearr_22796_22865 = state_22760__$1;
(statearr_22796_22865[(2)] = null);

(statearr_22796_22865[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (43))){
var state_22760__$1 = state_22760;
var statearr_22797_22866 = state_22760__$1;
(statearr_22797_22866[(2)] = null);

(statearr_22797_22866[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (29))){
var inst_22744 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22798_22867 = state_22760__$1;
(statearr_22798_22867[(2)] = inst_22744);

(statearr_22798_22867[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (44))){
var inst_22753 = (state_22760[(2)]);
var state_22760__$1 = (function (){var statearr_22799 = state_22760;
(statearr_22799[(26)] = inst_22753);

return statearr_22799;
})();
var statearr_22800_22868 = state_22760__$1;
(statearr_22800_22868[(2)] = null);

(statearr_22800_22868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (6))){
var inst_22694 = (state_22760[(27)]);
var inst_22693 = cljs.core.deref(cs);
var inst_22694__$1 = cljs.core.keys(inst_22693);
var inst_22695 = cljs.core.count(inst_22694__$1);
var inst_22696 = cljs.core.reset_BANG_(dctr,inst_22695);
var inst_22701 = cljs.core.seq(inst_22694__$1);
var inst_22702 = inst_22701;
var inst_22703 = null;
var inst_22704 = (0);
var inst_22705 = (0);
var state_22760__$1 = (function (){var statearr_22801 = state_22760;
(statearr_22801[(19)] = inst_22702);

(statearr_22801[(20)] = inst_22704);

(statearr_22801[(10)] = inst_22703);

(statearr_22801[(11)] = inst_22705);

(statearr_22801[(27)] = inst_22694__$1);

(statearr_22801[(28)] = inst_22696);

return statearr_22801;
})();
var statearr_22802_22869 = state_22760__$1;
(statearr_22802_22869[(2)] = null);

(statearr_22802_22869[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (28))){
var inst_22702 = (state_22760[(19)]);
var inst_22720 = (state_22760[(23)]);
var inst_22720__$1 = cljs.core.seq(inst_22702);
var state_22760__$1 = (function (){var statearr_22803 = state_22760;
(statearr_22803[(23)] = inst_22720__$1);

return statearr_22803;
})();
if(inst_22720__$1){
var statearr_22804_22870 = state_22760__$1;
(statearr_22804_22870[(1)] = (33));

} else {
var statearr_22805_22871 = state_22760__$1;
(statearr_22805_22871[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (25))){
var inst_22704 = (state_22760[(20)]);
var inst_22705 = (state_22760[(11)]);
var inst_22707 = (inst_22705 < inst_22704);
var inst_22708 = inst_22707;
var state_22760__$1 = state_22760;
if(cljs.core.truth_(inst_22708)){
var statearr_22806_22872 = state_22760__$1;
(statearr_22806_22872[(1)] = (27));

} else {
var statearr_22807_22873 = state_22760__$1;
(statearr_22807_22873[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (34))){
var state_22760__$1 = state_22760;
var statearr_22808_22874 = state_22760__$1;
(statearr_22808_22874[(2)] = null);

(statearr_22808_22874[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (17))){
var state_22760__$1 = state_22760;
var statearr_22809_22875 = state_22760__$1;
(statearr_22809_22875[(2)] = null);

(statearr_22809_22875[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (3))){
var inst_22758 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22760__$1,inst_22758);
} else {
if((state_val_22761 === (12))){
var inst_22689 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22810_22876 = state_22760__$1;
(statearr_22810_22876[(2)] = inst_22689);

(statearr_22810_22876[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (2))){
var state_22760__$1 = state_22760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22760__$1,(4),ch);
} else {
if((state_val_22761 === (23))){
var state_22760__$1 = state_22760;
var statearr_22811_22877 = state_22760__$1;
(statearr_22811_22877[(2)] = null);

(statearr_22811_22877[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (35))){
var inst_22742 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22812_22878 = state_22760__$1;
(statearr_22812_22878[(2)] = inst_22742);

(statearr_22812_22878[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (19))){
var inst_22661 = (state_22760[(7)]);
var inst_22665 = cljs.core.chunk_first(inst_22661);
var inst_22666 = cljs.core.chunk_rest(inst_22661);
var inst_22667 = cljs.core.count(inst_22665);
var inst_22639 = inst_22666;
var inst_22640 = inst_22665;
var inst_22641 = inst_22667;
var inst_22642 = (0);
var state_22760__$1 = (function (){var statearr_22813 = state_22760;
(statearr_22813[(13)] = inst_22642);

(statearr_22813[(15)] = inst_22640);

(statearr_22813[(16)] = inst_22641);

(statearr_22813[(17)] = inst_22639);

return statearr_22813;
})();
var statearr_22814_22879 = state_22760__$1;
(statearr_22814_22879[(2)] = null);

(statearr_22814_22879[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (11))){
var inst_22661 = (state_22760[(7)]);
var inst_22639 = (state_22760[(17)]);
var inst_22661__$1 = cljs.core.seq(inst_22639);
var state_22760__$1 = (function (){var statearr_22815 = state_22760;
(statearr_22815[(7)] = inst_22661__$1);

return statearr_22815;
})();
if(inst_22661__$1){
var statearr_22816_22880 = state_22760__$1;
(statearr_22816_22880[(1)] = (16));

} else {
var statearr_22817_22881 = state_22760__$1;
(statearr_22817_22881[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (9))){
var inst_22691 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22818_22882 = state_22760__$1;
(statearr_22818_22882[(2)] = inst_22691);

(statearr_22818_22882[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (5))){
var inst_22637 = cljs.core.deref(cs);
var inst_22638 = cljs.core.seq(inst_22637);
var inst_22639 = inst_22638;
var inst_22640 = null;
var inst_22641 = (0);
var inst_22642 = (0);
var state_22760__$1 = (function (){var statearr_22819 = state_22760;
(statearr_22819[(13)] = inst_22642);

(statearr_22819[(15)] = inst_22640);

(statearr_22819[(16)] = inst_22641);

(statearr_22819[(17)] = inst_22639);

return statearr_22819;
})();
var statearr_22820_22883 = state_22760__$1;
(statearr_22820_22883[(2)] = null);

(statearr_22820_22883[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (14))){
var state_22760__$1 = state_22760;
var statearr_22821_22884 = state_22760__$1;
(statearr_22821_22884[(2)] = null);

(statearr_22821_22884[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (45))){
var inst_22750 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22822_22885 = state_22760__$1;
(statearr_22822_22885[(2)] = inst_22750);

(statearr_22822_22885[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (26))){
var inst_22694 = (state_22760[(27)]);
var inst_22746 = (state_22760[(2)]);
var inst_22747 = cljs.core.seq(inst_22694);
var state_22760__$1 = (function (){var statearr_22823 = state_22760;
(statearr_22823[(29)] = inst_22746);

return statearr_22823;
})();
if(inst_22747){
var statearr_22824_22886 = state_22760__$1;
(statearr_22824_22886[(1)] = (42));

} else {
var statearr_22825_22887 = state_22760__$1;
(statearr_22825_22887[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (16))){
var inst_22661 = (state_22760[(7)]);
var inst_22663 = cljs.core.chunked_seq_QMARK_(inst_22661);
var state_22760__$1 = state_22760;
if(inst_22663){
var statearr_22826_22888 = state_22760__$1;
(statearr_22826_22888[(1)] = (19));

} else {
var statearr_22827_22889 = state_22760__$1;
(statearr_22827_22889[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (38))){
var inst_22739 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22828_22890 = state_22760__$1;
(statearr_22828_22890[(2)] = inst_22739);

(statearr_22828_22890[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (30))){
var state_22760__$1 = state_22760;
var statearr_22829_22891 = state_22760__$1;
(statearr_22829_22891[(2)] = null);

(statearr_22829_22891[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (10))){
var inst_22642 = (state_22760[(13)]);
var inst_22640 = (state_22760[(15)]);
var inst_22650 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22640,inst_22642);
var inst_22651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22650,(0),null);
var inst_22652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22650,(1),null);
var state_22760__$1 = (function (){var statearr_22830 = state_22760;
(statearr_22830[(24)] = inst_22651);

return statearr_22830;
})();
if(cljs.core.truth_(inst_22652)){
var statearr_22831_22892 = state_22760__$1;
(statearr_22831_22892[(1)] = (13));

} else {
var statearr_22832_22893 = state_22760__$1;
(statearr_22832_22893[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (18))){
var inst_22687 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
var statearr_22833_22894 = state_22760__$1;
(statearr_22833_22894[(2)] = inst_22687);

(statearr_22833_22894[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (42))){
var state_22760__$1 = state_22760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22760__$1,(45),dchan);
} else {
if((state_val_22761 === (37))){
var inst_22720 = (state_22760[(23)]);
var inst_22729 = (state_22760[(22)]);
var inst_22630 = (state_22760[(12)]);
var inst_22729__$1 = cljs.core.first(inst_22720);
var inst_22730 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22729__$1,inst_22630,done);
var state_22760__$1 = (function (){var statearr_22834 = state_22760;
(statearr_22834[(22)] = inst_22729__$1);

return statearr_22834;
})();
if(cljs.core.truth_(inst_22730)){
var statearr_22835_22895 = state_22760__$1;
(statearr_22835_22895[(1)] = (39));

} else {
var statearr_22836_22896 = state_22760__$1;
(statearr_22836_22896[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22761 === (8))){
var inst_22642 = (state_22760[(13)]);
var inst_22641 = (state_22760[(16)]);
var inst_22644 = (inst_22642 < inst_22641);
var inst_22645 = inst_22644;
var state_22760__$1 = state_22760;
if(cljs.core.truth_(inst_22645)){
var statearr_22837_22897 = state_22760__$1;
(statearr_22837_22897[(1)] = (10));

} else {
var statearr_22838_22898 = state_22760__$1;
(statearr_22838_22898[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mult_$_state_machine__21926__auto__ = null;
var cljs$core$async$mult_$_state_machine__21926__auto____0 = (function (){
var statearr_22839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22839[(0)] = cljs$core$async$mult_$_state_machine__21926__auto__);

(statearr_22839[(1)] = (1));

return statearr_22839;
});
var cljs$core$async$mult_$_state_machine__21926__auto____1 = (function (state_22760){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22760);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e22840){var ex__21929__auto__ = e22840;
var statearr_22841_22899 = state_22760;
(statearr_22841_22899[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22760[(4)]))){
var statearr_22842_22900 = state_22760;
(statearr_22842_22900[(1)] = cljs.core.first((state_22760[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__22901 = state_22760;
state_22760 = G__22901;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21926__auto__ = function(state_22760){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21926__auto____1.call(this,state_22760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21926__auto____0;
cljs$core$async$mult_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21926__auto____1;
return cljs$core$async$mult_$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_22843 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_22843[(6)] = c__22000__auto___22844);

return statearr_22843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
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
var G__22903 = arguments.length;
switch (G__22903) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_22905 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_22905(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22906 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_22906(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22907 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22907(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22908 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_22908(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22909 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22909(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22919 = arguments.length;
var i__4772__auto___22920 = (0);
while(true){
if((i__4772__auto___22920 < len__4771__auto___22919)){
args__4777__auto__.push((arguments[i__4772__auto___22920]));

var G__22921 = (i__4772__auto___22920 + (1));
i__4772__auto___22920 = G__22921;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22914){
var map__22915 = p__22914;
var map__22915__$1 = cljs.core.__destructure_map(map__22915);
var opts = map__22915__$1;
var statearr_22916_22922 = state;
(statearr_22916_22922[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_22917_22923 = state;
(statearr_22917_22923[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_22918_22924 = state;
(statearr_22918_22924[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22910){
var G__22911 = cljs.core.first(seq22910);
var seq22910__$1 = cljs.core.next(seq22910);
var G__22912 = cljs.core.first(seq22910__$1);
var seq22910__$2 = cljs.core.next(seq22910__$1);
var G__22913 = cljs.core.first(seq22910__$2);
var seq22910__$3 = cljs.core.next(seq22910__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22911,G__22912,G__22913,seq22910__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22925 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22926){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22926 = meta22926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22927,meta22926__$1){
var self__ = this;
var _22927__$1 = this;
return (new cljs.core.async.t_cljs$core$async22925(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22926__$1));
}));

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22927){
var self__ = this;
var _22927__$1 = this;
return self__.meta22926;
}));

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22925.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta22926], null);
}));

(cljs.core.async.t_cljs$core$async22925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22925");

(cljs.core.async.t_cljs$core$async22925.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async22925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22925.
 */
cljs.core.async.__GT_t_cljs$core$async22925 = (function cljs$core$async$mix_$___GT_t_cljs$core$async22925(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22926){
return (new cljs.core.async.t_cljs$core$async22925(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22926));
});

}

return (new cljs.core.async.t_cljs$core$async22925(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22000__auto___23025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_22989){
var state_val_22990 = (state_22989[(1)]);
if((state_val_22990 === (7))){
var inst_22985 = (state_22989[(2)]);
var state_22989__$1 = state_22989;
var statearr_22991_23026 = state_22989__$1;
(statearr_22991_23026[(2)] = inst_22985);

(statearr_22991_23026[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (20))){
var inst_22979 = (state_22989[(2)]);
var state_22989__$1 = state_22989;
var statearr_22992_23027 = state_22989__$1;
(statearr_22992_23027[(2)] = inst_22979);

(statearr_22992_23027[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (1))){
var inst_22931 = calc_state();
var inst_22932 = cljs.core.__destructure_map(inst_22931);
var inst_22933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22932,cljs.core.cst$kw$solos);
var inst_22934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22932,cljs.core.cst$kw$mutes);
var inst_22935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22932,cljs.core.cst$kw$reads);
var inst_22936 = inst_22931;
var state_22989__$1 = (function (){var statearr_22993 = state_22989;
(statearr_22993[(7)] = inst_22934);

(statearr_22993[(8)] = inst_22936);

(statearr_22993[(9)] = inst_22935);

(statearr_22993[(10)] = inst_22933);

return statearr_22993;
})();
var statearr_22994_23028 = state_22989__$1;
(statearr_22994_23028[(2)] = null);

(statearr_22994_23028[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (4))){
var inst_22948 = (state_22989[(11)]);
var inst_22949 = (state_22989[(12)]);
var inst_22947 = (state_22989[(2)]);
var inst_22948__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22947,(0),null);
var inst_22949__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22947,(1),null);
var inst_22950 = (inst_22948__$1 == null);
var inst_22951 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22949__$1,change);
var inst_22952 = ((inst_22950) || (inst_22951));
var state_22989__$1 = (function (){var statearr_22995 = state_22989;
(statearr_22995[(11)] = inst_22948__$1);

(statearr_22995[(12)] = inst_22949__$1);

return statearr_22995;
})();
if(cljs.core.truth_(inst_22952)){
var statearr_22996_23029 = state_22989__$1;
(statearr_22996_23029[(1)] = (5));

} else {
var statearr_22997_23030 = state_22989__$1;
(statearr_22997_23030[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (15))){
var inst_22939 = (state_22989[(13)]);
var inst_22936 = inst_22939;
var state_22989__$1 = (function (){var statearr_22998 = state_22989;
(statearr_22998[(8)] = inst_22936);

return statearr_22998;
})();
var statearr_22999_23031 = state_22989__$1;
(statearr_22999_23031[(2)] = null);

(statearr_22999_23031[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (13))){
var inst_22971 = (state_22989[(2)]);
var state_22989__$1 = state_22989;
if(cljs.core.truth_(inst_22971)){
var statearr_23000_23032 = state_22989__$1;
(statearr_23000_23032[(1)] = (14));

} else {
var statearr_23001_23033 = state_22989__$1;
(statearr_23001_23033[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (6))){
var inst_22963 = (state_22989[(14)]);
var inst_22949 = (state_22989[(12)]);
var inst_22940 = (state_22989[(15)]);
var inst_22963__$1 = (inst_22940.cljs$core$IFn$_invoke$arity$1 ? inst_22940.cljs$core$IFn$_invoke$arity$1(inst_22949) : inst_22940.call(null,inst_22949));
var state_22989__$1 = (function (){var statearr_23002 = state_22989;
(statearr_23002[(14)] = inst_22963__$1);

return statearr_23002;
})();
if(cljs.core.truth_(inst_22963__$1)){
var statearr_23003_23034 = state_22989__$1;
(statearr_23003_23034[(1)] = (11));

} else {
var statearr_23004_23035 = state_22989__$1;
(statearr_23004_23035[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (17))){
var inst_22974 = (state_22989[(2)]);
var state_22989__$1 = state_22989;
if(cljs.core.truth_(inst_22974)){
var statearr_23005_23036 = state_22989__$1;
(statearr_23005_23036[(1)] = (18));

} else {
var statearr_23006_23037 = state_22989__$1;
(statearr_23006_23037[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (3))){
var inst_22987 = (state_22989[(2)]);
var state_22989__$1 = state_22989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22989__$1,inst_22987);
} else {
if((state_val_22990 === (12))){
var inst_22949 = (state_22989[(12)]);
var inst_22940 = (state_22989[(15)]);
var inst_22941 = (state_22989[(16)]);
var inst_22966 = cljs.core.empty_QMARK_(inst_22940);
var inst_22967 = (inst_22941.cljs$core$IFn$_invoke$arity$1 ? inst_22941.cljs$core$IFn$_invoke$arity$1(inst_22949) : inst_22941.call(null,inst_22949));
var inst_22968 = cljs.core.not(inst_22967);
var inst_22969 = ((inst_22966) && (inst_22968));
var state_22989__$1 = state_22989;
var statearr_23007_23038 = state_22989__$1;
(statearr_23007_23038[(2)] = inst_22969);

(statearr_23007_23038[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (2))){
var inst_22939 = (state_22989[(13)]);
var inst_22936 = (state_22989[(8)]);
var inst_22939__$1 = cljs.core.__destructure_map(inst_22936);
var inst_22940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22939__$1,cljs.core.cst$kw$solos);
var inst_22941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22939__$1,cljs.core.cst$kw$mutes);
var inst_22942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22939__$1,cljs.core.cst$kw$reads);
var state_22989__$1 = (function (){var statearr_23008 = state_22989;
(statearr_23008[(13)] = inst_22939__$1);

(statearr_23008[(15)] = inst_22940);

(statearr_23008[(16)] = inst_22941);

return statearr_23008;
})();
return cljs.core.async.ioc_alts_BANG_(state_22989__$1,(4),inst_22942);
} else {
if((state_val_22990 === (19))){
var state_22989__$1 = state_22989;
var statearr_23009_23039 = state_22989__$1;
(statearr_23009_23039[(2)] = null);

(statearr_23009_23039[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (11))){
var inst_22963 = (state_22989[(14)]);
var state_22989__$1 = state_22989;
var statearr_23010_23040 = state_22989__$1;
(statearr_23010_23040[(2)] = inst_22963);

(statearr_23010_23040[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (9))){
var state_22989__$1 = state_22989;
var statearr_23011_23041 = state_22989__$1;
(statearr_23011_23041[(2)] = null);

(statearr_23011_23041[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (5))){
var inst_22948 = (state_22989[(11)]);
var inst_22954 = (inst_22948 == null);
var state_22989__$1 = state_22989;
if(cljs.core.truth_(inst_22954)){
var statearr_23012_23042 = state_22989__$1;
(statearr_23012_23042[(1)] = (8));

} else {
var statearr_23013_23043 = state_22989__$1;
(statearr_23013_23043[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (14))){
var inst_22948 = (state_22989[(11)]);
var state_22989__$1 = state_22989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22989__$1,(17),out,inst_22948);
} else {
if((state_val_22990 === (16))){
var inst_22983 = (state_22989[(2)]);
var state_22989__$1 = state_22989;
var statearr_23014_23044 = state_22989__$1;
(statearr_23014_23044[(2)] = inst_22983);

(statearr_23014_23044[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (10))){
var inst_22959 = (state_22989[(2)]);
var inst_22960 = calc_state();
var inst_22936 = inst_22960;
var state_22989__$1 = (function (){var statearr_23015 = state_22989;
(statearr_23015[(8)] = inst_22936);

(statearr_23015[(17)] = inst_22959);

return statearr_23015;
})();
var statearr_23016_23045 = state_22989__$1;
(statearr_23016_23045[(2)] = null);

(statearr_23016_23045[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (18))){
var inst_22939 = (state_22989[(13)]);
var inst_22936 = inst_22939;
var state_22989__$1 = (function (){var statearr_23017 = state_22989;
(statearr_23017[(8)] = inst_22936);

return statearr_23017;
})();
var statearr_23018_23046 = state_22989__$1;
(statearr_23018_23046[(2)] = null);

(statearr_23018_23046[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22990 === (8))){
var inst_22949 = (state_22989[(12)]);
var inst_22956 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22949);
var state_22989__$1 = state_22989;
var statearr_23019_23047 = state_22989__$1;
(statearr_23019_23047[(2)] = inst_22956);

(statearr_23019_23047[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__21926__auto__ = null;
var cljs$core$async$mix_$_state_machine__21926__auto____0 = (function (){
var statearr_23020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23020[(0)] = cljs$core$async$mix_$_state_machine__21926__auto__);

(statearr_23020[(1)] = (1));

return statearr_23020;
});
var cljs$core$async$mix_$_state_machine__21926__auto____1 = (function (state_22989){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_22989);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23021){var ex__21929__auto__ = e23021;
var statearr_23022_23048 = state_22989;
(statearr_23022_23048[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_22989[(4)]))){
var statearr_23023_23049 = state_22989;
(statearr_23023_23049[(1)] = cljs.core.first((state_22989[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23050 = state_22989;
state_22989 = G__23050;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21926__auto__ = function(state_22989){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21926__auto____1.call(this,state_22989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21926__auto____0;
cljs$core$async$mix_$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21926__auto____1;
return cljs$core$async$mix_$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23024 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23024[(6)] = c__22000__auto___23025);

return statearr_23024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_23053 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_23053(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23054 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_23054(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23055 = (function() {
var G__23056 = null;
var G__23056__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__23056__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__23056 = function(p,v){
switch(arguments.length){
case 1:
return G__23056__1.call(this,p);
case 2:
return G__23056__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23056.cljs$core$IFn$_invoke$arity$1 = G__23056__1;
G__23056.cljs$core$IFn$_invoke$arity$2 = G__23056__2;
return G__23056;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23052 = arguments.length;
switch (G__23052) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23055.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23055.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__23060 = arguments.length;
switch (G__23060) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__23058_SHARP_){
if(cljs.core.truth_((p1__23058_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23058_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23058_SHARP_.call(null,topic)))){
return p1__23058_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23058_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23061 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23062){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23062 = meta23062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23063,meta23062__$1){
var self__ = this;
var _23063__$1 = this;
return (new cljs.core.async.t_cljs$core$async23061(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23062__$1));
}));

(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23063){
var self__ = this;
var _23063__$1 = this;
return self__.meta23062;
}));

(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async23061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async23061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta23062], null);
}));

(cljs.core.async.t_cljs$core$async23061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23061");

(cljs.core.async.t_cljs$core$async23061.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async23061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23061.
 */
cljs.core.async.__GT_t_cljs$core$async23061 = (function cljs$core$async$__GT_t_cljs$core$async23061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23062){
return (new cljs.core.async.t_cljs$core$async23061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23062));
});

}

return (new cljs.core.async.t_cljs$core$async23061(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22000__auto___23182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23135){
var state_val_23136 = (state_23135[(1)]);
if((state_val_23136 === (7))){
var inst_23131 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23137_23183 = state_23135__$1;
(statearr_23137_23183[(2)] = inst_23131);

(statearr_23137_23183[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (20))){
var state_23135__$1 = state_23135;
var statearr_23138_23184 = state_23135__$1;
(statearr_23138_23184[(2)] = null);

(statearr_23138_23184[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (1))){
var state_23135__$1 = state_23135;
var statearr_23139_23185 = state_23135__$1;
(statearr_23139_23185[(2)] = null);

(statearr_23139_23185[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (24))){
var inst_23114 = (state_23135[(7)]);
var inst_23123 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23114);
var state_23135__$1 = state_23135;
var statearr_23140_23186 = state_23135__$1;
(statearr_23140_23186[(2)] = inst_23123);

(statearr_23140_23186[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (4))){
var inst_23066 = (state_23135[(8)]);
var inst_23066__$1 = (state_23135[(2)]);
var inst_23067 = (inst_23066__$1 == null);
var state_23135__$1 = (function (){var statearr_23141 = state_23135;
(statearr_23141[(8)] = inst_23066__$1);

return statearr_23141;
})();
if(cljs.core.truth_(inst_23067)){
var statearr_23142_23187 = state_23135__$1;
(statearr_23142_23187[(1)] = (5));

} else {
var statearr_23143_23188 = state_23135__$1;
(statearr_23143_23188[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (15))){
var inst_23108 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23144_23189 = state_23135__$1;
(statearr_23144_23189[(2)] = inst_23108);

(statearr_23144_23189[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (21))){
var inst_23128 = (state_23135[(2)]);
var state_23135__$1 = (function (){var statearr_23145 = state_23135;
(statearr_23145[(9)] = inst_23128);

return statearr_23145;
})();
var statearr_23146_23190 = state_23135__$1;
(statearr_23146_23190[(2)] = null);

(statearr_23146_23190[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (13))){
var inst_23090 = (state_23135[(10)]);
var inst_23092 = cljs.core.chunked_seq_QMARK_(inst_23090);
var state_23135__$1 = state_23135;
if(inst_23092){
var statearr_23147_23191 = state_23135__$1;
(statearr_23147_23191[(1)] = (16));

} else {
var statearr_23148_23192 = state_23135__$1;
(statearr_23148_23192[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (22))){
var inst_23120 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
if(cljs.core.truth_(inst_23120)){
var statearr_23149_23193 = state_23135__$1;
(statearr_23149_23193[(1)] = (23));

} else {
var statearr_23150_23194 = state_23135__$1;
(statearr_23150_23194[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (6))){
var inst_23066 = (state_23135[(8)]);
var inst_23114 = (state_23135[(7)]);
var inst_23116 = (state_23135[(11)]);
var inst_23114__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23066) : topic_fn.call(null,inst_23066));
var inst_23115 = cljs.core.deref(mults);
var inst_23116__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23115,inst_23114__$1);
var state_23135__$1 = (function (){var statearr_23151 = state_23135;
(statearr_23151[(7)] = inst_23114__$1);

(statearr_23151[(11)] = inst_23116__$1);

return statearr_23151;
})();
if(cljs.core.truth_(inst_23116__$1)){
var statearr_23152_23195 = state_23135__$1;
(statearr_23152_23195[(1)] = (19));

} else {
var statearr_23153_23196 = state_23135__$1;
(statearr_23153_23196[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (25))){
var inst_23125 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23154_23197 = state_23135__$1;
(statearr_23154_23197[(2)] = inst_23125);

(statearr_23154_23197[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (17))){
var inst_23090 = (state_23135[(10)]);
var inst_23099 = cljs.core.first(inst_23090);
var inst_23100 = cljs.core.async.muxch_STAR_(inst_23099);
var inst_23101 = cljs.core.async.close_BANG_(inst_23100);
var inst_23102 = cljs.core.next(inst_23090);
var inst_23076 = inst_23102;
var inst_23077 = null;
var inst_23078 = (0);
var inst_23079 = (0);
var state_23135__$1 = (function (){var statearr_23155 = state_23135;
(statearr_23155[(12)] = inst_23078);

(statearr_23155[(13)] = inst_23079);

(statearr_23155[(14)] = inst_23077);

(statearr_23155[(15)] = inst_23076);

(statearr_23155[(16)] = inst_23101);

return statearr_23155;
})();
var statearr_23156_23198 = state_23135__$1;
(statearr_23156_23198[(2)] = null);

(statearr_23156_23198[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (3))){
var inst_23133 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23135__$1,inst_23133);
} else {
if((state_val_23136 === (12))){
var inst_23110 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23157_23199 = state_23135__$1;
(statearr_23157_23199[(2)] = inst_23110);

(statearr_23157_23199[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (2))){
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23135__$1,(4),ch);
} else {
if((state_val_23136 === (23))){
var state_23135__$1 = state_23135;
var statearr_23158_23200 = state_23135__$1;
(statearr_23158_23200[(2)] = null);

(statearr_23158_23200[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (19))){
var inst_23066 = (state_23135[(8)]);
var inst_23116 = (state_23135[(11)]);
var inst_23118 = cljs.core.async.muxch_STAR_(inst_23116);
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23135__$1,(22),inst_23118,inst_23066);
} else {
if((state_val_23136 === (11))){
var inst_23076 = (state_23135[(15)]);
var inst_23090 = (state_23135[(10)]);
var inst_23090__$1 = cljs.core.seq(inst_23076);
var state_23135__$1 = (function (){var statearr_23159 = state_23135;
(statearr_23159[(10)] = inst_23090__$1);

return statearr_23159;
})();
if(inst_23090__$1){
var statearr_23160_23201 = state_23135__$1;
(statearr_23160_23201[(1)] = (13));

} else {
var statearr_23161_23202 = state_23135__$1;
(statearr_23161_23202[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (9))){
var inst_23112 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23162_23203 = state_23135__$1;
(statearr_23162_23203[(2)] = inst_23112);

(statearr_23162_23203[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (5))){
var inst_23073 = cljs.core.deref(mults);
var inst_23074 = cljs.core.vals(inst_23073);
var inst_23075 = cljs.core.seq(inst_23074);
var inst_23076 = inst_23075;
var inst_23077 = null;
var inst_23078 = (0);
var inst_23079 = (0);
var state_23135__$1 = (function (){var statearr_23163 = state_23135;
(statearr_23163[(12)] = inst_23078);

(statearr_23163[(13)] = inst_23079);

(statearr_23163[(14)] = inst_23077);

(statearr_23163[(15)] = inst_23076);

return statearr_23163;
})();
var statearr_23164_23204 = state_23135__$1;
(statearr_23164_23204[(2)] = null);

(statearr_23164_23204[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (14))){
var state_23135__$1 = state_23135;
var statearr_23168_23205 = state_23135__$1;
(statearr_23168_23205[(2)] = null);

(statearr_23168_23205[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (16))){
var inst_23090 = (state_23135[(10)]);
var inst_23094 = cljs.core.chunk_first(inst_23090);
var inst_23095 = cljs.core.chunk_rest(inst_23090);
var inst_23096 = cljs.core.count(inst_23094);
var inst_23076 = inst_23095;
var inst_23077 = inst_23094;
var inst_23078 = inst_23096;
var inst_23079 = (0);
var state_23135__$1 = (function (){var statearr_23169 = state_23135;
(statearr_23169[(12)] = inst_23078);

(statearr_23169[(13)] = inst_23079);

(statearr_23169[(14)] = inst_23077);

(statearr_23169[(15)] = inst_23076);

return statearr_23169;
})();
var statearr_23170_23206 = state_23135__$1;
(statearr_23170_23206[(2)] = null);

(statearr_23170_23206[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (10))){
var inst_23078 = (state_23135[(12)]);
var inst_23079 = (state_23135[(13)]);
var inst_23077 = (state_23135[(14)]);
var inst_23076 = (state_23135[(15)]);
var inst_23084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23077,inst_23079);
var inst_23085 = cljs.core.async.muxch_STAR_(inst_23084);
var inst_23086 = cljs.core.async.close_BANG_(inst_23085);
var inst_23087 = (inst_23079 + (1));
var tmp23165 = inst_23078;
var tmp23166 = inst_23077;
var tmp23167 = inst_23076;
var inst_23076__$1 = tmp23167;
var inst_23077__$1 = tmp23166;
var inst_23078__$1 = tmp23165;
var inst_23079__$1 = inst_23087;
var state_23135__$1 = (function (){var statearr_23171 = state_23135;
(statearr_23171[(17)] = inst_23086);

(statearr_23171[(12)] = inst_23078__$1);

(statearr_23171[(13)] = inst_23079__$1);

(statearr_23171[(14)] = inst_23077__$1);

(statearr_23171[(15)] = inst_23076__$1);

return statearr_23171;
})();
var statearr_23172_23207 = state_23135__$1;
(statearr_23172_23207[(2)] = null);

(statearr_23172_23207[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (18))){
var inst_23105 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23173_23208 = state_23135__$1;
(statearr_23173_23208[(2)] = inst_23105);

(statearr_23173_23208[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23136 === (8))){
var inst_23078 = (state_23135[(12)]);
var inst_23079 = (state_23135[(13)]);
var inst_23081 = (inst_23079 < inst_23078);
var inst_23082 = inst_23081;
var state_23135__$1 = state_23135;
if(cljs.core.truth_(inst_23082)){
var statearr_23174_23209 = state_23135__$1;
(statearr_23174_23209[(1)] = (10));

} else {
var statearr_23175_23210 = state_23135__$1;
(statearr_23175_23210[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_23176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23176[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_23176[(1)] = (1));

return statearr_23176;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_23135){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23135);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23177){var ex__21929__auto__ = e23177;
var statearr_23178_23211 = state_23135;
(statearr_23178_23211[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23135[(4)]))){
var statearr_23179_23212 = state_23135;
(statearr_23179_23212[(1)] = cljs.core.first((state_23135[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23213 = state_23135;
state_23135 = G__23213;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_23135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_23135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23180 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23180[(6)] = c__22000__auto___23182);

return statearr_23180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
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
var G__23215 = arguments.length;
switch (G__23215) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__23218 = arguments.length;
switch (G__23218) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__23221 = arguments.length;
switch (G__23221) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__22000__auto___23299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23264){
var state_val_23265 = (state_23264[(1)]);
if((state_val_23265 === (7))){
var state_23264__$1 = state_23264;
var statearr_23266_23300 = state_23264__$1;
(statearr_23266_23300[(2)] = null);

(statearr_23266_23300[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (1))){
var state_23264__$1 = state_23264;
var statearr_23267_23301 = state_23264__$1;
(statearr_23267_23301[(2)] = null);

(statearr_23267_23301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (4))){
var inst_23224 = (state_23264[(7)]);
var inst_23225 = (state_23264[(8)]);
var inst_23227 = (inst_23225 < inst_23224);
var state_23264__$1 = state_23264;
if(cljs.core.truth_(inst_23227)){
var statearr_23268_23302 = state_23264__$1;
(statearr_23268_23302[(1)] = (6));

} else {
var statearr_23269_23303 = state_23264__$1;
(statearr_23269_23303[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (15))){
var inst_23250 = (state_23264[(9)]);
var inst_23255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23250);
var state_23264__$1 = state_23264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23264__$1,(17),out,inst_23255);
} else {
if((state_val_23265 === (13))){
var inst_23250 = (state_23264[(9)]);
var inst_23250__$1 = (state_23264[(2)]);
var inst_23251 = cljs.core.some(cljs.core.nil_QMARK_,inst_23250__$1);
var state_23264__$1 = (function (){var statearr_23270 = state_23264;
(statearr_23270[(9)] = inst_23250__$1);

return statearr_23270;
})();
if(cljs.core.truth_(inst_23251)){
var statearr_23271_23304 = state_23264__$1;
(statearr_23271_23304[(1)] = (14));

} else {
var statearr_23272_23305 = state_23264__$1;
(statearr_23272_23305[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (6))){
var state_23264__$1 = state_23264;
var statearr_23273_23306 = state_23264__$1;
(statearr_23273_23306[(2)] = null);

(statearr_23273_23306[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (17))){
var inst_23257 = (state_23264[(2)]);
var state_23264__$1 = (function (){var statearr_23275 = state_23264;
(statearr_23275[(10)] = inst_23257);

return statearr_23275;
})();
var statearr_23276_23307 = state_23264__$1;
(statearr_23276_23307[(2)] = null);

(statearr_23276_23307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (3))){
var inst_23262 = (state_23264[(2)]);
var state_23264__$1 = state_23264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23264__$1,inst_23262);
} else {
if((state_val_23265 === (12))){
var _ = (function (){var statearr_23277 = state_23264;
(statearr_23277[(4)] = cljs.core.rest((state_23264[(4)])));

return statearr_23277;
})();
var state_23264__$1 = state_23264;
var ex23274 = (state_23264__$1[(2)]);
var statearr_23278_23308 = state_23264__$1;
(statearr_23278_23308[(5)] = ex23274);


if((ex23274 instanceof Object)){
var statearr_23279_23309 = state_23264__$1;
(statearr_23279_23309[(1)] = (11));

(statearr_23279_23309[(5)] = null);

} else {
throw ex23274;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (2))){
var inst_23223 = cljs.core.reset_BANG_(dctr,cnt);
var inst_23224 = cnt;
var inst_23225 = (0);
var state_23264__$1 = (function (){var statearr_23280 = state_23264;
(statearr_23280[(7)] = inst_23224);

(statearr_23280[(8)] = inst_23225);

(statearr_23280[(11)] = inst_23223);

return statearr_23280;
})();
var statearr_23281_23310 = state_23264__$1;
(statearr_23281_23310[(2)] = null);

(statearr_23281_23310[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (11))){
var inst_23229 = (state_23264[(2)]);
var inst_23230 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_23264__$1 = (function (){var statearr_23282 = state_23264;
(statearr_23282[(12)] = inst_23229);

return statearr_23282;
})();
var statearr_23283_23311 = state_23264__$1;
(statearr_23283_23311[(2)] = inst_23230);

(statearr_23283_23311[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (9))){
var inst_23225 = (state_23264[(8)]);
var _ = (function (){var statearr_23284 = state_23264;
(statearr_23284[(4)] = cljs.core.cons((12),(state_23264[(4)])));

return statearr_23284;
})();
var inst_23236 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23225) : chs__$1.call(null,inst_23225));
var inst_23237 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23225) : done.call(null,inst_23225));
var inst_23238 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23236,inst_23237);
var ___$1 = (function (){var statearr_23285 = state_23264;
(statearr_23285[(4)] = cljs.core.rest((state_23264[(4)])));

return statearr_23285;
})();
var state_23264__$1 = state_23264;
var statearr_23286_23312 = state_23264__$1;
(statearr_23286_23312[(2)] = inst_23238);

(statearr_23286_23312[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (5))){
var inst_23248 = (state_23264[(2)]);
var state_23264__$1 = (function (){var statearr_23287 = state_23264;
(statearr_23287[(13)] = inst_23248);

return statearr_23287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23264__$1,(13),dchan);
} else {
if((state_val_23265 === (14))){
var inst_23253 = cljs.core.async.close_BANG_(out);
var state_23264__$1 = state_23264;
var statearr_23288_23313 = state_23264__$1;
(statearr_23288_23313[(2)] = inst_23253);

(statearr_23288_23313[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (16))){
var inst_23260 = (state_23264[(2)]);
var state_23264__$1 = state_23264;
var statearr_23289_23314 = state_23264__$1;
(statearr_23289_23314[(2)] = inst_23260);

(statearr_23289_23314[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (10))){
var inst_23225 = (state_23264[(8)]);
var inst_23241 = (state_23264[(2)]);
var inst_23242 = (inst_23225 + (1));
var inst_23225__$1 = inst_23242;
var state_23264__$1 = (function (){var statearr_23290 = state_23264;
(statearr_23290[(8)] = inst_23225__$1);

(statearr_23290[(14)] = inst_23241);

return statearr_23290;
})();
var statearr_23291_23315 = state_23264__$1;
(statearr_23291_23315[(2)] = null);

(statearr_23291_23315[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23265 === (8))){
var inst_23246 = (state_23264[(2)]);
var state_23264__$1 = state_23264;
var statearr_23292_23316 = state_23264__$1;
(statearr_23292_23316[(2)] = inst_23246);

(statearr_23292_23316[(1)] = (5));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_23293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23293[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_23293[(1)] = (1));

return statearr_23293;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_23264){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23264);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23294){var ex__21929__auto__ = e23294;
var statearr_23295_23317 = state_23264;
(statearr_23295_23317[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23264[(4)]))){
var statearr_23296_23318 = state_23264;
(statearr_23296_23318[(1)] = cljs.core.first((state_23264[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23319 = state_23264;
state_23264 = G__23319;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_23264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_23264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23297 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23297[(6)] = c__22000__auto___23299);

return statearr_23297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
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
var G__23322 = arguments.length;
switch (G__23322) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22000__auto___23377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23354){
var state_val_23355 = (state_23354[(1)]);
if((state_val_23355 === (7))){
var inst_23334 = (state_23354[(7)]);
var inst_23333 = (state_23354[(8)]);
var inst_23333__$1 = (state_23354[(2)]);
var inst_23334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23333__$1,(0),null);
var inst_23335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23333__$1,(1),null);
var inst_23336 = (inst_23334__$1 == null);
var state_23354__$1 = (function (){var statearr_23356 = state_23354;
(statearr_23356[(7)] = inst_23334__$1);

(statearr_23356[(9)] = inst_23335);

(statearr_23356[(8)] = inst_23333__$1);

return statearr_23356;
})();
if(cljs.core.truth_(inst_23336)){
var statearr_23357_23378 = state_23354__$1;
(statearr_23357_23378[(1)] = (8));

} else {
var statearr_23358_23379 = state_23354__$1;
(statearr_23358_23379[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23355 === (1))){
var inst_23323 = cljs.core.vec(chs);
var inst_23324 = inst_23323;
var state_23354__$1 = (function (){var statearr_23359 = state_23354;
(statearr_23359[(10)] = inst_23324);

return statearr_23359;
})();
var statearr_23360_23380 = state_23354__$1;
(statearr_23360_23380[(2)] = null);

(statearr_23360_23380[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23355 === (4))){
var inst_23324 = (state_23354[(10)]);
var state_23354__$1 = state_23354;
return cljs.core.async.ioc_alts_BANG_(state_23354__$1,(7),inst_23324);
} else {
if((state_val_23355 === (6))){
var inst_23350 = (state_23354[(2)]);
var state_23354__$1 = state_23354;
var statearr_23361_23381 = state_23354__$1;
(statearr_23361_23381[(2)] = inst_23350);

(statearr_23361_23381[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23355 === (3))){
var inst_23352 = (state_23354[(2)]);
var state_23354__$1 = state_23354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23354__$1,inst_23352);
} else {
if((state_val_23355 === (2))){
var inst_23324 = (state_23354[(10)]);
var inst_23326 = cljs.core.count(inst_23324);
var inst_23327 = (inst_23326 > (0));
var state_23354__$1 = state_23354;
if(cljs.core.truth_(inst_23327)){
var statearr_23363_23382 = state_23354__$1;
(statearr_23363_23382[(1)] = (4));

} else {
var statearr_23364_23383 = state_23354__$1;
(statearr_23364_23383[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23355 === (11))){
var inst_23324 = (state_23354[(10)]);
var inst_23343 = (state_23354[(2)]);
var tmp23362 = inst_23324;
var inst_23324__$1 = tmp23362;
var state_23354__$1 = (function (){var statearr_23365 = state_23354;
(statearr_23365[(10)] = inst_23324__$1);

(statearr_23365[(11)] = inst_23343);

return statearr_23365;
})();
var statearr_23366_23384 = state_23354__$1;
(statearr_23366_23384[(2)] = null);

(statearr_23366_23384[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23355 === (9))){
var inst_23334 = (state_23354[(7)]);
var state_23354__$1 = state_23354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23354__$1,(11),out,inst_23334);
} else {
if((state_val_23355 === (5))){
var inst_23348 = cljs.core.async.close_BANG_(out);
var state_23354__$1 = state_23354;
var statearr_23367_23385 = state_23354__$1;
(statearr_23367_23385[(2)] = inst_23348);

(statearr_23367_23385[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23355 === (10))){
var inst_23346 = (state_23354[(2)]);
var state_23354__$1 = state_23354;
var statearr_23368_23386 = state_23354__$1;
(statearr_23368_23386[(2)] = inst_23346);

(statearr_23368_23386[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23355 === (8))){
var inst_23324 = (state_23354[(10)]);
var inst_23334 = (state_23354[(7)]);
var inst_23335 = (state_23354[(9)]);
var inst_23333 = (state_23354[(8)]);
var inst_23338 = (function (){var cs = inst_23324;
var vec__23329 = inst_23333;
var v = inst_23334;
var c = inst_23335;
return (function (p1__23320_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23320_SHARP_);
});
})();
var inst_23339 = cljs.core.filterv(inst_23338,inst_23324);
var inst_23324__$1 = inst_23339;
var state_23354__$1 = (function (){var statearr_23369 = state_23354;
(statearr_23369[(10)] = inst_23324__$1);

return statearr_23369;
})();
var statearr_23370_23387 = state_23354__$1;
(statearr_23370_23387[(2)] = null);

(statearr_23370_23387[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_23371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23371[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_23371[(1)] = (1));

return statearr_23371;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_23354){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23354);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23372){var ex__21929__auto__ = e23372;
var statearr_23373_23388 = state_23354;
(statearr_23373_23388[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23354[(4)]))){
var statearr_23374_23389 = state_23354;
(statearr_23374_23389[(1)] = cljs.core.first((state_23354[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23390 = state_23354;
state_23354 = G__23390;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_23354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_23354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23375 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23375[(6)] = c__22000__auto___23377);

return statearr_23375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23392 = arguments.length;
switch (G__23392) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22000__auto___23438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23416){
var state_val_23417 = (state_23416[(1)]);
if((state_val_23417 === (7))){
var inst_23398 = (state_23416[(7)]);
var inst_23398__$1 = (state_23416[(2)]);
var inst_23399 = (inst_23398__$1 == null);
var inst_23400 = cljs.core.not(inst_23399);
var state_23416__$1 = (function (){var statearr_23418 = state_23416;
(statearr_23418[(7)] = inst_23398__$1);

return statearr_23418;
})();
if(inst_23400){
var statearr_23419_23439 = state_23416__$1;
(statearr_23419_23439[(1)] = (8));

} else {
var statearr_23420_23440 = state_23416__$1;
(statearr_23420_23440[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23417 === (1))){
var inst_23393 = (0);
var state_23416__$1 = (function (){var statearr_23421 = state_23416;
(statearr_23421[(8)] = inst_23393);

return statearr_23421;
})();
var statearr_23422_23441 = state_23416__$1;
(statearr_23422_23441[(2)] = null);

(statearr_23422_23441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23417 === (4))){
var state_23416__$1 = state_23416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23416__$1,(7),ch);
} else {
if((state_val_23417 === (6))){
var inst_23411 = (state_23416[(2)]);
var state_23416__$1 = state_23416;
var statearr_23423_23442 = state_23416__$1;
(statearr_23423_23442[(2)] = inst_23411);

(statearr_23423_23442[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23417 === (3))){
var inst_23413 = (state_23416[(2)]);
var inst_23414 = cljs.core.async.close_BANG_(out);
var state_23416__$1 = (function (){var statearr_23424 = state_23416;
(statearr_23424[(9)] = inst_23413);

return statearr_23424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23416__$1,inst_23414);
} else {
if((state_val_23417 === (2))){
var inst_23393 = (state_23416[(8)]);
var inst_23395 = (inst_23393 < n);
var state_23416__$1 = state_23416;
if(cljs.core.truth_(inst_23395)){
var statearr_23425_23443 = state_23416__$1;
(statearr_23425_23443[(1)] = (4));

} else {
var statearr_23426_23444 = state_23416__$1;
(statearr_23426_23444[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23417 === (11))){
var inst_23393 = (state_23416[(8)]);
var inst_23403 = (state_23416[(2)]);
var inst_23404 = (inst_23393 + (1));
var inst_23393__$1 = inst_23404;
var state_23416__$1 = (function (){var statearr_23427 = state_23416;
(statearr_23427[(8)] = inst_23393__$1);

(statearr_23427[(10)] = inst_23403);

return statearr_23427;
})();
var statearr_23428_23445 = state_23416__$1;
(statearr_23428_23445[(2)] = null);

(statearr_23428_23445[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23417 === (9))){
var state_23416__$1 = state_23416;
var statearr_23429_23446 = state_23416__$1;
(statearr_23429_23446[(2)] = null);

(statearr_23429_23446[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23417 === (5))){
var state_23416__$1 = state_23416;
var statearr_23430_23447 = state_23416__$1;
(statearr_23430_23447[(2)] = null);

(statearr_23430_23447[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23417 === (10))){
var inst_23408 = (state_23416[(2)]);
var state_23416__$1 = state_23416;
var statearr_23431_23448 = state_23416__$1;
(statearr_23431_23448[(2)] = inst_23408);

(statearr_23431_23448[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23417 === (8))){
var inst_23398 = (state_23416[(7)]);
var state_23416__$1 = state_23416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23416__$1,(11),out,inst_23398);
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_23432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23432[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_23432[(1)] = (1));

return statearr_23432;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_23416){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23416);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23433){var ex__21929__auto__ = e23433;
var statearr_23434_23449 = state_23416;
(statearr_23434_23449[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23416[(4)]))){
var statearr_23435_23450 = state_23416;
(statearr_23435_23450[(1)] = cljs.core.first((state_23416[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23451 = state_23416;
state_23416 = G__23451;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_23416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_23416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23436 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23436[(6)] = c__22000__auto___23438);

return statearr_23436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23453 = (function (f,ch,meta23454){
this.f = f;
this.ch = ch;
this.meta23454 = meta23454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23455,meta23454__$1){
var self__ = this;
var _23455__$1 = this;
return (new cljs.core.async.t_cljs$core$async23453(self__.f,self__.ch,meta23454__$1));
}));

(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23455){
var self__ = this;
var _23455__$1 = this;
return self__.meta23454;
}));

(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23456 = (function (f,ch,meta23454,_,fn1,meta23457){
this.f = f;
this.ch = ch;
this.meta23454 = meta23454;
this._ = _;
this.fn1 = fn1;
this.meta23457 = meta23457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23458,meta23457__$1){
var self__ = this;
var _23458__$1 = this;
return (new cljs.core.async.t_cljs$core$async23456(self__.f,self__.ch,self__.meta23454,self__._,self__.fn1,meta23457__$1));
}));

(cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23458){
var self__ = this;
var _23458__$1 = this;
return self__.meta23457;
}));

(cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__23452_SHARP_){
var G__23459 = (((p1__23452_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23452_SHARP_) : self__.f.call(null,p1__23452_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23459) : f1.call(null,G__23459));
});
}));

(cljs.core.async.t_cljs$core$async23456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23454,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async23453], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta23457], null);
}));

(cljs.core.async.t_cljs$core$async23456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23456");

(cljs.core.async.t_cljs$core$async23456.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async23456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23456.
 */
cljs.core.async.__GT_t_cljs$core$async23456 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23456(f__$1,ch__$1,meta23454__$1,___$2,fn1__$1,meta23457){
return (new cljs.core.async.t_cljs$core$async23456(f__$1,ch__$1,meta23454__$1,___$2,fn1__$1,meta23457));
});

}

return (new cljs.core.async.t_cljs$core$async23456(self__.f,self__.ch,self__.meta23454,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23460 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23460) : self__.f.call(null,G__23460));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async23453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23454], null);
}));

(cljs.core.async.t_cljs$core$async23453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23453");

(cljs.core.async.t_cljs$core$async23453.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async23453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23453.
 */
cljs.core.async.__GT_t_cljs$core$async23453 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23453(f__$1,ch__$1,meta23454){
return (new cljs.core.async.t_cljs$core$async23453(f__$1,ch__$1,meta23454));
});

}

return (new cljs.core.async.t_cljs$core$async23453(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23461 = (function (f,ch,meta23462){
this.f = f;
this.ch = ch;
this.meta23462 = meta23462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23463,meta23462__$1){
var self__ = this;
var _23463__$1 = this;
return (new cljs.core.async.t_cljs$core$async23461(self__.f,self__.ch,meta23462__$1));
}));

(cljs.core.async.t_cljs$core$async23461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23463){
var self__ = this;
var _23463__$1 = this;
return self__.meta23462;
}));

(cljs.core.async.t_cljs$core$async23461.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23461.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23461.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async23461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23462], null);
}));

(cljs.core.async.t_cljs$core$async23461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23461");

(cljs.core.async.t_cljs$core$async23461.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async23461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23461.
 */
cljs.core.async.__GT_t_cljs$core$async23461 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23461(f__$1,ch__$1,meta23462){
return (new cljs.core.async.t_cljs$core$async23461(f__$1,ch__$1,meta23462));
});

}

return (new cljs.core.async.t_cljs$core$async23461(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23464 = (function (p,ch,meta23465){
this.p = p;
this.ch = ch;
this.meta23465 = meta23465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23466,meta23465__$1){
var self__ = this;
var _23466__$1 = this;
return (new cljs.core.async.t_cljs$core$async23464(self__.p,self__.ch,meta23465__$1));
}));

(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23466){
var self__ = this;
var _23466__$1 = this;
return self__.meta23465;
}));

(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async23464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23465], null);
}));

(cljs.core.async.t_cljs$core$async23464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23464");

(cljs.core.async.t_cljs$core$async23464.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async23464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23464.
 */
cljs.core.async.__GT_t_cljs$core$async23464 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23464(p__$1,ch__$1,meta23465){
return (new cljs.core.async.t_cljs$core$async23464(p__$1,ch__$1,meta23465));
});

}

return (new cljs.core.async.t_cljs$core$async23464(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23468 = arguments.length;
switch (G__23468) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22000__auto___23509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23489){
var state_val_23490 = (state_23489[(1)]);
if((state_val_23490 === (7))){
var inst_23485 = (state_23489[(2)]);
var state_23489__$1 = state_23489;
var statearr_23491_23510 = state_23489__$1;
(statearr_23491_23510[(2)] = inst_23485);

(statearr_23491_23510[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23490 === (1))){
var state_23489__$1 = state_23489;
var statearr_23492_23511 = state_23489__$1;
(statearr_23492_23511[(2)] = null);

(statearr_23492_23511[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23490 === (4))){
var inst_23471 = (state_23489[(7)]);
var inst_23471__$1 = (state_23489[(2)]);
var inst_23472 = (inst_23471__$1 == null);
var state_23489__$1 = (function (){var statearr_23493 = state_23489;
(statearr_23493[(7)] = inst_23471__$1);

return statearr_23493;
})();
if(cljs.core.truth_(inst_23472)){
var statearr_23494_23512 = state_23489__$1;
(statearr_23494_23512[(1)] = (5));

} else {
var statearr_23495_23513 = state_23489__$1;
(statearr_23495_23513[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23490 === (6))){
var inst_23471 = (state_23489[(7)]);
var inst_23476 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23471) : p.call(null,inst_23471));
var state_23489__$1 = state_23489;
if(cljs.core.truth_(inst_23476)){
var statearr_23496_23514 = state_23489__$1;
(statearr_23496_23514[(1)] = (8));

} else {
var statearr_23497_23515 = state_23489__$1;
(statearr_23497_23515[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23490 === (3))){
var inst_23487 = (state_23489[(2)]);
var state_23489__$1 = state_23489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23489__$1,inst_23487);
} else {
if((state_val_23490 === (2))){
var state_23489__$1 = state_23489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23489__$1,(4),ch);
} else {
if((state_val_23490 === (11))){
var inst_23479 = (state_23489[(2)]);
var state_23489__$1 = state_23489;
var statearr_23498_23516 = state_23489__$1;
(statearr_23498_23516[(2)] = inst_23479);

(statearr_23498_23516[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23490 === (9))){
var state_23489__$1 = state_23489;
var statearr_23499_23517 = state_23489__$1;
(statearr_23499_23517[(2)] = null);

(statearr_23499_23517[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23490 === (5))){
var inst_23474 = cljs.core.async.close_BANG_(out);
var state_23489__$1 = state_23489;
var statearr_23500_23518 = state_23489__$1;
(statearr_23500_23518[(2)] = inst_23474);

(statearr_23500_23518[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23490 === (10))){
var inst_23482 = (state_23489[(2)]);
var state_23489__$1 = (function (){var statearr_23501 = state_23489;
(statearr_23501[(8)] = inst_23482);

return statearr_23501;
})();
var statearr_23502_23519 = state_23489__$1;
(statearr_23502_23519[(2)] = null);

(statearr_23502_23519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23490 === (8))){
var inst_23471 = (state_23489[(7)]);
var state_23489__$1 = state_23489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23489__$1,(11),out,inst_23471);
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_23503 = [null,null,null,null,null,null,null,null,null];
(statearr_23503[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_23503[(1)] = (1));

return statearr_23503;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_23489){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23489);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23504){var ex__21929__auto__ = e23504;
var statearr_23505_23520 = state_23489;
(statearr_23505_23520[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23489[(4)]))){
var statearr_23506_23521 = state_23489;
(statearr_23506_23521[(1)] = cljs.core.first((state_23489[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23522 = state_23489;
state_23489 = G__23522;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_23489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_23489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23507 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23507[(6)] = c__22000__auto___23509);

return statearr_23507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23524 = arguments.length;
switch (G__23524) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22000__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23587){
var state_val_23588 = (state_23587[(1)]);
if((state_val_23588 === (7))){
var inst_23583 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23589_23628 = state_23587__$1;
(statearr_23589_23628[(2)] = inst_23583);

(statearr_23589_23628[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (20))){
var inst_23553 = (state_23587[(7)]);
var inst_23564 = (state_23587[(2)]);
var inst_23565 = cljs.core.next(inst_23553);
var inst_23539 = inst_23565;
var inst_23540 = null;
var inst_23541 = (0);
var inst_23542 = (0);
var state_23587__$1 = (function (){var statearr_23590 = state_23587;
(statearr_23590[(8)] = inst_23540);

(statearr_23590[(9)] = inst_23541);

(statearr_23590[(10)] = inst_23542);

(statearr_23590[(11)] = inst_23539);

(statearr_23590[(12)] = inst_23564);

return statearr_23590;
})();
var statearr_23591_23629 = state_23587__$1;
(statearr_23591_23629[(2)] = null);

(statearr_23591_23629[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (1))){
var state_23587__$1 = state_23587;
var statearr_23592_23630 = state_23587__$1;
(statearr_23592_23630[(2)] = null);

(statearr_23592_23630[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (4))){
var inst_23528 = (state_23587[(13)]);
var inst_23528__$1 = (state_23587[(2)]);
var inst_23529 = (inst_23528__$1 == null);
var state_23587__$1 = (function (){var statearr_23593 = state_23587;
(statearr_23593[(13)] = inst_23528__$1);

return statearr_23593;
})();
if(cljs.core.truth_(inst_23529)){
var statearr_23594_23631 = state_23587__$1;
(statearr_23594_23631[(1)] = (5));

} else {
var statearr_23595_23632 = state_23587__$1;
(statearr_23595_23632[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (15))){
var state_23587__$1 = state_23587;
var statearr_23599_23633 = state_23587__$1;
(statearr_23599_23633[(2)] = null);

(statearr_23599_23633[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (21))){
var state_23587__$1 = state_23587;
var statearr_23600_23634 = state_23587__$1;
(statearr_23600_23634[(2)] = null);

(statearr_23600_23634[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (13))){
var inst_23540 = (state_23587[(8)]);
var inst_23541 = (state_23587[(9)]);
var inst_23542 = (state_23587[(10)]);
var inst_23539 = (state_23587[(11)]);
var inst_23549 = (state_23587[(2)]);
var inst_23550 = (inst_23542 + (1));
var tmp23596 = inst_23540;
var tmp23597 = inst_23541;
var tmp23598 = inst_23539;
var inst_23539__$1 = tmp23598;
var inst_23540__$1 = tmp23596;
var inst_23541__$1 = tmp23597;
var inst_23542__$1 = inst_23550;
var state_23587__$1 = (function (){var statearr_23601 = state_23587;
(statearr_23601[(8)] = inst_23540__$1);

(statearr_23601[(9)] = inst_23541__$1);

(statearr_23601[(14)] = inst_23549);

(statearr_23601[(10)] = inst_23542__$1);

(statearr_23601[(11)] = inst_23539__$1);

return statearr_23601;
})();
var statearr_23602_23635 = state_23587__$1;
(statearr_23602_23635[(2)] = null);

(statearr_23602_23635[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (22))){
var state_23587__$1 = state_23587;
var statearr_23603_23636 = state_23587__$1;
(statearr_23603_23636[(2)] = null);

(statearr_23603_23636[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (6))){
var inst_23528 = (state_23587[(13)]);
var inst_23537 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23528) : f.call(null,inst_23528));
var inst_23538 = cljs.core.seq(inst_23537);
var inst_23539 = inst_23538;
var inst_23540 = null;
var inst_23541 = (0);
var inst_23542 = (0);
var state_23587__$1 = (function (){var statearr_23604 = state_23587;
(statearr_23604[(8)] = inst_23540);

(statearr_23604[(9)] = inst_23541);

(statearr_23604[(10)] = inst_23542);

(statearr_23604[(11)] = inst_23539);

return statearr_23604;
})();
var statearr_23605_23637 = state_23587__$1;
(statearr_23605_23637[(2)] = null);

(statearr_23605_23637[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (17))){
var inst_23553 = (state_23587[(7)]);
var inst_23557 = cljs.core.chunk_first(inst_23553);
var inst_23558 = cljs.core.chunk_rest(inst_23553);
var inst_23559 = cljs.core.count(inst_23557);
var inst_23539 = inst_23558;
var inst_23540 = inst_23557;
var inst_23541 = inst_23559;
var inst_23542 = (0);
var state_23587__$1 = (function (){var statearr_23606 = state_23587;
(statearr_23606[(8)] = inst_23540);

(statearr_23606[(9)] = inst_23541);

(statearr_23606[(10)] = inst_23542);

(statearr_23606[(11)] = inst_23539);

return statearr_23606;
})();
var statearr_23607_23638 = state_23587__$1;
(statearr_23607_23638[(2)] = null);

(statearr_23607_23638[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (3))){
var inst_23585 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23587__$1,inst_23585);
} else {
if((state_val_23588 === (12))){
var inst_23573 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23608_23639 = state_23587__$1;
(statearr_23608_23639[(2)] = inst_23573);

(statearr_23608_23639[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (2))){
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23587__$1,(4),in$);
} else {
if((state_val_23588 === (23))){
var inst_23581 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23609_23640 = state_23587__$1;
(statearr_23609_23640[(2)] = inst_23581);

(statearr_23609_23640[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (19))){
var inst_23568 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23610_23641 = state_23587__$1;
(statearr_23610_23641[(2)] = inst_23568);

(statearr_23610_23641[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (11))){
var inst_23553 = (state_23587[(7)]);
var inst_23539 = (state_23587[(11)]);
var inst_23553__$1 = cljs.core.seq(inst_23539);
var state_23587__$1 = (function (){var statearr_23611 = state_23587;
(statearr_23611[(7)] = inst_23553__$1);

return statearr_23611;
})();
if(inst_23553__$1){
var statearr_23612_23642 = state_23587__$1;
(statearr_23612_23642[(1)] = (14));

} else {
var statearr_23613_23643 = state_23587__$1;
(statearr_23613_23643[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (9))){
var inst_23575 = (state_23587[(2)]);
var inst_23576 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23587__$1 = (function (){var statearr_23614 = state_23587;
(statearr_23614[(15)] = inst_23575);

return statearr_23614;
})();
if(cljs.core.truth_(inst_23576)){
var statearr_23615_23644 = state_23587__$1;
(statearr_23615_23644[(1)] = (21));

} else {
var statearr_23616_23645 = state_23587__$1;
(statearr_23616_23645[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (5))){
var inst_23531 = cljs.core.async.close_BANG_(out);
var state_23587__$1 = state_23587;
var statearr_23617_23646 = state_23587__$1;
(statearr_23617_23646[(2)] = inst_23531);

(statearr_23617_23646[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (14))){
var inst_23553 = (state_23587[(7)]);
var inst_23555 = cljs.core.chunked_seq_QMARK_(inst_23553);
var state_23587__$1 = state_23587;
if(inst_23555){
var statearr_23618_23647 = state_23587__$1;
(statearr_23618_23647[(1)] = (17));

} else {
var statearr_23619_23648 = state_23587__$1;
(statearr_23619_23648[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (16))){
var inst_23571 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23620_23649 = state_23587__$1;
(statearr_23620_23649[(2)] = inst_23571);

(statearr_23620_23649[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23588 === (10))){
var inst_23540 = (state_23587[(8)]);
var inst_23542 = (state_23587[(10)]);
var inst_23547 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23540,inst_23542);
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23587__$1,(13),out,inst_23547);
} else {
if((state_val_23588 === (18))){
var inst_23553 = (state_23587[(7)]);
var inst_23562 = cljs.core.first(inst_23553);
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23587__$1,(20),out,inst_23562);
} else {
if((state_val_23588 === (8))){
var inst_23541 = (state_23587[(9)]);
var inst_23542 = (state_23587[(10)]);
var inst_23544 = (inst_23542 < inst_23541);
var inst_23545 = inst_23544;
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23545)){
var statearr_23621_23650 = state_23587__$1;
(statearr_23621_23650[(1)] = (10));

} else {
var statearr_23622_23651 = state_23587__$1;
(statearr_23622_23651[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mapcat_STAR__$_state_machine__21926__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21926__auto____0 = (function (){
var statearr_23623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23623[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21926__auto__);

(statearr_23623[(1)] = (1));

return statearr_23623;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21926__auto____1 = (function (state_23587){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23587);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23624){var ex__21929__auto__ = e23624;
var statearr_23625_23652 = state_23587;
(statearr_23625_23652[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23587[(4)]))){
var statearr_23626_23653 = state_23587;
(statearr_23626_23653[(1)] = cljs.core.first((state_23587[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23654 = state_23587;
state_23587 = G__23654;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21926__auto__ = function(state_23587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21926__auto____1.call(this,state_23587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21926__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21926__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23627 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23627[(6)] = c__22000__auto__);

return statearr_23627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));

return c__22000__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23656 = arguments.length;
switch (G__23656) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23659 = arguments.length;
switch (G__23659) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23662 = arguments.length;
switch (G__23662) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22000__auto___23710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23686){
var state_val_23687 = (state_23686[(1)]);
if((state_val_23687 === (7))){
var inst_23681 = (state_23686[(2)]);
var state_23686__$1 = state_23686;
var statearr_23688_23711 = state_23686__$1;
(statearr_23688_23711[(2)] = inst_23681);

(statearr_23688_23711[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23687 === (1))){
var inst_23663 = null;
var state_23686__$1 = (function (){var statearr_23689 = state_23686;
(statearr_23689[(7)] = inst_23663);

return statearr_23689;
})();
var statearr_23690_23712 = state_23686__$1;
(statearr_23690_23712[(2)] = null);

(statearr_23690_23712[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23687 === (4))){
var inst_23666 = (state_23686[(8)]);
var inst_23666__$1 = (state_23686[(2)]);
var inst_23667 = (inst_23666__$1 == null);
var inst_23668 = cljs.core.not(inst_23667);
var state_23686__$1 = (function (){var statearr_23691 = state_23686;
(statearr_23691[(8)] = inst_23666__$1);

return statearr_23691;
})();
if(inst_23668){
var statearr_23692_23713 = state_23686__$1;
(statearr_23692_23713[(1)] = (5));

} else {
var statearr_23693_23714 = state_23686__$1;
(statearr_23693_23714[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23687 === (6))){
var state_23686__$1 = state_23686;
var statearr_23694_23715 = state_23686__$1;
(statearr_23694_23715[(2)] = null);

(statearr_23694_23715[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23687 === (3))){
var inst_23683 = (state_23686[(2)]);
var inst_23684 = cljs.core.async.close_BANG_(out);
var state_23686__$1 = (function (){var statearr_23695 = state_23686;
(statearr_23695[(9)] = inst_23683);

return statearr_23695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23686__$1,inst_23684);
} else {
if((state_val_23687 === (2))){
var state_23686__$1 = state_23686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23686__$1,(4),ch);
} else {
if((state_val_23687 === (11))){
var inst_23666 = (state_23686[(8)]);
var inst_23675 = (state_23686[(2)]);
var inst_23663 = inst_23666;
var state_23686__$1 = (function (){var statearr_23696 = state_23686;
(statearr_23696[(7)] = inst_23663);

(statearr_23696[(10)] = inst_23675);

return statearr_23696;
})();
var statearr_23697_23716 = state_23686__$1;
(statearr_23697_23716[(2)] = null);

(statearr_23697_23716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23687 === (9))){
var inst_23666 = (state_23686[(8)]);
var state_23686__$1 = state_23686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23686__$1,(11),out,inst_23666);
} else {
if((state_val_23687 === (5))){
var inst_23663 = (state_23686[(7)]);
var inst_23666 = (state_23686[(8)]);
var inst_23670 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23666,inst_23663);
var state_23686__$1 = state_23686;
if(inst_23670){
var statearr_23699_23717 = state_23686__$1;
(statearr_23699_23717[(1)] = (8));

} else {
var statearr_23700_23718 = state_23686__$1;
(statearr_23700_23718[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23687 === (10))){
var inst_23678 = (state_23686[(2)]);
var state_23686__$1 = state_23686;
var statearr_23701_23719 = state_23686__$1;
(statearr_23701_23719[(2)] = inst_23678);

(statearr_23701_23719[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23687 === (8))){
var inst_23663 = (state_23686[(7)]);
var tmp23698 = inst_23663;
var inst_23663__$1 = tmp23698;
var state_23686__$1 = (function (){var statearr_23702 = state_23686;
(statearr_23702[(7)] = inst_23663__$1);

return statearr_23702;
})();
var statearr_23703_23720 = state_23686__$1;
(statearr_23703_23720[(2)] = null);

(statearr_23703_23720[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_23704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23704[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_23704[(1)] = (1));

return statearr_23704;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_23686){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23686);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23705){var ex__21929__auto__ = e23705;
var statearr_23706_23721 = state_23686;
(statearr_23706_23721[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23686[(4)]))){
var statearr_23707_23722 = state_23686;
(statearr_23707_23722[(1)] = cljs.core.first((state_23686[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23723 = state_23686;
state_23686 = G__23723;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_23686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_23686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23708 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23708[(6)] = c__22000__auto___23710);

return statearr_23708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23725 = arguments.length;
switch (G__23725) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22000__auto___23792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23763){
var state_val_23764 = (state_23763[(1)]);
if((state_val_23764 === (7))){
var inst_23759 = (state_23763[(2)]);
var state_23763__$1 = state_23763;
var statearr_23765_23793 = state_23763__$1;
(statearr_23765_23793[(2)] = inst_23759);

(statearr_23765_23793[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (1))){
var inst_23726 = (new Array(n));
var inst_23727 = inst_23726;
var inst_23728 = (0);
var state_23763__$1 = (function (){var statearr_23766 = state_23763;
(statearr_23766[(7)] = inst_23727);

(statearr_23766[(8)] = inst_23728);

return statearr_23766;
})();
var statearr_23767_23794 = state_23763__$1;
(statearr_23767_23794[(2)] = null);

(statearr_23767_23794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (4))){
var inst_23731 = (state_23763[(9)]);
var inst_23731__$1 = (state_23763[(2)]);
var inst_23732 = (inst_23731__$1 == null);
var inst_23733 = cljs.core.not(inst_23732);
var state_23763__$1 = (function (){var statearr_23768 = state_23763;
(statearr_23768[(9)] = inst_23731__$1);

return statearr_23768;
})();
if(inst_23733){
var statearr_23769_23795 = state_23763__$1;
(statearr_23769_23795[(1)] = (5));

} else {
var statearr_23770_23796 = state_23763__$1;
(statearr_23770_23796[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (15))){
var inst_23753 = (state_23763[(2)]);
var state_23763__$1 = state_23763;
var statearr_23771_23797 = state_23763__$1;
(statearr_23771_23797[(2)] = inst_23753);

(statearr_23771_23797[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (13))){
var state_23763__$1 = state_23763;
var statearr_23772_23798 = state_23763__$1;
(statearr_23772_23798[(2)] = null);

(statearr_23772_23798[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (6))){
var inst_23728 = (state_23763[(8)]);
var inst_23749 = (inst_23728 > (0));
var state_23763__$1 = state_23763;
if(cljs.core.truth_(inst_23749)){
var statearr_23773_23799 = state_23763__$1;
(statearr_23773_23799[(1)] = (12));

} else {
var statearr_23774_23800 = state_23763__$1;
(statearr_23774_23800[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (3))){
var inst_23761 = (state_23763[(2)]);
var state_23763__$1 = state_23763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23763__$1,inst_23761);
} else {
if((state_val_23764 === (12))){
var inst_23727 = (state_23763[(7)]);
var inst_23751 = cljs.core.vec(inst_23727);
var state_23763__$1 = state_23763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23763__$1,(15),out,inst_23751);
} else {
if((state_val_23764 === (2))){
var state_23763__$1 = state_23763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23763__$1,(4),ch);
} else {
if((state_val_23764 === (11))){
var inst_23743 = (state_23763[(2)]);
var inst_23744 = (new Array(n));
var inst_23727 = inst_23744;
var inst_23728 = (0);
var state_23763__$1 = (function (){var statearr_23775 = state_23763;
(statearr_23775[(7)] = inst_23727);

(statearr_23775[(10)] = inst_23743);

(statearr_23775[(8)] = inst_23728);

return statearr_23775;
})();
var statearr_23776_23801 = state_23763__$1;
(statearr_23776_23801[(2)] = null);

(statearr_23776_23801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (9))){
var inst_23727 = (state_23763[(7)]);
var inst_23741 = cljs.core.vec(inst_23727);
var state_23763__$1 = state_23763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23763__$1,(11),out,inst_23741);
} else {
if((state_val_23764 === (5))){
var inst_23736 = (state_23763[(11)]);
var inst_23727 = (state_23763[(7)]);
var inst_23731 = (state_23763[(9)]);
var inst_23728 = (state_23763[(8)]);
var inst_23735 = (inst_23727[inst_23728] = inst_23731);
var inst_23736__$1 = (inst_23728 + (1));
var inst_23737 = (inst_23736__$1 < n);
var state_23763__$1 = (function (){var statearr_23777 = state_23763;
(statearr_23777[(11)] = inst_23736__$1);

(statearr_23777[(12)] = inst_23735);

return statearr_23777;
})();
if(cljs.core.truth_(inst_23737)){
var statearr_23778_23802 = state_23763__$1;
(statearr_23778_23802[(1)] = (8));

} else {
var statearr_23779_23803 = state_23763__$1;
(statearr_23779_23803[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (14))){
var inst_23756 = (state_23763[(2)]);
var inst_23757 = cljs.core.async.close_BANG_(out);
var state_23763__$1 = (function (){var statearr_23781 = state_23763;
(statearr_23781[(13)] = inst_23756);

return statearr_23781;
})();
var statearr_23782_23804 = state_23763__$1;
(statearr_23782_23804[(2)] = inst_23757);

(statearr_23782_23804[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (10))){
var inst_23747 = (state_23763[(2)]);
var state_23763__$1 = state_23763;
var statearr_23783_23805 = state_23763__$1;
(statearr_23783_23805[(2)] = inst_23747);

(statearr_23783_23805[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23764 === (8))){
var inst_23736 = (state_23763[(11)]);
var inst_23727 = (state_23763[(7)]);
var tmp23780 = inst_23727;
var inst_23727__$1 = tmp23780;
var inst_23728 = inst_23736;
var state_23763__$1 = (function (){var statearr_23784 = state_23763;
(statearr_23784[(7)] = inst_23727__$1);

(statearr_23784[(8)] = inst_23728);

return statearr_23784;
})();
var statearr_23785_23806 = state_23763__$1;
(statearr_23785_23806[(2)] = null);

(statearr_23785_23806[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_23786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23786[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_23786[(1)] = (1));

return statearr_23786;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_23763){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23763);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23787){var ex__21929__auto__ = e23787;
var statearr_23788_23807 = state_23763;
(statearr_23788_23807[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23763[(4)]))){
var statearr_23789_23808 = state_23763;
(statearr_23789_23808[(1)] = cljs.core.first((state_23763[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23809 = state_23763;
state_23763 = G__23809;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_23763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_23763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23790 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23790[(6)] = c__22000__auto___23792);

return statearr_23790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23811 = arguments.length;
switch (G__23811) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22000__auto___23882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22001__auto__ = (function (){var switch__21925__auto__ = (function (state_23853){
var state_val_23854 = (state_23853[(1)]);
if((state_val_23854 === (7))){
var inst_23849 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
var statearr_23855_23883 = state_23853__$1;
(statearr_23855_23883[(2)] = inst_23849);

(statearr_23855_23883[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (1))){
var inst_23812 = [];
var inst_23813 = inst_23812;
var inst_23814 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_23853__$1 = (function (){var statearr_23856 = state_23853;
(statearr_23856[(7)] = inst_23813);

(statearr_23856[(8)] = inst_23814);

return statearr_23856;
})();
var statearr_23857_23884 = state_23853__$1;
(statearr_23857_23884[(2)] = null);

(statearr_23857_23884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (4))){
var inst_23817 = (state_23853[(9)]);
var inst_23817__$1 = (state_23853[(2)]);
var inst_23818 = (inst_23817__$1 == null);
var inst_23819 = cljs.core.not(inst_23818);
var state_23853__$1 = (function (){var statearr_23858 = state_23853;
(statearr_23858[(9)] = inst_23817__$1);

return statearr_23858;
})();
if(inst_23819){
var statearr_23859_23885 = state_23853__$1;
(statearr_23859_23885[(1)] = (5));

} else {
var statearr_23860_23886 = state_23853__$1;
(statearr_23860_23886[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (15))){
var inst_23843 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
var statearr_23861_23887 = state_23853__$1;
(statearr_23861_23887[(2)] = inst_23843);

(statearr_23861_23887[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (13))){
var state_23853__$1 = state_23853;
var statearr_23862_23888 = state_23853__$1;
(statearr_23862_23888[(2)] = null);

(statearr_23862_23888[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (6))){
var inst_23813 = (state_23853[(7)]);
var inst_23838 = inst_23813.length;
var inst_23839 = (inst_23838 > (0));
var state_23853__$1 = state_23853;
if(cljs.core.truth_(inst_23839)){
var statearr_23863_23889 = state_23853__$1;
(statearr_23863_23889[(1)] = (12));

} else {
var statearr_23864_23890 = state_23853__$1;
(statearr_23864_23890[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (3))){
var inst_23851 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23853__$1,inst_23851);
} else {
if((state_val_23854 === (12))){
var inst_23813 = (state_23853[(7)]);
var inst_23841 = cljs.core.vec(inst_23813);
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23853__$1,(15),out,inst_23841);
} else {
if((state_val_23854 === (2))){
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23853__$1,(4),ch);
} else {
if((state_val_23854 === (11))){
var inst_23817 = (state_23853[(9)]);
var inst_23821 = (state_23853[(10)]);
var inst_23831 = (state_23853[(2)]);
var inst_23832 = [];
var inst_23833 = inst_23832.push(inst_23817);
var inst_23813 = inst_23832;
var inst_23814 = inst_23821;
var state_23853__$1 = (function (){var statearr_23865 = state_23853;
(statearr_23865[(7)] = inst_23813);

(statearr_23865[(11)] = inst_23833);

(statearr_23865[(8)] = inst_23814);

(statearr_23865[(12)] = inst_23831);

return statearr_23865;
})();
var statearr_23866_23891 = state_23853__$1;
(statearr_23866_23891[(2)] = null);

(statearr_23866_23891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (9))){
var inst_23813 = (state_23853[(7)]);
var inst_23829 = cljs.core.vec(inst_23813);
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23853__$1,(11),out,inst_23829);
} else {
if((state_val_23854 === (5))){
var inst_23814 = (state_23853[(8)]);
var inst_23817 = (state_23853[(9)]);
var inst_23821 = (state_23853[(10)]);
var inst_23821__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23817) : f.call(null,inst_23817));
var inst_23822 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23821__$1,inst_23814);
var inst_23823 = cljs.core.keyword_identical_QMARK_(inst_23814,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_23824 = ((inst_23822) || (inst_23823));
var state_23853__$1 = (function (){var statearr_23867 = state_23853;
(statearr_23867[(10)] = inst_23821__$1);

return statearr_23867;
})();
if(cljs.core.truth_(inst_23824)){
var statearr_23868_23892 = state_23853__$1;
(statearr_23868_23892[(1)] = (8));

} else {
var statearr_23869_23893 = state_23853__$1;
(statearr_23869_23893[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (14))){
var inst_23846 = (state_23853[(2)]);
var inst_23847 = cljs.core.async.close_BANG_(out);
var state_23853__$1 = (function (){var statearr_23871 = state_23853;
(statearr_23871[(13)] = inst_23846);

return statearr_23871;
})();
var statearr_23872_23894 = state_23853__$1;
(statearr_23872_23894[(2)] = inst_23847);

(statearr_23872_23894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (10))){
var inst_23836 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
var statearr_23873_23895 = state_23853__$1;
(statearr_23873_23895[(2)] = inst_23836);

(statearr_23873_23895[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23854 === (8))){
var inst_23813 = (state_23853[(7)]);
var inst_23817 = (state_23853[(9)]);
var inst_23821 = (state_23853[(10)]);
var inst_23826 = inst_23813.push(inst_23817);
var tmp23870 = inst_23813;
var inst_23813__$1 = tmp23870;
var inst_23814 = inst_23821;
var state_23853__$1 = (function (){var statearr_23874 = state_23853;
(statearr_23874[(7)] = inst_23813__$1);

(statearr_23874[(8)] = inst_23814);

(statearr_23874[(14)] = inst_23826);

return statearr_23874;
})();
var statearr_23875_23896 = state_23853__$1;
(statearr_23875_23896[(2)] = null);

(statearr_23875_23896[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__21926__auto__ = null;
var cljs$core$async$state_machine__21926__auto____0 = (function (){
var statearr_23876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23876[(0)] = cljs$core$async$state_machine__21926__auto__);

(statearr_23876[(1)] = (1));

return statearr_23876;
});
var cljs$core$async$state_machine__21926__auto____1 = (function (state_23853){
while(true){
var ret_value__21927__auto__ = (function (){try{while(true){
var result__21928__auto__ = switch__21925__auto__(state_23853);
if(cljs.core.keyword_identical_QMARK_(result__21928__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21928__auto__;
}
break;
}
}catch (e23877){var ex__21929__auto__ = e23877;
var statearr_23878_23897 = state_23853;
(statearr_23878_23897[(2)] = ex__21929__auto__);


if(cljs.core.seq((state_23853[(4)]))){
var statearr_23879_23898 = state_23853;
(statearr_23879_23898[(1)] = cljs.core.first((state_23853[(4)])));

} else {
throw ex__21929__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21927__auto__,cljs.core.cst$kw$recur)){
var G__23899 = state_23853;
state_23853 = G__23899;
continue;
} else {
return ret_value__21927__auto__;
}
break;
}
});
cljs$core$async$state_machine__21926__auto__ = function(state_23853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21926__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21926__auto____1.call(this,state_23853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21926__auto____0;
cljs$core$async$state_machine__21926__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21926__auto____1;
return cljs$core$async$state_machine__21926__auto__;
})()
})();
var state__22002__auto__ = (function (){var statearr_23880 = (f__22001__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22001__auto__.cljs$core$IFn$_invoke$arity$0() : f__22001__auto__.call(null));
(statearr_23880[(6)] = c__22000__auto___23882);

return statearr_23880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22002__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

