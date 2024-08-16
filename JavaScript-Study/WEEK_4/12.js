// refactoring
// re : 다시
// factoring
// 비효율적인 코드를 효율적으로 만들자고 할때 refactoring한다라고 합니다.

var addCoffee = (name) => {
    return function (prevName) {
        // 이 안에서도 새롭게 Promise를 만듭니다.
        return new Promise(function (resolve) {
            setTimeout(function () {
                // 백틱 ````
                var newName = prevName ? `${prevName}, ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};

addCoffee("에스프레소")()
    .then(addCoffee("아메리카노"))
    .then(addCoffee("카페모카"))
    .then(addCoffee("카페라떼"));

// addCoffee("에스프레소"); 이거는 밑에 처럼 처음 return한 것을 가져 온것이고
// function (prevName) {
    //     // 이 안에서도 새롭게 Promise를 만듭니다.
    //     return new Promise(function (resolve) {
    //         setTimeout(function () {
    //             // 백틱 ````
    //             var newName = prevName ? `${prevName}, ${name}` : name;
    //             console.log(newName);
    //             resolve(newName);
    //         }, 500);
    //     });
    // };

//addCoffee("에스프레소")(); // ()를 한번더 써줌으로써 먼저 return한 함수를 실행하고 두번쨰로 return한 new Promise를 실행해 줍니다.
    // new Promise(function (resolve) {
    //     setTimeout(function () {
    //         // 백틱 ````
    //         var newName = prevName ? `${prevName}, ${name}` : name;
    //         console.log(newName);
    //         resolve(newName);
    //     }, 500);
    // });
