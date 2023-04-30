export default function PopupWithForm({ popupClass, isOpened, popupTitle, formName, inactiveButton, ariaLabel, buttonText, children }) {
  return (
    <>
      <section className={`popup popup_type_${popupClass} ${{ "popup_opened": isOpened }}`}>
        <div className="popup__container">
          <h2 className="popup__title">{popupTitle}</h2>

          <form action={`${formName}Action`} name={formName} className="popup__form">
            {children}
            <button className={`button popup__submit-button ${{ "popup__submit-button_inactive": inactiveButton }}`} type="submit" aria-label={ariaLabel}>{buttonText}</button>
          </form>

          <button className="button popup__close-button" type="button" aria-label="Закрыть форму"></button>
        </div>
      </section >
    </>
  );
}