import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <div className="app__container">
        <Header/>
        <div className="app__todoContainer">
            {
              todoList.map(item => (
                <TodoItem
                  key={item.id}
                  name={item.item}
                  done={item.done}
                  priority={item.priority}
                  taskStatus={item.taskStatus}
                  id={item.id}
                  description={item.description}
                />
              ))
            }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
