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
var G__13155 = arguments.length;
switch (G__13155) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13156 = (function (f,blockable,meta13157){
this.f = f;
this.blockable = blockable;
this.meta13157 = meta13157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13158,meta13157__$1){
var self__ = this;
var _13158__$1 = this;
return (new cljs.core.async.t_cljs$core$async13156(self__.f,self__.blockable,meta13157__$1));
}));

(cljs.core.async.t_cljs$core$async13156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13158){
var self__ = this;
var _13158__$1 = this;
return self__.meta13157;
}));

(cljs.core.async.t_cljs$core$async13156.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13156.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13157","meta13157",-1137614752,null)], null);
}));

(cljs.core.async.t_cljs$core$async13156.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13156");

(cljs.core.async.t_cljs$core$async13156.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13156");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13156.
 */
cljs.core.async.__GT_t_cljs$core$async13156 = (function cljs$core$async$__GT_t_cljs$core$async13156(f__$1,blockable__$1,meta13157){
return (new cljs.core.async.t_cljs$core$async13156(f__$1,blockable__$1,meta13157));
});

}

return (new cljs.core.async.t_cljs$core$async13156(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13162 = arguments.length;
switch (G__13162) {
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
var G__13165 = arguments.length;
switch (G__13165) {
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
var G__13168 = arguments.length;
switch (G__13168) {
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
var val_13170 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13170);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_13170);
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
var G__13172 = arguments.length;
switch (G__13172) {
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
var n__4613__auto___13174 = n;
var x_13175 = (0);
while(true){
if((x_13175 < n__4613__auto___13174)){
(a[x_13175] = x_13175);

var G__13176 = (x_13175 + (1));
x_13175 = G__13176;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13177 = (function (flag,meta13178){
this.flag = flag;
this.meta13178 = meta13178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13179,meta13178__$1){
var self__ = this;
var _13179__$1 = this;
return (new cljs.core.async.t_cljs$core$async13177(self__.flag,meta13178__$1));
}));

(cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13179){
var self__ = this;
var _13179__$1 = this;
return self__.meta13178;
}));

(cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13178","meta13178",1121008172,null)], null);
}));

(cljs.core.async.t_cljs$core$async13177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13177");

(cljs.core.async.t_cljs$core$async13177.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13177.
 */
cljs.core.async.__GT_t_cljs$core$async13177 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13177(flag__$1,meta13178){
return (new cljs.core.async.t_cljs$core$async13177(flag__$1,meta13178));
});

}

return (new cljs.core.async.t_cljs$core$async13177(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13180 = (function (flag,cb,meta13181){
this.flag = flag;
this.cb = cb;
this.meta13181 = meta13181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13182,meta13181__$1){
var self__ = this;
var _13182__$1 = this;
return (new cljs.core.async.t_cljs$core$async13180(self__.flag,self__.cb,meta13181__$1));
}));

(cljs.core.async.t_cljs$core$async13180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13182){
var self__ = this;
var _13182__$1 = this;
return self__.meta13181;
}));

(cljs.core.async.t_cljs$core$async13180.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13181","meta13181",-1555342796,null)], null);
}));

(cljs.core.async.t_cljs$core$async13180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13180");

(cljs.core.async.t_cljs$core$async13180.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13180.
 */
cljs.core.async.__GT_t_cljs$core$async13180 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13180(flag__$1,cb__$1,meta13181){
return (new cljs.core.async.t_cljs$core$async13180(flag__$1,cb__$1,meta13181));
});

}

return (new cljs.core.async.t_cljs$core$async13180(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13183_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13183_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13184_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13184_SHARP_,port], null));
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
var G__13185 = (i + (1));
i = G__13185;
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
var len__4736__auto___13191 = arguments.length;
var i__4737__auto___13192 = (0);
while(true){
if((i__4737__auto___13192 < len__4736__auto___13191)){
args__4742__auto__.push((arguments[i__4737__auto___13192]));

var G__13193 = (i__4737__auto___13192 + (1));
i__4737__auto___13192 = G__13193;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13188){
var map__13189 = p__13188;
var map__13189__$1 = (((((!((map__13189 == null))))?(((((map__13189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13189):map__13189);
var opts = map__13189__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13186){
var G__13187 = cljs.core.first.call(null,seq13186);
var seq13186__$1 = cljs.core.next.call(null,seq13186);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13187,seq13186__$1);
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
var G__13195 = arguments.length;
switch (G__13195) {
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
var c__13095__auto___13242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13219){
var state_val_13220 = (state_13219[(1)]);
if((state_val_13220 === (7))){
var inst_13215 = (state_13219[(2)]);
var state_13219__$1 = state_13219;
var statearr_13221_13243 = state_13219__$1;
(statearr_13221_13243[(2)] = inst_13215);

(statearr_13221_13243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (1))){
var state_13219__$1 = state_13219;
var statearr_13222_13244 = state_13219__$1;
(statearr_13222_13244[(2)] = null);

(statearr_13222_13244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (4))){
var inst_13198 = (state_13219[(7)]);
var inst_13198__$1 = (state_13219[(2)]);
var inst_13199 = (inst_13198__$1 == null);
var state_13219__$1 = (function (){var statearr_13223 = state_13219;
(statearr_13223[(7)] = inst_13198__$1);

return statearr_13223;
})();
if(cljs.core.truth_(inst_13199)){
var statearr_13224_13245 = state_13219__$1;
(statearr_13224_13245[(1)] = (5));

} else {
var statearr_13225_13246 = state_13219__$1;
(statearr_13225_13246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (13))){
var state_13219__$1 = state_13219;
var statearr_13226_13247 = state_13219__$1;
(statearr_13226_13247[(2)] = null);

(statearr_13226_13247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (6))){
var inst_13198 = (state_13219[(7)]);
var state_13219__$1 = state_13219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13219__$1,(11),to,inst_13198);
} else {
if((state_val_13220 === (3))){
var inst_13217 = (state_13219[(2)]);
var state_13219__$1 = state_13219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13219__$1,inst_13217);
} else {
if((state_val_13220 === (12))){
var state_13219__$1 = state_13219;
var statearr_13227_13248 = state_13219__$1;
(statearr_13227_13248[(2)] = null);

(statearr_13227_13248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (2))){
var state_13219__$1 = state_13219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13219__$1,(4),from);
} else {
if((state_val_13220 === (11))){
var inst_13208 = (state_13219[(2)]);
var state_13219__$1 = state_13219;
if(cljs.core.truth_(inst_13208)){
var statearr_13228_13249 = state_13219__$1;
(statearr_13228_13249[(1)] = (12));

} else {
var statearr_13229_13250 = state_13219__$1;
(statearr_13229_13250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (9))){
var state_13219__$1 = state_13219;
var statearr_13230_13251 = state_13219__$1;
(statearr_13230_13251[(2)] = null);

(statearr_13230_13251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (5))){
var state_13219__$1 = state_13219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13231_13252 = state_13219__$1;
(statearr_13231_13252[(1)] = (8));

} else {
var statearr_13232_13253 = state_13219__$1;
(statearr_13232_13253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (14))){
var inst_13213 = (state_13219[(2)]);
var state_13219__$1 = state_13219;
var statearr_13233_13254 = state_13219__$1;
(statearr_13233_13254[(2)] = inst_13213);

(statearr_13233_13254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (10))){
var inst_13205 = (state_13219[(2)]);
var state_13219__$1 = state_13219;
var statearr_13234_13255 = state_13219__$1;
(statearr_13234_13255[(2)] = inst_13205);

(statearr_13234_13255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13220 === (8))){
var inst_13202 = cljs.core.async.close_BANG_.call(null,to);
var state_13219__$1 = state_13219;
var statearr_13235_13256 = state_13219__$1;
(statearr_13235_13256[(2)] = inst_13202);

(statearr_13235_13256[(1)] = (10));


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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_13236 = [null,null,null,null,null,null,null,null];
(statearr_13236[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_13236[(1)] = (1));

return statearr_13236;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_13219){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13237){var ex__13025__auto__ = e13237;
var statearr_13238_13257 = state_13219;
(statearr_13238_13257[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13219[(4)]))){
var statearr_13239_13258 = state_13219;
(statearr_13239_13258[(1)] = cljs.core.first.call(null,(state_13219[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13259 = state_13219;
state_13219 = G__13259;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_13219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_13219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13240 = f__13096__auto__.call(null);
(statearr_13240[(6)] = c__13095__auto___13242);

return statearr_13240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
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
var process = (function (p__13260){
var vec__13261 = p__13260;
var v = cljs.core.nth.call(null,vec__13261,(0),null);
var p = cljs.core.nth.call(null,vec__13261,(1),null);
var job = vec__13261;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13095__auto___13437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13268){
var state_val_13269 = (state_13268[(1)]);
if((state_val_13269 === (1))){
var state_13268__$1 = state_13268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13268__$1,(2),res,v);
} else {
if((state_val_13269 === (2))){
var inst_13265 = (state_13268[(2)]);
var inst_13266 = cljs.core.async.close_BANG_.call(null,res);
var state_13268__$1 = (function (){var statearr_13270 = state_13268;
(statearr_13270[(7)] = inst_13265);

return statearr_13270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13268__$1,inst_13266);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0 = (function (){
var statearr_13271 = [null,null,null,null,null,null,null,null];
(statearr_13271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__);

(statearr_13271[(1)] = (1));

return statearr_13271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1 = (function (state_13268){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13272){var ex__13025__auto__ = e13272;
var statearr_13273_13438 = state_13268;
(statearr_13273_13438[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13268[(4)]))){
var statearr_13274_13439 = state_13268;
(statearr_13274_13439[(1)] = cljs.core.first.call(null,(state_13268[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13440 = state_13268;
state_13268 = G__13440;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = function(state_13268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1.call(this,state_13268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13275 = f__13096__auto__.call(null);
(statearr_13275[(6)] = c__13095__auto___13437);

return statearr_13275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__13276){
var vec__13277 = p__13276;
var v = cljs.core.nth.call(null,vec__13277,(0),null);
var p = cljs.core.nth.call(null,vec__13277,(1),null);
var job = vec__13277;
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
var n__4613__auto___13441 = n;
var __13442 = (0);
while(true){
if((__13442 < n__4613__auto___13441)){
var G__13280_13443 = type;
var G__13280_13444__$1 = (((G__13280_13443 instanceof cljs.core.Keyword))?G__13280_13443.fqn:null);
switch (G__13280_13444__$1) {
case "compute":
var c__13095__auto___13446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13442,c__13095__auto___13446,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async){
return (function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = ((function (__13442,c__13095__auto___13446,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async){
return (function (state_13293){
var state_val_13294 = (state_13293[(1)]);
if((state_val_13294 === (1))){
var state_13293__$1 = state_13293;
var statearr_13295_13447 = state_13293__$1;
(statearr_13295_13447[(2)] = null);

(statearr_13295_13447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (2))){
var state_13293__$1 = state_13293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13293__$1,(4),jobs);
} else {
if((state_val_13294 === (3))){
var inst_13291 = (state_13293[(2)]);
var state_13293__$1 = state_13293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13293__$1,inst_13291);
} else {
if((state_val_13294 === (4))){
var inst_13283 = (state_13293[(2)]);
var inst_13284 = process.call(null,inst_13283);
var state_13293__$1 = state_13293;
if(cljs.core.truth_(inst_13284)){
var statearr_13296_13448 = state_13293__$1;
(statearr_13296_13448[(1)] = (5));

} else {
var statearr_13297_13449 = state_13293__$1;
(statearr_13297_13449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (5))){
var state_13293__$1 = state_13293;
var statearr_13298_13450 = state_13293__$1;
(statearr_13298_13450[(2)] = null);

(statearr_13298_13450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (6))){
var state_13293__$1 = state_13293;
var statearr_13299_13451 = state_13293__$1;
(statearr_13299_13451[(2)] = null);

(statearr_13299_13451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13294 === (7))){
var inst_13289 = (state_13293[(2)]);
var state_13293__$1 = state_13293;
var statearr_13300_13452 = state_13293__$1;
(statearr_13300_13452[(2)] = inst_13289);

(statearr_13300_13452[(1)] = (3));


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
});})(__13442,c__13095__auto___13446,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async))
;
return ((function (__13442,switch__13021__auto__,c__13095__auto___13446,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0 = (function (){
var statearr_13301 = [null,null,null,null,null,null,null];
(statearr_13301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__);

(statearr_13301[(1)] = (1));

return statearr_13301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1 = (function (state_13293){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13302){var ex__13025__auto__ = e13302;
var statearr_13303_13453 = state_13293;
(statearr_13303_13453[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13293[(4)]))){
var statearr_13304_13454 = state_13293;
(statearr_13304_13454[(1)] = cljs.core.first.call(null,(state_13293[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13455 = state_13293;
state_13293 = G__13455;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = function(state_13293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1.call(this,state_13293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__;
})()
;})(__13442,switch__13021__auto__,c__13095__auto___13446,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async))
})();
var state__13097__auto__ = (function (){var statearr_13305 = f__13096__auto__.call(null);
(statearr_13305[(6)] = c__13095__auto___13446);

return statearr_13305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
});})(__13442,c__13095__auto___13446,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async))
);


break;
case "async":
var c__13095__auto___13456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13442,c__13095__auto___13456,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async){
return (function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = ((function (__13442,c__13095__auto___13456,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async){
return (function (state_13318){
var state_val_13319 = (state_13318[(1)]);
if((state_val_13319 === (1))){
var state_13318__$1 = state_13318;
var statearr_13320_13457 = state_13318__$1;
(statearr_13320_13457[(2)] = null);

(statearr_13320_13457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (2))){
var state_13318__$1 = state_13318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13318__$1,(4),jobs);
} else {
if((state_val_13319 === (3))){
var inst_13316 = (state_13318[(2)]);
var state_13318__$1 = state_13318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13318__$1,inst_13316);
} else {
if((state_val_13319 === (4))){
var inst_13308 = (state_13318[(2)]);
var inst_13309 = async.call(null,inst_13308);
var state_13318__$1 = state_13318;
if(cljs.core.truth_(inst_13309)){
var statearr_13321_13458 = state_13318__$1;
(statearr_13321_13458[(1)] = (5));

} else {
var statearr_13322_13459 = state_13318__$1;
(statearr_13322_13459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (5))){
var state_13318__$1 = state_13318;
var statearr_13323_13460 = state_13318__$1;
(statearr_13323_13460[(2)] = null);

(statearr_13323_13460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (6))){
var state_13318__$1 = state_13318;
var statearr_13324_13461 = state_13318__$1;
(statearr_13324_13461[(2)] = null);

(statearr_13324_13461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13319 === (7))){
var inst_13314 = (state_13318[(2)]);
var state_13318__$1 = state_13318;
var statearr_13325_13462 = state_13318__$1;
(statearr_13325_13462[(2)] = inst_13314);

(statearr_13325_13462[(1)] = (3));


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
});})(__13442,c__13095__auto___13456,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async))
;
return ((function (__13442,switch__13021__auto__,c__13095__auto___13456,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0 = (function (){
var statearr_13326 = [null,null,null,null,null,null,null];
(statearr_13326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__);

(statearr_13326[(1)] = (1));

return statearr_13326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1 = (function (state_13318){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13327){var ex__13025__auto__ = e13327;
var statearr_13328_13463 = state_13318;
(statearr_13328_13463[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13318[(4)]))){
var statearr_13329_13464 = state_13318;
(statearr_13329_13464[(1)] = cljs.core.first.call(null,(state_13318[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13465 = state_13318;
state_13318 = G__13465;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = function(state_13318){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1.call(this,state_13318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__;
})()
;})(__13442,switch__13021__auto__,c__13095__auto___13456,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async))
})();
var state__13097__auto__ = (function (){var statearr_13330 = f__13096__auto__.call(null);
(statearr_13330[(6)] = c__13095__auto___13456);

return statearr_13330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
});})(__13442,c__13095__auto___13456,G__13280_13443,G__13280_13444__$1,n__4613__auto___13441,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13280_13444__$1)].join('')));

}

var G__13466 = (__13442 + (1));
__13442 = G__13466;
continue;
} else {
}
break;
}

var c__13095__auto___13467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13352){
var state_val_13353 = (state_13352[(1)]);
if((state_val_13353 === (7))){
var inst_13348 = (state_13352[(2)]);
var state_13352__$1 = state_13352;
var statearr_13354_13468 = state_13352__$1;
(statearr_13354_13468[(2)] = inst_13348);

(statearr_13354_13468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13353 === (1))){
var state_13352__$1 = state_13352;
var statearr_13355_13469 = state_13352__$1;
(statearr_13355_13469[(2)] = null);

(statearr_13355_13469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13353 === (4))){
var inst_13333 = (state_13352[(7)]);
var inst_13333__$1 = (state_13352[(2)]);
var inst_13334 = (inst_13333__$1 == null);
var state_13352__$1 = (function (){var statearr_13356 = state_13352;
(statearr_13356[(7)] = inst_13333__$1);

return statearr_13356;
})();
if(cljs.core.truth_(inst_13334)){
var statearr_13357_13470 = state_13352__$1;
(statearr_13357_13470[(1)] = (5));

} else {
var statearr_13358_13471 = state_13352__$1;
(statearr_13358_13471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13353 === (6))){
var inst_13338 = (state_13352[(8)]);
var inst_13333 = (state_13352[(7)]);
var inst_13338__$1 = cljs.core.async.chan.call(null,(1));
var inst_13339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13340 = [inst_13333,inst_13338__$1];
var inst_13341 = (new cljs.core.PersistentVector(null,2,(5),inst_13339,inst_13340,null));
var state_13352__$1 = (function (){var statearr_13359 = state_13352;
(statearr_13359[(8)] = inst_13338__$1);

return statearr_13359;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13352__$1,(8),jobs,inst_13341);
} else {
if((state_val_13353 === (3))){
var inst_13350 = (state_13352[(2)]);
var state_13352__$1 = state_13352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13352__$1,inst_13350);
} else {
if((state_val_13353 === (2))){
var state_13352__$1 = state_13352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13352__$1,(4),from);
} else {
if((state_val_13353 === (9))){
var inst_13345 = (state_13352[(2)]);
var state_13352__$1 = (function (){var statearr_13360 = state_13352;
(statearr_13360[(9)] = inst_13345);

return statearr_13360;
})();
var statearr_13361_13472 = state_13352__$1;
(statearr_13361_13472[(2)] = null);

(statearr_13361_13472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13353 === (5))){
var inst_13336 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13352__$1 = state_13352;
var statearr_13362_13473 = state_13352__$1;
(statearr_13362_13473[(2)] = inst_13336);

(statearr_13362_13473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13353 === (8))){
var inst_13338 = (state_13352[(8)]);
var inst_13343 = (state_13352[(2)]);
var state_13352__$1 = (function (){var statearr_13363 = state_13352;
(statearr_13363[(10)] = inst_13343);

return statearr_13363;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13352__$1,(9),results,inst_13338);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0 = (function (){
var statearr_13364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__);

(statearr_13364[(1)] = (1));

return statearr_13364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1 = (function (state_13352){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13365){var ex__13025__auto__ = e13365;
var statearr_13366_13474 = state_13352;
(statearr_13366_13474[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13352[(4)]))){
var statearr_13367_13475 = state_13352;
(statearr_13367_13475[(1)] = cljs.core.first.call(null,(state_13352[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13476 = state_13352;
state_13352 = G__13476;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = function(state_13352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1.call(this,state_13352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13368 = f__13096__auto__.call(null);
(statearr_13368[(6)] = c__13095__auto___13467);

return statearr_13368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));


var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13406){
var state_val_13407 = (state_13406[(1)]);
if((state_val_13407 === (7))){
var inst_13402 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
var statearr_13408_13477 = state_13406__$1;
(statearr_13408_13477[(2)] = inst_13402);

(statearr_13408_13477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (20))){
var state_13406__$1 = state_13406;
var statearr_13409_13478 = state_13406__$1;
(statearr_13409_13478[(2)] = null);

(statearr_13409_13478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (1))){
var state_13406__$1 = state_13406;
var statearr_13410_13479 = state_13406__$1;
(statearr_13410_13479[(2)] = null);

(statearr_13410_13479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (4))){
var inst_13371 = (state_13406[(7)]);
var inst_13371__$1 = (state_13406[(2)]);
var inst_13372 = (inst_13371__$1 == null);
var state_13406__$1 = (function (){var statearr_13411 = state_13406;
(statearr_13411[(7)] = inst_13371__$1);

return statearr_13411;
})();
if(cljs.core.truth_(inst_13372)){
var statearr_13412_13480 = state_13406__$1;
(statearr_13412_13480[(1)] = (5));

} else {
var statearr_13413_13481 = state_13406__$1;
(statearr_13413_13481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (15))){
var inst_13384 = (state_13406[(8)]);
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13406__$1,(18),to,inst_13384);
} else {
if((state_val_13407 === (21))){
var inst_13397 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
var statearr_13414_13482 = state_13406__$1;
(statearr_13414_13482[(2)] = inst_13397);

(statearr_13414_13482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (13))){
var inst_13399 = (state_13406[(2)]);
var state_13406__$1 = (function (){var statearr_13415 = state_13406;
(statearr_13415[(9)] = inst_13399);

return statearr_13415;
})();
var statearr_13416_13483 = state_13406__$1;
(statearr_13416_13483[(2)] = null);

(statearr_13416_13483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (6))){
var inst_13371 = (state_13406[(7)]);
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13406__$1,(11),inst_13371);
} else {
if((state_val_13407 === (17))){
var inst_13392 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
if(cljs.core.truth_(inst_13392)){
var statearr_13417_13484 = state_13406__$1;
(statearr_13417_13484[(1)] = (19));

} else {
var statearr_13418_13485 = state_13406__$1;
(statearr_13418_13485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (3))){
var inst_13404 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13406__$1,inst_13404);
} else {
if((state_val_13407 === (12))){
var inst_13381 = (state_13406[(10)]);
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13406__$1,(14),inst_13381);
} else {
if((state_val_13407 === (2))){
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13406__$1,(4),results);
} else {
if((state_val_13407 === (19))){
var state_13406__$1 = state_13406;
var statearr_13419_13486 = state_13406__$1;
(statearr_13419_13486[(2)] = null);

(statearr_13419_13486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (11))){
var inst_13381 = (state_13406[(2)]);
var state_13406__$1 = (function (){var statearr_13420 = state_13406;
(statearr_13420[(10)] = inst_13381);

return statearr_13420;
})();
var statearr_13421_13487 = state_13406__$1;
(statearr_13421_13487[(2)] = null);

(statearr_13421_13487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (9))){
var state_13406__$1 = state_13406;
var statearr_13422_13488 = state_13406__$1;
(statearr_13422_13488[(2)] = null);

(statearr_13422_13488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (5))){
var state_13406__$1 = state_13406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13423_13489 = state_13406__$1;
(statearr_13423_13489[(1)] = (8));

} else {
var statearr_13424_13490 = state_13406__$1;
(statearr_13424_13490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (14))){
var inst_13384 = (state_13406[(8)]);
var inst_13384__$1 = (state_13406[(2)]);
var inst_13385 = (inst_13384__$1 == null);
var inst_13386 = cljs.core.not.call(null,inst_13385);
var state_13406__$1 = (function (){var statearr_13425 = state_13406;
(statearr_13425[(8)] = inst_13384__$1);

return statearr_13425;
})();
if(inst_13386){
var statearr_13426_13491 = state_13406__$1;
(statearr_13426_13491[(1)] = (15));

} else {
var statearr_13427_13492 = state_13406__$1;
(statearr_13427_13492[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (16))){
var state_13406__$1 = state_13406;
var statearr_13428_13493 = state_13406__$1;
(statearr_13428_13493[(2)] = false);

(statearr_13428_13493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (10))){
var inst_13378 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
var statearr_13429_13494 = state_13406__$1;
(statearr_13429_13494[(2)] = inst_13378);

(statearr_13429_13494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (18))){
var inst_13389 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
var statearr_13430_13495 = state_13406__$1;
(statearr_13430_13495[(2)] = inst_13389);

(statearr_13430_13495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (8))){
var inst_13375 = cljs.core.async.close_BANG_.call(null,to);
var state_13406__$1 = state_13406;
var statearr_13431_13496 = state_13406__$1;
(statearr_13431_13496[(2)] = inst_13375);

(statearr_13431_13496[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0 = (function (){
var statearr_13432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__);

(statearr_13432[(1)] = (1));

return statearr_13432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1 = (function (state_13406){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13433){var ex__13025__auto__ = e13433;
var statearr_13434_13497 = state_13406;
(statearr_13434_13497[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13406[(4)]))){
var statearr_13435_13498 = state_13406;
(statearr_13435_13498[(1)] = cljs.core.first.call(null,(state_13406[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13499 = state_13406;
state_13406 = G__13499;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__ = function(state_13406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1.call(this,state_13406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13022__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13436 = f__13096__auto__.call(null);
(statearr_13436[(6)] = c__13095__auto__);

return statearr_13436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
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
var G__13501 = arguments.length;
switch (G__13501) {
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
var G__13504 = arguments.length;
switch (G__13504) {
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
var G__13507 = arguments.length;
switch (G__13507) {
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
var c__13095__auto___13557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13533){
var state_val_13534 = (state_13533[(1)]);
if((state_val_13534 === (7))){
var inst_13529 = (state_13533[(2)]);
var state_13533__$1 = state_13533;
var statearr_13535_13558 = state_13533__$1;
(statearr_13535_13558[(2)] = inst_13529);

(statearr_13535_13558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (1))){
var state_13533__$1 = state_13533;
var statearr_13536_13559 = state_13533__$1;
(statearr_13536_13559[(2)] = null);

(statearr_13536_13559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (4))){
var inst_13510 = (state_13533[(7)]);
var inst_13510__$1 = (state_13533[(2)]);
var inst_13511 = (inst_13510__$1 == null);
var state_13533__$1 = (function (){var statearr_13537 = state_13533;
(statearr_13537[(7)] = inst_13510__$1);

return statearr_13537;
})();
if(cljs.core.truth_(inst_13511)){
var statearr_13538_13560 = state_13533__$1;
(statearr_13538_13560[(1)] = (5));

} else {
var statearr_13539_13561 = state_13533__$1;
(statearr_13539_13561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (13))){
var state_13533__$1 = state_13533;
var statearr_13540_13562 = state_13533__$1;
(statearr_13540_13562[(2)] = null);

(statearr_13540_13562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (6))){
var inst_13510 = (state_13533[(7)]);
var inst_13516 = p.call(null,inst_13510);
var state_13533__$1 = state_13533;
if(cljs.core.truth_(inst_13516)){
var statearr_13541_13563 = state_13533__$1;
(statearr_13541_13563[(1)] = (9));

} else {
var statearr_13542_13564 = state_13533__$1;
(statearr_13542_13564[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (3))){
var inst_13531 = (state_13533[(2)]);
var state_13533__$1 = state_13533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13533__$1,inst_13531);
} else {
if((state_val_13534 === (12))){
var state_13533__$1 = state_13533;
var statearr_13543_13565 = state_13533__$1;
(statearr_13543_13565[(2)] = null);

(statearr_13543_13565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (2))){
var state_13533__$1 = state_13533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13533__$1,(4),ch);
} else {
if((state_val_13534 === (11))){
var inst_13510 = (state_13533[(7)]);
var inst_13520 = (state_13533[(2)]);
var state_13533__$1 = state_13533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13533__$1,(8),inst_13520,inst_13510);
} else {
if((state_val_13534 === (9))){
var state_13533__$1 = state_13533;
var statearr_13544_13566 = state_13533__$1;
(statearr_13544_13566[(2)] = tc);

(statearr_13544_13566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (5))){
var inst_13513 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13514 = cljs.core.async.close_BANG_.call(null,fc);
var state_13533__$1 = (function (){var statearr_13545 = state_13533;
(statearr_13545[(8)] = inst_13513);

return statearr_13545;
})();
var statearr_13546_13567 = state_13533__$1;
(statearr_13546_13567[(2)] = inst_13514);

(statearr_13546_13567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (14))){
var inst_13527 = (state_13533[(2)]);
var state_13533__$1 = state_13533;
var statearr_13547_13568 = state_13533__$1;
(statearr_13547_13568[(2)] = inst_13527);

(statearr_13547_13568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (10))){
var state_13533__$1 = state_13533;
var statearr_13548_13569 = state_13533__$1;
(statearr_13548_13569[(2)] = fc);

(statearr_13548_13569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13534 === (8))){
var inst_13522 = (state_13533[(2)]);
var state_13533__$1 = state_13533;
if(cljs.core.truth_(inst_13522)){
var statearr_13549_13570 = state_13533__$1;
(statearr_13549_13570[(1)] = (12));

} else {
var statearr_13550_13571 = state_13533__$1;
(statearr_13550_13571[(1)] = (13));

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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_13551 = [null,null,null,null,null,null,null,null,null];
(statearr_13551[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_13551[(1)] = (1));

return statearr_13551;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_13533){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13552){var ex__13025__auto__ = e13552;
var statearr_13553_13572 = state_13533;
(statearr_13553_13572[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13533[(4)]))){
var statearr_13554_13573 = state_13533;
(statearr_13554_13573[(1)] = cljs.core.first.call(null,(state_13533[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13574 = state_13533;
state_13533 = G__13574;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_13533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_13533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13555 = f__13096__auto__.call(null);
(statearr_13555[(6)] = c__13095__auto___13557);

return statearr_13555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
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
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13596){
var state_val_13597 = (state_13596[(1)]);
if((state_val_13597 === (7))){
var inst_13592 = (state_13596[(2)]);
var state_13596__$1 = state_13596;
var statearr_13598_13617 = state_13596__$1;
(statearr_13598_13617[(2)] = inst_13592);

(statearr_13598_13617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13597 === (1))){
var inst_13575 = init;
var inst_13576 = inst_13575;
var state_13596__$1 = (function (){var statearr_13599 = state_13596;
(statearr_13599[(7)] = inst_13576);

return statearr_13599;
})();
var statearr_13600_13618 = state_13596__$1;
(statearr_13600_13618[(2)] = null);

(statearr_13600_13618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13597 === (4))){
var inst_13579 = (state_13596[(8)]);
var inst_13579__$1 = (state_13596[(2)]);
var inst_13580 = (inst_13579__$1 == null);
var state_13596__$1 = (function (){var statearr_13601 = state_13596;
(statearr_13601[(8)] = inst_13579__$1);

return statearr_13601;
})();
if(cljs.core.truth_(inst_13580)){
var statearr_13602_13619 = state_13596__$1;
(statearr_13602_13619[(1)] = (5));

} else {
var statearr_13603_13620 = state_13596__$1;
(statearr_13603_13620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13597 === (6))){
var inst_13583 = (state_13596[(9)]);
var inst_13579 = (state_13596[(8)]);
var inst_13576 = (state_13596[(7)]);
var inst_13583__$1 = f.call(null,inst_13576,inst_13579);
var inst_13584 = cljs.core.reduced_QMARK_.call(null,inst_13583__$1);
var state_13596__$1 = (function (){var statearr_13604 = state_13596;
(statearr_13604[(9)] = inst_13583__$1);

return statearr_13604;
})();
if(inst_13584){
var statearr_13605_13621 = state_13596__$1;
(statearr_13605_13621[(1)] = (8));

} else {
var statearr_13606_13622 = state_13596__$1;
(statearr_13606_13622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13597 === (3))){
var inst_13594 = (state_13596[(2)]);
var state_13596__$1 = state_13596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13596__$1,inst_13594);
} else {
if((state_val_13597 === (2))){
var state_13596__$1 = state_13596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13596__$1,(4),ch);
} else {
if((state_val_13597 === (9))){
var inst_13583 = (state_13596[(9)]);
var inst_13576 = inst_13583;
var state_13596__$1 = (function (){var statearr_13607 = state_13596;
(statearr_13607[(7)] = inst_13576);

return statearr_13607;
})();
var statearr_13608_13623 = state_13596__$1;
(statearr_13608_13623[(2)] = null);

(statearr_13608_13623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13597 === (5))){
var inst_13576 = (state_13596[(7)]);
var state_13596__$1 = state_13596;
var statearr_13609_13624 = state_13596__$1;
(statearr_13609_13624[(2)] = inst_13576);

(statearr_13609_13624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13597 === (10))){
var inst_13590 = (state_13596[(2)]);
var state_13596__$1 = state_13596;
var statearr_13610_13625 = state_13596__$1;
(statearr_13610_13625[(2)] = inst_13590);

(statearr_13610_13625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13597 === (8))){
var inst_13583 = (state_13596[(9)]);
var inst_13586 = cljs.core.deref.call(null,inst_13583);
var state_13596__$1 = state_13596;
var statearr_13611_13626 = state_13596__$1;
(statearr_13611_13626[(2)] = inst_13586);

(statearr_13611_13626[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13022__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13022__auto____0 = (function (){
var statearr_13612 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13612[(0)] = cljs$core$async$reduce_$_state_machine__13022__auto__);

(statearr_13612[(1)] = (1));

return statearr_13612;
});
var cljs$core$async$reduce_$_state_machine__13022__auto____1 = (function (state_13596){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13613){var ex__13025__auto__ = e13613;
var statearr_13614_13627 = state_13596;
(statearr_13614_13627[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13596[(4)]))){
var statearr_13615_13628 = state_13596;
(statearr_13615_13628[(1)] = cljs.core.first.call(null,(state_13596[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13629 = state_13596;
state_13596 = G__13629;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13022__auto__ = function(state_13596){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13022__auto____1.call(this,state_13596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13022__auto____0;
cljs$core$async$reduce_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13022__auto____1;
return cljs$core$async$reduce_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13616 = f__13096__auto__.call(null);
(statearr_13616[(6)] = c__13095__auto__);

return statearr_13616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13635){
var state_val_13636 = (state_13635[(1)]);
if((state_val_13636 === (1))){
var inst_13630 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13635__$1 = state_13635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13635__$1,(2),inst_13630);
} else {
if((state_val_13636 === (2))){
var inst_13632 = (state_13635[(2)]);
var inst_13633 = f__$1.call(null,inst_13632);
var state_13635__$1 = state_13635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13635__$1,inst_13633);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13022__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13022__auto____0 = (function (){
var statearr_13637 = [null,null,null,null,null,null,null];
(statearr_13637[(0)] = cljs$core$async$transduce_$_state_machine__13022__auto__);

(statearr_13637[(1)] = (1));

return statearr_13637;
});
var cljs$core$async$transduce_$_state_machine__13022__auto____1 = (function (state_13635){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13638){var ex__13025__auto__ = e13638;
var statearr_13639_13642 = state_13635;
(statearr_13639_13642[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13635[(4)]))){
var statearr_13640_13643 = state_13635;
(statearr_13640_13643[(1)] = cljs.core.first.call(null,(state_13635[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13644 = state_13635;
state_13635 = G__13644;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13022__auto__ = function(state_13635){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13022__auto____1.call(this,state_13635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13022__auto____0;
cljs$core$async$transduce_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13022__auto____1;
return cljs$core$async$transduce_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13641 = f__13096__auto__.call(null);
(statearr_13641[(6)] = c__13095__auto__);

return statearr_13641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
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
var G__13646 = arguments.length;
switch (G__13646) {
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
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13671){
var state_val_13672 = (state_13671[(1)]);
if((state_val_13672 === (7))){
var inst_13653 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
var statearr_13673_13695 = state_13671__$1;
(statearr_13673_13695[(2)] = inst_13653);

(statearr_13673_13695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (1))){
var inst_13647 = cljs.core.seq.call(null,coll);
var inst_13648 = inst_13647;
var state_13671__$1 = (function (){var statearr_13674 = state_13671;
(statearr_13674[(7)] = inst_13648);

return statearr_13674;
})();
var statearr_13675_13696 = state_13671__$1;
(statearr_13675_13696[(2)] = null);

(statearr_13675_13696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (4))){
var inst_13648 = (state_13671[(7)]);
var inst_13651 = cljs.core.first.call(null,inst_13648);
var state_13671__$1 = state_13671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13671__$1,(7),ch,inst_13651);
} else {
if((state_val_13672 === (13))){
var inst_13665 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
var statearr_13676_13697 = state_13671__$1;
(statearr_13676_13697[(2)] = inst_13665);

(statearr_13676_13697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (6))){
var inst_13656 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
if(cljs.core.truth_(inst_13656)){
var statearr_13677_13698 = state_13671__$1;
(statearr_13677_13698[(1)] = (8));

} else {
var statearr_13678_13699 = state_13671__$1;
(statearr_13678_13699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (3))){
var inst_13669 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13671__$1,inst_13669);
} else {
if((state_val_13672 === (12))){
var state_13671__$1 = state_13671;
var statearr_13679_13700 = state_13671__$1;
(statearr_13679_13700[(2)] = null);

(statearr_13679_13700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (2))){
var inst_13648 = (state_13671[(7)]);
var state_13671__$1 = state_13671;
if(cljs.core.truth_(inst_13648)){
var statearr_13680_13701 = state_13671__$1;
(statearr_13680_13701[(1)] = (4));

} else {
var statearr_13681_13702 = state_13671__$1;
(statearr_13681_13702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (11))){
var inst_13662 = cljs.core.async.close_BANG_.call(null,ch);
var state_13671__$1 = state_13671;
var statearr_13682_13703 = state_13671__$1;
(statearr_13682_13703[(2)] = inst_13662);

(statearr_13682_13703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (9))){
var state_13671__$1 = state_13671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13683_13704 = state_13671__$1;
(statearr_13683_13704[(1)] = (11));

} else {
var statearr_13684_13705 = state_13671__$1;
(statearr_13684_13705[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (5))){
var inst_13648 = (state_13671[(7)]);
var state_13671__$1 = state_13671;
var statearr_13685_13706 = state_13671__$1;
(statearr_13685_13706[(2)] = inst_13648);

(statearr_13685_13706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (10))){
var inst_13667 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
var statearr_13686_13707 = state_13671__$1;
(statearr_13686_13707[(2)] = inst_13667);

(statearr_13686_13707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (8))){
var inst_13648 = (state_13671[(7)]);
var inst_13658 = cljs.core.next.call(null,inst_13648);
var inst_13648__$1 = inst_13658;
var state_13671__$1 = (function (){var statearr_13687 = state_13671;
(statearr_13687[(7)] = inst_13648__$1);

return statearr_13687;
})();
var statearr_13688_13708 = state_13671__$1;
(statearr_13688_13708[(2)] = null);

(statearr_13688_13708[(1)] = (2));


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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_13689 = [null,null,null,null,null,null,null,null];
(statearr_13689[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_13689[(1)] = (1));

return statearr_13689;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_13671){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13690){var ex__13025__auto__ = e13690;
var statearr_13691_13709 = state_13671;
(statearr_13691_13709[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13671[(4)]))){
var statearr_13692_13710 = state_13671;
(statearr_13692_13710[(1)] = cljs.core.first.call(null,(state_13671[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13711 = state_13671;
state_13671 = G__13711;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_13671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_13671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13693 = f__13096__auto__.call(null);
(statearr_13693[(6)] = c__13095__auto__);

return statearr_13693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
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
var G__13713 = arguments.length;
switch (G__13713) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_13715 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_13715.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13716 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_13716.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13717 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_13717.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13718 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_13718.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13719 = (function (ch,cs,meta13720){
this.ch = ch;
this.cs = cs;
this.meta13720 = meta13720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13721,meta13720__$1){
var self__ = this;
var _13721__$1 = this;
return (new cljs.core.async.t_cljs$core$async13719(self__.ch,self__.cs,meta13720__$1));
}));

(cljs.core.async.t_cljs$core$async13719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13721){
var self__ = this;
var _13721__$1 = this;
return self__.meta13720;
}));

(cljs.core.async.t_cljs$core$async13719.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13719.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13719.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13719.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13719.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13720","meta13720",-322361543,null)], null);
}));

(cljs.core.async.t_cljs$core$async13719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13719");

(cljs.core.async.t_cljs$core$async13719.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async13719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13719.
 */
cljs.core.async.__GT_t_cljs$core$async13719 = (function cljs$core$async$mult_$___GT_t_cljs$core$async13719(ch__$1,cs__$1,meta13720){
return (new cljs.core.async.t_cljs$core$async13719(ch__$1,cs__$1,meta13720));
});

}

return (new cljs.core.async.t_cljs$core$async13719(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13095__auto___13938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_13854){
var state_val_13855 = (state_13854[(1)]);
if((state_val_13855 === (7))){
var inst_13850 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13856_13939 = state_13854__$1;
(statearr_13856_13939[(2)] = inst_13850);

(statearr_13856_13939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (20))){
var inst_13755 = (state_13854[(7)]);
var inst_13767 = cljs.core.first.call(null,inst_13755);
var inst_13768 = cljs.core.nth.call(null,inst_13767,(0),null);
var inst_13769 = cljs.core.nth.call(null,inst_13767,(1),null);
var state_13854__$1 = (function (){var statearr_13857 = state_13854;
(statearr_13857[(8)] = inst_13768);

return statearr_13857;
})();
if(cljs.core.truth_(inst_13769)){
var statearr_13858_13940 = state_13854__$1;
(statearr_13858_13940[(1)] = (22));

} else {
var statearr_13859_13941 = state_13854__$1;
(statearr_13859_13941[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (27))){
var inst_13797 = (state_13854[(9)]);
var inst_13799 = (state_13854[(10)]);
var inst_13804 = (state_13854[(11)]);
var inst_13724 = (state_13854[(12)]);
var inst_13804__$1 = cljs.core._nth.call(null,inst_13797,inst_13799);
var inst_13805 = cljs.core.async.put_BANG_.call(null,inst_13804__$1,inst_13724,done);
var state_13854__$1 = (function (){var statearr_13860 = state_13854;
(statearr_13860[(11)] = inst_13804__$1);

return statearr_13860;
})();
if(cljs.core.truth_(inst_13805)){
var statearr_13861_13942 = state_13854__$1;
(statearr_13861_13942[(1)] = (30));

} else {
var statearr_13862_13943 = state_13854__$1;
(statearr_13862_13943[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (1))){
var state_13854__$1 = state_13854;
var statearr_13863_13944 = state_13854__$1;
(statearr_13863_13944[(2)] = null);

(statearr_13863_13944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (24))){
var inst_13755 = (state_13854[(7)]);
var inst_13774 = (state_13854[(2)]);
var inst_13775 = cljs.core.next.call(null,inst_13755);
var inst_13733 = inst_13775;
var inst_13734 = null;
var inst_13735 = (0);
var inst_13736 = (0);
var state_13854__$1 = (function (){var statearr_13864 = state_13854;
(statearr_13864[(13)] = inst_13736);

(statearr_13864[(14)] = inst_13734);

(statearr_13864[(15)] = inst_13774);

(statearr_13864[(16)] = inst_13733);

(statearr_13864[(17)] = inst_13735);

return statearr_13864;
})();
var statearr_13865_13945 = state_13854__$1;
(statearr_13865_13945[(2)] = null);

(statearr_13865_13945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (39))){
var state_13854__$1 = state_13854;
var statearr_13869_13946 = state_13854__$1;
(statearr_13869_13946[(2)] = null);

(statearr_13869_13946[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (4))){
var inst_13724 = (state_13854[(12)]);
var inst_13724__$1 = (state_13854[(2)]);
var inst_13725 = (inst_13724__$1 == null);
var state_13854__$1 = (function (){var statearr_13870 = state_13854;
(statearr_13870[(12)] = inst_13724__$1);

return statearr_13870;
})();
if(cljs.core.truth_(inst_13725)){
var statearr_13871_13947 = state_13854__$1;
(statearr_13871_13947[(1)] = (5));

} else {
var statearr_13872_13948 = state_13854__$1;
(statearr_13872_13948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (15))){
var inst_13736 = (state_13854[(13)]);
var inst_13734 = (state_13854[(14)]);
var inst_13733 = (state_13854[(16)]);
var inst_13735 = (state_13854[(17)]);
var inst_13751 = (state_13854[(2)]);
var inst_13752 = (inst_13736 + (1));
var tmp13866 = inst_13734;
var tmp13867 = inst_13733;
var tmp13868 = inst_13735;
var inst_13733__$1 = tmp13867;
var inst_13734__$1 = tmp13866;
var inst_13735__$1 = tmp13868;
var inst_13736__$1 = inst_13752;
var state_13854__$1 = (function (){var statearr_13873 = state_13854;
(statearr_13873[(13)] = inst_13736__$1);

(statearr_13873[(14)] = inst_13734__$1);

(statearr_13873[(16)] = inst_13733__$1);

(statearr_13873[(18)] = inst_13751);

(statearr_13873[(17)] = inst_13735__$1);

return statearr_13873;
})();
var statearr_13874_13949 = state_13854__$1;
(statearr_13874_13949[(2)] = null);

(statearr_13874_13949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (21))){
var inst_13778 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13878_13950 = state_13854__$1;
(statearr_13878_13950[(2)] = inst_13778);

(statearr_13878_13950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (31))){
var inst_13804 = (state_13854[(11)]);
var inst_13808 = cljs.core.async.untap_STAR_.call(null,m,inst_13804);
var state_13854__$1 = state_13854;
var statearr_13879_13951 = state_13854__$1;
(statearr_13879_13951[(2)] = inst_13808);

(statearr_13879_13951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (32))){
var inst_13797 = (state_13854[(9)]);
var inst_13798 = (state_13854[(19)]);
var inst_13799 = (state_13854[(10)]);
var inst_13796 = (state_13854[(20)]);
var inst_13810 = (state_13854[(2)]);
var inst_13811 = (inst_13799 + (1));
var tmp13875 = inst_13797;
var tmp13876 = inst_13798;
var tmp13877 = inst_13796;
var inst_13796__$1 = tmp13877;
var inst_13797__$1 = tmp13875;
var inst_13798__$1 = tmp13876;
var inst_13799__$1 = inst_13811;
var state_13854__$1 = (function (){var statearr_13880 = state_13854;
(statearr_13880[(9)] = inst_13797__$1);

(statearr_13880[(19)] = inst_13798__$1);

(statearr_13880[(10)] = inst_13799__$1);

(statearr_13880[(21)] = inst_13810);

(statearr_13880[(20)] = inst_13796__$1);

return statearr_13880;
})();
var statearr_13881_13952 = state_13854__$1;
(statearr_13881_13952[(2)] = null);

(statearr_13881_13952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (40))){
var inst_13823 = (state_13854[(22)]);
var inst_13827 = cljs.core.async.untap_STAR_.call(null,m,inst_13823);
var state_13854__$1 = state_13854;
var statearr_13882_13953 = state_13854__$1;
(statearr_13882_13953[(2)] = inst_13827);

(statearr_13882_13953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (33))){
var inst_13814 = (state_13854[(23)]);
var inst_13816 = cljs.core.chunked_seq_QMARK_.call(null,inst_13814);
var state_13854__$1 = state_13854;
if(inst_13816){
var statearr_13883_13954 = state_13854__$1;
(statearr_13883_13954[(1)] = (36));

} else {
var statearr_13884_13955 = state_13854__$1;
(statearr_13884_13955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (13))){
var inst_13745 = (state_13854[(24)]);
var inst_13748 = cljs.core.async.close_BANG_.call(null,inst_13745);
var state_13854__$1 = state_13854;
var statearr_13885_13956 = state_13854__$1;
(statearr_13885_13956[(2)] = inst_13748);

(statearr_13885_13956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (22))){
var inst_13768 = (state_13854[(8)]);
var inst_13771 = cljs.core.async.close_BANG_.call(null,inst_13768);
var state_13854__$1 = state_13854;
var statearr_13886_13957 = state_13854__$1;
(statearr_13886_13957[(2)] = inst_13771);

(statearr_13886_13957[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (36))){
var inst_13814 = (state_13854[(23)]);
var inst_13818 = cljs.core.chunk_first.call(null,inst_13814);
var inst_13819 = cljs.core.chunk_rest.call(null,inst_13814);
var inst_13820 = cljs.core.count.call(null,inst_13818);
var inst_13796 = inst_13819;
var inst_13797 = inst_13818;
var inst_13798 = inst_13820;
var inst_13799 = (0);
var state_13854__$1 = (function (){var statearr_13887 = state_13854;
(statearr_13887[(9)] = inst_13797);

(statearr_13887[(19)] = inst_13798);

(statearr_13887[(10)] = inst_13799);

(statearr_13887[(20)] = inst_13796);

return statearr_13887;
})();
var statearr_13888_13958 = state_13854__$1;
(statearr_13888_13958[(2)] = null);

(statearr_13888_13958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (41))){
var inst_13814 = (state_13854[(23)]);
var inst_13829 = (state_13854[(2)]);
var inst_13830 = cljs.core.next.call(null,inst_13814);
var inst_13796 = inst_13830;
var inst_13797 = null;
var inst_13798 = (0);
var inst_13799 = (0);
var state_13854__$1 = (function (){var statearr_13889 = state_13854;
(statearr_13889[(9)] = inst_13797);

(statearr_13889[(19)] = inst_13798);

(statearr_13889[(10)] = inst_13799);

(statearr_13889[(20)] = inst_13796);

(statearr_13889[(25)] = inst_13829);

return statearr_13889;
})();
var statearr_13890_13959 = state_13854__$1;
(statearr_13890_13959[(2)] = null);

(statearr_13890_13959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (43))){
var state_13854__$1 = state_13854;
var statearr_13891_13960 = state_13854__$1;
(statearr_13891_13960[(2)] = null);

(statearr_13891_13960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (29))){
var inst_13838 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13892_13961 = state_13854__$1;
(statearr_13892_13961[(2)] = inst_13838);

(statearr_13892_13961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (44))){
var inst_13847 = (state_13854[(2)]);
var state_13854__$1 = (function (){var statearr_13893 = state_13854;
(statearr_13893[(26)] = inst_13847);

return statearr_13893;
})();
var statearr_13894_13962 = state_13854__$1;
(statearr_13894_13962[(2)] = null);

(statearr_13894_13962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (6))){
var inst_13788 = (state_13854[(27)]);
var inst_13787 = cljs.core.deref.call(null,cs);
var inst_13788__$1 = cljs.core.keys.call(null,inst_13787);
var inst_13789 = cljs.core.count.call(null,inst_13788__$1);
var inst_13790 = cljs.core.reset_BANG_.call(null,dctr,inst_13789);
var inst_13795 = cljs.core.seq.call(null,inst_13788__$1);
var inst_13796 = inst_13795;
var inst_13797 = null;
var inst_13798 = (0);
var inst_13799 = (0);
var state_13854__$1 = (function (){var statearr_13895 = state_13854;
(statearr_13895[(9)] = inst_13797);

(statearr_13895[(19)] = inst_13798);

(statearr_13895[(10)] = inst_13799);

(statearr_13895[(28)] = inst_13790);

(statearr_13895[(27)] = inst_13788__$1);

(statearr_13895[(20)] = inst_13796);

return statearr_13895;
})();
var statearr_13896_13963 = state_13854__$1;
(statearr_13896_13963[(2)] = null);

(statearr_13896_13963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (28))){
var inst_13814 = (state_13854[(23)]);
var inst_13796 = (state_13854[(20)]);
var inst_13814__$1 = cljs.core.seq.call(null,inst_13796);
var state_13854__$1 = (function (){var statearr_13897 = state_13854;
(statearr_13897[(23)] = inst_13814__$1);

return statearr_13897;
})();
if(inst_13814__$1){
var statearr_13898_13964 = state_13854__$1;
(statearr_13898_13964[(1)] = (33));

} else {
var statearr_13899_13965 = state_13854__$1;
(statearr_13899_13965[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (25))){
var inst_13798 = (state_13854[(19)]);
var inst_13799 = (state_13854[(10)]);
var inst_13801 = (inst_13799 < inst_13798);
var inst_13802 = inst_13801;
var state_13854__$1 = state_13854;
if(cljs.core.truth_(inst_13802)){
var statearr_13900_13966 = state_13854__$1;
(statearr_13900_13966[(1)] = (27));

} else {
var statearr_13901_13967 = state_13854__$1;
(statearr_13901_13967[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (34))){
var state_13854__$1 = state_13854;
var statearr_13902_13968 = state_13854__$1;
(statearr_13902_13968[(2)] = null);

(statearr_13902_13968[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (17))){
var state_13854__$1 = state_13854;
var statearr_13903_13969 = state_13854__$1;
(statearr_13903_13969[(2)] = null);

(statearr_13903_13969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (3))){
var inst_13852 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13854__$1,inst_13852);
} else {
if((state_val_13855 === (12))){
var inst_13783 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13904_13970 = state_13854__$1;
(statearr_13904_13970[(2)] = inst_13783);

(statearr_13904_13970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (2))){
var state_13854__$1 = state_13854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13854__$1,(4),ch);
} else {
if((state_val_13855 === (23))){
var state_13854__$1 = state_13854;
var statearr_13905_13971 = state_13854__$1;
(statearr_13905_13971[(2)] = null);

(statearr_13905_13971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (35))){
var inst_13836 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13906_13972 = state_13854__$1;
(statearr_13906_13972[(2)] = inst_13836);

(statearr_13906_13972[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (19))){
var inst_13755 = (state_13854[(7)]);
var inst_13759 = cljs.core.chunk_first.call(null,inst_13755);
var inst_13760 = cljs.core.chunk_rest.call(null,inst_13755);
var inst_13761 = cljs.core.count.call(null,inst_13759);
var inst_13733 = inst_13760;
var inst_13734 = inst_13759;
var inst_13735 = inst_13761;
var inst_13736 = (0);
var state_13854__$1 = (function (){var statearr_13907 = state_13854;
(statearr_13907[(13)] = inst_13736);

(statearr_13907[(14)] = inst_13734);

(statearr_13907[(16)] = inst_13733);

(statearr_13907[(17)] = inst_13735);

return statearr_13907;
})();
var statearr_13908_13973 = state_13854__$1;
(statearr_13908_13973[(2)] = null);

(statearr_13908_13973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (11))){
var inst_13733 = (state_13854[(16)]);
var inst_13755 = (state_13854[(7)]);
var inst_13755__$1 = cljs.core.seq.call(null,inst_13733);
var state_13854__$1 = (function (){var statearr_13909 = state_13854;
(statearr_13909[(7)] = inst_13755__$1);

return statearr_13909;
})();
if(inst_13755__$1){
var statearr_13910_13974 = state_13854__$1;
(statearr_13910_13974[(1)] = (16));

} else {
var statearr_13911_13975 = state_13854__$1;
(statearr_13911_13975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (9))){
var inst_13785 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13912_13976 = state_13854__$1;
(statearr_13912_13976[(2)] = inst_13785);

(statearr_13912_13976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (5))){
var inst_13731 = cljs.core.deref.call(null,cs);
var inst_13732 = cljs.core.seq.call(null,inst_13731);
var inst_13733 = inst_13732;
var inst_13734 = null;
var inst_13735 = (0);
var inst_13736 = (0);
var state_13854__$1 = (function (){var statearr_13913 = state_13854;
(statearr_13913[(13)] = inst_13736);

(statearr_13913[(14)] = inst_13734);

(statearr_13913[(16)] = inst_13733);

(statearr_13913[(17)] = inst_13735);

return statearr_13913;
})();
var statearr_13914_13977 = state_13854__$1;
(statearr_13914_13977[(2)] = null);

(statearr_13914_13977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (14))){
var state_13854__$1 = state_13854;
var statearr_13915_13978 = state_13854__$1;
(statearr_13915_13978[(2)] = null);

(statearr_13915_13978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (45))){
var inst_13844 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13916_13979 = state_13854__$1;
(statearr_13916_13979[(2)] = inst_13844);

(statearr_13916_13979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (26))){
var inst_13788 = (state_13854[(27)]);
var inst_13840 = (state_13854[(2)]);
var inst_13841 = cljs.core.seq.call(null,inst_13788);
var state_13854__$1 = (function (){var statearr_13917 = state_13854;
(statearr_13917[(29)] = inst_13840);

return statearr_13917;
})();
if(inst_13841){
var statearr_13918_13980 = state_13854__$1;
(statearr_13918_13980[(1)] = (42));

} else {
var statearr_13919_13981 = state_13854__$1;
(statearr_13919_13981[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (16))){
var inst_13755 = (state_13854[(7)]);
var inst_13757 = cljs.core.chunked_seq_QMARK_.call(null,inst_13755);
var state_13854__$1 = state_13854;
if(inst_13757){
var statearr_13920_13982 = state_13854__$1;
(statearr_13920_13982[(1)] = (19));

} else {
var statearr_13921_13983 = state_13854__$1;
(statearr_13921_13983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (38))){
var inst_13833 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13922_13984 = state_13854__$1;
(statearr_13922_13984[(2)] = inst_13833);

(statearr_13922_13984[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (30))){
var state_13854__$1 = state_13854;
var statearr_13923_13985 = state_13854__$1;
(statearr_13923_13985[(2)] = null);

(statearr_13923_13985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (10))){
var inst_13736 = (state_13854[(13)]);
var inst_13734 = (state_13854[(14)]);
var inst_13744 = cljs.core._nth.call(null,inst_13734,inst_13736);
var inst_13745 = cljs.core.nth.call(null,inst_13744,(0),null);
var inst_13746 = cljs.core.nth.call(null,inst_13744,(1),null);
var state_13854__$1 = (function (){var statearr_13924 = state_13854;
(statearr_13924[(24)] = inst_13745);

return statearr_13924;
})();
if(cljs.core.truth_(inst_13746)){
var statearr_13925_13986 = state_13854__$1;
(statearr_13925_13986[(1)] = (13));

} else {
var statearr_13926_13987 = state_13854__$1;
(statearr_13926_13987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (18))){
var inst_13781 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13927_13988 = state_13854__$1;
(statearr_13927_13988[(2)] = inst_13781);

(statearr_13927_13988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (42))){
var state_13854__$1 = state_13854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13854__$1,(45),dchan);
} else {
if((state_val_13855 === (37))){
var inst_13823 = (state_13854[(22)]);
var inst_13814 = (state_13854[(23)]);
var inst_13724 = (state_13854[(12)]);
var inst_13823__$1 = cljs.core.first.call(null,inst_13814);
var inst_13824 = cljs.core.async.put_BANG_.call(null,inst_13823__$1,inst_13724,done);
var state_13854__$1 = (function (){var statearr_13928 = state_13854;
(statearr_13928[(22)] = inst_13823__$1);

return statearr_13928;
})();
if(cljs.core.truth_(inst_13824)){
var statearr_13929_13989 = state_13854__$1;
(statearr_13929_13989[(1)] = (39));

} else {
var statearr_13930_13990 = state_13854__$1;
(statearr_13930_13990[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (8))){
var inst_13736 = (state_13854[(13)]);
var inst_13735 = (state_13854[(17)]);
var inst_13738 = (inst_13736 < inst_13735);
var inst_13739 = inst_13738;
var state_13854__$1 = state_13854;
if(cljs.core.truth_(inst_13739)){
var statearr_13931_13991 = state_13854__$1;
(statearr_13931_13991[(1)] = (10));

} else {
var statearr_13932_13992 = state_13854__$1;
(statearr_13932_13992[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13022__auto__ = null;
var cljs$core$async$mult_$_state_machine__13022__auto____0 = (function (){
var statearr_13933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13933[(0)] = cljs$core$async$mult_$_state_machine__13022__auto__);

(statearr_13933[(1)] = (1));

return statearr_13933;
});
var cljs$core$async$mult_$_state_machine__13022__auto____1 = (function (state_13854){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_13854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e13934){var ex__13025__auto__ = e13934;
var statearr_13935_13993 = state_13854;
(statearr_13935_13993[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_13854[(4)]))){
var statearr_13936_13994 = state_13854;
(statearr_13936_13994[(1)] = cljs.core.first.call(null,(state_13854[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13995 = state_13854;
state_13854 = G__13995;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13022__auto__ = function(state_13854){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13022__auto____1.call(this,state_13854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13022__auto____0;
cljs$core$async$mult_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13022__auto____1;
return cljs$core$async$mult_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_13937 = f__13096__auto__.call(null);
(statearr_13937[(6)] = c__13095__auto___13938);

return statearr_13937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
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
var G__13997 = arguments.length;
switch (G__13997) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_13999 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_13999.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14000 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14000.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14001 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14001.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14002 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14002.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14003 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14003.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14014 = arguments.length;
var i__4737__auto___14015 = (0);
while(true){
if((i__4737__auto___14015 < len__4736__auto___14014)){
args__4742__auto__.push((arguments[i__4737__auto___14015]));

var G__14016 = (i__4737__auto___14015 + (1));
i__4737__auto___14015 = G__14016;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14008){
var map__14009 = p__14008;
var map__14009__$1 = (((((!((map__14009 == null))))?(((((map__14009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14009):map__14009);
var opts = map__14009__$1;
var statearr_14011_14017 = state;
(statearr_14011_14017[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_14012_14018 = state;
(statearr_14012_14018[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_14013_14019 = state;
(statearr_14013_14019[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14004){
var G__14005 = cljs.core.first.call(null,seq14004);
var seq14004__$1 = cljs.core.next.call(null,seq14004);
var G__14006 = cljs.core.first.call(null,seq14004__$1);
var seq14004__$2 = cljs.core.next.call(null,seq14004__$1);
var G__14007 = cljs.core.first.call(null,seq14004__$2);
var seq14004__$3 = cljs.core.next.call(null,seq14004__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14005,G__14006,G__14007,seq14004__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14020 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14021){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14021 = meta14021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14022,meta14021__$1){
var self__ = this;
var _14022__$1 = this;
return (new cljs.core.async.t_cljs$core$async14020(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14021__$1));
}));

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14022){
var self__ = this;
var _14022__$1 = this;
return self__.meta14021;
}));

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14020.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14021","meta14021",-1188112044,null)], null);
}));

(cljs.core.async.t_cljs$core$async14020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14020");

(cljs.core.async.t_cljs$core$async14020.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async14020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14020.
 */
cljs.core.async.__GT_t_cljs$core$async14020 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14020(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14021){
return (new cljs.core.async.t_cljs$core$async14020(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14021));
});

}

return (new cljs.core.async.t_cljs$core$async14020(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13095__auto___14185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14124){
var state_val_14125 = (state_14124[(1)]);
if((state_val_14125 === (7))){
var inst_14039 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
var statearr_14126_14186 = state_14124__$1;
(statearr_14126_14186[(2)] = inst_14039);

(statearr_14126_14186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (20))){
var inst_14051 = (state_14124[(7)]);
var state_14124__$1 = state_14124;
var statearr_14127_14187 = state_14124__$1;
(statearr_14127_14187[(2)] = inst_14051);

(statearr_14127_14187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (27))){
var state_14124__$1 = state_14124;
var statearr_14128_14188 = state_14124__$1;
(statearr_14128_14188[(2)] = null);

(statearr_14128_14188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (1))){
var inst_14026 = (state_14124[(8)]);
var inst_14026__$1 = calc_state.call(null);
var inst_14028 = (inst_14026__$1 == null);
var inst_14029 = cljs.core.not.call(null,inst_14028);
var state_14124__$1 = (function (){var statearr_14129 = state_14124;
(statearr_14129[(8)] = inst_14026__$1);

return statearr_14129;
})();
if(inst_14029){
var statearr_14130_14189 = state_14124__$1;
(statearr_14130_14189[(1)] = (2));

} else {
var statearr_14131_14190 = state_14124__$1;
(statearr_14131_14190[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (24))){
var inst_14098 = (state_14124[(9)]);
var inst_14075 = (state_14124[(10)]);
var inst_14084 = (state_14124[(11)]);
var inst_14098__$1 = inst_14075.call(null,inst_14084);
var state_14124__$1 = (function (){var statearr_14132 = state_14124;
(statearr_14132[(9)] = inst_14098__$1);

return statearr_14132;
})();
if(cljs.core.truth_(inst_14098__$1)){
var statearr_14133_14191 = state_14124__$1;
(statearr_14133_14191[(1)] = (29));

} else {
var statearr_14134_14192 = state_14124__$1;
(statearr_14134_14192[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (4))){
var inst_14042 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
if(cljs.core.truth_(inst_14042)){
var statearr_14135_14193 = state_14124__$1;
(statearr_14135_14193[(1)] = (8));

} else {
var statearr_14136_14194 = state_14124__$1;
(statearr_14136_14194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (15))){
var inst_14069 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
if(cljs.core.truth_(inst_14069)){
var statearr_14137_14195 = state_14124__$1;
(statearr_14137_14195[(1)] = (19));

} else {
var statearr_14138_14196 = state_14124__$1;
(statearr_14138_14196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (21))){
var inst_14074 = (state_14124[(12)]);
var inst_14074__$1 = (state_14124[(2)]);
var inst_14075 = cljs.core.get.call(null,inst_14074__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14076 = cljs.core.get.call(null,inst_14074__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14077 = cljs.core.get.call(null,inst_14074__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14124__$1 = (function (){var statearr_14139 = state_14124;
(statearr_14139[(10)] = inst_14075);

(statearr_14139[(13)] = inst_14076);

(statearr_14139[(12)] = inst_14074__$1);

return statearr_14139;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14124__$1,(22),inst_14077);
} else {
if((state_val_14125 === (31))){
var inst_14106 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
if(cljs.core.truth_(inst_14106)){
var statearr_14140_14197 = state_14124__$1;
(statearr_14140_14197[(1)] = (32));

} else {
var statearr_14141_14198 = state_14124__$1;
(statearr_14141_14198[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (32))){
var inst_14083 = (state_14124[(14)]);
var state_14124__$1 = state_14124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14124__$1,(35),out,inst_14083);
} else {
if((state_val_14125 === (33))){
var inst_14074 = (state_14124[(12)]);
var inst_14051 = inst_14074;
var state_14124__$1 = (function (){var statearr_14142 = state_14124;
(statearr_14142[(7)] = inst_14051);

return statearr_14142;
})();
var statearr_14143_14199 = state_14124__$1;
(statearr_14143_14199[(2)] = null);

(statearr_14143_14199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (13))){
var inst_14051 = (state_14124[(7)]);
var inst_14058 = inst_14051.cljs$lang$protocol_mask$partition0$;
var inst_14059 = (inst_14058 & (64));
var inst_14060 = inst_14051.cljs$core$ISeq$;
var inst_14061 = (cljs.core.PROTOCOL_SENTINEL === inst_14060);
var inst_14062 = ((inst_14059) || (inst_14061));
var state_14124__$1 = state_14124;
if(cljs.core.truth_(inst_14062)){
var statearr_14144_14200 = state_14124__$1;
(statearr_14144_14200[(1)] = (16));

} else {
var statearr_14145_14201 = state_14124__$1;
(statearr_14145_14201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (22))){
var inst_14083 = (state_14124[(14)]);
var inst_14084 = (state_14124[(11)]);
var inst_14082 = (state_14124[(2)]);
var inst_14083__$1 = cljs.core.nth.call(null,inst_14082,(0),null);
var inst_14084__$1 = cljs.core.nth.call(null,inst_14082,(1),null);
var inst_14085 = (inst_14083__$1 == null);
var inst_14086 = cljs.core._EQ_.call(null,inst_14084__$1,change);
var inst_14087 = ((inst_14085) || (inst_14086));
var state_14124__$1 = (function (){var statearr_14146 = state_14124;
(statearr_14146[(14)] = inst_14083__$1);

(statearr_14146[(11)] = inst_14084__$1);

return statearr_14146;
})();
if(cljs.core.truth_(inst_14087)){
var statearr_14147_14202 = state_14124__$1;
(statearr_14147_14202[(1)] = (23));

} else {
var statearr_14148_14203 = state_14124__$1;
(statearr_14148_14203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (36))){
var inst_14074 = (state_14124[(12)]);
var inst_14051 = inst_14074;
var state_14124__$1 = (function (){var statearr_14149 = state_14124;
(statearr_14149[(7)] = inst_14051);

return statearr_14149;
})();
var statearr_14150_14204 = state_14124__$1;
(statearr_14150_14204[(2)] = null);

(statearr_14150_14204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (29))){
var inst_14098 = (state_14124[(9)]);
var state_14124__$1 = state_14124;
var statearr_14151_14205 = state_14124__$1;
(statearr_14151_14205[(2)] = inst_14098);

(statearr_14151_14205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (6))){
var state_14124__$1 = state_14124;
var statearr_14152_14206 = state_14124__$1;
(statearr_14152_14206[(2)] = false);

(statearr_14152_14206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (28))){
var inst_14094 = (state_14124[(2)]);
var inst_14095 = calc_state.call(null);
var inst_14051 = inst_14095;
var state_14124__$1 = (function (){var statearr_14153 = state_14124;
(statearr_14153[(7)] = inst_14051);

(statearr_14153[(15)] = inst_14094);

return statearr_14153;
})();
var statearr_14154_14207 = state_14124__$1;
(statearr_14154_14207[(2)] = null);

(statearr_14154_14207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (25))){
var inst_14120 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
var statearr_14155_14208 = state_14124__$1;
(statearr_14155_14208[(2)] = inst_14120);

(statearr_14155_14208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (34))){
var inst_14118 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
var statearr_14156_14209 = state_14124__$1;
(statearr_14156_14209[(2)] = inst_14118);

(statearr_14156_14209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (17))){
var state_14124__$1 = state_14124;
var statearr_14157_14210 = state_14124__$1;
(statearr_14157_14210[(2)] = false);

(statearr_14157_14210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (3))){
var state_14124__$1 = state_14124;
var statearr_14158_14211 = state_14124__$1;
(statearr_14158_14211[(2)] = false);

(statearr_14158_14211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (12))){
var inst_14122 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14124__$1,inst_14122);
} else {
if((state_val_14125 === (2))){
var inst_14026 = (state_14124[(8)]);
var inst_14031 = inst_14026.cljs$lang$protocol_mask$partition0$;
var inst_14032 = (inst_14031 & (64));
var inst_14033 = inst_14026.cljs$core$ISeq$;
var inst_14034 = (cljs.core.PROTOCOL_SENTINEL === inst_14033);
var inst_14035 = ((inst_14032) || (inst_14034));
var state_14124__$1 = state_14124;
if(cljs.core.truth_(inst_14035)){
var statearr_14159_14212 = state_14124__$1;
(statearr_14159_14212[(1)] = (5));

} else {
var statearr_14160_14213 = state_14124__$1;
(statearr_14160_14213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (23))){
var inst_14083 = (state_14124[(14)]);
var inst_14089 = (inst_14083 == null);
var state_14124__$1 = state_14124;
if(cljs.core.truth_(inst_14089)){
var statearr_14161_14214 = state_14124__$1;
(statearr_14161_14214[(1)] = (26));

} else {
var statearr_14162_14215 = state_14124__$1;
(statearr_14162_14215[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (35))){
var inst_14109 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
if(cljs.core.truth_(inst_14109)){
var statearr_14163_14216 = state_14124__$1;
(statearr_14163_14216[(1)] = (36));

} else {
var statearr_14164_14217 = state_14124__$1;
(statearr_14164_14217[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (19))){
var inst_14051 = (state_14124[(7)]);
var inst_14071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14051);
var state_14124__$1 = state_14124;
var statearr_14165_14218 = state_14124__$1;
(statearr_14165_14218[(2)] = inst_14071);

(statearr_14165_14218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (11))){
var inst_14051 = (state_14124[(7)]);
var inst_14055 = (inst_14051 == null);
var inst_14056 = cljs.core.not.call(null,inst_14055);
var state_14124__$1 = state_14124;
if(inst_14056){
var statearr_14166_14219 = state_14124__$1;
(statearr_14166_14219[(1)] = (13));

} else {
var statearr_14167_14220 = state_14124__$1;
(statearr_14167_14220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (9))){
var inst_14026 = (state_14124[(8)]);
var state_14124__$1 = state_14124;
var statearr_14168_14221 = state_14124__$1;
(statearr_14168_14221[(2)] = inst_14026);

(statearr_14168_14221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (5))){
var state_14124__$1 = state_14124;
var statearr_14169_14222 = state_14124__$1;
(statearr_14169_14222[(2)] = true);

(statearr_14169_14222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (14))){
var state_14124__$1 = state_14124;
var statearr_14170_14223 = state_14124__$1;
(statearr_14170_14223[(2)] = false);

(statearr_14170_14223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (26))){
var inst_14084 = (state_14124[(11)]);
var inst_14091 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14084);
var state_14124__$1 = state_14124;
var statearr_14171_14224 = state_14124__$1;
(statearr_14171_14224[(2)] = inst_14091);

(statearr_14171_14224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (16))){
var state_14124__$1 = state_14124;
var statearr_14172_14225 = state_14124__$1;
(statearr_14172_14225[(2)] = true);

(statearr_14172_14225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (38))){
var inst_14114 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
var statearr_14173_14226 = state_14124__$1;
(statearr_14173_14226[(2)] = inst_14114);

(statearr_14173_14226[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (30))){
var inst_14075 = (state_14124[(10)]);
var inst_14084 = (state_14124[(11)]);
var inst_14076 = (state_14124[(13)]);
var inst_14101 = cljs.core.empty_QMARK_.call(null,inst_14075);
var inst_14102 = inst_14076.call(null,inst_14084);
var inst_14103 = cljs.core.not.call(null,inst_14102);
var inst_14104 = ((inst_14101) && (inst_14103));
var state_14124__$1 = state_14124;
var statearr_14174_14227 = state_14124__$1;
(statearr_14174_14227[(2)] = inst_14104);

(statearr_14174_14227[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (10))){
var inst_14026 = (state_14124[(8)]);
var inst_14047 = (state_14124[(2)]);
var inst_14048 = cljs.core.get.call(null,inst_14047,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14049 = cljs.core.get.call(null,inst_14047,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14050 = cljs.core.get.call(null,inst_14047,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14051 = inst_14026;
var state_14124__$1 = (function (){var statearr_14175 = state_14124;
(statearr_14175[(16)] = inst_14050);

(statearr_14175[(7)] = inst_14051);

(statearr_14175[(17)] = inst_14049);

(statearr_14175[(18)] = inst_14048);

return statearr_14175;
})();
var statearr_14176_14228 = state_14124__$1;
(statearr_14176_14228[(2)] = null);

(statearr_14176_14228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (18))){
var inst_14066 = (state_14124[(2)]);
var state_14124__$1 = state_14124;
var statearr_14177_14229 = state_14124__$1;
(statearr_14177_14229[(2)] = inst_14066);

(statearr_14177_14229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (37))){
var state_14124__$1 = state_14124;
var statearr_14178_14230 = state_14124__$1;
(statearr_14178_14230[(2)] = null);

(statearr_14178_14230[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14125 === (8))){
var inst_14026 = (state_14124[(8)]);
var inst_14044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14026);
var state_14124__$1 = state_14124;
var statearr_14179_14231 = state_14124__$1;
(statearr_14179_14231[(2)] = inst_14044);

(statearr_14179_14231[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__13022__auto__ = null;
var cljs$core$async$mix_$_state_machine__13022__auto____0 = (function (){
var statearr_14180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14180[(0)] = cljs$core$async$mix_$_state_machine__13022__auto__);

(statearr_14180[(1)] = (1));

return statearr_14180;
});
var cljs$core$async$mix_$_state_machine__13022__auto____1 = (function (state_14124){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14181){var ex__13025__auto__ = e14181;
var statearr_14182_14232 = state_14124;
(statearr_14182_14232[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14124[(4)]))){
var statearr_14183_14233 = state_14124;
(statearr_14183_14233[(1)] = cljs.core.first.call(null,(state_14124[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14234 = state_14124;
state_14124 = G__14234;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13022__auto__ = function(state_14124){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13022__auto____1.call(this,state_14124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13022__auto____0;
cljs$core$async$mix_$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13022__auto____1;
return cljs$core$async$mix_$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14184 = f__13096__auto__.call(null);
(statearr_14184[(6)] = c__13095__auto___14185);

return statearr_14184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_14237 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14237.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14238 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14238.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14239 = (function() {
var G__14240 = null;
var G__14240__1 = (function (p){
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
var G__14240__2 = (function (p,v){
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
G__14240 = function(p,v){
switch(arguments.length){
case 1:
return G__14240__1.call(this,p);
case 2:
return G__14240__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14240.cljs$core$IFn$_invoke$arity$1 = G__14240__1;
G__14240.cljs$core$IFn$_invoke$arity$2 = G__14240__2;
return G__14240;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14236 = arguments.length;
switch (G__14236) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14239.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14239.call(null,p,v);
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
var G__14244 = arguments.length;
switch (G__14244) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__14242_SHARP_){
if(cljs.core.truth_(p1__14242_SHARP_.call(null,topic))){
return p1__14242_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14242_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14245 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14246){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14246 = meta14246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14247,meta14246__$1){
var self__ = this;
var _14247__$1 = this;
return (new cljs.core.async.t_cljs$core$async14245(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14246__$1));
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14247){
var self__ = this;
var _14247__$1 = this;
return self__.meta14246;
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14246","meta14246",1574167705,null)], null);
}));

(cljs.core.async.t_cljs$core$async14245.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14245");

(cljs.core.async.t_cljs$core$async14245.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async14245");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14245.
 */
cljs.core.async.__GT_t_cljs$core$async14245 = (function cljs$core$async$__GT_t_cljs$core$async14245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14246){
return (new cljs.core.async.t_cljs$core$async14245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14246));
});

}

return (new cljs.core.async.t_cljs$core$async14245(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13095__auto___14366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14319){
var state_val_14320 = (state_14319[(1)]);
if((state_val_14320 === (7))){
var inst_14315 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14321_14367 = state_14319__$1;
(statearr_14321_14367[(2)] = inst_14315);

(statearr_14321_14367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (20))){
var state_14319__$1 = state_14319;
var statearr_14322_14368 = state_14319__$1;
(statearr_14322_14368[(2)] = null);

(statearr_14322_14368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (1))){
var state_14319__$1 = state_14319;
var statearr_14323_14369 = state_14319__$1;
(statearr_14323_14369[(2)] = null);

(statearr_14323_14369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (24))){
var inst_14298 = (state_14319[(7)]);
var inst_14307 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14298);
var state_14319__$1 = state_14319;
var statearr_14324_14370 = state_14319__$1;
(statearr_14324_14370[(2)] = inst_14307);

(statearr_14324_14370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (4))){
var inst_14250 = (state_14319[(8)]);
var inst_14250__$1 = (state_14319[(2)]);
var inst_14251 = (inst_14250__$1 == null);
var state_14319__$1 = (function (){var statearr_14325 = state_14319;
(statearr_14325[(8)] = inst_14250__$1);

return statearr_14325;
})();
if(cljs.core.truth_(inst_14251)){
var statearr_14326_14371 = state_14319__$1;
(statearr_14326_14371[(1)] = (5));

} else {
var statearr_14327_14372 = state_14319__$1;
(statearr_14327_14372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (15))){
var inst_14292 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14328_14373 = state_14319__$1;
(statearr_14328_14373[(2)] = inst_14292);

(statearr_14328_14373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (21))){
var inst_14312 = (state_14319[(2)]);
var state_14319__$1 = (function (){var statearr_14329 = state_14319;
(statearr_14329[(9)] = inst_14312);

return statearr_14329;
})();
var statearr_14330_14374 = state_14319__$1;
(statearr_14330_14374[(2)] = null);

(statearr_14330_14374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (13))){
var inst_14274 = (state_14319[(10)]);
var inst_14276 = cljs.core.chunked_seq_QMARK_.call(null,inst_14274);
var state_14319__$1 = state_14319;
if(inst_14276){
var statearr_14331_14375 = state_14319__$1;
(statearr_14331_14375[(1)] = (16));

} else {
var statearr_14332_14376 = state_14319__$1;
(statearr_14332_14376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (22))){
var inst_14304 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
if(cljs.core.truth_(inst_14304)){
var statearr_14333_14377 = state_14319__$1;
(statearr_14333_14377[(1)] = (23));

} else {
var statearr_14334_14378 = state_14319__$1;
(statearr_14334_14378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (6))){
var inst_14298 = (state_14319[(7)]);
var inst_14250 = (state_14319[(8)]);
var inst_14300 = (state_14319[(11)]);
var inst_14298__$1 = topic_fn.call(null,inst_14250);
var inst_14299 = cljs.core.deref.call(null,mults);
var inst_14300__$1 = cljs.core.get.call(null,inst_14299,inst_14298__$1);
var state_14319__$1 = (function (){var statearr_14335 = state_14319;
(statearr_14335[(7)] = inst_14298__$1);

(statearr_14335[(11)] = inst_14300__$1);

return statearr_14335;
})();
if(cljs.core.truth_(inst_14300__$1)){
var statearr_14336_14379 = state_14319__$1;
(statearr_14336_14379[(1)] = (19));

} else {
var statearr_14337_14380 = state_14319__$1;
(statearr_14337_14380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (25))){
var inst_14309 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14338_14381 = state_14319__$1;
(statearr_14338_14381[(2)] = inst_14309);

(statearr_14338_14381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (17))){
var inst_14274 = (state_14319[(10)]);
var inst_14283 = cljs.core.first.call(null,inst_14274);
var inst_14284 = cljs.core.async.muxch_STAR_.call(null,inst_14283);
var inst_14285 = cljs.core.async.close_BANG_.call(null,inst_14284);
var inst_14286 = cljs.core.next.call(null,inst_14274);
var inst_14260 = inst_14286;
var inst_14261 = null;
var inst_14262 = (0);
var inst_14263 = (0);
var state_14319__$1 = (function (){var statearr_14339 = state_14319;
(statearr_14339[(12)] = inst_14260);

(statearr_14339[(13)] = inst_14263);

(statearr_14339[(14)] = inst_14285);

(statearr_14339[(15)] = inst_14262);

(statearr_14339[(16)] = inst_14261);

return statearr_14339;
})();
var statearr_14340_14382 = state_14319__$1;
(statearr_14340_14382[(2)] = null);

(statearr_14340_14382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (3))){
var inst_14317 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14319__$1,inst_14317);
} else {
if((state_val_14320 === (12))){
var inst_14294 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14341_14383 = state_14319__$1;
(statearr_14341_14383[(2)] = inst_14294);

(statearr_14341_14383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (2))){
var state_14319__$1 = state_14319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14319__$1,(4),ch);
} else {
if((state_val_14320 === (23))){
var state_14319__$1 = state_14319;
var statearr_14342_14384 = state_14319__$1;
(statearr_14342_14384[(2)] = null);

(statearr_14342_14384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (19))){
var inst_14250 = (state_14319[(8)]);
var inst_14300 = (state_14319[(11)]);
var inst_14302 = cljs.core.async.muxch_STAR_.call(null,inst_14300);
var state_14319__$1 = state_14319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14319__$1,(22),inst_14302,inst_14250);
} else {
if((state_val_14320 === (11))){
var inst_14260 = (state_14319[(12)]);
var inst_14274 = (state_14319[(10)]);
var inst_14274__$1 = cljs.core.seq.call(null,inst_14260);
var state_14319__$1 = (function (){var statearr_14343 = state_14319;
(statearr_14343[(10)] = inst_14274__$1);

return statearr_14343;
})();
if(inst_14274__$1){
var statearr_14344_14385 = state_14319__$1;
(statearr_14344_14385[(1)] = (13));

} else {
var statearr_14345_14386 = state_14319__$1;
(statearr_14345_14386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (9))){
var inst_14296 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14346_14387 = state_14319__$1;
(statearr_14346_14387[(2)] = inst_14296);

(statearr_14346_14387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (5))){
var inst_14257 = cljs.core.deref.call(null,mults);
var inst_14258 = cljs.core.vals.call(null,inst_14257);
var inst_14259 = cljs.core.seq.call(null,inst_14258);
var inst_14260 = inst_14259;
var inst_14261 = null;
var inst_14262 = (0);
var inst_14263 = (0);
var state_14319__$1 = (function (){var statearr_14347 = state_14319;
(statearr_14347[(12)] = inst_14260);

(statearr_14347[(13)] = inst_14263);

(statearr_14347[(15)] = inst_14262);

(statearr_14347[(16)] = inst_14261);

return statearr_14347;
})();
var statearr_14348_14388 = state_14319__$1;
(statearr_14348_14388[(2)] = null);

(statearr_14348_14388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (14))){
var state_14319__$1 = state_14319;
var statearr_14352_14389 = state_14319__$1;
(statearr_14352_14389[(2)] = null);

(statearr_14352_14389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (16))){
var inst_14274 = (state_14319[(10)]);
var inst_14278 = cljs.core.chunk_first.call(null,inst_14274);
var inst_14279 = cljs.core.chunk_rest.call(null,inst_14274);
var inst_14280 = cljs.core.count.call(null,inst_14278);
var inst_14260 = inst_14279;
var inst_14261 = inst_14278;
var inst_14262 = inst_14280;
var inst_14263 = (0);
var state_14319__$1 = (function (){var statearr_14353 = state_14319;
(statearr_14353[(12)] = inst_14260);

(statearr_14353[(13)] = inst_14263);

(statearr_14353[(15)] = inst_14262);

(statearr_14353[(16)] = inst_14261);

return statearr_14353;
})();
var statearr_14354_14390 = state_14319__$1;
(statearr_14354_14390[(2)] = null);

(statearr_14354_14390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (10))){
var inst_14260 = (state_14319[(12)]);
var inst_14263 = (state_14319[(13)]);
var inst_14262 = (state_14319[(15)]);
var inst_14261 = (state_14319[(16)]);
var inst_14268 = cljs.core._nth.call(null,inst_14261,inst_14263);
var inst_14269 = cljs.core.async.muxch_STAR_.call(null,inst_14268);
var inst_14270 = cljs.core.async.close_BANG_.call(null,inst_14269);
var inst_14271 = (inst_14263 + (1));
var tmp14349 = inst_14260;
var tmp14350 = inst_14262;
var tmp14351 = inst_14261;
var inst_14260__$1 = tmp14349;
var inst_14261__$1 = tmp14351;
var inst_14262__$1 = tmp14350;
var inst_14263__$1 = inst_14271;
var state_14319__$1 = (function (){var statearr_14355 = state_14319;
(statearr_14355[(12)] = inst_14260__$1);

(statearr_14355[(17)] = inst_14270);

(statearr_14355[(13)] = inst_14263__$1);

(statearr_14355[(15)] = inst_14262__$1);

(statearr_14355[(16)] = inst_14261__$1);

return statearr_14355;
})();
var statearr_14356_14391 = state_14319__$1;
(statearr_14356_14391[(2)] = null);

(statearr_14356_14391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (18))){
var inst_14289 = (state_14319[(2)]);
var state_14319__$1 = state_14319;
var statearr_14357_14392 = state_14319__$1;
(statearr_14357_14392[(2)] = inst_14289);

(statearr_14357_14392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14320 === (8))){
var inst_14263 = (state_14319[(13)]);
var inst_14262 = (state_14319[(15)]);
var inst_14265 = (inst_14263 < inst_14262);
var inst_14266 = inst_14265;
var state_14319__$1 = state_14319;
if(cljs.core.truth_(inst_14266)){
var statearr_14358_14393 = state_14319__$1;
(statearr_14358_14393[(1)] = (10));

} else {
var statearr_14359_14394 = state_14319__$1;
(statearr_14359_14394[(1)] = (11));

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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_14360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14360[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_14360[(1)] = (1));

return statearr_14360;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_14319){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14361){var ex__13025__auto__ = e14361;
var statearr_14362_14395 = state_14319;
(statearr_14362_14395[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14319[(4)]))){
var statearr_14363_14396 = state_14319;
(statearr_14363_14396[(1)] = cljs.core.first.call(null,(state_14319[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14397 = state_14319;
state_14319 = G__14397;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_14319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_14319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14364 = f__13096__auto__.call(null);
(statearr_14364[(6)] = c__13095__auto___14366);

return statearr_14364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
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
var G__14399 = arguments.length;
switch (G__14399) {
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
var G__14402 = arguments.length;
switch (G__14402) {
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
var G__14405 = arguments.length;
switch (G__14405) {
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
var c__13095__auto___14483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14448){
var state_val_14449 = (state_14448[(1)]);
if((state_val_14449 === (7))){
var state_14448__$1 = state_14448;
var statearr_14450_14484 = state_14448__$1;
(statearr_14450_14484[(2)] = null);

(statearr_14450_14484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (1))){
var state_14448__$1 = state_14448;
var statearr_14451_14485 = state_14448__$1;
(statearr_14451_14485[(2)] = null);

(statearr_14451_14485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (4))){
var inst_14408 = (state_14448[(7)]);
var inst_14409 = (state_14448[(8)]);
var inst_14411 = (inst_14409 < inst_14408);
var state_14448__$1 = state_14448;
if(cljs.core.truth_(inst_14411)){
var statearr_14452_14486 = state_14448__$1;
(statearr_14452_14486[(1)] = (6));

} else {
var statearr_14453_14487 = state_14448__$1;
(statearr_14453_14487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (15))){
var inst_14434 = (state_14448[(9)]);
var inst_14439 = cljs.core.apply.call(null,f,inst_14434);
var state_14448__$1 = state_14448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14448__$1,(17),out,inst_14439);
} else {
if((state_val_14449 === (13))){
var inst_14434 = (state_14448[(9)]);
var inst_14434__$1 = (state_14448[(2)]);
var inst_14435 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14434__$1);
var state_14448__$1 = (function (){var statearr_14454 = state_14448;
(statearr_14454[(9)] = inst_14434__$1);

return statearr_14454;
})();
if(cljs.core.truth_(inst_14435)){
var statearr_14455_14488 = state_14448__$1;
(statearr_14455_14488[(1)] = (14));

} else {
var statearr_14456_14489 = state_14448__$1;
(statearr_14456_14489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (6))){
var state_14448__$1 = state_14448;
var statearr_14457_14490 = state_14448__$1;
(statearr_14457_14490[(2)] = null);

(statearr_14457_14490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (17))){
var inst_14441 = (state_14448[(2)]);
var state_14448__$1 = (function (){var statearr_14459 = state_14448;
(statearr_14459[(10)] = inst_14441);

return statearr_14459;
})();
var statearr_14460_14491 = state_14448__$1;
(statearr_14460_14491[(2)] = null);

(statearr_14460_14491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (3))){
var inst_14446 = (state_14448[(2)]);
var state_14448__$1 = state_14448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14448__$1,inst_14446);
} else {
if((state_val_14449 === (12))){
var _ = (function (){var statearr_14461 = state_14448;
(statearr_14461[(4)] = cljs.core.rest.call(null,(state_14448[(4)])));

return statearr_14461;
})();
var state_14448__$1 = state_14448;
var ex14458 = (state_14448__$1[(2)]);
var statearr_14462_14492 = state_14448__$1;
(statearr_14462_14492[(5)] = ex14458);


if((ex14458 instanceof Object)){
var statearr_14463_14493 = state_14448__$1;
(statearr_14463_14493[(1)] = (11));

(statearr_14463_14493[(5)] = null);

} else {
throw ex14458;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (2))){
var inst_14407 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14408 = cnt;
var inst_14409 = (0);
var state_14448__$1 = (function (){var statearr_14464 = state_14448;
(statearr_14464[(7)] = inst_14408);

(statearr_14464[(8)] = inst_14409);

(statearr_14464[(11)] = inst_14407);

return statearr_14464;
})();
var statearr_14465_14494 = state_14448__$1;
(statearr_14465_14494[(2)] = null);

(statearr_14465_14494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (11))){
var inst_14413 = (state_14448[(2)]);
var inst_14414 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14448__$1 = (function (){var statearr_14466 = state_14448;
(statearr_14466[(12)] = inst_14413);

return statearr_14466;
})();
var statearr_14467_14495 = state_14448__$1;
(statearr_14467_14495[(2)] = inst_14414);

(statearr_14467_14495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (9))){
var inst_14409 = (state_14448[(8)]);
var _ = (function (){var statearr_14468 = state_14448;
(statearr_14468[(4)] = cljs.core.cons.call(null,(12),(state_14448[(4)])));

return statearr_14468;
})();
var inst_14420 = chs__$1.call(null,inst_14409);
var inst_14421 = done.call(null,inst_14409);
var inst_14422 = cljs.core.async.take_BANG_.call(null,inst_14420,inst_14421);
var ___$1 = (function (){var statearr_14469 = state_14448;
(statearr_14469[(4)] = cljs.core.rest.call(null,(state_14448[(4)])));

return statearr_14469;
})();
var state_14448__$1 = state_14448;
var statearr_14470_14496 = state_14448__$1;
(statearr_14470_14496[(2)] = inst_14422);

(statearr_14470_14496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (5))){
var inst_14432 = (state_14448[(2)]);
var state_14448__$1 = (function (){var statearr_14471 = state_14448;
(statearr_14471[(13)] = inst_14432);

return statearr_14471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14448__$1,(13),dchan);
} else {
if((state_val_14449 === (14))){
var inst_14437 = cljs.core.async.close_BANG_.call(null,out);
var state_14448__$1 = state_14448;
var statearr_14472_14497 = state_14448__$1;
(statearr_14472_14497[(2)] = inst_14437);

(statearr_14472_14497[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (16))){
var inst_14444 = (state_14448[(2)]);
var state_14448__$1 = state_14448;
var statearr_14473_14498 = state_14448__$1;
(statearr_14473_14498[(2)] = inst_14444);

(statearr_14473_14498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (10))){
var inst_14409 = (state_14448[(8)]);
var inst_14425 = (state_14448[(2)]);
var inst_14426 = (inst_14409 + (1));
var inst_14409__$1 = inst_14426;
var state_14448__$1 = (function (){var statearr_14474 = state_14448;
(statearr_14474[(8)] = inst_14409__$1);

(statearr_14474[(14)] = inst_14425);

return statearr_14474;
})();
var statearr_14475_14499 = state_14448__$1;
(statearr_14475_14499[(2)] = null);

(statearr_14475_14499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14449 === (8))){
var inst_14430 = (state_14448[(2)]);
var state_14448__$1 = state_14448;
var statearr_14476_14500 = state_14448__$1;
(statearr_14476_14500[(2)] = inst_14430);

(statearr_14476_14500[(1)] = (5));


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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_14477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14477[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_14477[(1)] = (1));

return statearr_14477;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_14448){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14478){var ex__13025__auto__ = e14478;
var statearr_14479_14501 = state_14448;
(statearr_14479_14501[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14448[(4)]))){
var statearr_14480_14502 = state_14448;
(statearr_14480_14502[(1)] = cljs.core.first.call(null,(state_14448[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14503 = state_14448;
state_14448 = G__14503;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_14448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_14448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14481 = f__13096__auto__.call(null);
(statearr_14481[(6)] = c__13095__auto___14483);

return statearr_14481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
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
var G__14506 = arguments.length;
switch (G__14506) {
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
var c__13095__auto___14561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14538){
var state_val_14539 = (state_14538[(1)]);
if((state_val_14539 === (7))){
var inst_14518 = (state_14538[(7)]);
var inst_14517 = (state_14538[(8)]);
var inst_14517__$1 = (state_14538[(2)]);
var inst_14518__$1 = cljs.core.nth.call(null,inst_14517__$1,(0),null);
var inst_14519 = cljs.core.nth.call(null,inst_14517__$1,(1),null);
var inst_14520 = (inst_14518__$1 == null);
var state_14538__$1 = (function (){var statearr_14540 = state_14538;
(statearr_14540[(7)] = inst_14518__$1);

(statearr_14540[(9)] = inst_14519);

(statearr_14540[(8)] = inst_14517__$1);

return statearr_14540;
})();
if(cljs.core.truth_(inst_14520)){
var statearr_14541_14562 = state_14538__$1;
(statearr_14541_14562[(1)] = (8));

} else {
var statearr_14542_14563 = state_14538__$1;
(statearr_14542_14563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14539 === (1))){
var inst_14507 = cljs.core.vec.call(null,chs);
var inst_14508 = inst_14507;
var state_14538__$1 = (function (){var statearr_14543 = state_14538;
(statearr_14543[(10)] = inst_14508);

return statearr_14543;
})();
var statearr_14544_14564 = state_14538__$1;
(statearr_14544_14564[(2)] = null);

(statearr_14544_14564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14539 === (4))){
var inst_14508 = (state_14538[(10)]);
var state_14538__$1 = state_14538;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14538__$1,(7),inst_14508);
} else {
if((state_val_14539 === (6))){
var inst_14534 = (state_14538[(2)]);
var state_14538__$1 = state_14538;
var statearr_14545_14565 = state_14538__$1;
(statearr_14545_14565[(2)] = inst_14534);

(statearr_14545_14565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14539 === (3))){
var inst_14536 = (state_14538[(2)]);
var state_14538__$1 = state_14538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14538__$1,inst_14536);
} else {
if((state_val_14539 === (2))){
var inst_14508 = (state_14538[(10)]);
var inst_14510 = cljs.core.count.call(null,inst_14508);
var inst_14511 = (inst_14510 > (0));
var state_14538__$1 = state_14538;
if(cljs.core.truth_(inst_14511)){
var statearr_14547_14566 = state_14538__$1;
(statearr_14547_14566[(1)] = (4));

} else {
var statearr_14548_14567 = state_14538__$1;
(statearr_14548_14567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14539 === (11))){
var inst_14508 = (state_14538[(10)]);
var inst_14527 = (state_14538[(2)]);
var tmp14546 = inst_14508;
var inst_14508__$1 = tmp14546;
var state_14538__$1 = (function (){var statearr_14549 = state_14538;
(statearr_14549[(10)] = inst_14508__$1);

(statearr_14549[(11)] = inst_14527);

return statearr_14549;
})();
var statearr_14550_14568 = state_14538__$1;
(statearr_14550_14568[(2)] = null);

(statearr_14550_14568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14539 === (9))){
var inst_14518 = (state_14538[(7)]);
var state_14538__$1 = state_14538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14538__$1,(11),out,inst_14518);
} else {
if((state_val_14539 === (5))){
var inst_14532 = cljs.core.async.close_BANG_.call(null,out);
var state_14538__$1 = state_14538;
var statearr_14551_14569 = state_14538__$1;
(statearr_14551_14569[(2)] = inst_14532);

(statearr_14551_14569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14539 === (10))){
var inst_14530 = (state_14538[(2)]);
var state_14538__$1 = state_14538;
var statearr_14552_14570 = state_14538__$1;
(statearr_14552_14570[(2)] = inst_14530);

(statearr_14552_14570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14539 === (8))){
var inst_14518 = (state_14538[(7)]);
var inst_14508 = (state_14538[(10)]);
var inst_14519 = (state_14538[(9)]);
var inst_14517 = (state_14538[(8)]);
var inst_14522 = (function (){var cs = inst_14508;
var vec__14513 = inst_14517;
var v = inst_14518;
var c = inst_14519;
return (function (p1__14504_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14504_SHARP_);
});
})();
var inst_14523 = cljs.core.filterv.call(null,inst_14522,inst_14508);
var inst_14508__$1 = inst_14523;
var state_14538__$1 = (function (){var statearr_14553 = state_14538;
(statearr_14553[(10)] = inst_14508__$1);

return statearr_14553;
})();
var statearr_14554_14571 = state_14538__$1;
(statearr_14554_14571[(2)] = null);

(statearr_14554_14571[(1)] = (2));


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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_14555 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14555[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_14555[(1)] = (1));

return statearr_14555;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_14538){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14556){var ex__13025__auto__ = e14556;
var statearr_14557_14572 = state_14538;
(statearr_14557_14572[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14538[(4)]))){
var statearr_14558_14573 = state_14538;
(statearr_14558_14573[(1)] = cljs.core.first.call(null,(state_14538[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14574 = state_14538;
state_14538 = G__14574;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_14538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_14538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14559 = f__13096__auto__.call(null);
(statearr_14559[(6)] = c__13095__auto___14561);

return statearr_14559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
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
var G__14576 = arguments.length;
switch (G__14576) {
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
var c__13095__auto___14622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14600){
var state_val_14601 = (state_14600[(1)]);
if((state_val_14601 === (7))){
var inst_14582 = (state_14600[(7)]);
var inst_14582__$1 = (state_14600[(2)]);
var inst_14583 = (inst_14582__$1 == null);
var inst_14584 = cljs.core.not.call(null,inst_14583);
var state_14600__$1 = (function (){var statearr_14602 = state_14600;
(statearr_14602[(7)] = inst_14582__$1);

return statearr_14602;
})();
if(inst_14584){
var statearr_14603_14623 = state_14600__$1;
(statearr_14603_14623[(1)] = (8));

} else {
var statearr_14604_14624 = state_14600__$1;
(statearr_14604_14624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14601 === (1))){
var inst_14577 = (0);
var state_14600__$1 = (function (){var statearr_14605 = state_14600;
(statearr_14605[(8)] = inst_14577);

return statearr_14605;
})();
var statearr_14606_14625 = state_14600__$1;
(statearr_14606_14625[(2)] = null);

(statearr_14606_14625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14601 === (4))){
var state_14600__$1 = state_14600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14600__$1,(7),ch);
} else {
if((state_val_14601 === (6))){
var inst_14595 = (state_14600[(2)]);
var state_14600__$1 = state_14600;
var statearr_14607_14626 = state_14600__$1;
(statearr_14607_14626[(2)] = inst_14595);

(statearr_14607_14626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14601 === (3))){
var inst_14597 = (state_14600[(2)]);
var inst_14598 = cljs.core.async.close_BANG_.call(null,out);
var state_14600__$1 = (function (){var statearr_14608 = state_14600;
(statearr_14608[(9)] = inst_14597);

return statearr_14608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14600__$1,inst_14598);
} else {
if((state_val_14601 === (2))){
var inst_14577 = (state_14600[(8)]);
var inst_14579 = (inst_14577 < n);
var state_14600__$1 = state_14600;
if(cljs.core.truth_(inst_14579)){
var statearr_14609_14627 = state_14600__$1;
(statearr_14609_14627[(1)] = (4));

} else {
var statearr_14610_14628 = state_14600__$1;
(statearr_14610_14628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14601 === (11))){
var inst_14577 = (state_14600[(8)]);
var inst_14587 = (state_14600[(2)]);
var inst_14588 = (inst_14577 + (1));
var inst_14577__$1 = inst_14588;
var state_14600__$1 = (function (){var statearr_14611 = state_14600;
(statearr_14611[(10)] = inst_14587);

(statearr_14611[(8)] = inst_14577__$1);

return statearr_14611;
})();
var statearr_14612_14629 = state_14600__$1;
(statearr_14612_14629[(2)] = null);

(statearr_14612_14629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14601 === (9))){
var state_14600__$1 = state_14600;
var statearr_14613_14630 = state_14600__$1;
(statearr_14613_14630[(2)] = null);

(statearr_14613_14630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14601 === (5))){
var state_14600__$1 = state_14600;
var statearr_14614_14631 = state_14600__$1;
(statearr_14614_14631[(2)] = null);

(statearr_14614_14631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14601 === (10))){
var inst_14592 = (state_14600[(2)]);
var state_14600__$1 = state_14600;
var statearr_14615_14632 = state_14600__$1;
(statearr_14615_14632[(2)] = inst_14592);

(statearr_14615_14632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14601 === (8))){
var inst_14582 = (state_14600[(7)]);
var state_14600__$1 = state_14600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14600__$1,(11),out,inst_14582);
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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_14616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14616[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_14616[(1)] = (1));

return statearr_14616;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_14600){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14617){var ex__13025__auto__ = e14617;
var statearr_14618_14633 = state_14600;
(statearr_14618_14633[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14600[(4)]))){
var statearr_14619_14634 = state_14600;
(statearr_14619_14634[(1)] = cljs.core.first.call(null,(state_14600[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14635 = state_14600;
state_14600 = G__14635;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_14600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_14600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14620 = f__13096__auto__.call(null);
(statearr_14620[(6)] = c__13095__auto___14622);

return statearr_14620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14637 = (function (f,ch,meta14638){
this.f = f;
this.ch = ch;
this.meta14638 = meta14638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14639,meta14638__$1){
var self__ = this;
var _14639__$1 = this;
return (new cljs.core.async.t_cljs$core$async14637(self__.f,self__.ch,meta14638__$1));
}));

(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14639){
var self__ = this;
var _14639__$1 = this;
return self__.meta14638;
}));

(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14640 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14640 = (function (f,ch,meta14638,_,fn1,meta14641){
this.f = f;
this.ch = ch;
this.meta14638 = meta14638;
this._ = _;
this.fn1 = fn1;
this.meta14641 = meta14641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14642,meta14641__$1){
var self__ = this;
var _14642__$1 = this;
return (new cljs.core.async.t_cljs$core$async14640(self__.f,self__.ch,self__.meta14638,self__._,self__.fn1,meta14641__$1));
}));

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14642){
var self__ = this;
var _14642__$1 = this;
return self__.meta14641;
}));

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__14636_SHARP_){
return f1.call(null,(((p1__14636_SHARP_ == null))?null:self__.f.call(null,p1__14636_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async14640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14638","meta14638",-1805030681,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14637","cljs.core.async/t_cljs$core$async14637",-434392394,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14641","meta14641",1285970857,null)], null);
}));

(cljs.core.async.t_cljs$core$async14640.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14640");

(cljs.core.async.t_cljs$core$async14640.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async14640");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14640.
 */
cljs.core.async.__GT_t_cljs$core$async14640 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14640(f__$1,ch__$1,meta14638__$1,___$2,fn1__$1,meta14641){
return (new cljs.core.async.t_cljs$core$async14640(f__$1,ch__$1,meta14638__$1,___$2,fn1__$1,meta14641));
});

}

return (new cljs.core.async.t_cljs$core$async14640(self__.f,self__.ch,self__.meta14638,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14638","meta14638",-1805030681,null)], null);
}));

(cljs.core.async.t_cljs$core$async14637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14637");

(cljs.core.async.t_cljs$core$async14637.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async14637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14637.
 */
cljs.core.async.__GT_t_cljs$core$async14637 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14637(f__$1,ch__$1,meta14638){
return (new cljs.core.async.t_cljs$core$async14637(f__$1,ch__$1,meta14638));
});

}

return (new cljs.core.async.t_cljs$core$async14637(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14643 = (function (f,ch,meta14644){
this.f = f;
this.ch = ch;
this.meta14644 = meta14644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14645,meta14644__$1){
var self__ = this;
var _14645__$1 = this;
return (new cljs.core.async.t_cljs$core$async14643(self__.f,self__.ch,meta14644__$1));
}));

(cljs.core.async.t_cljs$core$async14643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14645){
var self__ = this;
var _14645__$1 = this;
return self__.meta14644;
}));

(cljs.core.async.t_cljs$core$async14643.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14643.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14643.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async14643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14644","meta14644",1780462782,null)], null);
}));

(cljs.core.async.t_cljs$core$async14643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14643");

(cljs.core.async.t_cljs$core$async14643.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async14643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14643.
 */
cljs.core.async.__GT_t_cljs$core$async14643 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14643(f__$1,ch__$1,meta14644){
return (new cljs.core.async.t_cljs$core$async14643(f__$1,ch__$1,meta14644));
});

}

return (new cljs.core.async.t_cljs$core$async14643(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14646 = (function (p,ch,meta14647){
this.p = p;
this.ch = ch;
this.meta14647 = meta14647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14648,meta14647__$1){
var self__ = this;
var _14648__$1 = this;
return (new cljs.core.async.t_cljs$core$async14646(self__.p,self__.ch,meta14647__$1));
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14648){
var self__ = this;
var _14648__$1 = this;
return self__.meta14647;
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14647","meta14647",-1863372000,null)], null);
}));

(cljs.core.async.t_cljs$core$async14646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14646");

(cljs.core.async.t_cljs$core$async14646.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async14646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14646.
 */
cljs.core.async.__GT_t_cljs$core$async14646 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14646(p__$1,ch__$1,meta14647){
return (new cljs.core.async.t_cljs$core$async14646(p__$1,ch__$1,meta14647));
});

}

return (new cljs.core.async.t_cljs$core$async14646(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14650 = arguments.length;
switch (G__14650) {
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
var c__13095__auto___14691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14671){
var state_val_14672 = (state_14671[(1)]);
if((state_val_14672 === (7))){
var inst_14667 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14673_14692 = state_14671__$1;
(statearr_14673_14692[(2)] = inst_14667);

(statearr_14673_14692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (1))){
var state_14671__$1 = state_14671;
var statearr_14674_14693 = state_14671__$1;
(statearr_14674_14693[(2)] = null);

(statearr_14674_14693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (4))){
var inst_14653 = (state_14671[(7)]);
var inst_14653__$1 = (state_14671[(2)]);
var inst_14654 = (inst_14653__$1 == null);
var state_14671__$1 = (function (){var statearr_14675 = state_14671;
(statearr_14675[(7)] = inst_14653__$1);

return statearr_14675;
})();
if(cljs.core.truth_(inst_14654)){
var statearr_14676_14694 = state_14671__$1;
(statearr_14676_14694[(1)] = (5));

} else {
var statearr_14677_14695 = state_14671__$1;
(statearr_14677_14695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (6))){
var inst_14653 = (state_14671[(7)]);
var inst_14658 = p.call(null,inst_14653);
var state_14671__$1 = state_14671;
if(cljs.core.truth_(inst_14658)){
var statearr_14678_14696 = state_14671__$1;
(statearr_14678_14696[(1)] = (8));

} else {
var statearr_14679_14697 = state_14671__$1;
(statearr_14679_14697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (3))){
var inst_14669 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14671__$1,inst_14669);
} else {
if((state_val_14672 === (2))){
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14671__$1,(4),ch);
} else {
if((state_val_14672 === (11))){
var inst_14661 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14680_14698 = state_14671__$1;
(statearr_14680_14698[(2)] = inst_14661);

(statearr_14680_14698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (9))){
var state_14671__$1 = state_14671;
var statearr_14681_14699 = state_14671__$1;
(statearr_14681_14699[(2)] = null);

(statearr_14681_14699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (5))){
var inst_14656 = cljs.core.async.close_BANG_.call(null,out);
var state_14671__$1 = state_14671;
var statearr_14682_14700 = state_14671__$1;
(statearr_14682_14700[(2)] = inst_14656);

(statearr_14682_14700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (10))){
var inst_14664 = (state_14671[(2)]);
var state_14671__$1 = (function (){var statearr_14683 = state_14671;
(statearr_14683[(8)] = inst_14664);

return statearr_14683;
})();
var statearr_14684_14701 = state_14671__$1;
(statearr_14684_14701[(2)] = null);

(statearr_14684_14701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (8))){
var inst_14653 = (state_14671[(7)]);
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14671__$1,(11),out,inst_14653);
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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_14685 = [null,null,null,null,null,null,null,null,null];
(statearr_14685[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_14685[(1)] = (1));

return statearr_14685;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_14671){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14686){var ex__13025__auto__ = e14686;
var statearr_14687_14702 = state_14671;
(statearr_14687_14702[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14671[(4)]))){
var statearr_14688_14703 = state_14671;
(statearr_14688_14703[(1)] = cljs.core.first.call(null,(state_14671[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14704 = state_14671;
state_14671 = G__14704;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_14671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_14671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14689 = f__13096__auto__.call(null);
(statearr_14689[(6)] = c__13095__auto___14691);

return statearr_14689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14706 = arguments.length;
switch (G__14706) {
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
var c__13095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14769){
var state_val_14770 = (state_14769[(1)]);
if((state_val_14770 === (7))){
var inst_14765 = (state_14769[(2)]);
var state_14769__$1 = state_14769;
var statearr_14771_14810 = state_14769__$1;
(statearr_14771_14810[(2)] = inst_14765);

(statearr_14771_14810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (20))){
var inst_14735 = (state_14769[(7)]);
var inst_14746 = (state_14769[(2)]);
var inst_14747 = cljs.core.next.call(null,inst_14735);
var inst_14721 = inst_14747;
var inst_14722 = null;
var inst_14723 = (0);
var inst_14724 = (0);
var state_14769__$1 = (function (){var statearr_14772 = state_14769;
(statearr_14772[(8)] = inst_14746);

(statearr_14772[(9)] = inst_14724);

(statearr_14772[(10)] = inst_14722);

(statearr_14772[(11)] = inst_14723);

(statearr_14772[(12)] = inst_14721);

return statearr_14772;
})();
var statearr_14773_14811 = state_14769__$1;
(statearr_14773_14811[(2)] = null);

(statearr_14773_14811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (1))){
var state_14769__$1 = state_14769;
var statearr_14774_14812 = state_14769__$1;
(statearr_14774_14812[(2)] = null);

(statearr_14774_14812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (4))){
var inst_14710 = (state_14769[(13)]);
var inst_14710__$1 = (state_14769[(2)]);
var inst_14711 = (inst_14710__$1 == null);
var state_14769__$1 = (function (){var statearr_14775 = state_14769;
(statearr_14775[(13)] = inst_14710__$1);

return statearr_14775;
})();
if(cljs.core.truth_(inst_14711)){
var statearr_14776_14813 = state_14769__$1;
(statearr_14776_14813[(1)] = (5));

} else {
var statearr_14777_14814 = state_14769__$1;
(statearr_14777_14814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (15))){
var state_14769__$1 = state_14769;
var statearr_14781_14815 = state_14769__$1;
(statearr_14781_14815[(2)] = null);

(statearr_14781_14815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (21))){
var state_14769__$1 = state_14769;
var statearr_14782_14816 = state_14769__$1;
(statearr_14782_14816[(2)] = null);

(statearr_14782_14816[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (13))){
var inst_14724 = (state_14769[(9)]);
var inst_14722 = (state_14769[(10)]);
var inst_14723 = (state_14769[(11)]);
var inst_14721 = (state_14769[(12)]);
var inst_14731 = (state_14769[(2)]);
var inst_14732 = (inst_14724 + (1));
var tmp14778 = inst_14722;
var tmp14779 = inst_14723;
var tmp14780 = inst_14721;
var inst_14721__$1 = tmp14780;
var inst_14722__$1 = tmp14778;
var inst_14723__$1 = tmp14779;
var inst_14724__$1 = inst_14732;
var state_14769__$1 = (function (){var statearr_14783 = state_14769;
(statearr_14783[(9)] = inst_14724__$1);

(statearr_14783[(10)] = inst_14722__$1);

(statearr_14783[(14)] = inst_14731);

(statearr_14783[(11)] = inst_14723__$1);

(statearr_14783[(12)] = inst_14721__$1);

return statearr_14783;
})();
var statearr_14784_14817 = state_14769__$1;
(statearr_14784_14817[(2)] = null);

(statearr_14784_14817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (22))){
var state_14769__$1 = state_14769;
var statearr_14785_14818 = state_14769__$1;
(statearr_14785_14818[(2)] = null);

(statearr_14785_14818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (6))){
var inst_14710 = (state_14769[(13)]);
var inst_14719 = f.call(null,inst_14710);
var inst_14720 = cljs.core.seq.call(null,inst_14719);
var inst_14721 = inst_14720;
var inst_14722 = null;
var inst_14723 = (0);
var inst_14724 = (0);
var state_14769__$1 = (function (){var statearr_14786 = state_14769;
(statearr_14786[(9)] = inst_14724);

(statearr_14786[(10)] = inst_14722);

(statearr_14786[(11)] = inst_14723);

(statearr_14786[(12)] = inst_14721);

return statearr_14786;
})();
var statearr_14787_14819 = state_14769__$1;
(statearr_14787_14819[(2)] = null);

(statearr_14787_14819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (17))){
var inst_14735 = (state_14769[(7)]);
var inst_14739 = cljs.core.chunk_first.call(null,inst_14735);
var inst_14740 = cljs.core.chunk_rest.call(null,inst_14735);
var inst_14741 = cljs.core.count.call(null,inst_14739);
var inst_14721 = inst_14740;
var inst_14722 = inst_14739;
var inst_14723 = inst_14741;
var inst_14724 = (0);
var state_14769__$1 = (function (){var statearr_14788 = state_14769;
(statearr_14788[(9)] = inst_14724);

(statearr_14788[(10)] = inst_14722);

(statearr_14788[(11)] = inst_14723);

(statearr_14788[(12)] = inst_14721);

return statearr_14788;
})();
var statearr_14789_14820 = state_14769__$1;
(statearr_14789_14820[(2)] = null);

(statearr_14789_14820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (3))){
var inst_14767 = (state_14769[(2)]);
var state_14769__$1 = state_14769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14769__$1,inst_14767);
} else {
if((state_val_14770 === (12))){
var inst_14755 = (state_14769[(2)]);
var state_14769__$1 = state_14769;
var statearr_14790_14821 = state_14769__$1;
(statearr_14790_14821[(2)] = inst_14755);

(statearr_14790_14821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (2))){
var state_14769__$1 = state_14769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14769__$1,(4),in$);
} else {
if((state_val_14770 === (23))){
var inst_14763 = (state_14769[(2)]);
var state_14769__$1 = state_14769;
var statearr_14791_14822 = state_14769__$1;
(statearr_14791_14822[(2)] = inst_14763);

(statearr_14791_14822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (19))){
var inst_14750 = (state_14769[(2)]);
var state_14769__$1 = state_14769;
var statearr_14792_14823 = state_14769__$1;
(statearr_14792_14823[(2)] = inst_14750);

(statearr_14792_14823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (11))){
var inst_14721 = (state_14769[(12)]);
var inst_14735 = (state_14769[(7)]);
var inst_14735__$1 = cljs.core.seq.call(null,inst_14721);
var state_14769__$1 = (function (){var statearr_14793 = state_14769;
(statearr_14793[(7)] = inst_14735__$1);

return statearr_14793;
})();
if(inst_14735__$1){
var statearr_14794_14824 = state_14769__$1;
(statearr_14794_14824[(1)] = (14));

} else {
var statearr_14795_14825 = state_14769__$1;
(statearr_14795_14825[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (9))){
var inst_14757 = (state_14769[(2)]);
var inst_14758 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14769__$1 = (function (){var statearr_14796 = state_14769;
(statearr_14796[(15)] = inst_14757);

return statearr_14796;
})();
if(cljs.core.truth_(inst_14758)){
var statearr_14797_14826 = state_14769__$1;
(statearr_14797_14826[(1)] = (21));

} else {
var statearr_14798_14827 = state_14769__$1;
(statearr_14798_14827[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (5))){
var inst_14713 = cljs.core.async.close_BANG_.call(null,out);
var state_14769__$1 = state_14769;
var statearr_14799_14828 = state_14769__$1;
(statearr_14799_14828[(2)] = inst_14713);

(statearr_14799_14828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (14))){
var inst_14735 = (state_14769[(7)]);
var inst_14737 = cljs.core.chunked_seq_QMARK_.call(null,inst_14735);
var state_14769__$1 = state_14769;
if(inst_14737){
var statearr_14800_14829 = state_14769__$1;
(statearr_14800_14829[(1)] = (17));

} else {
var statearr_14801_14830 = state_14769__$1;
(statearr_14801_14830[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (16))){
var inst_14753 = (state_14769[(2)]);
var state_14769__$1 = state_14769;
var statearr_14802_14831 = state_14769__$1;
(statearr_14802_14831[(2)] = inst_14753);

(statearr_14802_14831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14770 === (10))){
var inst_14724 = (state_14769[(9)]);
var inst_14722 = (state_14769[(10)]);
var inst_14729 = cljs.core._nth.call(null,inst_14722,inst_14724);
var state_14769__$1 = state_14769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14769__$1,(13),out,inst_14729);
} else {
if((state_val_14770 === (18))){
var inst_14735 = (state_14769[(7)]);
var inst_14744 = cljs.core.first.call(null,inst_14735);
var state_14769__$1 = state_14769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14769__$1,(20),out,inst_14744);
} else {
if((state_val_14770 === (8))){
var inst_14724 = (state_14769[(9)]);
var inst_14723 = (state_14769[(11)]);
var inst_14726 = (inst_14724 < inst_14723);
var inst_14727 = inst_14726;
var state_14769__$1 = state_14769;
if(cljs.core.truth_(inst_14727)){
var statearr_14803_14832 = state_14769__$1;
(statearr_14803_14832[(1)] = (10));

} else {
var statearr_14804_14833 = state_14769__$1;
(statearr_14804_14833[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13022__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13022__auto____0 = (function (){
var statearr_14805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14805[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13022__auto__);

(statearr_14805[(1)] = (1));

return statearr_14805;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13022__auto____1 = (function (state_14769){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14806){var ex__13025__auto__ = e14806;
var statearr_14807_14834 = state_14769;
(statearr_14807_14834[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14769[(4)]))){
var statearr_14808_14835 = state_14769;
(statearr_14808_14835[(1)] = cljs.core.first.call(null,(state_14769[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14836 = state_14769;
state_14769 = G__14836;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13022__auto__ = function(state_14769){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13022__auto____1.call(this,state_14769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13022__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13022__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14809 = f__13096__auto__.call(null);
(statearr_14809[(6)] = c__13095__auto__);

return statearr_14809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));

return c__13095__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14838 = arguments.length;
switch (G__14838) {
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
var G__14841 = arguments.length;
switch (G__14841) {
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
var G__14844 = arguments.length;
switch (G__14844) {
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
var c__13095__auto___14892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14868){
var state_val_14869 = (state_14868[(1)]);
if((state_val_14869 === (7))){
var inst_14863 = (state_14868[(2)]);
var state_14868__$1 = state_14868;
var statearr_14870_14893 = state_14868__$1;
(statearr_14870_14893[(2)] = inst_14863);

(statearr_14870_14893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14869 === (1))){
var inst_14845 = null;
var state_14868__$1 = (function (){var statearr_14871 = state_14868;
(statearr_14871[(7)] = inst_14845);

return statearr_14871;
})();
var statearr_14872_14894 = state_14868__$1;
(statearr_14872_14894[(2)] = null);

(statearr_14872_14894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14869 === (4))){
var inst_14848 = (state_14868[(8)]);
var inst_14848__$1 = (state_14868[(2)]);
var inst_14849 = (inst_14848__$1 == null);
var inst_14850 = cljs.core.not.call(null,inst_14849);
var state_14868__$1 = (function (){var statearr_14873 = state_14868;
(statearr_14873[(8)] = inst_14848__$1);

return statearr_14873;
})();
if(inst_14850){
var statearr_14874_14895 = state_14868__$1;
(statearr_14874_14895[(1)] = (5));

} else {
var statearr_14875_14896 = state_14868__$1;
(statearr_14875_14896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14869 === (6))){
var state_14868__$1 = state_14868;
var statearr_14876_14897 = state_14868__$1;
(statearr_14876_14897[(2)] = null);

(statearr_14876_14897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14869 === (3))){
var inst_14865 = (state_14868[(2)]);
var inst_14866 = cljs.core.async.close_BANG_.call(null,out);
var state_14868__$1 = (function (){var statearr_14877 = state_14868;
(statearr_14877[(9)] = inst_14865);

return statearr_14877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14868__$1,inst_14866);
} else {
if((state_val_14869 === (2))){
var state_14868__$1 = state_14868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14868__$1,(4),ch);
} else {
if((state_val_14869 === (11))){
var inst_14848 = (state_14868[(8)]);
var inst_14857 = (state_14868[(2)]);
var inst_14845 = inst_14848;
var state_14868__$1 = (function (){var statearr_14878 = state_14868;
(statearr_14878[(7)] = inst_14845);

(statearr_14878[(10)] = inst_14857);

return statearr_14878;
})();
var statearr_14879_14898 = state_14868__$1;
(statearr_14879_14898[(2)] = null);

(statearr_14879_14898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14869 === (9))){
var inst_14848 = (state_14868[(8)]);
var state_14868__$1 = state_14868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14868__$1,(11),out,inst_14848);
} else {
if((state_val_14869 === (5))){
var inst_14845 = (state_14868[(7)]);
var inst_14848 = (state_14868[(8)]);
var inst_14852 = cljs.core._EQ_.call(null,inst_14848,inst_14845);
var state_14868__$1 = state_14868;
if(inst_14852){
var statearr_14881_14899 = state_14868__$1;
(statearr_14881_14899[(1)] = (8));

} else {
var statearr_14882_14900 = state_14868__$1;
(statearr_14882_14900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14869 === (10))){
var inst_14860 = (state_14868[(2)]);
var state_14868__$1 = state_14868;
var statearr_14883_14901 = state_14868__$1;
(statearr_14883_14901[(2)] = inst_14860);

(statearr_14883_14901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14869 === (8))){
var inst_14845 = (state_14868[(7)]);
var tmp14880 = inst_14845;
var inst_14845__$1 = tmp14880;
var state_14868__$1 = (function (){var statearr_14884 = state_14868;
(statearr_14884[(7)] = inst_14845__$1);

return statearr_14884;
})();
var statearr_14885_14902 = state_14868__$1;
(statearr_14885_14902[(2)] = null);

(statearr_14885_14902[(1)] = (2));


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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_14886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14886[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_14886[(1)] = (1));

return statearr_14886;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_14868){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14887){var ex__13025__auto__ = e14887;
var statearr_14888_14903 = state_14868;
(statearr_14888_14903[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14868[(4)]))){
var statearr_14889_14904 = state_14868;
(statearr_14889_14904[(1)] = cljs.core.first.call(null,(state_14868[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14905 = state_14868;
state_14868 = G__14905;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_14868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_14868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14890 = f__13096__auto__.call(null);
(statearr_14890[(6)] = c__13095__auto___14892);

return statearr_14890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14907 = arguments.length;
switch (G__14907) {
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
var c__13095__auto___14974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_14945){
var state_val_14946 = (state_14945[(1)]);
if((state_val_14946 === (7))){
var inst_14941 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
var statearr_14947_14975 = state_14945__$1;
(statearr_14947_14975[(2)] = inst_14941);

(statearr_14947_14975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (1))){
var inst_14908 = (new Array(n));
var inst_14909 = inst_14908;
var inst_14910 = (0);
var state_14945__$1 = (function (){var statearr_14948 = state_14945;
(statearr_14948[(7)] = inst_14910);

(statearr_14948[(8)] = inst_14909);

return statearr_14948;
})();
var statearr_14949_14976 = state_14945__$1;
(statearr_14949_14976[(2)] = null);

(statearr_14949_14976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (4))){
var inst_14913 = (state_14945[(9)]);
var inst_14913__$1 = (state_14945[(2)]);
var inst_14914 = (inst_14913__$1 == null);
var inst_14915 = cljs.core.not.call(null,inst_14914);
var state_14945__$1 = (function (){var statearr_14950 = state_14945;
(statearr_14950[(9)] = inst_14913__$1);

return statearr_14950;
})();
if(inst_14915){
var statearr_14951_14977 = state_14945__$1;
(statearr_14951_14977[(1)] = (5));

} else {
var statearr_14952_14978 = state_14945__$1;
(statearr_14952_14978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (15))){
var inst_14935 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
var statearr_14953_14979 = state_14945__$1;
(statearr_14953_14979[(2)] = inst_14935);

(statearr_14953_14979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (13))){
var state_14945__$1 = state_14945;
var statearr_14954_14980 = state_14945__$1;
(statearr_14954_14980[(2)] = null);

(statearr_14954_14980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (6))){
var inst_14910 = (state_14945[(7)]);
var inst_14931 = (inst_14910 > (0));
var state_14945__$1 = state_14945;
if(cljs.core.truth_(inst_14931)){
var statearr_14955_14981 = state_14945__$1;
(statearr_14955_14981[(1)] = (12));

} else {
var statearr_14956_14982 = state_14945__$1;
(statearr_14956_14982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (3))){
var inst_14943 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14945__$1,inst_14943);
} else {
if((state_val_14946 === (12))){
var inst_14909 = (state_14945[(8)]);
var inst_14933 = cljs.core.vec.call(null,inst_14909);
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14945__$1,(15),out,inst_14933);
} else {
if((state_val_14946 === (2))){
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14945__$1,(4),ch);
} else {
if((state_val_14946 === (11))){
var inst_14925 = (state_14945[(2)]);
var inst_14926 = (new Array(n));
var inst_14909 = inst_14926;
var inst_14910 = (0);
var state_14945__$1 = (function (){var statearr_14957 = state_14945;
(statearr_14957[(10)] = inst_14925);

(statearr_14957[(7)] = inst_14910);

(statearr_14957[(8)] = inst_14909);

return statearr_14957;
})();
var statearr_14958_14983 = state_14945__$1;
(statearr_14958_14983[(2)] = null);

(statearr_14958_14983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (9))){
var inst_14909 = (state_14945[(8)]);
var inst_14923 = cljs.core.vec.call(null,inst_14909);
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14945__$1,(11),out,inst_14923);
} else {
if((state_val_14946 === (5))){
var inst_14913 = (state_14945[(9)]);
var inst_14918 = (state_14945[(11)]);
var inst_14910 = (state_14945[(7)]);
var inst_14909 = (state_14945[(8)]);
var inst_14917 = (inst_14909[inst_14910] = inst_14913);
var inst_14918__$1 = (inst_14910 + (1));
var inst_14919 = (inst_14918__$1 < n);
var state_14945__$1 = (function (){var statearr_14959 = state_14945;
(statearr_14959[(12)] = inst_14917);

(statearr_14959[(11)] = inst_14918__$1);

return statearr_14959;
})();
if(cljs.core.truth_(inst_14919)){
var statearr_14960_14984 = state_14945__$1;
(statearr_14960_14984[(1)] = (8));

} else {
var statearr_14961_14985 = state_14945__$1;
(statearr_14961_14985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (14))){
var inst_14938 = (state_14945[(2)]);
var inst_14939 = cljs.core.async.close_BANG_.call(null,out);
var state_14945__$1 = (function (){var statearr_14963 = state_14945;
(statearr_14963[(13)] = inst_14938);

return statearr_14963;
})();
var statearr_14964_14986 = state_14945__$1;
(statearr_14964_14986[(2)] = inst_14939);

(statearr_14964_14986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (10))){
var inst_14929 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
var statearr_14965_14987 = state_14945__$1;
(statearr_14965_14987[(2)] = inst_14929);

(statearr_14965_14987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (8))){
var inst_14918 = (state_14945[(11)]);
var inst_14909 = (state_14945[(8)]);
var tmp14962 = inst_14909;
var inst_14909__$1 = tmp14962;
var inst_14910 = inst_14918;
var state_14945__$1 = (function (){var statearr_14966 = state_14945;
(statearr_14966[(7)] = inst_14910);

(statearr_14966[(8)] = inst_14909__$1);

return statearr_14966;
})();
var statearr_14967_14988 = state_14945__$1;
(statearr_14967_14988[(2)] = null);

(statearr_14967_14988[(1)] = (2));


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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_14968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14968[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_14968[(1)] = (1));

return statearr_14968;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_14945){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_14945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e14969){var ex__13025__auto__ = e14969;
var statearr_14970_14989 = state_14945;
(statearr_14970_14989[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_14945[(4)]))){
var statearr_14971_14990 = state_14945;
(statearr_14971_14990[(1)] = cljs.core.first.call(null,(state_14945[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14991 = state_14945;
state_14945 = G__14991;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_14945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_14945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_14972 = f__13096__auto__.call(null);
(statearr_14972[(6)] = c__13095__auto___14974);

return statearr_14972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14993 = arguments.length;
switch (G__14993) {
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
var c__13095__auto___15064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13096__auto__ = (function (){var switch__13021__auto__ = (function (state_15035){
var state_val_15036 = (state_15035[(1)]);
if((state_val_15036 === (7))){
var inst_15031 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
var statearr_15037_15065 = state_15035__$1;
(statearr_15037_15065[(2)] = inst_15031);

(statearr_15037_15065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (1))){
var inst_14994 = [];
var inst_14995 = inst_14994;
var inst_14996 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15035__$1 = (function (){var statearr_15038 = state_15035;
(statearr_15038[(7)] = inst_14995);

(statearr_15038[(8)] = inst_14996);

return statearr_15038;
})();
var statearr_15039_15066 = state_15035__$1;
(statearr_15039_15066[(2)] = null);

(statearr_15039_15066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (4))){
var inst_14999 = (state_15035[(9)]);
var inst_14999__$1 = (state_15035[(2)]);
var inst_15000 = (inst_14999__$1 == null);
var inst_15001 = cljs.core.not.call(null,inst_15000);
var state_15035__$1 = (function (){var statearr_15040 = state_15035;
(statearr_15040[(9)] = inst_14999__$1);

return statearr_15040;
})();
if(inst_15001){
var statearr_15041_15067 = state_15035__$1;
(statearr_15041_15067[(1)] = (5));

} else {
var statearr_15042_15068 = state_15035__$1;
(statearr_15042_15068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (15))){
var inst_15025 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
var statearr_15043_15069 = state_15035__$1;
(statearr_15043_15069[(2)] = inst_15025);

(statearr_15043_15069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (13))){
var state_15035__$1 = state_15035;
var statearr_15044_15070 = state_15035__$1;
(statearr_15044_15070[(2)] = null);

(statearr_15044_15070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (6))){
var inst_14995 = (state_15035[(7)]);
var inst_15020 = inst_14995.length;
var inst_15021 = (inst_15020 > (0));
var state_15035__$1 = state_15035;
if(cljs.core.truth_(inst_15021)){
var statearr_15045_15071 = state_15035__$1;
(statearr_15045_15071[(1)] = (12));

} else {
var statearr_15046_15072 = state_15035__$1;
(statearr_15046_15072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (3))){
var inst_15033 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15035__$1,inst_15033);
} else {
if((state_val_15036 === (12))){
var inst_14995 = (state_15035[(7)]);
var inst_15023 = cljs.core.vec.call(null,inst_14995);
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15035__$1,(15),out,inst_15023);
} else {
if((state_val_15036 === (2))){
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15035__$1,(4),ch);
} else {
if((state_val_15036 === (11))){
var inst_15003 = (state_15035[(10)]);
var inst_14999 = (state_15035[(9)]);
var inst_15013 = (state_15035[(2)]);
var inst_15014 = [];
var inst_15015 = inst_15014.push(inst_14999);
var inst_14995 = inst_15014;
var inst_14996 = inst_15003;
var state_15035__$1 = (function (){var statearr_15047 = state_15035;
(statearr_15047[(7)] = inst_14995);

(statearr_15047[(11)] = inst_15015);

(statearr_15047[(12)] = inst_15013);

(statearr_15047[(8)] = inst_14996);

return statearr_15047;
})();
var statearr_15048_15073 = state_15035__$1;
(statearr_15048_15073[(2)] = null);

(statearr_15048_15073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (9))){
var inst_14995 = (state_15035[(7)]);
var inst_15011 = cljs.core.vec.call(null,inst_14995);
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15035__$1,(11),out,inst_15011);
} else {
if((state_val_15036 === (5))){
var inst_15003 = (state_15035[(10)]);
var inst_14996 = (state_15035[(8)]);
var inst_14999 = (state_15035[(9)]);
var inst_15003__$1 = f.call(null,inst_14999);
var inst_15004 = cljs.core._EQ_.call(null,inst_15003__$1,inst_14996);
var inst_15005 = cljs.core.keyword_identical_QMARK_.call(null,inst_14996,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15006 = ((inst_15004) || (inst_15005));
var state_15035__$1 = (function (){var statearr_15049 = state_15035;
(statearr_15049[(10)] = inst_15003__$1);

return statearr_15049;
})();
if(cljs.core.truth_(inst_15006)){
var statearr_15050_15074 = state_15035__$1;
(statearr_15050_15074[(1)] = (8));

} else {
var statearr_15051_15075 = state_15035__$1;
(statearr_15051_15075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (14))){
var inst_15028 = (state_15035[(2)]);
var inst_15029 = cljs.core.async.close_BANG_.call(null,out);
var state_15035__$1 = (function (){var statearr_15053 = state_15035;
(statearr_15053[(13)] = inst_15028);

return statearr_15053;
})();
var statearr_15054_15076 = state_15035__$1;
(statearr_15054_15076[(2)] = inst_15029);

(statearr_15054_15076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (10))){
var inst_15018 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
var statearr_15055_15077 = state_15035__$1;
(statearr_15055_15077[(2)] = inst_15018);

(statearr_15055_15077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (8))){
var inst_14995 = (state_15035[(7)]);
var inst_15003 = (state_15035[(10)]);
var inst_14999 = (state_15035[(9)]);
var inst_15008 = inst_14995.push(inst_14999);
var tmp15052 = inst_14995;
var inst_14995__$1 = tmp15052;
var inst_14996 = inst_15003;
var state_15035__$1 = (function (){var statearr_15056 = state_15035;
(statearr_15056[(7)] = inst_14995__$1);

(statearr_15056[(8)] = inst_14996);

(statearr_15056[(14)] = inst_15008);

return statearr_15056;
})();
var statearr_15057_15078 = state_15035__$1;
(statearr_15057_15078[(2)] = null);

(statearr_15057_15078[(1)] = (2));


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
var cljs$core$async$state_machine__13022__auto__ = null;
var cljs$core$async$state_machine__13022__auto____0 = (function (){
var statearr_15058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15058[(0)] = cljs$core$async$state_machine__13022__auto__);

(statearr_15058[(1)] = (1));

return statearr_15058;
});
var cljs$core$async$state_machine__13022__auto____1 = (function (state_15035){
while(true){
var ret_value__13023__auto__ = (function (){try{while(true){
var result__13024__auto__ = switch__13021__auto__.call(null,state_15035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13024__auto__;
}
break;
}
}catch (e15059){var ex__13025__auto__ = e15059;
var statearr_15060_15079 = state_15035;
(statearr_15060_15079[(2)] = ex__13025__auto__);


if(cljs.core.seq.call(null,(state_15035[(4)]))){
var statearr_15061_15080 = state_15035;
(statearr_15061_15080[(1)] = cljs.core.first.call(null,(state_15035[(4)])));

} else {
throw ex__13025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15081 = state_15035;
state_15035 = G__15081;
continue;
} else {
return ret_value__13023__auto__;
}
break;
}
});
cljs$core$async$state_machine__13022__auto__ = function(state_15035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13022__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13022__auto____1.call(this,state_15035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13022__auto____0;
cljs$core$async$state_machine__13022__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13022__auto____1;
return cljs$core$async$state_machine__13022__auto__;
})()
})();
var state__13097__auto__ = (function (){var statearr_15062 = f__13096__auto__.call(null);
(statearr_15062[(6)] = c__13095__auto___15064);

return statearr_15062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13097__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
