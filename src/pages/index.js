import '../pages/index.css';

import { Card } from '../scripts/components/Card';
import { FormValidator } from '../scripts/components/FormValidator';
import { Section } from '../scripts/components/Section';
import { PopupWithImage } from '../scripts/components/PopupWithImage';
import { PopupWithForm } from '../scripts/components/PopupWithForm';
import { PopupWithConfirm } from '../scripts/components/PopupWithConfirm';
import { UserInfo } from '../scripts/components/UserInfo';

import { config } from '../scripts/utils/configValidation';
import * as utils from '../scripts/utils/utils.js';
import * as constants from '../scripts/utils/constants';
import { api } from '../scripts/components/Api';

const formAddCardValidator = new FormValidator(config, constants.formAddCard);
const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);
const formEditAvatarValidator = new FormValidator(config, constants.formEditAvatar);

const section = new Section(addCard, '.elements__cards');

const popupWithImage = new PopupWithImage('.popup_type_image-zoom');

const popupAddImage = new PopupWithForm('.popup_type_card-add', submitAddCardForm, 'Добавление...');
const popupEditProfile = new PopupWithForm('.popup_type_profile-edit', submitEditProfileForm, 'Сохранение...');
const popupEditAvatar = new PopupWithForm('.popup_type_avatar-edit', submitEditAvatarForm, 'Сохранение...');

const popupDeleteCard = new PopupWithConfirm('.popup_type_delete-confirm', 'Удаление...');

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__subtitle',
  avatarSelector: '.profile__ellipse'
});

let userId;

function openEditProfilePopup() {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
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
      popupEditAvatar.close();
    })
    .catch((err) => {
      err.then((res) => {
        alert(res.message)
      })
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false);
    })
};

function deleteLastCard() {
  document.querySelector('.elements__cards').lastElementChild.remove();
}

function submitAddCardForm(data) {
  const createdSubmit = true;
  api.addCard(data.cardTitle, data.cardLink)
    .then((res) => {
      section.setItem(createCard(res), createdSubmit);
      deleteLastCard();
      popupAddImage.close();
    })
    .catch((err) => {
      err.then((res) => {
        alert(res.message)
      })
    })
    .finally(() => {
      popupAddImage.renderLoading(false);
    })
};

function submitEditProfileForm({ name, job }) {
  api.editUserInfo(name, job)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
      popupEditProfile.close();
    })
    .catch((err) => {
      err.then((res) => {
        alert(res.message)
      })
    })
    .finally(() => {
      popupEditProfile.renderLoading(false);
    })
};

function addCard(cardInfo, createdSubmit) {
  section.setItem(createCard(cardInfo), createdSubmit);
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
            api.getCards()
              .then(cardList => {
                addCard(cardList[cardList.length - 1], false);
              })
              .catch((err) => {
                err.then((res) => {
                  alert(res.message)
                })
              })
          })
          .catch((err) => {
            err.then((res) => {
              alert(res.message)
            })
          })
          .finally(() => { popupDeleteCard.renderLoading(false); })
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
              alert(res.message)
            })
          })
      } else {
        api.addLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            err.then((res) => {
              alert(res.message)
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
    section.rendererItems(cards);
  })
  .catch((err) => {
    err.then((res) => {
      alert(res.message)
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