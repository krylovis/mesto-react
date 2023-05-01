export default function PopupPlacePhoto(props) {
  const { cardImg, onClose } = props;
  return (
    <>
      <section className={`popup popup_type_place-photo ${cardImg ? "popup_opened" : ''}`}>
        <figure className="popup__container popup__container_type_place-photo">
          <img src={cardImg} alt="Фото" className="popup__photo" />
          <figcaption className="popup__figcaption"></figcaption>
          <button className="button popup__close-button" type="button" aria-label="Закрыть форму" onClick={onClose}></button>
        </figure>
      </section>
    </>
  );
}