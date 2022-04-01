(()=>{"use strict";var e=[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}];function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,o,i,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._userId=i,this._ownerId=t.owner._id,this._selectorTemplate=n,this._handleImageClick=r,this._handleDeleteClick=o,this._handleLikeClick=s}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selectorTemplate).content.querySelector(".elements__element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".elements__mask-group"),this._likeButton=this._element.querySelector(".elements__group"),this._setEventListeners(),this._element.querySelector(".elements__title").textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this.setLikes(this._likes),this._ownerId!==this._userId&&(this._element.querySelector(".elements__delete").style.display="none"),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".elements__delete").addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._likeButton.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._elementImage.addEventListener("click",(function(){return e._handleImageClick()}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_fillLike",value:function(){this._likeButton.classList.add("elements__group_active")}},{key:"_removeLike",value:function(){this._likeButton.classList.remove("elements__group_active")}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".elements__number-likes").textContent=this._likes.length,this.isLiked()?this._fillLike():this._removeLike()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formActivePopup=n,this._submitButtonSelector=t.submitButtonSelector,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._textErrorClass=t.textErrorClass,this._submitButton=this._formActivePopup.querySelector(this._submitButtonSelector),this._arrayInputsFormActive=Array.from(this._formActivePopup.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"clearErrorsForm",value:function(){var e=this;this._arrayInputsFormActive.forEach((function(t){t.classList.remove(e._inputErrorClass),e._disableErrorText(t),e._changingButtonState()}))}},{key:"deactivateButton",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass)}},{key:"_activationButton",value:function(){this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._inactiveButtonClass)}},{key:"_hasInvalidInput",value:function(){return this._arrayInputsFormActive.some((function(e){return!e.validity.valid}))}},{key:"_changingButtonState",value:function(){this._hasInvalidInput()?this.deactivateButton():this._activationButton()}},{key:"_disableErrorText",value:function(e){this._formActivePopup.querySelector(".".concat(e.id,"-error")).classList.remove(this._textErrorClass)}},{key:"_includeErrorText",value:function(e){var t=this._formActivePopup.querySelector(".".concat(e.id,"-error"));t.textContent="",t.classList.add(this._textErrorClass),t.textContent=e.validationMessage}},{key:"_isValid",value:function(e){e.validity.valid?(e.classList.remove(this._inputErrorClass),this._disableErrorText(e)):(e.classList.add(this._inputErrorClass),this._includeErrorText(e)),this._changingButtonState()}},{key:"_setEventListeners",value:function(e){var t=this;this._formActivePopup.addEventListener("submit",(function(e){e.preventDefault()})),e.addEventListener("input",(function(){t._isValid(e)}))}},{key:"enableValidation",value:function(){var e=this;this._arrayInputsFormActive.forEach((function(t){e._setEventListeners(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",textErrorClass:"popup__input-error_active"},s=document.querySelector(".popup_type_profile-edit"),a=document.querySelector(".profile__button-edit"),c=s.querySelector(".popup__form"),u=document.querySelector(".popup__input_user-name"),l=document.querySelector(".popup__input_user-profession"),p=document.querySelector(".popup_type_card-add"),f=document.querySelector(".profile__button-add"),h=p.querySelector(".popup__form");function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"setItem",value:function(e,t){t?this._container.prepend(e):this._container.append(e)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__image-cross"))&&e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e))._popupZoomSubtitle=t._popup.querySelector(".popup__subtitle"),t._popupZoomImage=t._popup.querySelector(".popup__image"),t}return t=s,(n=[{key:"open",value:function(e,t){this._popupZoomImage.src=t,this._popupZoomImage.alt=e,this._popupZoomSubtitle.textContent=e,k(w(s.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(m);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function B(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function s(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e))._handleSabmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=function(e){if(Array.isArray(e))return L(e)}(r=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=s,(n=[{key:"close",value:function(){P(x(s.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"changeSubmitHandler",value:function(e){this._handleSabmit=e}},{key:"setEventListeners",value:function(){var e=this;P(x(s.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSabmit(e._getInputValues())}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(m);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._jobElement.textContent=t}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D,F=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error getUserInfo(): № ".concat(e.status))})).catch(console.log)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error getCards(): № ".concat(e.status))})).catch(console.log)}},{key:"editUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error editUserInfo(): № ".concat(e.status))})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error addCard(): № ".concat(e.status))})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error deleteCard(): № ".concat(e.status))})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error addLike(): № ".concat(e.status))})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error deleteLike(): № ".concat(e.status))})).catch(console.log)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"ef26a870-ce14-4ae0-b138-67948bcf24ea","Content-Type":"application/json"}});F.getUserInfo().then((function(e){e?M.setUserInfo(e.name,e.about):M.setUserInfo("Жак-Ив Кусто","Исследователь океана"),D=e._id})),F.getCards().then((function(t){t?Z.rendererItems(t):Z.rendererItems(e)}));var V=new o(i,h),N=new o(i,c),Z=new _((function(e){Z.setItem($(e))}),".elements__cards"),J=new j(".popup_type_image-zoom"),z=new q(".popup_type_card-add",(function(e){F.addCard(e.cardTitle,e.cardLink).then((function(e){Z.setItem($(e),!0),V.deactivateButton(),z.close()}))})),H=new q(".popup_type_profile-edit",(function(e){var t=e.userName,n=e.userProfession;F.editUserInfo(t,n).then((function(e){e?M.setUserInfo(e.name,e.about):M.setUserInfo(t,n),H.close()}))})),G=new q(".popup_type_delete-confirm"),M=new A({profileNameSelector:".profile__name",profileJobSelector:".profile__subtitle"});function $(e){var t=new n(e,"#elements-template",(function(){J.open(e.name,e.link)}),(function(e){G.open(),G.changeSubmitHandler((function(){F.deleteCard(e).then((function(){t.deleteCard(),G.close()}))}))}),D,(function(e){t.isLiked()?F.deleteLike(e).then((function(e){t.setLikes(e.likes)})):F.addLike(e).then((function(e){t.setLikes(e.likes)}))}));return t.generateCard()}a.addEventListener("click",(function(){var e=M.getUserInfo(),t=e.name,n=e.job;u.value=t,l.value=n,N.clearErrorsForm(),H.open()})),f.addEventListener("click",(function(){h.reset(),V.clearErrorsForm(),z.open()})),V.enableValidation(),N.enableValidation(),J.setEventListeners(),z.setEventListeners(),H.setEventListeners(),G.setEventListeners()})();