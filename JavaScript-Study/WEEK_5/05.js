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
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. modelName, modelYear, price, type을 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get 하는 로직까지

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

    getModelYear () {
        console.log(`${this.modelName}의 년도는 ${this.modelYear}년입니다.`);
    }
}

// 자동차 만들기
const car1 = new Car('Sorento', '2023', 'e', 5000);
const car2 = new Car('SM5', '1999', 'g', 3000);
const car3 = new Car('Palisade', '2010', 'd', 4500);
car1.makeNoise();
car1.getModelYear();
car2.makeNoise();
car2.getModelYear();
car3.makeNoise();
car3.getModelYear();