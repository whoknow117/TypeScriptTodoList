(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{11:function(e,t,n){e.exports={todoWrapper:"SupperButton_todoWrapper__14j--",redBtn:"SupperButton_redBtn__6fai5",common:"SupperButton_common__2hrGu",activeBtn:"SupperButton_activeBtn__EU8FB"}},15:function(e,t,n){e.exports={todoWrapper:"SupperInput_todoWrapper__29Xn_",common:"SupperInput_common__3pE08",errorInput:"SupperInput_errorInput__3DQ6j"}},16:function(e,t,n){e.exports={todoWrapper:"Affairs_todoWrapper__2BIel",checkbox:"Affairs_checkbox__Ohjv1",title:"Affairs_title__2gRVU",refactorButton:"Affairs_refactorButton__1ouoI",deleteButton:"Affairs_deleteButton__3RJjV",active:"Affairs_active__1fnEa"}},21:function(e,t,n){},25:function(e,t,n){e.exports={todoWrapper:"TodoButtons_todoWrapper__1vLn6",activeBtn:"TodoButtons_activeBtn__VRYa2"}},32:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),r=n(20),i=n.n(r),s=(n(32),n(12)),l=n(2),d=n(10),u=n(4),j=(n(33),n(6)),f=n.n(j),p=n(8),b=n.n(p),_=n(5),h=n(15),O=n.n(h),m=function(e){var t=e.onEnter,n=e.onKeyPress,c=e.onChangeText,o=e.error,r=e.onChange,i=(e.type,Object(_.a)(e,["onEnter","onKeyPress","onChangeText","error","onChange","type"])),s="".concat(O.a.common," ").concat(o&&O.a.errorInput);return Object(a.jsx)("div",{className:O.a.todoWrapper,children:Object(a.jsx)("input",Object(l.a)(Object(l.a)({type:"text",onChange:function(e){r&&r(e),c&&c(e.currentTarget.value)},className:s},i),{},{onKeyPress:function(e){n&&n(e),"Enter"===e.key&&t&&t()}}))})},v=n(11),x=n.n(v),k=function(e){var t=e.filter,n=e.red,c=e.children,o=Object(_.a)(e,["filter","red","children"]),r="".concat(x.a.common," ").concat(t?x.a.activeBtn:"").concat(n?x.a.redBtn:"");return Object(a.jsx)("div",{className:x.a.todoWrapper,children:Object(a.jsx)("button",Object(l.a)(Object(l.a)({className:r},o),{},{children:c}))})},T=function(e){var t=e.children,n=e.addItem,o=Object(c.useState)(""),r=Object(u.a)(o,2),i=r[0],s=r[1],l=Object(c.useState)(""),d=Object(u.a)(l,2),j=d[0],f=d[1],p=function(){""!==i.trim()?(n(i.trim()),s("")):f("Enter something")};return Object(a.jsxs)("div",{className:b.a.todoWrapper,children:[Object(a.jsxs)("div",{className:b.a.form,children:[Object(a.jsx)(m,{onEnter:p,error:j,value:i,onChange:function(e){f(""),s(e.currentTarget.value)}}),Object(a.jsx)("div",{className:b.a.btn,children:Object(a.jsx)(k,{onClick:p,children:t})})]}),Object(a.jsx)("span",{className:"".concat(b.a.span," ").concat(j&&b.a.errorSpan),children:j})]})},g=n(16),B=n.n(g),C=n(21),I=n.n(C),S=function(e){var t=e.onChangeChecked,n=(e.type,e.onChange),c=(e.children,Object(_.a)(e,["onChangeChecked","type","onChange","children"]));return Object(a.jsx)("div",{className:I.a.todoWrapper,children:Object(a.jsx)("label",{children:Object(a.jsx)("input",Object(l.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)}},c))})})},N=n(7),D=n.n(N),W=n(22),E=n.n(W),y=n(24),A=n.n(y),F=function(e){var t=e.task,n=e.deleteCallBack,o=e.todoID,r=e.doneMode,i=e.changeValue,s=e.title,l=Object(c.useState)(!1),d=Object(u.a)(l,2),j=d[0],f=d[1],p=Object(c.useState)(s),b=Object(u.a)(p,2),_=b[0],h=b[1],O=function(){f(!0)},m=function(){f(!1),i(_)};return Object(a.jsxs)("div",{className:D.a.wrapper,children:[j?Object(a.jsx)("input",{onChange:function(e){h(e.currentTarget.value)},className:D.a.input,value:_,onKeyPress:function(e){"Enter"===e.key&&m()},onBlur:m,autoFocus:!0,type:"text"}):Object(a.jsx)("span",{className:"".concat(D.a.common," ").concat(r?D.a.done:""),onDoubleClick:O,children:s}),Object(a.jsxs)("div",{className:D.a.refactorButton,children:[Object(a.jsx)(k,{onClick:O}),Object(a.jsx)(E.a,{})]}),Object(a.jsxs)("div",{className:D.a.deleteButton,children:[Object(a.jsx)(k,{onClick:function(){n(t.id,o)}}),Object(a.jsx)(A.a,{})]})]})},L=function(e){e.taskID;var t=e.changeTaskTitle,n=e.todoID,c=e.changeTaskStatus,o=e.deleteCallBack,r=e.task;Object(_.a)(e,["taskID","changeTaskTitle","todoID","changeTaskStatus","deleteCallBack","task"]);return Object(a.jsxs)("div",{className:B.a.todoWrapper,children:[Object(a.jsx)("span",{className:B.a.checkbox,children:Object(a.jsx)(S,{checked:r.isDone,onChange:function(e){c(r.id,e.currentTarget.checked,n)}})}),Object(a.jsx)("p",{className:B.a.title,children:Object(a.jsx)(F,{task:r,todoID:n,deleteCallBack:o,doneMode:r.isDone,changeValue:function(e){t(r.id,e,n)},title:r.name})})]})},R=n(25),P=n.n(R),w=function(e){var t=e.filter,n=e.todoID,c=e.changeFilter;return Object(a.jsxs)("div",{className:P.a.todoWrapper,children:[Object(a.jsx)(k,{filter:"all"===t,onClick:function(){c("all",n)},children:"all"}),Object(a.jsx)(k,{filter:"complete"===t,onClick:function(){c("complete",n)},children:"complete"}),Object(a.jsx)(k,{filter:"active"===t,onClick:function(){c("active",n)},children:"active"})]})},K=function(e){var t=e.filter,n=e.changeTaskTitle,c=e.title,o=(e.removeTodoList,e.todoID),r=e.tasks,i=e.changeTaskStatus,s=e.addTask,l=e.deleteCallBack,d=e.changeFilter,u=r.filter((function(e){return!1===e.isDone})),j=r.filter((function(e){return!0===e.isDone}));return Object(a.jsxs)("div",{className:f.a.todoWrapper,children:[Object(a.jsx)("h3",{className:f.a.title,children:c}),Object(a.jsx)("div",{className:f.a.input,children:Object(a.jsx)(T,{addItem:function(e){s(e,o)},children:"addTask"})}),Object(a.jsx)("div",{className:f.a.tasks,children:r.map((function(e){return Object(a.jsx)(L,{changeTaskTitle:n,taskID:e.id,changeTaskStatus:i,task:e,todoID:o,deleteCallBack:l},e.id)}))}),Object(a.jsx)(w,{filter:t,todoID:o,changeFilter:d}),Object(a.jsxs)("div",{className:f.a.infoBlock,children:[Object(a.jsxs)("span",{className:f.a.info,children:["tasks todo: ",u.length]}),Object(a.jsxs)("span",{className:f.a.info,children:["done t  asks: ",j.length]})]})]})},V=n(52);var X=function(){var e=Object(V.a)(),t=(Object(V.a)(),Object(c.useState)([{id:e,title:"This is just example, get the name your own TodoList higher/\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u044b\u0448\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0421\u043f\u0438\u0441\u043a\u0430 \u0417\u0430\u0434\u0430\u0447",filter:"all"}])),n=Object(u.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)(Object(d.a)({},e,[{id:Object(V.a)(),name:"React",isDone:!1},{id:Object(V.a)(),name:"Html",isDone:!1},{id:Object(V.a)(),name:"Css",isDone:!1},{id:Object(V.a)(),name:"Games",isDone:!0}])),j=Object(u.a)(i,2),f=j[0],p=j[1],b=function(e,t,n){var a=f[n].find((function(t){return t.id===e}));a&&(a.isDone=t,p(Object(l.a)({},f)))},_=function(e,t,n){var a=f[n].find((function(t){return t.id===e}));a&&(a.name=t,p(Object(l.a)({},f)))},h=function(e,t){var n=o.find((function(e){return e.id===t}));n&&(n.filter=e),r(Object(s.a)(o))},O=function(e,t){var n=o.find((function(e){return e.id===t}));n&&(n.title=e),r(Object(s.a)(o))},m=function(e,t){var n=f[t];f[t]=n.filter((function(t){return t.id!==e})),p(Object(l.a)({},f))},v=function(e){var t=o.filter((function(t){return t.id!==e}));r(t),delete f[e],p(Object(l.a)({},f))},x=function(e,t){var n={id:Object(V.a)(),name:e,isDone:!1};f[t]=[n].concat(Object(s.a)(f[t])),p(Object(l.a)({},f))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"createTodo",children:Object(a.jsx)(T,{addItem:function(e){var t=Object(V.a)(),n={id:t,title:e,filter:"all"};r((function(e){return[].concat(Object(s.a)(e),[n])})),p((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(d.a)({},t,[]))}))},children:"addTodo"})}),Object(a.jsx)("div",{className:"todoLists",children:o.map((function(e){var t=f[e.id];return"complete"===e.filter&&(t=f[e.id].filter((function(e){return!0===e.isDone}))),"active"===e.filter&&(t=f[e.id].filter((function(e){return!1===e.isDone}))),Object(a.jsx)("div",{children:Object(a.jsx)(K,{todoID:e.id,title:e.title,filter:e.filter,tasks:t,changeFilter:h,deleteCallBack:m,addTask:x,changeTaskStatus:b,removeTodoList:v,changeTaskTitle:_,changeTodoListTitle:O},e.id)})}))})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(X,{})}),document.getElementById("root")),z()},6:function(e,t,n){e.exports={todoWrapper:"TodoAffairs_todoWrapper__2dlvy",active:"TodoAffairs_active__RBRlY",tasks:"TodoAffairs_tasks__1fz1s",title:"TodoAffairs_title__3-zu-",infoBlock:"TodoAffairs_infoBlock__2kqKR",info:"TodoAffairs_info__1O81Y"}},7:function(e,t,n){e.exports={wrapper:"EditablSpan_wrapper__Tzl53",input:"EditablSpan_input__3_n0c",refactorButton:"EditablSpan_refactorButton__1CyXX",deleteButton:"EditablSpan_deleteButton__XHXER",active:"EditablSpan_active__2t1P0",common:"EditablSpan_common__2dl0o",done:"EditablSpan_done__3eaMz"}},8:function(e,t,n){e.exports={todoWrapper:"TodoInput_todoWrapper__Exh6I",form:"TodoInput_form__3hlvt",btn:"TodoInput_btn__1F4cZ",span:"TodoInput_span__29UBg",errorSpan:"TodoInput_errorSpan__AbmWJ"}}},[[40,1,2]]]);
//# sourceMappingURL=main.79d5cec6.chunk.js.map