(this["webpackJsonpreact-sample-app"]=this["webpackJsonpreact-sample-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),o=a.n(r),l=(a(20),a(21),function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"logo"},"LOGO"),c.a.createElement("div",{className:"menu"},"HOME / PRODUCTS / ABOUT / CONTACT"),c.a.createElement("div",{className:"userData"}))}),u=Object(n.createContext)(),i=function(e){var t=e.product;return c.a.createElement("div",null,t.id,t.title,t.sell_price,c.a.createElement("img",{src:t.list_image_url,alt:t.title}),c.a.createElement("button",null,"\u0645\u0634\u0627\u0647\u062f/\u062e\u0631\u06cc\u062f"))},s=(a(22),function(){var e=Object(n.useContext)(u).products;return c.a.createElement("div",null,"all products",e.map((function(e){return c.a.createElement(i,{key:e.id,product:e})})))}),d=a(13),m=a(12),p=a.n(m),f=a(14),v=function(e,t){switch(t.type){case"get-data":return Object(f.a)({},e,{products:t.payload});default:return e}},E=function(e){var t=Object(n.useReducer)(v,{products:[]}),a=Object(d.a)(t,2),r=a[0],o=a[1];return c.a.createElement(u.Provider,{value:{products:r.products,getData:function(){p.a.get("/api/NPP-dcbq7OjykP").then((function(e){o({type:"get-data",payload:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}}},e.children)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(){var e=Object(n.useContext)(u).getData;return Object(n.useEffect)((function(){e()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null),c.a.createElement(s,null))};o.a.render(c.a.createElement((function(){return c.a.createElement(E,null,c.a.createElement(g,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.65018e06.chunk.js.map