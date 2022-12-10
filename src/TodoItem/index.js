import React from 'react'
import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className='item'>
            <span
                onClick={props.onComplete}
            >
                {props.completed === true ? '✅' : '☑️'}
            </span>
            <p className={props.completed === true ? 'item-text' : ''}>{props.text}</p>
            <span
                onClick={props.onDelete}
            >
                ❌
            </span>
        </li>
    )
}

export { TodoItem }