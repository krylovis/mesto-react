import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;

  const [newCard, setNewCard] = React.useState({ name: '', link: '' });

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(newCard);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setNewCard(state => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      popupClass="new-place"
      popupTitle="Новое место"
      formName="newPlaceForm"
      ariaLabel="Создать новое место"
      buttonText="Создать"
      inactiveButton={false}
    >
      <label className="popup__label" htmlFor="inputPlaceName">
        <input className="popup__input" id="inputPlaceName" onChange={handleChange} type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error inputPlaceName-error"></span>
      </label>
      <label className="popup__label" htmlFor="inputPlaceLink">
        <input className="popup__input" id="inputPlaceLink" onChange={handleChange} type="url" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
        <span className="popup__input-error inputPlaceLink-error"></span>
      </label>
    </PopupWithForm>
  );
}