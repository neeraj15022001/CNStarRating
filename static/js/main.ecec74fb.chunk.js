(this["webpackJsonpstar-rating"]=this["webpackJsonpstar-rating"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(4),o=n.n(a),s=n(5),g=n(3),i=n(1);var l=function(t){for(var e=t.numberOfStars,n=t.highlightColor,a=t.nonHighlighColor,o=Object(r.useState)({toggled:0,nonToggled:parseInt(e)}),l=Object(s.a)(o,2),d=l[0],c=l[1],p=function(t){t.stopPropagation();var n=0;n="path"===t.target.tagName?parseInt(t.target.parentElement.dataset.index):parseInt(t.target.dataset.index),c({toggled:n,nonToggled:parseInt(e-parseInt(n))})},h=function(t){t.stopPropagation();var n=0;n="path"===t.target.tagName?parseInt(t.target.parentElement.dataset.index):parseInt(t.target.dataset.index),c({toggled:n+1,nonToggled:parseInt(e-parseInt(n+1))})},u=[],j=0;j<d.toggled;j++)u.push(Object(i.jsx)(g.a,{size:"64",color:n,style:{cursor:"pointer"},onClick:h,"data-index":j},j));for(var b=1;b<=d.nonToggled;b++)u.push(Object(i.jsx)(g.b,{size:"64",color:a,style:{cursor:"pointer"},onClick:p,"data-index":d.toggled+b},d.toggled+b));return Object(i.jsx)("div",{children:u.map((function(t){return t}))})};var d=function(){return Object(i.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(i.jsx)(l,{numberOfStars:"5",highlightColor:"gold",nonHighlighColor:"silver"})})},c=Object(i.jsx)(d,{}),p=document.getElementById("root");o.a.render(c,p)}},[[11,1,2]]]);
//# sourceMappingURL=main.ecec74fb.chunk.js.map