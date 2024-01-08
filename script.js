const headingEl = document.querySelector(".heading");
const btnEl = document.querySelector(".btn");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

const randomNumber = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

btnEl.addEventListener("click", function () {
  let player1 = randomNumber(1, 6);
  let player2 = randomNumber(1, 6);
  dice1.setAttribute("src", `./images/dice${player1}.png`);
  dice2.setAttribute("src", `./images/dice${player2}.png`);
  if (player1 > player2) {
    headingEl.textContent = "🏆 Player 1 Wins!";
  } else if (player1 < player2) {
    headingEl.textContent = "Player 2 Wins! 🏆";
  } else {
    headingEl.textContent = "Draw 😔";
  }
});
