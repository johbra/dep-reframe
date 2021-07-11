// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
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
var G__17166 = arguments.length;
switch (G__17166) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17167 = (function (f,blockable,meta17168){
this.f = f;
this.blockable = blockable;
this.meta17168 = meta17168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17169,meta17168__$1){
var self__ = this;
var _17169__$1 = this;
return (new cljs.core.async.t_cljs$core$async17167(self__.f,self__.blockable,meta17168__$1));
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17169){
var self__ = this;
var _17169__$1 = this;
return self__.meta17168;
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17168], null);
}));

(cljs.core.async.t_cljs$core$async17167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17167");

(cljs.core.async.t_cljs$core$async17167.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17167.
 */
cljs.core.async.__GT_t_cljs$core$async17167 = (function cljs$core$async$__GT_t_cljs$core$async17167(f__$1,blockable__$1,meta17168){
return (new cljs.core.async.t_cljs$core$async17167(f__$1,blockable__$1,meta17168));
});

}

return (new cljs.core.async.t_cljs$core$async17167(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17173 = arguments.length;
switch (G__17173) {
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
var G__17176 = arguments.length;
switch (G__17176) {
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
var G__17179 = arguments.length;
switch (G__17179) {
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
var val_17181 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17181) : fn1.call(null,val_17181));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17181) : fn1.call(null,val_17181));
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
var G__17183 = arguments.length;
switch (G__17183) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___17185 = n;
var x_17186 = (0);
while(true){
if((x_17186 < n__4613__auto___17185)){
(a[x_17186] = x_17186);

var G__17187 = (x_17186 + (1));
x_17186 = G__17187;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17188 = (function (flag,meta17189){
this.flag = flag;
this.meta17189 = meta17189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17190,meta17189__$1){
var self__ = this;
var _17190__$1 = this;
return (new cljs.core.async.t_cljs$core$async17188(self__.flag,meta17189__$1));
}));

(cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17190){
var self__ = this;
var _17190__$1 = this;
return self__.meta17189;
}));

(cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17189], null);
}));

(cljs.core.async.t_cljs$core$async17188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17188");

(cljs.core.async.t_cljs$core$async17188.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17188.
 */
cljs.core.async.__GT_t_cljs$core$async17188 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17188(flag__$1,meta17189){
return (new cljs.core.async.t_cljs$core$async17188(flag__$1,meta17189));
});

}

return (new cljs.core.async.t_cljs$core$async17188(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17191 = (function (flag,cb,meta17192){
this.flag = flag;
this.cb = cb;
this.meta17192 = meta17192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17193,meta17192__$1){
var self__ = this;
var _17193__$1 = this;
return (new cljs.core.async.t_cljs$core$async17191(self__.flag,self__.cb,meta17192__$1));
}));

(cljs.core.async.t_cljs$core$async17191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17193){
var self__ = this;
var _17193__$1 = this;
return self__.meta17192;
}));

(cljs.core.async.t_cljs$core$async17191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17192], null);
}));

(cljs.core.async.t_cljs$core$async17191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17191");

(cljs.core.async.t_cljs$core$async17191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17191.
 */
cljs.core.async.__GT_t_cljs$core$async17191 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17191(flag__$1,cb__$1,meta17192){
return (new cljs.core.async.t_cljs$core$async17191(flag__$1,cb__$1,meta17192));
});

}

return (new cljs.core.async.t_cljs$core$async17191(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17194_SHARP_){
var G__17196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17194_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17196) : fret.call(null,G__17196));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17195_SHARP_){
var G__17197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17195_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17197) : fret.call(null,G__17197));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17198 = (i + (1));
i = G__17198;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___17204 = arguments.length;
var i__4737__auto___17205 = (0);
while(true){
if((i__4737__auto___17205 < len__4736__auto___17204)){
args__4742__auto__.push((arguments[i__4737__auto___17205]));

var G__17206 = (i__4737__auto___17205 + (1));
i__4737__auto___17205 = G__17206;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17201){
var map__17202 = p__17201;
var map__17202__$1 = (((((!((map__17202 == null))))?(((((map__17202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17202):map__17202);
var opts = map__17202__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17199){
var G__17200 = cljs.core.first(seq17199);
var seq17199__$1 = cljs.core.next(seq17199);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17200,seq17199__$1);
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
var G__17208 = arguments.length;
switch (G__17208) {
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
var c__17106__auto___17255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17232){
var state_val_17233 = (state_17232[(1)]);
if((state_val_17233 === (7))){
var inst_17228 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
var statearr_17234_17256 = state_17232__$1;
(statearr_17234_17256[(2)] = inst_17228);

(statearr_17234_17256[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (1))){
var state_17232__$1 = state_17232;
var statearr_17235_17257 = state_17232__$1;
(statearr_17235_17257[(2)] = null);

(statearr_17235_17257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (4))){
var inst_17211 = (state_17232[(7)]);
var inst_17211__$1 = (state_17232[(2)]);
var inst_17212 = (inst_17211__$1 == null);
var state_17232__$1 = (function (){var statearr_17236 = state_17232;
(statearr_17236[(7)] = inst_17211__$1);

return statearr_17236;
})();
if(cljs.core.truth_(inst_17212)){
var statearr_17237_17258 = state_17232__$1;
(statearr_17237_17258[(1)] = (5));

} else {
var statearr_17238_17259 = state_17232__$1;
(statearr_17238_17259[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (13))){
var state_17232__$1 = state_17232;
var statearr_17239_17260 = state_17232__$1;
(statearr_17239_17260[(2)] = null);

(statearr_17239_17260[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (6))){
var inst_17211 = (state_17232[(7)]);
var state_17232__$1 = state_17232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17232__$1,(11),to,inst_17211);
} else {
if((state_val_17233 === (3))){
var inst_17230 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17232__$1,inst_17230);
} else {
if((state_val_17233 === (12))){
var state_17232__$1 = state_17232;
var statearr_17240_17261 = state_17232__$1;
(statearr_17240_17261[(2)] = null);

(statearr_17240_17261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (2))){
var state_17232__$1 = state_17232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17232__$1,(4),from);
} else {
if((state_val_17233 === (11))){
var inst_17221 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
if(cljs.core.truth_(inst_17221)){
var statearr_17241_17262 = state_17232__$1;
(statearr_17241_17262[(1)] = (12));

} else {
var statearr_17242_17263 = state_17232__$1;
(statearr_17242_17263[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (9))){
var state_17232__$1 = state_17232;
var statearr_17243_17264 = state_17232__$1;
(statearr_17243_17264[(2)] = null);

(statearr_17243_17264[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (5))){
var state_17232__$1 = state_17232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17244_17265 = state_17232__$1;
(statearr_17244_17265[(1)] = (8));

} else {
var statearr_17245_17266 = state_17232__$1;
(statearr_17245_17266[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (14))){
var inst_17226 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
var statearr_17246_17267 = state_17232__$1;
(statearr_17246_17267[(2)] = inst_17226);

(statearr_17246_17267[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (10))){
var inst_17218 = (state_17232[(2)]);
var state_17232__$1 = state_17232;
var statearr_17247_17268 = state_17232__$1;
(statearr_17247_17268[(2)] = inst_17218);

(statearr_17247_17268[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17233 === (8))){
var inst_17215 = cljs.core.async.close_BANG_(to);
var state_17232__$1 = state_17232;
var statearr_17248_17269 = state_17232__$1;
(statearr_17248_17269[(2)] = inst_17215);

(statearr_17248_17269[(1)] = (10));


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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_17249 = [null,null,null,null,null,null,null,null];
(statearr_17249[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_17249[(1)] = (1));

return statearr_17249;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_17232){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17232);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17250){var ex__17035__auto__ = e17250;
var statearr_17251_17270 = state_17232;
(statearr_17251_17270[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17232[(4)]))){
var statearr_17252_17271 = state_17232;
(statearr_17252_17271[(1)] = cljs.core.first((state_17232[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17272 = state_17232;
state_17232 = G__17272;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_17232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_17232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17253 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17253[(6)] = c__17106__auto___17255);

return statearr_17253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
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
var process = (function (p__17273){
var vec__17274 = p__17273;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17274,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17274,(1),null);
var job = vec__17274;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17106__auto___17450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17281){
var state_val_17282 = (state_17281[(1)]);
if((state_val_17282 === (1))){
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(2),res,v);
} else {
if((state_val_17282 === (2))){
var inst_17278 = (state_17281[(2)]);
var inst_17279 = cljs.core.async.close_BANG_(res);
var state_17281__$1 = (function (){var statearr_17283 = state_17281;
(statearr_17283[(7)] = inst_17278);

return statearr_17283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17281__$1,inst_17279);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0 = (function (){
var statearr_17284 = [null,null,null,null,null,null,null,null];
(statearr_17284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__);

(statearr_17284[(1)] = (1));

return statearr_17284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1 = (function (state_17281){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17281);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17285){var ex__17035__auto__ = e17285;
var statearr_17286_17451 = state_17281;
(statearr_17286_17451[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17281[(4)]))){
var statearr_17287_17452 = state_17281;
(statearr_17287_17452[(1)] = cljs.core.first((state_17281[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17453 = state_17281;
state_17281 = G__17453;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = function(state_17281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1.call(this,state_17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17288 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17288[(6)] = c__17106__auto___17450);

return statearr_17288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17289){
var vec__17290 = p__17289;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290,(1),null);
var job = vec__17290;
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
var n__4613__auto___17454 = n;
var __17455 = (0);
while(true){
if((__17455 < n__4613__auto___17454)){
var G__17293_17456 = type;
var G__17293_17457__$1 = (((G__17293_17456 instanceof cljs.core.Keyword))?G__17293_17456.fqn:null);
switch (G__17293_17457__$1) {
case "compute":
var c__17106__auto___17459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17455,c__17106__auto___17459,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async){
return (function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = ((function (__17455,c__17106__auto___17459,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async){
return (function (state_17306){
var state_val_17307 = (state_17306[(1)]);
if((state_val_17307 === (1))){
var state_17306__$1 = state_17306;
var statearr_17308_17460 = state_17306__$1;
(statearr_17308_17460[(2)] = null);

(statearr_17308_17460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17307 === (2))){
var state_17306__$1 = state_17306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17306__$1,(4),jobs);
} else {
if((state_val_17307 === (3))){
var inst_17304 = (state_17306[(2)]);
var state_17306__$1 = state_17306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17306__$1,inst_17304);
} else {
if((state_val_17307 === (4))){
var inst_17296 = (state_17306[(2)]);
var inst_17297 = process(inst_17296);
var state_17306__$1 = state_17306;
if(cljs.core.truth_(inst_17297)){
var statearr_17309_17461 = state_17306__$1;
(statearr_17309_17461[(1)] = (5));

} else {
var statearr_17310_17462 = state_17306__$1;
(statearr_17310_17462[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17307 === (5))){
var state_17306__$1 = state_17306;
var statearr_17311_17463 = state_17306__$1;
(statearr_17311_17463[(2)] = null);

(statearr_17311_17463[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17307 === (6))){
var state_17306__$1 = state_17306;
var statearr_17312_17464 = state_17306__$1;
(statearr_17312_17464[(2)] = null);

(statearr_17312_17464[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17307 === (7))){
var inst_17302 = (state_17306[(2)]);
var state_17306__$1 = state_17306;
var statearr_17313_17465 = state_17306__$1;
(statearr_17313_17465[(2)] = inst_17302);

(statearr_17313_17465[(1)] = (3));


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
});})(__17455,c__17106__auto___17459,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async))
;
return ((function (__17455,switch__17031__auto__,c__17106__auto___17459,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0 = (function (){
var statearr_17314 = [null,null,null,null,null,null,null];
(statearr_17314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__);

(statearr_17314[(1)] = (1));

return statearr_17314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1 = (function (state_17306){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17306);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17315){var ex__17035__auto__ = e17315;
var statearr_17316_17466 = state_17306;
(statearr_17316_17466[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17306[(4)]))){
var statearr_17317_17467 = state_17306;
(statearr_17317_17467[(1)] = cljs.core.first((state_17306[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17468 = state_17306;
state_17306 = G__17468;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = function(state_17306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1.call(this,state_17306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__;
})()
;})(__17455,switch__17031__auto__,c__17106__auto___17459,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async))
})();
var state__17108__auto__ = (function (){var statearr_17318 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17318[(6)] = c__17106__auto___17459);

return statearr_17318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
});})(__17455,c__17106__auto___17459,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async))
);


break;
case "async":
var c__17106__auto___17469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17455,c__17106__auto___17469,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async){
return (function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = ((function (__17455,c__17106__auto___17469,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async){
return (function (state_17331){
var state_val_17332 = (state_17331[(1)]);
if((state_val_17332 === (1))){
var state_17331__$1 = state_17331;
var statearr_17333_17470 = state_17331__$1;
(statearr_17333_17470[(2)] = null);

(statearr_17333_17470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17332 === (2))){
var state_17331__$1 = state_17331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17331__$1,(4),jobs);
} else {
if((state_val_17332 === (3))){
var inst_17329 = (state_17331[(2)]);
var state_17331__$1 = state_17331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17331__$1,inst_17329);
} else {
if((state_val_17332 === (4))){
var inst_17321 = (state_17331[(2)]);
var inst_17322 = async(inst_17321);
var state_17331__$1 = state_17331;
if(cljs.core.truth_(inst_17322)){
var statearr_17334_17471 = state_17331__$1;
(statearr_17334_17471[(1)] = (5));

} else {
var statearr_17335_17472 = state_17331__$1;
(statearr_17335_17472[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17332 === (5))){
var state_17331__$1 = state_17331;
var statearr_17336_17473 = state_17331__$1;
(statearr_17336_17473[(2)] = null);

(statearr_17336_17473[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17332 === (6))){
var state_17331__$1 = state_17331;
var statearr_17337_17474 = state_17331__$1;
(statearr_17337_17474[(2)] = null);

(statearr_17337_17474[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17332 === (7))){
var inst_17327 = (state_17331[(2)]);
var state_17331__$1 = state_17331;
var statearr_17338_17475 = state_17331__$1;
(statearr_17338_17475[(2)] = inst_17327);

(statearr_17338_17475[(1)] = (3));


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
});})(__17455,c__17106__auto___17469,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async))
;
return ((function (__17455,switch__17031__auto__,c__17106__auto___17469,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0 = (function (){
var statearr_17339 = [null,null,null,null,null,null,null];
(statearr_17339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__);

(statearr_17339[(1)] = (1));

return statearr_17339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1 = (function (state_17331){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17331);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17340){var ex__17035__auto__ = e17340;
var statearr_17341_17476 = state_17331;
(statearr_17341_17476[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17331[(4)]))){
var statearr_17342_17477 = state_17331;
(statearr_17342_17477[(1)] = cljs.core.first((state_17331[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17478 = state_17331;
state_17331 = G__17478;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = function(state_17331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1.call(this,state_17331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__;
})()
;})(__17455,switch__17031__auto__,c__17106__auto___17469,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async))
})();
var state__17108__auto__ = (function (){var statearr_17343 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17343[(6)] = c__17106__auto___17469);

return statearr_17343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
});})(__17455,c__17106__auto___17469,G__17293_17456,G__17293_17457__$1,n__4613__auto___17454,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17293_17457__$1)].join('')));

}

var G__17479 = (__17455 + (1));
__17455 = G__17479;
continue;
} else {
}
break;
}

var c__17106__auto___17480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17365){
var state_val_17366 = (state_17365[(1)]);
if((state_val_17366 === (7))){
var inst_17361 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
var statearr_17367_17481 = state_17365__$1;
(statearr_17367_17481[(2)] = inst_17361);

(statearr_17367_17481[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17366 === (1))){
var state_17365__$1 = state_17365;
var statearr_17368_17482 = state_17365__$1;
(statearr_17368_17482[(2)] = null);

(statearr_17368_17482[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17366 === (4))){
var inst_17346 = (state_17365[(7)]);
var inst_17346__$1 = (state_17365[(2)]);
var inst_17347 = (inst_17346__$1 == null);
var state_17365__$1 = (function (){var statearr_17369 = state_17365;
(statearr_17369[(7)] = inst_17346__$1);

return statearr_17369;
})();
if(cljs.core.truth_(inst_17347)){
var statearr_17370_17483 = state_17365__$1;
(statearr_17370_17483[(1)] = (5));

} else {
var statearr_17371_17484 = state_17365__$1;
(statearr_17371_17484[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17366 === (6))){
var inst_17346 = (state_17365[(7)]);
var inst_17351 = (state_17365[(8)]);
var inst_17351__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17353 = [inst_17346,inst_17351__$1];
var inst_17354 = (new cljs.core.PersistentVector(null,2,(5),inst_17352,inst_17353,null));
var state_17365__$1 = (function (){var statearr_17372 = state_17365;
(statearr_17372[(8)] = inst_17351__$1);

return statearr_17372;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17365__$1,(8),jobs,inst_17354);
} else {
if((state_val_17366 === (3))){
var inst_17363 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17365__$1,inst_17363);
} else {
if((state_val_17366 === (2))){
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17365__$1,(4),from);
} else {
if((state_val_17366 === (9))){
var inst_17358 = (state_17365[(2)]);
var state_17365__$1 = (function (){var statearr_17373 = state_17365;
(statearr_17373[(9)] = inst_17358);

return statearr_17373;
})();
var statearr_17374_17485 = state_17365__$1;
(statearr_17374_17485[(2)] = null);

(statearr_17374_17485[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17366 === (5))){
var inst_17349 = cljs.core.async.close_BANG_(jobs);
var state_17365__$1 = state_17365;
var statearr_17375_17486 = state_17365__$1;
(statearr_17375_17486[(2)] = inst_17349);

(statearr_17375_17486[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17366 === (8))){
var inst_17351 = (state_17365[(8)]);
var inst_17356 = (state_17365[(2)]);
var state_17365__$1 = (function (){var statearr_17376 = state_17365;
(statearr_17376[(10)] = inst_17356);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17365__$1,(9),results,inst_17351);
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
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0 = (function (){
var statearr_17377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__);

(statearr_17377[(1)] = (1));

return statearr_17377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1 = (function (state_17365){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17365);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17378){var ex__17035__auto__ = e17378;
var statearr_17379_17487 = state_17365;
(statearr_17379_17487[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17365[(4)]))){
var statearr_17380_17488 = state_17365;
(statearr_17380_17488[(1)] = cljs.core.first((state_17365[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17489 = state_17365;
state_17365 = G__17489;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = function(state_17365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1.call(this,state_17365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17381 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17381[(6)] = c__17106__auto___17480);

return statearr_17381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17419){
var state_val_17420 = (state_17419[(1)]);
if((state_val_17420 === (7))){
var inst_17415 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17421_17490 = state_17419__$1;
(statearr_17421_17490[(2)] = inst_17415);

(statearr_17421_17490[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (20))){
var state_17419__$1 = state_17419;
var statearr_17422_17491 = state_17419__$1;
(statearr_17422_17491[(2)] = null);

(statearr_17422_17491[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (1))){
var state_17419__$1 = state_17419;
var statearr_17423_17492 = state_17419__$1;
(statearr_17423_17492[(2)] = null);

(statearr_17423_17492[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (4))){
var inst_17384 = (state_17419[(7)]);
var inst_17384__$1 = (state_17419[(2)]);
var inst_17385 = (inst_17384__$1 == null);
var state_17419__$1 = (function (){var statearr_17424 = state_17419;
(statearr_17424[(7)] = inst_17384__$1);

return statearr_17424;
})();
if(cljs.core.truth_(inst_17385)){
var statearr_17425_17493 = state_17419__$1;
(statearr_17425_17493[(1)] = (5));

} else {
var statearr_17426_17494 = state_17419__$1;
(statearr_17426_17494[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (15))){
var inst_17397 = (state_17419[(8)]);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17419__$1,(18),to,inst_17397);
} else {
if((state_val_17420 === (21))){
var inst_17410 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17427_17495 = state_17419__$1;
(statearr_17427_17495[(2)] = inst_17410);

(statearr_17427_17495[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (13))){
var inst_17412 = (state_17419[(2)]);
var state_17419__$1 = (function (){var statearr_17428 = state_17419;
(statearr_17428[(9)] = inst_17412);

return statearr_17428;
})();
var statearr_17429_17496 = state_17419__$1;
(statearr_17429_17496[(2)] = null);

(statearr_17429_17496[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (6))){
var inst_17384 = (state_17419[(7)]);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17419__$1,(11),inst_17384);
} else {
if((state_val_17420 === (17))){
var inst_17405 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17405)){
var statearr_17430_17497 = state_17419__$1;
(statearr_17430_17497[(1)] = (19));

} else {
var statearr_17431_17498 = state_17419__$1;
(statearr_17431_17498[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (3))){
var inst_17417 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17419__$1,inst_17417);
} else {
if((state_val_17420 === (12))){
var inst_17394 = (state_17419[(10)]);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17419__$1,(14),inst_17394);
} else {
if((state_val_17420 === (2))){
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17419__$1,(4),results);
} else {
if((state_val_17420 === (19))){
var state_17419__$1 = state_17419;
var statearr_17432_17499 = state_17419__$1;
(statearr_17432_17499[(2)] = null);

(statearr_17432_17499[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (11))){
var inst_17394 = (state_17419[(2)]);
var state_17419__$1 = (function (){var statearr_17433 = state_17419;
(statearr_17433[(10)] = inst_17394);

return statearr_17433;
})();
var statearr_17434_17500 = state_17419__$1;
(statearr_17434_17500[(2)] = null);

(statearr_17434_17500[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (9))){
var state_17419__$1 = state_17419;
var statearr_17435_17501 = state_17419__$1;
(statearr_17435_17501[(2)] = null);

(statearr_17435_17501[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (5))){
var state_17419__$1 = state_17419;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17436_17502 = state_17419__$1;
(statearr_17436_17502[(1)] = (8));

} else {
var statearr_17437_17503 = state_17419__$1;
(statearr_17437_17503[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (14))){
var inst_17397 = (state_17419[(8)]);
var inst_17397__$1 = (state_17419[(2)]);
var inst_17398 = (inst_17397__$1 == null);
var inst_17399 = cljs.core.not(inst_17398);
var state_17419__$1 = (function (){var statearr_17438 = state_17419;
(statearr_17438[(8)] = inst_17397__$1);

return statearr_17438;
})();
if(inst_17399){
var statearr_17439_17504 = state_17419__$1;
(statearr_17439_17504[(1)] = (15));

} else {
var statearr_17440_17505 = state_17419__$1;
(statearr_17440_17505[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (16))){
var state_17419__$1 = state_17419;
var statearr_17441_17506 = state_17419__$1;
(statearr_17441_17506[(2)] = false);

(statearr_17441_17506[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (10))){
var inst_17391 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17442_17507 = state_17419__$1;
(statearr_17442_17507[(2)] = inst_17391);

(statearr_17442_17507[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (18))){
var inst_17402 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17443_17508 = state_17419__$1;
(statearr_17443_17508[(2)] = inst_17402);

(statearr_17443_17508[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17420 === (8))){
var inst_17388 = cljs.core.async.close_BANG_(to);
var state_17419__$1 = state_17419;
var statearr_17444_17509 = state_17419__$1;
(statearr_17444_17509[(2)] = inst_17388);

(statearr_17444_17509[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0 = (function (){
var statearr_17445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__);

(statearr_17445[(1)] = (1));

return statearr_17445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1 = (function (state_17419){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17419);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17446){var ex__17035__auto__ = e17446;
var statearr_17447_17510 = state_17419;
(statearr_17447_17510[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17419[(4)]))){
var statearr_17448_17511 = state_17419;
(statearr_17448_17511[(1)] = cljs.core.first((state_17419[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17512 = state_17419;
state_17419 = G__17512;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__ = function(state_17419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1.call(this,state_17419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17449 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17449[(6)] = c__17106__auto__);

return statearr_17449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
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
var G__17514 = arguments.length;
switch (G__17514) {
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
var G__17517 = arguments.length;
switch (G__17517) {
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
var G__17520 = arguments.length;
switch (G__17520) {
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
var c__17106__auto___17570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17546){
var state_val_17547 = (state_17546[(1)]);
if((state_val_17547 === (7))){
var inst_17542 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17548_17571 = state_17546__$1;
(statearr_17548_17571[(2)] = inst_17542);

(statearr_17548_17571[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (1))){
var state_17546__$1 = state_17546;
var statearr_17549_17572 = state_17546__$1;
(statearr_17549_17572[(2)] = null);

(statearr_17549_17572[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (4))){
var inst_17523 = (state_17546[(7)]);
var inst_17523__$1 = (state_17546[(2)]);
var inst_17524 = (inst_17523__$1 == null);
var state_17546__$1 = (function (){var statearr_17550 = state_17546;
(statearr_17550[(7)] = inst_17523__$1);

return statearr_17550;
})();
if(cljs.core.truth_(inst_17524)){
var statearr_17551_17573 = state_17546__$1;
(statearr_17551_17573[(1)] = (5));

} else {
var statearr_17552_17574 = state_17546__$1;
(statearr_17552_17574[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (13))){
var state_17546__$1 = state_17546;
var statearr_17553_17575 = state_17546__$1;
(statearr_17553_17575[(2)] = null);

(statearr_17553_17575[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (6))){
var inst_17523 = (state_17546[(7)]);
var inst_17529 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17523) : p.call(null,inst_17523));
var state_17546__$1 = state_17546;
if(cljs.core.truth_(inst_17529)){
var statearr_17554_17576 = state_17546__$1;
(statearr_17554_17576[(1)] = (9));

} else {
var statearr_17555_17577 = state_17546__$1;
(statearr_17555_17577[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (3))){
var inst_17544 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17546__$1,inst_17544);
} else {
if((state_val_17547 === (12))){
var state_17546__$1 = state_17546;
var statearr_17556_17578 = state_17546__$1;
(statearr_17556_17578[(2)] = null);

(statearr_17556_17578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (2))){
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17546__$1,(4),ch);
} else {
if((state_val_17547 === (11))){
var inst_17523 = (state_17546[(7)]);
var inst_17533 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17546__$1,(8),inst_17533,inst_17523);
} else {
if((state_val_17547 === (9))){
var state_17546__$1 = state_17546;
var statearr_17557_17579 = state_17546__$1;
(statearr_17557_17579[(2)] = tc);

(statearr_17557_17579[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (5))){
var inst_17526 = cljs.core.async.close_BANG_(tc);
var inst_17527 = cljs.core.async.close_BANG_(fc);
var state_17546__$1 = (function (){var statearr_17558 = state_17546;
(statearr_17558[(8)] = inst_17526);

return statearr_17558;
})();
var statearr_17559_17580 = state_17546__$1;
(statearr_17559_17580[(2)] = inst_17527);

(statearr_17559_17580[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (14))){
var inst_17540 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17560_17581 = state_17546__$1;
(statearr_17560_17581[(2)] = inst_17540);

(statearr_17560_17581[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (10))){
var state_17546__$1 = state_17546;
var statearr_17561_17582 = state_17546__$1;
(statearr_17561_17582[(2)] = fc);

(statearr_17561_17582[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (8))){
var inst_17535 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
if(cljs.core.truth_(inst_17535)){
var statearr_17562_17583 = state_17546__$1;
(statearr_17562_17583[(1)] = (12));

} else {
var statearr_17563_17584 = state_17546__$1;
(statearr_17563_17584[(1)] = (13));

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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_17564 = [null,null,null,null,null,null,null,null,null];
(statearr_17564[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_17564[(1)] = (1));

return statearr_17564;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_17546){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17546);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17565){var ex__17035__auto__ = e17565;
var statearr_17566_17585 = state_17546;
(statearr_17566_17585[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17546[(4)]))){
var statearr_17567_17586 = state_17546;
(statearr_17567_17586[(1)] = cljs.core.first((state_17546[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17587 = state_17546;
state_17546 = G__17587;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_17546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_17546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17568 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17568[(6)] = c__17106__auto___17570);

return statearr_17568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
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
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17609){
var state_val_17610 = (state_17609[(1)]);
if((state_val_17610 === (7))){
var inst_17605 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17611_17630 = state_17609__$1;
(statearr_17611_17630[(2)] = inst_17605);

(statearr_17611_17630[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17610 === (1))){
var inst_17588 = init;
var inst_17589 = inst_17588;
var state_17609__$1 = (function (){var statearr_17612 = state_17609;
(statearr_17612[(7)] = inst_17589);

return statearr_17612;
})();
var statearr_17613_17631 = state_17609__$1;
(statearr_17613_17631[(2)] = null);

(statearr_17613_17631[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17610 === (4))){
var inst_17592 = (state_17609[(8)]);
var inst_17592__$1 = (state_17609[(2)]);
var inst_17593 = (inst_17592__$1 == null);
var state_17609__$1 = (function (){var statearr_17614 = state_17609;
(statearr_17614[(8)] = inst_17592__$1);

return statearr_17614;
})();
if(cljs.core.truth_(inst_17593)){
var statearr_17615_17632 = state_17609__$1;
(statearr_17615_17632[(1)] = (5));

} else {
var statearr_17616_17633 = state_17609__$1;
(statearr_17616_17633[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17610 === (6))){
var inst_17596 = (state_17609[(9)]);
var inst_17589 = (state_17609[(7)]);
var inst_17592 = (state_17609[(8)]);
var inst_17596__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17589,inst_17592) : f.call(null,inst_17589,inst_17592));
var inst_17597 = cljs.core.reduced_QMARK_(inst_17596__$1);
var state_17609__$1 = (function (){var statearr_17617 = state_17609;
(statearr_17617[(9)] = inst_17596__$1);

return statearr_17617;
})();
if(inst_17597){
var statearr_17618_17634 = state_17609__$1;
(statearr_17618_17634[(1)] = (8));

} else {
var statearr_17619_17635 = state_17609__$1;
(statearr_17619_17635[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17610 === (3))){
var inst_17607 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17609__$1,inst_17607);
} else {
if((state_val_17610 === (2))){
var state_17609__$1 = state_17609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17609__$1,(4),ch);
} else {
if((state_val_17610 === (9))){
var inst_17596 = (state_17609[(9)]);
var inst_17589 = inst_17596;
var state_17609__$1 = (function (){var statearr_17620 = state_17609;
(statearr_17620[(7)] = inst_17589);

return statearr_17620;
})();
var statearr_17621_17636 = state_17609__$1;
(statearr_17621_17636[(2)] = null);

(statearr_17621_17636[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17610 === (5))){
var inst_17589 = (state_17609[(7)]);
var state_17609__$1 = state_17609;
var statearr_17622_17637 = state_17609__$1;
(statearr_17622_17637[(2)] = inst_17589);

(statearr_17622_17637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17610 === (10))){
var inst_17603 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17623_17638 = state_17609__$1;
(statearr_17623_17638[(2)] = inst_17603);

(statearr_17623_17638[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17610 === (8))){
var inst_17596 = (state_17609[(9)]);
var inst_17599 = cljs.core.deref(inst_17596);
var state_17609__$1 = state_17609;
var statearr_17624_17639 = state_17609__$1;
(statearr_17624_17639[(2)] = inst_17599);

(statearr_17624_17639[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__17032__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17032__auto____0 = (function (){
var statearr_17625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17625[(0)] = cljs$core$async$reduce_$_state_machine__17032__auto__);

(statearr_17625[(1)] = (1));

return statearr_17625;
});
var cljs$core$async$reduce_$_state_machine__17032__auto____1 = (function (state_17609){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17609);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17626){var ex__17035__auto__ = e17626;
var statearr_17627_17640 = state_17609;
(statearr_17627_17640[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17609[(4)]))){
var statearr_17628_17641 = state_17609;
(statearr_17628_17641[(1)] = cljs.core.first((state_17609[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17642 = state_17609;
state_17609 = G__17642;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17032__auto__ = function(state_17609){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17032__auto____1.call(this,state_17609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17032__auto____0;
cljs$core$async$reduce_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17032__auto____1;
return cljs$core$async$reduce_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17629 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17629[(6)] = c__17106__auto__);

return statearr_17629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17648){
var state_val_17649 = (state_17648[(1)]);
if((state_val_17649 === (1))){
var inst_17643 = cljs.core.async.reduce(f__$1,init,ch);
var state_17648__$1 = state_17648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17648__$1,(2),inst_17643);
} else {
if((state_val_17649 === (2))){
var inst_17645 = (state_17648[(2)]);
var inst_17646 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17645) : f__$1.call(null,inst_17645));
var state_17648__$1 = state_17648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17648__$1,inst_17646);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17032__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17032__auto____0 = (function (){
var statearr_17650 = [null,null,null,null,null,null,null];
(statearr_17650[(0)] = cljs$core$async$transduce_$_state_machine__17032__auto__);

(statearr_17650[(1)] = (1));

return statearr_17650;
});
var cljs$core$async$transduce_$_state_machine__17032__auto____1 = (function (state_17648){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17648);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17651){var ex__17035__auto__ = e17651;
var statearr_17652_17655 = state_17648;
(statearr_17652_17655[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17648[(4)]))){
var statearr_17653_17656 = state_17648;
(statearr_17653_17656[(1)] = cljs.core.first((state_17648[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17657 = state_17648;
state_17648 = G__17657;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17032__auto__ = function(state_17648){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17032__auto____1.call(this,state_17648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17032__auto____0;
cljs$core$async$transduce_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17032__auto____1;
return cljs$core$async$transduce_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17654 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17654[(6)] = c__17106__auto__);

return statearr_17654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
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
var G__17659 = arguments.length;
switch (G__17659) {
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
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17684){
var state_val_17685 = (state_17684[(1)]);
if((state_val_17685 === (7))){
var inst_17666 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
var statearr_17686_17708 = state_17684__$1;
(statearr_17686_17708[(2)] = inst_17666);

(statearr_17686_17708[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (1))){
var inst_17660 = cljs.core.seq(coll);
var inst_17661 = inst_17660;
var state_17684__$1 = (function (){var statearr_17687 = state_17684;
(statearr_17687[(7)] = inst_17661);

return statearr_17687;
})();
var statearr_17688_17709 = state_17684__$1;
(statearr_17688_17709[(2)] = null);

(statearr_17688_17709[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (4))){
var inst_17661 = (state_17684[(7)]);
var inst_17664 = cljs.core.first(inst_17661);
var state_17684__$1 = state_17684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17684__$1,(7),ch,inst_17664);
} else {
if((state_val_17685 === (13))){
var inst_17678 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
var statearr_17689_17710 = state_17684__$1;
(statearr_17689_17710[(2)] = inst_17678);

(statearr_17689_17710[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (6))){
var inst_17669 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
if(cljs.core.truth_(inst_17669)){
var statearr_17690_17711 = state_17684__$1;
(statearr_17690_17711[(1)] = (8));

} else {
var statearr_17691_17712 = state_17684__$1;
(statearr_17691_17712[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (3))){
var inst_17682 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17684__$1,inst_17682);
} else {
if((state_val_17685 === (12))){
var state_17684__$1 = state_17684;
var statearr_17692_17713 = state_17684__$1;
(statearr_17692_17713[(2)] = null);

(statearr_17692_17713[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (2))){
var inst_17661 = (state_17684[(7)]);
var state_17684__$1 = state_17684;
if(cljs.core.truth_(inst_17661)){
var statearr_17693_17714 = state_17684__$1;
(statearr_17693_17714[(1)] = (4));

} else {
var statearr_17694_17715 = state_17684__$1;
(statearr_17694_17715[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (11))){
var inst_17675 = cljs.core.async.close_BANG_(ch);
var state_17684__$1 = state_17684;
var statearr_17695_17716 = state_17684__$1;
(statearr_17695_17716[(2)] = inst_17675);

(statearr_17695_17716[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (9))){
var state_17684__$1 = state_17684;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17696_17717 = state_17684__$1;
(statearr_17696_17717[(1)] = (11));

} else {
var statearr_17697_17718 = state_17684__$1;
(statearr_17697_17718[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (5))){
var inst_17661 = (state_17684[(7)]);
var state_17684__$1 = state_17684;
var statearr_17698_17719 = state_17684__$1;
(statearr_17698_17719[(2)] = inst_17661);

(statearr_17698_17719[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (10))){
var inst_17680 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
var statearr_17699_17720 = state_17684__$1;
(statearr_17699_17720[(2)] = inst_17680);

(statearr_17699_17720[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (8))){
var inst_17661 = (state_17684[(7)]);
var inst_17671 = cljs.core.next(inst_17661);
var inst_17661__$1 = inst_17671;
var state_17684__$1 = (function (){var statearr_17700 = state_17684;
(statearr_17700[(7)] = inst_17661__$1);

return statearr_17700;
})();
var statearr_17701_17721 = state_17684__$1;
(statearr_17701_17721[(2)] = null);

(statearr_17701_17721[(1)] = (2));


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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_17702 = [null,null,null,null,null,null,null,null];
(statearr_17702[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_17702[(1)] = (1));

return statearr_17702;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_17684){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17684);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17703){var ex__17035__auto__ = e17703;
var statearr_17704_17722 = state_17684;
(statearr_17704_17722[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17684[(4)]))){
var statearr_17705_17723 = state_17684;
(statearr_17705_17723[(1)] = cljs.core.first((state_17684[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__17724 = state_17684;
state_17684 = G__17724;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_17684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_17684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17706 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17706[(6)] = c__17106__auto__);

return statearr_17706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
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
var G__17726 = arguments.length;
switch (G__17726) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17728 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17728(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17729 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17729(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17730 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17730(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17731 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17731(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17732 = (function (ch,cs,meta17733){
this.ch = ch;
this.cs = cs;
this.meta17733 = meta17733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17734,meta17733__$1){
var self__ = this;
var _17734__$1 = this;
return (new cljs.core.async.t_cljs$core$async17732(self__.ch,self__.cs,meta17733__$1));
}));

(cljs.core.async.t_cljs$core$async17732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17734){
var self__ = this;
var _17734__$1 = this;
return self__.meta17733;
}));

(cljs.core.async.t_cljs$core$async17732.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17732.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17732.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17732.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17732.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17733], null);
}));

(cljs.core.async.t_cljs$core$async17732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17732");

(cljs.core.async.t_cljs$core$async17732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async17732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17732.
 */
cljs.core.async.__GT_t_cljs$core$async17732 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17732(ch__$1,cs__$1,meta17733){
return (new cljs.core.async.t_cljs$core$async17732(ch__$1,cs__$1,meta17733));
});

}

return (new cljs.core.async.t_cljs$core$async17732(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17106__auto___17951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_17867){
var state_val_17868 = (state_17867[(1)]);
if((state_val_17868 === (7))){
var inst_17863 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17869_17952 = state_17867__$1;
(statearr_17869_17952[(2)] = inst_17863);

(statearr_17869_17952[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (20))){
var inst_17768 = (state_17867[(7)]);
var inst_17780 = cljs.core.first(inst_17768);
var inst_17781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17780,(0),null);
var inst_17782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17780,(1),null);
var state_17867__$1 = (function (){var statearr_17870 = state_17867;
(statearr_17870[(8)] = inst_17781);

return statearr_17870;
})();
if(cljs.core.truth_(inst_17782)){
var statearr_17871_17953 = state_17867__$1;
(statearr_17871_17953[(1)] = (22));

} else {
var statearr_17872_17954 = state_17867__$1;
(statearr_17872_17954[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (27))){
var inst_17812 = (state_17867[(9)]);
var inst_17817 = (state_17867[(10)]);
var inst_17810 = (state_17867[(11)]);
var inst_17737 = (state_17867[(12)]);
var inst_17817__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17810,inst_17812);
var inst_17818 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17817__$1,inst_17737,done);
var state_17867__$1 = (function (){var statearr_17873 = state_17867;
(statearr_17873[(10)] = inst_17817__$1);

return statearr_17873;
})();
if(cljs.core.truth_(inst_17818)){
var statearr_17874_17955 = state_17867__$1;
(statearr_17874_17955[(1)] = (30));

} else {
var statearr_17875_17956 = state_17867__$1;
(statearr_17875_17956[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (1))){
var state_17867__$1 = state_17867;
var statearr_17876_17957 = state_17867__$1;
(statearr_17876_17957[(2)] = null);

(statearr_17876_17957[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (24))){
var inst_17768 = (state_17867[(7)]);
var inst_17787 = (state_17867[(2)]);
var inst_17788 = cljs.core.next(inst_17768);
var inst_17746 = inst_17788;
var inst_17747 = null;
var inst_17748 = (0);
var inst_17749 = (0);
var state_17867__$1 = (function (){var statearr_17877 = state_17867;
(statearr_17877[(13)] = inst_17787);

(statearr_17877[(14)] = inst_17747);

(statearr_17877[(15)] = inst_17746);

(statearr_17877[(16)] = inst_17748);

(statearr_17877[(17)] = inst_17749);

return statearr_17877;
})();
var statearr_17878_17958 = state_17867__$1;
(statearr_17878_17958[(2)] = null);

(statearr_17878_17958[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (39))){
var state_17867__$1 = state_17867;
var statearr_17882_17959 = state_17867__$1;
(statearr_17882_17959[(2)] = null);

(statearr_17882_17959[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (4))){
var inst_17737 = (state_17867[(12)]);
var inst_17737__$1 = (state_17867[(2)]);
var inst_17738 = (inst_17737__$1 == null);
var state_17867__$1 = (function (){var statearr_17883 = state_17867;
(statearr_17883[(12)] = inst_17737__$1);

return statearr_17883;
})();
if(cljs.core.truth_(inst_17738)){
var statearr_17884_17960 = state_17867__$1;
(statearr_17884_17960[(1)] = (5));

} else {
var statearr_17885_17961 = state_17867__$1;
(statearr_17885_17961[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (15))){
var inst_17747 = (state_17867[(14)]);
var inst_17746 = (state_17867[(15)]);
var inst_17748 = (state_17867[(16)]);
var inst_17749 = (state_17867[(17)]);
var inst_17764 = (state_17867[(2)]);
var inst_17765 = (inst_17749 + (1));
var tmp17879 = inst_17747;
var tmp17880 = inst_17746;
var tmp17881 = inst_17748;
var inst_17746__$1 = tmp17880;
var inst_17747__$1 = tmp17879;
var inst_17748__$1 = tmp17881;
var inst_17749__$1 = inst_17765;
var state_17867__$1 = (function (){var statearr_17886 = state_17867;
(statearr_17886[(14)] = inst_17747__$1);

(statearr_17886[(15)] = inst_17746__$1);

(statearr_17886[(18)] = inst_17764);

(statearr_17886[(16)] = inst_17748__$1);

(statearr_17886[(17)] = inst_17749__$1);

return statearr_17886;
})();
var statearr_17887_17962 = state_17867__$1;
(statearr_17887_17962[(2)] = null);

(statearr_17887_17962[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (21))){
var inst_17791 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17891_17963 = state_17867__$1;
(statearr_17891_17963[(2)] = inst_17791);

(statearr_17891_17963[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (31))){
var inst_17817 = (state_17867[(10)]);
var inst_17821 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17817);
var state_17867__$1 = state_17867;
var statearr_17892_17964 = state_17867__$1;
(statearr_17892_17964[(2)] = inst_17821);

(statearr_17892_17964[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (32))){
var inst_17811 = (state_17867[(19)]);
var inst_17812 = (state_17867[(9)]);
var inst_17810 = (state_17867[(11)]);
var inst_17809 = (state_17867[(20)]);
var inst_17823 = (state_17867[(2)]);
var inst_17824 = (inst_17812 + (1));
var tmp17888 = inst_17811;
var tmp17889 = inst_17810;
var tmp17890 = inst_17809;
var inst_17809__$1 = tmp17890;
var inst_17810__$1 = tmp17889;
var inst_17811__$1 = tmp17888;
var inst_17812__$1 = inst_17824;
var state_17867__$1 = (function (){var statearr_17893 = state_17867;
(statearr_17893[(19)] = inst_17811__$1);

(statearr_17893[(9)] = inst_17812__$1);

(statearr_17893[(21)] = inst_17823);

(statearr_17893[(11)] = inst_17810__$1);

(statearr_17893[(20)] = inst_17809__$1);

return statearr_17893;
})();
var statearr_17894_17965 = state_17867__$1;
(statearr_17894_17965[(2)] = null);

(statearr_17894_17965[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (40))){
var inst_17836 = (state_17867[(22)]);
var inst_17840 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17836);
var state_17867__$1 = state_17867;
var statearr_17895_17966 = state_17867__$1;
(statearr_17895_17966[(2)] = inst_17840);

(statearr_17895_17966[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (33))){
var inst_17827 = (state_17867[(23)]);
var inst_17829 = cljs.core.chunked_seq_QMARK_(inst_17827);
var state_17867__$1 = state_17867;
if(inst_17829){
var statearr_17896_17967 = state_17867__$1;
(statearr_17896_17967[(1)] = (36));

} else {
var statearr_17897_17968 = state_17867__$1;
(statearr_17897_17968[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (13))){
var inst_17758 = (state_17867[(24)]);
var inst_17761 = cljs.core.async.close_BANG_(inst_17758);
var state_17867__$1 = state_17867;
var statearr_17898_17969 = state_17867__$1;
(statearr_17898_17969[(2)] = inst_17761);

(statearr_17898_17969[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (22))){
var inst_17781 = (state_17867[(8)]);
var inst_17784 = cljs.core.async.close_BANG_(inst_17781);
var state_17867__$1 = state_17867;
var statearr_17899_17970 = state_17867__$1;
(statearr_17899_17970[(2)] = inst_17784);

(statearr_17899_17970[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (36))){
var inst_17827 = (state_17867[(23)]);
var inst_17831 = cljs.core.chunk_first(inst_17827);
var inst_17832 = cljs.core.chunk_rest(inst_17827);
var inst_17833 = cljs.core.count(inst_17831);
var inst_17809 = inst_17832;
var inst_17810 = inst_17831;
var inst_17811 = inst_17833;
var inst_17812 = (0);
var state_17867__$1 = (function (){var statearr_17900 = state_17867;
(statearr_17900[(19)] = inst_17811);

(statearr_17900[(9)] = inst_17812);

(statearr_17900[(11)] = inst_17810);

(statearr_17900[(20)] = inst_17809);

return statearr_17900;
})();
var statearr_17901_17971 = state_17867__$1;
(statearr_17901_17971[(2)] = null);

(statearr_17901_17971[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (41))){
var inst_17827 = (state_17867[(23)]);
var inst_17842 = (state_17867[(2)]);
var inst_17843 = cljs.core.next(inst_17827);
var inst_17809 = inst_17843;
var inst_17810 = null;
var inst_17811 = (0);
var inst_17812 = (0);
var state_17867__$1 = (function (){var statearr_17902 = state_17867;
(statearr_17902[(19)] = inst_17811);

(statearr_17902[(9)] = inst_17812);

(statearr_17902[(25)] = inst_17842);

(statearr_17902[(11)] = inst_17810);

(statearr_17902[(20)] = inst_17809);

return statearr_17902;
})();
var statearr_17903_17972 = state_17867__$1;
(statearr_17903_17972[(2)] = null);

(statearr_17903_17972[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (43))){
var state_17867__$1 = state_17867;
var statearr_17904_17973 = state_17867__$1;
(statearr_17904_17973[(2)] = null);

(statearr_17904_17973[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (29))){
var inst_17851 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17905_17974 = state_17867__$1;
(statearr_17905_17974[(2)] = inst_17851);

(statearr_17905_17974[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (44))){
var inst_17860 = (state_17867[(2)]);
var state_17867__$1 = (function (){var statearr_17906 = state_17867;
(statearr_17906[(26)] = inst_17860);

return statearr_17906;
})();
var statearr_17907_17975 = state_17867__$1;
(statearr_17907_17975[(2)] = null);

(statearr_17907_17975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (6))){
var inst_17801 = (state_17867[(27)]);
var inst_17800 = cljs.core.deref(cs);
var inst_17801__$1 = cljs.core.keys(inst_17800);
var inst_17802 = cljs.core.count(inst_17801__$1);
var inst_17803 = cljs.core.reset_BANG_(dctr,inst_17802);
var inst_17808 = cljs.core.seq(inst_17801__$1);
var inst_17809 = inst_17808;
var inst_17810 = null;
var inst_17811 = (0);
var inst_17812 = (0);
var state_17867__$1 = (function (){var statearr_17908 = state_17867;
(statearr_17908[(28)] = inst_17803);

(statearr_17908[(19)] = inst_17811);

(statearr_17908[(9)] = inst_17812);

(statearr_17908[(11)] = inst_17810);

(statearr_17908[(27)] = inst_17801__$1);

(statearr_17908[(20)] = inst_17809);

return statearr_17908;
})();
var statearr_17909_17976 = state_17867__$1;
(statearr_17909_17976[(2)] = null);

(statearr_17909_17976[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (28))){
var inst_17809 = (state_17867[(20)]);
var inst_17827 = (state_17867[(23)]);
var inst_17827__$1 = cljs.core.seq(inst_17809);
var state_17867__$1 = (function (){var statearr_17910 = state_17867;
(statearr_17910[(23)] = inst_17827__$1);

return statearr_17910;
})();
if(inst_17827__$1){
var statearr_17911_17977 = state_17867__$1;
(statearr_17911_17977[(1)] = (33));

} else {
var statearr_17912_17978 = state_17867__$1;
(statearr_17912_17978[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (25))){
var inst_17811 = (state_17867[(19)]);
var inst_17812 = (state_17867[(9)]);
var inst_17814 = (inst_17812 < inst_17811);
var inst_17815 = inst_17814;
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17815)){
var statearr_17913_17979 = state_17867__$1;
(statearr_17913_17979[(1)] = (27));

} else {
var statearr_17914_17980 = state_17867__$1;
(statearr_17914_17980[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (34))){
var state_17867__$1 = state_17867;
var statearr_17915_17981 = state_17867__$1;
(statearr_17915_17981[(2)] = null);

(statearr_17915_17981[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (17))){
var state_17867__$1 = state_17867;
var statearr_17916_17982 = state_17867__$1;
(statearr_17916_17982[(2)] = null);

(statearr_17916_17982[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (3))){
var inst_17865 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17867__$1,inst_17865);
} else {
if((state_val_17868 === (12))){
var inst_17796 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17917_17983 = state_17867__$1;
(statearr_17917_17983[(2)] = inst_17796);

(statearr_17917_17983[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (2))){
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17867__$1,(4),ch);
} else {
if((state_val_17868 === (23))){
var state_17867__$1 = state_17867;
var statearr_17918_17984 = state_17867__$1;
(statearr_17918_17984[(2)] = null);

(statearr_17918_17984[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (35))){
var inst_17849 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17919_17985 = state_17867__$1;
(statearr_17919_17985[(2)] = inst_17849);

(statearr_17919_17985[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (19))){
var inst_17768 = (state_17867[(7)]);
var inst_17772 = cljs.core.chunk_first(inst_17768);
var inst_17773 = cljs.core.chunk_rest(inst_17768);
var inst_17774 = cljs.core.count(inst_17772);
var inst_17746 = inst_17773;
var inst_17747 = inst_17772;
var inst_17748 = inst_17774;
var inst_17749 = (0);
var state_17867__$1 = (function (){var statearr_17920 = state_17867;
(statearr_17920[(14)] = inst_17747);

(statearr_17920[(15)] = inst_17746);

(statearr_17920[(16)] = inst_17748);

(statearr_17920[(17)] = inst_17749);

return statearr_17920;
})();
var statearr_17921_17986 = state_17867__$1;
(statearr_17921_17986[(2)] = null);

(statearr_17921_17986[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (11))){
var inst_17768 = (state_17867[(7)]);
var inst_17746 = (state_17867[(15)]);
var inst_17768__$1 = cljs.core.seq(inst_17746);
var state_17867__$1 = (function (){var statearr_17922 = state_17867;
(statearr_17922[(7)] = inst_17768__$1);

return statearr_17922;
})();
if(inst_17768__$1){
var statearr_17923_17987 = state_17867__$1;
(statearr_17923_17987[(1)] = (16));

} else {
var statearr_17924_17988 = state_17867__$1;
(statearr_17924_17988[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (9))){
var inst_17798 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17925_17989 = state_17867__$1;
(statearr_17925_17989[(2)] = inst_17798);

(statearr_17925_17989[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (5))){
var inst_17744 = cljs.core.deref(cs);
var inst_17745 = cljs.core.seq(inst_17744);
var inst_17746 = inst_17745;
var inst_17747 = null;
var inst_17748 = (0);
var inst_17749 = (0);
var state_17867__$1 = (function (){var statearr_17926 = state_17867;
(statearr_17926[(14)] = inst_17747);

(statearr_17926[(15)] = inst_17746);

(statearr_17926[(16)] = inst_17748);

(statearr_17926[(17)] = inst_17749);

return statearr_17926;
})();
var statearr_17927_17990 = state_17867__$1;
(statearr_17927_17990[(2)] = null);

(statearr_17927_17990[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (14))){
var state_17867__$1 = state_17867;
var statearr_17928_17991 = state_17867__$1;
(statearr_17928_17991[(2)] = null);

(statearr_17928_17991[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (45))){
var inst_17857 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17929_17992 = state_17867__$1;
(statearr_17929_17992[(2)] = inst_17857);

(statearr_17929_17992[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (26))){
var inst_17801 = (state_17867[(27)]);
var inst_17853 = (state_17867[(2)]);
var inst_17854 = cljs.core.seq(inst_17801);
var state_17867__$1 = (function (){var statearr_17930 = state_17867;
(statearr_17930[(29)] = inst_17853);

return statearr_17930;
})();
if(inst_17854){
var statearr_17931_17993 = state_17867__$1;
(statearr_17931_17993[(1)] = (42));

} else {
var statearr_17932_17994 = state_17867__$1;
(statearr_17932_17994[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (16))){
var inst_17768 = (state_17867[(7)]);
var inst_17770 = cljs.core.chunked_seq_QMARK_(inst_17768);
var state_17867__$1 = state_17867;
if(inst_17770){
var statearr_17933_17995 = state_17867__$1;
(statearr_17933_17995[(1)] = (19));

} else {
var statearr_17934_17996 = state_17867__$1;
(statearr_17934_17996[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (38))){
var inst_17846 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17935_17997 = state_17867__$1;
(statearr_17935_17997[(2)] = inst_17846);

(statearr_17935_17997[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (30))){
var state_17867__$1 = state_17867;
var statearr_17936_17998 = state_17867__$1;
(statearr_17936_17998[(2)] = null);

(statearr_17936_17998[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (10))){
var inst_17747 = (state_17867[(14)]);
var inst_17749 = (state_17867[(17)]);
var inst_17757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17747,inst_17749);
var inst_17758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17757,(0),null);
var inst_17759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17757,(1),null);
var state_17867__$1 = (function (){var statearr_17937 = state_17867;
(statearr_17937[(24)] = inst_17758);

return statearr_17937;
})();
if(cljs.core.truth_(inst_17759)){
var statearr_17938_17999 = state_17867__$1;
(statearr_17938_17999[(1)] = (13));

} else {
var statearr_17939_18000 = state_17867__$1;
(statearr_17939_18000[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (18))){
var inst_17794 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17940_18001 = state_17867__$1;
(statearr_17940_18001[(2)] = inst_17794);

(statearr_17940_18001[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (42))){
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17867__$1,(45),dchan);
} else {
if((state_val_17868 === (37))){
var inst_17836 = (state_17867[(22)]);
var inst_17737 = (state_17867[(12)]);
var inst_17827 = (state_17867[(23)]);
var inst_17836__$1 = cljs.core.first(inst_17827);
var inst_17837 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17836__$1,inst_17737,done);
var state_17867__$1 = (function (){var statearr_17941 = state_17867;
(statearr_17941[(22)] = inst_17836__$1);

return statearr_17941;
})();
if(cljs.core.truth_(inst_17837)){
var statearr_17942_18002 = state_17867__$1;
(statearr_17942_18002[(1)] = (39));

} else {
var statearr_17943_18003 = state_17867__$1;
(statearr_17943_18003[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (8))){
var inst_17748 = (state_17867[(16)]);
var inst_17749 = (state_17867[(17)]);
var inst_17751 = (inst_17749 < inst_17748);
var inst_17752 = inst_17751;
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17752)){
var statearr_17944_18004 = state_17867__$1;
(statearr_17944_18004[(1)] = (10));

} else {
var statearr_17945_18005 = state_17867__$1;
(statearr_17945_18005[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__17032__auto__ = null;
var cljs$core$async$mult_$_state_machine__17032__auto____0 = (function (){
var statearr_17946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17946[(0)] = cljs$core$async$mult_$_state_machine__17032__auto__);

(statearr_17946[(1)] = (1));

return statearr_17946;
});
var cljs$core$async$mult_$_state_machine__17032__auto____1 = (function (state_17867){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_17867);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e17947){var ex__17035__auto__ = e17947;
var statearr_17948_18006 = state_17867;
(statearr_17948_18006[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_17867[(4)]))){
var statearr_17949_18007 = state_17867;
(statearr_17949_18007[(1)] = cljs.core.first((state_17867[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18008 = state_17867;
state_17867 = G__18008;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17032__auto__ = function(state_17867){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17032__auto____1.call(this,state_17867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17032__auto____0;
cljs$core$async$mult_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17032__auto____1;
return cljs$core$async$mult_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_17950 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_17950[(6)] = c__17106__auto___17951);

return statearr_17950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
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
var G__18010 = arguments.length;
switch (G__18010) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18012 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18012(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18013 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18013(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18014 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18014(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18015 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18015(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18016 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18016(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18027 = arguments.length;
var i__4737__auto___18028 = (0);
while(true){
if((i__4737__auto___18028 < len__4736__auto___18027)){
args__4742__auto__.push((arguments[i__4737__auto___18028]));

var G__18029 = (i__4737__auto___18028 + (1));
i__4737__auto___18028 = G__18029;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18021){
var map__18022 = p__18021;
var map__18022__$1 = (((((!((map__18022 == null))))?(((((map__18022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18022):map__18022);
var opts = map__18022__$1;
var statearr_18024_18030 = state;
(statearr_18024_18030[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18025_18031 = state;
(statearr_18025_18031[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18026_18032 = state;
(statearr_18026_18032[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18017){
var G__18018 = cljs.core.first(seq18017);
var seq18017__$1 = cljs.core.next(seq18017);
var G__18019 = cljs.core.first(seq18017__$1);
var seq18017__$2 = cljs.core.next(seq18017__$1);
var G__18020 = cljs.core.first(seq18017__$2);
var seq18017__$3 = cljs.core.next(seq18017__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18018,G__18019,G__18020,seq18017__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18033 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18034){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18034 = meta18034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18035,meta18034__$1){
var self__ = this;
var _18035__$1 = this;
return (new cljs.core.async.t_cljs$core$async18033(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18034__$1));
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18035){
var self__ = this;
var _18035__$1 = this;
return self__.meta18034;
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta18034], null);
}));

(cljs.core.async.t_cljs$core$async18033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18033");

(cljs.core.async.t_cljs$core$async18033.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18033.
 */
cljs.core.async.__GT_t_cljs$core$async18033 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18033(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18034){
return (new cljs.core.async.t_cljs$core$async18033(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18034));
});

}

return (new cljs.core.async.t_cljs$core$async18033(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17106__auto___18198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18137){
var state_val_18138 = (state_18137[(1)]);
if((state_val_18138 === (7))){
var inst_18052 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
var statearr_18139_18199 = state_18137__$1;
(statearr_18139_18199[(2)] = inst_18052);

(statearr_18139_18199[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (20))){
var inst_18064 = (state_18137[(7)]);
var state_18137__$1 = state_18137;
var statearr_18140_18200 = state_18137__$1;
(statearr_18140_18200[(2)] = inst_18064);

(statearr_18140_18200[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (27))){
var state_18137__$1 = state_18137;
var statearr_18141_18201 = state_18137__$1;
(statearr_18141_18201[(2)] = null);

(statearr_18141_18201[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (1))){
var inst_18039 = (state_18137[(8)]);
var inst_18039__$1 = calc_state();
var inst_18041 = (inst_18039__$1 == null);
var inst_18042 = cljs.core.not(inst_18041);
var state_18137__$1 = (function (){var statearr_18142 = state_18137;
(statearr_18142[(8)] = inst_18039__$1);

return statearr_18142;
})();
if(inst_18042){
var statearr_18143_18202 = state_18137__$1;
(statearr_18143_18202[(1)] = (2));

} else {
var statearr_18144_18203 = state_18137__$1;
(statearr_18144_18203[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (24))){
var inst_18097 = (state_18137[(9)]);
var inst_18088 = (state_18137[(10)]);
var inst_18111 = (state_18137[(11)]);
var inst_18111__$1 = (inst_18088.cljs$core$IFn$_invoke$arity$1 ? inst_18088.cljs$core$IFn$_invoke$arity$1(inst_18097) : inst_18088.call(null,inst_18097));
var state_18137__$1 = (function (){var statearr_18145 = state_18137;
(statearr_18145[(11)] = inst_18111__$1);

return statearr_18145;
})();
if(cljs.core.truth_(inst_18111__$1)){
var statearr_18146_18204 = state_18137__$1;
(statearr_18146_18204[(1)] = (29));

} else {
var statearr_18147_18205 = state_18137__$1;
(statearr_18147_18205[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (4))){
var inst_18055 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
if(cljs.core.truth_(inst_18055)){
var statearr_18148_18206 = state_18137__$1;
(statearr_18148_18206[(1)] = (8));

} else {
var statearr_18149_18207 = state_18137__$1;
(statearr_18149_18207[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (15))){
var inst_18082 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
if(cljs.core.truth_(inst_18082)){
var statearr_18150_18208 = state_18137__$1;
(statearr_18150_18208[(1)] = (19));

} else {
var statearr_18151_18209 = state_18137__$1;
(statearr_18151_18209[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (21))){
var inst_18087 = (state_18137[(12)]);
var inst_18087__$1 = (state_18137[(2)]);
var inst_18088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18087__$1,cljs.core.cst$kw$solos);
var inst_18089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18087__$1,cljs.core.cst$kw$mutes);
var inst_18090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18087__$1,cljs.core.cst$kw$reads);
var state_18137__$1 = (function (){var statearr_18152 = state_18137;
(statearr_18152[(12)] = inst_18087__$1);

(statearr_18152[(10)] = inst_18088);

(statearr_18152[(13)] = inst_18089);

return statearr_18152;
})();
return cljs.core.async.ioc_alts_BANG_(state_18137__$1,(22),inst_18090);
} else {
if((state_val_18138 === (31))){
var inst_18119 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
if(cljs.core.truth_(inst_18119)){
var statearr_18153_18210 = state_18137__$1;
(statearr_18153_18210[(1)] = (32));

} else {
var statearr_18154_18211 = state_18137__$1;
(statearr_18154_18211[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (32))){
var inst_18096 = (state_18137[(14)]);
var state_18137__$1 = state_18137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18137__$1,(35),out,inst_18096);
} else {
if((state_val_18138 === (33))){
var inst_18087 = (state_18137[(12)]);
var inst_18064 = inst_18087;
var state_18137__$1 = (function (){var statearr_18155 = state_18137;
(statearr_18155[(7)] = inst_18064);

return statearr_18155;
})();
var statearr_18156_18212 = state_18137__$1;
(statearr_18156_18212[(2)] = null);

(statearr_18156_18212[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (13))){
var inst_18064 = (state_18137[(7)]);
var inst_18071 = inst_18064.cljs$lang$protocol_mask$partition0$;
var inst_18072 = (inst_18071 & (64));
var inst_18073 = inst_18064.cljs$core$ISeq$;
var inst_18074 = (cljs.core.PROTOCOL_SENTINEL === inst_18073);
var inst_18075 = ((inst_18072) || (inst_18074));
var state_18137__$1 = state_18137;
if(cljs.core.truth_(inst_18075)){
var statearr_18157_18213 = state_18137__$1;
(statearr_18157_18213[(1)] = (16));

} else {
var statearr_18158_18214 = state_18137__$1;
(statearr_18158_18214[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (22))){
var inst_18097 = (state_18137[(9)]);
var inst_18096 = (state_18137[(14)]);
var inst_18095 = (state_18137[(2)]);
var inst_18096__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18095,(0),null);
var inst_18097__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18095,(1),null);
var inst_18098 = (inst_18096__$1 == null);
var inst_18099 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18097__$1,change);
var inst_18100 = ((inst_18098) || (inst_18099));
var state_18137__$1 = (function (){var statearr_18159 = state_18137;
(statearr_18159[(9)] = inst_18097__$1);

(statearr_18159[(14)] = inst_18096__$1);

return statearr_18159;
})();
if(cljs.core.truth_(inst_18100)){
var statearr_18160_18215 = state_18137__$1;
(statearr_18160_18215[(1)] = (23));

} else {
var statearr_18161_18216 = state_18137__$1;
(statearr_18161_18216[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (36))){
var inst_18087 = (state_18137[(12)]);
var inst_18064 = inst_18087;
var state_18137__$1 = (function (){var statearr_18162 = state_18137;
(statearr_18162[(7)] = inst_18064);

return statearr_18162;
})();
var statearr_18163_18217 = state_18137__$1;
(statearr_18163_18217[(2)] = null);

(statearr_18163_18217[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (29))){
var inst_18111 = (state_18137[(11)]);
var state_18137__$1 = state_18137;
var statearr_18164_18218 = state_18137__$1;
(statearr_18164_18218[(2)] = inst_18111);

(statearr_18164_18218[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (6))){
var state_18137__$1 = state_18137;
var statearr_18165_18219 = state_18137__$1;
(statearr_18165_18219[(2)] = false);

(statearr_18165_18219[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (28))){
var inst_18107 = (state_18137[(2)]);
var inst_18108 = calc_state();
var inst_18064 = inst_18108;
var state_18137__$1 = (function (){var statearr_18166 = state_18137;
(statearr_18166[(15)] = inst_18107);

(statearr_18166[(7)] = inst_18064);

return statearr_18166;
})();
var statearr_18167_18220 = state_18137__$1;
(statearr_18167_18220[(2)] = null);

(statearr_18167_18220[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (25))){
var inst_18133 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
var statearr_18168_18221 = state_18137__$1;
(statearr_18168_18221[(2)] = inst_18133);

(statearr_18168_18221[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (34))){
var inst_18131 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
var statearr_18169_18222 = state_18137__$1;
(statearr_18169_18222[(2)] = inst_18131);

(statearr_18169_18222[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (17))){
var state_18137__$1 = state_18137;
var statearr_18170_18223 = state_18137__$1;
(statearr_18170_18223[(2)] = false);

(statearr_18170_18223[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (3))){
var state_18137__$1 = state_18137;
var statearr_18171_18224 = state_18137__$1;
(statearr_18171_18224[(2)] = false);

(statearr_18171_18224[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (12))){
var inst_18135 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18137__$1,inst_18135);
} else {
if((state_val_18138 === (2))){
var inst_18039 = (state_18137[(8)]);
var inst_18044 = inst_18039.cljs$lang$protocol_mask$partition0$;
var inst_18045 = (inst_18044 & (64));
var inst_18046 = inst_18039.cljs$core$ISeq$;
var inst_18047 = (cljs.core.PROTOCOL_SENTINEL === inst_18046);
var inst_18048 = ((inst_18045) || (inst_18047));
var state_18137__$1 = state_18137;
if(cljs.core.truth_(inst_18048)){
var statearr_18172_18225 = state_18137__$1;
(statearr_18172_18225[(1)] = (5));

} else {
var statearr_18173_18226 = state_18137__$1;
(statearr_18173_18226[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (23))){
var inst_18096 = (state_18137[(14)]);
var inst_18102 = (inst_18096 == null);
var state_18137__$1 = state_18137;
if(cljs.core.truth_(inst_18102)){
var statearr_18174_18227 = state_18137__$1;
(statearr_18174_18227[(1)] = (26));

} else {
var statearr_18175_18228 = state_18137__$1;
(statearr_18175_18228[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (35))){
var inst_18122 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
if(cljs.core.truth_(inst_18122)){
var statearr_18176_18229 = state_18137__$1;
(statearr_18176_18229[(1)] = (36));

} else {
var statearr_18177_18230 = state_18137__$1;
(statearr_18177_18230[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (19))){
var inst_18064 = (state_18137[(7)]);
var inst_18084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18064);
var state_18137__$1 = state_18137;
var statearr_18178_18231 = state_18137__$1;
(statearr_18178_18231[(2)] = inst_18084);

(statearr_18178_18231[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (11))){
var inst_18064 = (state_18137[(7)]);
var inst_18068 = (inst_18064 == null);
var inst_18069 = cljs.core.not(inst_18068);
var state_18137__$1 = state_18137;
if(inst_18069){
var statearr_18179_18232 = state_18137__$1;
(statearr_18179_18232[(1)] = (13));

} else {
var statearr_18180_18233 = state_18137__$1;
(statearr_18180_18233[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (9))){
var inst_18039 = (state_18137[(8)]);
var state_18137__$1 = state_18137;
var statearr_18181_18234 = state_18137__$1;
(statearr_18181_18234[(2)] = inst_18039);

(statearr_18181_18234[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (5))){
var state_18137__$1 = state_18137;
var statearr_18182_18235 = state_18137__$1;
(statearr_18182_18235[(2)] = true);

(statearr_18182_18235[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (14))){
var state_18137__$1 = state_18137;
var statearr_18183_18236 = state_18137__$1;
(statearr_18183_18236[(2)] = false);

(statearr_18183_18236[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (26))){
var inst_18097 = (state_18137[(9)]);
var inst_18104 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18097);
var state_18137__$1 = state_18137;
var statearr_18184_18237 = state_18137__$1;
(statearr_18184_18237[(2)] = inst_18104);

(statearr_18184_18237[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (16))){
var state_18137__$1 = state_18137;
var statearr_18185_18238 = state_18137__$1;
(statearr_18185_18238[(2)] = true);

(statearr_18185_18238[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (38))){
var inst_18127 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
var statearr_18186_18239 = state_18137__$1;
(statearr_18186_18239[(2)] = inst_18127);

(statearr_18186_18239[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (30))){
var inst_18097 = (state_18137[(9)]);
var inst_18088 = (state_18137[(10)]);
var inst_18089 = (state_18137[(13)]);
var inst_18114 = cljs.core.empty_QMARK_(inst_18088);
var inst_18115 = (inst_18089.cljs$core$IFn$_invoke$arity$1 ? inst_18089.cljs$core$IFn$_invoke$arity$1(inst_18097) : inst_18089.call(null,inst_18097));
var inst_18116 = cljs.core.not(inst_18115);
var inst_18117 = ((inst_18114) && (inst_18116));
var state_18137__$1 = state_18137;
var statearr_18187_18240 = state_18137__$1;
(statearr_18187_18240[(2)] = inst_18117);

(statearr_18187_18240[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (10))){
var inst_18039 = (state_18137[(8)]);
var inst_18060 = (state_18137[(2)]);
var inst_18061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18060,cljs.core.cst$kw$solos);
var inst_18062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18060,cljs.core.cst$kw$mutes);
var inst_18063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18060,cljs.core.cst$kw$reads);
var inst_18064 = inst_18039;
var state_18137__$1 = (function (){var statearr_18188 = state_18137;
(statearr_18188[(16)] = inst_18063);

(statearr_18188[(17)] = inst_18061);

(statearr_18188[(18)] = inst_18062);

(statearr_18188[(7)] = inst_18064);

return statearr_18188;
})();
var statearr_18189_18241 = state_18137__$1;
(statearr_18189_18241[(2)] = null);

(statearr_18189_18241[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (18))){
var inst_18079 = (state_18137[(2)]);
var state_18137__$1 = state_18137;
var statearr_18190_18242 = state_18137__$1;
(statearr_18190_18242[(2)] = inst_18079);

(statearr_18190_18242[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (37))){
var state_18137__$1 = state_18137;
var statearr_18191_18243 = state_18137__$1;
(statearr_18191_18243[(2)] = null);

(statearr_18191_18243[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18138 === (8))){
var inst_18039 = (state_18137[(8)]);
var inst_18057 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18039);
var state_18137__$1 = state_18137;
var statearr_18192_18244 = state_18137__$1;
(statearr_18192_18244[(2)] = inst_18057);

(statearr_18192_18244[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__17032__auto__ = null;
var cljs$core$async$mix_$_state_machine__17032__auto____0 = (function (){
var statearr_18193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18193[(0)] = cljs$core$async$mix_$_state_machine__17032__auto__);

(statearr_18193[(1)] = (1));

return statearr_18193;
});
var cljs$core$async$mix_$_state_machine__17032__auto____1 = (function (state_18137){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18137);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18194){var ex__17035__auto__ = e18194;
var statearr_18195_18245 = state_18137;
(statearr_18195_18245[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18137[(4)]))){
var statearr_18196_18246 = state_18137;
(statearr_18196_18246[(1)] = cljs.core.first((state_18137[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18247 = state_18137;
state_18137 = G__18247;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17032__auto__ = function(state_18137){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17032__auto____1.call(this,state_18137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17032__auto____0;
cljs$core$async$mix_$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17032__auto____1;
return cljs$core$async$mix_$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18197 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18197[(6)] = c__17106__auto___18198);

return statearr_18197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18250 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18250(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18251 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18251(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18252 = (function() {
var G__18253 = null;
var G__18253__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18253__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18253 = function(p,v){
switch(arguments.length){
case 1:
return G__18253__1.call(this,p);
case 2:
return G__18253__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18253.cljs$core$IFn$_invoke$arity$1 = G__18253__1;
G__18253.cljs$core$IFn$_invoke$arity$2 = G__18253__2;
return G__18253;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18249 = arguments.length;
switch (G__18249) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18252.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18252.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__18257 = arguments.length;
switch (G__18257) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18255_SHARP_){
if(cljs.core.truth_((p1__18255_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18255_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18255_SHARP_.call(null,topic)))){
return p1__18255_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18255_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18258 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18259){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18259 = meta18259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18260,meta18259__$1){
var self__ = this;
var _18260__$1 = this;
return (new cljs.core.async.t_cljs$core$async18258(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18259__$1));
}));

(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18260){
var self__ = this;
var _18260__$1 = this;
return self__.meta18259;
}));

(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18259], null);
}));

(cljs.core.async.t_cljs$core$async18258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18258");

(cljs.core.async.t_cljs$core$async18258.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18258.
 */
cljs.core.async.__GT_t_cljs$core$async18258 = (function cljs$core$async$__GT_t_cljs$core$async18258(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18259){
return (new cljs.core.async.t_cljs$core$async18258(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18259));
});

}

return (new cljs.core.async.t_cljs$core$async18258(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17106__auto___18379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18332){
var state_val_18333 = (state_18332[(1)]);
if((state_val_18333 === (7))){
var inst_18328 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18334_18380 = state_18332__$1;
(statearr_18334_18380[(2)] = inst_18328);

(statearr_18334_18380[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (20))){
var state_18332__$1 = state_18332;
var statearr_18335_18381 = state_18332__$1;
(statearr_18335_18381[(2)] = null);

(statearr_18335_18381[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (1))){
var state_18332__$1 = state_18332;
var statearr_18336_18382 = state_18332__$1;
(statearr_18336_18382[(2)] = null);

(statearr_18336_18382[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (24))){
var inst_18311 = (state_18332[(7)]);
var inst_18320 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18311);
var state_18332__$1 = state_18332;
var statearr_18337_18383 = state_18332__$1;
(statearr_18337_18383[(2)] = inst_18320);

(statearr_18337_18383[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (4))){
var inst_18263 = (state_18332[(8)]);
var inst_18263__$1 = (state_18332[(2)]);
var inst_18264 = (inst_18263__$1 == null);
var state_18332__$1 = (function (){var statearr_18338 = state_18332;
(statearr_18338[(8)] = inst_18263__$1);

return statearr_18338;
})();
if(cljs.core.truth_(inst_18264)){
var statearr_18339_18384 = state_18332__$1;
(statearr_18339_18384[(1)] = (5));

} else {
var statearr_18340_18385 = state_18332__$1;
(statearr_18340_18385[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (15))){
var inst_18305 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18341_18386 = state_18332__$1;
(statearr_18341_18386[(2)] = inst_18305);

(statearr_18341_18386[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (21))){
var inst_18325 = (state_18332[(2)]);
var state_18332__$1 = (function (){var statearr_18342 = state_18332;
(statearr_18342[(9)] = inst_18325);

return statearr_18342;
})();
var statearr_18343_18387 = state_18332__$1;
(statearr_18343_18387[(2)] = null);

(statearr_18343_18387[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (13))){
var inst_18287 = (state_18332[(10)]);
var inst_18289 = cljs.core.chunked_seq_QMARK_(inst_18287);
var state_18332__$1 = state_18332;
if(inst_18289){
var statearr_18344_18388 = state_18332__$1;
(statearr_18344_18388[(1)] = (16));

} else {
var statearr_18345_18389 = state_18332__$1;
(statearr_18345_18389[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (22))){
var inst_18317 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
if(cljs.core.truth_(inst_18317)){
var statearr_18346_18390 = state_18332__$1;
(statearr_18346_18390[(1)] = (23));

} else {
var statearr_18347_18391 = state_18332__$1;
(statearr_18347_18391[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (6))){
var inst_18263 = (state_18332[(8)]);
var inst_18311 = (state_18332[(7)]);
var inst_18313 = (state_18332[(11)]);
var inst_18311__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18263) : topic_fn.call(null,inst_18263));
var inst_18312 = cljs.core.deref(mults);
var inst_18313__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18312,inst_18311__$1);
var state_18332__$1 = (function (){var statearr_18348 = state_18332;
(statearr_18348[(7)] = inst_18311__$1);

(statearr_18348[(11)] = inst_18313__$1);

return statearr_18348;
})();
if(cljs.core.truth_(inst_18313__$1)){
var statearr_18349_18392 = state_18332__$1;
(statearr_18349_18392[(1)] = (19));

} else {
var statearr_18350_18393 = state_18332__$1;
(statearr_18350_18393[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (25))){
var inst_18322 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18351_18394 = state_18332__$1;
(statearr_18351_18394[(2)] = inst_18322);

(statearr_18351_18394[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (17))){
var inst_18287 = (state_18332[(10)]);
var inst_18296 = cljs.core.first(inst_18287);
var inst_18297 = cljs.core.async.muxch_STAR_(inst_18296);
var inst_18298 = cljs.core.async.close_BANG_(inst_18297);
var inst_18299 = cljs.core.next(inst_18287);
var inst_18273 = inst_18299;
var inst_18274 = null;
var inst_18275 = (0);
var inst_18276 = (0);
var state_18332__$1 = (function (){var statearr_18352 = state_18332;
(statearr_18352[(12)] = inst_18276);

(statearr_18352[(13)] = inst_18298);

(statearr_18352[(14)] = inst_18273);

(statearr_18352[(15)] = inst_18274);

(statearr_18352[(16)] = inst_18275);

return statearr_18352;
})();
var statearr_18353_18395 = state_18332__$1;
(statearr_18353_18395[(2)] = null);

(statearr_18353_18395[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (3))){
var inst_18330 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18332__$1,inst_18330);
} else {
if((state_val_18333 === (12))){
var inst_18307 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18354_18396 = state_18332__$1;
(statearr_18354_18396[(2)] = inst_18307);

(statearr_18354_18396[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (2))){
var state_18332__$1 = state_18332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18332__$1,(4),ch);
} else {
if((state_val_18333 === (23))){
var state_18332__$1 = state_18332;
var statearr_18355_18397 = state_18332__$1;
(statearr_18355_18397[(2)] = null);

(statearr_18355_18397[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (19))){
var inst_18263 = (state_18332[(8)]);
var inst_18313 = (state_18332[(11)]);
var inst_18315 = cljs.core.async.muxch_STAR_(inst_18313);
var state_18332__$1 = state_18332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18332__$1,(22),inst_18315,inst_18263);
} else {
if((state_val_18333 === (11))){
var inst_18287 = (state_18332[(10)]);
var inst_18273 = (state_18332[(14)]);
var inst_18287__$1 = cljs.core.seq(inst_18273);
var state_18332__$1 = (function (){var statearr_18356 = state_18332;
(statearr_18356[(10)] = inst_18287__$1);

return statearr_18356;
})();
if(inst_18287__$1){
var statearr_18357_18398 = state_18332__$1;
(statearr_18357_18398[(1)] = (13));

} else {
var statearr_18358_18399 = state_18332__$1;
(statearr_18358_18399[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (9))){
var inst_18309 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18359_18400 = state_18332__$1;
(statearr_18359_18400[(2)] = inst_18309);

(statearr_18359_18400[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (5))){
var inst_18270 = cljs.core.deref(mults);
var inst_18271 = cljs.core.vals(inst_18270);
var inst_18272 = cljs.core.seq(inst_18271);
var inst_18273 = inst_18272;
var inst_18274 = null;
var inst_18275 = (0);
var inst_18276 = (0);
var state_18332__$1 = (function (){var statearr_18360 = state_18332;
(statearr_18360[(12)] = inst_18276);

(statearr_18360[(14)] = inst_18273);

(statearr_18360[(15)] = inst_18274);

(statearr_18360[(16)] = inst_18275);

return statearr_18360;
})();
var statearr_18361_18401 = state_18332__$1;
(statearr_18361_18401[(2)] = null);

(statearr_18361_18401[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (14))){
var state_18332__$1 = state_18332;
var statearr_18365_18402 = state_18332__$1;
(statearr_18365_18402[(2)] = null);

(statearr_18365_18402[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (16))){
var inst_18287 = (state_18332[(10)]);
var inst_18291 = cljs.core.chunk_first(inst_18287);
var inst_18292 = cljs.core.chunk_rest(inst_18287);
var inst_18293 = cljs.core.count(inst_18291);
var inst_18273 = inst_18292;
var inst_18274 = inst_18291;
var inst_18275 = inst_18293;
var inst_18276 = (0);
var state_18332__$1 = (function (){var statearr_18366 = state_18332;
(statearr_18366[(12)] = inst_18276);

(statearr_18366[(14)] = inst_18273);

(statearr_18366[(15)] = inst_18274);

(statearr_18366[(16)] = inst_18275);

return statearr_18366;
})();
var statearr_18367_18403 = state_18332__$1;
(statearr_18367_18403[(2)] = null);

(statearr_18367_18403[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (10))){
var inst_18276 = (state_18332[(12)]);
var inst_18273 = (state_18332[(14)]);
var inst_18274 = (state_18332[(15)]);
var inst_18275 = (state_18332[(16)]);
var inst_18281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18274,inst_18276);
var inst_18282 = cljs.core.async.muxch_STAR_(inst_18281);
var inst_18283 = cljs.core.async.close_BANG_(inst_18282);
var inst_18284 = (inst_18276 + (1));
var tmp18362 = inst_18273;
var tmp18363 = inst_18274;
var tmp18364 = inst_18275;
var inst_18273__$1 = tmp18362;
var inst_18274__$1 = tmp18363;
var inst_18275__$1 = tmp18364;
var inst_18276__$1 = inst_18284;
var state_18332__$1 = (function (){var statearr_18368 = state_18332;
(statearr_18368[(12)] = inst_18276__$1);

(statearr_18368[(17)] = inst_18283);

(statearr_18368[(14)] = inst_18273__$1);

(statearr_18368[(15)] = inst_18274__$1);

(statearr_18368[(16)] = inst_18275__$1);

return statearr_18368;
})();
var statearr_18369_18404 = state_18332__$1;
(statearr_18369_18404[(2)] = null);

(statearr_18369_18404[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (18))){
var inst_18302 = (state_18332[(2)]);
var state_18332__$1 = state_18332;
var statearr_18370_18405 = state_18332__$1;
(statearr_18370_18405[(2)] = inst_18302);

(statearr_18370_18405[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18333 === (8))){
var inst_18276 = (state_18332[(12)]);
var inst_18275 = (state_18332[(16)]);
var inst_18278 = (inst_18276 < inst_18275);
var inst_18279 = inst_18278;
var state_18332__$1 = state_18332;
if(cljs.core.truth_(inst_18279)){
var statearr_18371_18406 = state_18332__$1;
(statearr_18371_18406[(1)] = (10));

} else {
var statearr_18372_18407 = state_18332__$1;
(statearr_18372_18407[(1)] = (11));

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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_18373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18373[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_18373[(1)] = (1));

return statearr_18373;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_18332){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18332);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18374){var ex__17035__auto__ = e18374;
var statearr_18375_18408 = state_18332;
(statearr_18375_18408[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18332[(4)]))){
var statearr_18376_18409 = state_18332;
(statearr_18376_18409[(1)] = cljs.core.first((state_18332[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18410 = state_18332;
state_18332 = G__18410;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_18332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_18332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18377 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18377[(6)] = c__17106__auto___18379);

return statearr_18377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
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
var G__18412 = arguments.length;
switch (G__18412) {
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
var G__18415 = arguments.length;
switch (G__18415) {
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
var G__18418 = arguments.length;
switch (G__18418) {
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
var c__17106__auto___18496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18461){
var state_val_18462 = (state_18461[(1)]);
if((state_val_18462 === (7))){
var state_18461__$1 = state_18461;
var statearr_18463_18497 = state_18461__$1;
(statearr_18463_18497[(2)] = null);

(statearr_18463_18497[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (1))){
var state_18461__$1 = state_18461;
var statearr_18464_18498 = state_18461__$1;
(statearr_18464_18498[(2)] = null);

(statearr_18464_18498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (4))){
var inst_18421 = (state_18461[(7)]);
var inst_18422 = (state_18461[(8)]);
var inst_18424 = (inst_18422 < inst_18421);
var state_18461__$1 = state_18461;
if(cljs.core.truth_(inst_18424)){
var statearr_18465_18499 = state_18461__$1;
(statearr_18465_18499[(1)] = (6));

} else {
var statearr_18466_18500 = state_18461__$1;
(statearr_18466_18500[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (15))){
var inst_18447 = (state_18461[(9)]);
var inst_18452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18447);
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18461__$1,(17),out,inst_18452);
} else {
if((state_val_18462 === (13))){
var inst_18447 = (state_18461[(9)]);
var inst_18447__$1 = (state_18461[(2)]);
var inst_18448 = cljs.core.some(cljs.core.nil_QMARK_,inst_18447__$1);
var state_18461__$1 = (function (){var statearr_18467 = state_18461;
(statearr_18467[(9)] = inst_18447__$1);

return statearr_18467;
})();
if(cljs.core.truth_(inst_18448)){
var statearr_18468_18501 = state_18461__$1;
(statearr_18468_18501[(1)] = (14));

} else {
var statearr_18469_18502 = state_18461__$1;
(statearr_18469_18502[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (6))){
var state_18461__$1 = state_18461;
var statearr_18470_18503 = state_18461__$1;
(statearr_18470_18503[(2)] = null);

(statearr_18470_18503[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (17))){
var inst_18454 = (state_18461[(2)]);
var state_18461__$1 = (function (){var statearr_18472 = state_18461;
(statearr_18472[(10)] = inst_18454);

return statearr_18472;
})();
var statearr_18473_18504 = state_18461__$1;
(statearr_18473_18504[(2)] = null);

(statearr_18473_18504[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (3))){
var inst_18459 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18461__$1,inst_18459);
} else {
if((state_val_18462 === (12))){
var _ = (function (){var statearr_18474 = state_18461;
(statearr_18474[(4)] = cljs.core.rest((state_18461[(4)])));

return statearr_18474;
})();
var state_18461__$1 = state_18461;
var ex18471 = (state_18461__$1[(2)]);
var statearr_18475_18505 = state_18461__$1;
(statearr_18475_18505[(5)] = ex18471);


if((ex18471 instanceof Object)){
var statearr_18476_18506 = state_18461__$1;
(statearr_18476_18506[(1)] = (11));

(statearr_18476_18506[(5)] = null);

} else {
throw ex18471;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (2))){
var inst_18420 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18421 = cnt;
var inst_18422 = (0);
var state_18461__$1 = (function (){var statearr_18477 = state_18461;
(statearr_18477[(11)] = inst_18420);

(statearr_18477[(7)] = inst_18421);

(statearr_18477[(8)] = inst_18422);

return statearr_18477;
})();
var statearr_18478_18507 = state_18461__$1;
(statearr_18478_18507[(2)] = null);

(statearr_18478_18507[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (11))){
var inst_18426 = (state_18461[(2)]);
var inst_18427 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18461__$1 = (function (){var statearr_18479 = state_18461;
(statearr_18479[(12)] = inst_18426);

return statearr_18479;
})();
var statearr_18480_18508 = state_18461__$1;
(statearr_18480_18508[(2)] = inst_18427);

(statearr_18480_18508[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (9))){
var inst_18422 = (state_18461[(8)]);
var _ = (function (){var statearr_18481 = state_18461;
(statearr_18481[(4)] = cljs.core.cons((12),(state_18461[(4)])));

return statearr_18481;
})();
var inst_18433 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18422) : chs__$1.call(null,inst_18422));
var inst_18434 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18422) : done.call(null,inst_18422));
var inst_18435 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18433,inst_18434);
var ___$1 = (function (){var statearr_18482 = state_18461;
(statearr_18482[(4)] = cljs.core.rest((state_18461[(4)])));

return statearr_18482;
})();
var state_18461__$1 = state_18461;
var statearr_18483_18509 = state_18461__$1;
(statearr_18483_18509[(2)] = inst_18435);

(statearr_18483_18509[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (5))){
var inst_18445 = (state_18461[(2)]);
var state_18461__$1 = (function (){var statearr_18484 = state_18461;
(statearr_18484[(13)] = inst_18445);

return statearr_18484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18461__$1,(13),dchan);
} else {
if((state_val_18462 === (14))){
var inst_18450 = cljs.core.async.close_BANG_(out);
var state_18461__$1 = state_18461;
var statearr_18485_18510 = state_18461__$1;
(statearr_18485_18510[(2)] = inst_18450);

(statearr_18485_18510[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (16))){
var inst_18457 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
var statearr_18486_18511 = state_18461__$1;
(statearr_18486_18511[(2)] = inst_18457);

(statearr_18486_18511[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (10))){
var inst_18422 = (state_18461[(8)]);
var inst_18438 = (state_18461[(2)]);
var inst_18439 = (inst_18422 + (1));
var inst_18422__$1 = inst_18439;
var state_18461__$1 = (function (){var statearr_18487 = state_18461;
(statearr_18487[(14)] = inst_18438);

(statearr_18487[(8)] = inst_18422__$1);

return statearr_18487;
})();
var statearr_18488_18512 = state_18461__$1;
(statearr_18488_18512[(2)] = null);

(statearr_18488_18512[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (8))){
var inst_18443 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
var statearr_18489_18513 = state_18461__$1;
(statearr_18489_18513[(2)] = inst_18443);

(statearr_18489_18513[(1)] = (5));


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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_18490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18490[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_18490[(1)] = (1));

return statearr_18490;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_18461){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18461);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18491){var ex__17035__auto__ = e18491;
var statearr_18492_18514 = state_18461;
(statearr_18492_18514[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18461[(4)]))){
var statearr_18493_18515 = state_18461;
(statearr_18493_18515[(1)] = cljs.core.first((state_18461[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18516 = state_18461;
state_18461 = G__18516;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_18461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_18461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18494 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18494[(6)] = c__17106__auto___18496);

return statearr_18494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
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
var G__18519 = arguments.length;
switch (G__18519) {
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
var c__17106__auto___18574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18551){
var state_val_18552 = (state_18551[(1)]);
if((state_val_18552 === (7))){
var inst_18530 = (state_18551[(7)]);
var inst_18531 = (state_18551[(8)]);
var inst_18530__$1 = (state_18551[(2)]);
var inst_18531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18530__$1,(0),null);
var inst_18532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18530__$1,(1),null);
var inst_18533 = (inst_18531__$1 == null);
var state_18551__$1 = (function (){var statearr_18553 = state_18551;
(statearr_18553[(7)] = inst_18530__$1);

(statearr_18553[(8)] = inst_18531__$1);

(statearr_18553[(9)] = inst_18532);

return statearr_18553;
})();
if(cljs.core.truth_(inst_18533)){
var statearr_18554_18575 = state_18551__$1;
(statearr_18554_18575[(1)] = (8));

} else {
var statearr_18555_18576 = state_18551__$1;
(statearr_18555_18576[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18552 === (1))){
var inst_18520 = cljs.core.vec(chs);
var inst_18521 = inst_18520;
var state_18551__$1 = (function (){var statearr_18556 = state_18551;
(statearr_18556[(10)] = inst_18521);

return statearr_18556;
})();
var statearr_18557_18577 = state_18551__$1;
(statearr_18557_18577[(2)] = null);

(statearr_18557_18577[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18552 === (4))){
var inst_18521 = (state_18551[(10)]);
var state_18551__$1 = state_18551;
return cljs.core.async.ioc_alts_BANG_(state_18551__$1,(7),inst_18521);
} else {
if((state_val_18552 === (6))){
var inst_18547 = (state_18551[(2)]);
var state_18551__$1 = state_18551;
var statearr_18558_18578 = state_18551__$1;
(statearr_18558_18578[(2)] = inst_18547);

(statearr_18558_18578[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18552 === (3))){
var inst_18549 = (state_18551[(2)]);
var state_18551__$1 = state_18551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18551__$1,inst_18549);
} else {
if((state_val_18552 === (2))){
var inst_18521 = (state_18551[(10)]);
var inst_18523 = cljs.core.count(inst_18521);
var inst_18524 = (inst_18523 > (0));
var state_18551__$1 = state_18551;
if(cljs.core.truth_(inst_18524)){
var statearr_18560_18579 = state_18551__$1;
(statearr_18560_18579[(1)] = (4));

} else {
var statearr_18561_18580 = state_18551__$1;
(statearr_18561_18580[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18552 === (11))){
var inst_18521 = (state_18551[(10)]);
var inst_18540 = (state_18551[(2)]);
var tmp18559 = inst_18521;
var inst_18521__$1 = tmp18559;
var state_18551__$1 = (function (){var statearr_18562 = state_18551;
(statearr_18562[(10)] = inst_18521__$1);

(statearr_18562[(11)] = inst_18540);

return statearr_18562;
})();
var statearr_18563_18581 = state_18551__$1;
(statearr_18563_18581[(2)] = null);

(statearr_18563_18581[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18552 === (9))){
var inst_18531 = (state_18551[(8)]);
var state_18551__$1 = state_18551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18551__$1,(11),out,inst_18531);
} else {
if((state_val_18552 === (5))){
var inst_18545 = cljs.core.async.close_BANG_(out);
var state_18551__$1 = state_18551;
var statearr_18564_18582 = state_18551__$1;
(statearr_18564_18582[(2)] = inst_18545);

(statearr_18564_18582[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18552 === (10))){
var inst_18543 = (state_18551[(2)]);
var state_18551__$1 = state_18551;
var statearr_18565_18583 = state_18551__$1;
(statearr_18565_18583[(2)] = inst_18543);

(statearr_18565_18583[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18552 === (8))){
var inst_18530 = (state_18551[(7)]);
var inst_18521 = (state_18551[(10)]);
var inst_18531 = (state_18551[(8)]);
var inst_18532 = (state_18551[(9)]);
var inst_18535 = (function (){var cs = inst_18521;
var vec__18526 = inst_18530;
var v = inst_18531;
var c = inst_18532;
return (function (p1__18517_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18517_SHARP_);
});
})();
var inst_18536 = cljs.core.filterv(inst_18535,inst_18521);
var inst_18521__$1 = inst_18536;
var state_18551__$1 = (function (){var statearr_18566 = state_18551;
(statearr_18566[(10)] = inst_18521__$1);

return statearr_18566;
})();
var statearr_18567_18584 = state_18551__$1;
(statearr_18567_18584[(2)] = null);

(statearr_18567_18584[(1)] = (2));


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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_18568 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18568[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_18568[(1)] = (1));

return statearr_18568;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_18551){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18551);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18569){var ex__17035__auto__ = e18569;
var statearr_18570_18585 = state_18551;
(statearr_18570_18585[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18551[(4)]))){
var statearr_18571_18586 = state_18551;
(statearr_18571_18586[(1)] = cljs.core.first((state_18551[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18587 = state_18551;
state_18551 = G__18587;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_18551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_18551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18572 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18572[(6)] = c__17106__auto___18574);

return statearr_18572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
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
var G__18589 = arguments.length;
switch (G__18589) {
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
var c__17106__auto___18635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18613){
var state_val_18614 = (state_18613[(1)]);
if((state_val_18614 === (7))){
var inst_18595 = (state_18613[(7)]);
var inst_18595__$1 = (state_18613[(2)]);
var inst_18596 = (inst_18595__$1 == null);
var inst_18597 = cljs.core.not(inst_18596);
var state_18613__$1 = (function (){var statearr_18615 = state_18613;
(statearr_18615[(7)] = inst_18595__$1);

return statearr_18615;
})();
if(inst_18597){
var statearr_18616_18636 = state_18613__$1;
(statearr_18616_18636[(1)] = (8));

} else {
var statearr_18617_18637 = state_18613__$1;
(statearr_18617_18637[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18614 === (1))){
var inst_18590 = (0);
var state_18613__$1 = (function (){var statearr_18618 = state_18613;
(statearr_18618[(8)] = inst_18590);

return statearr_18618;
})();
var statearr_18619_18638 = state_18613__$1;
(statearr_18619_18638[(2)] = null);

(statearr_18619_18638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18614 === (4))){
var state_18613__$1 = state_18613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18613__$1,(7),ch);
} else {
if((state_val_18614 === (6))){
var inst_18608 = (state_18613[(2)]);
var state_18613__$1 = state_18613;
var statearr_18620_18639 = state_18613__$1;
(statearr_18620_18639[(2)] = inst_18608);

(statearr_18620_18639[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18614 === (3))){
var inst_18610 = (state_18613[(2)]);
var inst_18611 = cljs.core.async.close_BANG_(out);
var state_18613__$1 = (function (){var statearr_18621 = state_18613;
(statearr_18621[(9)] = inst_18610);

return statearr_18621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18613__$1,inst_18611);
} else {
if((state_val_18614 === (2))){
var inst_18590 = (state_18613[(8)]);
var inst_18592 = (inst_18590 < n);
var state_18613__$1 = state_18613;
if(cljs.core.truth_(inst_18592)){
var statearr_18622_18640 = state_18613__$1;
(statearr_18622_18640[(1)] = (4));

} else {
var statearr_18623_18641 = state_18613__$1;
(statearr_18623_18641[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18614 === (11))){
var inst_18590 = (state_18613[(8)]);
var inst_18600 = (state_18613[(2)]);
var inst_18601 = (inst_18590 + (1));
var inst_18590__$1 = inst_18601;
var state_18613__$1 = (function (){var statearr_18624 = state_18613;
(statearr_18624[(10)] = inst_18600);

(statearr_18624[(8)] = inst_18590__$1);

return statearr_18624;
})();
var statearr_18625_18642 = state_18613__$1;
(statearr_18625_18642[(2)] = null);

(statearr_18625_18642[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18614 === (9))){
var state_18613__$1 = state_18613;
var statearr_18626_18643 = state_18613__$1;
(statearr_18626_18643[(2)] = null);

(statearr_18626_18643[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18614 === (5))){
var state_18613__$1 = state_18613;
var statearr_18627_18644 = state_18613__$1;
(statearr_18627_18644[(2)] = null);

(statearr_18627_18644[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18614 === (10))){
var inst_18605 = (state_18613[(2)]);
var state_18613__$1 = state_18613;
var statearr_18628_18645 = state_18613__$1;
(statearr_18628_18645[(2)] = inst_18605);

(statearr_18628_18645[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18614 === (8))){
var inst_18595 = (state_18613[(7)]);
var state_18613__$1 = state_18613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18613__$1,(11),out,inst_18595);
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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_18629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18629[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_18629[(1)] = (1));

return statearr_18629;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_18613){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18613);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18630){var ex__17035__auto__ = e18630;
var statearr_18631_18646 = state_18613;
(statearr_18631_18646[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18613[(4)]))){
var statearr_18632_18647 = state_18613;
(statearr_18632_18647[(1)] = cljs.core.first((state_18613[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18648 = state_18613;
state_18613 = G__18648;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_18613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_18613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18633 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18633[(6)] = c__17106__auto___18635);

return statearr_18633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18650 = (function (f,ch,meta18651){
this.f = f;
this.ch = ch;
this.meta18651 = meta18651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18652,meta18651__$1){
var self__ = this;
var _18652__$1 = this;
return (new cljs.core.async.t_cljs$core$async18650(self__.f,self__.ch,meta18651__$1));
}));

(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18652){
var self__ = this;
var _18652__$1 = this;
return self__.meta18651;
}));

(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18653 = (function (f,ch,meta18651,_,fn1,meta18654){
this.f = f;
this.ch = ch;
this.meta18651 = meta18651;
this._ = _;
this.fn1 = fn1;
this.meta18654 = meta18654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18655,meta18654__$1){
var self__ = this;
var _18655__$1 = this;
return (new cljs.core.async.t_cljs$core$async18653(self__.f,self__.ch,self__.meta18651,self__._,self__.fn1,meta18654__$1));
}));

(cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18655){
var self__ = this;
var _18655__$1 = this;
return self__.meta18654;
}));

(cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18649_SHARP_){
var G__18656 = (((p1__18649_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18649_SHARP_) : self__.f.call(null,p1__18649_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18656) : f1.call(null,G__18656));
});
}));

(cljs.core.async.t_cljs$core$async18653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18651,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18650], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18654], null);
}));

(cljs.core.async.t_cljs$core$async18653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18653");

(cljs.core.async.t_cljs$core$async18653.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18653.
 */
cljs.core.async.__GT_t_cljs$core$async18653 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18653(f__$1,ch__$1,meta18651__$1,___$2,fn1__$1,meta18654){
return (new cljs.core.async.t_cljs$core$async18653(f__$1,ch__$1,meta18651__$1,___$2,fn1__$1,meta18654));
});

}

return (new cljs.core.async.t_cljs$core$async18653(self__.f,self__.ch,self__.meta18651,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18657 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18657) : self__.f.call(null,G__18657));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18651], null);
}));

(cljs.core.async.t_cljs$core$async18650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18650");

(cljs.core.async.t_cljs$core$async18650.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18650.
 */
cljs.core.async.__GT_t_cljs$core$async18650 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18650(f__$1,ch__$1,meta18651){
return (new cljs.core.async.t_cljs$core$async18650(f__$1,ch__$1,meta18651));
});

}

return (new cljs.core.async.t_cljs$core$async18650(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18658 = (function (f,ch,meta18659){
this.f = f;
this.ch = ch;
this.meta18659 = meta18659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18660,meta18659__$1){
var self__ = this;
var _18660__$1 = this;
return (new cljs.core.async.t_cljs$core$async18658(self__.f,self__.ch,meta18659__$1));
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18660){
var self__ = this;
var _18660__$1 = this;
return self__.meta18659;
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18659], null);
}));

(cljs.core.async.t_cljs$core$async18658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18658");

(cljs.core.async.t_cljs$core$async18658.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18658.
 */
cljs.core.async.__GT_t_cljs$core$async18658 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18658(f__$1,ch__$1,meta18659){
return (new cljs.core.async.t_cljs$core$async18658(f__$1,ch__$1,meta18659));
});

}

return (new cljs.core.async.t_cljs$core$async18658(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18661 = (function (p,ch,meta18662){
this.p = p;
this.ch = ch;
this.meta18662 = meta18662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18663,meta18662__$1){
var self__ = this;
var _18663__$1 = this;
return (new cljs.core.async.t_cljs$core$async18661(self__.p,self__.ch,meta18662__$1));
}));

(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18663){
var self__ = this;
var _18663__$1 = this;
return self__.meta18662;
}));

(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18662], null);
}));

(cljs.core.async.t_cljs$core$async18661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18661");

(cljs.core.async.t_cljs$core$async18661.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18661.
 */
cljs.core.async.__GT_t_cljs$core$async18661 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18661(p__$1,ch__$1,meta18662){
return (new cljs.core.async.t_cljs$core$async18661(p__$1,ch__$1,meta18662));
});

}

return (new cljs.core.async.t_cljs$core$async18661(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18665 = arguments.length;
switch (G__18665) {
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
var c__17106__auto___18706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18686){
var state_val_18687 = (state_18686[(1)]);
if((state_val_18687 === (7))){
var inst_18682 = (state_18686[(2)]);
var state_18686__$1 = state_18686;
var statearr_18688_18707 = state_18686__$1;
(statearr_18688_18707[(2)] = inst_18682);

(statearr_18688_18707[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18687 === (1))){
var state_18686__$1 = state_18686;
var statearr_18689_18708 = state_18686__$1;
(statearr_18689_18708[(2)] = null);

(statearr_18689_18708[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18687 === (4))){
var inst_18668 = (state_18686[(7)]);
var inst_18668__$1 = (state_18686[(2)]);
var inst_18669 = (inst_18668__$1 == null);
var state_18686__$1 = (function (){var statearr_18690 = state_18686;
(statearr_18690[(7)] = inst_18668__$1);

return statearr_18690;
})();
if(cljs.core.truth_(inst_18669)){
var statearr_18691_18709 = state_18686__$1;
(statearr_18691_18709[(1)] = (5));

} else {
var statearr_18692_18710 = state_18686__$1;
(statearr_18692_18710[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18687 === (6))){
var inst_18668 = (state_18686[(7)]);
var inst_18673 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18668) : p.call(null,inst_18668));
var state_18686__$1 = state_18686;
if(cljs.core.truth_(inst_18673)){
var statearr_18693_18711 = state_18686__$1;
(statearr_18693_18711[(1)] = (8));

} else {
var statearr_18694_18712 = state_18686__$1;
(statearr_18694_18712[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18687 === (3))){
var inst_18684 = (state_18686[(2)]);
var state_18686__$1 = state_18686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18686__$1,inst_18684);
} else {
if((state_val_18687 === (2))){
var state_18686__$1 = state_18686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18686__$1,(4),ch);
} else {
if((state_val_18687 === (11))){
var inst_18676 = (state_18686[(2)]);
var state_18686__$1 = state_18686;
var statearr_18695_18713 = state_18686__$1;
(statearr_18695_18713[(2)] = inst_18676);

(statearr_18695_18713[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18687 === (9))){
var state_18686__$1 = state_18686;
var statearr_18696_18714 = state_18686__$1;
(statearr_18696_18714[(2)] = null);

(statearr_18696_18714[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18687 === (5))){
var inst_18671 = cljs.core.async.close_BANG_(out);
var state_18686__$1 = state_18686;
var statearr_18697_18715 = state_18686__$1;
(statearr_18697_18715[(2)] = inst_18671);

(statearr_18697_18715[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18687 === (10))){
var inst_18679 = (state_18686[(2)]);
var state_18686__$1 = (function (){var statearr_18698 = state_18686;
(statearr_18698[(8)] = inst_18679);

return statearr_18698;
})();
var statearr_18699_18716 = state_18686__$1;
(statearr_18699_18716[(2)] = null);

(statearr_18699_18716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18687 === (8))){
var inst_18668 = (state_18686[(7)]);
var state_18686__$1 = state_18686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18686__$1,(11),out,inst_18668);
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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_18700 = [null,null,null,null,null,null,null,null,null];
(statearr_18700[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_18700[(1)] = (1));

return statearr_18700;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_18686){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18686);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18701){var ex__17035__auto__ = e18701;
var statearr_18702_18717 = state_18686;
(statearr_18702_18717[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18686[(4)]))){
var statearr_18703_18718 = state_18686;
(statearr_18703_18718[(1)] = cljs.core.first((state_18686[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18719 = state_18686;
state_18686 = G__18719;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_18686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_18686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18704 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18704[(6)] = c__17106__auto___18706);

return statearr_18704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18721 = arguments.length;
switch (G__18721) {
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
var c__17106__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18784){
var state_val_18785 = (state_18784[(1)]);
if((state_val_18785 === (7))){
var inst_18780 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
var statearr_18786_18825 = state_18784__$1;
(statearr_18786_18825[(2)] = inst_18780);

(statearr_18786_18825[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (20))){
var inst_18750 = (state_18784[(7)]);
var inst_18761 = (state_18784[(2)]);
var inst_18762 = cljs.core.next(inst_18750);
var inst_18736 = inst_18762;
var inst_18737 = null;
var inst_18738 = (0);
var inst_18739 = (0);
var state_18784__$1 = (function (){var statearr_18787 = state_18784;
(statearr_18787[(8)] = inst_18739);

(statearr_18787[(9)] = inst_18761);

(statearr_18787[(10)] = inst_18738);

(statearr_18787[(11)] = inst_18736);

(statearr_18787[(12)] = inst_18737);

return statearr_18787;
})();
var statearr_18788_18826 = state_18784__$1;
(statearr_18788_18826[(2)] = null);

(statearr_18788_18826[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (1))){
var state_18784__$1 = state_18784;
var statearr_18789_18827 = state_18784__$1;
(statearr_18789_18827[(2)] = null);

(statearr_18789_18827[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (4))){
var inst_18725 = (state_18784[(13)]);
var inst_18725__$1 = (state_18784[(2)]);
var inst_18726 = (inst_18725__$1 == null);
var state_18784__$1 = (function (){var statearr_18790 = state_18784;
(statearr_18790[(13)] = inst_18725__$1);

return statearr_18790;
})();
if(cljs.core.truth_(inst_18726)){
var statearr_18791_18828 = state_18784__$1;
(statearr_18791_18828[(1)] = (5));

} else {
var statearr_18792_18829 = state_18784__$1;
(statearr_18792_18829[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (15))){
var state_18784__$1 = state_18784;
var statearr_18796_18830 = state_18784__$1;
(statearr_18796_18830[(2)] = null);

(statearr_18796_18830[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (21))){
var state_18784__$1 = state_18784;
var statearr_18797_18831 = state_18784__$1;
(statearr_18797_18831[(2)] = null);

(statearr_18797_18831[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (13))){
var inst_18739 = (state_18784[(8)]);
var inst_18738 = (state_18784[(10)]);
var inst_18736 = (state_18784[(11)]);
var inst_18737 = (state_18784[(12)]);
var inst_18746 = (state_18784[(2)]);
var inst_18747 = (inst_18739 + (1));
var tmp18793 = inst_18738;
var tmp18794 = inst_18736;
var tmp18795 = inst_18737;
var inst_18736__$1 = tmp18794;
var inst_18737__$1 = tmp18795;
var inst_18738__$1 = tmp18793;
var inst_18739__$1 = inst_18747;
var state_18784__$1 = (function (){var statearr_18798 = state_18784;
(statearr_18798[(8)] = inst_18739__$1);

(statearr_18798[(14)] = inst_18746);

(statearr_18798[(10)] = inst_18738__$1);

(statearr_18798[(11)] = inst_18736__$1);

(statearr_18798[(12)] = inst_18737__$1);

return statearr_18798;
})();
var statearr_18799_18832 = state_18784__$1;
(statearr_18799_18832[(2)] = null);

(statearr_18799_18832[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (22))){
var state_18784__$1 = state_18784;
var statearr_18800_18833 = state_18784__$1;
(statearr_18800_18833[(2)] = null);

(statearr_18800_18833[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (6))){
var inst_18725 = (state_18784[(13)]);
var inst_18734 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18725) : f.call(null,inst_18725));
var inst_18735 = cljs.core.seq(inst_18734);
var inst_18736 = inst_18735;
var inst_18737 = null;
var inst_18738 = (0);
var inst_18739 = (0);
var state_18784__$1 = (function (){var statearr_18801 = state_18784;
(statearr_18801[(8)] = inst_18739);

(statearr_18801[(10)] = inst_18738);

(statearr_18801[(11)] = inst_18736);

(statearr_18801[(12)] = inst_18737);

return statearr_18801;
})();
var statearr_18802_18834 = state_18784__$1;
(statearr_18802_18834[(2)] = null);

(statearr_18802_18834[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (17))){
var inst_18750 = (state_18784[(7)]);
var inst_18754 = cljs.core.chunk_first(inst_18750);
var inst_18755 = cljs.core.chunk_rest(inst_18750);
var inst_18756 = cljs.core.count(inst_18754);
var inst_18736 = inst_18755;
var inst_18737 = inst_18754;
var inst_18738 = inst_18756;
var inst_18739 = (0);
var state_18784__$1 = (function (){var statearr_18803 = state_18784;
(statearr_18803[(8)] = inst_18739);

(statearr_18803[(10)] = inst_18738);

(statearr_18803[(11)] = inst_18736);

(statearr_18803[(12)] = inst_18737);

return statearr_18803;
})();
var statearr_18804_18835 = state_18784__$1;
(statearr_18804_18835[(2)] = null);

(statearr_18804_18835[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (3))){
var inst_18782 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18784__$1,inst_18782);
} else {
if((state_val_18785 === (12))){
var inst_18770 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
var statearr_18805_18836 = state_18784__$1;
(statearr_18805_18836[(2)] = inst_18770);

(statearr_18805_18836[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (2))){
var state_18784__$1 = state_18784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18784__$1,(4),in$);
} else {
if((state_val_18785 === (23))){
var inst_18778 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
var statearr_18806_18837 = state_18784__$1;
(statearr_18806_18837[(2)] = inst_18778);

(statearr_18806_18837[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (19))){
var inst_18765 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
var statearr_18807_18838 = state_18784__$1;
(statearr_18807_18838[(2)] = inst_18765);

(statearr_18807_18838[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (11))){
var inst_18750 = (state_18784[(7)]);
var inst_18736 = (state_18784[(11)]);
var inst_18750__$1 = cljs.core.seq(inst_18736);
var state_18784__$1 = (function (){var statearr_18808 = state_18784;
(statearr_18808[(7)] = inst_18750__$1);

return statearr_18808;
})();
if(inst_18750__$1){
var statearr_18809_18839 = state_18784__$1;
(statearr_18809_18839[(1)] = (14));

} else {
var statearr_18810_18840 = state_18784__$1;
(statearr_18810_18840[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (9))){
var inst_18772 = (state_18784[(2)]);
var inst_18773 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18784__$1 = (function (){var statearr_18811 = state_18784;
(statearr_18811[(15)] = inst_18772);

return statearr_18811;
})();
if(cljs.core.truth_(inst_18773)){
var statearr_18812_18841 = state_18784__$1;
(statearr_18812_18841[(1)] = (21));

} else {
var statearr_18813_18842 = state_18784__$1;
(statearr_18813_18842[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (5))){
var inst_18728 = cljs.core.async.close_BANG_(out);
var state_18784__$1 = state_18784;
var statearr_18814_18843 = state_18784__$1;
(statearr_18814_18843[(2)] = inst_18728);

(statearr_18814_18843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (14))){
var inst_18750 = (state_18784[(7)]);
var inst_18752 = cljs.core.chunked_seq_QMARK_(inst_18750);
var state_18784__$1 = state_18784;
if(inst_18752){
var statearr_18815_18844 = state_18784__$1;
(statearr_18815_18844[(1)] = (17));

} else {
var statearr_18816_18845 = state_18784__$1;
(statearr_18816_18845[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (16))){
var inst_18768 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
var statearr_18817_18846 = state_18784__$1;
(statearr_18817_18846[(2)] = inst_18768);

(statearr_18817_18846[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18785 === (10))){
var inst_18739 = (state_18784[(8)]);
var inst_18737 = (state_18784[(12)]);
var inst_18744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18737,inst_18739);
var state_18784__$1 = state_18784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18784__$1,(13),out,inst_18744);
} else {
if((state_val_18785 === (18))){
var inst_18750 = (state_18784[(7)]);
var inst_18759 = cljs.core.first(inst_18750);
var state_18784__$1 = state_18784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18784__$1,(20),out,inst_18759);
} else {
if((state_val_18785 === (8))){
var inst_18739 = (state_18784[(8)]);
var inst_18738 = (state_18784[(10)]);
var inst_18741 = (inst_18739 < inst_18738);
var inst_18742 = inst_18741;
var state_18784__$1 = state_18784;
if(cljs.core.truth_(inst_18742)){
var statearr_18818_18847 = state_18784__$1;
(statearr_18818_18847[(1)] = (10));

} else {
var statearr_18819_18848 = state_18784__$1;
(statearr_18819_18848[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__17032__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17032__auto____0 = (function (){
var statearr_18820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18820[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17032__auto__);

(statearr_18820[(1)] = (1));

return statearr_18820;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17032__auto____1 = (function (state_18784){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18784);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18821){var ex__17035__auto__ = e18821;
var statearr_18822_18849 = state_18784;
(statearr_18822_18849[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18784[(4)]))){
var statearr_18823_18850 = state_18784;
(statearr_18823_18850[(1)] = cljs.core.first((state_18784[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18851 = state_18784;
state_18784 = G__18851;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17032__auto__ = function(state_18784){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17032__auto____1.call(this,state_18784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17032__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17032__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18824 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18824[(6)] = c__17106__auto__);

return statearr_18824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));

return c__17106__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18853 = arguments.length;
switch (G__18853) {
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
var G__18856 = arguments.length;
switch (G__18856) {
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
var G__18859 = arguments.length;
switch (G__18859) {
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
var c__17106__auto___18907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18883){
var state_val_18884 = (state_18883[(1)]);
if((state_val_18884 === (7))){
var inst_18878 = (state_18883[(2)]);
var state_18883__$1 = state_18883;
var statearr_18885_18908 = state_18883__$1;
(statearr_18885_18908[(2)] = inst_18878);

(statearr_18885_18908[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18884 === (1))){
var inst_18860 = null;
var state_18883__$1 = (function (){var statearr_18886 = state_18883;
(statearr_18886[(7)] = inst_18860);

return statearr_18886;
})();
var statearr_18887_18909 = state_18883__$1;
(statearr_18887_18909[(2)] = null);

(statearr_18887_18909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18884 === (4))){
var inst_18863 = (state_18883[(8)]);
var inst_18863__$1 = (state_18883[(2)]);
var inst_18864 = (inst_18863__$1 == null);
var inst_18865 = cljs.core.not(inst_18864);
var state_18883__$1 = (function (){var statearr_18888 = state_18883;
(statearr_18888[(8)] = inst_18863__$1);

return statearr_18888;
})();
if(inst_18865){
var statearr_18889_18910 = state_18883__$1;
(statearr_18889_18910[(1)] = (5));

} else {
var statearr_18890_18911 = state_18883__$1;
(statearr_18890_18911[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18884 === (6))){
var state_18883__$1 = state_18883;
var statearr_18891_18912 = state_18883__$1;
(statearr_18891_18912[(2)] = null);

(statearr_18891_18912[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18884 === (3))){
var inst_18880 = (state_18883[(2)]);
var inst_18881 = cljs.core.async.close_BANG_(out);
var state_18883__$1 = (function (){var statearr_18892 = state_18883;
(statearr_18892[(9)] = inst_18880);

return statearr_18892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18883__$1,inst_18881);
} else {
if((state_val_18884 === (2))){
var state_18883__$1 = state_18883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18883__$1,(4),ch);
} else {
if((state_val_18884 === (11))){
var inst_18863 = (state_18883[(8)]);
var inst_18872 = (state_18883[(2)]);
var inst_18860 = inst_18863;
var state_18883__$1 = (function (){var statearr_18893 = state_18883;
(statearr_18893[(7)] = inst_18860);

(statearr_18893[(10)] = inst_18872);

return statearr_18893;
})();
var statearr_18894_18913 = state_18883__$1;
(statearr_18894_18913[(2)] = null);

(statearr_18894_18913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18884 === (9))){
var inst_18863 = (state_18883[(8)]);
var state_18883__$1 = state_18883;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18883__$1,(11),out,inst_18863);
} else {
if((state_val_18884 === (5))){
var inst_18860 = (state_18883[(7)]);
var inst_18863 = (state_18883[(8)]);
var inst_18867 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18863,inst_18860);
var state_18883__$1 = state_18883;
if(inst_18867){
var statearr_18896_18914 = state_18883__$1;
(statearr_18896_18914[(1)] = (8));

} else {
var statearr_18897_18915 = state_18883__$1;
(statearr_18897_18915[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18884 === (10))){
var inst_18875 = (state_18883[(2)]);
var state_18883__$1 = state_18883;
var statearr_18898_18916 = state_18883__$1;
(statearr_18898_18916[(2)] = inst_18875);

(statearr_18898_18916[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18884 === (8))){
var inst_18860 = (state_18883[(7)]);
var tmp18895 = inst_18860;
var inst_18860__$1 = tmp18895;
var state_18883__$1 = (function (){var statearr_18899 = state_18883;
(statearr_18899[(7)] = inst_18860__$1);

return statearr_18899;
})();
var statearr_18900_18917 = state_18883__$1;
(statearr_18900_18917[(2)] = null);

(statearr_18900_18917[(1)] = (2));


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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_18901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18901[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_18901[(1)] = (1));

return statearr_18901;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_18883){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18883);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18902){var ex__17035__auto__ = e18902;
var statearr_18903_18918 = state_18883;
(statearr_18903_18918[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18883[(4)]))){
var statearr_18904_18919 = state_18883;
(statearr_18904_18919[(1)] = cljs.core.first((state_18883[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__18920 = state_18883;
state_18883 = G__18920;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_18883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_18883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18905 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18905[(6)] = c__17106__auto___18907);

return statearr_18905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18922 = arguments.length;
switch (G__18922) {
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
var c__17106__auto___18989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_18960){
var state_val_18961 = (state_18960[(1)]);
if((state_val_18961 === (7))){
var inst_18956 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18962_18990 = state_18960__$1;
(statearr_18962_18990[(2)] = inst_18956);

(statearr_18962_18990[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (1))){
var inst_18923 = (new Array(n));
var inst_18924 = inst_18923;
var inst_18925 = (0);
var state_18960__$1 = (function (){var statearr_18963 = state_18960;
(statearr_18963[(7)] = inst_18924);

(statearr_18963[(8)] = inst_18925);

return statearr_18963;
})();
var statearr_18964_18991 = state_18960__$1;
(statearr_18964_18991[(2)] = null);

(statearr_18964_18991[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (4))){
var inst_18928 = (state_18960[(9)]);
var inst_18928__$1 = (state_18960[(2)]);
var inst_18929 = (inst_18928__$1 == null);
var inst_18930 = cljs.core.not(inst_18929);
var state_18960__$1 = (function (){var statearr_18965 = state_18960;
(statearr_18965[(9)] = inst_18928__$1);

return statearr_18965;
})();
if(inst_18930){
var statearr_18966_18992 = state_18960__$1;
(statearr_18966_18992[(1)] = (5));

} else {
var statearr_18967_18993 = state_18960__$1;
(statearr_18967_18993[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (15))){
var inst_18950 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18968_18994 = state_18960__$1;
(statearr_18968_18994[(2)] = inst_18950);

(statearr_18968_18994[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (13))){
var state_18960__$1 = state_18960;
var statearr_18969_18995 = state_18960__$1;
(statearr_18969_18995[(2)] = null);

(statearr_18969_18995[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (6))){
var inst_18925 = (state_18960[(8)]);
var inst_18946 = (inst_18925 > (0));
var state_18960__$1 = state_18960;
if(cljs.core.truth_(inst_18946)){
var statearr_18970_18996 = state_18960__$1;
(statearr_18970_18996[(1)] = (12));

} else {
var statearr_18971_18997 = state_18960__$1;
(statearr_18971_18997[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (3))){
var inst_18958 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18960__$1,inst_18958);
} else {
if((state_val_18961 === (12))){
var inst_18924 = (state_18960[(7)]);
var inst_18948 = cljs.core.vec(inst_18924);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18960__$1,(15),out,inst_18948);
} else {
if((state_val_18961 === (2))){
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18960__$1,(4),ch);
} else {
if((state_val_18961 === (11))){
var inst_18940 = (state_18960[(2)]);
var inst_18941 = (new Array(n));
var inst_18924 = inst_18941;
var inst_18925 = (0);
var state_18960__$1 = (function (){var statearr_18972 = state_18960;
(statearr_18972[(10)] = inst_18940);

(statearr_18972[(7)] = inst_18924);

(statearr_18972[(8)] = inst_18925);

return statearr_18972;
})();
var statearr_18973_18998 = state_18960__$1;
(statearr_18973_18998[(2)] = null);

(statearr_18973_18998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (9))){
var inst_18924 = (state_18960[(7)]);
var inst_18938 = cljs.core.vec(inst_18924);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18960__$1,(11),out,inst_18938);
} else {
if((state_val_18961 === (5))){
var inst_18928 = (state_18960[(9)]);
var inst_18924 = (state_18960[(7)]);
var inst_18925 = (state_18960[(8)]);
var inst_18933 = (state_18960[(11)]);
var inst_18932 = (inst_18924[inst_18925] = inst_18928);
var inst_18933__$1 = (inst_18925 + (1));
var inst_18934 = (inst_18933__$1 < n);
var state_18960__$1 = (function (){var statearr_18974 = state_18960;
(statearr_18974[(12)] = inst_18932);

(statearr_18974[(11)] = inst_18933__$1);

return statearr_18974;
})();
if(cljs.core.truth_(inst_18934)){
var statearr_18975_18999 = state_18960__$1;
(statearr_18975_18999[(1)] = (8));

} else {
var statearr_18976_19000 = state_18960__$1;
(statearr_18976_19000[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (14))){
var inst_18953 = (state_18960[(2)]);
var inst_18954 = cljs.core.async.close_BANG_(out);
var state_18960__$1 = (function (){var statearr_18978 = state_18960;
(statearr_18978[(13)] = inst_18953);

return statearr_18978;
})();
var statearr_18979_19001 = state_18960__$1;
(statearr_18979_19001[(2)] = inst_18954);

(statearr_18979_19001[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (10))){
var inst_18944 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18980_19002 = state_18960__$1;
(statearr_18980_19002[(2)] = inst_18944);

(statearr_18980_19002[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (8))){
var inst_18924 = (state_18960[(7)]);
var inst_18933 = (state_18960[(11)]);
var tmp18977 = inst_18924;
var inst_18924__$1 = tmp18977;
var inst_18925 = inst_18933;
var state_18960__$1 = (function (){var statearr_18981 = state_18960;
(statearr_18981[(7)] = inst_18924__$1);

(statearr_18981[(8)] = inst_18925);

return statearr_18981;
})();
var statearr_18982_19003 = state_18960__$1;
(statearr_18982_19003[(2)] = null);

(statearr_18982_19003[(1)] = (2));


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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_18983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18983[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_18983[(1)] = (1));

return statearr_18983;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_18960){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_18960);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e18984){var ex__17035__auto__ = e18984;
var statearr_18985_19004 = state_18960;
(statearr_18985_19004[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_18960[(4)]))){
var statearr_18986_19005 = state_18960;
(statearr_18986_19005[(1)] = cljs.core.first((state_18960[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__19006 = state_18960;
state_18960 = G__19006;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_18960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_18960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_18987 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_18987[(6)] = c__17106__auto___18989);

return statearr_18987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19008 = arguments.length;
switch (G__19008) {
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
var c__17106__auto___19079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17107__auto__ = (function (){var switch__17031__auto__ = (function (state_19050){
var state_val_19051 = (state_19050[(1)]);
if((state_val_19051 === (7))){
var inst_19046 = (state_19050[(2)]);
var state_19050__$1 = state_19050;
var statearr_19052_19080 = state_19050__$1;
(statearr_19052_19080[(2)] = inst_19046);

(statearr_19052_19080[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (1))){
var inst_19009 = [];
var inst_19010 = inst_19009;
var inst_19011 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19050__$1 = (function (){var statearr_19053 = state_19050;
(statearr_19053[(7)] = inst_19011);

(statearr_19053[(8)] = inst_19010);

return statearr_19053;
})();
var statearr_19054_19081 = state_19050__$1;
(statearr_19054_19081[(2)] = null);

(statearr_19054_19081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (4))){
var inst_19014 = (state_19050[(9)]);
var inst_19014__$1 = (state_19050[(2)]);
var inst_19015 = (inst_19014__$1 == null);
var inst_19016 = cljs.core.not(inst_19015);
var state_19050__$1 = (function (){var statearr_19055 = state_19050;
(statearr_19055[(9)] = inst_19014__$1);

return statearr_19055;
})();
if(inst_19016){
var statearr_19056_19082 = state_19050__$1;
(statearr_19056_19082[(1)] = (5));

} else {
var statearr_19057_19083 = state_19050__$1;
(statearr_19057_19083[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (15))){
var inst_19040 = (state_19050[(2)]);
var state_19050__$1 = state_19050;
var statearr_19058_19084 = state_19050__$1;
(statearr_19058_19084[(2)] = inst_19040);

(statearr_19058_19084[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (13))){
var state_19050__$1 = state_19050;
var statearr_19059_19085 = state_19050__$1;
(statearr_19059_19085[(2)] = null);

(statearr_19059_19085[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (6))){
var inst_19010 = (state_19050[(8)]);
var inst_19035 = inst_19010.length;
var inst_19036 = (inst_19035 > (0));
var state_19050__$1 = state_19050;
if(cljs.core.truth_(inst_19036)){
var statearr_19060_19086 = state_19050__$1;
(statearr_19060_19086[(1)] = (12));

} else {
var statearr_19061_19087 = state_19050__$1;
(statearr_19061_19087[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (3))){
var inst_19048 = (state_19050[(2)]);
var state_19050__$1 = state_19050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19050__$1,inst_19048);
} else {
if((state_val_19051 === (12))){
var inst_19010 = (state_19050[(8)]);
var inst_19038 = cljs.core.vec(inst_19010);
var state_19050__$1 = state_19050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19050__$1,(15),out,inst_19038);
} else {
if((state_val_19051 === (2))){
var state_19050__$1 = state_19050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19050__$1,(4),ch);
} else {
if((state_val_19051 === (11))){
var inst_19018 = (state_19050[(10)]);
var inst_19014 = (state_19050[(9)]);
var inst_19028 = (state_19050[(2)]);
var inst_19029 = [];
var inst_19030 = inst_19029.push(inst_19014);
var inst_19010 = inst_19029;
var inst_19011 = inst_19018;
var state_19050__$1 = (function (){var statearr_19062 = state_19050;
(statearr_19062[(11)] = inst_19028);

(statearr_19062[(7)] = inst_19011);

(statearr_19062[(8)] = inst_19010);

(statearr_19062[(12)] = inst_19030);

return statearr_19062;
})();
var statearr_19063_19088 = state_19050__$1;
(statearr_19063_19088[(2)] = null);

(statearr_19063_19088[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (9))){
var inst_19010 = (state_19050[(8)]);
var inst_19026 = cljs.core.vec(inst_19010);
var state_19050__$1 = state_19050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19050__$1,(11),out,inst_19026);
} else {
if((state_val_19051 === (5))){
var inst_19018 = (state_19050[(10)]);
var inst_19011 = (state_19050[(7)]);
var inst_19014 = (state_19050[(9)]);
var inst_19018__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19014) : f.call(null,inst_19014));
var inst_19019 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19018__$1,inst_19011);
var inst_19020 = cljs.core.keyword_identical_QMARK_(inst_19011,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19021 = ((inst_19019) || (inst_19020));
var state_19050__$1 = (function (){var statearr_19064 = state_19050;
(statearr_19064[(10)] = inst_19018__$1);

return statearr_19064;
})();
if(cljs.core.truth_(inst_19021)){
var statearr_19065_19089 = state_19050__$1;
(statearr_19065_19089[(1)] = (8));

} else {
var statearr_19066_19090 = state_19050__$1;
(statearr_19066_19090[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (14))){
var inst_19043 = (state_19050[(2)]);
var inst_19044 = cljs.core.async.close_BANG_(out);
var state_19050__$1 = (function (){var statearr_19068 = state_19050;
(statearr_19068[(13)] = inst_19043);

return statearr_19068;
})();
var statearr_19069_19091 = state_19050__$1;
(statearr_19069_19091[(2)] = inst_19044);

(statearr_19069_19091[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (10))){
var inst_19033 = (state_19050[(2)]);
var state_19050__$1 = state_19050;
var statearr_19070_19092 = state_19050__$1;
(statearr_19070_19092[(2)] = inst_19033);

(statearr_19070_19092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19051 === (8))){
var inst_19018 = (state_19050[(10)]);
var inst_19014 = (state_19050[(9)]);
var inst_19010 = (state_19050[(8)]);
var inst_19023 = inst_19010.push(inst_19014);
var tmp19067 = inst_19010;
var inst_19010__$1 = tmp19067;
var inst_19011 = inst_19018;
var state_19050__$1 = (function (){var statearr_19071 = state_19050;
(statearr_19071[(7)] = inst_19011);

(statearr_19071[(14)] = inst_19023);

(statearr_19071[(8)] = inst_19010__$1);

return statearr_19071;
})();
var statearr_19072_19093 = state_19050__$1;
(statearr_19072_19093[(2)] = null);

(statearr_19072_19093[(1)] = (2));


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
var cljs$core$async$state_machine__17032__auto__ = null;
var cljs$core$async$state_machine__17032__auto____0 = (function (){
var statearr_19073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19073[(0)] = cljs$core$async$state_machine__17032__auto__);

(statearr_19073[(1)] = (1));

return statearr_19073;
});
var cljs$core$async$state_machine__17032__auto____1 = (function (state_19050){
while(true){
var ret_value__17033__auto__ = (function (){try{while(true){
var result__17034__auto__ = switch__17031__auto__(state_19050);
if(cljs.core.keyword_identical_QMARK_(result__17034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17034__auto__;
}
break;
}
}catch (e19074){var ex__17035__auto__ = e19074;
var statearr_19075_19094 = state_19050;
(statearr_19075_19094[(2)] = ex__17035__auto__);


if(cljs.core.seq((state_19050[(4)]))){
var statearr_19076_19095 = state_19050;
(statearr_19076_19095[(1)] = cljs.core.first((state_19050[(4)])));

} else {
throw ex__17035__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17033__auto__,cljs.core.cst$kw$recur)){
var G__19096 = state_19050;
state_19050 = G__19096;
continue;
} else {
return ret_value__17033__auto__;
}
break;
}
});
cljs$core$async$state_machine__17032__auto__ = function(state_19050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17032__auto____1.call(this,state_19050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17032__auto____0;
cljs$core$async$state_machine__17032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17032__auto____1;
return cljs$core$async$state_machine__17032__auto__;
})()
})();
var state__17108__auto__ = (function (){var statearr_19077 = (f__17107__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17107__auto__.cljs$core$IFn$_invoke$arity$0() : f__17107__auto__.call(null));
(statearr_19077[(6)] = c__17106__auto___19079);

return statearr_19077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17108__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

