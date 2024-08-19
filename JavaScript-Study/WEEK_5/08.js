// Static Method(= 정적 메서드)

// Class -> 객체를 만들기 위해서 사용합니다. 다량으로, 안전하고, 정확하게 만들기 위해서 사용합니다.
class Calculator {
    static add (a, b) {
        console.log("[계산기] 더하기를 진행합니다.");
        return a + b;
    }

    static substract (a, b) {
        console.log("[계산기] 빼기를 진행합니다.");
        return a - b;
    }
}

console.log(Calculator.add(3, 5)); // 8 static 키워드를 이용해 따로 객체를 만들지 않고 바로 사용할 수 있다.
console.log(Calculator.substract(3, 5)); // -2