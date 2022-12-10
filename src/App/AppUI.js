import React from 'react'
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI(
    {
        totalTodos,
        completedTodos,
        searchValue,
        setsearchValue,
        searchedTodos,
        deleteTodo,
        completeTodo
    }
) {
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
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            ))
                        }
                    </TodoList>

                </section>
            </div>

        </div>
    );
}

export { AppUI }