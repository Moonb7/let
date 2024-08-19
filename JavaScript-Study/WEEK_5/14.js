// 카운트 상태 변경 함수 #3
// increase함수는 밑에잘보면 ()로 실행하고 return으로 이 function () {
//                                                       return ++num;
//                                                    }; 을 받아 줍니다.
const increase = (function () { 
    // 카운트 상태 변수
    let num = 0;

    // 클로저
    return function () {
      return ++num;
    };
  })();
  // 클로저는 주로 함수의 정의하고 {} 하는 이러한 형태로 많이 보입니다.
  
  // 이전 상태값을 유지
  console.log(increase()); //1 즉 위에서 말했듯이 function () {
  //                                              return ++num;
  //                                            }; 이함수를 실행하면서 중첩함수를 실행하고 있어 종료된 외부함수의 num을 참조하고 있어 실행중인 코드는 정리하지 않는 가비지 컬렉터가 외부함수 코드를 정리되지 않습니다.
  console.log(increase()); //2
  console.log(increase()); //3
  
  // [코드 설명]
  // 1. 위 코드가 실행되면, '즉시 실행 함수'가 호출!! -> 함수가 반환(inner) -> increase에 할당
  // 2. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된 상위 스코프인 즉시 실행 함수의 '렉시컬 환경'을 기억하는
  //     클로저입니다. 그래서 --> let num = 0; 을 기억한다.
  // 3. 즉시 실행 함수는 -> 즉시 소멸됩니다!! (outer함수가 불리자마자 바로 call stack에서 popup 되는 것과 비슷..)
  // * 결론 : num은 초기화 x, 외부에서 접근할 수 없는 은닉된 값!! 의도되지 않은 변경도 걱정할 필요가 없습니다.
  // --> increase함수에서만 변경할 수 있기 때문에 그렇습니다.