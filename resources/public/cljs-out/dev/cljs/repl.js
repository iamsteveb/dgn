// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20342){
var map__20343 = p__20342;
var map__20343__$1 = (((((!((map__20343 == null))))?(((((map__20343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20343):map__20343);
var m = map__20343__$1;
var n = cljs.core.get.call(null,map__20343__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20345_20377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20346_20378 = null;
var count__20347_20379 = (0);
var i__20348_20380 = (0);
while(true){
if((i__20348_20380 < count__20347_20379)){
var f_20381 = cljs.core._nth.call(null,chunk__20346_20378,i__20348_20380);
cljs.core.println.call(null,"  ",f_20381);


var G__20382 = seq__20345_20377;
var G__20383 = chunk__20346_20378;
var G__20384 = count__20347_20379;
var G__20385 = (i__20348_20380 + (1));
seq__20345_20377 = G__20382;
chunk__20346_20378 = G__20383;
count__20347_20379 = G__20384;
i__20348_20380 = G__20385;
continue;
} else {
var temp__5720__auto___20386 = cljs.core.seq.call(null,seq__20345_20377);
if(temp__5720__auto___20386){
var seq__20345_20387__$1 = temp__5720__auto___20386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20345_20387__$1)){
var c__4556__auto___20388 = cljs.core.chunk_first.call(null,seq__20345_20387__$1);
var G__20389 = cljs.core.chunk_rest.call(null,seq__20345_20387__$1);
var G__20390 = c__4556__auto___20388;
var G__20391 = cljs.core.count.call(null,c__4556__auto___20388);
var G__20392 = (0);
seq__20345_20377 = G__20389;
chunk__20346_20378 = G__20390;
count__20347_20379 = G__20391;
i__20348_20380 = G__20392;
continue;
} else {
var f_20393 = cljs.core.first.call(null,seq__20345_20387__$1);
cljs.core.println.call(null,"  ",f_20393);


var G__20394 = cljs.core.next.call(null,seq__20345_20387__$1);
var G__20395 = null;
var G__20396 = (0);
var G__20397 = (0);
seq__20345_20377 = G__20394;
chunk__20346_20378 = G__20395;
count__20347_20379 = G__20396;
i__20348_20380 = G__20397;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20398 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20398);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20398)))?cljs.core.second.call(null,arglists_20398):arglists_20398));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20349_20399 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20350_20400 = null;
var count__20351_20401 = (0);
var i__20352_20402 = (0);
while(true){
if((i__20352_20402 < count__20351_20401)){
var vec__20363_20403 = cljs.core._nth.call(null,chunk__20350_20400,i__20352_20402);
var name_20404 = cljs.core.nth.call(null,vec__20363_20403,(0),null);
var map__20366_20405 = cljs.core.nth.call(null,vec__20363_20403,(1),null);
var map__20366_20406__$1 = (((((!((map__20366_20405 == null))))?(((((map__20366_20405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20366_20405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20366_20405):map__20366_20405);
var doc_20407 = cljs.core.get.call(null,map__20366_20406__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20408 = cljs.core.get.call(null,map__20366_20406__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20404);

cljs.core.println.call(null," ",arglists_20408);

if(cljs.core.truth_(doc_20407)){
cljs.core.println.call(null," ",doc_20407);
} else {
}


var G__20409 = seq__20349_20399;
var G__20410 = chunk__20350_20400;
var G__20411 = count__20351_20401;
var G__20412 = (i__20352_20402 + (1));
seq__20349_20399 = G__20409;
chunk__20350_20400 = G__20410;
count__20351_20401 = G__20411;
i__20352_20402 = G__20412;
continue;
} else {
var temp__5720__auto___20413 = cljs.core.seq.call(null,seq__20349_20399);
if(temp__5720__auto___20413){
var seq__20349_20414__$1 = temp__5720__auto___20413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20349_20414__$1)){
var c__4556__auto___20415 = cljs.core.chunk_first.call(null,seq__20349_20414__$1);
var G__20416 = cljs.core.chunk_rest.call(null,seq__20349_20414__$1);
var G__20417 = c__4556__auto___20415;
var G__20418 = cljs.core.count.call(null,c__4556__auto___20415);
var G__20419 = (0);
seq__20349_20399 = G__20416;
chunk__20350_20400 = G__20417;
count__20351_20401 = G__20418;
i__20352_20402 = G__20419;
continue;
} else {
var vec__20368_20420 = cljs.core.first.call(null,seq__20349_20414__$1);
var name_20421 = cljs.core.nth.call(null,vec__20368_20420,(0),null);
var map__20371_20422 = cljs.core.nth.call(null,vec__20368_20420,(1),null);
var map__20371_20423__$1 = (((((!((map__20371_20422 == null))))?(((((map__20371_20422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20371_20422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20371_20422):map__20371_20422);
var doc_20424 = cljs.core.get.call(null,map__20371_20423__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20425 = cljs.core.get.call(null,map__20371_20423__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20421);

cljs.core.println.call(null," ",arglists_20425);

if(cljs.core.truth_(doc_20424)){
cljs.core.println.call(null," ",doc_20424);
} else {
}


var G__20426 = cljs.core.next.call(null,seq__20349_20414__$1);
var G__20427 = null;
var G__20428 = (0);
var G__20429 = (0);
seq__20349_20399 = G__20426;
chunk__20350_20400 = G__20427;
count__20351_20401 = G__20428;
i__20352_20402 = G__20429;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__20373 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20374 = null;
var count__20375 = (0);
var i__20376 = (0);
while(true){
if((i__20376 < count__20375)){
var role = cljs.core._nth.call(null,chunk__20374,i__20376);
var temp__5720__auto___20430__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20430__$1)){
var spec_20431 = temp__5720__auto___20430__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20431));
} else {
}


var G__20432 = seq__20373;
var G__20433 = chunk__20374;
var G__20434 = count__20375;
var G__20435 = (i__20376 + (1));
seq__20373 = G__20432;
chunk__20374 = G__20433;
count__20375 = G__20434;
i__20376 = G__20435;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__20373);
if(temp__5720__auto____$1){
var seq__20373__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20373__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20373__$1);
var G__20436 = cljs.core.chunk_rest.call(null,seq__20373__$1);
var G__20437 = c__4556__auto__;
var G__20438 = cljs.core.count.call(null,c__4556__auto__);
var G__20439 = (0);
seq__20373 = G__20436;
chunk__20374 = G__20437;
count__20375 = G__20438;
i__20376 = G__20439;
continue;
} else {
var role = cljs.core.first.call(null,seq__20373__$1);
var temp__5720__auto___20440__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20440__$2)){
var spec_20441 = temp__5720__auto___20440__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20441));
} else {
}


var G__20442 = cljs.core.next.call(null,seq__20373__$1);
var G__20443 = null;
var G__20444 = (0);
var G__20445 = (0);
seq__20373 = G__20442;
chunk__20374 = G__20443;
count__20375 = G__20444;
i__20376 = G__20445;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20446 = cljs.core.conj.call(null,via,t);
var G__20447 = cljs.core.ex_cause.call(null,t);
via = G__20446;
t = G__20447;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20450 = datafied_throwable;
var map__20450__$1 = (((((!((map__20450 == null))))?(((((map__20450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20450):map__20450);
var via = cljs.core.get.call(null,map__20450__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20450__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20450__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20451 = cljs.core.last.call(null,via);
var map__20451__$1 = (((((!((map__20451 == null))))?(((((map__20451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20451):map__20451);
var type = cljs.core.get.call(null,map__20451__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20451__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20451__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20452 = data;
var map__20452__$1 = (((((!((map__20452 == null))))?(((((map__20452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20452):map__20452);
var problems = cljs.core.get.call(null,map__20452__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20452__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20452__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20453 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20453__$1 = (((((!((map__20453 == null))))?(((((map__20453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20453):map__20453);
var top_data = map__20453__$1;
var source = cljs.core.get.call(null,map__20453__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20458 = phase;
var G__20458__$1 = (((G__20458 instanceof cljs.core.Keyword))?G__20458.fqn:null);
switch (G__20458__$1) {
case "read-source":
var map__20459 = data;
var map__20459__$1 = (((((!((map__20459 == null))))?(((((map__20459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20459):map__20459);
var line = cljs.core.get.call(null,map__20459__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20459__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20461 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20461__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20461,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20461);
var G__20461__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20461__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20461__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20461__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20461__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20462 = top_data;
var G__20462__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20462,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20462);
var G__20462__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20462__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20462__$1);
var G__20462__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20462__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20462__$2);
var G__20462__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20462__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20462__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20462__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20462__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20463 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20463,(0),null);
var method = cljs.core.nth.call(null,vec__20463,(1),null);
var file = cljs.core.nth.call(null,vec__20463,(2),null);
var line = cljs.core.nth.call(null,vec__20463,(3),null);
var G__20466 = top_data;
var G__20466__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20466,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20466);
var G__20466__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20466__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20466__$1);
var G__20466__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__20466__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20466__$2);
var G__20466__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20466__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20466__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20466__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20466__$4;
}

break;
case "execution":
var vec__20467 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20467,(0),null);
var method = cljs.core.nth.call(null,vec__20467,(1),null);
var file = cljs.core.nth.call(null,vec__20467,(2),null);
var line = cljs.core.nth.call(null,vec__20467,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20449_SHARP_){
var or__4126__auto__ = (p1__20449_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20449_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__20470 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20470__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20470,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20470);
var G__20470__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20470__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20470__$1);
var G__20470__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__20470__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20470__$2);
var G__20470__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20470__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20470__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20470__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20470__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20458__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20474){
var map__20475 = p__20474;
var map__20475__$1 = (((((!((map__20475 == null))))?(((((map__20475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20475):map__20475);
var triage_data = map__20475__$1;
var phase = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20477 = phase;
var G__20477__$1 = (((G__20477 instanceof cljs.core.Keyword))?G__20477.fqn:null);
switch (G__20477__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20478_20487 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20479_20488 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20480_20489 = true;
var _STAR_print_fn_STAR__temp_val__20481_20490 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20480_20489);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20481_20490);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20472_SHARP_){
return cljs.core.dissoc.call(null,p1__20472_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20479_20488);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20478_20487);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20482_20491 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20483_20492 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20484_20493 = true;
var _STAR_print_fn_STAR__temp_val__20485_20494 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20484_20493);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20485_20494);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20473_SHARP_){
return cljs.core.dissoc.call(null,p1__20473_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20483_20492);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20482_20491);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20477__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
