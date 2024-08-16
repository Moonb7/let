// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까요?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

// closuer 방식을 이용해서 했습니다.
// 현재의 함수가 끝났음에도 불구하고 영향력을 끼친다.

var obj1 = {
    name: "obj1",
    func: function () {
        var self = this; // 이 부분
        return function () {
            console.log(self.name);
        };
    },
};

var callback = obj1.func();
// var callback = function () {
//     console.log(self.name);
// };

// setTimeout(callback, 1000);
// setTimeout(function () {
//     console.log(self.name);
// }, 1000);

// this를 없앤함수 결과만을 위한 코딩 => 하드코딩... 100점 만점에서 10점짜리 코드
// var obj2 = {
//     name: "obj2",
//     func: function () {
//         console.log(obj1.name);
//     },
// };
// setTimeout(obj2.func, 1000);

var obj1 = {
    name: "obj1",
    func: function () {
        var self = this; // 이 부분
        return function () {
            console.log(self.name);
        };
    },
};

// 즉시 실행 함수 call을 이용해 명시적으로 해줌
var obj3 = {name: "obj3"};
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);

// var obj2 = {
//     name: "obj2",
//     func: obj1.func,
// }

// var callback2 = obj2.func();
// setTimeout(callback2, 1000);