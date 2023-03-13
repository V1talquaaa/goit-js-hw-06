const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', (event) => {
    if (event.currentTarget.value === "") {
        outputValue.textContent = "Anonymous";
    } else {
        outputValue.textContent = event.currentTarget.value;
    };
});

