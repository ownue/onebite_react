// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자

let date2 = new Date("1997-10-07");
console.log(date2);
// 날짜는 "1997-10-07", "1997.10.07", "1997/10/07", "1997 10 07" 가능
// 시간은 "1997/10/07/10:10:10" or "1997, 10, 07, 10, 10, 10"

// 2. 타임 스탬프
// 특정 시간이 "1980.01.01 00시 00분 00초"로부터 몇 ms가 지났는지 의미하는 숫자값
// 복잡한 시간을 숫자로 간단히 나타낼 수 있어서 자주 쓰임
let ts1 = date1.getTime();  // 협정 세계시 UTC로부터 얼마나 지났는지
console.log(ts1);

let date3 = new Date(ts1);
console.log(date1, date3);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth()+1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
);  // js의 month는 0~11이므로 getMonth()로 추출한 후에는 +1을 해서 사용해야 함!

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);  // 2를 넣으면 실제로는 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

year = date1.getFullYear();
// 변수는 변경되지 않았으므로 변수에 이용하려면 다시 초기화해줘야 됨

console.log(
    year,   // 얘만 변경된 걸로 출력
    month,
    date,
    hour,
    minute,
    seconds
)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());