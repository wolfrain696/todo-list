import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { addTodoTypeAction } from "../../types/TypesActon";

interface TodoState {
    title: string
    text: string
    todoNav: { title: string, status: boolean }[]
    showCompletedCard: boolean
    todos: {
        id: number
        title: string
        text: string
        completedAnimation: boolean
        modalStatus: boolean
        completed: boolean
        deleted: boolean
    }[]
}

const initialState: TodoState = {
    title: '',
    text: '',
    todoNav: [
        {title: 'Not completed', status: false},
        {title: 'Completed', status: true}
    ],
    showCompletedCard: false,
    todos: [
        {
            id: 1,
            title: 'Список дел',
            text: 'Начни планировать свой день',
            completedAnimation: false,
            modalStatus: false,
            completed: false,
            deleted: false
        },
    ]

}


const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: addTodoTypeAction) {
            state.todos.push(action.payload)
        },
        removeTodoCard(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(el => el.id !== action.payload)
        },
        animationRemove(state, action) {
            state.todos.map(el => el.id === action.payload ? el.deleted = !el.deleted : el)
        },
        addTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },
        todoCompleted(state, action: PayloadAction<number>) {
            state.todos.map(el => el.id === action.payload ? el.completed = !el.completed : el)
        },
        completedAnimation(state, action: PayloadAction<number>) {
            state.todos.map(el => el.id === action.payload ? el.completedAnimation = !el.completedAnimation : el)
        },
        changeShowCards(state, action: PayloadAction<boolean>) {
            state.showCompletedCard = action.payload
        },
        editTitle(state, action: PayloadAction<{ id: number, title: string }>) {
            let currentCard = state.todos.filter(el => el.id === action.payload.id)
            currentCard[0].title = action.payload.title
        },
        editText(state, action: PayloadAction<{ id: number, text: string }>) {
            let currentCard = state.todos.filter(el => el.id === action.payload.id)
            currentCard[0].text = action.payload.text
        },
        changeModalStatus(state, action:PayloadAction<number>){
            let currentCard = state.todos.filter(el => el.id === action.payload)
            currentCard[0].modalStatus = !currentCard[0].modalStatus
        }

    }

})

export default TodoSlice.reducer
export const {
    addTitle,
    addTodo,
    animationRemove,
    removeTodoCard,
    todoCompleted,
    changeShowCards,
    completedAnimation,
    editTitle,
    editText,
    changeModalStatus
} = TodoSlice.actions
