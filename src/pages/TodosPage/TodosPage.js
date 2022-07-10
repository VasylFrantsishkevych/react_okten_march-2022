import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import {Todo} from "../../components";
import './TodoPageStyle.css';

const TodosPage = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(value => setTodos(value));
    }, [])

    return (
        <div className={'todos'}>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {TodosPage};
