const BASE_URL = 'https://api.nomoreparties.co';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const defaultOptions = (email, password) => {
  return {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password }),
  }
};

const request = (url, options) => {
  return fetch(url, options).then(getResponse)
};

const getResponse = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (email, password) => {
  return request(`${BASE_URL}/signup`, defaultOptions(email, password))
};

export const authorize = (email, password) => {
  return request(`${BASE_URL}/signin`, defaultOptions(email, password))
};

export const tokenVerification = (token) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
};