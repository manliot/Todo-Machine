import React from 'react'


function TodoSearch({ searchValue, setsearchValue}) {

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