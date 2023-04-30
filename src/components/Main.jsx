import PopupNewPlace from './PopupNewPlace';
import PopupProfileForm from './PopupProfileForm';
import PopupNewAvatar from './PopupNewAvatar';

export default function Main() {
  function handleEditAvatarClick() {
    const popup = document.querySelector('.popup_type_new-avatar');
    popup.classList.add('popup_opened');
    console.log('handleEditAvatarClick');
  };

  function handleEditProfileClick() {
    const popup = document.querySelector('.popup_type_profile-form');
    popup.classList.add('popup_opened');
    console.log('handleEditProfileClick');
  };

  function handleAddPlaceClick() {
    const popup = document.querySelector('.popup_type_new-place');
    popup.classList.add('popup_opened');
    console.log('handleAddPlaceClick');
  };

  return (
    <>
      <main className="content">

        <section className="profile">
          <button className="profile__edit-avatar-button" type="button" aria-label="Редактировать Аватар" onClick={handleEditAvatarClick}>
            <img alt="Аватар" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name"></h1>
              <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
          <button className="button profile__add-button" type="button" aria-label="Добавить место" onClick={handleAddPlaceClick}></button>
        </section>

        <section className="elements">

        </section>

        <PopupProfileForm />
        <PopupNewPlace />
        <PopupNewAvatar />

        <section className="popup popup_type_place-photo">
          <figure className="popup__container popup__container_type_place-photo">
            <img alt="Фото" className="popup__photo" />
            <figcaption className="popup__figcaption"></figcaption>
            <button className="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
          </figure>
        </section>

        <section className="popup popup_type_delete-confirmation">
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>

            <form action="deleteConfirmationAction" name="deleteConfirmation" className="popup__form popup__form_type_delete-confirmation">
              <button className="button popup__submit-button" type="submit"
                aria-label="Создать место">Да</button>
            </form>

            <button className="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
          </div>
        </section>

      </main>
    </>
  );
}