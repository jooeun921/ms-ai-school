// 1.사용자가 가위바위보 이미지를 클릭하면 게임이 시작된다.
// 2.사용자가 선택한 가위바위보 이미지를 보여준다.
// 3.컴퓨터가 가위바위보를 랜덤으로 선택한다.
// 4.컴퓨터가 선택한 가위바위보 이미지를 보여준다.
// 5.승패 여부를 구분하여 보여준다.

document.querySelector("#scissors").onclick = function () {
  playGame("scissors");
};

document.querySelector("#rock").onclick = function () {
  playGame("rock");
};

document.querySelector("#paper").onclick = function () {
  playGame("paper");
};

let user_score = 0;
let computer_score = 0;
function playGame(user_choice) {
  // 사용자가 선택한 가위바위보
  document
    .getElementById("user-choice-img")
    .setAttribute("src", `images/${user_choice}.png`);

  // 컴퓨터가 선택한 가위바위보
  let choice_list = ["scissors", "rock", "paper"];
  let idx = Math.floor(Math.random() * 3);
  let computer_choice = choice_list[idx];
  console.log("컴퓨터:" + computer_choice);
  document
    .getElementById("computer-choice-img")
    .setAttribute("src", `images/${computer_choice}.png`);

  // 승패 구분하기
  user_win1 = user_choice === "rock" && computer_choice === "scissors";
  user_win2 = user_choice === "scissors" && computer_choice === "paper";
  user_win3 = user_choice === "paper" && computer_choice === "rock";

  let message;
  let text_color;

  if (user_choice === computer_choice) {
    message = "비겼습니다.";
    text_color = "black";
  } else if (user_win1 || user_win2 || user_win3) {
    message = "당신이 이겼습니다.";
    text_color = "red";
    user_score++;
  } else {
    message = "컴퓨터가 이겼습니다.";
    text_color = "blue";
    computer_score++;
  }
  document.querySelector(".result-message").textContent = message;
  document.querySelector(".result-message").style.color = text_color;
  document.querySelector(".score>div:nth-child(1)").textContent = user_score;
  document.querySelector(".score>div:nth-child(3)").textContent =
    computer_score;
}
