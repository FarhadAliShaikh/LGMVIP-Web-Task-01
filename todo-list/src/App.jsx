import React, { useEffect, useState } from 'react';
import crossImage from './img/cross.png';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className='flex justify-between bg-cyan-500 rounded-xl m-2 px-8 py-4'>
      <h3 className='text-4xl font-bold text-white'>{todo}</h3>
      <div>
        <button onClick={() => onDelete(todo)}>
          <img
            src={crossImage}
            alt={`Delete ${todo}`}
            className='bg-white mx-4 h-8'
          />
        </button>
      </div>
    </div>
  );
};

const TodoPage = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addHandler = () => {
    if (input !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteHandler = (todo) => {
    const updatedTodos = todos.filter((t) => t !== todo);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className='bg-slate-950 text-white h-screen'>
        <h1 className='text-center text-4xl font-bold p-4'>Todo List Project</h1>
        <div className='flex justify-center '>
          <input
            type='text'
            className='text-black border border-gray-400 p-2 mt-6 w-3/4 rounded'
            placeholder='Enter todo'
            value={input}
            onChange={inputHandler}
          />
          <button
            className='bg-blue-500 text-white p-2 mt-6 ml-2 w-20 rounded '
            onClick={addHandler}
          >
            Add
          </button>
        </div>
        <div className='mt-10'>
          <h2 className='font-bold text-3xl text-center text-gray border-b-2 p-4 m-6 text-gray-400'>
            Todo-List here
          </h2>
          <div>
            {todos.map((todo, index) => (
              <TodoItem key={todo} todo={todo} onDelete={deleteHandler} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
