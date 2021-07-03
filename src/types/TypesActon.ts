export  interface addTodoTypeAction {
    payload: { id: number,
        title: string,
        text: string,
        completedAnimation: boolean,
        modalStatus: boolean,
        completed: boolean,
        deleted: boolean
    }
}