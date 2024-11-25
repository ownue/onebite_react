let a  = 1; // 전역 스코프

function funcA() {
    let b = 2;  // 지역 스코프
    console.log(a);
    function jiYeok() {} // 함수도 지역 스코프를 가짐
}

funcA();
console.log(b); // 접근 불가하므로 undefined 오류가 뜸

if (true) {
    let c = 1;  // 지역 스코프2
    function funcB() {} // 함수 선언식은 조건문이나 반복문에서는 지역 스코프를 갖지 않음
}

for (let i = 0; i < 10; i++) {
    let d = 1;  // 지역 스코프3
    function funcDisOK() {}
}