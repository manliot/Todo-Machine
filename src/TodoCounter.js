import React from 'react'

function TodoCounter({ total, completed }) {
    return (
        <>
            <h2>
                Completed {completed} to {total}
            </h2>
        </>
    )
}

export { TodoCounter }