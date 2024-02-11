let low = 1;
let high = 10;
let result = document.getElementById("result");
let wholeBody = document.querySelector("body");
let restartBtn = document.getElementById("restart");

function play() {
  let correct_ans = Math.floor(Math.random() * high + 1);

  let i = 3;
  while (i > 0) {
    let guess = Number(prompt("Guess a number between 1-10: "));

    if (guess === correct_ans) {
      result.textContent = "You WIN!!";
      wholeBody.style.backgroundColor = "green";
      break;
    } else if (guess > correct_ans) {
      alert(`Correct answer is smaller attempts left: ${i - 1}`);
    } else if (guess < correct_ans) {
      alert(`Correct answer is greater attempts left: ${i - 1}`);
    }
    i = i - 1;
  }
  if (i <= 0) {
    result.textContent = "You Lost!!";
    wholeBody.style.backgroundColor = "red";
  }
}

play();
restartBtn.addEventListener("click", play);
