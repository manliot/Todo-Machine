import React from 'react'

function TodoSearch() {
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <>
            <input
                onChange={onSearchValueChange}
                placeholder="Cebolla" />

        </>
    )
}

export { TodoSearch }