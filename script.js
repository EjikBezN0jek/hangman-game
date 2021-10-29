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
    finalMessage.innerText = "Юху! Ты выиграл!";
    popup.style.display ="flex";
  }
}

//Update wrong letters
function updateWrongLettersElement(){
}

//Show notification
function showNotification(){
  notification.classList.add('show');

  setTimeout(() => notification.classList.remove('show'), 2100);
}

//Keydown letter press
  window.addEventListener("keydown", e => {
    if(/[а-я]$/i.test(e.key)){
      const letter = e.key;

      if(selectedWord.includes(letter)){
        if (!correctLetters.includes(letter)){
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if(!wrongLetters.includes(letter)){
          wrongLetters.push(letter);

          updateWrongLettersElement();
        } else {
          showNotification();
        }
      }
    }
  });


displayWord();