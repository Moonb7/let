const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer함수를 '실행'해서, innerFunc에 담죠...!
// outer함수의 return부분을 innerFunc에 담는다는 이야기
const innerFunc = outer();
// --------------------여기서는....outer함수의 실행컨텍스트는 없어 집니다. 실행이 종료되어 없어 집니다.
// 중첩함수 inner함수가 외부함수 outer함수 보다 더 오래 유지되면 외부함수outer함수의 변수(x)를 여전히 참조합니다. <-이러한 개념이 클로저라고 합니다.
innerFunc(); // 10

// 어떻게 가능한가?
// 쓰지않는 값들은 가비지 컬렉터에 의해 처리되지만 
// 종료된 외부함수의 변수를 참조하고 있는 중첩함수가 있어서
// 아 이건 사용하는 코드로 인식하여 가비지 컬렉터에서 가져가지 않아 사용할 수 있습니다.

// // 추가 클로저의 예
// function foo() {
//     const x = 1;
//     const y = 2;
  
//     // 클로저의 예
//     // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며
//     // 상위 스코프의 식별자를 참조한다.
//     function bar() {
//       debugger;
//       console.log(x);
//     }
//     return bar;
//   }
  
//   const bar = foo();
//   bar();

// // 클로저가 아닌것
// // 1.
// function foo() {
//     const x = 1;
//     const y = 2;
  
//     // 일반적으로 클로저라고 하지 않아요.
//     function bar() {
//       const z = 3;
  
//       //상위 스코프의 식별자를 참조하지 않기 때문이죠.
//       console.log(z);
//     }
  
//     return bar;
//   }
  
//   const bar = foo();
//   bar();

// // 2.
// function foo() {
//     const x = 1;
  
//     // bar 함수는 클로저였지만 곧바로 소멸한다.
//     // 외부로 나가서 따로 호출되는게 아니라, 선언 후 바로
//       // 실행 + 소멸
//     // 이러한 함수는 일반적으로 클로저라고 하지 않는다.
//     function bar() {
//       debugger;
//       //상위 스코프의 식별자를 참조한다.
//       console.log(x);
//     }
//     bar();
//   }
  
//   foo();