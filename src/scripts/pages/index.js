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

api.getUserInfo()
  .then(res => {
    res
      ? userInfo.setUserInfo(res.name, res.about)
      : userInfo.setUserInfo(userInfoDefault.name, userInfoDefault.about)
  });

api.getCards()
  .then(initialCards => {
    initialCards
      ? section.rendererItems(initialCards)
      : section.rendererItems(initialCardsDefault)
  })

const formAddCardValidator = new FormValidator(config, constants.formAddCard);

const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);

const section = new Section(addCard, '.elements__cards');

const popupWithImage = new PopupWithImage('.popup_type_image-zoom');

const popupAddImage = new PopupWithForm('.popup_type_card-add', submitAddCardForm);

const popupEditProfile = new PopupWithForm('.popup_type_profile-edit', submitEditProfileForm);

const popupDeleteCard = new PopupWithForm('.popup_type_delete-confirm', () => {
  console.log('popupDeleteCard')
});

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__subtitle'
});

function openEditProfilePopup() {
  const { name, job } = userInfo.getUserInfo();
  constants.inputUserName.value = name;
  constants.inputUserProfession.value = job;
  formEditProfileValidator.clearErrorsForm();
  popupEditProfile.open();
};

function openAddImagePopup() {
  constants.formAddCard.reset();
  formAddCardValidator.clearErrorsForm();
  popupAddImage.open();
};

function submitAddCardForm(data) {
  const createdSubmit = true;
  api.addCard(data.cardTitle, data.cardLink)
    .then(res => {
      section.setItem(createCard({
        name: res.name,
        link: res.link
      }), createdSubmit);
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
  const card = new Card(cardInfo, constants.selectorTemplate, () => {
    popupWithImage.open(cardInfo.name, cardInfo.link);
  }, () => {
    popupDeleteCard.open();
  });
  const cardElement = card.generateCard();
  return cardElement;
};

constants.profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

constants.profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

formAddCardValidator.enableValidation();

formEditProfileValidator.enableValidation();

popupWithImage.setEventListeners();

popupAddImage.setEventListeners();

popupEditProfile.setEventListeners();

popupDeleteCard.setEventListeners();