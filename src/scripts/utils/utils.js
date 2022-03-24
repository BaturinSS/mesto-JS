import * as constants from '../utils/constants.js';

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  closePopupEventEscapeKey();
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeEventEscapeKey();
}

function closePopupEventEscapeKey() {
  document.addEventListener('keydown', checkingKeystroke);
}

function checkingKeystroke(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function removeEventEscapeKey() {
  document.removeEventListener('keydown', checkingKeystroke);
}

constants.popups.forEach(popup => {
  popup.addEventListener('mousedown', event => {
    if (event.target.classList.contains('popup_opened') | event.target.classList.contains('popup__image-cross')) {
      closePopup(popup);
    }
  })
})