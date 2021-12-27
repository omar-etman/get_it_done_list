import React from 'react';
import './App.css';
import Input from './components/Input';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const todoList = [{
  item: 'todo',
  done: false,
  id: 87645538299
}, {
  item: 'todo2',
  done: true,
  id: 766525673892
}]
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__container">
        <div className="app__todoContainer">
            {
              todoList.map(item => (
                <TodoItem
                  name={item.item}
                  done={item.done}
                  id={item.id}
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
