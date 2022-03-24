import '../../styles/index.css';

import { initialCards } from '../utils/initial-cards.js';

import { Card } from '../components/Card.js';

import { FormValidator } from '../components/FormValidator.js';

import { config } from '../utils/configValidation.js';

import * as constants from '../utils/constants.js';

const formAddCardValidator = new FormValidator(config, constants.formAddCard);

const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  closePopupEventEscapeKey();
}

export function openImagePopup(linkImage, nameImage) {
  constants.popupZoomImage.src = '';
  constants.popupZoomImage.alt = '';
  constants.popupZoomSubtitle.textContent = '';
  constants.popupZoomImage.src = linkImage;
  constants.popupZoomImage.alt = nameImage;
  constants.popupZoomSubtitle.textContent = nameImage;
  openPopup(constants.popupZoom);
}

function openEditProfilePopup() {
  constants.inputUserName.value = constants.profileName.textContent;
  constants.inputUserProfession.value = constants.profileSubtitle.textContent;
  formEditProfileValidator.clearErrorsForm();
  openPopup(constants.popupEditProfile);
}

function openAddImagePopup() {
  constants.formAddCard.reset();
  formAddCardValidator.clearErrorsForm();
  openPopup(constants.popupAddCard);
}

function submitAddCardForm(event) {
  event.preventDefault();
  addCard({name: constants.inputCardTitle.value, link: constants.inputCardLink.value});
  formAddCardValidator.deactivateButton();
  closePopup(constants.popupAddCard);
}

function submitEditProfileForm(event) {
  event.preventDefault();
  constants.profileName.textContent = constants.inputUserName.value;
  constants.profileSubtitle.textContent = constants.inputUserProfession.value;
  closePopup(constants.popupEditProfile);
}

function addCard(cardInfo) {
  constants.elementsCards.prepend(createCard(cardInfo));
}

function createCard(cardInfo) {
  const card = new Card(cardInfo, constants.selectorTemplate);
  const cardElement = card.generateCard();
  return cardElement;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeEventEscapeKey();
}

function closePopupEventEscapeKey() {
  document.addEventListener('keydown', checkingKeystroke);
}

function checkingKeystroke(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function removeEventEscapeKey() {
  document.removeEventListener('keydown', checkingKeystroke);
}

constants.popups.forEach(popup => {
  popup.addEventListener('mousedown', event => {
    if (event.target.classList.contains('popup_opened') | event.target.classList.contains('popup__image-cross')) {
      closePopup(popup);
    }
  })
})

constants.profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

constants.profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

constants.formEditProfile.addEventListener('submit', submitEditProfileForm);

constants.formAddCard.addEventListener('submit', submitAddCardForm);

initialCards.forEach(cardInfo => addCard(cardInfo));

formAddCardValidator.enableValidation();

formEditProfileValidator.enableValidation();