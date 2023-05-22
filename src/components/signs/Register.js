import SignWithForm from './SignWithForm';

export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Register');
  };

  return (
    <SignWithForm
      onSubmit={handleSubmit}
      signTitle="Регистрация"
      signName="register"
      ariaLabel="Зарегистрироваться"
      buttonText="Зарегистрироваться"
      isLink={true}
    >
      <label className="sign__label" htmlFor="inputRegisterEmail">
        <input className="sign__input" id="inputRegisterEmail" type="email" name="register-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}" placeholder="Email" required minLength="2" maxLength="40" />
        <span className="sign__input-error inputRegisterEmail-error"></span>
      </label>

      <label className="sign__label" htmlFor="inputRegisterPassword">
        <input className="sign__input" id="inputRegisterPassword" type="password" name="register-password" placeholder="Пароль" required minLength="6" maxLength="200" />
        <span className="sign__input-error inputRegisterPassword-error"></span>
      </label>
    </SignWithForm>
  );
};