import React from 'react'
import Home from '../Components/Home';
import Auth from '../Components/Auth';
import {Routes, Route} from 'react-router-dom';
import Login from '../Components/Login';
import { authUser } from './AuthContext';

function RoutesAll() {
    const {userInfo} = authUser();
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            {
                userInfo ? 
                <>
                    
                </>
                :
                <>
                    <Route path='/signup' element={<Auth/>} />
                    <Route path='/login' element={<Login/>} />
                </>
            }
            <Route path='*' element={<div>  Page Not Found </div>  } />
        </Routes>
    )
}

export default RoutesAll;