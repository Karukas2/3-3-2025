
const button = document.createElement("button");
button.textContent = "Click me";

const container = document.getElementById("container");
container.appendChild(button);

const Image = document.createElement("img");
Image.style.width = "200px";

button.addEventListener("click", async () => {
  const response = await fetch("https://coffee.alexflipnote.dev/random.json");
  const data = await response.json();
  console.log(data.file);

Image.src = data.file;
Image.alt = "coffee image";
container.appendChild(Image);

})
