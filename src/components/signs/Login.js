import SignWithForm from './SignWithForm';

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Login');
  };

  return (
    <SignWithForm
      onSubmit={handleSubmit}
      signTitle="Вход"
      signName="login"
      ariaLabel="Войти"
      buttonText="Войти"
      inactiveButton={false}
    >
      <label className="sign__label" htmlFor="inputLoginEmail">
        <input className="sign__input" id="inputLoginEmail" type="email" name="login-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}" placeholder="Email" required minLength="2" maxLength="40" />
        <span className="sign__input-error inputLoginEmail-error"></span>
      </label>

      <label className="sign__label" htmlFor="inputLoginPassword">
        <input className="sign__input" id="inputLoginPassword" type="password" name="login-password" placeholder="Пароль" required minLength="6" maxLength="200" />
        <span className="sign__input-error inputLoginPassword-error"></span>
      </label>
    </SignWithForm>
  );
};