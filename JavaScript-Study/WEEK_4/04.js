// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수입니다. : 배열의 메서드로 배열의 요소 하나하나를 이용해서 새로운 배열로 반환해 주는 함수입니다.

// index : 사람이 이해할 수 있는 변수명일 뿐
// currentValue : 는 그냥 변수명일 뿐 컴퓨터는 변수명(이름)이 아닌 인자의 순서에 맞게 값을 받아서 사용하는 것으로 인식합니다.
// 결론은 map(함수, 메서드)의 미리 만들어진 규칙에 맞게 사용해야 된다 우리가 이걸 이름만 바꾼다고 해서 이 규칙은 변하지 않는다.
var newArr = [10, 20, 30].map(function(index, currentValue) {
    console.log(index, currentValue);
    return currentValue + 5;
});

console.log(newArr);