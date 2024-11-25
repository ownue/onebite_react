// 1. 콜백 함수
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

main(function sub() {
    console.log("I am sub");
});


// 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

// repeatDouble과 같은 기능
repeat(5, (idx) => {
    console.log(idx * 2);
});