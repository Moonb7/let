// 2. 문자 : string(문자열 = 문자의 나열)
// ' ' ," " 로 묶어서 사용해야 문자열로 인식합니다.
let str = "Hello World!";
// console.log(str);
// console.log(typeof str);

// 2-1. 문자열 길이 확인하기
//console.log(str.length); // 문자열의 길이

// 2-2. 문자열 결합하기(concatenation)
let str1 = "Hello, ";
let str2 = "World!";
let result = str1.concat(str2);
//console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
//console.log(str3.substr(7, 5)); // 시작 위치 부터 몇개를 자를건지
//console.log(str3.slice(7, 12)); // 시작 위치 부터 끝위치까지를 지정해서 자를건지

// 2-4. 문자열 검색
let str4 = "Hello, World1";
//console.log(str4.search("World")); // 해당 문자열에서 찾을 문자의 인덱스를 검색

// 2-5. 문자열 대체
let str5 = "Hello, World";
let result01 = str5.replace("World", "JavaScript") // 첫 매개변수 해당 문자열을 찾고 두번째 매개변수 문자열로 대체해서 교체해 줍니다.
//console.log(result01);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",") // 매개변수로 문자열을 받아 그 문자열을 기준으로 문자열을 잘라줍니다.
console.log(result02);