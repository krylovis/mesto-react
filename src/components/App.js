import Header from './Header.js';

function App() {
  return (
    <>
    <Header />

    <main className="content">

      <section className="profile">
        <button className="profile__edit-avatar-button" type="button" aria-label="Редактировать Аватар">
          <img alt="Аватар" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name"></h1>
            <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
          </div>
          <p className="profile__subtitle"></p>
        </div>
        <button className="button profile__add-button" type="button" aria-label="Добавить место"></button>
      </section>

      <section className="elements">

      </section>

      <section className="popup popup_type_profile-form">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>

          <form action="profileFormAction" name="profileForm" className="popup__form">
            <label className="popup__label" htmlFor="inputName">
              <input className="popup__input" id="inputName" type="text" name="userName" placeholder="ФИО" required minLength="2" maxLength="40" />
              <span className="popup__input-error inputName-error"></span>
            </label>
            <label className="popup__label" htmlFor="inputJob">
              <input className="popup__input" id="inputJob" type="text" name="job" placeholder="Профессия" required minLength="2" maxLength="200" />
              <span className="popup__input-error inputJob-error"></span>
            </label>
            <button className="button popup__submit-button popup__submit-button_inactive" type="submit"
              aria-label="Сохранить данные">Сохранить</button>
          </form>

          <button className="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section>

      <section className="popup popup_type_new-place">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>

          <form action="newPlaceFormAction" name="newPlaceForm" className="popup__form">
            <label className="popup__label" htmlFor="inputPlaceName">
              <input className="popup__input" id="inputPlaceName" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
              <span className="popup__input-error inputPlaceName-error"></span>
            </label>
            <label className="popup__label" htmlFor="inputPlaceLink">
              <input className="popup__input" id="inputPlaceLink" type="url" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
              <span className="popup__input-error inputPlaceLink-error"></span>
            </label>
            <button className="button popup__submit-button popup__submit-button_inactive" type="submit"
              aria-label="Создать место">Создать</button>
          </form>

          <button className="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section>

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

          <form action="deleteСonfirmationAction" name="deleteСonfirmation" className="popup__form popup__form_type_delete-confirmation">
            <button className="button popup__submit-button" type="submit"
              aria-label="Создать место">Да</button>
          </form>

          <button className="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section>

      <section className="popup popup_type_new-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>

          <form action="newAvatarFormAction" name="newAvatarForm" className="popup__form">
            <label className="popup__label" htmlFor="inputNewAvatar">
              <input className="popup__input" id="inputNewAvatar" type="url" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
              <span className="popup__input-error inputNewAvatar-error"></span>
            </label>
            <button className="button popup__submit-button popup__submit-button_inactive" type="submit"
              aria-label="Создать место">Сохранить</button>
          </form>

          <button className="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section>

      <footer className="footer">
        <p className="footer__text">© 2020 Mesto Russia</p>
      </footer>

    </main>

  <template id="element-template">
    <div className="element">
      <button className="button element__button element__trash" type="button" aria-label="Удалить место"></button>
      <img alt="Фото" className="element__image" />
      <div className="element__container">
        <p className="element__title"></p>
        <div className="element__like-container">
          <button className="button element__button element__like" type="button" aria-label="Поставить лайк"></button>
          <span className="element__counter"></span>
        </div>
      </div>
    </div>
  </template>
  </>
  );
}

export default App;
