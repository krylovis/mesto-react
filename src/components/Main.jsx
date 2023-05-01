import React from 'react';
import { api } from '../utils/Api';

export default function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar } = props;

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      const { name, about, avatar } = res;
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    }).catch(err => console.log(err));
  });

  return (
    <>
      <main className="content">

        <section className="profile">
          <button className="profile__edit-avatar-button" type="button" aria-label="Редактировать Аватар" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          </button>

          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{userName}</h1>
              <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>

          <button className="button profile__add-button" type="button" aria-label="Добавить место" onClick={onAddPlace}></button>
        </section>

        <section className="elements"></section>

      </main>
    </>
  );
}