let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const currentValue = document.querySelector('#value');

decrementBtn.addEventListener('click', function() {
counterValue -= 1;
currentValue.textContent = counterValue;

});

incrementBtn.addEventListener('click', function() {
    counterValue += 1;
    currentValue.textContent = counterValue;
    
});

