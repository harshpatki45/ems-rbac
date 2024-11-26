import React, { useState } from 'react'
import backgroundImage from "../Auth/display.jpg"

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex h-screen w-screen p-10  items-center justify-center  bg-cover bg-center'  style={{ backgroundImage: `url(${backgroundImage})` }} >
        
        <div className=' border-none rounded-xl bg-white bg-opacity-30 backdrop-blur-md p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center text-gray-800'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-white bg-opacity-30 backdrop-blur-md  border-none font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-600 ' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-white bg-opacity-30 backdrop-blur-md  border-none font-medium text-lg py-2 px-6 mt-5 rounded-full placeholder:text-gray-600 ' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none hover:bg-brown-700 font-semibold bg-brown-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
            
        </div>
       
        
    </div>
  )
}

export default Login