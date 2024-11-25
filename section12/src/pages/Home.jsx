import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime(); // 해당하는 연월의 1일 0시 0분 0초 기록

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0, // 0일은 없으므로 일에 0을 넣으면 이전 달 마지막 일로 나옴
        23,
        59,
        59
    ).getTime();

    return data.filter(
        (item) =>
            beginTime <= item.createDate && item.createDate <= endTime
    );
};

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);
    console.log(monthlyData);

    const onIncreaseMonth = () => {
        setPivotDate(
            new Date(
                pivotDate.getFullYear(),
                pivotDate.getMonth() + 1
            )
        );
    };

    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(
                pivotDate.getFullYear(),
                pivotDate.getMonth() - 1
            )
        );
    };

    return (
        <div>
            <Header
                title={`${pivotDate.getFullYear()}년 ${
                    pivotDate.getMonth() + 1
                }월`}
                leftChild={
                    <Button onClick={onDecreaseMonth} text={"<"} />
                }
                rightChild={
                    <Button onClick={onIncreaseMonth} text={">"} />
                }
            />
            <DiaryList data={monthlyData} />
        </div>
    );
};

export default Home;