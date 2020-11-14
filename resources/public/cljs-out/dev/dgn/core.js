// Compiled by ClojureScript 1.10.773 {}
goog.provide('dgn.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('dgn.room');
cljs.core.println.call(null,"This text is printed from src/dgn/core.cljs. Go ahead and edit it and see reloading in action.");
dgn.core.multiply = (function dgn$core$multiply(a,b){
return (a * b);
});
dgn.core.context = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(900),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null);
dgn.core.app_state = cljs.core.atom.call(null,dgn.room.create_level.call(null,dgn.core.context,(20)));
dgn.core.on_reload = (function dgn$core$on_reload(){
var canvas = goog.dom.getElement("dgc");
var ctx = canvas.getContext("2d");
ctx.beginPath();

(ctx.fillStyle = "rgb(0,0,0)");

ctx.rect((0),(0),(900),(600));

ctx.fill();

ctx.closePath();

var seq__22559 = cljs.core.seq.call(null,cljs.core.deref.call(null,dgn.core.app_state));
var chunk__22560 = null;
var count__22561 = (0);
var i__22562 = (0);
while(true){
if((i__22562 < count__22561)){
var room = cljs.core._nth.call(null,chunk__22560,i__22562);
cljs.core.println.call(null,room);

dgn.room.draw.call(null,ctx,room);


var G__22563 = seq__22559;
var G__22564 = chunk__22560;
var G__22565 = count__22561;
var G__22566 = (i__22562 + (1));
seq__22559 = G__22563;
chunk__22560 = G__22564;
count__22561 = G__22565;
i__22562 = G__22566;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22559);
if(temp__5720__auto__){
var seq__22559__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22559__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22559__$1);
var G__22567 = cljs.core.chunk_rest.call(null,seq__22559__$1);
var G__22568 = c__4556__auto__;
var G__22569 = cljs.core.count.call(null,c__4556__auto__);
var G__22570 = (0);
seq__22559 = G__22567;
chunk__22560 = G__22568;
count__22561 = G__22569;
i__22562 = G__22570;
continue;
} else {
var room = cljs.core.first.call(null,seq__22559__$1);
cljs.core.println.call(null,room);

dgn.room.draw.call(null,ctx,room);


var G__22571 = cljs.core.next.call(null,seq__22559__$1);
var G__22572 = null;
var G__22573 = (0);
var G__22574 = (0);
seq__22559 = G__22571;
chunk__22560 = G__22572;
count__22561 = G__22573;
i__22562 = G__22574;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=core.js.map
