// 문제 1.
// 두 자연수 a와 b가 주어질 때, 이 둘의 최대공약수를 구하는 함수를 작성하세요.
// **제한사항:**
//- a, b는 1 이상 1000 이하의 자연수입니다.

// 유클리드 호제법 두수 중 두수를 나누었을때 나머지 r이 0이 다시 이번엔 r로 나누었을때 나머지가 0이 아니면 또다시 나머지가 0이 될 때까지 이작업을 반복합니다.
// 최대공약수
// const getGCD = (num1, num2) => {
//     return num2 > 0 ? getGCD(num2, num1 % num2) : num1;
// };
// console.log(getGCD(30, 10));
// // 추가 최소공배수 
// // 최대공약수와 최소공배수를 곱한것과 === 원래 두수를 곱한것과 결과가 같다는 공식을 이용하여 구했습니다. 
// const getLCD = function(num1, num2){
//     const GCD = getGCD(num1, num2);
//     const LCD = (num1 * num2) / GCD;
//     return LCD;
// };
// console.log(getLCD(30,10));

// 문제 2.
// 주어진 배열에서 짝수와 홀수의 개수를 각각 세는 함수를 작성하세요. 함수는 [짝수 개수, 홀수 개수]의 배열을 반환해야 합니다.
// **제한사항:**

// - 배열의 길이는 1 이상 1000 이하입니다.
// - 배열의 원소는 1 이상 1000 이하의 자연수입니다.
// [1, 2, 3, 4, 5, 6] // 출력은 [3, 3]이 됩니다.
// function solution(arr) {
//     let result = [0, 0];
//     arr.forEach(num => {
//         if(num % 2 === 0) { // 짝수
//             result[0]++;
//         } else { // 홀수
//             result[1]++;
//         }
//     });

//     return result;
// }
// const numArr = [1, 2, 3, 4, 5, 6];
// console.log(solution(numArr));

// 문제 3.
// 문자열이 주어지면 해당 문자열을 역순으로 배치한 후, 알파벳을 하나씩 오른쪽으로 이동시킨 결과를 출력하세요. 예를 들어, a는 b, z는 a로 변환됩니다.
// **제한사항:**
// "hello" // 출력은 "nifmq"가 됩니다.

// - 문자열은 소문자 알파벳으로만 구성됩니다.
// - 문자열의 길이는 1 이상 1000 이하입니다.

// 아스키코드 표를 참고 
// 문자열에서 문자를 다 검사 해보고 영어문자의 아스키코드 수가 넘어가면 a로 변경
// console.log('za'.charCodeAt(1));
// function solution(string) {
//     let result = "";

//     const charArr = string.split("");
//     const str = charArr.reverse();

//     for (let i = 0; i < str.length; i++) {
//         let charCode = str[i].charCodeAt() + 1; // 오른쪽으로 이동
//         if (charCode > "z".charCodeAt()) { // charCode 가 넘어가면 즉 영어가 아닌 다른 문자가 오면
//             charCode = "a".charCodeAt(); // a를 받음
//         }
//         result += String.fromCharCode(charCode); // 이제 다시 아스키코드를 문자로 변환해서 결과에 넣기
//     }
    
//     console.log(result);
//     return result;
// }
// const str = "hello";
// solution(str);

// 문제 4.
// 회전 초밥을 먹을 때, 접시들의 번호가 주어집니다. 이 중에서 임의의 연속된 접시를 선택하여 먹을 때, 가능한 모든 선택에서 가장 다양한 초밥 종류의 개수를 구하세요.
// **제한사항:**

// - 접시의 개수는 2 이상 1000 이하입니다.
// - 각 접시는 1 이상 30 이하의 정수로 표현됩니다.
// [1, 2, 1, 3, 2, 1, 4, 1] // 출력은 4가 됩니다.
// function solution (arr) {
//     const max = Math.max(...arr);
//     console.log(max);
//     return max;
// }

// function solution (arr) {
//     let max = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
//     return max;
// }

// const arr = [1, 2, 1, 3, 2, 1, 4, 1];
// solution(arr);

// 문제 5.
// 양의 정수가 주어질 때, 숫자에서 k개의 자릿수를 제거하여 얻을 수 있는 가장 큰 수를 구하세요.
// **제한사항:**

// - **`number`**는 최대 1,000,000자리까지 입력될 수 있습니다.
// - **`k`**는 1 이상 **`len(number)`** - 1 이하입니다.
// number = 1924, k = 2 // 출력은 94가 됩니다.

// const number = 19824;
// const k = 2;

// function solution (number, k) {
//     let numArr = [];
//     const strNum = String(number);

//     for(let i = 0; i < strNum.length; i++) {
//         numArr.push(+strNum[i]);
//     }

//     numArr.sort((a,b) => b - a); // 큰수가 앞으로 내림차순

//     for(let i = 0; i < k; i++) {
//         numArr.pop();
//     }
//     console.log(Number(numArr.join("")));
//     return +numArr.join("");
// }
// solution(number,k);