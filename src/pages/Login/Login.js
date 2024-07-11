import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import Eye from '../../assets/images/eye.png';
import HedeEye from '../../assets/images/hide-eye.png';

export const Login = () => {
const [eye, setEye] = useState(false)

    return (
        <div className='container'>
            <div className="login">
                <div className="login-wrap">
                    <h3 className="login-title">Sign In</h3>
                    <form className='login-form' method="POST">
                        <input className='email-input' type="email" name="email" placeholder='Email' required/>
                        <label className='passwor-eye-wrap'>
                            <input className='passwor-input' type={eye ? "text" : "password"} name='password' placeholder='Password' required/>
                            <img src={eye ? HedeEye : Eye} onClick={() => setEye(!eye)} className='eye' alt='eye'></img>
                        </label>
                        <div className='login-check'>
                            <label className='check-wrap'>
                                <input className='check-input' type="checkbox" />
                                Remember me
                            </label>
                            <button className='forget-password' type='button'>Forget Password</button>
                        </div>
                        <button className='btn-send' type='submit'>Login</button>
                    </form>
                    <div className='account-login-register'>
                        <span className='account-login-text'>Don’t have account?</span>
                        <Link className='account-login-link' to={'/register'}> Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

