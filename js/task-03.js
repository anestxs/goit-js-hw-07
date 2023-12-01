'use strict'

const input = document.querySelector("input#name-input");

const userName = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    input.value = event.currentTarget.value.trim();
    
    if (input.value === "") { 
        userName.textContent = "Anonymous";
    }
    else { 
        userName.textContent = input.value;
    }
})