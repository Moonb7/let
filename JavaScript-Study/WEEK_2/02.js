// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나, 객체의 속성
// 요소하나하나를 때어내서 각 변수에 할당해 준다는 개념입니다.

// (1)
// let [value1, value2] = [1, "new"];
// console.log("1", value1);
// console.log("2", value2);
let arr = ["value1", "value2", "value3", "value4"];
let [a, b, c, d = 4] = arr; // 만약 값이 안들어오면 이 초기값으로 이용됩니다.

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// (2) 객체인 경우
// let user = {
//     name: "nbc",
//     age: 30,
// };

// 구조분해 할당
// let {name, age} = { // 변수의 이름은 동일하게 해야 동작합니다.
//     name: "nbc",
//     age: 30,
// };

// console.log("name => ", name);
// console.log("age => ", age);

// 새로운 이름으로 할당
let user = {
    name: "nbc",
    age: 30,
    birthday: "yesterday",
}

// let {name: newName, age: newAge} = user; // 변수의 이름을 새롭개 바꿔 할당합니다.
// console.log('newName => ', newName);
// console.log('newAge => ', newAge);

let {name, age, birthday = "today"} = user; // 초기값을 넣어 줄 수 있습니다.
console.log(name);
console.log(age);
console.log(birthday);

