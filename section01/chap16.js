// 1. 상수 객체 (=상수에 저장해둔 객체)
const animal = {
    type: "cat",
    name: "gurumi",
    color: "godeungeo"
}

animal.age = 2; // 추가
animal.name = "tanggui"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
const person = {
    name: "이은우",
    // 메서드 선언
    sayHi() {
        console.log("Hi");
    }
}