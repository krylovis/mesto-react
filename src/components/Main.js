import React from 'react';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card';

export default function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const { name, about, avatar } = currentUser;

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards().then((data) => {
      setCards(data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <button className="profile__edit-avatar-button" type="button" aria-label="Редактировать Аватар" onClick={onEditAvatar}>
          <img src={avatar} alt="Аватар" className="profile__avatar" />
        </button>

        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{name}</h1>
            <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{about}</p>
        </div>

        <button className="button profile__add-button" type="button" aria-label="Добавить место" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>

    </main>
  );
}