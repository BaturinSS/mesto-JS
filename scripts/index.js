const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');
const profileOpenPopupButtonAdd = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileClose = popupEditProfile.querySelector('.popup-close')[0];
const popupAddCard = document.querySelector('.popup_add-card');
const popupZoom = document.querySelector('.popup_image');


const popupZoomClose = document.querySelectorAll('.popup-close')[1];
const popupTitle = document.querySelector('.popup__title');
const popupZoomSubtitle = document.querySelector('.popup-zoom__subtitle');
const popupZoomImage = document.querySelector('.popup-zoom__image');
const formPopupEdit = document.querySelector('.popup__form');
const formPopupSubmit = document.querySelector('.popup__save-button');
const popupEditName = document.getElementsByName('name')[0];
const popupEditAboutMe = document.getElementsByName('aboutMe')[0];



const elementsTemplate = document.querySelector('#elements-template').content;
const elementsCards = document.querySelector('.elements__cards');


initialCards.forEach((el) => creatureElementCard(el));
function creatureElementCard(el) {
  const elementCard = elementsTemplate.querySelector('.elements__element').cloneNode(true);
  elementCard.querySelector('.elements__title').textContent = el.name;
  elementCard.querySelector('.elements__delete').addEventListener('click', (event) => event.currentTarget.closest('.elements__element').remove())
  elementCard.querySelector('.elements__group').addEventListener('click', (event) => event.target.classList.toggle('elements__group_active'))
  const elementImage = elementCard.querySelector('.elements__mask-group');
  elementImage.src = el.link;
  elementImage.alt = el.name;
  elementImage.addEventListener('click', (event) => openPopup(event))
  elementsCards.prepend(elementCard);
}
function openPopup(event) {
  if (event.target === profileOpenPopupButtonEdit) {
    popupEditProfile.classList.add('popup-opened');
    popupTitle.textContent = 'Редактировать профиль';
    formPopupSubmit.textContent = 'Сохранить';
    popupEditName.value = profileName.textContent;
    popupEditAboutMe.value = profileSubtitle.textContent;
  } else if (event.target === profileOpenPopupButtonAdd) {
    popupAddCard.classList.add('popup-opened');
    popupTitle.textContent = 'Новое место';
    formPopupSubmit.textContent = 'Создать';
    popupEditName.value = '';
    popupEditAboutMe.value = '';
    popupEditName.placeholder = 'Название';
    popupEditAboutMe.placeholder = 'Ссылка на картинку';
  } else {
    popupZoom.classList.add('popup-opened');
    popupZoomImage.src = event.target.src;
    const elementRectangle = event.target.closest('.elements__rectangle');
    popupZoomSubtitle.textContent = elementRectangle.querySelector('.elements__title').textContent;
  }
}
function closePopup() {
  popupEditProfile.classList.remove('popup-opened');
  popupZoom.classList.remove('popup-opened');
}
function getFormValue(event) {
  event.preventDefault();
  if (formPopupSubmit.textContent === 'Сохранить') {
    profileName.textContent = popupEditName.value;
    profileSubtitle.textContent = popupEditAboutMe.value;
  } else {
    const formData = [{name: popupEditName.value, link: popupEditAboutMe.value}]
    formData.forEach((el) => creatureElementCard(el));
  }
  closePopup();
}
profileOpenPopupButtonEdit.addEventListener('click', openPopup);
profileOpenPopupButtonAdd.addEventListener('click', openPopup);
popupEditProfileClose.addEventListener('click', closePopup);
popupZoomClose.addEventListener('click', closePopup);
formPopupEdit.addEventListener('submit', getFormValue);