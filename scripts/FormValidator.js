export class FormValidator {
  constructor(formData, formActivePopup) {
    this._formActivePopup = formActivePopup;
    this._formSelector = formData.formSelector;
    this._inputSelector = formData.inputSelector;
    this._submitButtonSelector = formData.submitButtonSelector;
    this._inactiveButtonClass = formData.inactiveButtonClass;
    this._inputErrorClass = formData.inputErrorClass;
    this._textErrorClass = formData.textErrorClass;
    this._submitButton = this._formActivePopup.querySelector(this._submitButtonSelector);
    this._arrayInputsFormActive = Array.from(this._formActivePopup.querySelectorAll(this._inputSelector));
  }

  _deactivateButton() {
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  _activationButton() {
    this._submitButton.removeAttribute('disabled');
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  _hasInvalidInput() {
    return this._arrayInputsFormActive.some(inputElement => {
      return !inputElement.validity.valid;
    })
  }

  _changingButtonState() {
    const validityFormActive = this._hasInvalidInput();
    if (!validityFormActive) {
      this._activationButton();
    } else {
      this._deactivateButton();
    }
  }

  _disableErrorText(inputElement) {
    const inputError = this._formActivePopup.querySelector(`.${inputElement.id}-error`);
    inputError.classList.remove(this._textErrorClass);
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
  }

  _getErrorMessage(inputElement) {
    return inputElement.validationMessage;
  }

  _includeErrorText(inputElement) {
    const inputError = this._formActivePopup.querySelector(`.${inputElement.id}-error`);
    inputError.textContent = '';
    inputError.classList.add(this._textErrorClass);
    inputError.textContent = this._getErrorMessage(inputElement);
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
      this._includeErrorText(inputElement);
    } else {
      this._hideInputError(inputElement);
      this._disableErrorText(inputElement);
    }
    this._changingButtonState();
  }

  _setEventListeners(inputElement) {
    inputElement.addEventListener('input', () => {
      this._isValid(inputElement);
    })
  }

  enableValidation() {
    this._arrayInputsFormActive.forEach(inputElement => {
      this._setEventListeners(inputElement);
      this._disableErrorText(inputElement);
      this._hideInputError(inputElement);
      this._changingButtonState(inputElement);
    })
  }
}