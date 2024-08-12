// 조건문 - if, else if, else, switch
// 1. if문
//let x = 10;

// 1-1
// if(x < 0) {
//     // main logic
//     console.log("x는 음수입니다.")
// }

// 1-2
//let y = "hello world";

// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
// if(y.lenght >= 5) {
//     console.log(y.length);
// }


// 2. if - else 문
//let x = -3;
// if (x > 0) {
//     // main logic #1
//     console.log("x는 양수입니다.");
// } else {
//     // main logic #2
//     console.log("x는 음수입니다.");
// }

// if - else if - else 문
// let x = 5;
// if (x < 0) {
//     // main logic #1
//     console.log("1");
// } else if (x >= 0 && x < 10) {
//     // main logic #2
//     console.log("2");
// }else {
//     console.log("3");
// }

// 1-4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log('사과입니다.');
        break;
    case "바나나":
        console.log('바나나입니다.');
        break;
    case "키위":
        console.log('키위입니다.');
        break;
    default:
        console.log("아무것도 아닙니다.");
        break;

}