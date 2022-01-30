
const formData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  textErrorClass: 'popup__input-error_active'
}

const showInputError = (formInput, inputErrorClass) => {
  formInput.classList.add(inputErrorClass);
  document.querySelectorAll('.popup__input-error').forEach((error) => error.classList.add('popup__input-error_active'));
  //const formError = formInput.querySelector(`.${formInput.id}-error`);
}
console.log('hi')
const hideInputError = (formInput, inputErrorClass) => {
  formInput.classList.remove(inputErrorClass);
  document.querySelectorAll('.popup__input-error').forEach((error) => error.classList.remove('popup__input-error_active'));
}

/*const checkValidation = () => {
  return formInput.validity.valid;
}*/

const deactivateButton  = (arrayButtonForms, ButtonDisabled) => {
  arrayButtonForms.forEach(buttonForm => {
    buttonForm.classList.add(ButtonDisabled);
  })
}

const activationButton  = (arrayButtonForms, ButtonDisabled) => {
  arrayButtonForms.forEach(buttonForm => {
    buttonForm.classList.remove(ButtonDisabled);
  })
}

const isValid = (formInput, inputErrorClass, arraySubmitButtonForms, submitButtonDisabled) => {
  if (!formInput.validity.valid) {
    showInputError(formInput, inputErrorClass);
    deactivateButton(arraySubmitButtonForms, submitButtonDisabled);

  } else {
    hideInputError(formInput, inputErrorClass);
    activationButton(arraySubmitButtonForms, submitButtonDisabled);
  }
}

const addListeners = (arrayInputs, inputErrorClass, arraySubmitButtonForms, submitButtonDisabled) => {
  arrayInputs.forEach(input => {
    input.addEventListener('input', () => isValid(input, inputErrorClass, arraySubmitButtonForms, submitButtonDisabled));
  })
}

const checkFillingInput = (arrayInputs,inputErrorClass, arraySubmitButtonForms, submitButtonDisabled) => {
  arrayInputs.forEach(input => {
    isValid(input, inputErrorClass, arraySubmitButtonForms, submitButtonDisabled);
  })
}

const enableValidation = formData => {
  const arrayFormsPopups = document.querySelectorAll(formData['formSelector']);
  const arrayInputsForms = document.querySelectorAll(formData['inputSelector']);
  const arraySubmitButtonForms = document.querySelectorAll(formData['submitButtonSelector']);
  const inputErrorClass = formData['inputErrorClass'];
  addListeners(arrayInputsForms, inputErrorClass, arraySubmitButtonForms, formData['inactiveButtonClass']);
  checkFillingInput(arrayInputsForms, inputErrorClass, arraySubmitButtonForms, formData['inactiveButtonClass'])
}