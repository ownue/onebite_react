// 함수 선언
function greeting() {
    console.log("안녕하세요!");
}



getArea(10, 20);

// 직사각형의 넓이를 구하는 함수
function getArea(width, height) {
    function another() {
        console.log("another function");
    }
    let area = width * height;
    return area;
}