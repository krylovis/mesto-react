import { Link } from 'react-router-dom';

export default function Register() {

  return (
    <main className="content">
      <section className="register">
        <div className="register__container">
          <h2 className="register__title">Регистрация</h2>

          <form action="registerAction" name="register" className="register__form">
            <label className="register__label" htmlFor="inputRegisterEmail">
              <input className="register__input" id="inputRegisterEmail" type="email" name="register-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}" placeholder="Email" required minLength="2" maxLength="40" />
              <span className="register__input-error inputRegisterEmail-error"></span>
            </label>

            <label className="register__label" htmlFor="inputRegisterPassword">
              <input className="register__input" id="inputRegisterPassword" type="password" name="register-password" placeholder="Пароль" required minLength="6" maxLength="200" />
              <span className="register__input-error inputRegisterPassword-error"></span>
            </label>

            <button className="button register__submit-button" type="submit">Зарегистрироваться</button>
          </form>

          <div className="register__enter">
            <p className="register__text">Уже зарегистрированы?&nbsp;</p>
            <Link className="link register__link" to="/sign-in">Войти</Link>
          </div>
        </div>
      </section>
    </main>
  );
};