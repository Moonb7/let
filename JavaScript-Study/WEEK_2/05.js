// 일급 객체로써의 함수 (2)
const person = {
    name: 'John',
    age: 31,
    isMarried: false,
    // sayHello: () => {
    //     console.log(`Hello, My name is ${this.name}`); // 출력하면 this.name이 부분이 undefined로 나옵니다. why? -> 화살표함수는 this를 바인딩 하지 않는다.
    // }
    sayHello: function () {
        console.log(`Hello, My name is ${this.name}`); // 이 안에서의 this는 person을 가르켜서 person.name으로 생각을 하면 될거 같습니다.
    },
};

person.sayHello();