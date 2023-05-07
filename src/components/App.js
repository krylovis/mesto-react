import React from 'react';
import { api } from '../utils/Api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardListContext } from '../contexts/CardListContext';

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

  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleCardClick = (link, name) => setSelectedCard({ link, name });

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ link: '', name: '' });
  };

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    }).catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getCards().then((data) => {
      setCards(data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <CardListContext.Provider value={cards}>
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
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </CardListContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}