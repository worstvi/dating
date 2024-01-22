// JavaScript (script.js)
function moveNoButton() {
  const noButton = document.getElementById('noButton');

  const newPosition = {
    left: Math.random() * (window.innerWidth - noButton.clientWidth),
    top: Math.random() * (window.innerHeight - noButton.clientHeight),
  };

  noButton.style.left = newPosition.left + 'px';
  noButton.style.top = newPosition.top + 'px';
}
