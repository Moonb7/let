// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
// };

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~)
// 3-1. Object.key() : key를 가져오는 메소드
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자",
};

let keys = Object.keys(person);
//console.log("keys => ", keys);

// 3-2. values
let values = Object.values(person);
//console.log("values => ", values);

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person)
//console.log("entries => ", entries);

// 3-4. assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, { gender: "여자" });
// console.log("newPerson => ", newPerson);

// 3-5. 객체 비교
// 객체는 크기가 상당히 크다!! -> 메모리에 저장할 때 별도의 공간에 저장
// person1에는 별도 공간에 대한 주소를 저장한다
// let person1 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
// };

// // person1에는 별도 공간에 대한 주소를 저장한다
// let person2 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
// };

// let str1 = "aaa";
// let str2 = "aaa";

// console.log("answer =>", person1 === person2); // false 두개의 주소를 가지고 비교하기 때문에 두개의 주소는 달라 false를 반환합니다.
// console.log("answer2 =>", str1 === str2); // true

//console.log(JSON.stringify(person1) === JSON.stringify(person2)); //true JSON형식으로 문자열화로 시켜 비교했을때는 내용은 똑같으니 true를 반환합니다.

// 3-6. 객체 병합
let person1 = {
    name: "홍길동",
    age: 30,
};

let person2 = {
    gender: "남자",
};

// ES6에 나온 새로운 문법 ...
// ... : spread operator 
let perfectMan = {...person1, ...person2}; // ...은 중괄호를 해체된 상태로 그대로 값을 받을 수 있어 이런식으로 함칠 수 있습니다.
console.log(perfectMan); // { name: '홍길동', age: 30, gender: '남자' }