(this["webpackJsonpnorn-notifications"]=this["webpackJsonpnorn-notifications"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(15),c=n.n(r),o=(n(93),n(8)),i=(n(32),n(138)),l=n(135),j=n(139),d=n(27),u=n.p+"static/media/logo.6ce24c58.svg",b=n(2);var h=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d.b,{to:"/",children:Object(b.jsxs)(i.a.Brand,{href:"#home",children:[Object(b.jsx)("img",{alt:"",src:u,width:"30",height:"30",className:"d-inline-block align-top"})," ","React Bootstrap"]})}),Object(b.jsxs)(j.a,{className:"mx-auto",children:[Object(b.jsx)(d.b,{to:"/login",children:Object(b.jsx)(j.a.Link,{href:"#login",children:"Login"})}),Object(b.jsx)(d.b,{to:"/register",children:Object(b.jsx)(j.a.Link,{href:"#Register",children:"Register"})}),Object(b.jsx)(d.b,{to:"/secret",children:Object(b.jsx)(j.a.Link,{href:"#Secret",children:"Secret"})}),Object(b.jsx)(d.b,{to:"/user",children:Object(b.jsx)(j.a.Link,{href:"#User",children:"User"})})]})]})})})},m=n(4),p=n(5),O=n(11),f=n(141),x=n(136),g=n(137);var y=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Home"}),Object(b.jsxs)(f.a,{onClose:function(){return s(!1)},show:n,delay:3e3,autohide:!0,animation:!0,style:{position:"absolute",top:20,right:20},children:[Object(b.jsxs)(f.a.Header,{children:[Object(b.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),Object(b.jsx)("strong",{className:"mr-auto",children:"Notification"}),Object(b.jsx)("small",{children:"12 mins ago"})]}),Object(b.jsx)(f.a.Body,{children:"There are some new updates that you might love!"})]}),Object(b.jsx)(x.a,{children:Object(b.jsx)(g.a,{onClick:function(){s(!0)},children:"Suscribe for notifications"})})]})},v=n(140),w=n(83),S=Object(w.createAuthProvider)({accessTokenKey:"access_token",onUpdateToken:function(e){return fetch("/api/users/refresh",{method:"POST",body:e.access_token}).then((function(e){return e.json()}))}}),N=Object(o.a)(S,4),k=N[0],C=N[1],I=N[2],P=N[3],T=n(66);var A=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),c=Object(o.a)(r,2),i=c[0],l=c[1],j=k(),d=Object(o.a)(j,1)[0];return Object(b.jsx)("div",{className:"grid-login",children:d?Object(b.jsx)(g.a,{onClick:function(){return P()},children:"Logout"}):Object(b.jsxs)(v.a,{action:"#",children:[Object(b.jsx)(v.a.Group,{className:"mb-3",controlId:"formBasicInput",children:Object(b.jsx)(v.a.Control,{type:"text",name:"username",placeholder:"Username",onChange:function(e){s(e.target.value)}})}),Object(b.jsx)(v.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(b.jsx)(v.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:function(e){l(e.target.value)}})}),Object(b.jsx)(g.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),console.log("You pressed login");var t=localStorage.getItem("token_fcm"),a={username:n,password:i,token_fcm:t};console.log(a),fetch("api/users/login",{method:"post",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){e.access_token?(I(e),console.log(e)):console.log("Please type in correct username/password")}))},children:"Login Now"})]})})};var E=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){C("/api/users/protected").then((function(e){return 401===e.status?(s("Sorry you aren't authorized!"),null):e.json()})).then((function(e){e&&e.message&&s(e.message)}))}),[]),Object(b.jsxs)("h2",{children:["Secret: ",n]})},_=n(10),F=n.n(_),z=n(20),G=n(7),L=n(33),B=n(34),D=n(45),U=n(42),M=n(85),R=(n.n(M).a.create({baseURL:"http://127.0.0.1:5000/"}),function(e){Object(D.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(L.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={nombre:"",email:"",password:""},e.handleChange=function(t){e.setState(Object(G.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(z.a)(F.a.mark((function t(n){var a,s;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=new FormData,"",s=localStorage.getItem("token_fcm"),a.append("username",e.state.nombre),a.append("password",e.state.password),a.append("email",e.state.email),a.append("role","graduate"),a.append("is_active",0),a.append("token_fcm",s),console.log("data noti now"),console.log(s),console.log(e.state.nombre),fetch("/api/users/create",{method:"POST",body:a}).then((function(e){return console.log("this is reponse, first aproach"),401===e.status?(console.log("Sorry you aren't authorized!"),null):403===e.status?(console.log("Sorry you aren't authorized how admin!"),null):e.json()})).then((function(e){e&&console.log(e)}));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(B.a)(n,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(v.a,{method:"POST",onSubmit:this.handleSubmit,children:[Object(b.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicInput",children:[Object(b.jsx)(v.a.Label,{children:"Username"}),Object(b.jsx)(v.a.Control,{type:"text",name:"nombre",placeholder:"Username",onChange:this.handleChange})]}),Object(b.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicInput",children:[Object(b.jsx)(v.a.Label,{children:"Email"}),Object(b.jsx)(v.a.Control,{type:"email",name:"email",placeholder:"Email",onChange:this.handleChange}),Object(b.jsx)(v.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(v.a.Label,{children:"Password"}),Object(b.jsx)(v.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(s.a.Component)),J=n(61),K=n(62),q=n(28),W=n(84),H={Admin:"admin",Graduate:"graduate",Company:"company"},V=n.p+"static/media/noimg.3ca0dfab.jpg",Q=function(e){Object(D.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(L.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,modalShow:!1,form:{id:"",username:"",password:"",email:"",name:"",img:"",role:"",is_active:"",tipoModal:""},page:{search:null,ini:0,end:10},file:null,LIMIT_PER_PAGE:10},e.handleInputChange=function(){var t=Object(z.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({file:n.target.files[0]});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.peticionGet=function(){C("/api/users/page",{method:"POST",body:JSON.stringify(e.state.page)}).then((function(e){return console.log("this is reponse, first aproach"),401===e.status?(console.log("Sorry you aren't authorized!"),null):403===e.status?(console.log("Sorry you aren't authorized how admin!"),null):e.json()})).then((function(t){t&&e.setState({data:t})}))},e.peticionPost=Object(z.a)(F.a.mark((function t(){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=new FormData).append("img",e.state.file),n.append("username",e.state.form.username),n.append("password",e.state.form.password),n.append("email",e.state.form.email),n.append("name",e.state.form.name),n.append("role",e.state.form.role),n.append("is_active",0),console.warn(n),C("/api/users/create",{method:"POST",body:n}).then((function(e){return console.log("this is reponse, first aproach"),401===e.status?(console.log("Sorry you aren't authorized!"),null):403===e.status?(console.log("Sorry you aren't authorized how admin!"),null):e.json()})).then((function(t){t&&(e.modalInsertar(),e.peticionGet())}));case 10:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("img",e.state.file),t.append("username",e.state.form.username),t.append("password",e.state.form.password),t.append("email",e.state.form.email),t.append("name",e.state.form.name),t.append("role",e.state.form.role),C("/api/users/".concat(e.state.form.id,"/edit"),{method:"PUT",body:t}).then((function(e){return console.log("this is reponse, first aproach"),401===e.status?(console.log("Sorry you aren't authorized!"),null):403===e.status?(console.log("Sorry you aren't authorized how admin!"),null):e.json()})).then((function(t){t&&(e.modalInsertar(),e.peticionGet())}))},e.peticionDelete=function(){C("/api/users/".concat(e.state.form.id),{method:"DELETE"}).then((function(e){return console.log("this is reponse, first aproach"),401===e.status?(console.log("Sorry you aren't authorized!"),null):403===e.status?(console.log("Sorry you aren't authorized how admin!"),null):e.json()})).then((function(t){t&&(e.setState({modalEliminar:!1}),e.peticionGet())}))},e.handleActiveUser=function(t){C("/api/users/".concat(t,"/active"),{method:"GET"}).then((function(e){return console.log("this is reponse, first aproach"),401===e.status?(console.log("Sorry you aren't authorized!"),null):403===e.status?(console.log("Sorry you aren't authorized how admin!"),null):e.json()})).then((function(t){t&&e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionaruser=function(t){console.log("This is update: ----"),console.log(t.role),console.log(t.name),e.setState({tipoModal:"actualizar",form:{id:t.id,username:t.username,password:t.password,email:t.email,name:t.name,role:t.roles,img:t.img}})},e.handleChange=function(){var t=Object(z.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(m.a)(Object(m.a)({},e.state.form),{},Object(G.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSearch=function(){var t=Object(z.a)(F.a.mark((function t(n){var a,s,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=n.target,s=a.search.value,console.log(s),r={search:{username:s,email:s,name:s},ini:0,end:10},e.setState({page:r}),t.next=8,C("/api/users/page",{method:"POST",body:JSON.stringify(r)}).then((function(e){return console.log("this is reponse, first aproach"),401===e.status?(console.log("Sorry you aren't authorized!"),null):403===e.status?(console.log("Sorry you aren't authorized how admin!"),null):e.json()})).then((function(t){t&&(e.setState({data:t}),console.log(e.state.data.length))}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.resetPassword=function(){e.setState({form:Object(m.a)(Object(m.a)({},e.state.form),{},{password:""})})},e.handlePageBefore=function(){var t=Object(z.a)(F.a.mark((function t(n){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),a=e.state.page.ini-10,t.next=4,e.setState({page:Object(m.a)(Object(m.a)({},e.state.page),{},{ini:a,end:10})});case 4:e.peticionGet();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlePageAfter=function(){var t=Object(z.a)(F.a.mark((function t(n){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),a=e.state.page.ini+10,t.next=4,e.setState({page:Object(m.a)(Object(m.a)({},e.state.page),{},{ini:a,end:10})});case 4:e.peticionGet();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar user"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(x.a,{children:Object(b.jsxs)("form",{onSubmit:this.handleSearch,children:[Object(b.jsx)("input",{className:"form-control",type:"text",placeholder:"...search",name:"search"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary active m-1",children:"search"}),Object(b.jsx)("button",{type:"reset",className:"btn btn-secondary active",children:"Limpiar"})]})}),Object(b.jsx)(x.a,{children:Object(b.jsx)(W.a,{children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"id"}),Object(b.jsx)("th",{scope:"col",children:"Username"}),Object(b.jsx)("th",{scope:"col",children:"Email"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Roles"}),Object(b.jsx)("th",{scope:"col",children:"Active"}),Object(b.jsx)("th",{scope:"col",children:"Options"})]})}),Object(b.jsx)("tbody",{children:this.state.data.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:t.id}),Object(b.jsx)("td",{children:t.username}),Object(b.jsx)("td",{children:t.email}),Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.roles}),Object(b.jsxs)("td",{children:[console.log("user active:"+t.is_active),Object(b.jsx)("button",{className:!0===t.is_active?"btn btn-success":"btn btn-danger",onClick:function(){e.handleActiveUser(t.id)},children:"active"})]}),Object(b.jsxs)("td",{children:["   ",Object(b.jsx)("button",{className:"btn btn-warning",onClick:function(){e.seleccionaruser(t),e.setState({modalShow:!0})},children:Object(b.jsx)(J.a,{icon:K.b})}),"   ",Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionaruser(t),e.modalInsertar()},children:Object(b.jsx)(J.a,{icon:K.a})}),"   ",Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionaruser(t),e.setState({modalEliminar:!0})},children:Object(b.jsx)(J.a,{icon:K.c})})]})]})}))})]})})}),Object(b.jsxs)(x.a,{children:[Object(b.jsxs)(W.a,{children:[Object(b.jsx)("button",{className:"btn btn-outline-info",disabled:0===this.state.page.ini,onClick:this.handlePageBefore,children:"Anterior"}),Object(b.jsx)("button",{className:"btn btn-outline-info",disabled:this.state.data.length<this.state.LIMIT_PER_PAGE,onClick:this.handlePageAfter,children:"Siguiente"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)(q.a,{isOpen:this.state.modalInsertar,children:[Object(b.jsx)(q.d,{style:{display:"block"},children:Object(b.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(b.jsx)(q.b,{children:Object(b.jsx)("form",{action:"#",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"id",children:"ID"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"username",id:"username",onChange:this.handleChange,value:t?t.username:"",required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{className:"form-control",type:"password",name:"password",id:"password",onChange:this.handleChange,value:t?t.password:"",required:!0}),"insertar"==this.state.tipoModal?null:Object(b.jsx)("button",{className:"btn btn-primary",onClick:this.resetPassword,children:"clear"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{className:"form-control",type:"email",name:"email",id:"email",onChange:this.handleChange,value:t?t.email:"",required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"name",children:"name"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"name",id:"name",onChange:this.handleChange,value:t?t.name:""}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"role",children:"role"}),Object(b.jsxs)("select",{className:"form-control",name:"role",id:"role",value:t?t.role:"",onChange:this.handleChange,children:[Object(b.jsx)("option",{value:"",children:"Selected a Role"}),Object.keys(H).map((function(e,t){return Object(b.jsx)("option",{value:H[e],children:H[e]})}))]}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"img",children:"Img"}),Object(b.jsx)("br",{}),"insertar"==this.state.tipoModal?Object(b.jsx)("input",{className:"form-control",type:"file",name:"img",id:"img",onChange:this.handleInputChange}):Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{className:"form-control",type:"file",name:"img",id:"img",onChange:this.handleInputChange}),Object(b.jsx)("img",{src:t.img?t.img:V,className:"rounded-circle",width:"300",alt:"img"})]})]})})}),Object(b.jsxs)(q.c,{children:["insertar"==this.state.tipoModal?Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(b.jsxs)(q.a,{isOpen:this.state.modalEliminar,children:[Object(b.jsxs)(q.b,{children:["Est\xe1s seguro que deseas eliminar al usuario ",Object(b.jsx)("strong",{children:t&&t.email})]}),Object(b.jsxs)(q.c,{children:[Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(b.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]}),Object(b.jsx)(q.a,{isOpen:this.state.modalShow,children:Object(b.jsx)(q.b,{className:"modal-show",children:Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:Object(b.jsx)("div",{className:"card p-3 py-4",children:Object(b.jsxs)("div",{className:"text-center",children:[" ",Object(b.jsx)("img",{src:t&&t.img?t.img:V,width:"100",class:"rounded-circle"}),Object(b.jsx)("h3",{className:"mt-2",children:t&&t.name})," ",Object(b.jsx)("span",{className:"mt-1 clearfix",children:t&&t.email}),Object(b.jsxs)("div",{className:"row mt-3 mb-3",children:[Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("h5",{children:t&&t.username})," ",Object(b.jsx)("span",{className:"num",children:"username"})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("h5",{children:t&&t.role})," ",Object(b.jsx)("span",{className:"num",children:"role"})]})]}),Object(b.jsxs)("div",{className:"profile mt-5",children:[" ",Object(b.jsx)("button",{className:"profile_button px-5",onClick:function(){return e.setState({modalShow:!1})},children:"OK"})," "]})]})})})})})]})}}]),n}(a.Component),Z=Q,Y=["component","roles"];var X=function(){var e=function(e){var t=e.component,n=e.roles,a=Object(p.a)(e,Y),s=k(),r=Object(o.a)(s,1)[0],c=JSON.parse(localStorage.getItem("REACT_TOKEN_AUTH_KEY")),i=Object(T.a)(c.access_token);return r?n&&-1===n.indexOf(i.rls)?Object(b.jsx)(O.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return Object(b.jsx)(O.a,{to:"/"})}})):Object(b.jsx)(O.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return Object(b.jsx)(t,Object(m.a)({},e))}})):Object(b.jsx)(O.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return Object(b.jsx)(O.a,{to:"/login"})}}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{path:"/",exact:!0,component:y}),Object(b.jsx)(O.b,{path:"/login",exact:!0,component:A}),Object(b.jsx)(O.b,{path:"/register",exact:!0,component:R}),Object(b.jsx)(e,{path:"/secret",roles:[H.Graduate,H.Admin],exact:!0,component:E}),Object(b.jsx)(e,{path:"/user",roles:[H.Admin],exact:!0,component:Z})]})})};var $=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("footer",{children:Object(b.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(b.jsx)(l.a,{children:Object(b.jsx)(j.a,{className:"me-auto",children:Object(b.jsx)(j.a.Link,{href:"#home",children:"Development with \u2764\ufe0f by Norn"})})})})})})},ee=n(68);n(128);ee.a.initializeApp({apiKey:"AIzaSyBoeRW_MhDwEOuu_3UxQIIJ6FF_JfAAfD4",authDomain:"zero-norn.firebaseapp.com",projectId:"zero-norn",storageBucket:"zero-norn.appspot.com",messagingSenderId:"397330300244",appId:"1:397330300244:web:0f5af72452fae1b6149cc1",measurementId:"G-XQ6TB8MVK1"});var te=ee.a.messaging(),ne=function(){var e=Object(z.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.prev=1,e.next=4,te.getToken({vapidKey:"BC5nOvGPPuPJjZV0Wf8843a7afRs_apk6x77se8GEiGeMn2K8Jmg7Zzi-wAWlUOaqGr8Jp7oepVjeCWaRTVnUZQ"});case 4:n=e.sent,t(!!n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("An error occurred while retrieving token. ",e.t0);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1];return console.log("Token found",s),Object(a.useEffect)((function(){var e;function t(){return(t=Object(z.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(r);case 2:return(e=t.sent)&&(console.log("Token is",e),localStorage.setItem("token_fcm",e)),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r]),Object(b.jsx)(b.Fragment,{})};ae.propTypes={};var se=ae,re=n(70),ce=(n(125),function(e){var t=e.title,n=e.body;function a(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t}),Object(b.jsx)("p",{children:n})]})}return""===t||re.b.info(Object(b.jsx)(a,{})),Object(b.jsx)(re.a,{autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!1})});ce.defaultProps={title:"This is title",body:"Some body"};var oe=ce;var ie=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)({title:"",body:""}),c=Object(o.a)(r,2),i=c[0],l=c[1];return console.log(n,i),new Promise((function(e){te.onMessage((function(t){e(t)}))})).then((function(e){s(!0),l({title:e.notification.title,body:e.notification.body}),console.log(e)})).catch((function(e){return console.log("failed: ",e)})),Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"App",children:[n?Object(b.jsx)(oe,{title:i.title,body:i.body}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)(se,{}),Object(b.jsx)(h,{}),Object(b.jsx)(X,{}),Object(b.jsx)($,{})]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};n(126);c.a.render(Object(b.jsx)(ie,{}),document.getElementById("root")),le()},32:function(e,t,n){},93:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.69786d6b.chunk.js.map