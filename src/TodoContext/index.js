import { createContext } from "react";
import { useLocalStorage } from '../TodoContext/UseLocalStorage';
import { useState } from 'react';

const TodoContext = createContext()

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setsearchValue,
            searchedTodos,
            deleteTodo,
            completeTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }