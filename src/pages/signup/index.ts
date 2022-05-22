import FormAuth from '../../components/form-auth';

export default new FormAuth({
  title: 'Регистрация',
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'Почта',
    },
    {
      name: 'login',
      type: 'text',
      label: 'Логин',
      minlength: 3,
      maxlength: 20,
      pattern: '(?=.*[A-Za-z])[A-Za-z_0-9/-]+',
    },
    {
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      pattern: '[A-ZА-ЯЁ]{1}[a-zа-яё/-]+',
    },
    {
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      pattern: '[A-ZА-ЯЁ]{1}[a-zа-яё/-]+',
    },
    {
      name: 'display_name',
      type: 'text',
      label: 'Имя в чате',
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Телефон',
      minlength: 8,
      maxlength: 40,
      pattern: '[0-9/+/(/)/-]+',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Пароль',
      minlength: 8,
      maxlength: 40,
      pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}',
    },
    {
      name: 'password_repeat',
      type: 'password',
      label: 'Пароль (ещё раз)',
    },
  ],
  submitButtonText: 'Зарегистрироваться',
  linkToOtherPage: {
    url: '/signin',
    text: 'Войти',
  },
});
