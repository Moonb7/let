// 클래스 연습해보기!

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//    다음 네 개의 값이 필수로 입력돼야 합니다!
//    (1) modelName
//    (2) modelYear
//    (3) type
//    (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해 주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
// 3. 이후 자동차를 3개 정도 만들어 주세요(객체 생성)

// [추가 요구사항]
// 1. 전기차 클래스 <- Car 클래스의 상속을 받습니다.

class Car {
    constructor (modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    // 클락션을 울리는 메서드
    makeNoise () {
        console.log(`${this.modelName} : 빵!`);
    }

    printModelYear () {
        console.log(`${this.modelName}의 년도는 ${this.modelYear}년입니다.`);
    }
}

// 전기차 Class정의
class ElectronicCar extends Car {
    constructor(modelName, modelYear, price, chargeTime) { // 상속받은 변수도 재정의 overriding개념으로 재정의 하고 전기차니깐 
        // Car(부모 class)에게도 알려주기!!
        super(modelName, modelYear,'e', price); // super는 부모의 constructor를 가져옵니다. type은 전기차라 전기로 고정 다른것들만 재정의

        this._chargeTime = chargeTime;
    }
    set chargeTime (value) {
        this._chargeTime = value;
    }

    get chargeTime() {
        return this._chargeTime;
    }
}

const eleCar1 = new ElectronicCar("테슬라", "2023", 9000, 60);
eleCar1.makeNoise();
eleCar1.printModelYear();
console.log("---------------");
console.log(eleCar1.chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1.chargeTime);