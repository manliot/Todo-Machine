import React from 'react'

import Delete from './delete.png'


function DeleteIcon({ w, h }) {
    return (
        <img style={{ width: w, height: h }} src={Delete} />
    )
}

export { DeleteIcon }