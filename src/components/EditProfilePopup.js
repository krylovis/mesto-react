import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { isOpen, onClose, onUpdateUser } = props;

  const [userInfo, setUserInfo] = React.useState({ name: '', about: '' });

  React.useEffect(() => {
    setUserInfo((state) => ({
      ...state,
      ...currentUser,
    }));
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(userInfo);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo(state => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupClass="profile-form"
      popupTitle="Редактировать профиль"
      formName="profileForm"
      ariaLabel="Сохранить данные"
      buttonText="Сохранить"
      inactiveButton={false}
    >
      <label className="popup__label" htmlFor="inputName">
        <input className="popup__input" id="inputName" type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder="ФИО" required minLength="2" maxLength="40" />
        <span className="popup__input-error inputName-error"></span>
      </label>
      <label className="popup__label" htmlFor="inputJob">
        <input className="popup__input" id="inputJob" type="text" name="about" value={userInfo.about} onChange={handleChange} placeholder="Профессия" required minLength="2" maxLength="200" />
        <span className="popup__input-error inputJob-error"></span>
      </label>
    </PopupWithForm>
  );
}