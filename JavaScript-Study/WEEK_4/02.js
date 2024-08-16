// 무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval : 일정 시간이 지날때 마다 반복해서 매개변수로 받은 콜백함수의 로직을 수행
var count = 0;
var cbFunc = function(){
    console.log(count);
    if(++count > 4) clearInterval(timer); // clearInterval로 setInterval반복을 멈춥니다.
};

var timer = setInterval(cbFunc, 300);