// 1.사용자가 가위바위보를 클릭하면 게임이 시작된다.
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
function playGame(user_choice) {
  // 사용자가 선택한 가위바위보
  console.log("user_choice:" + user_choice);
  let user_image = `<img src="images/${user_choice}.png" width="70"
   height="70">`;
  document.querySelector(".you>div:nth-child(2)").innerHTML = user_image;

  // 컴퓨터가 가위바위보 랜덤 선택
  let choice_list = ["scissors", "rock", "paper"];
  let idx = Math.floor(Math.random() * 3);
  let computer_choice = choice_list[idx];
  console.log("computer_choice:" + computer_choice);
  let computer_image = `<img src="images/${computer_choice}.png" width="70" height="70">`;
  document.querySelector(".computer>div:nth-child(2)").innerHTML =
    computer_image;

  // 승패 구분하기
  if (user_choice === computer_choice) {
    document.querySelector(".sign").innerText = "=";
    document.querySelector(".reault-message").innerText = "비겼습니다.";
    document.querySelector(".reault-message").style.color = "black";
  } else if (
    (user_choice === "rock" && computer_choice === "scissors") ||
    (user_choice === "scissors" && computer_choice === "paper") ||
    (user_choice === "paper" && computer_choice === "rock")
  ) {
    document.querySelector(".sign").innerText = ">";
    document.querySelector(".reault-message").innerText = "당신이 이겼습니다.";
    document.querySelector(".reault-message").style.color = "red";
  } else {
    document.querySelector(".sign").innerText = "<";
    document.querySelector(".reault-message").innerText =
      "컴퓨터가 이겼습니다.";
    document.querySelector(".reault-message").style.color = "blue";
  }
}
