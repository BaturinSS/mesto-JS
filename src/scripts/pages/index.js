import '../../styles/index.css';

import { initialCards } from '../utils/initial-cards.js';

import { Card } from '../components/Card.js';

import { FormValidator } from '../components/FormValidator.js';

import { config } from '../utils/configValidation.js';

import * as utils from '../utils/utils.js'

import * as constants from '../utils/constants.js';

import { Section } from '../components/Section.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

const formAddCardValidator = new FormValidator(config, constants.formAddCard);

const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);

const section = new Section({ items: initialCards, renderer: addCard }, '.elements__cards');
section.rendererItems();

const openImagePopup  = new PopupWithImage('.popup_type_image-zoom');
openImagePopup.setEventListeners();

function openEditProfilePopup() {
  constants.inputUserName.value = constants.profileName.textContent;
  constants.inputUserProfession.value = constants.profileSubtitle.textContent;
  formEditProfileValidator.clearErrorsForm();
  utils.openPopup(constants.popupEditProfile);
}

function openAddImagePopup() {
  constants.formAddCard.reset();
  formAddCardValidator.clearErrorsForm();
  utils.openPopup(constants.popupAddCard);
}

function submitAddCardForm(event) {
  event.preventDefault();
  section.setItem(createCard({
    name: constants.inputCardTitle.value,
    link: constants.inputCardLink.value
  }));
  formAddCardValidator.deactivateButton();
  utils.closePopup(constants.popupAddCard);
}

function submitEditProfileForm(event) {
  event.preventDefault();
  constants.profileName.textContent = constants.inputUserName.value;
  constants.profileSubtitle.textContent = constants.inputUserProfession.value;
  utils.closePopup(constants.popupEditProfile);
}

function addCard(cardInfo) {
  constants.elementsCards.prepend(createCard(cardInfo));
}

function createCard(cardInfo) {
  const card = new Card(cardInfo, constants.selectorTemplate, () => {
    openImagePopup.open(cardInfo.name, cardInfo.link);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

constants.profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

constants.profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

constants.formEditProfile.addEventListener('submit', submitEditProfileForm);

constants.formAddCard.addEventListener('submit', submitAddCardForm);

formAddCardValidator.enableValidation();

formEditProfileValidator.enableValidation();