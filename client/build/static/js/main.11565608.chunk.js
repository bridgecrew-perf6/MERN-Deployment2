(this["webpackJsonpprop-it-up"]=this["webpackJsonpprop-it-up"]||[]).push([[0],{28:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),a=n.n(i),o=n(20),r=n.n(o),s=(n(28),n(22)),l=n(5),u=(n(7),n(4)),d=n.n(u),j=n(3),b=function(t){var e=t.authorId,n=t.successCallback;return Object(c.jsx)("button",{className:"btn btn-outline-danger btn-sm ml-2",onClick:function(t){d.a.delete("http://localhost:8000/api/author/"+e).then((function(t){n()}))},children:"Delete"})},h=function(t){var e=t.initialName,n=t.onSubmitProp,a=Object(i.useState)(e),o=Object(l.a)(a,2),r=o[0],s=o[1];return Object(c.jsx)("div",{className:"container mt-5 ",children:Object(c.jsxs)("form",{className:"centered align-center",onSubmit:function(t){t.preventDefault(),n({name:r}),s(""),Object(j.c)("/")},children:[Object(c.jsx)("p",{className:"mb-3",children:"Add a new autho:"}),Object(c.jsx)("div",{className:"form-group row  ml-3 rounded border col-sm-4 bg-light",children:Object(c.jsxs)("label",{className:"col-sm-12 col-form-label text-muted",children:["Name",Object(c.jsx)("input",{type:"text",className:"ml-3 rounded border ",onChange:function(t){return s(t.target.value)},value:r})]})}),Object(c.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-info"})]})})},p=function(t){var e=Object(i.useState)([]),n=Object(l.a)(e,2),a=n[0],o=n[1];Object(i.useEffect)((function(){d.a.get("http://localhost:8000/api/products").then((function(t){o(t.data)})).catch((function(t){return console.error(t)}))}),[]);return Object(c.jsxs)("div",{className:"row justify-content-center",children:[Object(c.jsx)(h,{onSubmitProp:function(t){d.a.post("http://localhost:8000/api/products/new",t).then((function(t){o([].concat(Object(s.a)(a),[t.data.newProduct]))})),Object(j.c)("/productes")},initialTitle:"",initialPrice:"10",initialDescription:"",button_fucction:"Create"}),Object(c.jsxs)("ul",{className:"text-center list-group list-group-flush",children:[Object(c.jsx)("h1",{children:"All Products:"}),a.map((function(t){return Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)(j.a,{to:"/view/".concat(t._id),className:"text-dark",children:t.title}),Object(c.jsx)(j.a,{to:"/edit/".concat(t._id),className:"btn btn-outline-info btn-sm ml-2",children:"Edit"}),Object(c.jsx)(b,{productId:t._id,successCallback:function(){return e=t._id,void o(a.filter((function(t){return t._id!==e})));var e}})]},a._id)}))]})]})},m=function(t){t.id;var e=Object(i.useState)(),n=Object(l.a)(e,2),a=n[0],o=n[1],r=Object(i.useState)(!1),s=Object(l.a)(r,2),u=s[0],b=s[1];Object(i.useEffect)((function(){d.a.get("http://localhost:8000/api/author/"+t._id).then((function(t){o(t.data.product),b(!0)})).catch((function(t){return console.error(t)}))}),[t._id]);return Object(c.jsx)("div",{children:u&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h,{onSubmitProp:function(e){console.log(e),d.a.put("http://localhost:8000/api/author/"+t._id,e).then((function(t){console.log(t),Object(j.c)("/")})).catch((function(t){console.error(t)}))},initialName:a.name})})})};var O=function(){return Object(c.jsxs)("div",{className:"continer",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("h1",{children:"Favorite authors"})}),Object(c.jsx)(j.a,{to:"/new",children:"Add an author"}),Object(c.jsxs)(j.b,{children:[Object(c.jsx)(p,{path:"/"}),Object(c.jsx)(h,{path:"/new"}),Object(c.jsx)(m,{path:"/edit/:_id"})]})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}},[[52,1,2]]]);
//# sourceMappingURL=main.11565608.chunk.js.map