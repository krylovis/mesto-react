import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupNewPlace from './PopupNewPlace';
import PopupProfileForm from './PopupProfileForm';
import PopupNewAvatar from './PopupNewAvatar';
import PopupDeleteConfirmation from './PopupDeleteConfirmation';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState('');

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  const handleEditProfileClick = () => setEditProfilePopupOpen(!isEditProfilePopupOpen);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(!isAddPlacePopupOpen);
  const handleCardClick = (cardImg) => setSelectedCard(cardImg);

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard('');
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupProfileForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupNewPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupNewAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupDeleteConfirmation />
      <ImagePopup cardImg={selectedCard} onClose={closeAllPopups} />
    </>
  );
}