let x;
x = String(1);
console.log(x, typeof x);
console.log(typeof (1).toString());
console.log(typeof (1.5).toString());

x = "1.5";
console.log(typeof x, typeof Number(x));
console.log(parseInt(x), typeof parseInt(x)); //문자열을 integer 형태로 만듬. 단, type은 number임. 자바스크립트에는 int형이 없음.
console.log(parseInt(1.5)); //즉, 뒤에 붙은 소수점을 뗀다고 생각하는 게 더 편함. 숫자 타입은 number 뿐이기 때문.

x = "1.0";
console.log(parseInt(x), typeof parseFloat(x));
console.log(parseFloat(1)); //이건 실수형인데, 그렇다고 해서 1 -> 1.0 으론 출력 안 되더라.

x = Boolean(1);
console.log(x, typeof x);

// false로 변환되는 값
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// 암묵적 형 변환
// 개발자의 의도와 상관 없이 자바스크립트 엔진에 의해 타입이 변환되는 것
// 암묵적 형 변환은 코드의 가독성 측면에서 좋을 수 있다.
// 다만 코드의 결과를 예측할 수 있어야 한다.
// +연산자를 문자열과 함께 사용할 때 → 문자열 타입으로 변환
console.log("10" + 5); //105
console.log("10" + undefined); //10undefined
console.log("10" + null); //10null
console.log("10" + true); //10true

//+ 이외의 산술연산자를 문자열과 함께 사용할 때 → 숫자 타입으로 변환
console.log("10" * 5); // 50
console.log("10" * undefined); // undefined는 NaN으로 변환

// NaN(Not a Number. 숫자로 변환할 수 없는 값을 처리할 때 발생하는 특별한 값)
console.log("10" * null); // 0(null은 0으로 변환)
console.log("10" * true); //10(true는 1로 변환)
