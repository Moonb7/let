
// innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.
// Lexical Scope를 따르는 프로그래밍 언어이기 때문

// [렉시컬 스코프]
// Js 엔진은 함수를 어디서 '호출' 했는지가 아니라
// 어디에 '정의'했는지에 따라서 스코프(상위 스코프)를 결정한다.

// '외부 렉시컬 환경에 대한 참조값' => outer
// 스코프는 함수 정의가 평가되는 시점!!! 선언하는 시점에 정의 

const x = 1;

// outerFunc내에 innerFunc가
// '호출'되고 있음에도 불구하고
function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

// innerFunc와, outerFunc는 서로
// 다른 scope를 가지고 있다!!!
function innerFunc() {
  console.log(x); // 1
}

outerFunc();