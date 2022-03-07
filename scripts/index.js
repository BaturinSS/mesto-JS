import {initialCards} from './initial-cards.js';

import {Card} from './Card.js';

import {FormValidator} from './FormValidator.js';

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  textErrorClass: 'popup__input-error_active'
}

const popupEditProfile = document.querySelector('.popup_edit-profile');

const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');

const popupFormEdit = popupEditProfile.querySelector('.popup__form');

const inputUserName = document.querySelector('.popup__input_user-name');

const inputUserProfession = document.querySelector('.popup__input_user-profession');

const profileName = document.querySelector('.profile__name');

const profileSubtitle = document.querySelector('.profile__subtitle');

const popupAddCard = document.querySelector('.popup_add-card');

const profileOpenPopupButtonAdd = document.querySelector('.profile__button-add');

const popupFormAdd = popupAddCard.querySelector('.popup__form');

const inputCardTitle = document.querySelector('.popup__input_card-title');

const inputCardLink = document.querySelector('.popup__input_card-link');

const popupZoom = document.querySelector('.popup_image-zoom');

const popupZoomSubtitle = popupZoom.querySelector('.popup__subtitle');

const popupZoomImage = popupZoom.querySelector('.popup__image');

const selectorTemplate = '#elements-template';

const elementsCards = document.querySelector('.elements__cards');

const buttonsCloseList = document.querySelectorAll('.popup__close');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  closePopupEventEscapeKey();
  const formActivePopup = popup.querySelector('form');
  if (formActivePopup) {
    const formValidator = new FormValidator(config, formActivePopup);
    formValidator.enableValidation();
  }
}

export function openImagePopup(elementImage) {
  popupZoomImage.src = '';
  popupZoomImage.alt = '';
  popupZoomSubtitle.textContent = '';
  popupZoomImage.src = elementImage.src;
  popupZoomImage.alt = elementImage.alt;
  popupZoomSubtitle.textContent = elementImage.alt;
  openPopup(popupZoom);
}

function openEditProfilePopup() {
  inputUserName.value = profileName.textContent;
  inputUserProfession.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
}

function openAddImagePopup() {
  popupFormAdd.reset();
  openPopup(popupAddCard);
}

function submitAddCardForm(event) {
  event.preventDefault();
  addCard({name: inputCardTitle.value, link: inputCardLink.value});
  closePopup(popupAddCard);
}

function submitEditProfileForm(event) {
  event.preventDefault();
  profileName.textContent = inputUserName.value;
  profileSubtitle.textContent = inputUserProfession.value;
  closePopup(popupEditProfile);
}

function addCard(cardInfo) {elementsCards.prepend(createCard(cardInfo))}

function createCard(cardInfo) {
  const card = new Card(cardInfo, selectorTemplate);
  const cardElement = card.generateCard();
  return cardElement;
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeEventEscapeKey();
}

function closePopupEventEscapeKey() {document.addEventListener('keydown', checkingKeystroke)}

function checkingKeystroke(event) {if (event.key === 'Escape') {const popup = document.querySelector('.popup_opened'); closePopup(popup)}}

function removeEventEscapeKey() {document.removeEventListener('keydown', checkingKeystroke)}

buttonsCloseList.forEach(buttonClose => buttonClose.addEventListener('mousedown', function() {
  const popupActive = document.querySelector('.popup_opened');
  closePopup(popupActive);
}))

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('popup_opened')) {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
})

profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

popupFormEdit.addEventListener('submit', submitEditProfileForm);

popupFormAdd.addEventListener('submit', submitAddCardForm);

initialCards.forEach(cardInfo => addCard(cardInfo));