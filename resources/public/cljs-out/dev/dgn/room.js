// Compiled by ClojureScript 1.10.773 {}
goog.provide('dgn.room');
goog.require('cljs.core');
dgn.room.rand_between = (function dgn$room$rand_between(lower,upper){
return (lower + cljs.core.rand_int.call(null,(upper - lower)));
});
dgn.room.create_room = (function dgn$room$create_room(p__22487){
var map__22488 = p__22487;
var map__22488__$1 = (((((!((map__22488 == null))))?(((((map__22488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22488):map__22488);
var width = cljs.core.get.call(null,map__22488__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__22488__$1,new cljs.core.Keyword(null,"height","height",1025178622));
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
dgn.room.corners = (function dgn$room$corners(p__22490){
var map__22491 = p__22490;
var map__22491__$1 = (((((!((map__22491 == null))))?(((((map__22491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22491):map__22491);
var x = cljs.core.get.call(null,map__22491__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22491__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__22491__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__22491__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var hw = (w / (2));
var hh = (h / (2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - hw),new cljs.core.Keyword(null,"y","y",-1757859776),(y - hh)], null),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + hw),new cljs.core.Keyword(null,"y","y",-1757859776),(y + hh)], null)], null);
});
dgn.room.center = (function dgn$room$center(r){
return r;
});
dgn.room.intersect = (function dgn$room$intersect(a,b){
var disjoint = (function (p1__22493_SHARP_,p2__22494_SHARP_){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646).cljs$core$IFn$_invoke$arity$1(p1__22493_SHARP_)) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top-left","top-left",-1396159636).cljs$core$IFn$_invoke$arity$1(p2__22494_SHARP_)))) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646).cljs$core$IFn$_invoke$arity$1(p1__22493_SHARP_)) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top-left","top-left",-1396159636).cljs$core$IFn$_invoke$arity$1(p2__22494_SHARP_)))));
});
return (!(((disjoint.call(null,dgn.room.corners.call(null,a),dgn.room.corners.call(null,b))) || (disjoint.call(null,dgn.room.corners.call(null,b),dgn.room.corners.call(null,a))))));
});
dgn.room.dist = (function dgn$room$dist(r1,r2){
var map__22495 = dgn.room.center.call(null,r1);
var map__22495__$1 = (((((!((map__22495 == null))))?(((((map__22495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22495):map__22495);
var x1 = cljs.core.get.call(null,map__22495__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__22495__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__22496 = dgn.room.center.call(null,r2);
var map__22496__$1 = (((((!((map__22496 == null))))?(((((map__22496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22496):map__22496);
var x2 = cljs.core.get.call(null,map__22496__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__22496__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Math.sqrt((Math.pow(Math.abs((x1 - x2)),(2)) + Math.pow(Math.abs((y1 - y2)),(2))));
});
dgn.room.rect = (function dgn$room$rect(context,p__22499,p__22500){
var map__22501 = p__22499;
var map__22501__$1 = (((((!((map__22501 == null))))?(((((map__22501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22501):map__22501);
var stroke_style = cljs.core.get.call(null,map__22501__$1,new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146));
var fill_style = cljs.core.get.call(null,map__22501__$1,new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633));
var map__22502 = p__22500;
var map__22502__$1 = (((((!((map__22502 == null))))?(((((map__22502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22502):map__22502);
var r1 = map__22502__$1;
var w = cljs.core.get.call(null,map__22502__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__22502__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var map__22505 = dgn.room.corners.call(null,r1);
var map__22505__$1 = (((((!((map__22505 == null))))?(((((map__22505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22505):map__22505);
var map__22506 = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword(null,"top-left","top-left",-1396159636));
var map__22506__$1 = (((((!((map__22506 == null))))?(((((map__22506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22506):map__22506);
var x = cljs.core.get.call(null,map__22506__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22506__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
context.beginPath();

if(cljs.core.truth_(stroke_style)){
(context.strokeStyle = stroke_style);
} else {
}

if(cljs.core.truth_(fill_style)){
(context.fillStyle = fill_style);
} else {
}

context.rect(x,y,w,h);

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
dgn.room.draw = (function dgn$room$draw(context,p__22509){
var map__22510 = p__22509;
var map__22510__$1 = (((((!((map__22510 == null))))?(((((map__22510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22510):map__22510);
var dimensions = map__22510__$1;
var x = cljs.core.get.call(null,map__22510__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22510__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
dgn.room.rect.call(null,context,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),"rgb(0,255,0)",new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633),"rgba(0,255,0,0.25)"], null),dimensions);

return dgn.room.rect.call(null,context,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633),"rgb(255,255,255)"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(10),new cljs.core.Keyword(null,"h","h",1109658740),(10)], null));
});

//# sourceMappingURL=room.js.map
