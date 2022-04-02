class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(`Error getUserInfo(): № ${res.status}`))
      .catch(console.log)
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(`Error getCards(): № ${res.status}`))
      .catch(console.log)
  }

  editUserInfo(name, about, buttonInfo) {
    this._renderLoading(true, buttonInfo);
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(`Error editUserInfo(): № ${res.status}`))
      .catch(console.log)
      .finally(() => {
        this._renderLoading(false, buttonInfo);
      })
  }

  addCard(name, link, buttonInfo) {
    this._renderLoading(true, buttonInfo);
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(`Error addCard(): № ${res.status}`))
      .catch(console.log)
      .finally(() => {
        this._renderLoading(false, buttonInfo);
      })
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(`Error deleteCard(): № ${res.status}`))
      .catch(console.log)
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(`Error addLike(): № ${res.status}`))
      .catch(console.log)
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(`Error deleteLike(): № ${res.status}`))
      .catch(console.log)
  }

  editAvatar(avatar, buttonSubmit) {
    this._renderLoading(true, buttonSubmit);
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(`Error editAvatar(): № ${res.status}`))
      .catch(console.log)
      .finally(() => {
        this._renderLoading(false, buttonSubmit);
      })
  }

  _renderLoading(isLoading, { buttonSubmit, textDefault }) {
    if (isLoading) {
      buttonSubmit.textContent = 'Сохранение...';
    } else {
      buttonSubmit.textContent = textDefault;
    }
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'ef26a870-ce14-4ae0-b138-67948bcf24ea',
    'Content-Type': 'application/json'
  }
});