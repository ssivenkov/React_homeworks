(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={linkContainer:"Header_linkContainer__2LDti",button:"Header_button__3T1g5",link:"Header_link__2Gpw9",PreJunior:"Header_PreJunior__3Hyzi",Junior:"Header_Junior__2iBXO",JuniorPlus:"Header_JuniorPlus__2ELRN",activeLink:"Header_activeLink__3mcDw"}},function(e,t,n){e.exports={tasksContainer:"Affairs_tasksContainer__1Uz_U",taskContainer:"Affairs_taskContainer__6rB_H",low:"Affairs_low__26xC0",middle:"Affairs_middle__1D2ft",high:"Affairs_high__M3Wl8",buttonMargin:"Affairs_buttonMargin__3-MgP",sortButtonsContainer:"Affairs_sortButtonsContainer__3dzwB",sortButtonMargin:"Affairs_sortButtonMargin__15Ih3"}},function(e,t,n){e.exports={externalContainer:"Message_externalContainer__3V608",messageContainer:"Message_messageContainer__gVn5t",avatar:"Message_avatar__FN1Zd",messageWrapper:"Message_messageWrapper__UESVq",message:"Message_message__2mCZA",name:"Message_name__2OUUV",messageTextAndTimeContainer:"Message_messageTextAndTimeContainer__2HCOZ",messageText:"Message_messageText__GqkVv",time:"Message_time__2gvBY"}},,,,function(e,t,n){e.exports={sharedContainer:"Error404_sharedContainer__353kU",Error404:"Error404_Error404__3Y9zW",text:"Error404_text__qcM4d"}},function(e,t,n){e.exports={Container:"Greeting_Container__2VaYG",inputContainer:"Greeting_inputContainer__22G4C",buttonMargin:"Greeting_buttonMargin__3MOwB",totalUsersCountMargin:"Greeting_totalUsersCountMargin__3pLGC"}},function(e,t,n){e.exports={input:"SuperInputText_input__3KEQu",superInput:"SuperInputText_superInput__1tt0o",errorInput:"SuperInputText_errorInput__TBbTU",error:"SuperInputText_error__28EJ3"}},,function(e,t,n){e.exports={labelContainer:"SuperCheckbox_labelContainer__1_ysv",checkbox:"SuperCheckbox_checkbox__1mw1s",spanClassName:"SuperCheckbox_spanClassName__3zFUs"}},,,function(e,t,n){e.exports={default:"SuperButton_default__OSSjx",red:"SuperButton_red__pHv6_"}},function(e,t,n){e.exports={blue:"HW4_blue__2M6OU",column:"HW4_column__33fNC",testSpanError:"HW4_testSpanError__2XA3o"}},function(e,t,n){e.exports={checkboxChecked:"SuperRadio_checkboxChecked__boJCy",checkboxUnchecked:"SuperRadio_checkboxUnchecked__nN0V6"}},,,,,,function(e,t,n){e.exports={App:"App_App__1sL9M"}},function(e,t,n){e.exports={pencil:"SuperEditableSpan_pencil__1mg8r"}},function(e,t,n){e.exports={selectField:"SuperSelect_selectField__3tfse"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(28),s=n.n(c),i=(n(38),n(29)),o=n.n(i),l=n(11),j=n(2),u=n(14),d=n.n(u),b=n(0);var h=function(){return Object(b.jsxs)("div",{className:d.a.sharedContainer,children:[Object(b.jsx)("div",{className:d.a.Error404,children:"404"}),Object(b.jsx)("div",{className:d.a.text,children:"Page not found!"}),Object(b.jsx)("div",{className:d.a.text,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},x=n(10),O=n.n(x);var _=function(e){return Object(b.jsx)("div",{className:O.a.externalContainer,children:Object(b.jsxs)("div",{className:O.a.messageContainer,children:[Object(b.jsx)("div",{className:O.a.avatar,children:Object(b.jsx)("img",{src:e.avatar,alt:""})}),Object(b.jsx)("div",{className:O.a.messageWrapper,children:Object(b.jsxs)("div",{className:O.a.message,children:[Object(b.jsx)("div",{className:O.a.name,children:Object(b.jsx)("p",{children:e.name})}),Object(b.jsxs)("div",{className:O.a.messageTextAndTimeContainer,children:[Object(b.jsx)("div",{className:O.a.messageText,children:Object(b.jsx)("p",{children:e.message})}),Object(b.jsx)("div",{className:O.a.time,children:Object(b.jsx)("p",{children:e.time})})]})]})})]})})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="User name",f="User text",v="22:00";var C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(_,{avatar:m,name:p,message:f,time:v})]})},g=n(3),k=n(9),N=n.n(k),S=n(5),y=n(4),M=n(21),w=n.n(M),T=function(e){var t=e.red,n=e.className,a=Object(y.a)(e,["red","className"]),r="".concat(t?w.a.red:w.a.default," ").concat(n);return Object(b.jsx)("button",Object(S.a)({className:r},a))};var E=function(e){var t=N.a[e.affair.priority];return Object(b.jsxs)("div",{className:N.a.taskContainer,children:[Object(b.jsxs)("span",{children:[e.affair.name," - ",Object(b.jsx)("span",{className:t,children:e.affair.priority})]}),Object(b.jsx)(T,{className:N.a.buttonMargin,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var A=function(e){var t=e.data.map((function(t){return Object(b.jsx)(E,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:N.a.tasksContainer,children:t}),Object(b.jsxs)("div",{className:N.a.sortButtonsContainer,children:[Object(b.jsx)(T,{onClick:function(){e.setFilter("all")},className:N.a.sortButtonMargin,children:"All"}),Object(b.jsx)(T,{onClick:function(){e.setFilter("high")},className:N.a.sortButtonMargin,children:"High"}),Object(b.jsx)(T,{onClick:function(){e.setFilter("middle")},className:N.a.sortButtonMargin,children:"Middle"}),Object(b.jsx)(T,{onClick:function(){e.setFilter("low")},className:N.a.sortButtonMargin,children:"Low"})]})]})},B=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var U=function(){var e=Object(a.useState)(B),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(g.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(A,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},J=n(33),F=n(15),H=n.n(F),P=n(16),I=n.n(P),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(I.a.error," ").concat(i||""),j="".concat(I.a.input," ").concat(c?I.a.errorInput:I.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(b.jsx)("span",{className:l,children:c})]})},G=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.onEnterKey,c=e.error,s=e.totalUsers;return Object(b.jsxs)("div",{className:H.a.Container,children:[Object(b.jsx)("div",{className:H.a.inputContainer,children:Object(b.jsx)(W,{value:t,onChange:n,onKeyDown:r,onBlur:n,error:c})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(T,{disabled:!t,onClick:a,className:H.a.buttonMargin,children:"add"}),Object(b.jsx)("span",{className:H.a.totalUsersCountMargin,children:s})]})]})},L=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(g.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(g.a)(o,2),j=l[0],u=l[1],d=function(){var e=s;e&&(u(""),n(e),alert("Hello ".concat(e," !")),i(""))},h=t.length;return Object(b.jsx)(G,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(u(""),i(t)):(i(""),u("Error: name is required!"))},addUser:d,onEnterKey:function(e){"Enter"===e.key&&s&&d()},error:j,totalUsers:h})},D=n(47);var K=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(L,{users:n,addUserCallback:function(e){var t=[{_id:Object(D.a)(),name:e}].concat(Object(J.a)(n));r(t)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},V=n(22),z=n.n(V),q=n(18),R=n.n(q),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(R.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{className:R.a.labelContainer,children:[Object(b.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(b.jsx)("span",{className:R.a.spanClassName,children:r})]})};var Y=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(g.a)(i,2),l=o[0],j=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:z.a.column,children:[Object(b.jsx)(W,{value:n,onChangeText:r,onEnter:s,error:c}),Object(b.jsx)(W,{className:"".concat(z.a.blue)}),Object(b.jsx)(T,{children:"default"}),Object(b.jsx)(T,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(T,{disabled:!0,children:"disabled"}),Object(b.jsx)(X,{checked:l,onChangeChecked:j,children:"some text "}),Object(b.jsx)(X,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Z=n(30),Q=n.n(Z),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(y.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(g.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,d=j.onDoubleClick,h=(j.className,Object(y.a)(j,["children","onDoubleClick","className"])),x=Q.a.pencil;return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(W,Object(S.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(b.jsx)("span",Object(S.a)(Object(S.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},h),{},{children:u||c.value}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)($,{value:n,onChangeText:r,spanProps:{children:n?void 0:" enter text..."}})}),Object(b.jsx)(T,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(b.jsx)(T,{onClick:function(){var e=te("editable-span-value",n);r(e)},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ae=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{}),Object(b.jsx)(U,{}),Object(b.jsx)(K,{}),Object(b.jsx)(Y,{}),Object(b.jsx)(ne,{})]})},re=n(31),ce=n.n(re),se=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),a=Object(y.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)})):[];return Object(b.jsx)("select",Object(S.a)(Object(S.a)({onChange:function(e){n(e.currentTarget.value)},className:ce.a.selectField},a),{},{children:r}))},ie=n(23),oe=n.n(ie),le=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=(e.onChange,e.onChangeOption),c=(Object(y.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:t,value:e,checked:e===a,onChange:c,className:e===a?oe.a.checkboxChecked:oe.a.checkboxUnchecked}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:s})},je=["x","y","z"];var ue=function(){var e=Object(a.useState)(je[1]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(se,{options:je,value:n,onChangeOption:r})}),Object(b.jsx)("div",{children:Object(b.jsx)(le,{name:"radio",options:je,value:n,onChangeOption:r})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var de=function(){return Object(b.jsxs)("div",{children:["Junior",Object(b.jsx)(ue,{})]})};var be=function(){return Object(b.jsx)("div",{children:"Junior+"})},he="/pre-junior",xe="/junior",Oe="/junior-plus";var _e=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(j.a,{to:he})}}),Object(b.jsx)(j.b,{path:he,exact:!0,render:function(){return Object(b.jsx)(ae,{})}}),Object(b.jsx)(j.b,{path:xe,exact:!0,render:function(){return Object(b.jsx)(de,{})}}),Object(b.jsx)(j.b,{path:Oe,exact:!0,render:function(){return Object(b.jsx)(be,{})}}),Object(b.jsx)(j.b,{render:function(){return Object(b.jsx)(h,{})}})]})})},me=n(8),pe=n.n(me);var fe=function(){return Object(b.jsxs)("div",{className:pe.a.linkContainer,children:[Object(b.jsx)(l.b,{to:he,activeClassName:pe.a.activeLink,className:"".concat(pe.a.link," ").concat(pe.a.PreJunior),children:"Pre-Junior"}),Object(b.jsx)(l.b,{to:xe,activeClassName:pe.a.activeLink,className:"".concat(pe.a.link," ").concat(pe.a.Junior),children:"Junior"}),Object(b.jsx)(l.b,{to:Oe,activeClassName:pe.a.activeLink,className:"".concat(pe.a.link," ").concat(pe.a.JuniorPlus),children:"Junior+"}),Object(b.jsx)("div",{className:pe.a.button,children:" "})]})};var ve=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(fe,{}),Object(b.jsx)(_e,{})]})})};var Ce=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(ve,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(Ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[45,1,2]]]);
//# sourceMappingURL=main.4838114b.chunk.js.map