// bind
var obj1 = {
    name: "obj1",
    func: function () {
        console.log(this.name);
    },
};

// var boundObj1 = obj1.func.bind(obj1);
// setTimeout(boundObj1, 1000);

// 함수 자체를 바인딩
var obj2 = { name: "obj2"};
setTimeout(obj1.func.bind(obj2), 1500);