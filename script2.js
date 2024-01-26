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

  function notifyTelegram(action) {
    // Здесь добавьте код для отправки уведомления в Telegram
    alert(`Notification: ${action}`);
  }

  showGallery();
});
