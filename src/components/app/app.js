export const initialLetters = [
  {
    id: 0,
    data: {
      checked: false,
      sender: 'Яндекс.Паспорт',
      letter: 'Я',
      date: '6 авг',
      preview: 'Доступ к аккаунту восстановлен'
    },
    special: true,
    unread: true
  },
  {
    id: 1,
    data: {
      checked: false,
      letter: 'Я',
      sender: 'Команда Яндекс.Почты',
      date: '6 июл',
      preview: 'Как читать почту с мобильного'
    },
    unread: true
  },
  {
    id: 2,
    data: {
      checked: false,
      letter: 'Я',
      sender: 'Яндекс',
      date: '5 июл',
      preview: 'Соберите всю почту в этот ящик'
    },
    unread: false
  }
];

const senders = ['Полиция мемов', 'Яндекс.Такси', 'ГоСуслуги'];
const themes = ['Запощен недопустимый мем', 'До Краснодара за 55000P', 'Ваша справка готова'];
const dates = ['31 тра', '29 сич', '15 лис'];

export const generateLetter = id => {
  const senderx = senders[Math.floor(Math.random() * senders.length)];
  const theme = themes[Math.floor(Math.random() * themes.length)];
  const datex = dates[Math.floor(Math.random() * dates.length)];
  return {
    id: id,
    data: {
      checked: false,
      letter: senderx[0],
      sender: senderx,
      date: datex,
      preview: theme
    },
    unread: Math.random() < 0.5,
    added: true
  };
};
