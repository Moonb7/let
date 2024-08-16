// obj
// 2가지 속성
var obj = {
    vals: [1, 2, 3],
    logValues: function (v, i) {
        console.log(">>> test starts");
        if(this === global) {
            console.log("this가 global입니다. 원하지 않는 결과");
        } else {
            console.log(this, v, i);
        }
        console.log(">>> test ends");
    },
};

// method로서 호출
// obj.logValues(1, 2);

// forEach, map, filter
// 이런식으로 콜백함수를 넣어줄때 함수그 자체를 넘겨 주어야 합니다. [4, 5, 6].forEach(obj.logValues()) ()를 넣어 주게 되면 함수의 결과를 넣어 주는 거나 마찬가지입니다.
[4, 5, 6].forEach(obj.logValues);