const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');
const popupEditProfileClose = document.querySelector('.popup__close');
const popupEditProfile = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEditName = document.getElementsByName('name')[0];
const popupEditAboutMe = document.getElementsByName('aboutMe')[0];
const formPopupEdit = document.querySelector('.popup__form');
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
  if (popupEditProfileClose === event.currentTarget) {
    event.preventDefault();
  } else {
    event.preventDefault();
    profileName.textContent = popupEditName.value;
    profileSubtitle.textContent = popupEditAboutMe.value;
    closePopupEdit();
  }
}
profileOpenPopupButtonEdit.addEventListener('click', openPopupEdit);
popupEditProfileClose.addEventListener('click', closePopupEdit);
//formPopupEdit.addEventListener('submit', getFormValue);