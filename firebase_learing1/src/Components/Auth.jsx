import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './UI/Button';
import Input from './UI/Input';
import {authUser} from '../common/AuthContext'

//fire base module
import {auth, googleProvider} from './../firebase/config'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";

function Auth() {
    const navigation = useNavigate();
    const [userData, setUserData]= useState();

    const {userInfo, userLogin}  = authUser();

    function getUserData(e){
        e.preventDefault();
        setUserData({
            ...userData, [e.target.name] : e.target.value,
        })
    }


    // signin with email and password using firebase
    async function create_userRegister(e){
        e.preventDefault();
        try{
            const result = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            // const userInfo = {
            //     email: auth?.currentUser?.email,
            //     accessToken: auth?.currentUser?.accessToken,
            //     uid: auth?.currentUser?.uid
            // }
            userLogin(
                {email: auth?.currentUser?.email,
                accessToken: auth?.currentUser?.accessToken,
                uid: auth?.currentUser?.uid}
            );
            navigation('/')
        }catch(err){
            console.error(err, err.message);
        }
    };


    async function create_userRegisterWithGoogle(e){
        e.preventDefault();
        try{
            const result = await signInWithPopup(auth, googleProvider);
            console.log("userInfomation inside the Auth -> : ",auth?.currentUser);
            userLogin(auth?.currentUser);
            navigation('/')
        }catch(err){
            console.error(err, err.message);
        }
    }


    return (
        <div className='h-screen border flex flex-col items-center justify-center'>
            <div className="loginCard w-96 border p-5 rounded">
                <h1 className='text-center text-3xl font-bold text-gray-700'>Create an Account</h1>
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
                        <Button click={create_userRegister} name={"SignUp"} clName={'border border-gray-600 py-2 px-4 text-center rounded-md bg-gray-800 text-white font-medium w-full flex items-center justify-center'}/>
                    </div>
                </div>

                <div className="loginWithOther ">
                    <div className="supporterWithIn py-5">
                        <p className='text-center font-medium text-sm text-gray-500'>OR CONTINUE WITH</p>
                    </div>

                    <div className="loginWithGoogleAndGithub">
                        <h1 className='text-lg font-medium text-gray-700'>Create account with google and Github</h1>
                        <p className='text-sm'>Create an account into just few steps </p>
                        <div className='py-4 grid grid-flow-col gap-4'>
                            <Button 
                                click={create_userRegisterWithGoogle} 
                                name="Google" 
                                icon={<FaGoogle className='mr-2'/>} 
                                clName={'border border-gray-600 py-2 px-4 text-center rounded-md bg-gray-800 text-white font-medium w-full flex items-center justify-center'}
                            />
                            <Button 
                                name="GitHub" 
                                icon={<FaGithub  className='mr-2'/>}
                                clName={'border border-gray-600 py-2 px-4 text-center rounded-md bg-gray-800 text-white font-medium w-full flex items-center justify-center'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;