const acentElement = document.querySelector('.acent');
const words = ['HTML', 'CSS', 'JavaScript'];
let currentWordIndex = 0;

function changeWord() {
  acentElement.textContent = words[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(changeWord, 3000);