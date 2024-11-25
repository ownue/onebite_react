// 1. 객체 생성
let obj1 = new Object();    // 객체 생성자
let obj2 = {};  // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "이은우",    // key: value 형식으로 객체 property를 작성, key와 value의 개수 및 자료형 제한 X
    age : 22,           // age property라고 함
    hobby: "유튜브 보기",
    job: "student",
    extra: {},
    10: 20,
    "i love animals": "like puppy and kitty"    // 띄어쓰기를 포함한 문자열 key는 "" 안에 작성
}


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let name2 = person.name2;    // 없는 value에 접근하려고 하면 undefined가 반환됨

let age = person["age"];    // 괄호 표기법은 ""를 이용해 문자열로 써줘야 함
let age2 = person["age2"];  // undefined가 반환

let property = "hobby";
let hobby = person[property];
console.log(hobby); // hobby라는 문자열을 담아두고, 괄호 표기법으로 person 객체의 데이터에 동적으로 접근

// 3.2 새로운 프로퍼티를 추가하는 방법
person["favoriteFood"] = "HotPot";

// 3.3 프로퍼티를 수정하는 방법
person.job = "Student";
person[favoriteFood] = "LambSkewers";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result = "name" in person;
let result2 = "cat" in person;