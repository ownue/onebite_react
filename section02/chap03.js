// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two] = arr;

// 2. 객체의 구조 분해 할당
let person = {
    name: "은우",
    age: 22,
    hobby: "누워있기"
};

let {
    name,
    age: myAge,
    hobby,
    extra = "hello",
} = person;


// 3. 객체 구조분해할당을 이용해서 매개변수를 받는 방법
const func = ({ name, age, hobby, extra = "hello" }) => {
    console.log(name, age, hobby, extra);
};

func(person);