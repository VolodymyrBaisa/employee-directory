(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(13),i=n.n(s),o=n.p+"static/media/logo.3ed0b64f.svg";n(21);var l=function(){return Object(a.jsxs)("div",{className:"logo-container",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:o,className:"app-logo",alt:"logo"})}),Object(a.jsx)("div",{className:"logo-text",children:"Employee Directory"}),Object(a.jsx)("div",{className:"logo-sub-text",children:"Click on each heading to filter or use the search box to narrow your results"})]})};n(22);var j=function(e){var t=e.content;return Object(a.jsx)("div",{className:"button",children:t})};n(23);var d=function(){return Object(a.jsxs)("div",{className:"nav-container",children:[Object(a.jsx)(j,{content:"People"}),Object(a.jsx)(j,{content:"Teams"}),Object(a.jsx)(j,{content:"Projects"})]})};n(24);var u=function(){return Object(a.jsx)("div",{className:"separator"})};n(25);var m=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)(l,{}),Object(a.jsx)(d,{})]}),Object(a.jsx)(u,{})]})},b=n(3),O=n(15),f=(n(26),n.p+"static/media/search.db4d93e9.svg"),h=c.a.createContext({});var x=function(){var e=Object(r.useContext)(h);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"search-container",children:[Object(a.jsx)("img",{src:f,className:"searchIcon",alt:"Search"}),Object(a.jsx)("input",{type:"text",className:"search",placeholder:"Search",onChange:function(t){return e.handleSearchChange(t)}})]})})},v=(n(27),function(e){var t=e.avatar;return Object(a.jsx)("img",{src:t,className:"avatar",alt:"avatar"})}),p=n.p+"static/media/arrow_up.58557fb4.svg",g=n.p+"static/media/arrow_down.74957861.svg",y=(n(28),function(e){return Object(a.jsx)("div",{className:"t-col",children:e})}),N=function(){var e=Object(r.useContext)(h);return Object(a.jsxs)("div",{className:"t-header-container",children:[y(Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"t-header-filter",onClick:e.handleOnClick,children:"Employee"}),Object(a.jsx)("div",{className:"t-header-filter",onClick:e.handleOnClick,children:"ascend"===e.employeeState.order?Object(a.jsx)("img",{src:p,alt:"employee filter by name"}):Object(a.jsx)("img",{src:g,alt:"employee filter by name"})})]})),y("Phone"),y("Email"),y("DOB")]})},C=function(e){var t=e.avatar,n=e.name,r=e.phone,c=e.email,s=e.dob;return Object(a.jsxs)("div",{className:"t-row-container",children:[y(Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{avatar:t}),Object(a.jsx)("div",{children:n})]})),y(r),y(Object(a.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})),y(s)]})},S=function(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")};n(29);var k=function(){var e=Object(r.useContext)(h);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsx)(N,{}),void 0!==e.employeeState.filtered[0]&&void 0!==e.employeeState.filtered[0].name?e.employeeState.filtered.map((function(e){var t=e.login,n=e.name,r=e.picture,c=e.phone,s=e.email,i=e.dob,o={avatar:r.medium,name:n.first+" "+n.last,phone:c,email:s,dob:S(i.date)};return Object(a.jsx)(C,Object(b.a)({},o),t.uuid)})):Object(a.jsx)(a.Fragment,{})]})})},w=n(14),F=n.n(w),E=function(){return F.a.get("https://randomuser.me/api/?results=200&nat=us")};n(48);var P=function(){var e=Object(r.useState)({employee:[],order:"ascend",filtered:[]}),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){E().then((function(e){c(Object(b.a)(Object(b.a)({},n),{},{employee:e.data.results,filtered:e.data.results.sort((function(e,t){return e.name.first<t.name.first?-1:1}))}))}))}),[]),Object(a.jsx)(h.Provider,{value:{employeeState:n,handleSearchChange:function(e){var t=e.target.value,a=n.employee.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));c(Object(b.a)(Object(b.a)({},n),{},{filtered:a}))},handleOnClick:function(){"ascend"===n.order?n.order="descend":n.order="ascend";var e=n.filtered.sort((function(e,t){return"ascend"===n.order?e.name.first<t.name.first?-1:1:e.name.first>t.name.first?-1:1}));c(Object(b.a)(Object(b.a)({},n),{},{filteredList:e}))}},children:Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsx)(x,{}),Object(a.jsx)(k,{})]})})};n(49);var _=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{}),Object(a.jsx)(P,{})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.175e3cbf.chunk.js.map