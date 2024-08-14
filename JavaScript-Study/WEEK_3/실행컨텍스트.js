// 실행 컨텍스트
// 자바스크립트의 실행 컨스텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체입니다.
// 1. 선언된 변수를 위로 뜰어올린다 = 호이스팅(hoisting)
// 2. 외부 환경 정보를 구성한다.
// 3. this값을 설정한다.

// 이해 하기 위해선 '콜 스택' 을 이해한다 먼저 "스택"과 "큐"를 보겠습니다.
// 스택 : LIFO(Last In, First Out)
// 큐 : FIFO(First In, First Out)

// 콜 스택(call stack)
// 실행 컨스텍스트 객체를 동일 환경에 있는 코드를 실행할 때 필요한 환경 정보들을 모아 구성하고 이것을 스택의 한종류인 콜 스택에 쌓아 줍니다. 
// 코드의 환경 및 순서를 보장해 줍니다.

// ---- 1번
// var a = 1;
// function outer() {
// 	function inner() {
// 		console.log(a); //undefined
// 		var a = 3;
// 	}
// 	inner(); // ---- 2번
// 	console.log(a);
// }
// outer(); // ---- 3번
// console.log(a);

// 코드실행 → 전역(in) → 전역(중단) + outer(in) → outer(중단) + inner(in) → inner(out) + outer(재개) → outer(out) + 전역(재개) → 전역(out) → 코드종료

// 결국은 특정 실행 컨텍스트가 생성되는(또는 활성화되는) 시점이 콜 스택의 맨 위에 쌓이는(노출되는) 순간을 의미하구요. 곧, 현재 실행할 코드에 해당 실행 컨텍스트가 관여하게 되는 시점을 의미한다고 받아들여주시면 정확합니다

// 실행 컨텍스트 객체의 실체(=담기는 정보), 실행 컨텍스트안에 있는 내용들
// 1. VariableEnvironment
// 현재 컨텍스트 내의 식별자 정보(=record)를 갖고있어요. 
// var a =15; 에서 var a가 식별자이다. 15는 변수
// 외부 환경 정보(=outer)를 갖고있어요.

// 2. LexicalEnvironment
// VariableEnvironment와 똑같은거고, LexicalEnvironment는 변경사항을 실시간으로 반영해요.

// 3. ThisBinding
// this 식별자가 바라봐야할 객체
// this를 주로 우리가 함수내에서 사용해 어떤기능을 결정해 주는 역할이다.

// VE vs LE
//이 두가지는 담기는 항목은 완벽하게 동일해요. 그러나, 스냅샷 유지여부는 다음과 같이 달라요.  
// 1. VE : 스냅샷을 유지해요. 이말은 실시간으로 바뀌지 않는다.
// 2. LE : 스냅샷을 유지하지 않아요. 즉, **실시간으로 변경사항을 계속해서 반영**합니다. 
// 결국, 실행 컨텍스트를 생성할 때, VE에 정보를 먼저 담은 다음, 이를 그대로 복사해서 LE를 만들고 이후에는 주로 LE를 활용한답니다.

// record와 호이스팅
// 식별자 정보들이 저장(수집)돼요. 기록된다라고 생각하면됩니다.
// 수집 대상 정보 : 함수에 지정된 매개변수 식별자, 함수 자체, var로 선언된 변수 식별자 등
// 컨텍스트 내부를 처음부터 끝까지 순서대로 훑어가며 수집하고 코드가 실행된다고는 하지 않습니다.

// 호이스팅
// 식별자 개념을 수집할때 호이스팅 개념이 나온다
// - 변수 정보 수집 과정을 이해하기 쉽게 설명한 '가상 개념'
// 가상개념이라는 말은, 실제로는 그렇진 않더라도 사람이 이해하기 쉬운 말로 풀어 표현했다는 것을 의미합니다.

// hoist : 끌어올리다 즉 식별자정보를 맨위로 끌어 올리고 그게 레코드를 수집하는 과정을 의미합니다.

// 호이스팅 규칙 
//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

// 호이스팅 법칙 1 : 매개변수 및 변수는 선언부를 호이스팅 합니다.
// function a (x) {
// 	console.log(x);
// 	var x;
// 	console.log(x);
// 	var x = 2;
// 	console.log(x);
// }
// a(1);

// // 호이스팅개념 적용
// function a () {
// 	var x;
// 	var x;
// 	var x;

// 	// 나머지 선언부 빼고 순서대로 정리
// 	x = 1;
// 	console.log(x);
// 	console.log(x);
// 	x = 2;
// 	console.log(x);
// }
// a(1);

// 호이스팅 법칙 2 : 함수 선언은 전체를 호이스팅합니다.
function a () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	var b = function b() { }
	console.log(b);
}
a();

// 호이스팅개념 적용
function a () {
	var b; // 변수 선언부 호이스팅
	function b() { } // 함수 선언은 전체를 호이스팅

	// 나머지 선언부 빼고 순서대로 정리
	console.log(b);
	b = 'bbb'; // 변수의 할당부는 원래 자리에

	console.log(b);
	console.log(b);
}
a();

// 함수 선언문 표현식으로 변경
function a () {
	var b; // 변수 선언부 호이스팅
	var b = function b() { } // 함수 선언문 표현식으로 변경

	console.log(b);
	b = 'bbb'; // 변수의 할당부는 원래 자리에

	console.log(b);
	console.log(b);
}
a();

// 함수라고 해서 무조건 호이스팅되는건 아닙니다.
// 함수안에서 변수들을 수집하는 과정을 '호이스팅' 그 과정에서 변수의 선언부 그리고 함수는 위로 끌어 올려졌다.

// 함수에는 선언문과 표현식이있습니다.
// 표현식에는 익명함수표현식, 기명 함수 표현식이 있습니다.

// 함수 선언문. 함수명 a가 곧 변수명
// function 정의부만 존재, 할당 명령이 없는 경우
function a () {}
a(); // 실행 ok

// (1) 익명함수표현식 : function을 별도 변수에 할당하는 경우 일반적으로 많이 쓰는 case입니다.
var b = function () {}
b(); // 실행 ok

// (2) 기명 함수 표현식 : 변수명은 c, 함수명 d을 지어 표현한것 거의 않씁니다.
// d()는 c() 안에서 재귀적으로 호출될 때만 사용 가능하므로 사용성에 대한 의문
var c = function d () {} 
c(); // 실행 ok
//d(); // 에러!

// 요약 내용정리
// 실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다.
// 그 객체 안에는 3가지가 존재한다.
// - VariableEnvironment
// - LexicalEnvironment
// - ThisBindings
// 이때 VE와 LE는 실행컨텍스트 생성 시점에 내용이 완전히 같고, 이후 스냅샷 유지 여부가 다르다.
// - LE는 다음 2가지 정보를 가지고 있다.
// record(=environmentRecord) 이 record의 수집과정이 hoisting
// outer(=outerEnvironmentReference)

// 함수 선언문과 표현식이 호이스팅 부분에 다르게 차이난다
// console.log(sum(1, 2));
// console.log(multiply(3, 4));

// function sum (a, b) { // 함수 선언문 sum
// 	return a + b;
// }

// var multiply = function (a, b) { // 함수 표현식 multiply
// 	return a + b;
// }

// 호이스팅 적용 후
// 함수 선언문은 전체를 hoisting
// function sum (a, b) { // 함수 선언문 sum
// 	return a + b;
// }

// // 함수 표현식은 변수는 선언부만 hoisting
// var multiply; // 오 그러니깐 일단 변수든 함수든 선언부는 위로 먼저 올라간다.

// console.log(sum(1, 2));
// console.log(multiply(3, 4));

// multiply = function (a, b) { // 변수의 할당부는 원래 자리
// 	return a + b;
// };

// 함수 선언문의 약간의 위험성 예
// 100번째 줄 : 시니어 개발자 코드(활용하는 곳 -> 200군데)
// hoisting에 의해 함수 전체가 위로 쭉!
// function sum (x, y) {
// 	return x + y;
// }
// var c = sum(1, 2);

// console.log(c);

// // 5000번째 줄 : 신입이 개발자 코드(활용하는 곳 -> 10군데)
// // hoisting에 의해 함수 전체가 위로 쭉! 해서 이전 같은이름의 함수기능은 사용되지 않거 새로 신입이 작성한 함수의 내용으로 실행됩니다.
// function sum (x, y) {
// 	return x + ' + ' + y + ' = ' + (x + y);
// }
// var c = sum(1, 2);

// console.log(c);

// 만약 함수 표현식이면
// 함수 선언부만 위로 쭉!
// 이 이후부터의 코드만 영향을 받아요!
var sum = function (x, y) {
	return x + y;
}
var a = sum(1, 2);

// 함수 선언부만 위로 쭉!
// 이 이후부터의 코드만 영향을 받아요!
var sum = function (x, y) {
	return x + ' + ' + y + ' = ' + (x + y);
}
var c = sum(1, 2);

console.log(c);

// 그래서 협엽을 많이 하고, 복잡한 코드일 수록. 전역 공간에서 이루어져 있을수록 함수 표현식을 활용하는 습관을 들이면 좋습니다.

// LexicalEnvironment-outer를 이해하기위해 스코프, 스코프체인
// outer를 이해하기 앞서 스코프, 스코프체인을 먼저 이해해 봅시다.
// 스코프
// 1. 식별자에 대한 유효범위를 의미해요. 변수가 어디까지 영향을 미칠수 있느냐 라는 개념의 범위를 말하기도 합니다.

// 스코프 체인
// 식별자의 유효범위를 안에서부터 바깥으로 차례로 검색해나가는 것 상위(외부)환경(감싸주는 전역이나 함수)에서로 부터 식별자를 검색할 수 있다라고 생각하면 될 것 같습니다.

// 전역 컨텍스트 -> A컨텍스트 -> B컨텍스트 -> C컨텍스트 라고하면
// 각각의 실행 컨텍스트는 record와 outer를 가지고 있고 record에는 변수의 선언부, 함수, 호이스팅 되어 있는부분을 수집해 놓은 것을 갖고 있고
// outer는 실행 컨텍스트가 만들어(활성화, 함수를 실행) 질때의 그 상위(외부)환경(감싸주는 전역이나 함수)에서 정보(LE정보)를 가져옵니다.
// 그 정보를 참조하여 변수정보나 여러 정보를 참고하기위해서 가져옵니다.

// 스코프 및 스코프 체인과 outer 예시
var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); // undefined 이유는 뭐죠? scope 관점에서 일단 호이스팅되면서 스코프 범위내에 var a 지역변수가 먼저 선어이되고 이 console.log가 실행이 되어 아직 a에 할당한 값이 없어 undefined가 나왔습니다. 그리고 console.log가 끝나고 a = 3;이 실행되었습니다.
		var a = 3;
		console.log(a); // 3
	};
	inner();
	console.log(a); // 1 scope 관점에서! 전역 컨텍스트에서 전역변수 a를 가져와 읽을 있습니다.
};
outer();
console.log(a); // 1 마찬가지로 이유도! 전역 컨텍스트에서 실행을 하였고 전역에 있는 변수를 가져다 읽어 사용하였습니다.

// 한마디로 각각의 콜 스택에 쌓이는 실행 컨텍스트는 LE(LexicalEnvironment)안에 record와 outer를 가지고 있고, outer 안에는 그 실행 컨텍스트가 선언될 당시의 LE정보가 다 들어있으니 scope chain에 의해 상위 컨텍스트의 record를 읽어올 수 있다.