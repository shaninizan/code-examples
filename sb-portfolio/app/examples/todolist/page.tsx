'use client';
import { useEffect, useState } from 'react';
import { ToDo, getTodosFromApi } from './api';
import './styles.css';
import { SBCheckbox } from '@/app/library/SBCheckbox';

export default function TodoList() {
  const [todos, setTodos] = useState<ToDo[]>();

  const getTodoList = async () => {
    const todolist = await getTodosFromApi();
    setTodos(todolist);
  };

  const handleClick = (todoid: number) => {
    const updatedTodos = todos?.map((td) => {
      if (todoid === td.id) {
        return { ...td, completed: !td.completed };
      } else return td;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    if (!todos) {
      getTodoList();
    }
  }, [todos, setTodos]);

  return (
    <div>
      <h3>To Do List</h3>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? 'todo completed' : 'todo'}
            >
              <SBCheckbox
                defaultChecked={todo.completed}
                labelText={todo.title}
                name={todo.id.toString()}
                onChange={(e) => handleClick(todo.id)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
