// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
    console.log(`${f1}은 Falsy한 값입니다.`);
}


// 2. Truthy한 값
// => 7가지 값을 제외한 나머지 모든 값은 Truthy
let t1 = "hello world";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
    console.log(`${t1}은 Truthy한 값입니다.`);
}

// 3. 활용 사례
function printName(person) {
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person;
printName(person);