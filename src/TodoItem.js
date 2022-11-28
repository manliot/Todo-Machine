import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className='item'>
            <span>{props.completed === true ? '✅' : '☑️'}</span>
            <p className={props.completed === true ? 'item-text' : ''}>{props.text}</p>
            <span>❌</span>
        </li>
    )
}

export { TodoItem }