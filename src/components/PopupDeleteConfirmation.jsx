import PopupWithForm from './PopupWithForm';

export default function PopupDeleteConfirmation() {
  return (
    <PopupWithForm
      popupClass="delete-confirmation"
      isOpened={false}
      popupTitle="Вы уверены?"
      formName="deleteConfirmation"
      inactiveButton={false}
      ariaLabel="Удалить место"
      buttonText="Да"
    />
  );
}