console.log(typeof true);
console.log(typeof false); //boolean

// ==, != 연산자는 타입을 변환 후 비교
console.log("== 비교 >>>>>>>>>");
console.log(1 == "1"); // "1"을 숫자로 변환 후 비교
console.log(1 == "1.0"); // "1.0"을 숫자로 변환 후 비교
console.log(1 == true); // true를 숫자로 변환 후 비교
console.log("1" == true); // 1과 true를 숫자로 변환 후 비교
console.log(null == undefined); // null과 undefined는 동등하게 취급
console.log([1] == "1"); //[1]을 문자열로 변환 후 비교

// ==, != 연산자는 타입 변환하지 않고 그대로 비교
console.log("=== 비교>>>>>>>>>");
console.log(1 === "1"); // "1"을 숫자로 변환 후 비교
console.log(1 === "1.0"); // "1.0"을 숫자로 변환 후 비교
console.log(1 === true); // true를 숫자로 변환 후 비교
console.log("1" === true); // 1과 true를 숫자로 변환 후 비교
console.log(null === undefined); // null과 undefined는 동등하게 취급
// console.log([1] === "1");

console.log(typeof undefined);
