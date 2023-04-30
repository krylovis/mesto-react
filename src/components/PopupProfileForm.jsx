import PopupWithForm from './PopupWithForm';

export default function PopupProfileForm(props) {
  const { isOpen, onClose } = props;

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      popupClass="profile-form"
      popupTitle="Редактировать профиль"
      formName="profileForm"
      ariaLabel="Сохранить данные"
      buttonText="Сохранить"
      inactiveButton={false}
    >
      <label className="popup__label" htmlFor="inputName">
        <input className="popup__input" id="inputName" type="text" name="userName" placeholder="ФИО" required minLength="2" maxLength="40" />
        <span className="popup__input-error inputName-error"></span>
      </label>
      <label className="popup__label" htmlFor="inputJob">
        <input className="popup__input" id="inputJob" type="text" name="job" placeholder="Профессия" required minLength="2" maxLength="200" />
        <span className="popup__input-error inputJob-error"></span>
      </label>
    </PopupWithForm>
  );
}