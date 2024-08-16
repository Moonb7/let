// Promise
// 이전에 썻던 방법 : then(그러면~~)
// 이번에 쓸 방법 : async(비동기) / await(기다리다)

// coffeeMaker 함수에서 호출할 함수, 'addCoffee'를 선언
// Promise를 반환
var addCoffee = function (name) {
	return new Promise(function (resolve) {
		setTimeout(function(){
			resolve(name);
		}, 500);
	});
};

// ***
// var coffeeMaker = async () => {
// 이 async라는 키워드를 함수에 붙혀주면 함수내부(스코프)안에 실행할 메서드 앞에 await키워드를 붙혀주면 await를 만나면 
var coffeeMaker = async function () {
	var coffeeList = '';
    
	var _addCoffee = async function (name) {
		coffeeList += (coffeeList ? ', ' : '') + await addCoffee(name);
	};

    // promise를 반환하는 함수인 경우, await를 만나면 무조건 끝날 때 까지 기다린다.
    // 만약 _addCoffee('에스프레소'); 이 로직이 실행되는데 100초가 걸렸다.
	await _addCoffee('에스프레소');
    // 그럼 console.log(coffeeList); 이 로직은 100초뒤에 실행되는 겁니다.
	console.log(coffeeList);
	await _addCoffee('아메리카노');
	console.log(coffeeList);
	await _addCoffee('카페모카');
	console.log(coffeeList);
	await _addCoffee('카페라떼');
	console.log(coffeeList);
};
coffeeMaker();