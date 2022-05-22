import ChatPage from '../../components/chat-page';
import templateImage from '../../images/template-image.webp';

export default new ChatPage({
  chatTitle: 'Вадим',
  chatList: [
    {
      active: false,
      title: 'Андрей',
      lastMessage: `Друзья, у меня для вас особенный выпуск новостей! и какой то еще очень очень
      очень длинный текст`,
      lastMessageDateText: '15:12',
      qtyUnreadMessages: '1',
    },
    {
      active: true,
      title: 'Вадим',
      itMyMessage: true,
      lastMessage: `Круто!`,
      lastMessageDateText: '15:12',
      qtyUnreadMessages: '1',
    }
  ],
  messages: [
    {
      itDate: true,
      dateText: '19 июня',
    },
    {
      text: `Привет! Смотри, тут всплыл интересный кусок лунной
      космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на
      Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все
      еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.`,
      messageDateText: '11:56'
    },
    {
      imageUrl: templateImage,
      messageDateText: '11:56'
    },
    {
      itMyMessage: true,
      text: 'Круто!',
      statusRead: true,
      messageDateText: '11:57'
    }
  ]
});
