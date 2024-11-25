import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") return todos;
        // 배열의 모든 값을 순회하면서 연산의 값이 참이 되는 값만 return
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search)
        );
    };

    const flteredTodos = getFilteredData();

    const { totalCount, doneCount, notDoneCount } =
        useMemo(() => {
            console.log("getAnalyzedData 호출!");
            const totalCount = todos.length;
            const doneCount = todos.filter(
                (todo) => todo.isDone
            ).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount,
            };
        }, [todos]);

    // const { totalCount, doneCount, notDoneCount } =
    //    getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {flteredTodos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} {...todo} />
                    );
                })}
            </div>
        </div>
    );
};

export default List;
