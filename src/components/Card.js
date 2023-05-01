export default function Card({ card, onCardClick }) {
  const { link, name, likes } = card;
  const counter = likes.length;

  const handleClick = () => { onCardClick(link, name); }

  return (
    <>
      <div className="element">
        <button className="button element__button element__trash" type="button" aria-label="Удалить место" />
        <img src={link} alt="Фото" className="element__image" onClick={handleClick} />
        <div className="element__container">
          <p className="element__title">{name}</p>
          <div className="element__like-container">
            <button className="button element__button element__like" type="button" aria-label="Поставить лайк" />
            <span className="element__counter">{counter}</span>
          </div>
        </div>
      </div>
    </>
  );
}