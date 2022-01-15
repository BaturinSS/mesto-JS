const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit')

const popupEditProfileClose = document.querySelector('.popup-edit__close')

const popupEditProfile = document.querySelector('.popup-edit')

function OpenPopupEdit() {
  popupEditProfile.classList.add('popup-edit_opened')
}

profileOpenPopupButtonEdit.addEventListener('click', OpenPopupEdit)

function ClosePopupEdit() {
  popupEditProfile.classList.remove('popup-edit_opened')
}

popupEditProfileClose.addEventListener('click', ClosePopupEdit)