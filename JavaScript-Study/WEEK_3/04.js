// 얕은 복사 
var copyObject = function (target) {
    var result = {};
    
    for(var prop in target) {
        result[prop] = target[prop]
    }
    return result;
}

// user 객체를 생성
var user = {
    name: "wonjang",
    gender: "male",
};

var user2 = copyObject(user);
user2.name = "twojang";

if(user != user2) {
    console.log("유저 정보가 변경되었습니다.");
}

// console.log(user.name, user2.name); // wonjang twojang
// console.log(user === user2); // false

// 이러 방법 얕은 복사는 중첨된 객체에 대해서는 완벽히 복사를 할 수 없습니다. 복사할 객체의 안에 있는 또 다른 객체의 주소를 결국 복사해서 완벽히 할 수 없다는 말입니다.

// 깊은복사 : 내부의 모든 값들을 하나하나 다 찾아서 모두 복사하는 방법
// 자동적으로 이것들을 다 완전히 복사해주기 위해서는 객체의 프로퍼티 중, 기본형 데이터는 그대로 복사 + 참조형 데이터는 다시 그 내부의 프로퍼티를 복사를 반복하는 =>재귀적 수행을 합니다.
// 재귀적 수행 (recursive) : 함수나 알고리즘이 자기 자신을 호출하여 반복적으로 실행되는 것을 말합니다.

// 깊은 복사 방법
var copyObjectDeep = function (target) {
    var result = {};
    if(typeof target === 'object' && target !== null ) { // 복사할 것이 객체이고 null이 아니면
        for(var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        console.log(target); // 처음에 들어 온것만 확인해 풀어서 보면 result[name] = copyObjectDeep('Kim'); 이렇게 들어온다 생각하고
        // 그러면 일단 copyObjectDeep('Kim') 재귀적으로 실행됩니다. 그럼 어라이번에 target으로 들어온 것은 'Kim'라 객체가 아니네 하면서 else문으로 빠져 result = 'kim'으로 받고 난후
        // return으로 해당 함수(copyObjectDeep('Kim')가 종료됨)를 나오면 다시 처음 할당해주는 부분에서 result[name] = 'kim'(return 받은 reult의 값이 'kim')으로 할당 받고 또 다시 for ~ in문으로 인해 다시 이작업을 반복합니다. 중간에 프로퍼티중 객체를 만나면 그냥 이작업을 좀 더 해준다고 생각하시면 됩니다. 결론적으로 전부 다 훌터 보겠다입니다.
        result = target;
        console.log(result);
    }
    return result;
};

var user = {
    name: 'Kim',
    gender: 'male',
    urls: {
        portfolio : "http : 가나다라",
        youtube: "http : /zgag/rqrqwrdf/",
        blog: "http : /qwew/sdff",
    }
};

var user2 = copyObjectDeep(user);
user2.urls.portfolio = "http : 마바사아자차카";

console.log(user.urls.portfolio, user2.urls.portfolio); //
console.log(user === user2); // false

// 추가로 JSON을 이용한 복사방법도 있으나 장단점이 있어 추천하지는 않는다
// 장점 
// - JSON.stringify()함수를 사용하여 객체를 문자열로 변환 후, 다시 JSON.parse()함수를 사용하여 새로운객체 생성
//   원본 객체와 복사본 객체가 서로 독립적으로 존재하게 되어 복사를 할 수 있습니다.
// - 코드가 간결하고 이해하기가 쉽습니다.
// 단점
// - 원본 객체의 모든 정보를 복사하지 않습니다. 함수나 undefined와 같은 속성 값은 복사되지 않습니다.
// - JSON.stringify() 함수는 순환 참조(Recursive Reference)를 지원하지 않아 객체가 중첨되어 있는 경우, 이 방법으로는 복사할 수 없습니다.