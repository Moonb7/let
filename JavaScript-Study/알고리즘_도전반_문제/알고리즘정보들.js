// 문자열 abc를 회전하여 abc,bca,cab 순으로 출력
// const s = "abcd";

// function solution (str) {
//     let arr = [];

//     for(let i = 0; i < str.length; i++) {
//         arr.push(str.slice(i) + str.slice(0, i));
//     }

//     console.log(arr);
//     return arr;
// }

// solution(s);

// 링크드 리스트 구현
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value) {
//         this.head = new Node(value);
//     }

//     apend(value) { // Tail쪽까지 추적해서 추가
//         let current = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }
//         current.next = new Node(value);
//     }

//     getNode(index){ // 마치 배열의 인덱스처럼 똑같은 원리인것 같다. index만큼 추척하여 해당 순서의 노드를 찾을 수 있다.
//         let node = this.head;
//         for (let i = 0; i < index; i++) {
//             node = node.next;
//         }
//         return node;
//     }

//     addNode(index, value) { // 중간에 새로운 노드를 추가할때 사용하는 함수
//         const newNode = new Node(value);      // 추가할 노드 새로만들고
//         let getNode = this.getNode(index-1);  // 추가할 자리를 확인
//         const nextNode = getNode.next;        // 뒤로 밀릴 노드를 임시로 저장
//         getNode.next = newNode;               // 추가
//         newNode.next = nextNode;              // 원래 있어야될 노드다시 연결
//     }
// }


// 스택 구현해보기 LIFO(Last In First Out) 후입선출: 가장 나중에 들어온 값이 먼저 이용하여 빠져나오는 자료구조입니다.
// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }

//   class Stack {
//     constructor() {
//       this.head = null;
//     }

//     peek() {
//       if (this.head === null) {
//         return null;
//       }
//       return this.head.value;
//     }

//     push(value) {
//       let newNode = new Node(value);
//       newNode.next = this.head;
//       this.head = newNode;
//     }

//     pop() {
//       if (this.head === null) {
//         return null;
//       }
//       let deleteHead = this.head;
//       this.head = this.head.next;
//       return deleteHead.value;
//     }
//   }

// 큐 구현해보기 FIFO(First In First Out) 선입선출 : 맨처음 들어온 값부터 이용하여 빠져나오는 자료구조입니다.
// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }

//   class Queue {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//     }

//     enqueue(value) {
//       const newNode = new Node(value);
//       if (this.head === null) {
//         this.head = newNode;
//         this.tail = newNode;
//       } else {
//         this.tail.next = newNode;
//         this.tail = newNode;
//       }
//     }

//     dequeue() {
//       if (this.head === null) {
//         return null;
//       }
//       const deleteHead = this.head;
//       this.head = this.head.next;

//       return deleteHead.value;
//     }
//   }

// --------------
// 정렬알고리즘 알아보기

// 버블 정렬 (오름차순 기준)
// function bubbleSort(array) {
//     let n = array.length; // array의 길이를 n에 저장해요! 루프 카운트 변수로 쓰겠죠?
//     for (let i = 0; i < n; i++) { // 이건 array를 순차적으로 돌겠다는 뜻이구요!
//         // 이건 버블정렬 알고리즘의 특성처럼 1개씩 줄어들면서 반복하며 비교를 해요. 
//         for (let j = 0; j < n - i - 1; j++) { // n-1 -> n-1-1 -> n-2-1
//             if (array[j] > array[j + 1]) { // 앞의 원소가 뒤의 원소보다 크면 바꿔야겠죠?
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

// 선택 정렬 (오름차순 기준)
// function selectionSort(array) {
//     let n = array.length; // 루프 카운트!
//     // 이번에는 i ~ n - 2까지 돌면서 실험군을 선택해요!
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i; // i번째에 들어갈 최소값을 찾아요!
//         for (let j = i + 1; j < n; j++) {
//             // 현재 최소값으로 설정된 친구보다 더 작은 친구를 발견하면!
//             if (array[j] < array[minIndex]) {
//                 minIndex = j; // 최소값 인덱스를 갱신합니다!
//             }
//         }
//         // i번째에 최소값 인덱스에 있는 값을 넣어줍니다!
//         let temp = array[i];
//         array[i] = array[minIndex];
//         array[minIndex] = temp;
//     }
//     return array;
// }


// 삽입정렬 구현해보기 오름차순
// function insertionSort(array) {
//     let n = array.length; // 루프 카운트!
//     // 중요: 삽입 정렬의 0번째 인덱스는 정렬된 상태라고 판단하므로 인덱스가 1부터 시작해요!
//     for (let i = 1; i < n; i++) {
//         // 최초 i = 1 -> i = 2
//         // 현재 index 범위 내에서 비교를 시작하죠! 비교 방향은 끝에서부터 시작해요!
//         for (let j = i; j > 0; j--) {
//             // 뒤의 값보다 앞의 값이 크면 바꿔줘요!
//             if (array[j - 1] > array[j]) { // array[1-1] > array[1]
//                 let temp = array[j - 1];
//                 array[j - 1] = array[j];
//                 array[j] = temp;
//             } else {
//                 // 그렇지 않다면 정렬된 상태이기 때문에 이번 루프는 바로 나가도 되어요!
//                 break;
//             }
//         }
//     }
//     return array;
// }

// let arr = [4, 5, 2, 9, 1]

// 그 밖에도 알아 두어야하는 자료구조
// - 트리 (참고로 트리 종류도 엄청 많아요!)
// - 트라이
// - 그래프
// - 해시 테이블