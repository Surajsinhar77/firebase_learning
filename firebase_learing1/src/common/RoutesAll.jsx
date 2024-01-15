import React from 'react'
import Home from '../Components/Home';
import Auth from '../Components/Auth';
import {Routes, Route} from 'react-router-dom';
import Login from '../Components/Login';

function RoutesAll() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Auth/>} />
            <Route path='/login' element={<Login/>} />

        </Routes>
    )
}

export default RoutesAll