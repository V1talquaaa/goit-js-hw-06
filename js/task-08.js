const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();

const formEl = event.currentTarget.elements;

const email = formEl.email.value;
const password = formEl.password.value;
    
    if (email === "") {
        alert('Please fill in email');
        return;
    } else if (password === "") {
        alert('Please fill in password')
        return;
}
const formData = {
    email, password
    };   
    console.log(formData);

    form.reset();
};

