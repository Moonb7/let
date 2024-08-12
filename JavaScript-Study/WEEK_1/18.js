// while
// while(조건) {
    // 메인 로직
    // 증감
//}

// let i = 0;

// while(i < 10) {
//     console.log(i);
//     i++;
// }

// while문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
// let i = 3;
// while(i < 100) {
//     if(i % 5 === 0) {
//         console.log(i + "는 5의 배수입니다.");
//     }

//     i++;
// }

// do ~ while : 무조건 한번실행하고 다음부터 조건을 보고 반복을 실행한다.
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        //break; // 해당 반복문을 탈출해 반복을 끝낸다.
        continue; // 이걸 만나면 바로 밑에 있는 코드로 가지않고 다음 반복으로 넘어 간다.
    }
    console.log(i);
}