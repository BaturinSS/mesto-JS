export class Card {
  constructor(cardInfo, selectorTemplate, handleImageClick) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._selectorTemplate = selectorTemplate;
    this._handleImageClick = handleImageClick;
  };

  _getTemplate() {
    const elementCard = document
    .querySelector(this._selectorTemplate)
    .content
    .querySelector('.elements__element')
    .cloneNode(true);
    return elementCard;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.elements__mask-group');
    this._likeButton = this._element.querySelector('.elements__group');
    this._setEventListeners();
    this._element.querySelector('.elements__title').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    return this._element;
  };

  _setEventListeners() {
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._element.remove();
      this._element = null;
    });
    this._likeButton.addEventListener('click', () => this._handleLikeButton());
    this._elementImage.addEventListener('click', this._handleImageClick);
  };
  
  _handleLikeButton() {
    this._likeButton.classList.toggle('elements__group_active');
  };
};