  const paragraphs = document.querySelectorAll("p[id^='paragraph']");
  const texts = ["Tekstas 1", "Tekstas 2", "Tekstas 3", "Tekstas 4", "Tekstas 5"];

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = texts[i];
  }


  document.getElementById("paragraph1").style.color = "green"; 

  document.querySelectorAll("p[id^='paragraph']").forEach(p => p.classList.add("modified-class"));

  const pTags = document.getElementsByTagName("p");
  for (let i = 0; i < pTags.length; i++) {
    pTags[i].style.fontFamily = "Arial";
  }


  
  const divs = document.querySelectorAll("div[id^='div']");

  divs.forEach(div => {
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.border = "1px solid black";
    div.style.display = "inline-block";
    div.style.margin = "5px"
  });

 
  const colorButton = document.getElementById("colorChangeButton");
  const extraWords = ["kas", "alio", "Skraijunas", "Burger", "Bangladesh", "Kazkas", "KODEL", "Blemba", "Agurkeliai", "Sriubyte"];
  colorButton.addEventListener("click", () => {
    divs.forEach(div => {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      div.style.backgroundColor = randomColor;

      const randomWordIndex = Math.floor(Math.random() * extraWords.length);
      const randomWord = extraWords[randomWordIndex];

      div.textContent = randomWord;
      div.style.fontSize = "2em"; 
      div.style.textAlign = "center";
      div.style.fontWeight = "bold"; 

    });
  });

 
  const words = ["zodis1", "zodis2", "zodis3", "zodis4", "zodis5", "zodis6", "zodis7", "zodis8"];
  const pTagsWithWords = document.querySelectorAll("p[id^='ptag']");

  pTagsWithWords.forEach(p => {
    const randomIndex = Math.floor(Math.random() * words.length);
    p.textContent = words[randomIndex];
    p.style.fontSize = "2em";
    p.style.textAlign = "center"; 
    p.style.fontWeight = "bold"; 


  });

