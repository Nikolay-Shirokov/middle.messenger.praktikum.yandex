import ProfilePage from '../../components/profile';
import emptyPic from '../../images/empty-pic.svg';

export default new ProfilePage({
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
      minlength: 8,
      maxlength: 40,
      pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}',
    },
    {
      label: 'Повторите новый пароль',
      value: '',
      name: 'newPasswordRepeat',
      type: 'password',
    },
  ],
});
