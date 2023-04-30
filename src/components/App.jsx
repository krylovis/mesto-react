import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupNewPlace from './PopupNewPlace';
import PopupProfileForm from './PopupProfileForm';
import PopupNewAvatar from './PopupNewAvatar';
import PopupDeleteConfirmation from './PopupDeleteConfirmation';
import PopupPlacePhoto from './PopupPlacePhoto';

export default function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() { setEditAvatarPopupOpen(!isEditAvatarPopupOpen) };
  function handleEditProfileClick() { setEditProfilePopupOpen(!isEditProfilePopupOpen) };
  function handleAddPlaceClick() { setAddPlacePopupOpen(!isAddPlacePopupOpen) };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupProfileForm isOpen={isEditProfilePopupOpen} />
      <PopupNewPlace isOpen={isAddPlacePopupOpen} />
      <PopupNewAvatar isOpen={isEditAvatarPopupOpen} />
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