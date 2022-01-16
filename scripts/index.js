const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit')

const popupEditProfileClose = document.querySelector('.popup-edit__close')

const popupEditProfile = document.querySelector('.popup-edit')

function openPopupEdit(event) {
  if (event.which === 1) {
    popupEditProfile.classList.add('popup-edit_opened')
  }
}

profileOpenPopupButtonEdit.addEventListener('mousedown', openPopupEdit)

function closePopupEdit(event) {
  if (event.which === 1) {
    if (event.currentTarget === event.target || (popupEditProfileClose === event.currentTarget)) {
      popupEditProfile.classList.remove('popup-edit_opened')
      console.log(event)
    }
  }
}

popupEditProfileClose.addEventListener('mousedown', closePopupEdit)

popupEditProfile.addEventListener('mousedown', closePopupEdit)

//================== Открытие и закрытие Popup Edit =============================

const elementsGroupButtonHeart = document.querySelectorAll('.elements__group')

elementsGroupButtonHeart.forEach(function(card) {
  card.addEventListener('click', function(event) {
    event.target.classList.toggle('elements__group_active')
  })
})

//============== Смена цвета сердечка на карточке при нажатии ====================