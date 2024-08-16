// 클래스라는 설계도를 만들어 봅시다!
// 생성자 함수 constructor
class Person {
    // 우리는 사람이기 때문에 필수요소
    // name, age
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    // 메서드 형태의 동사 표현
    sayHello () {
        console.log(`${this.name}님 안녕하세요!`);
    }

    // 내 나이는 ~살이에요! 라고 출력하는 메서드를 만들어주세요!
    printMyAge () {
        console.log(`${this.name} 나이는 ${this.age}살이에요!`);
    }
}

// 설계도를 통해 인스턴스를(실제 사물) 만들어 봅시다!
let person1 = new Person("홍길동", "30");
let person2 = new Person("홍길순", "25");
// person1.sayHello();
// person2.sayHello();
person1.printMyAge();
person2.printMyAge();

// 그냥 테스트로 만든 것
// let obj = [
//     {
//         name: "홍길구",
//         age: "24"
//     },
//     {
//         name: "홍길자",
//         age: "34"
//     },
//     {
//         name: "홍길만",
//         age: "21"
//     },
// ];
// let obj1 = obj.map(person => {
//     let persond;
//     return persond = new Person(person.name, person.age);
// });
// console.log(obj1);