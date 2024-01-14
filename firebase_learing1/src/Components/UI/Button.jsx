import React from 'react'

function Button({name}) {
    return (
        <button className='border border-gray-600 py-2 px-4 text-center rounded-lg bg-gray-800 text-white font-medium'>{name}</button>
    )
}

export default Button