function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}

const changeColorBtn = document.querySelector('.change-color');
const changeColorEl = document.querySelector('body');
let spanEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor () {
  changeColorEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
  
};




