import React from 'react'
import Home from '../Components/Home';
import Auth from '../Components/Auth';
import {Routes, Route} from 'react-router-dom';

function RoutesAll() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Auth/>} />
        </Routes>
    )
}

export default RoutesAll