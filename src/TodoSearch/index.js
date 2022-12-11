import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'


function TodoSearch() {
    const { searchValue, setsearchValue } = useContext(TodoContext)
    const onSearchValueChange = (event) => {
        setsearchValue(event.target.value)
    }
    return (
        <>
            <input
                onChange={onSearchValueChange}
                value={searchValue}
                placeholder="Cebolla"
            />
        </>
    )
}

export { TodoSearch }