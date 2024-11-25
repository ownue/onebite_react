for (let idx = 0; idx <= 10; idx++) {
    // 반복문 중간에 건너뛰는 방법
    if (idx % 2 === 0) continue;

    console.log(idx);

    // 반복문이 끝나지 않았는데 중간에 멈추는 방법
    if (idx >= 5) break;
}