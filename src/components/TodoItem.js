import React from 'react'
import { Checkbox } from '@material-ui/core'
import './TodoItem.css'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'

function TodoItem({name, done, id}) {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    return (
        <div className='todoItem'>
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
            <button>
                <span>delete</span>
            </button>
            <button>edit</button>
            <button>details</button>

        </div>
    )
}

export default TodoItem
