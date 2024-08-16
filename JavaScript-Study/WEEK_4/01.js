// 콜백 함수

// 콜백 함수 예)
// setTimeout()함수는 일정시간이 지난 후에 콜백 함수를 실행시키는 함수 입니다.
// setTimeout(function() { // 일정 시간이 지난 후에 특정 코드를 실행하기 위해 사용됩니다. 
//     console.log('hello');
// }, 3000); // 2번째 인자는 지연시간(ms)을 지정해 줍니다. 3초
// 그러면 이 setTimeout의 제어권으로 3초 후에(적절한 시점) 인자로 받은 콜백 함수가 실행됩니다.

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number){
    console.log(number);
})