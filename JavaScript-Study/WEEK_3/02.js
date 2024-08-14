// user 객체를 생성
var user = {
    name: "wonjang",
    gender: "male",
};

// 이름을 변경하는 함수 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티에 접근하는 것이 아니라, 아에 새로운 객체를 반환 -> 불변 (여기선 기존 user 객체 데이터가 변하지 않음)
var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender,
    };
};

// 변경한 user정보를 user2 변수에 할당하겠습니다.
// 가변이기 때문에 user1도 영향을 받게 됩니다.
var user2 = changeName(user, "twojan");

// 아래 로직은 skip하게 됩니다.
if(user != user2) {
    console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false