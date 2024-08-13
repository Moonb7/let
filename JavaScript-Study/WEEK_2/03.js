// 단축 속성명 : preoperty shorthand  많이 사용합니다.
const name = "nbc";
const age = "30";

// key - value 
// 키변수랑 값 변수의 이름이 같으면 구조를 생략할 수 있습니다.
const obj = {name, age};
const obj1 = {name: name, age: age,};

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
// let arr = [1, 2, 3];

// let newArr = [...arr, 4];
// console.log(arr);
// console.log(newArr);

// 객체
// let user = {
//     name: 'nbc',
//     age: 30,
// };

// let user2 = {...user};

// console.log(user);
// console.log(user2);
// ... spread 문법은 배열이나 객체를 펼쳐서 개별 요소로 분리하는 문법이다.

// 나머지 매개변수(rest parameter)
// 추가로 매개변수를 받아올때 ...을 이용해 배열로 받아 사용할 수 있습니다.
// function exampleFunc(a, b, c, ...args) {
//     console.log(a, b, c);
//     console.log(...args);
//     console.log(args);
// }
// exampleFunc(1, 2, 3, 4,5,6,7);

// 템플릿 리터럴(Template Literal)
// 백틱 `` 이용해서 문자열을 기본으로 사용하고 간편하게 $(변수, 문법) 등을 추가 할 수 있어 사용에 용이 하고 +로 연결해서 사용할때 보다 가독성이 좋은 것 같습니다.
// 멀티라인이 이용가능하여 작성한데로 띄어쓰기나 줄바꿈이 바로 적용됩니다.
const testValue = "안녕하세요";
console.log(`Hello World ${3+3}`);
console.log(`
    Hello
        My name is JavaScriopt!!

        Nice to meet you!!!
`);