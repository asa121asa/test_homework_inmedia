(this.webpackJsonpinprigramm=this.webpackJsonpinprigramm||[]).push([[0],{12:function(e,t,c){e.exports={formContainer:"FormSelection_formContainer__diBEg",item:"FormSelection_item__PKqkP",form:"FormSelection_form__34tKR",input:"FormSelection_input__2gQDE",error:"FormSelection_error__hCe1S",selected:"FormSelection_selected__3lX-8",textarea:"FormSelection_textarea__3ItaN",label:"FormSelection_label__1MJNX",file:"FormSelection_file__GMRIo",filesform:"FormSelection_filesform__3h-2q"}},17:function(e,t,c){e.exports={formTabs:"FormTabs_formTabs__38yM6",flex:"FormTabs_flex__3EpcJ",mainitem:"FormTabs_mainitem__1pNn3",item:"FormTabs_item__3JdYs",mainitemRed:"FormTabs_mainitemRed__1f6a4",itemRed:"FormTabs_itemRed__pLaju",sideitem:"FormTabs_sideitem__P1bEc"}},19:function(e,t,c){e.exports={flexContainer:"Container_flexContainer__E2__N",container:"Container_container__3PaKm",flexitem:"Container_flexitem__2c6bL",project:"Container_project__3lL_Q"}},23:function(e,t,c){e.exports={container:"Card_container__3QJKX",carbBackgroundContainer:"Card_carbBackgroundContainer__Bjk53",card:"Card_card__1z4vD",cardContainer:"Card_cardContainer__25y0v",image:"Card_image__QBLpV",titleCard:"Card_titleCard__pAMar"}},34:function(e,t,c){e.exports={red:"SuperButton_red__3QE-F"}},45:function(e,t,c){},46:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var a=c(5),i=c.n(a),n=c(20),r=c.n(n),s=(c(45),c(46),c(19)),o=c.n(s),l=c(23),j=c.n(l),d=c.p+"static/media/Group164.14d32fe0.svg",m=c(9),b=c(14),O=c(34),u=c.n(O),x=c(4),f=function(e){var t=e.red,c=e.className,a=(e.color,Object(b.a)(e,["red","className","color"])),i="".concat(t?u.a.default:u.a.red," ").concat(c);return Object(x.jsx)("button",Object(m.a)({className:i},a))},_=c(36),h=c.n(_),p=c.p+"static/media/birds.bae3afff.svg",v=c.p+"static/media/birdseEnd.dc218958.svg",g=i.a.memo((function(){return Object(x.jsxs)("div",{className:j.a.container,children:[Object(x.jsxs)("div",{className:j.a.carbBackgroundContainer,children:[Object(x.jsx)("img",{src:p,alt:"Birds"}),Object(x.jsx)("img",{src:v,alt:"Birds"})]}),Object(x.jsx)("div",{className:j.a.card,children:Object(x.jsx)(h.a,{className:"Tilt",options:{max:45,reverse:!0,speed:1e3},children:Object(x.jsxs)("div",{className:j.a.cardContainer,children:[Object(x.jsx)("div",{className:j.a.image,children:Object(x.jsx)("img",{alt:"",src:d})}),Object(x.jsx)("div",{className:j.a.titleCard,children:Object(x.jsx)("span",{children:"\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430"})}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})]})})})]})})),C=c(11),N=c(12),F=c.n(N),S=function(e){var t=e.options,c=(e.onChange,e.onChangeOption),a=(e.value,Object(b.a)(e,["options","onChange","onChangeOption","value"])),i=t&&t.map((function(e,t){return Object(x.jsx)("option",{children:e},t)}));return Object(x.jsx)("select",Object(m.a)(Object(m.a)({placeholder:"gitfitrdir",onChange:function(e){c&&c(e.currentTarget.value)}},a),{},{children:i}))},T=c.p+"static/media/filesicon.81325f84.svg",k=i.a.memo((function(){var e=Object(a.useState)("hhh"),t=Object(C.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)(""),r=Object(C.a)(n,2),s=r[0],o=r[1],l=Object(a.useState)(!1),j=Object(C.a)(l,2),d=j[0],m=j[1],b=Object(a.useState)(""),O=Object(C.a)(b,2),u=O[0],_=O[1],h=Object(a.useState)(1),p=Object(C.a)(h,2),v=p[0],g=p[1],N=Object(a.useState)([]),k=Object(C.a)(N,2),y=k[0],B=k[1],L=Object(a.useCallback)((function(e){var t=e.currentTarget.value;o(t),/^\d+$/.test(t)?m(!1):m(!0)}),[]),R=Object(a.useCallback)((function(e){_(e.currentTarget.value),u.length>35&&g(2),u.length>70&&g(3)}),[u.length]),E=Object(a.useCallback)((function(e){if(e.currentTarget.files){var t=e.currentTarget.files[0],c=y.concat(t);B(c)}}),[y]);return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:F.a.formContainer,children:Object(x.jsx)("div",{className:F.a.item,children:Object(x.jsx)("form",{children:Object(x.jsxs)("div",{className:F.a.form,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"\u0424\u043e\u0440\u043c\u0430"}),Object(x.jsx)("span",{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442"})]}),Object(x.jsx)("div",{children:Object(x.jsx)(S,{options:["\u0412\u044b\u0431\u043e\u0440 1","\u0412\u044b\u0431\u043e\u0440 2","\u0412\u044b\u0431\u043e\u0440 3","\u0412\u044b\u0431\u043e\u0440 4"],value:c,className:F.a.selected,onChangeOption:i})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"Phone",multiple:!1,className:d?F.a.error:F.a.input,value:s,placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 *",onChange:L})}),Object(x.jsx)("div",{children:Object(x.jsx)("textarea",{value:u,placeholder:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043e \u0447\u0435\u043c-\u0442\u043e \u0435\u0449\u0435",onChange:R,rows:v,className:F.a.textarea})}),Object(x.jsxs)("div",{className:F.a.filesform,children:[Object(x.jsxs)("label",{className:F.a.label,children:[Object(x.jsx)("img",{alt:"icon",src:T}),Object(x.jsx)("input",{className:F.a.file,onChange:E,title:"",name:"myFile",type:"file"})]}),Object(x.jsx)("div",{className:F.a.filesform,children:y.map((function(e){return Object(x.jsxs)("div",{style:{paddingLeft:"10px"},children:[e.name,Object(x.jsx)("b",{onClick:function(){var t=y.filter((function(t){return t.name!==e.name}));B(t)},children:" x"})]})}))})]}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{style:{width:"288px"},onClick:function(e){return e.preventDefault()},children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})]})})})})})})),y=c(17),B=c.n(y),L=i.a.memo((function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:F.a.formContainer,children:Object(x.jsx)("div",{className:F.a.item,children:Object(x.jsx)("div",{style:{borderTop:"1px",justifyContent:"centr"},className:"".concat(F.a.form," ").concat(B.a.formTabs),children:E.map((function(e,t){return Object(x.jsx)(R,{title:e.title,id:e.id,description:e.description},t)}))})})})})})),R=i.a.memo((function(e){var t=e.title,c=e.description,i=e.id,n=(e.children,Object(a.useState)(!1)),r=Object(C.a)(n,2),s=r[0],o=r[1];return Object(x.jsxs)("div",{className:B.a.flex,children:[Object(x.jsx)("div",{className:s?B.a.mainitem:B.a.mainitemRed,children:i}),Object(x.jsxs)("div",{className:B.a.sideitem,children:[Object(x.jsx)("div",{onClick:function(){return o(!s)},className:s?B.a.item:B.a.itemRed,children:Object(x.jsx)("span",{children:t})}),s&&Object(x.jsx)("div",{className:B.a.item,children:c})]})]})})),E=[{title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 1",id:1,description:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u043e \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u044b\u0435 \u0432\u0435\u0449\u0438 \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u044d\u0442\u0438\u0445 \u0442\u0430\u0431\u043e\u0432"},{title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2",id:2,description:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u043e \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u044b\u0435 \u0432\u0435\u0449\u0438 \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u044d\u0442\u0438\u0445 \u0442\u0430\u0431\u043e\u0432"},{title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3",id:3,description:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u043e \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u044b\u0435 \u0432\u0435\u0449\u0438 \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u044d\u0442\u0438\u0445 \u0442\u0430\u0431\u043e\u0432"}],P=c(16),J=c(53),Q=c(41),w=c.p+"static/media/andres.daa7714b.obj",D=i.a.memo((function(){return Object(x.jsxs)(P.a,{dpr:[1,2],camera:{position:[-2,2,4],fov:25},children:[Object(x.jsx)("directionalLight",{color:"#adafb4",position:[10,10,0],intensity:1.5}),Object(x.jsx)("directionalLight",{position:[-10,10,5],intensity:1}),Object(x.jsx)("directionalLight",{color:"#adafb4",position:[-10,10,0],intensity:1.5}),Object(x.jsx)("directionalLight",{position:[0,-10,0],intensity:.25}),Object(x.jsx)(I,{"position-y":-.5})]})})),I=i.a.memo((function(e){var t=Object(a.useRef)(null);return Object(P.b)((function(e){t&&t.current&&(t.current.rotation.y=e.clock.elapsedTime)})),Object(x.jsx)("group",Object(m.a)(Object(m.a)({ref:t},e),{},{children:Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)(J.a,{center:!0,children:"loading..."}),children:Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)(K,{url:w}),children:Object(x.jsx)(K,{url:w})})})}))})),K=i.a.memo((function(e){var t=Object(P.c)(Q.a,e.url);return Object(x.jsx)("primitive",{scale:[.009,.009,.009],object:t})}));function M(){return Object(x.jsx)("div",{className:o.a.flexContainer,children:Object(x.jsx)("div",{className:o.a.container,children:Object(x.jsxs)("div",{className:o.a.flexitem,children:[Object(x.jsx)("div",{className:o.a.project,children:Object(x.jsx)(D,{})}),Object(x.jsx)("div",{className:o.a.project,children:Object(x.jsx)(g,{})}),Object(x.jsx)("div",{className:o.a.project,children:Object(x.jsx)(k,{})}),Object(x.jsx)("div",{className:o.a.project,children:Object(x.jsx)(L,{})})]})})})}function X(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(M,{})})}var q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(x.jsx)(X,{}),document.getElementById("root")),q()}},[[51,1,2]]]);
//# sourceMappingURL=main.d9755e93.chunk.js.map