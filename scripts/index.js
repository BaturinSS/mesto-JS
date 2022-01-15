//================== Открытие и закрытие Popup Edit =============================

const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit')

const popupEditProfileClose = document.querySelector('.popup-edit__close')

const popupEditProfile = document.querySelector('.popup-edit')

function OpenPopupEdit() {
  popupEditProfile.classList.add('popup-edit_opened')
}

function ClosePopupEdit(event) {
  if (event.currentTarget === event.target || (popupEditProfileClose === event.currentTarget)) {
    popupEditProfile.classList.remove('popup-edit_opened')
  }
}

profileOpenPopupButtonEdit.addEventListener('click', OpenPopupEdit)

popupEditProfileClose.addEventListener('click', ClosePopupEdit)

popupEditProfile.addEventListener('click', ClosePopupEdit)

//================== Открытие и закрытие Popup Edit =============================