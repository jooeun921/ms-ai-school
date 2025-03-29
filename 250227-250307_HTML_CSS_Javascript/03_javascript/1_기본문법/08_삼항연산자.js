// 점수가 60점 이상이면 '합격입니다.'
// 점수가 60점 미만이면 '불합격입니다'

let score = 70;
if (score >= 60) {
  console.log("합격입니다.");
} else {
  console.log("불합격입니다.");
}

let result = score >= 60 ? "합격" : "불합격";
console.log(result);
