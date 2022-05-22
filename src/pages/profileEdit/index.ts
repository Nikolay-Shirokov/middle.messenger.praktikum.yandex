import ProfilePage from '../../components/profile';
import emptyPic from '../../images/empty-pic.svg';

export default new ProfilePage({
  avatar: emptyPic,
  forEdit: true,
  values: {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+7(909)9673030',
  },
  fields: [
    {
      label: 'Почта',
      value: 'pochta@yandex.ru',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Логин',
      value: 'ivanivanov',
      name: 'login',
      type: 'text',
      minlength: 3,
      maxlength: 20,
      pattern: '(?=.*[A-Za-z])[A-Za-z_0-9/-]+',
    },
    {
      label: 'Имя',
      value: 'Иван',
      name: 'first_name',
      type: 'text',
      pattern: '[A-ZА-ЯЁ]{1}[a-zа-яё/-]+',
    },
    {
      label: 'Фамилия',
      value: 'Иванов',
      name: 'second_name',
      type: 'text',
      pattern: '[A-ZА-ЯЁ]{1}[a-zа-яё/-]+',
    },
    {
      label: 'Имя в чате',
      value: 'Иван',
      name: 'display_name',
      type: 'text',
    },
    {
      label: 'Телефон',
      value: '+7(909)9673030',
      name: 'phone',
      type: 'tel',
      minlength: 8,
      maxlength: 40,
      pattern: '[0-9/+/(/)/-]+',
    },
  ],
});
