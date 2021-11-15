(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__j9GoR",input:"Filter_input__3caON"}},19:function(t,e,n){},2:function(t,e,n){t.exports={label:"ContactForm_label__z-VOr",input:"ContactForm_input__3ftjK",button:"ContactForm_button__1Mk5Z"}},21:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(11),o=n.n(s),r=(n(19),n(14)),i=n(4),l=n(5),u=n(7),b=n(6),d=n(12),m=n(2),h=n.n(m),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:h.a.label,children:["Name:",Object(j.jsx)("input",{type:"text",name:"name",className:h.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:h.a.label,children:["Phone:",Object(j.jsx)("input",{type:"tel",name:"number",className:h.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",className:h.a.button,children:"ADD CONTACT"})]})}}]),n}(a.Component),f=p,O=n(9),C=n.n(O),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{children:[a,": ",c,Object(j.jsx)("button",{className:C.a.deleteButton,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=n(10),x=n.n(g),_=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:x.a.label,children:["Filter"," ",Object(j.jsx)("input",{type:"text",className:x.a.input,value:e,onChange:n})]})},S=(n(21),n(13)),y=n.n(S),N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(t){console.log(t)},t.addContact=function(e){var n=e.name,a=e.number,c={id:y.a.generate(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?alert("".concat(c.name," is already in contacts!")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(r.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(_,{value:this.state.filter,onChange:this.changeFilter}),Object(j.jsx)(v,{contacts:t,onDeleteContact:this.deleteContact})]})})}}]),n}(a.Component),k=N;o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"ContactList_list__2ViPv",deleteButton:"ContactList_deleteButton__3ON2q"}}},[[30,1,2]]]);
//# sourceMappingURL=main.239dfe91.chunk.js.map