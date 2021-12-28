import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []

}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id)
            
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) item.done = !item.done
            })
        }, 
        editTodo: (state, action) => {
            state.todoList.map(item => {
                if (action.payload.id === item.id){
                    item[action.payload.fieldKey]=action.payload.fieldValue
                }
            })
        }
    }
});

export const { saveTodo, setCheck, deleteTodo, editTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer