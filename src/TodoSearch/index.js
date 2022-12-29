import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'


function TodoSearch() {
    const { searchValue, setsearchValue } = useContext(TodoContext)
    const onSearchValueChange = (event) => {
        setsearchValue(event.target.value)
    }
    return (
        <>
            <input
                className='search-input'
                onChange={onSearchValueChange}
                value={searchValue}
                placeholder="🔍 Buscar..."
            />
        </>
    )
}

export { TodoSearch }