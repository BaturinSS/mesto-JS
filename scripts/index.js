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
const elementsTemplate = document.querySelector('#elements-template').content;
const elementsCards = document.querySelector('.elements__cards');
initialCards.forEach(cardInfo => addCard(cardInfo));
function addCard(cardInfo) {elementsCards.prepend(createCard(cardInfo))};
function createCard(cardInfo) {
  const elementCard = elementsTemplate.querySelector('.elements__element').cloneNode(true);
  elementCard.querySelector('.elements__title').textContent = cardInfo.name;
  elementCard.querySelector('.elements__delete').addEventListener('click', event => event.currentTarget.closest('.elements__element').remove());
  elementCard.querySelector('.elements__group').addEventListener('click', event => event.target.classList.toggle('elements__group_active'));
  const elementImage = elementCard.querySelector('.elements__mask-group');
  elementImage.src = cardInfo.link;
  elementImage.alt = cardInfo.name;
  elementImage.addEventListener('click', event => openImagePopup(event))
  return elementCard;
}
function openEditProfilePopup() {
  openPopup(popupEditProfile);
  inputUserName.value = profileName.textContent;
  inputUserProfession.value = profileSubtitle.textContent;
}
function openImagePopup(event) {
  openPopup(popupZoom);
  popupZoomImage.src = event.target.src;
  popupZoomImage.alt = event.target.alt;
  const elementRectangle = event.target.closest('.elements__rectangle');
  popupZoomSubtitle.textContent = elementRectangle.querySelector('.elements__title').textContent;
}
function openPopup(popup) {
  popup.classList.add('popup_opened');
  addEventClosePopup(popup);
}
function closePopup(event) {
  const popupActive = event.target.closest('.popup');
  const buttonCloseActivePopup = popupActive.querySelector('.popup__image-cross');
  if (event.target === event.currentTarget || event.target === buttonCloseActivePopup || event.key === 'Escape') {
    if (event.currentTarget === popupAddCard) {
      resetInputForm(popupAddCard);
    }
    popupActive.classList.remove('popup_opened');
    removeEventClosePopup(popupActive);
  }
}
function addEventClosePopup(popup) {
  popup.addEventListener('mousedown',  event => closePopup(event));
  popup.addEventListener('keydown', event => closePopup(event));
}
function removeEventClosePopup(popup) {
  popup.removeEventListener('mousedown',  event => closePopup(event));
  popup.removeEventListener('keydown', event => closePopup(event));
}
function submitEditProfileForm(event) {
  event.preventDefault();
  profileName.textContent = inputUserName.value;
  profileSubtitle.textContent = inputUserProfession.value;
  closePopup(event);
}
function resetInputForm(form) {
  const inputs = form.querySelectorAll('input[class]');
  inputs.forEach(input => input.value = '');
}
function submitAddCardForm(event) {
  event.preventDefault();
  const cardInfo = {name: inputCardTitle.value, link: inputCardLink.value};
  addCard(cardInfo);
  resetInputForm(event.target)
  closePopup(event);
}
profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);
popupFormAdd.addEventListener('submit', submitAddCardForm);
profileOpenPopupButtonAdd.addEventListener('click', () => openPopup(popupAddCard));
popupFormEdit.addEventListener('submit', submitEditProfileForm);