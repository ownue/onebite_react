import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") return todos;
        // 배열의 모든 값을 순회하면서 연산의 값이 참이 되는 값만 return
        return todos.filter((todo) => 
            todo.content
            .toLowerCase()
            .includes(search)
        );
    };

    const flteredTodos = getFilteredData();
    
    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {flteredTodos.map((todo) => {
                    return (
                        <TodoItem
                        key={todo.id}
                        {...todo}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default List;