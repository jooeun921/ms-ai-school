/* 
for(제어변수 선언/할당 ; 조건식 ; 증감식){
    조건이 참인 동안 반복 실행할 문
}
*/

// 1부터 5까지 출력하기
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// n1부터 n2까지 더하기
// n1부터 n2까지 더하기
let n1 = 1;
let n2 = 100;
let total = 0;
for (let i = n1; i <= n2; i++) {
  total += i;
}
console.log(`${n1}부터 ${n2}까지 더한 결과는 ${total}`);

console.log("while>>>>>>>>>>>>>>>>>>>");

//1부터 5까지 출력하기
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log("========");
// 1부터 5까지 출력하기
i = 1;
while (true) {
  console.log(i);
  i++;
  if (i > 5) break;
}

console.log("========");
i = 0;
while (i < 100) {
  i++;
  if (i % 3 !== 0) continue;
  console.log(i);
}

console.log("========");
i = 0;
do {
  console.log(i);
} while (i != 0);
