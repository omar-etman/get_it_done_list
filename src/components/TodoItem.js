import React from 'react'
import { Checkbox } from '@material-ui/core'
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import { setCheck, deleteTodo, editTodo } from '../features/todoSlice'
import PrioritySelector from './PrioritySelector'
import StatusSelector from './StatusSelector'
import Deadlines from './Deadlines'

function TodoItem(props) {
    const dispatch = useDispatch()
    const {name, done, id, priority, taskStatus, description, dueDate} = props
    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    const removeTodo = () => {
        dispatch(deleteTodo({id}))
    }

    const editTodoItem = (fieldKey, fieldValue) => {
        dispatch(editTodo({fieldKey, fieldValue, id}))

    }
    return (
        <div className='todoItem'>
            <div className="todo">
                <div className = "checkbox__container">
                    <Checkbox
                        checked={done}
                        color="primary"
                        onChange={handleCheck}
                        inputProps={{'aria-label': 'secondary checkbox'}}
                    />
                </div>
                <div className='todo__info'>
                    <div className="todo__details">
                        <h3 className={done && 'todoItem--done'}>{name}</h3>
                        <p className='todoitem__description'>{description}</p>
                    </div>
                    <div className='button__container'>
                        <button className='todo__button' onClick={removeTodo}>Delete</button >
                        <button 
                            className='todo__button'
                            // onClick={}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <div className='datePicker'>
                <Deadlines
                    dueDate={dueDate}
                    editorFunction={editTodoItem}
                />
            </div>
            <div className='selector'>
                <div className='selector__container'>
                    <PrioritySelector
                        priority={priority}
                        editorFunction={editTodoItem}
                    />
                </div>
                <div className='selector__container'>
                    <StatusSelector
                        taskStatus={taskStatus}
                        editorFunction={editTodoItem}
                    />
                </div>
            </div>

        </div>
    )
}

export default TodoItem
