function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Student(name, gender, school) {
    Person.call(this, name, gender);
    this.school = school;
}

function Employee(name, gender, company) {
    Person.call(this, name, gender); // call로 this를 바인딩 해서 새로 만들 빈 객체를 가리킬 목적으로 만들 수 있다.
    this.company = company;
}

var kd = new Student("길동", "male", "서울대");
var ks = new Employee("길순", "female", "삼성");