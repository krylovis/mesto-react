export default function Main(props) {
  const { onEditProfile, isAddPlacePopupOpen, isEditAvatarPopupOpen } = props;

  return (
    <>
      <main className="content">

        <section className="profile">
          <button className="profile__edit-avatar-button" type="button" aria-label="Редактировать Аватар" onClick={isEditAvatarPopupOpen}>
            <img alt="Аватар" className="profile__avatar" />
          </button>

          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name"></h1>
              <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>

          <button className="button profile__add-button" type="button" aria-label="Добавить место" onClick={isAddPlacePopupOpen}></button>
        </section>

        <section className="elements"></section>

      </main>
    </>
  );
}