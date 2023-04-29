import logo from './images/logo.svg';

function App() {
  return (
    <>
    <div class="root">
    <header class="header">
      <img src={logo} alt="Логотип: Место" class="header__logo" />
    </header>

    <main class="content">

      <section class="profile">
        <button class="profile__edit-avatar-button" type="button" aria-label="Редактировать Аватар">
          <img alt="Аватар" class="profile__avatar" />
        </button>
        <div class="profile__info">
          <div class="profile__title">
            <h1 class="profile__name"></h1>
            <button class="button profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
          </div>
          <p class="profile__subtitle"></p>
        </div>
        <button class="button profile__add-button" type="button" aria-label="Добавить место"></button>
      </section>

      <section class="elements">

      </section>

      <section class="popup popup_type_profile-form">
        <div class="popup__container">
          <h2 class="popup__title">Редактировать профиль</h2>

          <form action="profileFormAction" name="profileForm" class="popup__form">
            <label class="popup__label" for="inputName">
              <input class="popup__input" id="inputName" type="text" name="userName" placeholder="ФИО" required
                minlength="2" maxlength="40" />
              <span class="popup__input-error inputName-error"></span>
            </label>
            <label class="popup__label" for="inputJob">
              <input class="popup__input" id="inputJob" type="text" name="job" placeholder="Профессия" required
                minlength="2" maxlength="200" />
              <span class="popup__input-error inputJob-error"></span>
            </label>
            <button class="button popup__submit-button popup__submit-button_inactive" type="submit"
              aria-label="Сохранить данные">Сохранить</button>
          </form>

          <button class="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section>

      <section class="popup popup_type_new-place">
        <div class="popup__container">
          <h2 class="popup__title">Новое место</h2>

          <form action="newPlaceFormAction" name="newPlaceForm" class="popup__form">
            <label class="popup__label" for="inputPlaceName">
              <input class="popup__input" id="inputPlaceName" type="text" name="name" placeholder="Название" required
                minlength="2" maxlength="30" />
              <span class="popup__input-error inputPlaceName-error"></span>
            </label>
            <label class="popup__label" for="inputPlaceLink">
              <input class="popup__input" id="inputPlaceLink" type="url" name="link" placeholder="Ссылка на картинку"
                required pattern="https://.*" />
              <span class="popup__input-error inputPlaceLink-error"></span>
            </label>
            <button class="button popup__submit-button popup__submit-button_inactive" type="submit"
              aria-label="Создать место">Создать</button>
          </form>

          <button class="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section>

      <section class="popup popup_type_place-photo">
        <figure class="popup__container popup__container_type_place-photo">
          <img alt="Фото" class="popup__photo" />
          <figcaption class="popup__figcaption"></figcaption>
          <button class="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </figure>
      </section>

      <section class="popup popup_type_delete-confirmation">
        <div class="popup__container">
          <h2 class="popup__title">Вы уверены?</h2>

          <form action="deleteСonfirmationAction" name="deleteСonfirmation" class="popup__form popup__form_type_delete-confirmation">
            <button class="button popup__submit-button" type="submit"
              aria-label="Создать место">Да</button>
          </form>

          <button class="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section>

      <section class="popup popup_type_new-avatar">
        <div class="popup__container">
          <h2 class="popup__title">Обновить аватар</h2>

          <form action="newAvatarFormAction" name="newAvatarForm" class="popup__form">
            <label class="popup__label" for="inputNewAvatar">
              <input class="popup__input" id="inputNewAvatar" type="url" name="link" placeholder="Ссылка на картинку"
                required pattern="https://.*" />
              <span class="popup__input-error inputNewAvatar-error"></span>
            </label>
            <button class="button popup__submit-button popup__submit-button_inactive" type="submit"
              aria-label="Создать место">Сохранить</button>
          </form>

          <button class="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section>

      <footer class="footer">
        <p class="footer__text">© 2020 Mesto Russia</p>
      </footer>

    </main>
  </div>

  <template id="element-template">
    <div class="element">
      <button class="button element__button element__trash" type="button" aria-label="Удалить место"></button>
      <img alt="Фото" class="element__image" />
      <div class="element__container">
        <p class="element__title"></p>
        <div class="element__like-container">
          <button class="button element__button element__like" type="button" aria-label="Поставить лайк"></button>
          <span class="element__counter"></span>
        </div>
      </div>
    </div>
  </template>
  </>
  );
}

export default App;
