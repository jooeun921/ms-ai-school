// var v1;
// v1 = 3;
// console.log("v1: ", v1);

// 변수 호이스팅에 의해서 변수 선언 부분이 끌어당겨지기 때문에 변수 선언이 아래에 있어도 문제 없이 실행됨.
// 다만, 변수에 할당되는 값은 들어가지 않고, undefined로 초기화되어 있음.
// console.log("v1 : ", v1);
// console.log("v2 : ", v2);
// var v1 = 1;
// var v2 = 2;

// var는 재선언이 가능하다.
// var v1 = 1;
// var v1 = 11;
// console.log(v1);

// let l1; // 변수 선언
// console.log("l1 : ", l1); // undefined

// let l1 = 1;
// console.log(l1);

// console.log(l1); //error
// let l1=1;

// let l1 = 1;
// let l1 = 11; //error
// console.log(l1);

// const c1 = 1;
// console.log("c1 : ", c1);

// const c1; //error
// c1 = 1;

// const c1 = 1;
// c1 = 11; //error

// const c1 = 1;
// const c1 = 11; //error

// var x = 1;
// if (true) {
//   var x = 10;
//   console.log(x); //10
// }
// console.log(x); //10

// let x = 1;
// if (true) {
//   let x = 10;
//   console.log(x); //10
// }
// console.log(x); //1

const x = 1;
if (true) {
  const x = 10;
  console.log(x); //10
}
console.log(x); //1
