import React from 'react';
import { api } from '../utils/Api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardListContext } from '../contexts/CardListContext';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupNewPlace from './PopupNewPlace';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupDeleteConfirmation from './PopupDeleteConfirmation';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cardList, setCardList] = React.useState([]);

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
      setCardList(data);
    }).catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.toggleLike(card._id, isLiked).then((newCard) => {
      setCardList((list) => list.map((oldCard) => oldCard._id === card._id ? newCard : oldCard));
    });
  };

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCardList((list) => list.filter((item) => item._id !== card._id));
    });
  };

  function onUpdateUser(userInfo) {
    api.editUserInfo(userInfo).then((data) => {
      setCurrentUser(data);
    }).catch(err => console.log(err));
    closeAllPopups();
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <CardListContext.Provider value={cardList}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={onUpdateUser} />
          <PopupNewPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <PopupDeleteConfirmation />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </CardListContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}