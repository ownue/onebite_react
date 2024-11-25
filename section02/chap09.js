// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건에 맞는 요소들만 배열로 반환
let arr1 = [
    { name: "은우", hobby: "눕기" },
    { name: "철수", hobby: "테니스" },
    { name: "영희", hobby: "테니스" },
];

// 콜백함수를 이용해 배열의 모든 요소를 순회
const tennisPeople = arr1.filter((item) => {
    if (item.hobby === "테니스") return true;
});

console.log(tennisPeople);

// 줄일 수도 있음
const tennisPeople1 = arr1.filter(
    (item) => item.hobby === "테니스"
);

console.log(tennisPeople1);
// 웹페이지 검색 기능 등에 유용하게 사용되므로 잘 배워두기

// 2. map
// 배열의 모든 요소를 순회하며 각각 콜백함수를 실행
// 함수의 결과값을 배열로 반환
let arr2 = [ 1, 2, 3 ];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 적용
let arr3 = [ "b", "c", "a" ];
arr3.sort();

console.log(arr3);

// 숫자는 sort()만으로는 정렬을 안 해주므로 콜백함수 이용해야 함
let arrNum = [ 10, 3, 5 ];
arrNum.sort((a, b) => {
    if (a > b) {
        return 1;   // b가 a 앞에 와라
    }
    else if (a < b) {
        return -1;  // a가 b 앞에 와라
    }
    else return 0;  // 바꾸지 마라
});

console.log(arrNum);

// 내림차순 정렬
arrNum.sort((a, b) => {
    if (a > b) {
        return -1;   // a가 b 앞에 와라
    }
    else if (a < b) {
        return 1;  // b가 a 앞에 와라
    }
    else return 0;  // 바꾸지 마라
});

console.log(arrNum);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환, 객체에 저장하는 것은 아님!!
let arr4 = [ "c", "a", "b" ];
const sorted = arr4.toSorted();

console.log(arr4);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 반환
let arr5 = [ "hello", "how", "are", "you" ];
// join의 인자로 '구분자'를 넣어주면 됨
const joined = arr5.join('-');
console.log(joined);
const joined1 = arr5.join(' ');
console.log(joined1);