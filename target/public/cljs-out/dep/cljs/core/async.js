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
var G__18928 = arguments.length;
switch (G__18928) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18929 = (function (f,blockable,meta18930){
this.f = f;
this.blockable = blockable;
this.meta18930 = meta18930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18931,meta18930__$1){
var self__ = this;
var _18931__$1 = this;
return (new cljs.core.async.t_cljs$core$async18929(self__.f,self__.blockable,meta18930__$1));
}));

(cljs.core.async.t_cljs$core$async18929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18931){
var self__ = this;
var _18931__$1 = this;
return self__.meta18930;
}));

(cljs.core.async.t_cljs$core$async18929.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18930","meta18930",-801554511,null)], null);
}));

(cljs.core.async.t_cljs$core$async18929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18929");

(cljs.core.async.t_cljs$core$async18929.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18929.
 */
cljs.core.async.__GT_t_cljs$core$async18929 = (function cljs$core$async$__GT_t_cljs$core$async18929(f__$1,blockable__$1,meta18930){
return (new cljs.core.async.t_cljs$core$async18929(f__$1,blockable__$1,meta18930));
});

}

return (new cljs.core.async.t_cljs$core$async18929(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18935 = arguments.length;
switch (G__18935) {
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
var G__18938 = arguments.length;
switch (G__18938) {
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
var G__18941 = arguments.length;
switch (G__18941) {
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
var val_18943 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18943);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_18943);
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
var G__18945 = arguments.length;
switch (G__18945) {
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
var n__4613__auto___18947 = n;
var x_18948 = (0);
while(true){
if((x_18948 < n__4613__auto___18947)){
(a[x_18948] = x_18948);

var G__18949 = (x_18948 + (1));
x_18948 = G__18949;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18950 = (function (flag,meta18951){
this.flag = flag;
this.meta18951 = meta18951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18952,meta18951__$1){
var self__ = this;
var _18952__$1 = this;
return (new cljs.core.async.t_cljs$core$async18950(self__.flag,meta18951__$1));
}));

(cljs.core.async.t_cljs$core$async18950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18952){
var self__ = this;
var _18952__$1 = this;
return self__.meta18951;
}));

(cljs.core.async.t_cljs$core$async18950.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18950.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18951","meta18951",1257881225,null)], null);
}));

(cljs.core.async.t_cljs$core$async18950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18950");

(cljs.core.async.t_cljs$core$async18950.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18950.
 */
cljs.core.async.__GT_t_cljs$core$async18950 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18950(flag__$1,meta18951){
return (new cljs.core.async.t_cljs$core$async18950(flag__$1,meta18951));
});

}

return (new cljs.core.async.t_cljs$core$async18950(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18953 = (function (flag,cb,meta18954){
this.flag = flag;
this.cb = cb;
this.meta18954 = meta18954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18955,meta18954__$1){
var self__ = this;
var _18955__$1 = this;
return (new cljs.core.async.t_cljs$core$async18953(self__.flag,self__.cb,meta18954__$1));
}));

(cljs.core.async.t_cljs$core$async18953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18955){
var self__ = this;
var _18955__$1 = this;
return self__.meta18954;
}));

(cljs.core.async.t_cljs$core$async18953.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18953.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18954","meta18954",1234412557,null)], null);
}));

(cljs.core.async.t_cljs$core$async18953.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18953");

(cljs.core.async.t_cljs$core$async18953.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18953");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18953.
 */
cljs.core.async.__GT_t_cljs$core$async18953 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18953(flag__$1,cb__$1,meta18954){
return (new cljs.core.async.t_cljs$core$async18953(flag__$1,cb__$1,meta18954));
});

}

return (new cljs.core.async.t_cljs$core$async18953(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18956_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18956_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18957_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18957_SHARP_,port], null));
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
var G__18958 = (i + (1));
i = G__18958;
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
var len__4736__auto___18964 = arguments.length;
var i__4737__auto___18965 = (0);
while(true){
if((i__4737__auto___18965 < len__4736__auto___18964)){
args__4742__auto__.push((arguments[i__4737__auto___18965]));

var G__18966 = (i__4737__auto___18965 + (1));
i__4737__auto___18965 = G__18966;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18961){
var map__18962 = p__18961;
var map__18962__$1 = (((((!((map__18962 == null))))?(((((map__18962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18962):map__18962);
var opts = map__18962__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18959){
var G__18960 = cljs.core.first.call(null,seq18959);
var seq18959__$1 = cljs.core.next.call(null,seq18959);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18960,seq18959__$1);
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
var G__18968 = arguments.length;
switch (G__18968) {
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
var c__18868__auto___19015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_18992){
var state_val_18993 = (state_18992[(1)]);
if((state_val_18993 === (7))){
var inst_18988 = (state_18992[(2)]);
var state_18992__$1 = state_18992;
var statearr_18994_19016 = state_18992__$1;
(statearr_18994_19016[(2)] = inst_18988);

(statearr_18994_19016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (1))){
var state_18992__$1 = state_18992;
var statearr_18995_19017 = state_18992__$1;
(statearr_18995_19017[(2)] = null);

(statearr_18995_19017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (4))){
var inst_18971 = (state_18992[(7)]);
var inst_18971__$1 = (state_18992[(2)]);
var inst_18972 = (inst_18971__$1 == null);
var state_18992__$1 = (function (){var statearr_18996 = state_18992;
(statearr_18996[(7)] = inst_18971__$1);

return statearr_18996;
})();
if(cljs.core.truth_(inst_18972)){
var statearr_18997_19018 = state_18992__$1;
(statearr_18997_19018[(1)] = (5));

} else {
var statearr_18998_19019 = state_18992__$1;
(statearr_18998_19019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (13))){
var state_18992__$1 = state_18992;
var statearr_18999_19020 = state_18992__$1;
(statearr_18999_19020[(2)] = null);

(statearr_18999_19020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (6))){
var inst_18971 = (state_18992[(7)]);
var state_18992__$1 = state_18992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18992__$1,(11),to,inst_18971);
} else {
if((state_val_18993 === (3))){
var inst_18990 = (state_18992[(2)]);
var state_18992__$1 = state_18992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18992__$1,inst_18990);
} else {
if((state_val_18993 === (12))){
var state_18992__$1 = state_18992;
var statearr_19000_19021 = state_18992__$1;
(statearr_19000_19021[(2)] = null);

(statearr_19000_19021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (2))){
var state_18992__$1 = state_18992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18992__$1,(4),from);
} else {
if((state_val_18993 === (11))){
var inst_18981 = (state_18992[(2)]);
var state_18992__$1 = state_18992;
if(cljs.core.truth_(inst_18981)){
var statearr_19001_19022 = state_18992__$1;
(statearr_19001_19022[(1)] = (12));

} else {
var statearr_19002_19023 = state_18992__$1;
(statearr_19002_19023[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (9))){
var state_18992__$1 = state_18992;
var statearr_19003_19024 = state_18992__$1;
(statearr_19003_19024[(2)] = null);

(statearr_19003_19024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (5))){
var state_18992__$1 = state_18992;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19004_19025 = state_18992__$1;
(statearr_19004_19025[(1)] = (8));

} else {
var statearr_19005_19026 = state_18992__$1;
(statearr_19005_19026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (14))){
var inst_18986 = (state_18992[(2)]);
var state_18992__$1 = state_18992;
var statearr_19006_19027 = state_18992__$1;
(statearr_19006_19027[(2)] = inst_18986);

(statearr_19006_19027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (10))){
var inst_18978 = (state_18992[(2)]);
var state_18992__$1 = state_18992;
var statearr_19007_19028 = state_18992__$1;
(statearr_19007_19028[(2)] = inst_18978);

(statearr_19007_19028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (8))){
var inst_18975 = cljs.core.async.close_BANG_.call(null,to);
var state_18992__$1 = state_18992;
var statearr_19008_19029 = state_18992__$1;
(statearr_19008_19029[(2)] = inst_18975);

(statearr_19008_19029[(1)] = (10));


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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_19009 = [null,null,null,null,null,null,null,null];
(statearr_19009[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_19009[(1)] = (1));

return statearr_19009;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_18992){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_18992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19010){var ex__18798__auto__ = e19010;
var statearr_19011_19030 = state_18992;
(statearr_19011_19030[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_18992[(4)]))){
var statearr_19012_19031 = state_18992;
(statearr_19012_19031[(1)] = cljs.core.first.call(null,(state_18992[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19032 = state_18992;
state_18992 = G__19032;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_18992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_18992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19013 = f__18869__auto__.call(null);
(statearr_19013[(6)] = c__18868__auto___19015);

return statearr_19013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
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
var process = (function (p__19033){
var vec__19034 = p__19033;
var v = cljs.core.nth.call(null,vec__19034,(0),null);
var p = cljs.core.nth.call(null,vec__19034,(1),null);
var job = vec__19034;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18868__auto___19210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19041){
var state_val_19042 = (state_19041[(1)]);
if((state_val_19042 === (1))){
var state_19041__$1 = state_19041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19041__$1,(2),res,v);
} else {
if((state_val_19042 === (2))){
var inst_19038 = (state_19041[(2)]);
var inst_19039 = cljs.core.async.close_BANG_.call(null,res);
var state_19041__$1 = (function (){var statearr_19043 = state_19041;
(statearr_19043[(7)] = inst_19038);

return statearr_19043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19041__$1,inst_19039);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0 = (function (){
var statearr_19044 = [null,null,null,null,null,null,null,null];
(statearr_19044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__);

(statearr_19044[(1)] = (1));

return statearr_19044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1 = (function (state_19041){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19045){var ex__18798__auto__ = e19045;
var statearr_19046_19211 = state_19041;
(statearr_19046_19211[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19041[(4)]))){
var statearr_19047_19212 = state_19041;
(statearr_19047_19212[(1)] = cljs.core.first.call(null,(state_19041[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19213 = state_19041;
state_19041 = G__19213;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = function(state_19041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1.call(this,state_19041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19048 = f__18869__auto__.call(null);
(statearr_19048[(6)] = c__18868__auto___19210);

return statearr_19048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__19049){
var vec__19050 = p__19049;
var v = cljs.core.nth.call(null,vec__19050,(0),null);
var p = cljs.core.nth.call(null,vec__19050,(1),null);
var job = vec__19050;
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
var n__4613__auto___19214 = n;
var __19215 = (0);
while(true){
if((__19215 < n__4613__auto___19214)){
var G__19053_19216 = type;
var G__19053_19217__$1 = (((G__19053_19216 instanceof cljs.core.Keyword))?G__19053_19216.fqn:null);
switch (G__19053_19217__$1) {
case "compute":
var c__18868__auto___19219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19215,c__18868__auto___19219,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async){
return (function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = ((function (__19215,c__18868__auto___19219,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async){
return (function (state_19066){
var state_val_19067 = (state_19066[(1)]);
if((state_val_19067 === (1))){
var state_19066__$1 = state_19066;
var statearr_19068_19220 = state_19066__$1;
(statearr_19068_19220[(2)] = null);

(statearr_19068_19220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (2))){
var state_19066__$1 = state_19066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19066__$1,(4),jobs);
} else {
if((state_val_19067 === (3))){
var inst_19064 = (state_19066[(2)]);
var state_19066__$1 = state_19066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19066__$1,inst_19064);
} else {
if((state_val_19067 === (4))){
var inst_19056 = (state_19066[(2)]);
var inst_19057 = process.call(null,inst_19056);
var state_19066__$1 = state_19066;
if(cljs.core.truth_(inst_19057)){
var statearr_19069_19221 = state_19066__$1;
(statearr_19069_19221[(1)] = (5));

} else {
var statearr_19070_19222 = state_19066__$1;
(statearr_19070_19222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (5))){
var state_19066__$1 = state_19066;
var statearr_19071_19223 = state_19066__$1;
(statearr_19071_19223[(2)] = null);

(statearr_19071_19223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (6))){
var state_19066__$1 = state_19066;
var statearr_19072_19224 = state_19066__$1;
(statearr_19072_19224[(2)] = null);

(statearr_19072_19224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19067 === (7))){
var inst_19062 = (state_19066[(2)]);
var state_19066__$1 = state_19066;
var statearr_19073_19225 = state_19066__$1;
(statearr_19073_19225[(2)] = inst_19062);

(statearr_19073_19225[(1)] = (3));


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
});})(__19215,c__18868__auto___19219,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async))
;
return ((function (__19215,switch__18794__auto__,c__18868__auto___19219,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0 = (function (){
var statearr_19074 = [null,null,null,null,null,null,null];
(statearr_19074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__);

(statearr_19074[(1)] = (1));

return statearr_19074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1 = (function (state_19066){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19075){var ex__18798__auto__ = e19075;
var statearr_19076_19226 = state_19066;
(statearr_19076_19226[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19066[(4)]))){
var statearr_19077_19227 = state_19066;
(statearr_19077_19227[(1)] = cljs.core.first.call(null,(state_19066[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19228 = state_19066;
state_19066 = G__19228;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = function(state_19066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1.call(this,state_19066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__;
})()
;})(__19215,switch__18794__auto__,c__18868__auto___19219,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async))
})();
var state__18870__auto__ = (function (){var statearr_19078 = f__18869__auto__.call(null);
(statearr_19078[(6)] = c__18868__auto___19219);

return statearr_19078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
});})(__19215,c__18868__auto___19219,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async))
);


break;
case "async":
var c__18868__auto___19229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19215,c__18868__auto___19229,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async){
return (function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = ((function (__19215,c__18868__auto___19229,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async){
return (function (state_19091){
var state_val_19092 = (state_19091[(1)]);
if((state_val_19092 === (1))){
var state_19091__$1 = state_19091;
var statearr_19093_19230 = state_19091__$1;
(statearr_19093_19230[(2)] = null);

(statearr_19093_19230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19092 === (2))){
var state_19091__$1 = state_19091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19091__$1,(4),jobs);
} else {
if((state_val_19092 === (3))){
var inst_19089 = (state_19091[(2)]);
var state_19091__$1 = state_19091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19091__$1,inst_19089);
} else {
if((state_val_19092 === (4))){
var inst_19081 = (state_19091[(2)]);
var inst_19082 = async.call(null,inst_19081);
var state_19091__$1 = state_19091;
if(cljs.core.truth_(inst_19082)){
var statearr_19094_19231 = state_19091__$1;
(statearr_19094_19231[(1)] = (5));

} else {
var statearr_19095_19232 = state_19091__$1;
(statearr_19095_19232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19092 === (5))){
var state_19091__$1 = state_19091;
var statearr_19096_19233 = state_19091__$1;
(statearr_19096_19233[(2)] = null);

(statearr_19096_19233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19092 === (6))){
var state_19091__$1 = state_19091;
var statearr_19097_19234 = state_19091__$1;
(statearr_19097_19234[(2)] = null);

(statearr_19097_19234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19092 === (7))){
var inst_19087 = (state_19091[(2)]);
var state_19091__$1 = state_19091;
var statearr_19098_19235 = state_19091__$1;
(statearr_19098_19235[(2)] = inst_19087);

(statearr_19098_19235[(1)] = (3));


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
});})(__19215,c__18868__auto___19229,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async))
;
return ((function (__19215,switch__18794__auto__,c__18868__auto___19229,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0 = (function (){
var statearr_19099 = [null,null,null,null,null,null,null];
(statearr_19099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__);

(statearr_19099[(1)] = (1));

return statearr_19099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1 = (function (state_19091){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19100){var ex__18798__auto__ = e19100;
var statearr_19101_19236 = state_19091;
(statearr_19101_19236[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19091[(4)]))){
var statearr_19102_19237 = state_19091;
(statearr_19102_19237[(1)] = cljs.core.first.call(null,(state_19091[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19238 = state_19091;
state_19091 = G__19238;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = function(state_19091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1.call(this,state_19091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__;
})()
;})(__19215,switch__18794__auto__,c__18868__auto___19229,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async))
})();
var state__18870__auto__ = (function (){var statearr_19103 = f__18869__auto__.call(null);
(statearr_19103[(6)] = c__18868__auto___19229);

return statearr_19103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
});})(__19215,c__18868__auto___19229,G__19053_19216,G__19053_19217__$1,n__4613__auto___19214,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19053_19217__$1)].join('')));

}

var G__19239 = (__19215 + (1));
__19215 = G__19239;
continue;
} else {
}
break;
}

var c__18868__auto___19240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19125){
var state_val_19126 = (state_19125[(1)]);
if((state_val_19126 === (7))){
var inst_19121 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
var statearr_19127_19241 = state_19125__$1;
(statearr_19127_19241[(2)] = inst_19121);

(statearr_19127_19241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (1))){
var state_19125__$1 = state_19125;
var statearr_19128_19242 = state_19125__$1;
(statearr_19128_19242[(2)] = null);

(statearr_19128_19242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (4))){
var inst_19106 = (state_19125[(7)]);
var inst_19106__$1 = (state_19125[(2)]);
var inst_19107 = (inst_19106__$1 == null);
var state_19125__$1 = (function (){var statearr_19129 = state_19125;
(statearr_19129[(7)] = inst_19106__$1);

return statearr_19129;
})();
if(cljs.core.truth_(inst_19107)){
var statearr_19130_19243 = state_19125__$1;
(statearr_19130_19243[(1)] = (5));

} else {
var statearr_19131_19244 = state_19125__$1;
(statearr_19131_19244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (6))){
var inst_19111 = (state_19125[(8)]);
var inst_19106 = (state_19125[(7)]);
var inst_19111__$1 = cljs.core.async.chan.call(null,(1));
var inst_19112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19113 = [inst_19106,inst_19111__$1];
var inst_19114 = (new cljs.core.PersistentVector(null,2,(5),inst_19112,inst_19113,null));
var state_19125__$1 = (function (){var statearr_19132 = state_19125;
(statearr_19132[(8)] = inst_19111__$1);

return statearr_19132;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19125__$1,(8),jobs,inst_19114);
} else {
if((state_val_19126 === (3))){
var inst_19123 = (state_19125[(2)]);
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19125__$1,inst_19123);
} else {
if((state_val_19126 === (2))){
var state_19125__$1 = state_19125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19125__$1,(4),from);
} else {
if((state_val_19126 === (9))){
var inst_19118 = (state_19125[(2)]);
var state_19125__$1 = (function (){var statearr_19133 = state_19125;
(statearr_19133[(9)] = inst_19118);

return statearr_19133;
})();
var statearr_19134_19245 = state_19125__$1;
(statearr_19134_19245[(2)] = null);

(statearr_19134_19245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (5))){
var inst_19109 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19125__$1 = state_19125;
var statearr_19135_19246 = state_19125__$1;
(statearr_19135_19246[(2)] = inst_19109);

(statearr_19135_19246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19126 === (8))){
var inst_19111 = (state_19125[(8)]);
var inst_19116 = (state_19125[(2)]);
var state_19125__$1 = (function (){var statearr_19136 = state_19125;
(statearr_19136[(10)] = inst_19116);

return statearr_19136;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19125__$1,(9),results,inst_19111);
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
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0 = (function (){
var statearr_19137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__);

(statearr_19137[(1)] = (1));

return statearr_19137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1 = (function (state_19125){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19138){var ex__18798__auto__ = e19138;
var statearr_19139_19247 = state_19125;
(statearr_19139_19247[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19125[(4)]))){
var statearr_19140_19248 = state_19125;
(statearr_19140_19248[(1)] = cljs.core.first.call(null,(state_19125[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19249 = state_19125;
state_19125 = G__19249;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = function(state_19125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1.call(this,state_19125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19141 = f__18869__auto__.call(null);
(statearr_19141[(6)] = c__18868__auto___19240);

return statearr_19141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));


var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19179){
var state_val_19180 = (state_19179[(1)]);
if((state_val_19180 === (7))){
var inst_19175 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19181_19250 = state_19179__$1;
(statearr_19181_19250[(2)] = inst_19175);

(statearr_19181_19250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (20))){
var state_19179__$1 = state_19179;
var statearr_19182_19251 = state_19179__$1;
(statearr_19182_19251[(2)] = null);

(statearr_19182_19251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (1))){
var state_19179__$1 = state_19179;
var statearr_19183_19252 = state_19179__$1;
(statearr_19183_19252[(2)] = null);

(statearr_19183_19252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (4))){
var inst_19144 = (state_19179[(7)]);
var inst_19144__$1 = (state_19179[(2)]);
var inst_19145 = (inst_19144__$1 == null);
var state_19179__$1 = (function (){var statearr_19184 = state_19179;
(statearr_19184[(7)] = inst_19144__$1);

return statearr_19184;
})();
if(cljs.core.truth_(inst_19145)){
var statearr_19185_19253 = state_19179__$1;
(statearr_19185_19253[(1)] = (5));

} else {
var statearr_19186_19254 = state_19179__$1;
(statearr_19186_19254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (15))){
var inst_19157 = (state_19179[(8)]);
var state_19179__$1 = state_19179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19179__$1,(18),to,inst_19157);
} else {
if((state_val_19180 === (21))){
var inst_19170 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19187_19255 = state_19179__$1;
(statearr_19187_19255[(2)] = inst_19170);

(statearr_19187_19255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (13))){
var inst_19172 = (state_19179[(2)]);
var state_19179__$1 = (function (){var statearr_19188 = state_19179;
(statearr_19188[(9)] = inst_19172);

return statearr_19188;
})();
var statearr_19189_19256 = state_19179__$1;
(statearr_19189_19256[(2)] = null);

(statearr_19189_19256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (6))){
var inst_19144 = (state_19179[(7)]);
var state_19179__$1 = state_19179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19179__$1,(11),inst_19144);
} else {
if((state_val_19180 === (17))){
var inst_19165 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
if(cljs.core.truth_(inst_19165)){
var statearr_19190_19257 = state_19179__$1;
(statearr_19190_19257[(1)] = (19));

} else {
var statearr_19191_19258 = state_19179__$1;
(statearr_19191_19258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (3))){
var inst_19177 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19179__$1,inst_19177);
} else {
if((state_val_19180 === (12))){
var inst_19154 = (state_19179[(10)]);
var state_19179__$1 = state_19179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19179__$1,(14),inst_19154);
} else {
if((state_val_19180 === (2))){
var state_19179__$1 = state_19179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19179__$1,(4),results);
} else {
if((state_val_19180 === (19))){
var state_19179__$1 = state_19179;
var statearr_19192_19259 = state_19179__$1;
(statearr_19192_19259[(2)] = null);

(statearr_19192_19259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (11))){
var inst_19154 = (state_19179[(2)]);
var state_19179__$1 = (function (){var statearr_19193 = state_19179;
(statearr_19193[(10)] = inst_19154);

return statearr_19193;
})();
var statearr_19194_19260 = state_19179__$1;
(statearr_19194_19260[(2)] = null);

(statearr_19194_19260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (9))){
var state_19179__$1 = state_19179;
var statearr_19195_19261 = state_19179__$1;
(statearr_19195_19261[(2)] = null);

(statearr_19195_19261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (5))){
var state_19179__$1 = state_19179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19196_19262 = state_19179__$1;
(statearr_19196_19262[(1)] = (8));

} else {
var statearr_19197_19263 = state_19179__$1;
(statearr_19197_19263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (14))){
var inst_19157 = (state_19179[(8)]);
var inst_19157__$1 = (state_19179[(2)]);
var inst_19158 = (inst_19157__$1 == null);
var inst_19159 = cljs.core.not.call(null,inst_19158);
var state_19179__$1 = (function (){var statearr_19198 = state_19179;
(statearr_19198[(8)] = inst_19157__$1);

return statearr_19198;
})();
if(inst_19159){
var statearr_19199_19264 = state_19179__$1;
(statearr_19199_19264[(1)] = (15));

} else {
var statearr_19200_19265 = state_19179__$1;
(statearr_19200_19265[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (16))){
var state_19179__$1 = state_19179;
var statearr_19201_19266 = state_19179__$1;
(statearr_19201_19266[(2)] = false);

(statearr_19201_19266[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (10))){
var inst_19151 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19202_19267 = state_19179__$1;
(statearr_19202_19267[(2)] = inst_19151);

(statearr_19202_19267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (18))){
var inst_19162 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19203_19268 = state_19179__$1;
(statearr_19203_19268[(2)] = inst_19162);

(statearr_19203_19268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (8))){
var inst_19148 = cljs.core.async.close_BANG_.call(null,to);
var state_19179__$1 = state_19179;
var statearr_19204_19269 = state_19179__$1;
(statearr_19204_19269[(2)] = inst_19148);

(statearr_19204_19269[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0 = (function (){
var statearr_19205 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__);

(statearr_19205[(1)] = (1));

return statearr_19205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1 = (function (state_19179){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19206){var ex__18798__auto__ = e19206;
var statearr_19207_19270 = state_19179;
(statearr_19207_19270[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19179[(4)]))){
var statearr_19208_19271 = state_19179;
(statearr_19208_19271[(1)] = cljs.core.first.call(null,(state_19179[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19272 = state_19179;
state_19179 = G__19272;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__ = function(state_19179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1.call(this,state_19179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19209 = f__18869__auto__.call(null);
(statearr_19209[(6)] = c__18868__auto__);

return statearr_19209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
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
var G__19274 = arguments.length;
switch (G__19274) {
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
var G__19277 = arguments.length;
switch (G__19277) {
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
var G__19280 = arguments.length;
switch (G__19280) {
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
var c__18868__auto___19330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19306){
var state_val_19307 = (state_19306[(1)]);
if((state_val_19307 === (7))){
var inst_19302 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19308_19331 = state_19306__$1;
(statearr_19308_19331[(2)] = inst_19302);

(statearr_19308_19331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (1))){
var state_19306__$1 = state_19306;
var statearr_19309_19332 = state_19306__$1;
(statearr_19309_19332[(2)] = null);

(statearr_19309_19332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (4))){
var inst_19283 = (state_19306[(7)]);
var inst_19283__$1 = (state_19306[(2)]);
var inst_19284 = (inst_19283__$1 == null);
var state_19306__$1 = (function (){var statearr_19310 = state_19306;
(statearr_19310[(7)] = inst_19283__$1);

return statearr_19310;
})();
if(cljs.core.truth_(inst_19284)){
var statearr_19311_19333 = state_19306__$1;
(statearr_19311_19333[(1)] = (5));

} else {
var statearr_19312_19334 = state_19306__$1;
(statearr_19312_19334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (13))){
var state_19306__$1 = state_19306;
var statearr_19313_19335 = state_19306__$1;
(statearr_19313_19335[(2)] = null);

(statearr_19313_19335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (6))){
var inst_19283 = (state_19306[(7)]);
var inst_19289 = p.call(null,inst_19283);
var state_19306__$1 = state_19306;
if(cljs.core.truth_(inst_19289)){
var statearr_19314_19336 = state_19306__$1;
(statearr_19314_19336[(1)] = (9));

} else {
var statearr_19315_19337 = state_19306__$1;
(statearr_19315_19337[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (3))){
var inst_19304 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19306__$1,inst_19304);
} else {
if((state_val_19307 === (12))){
var state_19306__$1 = state_19306;
var statearr_19316_19338 = state_19306__$1;
(statearr_19316_19338[(2)] = null);

(statearr_19316_19338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (2))){
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19306__$1,(4),ch);
} else {
if((state_val_19307 === (11))){
var inst_19283 = (state_19306[(7)]);
var inst_19293 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19306__$1,(8),inst_19293,inst_19283);
} else {
if((state_val_19307 === (9))){
var state_19306__$1 = state_19306;
var statearr_19317_19339 = state_19306__$1;
(statearr_19317_19339[(2)] = tc);

(statearr_19317_19339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (5))){
var inst_19286 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19287 = cljs.core.async.close_BANG_.call(null,fc);
var state_19306__$1 = (function (){var statearr_19318 = state_19306;
(statearr_19318[(8)] = inst_19286);

return statearr_19318;
})();
var statearr_19319_19340 = state_19306__$1;
(statearr_19319_19340[(2)] = inst_19287);

(statearr_19319_19340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (14))){
var inst_19300 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19320_19341 = state_19306__$1;
(statearr_19320_19341[(2)] = inst_19300);

(statearr_19320_19341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (10))){
var state_19306__$1 = state_19306;
var statearr_19321_19342 = state_19306__$1;
(statearr_19321_19342[(2)] = fc);

(statearr_19321_19342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (8))){
var inst_19295 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
if(cljs.core.truth_(inst_19295)){
var statearr_19322_19343 = state_19306__$1;
(statearr_19322_19343[(1)] = (12));

} else {
var statearr_19323_19344 = state_19306__$1;
(statearr_19323_19344[(1)] = (13));

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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_19324 = [null,null,null,null,null,null,null,null,null];
(statearr_19324[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_19324[(1)] = (1));

return statearr_19324;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_19306){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19325){var ex__18798__auto__ = e19325;
var statearr_19326_19345 = state_19306;
(statearr_19326_19345[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19306[(4)]))){
var statearr_19327_19346 = state_19306;
(statearr_19327_19346[(1)] = cljs.core.first.call(null,(state_19306[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19347 = state_19306;
state_19306 = G__19347;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_19306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_19306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19328 = f__18869__auto__.call(null);
(statearr_19328[(6)] = c__18868__auto___19330);

return statearr_19328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
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
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19369){
var state_val_19370 = (state_19369[(1)]);
if((state_val_19370 === (7))){
var inst_19365 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19371_19390 = state_19369__$1;
(statearr_19371_19390[(2)] = inst_19365);

(statearr_19371_19390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (1))){
var inst_19348 = init;
var inst_19349 = inst_19348;
var state_19369__$1 = (function (){var statearr_19372 = state_19369;
(statearr_19372[(7)] = inst_19349);

return statearr_19372;
})();
var statearr_19373_19391 = state_19369__$1;
(statearr_19373_19391[(2)] = null);

(statearr_19373_19391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (4))){
var inst_19352 = (state_19369[(8)]);
var inst_19352__$1 = (state_19369[(2)]);
var inst_19353 = (inst_19352__$1 == null);
var state_19369__$1 = (function (){var statearr_19374 = state_19369;
(statearr_19374[(8)] = inst_19352__$1);

return statearr_19374;
})();
if(cljs.core.truth_(inst_19353)){
var statearr_19375_19392 = state_19369__$1;
(statearr_19375_19392[(1)] = (5));

} else {
var statearr_19376_19393 = state_19369__$1;
(statearr_19376_19393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (6))){
var inst_19349 = (state_19369[(7)]);
var inst_19356 = (state_19369[(9)]);
var inst_19352 = (state_19369[(8)]);
var inst_19356__$1 = f.call(null,inst_19349,inst_19352);
var inst_19357 = cljs.core.reduced_QMARK_.call(null,inst_19356__$1);
var state_19369__$1 = (function (){var statearr_19377 = state_19369;
(statearr_19377[(9)] = inst_19356__$1);

return statearr_19377;
})();
if(inst_19357){
var statearr_19378_19394 = state_19369__$1;
(statearr_19378_19394[(1)] = (8));

} else {
var statearr_19379_19395 = state_19369__$1;
(statearr_19379_19395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (3))){
var inst_19367 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19369__$1,inst_19367);
} else {
if((state_val_19370 === (2))){
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19369__$1,(4),ch);
} else {
if((state_val_19370 === (9))){
var inst_19356 = (state_19369[(9)]);
var inst_19349 = inst_19356;
var state_19369__$1 = (function (){var statearr_19380 = state_19369;
(statearr_19380[(7)] = inst_19349);

return statearr_19380;
})();
var statearr_19381_19396 = state_19369__$1;
(statearr_19381_19396[(2)] = null);

(statearr_19381_19396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (5))){
var inst_19349 = (state_19369[(7)]);
var state_19369__$1 = state_19369;
var statearr_19382_19397 = state_19369__$1;
(statearr_19382_19397[(2)] = inst_19349);

(statearr_19382_19397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (10))){
var inst_19363 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19383_19398 = state_19369__$1;
(statearr_19383_19398[(2)] = inst_19363);

(statearr_19383_19398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (8))){
var inst_19356 = (state_19369[(9)]);
var inst_19359 = cljs.core.deref.call(null,inst_19356);
var state_19369__$1 = state_19369;
var statearr_19384_19399 = state_19369__$1;
(statearr_19384_19399[(2)] = inst_19359);

(statearr_19384_19399[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__18795__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18795__auto____0 = (function (){
var statearr_19385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19385[(0)] = cljs$core$async$reduce_$_state_machine__18795__auto__);

(statearr_19385[(1)] = (1));

return statearr_19385;
});
var cljs$core$async$reduce_$_state_machine__18795__auto____1 = (function (state_19369){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19386){var ex__18798__auto__ = e19386;
var statearr_19387_19400 = state_19369;
(statearr_19387_19400[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19369[(4)]))){
var statearr_19388_19401 = state_19369;
(statearr_19388_19401[(1)] = cljs.core.first.call(null,(state_19369[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19402 = state_19369;
state_19369 = G__19402;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18795__auto__ = function(state_19369){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18795__auto____1.call(this,state_19369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18795__auto____0;
cljs$core$async$reduce_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18795__auto____1;
return cljs$core$async$reduce_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19389 = f__18869__auto__.call(null);
(statearr_19389[(6)] = c__18868__auto__);

return statearr_19389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19408){
var state_val_19409 = (state_19408[(1)]);
if((state_val_19409 === (1))){
var inst_19403 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19408__$1 = state_19408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19408__$1,(2),inst_19403);
} else {
if((state_val_19409 === (2))){
var inst_19405 = (state_19408[(2)]);
var inst_19406 = f__$1.call(null,inst_19405);
var state_19408__$1 = state_19408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19408__$1,inst_19406);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18795__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18795__auto____0 = (function (){
var statearr_19410 = [null,null,null,null,null,null,null];
(statearr_19410[(0)] = cljs$core$async$transduce_$_state_machine__18795__auto__);

(statearr_19410[(1)] = (1));

return statearr_19410;
});
var cljs$core$async$transduce_$_state_machine__18795__auto____1 = (function (state_19408){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19411){var ex__18798__auto__ = e19411;
var statearr_19412_19415 = state_19408;
(statearr_19412_19415[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19408[(4)]))){
var statearr_19413_19416 = state_19408;
(statearr_19413_19416[(1)] = cljs.core.first.call(null,(state_19408[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19417 = state_19408;
state_19408 = G__19417;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18795__auto__ = function(state_19408){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18795__auto____1.call(this,state_19408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18795__auto____0;
cljs$core$async$transduce_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18795__auto____1;
return cljs$core$async$transduce_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19414 = f__18869__auto__.call(null);
(statearr_19414[(6)] = c__18868__auto__);

return statearr_19414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
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
var G__19419 = arguments.length;
switch (G__19419) {
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
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19444){
var state_val_19445 = (state_19444[(1)]);
if((state_val_19445 === (7))){
var inst_19426 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
var statearr_19446_19468 = state_19444__$1;
(statearr_19446_19468[(2)] = inst_19426);

(statearr_19446_19468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (1))){
var inst_19420 = cljs.core.seq.call(null,coll);
var inst_19421 = inst_19420;
var state_19444__$1 = (function (){var statearr_19447 = state_19444;
(statearr_19447[(7)] = inst_19421);

return statearr_19447;
})();
var statearr_19448_19469 = state_19444__$1;
(statearr_19448_19469[(2)] = null);

(statearr_19448_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (4))){
var inst_19421 = (state_19444[(7)]);
var inst_19424 = cljs.core.first.call(null,inst_19421);
var state_19444__$1 = state_19444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19444__$1,(7),ch,inst_19424);
} else {
if((state_val_19445 === (13))){
var inst_19438 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
var statearr_19449_19470 = state_19444__$1;
(statearr_19449_19470[(2)] = inst_19438);

(statearr_19449_19470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (6))){
var inst_19429 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
if(cljs.core.truth_(inst_19429)){
var statearr_19450_19471 = state_19444__$1;
(statearr_19450_19471[(1)] = (8));

} else {
var statearr_19451_19472 = state_19444__$1;
(statearr_19451_19472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (3))){
var inst_19442 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19444__$1,inst_19442);
} else {
if((state_val_19445 === (12))){
var state_19444__$1 = state_19444;
var statearr_19452_19473 = state_19444__$1;
(statearr_19452_19473[(2)] = null);

(statearr_19452_19473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (2))){
var inst_19421 = (state_19444[(7)]);
var state_19444__$1 = state_19444;
if(cljs.core.truth_(inst_19421)){
var statearr_19453_19474 = state_19444__$1;
(statearr_19453_19474[(1)] = (4));

} else {
var statearr_19454_19475 = state_19444__$1;
(statearr_19454_19475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (11))){
var inst_19435 = cljs.core.async.close_BANG_.call(null,ch);
var state_19444__$1 = state_19444;
var statearr_19455_19476 = state_19444__$1;
(statearr_19455_19476[(2)] = inst_19435);

(statearr_19455_19476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (9))){
var state_19444__$1 = state_19444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19456_19477 = state_19444__$1;
(statearr_19456_19477[(1)] = (11));

} else {
var statearr_19457_19478 = state_19444__$1;
(statearr_19457_19478[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (5))){
var inst_19421 = (state_19444[(7)]);
var state_19444__$1 = state_19444;
var statearr_19458_19479 = state_19444__$1;
(statearr_19458_19479[(2)] = inst_19421);

(statearr_19458_19479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (10))){
var inst_19440 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
var statearr_19459_19480 = state_19444__$1;
(statearr_19459_19480[(2)] = inst_19440);

(statearr_19459_19480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (8))){
var inst_19421 = (state_19444[(7)]);
var inst_19431 = cljs.core.next.call(null,inst_19421);
var inst_19421__$1 = inst_19431;
var state_19444__$1 = (function (){var statearr_19460 = state_19444;
(statearr_19460[(7)] = inst_19421__$1);

return statearr_19460;
})();
var statearr_19461_19481 = state_19444__$1;
(statearr_19461_19481[(2)] = null);

(statearr_19461_19481[(1)] = (2));


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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_19462 = [null,null,null,null,null,null,null,null];
(statearr_19462[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_19462[(1)] = (1));

return statearr_19462;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_19444){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19463){var ex__18798__auto__ = e19463;
var statearr_19464_19482 = state_19444;
(statearr_19464_19482[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19444[(4)]))){
var statearr_19465_19483 = state_19444;
(statearr_19465_19483[(1)] = cljs.core.first.call(null,(state_19444[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19484 = state_19444;
state_19444 = G__19484;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_19444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_19444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19466 = f__18869__auto__.call(null);
(statearr_19466[(6)] = c__18868__auto__);

return statearr_19466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
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
var G__19486 = arguments.length;
switch (G__19486) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19488 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19488.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19489 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19489.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19490 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19490.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19491 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19491.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19492 = (function (ch,cs,meta19493){
this.ch = ch;
this.cs = cs;
this.meta19493 = meta19493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19494,meta19493__$1){
var self__ = this;
var _19494__$1 = this;
return (new cljs.core.async.t_cljs$core$async19492(self__.ch,self__.cs,meta19493__$1));
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19494){
var self__ = this;
var _19494__$1 = this;
return self__.meta19493;
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19493","meta19493",1346209505,null)], null);
}));

(cljs.core.async.t_cljs$core$async19492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19492");

(cljs.core.async.t_cljs$core$async19492.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19492.
 */
cljs.core.async.__GT_t_cljs$core$async19492 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19492(ch__$1,cs__$1,meta19493){
return (new cljs.core.async.t_cljs$core$async19492(ch__$1,cs__$1,meta19493));
});

}

return (new cljs.core.async.t_cljs$core$async19492(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18868__auto___19711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19627){
var state_val_19628 = (state_19627[(1)]);
if((state_val_19628 === (7))){
var inst_19623 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19629_19712 = state_19627__$1;
(statearr_19629_19712[(2)] = inst_19623);

(statearr_19629_19712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (20))){
var inst_19528 = (state_19627[(7)]);
var inst_19540 = cljs.core.first.call(null,inst_19528);
var inst_19541 = cljs.core.nth.call(null,inst_19540,(0),null);
var inst_19542 = cljs.core.nth.call(null,inst_19540,(1),null);
var state_19627__$1 = (function (){var statearr_19630 = state_19627;
(statearr_19630[(8)] = inst_19541);

return statearr_19630;
})();
if(cljs.core.truth_(inst_19542)){
var statearr_19631_19713 = state_19627__$1;
(statearr_19631_19713[(1)] = (22));

} else {
var statearr_19632_19714 = state_19627__$1;
(statearr_19632_19714[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (27))){
var inst_19570 = (state_19627[(9)]);
var inst_19497 = (state_19627[(10)]);
var inst_19572 = (state_19627[(11)]);
var inst_19577 = (state_19627[(12)]);
var inst_19577__$1 = cljs.core._nth.call(null,inst_19570,inst_19572);
var inst_19578 = cljs.core.async.put_BANG_.call(null,inst_19577__$1,inst_19497,done);
var state_19627__$1 = (function (){var statearr_19633 = state_19627;
(statearr_19633[(12)] = inst_19577__$1);

return statearr_19633;
})();
if(cljs.core.truth_(inst_19578)){
var statearr_19634_19715 = state_19627__$1;
(statearr_19634_19715[(1)] = (30));

} else {
var statearr_19635_19716 = state_19627__$1;
(statearr_19635_19716[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (1))){
var state_19627__$1 = state_19627;
var statearr_19636_19717 = state_19627__$1;
(statearr_19636_19717[(2)] = null);

(statearr_19636_19717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (24))){
var inst_19528 = (state_19627[(7)]);
var inst_19547 = (state_19627[(2)]);
var inst_19548 = cljs.core.next.call(null,inst_19528);
var inst_19506 = inst_19548;
var inst_19507 = null;
var inst_19508 = (0);
var inst_19509 = (0);
var state_19627__$1 = (function (){var statearr_19637 = state_19627;
(statearr_19637[(13)] = inst_19508);

(statearr_19637[(14)] = inst_19509);

(statearr_19637[(15)] = inst_19506);

(statearr_19637[(16)] = inst_19547);

(statearr_19637[(17)] = inst_19507);

return statearr_19637;
})();
var statearr_19638_19718 = state_19627__$1;
(statearr_19638_19718[(2)] = null);

(statearr_19638_19718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (39))){
var state_19627__$1 = state_19627;
var statearr_19642_19719 = state_19627__$1;
(statearr_19642_19719[(2)] = null);

(statearr_19642_19719[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (4))){
var inst_19497 = (state_19627[(10)]);
var inst_19497__$1 = (state_19627[(2)]);
var inst_19498 = (inst_19497__$1 == null);
var state_19627__$1 = (function (){var statearr_19643 = state_19627;
(statearr_19643[(10)] = inst_19497__$1);

return statearr_19643;
})();
if(cljs.core.truth_(inst_19498)){
var statearr_19644_19720 = state_19627__$1;
(statearr_19644_19720[(1)] = (5));

} else {
var statearr_19645_19721 = state_19627__$1;
(statearr_19645_19721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (15))){
var inst_19508 = (state_19627[(13)]);
var inst_19509 = (state_19627[(14)]);
var inst_19506 = (state_19627[(15)]);
var inst_19507 = (state_19627[(17)]);
var inst_19524 = (state_19627[(2)]);
var inst_19525 = (inst_19509 + (1));
var tmp19639 = inst_19508;
var tmp19640 = inst_19506;
var tmp19641 = inst_19507;
var inst_19506__$1 = tmp19640;
var inst_19507__$1 = tmp19641;
var inst_19508__$1 = tmp19639;
var inst_19509__$1 = inst_19525;
var state_19627__$1 = (function (){var statearr_19646 = state_19627;
(statearr_19646[(13)] = inst_19508__$1);

(statearr_19646[(14)] = inst_19509__$1);

(statearr_19646[(18)] = inst_19524);

(statearr_19646[(15)] = inst_19506__$1);

(statearr_19646[(17)] = inst_19507__$1);

return statearr_19646;
})();
var statearr_19647_19722 = state_19627__$1;
(statearr_19647_19722[(2)] = null);

(statearr_19647_19722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (21))){
var inst_19551 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19651_19723 = state_19627__$1;
(statearr_19651_19723[(2)] = inst_19551);

(statearr_19651_19723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (31))){
var inst_19577 = (state_19627[(12)]);
var inst_19581 = cljs.core.async.untap_STAR_.call(null,m,inst_19577);
var state_19627__$1 = state_19627;
var statearr_19652_19724 = state_19627__$1;
(statearr_19652_19724[(2)] = inst_19581);

(statearr_19652_19724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (32))){
var inst_19570 = (state_19627[(9)]);
var inst_19571 = (state_19627[(19)]);
var inst_19572 = (state_19627[(11)]);
var inst_19569 = (state_19627[(20)]);
var inst_19583 = (state_19627[(2)]);
var inst_19584 = (inst_19572 + (1));
var tmp19648 = inst_19570;
var tmp19649 = inst_19571;
var tmp19650 = inst_19569;
var inst_19569__$1 = tmp19650;
var inst_19570__$1 = tmp19648;
var inst_19571__$1 = tmp19649;
var inst_19572__$1 = inst_19584;
var state_19627__$1 = (function (){var statearr_19653 = state_19627;
(statearr_19653[(9)] = inst_19570__$1);

(statearr_19653[(19)] = inst_19571__$1);

(statearr_19653[(11)] = inst_19572__$1);

(statearr_19653[(21)] = inst_19583);

(statearr_19653[(20)] = inst_19569__$1);

return statearr_19653;
})();
var statearr_19654_19725 = state_19627__$1;
(statearr_19654_19725[(2)] = null);

(statearr_19654_19725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (40))){
var inst_19596 = (state_19627[(22)]);
var inst_19600 = cljs.core.async.untap_STAR_.call(null,m,inst_19596);
var state_19627__$1 = state_19627;
var statearr_19655_19726 = state_19627__$1;
(statearr_19655_19726[(2)] = inst_19600);

(statearr_19655_19726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (33))){
var inst_19587 = (state_19627[(23)]);
var inst_19589 = cljs.core.chunked_seq_QMARK_.call(null,inst_19587);
var state_19627__$1 = state_19627;
if(inst_19589){
var statearr_19656_19727 = state_19627__$1;
(statearr_19656_19727[(1)] = (36));

} else {
var statearr_19657_19728 = state_19627__$1;
(statearr_19657_19728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (13))){
var inst_19518 = (state_19627[(24)]);
var inst_19521 = cljs.core.async.close_BANG_.call(null,inst_19518);
var state_19627__$1 = state_19627;
var statearr_19658_19729 = state_19627__$1;
(statearr_19658_19729[(2)] = inst_19521);

(statearr_19658_19729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (22))){
var inst_19541 = (state_19627[(8)]);
var inst_19544 = cljs.core.async.close_BANG_.call(null,inst_19541);
var state_19627__$1 = state_19627;
var statearr_19659_19730 = state_19627__$1;
(statearr_19659_19730[(2)] = inst_19544);

(statearr_19659_19730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (36))){
var inst_19587 = (state_19627[(23)]);
var inst_19591 = cljs.core.chunk_first.call(null,inst_19587);
var inst_19592 = cljs.core.chunk_rest.call(null,inst_19587);
var inst_19593 = cljs.core.count.call(null,inst_19591);
var inst_19569 = inst_19592;
var inst_19570 = inst_19591;
var inst_19571 = inst_19593;
var inst_19572 = (0);
var state_19627__$1 = (function (){var statearr_19660 = state_19627;
(statearr_19660[(9)] = inst_19570);

(statearr_19660[(19)] = inst_19571);

(statearr_19660[(11)] = inst_19572);

(statearr_19660[(20)] = inst_19569);

return statearr_19660;
})();
var statearr_19661_19731 = state_19627__$1;
(statearr_19661_19731[(2)] = null);

(statearr_19661_19731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (41))){
var inst_19587 = (state_19627[(23)]);
var inst_19602 = (state_19627[(2)]);
var inst_19603 = cljs.core.next.call(null,inst_19587);
var inst_19569 = inst_19603;
var inst_19570 = null;
var inst_19571 = (0);
var inst_19572 = (0);
var state_19627__$1 = (function (){var statearr_19662 = state_19627;
(statearr_19662[(9)] = inst_19570);

(statearr_19662[(19)] = inst_19571);

(statearr_19662[(11)] = inst_19572);

(statearr_19662[(25)] = inst_19602);

(statearr_19662[(20)] = inst_19569);

return statearr_19662;
})();
var statearr_19663_19732 = state_19627__$1;
(statearr_19663_19732[(2)] = null);

(statearr_19663_19732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (43))){
var state_19627__$1 = state_19627;
var statearr_19664_19733 = state_19627__$1;
(statearr_19664_19733[(2)] = null);

(statearr_19664_19733[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (29))){
var inst_19611 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19665_19734 = state_19627__$1;
(statearr_19665_19734[(2)] = inst_19611);

(statearr_19665_19734[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (44))){
var inst_19620 = (state_19627[(2)]);
var state_19627__$1 = (function (){var statearr_19666 = state_19627;
(statearr_19666[(26)] = inst_19620);

return statearr_19666;
})();
var statearr_19667_19735 = state_19627__$1;
(statearr_19667_19735[(2)] = null);

(statearr_19667_19735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (6))){
var inst_19561 = (state_19627[(27)]);
var inst_19560 = cljs.core.deref.call(null,cs);
var inst_19561__$1 = cljs.core.keys.call(null,inst_19560);
var inst_19562 = cljs.core.count.call(null,inst_19561__$1);
var inst_19563 = cljs.core.reset_BANG_.call(null,dctr,inst_19562);
var inst_19568 = cljs.core.seq.call(null,inst_19561__$1);
var inst_19569 = inst_19568;
var inst_19570 = null;
var inst_19571 = (0);
var inst_19572 = (0);
var state_19627__$1 = (function (){var statearr_19668 = state_19627;
(statearr_19668[(27)] = inst_19561__$1);

(statearr_19668[(9)] = inst_19570);

(statearr_19668[(28)] = inst_19563);

(statearr_19668[(19)] = inst_19571);

(statearr_19668[(11)] = inst_19572);

(statearr_19668[(20)] = inst_19569);

return statearr_19668;
})();
var statearr_19669_19736 = state_19627__$1;
(statearr_19669_19736[(2)] = null);

(statearr_19669_19736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (28))){
var inst_19587 = (state_19627[(23)]);
var inst_19569 = (state_19627[(20)]);
var inst_19587__$1 = cljs.core.seq.call(null,inst_19569);
var state_19627__$1 = (function (){var statearr_19670 = state_19627;
(statearr_19670[(23)] = inst_19587__$1);

return statearr_19670;
})();
if(inst_19587__$1){
var statearr_19671_19737 = state_19627__$1;
(statearr_19671_19737[(1)] = (33));

} else {
var statearr_19672_19738 = state_19627__$1;
(statearr_19672_19738[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (25))){
var inst_19571 = (state_19627[(19)]);
var inst_19572 = (state_19627[(11)]);
var inst_19574 = (inst_19572 < inst_19571);
var inst_19575 = inst_19574;
var state_19627__$1 = state_19627;
if(cljs.core.truth_(inst_19575)){
var statearr_19673_19739 = state_19627__$1;
(statearr_19673_19739[(1)] = (27));

} else {
var statearr_19674_19740 = state_19627__$1;
(statearr_19674_19740[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (34))){
var state_19627__$1 = state_19627;
var statearr_19675_19741 = state_19627__$1;
(statearr_19675_19741[(2)] = null);

(statearr_19675_19741[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (17))){
var state_19627__$1 = state_19627;
var statearr_19676_19742 = state_19627__$1;
(statearr_19676_19742[(2)] = null);

(statearr_19676_19742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (3))){
var inst_19625 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19627__$1,inst_19625);
} else {
if((state_val_19628 === (12))){
var inst_19556 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19677_19743 = state_19627__$1;
(statearr_19677_19743[(2)] = inst_19556);

(statearr_19677_19743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (2))){
var state_19627__$1 = state_19627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19627__$1,(4),ch);
} else {
if((state_val_19628 === (23))){
var state_19627__$1 = state_19627;
var statearr_19678_19744 = state_19627__$1;
(statearr_19678_19744[(2)] = null);

(statearr_19678_19744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (35))){
var inst_19609 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19679_19745 = state_19627__$1;
(statearr_19679_19745[(2)] = inst_19609);

(statearr_19679_19745[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (19))){
var inst_19528 = (state_19627[(7)]);
var inst_19532 = cljs.core.chunk_first.call(null,inst_19528);
var inst_19533 = cljs.core.chunk_rest.call(null,inst_19528);
var inst_19534 = cljs.core.count.call(null,inst_19532);
var inst_19506 = inst_19533;
var inst_19507 = inst_19532;
var inst_19508 = inst_19534;
var inst_19509 = (0);
var state_19627__$1 = (function (){var statearr_19680 = state_19627;
(statearr_19680[(13)] = inst_19508);

(statearr_19680[(14)] = inst_19509);

(statearr_19680[(15)] = inst_19506);

(statearr_19680[(17)] = inst_19507);

return statearr_19680;
})();
var statearr_19681_19746 = state_19627__$1;
(statearr_19681_19746[(2)] = null);

(statearr_19681_19746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (11))){
var inst_19528 = (state_19627[(7)]);
var inst_19506 = (state_19627[(15)]);
var inst_19528__$1 = cljs.core.seq.call(null,inst_19506);
var state_19627__$1 = (function (){var statearr_19682 = state_19627;
(statearr_19682[(7)] = inst_19528__$1);

return statearr_19682;
})();
if(inst_19528__$1){
var statearr_19683_19747 = state_19627__$1;
(statearr_19683_19747[(1)] = (16));

} else {
var statearr_19684_19748 = state_19627__$1;
(statearr_19684_19748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (9))){
var inst_19558 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19685_19749 = state_19627__$1;
(statearr_19685_19749[(2)] = inst_19558);

(statearr_19685_19749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (5))){
var inst_19504 = cljs.core.deref.call(null,cs);
var inst_19505 = cljs.core.seq.call(null,inst_19504);
var inst_19506 = inst_19505;
var inst_19507 = null;
var inst_19508 = (0);
var inst_19509 = (0);
var state_19627__$1 = (function (){var statearr_19686 = state_19627;
(statearr_19686[(13)] = inst_19508);

(statearr_19686[(14)] = inst_19509);

(statearr_19686[(15)] = inst_19506);

(statearr_19686[(17)] = inst_19507);

return statearr_19686;
})();
var statearr_19687_19750 = state_19627__$1;
(statearr_19687_19750[(2)] = null);

(statearr_19687_19750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (14))){
var state_19627__$1 = state_19627;
var statearr_19688_19751 = state_19627__$1;
(statearr_19688_19751[(2)] = null);

(statearr_19688_19751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (45))){
var inst_19617 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19689_19752 = state_19627__$1;
(statearr_19689_19752[(2)] = inst_19617);

(statearr_19689_19752[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (26))){
var inst_19561 = (state_19627[(27)]);
var inst_19613 = (state_19627[(2)]);
var inst_19614 = cljs.core.seq.call(null,inst_19561);
var state_19627__$1 = (function (){var statearr_19690 = state_19627;
(statearr_19690[(29)] = inst_19613);

return statearr_19690;
})();
if(inst_19614){
var statearr_19691_19753 = state_19627__$1;
(statearr_19691_19753[(1)] = (42));

} else {
var statearr_19692_19754 = state_19627__$1;
(statearr_19692_19754[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (16))){
var inst_19528 = (state_19627[(7)]);
var inst_19530 = cljs.core.chunked_seq_QMARK_.call(null,inst_19528);
var state_19627__$1 = state_19627;
if(inst_19530){
var statearr_19693_19755 = state_19627__$1;
(statearr_19693_19755[(1)] = (19));

} else {
var statearr_19694_19756 = state_19627__$1;
(statearr_19694_19756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (38))){
var inst_19606 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19695_19757 = state_19627__$1;
(statearr_19695_19757[(2)] = inst_19606);

(statearr_19695_19757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (30))){
var state_19627__$1 = state_19627;
var statearr_19696_19758 = state_19627__$1;
(statearr_19696_19758[(2)] = null);

(statearr_19696_19758[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (10))){
var inst_19509 = (state_19627[(14)]);
var inst_19507 = (state_19627[(17)]);
var inst_19517 = cljs.core._nth.call(null,inst_19507,inst_19509);
var inst_19518 = cljs.core.nth.call(null,inst_19517,(0),null);
var inst_19519 = cljs.core.nth.call(null,inst_19517,(1),null);
var state_19627__$1 = (function (){var statearr_19697 = state_19627;
(statearr_19697[(24)] = inst_19518);

return statearr_19697;
})();
if(cljs.core.truth_(inst_19519)){
var statearr_19698_19759 = state_19627__$1;
(statearr_19698_19759[(1)] = (13));

} else {
var statearr_19699_19760 = state_19627__$1;
(statearr_19699_19760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (18))){
var inst_19554 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19700_19761 = state_19627__$1;
(statearr_19700_19761[(2)] = inst_19554);

(statearr_19700_19761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (42))){
var state_19627__$1 = state_19627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19627__$1,(45),dchan);
} else {
if((state_val_19628 === (37))){
var inst_19497 = (state_19627[(10)]);
var inst_19596 = (state_19627[(22)]);
var inst_19587 = (state_19627[(23)]);
var inst_19596__$1 = cljs.core.first.call(null,inst_19587);
var inst_19597 = cljs.core.async.put_BANG_.call(null,inst_19596__$1,inst_19497,done);
var state_19627__$1 = (function (){var statearr_19701 = state_19627;
(statearr_19701[(22)] = inst_19596__$1);

return statearr_19701;
})();
if(cljs.core.truth_(inst_19597)){
var statearr_19702_19762 = state_19627__$1;
(statearr_19702_19762[(1)] = (39));

} else {
var statearr_19703_19763 = state_19627__$1;
(statearr_19703_19763[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (8))){
var inst_19508 = (state_19627[(13)]);
var inst_19509 = (state_19627[(14)]);
var inst_19511 = (inst_19509 < inst_19508);
var inst_19512 = inst_19511;
var state_19627__$1 = state_19627;
if(cljs.core.truth_(inst_19512)){
var statearr_19704_19764 = state_19627__$1;
(statearr_19704_19764[(1)] = (10));

} else {
var statearr_19705_19765 = state_19627__$1;
(statearr_19705_19765[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__18795__auto__ = null;
var cljs$core$async$mult_$_state_machine__18795__auto____0 = (function (){
var statearr_19706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19706[(0)] = cljs$core$async$mult_$_state_machine__18795__auto__);

(statearr_19706[(1)] = (1));

return statearr_19706;
});
var cljs$core$async$mult_$_state_machine__18795__auto____1 = (function (state_19627){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19707){var ex__18798__auto__ = e19707;
var statearr_19708_19766 = state_19627;
(statearr_19708_19766[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19627[(4)]))){
var statearr_19709_19767 = state_19627;
(statearr_19709_19767[(1)] = cljs.core.first.call(null,(state_19627[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19768 = state_19627;
state_19627 = G__19768;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18795__auto__ = function(state_19627){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18795__auto____1.call(this,state_19627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18795__auto____0;
cljs$core$async$mult_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18795__auto____1;
return cljs$core$async$mult_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19710 = f__18869__auto__.call(null);
(statearr_19710[(6)] = c__18868__auto___19711);

return statearr_19710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
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
var G__19770 = arguments.length;
switch (G__19770) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19772 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19772.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19773 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19773.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19774 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19774.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19775 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19775.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19776 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19776.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19787 = arguments.length;
var i__4737__auto___19788 = (0);
while(true){
if((i__4737__auto___19788 < len__4736__auto___19787)){
args__4742__auto__.push((arguments[i__4737__auto___19788]));

var G__19789 = (i__4737__auto___19788 + (1));
i__4737__auto___19788 = G__19789;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19781){
var map__19782 = p__19781;
var map__19782__$1 = (((((!((map__19782 == null))))?(((((map__19782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19782):map__19782);
var opts = map__19782__$1;
var statearr_19784_19790 = state;
(statearr_19784_19790[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_19785_19791 = state;
(statearr_19785_19791[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_19786_19792 = state;
(statearr_19786_19792[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19777){
var G__19778 = cljs.core.first.call(null,seq19777);
var seq19777__$1 = cljs.core.next.call(null,seq19777);
var G__19779 = cljs.core.first.call(null,seq19777__$1);
var seq19777__$2 = cljs.core.next.call(null,seq19777__$1);
var G__19780 = cljs.core.first.call(null,seq19777__$2);
var seq19777__$3 = cljs.core.next.call(null,seq19777__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19778,G__19779,G__19780,seq19777__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19793 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19794){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19794 = meta19794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19795,meta19794__$1){
var self__ = this;
var _19795__$1 = this;
return (new cljs.core.async.t_cljs$core$async19793(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19794__$1));
}));

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19795){
var self__ = this;
var _19795__$1 = this;
return self__.meta19794;
}));

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19793.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19794","meta19794",2117482948,null)], null);
}));

(cljs.core.async.t_cljs$core$async19793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19793");

(cljs.core.async.t_cljs$core$async19793.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19793.
 */
cljs.core.async.__GT_t_cljs$core$async19793 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19793(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19794){
return (new cljs.core.async.t_cljs$core$async19793(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19794));
});

}

return (new cljs.core.async.t_cljs$core$async19793(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18868__auto___19958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_19897){
var state_val_19898 = (state_19897[(1)]);
if((state_val_19898 === (7))){
var inst_19812 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
var statearr_19899_19959 = state_19897__$1;
(statearr_19899_19959[(2)] = inst_19812);

(statearr_19899_19959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (20))){
var inst_19824 = (state_19897[(7)]);
var state_19897__$1 = state_19897;
var statearr_19900_19960 = state_19897__$1;
(statearr_19900_19960[(2)] = inst_19824);

(statearr_19900_19960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (27))){
var state_19897__$1 = state_19897;
var statearr_19901_19961 = state_19897__$1;
(statearr_19901_19961[(2)] = null);

(statearr_19901_19961[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (1))){
var inst_19799 = (state_19897[(8)]);
var inst_19799__$1 = calc_state.call(null);
var inst_19801 = (inst_19799__$1 == null);
var inst_19802 = cljs.core.not.call(null,inst_19801);
var state_19897__$1 = (function (){var statearr_19902 = state_19897;
(statearr_19902[(8)] = inst_19799__$1);

return statearr_19902;
})();
if(inst_19802){
var statearr_19903_19962 = state_19897__$1;
(statearr_19903_19962[(1)] = (2));

} else {
var statearr_19904_19963 = state_19897__$1;
(statearr_19904_19963[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (24))){
var inst_19848 = (state_19897[(9)]);
var inst_19857 = (state_19897[(10)]);
var inst_19871 = (state_19897[(11)]);
var inst_19871__$1 = inst_19848.call(null,inst_19857);
var state_19897__$1 = (function (){var statearr_19905 = state_19897;
(statearr_19905[(11)] = inst_19871__$1);

return statearr_19905;
})();
if(cljs.core.truth_(inst_19871__$1)){
var statearr_19906_19964 = state_19897__$1;
(statearr_19906_19964[(1)] = (29));

} else {
var statearr_19907_19965 = state_19897__$1;
(statearr_19907_19965[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (4))){
var inst_19815 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
if(cljs.core.truth_(inst_19815)){
var statearr_19908_19966 = state_19897__$1;
(statearr_19908_19966[(1)] = (8));

} else {
var statearr_19909_19967 = state_19897__$1;
(statearr_19909_19967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (15))){
var inst_19842 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
if(cljs.core.truth_(inst_19842)){
var statearr_19910_19968 = state_19897__$1;
(statearr_19910_19968[(1)] = (19));

} else {
var statearr_19911_19969 = state_19897__$1;
(statearr_19911_19969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (21))){
var inst_19847 = (state_19897[(12)]);
var inst_19847__$1 = (state_19897[(2)]);
var inst_19848 = cljs.core.get.call(null,inst_19847__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19849 = cljs.core.get.call(null,inst_19847__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19850 = cljs.core.get.call(null,inst_19847__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19897__$1 = (function (){var statearr_19912 = state_19897;
(statearr_19912[(9)] = inst_19848);

(statearr_19912[(12)] = inst_19847__$1);

(statearr_19912[(13)] = inst_19849);

return statearr_19912;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19897__$1,(22),inst_19850);
} else {
if((state_val_19898 === (31))){
var inst_19879 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
if(cljs.core.truth_(inst_19879)){
var statearr_19913_19970 = state_19897__$1;
(statearr_19913_19970[(1)] = (32));

} else {
var statearr_19914_19971 = state_19897__$1;
(statearr_19914_19971[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (32))){
var inst_19856 = (state_19897[(14)]);
var state_19897__$1 = state_19897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19897__$1,(35),out,inst_19856);
} else {
if((state_val_19898 === (33))){
var inst_19847 = (state_19897[(12)]);
var inst_19824 = inst_19847;
var state_19897__$1 = (function (){var statearr_19915 = state_19897;
(statearr_19915[(7)] = inst_19824);

return statearr_19915;
})();
var statearr_19916_19972 = state_19897__$1;
(statearr_19916_19972[(2)] = null);

(statearr_19916_19972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (13))){
var inst_19824 = (state_19897[(7)]);
var inst_19831 = inst_19824.cljs$lang$protocol_mask$partition0$;
var inst_19832 = (inst_19831 & (64));
var inst_19833 = inst_19824.cljs$core$ISeq$;
var inst_19834 = (cljs.core.PROTOCOL_SENTINEL === inst_19833);
var inst_19835 = ((inst_19832) || (inst_19834));
var state_19897__$1 = state_19897;
if(cljs.core.truth_(inst_19835)){
var statearr_19917_19973 = state_19897__$1;
(statearr_19917_19973[(1)] = (16));

} else {
var statearr_19918_19974 = state_19897__$1;
(statearr_19918_19974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (22))){
var inst_19857 = (state_19897[(10)]);
var inst_19856 = (state_19897[(14)]);
var inst_19855 = (state_19897[(2)]);
var inst_19856__$1 = cljs.core.nth.call(null,inst_19855,(0),null);
var inst_19857__$1 = cljs.core.nth.call(null,inst_19855,(1),null);
var inst_19858 = (inst_19856__$1 == null);
var inst_19859 = cljs.core._EQ_.call(null,inst_19857__$1,change);
var inst_19860 = ((inst_19858) || (inst_19859));
var state_19897__$1 = (function (){var statearr_19919 = state_19897;
(statearr_19919[(10)] = inst_19857__$1);

(statearr_19919[(14)] = inst_19856__$1);

return statearr_19919;
})();
if(cljs.core.truth_(inst_19860)){
var statearr_19920_19975 = state_19897__$1;
(statearr_19920_19975[(1)] = (23));

} else {
var statearr_19921_19976 = state_19897__$1;
(statearr_19921_19976[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (36))){
var inst_19847 = (state_19897[(12)]);
var inst_19824 = inst_19847;
var state_19897__$1 = (function (){var statearr_19922 = state_19897;
(statearr_19922[(7)] = inst_19824);

return statearr_19922;
})();
var statearr_19923_19977 = state_19897__$1;
(statearr_19923_19977[(2)] = null);

(statearr_19923_19977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (29))){
var inst_19871 = (state_19897[(11)]);
var state_19897__$1 = state_19897;
var statearr_19924_19978 = state_19897__$1;
(statearr_19924_19978[(2)] = inst_19871);

(statearr_19924_19978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (6))){
var state_19897__$1 = state_19897;
var statearr_19925_19979 = state_19897__$1;
(statearr_19925_19979[(2)] = false);

(statearr_19925_19979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (28))){
var inst_19867 = (state_19897[(2)]);
var inst_19868 = calc_state.call(null);
var inst_19824 = inst_19868;
var state_19897__$1 = (function (){var statearr_19926 = state_19897;
(statearr_19926[(15)] = inst_19867);

(statearr_19926[(7)] = inst_19824);

return statearr_19926;
})();
var statearr_19927_19980 = state_19897__$1;
(statearr_19927_19980[(2)] = null);

(statearr_19927_19980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (25))){
var inst_19893 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
var statearr_19928_19981 = state_19897__$1;
(statearr_19928_19981[(2)] = inst_19893);

(statearr_19928_19981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (34))){
var inst_19891 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
var statearr_19929_19982 = state_19897__$1;
(statearr_19929_19982[(2)] = inst_19891);

(statearr_19929_19982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (17))){
var state_19897__$1 = state_19897;
var statearr_19930_19983 = state_19897__$1;
(statearr_19930_19983[(2)] = false);

(statearr_19930_19983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (3))){
var state_19897__$1 = state_19897;
var statearr_19931_19984 = state_19897__$1;
(statearr_19931_19984[(2)] = false);

(statearr_19931_19984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (12))){
var inst_19895 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19897__$1,inst_19895);
} else {
if((state_val_19898 === (2))){
var inst_19799 = (state_19897[(8)]);
var inst_19804 = inst_19799.cljs$lang$protocol_mask$partition0$;
var inst_19805 = (inst_19804 & (64));
var inst_19806 = inst_19799.cljs$core$ISeq$;
var inst_19807 = (cljs.core.PROTOCOL_SENTINEL === inst_19806);
var inst_19808 = ((inst_19805) || (inst_19807));
var state_19897__$1 = state_19897;
if(cljs.core.truth_(inst_19808)){
var statearr_19932_19985 = state_19897__$1;
(statearr_19932_19985[(1)] = (5));

} else {
var statearr_19933_19986 = state_19897__$1;
(statearr_19933_19986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (23))){
var inst_19856 = (state_19897[(14)]);
var inst_19862 = (inst_19856 == null);
var state_19897__$1 = state_19897;
if(cljs.core.truth_(inst_19862)){
var statearr_19934_19987 = state_19897__$1;
(statearr_19934_19987[(1)] = (26));

} else {
var statearr_19935_19988 = state_19897__$1;
(statearr_19935_19988[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (35))){
var inst_19882 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
if(cljs.core.truth_(inst_19882)){
var statearr_19936_19989 = state_19897__$1;
(statearr_19936_19989[(1)] = (36));

} else {
var statearr_19937_19990 = state_19897__$1;
(statearr_19937_19990[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (19))){
var inst_19824 = (state_19897[(7)]);
var inst_19844 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19824);
var state_19897__$1 = state_19897;
var statearr_19938_19991 = state_19897__$1;
(statearr_19938_19991[(2)] = inst_19844);

(statearr_19938_19991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (11))){
var inst_19824 = (state_19897[(7)]);
var inst_19828 = (inst_19824 == null);
var inst_19829 = cljs.core.not.call(null,inst_19828);
var state_19897__$1 = state_19897;
if(inst_19829){
var statearr_19939_19992 = state_19897__$1;
(statearr_19939_19992[(1)] = (13));

} else {
var statearr_19940_19993 = state_19897__$1;
(statearr_19940_19993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (9))){
var inst_19799 = (state_19897[(8)]);
var state_19897__$1 = state_19897;
var statearr_19941_19994 = state_19897__$1;
(statearr_19941_19994[(2)] = inst_19799);

(statearr_19941_19994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (5))){
var state_19897__$1 = state_19897;
var statearr_19942_19995 = state_19897__$1;
(statearr_19942_19995[(2)] = true);

(statearr_19942_19995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (14))){
var state_19897__$1 = state_19897;
var statearr_19943_19996 = state_19897__$1;
(statearr_19943_19996[(2)] = false);

(statearr_19943_19996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (26))){
var inst_19857 = (state_19897[(10)]);
var inst_19864 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19857);
var state_19897__$1 = state_19897;
var statearr_19944_19997 = state_19897__$1;
(statearr_19944_19997[(2)] = inst_19864);

(statearr_19944_19997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (16))){
var state_19897__$1 = state_19897;
var statearr_19945_19998 = state_19897__$1;
(statearr_19945_19998[(2)] = true);

(statearr_19945_19998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (38))){
var inst_19887 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
var statearr_19946_19999 = state_19897__$1;
(statearr_19946_19999[(2)] = inst_19887);

(statearr_19946_19999[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (30))){
var inst_19848 = (state_19897[(9)]);
var inst_19857 = (state_19897[(10)]);
var inst_19849 = (state_19897[(13)]);
var inst_19874 = cljs.core.empty_QMARK_.call(null,inst_19848);
var inst_19875 = inst_19849.call(null,inst_19857);
var inst_19876 = cljs.core.not.call(null,inst_19875);
var inst_19877 = ((inst_19874) && (inst_19876));
var state_19897__$1 = state_19897;
var statearr_19947_20000 = state_19897__$1;
(statearr_19947_20000[(2)] = inst_19877);

(statearr_19947_20000[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (10))){
var inst_19799 = (state_19897[(8)]);
var inst_19820 = (state_19897[(2)]);
var inst_19821 = cljs.core.get.call(null,inst_19820,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19822 = cljs.core.get.call(null,inst_19820,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19823 = cljs.core.get.call(null,inst_19820,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19824 = inst_19799;
var state_19897__$1 = (function (){var statearr_19948 = state_19897;
(statearr_19948[(16)] = inst_19822);

(statearr_19948[(17)] = inst_19821);

(statearr_19948[(7)] = inst_19824);

(statearr_19948[(18)] = inst_19823);

return statearr_19948;
})();
var statearr_19949_20001 = state_19897__$1;
(statearr_19949_20001[(2)] = null);

(statearr_19949_20001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (18))){
var inst_19839 = (state_19897[(2)]);
var state_19897__$1 = state_19897;
var statearr_19950_20002 = state_19897__$1;
(statearr_19950_20002[(2)] = inst_19839);

(statearr_19950_20002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (37))){
var state_19897__$1 = state_19897;
var statearr_19951_20003 = state_19897__$1;
(statearr_19951_20003[(2)] = null);

(statearr_19951_20003[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19898 === (8))){
var inst_19799 = (state_19897[(8)]);
var inst_19817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19799);
var state_19897__$1 = state_19897;
var statearr_19952_20004 = state_19897__$1;
(statearr_19952_20004[(2)] = inst_19817);

(statearr_19952_20004[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__18795__auto__ = null;
var cljs$core$async$mix_$_state_machine__18795__auto____0 = (function (){
var statearr_19953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19953[(0)] = cljs$core$async$mix_$_state_machine__18795__auto__);

(statearr_19953[(1)] = (1));

return statearr_19953;
});
var cljs$core$async$mix_$_state_machine__18795__auto____1 = (function (state_19897){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_19897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e19954){var ex__18798__auto__ = e19954;
var statearr_19955_20005 = state_19897;
(statearr_19955_20005[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_19897[(4)]))){
var statearr_19956_20006 = state_19897;
(statearr_19956_20006[(1)] = cljs.core.first.call(null,(state_19897[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20007 = state_19897;
state_19897 = G__20007;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18795__auto__ = function(state_19897){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18795__auto____1.call(this,state_19897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18795__auto____0;
cljs$core$async$mix_$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18795__auto____1;
return cljs$core$async$mix_$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_19957 = f__18869__auto__.call(null);
(statearr_19957[(6)] = c__18868__auto___19958);

return statearr_19957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_20010 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_20010.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20011 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_20011.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20012 = (function() {
var G__20013 = null;
var G__20013__1 = (function (p){
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
var G__20013__2 = (function (p,v){
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
G__20013 = function(p,v){
switch(arguments.length){
case 1:
return G__20013__1.call(this,p);
case 2:
return G__20013__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20013.cljs$core$IFn$_invoke$arity$1 = G__20013__1;
G__20013.cljs$core$IFn$_invoke$arity$2 = G__20013__2;
return G__20013;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20009 = arguments.length;
switch (G__20009) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20012.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20012.call(null,p,v);
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
var G__20017 = arguments.length;
switch (G__20017) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__20015_SHARP_){
if(cljs.core.truth_(p1__20015_SHARP_.call(null,topic))){
return p1__20015_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20015_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20018 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20019){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20019 = meta20019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20020,meta20019__$1){
var self__ = this;
var _20020__$1 = this;
return (new cljs.core.async.t_cljs$core$async20018(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20019__$1));
}));

(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20020){
var self__ = this;
var _20020__$1 = this;
return self__.meta20019;
}));

(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async20018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async20018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20019","meta20019",574329256,null)], null);
}));

(cljs.core.async.t_cljs$core$async20018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20018");

(cljs.core.async.t_cljs$core$async20018.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20018.
 */
cljs.core.async.__GT_t_cljs$core$async20018 = (function cljs$core$async$__GT_t_cljs$core$async20018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20019){
return (new cljs.core.async.t_cljs$core$async20018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20019));
});

}

return (new cljs.core.async.t_cljs$core$async20018(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18868__auto___20139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20092){
var state_val_20093 = (state_20092[(1)]);
if((state_val_20093 === (7))){
var inst_20088 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20094_20140 = state_20092__$1;
(statearr_20094_20140[(2)] = inst_20088);

(statearr_20094_20140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (20))){
var state_20092__$1 = state_20092;
var statearr_20095_20141 = state_20092__$1;
(statearr_20095_20141[(2)] = null);

(statearr_20095_20141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (1))){
var state_20092__$1 = state_20092;
var statearr_20096_20142 = state_20092__$1;
(statearr_20096_20142[(2)] = null);

(statearr_20096_20142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (24))){
var inst_20071 = (state_20092[(7)]);
var inst_20080 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20071);
var state_20092__$1 = state_20092;
var statearr_20097_20143 = state_20092__$1;
(statearr_20097_20143[(2)] = inst_20080);

(statearr_20097_20143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (4))){
var inst_20023 = (state_20092[(8)]);
var inst_20023__$1 = (state_20092[(2)]);
var inst_20024 = (inst_20023__$1 == null);
var state_20092__$1 = (function (){var statearr_20098 = state_20092;
(statearr_20098[(8)] = inst_20023__$1);

return statearr_20098;
})();
if(cljs.core.truth_(inst_20024)){
var statearr_20099_20144 = state_20092__$1;
(statearr_20099_20144[(1)] = (5));

} else {
var statearr_20100_20145 = state_20092__$1;
(statearr_20100_20145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (15))){
var inst_20065 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20101_20146 = state_20092__$1;
(statearr_20101_20146[(2)] = inst_20065);

(statearr_20101_20146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (21))){
var inst_20085 = (state_20092[(2)]);
var state_20092__$1 = (function (){var statearr_20102 = state_20092;
(statearr_20102[(9)] = inst_20085);

return statearr_20102;
})();
var statearr_20103_20147 = state_20092__$1;
(statearr_20103_20147[(2)] = null);

(statearr_20103_20147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (13))){
var inst_20047 = (state_20092[(10)]);
var inst_20049 = cljs.core.chunked_seq_QMARK_.call(null,inst_20047);
var state_20092__$1 = state_20092;
if(inst_20049){
var statearr_20104_20148 = state_20092__$1;
(statearr_20104_20148[(1)] = (16));

} else {
var statearr_20105_20149 = state_20092__$1;
(statearr_20105_20149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (22))){
var inst_20077 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
if(cljs.core.truth_(inst_20077)){
var statearr_20106_20150 = state_20092__$1;
(statearr_20106_20150[(1)] = (23));

} else {
var statearr_20107_20151 = state_20092__$1;
(statearr_20107_20151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (6))){
var inst_20073 = (state_20092[(11)]);
var inst_20071 = (state_20092[(7)]);
var inst_20023 = (state_20092[(8)]);
var inst_20071__$1 = topic_fn.call(null,inst_20023);
var inst_20072 = cljs.core.deref.call(null,mults);
var inst_20073__$1 = cljs.core.get.call(null,inst_20072,inst_20071__$1);
var state_20092__$1 = (function (){var statearr_20108 = state_20092;
(statearr_20108[(11)] = inst_20073__$1);

(statearr_20108[(7)] = inst_20071__$1);

return statearr_20108;
})();
if(cljs.core.truth_(inst_20073__$1)){
var statearr_20109_20152 = state_20092__$1;
(statearr_20109_20152[(1)] = (19));

} else {
var statearr_20110_20153 = state_20092__$1;
(statearr_20110_20153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (25))){
var inst_20082 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20111_20154 = state_20092__$1;
(statearr_20111_20154[(2)] = inst_20082);

(statearr_20111_20154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (17))){
var inst_20047 = (state_20092[(10)]);
var inst_20056 = cljs.core.first.call(null,inst_20047);
var inst_20057 = cljs.core.async.muxch_STAR_.call(null,inst_20056);
var inst_20058 = cljs.core.async.close_BANG_.call(null,inst_20057);
var inst_20059 = cljs.core.next.call(null,inst_20047);
var inst_20033 = inst_20059;
var inst_20034 = null;
var inst_20035 = (0);
var inst_20036 = (0);
var state_20092__$1 = (function (){var statearr_20112 = state_20092;
(statearr_20112[(12)] = inst_20058);

(statearr_20112[(13)] = inst_20036);

(statearr_20112[(14)] = inst_20035);

(statearr_20112[(15)] = inst_20033);

(statearr_20112[(16)] = inst_20034);

return statearr_20112;
})();
var statearr_20113_20155 = state_20092__$1;
(statearr_20113_20155[(2)] = null);

(statearr_20113_20155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (3))){
var inst_20090 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20092__$1,inst_20090);
} else {
if((state_val_20093 === (12))){
var inst_20067 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20114_20156 = state_20092__$1;
(statearr_20114_20156[(2)] = inst_20067);

(statearr_20114_20156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (2))){
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20092__$1,(4),ch);
} else {
if((state_val_20093 === (23))){
var state_20092__$1 = state_20092;
var statearr_20115_20157 = state_20092__$1;
(statearr_20115_20157[(2)] = null);

(statearr_20115_20157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (19))){
var inst_20073 = (state_20092[(11)]);
var inst_20023 = (state_20092[(8)]);
var inst_20075 = cljs.core.async.muxch_STAR_.call(null,inst_20073);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20092__$1,(22),inst_20075,inst_20023);
} else {
if((state_val_20093 === (11))){
var inst_20047 = (state_20092[(10)]);
var inst_20033 = (state_20092[(15)]);
var inst_20047__$1 = cljs.core.seq.call(null,inst_20033);
var state_20092__$1 = (function (){var statearr_20116 = state_20092;
(statearr_20116[(10)] = inst_20047__$1);

return statearr_20116;
})();
if(inst_20047__$1){
var statearr_20117_20158 = state_20092__$1;
(statearr_20117_20158[(1)] = (13));

} else {
var statearr_20118_20159 = state_20092__$1;
(statearr_20118_20159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (9))){
var inst_20069 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20119_20160 = state_20092__$1;
(statearr_20119_20160[(2)] = inst_20069);

(statearr_20119_20160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (5))){
var inst_20030 = cljs.core.deref.call(null,mults);
var inst_20031 = cljs.core.vals.call(null,inst_20030);
var inst_20032 = cljs.core.seq.call(null,inst_20031);
var inst_20033 = inst_20032;
var inst_20034 = null;
var inst_20035 = (0);
var inst_20036 = (0);
var state_20092__$1 = (function (){var statearr_20120 = state_20092;
(statearr_20120[(13)] = inst_20036);

(statearr_20120[(14)] = inst_20035);

(statearr_20120[(15)] = inst_20033);

(statearr_20120[(16)] = inst_20034);

return statearr_20120;
})();
var statearr_20121_20161 = state_20092__$1;
(statearr_20121_20161[(2)] = null);

(statearr_20121_20161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (14))){
var state_20092__$1 = state_20092;
var statearr_20125_20162 = state_20092__$1;
(statearr_20125_20162[(2)] = null);

(statearr_20125_20162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (16))){
var inst_20047 = (state_20092[(10)]);
var inst_20051 = cljs.core.chunk_first.call(null,inst_20047);
var inst_20052 = cljs.core.chunk_rest.call(null,inst_20047);
var inst_20053 = cljs.core.count.call(null,inst_20051);
var inst_20033 = inst_20052;
var inst_20034 = inst_20051;
var inst_20035 = inst_20053;
var inst_20036 = (0);
var state_20092__$1 = (function (){var statearr_20126 = state_20092;
(statearr_20126[(13)] = inst_20036);

(statearr_20126[(14)] = inst_20035);

(statearr_20126[(15)] = inst_20033);

(statearr_20126[(16)] = inst_20034);

return statearr_20126;
})();
var statearr_20127_20163 = state_20092__$1;
(statearr_20127_20163[(2)] = null);

(statearr_20127_20163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (10))){
var inst_20036 = (state_20092[(13)]);
var inst_20035 = (state_20092[(14)]);
var inst_20033 = (state_20092[(15)]);
var inst_20034 = (state_20092[(16)]);
var inst_20041 = cljs.core._nth.call(null,inst_20034,inst_20036);
var inst_20042 = cljs.core.async.muxch_STAR_.call(null,inst_20041);
var inst_20043 = cljs.core.async.close_BANG_.call(null,inst_20042);
var inst_20044 = (inst_20036 + (1));
var tmp20122 = inst_20035;
var tmp20123 = inst_20033;
var tmp20124 = inst_20034;
var inst_20033__$1 = tmp20123;
var inst_20034__$1 = tmp20124;
var inst_20035__$1 = tmp20122;
var inst_20036__$1 = inst_20044;
var state_20092__$1 = (function (){var statearr_20128 = state_20092;
(statearr_20128[(13)] = inst_20036__$1);

(statearr_20128[(14)] = inst_20035__$1);

(statearr_20128[(15)] = inst_20033__$1);

(statearr_20128[(17)] = inst_20043);

(statearr_20128[(16)] = inst_20034__$1);

return statearr_20128;
})();
var statearr_20129_20164 = state_20092__$1;
(statearr_20129_20164[(2)] = null);

(statearr_20129_20164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (18))){
var inst_20062 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20130_20165 = state_20092__$1;
(statearr_20130_20165[(2)] = inst_20062);

(statearr_20130_20165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (8))){
var inst_20036 = (state_20092[(13)]);
var inst_20035 = (state_20092[(14)]);
var inst_20038 = (inst_20036 < inst_20035);
var inst_20039 = inst_20038;
var state_20092__$1 = state_20092;
if(cljs.core.truth_(inst_20039)){
var statearr_20131_20166 = state_20092__$1;
(statearr_20131_20166[(1)] = (10));

} else {
var statearr_20132_20167 = state_20092__$1;
(statearr_20132_20167[(1)] = (11));

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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_20133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20133[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_20133[(1)] = (1));

return statearr_20133;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_20092){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20134){var ex__18798__auto__ = e20134;
var statearr_20135_20168 = state_20092;
(statearr_20135_20168[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20092[(4)]))){
var statearr_20136_20169 = state_20092;
(statearr_20136_20169[(1)] = cljs.core.first.call(null,(state_20092[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20170 = state_20092;
state_20092 = G__20170;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_20092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_20092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20137 = f__18869__auto__.call(null);
(statearr_20137[(6)] = c__18868__auto___20139);

return statearr_20137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
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
var G__20172 = arguments.length;
switch (G__20172) {
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
var G__20175 = arguments.length;
switch (G__20175) {
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
var G__20178 = arguments.length;
switch (G__20178) {
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
var c__18868__auto___20256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20221){
var state_val_20222 = (state_20221[(1)]);
if((state_val_20222 === (7))){
var state_20221__$1 = state_20221;
var statearr_20223_20257 = state_20221__$1;
(statearr_20223_20257[(2)] = null);

(statearr_20223_20257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (1))){
var state_20221__$1 = state_20221;
var statearr_20224_20258 = state_20221__$1;
(statearr_20224_20258[(2)] = null);

(statearr_20224_20258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (4))){
var inst_20182 = (state_20221[(7)]);
var inst_20181 = (state_20221[(8)]);
var inst_20184 = (inst_20182 < inst_20181);
var state_20221__$1 = state_20221;
if(cljs.core.truth_(inst_20184)){
var statearr_20225_20259 = state_20221__$1;
(statearr_20225_20259[(1)] = (6));

} else {
var statearr_20226_20260 = state_20221__$1;
(statearr_20226_20260[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (15))){
var inst_20207 = (state_20221[(9)]);
var inst_20212 = cljs.core.apply.call(null,f,inst_20207);
var state_20221__$1 = state_20221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20221__$1,(17),out,inst_20212);
} else {
if((state_val_20222 === (13))){
var inst_20207 = (state_20221[(9)]);
var inst_20207__$1 = (state_20221[(2)]);
var inst_20208 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20207__$1);
var state_20221__$1 = (function (){var statearr_20227 = state_20221;
(statearr_20227[(9)] = inst_20207__$1);

return statearr_20227;
})();
if(cljs.core.truth_(inst_20208)){
var statearr_20228_20261 = state_20221__$1;
(statearr_20228_20261[(1)] = (14));

} else {
var statearr_20229_20262 = state_20221__$1;
(statearr_20229_20262[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (6))){
var state_20221__$1 = state_20221;
var statearr_20230_20263 = state_20221__$1;
(statearr_20230_20263[(2)] = null);

(statearr_20230_20263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (17))){
var inst_20214 = (state_20221[(2)]);
var state_20221__$1 = (function (){var statearr_20232 = state_20221;
(statearr_20232[(10)] = inst_20214);

return statearr_20232;
})();
var statearr_20233_20264 = state_20221__$1;
(statearr_20233_20264[(2)] = null);

(statearr_20233_20264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (3))){
var inst_20219 = (state_20221[(2)]);
var state_20221__$1 = state_20221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20221__$1,inst_20219);
} else {
if((state_val_20222 === (12))){
var _ = (function (){var statearr_20234 = state_20221;
(statearr_20234[(4)] = cljs.core.rest.call(null,(state_20221[(4)])));

return statearr_20234;
})();
var state_20221__$1 = state_20221;
var ex20231 = (state_20221__$1[(2)]);
var statearr_20235_20265 = state_20221__$1;
(statearr_20235_20265[(5)] = ex20231);


if((ex20231 instanceof Object)){
var statearr_20236_20266 = state_20221__$1;
(statearr_20236_20266[(1)] = (11));

(statearr_20236_20266[(5)] = null);

} else {
throw ex20231;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (2))){
var inst_20180 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20181 = cnt;
var inst_20182 = (0);
var state_20221__$1 = (function (){var statearr_20237 = state_20221;
(statearr_20237[(7)] = inst_20182);

(statearr_20237[(8)] = inst_20181);

(statearr_20237[(11)] = inst_20180);

return statearr_20237;
})();
var statearr_20238_20267 = state_20221__$1;
(statearr_20238_20267[(2)] = null);

(statearr_20238_20267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (11))){
var inst_20186 = (state_20221[(2)]);
var inst_20187 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20221__$1 = (function (){var statearr_20239 = state_20221;
(statearr_20239[(12)] = inst_20186);

return statearr_20239;
})();
var statearr_20240_20268 = state_20221__$1;
(statearr_20240_20268[(2)] = inst_20187);

(statearr_20240_20268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (9))){
var inst_20182 = (state_20221[(7)]);
var _ = (function (){var statearr_20241 = state_20221;
(statearr_20241[(4)] = cljs.core.cons.call(null,(12),(state_20221[(4)])));

return statearr_20241;
})();
var inst_20193 = chs__$1.call(null,inst_20182);
var inst_20194 = done.call(null,inst_20182);
var inst_20195 = cljs.core.async.take_BANG_.call(null,inst_20193,inst_20194);
var ___$1 = (function (){var statearr_20242 = state_20221;
(statearr_20242[(4)] = cljs.core.rest.call(null,(state_20221[(4)])));

return statearr_20242;
})();
var state_20221__$1 = state_20221;
var statearr_20243_20269 = state_20221__$1;
(statearr_20243_20269[(2)] = inst_20195);

(statearr_20243_20269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (5))){
var inst_20205 = (state_20221[(2)]);
var state_20221__$1 = (function (){var statearr_20244 = state_20221;
(statearr_20244[(13)] = inst_20205);

return statearr_20244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20221__$1,(13),dchan);
} else {
if((state_val_20222 === (14))){
var inst_20210 = cljs.core.async.close_BANG_.call(null,out);
var state_20221__$1 = state_20221;
var statearr_20245_20270 = state_20221__$1;
(statearr_20245_20270[(2)] = inst_20210);

(statearr_20245_20270[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (16))){
var inst_20217 = (state_20221[(2)]);
var state_20221__$1 = state_20221;
var statearr_20246_20271 = state_20221__$1;
(statearr_20246_20271[(2)] = inst_20217);

(statearr_20246_20271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (10))){
var inst_20182 = (state_20221[(7)]);
var inst_20198 = (state_20221[(2)]);
var inst_20199 = (inst_20182 + (1));
var inst_20182__$1 = inst_20199;
var state_20221__$1 = (function (){var statearr_20247 = state_20221;
(statearr_20247[(7)] = inst_20182__$1);

(statearr_20247[(14)] = inst_20198);

return statearr_20247;
})();
var statearr_20248_20272 = state_20221__$1;
(statearr_20248_20272[(2)] = null);

(statearr_20248_20272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20222 === (8))){
var inst_20203 = (state_20221[(2)]);
var state_20221__$1 = state_20221;
var statearr_20249_20273 = state_20221__$1;
(statearr_20249_20273[(2)] = inst_20203);

(statearr_20249_20273[(1)] = (5));


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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_20250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20250[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_20250[(1)] = (1));

return statearr_20250;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_20221){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20251){var ex__18798__auto__ = e20251;
var statearr_20252_20274 = state_20221;
(statearr_20252_20274[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20221[(4)]))){
var statearr_20253_20275 = state_20221;
(statearr_20253_20275[(1)] = cljs.core.first.call(null,(state_20221[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20276 = state_20221;
state_20221 = G__20276;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_20221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_20221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20254 = f__18869__auto__.call(null);
(statearr_20254[(6)] = c__18868__auto___20256);

return statearr_20254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
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
var G__20279 = arguments.length;
switch (G__20279) {
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
var c__18868__auto___20334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20311){
var state_val_20312 = (state_20311[(1)]);
if((state_val_20312 === (7))){
var inst_20291 = (state_20311[(7)]);
var inst_20290 = (state_20311[(8)]);
var inst_20290__$1 = (state_20311[(2)]);
var inst_20291__$1 = cljs.core.nth.call(null,inst_20290__$1,(0),null);
var inst_20292 = cljs.core.nth.call(null,inst_20290__$1,(1),null);
var inst_20293 = (inst_20291__$1 == null);
var state_20311__$1 = (function (){var statearr_20313 = state_20311;
(statearr_20313[(9)] = inst_20292);

(statearr_20313[(7)] = inst_20291__$1);

(statearr_20313[(8)] = inst_20290__$1);

return statearr_20313;
})();
if(cljs.core.truth_(inst_20293)){
var statearr_20314_20335 = state_20311__$1;
(statearr_20314_20335[(1)] = (8));

} else {
var statearr_20315_20336 = state_20311__$1;
(statearr_20315_20336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (1))){
var inst_20280 = cljs.core.vec.call(null,chs);
var inst_20281 = inst_20280;
var state_20311__$1 = (function (){var statearr_20316 = state_20311;
(statearr_20316[(10)] = inst_20281);

return statearr_20316;
})();
var statearr_20317_20337 = state_20311__$1;
(statearr_20317_20337[(2)] = null);

(statearr_20317_20337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (4))){
var inst_20281 = (state_20311[(10)]);
var state_20311__$1 = state_20311;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20311__$1,(7),inst_20281);
} else {
if((state_val_20312 === (6))){
var inst_20307 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20318_20338 = state_20311__$1;
(statearr_20318_20338[(2)] = inst_20307);

(statearr_20318_20338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (3))){
var inst_20309 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20311__$1,inst_20309);
} else {
if((state_val_20312 === (2))){
var inst_20281 = (state_20311[(10)]);
var inst_20283 = cljs.core.count.call(null,inst_20281);
var inst_20284 = (inst_20283 > (0));
var state_20311__$1 = state_20311;
if(cljs.core.truth_(inst_20284)){
var statearr_20320_20339 = state_20311__$1;
(statearr_20320_20339[(1)] = (4));

} else {
var statearr_20321_20340 = state_20311__$1;
(statearr_20321_20340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (11))){
var inst_20281 = (state_20311[(10)]);
var inst_20300 = (state_20311[(2)]);
var tmp20319 = inst_20281;
var inst_20281__$1 = tmp20319;
var state_20311__$1 = (function (){var statearr_20322 = state_20311;
(statearr_20322[(10)] = inst_20281__$1);

(statearr_20322[(11)] = inst_20300);

return statearr_20322;
})();
var statearr_20323_20341 = state_20311__$1;
(statearr_20323_20341[(2)] = null);

(statearr_20323_20341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (9))){
var inst_20291 = (state_20311[(7)]);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20311__$1,(11),out,inst_20291);
} else {
if((state_val_20312 === (5))){
var inst_20305 = cljs.core.async.close_BANG_.call(null,out);
var state_20311__$1 = state_20311;
var statearr_20324_20342 = state_20311__$1;
(statearr_20324_20342[(2)] = inst_20305);

(statearr_20324_20342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (10))){
var inst_20303 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20325_20343 = state_20311__$1;
(statearr_20325_20343[(2)] = inst_20303);

(statearr_20325_20343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (8))){
var inst_20292 = (state_20311[(9)]);
var inst_20291 = (state_20311[(7)]);
var inst_20290 = (state_20311[(8)]);
var inst_20281 = (state_20311[(10)]);
var inst_20295 = (function (){var cs = inst_20281;
var vec__20286 = inst_20290;
var v = inst_20291;
var c = inst_20292;
return (function (p1__20277_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20277_SHARP_);
});
})();
var inst_20296 = cljs.core.filterv.call(null,inst_20295,inst_20281);
var inst_20281__$1 = inst_20296;
var state_20311__$1 = (function (){var statearr_20326 = state_20311;
(statearr_20326[(10)] = inst_20281__$1);

return statearr_20326;
})();
var statearr_20327_20344 = state_20311__$1;
(statearr_20327_20344[(2)] = null);

(statearr_20327_20344[(1)] = (2));


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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_20328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20328[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_20328[(1)] = (1));

return statearr_20328;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_20311){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20329){var ex__18798__auto__ = e20329;
var statearr_20330_20345 = state_20311;
(statearr_20330_20345[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20311[(4)]))){
var statearr_20331_20346 = state_20311;
(statearr_20331_20346[(1)] = cljs.core.first.call(null,(state_20311[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20347 = state_20311;
state_20311 = G__20347;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_20311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_20311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20332 = f__18869__auto__.call(null);
(statearr_20332[(6)] = c__18868__auto___20334);

return statearr_20332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
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
var G__20349 = arguments.length;
switch (G__20349) {
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
var c__18868__auto___20395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20373){
var state_val_20374 = (state_20373[(1)]);
if((state_val_20374 === (7))){
var inst_20355 = (state_20373[(7)]);
var inst_20355__$1 = (state_20373[(2)]);
var inst_20356 = (inst_20355__$1 == null);
var inst_20357 = cljs.core.not.call(null,inst_20356);
var state_20373__$1 = (function (){var statearr_20375 = state_20373;
(statearr_20375[(7)] = inst_20355__$1);

return statearr_20375;
})();
if(inst_20357){
var statearr_20376_20396 = state_20373__$1;
(statearr_20376_20396[(1)] = (8));

} else {
var statearr_20377_20397 = state_20373__$1;
(statearr_20377_20397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (1))){
var inst_20350 = (0);
var state_20373__$1 = (function (){var statearr_20378 = state_20373;
(statearr_20378[(8)] = inst_20350);

return statearr_20378;
})();
var statearr_20379_20398 = state_20373__$1;
(statearr_20379_20398[(2)] = null);

(statearr_20379_20398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (4))){
var state_20373__$1 = state_20373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20373__$1,(7),ch);
} else {
if((state_val_20374 === (6))){
var inst_20368 = (state_20373[(2)]);
var state_20373__$1 = state_20373;
var statearr_20380_20399 = state_20373__$1;
(statearr_20380_20399[(2)] = inst_20368);

(statearr_20380_20399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (3))){
var inst_20370 = (state_20373[(2)]);
var inst_20371 = cljs.core.async.close_BANG_.call(null,out);
var state_20373__$1 = (function (){var statearr_20381 = state_20373;
(statearr_20381[(9)] = inst_20370);

return statearr_20381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20373__$1,inst_20371);
} else {
if((state_val_20374 === (2))){
var inst_20350 = (state_20373[(8)]);
var inst_20352 = (inst_20350 < n);
var state_20373__$1 = state_20373;
if(cljs.core.truth_(inst_20352)){
var statearr_20382_20400 = state_20373__$1;
(statearr_20382_20400[(1)] = (4));

} else {
var statearr_20383_20401 = state_20373__$1;
(statearr_20383_20401[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (11))){
var inst_20350 = (state_20373[(8)]);
var inst_20360 = (state_20373[(2)]);
var inst_20361 = (inst_20350 + (1));
var inst_20350__$1 = inst_20361;
var state_20373__$1 = (function (){var statearr_20384 = state_20373;
(statearr_20384[(8)] = inst_20350__$1);

(statearr_20384[(10)] = inst_20360);

return statearr_20384;
})();
var statearr_20385_20402 = state_20373__$1;
(statearr_20385_20402[(2)] = null);

(statearr_20385_20402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (9))){
var state_20373__$1 = state_20373;
var statearr_20386_20403 = state_20373__$1;
(statearr_20386_20403[(2)] = null);

(statearr_20386_20403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (5))){
var state_20373__$1 = state_20373;
var statearr_20387_20404 = state_20373__$1;
(statearr_20387_20404[(2)] = null);

(statearr_20387_20404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (10))){
var inst_20365 = (state_20373[(2)]);
var state_20373__$1 = state_20373;
var statearr_20388_20405 = state_20373__$1;
(statearr_20388_20405[(2)] = inst_20365);

(statearr_20388_20405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (8))){
var inst_20355 = (state_20373[(7)]);
var state_20373__$1 = state_20373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20373__$1,(11),out,inst_20355);
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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_20389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20389[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_20389[(1)] = (1));

return statearr_20389;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_20373){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20390){var ex__18798__auto__ = e20390;
var statearr_20391_20406 = state_20373;
(statearr_20391_20406[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20373[(4)]))){
var statearr_20392_20407 = state_20373;
(statearr_20392_20407[(1)] = cljs.core.first.call(null,(state_20373[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20408 = state_20373;
state_20373 = G__20408;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_20373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_20373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20393 = f__18869__auto__.call(null);
(statearr_20393[(6)] = c__18868__auto___20395);

return statearr_20393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20410 = (function (f,ch,meta20411){
this.f = f;
this.ch = ch;
this.meta20411 = meta20411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20412,meta20411__$1){
var self__ = this;
var _20412__$1 = this;
return (new cljs.core.async.t_cljs$core$async20410(self__.f,self__.ch,meta20411__$1));
}));

(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20412){
var self__ = this;
var _20412__$1 = this;
return self__.meta20411;
}));

(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20413 = (function (f,ch,meta20411,_,fn1,meta20414){
this.f = f;
this.ch = ch;
this.meta20411 = meta20411;
this._ = _;
this.fn1 = fn1;
this.meta20414 = meta20414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20415,meta20414__$1){
var self__ = this;
var _20415__$1 = this;
return (new cljs.core.async.t_cljs$core$async20413(self__.f,self__.ch,self__.meta20411,self__._,self__.fn1,meta20414__$1));
}));

(cljs.core.async.t_cljs$core$async20413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20415){
var self__ = this;
var _20415__$1 = this;
return self__.meta20414;
}));

(cljs.core.async.t_cljs$core$async20413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__20409_SHARP_){
return f1.call(null,(((p1__20409_SHARP_ == null))?null:self__.f.call(null,p1__20409_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async20413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20411","meta20411",-593941625,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20410","cljs.core.async/t_cljs$core$async20410",-2002854031,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20414","meta20414",1874874368,null)], null);
}));

(cljs.core.async.t_cljs$core$async20413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20413");

(cljs.core.async.t_cljs$core$async20413.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20413.
 */
cljs.core.async.__GT_t_cljs$core$async20413 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20413(f__$1,ch__$1,meta20411__$1,___$2,fn1__$1,meta20414){
return (new cljs.core.async.t_cljs$core$async20413(f__$1,ch__$1,meta20411__$1,___$2,fn1__$1,meta20414));
});

}

return (new cljs.core.async.t_cljs$core$async20413(self__.f,self__.ch,self__.meta20411,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20411","meta20411",-593941625,null)], null);
}));

(cljs.core.async.t_cljs$core$async20410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20410");

(cljs.core.async.t_cljs$core$async20410.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20410.
 */
cljs.core.async.__GT_t_cljs$core$async20410 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20410(f__$1,ch__$1,meta20411){
return (new cljs.core.async.t_cljs$core$async20410(f__$1,ch__$1,meta20411));
});

}

return (new cljs.core.async.t_cljs$core$async20410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20416 = (function (f,ch,meta20417){
this.f = f;
this.ch = ch;
this.meta20417 = meta20417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20418,meta20417__$1){
var self__ = this;
var _20418__$1 = this;
return (new cljs.core.async.t_cljs$core$async20416(self__.f,self__.ch,meta20417__$1));
}));

(cljs.core.async.t_cljs$core$async20416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20418){
var self__ = this;
var _20418__$1 = this;
return self__.meta20417;
}));

(cljs.core.async.t_cljs$core$async20416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async20416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20417","meta20417",518281738,null)], null);
}));

(cljs.core.async.t_cljs$core$async20416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20416");

(cljs.core.async.t_cljs$core$async20416.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20416.
 */
cljs.core.async.__GT_t_cljs$core$async20416 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20416(f__$1,ch__$1,meta20417){
return (new cljs.core.async.t_cljs$core$async20416(f__$1,ch__$1,meta20417));
});

}

return (new cljs.core.async.t_cljs$core$async20416(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20419 = (function (p,ch,meta20420){
this.p = p;
this.ch = ch;
this.meta20420 = meta20420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20421,meta20420__$1){
var self__ = this;
var _20421__$1 = this;
return (new cljs.core.async.t_cljs$core$async20419(self__.p,self__.ch,meta20420__$1));
}));

(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20421){
var self__ = this;
var _20421__$1 = this;
return self__.meta20420;
}));

(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20420","meta20420",1616995203,null)], null);
}));

(cljs.core.async.t_cljs$core$async20419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20419");

(cljs.core.async.t_cljs$core$async20419.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20419.
 */
cljs.core.async.__GT_t_cljs$core$async20419 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20419(p__$1,ch__$1,meta20420){
return (new cljs.core.async.t_cljs$core$async20419(p__$1,ch__$1,meta20420));
});

}

return (new cljs.core.async.t_cljs$core$async20419(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20423 = arguments.length;
switch (G__20423) {
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
var c__18868__auto___20464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20444){
var state_val_20445 = (state_20444[(1)]);
if((state_val_20445 === (7))){
var inst_20440 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20446_20465 = state_20444__$1;
(statearr_20446_20465[(2)] = inst_20440);

(statearr_20446_20465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (1))){
var state_20444__$1 = state_20444;
var statearr_20447_20466 = state_20444__$1;
(statearr_20447_20466[(2)] = null);

(statearr_20447_20466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (4))){
var inst_20426 = (state_20444[(7)]);
var inst_20426__$1 = (state_20444[(2)]);
var inst_20427 = (inst_20426__$1 == null);
var state_20444__$1 = (function (){var statearr_20448 = state_20444;
(statearr_20448[(7)] = inst_20426__$1);

return statearr_20448;
})();
if(cljs.core.truth_(inst_20427)){
var statearr_20449_20467 = state_20444__$1;
(statearr_20449_20467[(1)] = (5));

} else {
var statearr_20450_20468 = state_20444__$1;
(statearr_20450_20468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (6))){
var inst_20426 = (state_20444[(7)]);
var inst_20431 = p.call(null,inst_20426);
var state_20444__$1 = state_20444;
if(cljs.core.truth_(inst_20431)){
var statearr_20451_20469 = state_20444__$1;
(statearr_20451_20469[(1)] = (8));

} else {
var statearr_20452_20470 = state_20444__$1;
(statearr_20452_20470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (3))){
var inst_20442 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20444__$1,inst_20442);
} else {
if((state_val_20445 === (2))){
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20444__$1,(4),ch);
} else {
if((state_val_20445 === (11))){
var inst_20434 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20453_20471 = state_20444__$1;
(statearr_20453_20471[(2)] = inst_20434);

(statearr_20453_20471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (9))){
var state_20444__$1 = state_20444;
var statearr_20454_20472 = state_20444__$1;
(statearr_20454_20472[(2)] = null);

(statearr_20454_20472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (5))){
var inst_20429 = cljs.core.async.close_BANG_.call(null,out);
var state_20444__$1 = state_20444;
var statearr_20455_20473 = state_20444__$1;
(statearr_20455_20473[(2)] = inst_20429);

(statearr_20455_20473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (10))){
var inst_20437 = (state_20444[(2)]);
var state_20444__$1 = (function (){var statearr_20456 = state_20444;
(statearr_20456[(8)] = inst_20437);

return statearr_20456;
})();
var statearr_20457_20474 = state_20444__$1;
(statearr_20457_20474[(2)] = null);

(statearr_20457_20474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (8))){
var inst_20426 = (state_20444[(7)]);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20444__$1,(11),out,inst_20426);
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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_20458 = [null,null,null,null,null,null,null,null,null];
(statearr_20458[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_20458[(1)] = (1));

return statearr_20458;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_20444){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20459){var ex__18798__auto__ = e20459;
var statearr_20460_20475 = state_20444;
(statearr_20460_20475[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20444[(4)]))){
var statearr_20461_20476 = state_20444;
(statearr_20461_20476[(1)] = cljs.core.first.call(null,(state_20444[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20477 = state_20444;
state_20444 = G__20477;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_20444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_20444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20462 = f__18869__auto__.call(null);
(statearr_20462[(6)] = c__18868__auto___20464);

return statearr_20462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20479 = arguments.length;
switch (G__20479) {
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
var c__18868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20542){
var state_val_20543 = (state_20542[(1)]);
if((state_val_20543 === (7))){
var inst_20538 = (state_20542[(2)]);
var state_20542__$1 = state_20542;
var statearr_20544_20583 = state_20542__$1;
(statearr_20544_20583[(2)] = inst_20538);

(statearr_20544_20583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (20))){
var inst_20508 = (state_20542[(7)]);
var inst_20519 = (state_20542[(2)]);
var inst_20520 = cljs.core.next.call(null,inst_20508);
var inst_20494 = inst_20520;
var inst_20495 = null;
var inst_20496 = (0);
var inst_20497 = (0);
var state_20542__$1 = (function (){var statearr_20545 = state_20542;
(statearr_20545[(8)] = inst_20497);

(statearr_20545[(9)] = inst_20496);

(statearr_20545[(10)] = inst_20494);

(statearr_20545[(11)] = inst_20495);

(statearr_20545[(12)] = inst_20519);

return statearr_20545;
})();
var statearr_20546_20584 = state_20542__$1;
(statearr_20546_20584[(2)] = null);

(statearr_20546_20584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (1))){
var state_20542__$1 = state_20542;
var statearr_20547_20585 = state_20542__$1;
(statearr_20547_20585[(2)] = null);

(statearr_20547_20585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (4))){
var inst_20483 = (state_20542[(13)]);
var inst_20483__$1 = (state_20542[(2)]);
var inst_20484 = (inst_20483__$1 == null);
var state_20542__$1 = (function (){var statearr_20548 = state_20542;
(statearr_20548[(13)] = inst_20483__$1);

return statearr_20548;
})();
if(cljs.core.truth_(inst_20484)){
var statearr_20549_20586 = state_20542__$1;
(statearr_20549_20586[(1)] = (5));

} else {
var statearr_20550_20587 = state_20542__$1;
(statearr_20550_20587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (15))){
var state_20542__$1 = state_20542;
var statearr_20554_20588 = state_20542__$1;
(statearr_20554_20588[(2)] = null);

(statearr_20554_20588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (21))){
var state_20542__$1 = state_20542;
var statearr_20555_20589 = state_20542__$1;
(statearr_20555_20589[(2)] = null);

(statearr_20555_20589[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (13))){
var inst_20497 = (state_20542[(8)]);
var inst_20496 = (state_20542[(9)]);
var inst_20494 = (state_20542[(10)]);
var inst_20495 = (state_20542[(11)]);
var inst_20504 = (state_20542[(2)]);
var inst_20505 = (inst_20497 + (1));
var tmp20551 = inst_20496;
var tmp20552 = inst_20494;
var tmp20553 = inst_20495;
var inst_20494__$1 = tmp20552;
var inst_20495__$1 = tmp20553;
var inst_20496__$1 = tmp20551;
var inst_20497__$1 = inst_20505;
var state_20542__$1 = (function (){var statearr_20556 = state_20542;
(statearr_20556[(8)] = inst_20497__$1);

(statearr_20556[(9)] = inst_20496__$1);

(statearr_20556[(10)] = inst_20494__$1);

(statearr_20556[(14)] = inst_20504);

(statearr_20556[(11)] = inst_20495__$1);

return statearr_20556;
})();
var statearr_20557_20590 = state_20542__$1;
(statearr_20557_20590[(2)] = null);

(statearr_20557_20590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (22))){
var state_20542__$1 = state_20542;
var statearr_20558_20591 = state_20542__$1;
(statearr_20558_20591[(2)] = null);

(statearr_20558_20591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (6))){
var inst_20483 = (state_20542[(13)]);
var inst_20492 = f.call(null,inst_20483);
var inst_20493 = cljs.core.seq.call(null,inst_20492);
var inst_20494 = inst_20493;
var inst_20495 = null;
var inst_20496 = (0);
var inst_20497 = (0);
var state_20542__$1 = (function (){var statearr_20559 = state_20542;
(statearr_20559[(8)] = inst_20497);

(statearr_20559[(9)] = inst_20496);

(statearr_20559[(10)] = inst_20494);

(statearr_20559[(11)] = inst_20495);

return statearr_20559;
})();
var statearr_20560_20592 = state_20542__$1;
(statearr_20560_20592[(2)] = null);

(statearr_20560_20592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (17))){
var inst_20508 = (state_20542[(7)]);
var inst_20512 = cljs.core.chunk_first.call(null,inst_20508);
var inst_20513 = cljs.core.chunk_rest.call(null,inst_20508);
var inst_20514 = cljs.core.count.call(null,inst_20512);
var inst_20494 = inst_20513;
var inst_20495 = inst_20512;
var inst_20496 = inst_20514;
var inst_20497 = (0);
var state_20542__$1 = (function (){var statearr_20561 = state_20542;
(statearr_20561[(8)] = inst_20497);

(statearr_20561[(9)] = inst_20496);

(statearr_20561[(10)] = inst_20494);

(statearr_20561[(11)] = inst_20495);

return statearr_20561;
})();
var statearr_20562_20593 = state_20542__$1;
(statearr_20562_20593[(2)] = null);

(statearr_20562_20593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (3))){
var inst_20540 = (state_20542[(2)]);
var state_20542__$1 = state_20542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20542__$1,inst_20540);
} else {
if((state_val_20543 === (12))){
var inst_20528 = (state_20542[(2)]);
var state_20542__$1 = state_20542;
var statearr_20563_20594 = state_20542__$1;
(statearr_20563_20594[(2)] = inst_20528);

(statearr_20563_20594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (2))){
var state_20542__$1 = state_20542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20542__$1,(4),in$);
} else {
if((state_val_20543 === (23))){
var inst_20536 = (state_20542[(2)]);
var state_20542__$1 = state_20542;
var statearr_20564_20595 = state_20542__$1;
(statearr_20564_20595[(2)] = inst_20536);

(statearr_20564_20595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (19))){
var inst_20523 = (state_20542[(2)]);
var state_20542__$1 = state_20542;
var statearr_20565_20596 = state_20542__$1;
(statearr_20565_20596[(2)] = inst_20523);

(statearr_20565_20596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (11))){
var inst_20494 = (state_20542[(10)]);
var inst_20508 = (state_20542[(7)]);
var inst_20508__$1 = cljs.core.seq.call(null,inst_20494);
var state_20542__$1 = (function (){var statearr_20566 = state_20542;
(statearr_20566[(7)] = inst_20508__$1);

return statearr_20566;
})();
if(inst_20508__$1){
var statearr_20567_20597 = state_20542__$1;
(statearr_20567_20597[(1)] = (14));

} else {
var statearr_20568_20598 = state_20542__$1;
(statearr_20568_20598[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (9))){
var inst_20530 = (state_20542[(2)]);
var inst_20531 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20542__$1 = (function (){var statearr_20569 = state_20542;
(statearr_20569[(15)] = inst_20530);

return statearr_20569;
})();
if(cljs.core.truth_(inst_20531)){
var statearr_20570_20599 = state_20542__$1;
(statearr_20570_20599[(1)] = (21));

} else {
var statearr_20571_20600 = state_20542__$1;
(statearr_20571_20600[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (5))){
var inst_20486 = cljs.core.async.close_BANG_.call(null,out);
var state_20542__$1 = state_20542;
var statearr_20572_20601 = state_20542__$1;
(statearr_20572_20601[(2)] = inst_20486);

(statearr_20572_20601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (14))){
var inst_20508 = (state_20542[(7)]);
var inst_20510 = cljs.core.chunked_seq_QMARK_.call(null,inst_20508);
var state_20542__$1 = state_20542;
if(inst_20510){
var statearr_20573_20602 = state_20542__$1;
(statearr_20573_20602[(1)] = (17));

} else {
var statearr_20574_20603 = state_20542__$1;
(statearr_20574_20603[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (16))){
var inst_20526 = (state_20542[(2)]);
var state_20542__$1 = state_20542;
var statearr_20575_20604 = state_20542__$1;
(statearr_20575_20604[(2)] = inst_20526);

(statearr_20575_20604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20543 === (10))){
var inst_20497 = (state_20542[(8)]);
var inst_20495 = (state_20542[(11)]);
var inst_20502 = cljs.core._nth.call(null,inst_20495,inst_20497);
var state_20542__$1 = state_20542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20542__$1,(13),out,inst_20502);
} else {
if((state_val_20543 === (18))){
var inst_20508 = (state_20542[(7)]);
var inst_20517 = cljs.core.first.call(null,inst_20508);
var state_20542__$1 = state_20542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20542__$1,(20),out,inst_20517);
} else {
if((state_val_20543 === (8))){
var inst_20497 = (state_20542[(8)]);
var inst_20496 = (state_20542[(9)]);
var inst_20499 = (inst_20497 < inst_20496);
var inst_20500 = inst_20499;
var state_20542__$1 = state_20542;
if(cljs.core.truth_(inst_20500)){
var statearr_20576_20605 = state_20542__$1;
(statearr_20576_20605[(1)] = (10));

} else {
var statearr_20577_20606 = state_20542__$1;
(statearr_20577_20606[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__18795__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18795__auto____0 = (function (){
var statearr_20578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20578[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18795__auto__);

(statearr_20578[(1)] = (1));

return statearr_20578;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18795__auto____1 = (function (state_20542){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20579){var ex__18798__auto__ = e20579;
var statearr_20580_20607 = state_20542;
(statearr_20580_20607[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20542[(4)]))){
var statearr_20581_20608 = state_20542;
(statearr_20581_20608[(1)] = cljs.core.first.call(null,(state_20542[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20609 = state_20542;
state_20542 = G__20609;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18795__auto__ = function(state_20542){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18795__auto____1.call(this,state_20542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18795__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18795__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20582 = f__18869__auto__.call(null);
(statearr_20582[(6)] = c__18868__auto__);

return statearr_20582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));

return c__18868__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20611 = arguments.length;
switch (G__20611) {
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
var G__20614 = arguments.length;
switch (G__20614) {
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
var G__20617 = arguments.length;
switch (G__20617) {
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
var c__18868__auto___20665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20641){
var state_val_20642 = (state_20641[(1)]);
if((state_val_20642 === (7))){
var inst_20636 = (state_20641[(2)]);
var state_20641__$1 = state_20641;
var statearr_20643_20666 = state_20641__$1;
(statearr_20643_20666[(2)] = inst_20636);

(statearr_20643_20666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20642 === (1))){
var inst_20618 = null;
var state_20641__$1 = (function (){var statearr_20644 = state_20641;
(statearr_20644[(7)] = inst_20618);

return statearr_20644;
})();
var statearr_20645_20667 = state_20641__$1;
(statearr_20645_20667[(2)] = null);

(statearr_20645_20667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20642 === (4))){
var inst_20621 = (state_20641[(8)]);
var inst_20621__$1 = (state_20641[(2)]);
var inst_20622 = (inst_20621__$1 == null);
var inst_20623 = cljs.core.not.call(null,inst_20622);
var state_20641__$1 = (function (){var statearr_20646 = state_20641;
(statearr_20646[(8)] = inst_20621__$1);

return statearr_20646;
})();
if(inst_20623){
var statearr_20647_20668 = state_20641__$1;
(statearr_20647_20668[(1)] = (5));

} else {
var statearr_20648_20669 = state_20641__$1;
(statearr_20648_20669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20642 === (6))){
var state_20641__$1 = state_20641;
var statearr_20649_20670 = state_20641__$1;
(statearr_20649_20670[(2)] = null);

(statearr_20649_20670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20642 === (3))){
var inst_20638 = (state_20641[(2)]);
var inst_20639 = cljs.core.async.close_BANG_.call(null,out);
var state_20641__$1 = (function (){var statearr_20650 = state_20641;
(statearr_20650[(9)] = inst_20638);

return statearr_20650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20641__$1,inst_20639);
} else {
if((state_val_20642 === (2))){
var state_20641__$1 = state_20641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20641__$1,(4),ch);
} else {
if((state_val_20642 === (11))){
var inst_20621 = (state_20641[(8)]);
var inst_20630 = (state_20641[(2)]);
var inst_20618 = inst_20621;
var state_20641__$1 = (function (){var statearr_20651 = state_20641;
(statearr_20651[(10)] = inst_20630);

(statearr_20651[(7)] = inst_20618);

return statearr_20651;
})();
var statearr_20652_20671 = state_20641__$1;
(statearr_20652_20671[(2)] = null);

(statearr_20652_20671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20642 === (9))){
var inst_20621 = (state_20641[(8)]);
var state_20641__$1 = state_20641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20641__$1,(11),out,inst_20621);
} else {
if((state_val_20642 === (5))){
var inst_20621 = (state_20641[(8)]);
var inst_20618 = (state_20641[(7)]);
var inst_20625 = cljs.core._EQ_.call(null,inst_20621,inst_20618);
var state_20641__$1 = state_20641;
if(inst_20625){
var statearr_20654_20672 = state_20641__$1;
(statearr_20654_20672[(1)] = (8));

} else {
var statearr_20655_20673 = state_20641__$1;
(statearr_20655_20673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20642 === (10))){
var inst_20633 = (state_20641[(2)]);
var state_20641__$1 = state_20641;
var statearr_20656_20674 = state_20641__$1;
(statearr_20656_20674[(2)] = inst_20633);

(statearr_20656_20674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20642 === (8))){
var inst_20618 = (state_20641[(7)]);
var tmp20653 = inst_20618;
var inst_20618__$1 = tmp20653;
var state_20641__$1 = (function (){var statearr_20657 = state_20641;
(statearr_20657[(7)] = inst_20618__$1);

return statearr_20657;
})();
var statearr_20658_20675 = state_20641__$1;
(statearr_20658_20675[(2)] = null);

(statearr_20658_20675[(1)] = (2));


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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_20659 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20659[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_20659[(1)] = (1));

return statearr_20659;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_20641){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20660){var ex__18798__auto__ = e20660;
var statearr_20661_20676 = state_20641;
(statearr_20661_20676[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20641[(4)]))){
var statearr_20662_20677 = state_20641;
(statearr_20662_20677[(1)] = cljs.core.first.call(null,(state_20641[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20678 = state_20641;
state_20641 = G__20678;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_20641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_20641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20663 = f__18869__auto__.call(null);
(statearr_20663[(6)] = c__18868__auto___20665);

return statearr_20663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20680 = arguments.length;
switch (G__20680) {
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
var c__18868__auto___20747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20718){
var state_val_20719 = (state_20718[(1)]);
if((state_val_20719 === (7))){
var inst_20714 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20720_20748 = state_20718__$1;
(statearr_20720_20748[(2)] = inst_20714);

(statearr_20720_20748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (1))){
var inst_20681 = (new Array(n));
var inst_20682 = inst_20681;
var inst_20683 = (0);
var state_20718__$1 = (function (){var statearr_20721 = state_20718;
(statearr_20721[(7)] = inst_20682);

(statearr_20721[(8)] = inst_20683);

return statearr_20721;
})();
var statearr_20722_20749 = state_20718__$1;
(statearr_20722_20749[(2)] = null);

(statearr_20722_20749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (4))){
var inst_20686 = (state_20718[(9)]);
var inst_20686__$1 = (state_20718[(2)]);
var inst_20687 = (inst_20686__$1 == null);
var inst_20688 = cljs.core.not.call(null,inst_20687);
var state_20718__$1 = (function (){var statearr_20723 = state_20718;
(statearr_20723[(9)] = inst_20686__$1);

return statearr_20723;
})();
if(inst_20688){
var statearr_20724_20750 = state_20718__$1;
(statearr_20724_20750[(1)] = (5));

} else {
var statearr_20725_20751 = state_20718__$1;
(statearr_20725_20751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (15))){
var inst_20708 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20726_20752 = state_20718__$1;
(statearr_20726_20752[(2)] = inst_20708);

(statearr_20726_20752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (13))){
var state_20718__$1 = state_20718;
var statearr_20727_20753 = state_20718__$1;
(statearr_20727_20753[(2)] = null);

(statearr_20727_20753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (6))){
var inst_20683 = (state_20718[(8)]);
var inst_20704 = (inst_20683 > (0));
var state_20718__$1 = state_20718;
if(cljs.core.truth_(inst_20704)){
var statearr_20728_20754 = state_20718__$1;
(statearr_20728_20754[(1)] = (12));

} else {
var statearr_20729_20755 = state_20718__$1;
(statearr_20729_20755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (3))){
var inst_20716 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20718__$1,inst_20716);
} else {
if((state_val_20719 === (12))){
var inst_20682 = (state_20718[(7)]);
var inst_20706 = cljs.core.vec.call(null,inst_20682);
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20718__$1,(15),out,inst_20706);
} else {
if((state_val_20719 === (2))){
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20718__$1,(4),ch);
} else {
if((state_val_20719 === (11))){
var inst_20698 = (state_20718[(2)]);
var inst_20699 = (new Array(n));
var inst_20682 = inst_20699;
var inst_20683 = (0);
var state_20718__$1 = (function (){var statearr_20730 = state_20718;
(statearr_20730[(7)] = inst_20682);

(statearr_20730[(10)] = inst_20698);

(statearr_20730[(8)] = inst_20683);

return statearr_20730;
})();
var statearr_20731_20756 = state_20718__$1;
(statearr_20731_20756[(2)] = null);

(statearr_20731_20756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (9))){
var inst_20682 = (state_20718[(7)]);
var inst_20696 = cljs.core.vec.call(null,inst_20682);
var state_20718__$1 = state_20718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20718__$1,(11),out,inst_20696);
} else {
if((state_val_20719 === (5))){
var inst_20682 = (state_20718[(7)]);
var inst_20686 = (state_20718[(9)]);
var inst_20691 = (state_20718[(11)]);
var inst_20683 = (state_20718[(8)]);
var inst_20690 = (inst_20682[inst_20683] = inst_20686);
var inst_20691__$1 = (inst_20683 + (1));
var inst_20692 = (inst_20691__$1 < n);
var state_20718__$1 = (function (){var statearr_20732 = state_20718;
(statearr_20732[(12)] = inst_20690);

(statearr_20732[(11)] = inst_20691__$1);

return statearr_20732;
})();
if(cljs.core.truth_(inst_20692)){
var statearr_20733_20757 = state_20718__$1;
(statearr_20733_20757[(1)] = (8));

} else {
var statearr_20734_20758 = state_20718__$1;
(statearr_20734_20758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (14))){
var inst_20711 = (state_20718[(2)]);
var inst_20712 = cljs.core.async.close_BANG_.call(null,out);
var state_20718__$1 = (function (){var statearr_20736 = state_20718;
(statearr_20736[(13)] = inst_20711);

return statearr_20736;
})();
var statearr_20737_20759 = state_20718__$1;
(statearr_20737_20759[(2)] = inst_20712);

(statearr_20737_20759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (10))){
var inst_20702 = (state_20718[(2)]);
var state_20718__$1 = state_20718;
var statearr_20738_20760 = state_20718__$1;
(statearr_20738_20760[(2)] = inst_20702);

(statearr_20738_20760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20719 === (8))){
var inst_20682 = (state_20718[(7)]);
var inst_20691 = (state_20718[(11)]);
var tmp20735 = inst_20682;
var inst_20682__$1 = tmp20735;
var inst_20683 = inst_20691;
var state_20718__$1 = (function (){var statearr_20739 = state_20718;
(statearr_20739[(7)] = inst_20682__$1);

(statearr_20739[(8)] = inst_20683);

return statearr_20739;
})();
var statearr_20740_20761 = state_20718__$1;
(statearr_20740_20761[(2)] = null);

(statearr_20740_20761[(1)] = (2));


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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_20741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20741[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_20741[(1)] = (1));

return statearr_20741;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_20718){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20742){var ex__18798__auto__ = e20742;
var statearr_20743_20762 = state_20718;
(statearr_20743_20762[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20718[(4)]))){
var statearr_20744_20763 = state_20718;
(statearr_20744_20763[(1)] = cljs.core.first.call(null,(state_20718[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20764 = state_20718;
state_20718 = G__20764;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_20718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_20718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20745 = f__18869__auto__.call(null);
(statearr_20745[(6)] = c__18868__auto___20747);

return statearr_20745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20766 = arguments.length;
switch (G__20766) {
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
var c__18868__auto___20837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__18869__auto__ = (function (){var switch__18794__auto__ = (function (state_20808){
var state_val_20809 = (state_20808[(1)]);
if((state_val_20809 === (7))){
var inst_20804 = (state_20808[(2)]);
var state_20808__$1 = state_20808;
var statearr_20810_20838 = state_20808__$1;
(statearr_20810_20838[(2)] = inst_20804);

(statearr_20810_20838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (1))){
var inst_20767 = [];
var inst_20768 = inst_20767;
var inst_20769 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20808__$1 = (function (){var statearr_20811 = state_20808;
(statearr_20811[(7)] = inst_20768);

(statearr_20811[(8)] = inst_20769);

return statearr_20811;
})();
var statearr_20812_20839 = state_20808__$1;
(statearr_20812_20839[(2)] = null);

(statearr_20812_20839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (4))){
var inst_20772 = (state_20808[(9)]);
var inst_20772__$1 = (state_20808[(2)]);
var inst_20773 = (inst_20772__$1 == null);
var inst_20774 = cljs.core.not.call(null,inst_20773);
var state_20808__$1 = (function (){var statearr_20813 = state_20808;
(statearr_20813[(9)] = inst_20772__$1);

return statearr_20813;
})();
if(inst_20774){
var statearr_20814_20840 = state_20808__$1;
(statearr_20814_20840[(1)] = (5));

} else {
var statearr_20815_20841 = state_20808__$1;
(statearr_20815_20841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (15))){
var inst_20798 = (state_20808[(2)]);
var state_20808__$1 = state_20808;
var statearr_20816_20842 = state_20808__$1;
(statearr_20816_20842[(2)] = inst_20798);

(statearr_20816_20842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (13))){
var state_20808__$1 = state_20808;
var statearr_20817_20843 = state_20808__$1;
(statearr_20817_20843[(2)] = null);

(statearr_20817_20843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (6))){
var inst_20768 = (state_20808[(7)]);
var inst_20793 = inst_20768.length;
var inst_20794 = (inst_20793 > (0));
var state_20808__$1 = state_20808;
if(cljs.core.truth_(inst_20794)){
var statearr_20818_20844 = state_20808__$1;
(statearr_20818_20844[(1)] = (12));

} else {
var statearr_20819_20845 = state_20808__$1;
(statearr_20819_20845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (3))){
var inst_20806 = (state_20808[(2)]);
var state_20808__$1 = state_20808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20808__$1,inst_20806);
} else {
if((state_val_20809 === (12))){
var inst_20768 = (state_20808[(7)]);
var inst_20796 = cljs.core.vec.call(null,inst_20768);
var state_20808__$1 = state_20808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20808__$1,(15),out,inst_20796);
} else {
if((state_val_20809 === (2))){
var state_20808__$1 = state_20808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20808__$1,(4),ch);
} else {
if((state_val_20809 === (11))){
var inst_20772 = (state_20808[(9)]);
var inst_20776 = (state_20808[(10)]);
var inst_20786 = (state_20808[(2)]);
var inst_20787 = [];
var inst_20788 = inst_20787.push(inst_20772);
var inst_20768 = inst_20787;
var inst_20769 = inst_20776;
var state_20808__$1 = (function (){var statearr_20820 = state_20808;
(statearr_20820[(7)] = inst_20768);

(statearr_20820[(11)] = inst_20788);

(statearr_20820[(12)] = inst_20786);

(statearr_20820[(8)] = inst_20769);

return statearr_20820;
})();
var statearr_20821_20846 = state_20808__$1;
(statearr_20821_20846[(2)] = null);

(statearr_20821_20846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (9))){
var inst_20768 = (state_20808[(7)]);
var inst_20784 = cljs.core.vec.call(null,inst_20768);
var state_20808__$1 = state_20808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20808__$1,(11),out,inst_20784);
} else {
if((state_val_20809 === (5))){
var inst_20772 = (state_20808[(9)]);
var inst_20776 = (state_20808[(10)]);
var inst_20769 = (state_20808[(8)]);
var inst_20776__$1 = f.call(null,inst_20772);
var inst_20777 = cljs.core._EQ_.call(null,inst_20776__$1,inst_20769);
var inst_20778 = cljs.core.keyword_identical_QMARK_.call(null,inst_20769,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20779 = ((inst_20777) || (inst_20778));
var state_20808__$1 = (function (){var statearr_20822 = state_20808;
(statearr_20822[(10)] = inst_20776__$1);

return statearr_20822;
})();
if(cljs.core.truth_(inst_20779)){
var statearr_20823_20847 = state_20808__$1;
(statearr_20823_20847[(1)] = (8));

} else {
var statearr_20824_20848 = state_20808__$1;
(statearr_20824_20848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (14))){
var inst_20801 = (state_20808[(2)]);
var inst_20802 = cljs.core.async.close_BANG_.call(null,out);
var state_20808__$1 = (function (){var statearr_20826 = state_20808;
(statearr_20826[(13)] = inst_20801);

return statearr_20826;
})();
var statearr_20827_20849 = state_20808__$1;
(statearr_20827_20849[(2)] = inst_20802);

(statearr_20827_20849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (10))){
var inst_20791 = (state_20808[(2)]);
var state_20808__$1 = state_20808;
var statearr_20828_20850 = state_20808__$1;
(statearr_20828_20850[(2)] = inst_20791);

(statearr_20828_20850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20809 === (8))){
var inst_20772 = (state_20808[(9)]);
var inst_20776 = (state_20808[(10)]);
var inst_20768 = (state_20808[(7)]);
var inst_20781 = inst_20768.push(inst_20772);
var tmp20825 = inst_20768;
var inst_20768__$1 = tmp20825;
var inst_20769 = inst_20776;
var state_20808__$1 = (function (){var statearr_20829 = state_20808;
(statearr_20829[(14)] = inst_20781);

(statearr_20829[(7)] = inst_20768__$1);

(statearr_20829[(8)] = inst_20769);

return statearr_20829;
})();
var statearr_20830_20851 = state_20808__$1;
(statearr_20830_20851[(2)] = null);

(statearr_20830_20851[(1)] = (2));


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
var cljs$core$async$state_machine__18795__auto__ = null;
var cljs$core$async$state_machine__18795__auto____0 = (function (){
var statearr_20831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20831[(0)] = cljs$core$async$state_machine__18795__auto__);

(statearr_20831[(1)] = (1));

return statearr_20831;
});
var cljs$core$async$state_machine__18795__auto____1 = (function (state_20808){
while(true){
var ret_value__18796__auto__ = (function (){try{while(true){
var result__18797__auto__ = switch__18794__auto__.call(null,state_20808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18797__auto__;
}
break;
}
}catch (e20832){var ex__18798__auto__ = e20832;
var statearr_20833_20852 = state_20808;
(statearr_20833_20852[(2)] = ex__18798__auto__);


if(cljs.core.seq.call(null,(state_20808[(4)]))){
var statearr_20834_20853 = state_20808;
(statearr_20834_20853[(1)] = cljs.core.first.call(null,(state_20808[(4)])));

} else {
throw ex__18798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20854 = state_20808;
state_20808 = G__20854;
continue;
} else {
return ret_value__18796__auto__;
}
break;
}
});
cljs$core$async$state_machine__18795__auto__ = function(state_20808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18795__auto____1.call(this,state_20808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18795__auto____0;
cljs$core$async$state_machine__18795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18795__auto____1;
return cljs$core$async$state_machine__18795__auto__;
})()
})();
var state__18870__auto__ = (function (){var statearr_20835 = f__18869__auto__.call(null);
(statearr_20835[(6)] = c__18868__auto___20837);

return statearr_20835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18870__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
