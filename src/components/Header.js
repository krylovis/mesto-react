import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Логотип: Место" className="header__logo" />
      </Link>

      <div className="header__links-container">
        {location.pathname === "/sign-up" && <Link className="link header__link" to="/sign-in">Войти</Link>}
        {location.pathname === "/sign-in" && <Link className="link header__link" to="/sign-up">Регистрация</Link>}
        {location.pathname === "/" && <span className="header__login">email@mail.com</span>}
        {location.pathname === "/" && <Link className="link header__link header__link_out" to="/sign-in">Выйти</Link>}
      </div>
    </header >
  );
}