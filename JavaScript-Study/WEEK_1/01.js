// 변수, 상수
// 메모리에 저장한다, 읽어들여서 재사용한다. 변수.

// 변수의 5가지 주요 개념

// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할된 값을 읽어오는 것
var myVar = "Hello World";
console.log(myVar);

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// 1. var
var myVar = "Hello World";
var myVar = "Test 1";
myVar = "GooBye";
console.log(myVar);

// 2. let
let myLet = "Hello World1";
//let myLet = "Test 2";
myLet = "GooBye 1";
console.log(myLet);

// 3. const
const myConst = "Hello World2";
//const myConst = "Test 3";
myConst = "GooBye 2";
console.log(myLet);

// var는 변수 이름을 같은 이름으로 계속 선언해 줄 수 있습니다.
// const는 즉 상수이다. 변수의 값을 한번 지정해 준 하나의 값만 가지고 다른 값으로 할당이 불가능하다.