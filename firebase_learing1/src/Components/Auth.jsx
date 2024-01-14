import React from 'react'
import Button from './UI/Button';

function Auth() {
    return (
        <div className='h-screen border flex flex-col items-center justify-center'>
            <div className="loginCard w-96 border p-5 rounded">
                <h1 className='text-center text-3xl font-bold text-gray-700'>Login User</h1>
                <div className="col h-48 flex flex-col justify-evenly">
                    <div className="row">
                        <label htmlFor="email" className='text-gray-700 font-semibold'>Email</label>
                        <input className='border border-gray-400 rounded py-2 pl-2 w-full' type="text" placeholder='abcd@gmail.com' />
                    </div>
                    <div className="row">
                        <label htmlFor="password" className='text-gray-700 font-semibold'>Password</label>
                        <input className='border border-gray-400 rounded py-2 pl-2 w-full' type="password" placeholder='Password..' />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="submit font-medium text-lg">
                        <Button name={"Login"}/>
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
                            <Button name="Google"/>
                            <Button name="GitHub"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;