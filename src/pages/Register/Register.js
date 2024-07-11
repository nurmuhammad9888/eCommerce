import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "../Login/login.css";
import "./register.css";
import Eye from '../../assets/images/eye.png';
import HedeEye from '../../assets/images/hide-eye.png';

export const Register = () => {
    const [eye, setEye] = useState(false)
    const [confirmeye, setConfirmEye] = useState(false)
    return (
        <div className='container'>
        <div className="login">
            <div className="login-wrap">
                <h3 className="login-title">Create Account</h3>
                <form className='login-form' method="POST">
                    <input className='email-input' type="email" name="email" placeholder='Email' required/>
                    <label className='passwor-eye-wrap'>
                        <input className='passwor-input' type={eye ? "text" : "password"} name='password' placeholder='Password' required/>
                        <img src={eye ? HedeEye : Eye} onClick={() => setEye(!eye)} className='eye' alt='eye'></img>
                    </label>
                    <div>
                        <label className='passwor-eye-wrap'>
                            <input className='passwor-input' type={confirmeye ? "text" : "password"} name='confirm_password' placeholder='Confirm Password' required/>
                            <img src={confirmeye ? HedeEye : Eye} onClick={() => setConfirmEye(!confirmeye)} className='eye' alt='confirmeye'></img>
                        </label>
                    </div>
                    <div className='login-check'>
                        <label className='check-wrap'>
                            <input className='check-input' type="checkbox" />
                            Accept all terms & Conditions
                        </label>
                        
                    </div>
                    <button className='btn-send' type='submit'>Create Account</button>
                </form>
                <div className='account-login-register'>
                    <span className='account-login-text'>Already have account</span>
                    <Link className='account-login-link' to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

