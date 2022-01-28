const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileClose = popupEditProfile.querySelector('.popup__close');
const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');
const popupFormEdit = popupEditProfile.querySelector('.popup__form');
const inputUserName = document.querySelector('.popup__input_user-name');
const inputUserProfession = document.querySelector('.popup__input_user-profession');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close');
const profileOpenPopupButtonAdd = document.querySelector('.profile__button-add');
const popupFormAdd = popupAddCard.querySelector('.popup__form');
const inputCardTitle = document.querySelector('.popup__input_card-title');
const inputCardLink = document.querySelector('.popup__input_card-link');
const popupZoom = document.querySelector('.popup_image-zoom');
const popupZoomClose = popupZoom.querySelector('.popup__close');
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
function openPopup(popup) {popup.classList.add('popup_opened')}
function closePopup(event) {
  const popupActive = event.target.closest('.popup');
  popupActive.classList.remove('popup_opened');
}
function submitEditProfileForm(event) {
  event.preventDefault();
  profileName.textContent = inputUserName.value;
  profileSubtitle.textContent = inputUserProfession.value;
  closePopup(event);
}
function submitAddCardForm(event) {
  event.preventDefault();
  const formData = [{name: inputCardTitle.value, link: inputCardLink.value}];
  formData.forEach(cardInfo => addCard(cardInfo));
  inputCardTitle.value = '';
  inputCardLink.value = '';
  closePopup(event);
}
profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);
popupEditProfileClose.addEventListener('click', closePopup);
popupFormAdd.addEventListener('submit', submitAddCardForm);
profileOpenPopupButtonAdd.addEventListener('click', () => openPopup(popupAddCard));
popupAddCardClose.addEventListener('click', closePopup);
popupFormEdit.addEventListener('submit', submitEditProfileForm);
popupZoomClose.addEventListener('click', closePopup);