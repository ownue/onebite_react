/* JSX 주의 사항
* 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
* 자바스크립트 표현식: 한 줄만으로 값으로 표현되는 것
* 2. 숫자, 문자열, 배열 값만 렌더링 된다.
* 객체도 불가하므로 객체는 obj.a처럼 객체 내부의 문자열 또는 숫자 값을 불러오도록 함
* 3. 모든 태그는 닫혀 있어야 한다. (<img>도 닫아야 함)
* 4. 최상위 태그는 반드시 하나여야 한다. (아래의 <main>처럼! 최상위 태그로 할 게 없으면 빈 태그 <></> 가능)
*/
import "./Main.css";    // 경로만 입력해도 됨

const Main = () => {
    const user = {
        name: "은우",
        isLogin: true,
    };

    if (user.isLogin) {
        return (
            <div className="logout">로그아웃</div>
        );
    } else {
        return <div>로그인</div>;
    }
};

export default Main;