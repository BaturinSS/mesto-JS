import { Popup } from '../components/Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSabmit) {
    super(popupSelector);
    this._handleSabmit = handleSabmit;
    this._form = this._popup.querySelector('.popup__form');
    this._buttonInfo = {
      buttonSubmit: this._form.querySelector('.popup__save-button'),
      textDefault: this._form.querySelector('.popup__save-button').textContent
    };
    this._inputs = [...this._form.querySelectorAll('.popup__input')];
  };

  close() {
    super.close();
    this._form.reset();
  };

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  };

  changeSubmitHandler(newSubmitHandler) {
    this._handleSabmit = newSubmitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSabmit(this._getInputValues(), this._buttonInfo);
    });
  };
};