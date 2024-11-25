const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof num === "number") {
            resolve(num + 10);
        }
        else {
            reject("num이 숫자가 아닙니다");
        }
    }, 2000);
});

// then 메서드
promise
    .then((value) => {
    console.log(value);
    })
    .catch((error_ => {
        console.log(error);
    }))


function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            }
            else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    })

    return promise;
}

const p = add10(0);
p.then((result) => {
    console.log(result);

    const newP = add10(result);
    newP.then((result) => {
        console.log(result);
    });
});

add10(0)
    .then((result) => {
    console.log(result);
    return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .catch((error) => {
        console.log(error);
    });