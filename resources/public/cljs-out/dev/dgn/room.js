// Compiled by ClojureScript 1.10.773 {}
goog.provide('dgn.room');
goog.require('cljs.core');
dgn.room.rand_between = (function dgn$room$rand_between(lower,upper){
return (lower + cljs.core.rand_int.call(null,(upper - lower)));
});
dgn.room.create_room = (function dgn$room$create_room(p__19115){
var map__19116 = p__19115;
var map__19116__$1 = (((((!((map__19116 == null))))?(((((map__19116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19116):map__19116);
var width = cljs.core.get.call(null,map__19116__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__19116__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin_ratio = (4);
var width_margin = cljs.core.quot.call(null,width,margin_ratio);
var height_margin = cljs.core.quot.call(null,height,margin_ratio);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),dgn.room.rand_between.call(null,width_margin,(width - width_margin)),new cljs.core.Keyword(null,"y","y",-1757859776),dgn.room.rand_between.call(null,height_margin,(height - height_margin)),new cljs.core.Keyword(null,"h","h",1109658740),dgn.room.rand_between.call(null,cljs.core.quot.call(null,height,(20)),cljs.core.quot.call(null,height,(10))),new cljs.core.Keyword(null,"w","w",354169001),dgn.room.rand_between.call(null,cljs.core.quot.call(null,width,(20)),cljs.core.quot.call(null,width,(10)))], null);
});
dgn.room.create_level = (function dgn$room$create_level(context,nbr_of_rooms){
return cljs.core.repeatedly.call(null,nbr_of_rooms,(function (){
return dgn.room.create_room.call(null,context);
}));
});
dgn.room.rect = (function dgn$room$rect(context,p__19118,p__19119){
var map__19120 = p__19118;
var map__19120__$1 = (((((!((map__19120 == null))))?(((((map__19120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19120):map__19120);
var stroke_style = cljs.core.get.call(null,map__19120__$1,new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146));
var fill_style = cljs.core.get.call(null,map__19120__$1,new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633));
var map__19121 = p__19119;
var map__19121__$1 = (((((!((map__19121 == null))))?(((((map__19121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19121):map__19121);
var x = cljs.core.get.call(null,map__19121__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19121__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__19121__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__19121__$1,new cljs.core.Keyword(null,"h","h",1109658740));
context.beginPath();

if(cljs.core.truth_(stroke_style)){
(context.strokeStyle = stroke_style);
} else {
}

if(cljs.core.truth_(fill_style)){
(context.fillStyle = fill_style);
} else {
}

context.rect((x - cljs.core.quot.call(null,w,(2))),(y - cljs.core.quot.call(null,h,(2))),w,h);

if(cljs.core.truth_(stroke_style)){
context.stroke();
} else {
}

if(cljs.core.truth_(fill_style)){
context.fill();
} else {
}

return context.closePath();
});
dgn.room.draw = (function dgn$room$draw(context,p__19124){
var map__19125 = p__19124;
var map__19125__$1 = (((((!((map__19125 == null))))?(((((map__19125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19125):map__19125);
var dimensions = map__19125__$1;
var x = cljs.core.get.call(null,map__19125__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19125__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
dgn.room.rect.call(null,context,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),"rgb(0,255,0)",new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633),"rgba(0,255,0,0.25)"], null),dimensions);

return dgn.room.rect.call(null,context,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633),"rgb(255,255,255)"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(10),new cljs.core.Keyword(null,"h","h",1109658740),(10)], null));
});

//# sourceMappingURL=room.js.map
