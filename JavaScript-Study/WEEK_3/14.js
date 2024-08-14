// bind 메서드
// -> this를 바인딩 하는 메서드
// call, apply와는 좀 다르다! 즉시 호출하지는 않는다.

// [목적]
// 1. 함수에 This를 '미리' 적용해요.
// 2. 부분 적용 함수!

var func = function (a,b,c,d) {
    console.log(this, a, b, c, d);
};
//func(1, 2, 3, 4);

// 함수에 this를 미리 적용!
var bindFunc1 = func.bind({x: 1}); // 미리 this가 가리릴 객체를 적용할 수 있습니다. binding한다
//bindFunc1(5, 6, 7,8);

// 부분 적용 함수
var bindFunc2 = func.bind({x: 1}, 4, 5); // 미리 매개변수도 세팅할 수 있습니다.
//bindFunc2(6, 7);
//bindFunc2(10, 11);

console.log(func.name);
console.log(bindFunc1.name); // bound func
console.log(bindFunc2.name); // bound func   bind()함수를 이용한 것인지 확인하기 매우 쉽다

// name 프로퍼티!!
// bind - 'bound' 라는 접두어!


// 전에 우회할려고 할때 이용한 self에 this를 할당해준방법 보다는
// 요즘은 변수를 활용한 우회법보다는 call, apply, bind를 사용해 좀 더 명확하게 할 수 있어 이 방법을 많이 씁니다.
// call은 즉시 실행으로 된다
var obj = {
	outer: function() {
		console.log(this); // obj
		var innerFunc = function () {
			console.log(this);
		};

		// call을 이용해서 즉시실행하면서 this를 넘겨주었습니다
		innerFunc.call(this); // obj
	}
};
obj.outer();

// bind를 좀 더 많이 이용해서 사용합니다. 미리 지정해줄수 있기에 사용이 용이합니다.
var obj = {
	outer: function() {
		console.log(this);
		var innerFunc = function () {
			console.log(this);
		}.bind(this); // innerFunc에 this를 결합한 새로운 함수를 할당
		innerFunc();
	}
};
obj.outer();

// 화살표 함수의 예외사항
// 이 화살표 함수는 this를 바인딩하는 과정자체가 없어 죽어도 전역객체 window, global객체로 사용이 안됩니다.
// 이 함수 내부에는 this의 할당과정(바인딩 과정)이 아에 없으며, 접근코자 하면 스코프체인상 가장 가까운 this에 접근하게 됨
// this우회, call, apply, bind보다 편리한 방법
var obj = {
	outer: function () {
		console.log(this);
		var innerFunc = () => {
			console.log(this);
		};
		innerFunc();
	}
};
obj.outer();
