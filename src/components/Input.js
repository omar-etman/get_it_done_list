import React , {useState} from 'react'
import './Input.css'

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
function Input(props) {

    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const dispatch = useDispatch()

    const addTodo = () => {
        console.log(`adding ${input}`)
        debugger
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now(),
            priority: priority,
            taskStatus: taskStatus,
        }))
        setInput('')
        debugger
        console.log(input)
    }

    return (
        <div className='input'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button className='input__button' onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input
