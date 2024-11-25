// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시킴
let arr1 = [ 1, 2, 3 ];

arr1.forEach(function (item, idx, arr) {
    console.log(idx, item*2)
});
// 1번 호출 - item: 1, idx: 0
// 2번 호출 - item: 2, idx: 1
// 3번 호출 - item: 3, idx: 2

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인
let arr2 = [ 1, 2, 3 ];
let inInclude = arr2.includes(10);

console.log(inInclude);

// 3. indexOf
// 특정 요소의 인덱스를 반환
// 얕은 비교로 검사
let arr3 = [ 1, 2, 3 ];

let index = arr3.indexOf(2);
console.log(index);

let index2 = arr3.indexOf(10);
console.log(index2);    // 없으므로 -1 반환

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스를 반환
let arr4 = [ 1, 2, 3 ];
const findedIndex = arr4.findIndex((item) => {
    if (item % 2 !== 0) return true;
})

console.log(findedIndex);

// (item) => item % 2 !== 0 으로 변경해도 됨
// 조건을 만족하지 못하면 -1을 출력

// indexOf는 객체 타입 요소의 인덱스를 찾을 수 없지만, findIndex는 가능함
let objectArr = [
    { name: "은우" },
    { age: 22 },
]

console.log(
    objectArr.indexOf({ name: "은우" })
);  // 찾지 못해서 -1 출력, 얕은 비교 (원시 타입)

console.log(
    objectArr.findIndex(
        (item) => item.name === "은우"
    )   // 찾을 수 있음, 콜백함수를 이용해 프로퍼티를 비교할 수 있음 (객체 타입)
);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소 자체를 반환
let arr5 = [
    { name: "은우" },
    { age: 22 },
]

const finded = arr5.find(
    (item) => item.name === "은우"
);

console.log(finded);