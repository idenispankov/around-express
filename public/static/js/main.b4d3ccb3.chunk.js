(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),c=n(7),s=n.n(c),i=(n(6),n(10)),l=n(2),u=n.p+"static/media/header__logo.4e8e0a1d.svg";function d(e){var t=e.logo;return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:t,alt:"Around US logo"})})}var j=Object(r.createContext)();function b(e){var t=e.card,n=e.onCardClick,o=e.onCardLike,c=e.onCardDelete,s=Object(r.useContext)(j),i=t.owner._id===s._id,l=t.likes.some((function(e){return e._id===s._id}));return Object(a.jsxs)("li",{className:"card",children:[i&&Object(a.jsx)("button",{className:"card__delete-button","aria-label":"Delete button",type:"reset",onClick:function(){c(t)}}),Object(a.jsx)("img",{className:"card__image",alt:t.name,src:t.link,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"card__group",children:[Object(a.jsx)("h2",{className:"card__text",children:t.name}),Object(a.jsxs)("div",{className:"card__like-container",children:[Object(a.jsx)("button",{className:"card__like-button ".concat(l?"card__like-button_active":null),"aria-label":"Like button",type:"button",onClick:function(e){o(t)}}),Object(a.jsx)("p",{className:"card__like-button-count",children:t.likes.length})]})]})]})}function m(e){var t=e.cards,n=e.onEditAvatar,o=e.onEditProfile,c=e.onAddPlace,s=e.onCardClick,i=e.onLikeClick,l=e.onDeleteClick,u=Object(r.useContext)(j);return Object(a.jsxs)("main",{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("button",{className:"profile__avatar-edit",onClick:n,children:Object(a.jsx)("img",{className:"profile__avatar",src:u.avatar,alt:"profile avatar"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__text",children:u.name}),Object(a.jsx)("button",{className:"profile__edit-button",onClick:o,"aria-label":"Edit Avatar",type:"button"}),Object(a.jsx)("p",{className:"profile__paragraph",children:u.about})]}),Object(a.jsx)("button",{className:"profile__add-button",onClick:c,"aria-label":"Add button",type:"button"})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__list",children:t.map((function(e){return Object(a.jsx)(b,{card:e,currentUserId:u._id,onCardClick:s,onCardLike:i,onCardDelete:l},e._id)}))})})]})}function f(e){var t=e.footerText;return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:t})})}function h(e){return Object(a.jsx)("div",{className:"modal modal_type_".concat(e.modalName," ").concat(e.isOpen&&"modal_is-open"),children:Object(a.jsxs)("form",{action:"#",className:"form form_".concat(e.formType),onSubmit:e.onSubmit,children:[Object(a.jsx)("h3",{className:"form__title",children:e.formTitle}),e.children,Object(a.jsx)("button",{className:"form__button form__button_type_save",type:"submit",children:e.submitText}),Object(a.jsx)("button",{className:"form__close-button",onClick:e.onClose,"aria-label":"Close button",type:"reset"})]})})}function p(e){var t=e.selectedCard,n=e.onClose;return Object(a.jsx)("div",{className:"modal modal_type_image ".concat(t?"modal_is-open":null),children:Object(a.jsxs)("figure",{className:"modal__figure",children:[Object(a.jsx)("button",{className:"form__close-button form__close-button_type-image",onClick:n,"aria-label":"Close button",type:"button"}),Object(a.jsx)("img",{className:"modal__image",src:t?t.link:null,alt:t?t.name:null}),Object(a.jsx)("figcaption",{className:"modal__image-title",children:t?t.name:null})]})})}var _=n(8),O=n(9),x=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(_.a)(this,e),this._baseUrl=n,this._headers=a}return Object(O.a)(e,[{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"setUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"addCard",value:function(e){return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)}))}},{key:"updateLikes",value:function(e,t){var n="DELETE";return t&&(n="PUT"),fetch(this._baseUrl+"/cards/likes/"+e,{method:n,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-6",headers:{authorization:"7de1d63b-0ba0-4390-89a7-2fe6bdf9eada","Content-Type":"application/json"}}),v=n.p+"static/media/avatar_type_dark.46e6bf6d.jpg";function C(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:e.type,placeholder:e.placeholder,className:"form__input form__input_".concat(e.inputType),name:e.name,description:e.description,minLength:e.min,maxLength:e.max,onChange:e.handleChange,value:e.value,required:!0}),Object(a.jsx)("span",{id:e.errorType,className:"form__error"})]})}function g(e){var t=Object(r.useContext)(j),n=Object(r.useState)(""),o=Object(l.a)(n,2),c=o[0],s=o[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),d=u[0],b=u[1];return Object(r.useEffect)((function(){s(t.name),b(t.about)}),[t]),Object(a.jsxs)(h,{modalName:"edit_profile",formType:"type_profile",formTitle:"Edit profile",submitText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:d})},children:[Object(a.jsx)(C,{type:"text",name:"profile",placeholder:"Name",inputType:"type_name",min:"2",max:"40",id:"profile-name-error",handleChange:function(e){s(e.target.value)},value:c}),Object(a.jsx)(C,{type:"text",name:"about",placeholder:"About me",inputType:"type_about",min:"2",max:"200",id:"profile-about-error",handleChange:function(e){b(e.target.value)},value:d})]})}function y(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1],s=Object(r.useContext)(j);return Object(r.useEffect)((function(){c(s.avatar)}),[s]),Object(a.jsx)(h,{modalName:"type_avatar",formType:"type_avatar",formTitle:"Edit Change Profile Picture",submitText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:o})},children:Object(a.jsx)(C,{type:"url",name:"avatar",placeholder:"Image Link",inputType:"type_avatar",id:"avatar-url-error",handleChange:function(e){c(e.target.value)},value:o})})}var k=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),u=i[0],d=i[1];return Object(a.jsxs)(h,{modalName:"type_add-card",formType:"type_profile",formTitle:"New Place",submitText:"Create",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:o,link:u})},children:[Object(a.jsx)(C,{type:"text",placeholder:"Title",inputType:"card-title",name:"title",id:"card-title-error",handleChange:function(e){c(e.target.value)},value:o}),Object(a.jsx)(C,{type:"url",placeholder:"Image Link",inputType:"card-url",name:"url",id:"card-url-error",handleChange:function(e){d(e.target.value)},value:u})]})};function N(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!1),s=Object(l.a)(c,2),b=s[0],_=s[1],O=Object(r.useState)(!1),C=Object(l.a)(O,2),N=C[0],T=C[1],S=Object(r.useState)(null),U=Object(l.a)(S,2),E=U[0],P=U[1],A=Object(r.useState)({name:"",about:"",avatar:v}),L=Object(l.a)(A,2),D=L[0],I=L[1],w=Object(r.useState)([]),F=Object(l.a)(w,2),J=F[0],B=F[1];function H(e){o(!1),_(!1),T(!1),P(null)}return Object(r.useEffect)((function(){Promise.all([x.getUserInfo(),x.getCardList({})]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];I(n),B(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsx)(j.Provider,{value:D,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsxs)("div",{className:"page__container",children:[Object(a.jsx)(d,{logo:u}),Object(a.jsx)(m,{onEditAvatar:function(){o(!0)},onEditProfile:function(){_(!0)},onAddPlace:function(){T(!0)},onCardClick:function(e){P(e)},cards:J,onDeleteClick:function(e){x.removeCard(e._id).then((function(){var t=J.filter((function(t){return t._id!==e._id}));B(t)})).catch((function(e){return console.log(e)}))},onLikeClick:function(e){var t=e.likes.some((function(e){return e._id===D._id}));x.updateLikes(e._id,!t).then((function(t){var n=J.map((function(n){return n._id===e._id?t:n}));B(n)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(f,{footerText:"\xa9 2020 Around The U.S."})]}),Object(a.jsx)(g,{isOpen:b,onClose:H,onUpdateUser:function(e){x.setUserInfo(e).then((function(e){I(e),H()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(y,{isOpen:n,onClose:H,onUpdateAvatar:function(e){x.setUserAvatar(e).then((function(e){I(e),H()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(k,{isOpen:N,onClose:H,onAddPlace:function(e){x.addCard({name:e.name,link:e.link}).then((function(e){B([e].concat(Object(i.a)(J))),H()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(h,{modalName:"type_delete-card",formType:"type_profile",modalTitle:"Are you sure?",submitText:"Yes",onClose:H}),Object(a.jsx)(p,{onClose:H,selectedCard:E})]})})}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),T()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.b4d3ccb3.chunk.js.map