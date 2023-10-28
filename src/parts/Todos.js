import React, {useEffect, useState} from 'react';
import Todo from "./component/Todo";
import ApiService from "../services/ApiService";

const Todos = () => {
    const apiService = new ApiService('todos');
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        apiService.getAllData()
            .then(value => setTodos(value))
    }, []);
    return (
        <div>
            {
                todos.map(todo=> (<Todo todo={todo} key={todo.id} />))
            }
        </div>
    );
};

export default Todos;