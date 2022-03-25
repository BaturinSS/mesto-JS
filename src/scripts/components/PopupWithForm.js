import { Popup } from '../components/Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSabmit) {
    super(popupSelector);
    this._handleSabmit = handleSabmit;
    this._form = this._popup.querySelector('.popup__form')
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const inputs = [...this._form.querySelectorAll('.popup__input')];
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._handleSabmit(this._getInputValues());
    })
  }
}