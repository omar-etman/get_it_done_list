import React from 'react'
import { Checkbox } from '@material-ui/core'
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'
import PrioritySelector from './PrioritySelector'
import StatusSelector from './StatusSelector'
import { IoMdCloseCircle } from "react-icons/io";
function TodoItem(props) {
    const dispatch = useDispatch()
    const {name, done, id, priority, taskStatus, description} = props
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    return (
        <div className='todoItem'>
            <div className = "checkbox__container">
                <Checkbox
                    checked={done}
                    color="primary"
                    onChange={handleCheck}
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
            </div>
            <div className="todo">
                <p className={done && 'todoItem--done'}>{name}</p>
                <div className='button__container'>
                    <button className='todo__button'>
                        <span>
                        <ion-icon name="close-circle"></ion-icon>
                        </span>
                    </button >
                    <button className='todo__button'>details</button>
                </div>
            </div>
            <div className='selector'>
                <div className='selector__container'>
                    <PrioritySelector
                        priority={priority}
                    />
                </div>
                <div className='selector__container'>
                    <StatusSelector
                        taskStatus={taskStatus}
                    />
                </div>
            </div>

        </div>
    )
}

export default TodoItem
