//  html elements 
let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5; // 남은 기회
let userValueList = []; // 입력한 숫자들 리스트

chanceArea.innerHTML = `Remaining Chance:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  // 랜덤숫자 

  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Answer", computerNumber);
}

function play() {
  // 숫자 예측
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "Please enter a number between 1 and 100";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "This number has already been entered. Please enter another number";

    return;
  }

  chances--;
  chanceArea.innerHTML = `Remaining Chance:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    resultText.textContent = "Down!";
  } else {
    resultAreaImg.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    resultText.textContent = "Answer!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  //reset
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
    "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";
  resultText.textContent = "Guess if you don't want to die";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `Remaining Chance:${chances}`;
  userValueList = [];
}

pickRandomNumber();
