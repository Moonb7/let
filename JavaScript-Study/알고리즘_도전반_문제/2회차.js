// 문제 1
// 주어진 문자열에서 중복된 문자를 제거하고, 남은 문자들을 원래 순서대로 반환하는 함수를 작성하세요.
// 문자열의 길이는 1 이상 1000 이하입니다.

// function solution(str) {
//     let arr = str.split("");
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = arr.length - 1; j >= 0 ; j--) {
//             if (i !== j && arr[i] === arr[j]) // 있으면 빼기
//             {
//                 arr.splice(j,1);
//                 console.log(arr.join(""));
//                 break;
//             }
//         }
//     } 
// }

// let str = 'qfgqlgqfqyy';
// solution(str);

// ----------------------------------------------------------------------

// 문제 2
// 주어진 배열에서 최솟값과 최댓값을 찾고, `[최솟값, 최댓값]` 형태의 배열을 반환하는 함수를 작성하세요.**
// - 배열의 길이는 1 이상 1000 이하입니다.
// - 배열의 원소는 -1000 이상 1000 이하의 정수입니다.

// function solution(arr) {
//     let result = [];
//     result.push(Math.min(...arr));
//     result.push(Math.max(...arr));
//     console.log(result);
//     return result;
// }

// function solution(arr) {
//     let result = [];
//     result[0] = arr[0];
//     result[1] = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(result[0] > arr[i]) {
//             result[0] = arr[i];
//         }
//         if(result[1] < arr[i]) {
//             result[1] = arr[i];
//         }
//     }
//     console.log(result);
//     return result;
// }

// const numArr = [23,4,5,11,67,33,1,56];
// solution(numArr);

// ----------------------------------------------------------------------

// 문제 3
// 주어진 문자열을 요약하는 함수를 작성해주세요!

// 예시:
// str = ‘aaabbbc’ // 출력: ‘a3/b3/c1’
// str = ‘ahhhhz’ // 출력: ‘a1/h4/z1’
// function solution(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {

//         if(str[i-1] && str[i] === str[i-1])
//             continue;

//         let count = 0;
//         for (let j = 0; j < str.length; j++) {
//             if(str[i] === str[j]) {
//                 count++;
//             }
//         }
//         result += str[i] + count;
//     }
//     console.log(result);
//     return result;
// }

// const str = 'aaabbbc';
// solution(str);

// ----------------------------------------------------------------------

// 문제 4
// 주어진 배열에서 두 수를 선택하여 그 합이 주어진 target 값과 일치하는지 확인하는 함수를 작성하세요. 일치하는 경우 true, 그렇지 않은 경우 false를 반환하세요.
// 배열의 길이는 2 이상 1000 이하입니다.
// 배열의 원소는 1 이상 1000 이하의 자연수입니다.
// 예시:
// arr = [2, 7, 11, 15], target = 9 // 출력: true

// function solution(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// const arr = [1, 2, 11, 15];
// let target = 9;
// console.log(solution(arr,target));

// ----------------------------------------------------------------------

// 문제 5
// 주어진 문자열이 유효한 괄호 조합인지 확인하는 함수를 작성하세요. 유효한 조합은 모든 여는 괄호가 올바르게 닫혀야 하며, 괄호의 순서도 일치해야 합니다.
// 문자열의 길이는 1 이상 1000 이하입니다.
// 괄호는 (), {}, []의 세 종류입니다.
// 예시:
// ({[]}) // 출력: true
// ({][}) // 출력: false

function solution(str) {
    const stack = [];
    const parenObj = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    };

    for (let i = 0; i < str.length; i++) {
        if(Object.values(parenObj).includes(str[i])) {
            stack.push(str[i]);
        } else if(stack.length > 0 && stack[stack.length - 1] === parenObj[str[i]]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

const str1 = '({[]})';
const str2 = '({][})';
//solution(str1);
console.log(solution(str1));
console.log(solution(str2));