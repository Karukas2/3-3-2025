const paragraphs = [];
for (let i = 0; i < 10; i++) {
    const p = document.createElement('p');
    p.textContent = `Mano skaicius yra = ${i + 1}`;
    document.getElementById('paragraphs').appendChild(p);
    paragraphs.push(p);
}

paragraphs.forEach((p, index) => {
    if (index % 2 === 0) {
        p.classList.add("p-even");
    } else {
        p.classList.add("p-odd");
    }
});

function printValue() {
    const inputValue = document.getElementById("myInput").value;
    console.log(inputValue);
    document.getElementById("inputValueDisplay").textContent = inputValue;
}

const createButton = document.getElementById("createButton");
const removeButton = document.getElementById("removeButton");
const elementContainer = document.getElementById("elementContainer");

createButton.addEventListener("click", () => {
    const newElement = document.createElement("p");
    newElement.textContent = "New Element";
    elementContainer.appendChild(newElement);
    createButton.style.backgroundColor = "green";
    removeButton.style.backgroundColor = ""; 
});

removeButton.addEventListener("click", () => {
    if (elementContainer.firstChild) {
        elementContainer.removeChild(elementContainer.firstChild);
        removeButton.style.backgroundColor = "red";
        createButton.style.backgroundColor = ""; 
    }
});

let clickCount = 0;
const clickCounterButton = document.getElementById("clickCounterButton");
const clickCountDisplay = document.getElementById("clickCount");

clickCounterButton.addEventListener("click", () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});

