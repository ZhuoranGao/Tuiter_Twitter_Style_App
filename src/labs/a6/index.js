import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";
import './todo/bootstrap/css/bootstrap.min.css'

function Assignment6() {
    return (
        <div className='text-black bg-white'>
            <h1 className='text-black bg-white'>Assignment 6</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;