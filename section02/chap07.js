// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가
let arr = [ 1, 2, 3 ];
arr.push(4);
arr.push(5, 6, 7, 8);

const newLength = arr.push(9, 10);
console.log(newLength); // 마지막에 추가된 10을 출력함
// const 개체는 업데이트 할 수 없지만, 개체 속성은 업데이트 가능

// 2. pop
// 배열의 맨 뒤의 요소를 제거하고 반환
let arr2 = [ 1, 2, 3 ];
const poppedItem = arr2.pop();

console.log(poppedItem);

// 3. shift
// 배열 맨 앞의 요소를 제거하고 반환
let arr3 = [ 1, 2, 3 ];
const shiftedItem = arr3.shift();

console.log (shiftedItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가
let arr4 = [ 1, 2, 3 ];
arr.unshift(0);
console.log(arr4);
// shift와 unshift는 배열의 맨 앞에 요소를 추가하므로
// 뒷 요소들의 인덱스를 하나씩 조정해야 해서
// push와 pop보다 지연 시간이 긺

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 인덱스로 반환
let arr5 = [ 1, 2, 3, 4, 5 ];
let sliced = arr5.slice(2, 5);   // 2번 인덱스~4번 메서드까지 반환 (파이썬의 range 같음)
let sliced2 = arr5.slice(2);    // 마지막 범위를 설정하지 않으면 끝까지 슬라이스
let sliced3 = arr5.slice(-1);   // -1번째 인덱스(뒤에서 첫 번째)부터 끝까지 슬라이스 = 뒤에서부터 1개 잘라라

console.log(sliced);
console.log(arr5);  // 원본 객체는 그대로

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let arr6 = [ 1, 2 ];
let arr7 = [ 3, 4 ];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);