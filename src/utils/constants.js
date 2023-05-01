import UserInfo from '../components/UserInfo.js';

export const profileEditAvatarButton = document.querySelector('.profile__edit-avatar-button');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');

export const formValidators = {};

export const formSelectors = {
  label: '.popup__label',
  input: '.popup__input',
  inputTypeError: '.popup__input_type_error',
  inputError: '.popup__input-error',
  inputErrorActive: 'popup__input-error_active',
  submitBtn: '.popup__submit-button',
  submitBtnInactive: 'popup__submit-button_inactive',
};

// UserInfo
export const userInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__subtitle',
  avatar: '.profile__avatar',
});