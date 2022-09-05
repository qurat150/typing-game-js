let wordsCollection = [
  "beautiful",
  "above",
  "according",
  "behold",
  "choice",
  "correct",
  "immature",
  "finally",
  "circular",
  "manage",
];
let timer = 10;
let score = 0;

let generateRandomNumbers = Math.floor(Math.random() * 10);
let randomWords = wordsCollection[generateRandomNumbers];

const gameInterval = () => {
  let interval = setInterval(() => {
    document.querySelector(".ready").style.display = "none";
    document.querySelector(".inputNone").style.display = "block";
    let timeLeft = --timer;
    document.querySelector(".timeLeft").innerHTML =
      "Time Left : " + timeLeft + "s";

    document.querySelector(".randomWords").innerHTML = randomWords;
    document
      .querySelector(".gettingWordsFromInput")
      .addEventListener("input", (e) => {
        if (e.target.value == randomWords) {
          console.log(e.target.value == randomWords);
          let randomNumbersForWords = Math.floor(Math.random() * 10);
          let randomwordsInFunction = wordsCollection[randomNumbersForWords];
          randomWords = randomwordsInFunction;
          document.querySelector(".randomWords").innerHTML =
            randomwordsInFunction;
          document.querySelector(".gettingWordsFromInput").value = "";
          score += 5;
          document.querySelector(".score").innerHTML = `Score : ${score}`;
          timer += 3;
        }
      });

    if (timer == 0) {
      clearInterval(interval);
      document.querySelector(".main").style.display = "none";
      document.querySelector(".mainss").style.display = "block";
      document.querySelector(".scoress").innerHTML = "Your Score is : " + score;
    }
  }, 1000);
};
