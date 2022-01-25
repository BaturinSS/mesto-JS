const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');
const popupEditProfileClose = document.querySelector('.popup__close');
const popupEditProfile = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEditName = document.getElementsByName('name')[0];
const popupEditAboutMe = document.getElementsByName('aboutMe')[0];
const formPopupEdit = document.querySelector('.popup__form');
const elementsTemplate = document.querySelector('#elements-template').content;
const elementsCards = document.querySelector('.elements__cards');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
initialCards.forEach((el) => creatureElementCard(el));
function creatureElementCard(el) {
  const elementCard = elementsTemplate.querySelector('.elements__element').cloneNode(true);
  elementCard.querySelector('.elements__mask-group').src = el.link;
  elementCard.querySelector('.elements__title').textContent = el.name;
  elementsCards.append(elementCard);
}
const elementsGroupButtonDelete = document.querySelectorAll('.elements__delete');
elementsGroupButtonDelete.forEach(function(basket) {
  basket.addEventListener('click', function(event) {
    event.currentTarget.closest('.elements__element').remove();
  })
})
const elementsGroupButtonHeart = document.querySelectorAll('.elements__group');
elementsGroupButtonHeart.forEach(function(card) {
  card.addEventListener('click', function(event) {
    event.target.classList.toggle('elements__group_active');
  })
})
function openPopupEdit(event) {
  if (event.which === 1) {
    popupEditProfile.classList.add('popup_opened');
    popupEditName.value = profileName.textContent;
    popupEditAboutMe.value = profileSubtitle.textContent;
  }
}
function closePopupEdit() {
  popupEditProfile.classList.remove('popup_opened');
}
function getFormValue(event) {
  event.preventDefault();
  profileName.textContent = popupEditName.value;
  profileSubtitle.textContent = popupEditAboutMe.value;
  closePopupEdit();
}
profileOpenPopupButtonEdit.addEventListener('click', openPopupEdit);
popupEditProfileClose.addEventListener('click', closePopupEdit);
formPopupEdit.addEventListener('submit', getFormValue);