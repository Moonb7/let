// 메서드 내부에 있는 함수에서 this
// 내부함수도 예외 없어 내부라고 해도 함수로서 호출이 되면 this는 전역 객체를 의미합니다.
// var obj1 = {
// 	outer: function() {
// 		console.log('Test => ',this); // (1) obj1
// 		var innerFunc = function() {
// 			console.log('Test => ', this); // (2) 전역객체 (3) obj2
// 		}
// 		innerFunc();

// 		var obj2 = {
// 			innerMethod: innerFunc
// 		};
// 		obj2.innerMethod();
// 	}
// };
// obj1.outer(); // 총세번 출력이 되는데 (1) : obj1, (2) : 전역객체, (3) : obj2

// 메서드의 내부 함수에서의 this 우회
// this에대해 이해는 하겠는데 개발자 입장에서 이게 쉽게 받아 들여지지않아서 흐름에 맞게끔 우회할 수 있는 방법이 있다고 합니다.

// 1. 변수를 활용하는 방법 : 내부 스코프에 이미 존재하는 this를 별도의 변수(ex : self)에 할당하는 방법입니다.
// 이는 일반 함수에서 this가 바인딩되는 방식과 상관없이 obj1을 참조하도록 하기 위해 사용하는 패턴입니다.
var obj1 = {
	outer: function() {
		console.log('Test => ', this); // (1) { outer: ƒ }

		// AS-IS : 기존에 있던거
		var innerFunc1 = function() {
			console.log('Test => ', this); // (2) 전역객체
		}
		innerFunc1();

		// TO-BE : 이후 바뀐거
		var self = this; // (1)에서 호출한거와 같이 여기 this는 obj1을 가리키면서 변수에 할당해 이용할 수 있습니다.
		var innerFunc2 = function() {
			console.log('Test => ', self); // (3) { outer: ƒ }
		};
		innerFunc2();
	}
};
// 메서드 호출 부분
obj1.outer();

// 2. 화살표 함수 = this를 바인딩하지 않는 함수입니다.
// ES6에서는 함수 내부에서 this가 전역객체를 바라보는 문제 때문에 화살표함수를 도입했습니다.
// 일반 함수와 화살표 함수의 가장 큰 차이점은 무엇인가요? 라고 물으면
// this binding 여부가 가장 적절한 답입니다

var obj = {
	outer: function() {
		console.log(this); // (1) obj
		var innerFunc = () => {
			console.log(this); // (2) obj
		};
		innerFunc();
	}
}

obj.outer();
// 화살표 함수는 자신만의 this를 가지지 않고, 외부 스코프의 this를 그대로 사용합니다.

// 콜백 함수 호출 시 그 함수 내부에서의 this
// 단, 예외가 하나 있습니다 콜백 함수 별도로 this를 지정한 경우는 예외적으로 그대상을 참조하게 되어있습니다.

// setTimeout 함수, forEach 메서드는 콜백 함수를 호출할 때 대상이 될 this를 지정하지 않으므로, this는 곧 window객체
// 별도 지정 없음 : 전역객체
setTimeout(function () { console.log(this) }, 300);

// 별도 지정 없음 : 전역객체
[1, 2, 3, 4, 5].forEach(function(x) {
	console.log(this, x);
});

// addListener 안에서의 this는 항상 호출한 주체의 element를 return하도록 설계되었음
// addEventListner 메서드는 콜백 함수 호출 시, 자신의 this를 상속하므로, this는 addEventListner의 앞부분(button 태그)
// 따라서 this는 button을 의미함
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function(e) {
	console.log(this, e);
});
// 결론은 콜백 함수의 this는 왠만하면 따로 호출하는 객체가 없기에 전역객체를 부른다고 생각하고 예외는 한가지 있다.


// 생성자 함수 내부에서의 this
// 생성자 : 구체적인 인스턴스(어려우면 객체로 이해!)를 만들기 위한 일종의 틀
var Cat = function (name, age) {
	this.bark = '야옹';
	this.name = name;
	this.age = age;
};

var choco = new Cat('초코', 7); //this : choco
var nabi = new Cat('나비', 5);  //this : nabi
// 이때의 this는 새로 생성할 빈 객체를 받아 사용됩니다. 첫번째 생성되는 choco를 this가 가리키고 생성자를 만들어 반환한다. 생각하면 될 거 같습니다.