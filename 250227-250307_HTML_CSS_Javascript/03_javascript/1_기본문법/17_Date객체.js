// 현재 날짜와 시간 생성
const now = new Date();
console.log(now);
console.log(typeof now);

console.log("로컬시간 기준", now.toString(), typeof now.toString());
console.log("날짜만:", now.toDateString());
console.log("시간만:", now.toTimeString());

// 특정 날짜와 시간 생성
const christMas = new Date("2025-12-25 03:01:01");
console.log(christMas);

const lastDay = new Date(2025, 11, 31, 23, 59, 59); // 월:0~11
console.log(lastDay);

// 날짜에서 정보 가져오기
console.log(lastDay.getFullYear());
console.log(lastDay.getMonth());
console.log(lastDay.getDate());
console.log(lastDay.getDay());
console.log(lastDay.getHours());
console.log(lastDay.getMinutes());
console.log(lastDay.getSeconds());
console.log(lastDay.getMilliseconds());

console.log(lastDay - now);
