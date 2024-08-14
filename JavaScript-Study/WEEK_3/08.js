// 명시적 this binding
// call, apply, bind
// call
var func = function (a, b, c) {
	console.log(this, a, b, c);
};

// no binding
//func(1, 2, 3);

// 명시적 binding call
//func.call({x: 1},4, 5, 6); // 첫번째 인자에 this로 가리킬 객체를 넣어 줄 수 있습니다.

// 명시적 binding apply
func.apply({x: 1}, [4, 5, 6]); // 첫번째 인자에 this로 가리킬 객체를 넣어 주고 뒤에 있는 매개변수는 대괄호[]로 묶어서 사용합니다.

