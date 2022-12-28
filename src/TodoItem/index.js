import React from 'react'
import { CheckIcon } from '../Assets/CheckIcon'
import { DeleteIcon } from '../Assets/DeleteIcon'
import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className='item'>
            <span
                className='check-btn-item'
                onClick={props.onComplete}
            >
                <CheckIcon completed={props.completed} w='20px' h='20px' />
            </span>
            <p className={`item-txt ${props.completed === true ? 'dash-text' : ''}`}>{props.text}</p>
            <span
                className='delete-btn-item'
                onClick={props.onDelete}
            >
                <DeleteIcon w='20px' h='20px' />
            </span>
        </li>
    )
}

export { TodoItem }