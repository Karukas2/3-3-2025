const container = document.getElementById("container");
const input = document.getElementById("input");
const button = document.getElementById("button");

const getCountry = async (event) => {
    event.preventDefault();
    let inputValue = input.value.trim();
    console.log(inputValue);
    
    const result = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
    console.log(result);
    const data = await result.json();
    console.log(data);

 const img = document.createElement("img");

    img.src = data[0].flags.png;
    container.appendChild(img)

    const name = document.createElement("h2");
    name.innerText = data[0].name.common;
    container.appendChild(name);

    const capital = document.createElement("h3");
    capital.innerText = data[0].capital[0];
    container.appendChild(capital);
};

button.addEventListener(`click`, getCountry);
