import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { api } from '../utils/Api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardListContext } from '../contexts/CardListContext';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import Register from './Register';

import AddPlacePopup from './popups/AddPlacePopup';
import EditProfilePopup from './popups/EditProfilePopup';
import EditAvatarPopup from './popups/EditAvatarPopup';
import DeleteConfirmationPopup from './popups/DeleteConfirmationPopup';
import ImagePopup from './popups/ImagePopup';

export default function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDelConfPopupOpen, setDelConfPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cardList, setCardList] = React.useState([]);
  const [cardForDelete, setCardForDelete] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleDeleteClick = () => setDelConfPopupOpen(true);
  const handleCardClick = (link, name) => setSelectedCard({ link, name });

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDelConfPopupOpen(false);
    setSelectedCard({ link: '', name: '' });
  };

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getCards()
      .then((data) => setCardList(data))
      .catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.toggleLike(card._id, isLiked)
      .then((newCard) => setCardList((list) => list.map((oldCard) => oldCard._id === card._id ? newCard : oldCard)))
      .catch(err => console.log(err));
  };

  function handleCardDelete(card) {
    handleDeleteClick();
    setCardForDelete(card._id);
  };

  function onConfirmation(value) {
    if (value && cardForDelete) {
      api.deleteCard(cardForDelete)
        .then(() => {
          setCardList((list) => list.filter((item) => item._id !== cardForDelete));
          closeAllPopups();
        })
        .catch(err => console.log(err));
    }
  };

  function onUpdateUser(userInfo) {
    setIsLoading(true);
    api.editUserInfo(userInfo)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  function onUpdateAvatar(avatar) {
    setIsLoading(true);
    api.editAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  function onAddPlace(place) {
    setIsLoading(true);
    api.addCard(place)
      .then((newCard) => {
        setCardList([newCard, ...cardList]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardListContext.Provider value={cardList}>
        <Header />
        <Routes>
          <Route path="/" element={<Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={onUpdateUser} isLoading={isLoading} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={onAddPlace} isLoading={isLoading} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={onUpdateAvatar} isLoading={isLoading} />
        <DeleteConfirmationPopup isOpen={isDelConfPopupOpen} onClose={closeAllPopups} onConfirmation={onConfirmation} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </CardListContext.Provider>
    </CurrentUserContext.Provider>
  );
}