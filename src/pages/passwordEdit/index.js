import renderProfilePage from '../../components/profile';
import emptyPic from '../../images/empty-pic.svg';

export default () => renderProfilePage({
  avatar: emptyPic,
  forEdit: true,
  fields: [
    {
      label: 'Старый пароль',
      value: '',
      name: 'oldPassword',
      type: 'password',
    },
    {
      label: 'Новый пароль',
      value: '',
      name: 'newPassword',
      type: 'password',
    },
    {
      label: 'Повторите новый пароль',
      value: '',
      name: 'newPasswordRepeat',
      type: 'password',
    },
  ],
});
