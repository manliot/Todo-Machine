import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal"

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = useContext(TodoContext)

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
                    <TodoCounter />
                    <TodoSearch />
                    <TodoList>
                        {error && <p>Desespérate, hubo un error...</p>}

                        {loading && <p>Estamos cargando, no desesperes...</p>}

                        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

                        {
                            searchedTodos.map(todo => (
                                <TodoItem
                                    text={todo.text}
                                    completed={todo.completed}
                                    key={todo.text}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            ))
                        }
                    </TodoList>
                </section>
            </div>
           {/*  <Modal >
                <p> Tele Transpor</p>
            </Modal> */}
        </div>
    );
}

export { AppUI }