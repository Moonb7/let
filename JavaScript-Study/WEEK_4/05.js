Array.prototype.map123 = function(callback, thisArg) {
    // map 함수에서 return할 결과 배열
    var mappeaArr = [];

    for (let i = 0; i < this.length; i++) {
        let mappedValue = callback.call(thisArg || global, this[i]);
        mappeaArr[i] = mappedValue;
    }

    return mappeaArr;
};

var newArr = [1, 2, 3].map123(function(number){
    return number * 2
});

console.log(newArr);

// 호출 시점에 대한 제어권
// 인자에 대한 제어권
// this에 대한 제어권