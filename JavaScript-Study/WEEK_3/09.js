var obj = {
	a: 1,
	method: function (x, y) {
		console.log(this.a, x, y);
	}
};

// method 함수 안의 this는 항상 obj!!
// obj.method(2, 3); 

//obj.method.call({a: 4},2, 3); // 첫 번쨰 인자에 this를 가릴킬 객체를 넣어 줄 수 있습니다.

obj.method.apply({a: 4},[2, 3]); // 첫번째 인자에 this로 가리킬 객체를 넣어 주고 뒤에 있는 매개변수는 대괄호[]로 묶어서 사용합니다.