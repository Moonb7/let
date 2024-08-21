// 문자열 abc를 회전하여 abc,bca,cab 순으로 출력
const s = "abcd";

function solution (str) {
    let arr = [];

    for(let i = 0; i < str.length; i++) {
        arr.push(str.slice(i) + str.slice(0, i));
    }
    
    console.log(arr);
    return arr;
}

solution(s);