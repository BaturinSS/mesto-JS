import '../pages/index.css';

import { Card } from '../scripts/components/Card';

import { FormValidator } from '../scripts/components/FormValidator';

import { config } from '../scripts/utils/configValidation';

import * as utils from '../scripts/utils/utils.js';

import * as constants from '../scripts/utils/constants';

import { Section } from '../scripts/components/Section';

import { PopupWithImage } from '../scripts/components/PopupWithImage';

import { PopupWithForm } from '../scripts/components/PopupWithForm';

import { UserInfo } from '../scripts/components/UserInfo';

import { api } from '../scripts/components/Api';

const formAddCardValidator = new FormValidator(config, constants.formAddCard);

const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);

const formEditAvatarValidator = new FormValidator(config, constants.formEditAvatar);

const section = new Section(addCard, '.elements__cards');

const popupWithImage = new PopupWithImage('.popup_type_image-zoom');

const popupAddImage = new PopupWithForm('.popup_type_card-add', submitAddCardForm);

const popupEditProfile = new PopupWithForm('.popup_type_profile-edit', submitEditProfileForm);

//const popupDeleteCard = new PopupWithForm('.popup_type_delete-confirm');

const popupEditAvatar = new PopupWithForm('.popup_type_avatar-edit', submitEditAvatarForm);

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__subtitle',
  avatarSelector: '.profile__ellipse'
});

let userId;

let urlAvatar;

function openEditProfilePopup() {
  const { name, job } = userInfo.getUserInfo();
  constants.inputUserName.value = name;
  constants.inputUserProfession.value = job;
  formEditProfileValidator.clearErrorsForm();
  popupEditProfile.open();
};

function openAddImagePopup() {
  formAddCardValidator.clearErrorsForm();
  popupAddImage.open();
};

function openEditAvatarPopup() {
  formEditAvatarValidator.clearErrorsForm();
  popupEditAvatar.open();
};

function submitEditAvatarForm({ avatarUrl }) {
  api.editAvatar(avatarUrl)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
      urlAvatar = res.avatar;
      popupEditAvatar.close();
    })
    .catch((err) => {
      err.then((res) => {
        console.log(res.message)
      })
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false);
    })
};

function submitAddCardForm(data) {
  const createdSubmit = true;
  api.addCard(data.cardTitle, data.cardLink)
    .then((res) => {
      section.setItem(createCard(res), createdSubmit);
      popupAddImage.close();
    })
    .catch((err) => {
      err.then((res) => {
        console.log(res.message)
      })
    })
    .finally(() => {
      popupAddImage.renderLoading(false);
    })
};

function submitEditProfileForm({ userName, userProfession }) {
  api.editUserInfo(userName, userProfession)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, urlAvatar);
      popupEditProfile.close();
    })
    .catch((err) => {
      err.then((res) => {
        console.log(res.message)
      })
    })
    .finally(() => {
      popupEditProfile.renderLoading(false);
    })
};

function addCard(cardInfo) {
  section.setItem(createCard(cardInfo));
};

function createCard(cardInfo) {
  const card = new Card(
    cardInfo,
    constants.selectorTemplate,
    () => {
      popupWithImage.open(cardInfo.name, cardInfo.link);
    },
    (id) => {
      popupDeleteCard.open();
      popupDeleteCard.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then(() => {
            card.deleteCard();
            popupDeleteCard.close();
          })
          .catch((err) => {
            err.then((res) => {
              console.log(res.message)
            })
          })
      });
    },
    userId,
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            err.then((res) => {
              console.log(res.message)
            })
          })
      } else {
        api.addLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            err.then((res) => {
              console.log(res.message)
            })
          })
      }
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
};

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
    userId = userData._id;
    urlAvatar = userData.avatar;
    section.rendererItems(cards);
  })
  .catch((err) => {
    err.then((res) => {
      console.log(res.message)
    })
  })

constants.profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

constants.profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

constants.avatarOpenPopupButtonEdit.addEventListener('click', openEditAvatarPopup);

formAddCardValidator.enableValidation();

formEditProfileValidator.enableValidation();

formEditAvatarValidator.enableValidation();

popupWithImage.setEventListeners();

popupAddImage.setEventListeners();

popupEditProfile.setEventListeners();

popupDeleteCard.setEventListeners();

popupEditAvatar.setEventListeners();