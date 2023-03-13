const passwordInput = document.querySelector('#validation-input');
passwordInput.addEventListener('blur', checkLength);

const dataLength = 6;

function checkLength () {
     if(this.value.length === dataLength) {
        passwordInput.classList.remove('invalid')
        passwordInput.classList.add('valid');
     } else {
         passwordInput.classList.remove('valid')
         passwordInput.classList.add('invalid');
     }
 };
