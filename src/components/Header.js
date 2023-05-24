import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header(props) {
  const { userEmail } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  const logOut = () => {
    localStorage.removeItem('mesto-react-token');
    navigate('/sign-in');
  };

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (document.body.clientWidth > 420) setIsOpen(false);
    });
  });

  const toggleMenu = () => setIsOpen(isOpen => !isOpen);

  const menuButtonClassName = `button header__menu-button ${isOpen ? 'header__menu-button_type_closed' : ''}`;
  const linksContainerClassName = `header__links-container ${isOpen ? 'header__links-container_type_closed' : ''}`;

  return (
    <header className="header">
      {isOpen &&
        <div className='header__login-container'>
          <nav className={linksContainerClassName}>
            {pathname === "/" && <span className="header__login">{userEmail}</span>}
            {pathname === "/" && <button className="button header__out-button">Выйти</button>}
          </nav>
        </div>
      }

      <div className='header__container'>
        <NavLink to="/">
          <img src={logo} alt="Логотип: Место" className="header__logo" />
        </NavLink>

        {!isOpen &&
          <nav className={linksContainerClassName}>
            {pathname === "/sign-up" && <NavLink className="link header__link" to="/sign-in">Войти</NavLink>}
            {pathname === "/sign-in" && <NavLink className="link header__link" to="/sign-up">Регистрация</NavLink>}
            {pathname === "/" && <span className="header__login">{userEmail}</span>}
            {pathname === "/" && <button className="button header__out-button" onClick={logOut}>Выйти</button>}
          </nav>
        }

        <button
          className={menuButtonClassName}
          type="button"
          title={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-label="Кнопка меню"
          onClick={toggleMenu}
        />
      </div>
    </header >
  );
}