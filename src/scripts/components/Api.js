class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { method: 'GET', headers: this._headers })
      .then(res => res.ok ? res.json() : Promise.reject(`Error getUserInfo(): № ${res.status}`))
      .catch(console.log)
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, { method: 'GET', headers: this._headers })
      .then(res => res.ok ? res.json() : Promise.reject(`Error getCards(): № ${res.status}`))
      .catch(console.log)
  }

  editUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Error editUserInfo(): № ${res.status}`))
      .catch(console.log)
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'ef26a870-ce14-4ae0-b138-67948bcf24ea',
    'Content-Type': 'application/json'
  }
});