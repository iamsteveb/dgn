// Compiled by ClojureScript 1.10.773 {}
goog.provide('dgn.room_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('dgn.room');
dgn.room_test.create_level = (function dgn$room_test$create_level(){
return cljs.test.test_var.call(null,dgn.room_test.create_level.cljs$lang$var);
});
dgn.room_test.create_level.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"number of rooms in level");

try{var room_count_19132 = ((5) + cljs.core.rand_int.call(null,(10)));
var context_19133 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null);
try{var values__9991__auto___19134 = (new cljs.core.List(null,room_count_19132,(new cljs.core.List(null,cljs.core.count.call(null,dgn.room.create_level.call(null,context_19133,room_count_19132)),null,(1),null)),(2),null));
var result__9992__auto___19135 = cljs.core.apply.call(null,cljs.core._EQ_,values__9991__auto___19134);
if(cljs.core.truth_(result__9992__auto___19135)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",72,new cljs.core.Keyword(null,"pass","pass",1574159993),11,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"room-count","room-count",2037839871,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("room","create-level","room/create-level",826281594,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"room-count","room-count",2037839871,null)))),10,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9991__auto___19134),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",72,new cljs.core.Keyword(null,"fail","fail",1706214930),11,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"room-count","room-count",2037839871,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("room","create-level","room/create-level",826281594,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"room-count","room-count",2037839871,null)))),10,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9991__auto___19134),null,(1),null)),(2),null)),null]));
}

}catch (e19129){var t__10042__auto___19136 = e19129;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",72,new cljs.core.Keyword(null,"error","error",-978969032),11,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"room-count","room-count",2037839871,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("room","create-level","room/create-level",826281594,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"room-count","room-count",2037839871,null)))),10,t__10042__auto___19136,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"room spec");

try{var context = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"height","height",1025178622),(4)], null);
var room = cljs.core.first.call(null,dgn.room.create_level.call(null,context,(1)));
try{var value__9995__auto___19137 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(room));
if(cljs.core.truth_(value__9995__auto___19137)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),11,15,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"room","room",-2117950847,null))),15,value__9995__auto___19137,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),11,15,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"room","room",-2117950847,null))),15,value__9995__auto___19137,null]));
}

}catch (e19130){var t__10042__auto___19138 = e19130;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),11,15,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol(null,"room","room",-2117950847,null))),15,t__10042__auto___19138,null]));
}
try{var value__9995__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(room));
if(cljs.core.truth_(value__9995__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),11,16,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"room","room",-2117950847,null))),16,value__9995__auto__,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),11,16,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"room","room",-2117950847,null))),16,value__9995__auto__,null]));
}

return value__9995__auto__;
}catch (e19131){var t__10042__auto__ = e19131;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/steve/dev/dgn/test/dgn/room_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),11,16,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),cljs.core.list(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Symbol(null,"room","room",-2117950847,null))),16,t__10042__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(dgn.room_test.create_level.cljs$lang$var = new cljs.core.Var(function(){return dgn.room_test.create_level;},new cljs.core.Symbol("dgn.room-test","create-level","dgn.room-test/create-level",281672132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dgn.room-test","dgn.room-test",-197367584,null),new cljs.core.Symbol(null,"create-level","create-level",822775205,null),"/Users/steve/dev/dgn/test/dgn/room_test.cljs",22,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(dgn.room_test.create_level)?dgn.room_test.create_level.cljs$lang$test:null)])));

//# sourceMappingURL=room_test.js.map