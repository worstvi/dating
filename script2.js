// script2.js

document.addEventListener('DOMContentLoaded', function() {
  const activities = [
    { name: 'Cinema', action: 'choose cinema' },
    { name: 'Walk', action: 'choose walk' },
    { name: 'Skating Rink', action: 'choose skating rink' },
    { name: 'Visit', action: 'choose visit' },
    { name: 'Write Your Option', action: 'choose' },
  ];

  const galleryContainer = document.getElementById('gallery');

  function createGalleryItem(activity) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const activityButton = document.createElement('button');
    activityButton.textContent = activity.name;
    activityButton.addEventListener('click', () => notifyTelegram(activity.action));

    galleryItem.appendChild(activityButton);

    return galleryItem;
  }

  function showGallery() {
    activities.forEach((activity) => {
      const galleryItem = createGalleryItem(activity);
      galleryContainer.appendChild(galleryItem);
    });
  }

  async function notifyTelegram(action) {
    const botToken = '6977179265:AAGkVmDJAWTdxfo6CpS-l4meLTBA4YVZAPg'; // Замените на ваш токен
    const chatId = '-4105241844'; // Замените на ваш chat_id
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `User choice: ${action}`,
        }),
      });

      if (response.ok) {
        alert('Notification sent to Telegram!');
      } else {
        alert('Failed to send notification to Telegram.');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  }

  showGallery();
});
