import React, {useState} from "react";

import {useSelector} from "react-redux";
const Todos = () => {
    const todos
        = useSelector(state => state.todos);

    const [todo, setTodo] = useState({do: ''});
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }




    return(
        <>
            <h3 className='text-black'>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item text-black bg-white">
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control text-black "/>
                </li>
                {
                    todos.map(todo =>
                                  <li className="list-group-item bg-white text-black">
                                      {todo.do}
                                  </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;