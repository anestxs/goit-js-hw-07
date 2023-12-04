'use strict'

const form = document.querySelector("form.login-form");

form.addEventListener("submit", event => { 
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (!email || !password) { 
        alert('All form fields must be filled in');
        return; 
    }

    const userData = {
        Email: email.trim(),
        password: password.trim()
    }

    console.log(userData);

    form.reset();
})
