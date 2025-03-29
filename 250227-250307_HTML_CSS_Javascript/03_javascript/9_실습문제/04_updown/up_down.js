/*
1. 컴퓨터의 랜덤 수로 정답 만들기
2. 사용자가 입력한 숫자를 제출하기
3. up&down&정답 여부 판단하여 출력하기
4. 시도 횟수 카운트하기
 */

const $userInput = document.getElementById("userInput");
const $btn = document.querySelector("button");

//1. 컴퓨터의 랜덤 수로 정답 만들기
let targetNumber = Math.ceil(Math.random() * 100);
console.log("targetNumber:" + targetNumber);
let tryNumber = 0;

$userInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") guessNumber();
});

function guessNumber() {
  tryNumber++;
  //2. 이벤트 발생 시 입력한 숫자를 가져오기
  let userNumber = document.querySelector("#userInput").value;
  console.log("userNumber:" + userNumber);

  //3. 컴퓨터의 숫자와 사용자의 숫자를 비교
  let message;
  if (targetNumber > userNumber) {
    message = `${userNumber}보다 올리세요`;
    color = "red";
  } else if (targetNumber < userNumber) {
    message = `${userNumber}보다 내리세요`;
    color = "blue";
  } else {
    message = `축하합니다. ${tryNumber}번만에 맞추셨습니다.`;
    color = "black";
  }
  document.querySelector("#result").innerText = message;
  document.querySelector("#result").style.color = color;
}
