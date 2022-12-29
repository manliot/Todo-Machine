import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function TodoCounter() {
    const { completedTodos, totalTodos } = useContext(TodoContext)
    return (
        <>
            <h2 style={{marginBottom:'36px'}}>
                Completed {completedTodos} to {totalTodos}
            </h2>
        </>
    )
}

export { TodoCounter }