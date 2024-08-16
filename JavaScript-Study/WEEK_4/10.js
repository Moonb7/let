// setTimeout(function(name, name2){ console.log(name, name2);}, 500 , "김장","된장");
// setTimeout(
//     function (name) {
//       var coffeeList = name;
//       console.log(coffeeList);
  
//       setTimeout(
//         function (name) {
//           coffeeList += ", " + name;
//           console.log(coffeeList);
  
//           setTimeout(
//             function (name) {
//               coffeeList += ", " + name;
//               console.log(coffeeList);
  
//               setTimeout(
//                 function (name) {
//                   coffeeList += ", " + name;
//                   console.log(coffeeList);
//                 },
//                 500,
//                 "카페라떼"
//               );
//             },
//             500,
//             "카페모카"
//           );
//         },
//         500,
//         "아메리카노"
//       );
//     },
//     500,
//     "에스프레소"
//   );

// 기명함수로 표현 이름이 있는 함수를 기명함수라고 합니다.
var coffeeList = '';

var addEspresso = function (name) {
	coffeeList = name;
	console.log(coffeeList);
	setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');
