// Set
// - 고유한 값을 저장하는 자료구조다.
// - 값만 저장한다.
// - 키를 저장하지는 않는다.
// - 값이 중복되지 않는 유일한 요소로만 구성된다.
// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set(); // set은 값만 들어갑니다. 중복된 값이 추가되면 그 값은 추가하지 않고 무시됩니다.
mySet.add('value1');
mySet.add('value2');
mySet.add('value3');
mySet.add('value5');
mySet.add('value7');

console.log(mySet.size);
console.log(mySet.has('value1'));
console.log(mySet.has('value2'));
console.log(mySet.has('value3'));

// Iterator, 반복했던
for(const value of mySet.values()) {
    console.log(value);
}