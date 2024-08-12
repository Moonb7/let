// 불리언(Boolean)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;

// console.log(bool1);
// console.log(typeof bool1);
// console.log(bool2);
// console.log(typeof bool2); 

// undefined : 정의가 되지않은 값이 할다되지 않았다
// un : not, define : 정의하다
let x;
//console.log(x);

// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법 // 개발자가 주로 겂이 없다고 명시할때 이용된다.
// null != undefined // 이 두개의 의미는 다르다.
let y = null;
//console.log(y);

// object(객체) : key-value pair  value(값)에는 아무 타입이든 상관없이 할당을 할 수 있습니다.
let person = {
    name: 'choi',
    age: 20,
    isMarried: false,
};
console.log(person);

// array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입!! 배열은 순서대로 인덱스를 가지고 있고 순서는 0부터시작을 합니다.
let number = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];