(this.webpackJsonpcms=this.webpackJsonpcms||[]).push([[0],{196:function(e,n,t){e.exports=t(401)},201:function(e,n,t){},207:function(e,n,t){},208:function(e,n,t){},237:function(e,n){},238:function(e,n){},243:function(e,n){},245:function(e,n){},282:function(e,n){},287:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=287},290:function(e,n){},292:function(e,n){},302:function(e,n){},304:function(e,n){},332:function(e,n){},334:function(e,n){},335:function(e,n){},340:function(e,n){},342:function(e,n){},361:function(e,n){},373:function(e,n){},376:function(e,n){},396:function(e,n,t){},397:function(e,n,t){},400:function(e,n,t){},401:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(31),u=t.n(r),o=t(408),i=t(409),l=t(58),s=t(113),f=t(57),m=t(407);t(201);var E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{sticky:"top"},c.a.createElement(s.a.Brand,{as:m.a,to:"/"},c.a.createElement("i",{class:"fas fa-infinity"}),"OmniCalculator"),c.a.createElement(l.a,{className:"justify-content-center"},c.a.createElement(l.a.Link,{as:m.a,to:"/"},"Home"),c.a.createElement(l.a.Link,{as:m.a,to:"/Basic"},"Basic"),c.a.createElement(f.a,{title:"Financial",id:"basic-nav-dropdown"},c.a.createElement(f.a.Item,{href:"#action/3.1",as:m.a,to:"/Financial/Savings"},"Savings"),c.a.createElement(f.a.Divider,null),c.a.createElement(f.a.Item,{href:"#action/3.1",as:m.a,to:"/Financial/Savings"},"Savings")),c.a.createElement(l.a.Link,{as:m.a,to:"/Currency"},"Currency"))))};t(207);var v=function(){return c.a.createElement("div",null,"Basic Calculator")};t(208);var p=function(){return c.a.createElement("div",null,"Savings Calculator")},h=t(194),b=t(36),O=t(112),g=t.n(O);t(396);function y(e){var n=e.currencyOptions,t=e.selectedCurrency,a=e.onChangeCurrency,r=e.onChangeAmount,u=e.amount;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",className:"input",value:u,onChange:r}),c.a.createElement("select",{value:t,onChange:a},n.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))}var C="https://api.exchangeratesapi.io/latest";var d=function(){var e,n,t=Object(a.useState)([]),r=Object(b.a)(t,2),u=r[0],o=r[1],i=Object(a.useState)(),l=Object(b.a)(i,2),s=l[0],f=l[1],m=Object(a.useState)(),E=Object(b.a)(m,2),v=E[0],p=E[1],O=Object(a.useState)(),d=Object(b.a)(O,2),j=d[0],S=d[1],k=Object(a.useState)(1),x=Object(b.a)(k,2),F=x[0],w=x[1],B=Object(a.useState)(!0),N=Object(b.a)(B,2),L=N[0],A=N[1];return L?(n=F,e=F*j):(e=F,n=F/j),Object(a.useEffect)((function(){fetch(C).then((function(e){return e.json()})).then((function(e){var n=Object.keys(e.rates)[0];o([e.base].concat(Object(h.a)(Object.keys(e.rates)))),f(e.base),p(n),S(e.rates[n])}))}),[]),Object(a.useEffect)((function(){null!=s&&null!=v&&fetch("".concat(C,"?base=").concat(s,"&symbols=").concat(v)).then((function(e){return e.json()})).then((function(e){return S(e.rates[v])}))}),[s,v]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Convert"),c.a.createElement(y,{currencyOptions:u,selectedCurrency:s,onChangeCurrency:function(e){return f(e.target.value)},onChangeAmount:function(){w(g.a.target.value),A(!0)},amount:n}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(y,{currencyOptions:u,selectedCurrency:v,onChangeCurrency:function(e){return p(e.target.value)},onChangeAmount:function(){w(g.a.target.value),A(!1)},amount:e}))};t(397);var j=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(i.a,{exact:!0,path:"/",component:v}),c.a.createElement(i.a,{exact:!0,path:"/basic",component:v}),c.a.createElement(i.a,{exact:!0,path:"/Financial/Savings",component:p}),c.a.createElement(i.a,{exact:!0,path:"/Currency",component:d})))};t(399),t(400);u.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.e9c3971c.chunk.js.map