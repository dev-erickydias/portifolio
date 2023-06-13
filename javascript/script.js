const acentElement = document.querySelector('.accent-transition');
const words = ['HTML', 'CSS', 'JavaScript'];
let currentWordIndex = 0;

function changeWord() {
  acentElement.classList.remove('show');
  setTimeout(() => {
    acentElement.textContent = words[currentWordIndex];
    acentElement.classList.add('show');
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }, 1000);
}

setInterval(changeWord, 5000);
changeWord(); // Iniciar a transição imediatamente