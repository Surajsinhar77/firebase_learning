import React from 'react'

function Button({click,name, icon}) {
    return (
        <button onClick={click} className='border border-gray-600 py-2 px-4 text-center rounded-md bg-gray-800 text-white font-medium w-full flex items-center justify-center'>{icon} {name}</button>
    )
}

export default Button