import React, { useContext, useState } from 'react'
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setnewTodoValue] = useState('')
    const { addTodo } = useContext(TodoContext)

    const onChange = (e) => {
        setnewTodoValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setnewTodoValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <label className='label-form'>Task Name</label>
            <textarea
                className='txtarea-form'
                value={newTodoValue}
                onChange={onChange}
                placeholder='Sacar a pasear a los perros' />
            <div className='btn-container-form'>
                <CreateTodoButton type='submit' />
            </div>
        </form>
    )
}

export { TodoForm }