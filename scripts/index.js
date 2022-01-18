const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');
const popupEditProfileClose = document.querySelector('.popup-edit__close');
const popupEditProfile = document.querySelector('.popup-edit');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEditName = document.querySelector('.popup-edit__name');
const popupEditComment = document.querySelector('.popup-edit__comment');
const formPopupEdit = document.querySelector('.popup-edit__block');
function openPopupEdit(event) {
  if (event.which === 1) {
    popupEditProfile.classList.add('popup-edit_opened');
    popupEditName.value = profileName.textContent;
    popupEditComment.value = profileSubtitle.textContent;
  }
}
function closePopupEdit() {
  popupEditProfile.classList.remove('popup-edit_opened');
}
function getFormValue(event) {
  event.preventDefault();
  profileName.textContent = popupEditName.value;
  profileSubtitle.textContent = popupEditComment.value;
  closePopupEdit();
}
profileOpenPopupButtonEdit.addEventListener('click', openPopupEdit);
popupEditProfileClose.addEventListener('click', closePopupEdit);
formPopupEdit.addEventListener('submit', getFormValue);