function funcA() {
    console.log("funcA");
}

let varA = funcA; // 함수를 저장한 것
console.log(varA);
varA();

let varB = function funcB() {   // 익명 함수
    console.log("funcB");
}

varB();
// funcB(); 는 불가능함


// 2. 화살표 함수
let varC = () => {
    console.log("hello");
    return 1;
}

// 단순히 반환만 한다면
let varD = (value) => value + 1; // 이렇게도 가능
varD(10);