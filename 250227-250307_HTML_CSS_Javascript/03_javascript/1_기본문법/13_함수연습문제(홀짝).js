// 짝수인지 홀수인지 판별하는 함수를
// 함수 선언문방식, 함수 표현식, 화살표 함수로 각각 만들기

function find1(x) {
  return x % 2 == 0 ? "짝수" : "홀수";
}

console.log(find1(3));
console.log("=========");

const find2 = function (x) {
  return x % 2 == 0 ? "짝수" : "홀수";
};

console.log(find2(6));
console.log("=========");

const find3 = (x) => {
  return x % 2 == 0 ? "짝수" : "홀수";
};
const find4 = (x) => (x % 2 == 0 ? "짝수" : "홀수");

console.log(find3(3));
console.log(find4(3));
