import { Popup } from "./Popup";

export class PopupWithConfirm extends Popup {
  constructor(popupSelector, titleButton, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._titleButton = titleButton;
    this._form = this._popup.querySelector('.popup__form');
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmit = newSubmitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit.addEventListener('click', () => {
      this.renderLoading(true);
      this._handleSubmit();
    })
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = this._titleButton;
      this._buttonSubmit.setAttribute('disabled', 'true');
    } else {
      this._buttonSubmit.textContent = this._buttonDefault.textContent;
    }
  }
}