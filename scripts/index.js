const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');
const popupEditProfileClose = document.querySelector('.popup-edit__close');
const popupEditProfile = document.querySelector('.popup-edit');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEditName = document.querySelector('.popup-edit__name');
const popupEditComment = document.querySelector('.popup-edit__comment');
const elementsGroupButtonHeart = document.querySelectorAll('.elements__group');
const popupSaveButton = document.querySelector('.popup__save-button');
const formPopupEdit = document.querySelector('.popup-edit__block');
function openPopupEdit(event) {
  if (event.which === 1) {
    popupEditProfile.classList.add('popup-edit_opened')
    popupEditName.value = profileName.textContent;
    popupEditComment.value = profileSubtitle.textContent;
  };
};
elementsGroupButtonHeart.forEach(function(card) {
  card.addEventListener('click', function(event) {
    event.target.classList.toggle('elements__group_active');
  });
});
function closePopupEdit(event) {
  if (event.which === 1) {
    if (event.currentTarget === event.target || popupEditProfileClose === event.currentTarget) {
      popupEditProfile.classList.remove('popup-edit_opened');
    }
  }
};
function getFormValue(event) {
  event.preventDefault()
  profileName.textContent = popupEditName.value;
  profileSubtitle.textContent = popupEditComment.value;
  popupEditProfile.classList.remove('popup-edit_opened');
};
popupEditProfileClose.addEventListener('mousedown', closePopupEdit);
profileOpenPopupButtonEdit.addEventListener('mousedown', openPopupEdit);
popupEditProfile.addEventListener('mousedown', closePopupEdit);
formPopupEdit.addEventListener('submit', getFormValue);