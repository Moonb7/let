// this(정의, 활용방법, 바인딩, call, apply, bind)
// 실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다.
// 그 중 여기서는 ThisBindings 알아 봅니다.

// 런타임
// run + time
// 코드가 돌아가는 환경(시간)
// 1. 노드
// 2. 브라우저
// 전역 환경에서 this는 -> 노드(global 객체), 브라우저 (window 객체)이다.

// 메서드로서 호출할 때 그 메서드 내부에서의 this
// 함수 vs 메서드  아 다른 거였어?
// 함수와 메서드, 상당히 비슷해 보이지만 엄연한 차이가 존재합니다. 기준은 독립성이에요. 함수는 그 자체로 독립적인 기능을 수행해요.
// 함수명();
// 함수 : this -> 전역 객체

// 메서드는 종속적인것으로 메서드는 자신을 호출한 대상 객체에 대한 동작을 수행해요
// 객체.메서드명();
// 메서드 : this -> 호출의 주체 위에서의 예시로는 객체.메서드에서 객체가 = this로 쓰입니다.

// CASE1 : 함수
// 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미해요.
// var func = function (x) {
// 	console.log(this, x);
//};
// func(1); // 브라우저에서 : Window { ... } 1, node.js 는 : global { ... } 1

// CASE2 : 메서드
// 호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미해요.
// obj는 곧 { method: f }를 의미하죠?
//var obj = {
//	method: func,
//};
//obj.method(2); // { method: ƒ } 2

// 함수로서의 호출과 메서드로서의 호출 구분 기준 : . []
var obj = {
	methodA: function () { console.log(this) },
	inner: {
		methodB: function() { console.log(this) },
	}
};

obj.methodA();             // this === obj
obj['methodA']();          // this === obj

obj.inner.methodB();       // this === obj.inner
obj.inner['methodB']();    // this === obj.inner
obj['inner'].methodB();    // this === obj.inner
obj['inner']['methodB'](); // this === obj.inner

// 함수로서 호출할 때 그 함수 내부에서의 this
// 1. 어떤 함수를 함수로서 호출할 경우, this는 지정되지 않아요(호출 주체가 알 수 없으니까요)
// 2. 실행컨텍스트를 활성화할 당시 this가 지정되지 않은 경우, this는 전역 객체를 의미하죠
// 3. 따라서, 함수로서 ‘독립적으로’ 호출할 때는 this는 항상 전역객체를 가리킨다는 것을 알고 있어야 됩니다.
