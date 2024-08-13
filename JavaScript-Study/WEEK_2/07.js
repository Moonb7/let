function multiplayBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplayByTwo = multiplayBy(2);
// const multiplayByTwo = function (x) {
//     return x * 2;
// };
const multiplayByThree = multiplayBy(3);
// const multiplayByTwo = function (x) {
//     return x * 3;
// };
console.log(multiplayByTwo(10));
console.log(multiplayByThree(10));

const result = add(multiplayByTwo(5), multiplayByThree(10));
console.log(`FINAL => ${result}`);