function returnFalse() {
    console.log("False 함수");
    return undefined;
}

function returnTrue() {
    console.log("True 함수");
    return 10;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());
console.log(returnFalse() || returnTrue());
console.log(returnTrue() || returnFalse());

// 단락 평가 활용
function printName(person) {
    console.log(person && person.name);
}

function printName2(person) {
    const name = person && person.name
    console.log(name || "person의 값이 없음");
}