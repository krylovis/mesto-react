import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <template id="element-template">
        <div className="element">
          <button className="button element__button element__trash" type="button" aria-label="Удалить место"></button>
          <img alt="Фото" className="element__image" />
          <div className="element__container">
            <p className="element__title"></p>
            <div className="element__like-container">
              <button className="button element__button element__like" type="button" aria-label="Поставить лайк"></button>
              <span className="element__counter"></span>
            </div>
          </div>
        </div>
      </template>
    </>
  );
}