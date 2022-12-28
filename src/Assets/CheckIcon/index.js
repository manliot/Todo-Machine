import React from 'react'
import CompletedIcon from './completed.png'
import IncompletedIcon from './incompleted.png'


function CheckIcon({ completed, w, h }) {
    return (
        <img style={{ width: w, height: h }} src={completed === true ? CompletedIcon : IncompletedIcon} />
    )
}

export { CheckIcon }