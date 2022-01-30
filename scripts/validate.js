
/*const formData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};



const formsList = document.querySelectorAll('.popup__form');

formsList.forEach(form => {
  const imputFormList = form.querySelectorAll('.popup__input');
  imputFormList.forEach(formInput => {
    formInput.addEventListener('input', () => isValid(formInput));
  })
});

const showInputError = formInput => {
  formInput.classList.remove('popup__input_type_error');
};

const hideInputError = formInput => {
  formInput.classList.add('popup__input_type_error');
};

const isValid = (formInput) => {
  console.log(formInput.validity.valid)
  if (formInput.validity.valid) {
    showInputError(formInput);
  } else {
    hideInputError(formInput);
  }
};*/