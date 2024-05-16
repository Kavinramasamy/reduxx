import React, { useState } from 'react'
import user_icon from './image/user_icon.png';
import email_icon from './image/email_icon.png';
import password_icon from './image/password_icon.png';
import './loginPage.css';

const LoginPage = () => {

    const [action, setAction] = useState("Sign Up")
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    {action}
                </div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt='' />
                    <input type='text' placeholder='Name' />
                </div>
                <div className='input'>
                    <img src={email_icon} alt='' />
                    <input type='email' placeholder='E-mail' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='password' />
                </div>
            </div>
            <div className='forget-password'>forget password<span>Click here</span></div>
            <div className='submit-container'>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign-up") }}>Sign-up </div>
                <div className={action === "Sign-up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login </div>
            </div>
        </div>

    )
}

export default LoginPage
