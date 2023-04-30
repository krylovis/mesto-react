import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupNewPlace from './PopupNewPlace';
import PopupProfileForm from './PopupProfileForm';
import PopupNewAvatar from './PopupNewAvatar';
import PopupDeleteConfirmation from './PopupDeleteConfirmation';
import PopupPlacePhoto from './PopupPlacePhoto';

export default function App() {

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
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupProfileForm />
      <PopupNewPlace />
      <PopupNewAvatar />
      <PopupDeleteConfirmation />
      <PopupPlacePhoto />

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