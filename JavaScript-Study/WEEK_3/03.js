var user = {
    name: "wonjang",
    gender: "male",
};

// 얕은 복사 
var copyObject = function (target) {
    var result = {};

    // for~in 구문을 이요하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
    // 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면 반환해서 넘겨주면
    // 기존 복사할 객체에 영향을 주지 않고 새롭게 하나의 객체를 받아 아에 다르게 따로따로 쓸 수 있습니다.
    for(var prop in target) {
        result[prop] = target[prop]
    }
    return result;
}

var user2 = copyObject(user);

console.log(user !== user2); // true 주소 값이 아에 달라 true를 반환합니다.