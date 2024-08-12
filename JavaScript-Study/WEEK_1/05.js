// 형 변환
// 형태 -> 바꾼다
// 명시적 형변환, 암시적 형변환

// 1. 암시적
// 1-1. 문자열 
// +더하기 연산자를 만나면 형변환이 암시적으로 일어 날 수 있습니다.
let result1 = 1+ "2";
// console.log(result1);
// console.log(typeof result1);

let result2 = "1" + true;
// console.log(result2);
// console.log(typeof result2);

// {}, null, undefined + "1" => 문자열을 만나면 자동으로 문자열로 변환

// 1-2. 숫자
// +더하기 연사자 빼고 다른 연산자가 나올시 숫자타입을 우선으로 형변환이 일어납니다.
let result3 = 1 - "2";
// console.log(result3);
// console.log(typeof result3);

let result4 = "2" * "3";
// console.log(result4);
// console.log(typeof result4);

// 2. 명시적 형 변환
// 2-1. Boolean
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log("-------------");
// console.log(Boolean("false")); // false라고 문자열을 해도 boolean으로 변환시 문자열 안에 값이 있는 걸로 판단하여 true가 나옵니다.
// console.log(Boolean({})); // 객체는 값이 없어도 true가 나옵니다.

// 2-2. 문자열
let result5 = String(123);
// console.log(typeof result5);
//console.log(result5);

let result6 = String(true);
// console.log(typeof result6);
//console.log(result6);

let result7 = String(false);
// console.log(typeof result7);
//console.log(result7);

let result8 = String(null);
// console.log(typeof result8);
//console.log(result8);

let result9 = String(undefined);
// console.log(typeof result9);
//console.log(result9);

// 1-3. Number
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);