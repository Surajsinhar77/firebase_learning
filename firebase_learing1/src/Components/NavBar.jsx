import React from 'react'
import { Link } from 'react-router-dom';
import Button from './UI/Button';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase/config';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { authUser } from '../common/AuthContext';

function NavBar() {
    const {userInfo} = authUser();

    const navigation = useNavigate();

    async function userLogout(e){
        e.preventDefault();
        try{
            const result = await signOut(auth);
            console.log(result);
            navigation('/signup')
        }catch(err){
            console.error(err, err.message);
        }
    }
    return (
        <>
            <nav className='border flex items-center justify-between w-[75%] m-auto px-7 py-3 bg-blue-900 text-white rounded-lg'>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>
                <ul className='flex items-center text-sm'>
                    <li className='px-2'>
                        <Link to='#'>HOME</Link>
                    </li >
                    
                    
                    {userInfo?

                        <>
                            <Button 
                                clName={"rounded-full py-1 px-2 "}
                                name={<FaUser/>}
                            />
                            <Button 
                                clName={"border w-20 py-1 px-2 rounded bg-black text-white font-semibold"} 
                                name={"LOGOUT"}
                                click={userLogout}
                            />
                        </>
                        :
                        <>
                            <li className='px-2'>
                                <Link to='/signup'>SIGNUP</Link>
                            </li>
                            <li className='px-2'>
                                <Link to='/login'>LOGIN</Link>
                            </li>
                        </>
                    }   
                </ul>
            </nav>
        </>
    )
}

export default NavBar