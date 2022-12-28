import React from 'react'
import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className='item'>
            <span
                className='check-btn-item'
                onClick={props.onComplete}
                >
                {props.completed === true ? '✅' : '☑️'}
            </span>
            <p className={`item-txt ${props.completed === true ? 'dash-text' : ''}`}>{props.text}</p>
            <span
                className='delete-btn-item'
                onClick={props.onDelete}
            >
                ❌
            </span>
        </li>
    )
}

export { TodoItem }