console.log(1);

// 원하는 코드를 특정 시간이 지난 후에 원하는 시간에 비동기로 진행
// 3000ms 이후에 2를 console에 출력
setTimeout(()=>(
    console.log(2)
), 3000);

console.log(3);