import '../../styles/index.css';

import { initialCards } from '../utils/initial-cards.js';

import { Card } from '../components/Card.js';

import { FormValidator } from '../components/FormValidator.js';

import { config } from '../utils/configValidation.js';

import * as utils from '../utils/utils.js';

import * as constants from '../utils/constants.js';

import { Section } from '../components/Section.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm';

import { UserInfo } from '../components/UserInfo';


const formAddCardValidator = new FormValidator(config, constants.formAddCard);

const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);

const section = new Section( addCard, '.elements__cards');

const popupWithImage  = new PopupWithImage('.popup_type_image-zoom');

const popupAddImage  = new PopupWithForm('.popup_type_card-add', submitAddCardForm);

const popupEditProfile  = new PopupWithForm('.popup_type_profile-edit', submitEditProfileForm);

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
  section.setItem(createCard({
    name: data.cardTitle,
    link: data.cardLink
  }));
  formAddCardValidator.deactivateButton();
  popupAddImage.close();
};

function submitEditProfileForm(data) {
  const { userName, userProfession } = data;
  userInfo.setUserInfo(userName, userProfession);
  popupEditProfile.close();
};

function addCard(cardInfo) {
  section.setItem(createCard(cardInfo));
};

function createCard(cardInfo) {
  const card = new Card(cardInfo, constants.selectorTemplate, () => {
    popupWithImage.open(cardInfo.name, cardInfo.link);
  });
  const cardElement = card.generateCard();
  return cardElement;
};

constants.profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

constants.profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

formAddCardValidator.enableValidation();

formEditProfileValidator.enableValidation();

section.rendererItems(initialCards);

popupWithImage.setEventListeners();

popupAddImage.setEventListeners();

popupEditProfile.setEventListeners();