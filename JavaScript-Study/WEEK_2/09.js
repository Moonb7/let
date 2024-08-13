// 대량의 데이터를 이용하기 위한 목적이기에 반복이 중요합니다.
// 반복 ... !! -> method : keys(), values(), entries()

const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

//console.log(myMap.keys());
// for (const key of myMap.keys()) {
//     console.log(key);
// }

// console.log(myMap.values());
// for(const value of myMap.values()) {
//     console.log(value);
// }

//console.log(myMap.entries()); // 이터레이터(Iterator) 로 감싸고 키벨류로 하나씩 배열로 묶어 반환해 줍니다. { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
// for (const entry of myMap.entries()) {
//     console.log(entry);
// }

console.log(myMap.size); // map의 사이즈(길이)
console.log(myMap.has("two1")); // key 기반 검색  풀이) map에서 two라는 이름의 키가 있냐? 있으면 true : 없으면 false
