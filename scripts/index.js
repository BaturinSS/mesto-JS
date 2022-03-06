const popupEditProfile = document.querySelector('.popup_edit-profile');

const profileOpenPopupButtonEdit = document.querySelector('.profile__button-edit');

const popupFormEdit = popupEditProfile.querySelector('.popup__form');

const inputUserName = document.querySelector('.popup__input_user-name');

const inputUserProfession = document.querySelector('.popup__input_user-profession');

const profileName = document.querySelector('.profile__name');

const profileSubtitle = document.querySelector('.profile__subtitle');

const popupAddCard = document.querySelector('.popup_add-card');

const profileOpenPopupButtonAdd = document.querySelector('.profile__button-add');

const popupFormAdd = popupAddCard.querySelector('.popup__form');

const inputCardTitle = document.querySelector('.popup__input_card-title');

const inputCardLink = document.querySelector('.popup__input_card-link');

const popupZoom = document.querySelector('.popup_image-zoom');

const popupZoomSubtitle = popupZoom.querySelector('.popup__subtitle');

const popupZoomImage = popupZoom.querySelector('.popup__image');

const elementsTemplate = document.querySelector('#elements-template').content;

const elementsCards = document.querySelector('.elements__cards');

const buttonsCloseList = document.querySelectorAll('.popup__close');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  closePopupEventEscapeKey();
  checkingFormFilling(popup);
}

function openImagePopup(elementImage) {
  popupZoomImage.src = elementImage.src;
  popupZoomImage.alt = elementImage.alt;
  popupZoomSubtitle.textContent = elementImage.alt;
  openPopup(popupZoom);
}

function openEditProfilePopup() {
  inputUserName.value = profileName.textContent;
  inputUserProfession.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
}

function openAddImagePopup() {
  popupFormAdd.reset();
  openPopup(popupAddCard);
}

function submitAddCardForm(event) {
  event.preventDefault();
  addCard({name: inputCardTitle.value, link: inputCardLink.value});
  closePopup(popupAddCard);
}

function submitEditProfileForm(event) {
  event.preventDefault();
  profileName.textContent = inputUserName.value;
  profileSubtitle.textContent = inputUserProfession.value;
  closePopup(popupEditProfile);
}

function addCard(cardInfo) {elementsCards.prepend(createCard(cardInfo))}

function createCard(cardInfo) {
  const elementCard = elementsTemplate.querySelector('.elements__element').cloneNode(true);
  elementCard.querySelector('.elements__title').textContent = cardInfo.name;
  elementCard.querySelector('.elements__delete').addEventListener('click', event => event.currentTarget.closest('.elements__element').remove());
  elementCard.querySelector('.elements__group').addEventListener('click', event => event.target.classList.toggle('elements__group_active'));
  const elementImage = elementCard.querySelector('.elements__mask-group');
  elementImage.src = cardInfo.link;
  elementImage.alt = cardInfo.name;
  elementImage.addEventListener('click', () => openImagePopup(elementImage));
  return elementCard;
}

function closePopup(popup) {
  checkingFormFilling(popup);
  popup.classList.remove('popup_opened');
  removeEventEscapeKey();
}

function closePopupEventEscapeKey() {document.addEventListener('keydown', checkingKeystroke)}

function checkingKeystroke(event) {if (event.key === 'Escape') {const popup = document.querySelector('.popup_opened'); closePopup(popup)}}

function removeEventEscapeKey() {document.removeEventListener('keydown', checkingKeystroke)}

buttonsCloseList.forEach(buttonClose => buttonClose.addEventListener('mousedown', function() {
  const popupActive = document.querySelector('.popup_opened');
  closePopup(popupActive);
}))

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('popup_opened')) {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
})

profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

popupFormEdit.addEventListener('submit', submitEditProfileForm);

popupFormAdd.addEventListener('submit', submitAddCardForm);

initialCards.forEach(cardInfo => addCard(cardInfo));