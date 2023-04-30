export default function PopupPlacePhoto() {
  return (
    <>
      <section className="popup popup_type_place-photo">
        <figure className="popup__container popup__container_type_place-photo">
          <img alt="Фото" className="popup__photo" />
          <figcaption className="popup__figcaption"></figcaption>
          <button className="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </figure>
      </section>
    </>
  );
}