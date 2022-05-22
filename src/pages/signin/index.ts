import FormAuth from '../../components/form-auth';

export default new FormAuth({
  title: 'Вход',
  fields: [
    {
      name: 'login',
      type: 'text',
      label: 'Логин',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Пароль',
    },
  ],
  submitButtonText: 'Войти',
  linkToOtherPage: {
    url: '/signup',
    text: 'Нет аккаунта?',
  },
});
