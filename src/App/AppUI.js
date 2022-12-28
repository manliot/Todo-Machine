import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from '../TodoForm';
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { RightIlustration } from "../Assets/LeftIlustration";
//import { Modal } from "../Modal"

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
                    <h2 style={{ textAlign: 'center' }}>Create new task</h2>
                    <TodoForm />
                    <div className='left-ilustration-container'>
                        <RightIlustration />
                    </div>
                </section>
                <section className='right-section'>
                    <h2 style={{ textAlign: 'center' }}>Your Tasks</h2>
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