export class Card {
  constructor(cardInfo, selectorTemplate, handleImageClick, handleDeleteClick, userId) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._likes = cardInfo.likes;
    this._id = cardInfo._id;
    this._userId = userId;
    this._ownerId = cardInfo.owner._id;
    this._selectorTemplate = selectorTemplate;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
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
    this._setLikes();
    if (this._ownerId !== this._userId) {
      this._element.querySelector('.elements__delete').style.display = 'none';
    };
    return this._element;
  };

  _setEventListeners() {
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._handleDeleteClick(this._id);

    });
    this._likeButton.addEventListener('click', () => this._handleLikeButton());
    this._elementImage.addEventListener('click', this._handleImageClick);
  };

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('elements__group_active');
  };

  _setLikes() {
    const likeCountElement = this._element.querySelector('.elements__number-likes');
    likeCountElement.textContent = this._likes.length;
  }
};