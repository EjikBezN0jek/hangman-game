const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const popup = document.getElementById("popup-container");
const finalMessage = document.getElementById("final-message");
const notification = document.getElementById("notification-container");
const playButton = document.getElementById("play-button");

const figureParts = document.querySelectorAll("figure-part");

const words = ["мускулатура","водокачка",'жердочка','вентиль','трамвай'];

let selectedWord= words[Math.floor(Math.random() * words.length)];

const wrongLetters = [];
const correctLetters = [];

//Show  hidden word
function displayWord() {
  wordElement.innerHTML = `${selectedWord.split('')
    .map(
      letter => `
            <span class="letter" > 
                ${correctLetters.includes(letter) ? letter : ""} 
            </span>
      `
    ).join('')} 
  `;

  const innerWord = wordElement.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord){
    finalMessage.innerText = "Юху! Ты виграл!";
    popup.style.display ="flex"
  }
}

displayWord()