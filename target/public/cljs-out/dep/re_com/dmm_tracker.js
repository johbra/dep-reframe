// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('re_com.dmm_tracker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Listen to DOM events during the bubble phase
 *   arg1   Event type, e.g. "click" or "mouseover"
 *   arg2   callback function
 *   return function to call to remove the event listener
 */
re_com.dmm_tracker.document_event_listener = (function re_com$dmm_tracker$document_event_listener(eventType,callback){
var target = document.documentElement;
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(eventType,callback,false);

return (function (){
return target.removeEventListener(eventType,callback,false);
});
} else {
throw (new Error("Couldn't find addEventListener method in document-event-listener"));
}
});

/**
 * @interface
 */
re_com.dmm_tracker.IMouseMoveTracker = function(){};

var re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$dyn_19964 = (function (this$,event){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_com.dmm_tracker.captureMouseMoves[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4429__auto__.call(null,this$,event));
} else {
var m__4426__auto__ = (re_com.dmm_tracker.captureMouseMoves["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4426__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IMouseMoveTracker.captureMouseMoves",this$);
}
}
});
re_com.dmm_tracker.captureMouseMoves = (function re_com$dmm_tracker$captureMouseMoves(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$arity$2 == null)))))){
return this$.re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$arity$2(this$,event);
} else {
return re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$dyn_19964(this$,event);
}
});

var re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$dyn_19965 = (function (this$,event){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_com.dmm_tracker._releaseMouseMoves[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4429__auto__.call(null,this$,event));
} else {
var m__4426__auto__ = (re_com.dmm_tracker._releaseMouseMoves["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4426__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IMouseMoveTracker.-releaseMouseMoves",this$);
}
}
});
re_com.dmm_tracker._releaseMouseMoves = (function re_com$dmm_tracker$_releaseMouseMoves(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$arity$2 == null)))))){
return this$.re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$arity$2(this$,event);
} else {
return re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$dyn_19965(this$,event);
}
});

var re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$dyn_19966 = (function (this$,event){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_com.dmm_tracker._onMouseMove[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4429__auto__.call(null,this$,event));
} else {
var m__4426__auto__ = (re_com.dmm_tracker._onMouseMove["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4426__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IMouseMoveTracker.-onMouseMove",this$);
}
}
});
re_com.dmm_tracker._onMouseMove = (function re_com$dmm_tracker$_onMouseMove(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$arity$2 == null)))))){
return this$.re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$arity$2(this$,event);
} else {
return re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$dyn_19966(this$,event);
}
});


/**
* @constructor
 * @implements {re_com.dmm_tracker.IMouseMoveTracker}
*/
re_com.dmm_tracker.MouseMoveTracker = (function (on_change,on_drag_end,eventMoveToken,eventUpToken,isDragging_QMARK_,x,y){
this.on_change = on_change;
this.on_drag_end = on_drag_end;
this.eventMoveToken = eventMoveToken;
this.eventUpToken = eventUpToken;
this.isDragging_QMARK_ = isDragging_QMARK_;
this.x = x;
this.y = y;
});
(re_com.dmm_tracker.MouseMoveTracker.prototype.re_com$dmm_tracker$IMouseMoveTracker$ = cljs.core.PROTOCOL_SENTINEL);

(re_com.dmm_tracker.MouseMoveTracker.prototype.re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
if(((cljs.core.not(self__.eventMoveToken)) && (cljs.core.not(self__.eventUpToken)))){
(self__.eventMoveToken = re_com.dmm_tracker.document_event_listener("mousemove",(function (p1__19967_SHARP_){
return this$__$1.re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$arity$2(null,p1__19967_SHARP_);
})));

(self__.eventUpToken = re_com.dmm_tracker.document_event_listener("mouseup",(function (p1__19968_SHARP_){
return this$__$1.re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$arity$2(null,p1__19968_SHARP_);
})));
} else {
}

if(cljs.core.truth_(self__.isDragging_QMARK_)){
return null;
} else {
(self__.isDragging_QMARK_ = true);

(self__.x = event.clientX);

return (self__.y = event.clientY);
}
}));

(re_com.dmm_tracker.MouseMoveTracker.prototype.re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.eventMoveToken)){
(self__.eventMoveToken.cljs$core$IFn$_invoke$arity$0 ? self__.eventMoveToken.cljs$core$IFn$_invoke$arity$0() : self__.eventMoveToken.call(null));

(self__.eventMoveToken = null);
} else {
}

if(cljs.core.truth_(self__.eventUpToken)){
(self__.eventUpToken.cljs$core$IFn$_invoke$arity$0 ? self__.eventUpToken.cljs$core$IFn$_invoke$arity$0() : self__.eventUpToken.call(null));

(self__.eventUpToken = null);
} else {
}

if(cljs.core.truth_(self__.isDragging_QMARK_)){
(self__.isDragging_QMARK_ = false);

(self__.x = null);

(self__.y = null);

var G__19969 = event.ctrlKey;
var G__19970 = event.shiftKey;
var G__19971 = event;
return (self__.on_drag_end.cljs$core$IFn$_invoke$arity$3 ? self__.on_drag_end.cljs$core$IFn$_invoke$arity$3(G__19969,G__19970,G__19971) : self__.on_drag_end.call(null,G__19969,G__19970,G__19971));
} else {
return null;
}
}));

(re_com.dmm_tracker.MouseMoveTracker.prototype.re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
var curr_x = event.clientX;
var curr_y = event.clientY;
var delta_x = (curr_x - self__.x);
var delta_y = (curr_y - self__.y);
var G__19972_19979 = delta_x;
var G__19973_19980 = delta_y;
var G__19974_19981 = curr_x;
var G__19975_19982 = curr_y;
var G__19976_19983 = event.ctrlKey;
var G__19977_19984 = event.shiftKey;
var G__19978_19985 = event;
(self__.on_change.cljs$core$IFn$_invoke$arity$7 ? self__.on_change.cljs$core$IFn$_invoke$arity$7(G__19972_19979,G__19973_19980,G__19974_19981,G__19975_19982,G__19976_19983,G__19977_19984,G__19978_19985) : self__.on_change.call(null,G__19972_19979,G__19973_19980,G__19974_19981,G__19975_19982,G__19976_19983,G__19977_19984,G__19978_19985));

(self__.x = curr_x);

(self__.y = curr_y);

return event.preventDefault();
}));

(re_com.dmm_tracker.MouseMoveTracker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$on_DASH_change,cljs.core.cst$sym$on_DASH_drag_DASH_end,cljs.core.with_meta(cljs.core.cst$sym$eventMoveToken,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$eventUpToken,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$isDragging_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(re_com.dmm_tracker.MouseMoveTracker.cljs$lang$type = true);

(re_com.dmm_tracker.MouseMoveTracker.cljs$lang$ctorStr = "re-com.dmm-tracker/MouseMoveTracker");

(re_com.dmm_tracker.MouseMoveTracker.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"re-com.dmm-tracker/MouseMoveTracker");
}));

/**
 * Positional factory function for re-com.dmm-tracker/MouseMoveTracker.
 */
re_com.dmm_tracker.__GT_MouseMoveTracker = (function re_com$dmm_tracker$__GT_MouseMoveTracker(on_change,on_drag_end,eventMoveToken,eventUpToken,isDragging_QMARK_,x,y){
return (new re_com.dmm_tracker.MouseMoveTracker(on_change,on_drag_end,eventMoveToken,eventUpToken,isDragging_QMARK_,x,y));
});

re_com.dmm_tracker.make_dmm_tracker = (function re_com$dmm_tracker$make_dmm_tracker(on_change,on_drag_end){
return re_com.dmm_tracker.__GT_MouseMoveTracker(on_change,on_drag_end,null,null,false,null,null);
});
