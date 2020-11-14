// Compiled by ClojureScript 1.10.773 {}
goog.provide('dgn.core');
goog.require('cljs.core');
goog.require('goog.dom');
cljs.core.println.call(null,"This text is printed from src/dgn/core.cljs. Go ahead and edit it and see reloading in action.");
dgn.core.multiply = (function dgn$core$multiply(a,b){
return (a * b);
});
if((typeof dgn !== 'undefined') && (typeof dgn.core !== 'undefined') && (typeof dgn.core.app_state !== 'undefined')){
} else {
dgn.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
dgn.core.get_app_element = (function dgn$core$get_app_element(){
return goog.dom.getElement("app");
});
dgn.core.on_reload = (function dgn$core$on_reload(){
return null;
});

//# sourceMappingURL=core.js.map
