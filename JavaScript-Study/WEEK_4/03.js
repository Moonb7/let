// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수입니다. : 배열의 메서드로 배열의 요소 하나하나를 이용해서 새로운 배열로 반환해 주는 함수입니다.
var newArr = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});

console.log(newArr);