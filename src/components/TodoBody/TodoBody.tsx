import './TodoBody.css'
import TrashIcon from '../../img/delete.png'
import EditIcon from '../../img/edit-svgrepo-com.svg'
import {
    animationRemove,
    changeModalStatus,
    completedAnimation,
    removeTodoCard,
    todoCompleted
} from '../../store/reducers/TodoSlice';
import {ModalEdit} from './ModalEdit';
import {useAppDispatch, useAppSelector } from '../../hooks/hoock';


export const TodoBody = () => {
    const {todos, showCompletedCard} = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch()
    let changeCompleted = (id: number) => {
        dispatch(completedAnimation(id))
        setTimeout(() => dispatch(todoCompleted(id)), 500)
    }
    let removeCard = (id: number) => {
        dispatch(animationRemove(id))
        setTimeout(() => dispatch(removeTodoCard(id)), 500)

    }
    let changeEditStatus = (id:number)=>{
        dispatch(changeModalStatus(id))
    }
    let todosFilterCompleted = todos.filter(data => {
        switch (showCompletedCard) {
            case false:
                return data.completed === false
            case true:
                return data.completed === true
            default:
                return data
        }
    })
    let showTodos = todosFilterCompleted.map((el, index) =>
        <div id={`${el.id}`} key={index}
             className={el.deleted ? 'todo_body__card todo_body__card_deleted' : 'todo_body__card'}>
            <ModalEdit inValue={el.title} scale={el.modalStatus ? '1' : '0'} textValue={el.text} idCard={el.id} />
            <div className="todo_card__settings">
                <div className='card__settings_buttons'>
                    <div onClick={() => removeCard(el.id)} className="card__settings_delete">
                        <img src={TrashIcon} alt="delete"/>
                    </div>
                    <div className="card__settings_edit" onClick={()=>changeEditStatus(el.id)}>
                        <img src={EditIcon} alt="edit"/>
                    </div>
                </div>

                <div className="card_checkbox__block">
                    <input type="checkbox"
                           className={el.completedAnimation ? 'card_checkbox todo_card__completed' : 'card_checkbox'}
                           onChange={() => changeCompleted(el.id)}/>
                </div>
            </div>
            <div className="todo_card__content">
                <h3 className="todo_card__title">{el.title}</h3>
                <p className="todo_card__text">{el.text}</p>
            </div>
        </div>
    )
    return (
        <div className='todo_body__cards'>
            {showTodos}
        </div>
    );
};

