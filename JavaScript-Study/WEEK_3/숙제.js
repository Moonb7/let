// - 01. 나이든 유저
// - 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요

// var user = {
//     name: "john",
//     age: 20,
// }

// var getAged = function (user, passedTime) {
//     // 여기를 작성해 주세요
//     let olderUser = {};
//     if(typeof user === 'object' && user !== null) {
//         for(let prop in user) {
//             olderUser[prop] = getAged(user[prop]);
//         }
//     }
//     else {
//         olderUser = user;
//     }

//     if(olderUser['age'] !== null) {
//         olderUser.age = passedTime; // 다복사를 한뒤 age에 passedTime하는 것을 추가 했습니다. 효율이 좋은지는 잘모르겠습니다.
//     }

//     return olderUser;
// }


// var agedUser = getAged(user, 66);
// console.log(agedUser);

// var agedUserMustBeDifferentFromUser = function (user1, user2) {
//     if (!user2) {
// 		    console.log("Failed! user2 doesn't exist!");
// 	  } else if (user1 !== user2) { 
//         console.log("Passed! If you become older, you will be different from you in the past!")
//     } else {
//         console.log("Failed! User same with past one");
//     }
// }

// agedUserMustBeDifferentFromUser(user, agedUser);

// 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// 주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)
var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => { // 화살표 함수
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() { // 이거는 바로 함수를 실행 직전까지 만들어 둔것
        return this.fullname.split(' ')[1];
    })()
}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName()); // Not Francis Ngannou VS John Jones
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName); // It is John Jones VS Ciryl Gane

// 첫번째 출력 : Not Francis Ngannou VS John Jones

// fighter.opponent.getFullname() 여기서 this를 바인딩하면 opponent객체를 가리켜
// opponent의 fullname: 'Francis Ngannou', Francis Ngannou을 가져옵니다.
// fighter.getName()도 위에와 비슷하게 동작하여 fighter 객체의 fullname: 'John Jones' 에서
// John Jones 가져옵니다.

// 두번쨰 출력 : It is John Jones VS Ciryl Gane

// fighter.getFirstName()이 메서드는 화살표 함수로 만들어 졌습니다. 화살표 함수는 바인딩 과정이 없어
// this는 전역객체 가리킵니다. 그래서 전역 변수 var fullname = 'Ciryl Gane' 에서 Ciryl가져옵니다.
// fighter.getLastName 이 속성은 함수를 바로 실행 하게 만들어 이 속성을 호출하기만해도 
// 사용이 되게 했습니다. 함수는 바로 호출자 없이 실행을 하면 this는 전역객체를 가리킵니다. 그래서
// fullname = 'Ciryl Gane' 에서 Gane을 가져옵니다.