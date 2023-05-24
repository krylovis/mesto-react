import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header(props) {
  const { userEmail } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(isOpen => !isOpen);
  const menuButtonClassName = `button header__menu-button ${isOpen && 'header__menu-button_close'}`;

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Логотип: Место" className="header__logo" />
      </Link>

      <div className="header__links-container">
        {location.pathname === "/sign-up" && <Link className="link header__link" to="/sign-in">Войти</Link>}
        {location.pathname === "/sign-in" && <Link className="link header__link" to="/sign-up">Регистрация</Link>}
        {location.pathname === "/" && <span className="header__login">{userEmail}</span>}
        {location.pathname === "/" && <Link className="link header__link header__link_out" to="/sign-in">Выйти</Link>}
      </div>

      {/* <button className={menuButtonClassName} type="button" title={isOpen ? 'Закрыть меню' : 'Открыть меню'} aria-label="Кнопка меню" onClick={toggleMenu} /> */}
    </header >
  );
}