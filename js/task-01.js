'use strict'

const items = document.querySelectorAll("li.item");
console.log("Number of vategories:", items.length);

items.forEach(item => { 
    const h = item.querySelector("h2");
    console.log(`Category: ${h.textContent}`);

    const li = item.querySelectorAll("li");
    console.log(li.length);
})