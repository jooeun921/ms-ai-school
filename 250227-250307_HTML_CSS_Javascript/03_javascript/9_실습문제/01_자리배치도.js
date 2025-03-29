const $input = document.querySelector("input[type='number']"); // 숫자입력창
const $btn = document.querySelector("input[type='button']"); // 확인버튼
// 자리배치도 그리는 함수
function renderSeat() {
  //   console.log("함수호출성공");
  const maxSeat = 100; // 최대 수용 가능한 인원
  let message = ""; // 경고 메시지 초기화
  let seatHTML = ""; // 자리배치도 초기화

  // 1. 입력한 인원 가져오기
  const inputNumber = document.querySelector("input[type='number']").value;
  console.log(inputNumber);

  // 2. 최대 수용 가능한 인원보다 크면 경고메시지 뿌리기
  if (inputNumber > maxSeat) {
    // console.log("경고");
    message = `최대 수용 가능한 인원은 ${maxSeat}명입니다.`;
  } else {
    // 3. 최대 수용 가능한 인원보다 작으면 자리배치도 그리기
    // console.log("그리기");
    for (let i = 1; i <= inputNumber; i++) {
      seatHTML += `<div class = "seat">${i}</div>`;
    }
  }
  document.querySelector(".message").textContent = message;
  document.querySelector("#seat-container").innerHTML = seatHTML;
}

// 버튼을 클릭했을 때 이벤트 핸들러 등록
$btn.addEventListener("click", renderSeat);

// 숫자입력창에서 엔터키를 눌렀을 때 이벤트핸들러 등록
$input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") renderSeat();
});

console.log($btn);

// (() => {
//   const $input = document.querySelector("input[type='number']");
//   const $submitBtn = document.querySelector("input[type='button']");
//   const $message = document.querySelector(".message");
//   const $seatContainer = document.querySelector("#seat-container");

//   function renderSeat() {
//     const num = $input.value ? parseInt($input.value) : 0;
//     $input.value = num;

//     if (num <= 0 || num > 100) {
//       $message.textContent = "학생 수는 1명 ~ 100명이어야 합니다.";
//     } else {
//       console.log(`학생 수: ${num}`);
//       $message.textContent = "";
//       let seatHTML = "";
//       for (let i = 1; i <= num; i++) {
//         seatHTML += `<div class="seat">${i}</div>`;
//       }
//       $seatContainer.innerHTML = seatHTML;
//     }
//   }

//   $input.onkeyup = (e) => (e.key == "Enter" ? renderSeat() : null);
//   $submitBtn.onclick = renderSeat;
// })();
