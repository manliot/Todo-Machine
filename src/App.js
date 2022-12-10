import './App.css';
import { useState } from 'react';

import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setsearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      console.log(searchText)
      return todoText.includes(searchText)
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)

    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed

    setTodos(newTodos)

  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    console.log(todoIndex)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)

    setTodos(newTodos)
  }

  return (
    <div className='app-container'>
      <div className='section-container'>
        <section className='left-section'>
          <h2>Create new task</h2>
          <h3>Task Name</h3>
          <input placeholder='Sacar a pasear a los perros' />
          <CreateTodoButton />
        </section>
        <section className='right-section'>
          <h2>Your Tasks</h2>
          <TodoCounter
            total={totalTodos}
            completed={completedTodos}
          />
          <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />
          <TodoList>
            {
              searchedTodos.map(todo => (
                <TodoItem
                  text={todo.text}
                  completed={todo.completed}
                  key={todo.text}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                />
              ))
            }
          </TodoList>

        </section>
      </div>

    </div>
  );
}

export default App;
