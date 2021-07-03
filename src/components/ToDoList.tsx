import './todo.css'

import {TodoTop} from "./TodoTop/TodoTop";
import {TodoBody} from "./TodoBody/TodoBody";
import {useAppDispatch, useAppSelector } from '../hooks/hoock';
import {addTitle, addTodo } from '../store/reducers/TodoSlice';


export const ToDoList = () => {
    const {title} = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch()
    let addTodoCardPressEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            let card = {
                id: Date.now(),
                title: title,
                text: 'Добавьте описание',
                completedAnimation: false,
                modalStatus: false,
                completed: false,
                deleted: false
            }
            dispatch(addTodo(card))
            dispatch(addTitle(''))
        }
    }
    let addTodoCard = () => {
        let card = {
            id: Date.now(),
            title: title,
            text: 'Добавте описание',
            completedAnimation: false,
            modalStatus: false,
            completed: false,
            deleted: false
        }
        dispatch(addTodo(card))
        dispatch(addTitle(''))

    }
    let addTitleCard = (event: React.ChangeEvent<HTMLInputElement>) => {
        let titleText = event.target.value
        dispatch(addTitle(titleText))

    }
    return (
        <div className='todo'>
            <div className="todo_top">
                <TodoTop/>
            </div>
            <div className="todo_body"><TodoBody/></div>
            <div className="todo_bottom">
                <input type="text" value={title} onKeyUp={addTodoCardPressEnter} className='todo_button__input'
                       onChange={addTitleCard}/>
                <button className='todo_bottom__button' onClick={addTodoCard}>Press Enter</button>
            </div>
        </div>
    )
};

