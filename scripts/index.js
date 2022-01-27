const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileClose = popupEditProfile.querySelector('.popup__close');
const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');
const popupFormEdit = popupEditProfile.querySelector('.popup__form');
const popupEditName = document.getElementsByName('name')[0];
const popupEditAboutMe = document.getElementsByName('aboutMe')[0];
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close');
const profileOpenPopupButtonAdd = document.querySelector('.profile__button-add');
const popupFormAdd = popupAddCard.querySelector('.popup__form');
const popupAddTitlePicture = document.getElementsByName('titlePicture')[0];
const popupAddLinkPicture = document.getElementsByName('linkPicture')[0];
const popupZoom = document.querySelector('.popup_image-zoom');
const popupZoomClose = popupZoom.querySelector('.popup__close');
const popupZoomSubtitle = popupZoom.querySelector('.popup__subtitle');
const popupZoomImage = popupZoom.querySelector('.popup__image');
const elementsTemplate = document.querySelector('#elements-template').content;
const elementsCards = document.querySelector('.elements__cards');
initialCards.forEach(el => createCard(el));
function createCard(el) {
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
    popupEditName.value = profileName.textContent;
    popupEditAboutMe.value = profileSubtitle.textContent;
  } else if (event.target === profileOpenPopupButtonAdd) {
    popupAddCard.classList.add('popup_opened');
  } else {
    popupZoom.classList.add('popup_opened');
    popupZoomImage.src = event.target.src;
    const elementRectangle = event.target.closest('.elements__rectangle');
    popupZoomSubtitle.textContent = elementRectangle.querySelector('.elements__title').textContent;
  }
}
function closePopup(event) {
  event.target.closest('.popup').classList.remove('popup_opened');
}
function getFormValue(event) {
  event.preventDefault();
  if (event.currentTarget === popupFormEdit) {
    profileName.textContent = popupEditName.value;
    profileSubtitle.textContent = popupEditAboutMe.value;
  } else if (event.currentTarget === popupFormAdd) {
    const formData = [{name: popupAddTitlePicture.value, link: popupAddLinkPicture.value}]
    formData.forEach(el => createCard(el));
    popupAddTitlePicture.value = '';
    popupAddLinkPicture.value = '';
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