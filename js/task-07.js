const sizeController = document.querySelector('#font-size-control');
const spanValue = document.querySelector('#text');

sizeController.addEventListener('input', changeSpanSize);

function changeSpanSize(event) {
  spanValue.style.fontSize = event.currentTarget.value + 'px';
};


