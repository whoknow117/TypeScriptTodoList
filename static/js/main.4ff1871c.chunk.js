(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={todoWrapper:"TodoInput_todoWrapper__Exh6I",form:"TodoInput_form__3hlvt",btn:"TodoInput_btn__1F4cZ",span:"TodoInput_span__29UBg",errorSpan:"TodoInput_errorSpan__AbmWJ"}},function(e,t,n){e.exports={todoWrapper:"Affairs_todoWrapper__2BIel",checkbox:"Affairs_checkbox__Ohjv1",title:"Affairs_title__2gRVU",refactorButton:"Affairs_refactorButton__1ouoI",deleteButton:"Affairs_deleteButton__3RJjV",active:"Affairs_active__1fnEa"}},,function(e,t,n){e.exports={todoWrapper:"TodoAffairs_todoWrapper__2dlvy",active:"TodoAffairs_active__RBRlY",tasks:"TodoAffairs_tasks__1fz1s",title:"TodoAffairs_title__3-zu-",input:"TodoAffairs_input__3wgSP"}},function(e,t,n){e.exports={todoWrapper:"SupperButton_todoWrapper__14j--",redBtn:"SupperButton_redBtn__6fai5",common:"SupperButton_common__2hrGu",activeBtn:"SupperButton_activeBtn__EU8FB"}},,,,function(e,t,n){e.exports={todoWrapper:"SupperInput_todoWrapper__29Xn_",common:"SupperInput_common__3pE08",errorInput:"SupperInput_errorInput__3DQ6j"}},,,function(e,t,n){e.exports={common:"EditablSpan_common__2dl0o",done:"EditablSpan_done__3eaMz"}},,,function(e,t,n){},,,,function(e,t,n){e.exports={todoWrapper:"TodoButtons_todoWrapper__1vLn6",activeBtn:"TodoButtons_activeBtn__VRYa2"}},,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),r=n(20),i=n.n(r),s=(n(32),n(12)),d=n(2),l=n(6),u=n(4),j=(n(33),n(10)),f=n.n(j),p=n(7),b=n.n(p),O=n(5),h=n(15),_=n.n(h),m=function(e){var t=e.onChangeText,n=e.error,c=e.onChange,o=(e.type,Object(O.a)(e,["onChangeText","error","onChange","type"])),r="".concat(_.a.common," ").concat(n&&_.a.errorInput);return Object(a.jsx)("div",{className:_.a.todoWrapper,children:Object(a.jsx)("input",Object(d.a)({type:"text",onChange:function(e){c&&c(e),t&&t(e.currentTarget.value)},className:r},o))})},v=n(11),x=n.n(v),T=function(e){var t=e.filter,n=e.red,c=e.children,o=Object(O.a)(e,["filter","red","children"]),r="".concat(x.a.common," ").concat(t?x.a.activeBtn:"").concat(n?x.a.redBtn:"");return Object(a.jsx)("div",{className:x.a.todoWrapper,children:Object(a.jsx)("button",Object(d.a)(Object(d.a)({className:r},o),{},{children:c}))})},g=function(e){var t=e.children,n=e.addItem,o=Object(c.useState)(""),r=Object(u.a)(o,2),i=r[0],s=r[1],d=Object(c.useState)(""),l=Object(u.a)(d,2),j=l[0],f=l[1];return Object(a.jsxs)("div",{className:b.a.todoWrapper,children:[Object(a.jsxs)("div",{className:b.a.form,children:[Object(a.jsx)(m,{error:j,value:i,onChange:function(e){f(""),s(e.currentTarget.value)}}),Object(a.jsx)("div",{className:b.a.btn,children:Object(a.jsx)(T,{onClick:function(){""!==i.trim()?(n(i.trim()),s("")):f("error")},children:t})})]}),Object(a.jsx)("span",{className:"".concat(b.a.span," ").concat(j&&b.a.errorSpan),children:j})]})},k=n(8),B=n.n(k),C=n(21),I=n.n(C),S=function(e){var t=e.onChangeChecked,n=(e.type,e.onChange),c=(e.children,Object(O.a)(e,["onChangeChecked","type","onChange","children"]));return Object(a.jsx)("div",{className:I.a.todoWrapper,children:Object(a.jsx)("label",{children:Object(a.jsx)("input",Object(d.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)}},c))})})},D=n(18),N=n.n(D),W=function(e){var t=e.doneMode,n=e.changeValue,o=e.title,r=Object(c.useState)(!1),i=Object(u.a)(r,2),s=i[0],d=i[1],l=Object(c.useState)(o),j=Object(u.a)(l,2),f=j[0],p=j[1];return s?Object(a.jsx)("input",{onChange:function(e){p(e.currentTarget.value)},value:f,onBlur:function(){d(!1),n(f)},autoFocus:!0,type:"text"}):Object(a.jsx)("span",{className:"".concat(N.a.common," ").concat(t?N.a.done:""),onDoubleClick:function(){d(!0)},children:o})},A=n(24),F=n.n(A),y=n(22),E=n.n(y),L=function(e){var t=e.changeTaskTitle,n=e.todoID,c=e.changeTaskStatus,o=e.deleteCallBack,r=e.task,i=(Object(O.a)(e,["changeTaskTitle","todoID","changeTaskStatus","deleteCallBack","task"]),function(){o(r.id,n)});return Object(a.jsxs)("div",{className:B.a.todoWrapper,children:[Object(a.jsx)("span",{className:B.a.checkbox,children:Object(a.jsx)(S,{checked:r.isDone,onChange:function(e){c(r.id,e.currentTarget.checked,n)}})}),Object(a.jsx)("p",{className:B.a.title,children:Object(a.jsx)(W,{doneMode:r.isDone,changeValue:function(e){t(r.id,e,n)},title:r.name})}),Object(a.jsxs)("div",{className:B.a.refactorButton,children:[Object(a.jsx)(T,{red:!0,onClick:i,children:" "}),Object(a.jsx)(E.a,{})]}),Object(a.jsxs)("div",{className:B.a.deleteButton,children:[Object(a.jsx)(T,{red:!0,onClick:i,children:" "}),Object(a.jsx)(F.a,{})]})]})},R=n(25),V=n.n(R),J=function(e){var t=e.filter,n=e.todoID,c=e.changeFilter;return Object(a.jsxs)("div",{className:V.a.todoWrapper,children:[Object(a.jsx)(T,{filter:"all"===t,onClick:function(){c("all",n)},children:"all"}),Object(a.jsx)(T,{filter:"complete"===t,onClick:function(){c("complete",n)},children:"complete"}),Object(a.jsx)(T,{filter:"active"===t,onClick:function(){c("active",n)},children:"active"})]})},M=function(e){var t=e.filter,n=e.changeTaskTitle,c=e.title,o=(e.removeTodoList,e.todoID),r=e.tasks,i=e.changeTaskStatus,s=e.addTask,d=e.deleteCallBack,l=e.changeFilter;return Object(a.jsxs)("div",{className:f.a.todoWrapper,children:[Object(a.jsx)("h3",{className:f.a.title,children:c}),Object(a.jsx)("div",{className:f.a.input,children:Object(a.jsx)(g,{addItem:function(e){s(e,o)},children:"addTask"})}),Object(a.jsx)("div",{className:f.a.tasks,children:r.map((function(e){return Object(a.jsx)(L,{changeTaskTitle:n,changeTaskStatus:i,task:e,todoID:o,deleteCallBack:d},e.id)}))}),Object(a.jsx)(J,{filter:t,todoID:o,changeFilter:l})]})},w=n(52);var z=function(){var e,t=Object(w.a)(),n=Object(w.a)(),o=Object(c.useState)([{id:t,title:"What to learn",filter:"all"},{id:n,title:"What to eat",filter:"all"}]),r=Object(u.a)(o,2),i=r[0],j=r[1],f=Object(c.useState)((e={},Object(l.a)(e,t,[{id:Object(w.a)(),name:"React",isDone:!1},{id:Object(w.a)(),name:"Html",isDone:!1},{id:Object(w.a)(),name:"Css",isDone:!1},{id:Object(w.a)(),name:"Games",isDone:!0}]),Object(l.a)(e,n,[{id:Object(w.a)(),name:"React",isDone:!1},{id:Object(w.a)(),name:"Html",isDone:!1},{id:Object(w.a)(),name:"Css",isDone:!1},{id:Object(w.a)(),name:"Games",isDone:!0}]),e)),p=Object(u.a)(f,2),b=p[0],O=p[1],h=function(e,t,n){var a=b[n].find((function(t){return t.id===e}));a&&(a.isDone=t,O(Object(d.a)({},b)))},_=function(e,t,n){var a=b[n].find((function(t){return t.id===e}));a&&(a.name=t,O(Object(d.a)({},b)))},m=function(e,t){var n=i.find((function(e){return e.id===t}));n&&(n.filter=e),j(Object(s.a)(i))},v=function(e,t){var n=i.find((function(e){return e.id===t}));n&&(n.title=e),j(Object(s.a)(i))},x=function(e,t){var n=b[t];b[t]=n.filter((function(t){return t.id!==e})),O(Object(d.a)({},b))},T=function(e){var t=i.filter((function(t){return t.id!==e}));j(t),delete b[e],O(Object(d.a)({},b))},k=function(e,t){var n={id:Object(w.a)(),name:e,isDone:!1};b[t]=[n].concat(Object(s.a)(b[t])),O(Object(d.a)({},b))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"createTodo",children:Object(a.jsx)(g,{addItem:function(e){var t=Object(w.a)(),n={id:t,title:e,filter:"all"};j((function(e){return[].concat(Object(s.a)(e),[n])})),O((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},t,[]))}))},children:"addTodo"})}),Object(a.jsx)("div",{className:"todoLists",children:i.map((function(e){var t=b[e.id];return"complete"===e.filter&&(t=b[e.id].filter((function(e){return!0===e.isDone}))),"active"===e.filter&&(t=b[e.id].filter((function(e){return!1===e.isDone}))),Object(a.jsx)("div",{children:Object(a.jsx)(M,{todoID:e.id,title:e.title,filter:e.filter,tasks:t,changeFilter:m,deleteCallBack:x,addTask:k,changeTaskStatus:h,removeTodoList:T,changeTaskTitle:_,changeTodoListTitle:v},e.id)})}))})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),G()}],[[40,1,2]]]);
//# sourceMappingURL=main.4ff1871c.chunk.js.map