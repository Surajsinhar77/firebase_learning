import React from 'react'

function Button({click, name, icon, clName}) {
    return (
        <button onClick={click} className={clName}>{icon} {name}</button>
    )
}

export default Button