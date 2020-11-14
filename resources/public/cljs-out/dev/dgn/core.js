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
dgn.core.app_state = cljs.core.atom.call(null,dgn.room.create_level.call(null,dgn.core.context,(25)));
dgn.core.on_reload = (function dgn$core$on_reload(){
var canvas = goog.dom.getElement("dgc");
var ctx = canvas.getContext("2d");
ctx.beginPath();

(ctx.fillStyle = "rgb(0,0,0)");

ctx.rect((0),(0),(900),(600));

ctx.fill();

ctx.closePath();

var seq__19141 = cljs.core.seq.call(null,cljs.core.deref.call(null,dgn.core.app_state));
var chunk__19142 = null;
var count__19143 = (0);
var i__19144 = (0);
while(true){
if((i__19144 < count__19143)){
var room = cljs.core._nth.call(null,chunk__19142,i__19144);
cljs.core.println.call(null,room);

dgn.room.draw.call(null,ctx,room);


var G__19145 = seq__19141;
var G__19146 = chunk__19142;
var G__19147 = count__19143;
var G__19148 = (i__19144 + (1));
seq__19141 = G__19145;
chunk__19142 = G__19146;
count__19143 = G__19147;
i__19144 = G__19148;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19141);
if(temp__5720__auto__){
var seq__19141__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19141__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19141__$1);
var G__19149 = cljs.core.chunk_rest.call(null,seq__19141__$1);
var G__19150 = c__4556__auto__;
var G__19151 = cljs.core.count.call(null,c__4556__auto__);
var G__19152 = (0);
seq__19141 = G__19149;
chunk__19142 = G__19150;
count__19143 = G__19151;
i__19144 = G__19152;
continue;
} else {
var room = cljs.core.first.call(null,seq__19141__$1);
cljs.core.println.call(null,room);

dgn.room.draw.call(null,ctx,room);


var G__19153 = cljs.core.next.call(null,seq__19141__$1);
var G__19154 = null;
var G__19155 = (0);
var G__19156 = (0);
seq__19141 = G__19153;
chunk__19142 = G__19154;
count__19143 = G__19155;
i__19144 = G__19156;
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
