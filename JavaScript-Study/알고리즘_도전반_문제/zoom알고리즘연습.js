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
        this.nodeCount = 1;
    }

    apend(value) {
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = new Node(value);
        this.nodeCount++;
    }

    getNode(index){
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    addNode(index, value) {
        const newNode = new Node(value);      // 새로만들고
        let getNode = this.getNode(index-1);  // 추가할 자리
        getNode.next = newNode;               // 추가
        newNode.next = this.getNode(index);   // 추가한 노드에 원래 있어야될 node다시 연결
    }
}
