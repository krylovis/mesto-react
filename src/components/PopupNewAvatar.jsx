import PopupWithForm from './PopupWithForm';

export default function PopupNewAvatar(props) {
  const { isOpen } = props;
  return (
    <PopupWithForm
      popupClass="new-avatar"
      isOpen={isOpen}
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