import React from 'react'

function Input({name, type, placehld, change}) {
    return (
        <input onChange={change} className='border rounded py-2 pl-2 w-full' type={type} placeholder={placehld} name={name} />
    )
}

export default Input