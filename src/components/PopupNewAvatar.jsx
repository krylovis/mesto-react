import PopupWithForm from './PopupWithForm';

export default function PopupNewAvatar(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      popupClass="new-avatar"
      popupTitle="Обновить аватар"
      formName="newAvatarForm"
      ariaLabel="Сохранить аватар"
      buttonText="Сохранить"
      inactiveButton={false}
    >
      <label className="popup__label" htmlFor="inputNewAvatar">
        <input className="popup__input" id="inputNewAvatar" type="url" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
        <span className="popup__input-error inputNewAvatar-error"></span>
      </label>
    </PopupWithForm>
  );
}