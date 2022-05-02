import renderFormAuth from "../../components/form-auth";

export default () => renderFormAuth({
  title: 'Регистрация',
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'Почта'
    },
    {
      name: 'login',
      type: 'text',
      label: 'Логин'
    },
    {
      name: 'first_name',
      type: 'text',
      label: 'Имя'
    },
    {
      name: 'second_name',
      type: 'text',
      label: 'Фамилия'
    },
    {
      name: 'second_name',
      type: 'text',
      label: 'Фамилия'
    },
    {
      name: 'password',
      type: 'password',
      label: 'Пароль'
    },
    {
      name: 'password_repeat',
      type: 'password',
      label: 'Пароль (ещё раз)'
    },
  ],
  submitButtonText: 'Зарегистрироваться',
  linkToOtherPage: {
    url: '/signin',
    text: 'Войти'
  }
});
