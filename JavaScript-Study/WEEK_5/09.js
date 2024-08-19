// 클로저(Closure)
const x = 1;

function outerFunc() {
  const x = 10; // 이 x는 2번줄 x와는 다른 x다 왜? 스코프(범위)가 다르기 때문입니다.
  function innerFunc() {
    // x는 어디서 참조할까 먼저이 innerFunc함수내부에서 찾다가 없어서 바깥으로 시선을 돌리는 스코프체인이 된 외부환경(outer)에서 x를 찾습니다.
    // 함수가 선언된 렉시컬 환경!!!
    // 함수가 선언될 당시의 외부 변수 등의 정보!!
    console.log(x); // 10 outer는 즉 이 함수가 실행될때의 렉시컬환경이다 실행될때 환경은 outerFunc이고 이 innerFunc가 실행될때 outerFunc의 변수정보나 그런 것들이 들어있는 것이 outer(외부환경, 렉시컬환경)이다.
  }

  innerFunc();
}

outerFunc();