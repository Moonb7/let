var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0]; // 10

// numbers.forEach(function(numbers) {
//     // 현재 돌아가는 숫자가 max보다 큰 경우
//     if(numbers > max) {
//         max = numbers;
//     }

//     //
//     if(numbers < min) {
//         min = numbers;
//     }
// });

// console.log(max, min);

numbers.forEach(function(numbers, idx,) {
    console.log(idx + "번째 값 => " + numbers)
});