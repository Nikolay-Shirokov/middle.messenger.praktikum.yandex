import renderFormAuth from "../../components/form-auth";

export default () => renderFormAuth({
  title: 'Вход',
  fields: [
    {
      name: 'login',
      type: 'text',
      label: 'Логин'
    },
    {
      name: 'password',
      type: 'password',
      label: 'Пароль'
    },
  ],
  submitButtonText: 'Войти',
  linkToOtherPage: {
    url: '/signup',
    text: 'Нет аккаунта?'
  }
});
