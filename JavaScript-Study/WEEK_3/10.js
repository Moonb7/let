// 추가로 call / apply 메서드 활용
// 1. 유사배열객체(array-like-object)에 배열 메서드를 적용
// 유사 배열의 조건
// - 반드시 length가 필요하다. 
// - index번호가 0번부터 시작해서 1씩증가해야한다. 안그래도 되기는하지만 예상치 못한 결과가 나올 수 있습니다.

//객체에는 배열 메서드를 직접 적용할 수 없어요.
//유사배열객체에는 call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있어요.

// 유사배열
var obj = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3
};

Array.prototype.push.call(obj, 'd');
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

// Array.from 메서드(ES6)
// call/apply를 통해 this binding을 하는 것이 아니라 객체 → 배열로의 형 변환 만을 위해서도 쓸 수 있지만 원래 의도와는 거리가 먼 방법일 수 있습니다.
// 그래서 ES6에서는 Array.from이라는 방법을 제시했는데 한번 써 보겠습니다.
// 객체 -> 배열
var arr = Array.from(obj);

// 찍어보면 배열이 출력됩니다.
console.log(arr);