function task() {
    setTimeout(() => {
        console.log("안녕하세요!");
    }, 3000);
}

function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        console.log(sum);
    }, 3000);
}

// 비동기함수의 결과값으로 사용하려고 하는 콜백함수를 함께 전달
add(1, 2, (value)=>{
    console.log(value);
})

function add2(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        console.log(sum);
    }, 3000);
}

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000)
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedfood);

        freezedFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        })
    })
})