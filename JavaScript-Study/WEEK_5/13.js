// 카운트 상태 변경 함수 #2
const increase = function () {
    // 카운트 상태 변수
    let num = 0;
  
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
  };
  
  // 이전 상태값을 유지 못함
  console.log(increase()); //1
  // num = 100 // 이거는 방지
  console.log(increase()); //1
  console.log(increase()); //1

// [리뷰]
// 1. num 변수는 increase 함수의 지역변수로 선언 -> 변경은 방지
//    = num 변수는 오직 increase 함수만이 변경할 수 있었음!@
// 2. 하지만, increase()가 호출될 때 마다 num이 초기화되는 이상한 코드....
// 3. 백번, 천번, 만번 호출 -> 출력값은 언제나 1
// * 의도치 않은 변경은 방지하면서 + 이전 상태를 유지해야 한다. 
// 결론 : closuere!! 이것을 할려면 클로저를 이용하기 좋다 14.js 계속....