import React from 'react'
import Button from './UI/Button';

function Auth() {
    return (
        <div className='h-screen border border-red-600 flex flex-col items-center justify-center'>
            <div className="loginCard w-96 border p-5 rounded">
                <h1 className='text-center text-3xl font-bold'>Login User</h1>
                <div className="col h-48 flex flex-col justify-evenly">
                    <div className="row">
                        <label htmlFor="email" className='text-gray-700 font-medium'>Email</label>
                        <input className='border border-gray-500 rounded py-2 pl-2 w-full' type="text" placeholder='abcd@gmail.com' />
                    </div>
                    <div className="row">
                        <label htmlFor="password" className='text-gray-700 font-medium'>Password</label>
                        <input className='border border-gray-500 rounded py-2 pl-2 w-full' type="password" placeholder='Password..' />
                    </div>
                </div>
                <div className="row border border-gray-600 bg-blue-600 text-white p-1 text-center rounded">
                    <div className="submit font-medium text-lg">Login</div>
                </div>

                <div className="loginWithOther ">
                    <div className="supporterWithIn py-5">
                        <p className='text-center font-medium text-sm'>OR CONTINUE WITH</p>
                    </div>

                    <div className="loginWithGoogleAndGithub">
                        <h1 className='text-xl font-medium'>Login with google and firebase</h1>
                        <p className='text-sm'>Login in into just few steps </p>
                        <div className='py-4 flex justify-evenly'>
                            <Button className="w-full" name="Google"/>
                            <Button className="w-full" name="GitHub"/>
                        </div>
                    </div>
                </div>



                {/* <Button/> */}
            </div>
        </div>
    )
}

export default Auth;