(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e._id,this._userId=i,this._ownerId=e.owner._id,this._selectorTemplate=n,this._handleImageClick=r,this._handleDeleteClick=o,this._handleLikeClick=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selectorTemplate).content.querySelector(".elements__element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".elements__mask-group"),this._likeButton=this._element.querySelector(".elements__group"),this._likeCountElement=this._element.querySelector(".elements__number-likes"),this._setEventListeners(),this._element.querySelector(".elements__title").textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this.setLikes(this._likes),this._ownerId!==this._userId&&(this._element.querySelector(".elements__delete").style.display="none"),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".elements__delete").addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._likeButton.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._elementImage.addEventListener("click",(function(){return e._handleImageClick()}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_fillLike",value:function(){this._likeButton.classList.add("elements__group_active")}},{key:"_removeLike",value:function(){this._likeButton.classList.remove("elements__group_active")}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeCountElement.textContent=this._likes.length,this.isLiked()?this._fillLike():this._removeLike()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formActivePopup=n,this._submitButtonSelector=t.submitButtonSelector,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._textErrorClass=t.textErrorClass,this._submitButton=this._formActivePopup.querySelector(this._submitButtonSelector),this._arrayInputsFormActive=Array.from(this._formActivePopup.querySelectorAll(this._inputSelector))}var t,r;return t=e,(r=[{key:"clearErrorsForm",value:function(){var e=this;this._arrayInputsFormActive.forEach((function(t){t.classList.remove(e._inputErrorClass),e._disableErrorText(t),e._changingButtonState()}))}},{key:"deactivateButton",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass)}},{key:"_activationButton",value:function(){this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._inactiveButtonClass)}},{key:"_hasInvalidInput",value:function(){return this._arrayInputsFormActive.some((function(e){return!e.validity.valid}))}},{key:"_changingButtonState",value:function(){this._hasInvalidInput()?this.deactivateButton():this._activationButton()}},{key:"_disableErrorText",value:function(e){this._formActivePopup.querySelector(".".concat(e.id,"-error")).classList.remove(this._textErrorClass)}},{key:"_includeErrorText",value:function(e){var t=this._formActivePopup.querySelector(".".concat(e.id,"-error"));t.textContent="",t.classList.add(this._textErrorClass),t.textContent=e.validationMessage}},{key:"_isValid",value:function(e){e.validity.valid?(e.classList.remove(this._inputErrorClass),this._disableErrorText(e)):(e.classList.add(this._inputErrorClass),this._includeErrorText(e)),this._changingButtonState()}},{key:"_setEventListeners",value:function(e){var t=this;this._formActivePopup.addEventListener("submit",(function(e){e.preventDefault()})),e.addEventListener("input",(function(){t._isValid(e)}))}},{key:"enableValidation",value:function(){var e=this;this._arrayInputsFormActive.forEach((function(t){e._setEventListeners(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"setItem",value:function(e,t){t?this._container.prepend(e):this._container.append(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._buttonSubmit=this._popup.querySelector(".popup__save-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._buttonSubmit.removeAttribute("disabled")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__image-cross"))&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupZoomSubtitle=t._popup.querySelector(".popup__subtitle"),t._popupZoomImage=t._popup.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupZoomImage.src=t,this._popupZoomImage.alt=e,this._popupZoomSubtitle.textContent=e,l(_(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t,n){var r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._handleSabmit=t,r._titleButton=n,r._textDefault=r._buttonSubmit.textContent,r._form=r._popup.querySelector(".popup__form"),r._inputs=function(e){if(Array.isArray(e))return m(e)}(o=r._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r}return t=a,(n=[{key:"close",value:function(){v(E(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;v(E(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e.renderLoading(!0),t.preventDefault(),e._handleSabmit(e._getInputValues())}))}},{key:"renderLoading",value:function(e){e?(this._buttonSubmit.textContent=this._titleButton,this._buttonSubmit.setAttribute("disabled","true")):this._buttonSubmit.textContent=this._textDefault}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._handleSubmit=n,r._titleButton=t,r._textDefault=r._buttonSubmit.textContent,r}return t=a,(n=[{key:"changeSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;L(R(a.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",(function(){e.renderLoading(!0),e._handleSubmit()}))}},{key:"renderLoading",value:function(e){e?(this._buttonSubmit.textContent=this._titleButton,this._buttonSubmit.setAttribute("disabled","true")):this._buttonSubmit.textContent=this._textDefault}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._nameElement.textContent=e,this._jobElement.textContent=t,this._avatar.style.background="url(".concat(n,")"),this._avatar.style.backgroundSize="cover",this._avatar.style.backgroundRepeat="no-repeat",this._avatar.style.backgroundPosition="center center"}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",textErrorClass:"popup__input-error_active"},B=document.querySelector(".popup_type_profile-edit"),U=document.querySelector(".profile__button-edit"),D=B.querySelector(".popup__form"),F=document.querySelector(".popup__input_user-name"),V=document.querySelector(".popup__input_user-profession"),N=document.querySelector(".popup_type_card-add"),J=document.querySelector(".profile__button-add"),Z=N.querySelector(".popup__form"),H=document.querySelector(".popup_type_avatar-edit"),z=document.querySelector(".profile__ellipse"),M=H.querySelector(".popup__form");function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}M.querySelector(".popup__input_avatar-url");var $=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.json())}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editUserInfo",value:function(e,t,n){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t,n){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"ef26a870-ce14-4ae0-b138-67948bcf24ea","Content-Type":"application/json"}});function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q,W=new r(A,Z),X=new r(A,D),Y=new r(A,M),ee=new i(ue,".elements__cards"),te=new y(".popup_type_image-zoom"),ne=new w(".popup_type_card-add",(function(e){$.addCard(e.cardTitle,e.cardLink).then((function(e){ee.setItem(se(e),!0),document.querySelector(".elements__cards").lastElementChild.remove(),ne.close()})).catch((function(e){e.then((function(e){alert(e.message)}))})).finally((function(){ne.renderLoading(!1)}))}),"Добавление..."),re=new w(".popup_type_profile-edit",(function(e){var t=e.userName,n=e.userProfession;$.editUserInfo(t,n).then((function(e){ae.setUserInfo(e.name,e.about,e.avatar),re.close()})).catch((function(e){e.then((function(e){alert(e.message)}))})).finally((function(){re.renderLoading(!1)}))}),"Сохранение..."),oe=new w(".popup_type_avatar-edit",(function(e){var t=e.avatarUrl;$.editAvatar(t).then((function(e){ae.setUserInfo(e.name,e.about,e.avatar),oe.close()})).catch((function(e){e.then((function(e){alert(e.message)}))})).finally((function(){oe.renderLoading(!1)}))}),"Сохранение..."),ie=new x(".popup_type_delete-confirm","Удаление..."),ae=new q({profileNameSelector:".profile__name",profileJobSelector:".profile__subtitle",avatarSelector:".profile__ellipse"});function ue(e,t){ee.setItem(se(e),t)}function se(e){var n=new t(e,"#elements-template",(function(){te.open(e.name,e.link)}),(function(e){ie.open(),ie.changeSubmitHandler((function(){$.deleteCard(e).then((function(){n.deleteCard(),ie.close(),$.getCards().then((function(e){ue(e[e.length-1],!1)})).catch((function(e){e.then((function(e){alert(e.message)}))}))})).catch((function(e){e.then((function(e){alert(e.message)}))})).finally((function(){ie.renderLoading(!1)}))}))}),Q,(function(e){n.isLiked()?$.deleteLike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){e.then((function(e){console.log(e.message)}))})):$.addLike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){e.then((function(e){console.log(e.message)}))}))}));return n.generateCard()}Promise.all([$.getUserInfo(),$.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ae.setUserInfo(o.name,o.about,o.avatar),Q=o._id,ee.rendererItems(i)})).catch((function(e){e.then((function(e){alert(e.message)}))})),U.addEventListener("click",(function(){var e=ae.getUserInfo(),t=e.name,n=e.job;F.value=t,V.value=n,X.clearErrorsForm(),re.open()})),J.addEventListener("click",(function(){W.clearErrorsForm(),ne.open()})),z.addEventListener("click",(function(){Y.clearErrorsForm(),oe.open()})),W.enableValidation(),X.enableValidation(),Y.enableValidation(),te.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),ie.setEventListeners(),oe.setEventListeners()})();