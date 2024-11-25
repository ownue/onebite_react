// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
    console.log("num은 10 이상입니다.");
    console.log("조건이 참입니다.");
}
else {
    console.log("num은 10 미만입니다.");
    console.log("조건이 거짓입니다.");
}

// 2. switch 조건문
let animal = "cat";

switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
    }
    case "bear": {
        console.log("곰");
    }
    case "snake": {
        console.log("뱀");
    }
    case "tiger": {
        console.log("호랑이");
    }
    default: {
        console.log("그런 동물은 모릅니다.");
    }
}