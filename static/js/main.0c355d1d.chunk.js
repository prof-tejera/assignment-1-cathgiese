(this["webpackJsonpassignment-1"]=this["webpackJsonpassignment-1"]||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n,l,r,c,o,u=a(0),s=a.n(u),m=a(12),i=a.n(m),b=(a(23),a(3)),E=a(5),d=a(2),p=a(4);const v=p.a.div(n||(n=Object(b.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),g=p.a.div(l||(l=Object(b.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),f=p.a.div(r||(r=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),j=p.a.div(c||(c=Object(b.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),h=p.a.table(o||(o=Object(b.a)([""])));var k,y,O,x=e=>{let{title:t,component:a,propDocs:n}=e;return s.a.createElement(v,null,s.a.createElement(f,null,t),s.a.createElement(g,null,s.a.createElement(j,null,a),s.a.createElement(h,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Prop"),s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Default value"))),s.a.createElement("tbody",null,n.map((e,t)=>s.a.createElement("tr",{key:t},s.a.createElement("td",null,e.prop),s.a.createElement("td",null,e.description),s.a.createElement("td",null,e.type),s.a.createElement("td",null,s.a.createElement("code",null,e.defaultValue))))))))};const C="#ffa2bf",S={small:10,medium:14,large:20},w=p.a.div(k||(k=Object(b.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),z=p.a.span(y||(y=Object(b.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),e=>e.size,e=>e.size,e=>e.color),I=p.a.div(O||(O=Object(b.a)(["\n  display: flex;\n"])));var D,M,A=e=>{let{size:t="medium",color:a=C}=e;return s.a.createElement(w,null,s.a.createElement(I,null,s.a.createElement(z,{size:S[t],color:a}),s.a.createElement(z,{size:S[t],color:a})),s.a.createElement(I,null,s.a.createElement(z,{size:S[t],color:a}),s.a.createElement(z,{size:S[t],color:a})))};const N=p.a.div(D||(D=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),P=p.a.div(M||(M=Object(b.a)(["\n  font-size: 2rem;\n"])));var R=()=>s.a.createElement(N,null,s.a.createElement("div",null,s.a.createElement(P,null,"Documentation"),s.a.createElement(x,{title:"Loading spinner ",component:s.a.createElement(A,null),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]})));a(27);var T=e=>{let{active:t,text:a,...n}=e;return s.a.createElement("button",Object.assign({className:t?"Default-button Default-button-active":"Default-button"},n),a)};var B=e=>{let{minutes:t,seconds:a}=e;return s.a.createElement("div",{style:{width:300,height:70,textAlign:"center",marginBottom:10,background:"white",fontSize:"50px",padding:"30px"}},t,"m",a,"s")};var J=e=>s.a.createElement("div",null,e.children);a(28);var V=e=>{let{label:t,numbers:a,...n}=e;return s.a.createElement("label",null,s.a.createElement("select",Object.assign({className:"default",name:"selectedTime"},n),a),t)};var L=()=>{const[e,t]=Object(u.useState)(null),[a,n]=Object(u.useState)(0),[l,r]=Object(u.useState)(null),[c,o]=Object(u.useState)(null);Object(u.useEffect)(()=>{let t;return e&&a!==l+c&&(t=setInterval(()=>n(a+1),10)),()=>clearInterval(t)},[e,a,l,c]);const m=Math.floor(a%36e4/6e3),i=Math.floor(a%6e3/100);console.log(e,a);const b=[...Array(60).keys()].map(e=>s.a.createElement("option",{value:e,key:e},e));return s.a.createElement("div",{className:"grid-container"},s.a.createElement(J,{"background-color":"blue"},s.a.createElement(V,{label:"min",onChange:e=>r(6e3*e.target.value),numbers:b}),s.a.createElement(V,{label:"sec",onChange:e=>o(100*e.target.value),numbers:b}),s.a.createElement(B,{minutes:m,seconds:i}),s.a.createElement(T,{text:e?"Pause":"Start",onClick:()=>{t(!e||null)}}),s.a.createElement(T,{text:"Reset",onClick:()=>{t(null),n(0)}})))};var X=()=>{const[e,t]=Object(u.useState)(null),[a,n]=Object(u.useState)(0),[l,r]=Object(u.useState)(null),[c,o]=Object(u.useState)(null);Object(u.useEffect)(()=>{let t;return e&&a>0&&(t=setInterval(()=>n(a-1),10)),()=>clearInterval(t)},[e,a,l,c]);const m=Math.floor(a%36e4/6e3),i=Math.floor(a%6e3/100);console.log(a);const b=[...Array(60).keys()].map(e=>s.a.createElement("option",{value:e,key:e},e));return s.a.createElement("div",{className:"grid-container"},s.a.createElement(J,{"background-color":"blue"},s.a.createElement(V,{label:"min",onChange:e=>r(6e3*e.target.value),numbers:b}),s.a.createElement(V,{label:"sec",onChange:e=>o(100*e.target.value),numbers:b}),s.a.createElement(B,{minutes:m,seconds:i}),s.a.createElement(T,{text:e&&0!==a?"Pause":"Start",onClick:()=>{e?t(null):(t(!0),n(l+c+99))}}),s.a.createElement(T,{text:"Reset",onClick:()=>{t(null),n(l+c)}}),s.a.createElement(T,{text:">>",onClick:()=>{n(0)}})))};var Y=()=>{const[e,t]=Object(u.useState)(null),[a,n]=Object(u.useState)(0),[l,r]=Object(u.useState)(null),[c,o]=Object(u.useState)(null),[m,i]=Object(u.useState)(0),[b,E]=Object(u.useState)(0);Object(u.useEffect)(()=>{let t;return e&&a>0?t=setInterval(()=>n(a-1),10):e&&0===a&&m>1&&(n(l+c+99),i(m-1),t=setInterval(()=>n(a-1),10)),()=>clearInterval(t)},[e,a,l,c,m]);const d=Math.floor(a%36e4/6e3),p=Math.floor(a%6e3/100),v=[...Array(60).keys()].map(e=>s.a.createElement("option",{value:e,key:e},e)),g=[...Array(31).keys()].map(e=>s.a.createElement("option",{value:e,key:e},e));return s.a.createElement("div",{className:"grid-container"},s.a.createElement(J,{"background-color":"blue"},s.a.createElement(V,{label:"min",onChange:e=>r(6e3*e.target.value),numbers:v}),s.a.createElement(V,{label:"sec",onChange:e=>o(100*e.target.value),numbers:v}),s.a.createElement(V,{label:"rounds",onChange:e=>{E(e.target.value),i(e.target.value)},numbers:g}),s.a.createElement(B,{minutes:d,seconds:p}),s.a.createElement(T,{text:e&&0!==a?"Pause":"Start",onClick:()=>{t(!e||null)}}),s.a.createElement(T,{text:"Reset",onClick:()=>{t(null),n(l+c),i(b)}}),s.a.createElement(T,{text:">>",onClick:()=>{n(0),i(0)}})))};var q,F,G,H=()=>{const[e,t]=Object(u.useState)(null),[a,n]=Object(u.useState)(0),[l,r]=Object(u.useState)(0),[c,o]=Object(u.useState)(0),[m,i]=Object(u.useState)(0),[b,E]=Object(u.useState)(0),[d,p]=Object(u.useState)(null);Object(u.useEffect)(()=>{let t;return e&&0!==a&&m>0&&(t=setInterval(()=>n(a-1),10)),e&&d&&0===a&&m>0?(n(c+99),p(null),t=setInterval(()=>n(a-1),10)):e&&null===d&&0===a&&m>0&&(n(l+99),p(!0),i(m-1),t=setInterval(()=>n(a-1),10)),()=>clearInterval(t)},[e,d,a,m,c,l]);const v=Math.floor(a%6e3/100),g=[...Array(60).keys()].map(e=>s.a.createElement("option",{value:e,key:e},e)),f=[...Array(31).keys()].map(e=>s.a.createElement("option",{value:e,key:e},e));return s.a.createElement("div",{className:"grid-container"},s.a.createElement(J,{"background-color":"blue"},s.a.createElement(V,{label:"sec",onChange:e=>r(100*e.target.value),numbers:g}),s.a.createElement(V,{label:"sec",onChange:e=>o(100*e.target.value),numbers:g}),s.a.createElement(V,{label:"rounds",onChange:e=>{E(e.target.value),i(e.target.value)},numbers:f}),s.a.createElement(B,{minutes:"0",seconds:v}),s.a.createElement(T,{text:e&&0!==a?"Pause":"Start",onClick:()=>{t(!e||null)}}),s.a.createElement(T,{text:"Reset",onClick:()=>{t(null),n(l),i(b)}}),s.a.createElement(T,{text:">>",onClick:()=>{n(0),i(0)}})))};const K=p.a.div(q||(q=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Q=p.a.div(F||(F=Object(b.a)(["\n  border: 1px solid gray;\n  padding: 20px;\n  margin: 10px;\n  font-size: 1.5rem;\n"]))),U=p.a.div(G||(G=Object(b.a)([""])));var W,Z=()=>{const e=[{title:"Stopwatch",C:s.a.createElement(L,null)},{title:"Countdown",C:s.a.createElement(X,null)},{title:"XY",C:s.a.createElement(Y,null)},{title:"Tabata",C:s.a.createElement(H,null)}];return s.a.createElement(K,null,e.map(e=>s.a.createElement(Q,{key:"timer-".concat(e.title)},s.a.createElement(U,null,e.title),e.C)))};const $=p.a.div(W||(W=Object(b.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"]))),_=()=>s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(E.b,{to:"/"},"Timers")),s.a.createElement("li",null,s.a.createElement(E.b,{to:"/docs"},"Documentation"))));var ee=()=>s.a.createElement($,null,s.a.createElement(E.a,null,s.a.createElement(_,null),s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/docs",element:s.a.createElement(R,null)}),s.a.createElement(d.a,{path:"/",element:s.a.createElement(Z,null)}))));i.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ee,null)))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c355d1d.chunk.js.map