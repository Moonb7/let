// 배열

// 1. 생성
// 1-1. 기본 생성
//let fruits = ["사과", "바나나", "오랜지"];

// 1-2. 크기 지정
let number = new Array(5);

// console.log(fruits.length);
// console.log(number.length);

// 2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3. 배열 메서드

// 3-1. push
// let fruits = ["사과", "바나나"];
// console.log("1 => ", fruits);

// fruits.push("오렌지"); // 배열 끝에 요소를 추가해 준다
// console.log("2 => ", fruits);

// 3-2. pop
// let fruits = ["사과", "바나나"];
// console.log("1 => ", fruits);

// fruits.pop(); // 배열 마지막 인덱스 요소 삭제
// console.log("2 => ", fruits);

// 3-3. shift
// let fruits = ["사과", "바나나"];
// console.log("1 => ", fruits);

// fruits.shift(); // 배열 맨앞 인덱스 요소 삭제
// console.log("2 => ", fruits);

// 3-4. unshift
// fruits.unshift("포도"); // 배열 맨앞에 요소를 추가해 줍니다.
// console.log(fruits);


// 3-5. splice
// let fruits = ["사과", "바나나", "키위"];
// fruits.splice(1, 1, "포도"); // 시작위치, 삭제할 갯수, 그 위치에 넣을 값(요소)
// console.log(fruits);

// 3-6. slice
// let fruits = ["사과", "바나나", "키위"];
// let slicedFruits = fruits.slice(1, 2); // 시작위치, 끝 위치(인데스) , 예 해석) 1번째 부터 2번째 앞까지 잘라서 배열로 반환 해줘.
// console.log(slicedFruits);

// forEach, map, filter, find
//let numbers = [1, 2, 3, 4, 5];

// (1) forEach
// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// number.forEach(function(item) {  // 콜백 함수 매개변수는 item(요소), index(요소의 인덱스 번호), array(해당 배열)로 이용할 수 있습니다.
//     console.log("item입니다 =>" + item);
// });

// (2) map : 항상 원본 배열의 길이만큼이 return됩니다. 기존에 있는 배열을 가공해서 새로운 배열을 반환해 줍니다.
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map(function(item) {
//     return item * 2;
// });
// console.log(newNumbers);

// (3) filter : 조건에 해당되는 값만 배열로 반환합니다.
// let numbers = [1, 2, 3, 4, 5];
// let filteresdNumbers = number.filter(function(item){
//     return item !== 5;
// })
// console.log(filteresdNumbers);

// (4) find : 배열내에 처음에 조건에 해당하는 값 하나를 반환해 줍니다.
let numbers = [1, 2, 3, 4, 5];
let result = numbers.find(function(item){
    return item > 3;
})
console.log(result);