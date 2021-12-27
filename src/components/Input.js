import React , {useState} from 'react'
import './Input.css'
function Input() {

    const {input, setInput} = useState('');

    const addTodo = () => {

    }

    return (
        <div className='input'>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={addTodo}>add one</button>
        </div>
    )
}

export default Input
