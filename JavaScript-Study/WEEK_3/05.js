// undefined와 null
// - undefined : 자바스크립트 엔진에서 값이 있어야 할 것 같은데 없는 경우 자동으로 부여됩니다.
// - null : 없다를 명시적으로 표현하고자 할 때 사용됩니다. 그래서 명시적으로 undefined는 사용하지 않는 것이 좋습니다.
// typeof null을 하면 object로 반환해 줍니다. 자바스크립트 버그라고 합니다. 주의해야 겠네요!
var n = null;
console.log(typeof n); // object

// 동등연산자(equality operator) // 타입이 맞지 않아도 이용가능
console.log(n == undefined); // true
console.log(n == null); // true

// 일치연산자(identity operator)
console.log(n === undefined); // false
console.log(n === null); // true