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
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
    }

    apend(value) { // Tail쪽까지 추적해서 추가
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = new Node(value);
    }

    getNode(index){ // 마치 배열의 인덱스처럼 똑같은 원리인것 같다. index만큼 추척하여 해당 순서의 노드를 찾을 수 있다.
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    addNode(index, value) { // 중간에 새로운 노드를 추가할때 사용하는 함수
        const newNode = new Node(value);      // 추가할 노드 새로만들고
        let getNode = this.getNode(index-1);  // 추가할 자리를 확인
        const nextNode = getNode.next;        // 뒤로 밀릴 노드를 임시로 저장
        getNode.next = newNode;               // 추가
        newNode.next = nextNode;              // 원래 있어야될 노드다시 연결
    }
}
