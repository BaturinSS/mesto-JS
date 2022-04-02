import '../../styles/index.css';

import { initialCardsDefault } from '../utils/initialCardsDefault';

import { userInfoDefault } from '../utils/userInfoDefault'

import { Card } from '../components/Card';

import { FormValidator } from '../components/FormValidator';

import { config } from '../utils/configValidation';

import * as utils from '../utils/utils.js';

import * as constants from '../utils/constants';

import { Section } from '../components/Section';

import { PopupWithImage } from '../components/PopupWithImage';

import { PopupWithForm } from '../components/PopupWithForm';

import { UserInfo } from '../components/UserInfo';

import { api } from '../components/Api';

const formAddCardValidator = new FormValidator(config, constants.formAddCard);

const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);

const formEditAvatarValidator = new FormValidator(config, constants.formEditAvatar);

const section = new Section(addCard, '.elements__cards');

const popupWithImage = new PopupWithImage('.popup_type_image-zoom');

const popupAddImage = new PopupWithForm('.popup_type_card-add', submitAddCardForm);

const popupEditProfile = new PopupWithForm('.popup_type_profile-edit', submitEditProfileForm);

const popupDeleteCard = new PopupWithForm('.popup_type_delete-confirm');

const popupEditAvatar = new PopupWithForm('.popup_type_avatar-edit', submitEditAvatarForm);

let userId;

api.getUserInfo()
  .then(res => {
    res
      ? userInfo.setUserInfo(res.name, res.about, res.avatar)
      : userInfo.setUserInfo(userInfoDefault.name, userInfoDefault.about, userInfoDefault.avatar)
    userId = res._id;
  });

api.getCards()
  .then(initialCards => {
    initialCards
      ? section.rendererItems(initialCards)
      : section.rendererItems(initialCardsDefault)
  })

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__subtitle',
  avatarSelector: '.profile__ellipse'
});
console.log(userInfo._avatar.style.background.url)

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

function submitEditAvatarForm() {
  api.editAvatar('https://radioiskatel.ru/wp-content/uploads/2018/06/iskateli-rekordov-zhak-iv-kusto.jpg')
    .then(res => {
      console.log(res)
      popupEditAvatar.close();
    })
};

function submitAddCardForm(data) {
  const createdSubmit = true;
  api.addCard(data.cardTitle, data.cardLink)
    .then(res => {
      section.setItem(createCard(res), createdSubmit);
      formAddCardValidator.deactivateButton();
      popupAddImage.close();
    })
};

function submitEditProfileForm(data) {
  const { userName, userProfession } = data;
  api.editUserInfo(userName, userProfession)
    .then(res => {
      res
        ? userInfo.setUserInfo(res.name, res.about)
        : userInfo.setUserInfo(userName, userProfession)
      popupEditProfile.close();
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
      });
    },
    userId,
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
      } else {
        api.addLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
      }
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
};

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