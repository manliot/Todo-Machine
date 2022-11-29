import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
    const onComplete = () => {
        alert('Task completed: ' + props.text)
    }
    const onDelete = () => {
        alert('Task deleted: ' + props.text)
    }
    return (
        <li className='item'>
            <span
                onClick={onComplete}
            >
                {props.completed === true ? '✅' : '☑️'}
            </span>
            <p className={props.completed === true ? 'item-text' : ''}>{props.text}</p>
            <span
                onClick={onDelete}
            >
                ❌
            </span>
        </li>
    )
}

export { TodoItem }