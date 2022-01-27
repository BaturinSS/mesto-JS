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
initialCards.forEach(el => createCard(el));
function createCard(el) {
  console.log(el);
  const elementCard = elementsTemplate.querySelector('.elements__element').cloneNode(true);
  elementCard.querySelector('.elements__title').textContent = el.name;
  elementCard.querySelector('.elements__delete').addEventListener('click', event => event.currentTarget.closest('.elements__element').remove());
  elementCard.querySelector('.elements__group').addEventListener('click', event => event.target.classList.toggle('elements__group_active'));
  const elementImage = elementCard.querySelector('.elements__mask-group');
  elementImage.src = el.link;
  elementImage.alt = el.name;
  elementImage.addEventListener('click', event => openPopup(event))
  addCard(elementCard);
}
function addCard(card) {elementsCards.prepend(card)};
function openPopup(event) {
  if (event.target === profileOpenPopupButtonEdit) {
    popupEditProfile.classList.add('popup_opened');
    inputUserName.value = profileName.textContent;
    inputUserProfession.value = profileSubtitle.textContent;
  } else if (event.target === profileOpenPopupButtonAdd) {
    popupAddCard.classList.add('popup_opened');
  } else {
    popupZoom.classList.add('popup_opened');
    popupZoomImage.src = event.target.src;
    popupZoomImage.alt = event.target.alt;
    const elementRectangle = event.target.closest('.elements__rectangle');
    popupZoomSubtitle.textContent = elementRectangle.querySelector('.elements__title').textContent;
  }
}
function closePopup(event) {
  const popupActive = event.target.closest('.popup');
  popupActive.classList.remove('popup_opened');
}
function getFormValue(event) {
  event.preventDefault();
  if (event.currentTarget === popupFormEdit) {
    profileName.textContent = inputUserName.value;
    profileSubtitle.textContent = inputUserProfession.value;
  } else if (event.currentTarget === popupFormAdd) {
    const formData = [{name: inputCardTitle.value, link: inputCardLink.value}]
    formData.forEach(el => createCard(el));
    inputCardTitle.value = '';
    inputCardLink.value = '';
  }
  closePopup(event);
}
profileOpenPopupButtonEdit.addEventListener('click', openPopup);
popupEditProfileClose.addEventListener('click', closePopup);
popupFormAdd.addEventListener('submit', getFormValue);
profileOpenPopupButtonAdd.addEventListener('click', openPopup);
popupAddCardClose.addEventListener('click', closePopup);
popupFormEdit.addEventListener('submit', getFormValue);
popupZoomClose.addEventListener('click', closePopup);