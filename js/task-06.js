function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const container = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes( ) { 
    container.innerHTML = "";
    const amount = input.value;

        if (amount >= 1 && amount <= 100) { 

            for (let i = 0; i < amount; i++) {

                const div = document.createElement('div');
                div.style.width = `${30 + i * 10}px`;
                div.style.height = `${30 + i * 10}px`; 
                const randomColor = getRandomHexColor();
                div.style.backgroundColor = randomColor;
                container.appendChild(div);
        }
        input.value = "";
    } 
}

function destroyBoxes() { 
    container.innerHTML = "";
}