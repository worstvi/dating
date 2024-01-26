// script2.js

// Пример данных об активностях
const activities = [
  { name: 'Кинотеатр', action: 'выбрать кинотеатр' },
  { name: 'Прогулка', action: 'выбрать прогулку' },
  { name: 'Каток', action: 'выбрать каток' },
  { name: 'В гости', action: 'выбрать в гости' },
  { name: 'Если здесь нет того, чего бы вы хотели', action: 'выбрать' },
];

// Функция для создания элемента галереи
function createGalleryItem(activity) {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');

  const activityButton = document.createElement('button');
  activityButton.textContent = activity.name;
  activityButton.addEventListener('click', () => notifyTelegram(activity.action));

  galleryItem.appendChild(activityButton);

  return galleryItem;
}

// Функция для отображения галереи
function showGallery() {
  const galleryContainer = document.getElementById('gallery');

  activities.forEach((activity) => {
    const galleryItem = createGalleryItem(activity);
    galleryContainer.appendChild(galleryItem);
  });
}

// Функция для уведомления в телеграме
function notifyTelegram(action) {
  alert(`Уведомление: ${action}`);
  // Ваш код для отправки уведомления в телеграме
}

// Вызов функции для отображения галереи после загрузки страницы
document.addEventListener('DOMContentLoaded', showGallery);
