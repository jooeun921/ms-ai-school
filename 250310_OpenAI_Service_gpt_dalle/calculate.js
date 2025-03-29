// 계산기 상태 변수
let currentNumber = "";
let previousNumber = "";
let operator = null;

// 디스플레이 업데이트 함수
function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = currentNumber || "0";
}

// 숫자를 디스플레이에 추가하는 함수
function appendNumber(number) {
  if (number === "." && currentNumber.includes(".")) return; // 소수점 중복 방지
  currentNumber += number;
  updateDisplay();
}

// 연산자를 선택하는 함수
function chooseOperator(selectedOperator) {
  if (currentNumber === "") return; // 현재 입력된 숫자가 없으면 무시
  if (previousNumber !== "") {
    calculate(); // 이전 연산이 있으면 먼저 계산
  }
  operator = selectedOperator;
  previousNumber = currentNumber;
  currentNumber = "";
}

// 계산을 수행하는 함수
function calculate() {
  if (!operator || currentNumber === "" || previousNumber === "") return;

  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);
  let result;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        alert("0으로 나눌 수 없습니다!");
        clearDisplay();
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operator = null;
  previousNumber = "";
  updateDisplay();
}

// 디스플레이 초기화 함수
function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  updateDisplay();
}
