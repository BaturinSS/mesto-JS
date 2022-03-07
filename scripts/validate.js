const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  textErrorClass: 'popup__input-error_active'
}

function getErrorMessage(inputElement) {return inputElement.validationMessage}

function showInputError(formData, inputElement) {inputElement.classList.add(formData.inputErrorClass)}

function includeErrorText(formData, inputElement) {
  const formActive = inputElement.closest(formData.formSelector);
  const inputError = formActive.querySelector(`.${inputElement.id}-error`);
  inputError.textContent = '';
  inputError.classList.add(formData.textErrorClass);
  inputError.textContent = getErrorMessage(inputElement);
}

function hideInputError(formData, inputElement) {inputElement.classList.remove(formData.inputErrorClass)}

function disableErrorText(formData, inputElement) {
  const formActive = inputElement.closest(formData.formSelector);
  const inputError = formActive.querySelector(`.${inputElement.id}-error`);
  inputError.classList.remove(formData.textErrorClass);
}

function deactivateButton(formData, inputElement) {
  const formActive = inputElement.closest(formData.formSelector);
  const submitButton = formActive.querySelector(formData.submitButtonSelector);
  submitButton.setAttribute('disabled', true);
  submitButton.classList.add(formData.inactiveButtonClass);
}

export function checkingFormFilling(popup) {
  const inputList = popup.querySelectorAll('input');
  inputList.forEach(inputElement => {
    disableErrorText(config, inputElement);
    hideInputError(config, inputElement);
    changingButtonState(config, inputElement);
  })
}

function activationButton(formData, inputElement) {
  const formActive = inputElement.closest(formData.formSelector);
  const submitButton = formActive.querySelector(formData.submitButtonSelector);
  submitButton.removeAttribute('disabled');
  submitButton.classList.remove(formData.inactiveButtonClass);
}

function hasInvalidInput(formData, inputElement) {
  const formActive = inputElement.closest(formData.formSelector);
  const inputsFormActive = Array.from(formActive.querySelectorAll(formData.inputSelector));
  return inputsFormActive.some(inputElement => {return !inputElement.validity.valid});
}

function changingButtonState(formData, inputElement) {
  const validityFormActive = hasInvalidInput(formData, inputElement);
  if (!validityFormActive) {
    activationButton(formData, inputElement);
  } else {
    deactivateButton(formData, inputElement);
  }
}

function isValid(formData, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formData, inputElement);
    includeErrorText(formData, inputElement);
  } else {
    hideInputError(formData, inputElement);
    disableErrorText(formData, inputElement);
  }
  changingButtonState(formData, inputElement);
}

function enableValidation(formData) {
  const arrayForms = Array.from(document.querySelectorAll(formData.formSelector));
  arrayForms.forEach(form => {
    const arrayInputsForm = Array.from(form.querySelectorAll(formData.inputSelector));
    arrayInputsForm.forEach(inputElement => {inputElement.addEventListener('input', () => isValid(formData, inputElement));
  })
})
}

enableValidation(config);