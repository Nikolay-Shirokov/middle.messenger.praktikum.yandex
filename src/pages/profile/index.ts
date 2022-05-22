import ProfilePage from '../../components/profile';
import emptyPic from '../../images/empty-pic.svg';

export default new ProfilePage({
  avatar: emptyPic,
  title: 'Иван',
  fields: [
    {
      label: 'Почта',
      value: 'pochta@yandex.ru',
    },
    {
      label: 'Логин',
      value: 'ivanivanov',
    },
    {
      label: 'Имя',
      value: 'Иван',
    },
    {
      label: 'Фамилия',
      value: 'Иванов',
    },
    {
      label: 'Имя в чате',
      value: 'Иван',
    },
    {
      label: 'Телефон',
      value: '+7 (909) 967 30 30',
    },
  ],
  actionLinks: [
    {
      url: '/profile-edit',
      text: 'Изменить данные',
    },
    {
      url: '/password-edit',
      text: 'Изменить пароль',
    },
  ],
  actionButtons: [
    {
      text: 'Выйти',
      accent: true,
    },
  ],
});
