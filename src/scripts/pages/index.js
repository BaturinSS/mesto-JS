import '../../styles/index.css';

import { initialCards } from '../utils/initial-cards.js';

import { Card } from '../components/Card.js';

import { FormValidator } from '../components/FormValidator.js';

import { config } from '../utils/configValidation.js';

import * as utils from '../utils/utils.js'

import * as constants from '../utils/constants.js';

const formAddCardValidator = new FormValidator(config, constants.formAddCard);

const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);

export function openImagePopup(linkImage, nameImage) {
  constants.popupZoomImage.src = '';
  constants.popupZoomImage.alt = '';
  constants.popupZoomSubtitle.textContent = '';
  constants.popupZoomImage.src = linkImage;
  constants.popupZoomImage.alt = nameImage;
  constants.popupZoomSubtitle.textContent = nameImage;
  utils.openPopup(constants.popupZoom);
}

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
  addCard({ name: constants.inputCardTitle.value, link: constants.inputCardLink.value });
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
  const card = new Card(cardInfo, constants.selectorTemplate);
  const cardElement = card.generateCard();
  return cardElement;
}

constants.profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

constants.profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

constants.formEditProfile.addEventListener('submit', submitEditProfileForm);

constants.formAddCard.addEventListener('submit', submitAddCardForm);

initialCards.forEach(cardInfo => addCard(cardInfo));

formAddCardValidator.enableValidation();

formEditProfileValidator.enableValidation();