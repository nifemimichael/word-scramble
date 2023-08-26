

let words = [
  // Each object represents a word and its hint
  {
    word: "addition",
    hint: "The process of adding numbers"
  },
  {
    word: "meeting",
    hint: "Event in which people come together"
  },
  {
    word: "number",
    hint: "Math symbol used for counting"
  },
  {
    word: "exchange",
    hint: "The act of trading"
  },
  {
    word: "canvas",
    hint: "Piece of fabric for oil painting"
  },
  {
    word: "garden",
    hint: "Space for planting flower and plant"
  },
  {
    word: "position",
    hint: "Location of someone or something"
  },
  {
    word: "feather",
    hint: "Hair like outer covering of bird"
  },
  {
    word: "comfort",
    hint: "A pleasant feeling of relaxation"
  },
  {
    word: "tongue",
    hint: "The muscular organ of mouth"
  },
  {
    word: "expansion",
    hint: "The process of increase or grow"
  },
  {
    word: "country",
    hint: "A politically identified region"
  },
  {
    word: "group",
    hint: "A number of objects or persons"
  },
  {
    word: "taste",
    hint: "Ability of tongue to detect flavour"
  },
  {
    word: "store",
    hint: "Large shop where goods are traded"
  },
  {
    word: "field",
    hint: "Area of land for farming activities"
  },
  {
    word: "friend",
    hint: "Person other than a family member"
  },
  {
    word: "pocket",
    hint: "A bag for carrying small items"
  },
  {
    word: "needle",
    hint: "A thin and sharp metal pin"
  },
  {
    word: "expert",
    hint: "Person with extensive knowledge"
  },
  {
    word: "statement",
    hint: "A declaration of something"
  },
  {
    word: "second",
    hint: "One-sixtieth of a minute"
  },
  {
    word: "library",
    hint: "Place containing collection of books"
  },
  {
    word: "fire",
    hint: " the flames, light and heat, and often smoke, that are produced when something burns"
  },
  {
    word: "clapping",
    hint: " the act or the sound of people hitting their open hands together, especially several times to show that they approve of or have enjoyed something"
  },
  {
    word: "internet",
    hint: " an international computer network connecting other networks and computers that allows people to share information around the world"
  },
  {
    word: "man",
    hint: "an adult male human"
  },
  {
    word: "school",
    hint: "a place where children go to be educated"
  },
  {
    word: "television",
    hint: "a piece of electrical equipment with a screen on which you can watch programmes with moving pictures and sounds"
  },
  {
    word: "church",
    hint: "a building where Christians go to attend services, pray, etc."
  },
  {
    word: "pillow",
    hint: "a square or rectangular piece of cloth filled with soft material, used to rest your head on in bed"
  },
  {
    word: "business",
    hint: "the activity of making, buying, selling or supplying goods or services for money"
  },
  {
    word: "grammar",
    hint: " the rules in a language for changing the form of words and joining them into sentences"
  },
  {
    word: "country",
    hint: "an area of land that has or used to have its own government and laws"
  },
  {
    word: "house",
    hint: "a building for people to live in"
  },
  {
    word: "wristwatch",
    hint: "a watch that you wear on your wrist"
  },
  {
    word: "man",
    hint: " a flat, usually round, dish that you put food on"
  },
  {
    word: "dictionary",
    hint: "a book or electronic resource that gives a list of the words of a language in alphabetical order and explains what they mean, or gives a word for them in a foreign language"
  },
  {
    word: "medicine",
    hint: "the study and treatment of diseases and injuries"
  },
  {
    word: "phone",
    hint: "a mobile device that also has some of the functions of a computer, for example the facility to use apps and the internet"
  },
  {
    word: "teacher",
    hint: "a person who teaches in a school or institution"
  },
  {
    word: "shoe",
    hint: "a thing you wear that protects your legs"
  },
  {
    word: "hands",
    hint: "a part of your body"
  },
  {
    word: "shoe",
    hint: "a thing you wear that protects your leg"
  },
 

  
];

const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer;

// Function to initialize the timer
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};

// Function to initialize the game
const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

// Function to check the user's input word
const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Weldone! ${correctWord.toUpperCase()} is the correct word`);
  initGame();
};

// Event listeners for the refresh and check buttons
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);