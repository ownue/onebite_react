import useInput from "react";

// 3가지 Hook 관련한 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출할 수 없음S
// 3. Custom Hook을 직접 만들 수 있음

const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>  
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;