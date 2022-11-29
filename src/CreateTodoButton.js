import React from 'react'

function CreateTodoButton() {
    const onClickButton = () => alert('Acá deberá crearse una task')
    return (
        <button
            className='create-btn'
            onClick={onClickButton}
        >
            Create Task
        </button>
    )
}

export { CreateTodoButton }