(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),o=(n(15),n(16),n(3)),i=n(4),l=n(6),h=n(5),b=(n(17),n(10)),d=n(9),m=n(2),u=n.n(m),j=n(21),O=n(0),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={contactsPhone:null,contactsOll:[],filter:"",name:"",number:""},e.hendleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.hendleSubmit=function(t){t.preventDefault();var n={name:e.state.name,number:e.state.number};e.setState({contactsPhone:n}),e.setState((function(e){return{contactsOll:[].concat(Object(b.a)(e.contactsOll),[n])}})),e.resetForm()},e.resetForm=function(){e.setState({name:" ",number:" "})},e.contactIdName=Object(j.a)(),e.contactIdNumber=Object(j.a)(),e}return Object(i.a)(n,[{key:"render",value:function(){return console.log(this.state.name,this.state.number),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{onSubmit:this.hendleSubmit,children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsxs)("div",{className:u.a.addBlock,children:[Object(O.jsxs)("label",{htmlFor:this.contactIdName,className:u.a.name,children:["Name",Object(O.jsx)("input",{id:this.contactIdName,onChange:this.hendleChange,type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)("label",{htmlFor:this.contactIdNumber,className:u.a.name,children:["Number",Object(O.jsx)("input",{id:this.contactIdNumber,onChange:this.hendleChange,type:"tel",value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)("button",{type:"submit",children:"Add"})]})]}),Object(O.jsxs)("div",{className:u.a.search,children:[Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)("ul",{className:"contacts__list"})]})]})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(p,{})})}}]),n}(a.Component);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={title:"Phonebook_title__2qWM4",addBlock:"Phonebook_addBlock__3_H4F",name:"Phonebook_name__2Wp6l",search:"Phonebook_search__xnP1n"}}},[[19,1,2]]]);
//# sourceMappingURL=main.1f3256e5.chunk.js.map