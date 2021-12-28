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
            debugger
        },
        deleteTodo: (state, action) => {
            state.todoList.pop(action.payload)
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done ===true) {
                        item.done = false
                    } else{
                        item.done =true
                    }
                }
            })
        // }, editTodo: (state, action) => {
        //     if (action.payload === item.id) {
        //         function edit(prop, menu){
                    

        //             return itemPrice;
        //         }
        //     }
        // }

        }
    }
});

export const { saveTodo, setCheck } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer