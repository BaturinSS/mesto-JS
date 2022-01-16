const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit')

const popupEditProfileClose = document.querySelector('.popup-edit__close')

const popupEditProfile = document.querySelector('.popup-edit')

profileOpenPopupButtonEdit.addEventListener('click', function() {
  popupEditProfile.classList.add('popup-edit_opened')
})

function ClosePopupEdit(event) {
  if (event.currentTarget === event.target || (popupEditProfileClose === event.currentTarget)) {
    popupEditProfile.classList.remove('popup-edit_opened')
  }
}

popupEditProfileClose.addEventListener('click', ClosePopupEdit)

popupEditProfile.addEventListener('click', ClosePopupEdit)
//================== Открытие и закрытие Popup Edit =============================
const elementsGroupButtonHeart = document.querySelectorAll('.elements__group')

elementsGroupButtonHeart.forEach(function(card) {
  card.addEventListener('click', function(event) {
    event.target.classList.add('elements__group_active')
  })
})
//================== Смена цвета сердечка на карточке при нажатии ===============