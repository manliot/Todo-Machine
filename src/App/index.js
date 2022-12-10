import './App.css';
import { useState } from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false }
// ]

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  };

  return [item, saveItem]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

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


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)

    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed

    saveTodos(newTodos)

  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    console.log(todoIndex)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)

    saveTodos(newTodos)
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setsearchValue={setsearchValue}
      searchedTodos={searchedTodos}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  );
}

export default App;
