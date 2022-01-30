const ElementSelectorClasses = {
  form: '.popup__form',
  Input: '.popup__input',
  submitButton: '.popup__save-button',
  inactiveButton: 'popup__save-button_disabled',
  inputError: 'popup__input_type_error',
  textError: 'popup__error_visible'
};

const enableValidation = (formInput) => {
  console.log(formInput);
  if (!formInput.validity.valid) {
    showInputError(formInput);
  } else {
    hideInputError(formInput);
  }
};

// Вынесем все необходимые элементы формы в константы
//const formElement = document.querySelector('.form');
//const formInput = formElement.querySelector('.form__input');

// Функция, которая добавляет класс с ошибкой
/*const showInputError = (element) => {
  element.classList.add('form__input_type_error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});

// Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);*/

ElementSelectorClasses[formsInputs].forEach(formInput => {enableValidation(formInput)});