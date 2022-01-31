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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  closePopupEventEscapeKey(popup);
  closePopupEventOverlayClick(popup);
  closePopupEventCrossClick(popup);
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
  checkingFormFilling(popupEditProfile);
}

function openAddImagePopup() {
  popupFormAdd.reset();
  openPopup(popupAddCard);
  checkingFormFilling(popupAddCard);
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

function addCard(cardInfo) {elementsCards.prepend(createCard(cardInfo))};

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
  popup.classList.remove('popup_opened');
  removeEventPopup(popup);
}

function closePopupEventCrossClick(popup) {popup.addEventListener('mousedown', checkingCrossClick)};

function checkingCrossClick(event) {
  const popupActive = event.currentTarget;
  const closeCrossButton = popupActive.querySelector('.popup__image-cross');
  if (event.target === closeCrossButton) {
    closePopup(popupActive);
  }
}

function closePopupEventOverlayClick(popup) {popup.addEventListener('mousedown', checkingOverlayClick)};

function checkingOverlayClick(event) {if (event.target === event.currentTarget) {closePopup(event.target)}};

function closePopupEventEscapeKey(popup) {popup.addEventListener('keydown', checkingKeystroke)};

function checkingKeystroke(event) {{if (event.key === 'Escape') {closePopup(event.currentTarget)}}};

function removeEventPopup(popup) {
  popup.removeEventListener('mousedown', checkingOverlayClick);
  popup.removeEventListener('keydown', checkingKeystroke);
  popup.removeEventListener('mousedown', checkingCrossClick);
}

profileOpenPopupButtonEdit.addEventListener('click', openEditProfilePopup);

profileOpenPopupButtonAdd.addEventListener('click', openAddImagePopup);

popupFormEdit.addEventListener('submit', submitEditProfileForm);

popupFormAdd.addEventListener('submit', submitAddCardForm);

initialCards.forEach(cardInfo => addCard(cardInfo));