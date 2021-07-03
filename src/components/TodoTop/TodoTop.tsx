import {useAppDispatch, useAppSelector } from '../../hooks/hoock';
import { changeShowCards } from '../../store/reducers/TodoSlice';
import './TodoTop.css'


export const TodoTop = () => {
    const {todoNav, showCompletedCard} = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch()
    let changeShow = (status: boolean) => {
        dispatch(changeShowCards(status))
    }
    return (
        <div className='todo_header'>
            <h2 className='todo_header__title'>
                To Do List
            </h2>
            <div className="todo_header__nav">
                {todoNav.map((el, index) => <span key={index} onClick={() => changeShow(el.status)}
                  className={showCompletedCard === el.status ? 'todo_header__nav_item active' : 'todo_header__nav_item'}>
                    {el.title}</span>)}
            </div>
        </div>
    );
};


