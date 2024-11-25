import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        // sort는 원본 배열을 수정해버리므로 toSorted 사용
        // js의 정렬 함수들은 객체 값을 비교하지 못함
        // 콜백 함수를 이용해서 비교함수 넣어줌
        return data.toSorted(() => {
            if (sortType === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    };

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select value={sortType} onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button
                    onClick={() => nav("/new")}
                    text={"새 일기 쓰기"}
                    type={"POSITIVE"}
                />
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => (
                    <DiaryItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default DiaryList;
