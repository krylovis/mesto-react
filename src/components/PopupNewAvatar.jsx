import PopupWithForm from './PopupWithForm';

export default function PopupNewAvatar() {
  return (
    <PopupWithForm
      popupClass="new-avatar"
      isOpened={false}
      popupTitle="Обновить аватар"
      formName="newAvatarForm"
      inactiveButton={false}
      ariaLabel="Сохранить аватар"
      buttonText="Сохранить"
    >
      <label className="popup__label" htmlFor="inputNewAvatar">
        <input className="popup__input" id="inputNewAvatar" type="url" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
        <span className="popup__input-error inputNewAvatar-error"></span>
      </label>
    </PopupWithForm>
  );
}