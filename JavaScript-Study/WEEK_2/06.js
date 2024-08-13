// 배열의 요소로 함수를 할당

const myArr = [
    function (a,b) {
        return a + b;
    },
    function (a,b) {
        return a - b;
    },
];

// 더하기
console.log(myArr[0](1, 3)); // 함수이면 [0]를 선택하고 ()실행하는 부분을 넣어줘야 실행됩니다.
// 빼기
console.log(myArr[1](10, 7));