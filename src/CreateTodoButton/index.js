import React from 'react'
import './CreateTodoButton.css'
function CreateTodoButton({ type }) {
    
    return (
        <button
            className='create-btn'
            type={type}
        >
            Add
        </button>
    )
}

export { CreateTodoButton }