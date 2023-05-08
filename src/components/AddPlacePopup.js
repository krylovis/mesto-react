import PopupWithForm from './PopupWithForm';

export default function PopupNewPlace(props) {
  const { isOpen, onClose } = props;

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      popupClass="new-place"
      popupTitle="Новое место"
      formName="newPlaceForm"
      ariaLabel="Создать новое место"
      buttonText="Создать"
      inactiveButton={false}
    >
      <label className="popup__label" htmlFor="inputPlaceName">
        <input className="popup__input" id="inputPlaceName" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error inputPlaceName-error"></span>
      </label>
      <label className="popup__label" htmlFor="inputPlaceLink">
        <input className="popup__input" id="inputPlaceLink" type="url" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
        <span className="popup__input-error inputPlaceLink-error"></span>
      </label>
    </PopupWithForm>
  );
}