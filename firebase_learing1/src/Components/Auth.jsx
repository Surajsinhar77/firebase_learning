import React, {useState} from 'react'
import Button from './UI/Button';
import Input from './UI/Input';
import {auth} from './../firebase/config'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {createUserWithEmailAndPassword} from "firebase/auth";

function Auth() {
    const [userData, setUserData]= useState();

    function getUserData(e){
        e.preventDefault();
        setUserData({
            ...userData, [e.target.name] : e.target.value,
        })
    }

    async function create_userRegister(e){
        e.preventDefault();
        const resullt = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        console.log(resullt);
    }

    return (
        <div className='h-screen border flex flex-col items-center justify-center'>
            <div className="loginCard w-96 border p-5 rounded">
                <h1 className='text-center text-3xl font-bold text-gray-700'>Login User</h1>
                <div className="col h-48 flex flex-col justify-evenly">
                    <div className="row">
                        <label htmlFor="email" className='text-gray-700 font-semibold'>Email</label>
                        <Input change={getUserData} name="email" type="email" placehld={"abc@gmail.com"}/>
                    </div>
                    <div className="row">
                        <label htmlFor="password" className='text-gray-700 font-semibold'>Password</label>
                        <Input change={getUserData} name={"password"} type={"password"} placehld={"password"}/>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="submit font-medium text-lg">
                        <Button click={create_userRegister} name={"Login"}/>
                    </div>
                </div>

                <div className="loginWithOther ">
                    <div className="supporterWithIn py-5">
                        <p className='text-center font-medium text-sm text-gray-500'>OR CONTINUE WITH</p>
                    </div>

                    <div className="loginWithGoogleAndGithub">
                        <h1 className='text-lg font-medium text-gray-700'>Login with google and Github</h1>
                        <p className='text-sm'>Login in into just few steps </p>
                        <div className='py-4 grid grid-flow-col gap-4'>
                            <Button name="Google" icon={<FaGoogle  className='mr-2'/>}/>
                            <Button name="GitHub" icon={<FaGithub  className='mr-2'/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;