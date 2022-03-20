(this["webpackJsonpprime-solo-project"]=this["webpackJsonpprime-solo-project"]||[]).push([[0],{26:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){e.exports=a(89)},70:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=a(16),s=a(5),u=a(42);a(51);var i=Object(o.c)({loginMessage:(e="",t)=>{switch(t.type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";case"PASSWORD_INPUT_ERROR":return"You must enter a password to proceed.";default:return e}},registrationMessage:(e="",t)=>{switch(t.type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}});var p=(e={},t)=>{switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}};var m=(e={},t)=>{switch(t.type){case"SET_USERS":return t.payload;default:return e}};var d=(e=[],t)=>{switch(t.type){case"SET_ART":return t.payload;case"RESET_ART":return[];default:return e}};var E=(e=[],t)=>{switch(console.log("(3)in friendArtReducer"),t.type){case"SET_FRIEND_ART":return t.payload;default:return e}};var h=(e=[],t)=>{switch(console.log("in articReducer"),t.type){case"SET_ARTIC":return t.payload;default:return e}};var g=(e=[],t)=>{switch(t.type){case"SET_FRAME":return t.payload;case"RESET_FRAME":return[];default:return e}};var b=(e=!1,t)=>{switch(console.log("(3)in friendlyReducer"),t.type){case"SET_FRIENDLY":return!0;case"UNSET_FRIENDLY":return!1;default:return e}};var f=Object(o.c)({errors:i,user:p,users:m,art:d,friendArt:E,artic:h,frame:g,friendly:b}),y=a(2),v=a.n(y),O=a(4),w=a(8),T=a.n(w),j=v.a.mark(k),R=v.a.mark(A),x=v.a.mark(S);function k(e){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(O.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,T.a.post("/api/user/login",e.payload,t);case 6:return a.next=8,Object(O.b)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(O.b)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(O.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}}),j,null,[[0,10]])}function A(e){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,T.a.post("/api/user/logout",t);case 4:return e.next=6,Object(O.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}}),R,null,[[0,8]])}function S(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("LOGIN",k);case 2:return e.next=4,Object(O.c)("LOGOUT",A);case 4:case"end":return e.stop()}}),x)}var C=S,_=v.a.mark(N),I=v.a.mark(F);function N(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,T.a.post("/api/user/register",e.payload);case 5:return t.next=7,Object(O.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(O.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(O.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}}),_,null,[[0,11]])}function F(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("REGISTER",N);case 2:case"end":return e.stop()}}),I)}var D=F,U=v.a.mark(G),L=v.a.mark(M),P=v.a.mark(H);function G(){var e,t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,T.a.get("/api/user",e);case 4:return t=a.sent,a.next=7,Object(O.b)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}}),U,null,[[0,9]])}function M(){var e,t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,T.a.get("/api/users",e);case 4:return t=a.sent,a.next=7,Object(O.b)({type:"SET_USERS",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}}),L,null,[[0,9]])}function H(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("FETCH_USER",G);case 2:return e.next=4,Object(O.c)("FETCH_USERS",M);case 4:case"end":return e.stop()}}),P)}var q=H,z=v.a.mark(Z),B=v.a.mark(Q),Y=v.a.mark(X),W=v.a.mark($),K=v.a.mark(ee),V=v.a.mark(te),J=v.a.mark(ae);function Z(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("FETCH_ART",X);case 2:return e.next=4,Object(O.c)("FETCH_FRIEND_ART",$);case 4:return e.next=6,Object(O.c)("LIKE",Q);case 6:return e.next=8,Object(O.c)("ADD_ART",ee);case 8:return e.next=10,Object(O.c)("UPDATE_ART",te);case 10:return e.next=12,Object(O.c)("DELETE_ART",ae);case 12:case"end":return e.stop()}}),z)}function Q(e){var t,a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.payload,console.log("In like*()..."),n.prev=2,t={headers:{"Content-Type":"application/json"},withCredentials:!0},n.next=6,T.a.put("api/art/like/".concat(e.payload),t);case 6:a=n.sent,console.log("response from put like:",a),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.log("Art get request failed",n.t0);case 13:case"end":return n.stop()}}),B,null,[[2,10]])}function X(){var e,t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(O.b)({type:"UNSET_FRIENDLY"});case 2:return console.log("In fetchArtSaga..."),a.prev=3,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=7,T.a.get("api/art",e);case 7:return t=a.sent,a.next=10,Object(O.b)({type:"SET_ART",payload:t.data});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(3),console.log("Art get request failed",a.t0);case 15:case"end":return a.stop()}}),Y,null,[[3,12]])}function $(e){var t,a,n;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("(1)In fetchFriendArtSaga..."),t=e.payload,console.log("(2)artist:",t),r.prev=3,a={headers:{"Content-Type":"application/json"},withCredentials:!0},r.next=7,T.a.get("api/art/".concat(t),a);case 7:return n=r.sent,r.next=10,Object(O.b)({type:"SET_FRIEND_ART",payload:n.data});case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(3),console.log("Art get request failed",r.t0);case 15:return r.next=17,Object(O.b)({type:"SET_FRIENDLY"});case 17:case"end":return r.stop()}}),W,null,[[3,12]])}function ee(e){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("In addArtSaga..."),console.log("payload:",e.payload),a.prev=2,t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,T.a.post("api/art",e.payload,t);case 6:a.sent,a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),console.log("Art get request failed",a.t0);case 12:case"end":return a.stop()}}),K,null,[[2,9]])}function te(e){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("In updateArtSaga..."),console.log("payload:",e.payload),a.prev=2,t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,T.a.put("api/art",e.payload,t);case 6:return a.sent,a.next=9,Object(O.b)({type:"FETCH_ART"});case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.log("Art get request failed",a.t0);case 14:case"end":return a.stop()}}),V,null,[[2,11]])}function ae(e){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("In deleteArtSaga..."),console.log("payload:",e.payload),a.prev=2,t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,T.a.delete("api/art/".concat(e.payload),t);case 6:a.sent,a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),console.log("Art get request failed",a.t0);case 12:case"end":return a.stop()}}),J,null,[[2,9]])}var ne=Z,re=v.a.mark(ce),le=v.a.mark(oe);function ce(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("FETCH_RANDOM",oe);case 2:case"end":return e.stop()}}),re)}function oe(){var e,t,a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("In fetchRandomSaga..."),n.prev=1,e={headers:{"Content-Type":"application/json"},withCredentials:!0},n.next=5,T.a.get("api/artic",e);case 5:return t=n.sent,a=t.data,console.log("randomArt:",a),n.next=10,Object(O.b)({type:"SET_ARTIC",payload:a});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log("Art get request failed",n.t0);case 15:case"end":return n.stop()}}),le,null,[[1,12]])}var se=ce,ue=v.a.mark(he),ie=v.a.mark(ge),pe=v.a.mark(be),me=v.a.mark(fe),de=v.a.mark(ye),Ee=v.a.mark(ve);function he(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("FETCH_FRAME",ge);case 2:return e.next=4,Object(O.c)("FETCH_FRIEND_ART",be);case 4:return e.next=6,Object(O.c)("ADD_FRAME",fe);case 6:return e.next=8,Object(O.c)("UPDATE_ART",ye);case 8:return e.next=10,Object(O.c)("DELETE_ART",ve);case 10:case"end":return e.stop()}}),ue)}function ge(){var e,t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("In fetchFrameSaga..."),a.prev=1,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=5,T.a.get("api/workshop",e);case 5:return t=a.sent,a.next=8,Object(O.b)({type:"SET_FRAME",payload:t.data});case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),console.log("Art get request failed",a.t0);case 13:case"end":return a.stop()}}),ie,null,[[1,10]])}function be(e){var t,a,n;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("(1)In fetchFriendArtSaga..."),t=e.payload,console.log("(2)artist:",t),r.prev=3,a={headers:{"Content-Type":"application/json"},withCredentials:!0},r.next=7,T.a.get("api/art/".concat(t),a);case 7:return n=r.sent,r.next=10,Object(O.b)({type:"SET_FRIEND_ART",payload:n.data});case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(3),console.log("Art get request failed",r.t0);case 15:case"end":return r.stop()}}),pe,null,[[3,12]])}function fe(e){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("In addFrameSaga..."),console.log("payload:",e.payload),a.prev=2,t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,T.a.post("api/workshop",e.payload,t);case 6:return a.sent,a.next=9,Object(O.b)({type:"FETCH_FRAME"});case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.log("Art get request failed",a.t0);case 14:case"end":return a.stop()}}),me,null,[[2,11]])}function ye(e){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("In updateArtSaga..."),console.log("payload:",e.payload),a.prev=2,t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,T.a.put("api/art",e.payload,t);case 6:return a.sent,a.next=9,Object(O.b)({type:"FETCH_ART"});case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.log("Art get request failed",a.t0);case 14:case"end":return a.stop()}}),de,null,[[2,11]])}function ve(e){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("In deleteArtSaga..."),console.log("payload:",e.payload),a.prev=2,t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,T.a.delete("api/art/".concat(e.payload),t);case 6:return a.sent,a.next=9,Object(O.b)({type:"FETCH_ART"});case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.log("Art get request failed",a.t0);case 14:case"end":return a.stop()}}),Ee,null,[[2,11]])}var Oe=he,we=v.a.mark(je),Te=v.a.mark(Re);function je(e){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("In updatePassword*()..."),console.log("payload:",e.payload),a.prev=2,t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,T.a.put("api/settings/password/",e.payload,t);case 6:return a.sent,a.next=9,Object(O.b)({type:"FETCH_ART"});case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.log("Art get request failed",a.t0);case 14:case"end":return a.stop()}}),we,null,[[2,11]])}function Re(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("UPDATE_PASSWORD",je);case 2:case"end":return e.stop()}}),Te)}var xe=Re,ke=v.a.mark(Ae);function Ae(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([C(),D(),q(),ne(),se(),Oe(),xe()]);case 2:case"end":return e.stop()}}),ke)}var Se=a(17),Ce=a(10);class _e extends n.Component{fetchArt(){return{type:"FETCH_ART"}}fetchUser(){return{type:"FETCH_USER"}}}var Ie=new _e("");a(70);var Ne=e=>({store:e});var Fe=Object(s.b)(Ne)(e=>{let t={path:"/login",text:"Login / Register"};return null!=e.store.user.id&&(t.path="",t.text="Logout"),r.a.createElement(Se.a,null,r.a.createElement("ul",{id:"nav-ul"},r.a.createElement("li",null,r.a.createElement(Se.b,{to:"/home",className:"nav-link"},r.a.createElement("span",{id:"home-icon"},"Virtual Gallery"))),r.a.createElement("li",null,r.a.createElement(Se.b,{className:"nav-link",to:t.path,onClick:""!==t.path?null:()=>e.dispatch({type:"LOGOUT"})},r.a.createElement("i",{class:"fa-solid fa-door-open","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},t.text))),r.a.createElement("li",null,r.a.createElement(Se.b,{className:"nav-link",to:"/program"},r.a.createElement("i",{class:"fa-solid fa-solid fa-book-open","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},"Program"))),e.store.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(Se.b,{className:"nav-link",to:"/studio"},r.a.createElement("i",{class:"fa-solid fa-palette","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},"Studio"))),r.a.createElement("li",null,r.a.createElement(Se.b,{className:"nav-link",to:"/forum"},r.a.createElement("i",{class:"fa-solid fa-users","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},"Forum"))))))});a(74);var De=()=>r.a.createElement("footer",null,"\xa9 Joeleen Kado 2022"),Ue=a(43),Le=a(9);a(39);var Pe=Object(s.b)(Ne)(e=>{const t=Object(n.useState)(""),a=Object(Le.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(Le.a)(o,2),u=s[0],i=s[1];return r.a.createElement("span",{id:"login-span"},r.a.createElement("h3",null,"Returning User:"),r.a.createElement("form",{className:"form-panel",onSubmit:function(t){t.preventDefault(),l.length&&u.length?e.dispatch({type:"LOGIN",payload:{username:l,password:u}}):e.dispatch({type:"LOGIN_INPUT_ERROR"})}},e.store.errors.loginMessage&&r.a.createElement("h3",{className:"alert",role:"alert"},e.store.errors.loginMessage),r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",required:!0,value:l,onChange:e=>c(e.target.value),className:"input"})),r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",required:!0,value:u,onChange:e=>i(e.target.value)})),r.a.createElement("input",{className:"btn",type:"submit",name:"submit",value:"Log In"})))});var Ge=Object(s.b)(Ne)(e=>{const t=e.store.artic,a=t.image_id,l=t.title,c=t.artist_display,o=Object(n.useState)(!0),s=Object(Le.a)(o,2),u=s[0],i=s[1];Object(n.useEffect)(()=>{e.dispatch({type:"FETCH_RANDOM"})},[]);const p=()=>i(!u),m=["Gauguin","Picasso","Gogh","Matisse","C\xe9zanne"],d=["\nFrench","\nDutch","\nSpanish"];if(c){const t=c.replace(d,"");let n;function E(e){return n=t.replace(e,"".concat(e,";")),console.log("moreRet:",n)}return console.log("ret:",t),console.log("retFunction():",function(){for(let e=0;e<m.length;e++)if(t.includes(m[e]))return console.log("hooray"),E(m[e]);return console.log("finished")}()),r.a.createElement("section",{id:"login-section"},a?r.a.createElement("div",{id:"master-figure-container"},r.a.createElement("figure",{id:"master-figure"},r.a.createElement("img",{id:"master-image",src:"https://www.artic.edu/iiif/2/".concat(a,"/full/843,/0/default.jpg"),alt:"random artwork",onClick:p}),r.a.createElement("figcaption",{className:u?"":"hide"},r.a.createElement("address",{id:"master-caption"},r.a.createElement("span",{id:"caption-span"},r.a.createElement("h4",null,l),r.a.createElement("p",null,n)))))):r.a.createElement("p",null,"Loading Artwork..."),r.a.createElement(Pe,null),r.a.createElement("span",{id:"new-user-span"},r.a.createElement("h3",null,"New User:"),r.a.createElement("button",{type:"button",id:"go-to-register",onClick:t=>{t.preventDefault(),e.history.push("/registration")}},"Register")))}return r.a.createElement("h1",null,"Loading...")});var Me=Object(s.b)(Ne)(e=>{const t=e.component,a=e.authRedirect,n=e.store,l=Object(Ue.a)(e,["component","authRedirect","store"]);let c;return c=n.user.id?t:Ge,n.user.id&&null!=a?r.a.createElement(Ce.a,{exact:!0,from:l.path,to:a}):(n.user.id||null==a||(c=t),r.a.createElement(Ce.b,Object.assign({},l,{component:c})))});a(75);var He=()=>r.a.createElement("article",{id:"program"},r.a.createElement("h2",null,"Welcome to Virtual Gallery"),r.a.createElement("p",null,"-If you are an artist, I invite you to share your art with the world. Once you have registered as an artist, you can start publishing art in your Studio. Your published work is immediately viewable in your Gallery. Head over to the Forum to see work done by other artists."),r.a.createElement("p",null,"- If you are a guest, please enjoy the complimentary art, on loan from the Art Institue of Chicago. you may regiseter for an account and head to the forum for Art viewing."),r.a.createElement("p",null,"- Virtual Gallery also trains you as an artist. We help you see your strengths and weaknesses with our Like System. Your most popular work will be the first work viewable my others visiting your gallery. The end result is that VG advocates your best work and helps you see where you can use work."));var qe=Object(s.b)(Ne)(e=>{const t=Object(n.useState)(e.store.user.username),a=Object(Le.a)(t,2),l=a[0],c=(a[1],Object(n.useState)("")),o=Object(Le.a)(c,2),s=o[0],u=o[1];return r.a.createElement("form",{className:"formPanel",onSubmit:function(t){t.preventDefault(),s.length?e.dispatch({type:"UPDATE_PASSWORD",payload:{username:l,password:s}}):e.dispatch({type:"PASSWORD_INPUT_ERROR"})}},r.a.createElement("h1",null,"Login"),e.store.errors.loginMessage&&r.a.createElement("h3",{className:"alert",role:"alert"},e.store.errors.loginMessage),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"New Password"},"New Password:",r.a.createElement("input",{type:"text",required:!0,value:s,onChange:e=>u(e.target.value),className:"input"}))),r.a.createElement("div",null,r.a.createElement("input",{className:"btn",type:"submit",name:"submit",value:"Change Password"})))});var ze=()=>r.a.createElement(qe,null);var Be=Object(s.b)(Ne)(e=>{const t=Object(n.useState)(""),a=Object(Le.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(Le.a)(o,2),u=s[0],i=s[1];return r.a.createElement("span",{id:"login-span"},r.a.createElement("h3",null,"New User:"),r.a.createElement("form",{className:"form-panel",onSubmit:function(t){t.preventDefault(),l.length&&u.length?e.dispatch({type:"REGISTER",payload:{username:l,password:u}}):e.dispatch({type:"REGISTRATION_INPUT_ERROR"})}},e.store.errors.loginMessage&&r.a.createElement("h3",{className:"alert",role:"alert"},e.store.errors.loginMessage),r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",required:!0,value:l,onChange:e=>c(e.target.value),className:"input"})),r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",required:!0,value:u,onChange:e=>i(e.target.value)})),r.a.createElement("input",{className:"btn",type:"submit",name:"submit",value:"Register"})))});a(76);class Ye extends n.Component{constructor(...e){super(...e),this.state={username:"",password:""},this.cancelRegistration=()=>{this.props.history.push("/login")}}render(){return r.a.createElement("section",{id:"register-section"},r.a.createElement(He,null),r.a.createElement(Be,{cancelRegistration:this.cancelRegistration}),r.a.createElement("span",{id:"new-user-span"},r.a.createElement("h3",null,"Returning User:"),r.a.createElement("button",{type:"button",id:"go-to-register",onClick:e=>{e.preventDefault(),this.props.history.push("/login")}},"Login")))}}var We=Object(s.b)(Ne)(Ye);a(26);var Ke=Object(s.b)(Ne)(e=>{const t=e.history,a=e.artwork,n=e.store,l=a.title,c=a.size,o=a.medium,s=a.id,u=a.statement,i=a.url,p=a.like,m=n.friendly,d=encodeURIComponent(i);Object.filter=(e,t)=>Object.keys(e).filter(a=>t(e[a])).reduce((t,a)=>Object.assign(t,{[a]:e[a]}),{});const E=Object.filter(a,e=>""===e);const h=(g=E,Object.keys(g).forEach((function(e){g[e]="NA"})),Object.assign(a,E));var g;return console.log("1st half of url:",i.slice(0,32)),console.log("2nd half of url:",i.slice(32)),console.log("encodedURL:",d),console.log("filteredArtwork.size:",h.size),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stone"},r.a.createElement("label",{id:"text-plate",className:"accordion",onClick:e=>function(e){const t=e.target.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(e)},l),r.a.createElement("div",{className:"accordion-content"},r.a.createElement("article",null,m?null:r.a.createElement(r.a.Fragment,null,p," Like(s)!",r.a.createElement("br",null)),o,r.a.createElement("br",null),c,r.a.createElement("br",null),r.a.createElement("p",null,u),e.store.friendly?r.a.createElement("button",{onClick:t=>function(t){t.preventDefault(),e.dispatch({type:"LIKE",payload:s})}(t)},"Like"):r.a.createElement("button",{onClick:()=>t.push("edit/".concat(h.title,"/").concat(h.medium,"/").concat(h.size,"/").concat(h.statement,"/").concat(d,"/").concat(s))},"EDIT")))))});var Ve=Object(s.b)(Ne)((function(e){const t=e.artwork,a=e.history,n=(t.artist,t.title,t.statement,t.size,t.medium,t.url);return t.id,encodeURIComponent(n),r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("img",{src:n,alt:"artwork"}),r.a.createElement(Ke,{artwork:t,history:a})))}));var Je=Object(s.b)(Ne)((function(e){const t=e.store.friendly,a=e.store.art;Object(n.useEffect)(()=>{e.dispatch({type:"FETCH_ART"})},[]),console.log("art:",a);const l=a.sort((function(e,t){return t.like-e.like}));return console.log("e:",Event.currentTarget),r.a.createElement("center",null,r.a.createElement("section",{id:"gallery-section"},r.a.createElement("h3",{className:"tip"},"Click a titleplate for more information."),a.length||t?r.a.createElement("ul",null,l.map(t=>{t.artist,t.title,t.statement,t.dimensions,t.medium,t.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve,{history:e.history,artwork:t}))})):r.a.createElement("h1",null,"You have not yet created art. head over to the Studio to get started")))}));a(77);var Ze=Object(s.b)(Ne)((function(e){const t=e.match.params,a=(t.username,t.id),l=e.store,c=l.friendly,o=l.friendArt;Object(n.useEffect)(()=>{e.dispatch({type:"FETCH_FRIEND_ART",payload:a})},[]),console.log("friendArt:",o);const s=o.sort((function(e,t){return t.like-e.like}));return r.a.createElement("center",null,r.a.createElement("section",{id:"gallery-section"},r.a.createElement("h2",null,e.match.params.username,"'s Gallery"),r.a.createElement("h3",{className:"tip"},"Click a titleplate for more information."),o.length?r.a.createElement("ul",null,c?s.map(t=>{t.artist,t.title,t.statement,t.dimensions,t.medium,t.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve,{history:e.history,artwork:t}))}):null):r.a.createElement("h1",null,"This artist has not yet created art")))})),Qe=(a(78),a(41)),Xe=a(24);a(83);var $e=Object(s.b)(Ne)((function(e){const t=Xe.a("ArSMzwi8yQMqrzZSUoDcoz"),a=Object(n.useState)(""),l=Object(Le.a)(a,2),c=l[0],o=l[1],u=Object(n.useState)(""),i=Object(Le.a)(u,2),p=i[0],m=i[1],d=Object(n.useState)(""),E=Object(Le.a)(d,2),h=E[0],g=E[1],b=Object(n.useState)(""),f=Object(Le.a)(b,2),y=f[0],O=f[1],w=Object(n.useState)(""),T=Object(Le.a)(w,2),j=T[0],R=T[1];let x;const k={onFileUploadFinished:e=>new Promise((t,a)=>{t(console.log("resolved",e),x=e.url.slice(0,32)+"/resize=width:300,height:200"+e.url.slice(32),console.log("url300:",x),R(x)),a(e=>console.log("Rejected:",e))})},A=Object(s.c)(),S={user_id:e.store.user.id,title:c,statement:p,medium:h,size:y,url:j,like:0};function C(){return(C=Object(Qe.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Sending ".concat(S.title," to Database...")),A({type:"ADD_ART",payload:S}),o(""),g(""),O(""),m(""),R("");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const _=e=>e.length?{backgroundColor:"green"}:{backgroundColor:"yellow"};return r.a.createElement("span",{id:"publish-span"},r.a.createElement("h3",null,"Publish an Artwork"),r.a.createElement("form",{id:"art-form",name:"art",onSubmit:e=>{e.preventDefault(),function(){C.apply(this,arguments)}()}},r.a.createElement("button",{className:"false-button",style:_(c)},"Title"),r.a.createElement("input",{id:"title-input",value:c,onChange:e=>o(e.target.value),onBlur:e=>o(e.target.value)}),r.a.createElement("br",null),r.a.createElement("button",{style:_(h),className:"false-button"},"Medium"),r.a.createElement("input",{value:h,onChange:e=>g(e.target.value),onBlur:e=>g(e.target.value)}),r.a.createElement("br",null),r.a.createElement("button",{style:_(y),className:"false-button"},"Size"),r.a.createElement("input",{value:y,onChange:e=>O(e.target.value),onBlur:e=>O(e.target.value)}),r.a.createElement("br",null),r.a.createElement("textarea",{className:"statement",rows:"4",maxLength:"300",value:p,onChange:e=>m(e.target.value),onBlue:e=>m(e.target.value)}),r.a.createElement("br",null),r.a.createElement("button",{style:_(p),className:"false-button",id:"statement-button"},"Statement"),r.a.createElement("br",null),r.a.createElement("button",{style:_(j),id:"upload-img-btn",onClick:e=>{e.preventDefault(),t.picker(k).open()}},"UPLOAD IMAGE"),r.a.createElement("br",null),j.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:j,alt:"artwork"}),r.a.createElement("br",null)):null,j.length?r.a.createElement("button",{id:"submit-art-button"},"SUBMIT"):null))}));var et=Object(s.b)(Ne)((function(){return r.a.createElement("section",{id:"studio-section"},r.a.createElement($e,null),r.a.createElement("br",null))}));a(84);var tt=Object(s.b)(Ne)((function(e){const t=e.store.users,a=Object(n.useState)("Other Artists:"),l=Object(Le.a)(a,2),c=l[0];return l[1],Object(n.useEffect)(()=>{e.dispatch({type:"FETCH_USERS"})},[]),r.a.createElement("span",{id:"friend-span"},r.a.createElement("h3",null,c),r.a.createElement("ul",null,t.length?t.map(t=>{const a=t.username,n=t.id;return r.a.createElement("li",{onClick:t=>{t.preventDefault(),e.history.push("/gallery/".concat(a,"/").concat(n))}},a)}):r.a.createElement("h1",null,"Loading Artists...")))}));a(85);var at=Object(s.b)(Ne)((function(e){e.store.art;const t=e.match.params,a=t.title,l=t.statement,c=t.size,o=t.medium,s=t.url,u=t.id,i=decodeURIComponent(s);console.log("Our url has been decoded:",i),console.log("size:",c);const p=Xe.a("ArSMzwi8yQMqrzZSUoDcoz");let m;const d={onFileUploadFinished:e=>new Promise((t,a)=>{t(console.log("resolved",e),m=e.url.slice(0,32)+"/resize=width:300,height:200"+e.url.slice(32),b(m)),a(e=>console.log("Rejected:",e))})},E=Object(n.useState)(i),h=Object(Le.a)(E,2),g=h[0],b=h[1],f=Object(n.useState)(a),y=Object(Le.a)(f,2),v=y[0],O=y[1],w=Object(n.useState)(c),T=Object(Le.a)(w,2),j=T[0],R=T[1],x=Object(n.useState)(o),k=Object(Le.a)(x,2),A=k[0],S=k[1],C=Object(n.useState)(l),_=Object(Le.a)(C,2),I=_[0],N=_[1];function F(t,a){e.dispatch({type:"UPDATE_ART",payload:{[t]:a,id:u}})}return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{id:"edit-form"},r.a.createElement("input",{htmlFor:"Title Edit",placeholder:a,value:v,onChange:e=>O(e.target.value),onBlur:e=>O(e.target.value)}),r.a.createElement("button",{onClick:e=>F("title",v)},"UPDATE TITLE"),r.a.createElement("br",null),r.a.createElement("input",{htmlFor:"Medium",placeholder:A,value:A,onChange:e=>S(e.target.value),onBlur:e=>S(e.target.value),value:A}),r.a.createElement("button",{onClick:e=>{e.preventDefault(),F("medium",A)}},"UPDATE MEDIUM"),r.a.createElement("br",null),r.a.createElement("input",{htmlFor:"Size",onChange:e=>R(e.target.value),onBlur:e=>R(e.target.value),value:j,placeholder:j}),r.a.createElement("button",{onClick:e=>F("size",j)},"UPDATE SIZE"),r.a.createElement("br",null),r.a.createElement("textarea",{id:"edit-statement",htmlFor:"Statement Edit",rows:"5",maxLength:"300",placeholder:I,value:I,onChange:e=>{N(e.target.value),console.log("statement has changed:",I)},onBlur:e=>N(e.target.value)}),r.a.createElement("br",null),r.a.createElement("button",{id:"update-statement-btn",onClick:e=>F("statement",I)},"UPDATE STATEMENT"),r.a.createElement("br",null),r.a.createElement("button",{htmlFor:"Upload Image",onClick:e=>{e.preventDefault(),p.picker(d).open()}},"UPLOAD IMAGE"),r.a.createElement("img",{src:g}),r.a.createElement("button",{htmlFor:"Update Image",onClick:e=>{e.preventDefault(),F("url",g)}},"UPDATE IMAGE"),r.a.createElement("br",null),r.a.createElement("button",{id:"delete-btn",onClick:t=>{t.preventDefault(),e.dispatch({type:"DELETE_ART",payload:u}),e.history.push("/gallery")}},"DELETE ARTWORK")))}));a(86);var nt=Object(s.b)(Ne)((function(e){const t=Object(s.c)();return Object(n.useEffect)(()=>{t(Ie.fetchUser())},{}),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(Fe,{id:"nav"}))),r.a.createElement("div",{className:"color-bar"}),r.a.createElement(Se.a,null,r.a.createElement(Ce.d,null,r.a.createElement(Ce.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(Ce.b,{exact:!0,path:"/program",component:He}),r.a.createElement(Me,{path:"/gallery/:username/:id",render:e=>r.a.createElement(Ze,e)}),r.a.createElement(Me,{path:"/edit/:title/:medium/:size/:statement/:url/:id",render:e=>r.a.createElement(at,e)}),r.a.createElement(Me,{path:"/settings",render:e=>r.a.createElement(ze,e)}),r.a.createElement(Me,{path:"/edit/:title/:medium/:size/:statement/:url/:id",render:e=>r.a.createElement(at,e)}),r.a.createElement(Me,{props:e,exact:!0,path:"/gallery",component:Je}),r.a.createElement(Me,{exact:!0,path:"/forum",component:tt}),r.a.createElement(Me,{exact:!0,path:"/studio",component:et}),r.a.createElement(Me,{exact:!0,path:"/login",component:Ge,authRedirect:"/gallery"}),r.a.createElement(Me,{exact:!0,path:"/registration",component:We,authRedirect:"/gallery"}),r.a.createElement(Me,{exact:!0,path:"/home",component:Ge,authRedirect:"/gallery"}),r.a.createElement(Ce.b,{render:()=>r.a.createElement("h1",null,"404")}))),r.a.createElement("footer",null,r.a.createElement(De,null)))}));a(87).config();const rt=Object(u.a)(),lt=[rt],ct=Object(o.e)(f,Object(o.a)(...lt));rt.run(Ae),c.a.render(r.a.createElement(s.a,{store:ct},r.a.createElement(nt,null)),document.getElementById("react-root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.fe5d5127.chunk.js.map