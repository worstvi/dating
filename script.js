// script.js
const fetch = require('node-fetch'); // Если используете Node.js

function moveNoButton() {
  const noButton = document.querySelector('.buttons button');
  const newPosition = {
    left: Math.random() * (window.innerWidth - noButton.clientWidth),
    top: Math.random() * (window.innerHeight - noButton.clientHeight),
  };

  // Ограничиваем перемещение кнопки в пределах видимой области окна
  const maxX = window.innerWidth - noButton.clientWidth;
  const maxY = window.innerHeight - noButton.clientHeight;

  noButton.style.left = Math.min(newPosition.left, maxX) + 'px';
  noButton.style.top = Math.min(newPosition.top, maxY) + 'px';
}

function sendTelegramNotification(activity) {
  const telegramToken = 6977179265:AAGkVmDJAWTdxfo6CpS-l4meLTBA4YVZAPg;
  const chatId = -4105241844;

  const message = `Пользователь выбрал: ${activity}`;

  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
  .then(response => response.json())
  .then(data => console.log('Ответ от Telegram API:', data))
  .catch(error => console.error('Ошибка:', error));
}

function selectActivity(activity) {
  alert(`Выбрано: ${activity}`);
  sendTelegramNotification(activity);

  // Здесь вы можете добавить код для дополнительных действий, связанных с выбором деятельности.
}

// Обработчик события для кнопок в галерее
document.querySelectorAll('.gallery-item button, .gallery-item a.button').forEach(button => {
  button.addEventListener('click', function () {
    const activity = this.dataset.activity;
    selectActivity(activity);
  });
});
