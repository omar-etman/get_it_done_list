import React , {useState} from 'react'
import './Input.css'

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
function Input(props) {

    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [description, setDescription] = useState('add further details to your task.');
    const [dueDate, setDueDate] = useState(new Date())
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(saveTodo({
            input,
            done: false,
            id: Date.now(),
            priority,
            taskStatus,
            description,
            dueDate
        }))
        setInput('')
    }

    return (
        <div className='input'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button className='input__button' onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input
