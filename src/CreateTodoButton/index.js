import React from 'react'

function CreateTodoButton({ type }) {
    
    return (
        <button
            className='create-btn'
            type={type}
        >
            Añadir
        </button>
    )
}

export { CreateTodoButton }