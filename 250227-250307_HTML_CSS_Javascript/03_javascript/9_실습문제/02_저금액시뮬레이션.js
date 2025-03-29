// 요소 선택
const $nowInput = document.querySelector("input[name='now']");
const $goalInput = document.querySelector("input[name='goal']");
const $weekInput = document.querySelector("input[name='week']");
const $btn = document.querySelector("input[type='button']");
const $simulationList = document.getElementById("simulation");

// 목표 저금액을 넘기는 주차까지 계산하는 함수
function calculateSimulation() {
  // 입력값 가져오기. 계산을 위해서 숫자로 변환해줘야 함.
  const now = parseInt($nowInput.value) || 0;
  const goal = parseInt($goalInput.value) || 0;
  const week = parseInt($weekInput.value) || 0;

  // 기존 리스트 초기화. 원래도 각 주차별로 리스트로 받고 있음.
  $simulationList.innerHTML = "";

  let currentSavings = now;
  let weekCount = 0;

  // 목표 금액을 넘을 때까지 반복
  while (currentSavings < goal) {
    weekCount++;
    currentSavings += week; //매주 저금액 더하기

    // 리스트 아이템 생성
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <div class="weeks">${weekCount}주차 저금액:</div>
      <div class="now-saving">${currentSavings.toLocaleString()}원</div>
    `;

    // 리스트에 추가하기
    $simulationList.appendChild(listItem);
  }
}

//이거 이벤트 관련 코드는 01_자리배치도.js 와 동일.
// 버튼 클릭 이벤트
$btn.addEventListener("click", calculateSimulation);

// 입력창에서 엔터키 입력 시 계산 실행
[$nowInput, $goalInput, $weekInput].forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") calculateSimulation();
  });
});
