import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "../Login/login.css";
import "./register.css";
import Eye from '../../assets/images/eye.png';
import HedeEye from '../../assets/images/hide-eye.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/Firebase/firebase';

export const Register = () => {
    const [eye, setEye] = useState(false);
    const [confirmeye, setConfirmEye] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');
    const [error, setError] = useState('');

    const handlerSubmit = (evt) =>{
        evt.preventDefault();
            if(copyPassword === password){
                createUserWithEmailAndPassword(auth,email, password)
                .then((user) => {
                    setError("")
                    setEmail("")
                    setPassword("")
                    setCopyPassword("")
                    console.log(user);
                })
                .catch(erro => console.log(erro))
            }else{
                setError("Passowrd didn't match")
            }

    }
    return (
        <div className='container'>
        <div className="login">
            <div className={error ? "login-wrap login-wrap-rigester login-wrap-rigester-error": "login-wrap login-wrap-rigester"}>
                <h3 className="login-title">Create Account</h3>
                <form onSubmit={handlerSubmit} className='login-form' method="POST">
                    <input onChange={(evt) => setEmail(evt.target.value)} className='email-input' type="email" name="email" placeholder='Email' required/>
                    <label className='passwor-eye-wrap'>
                        <input onChange={(evt) => setPassword(evt.target.value)} className='passwor-input' type={eye ? "text" : "password"} name='password' placeholder='Password' minLength={6} max={19} required/>
                        <img src={eye ? HedeEye : Eye} onClick={() => setEye(!eye)} className='signneye' alt='eye'></img>
                    </label>
                    <div>
                        <label className='passwor-eye-wrap'>
                            <input onChange={(evt) => setCopyPassword(evt.target.value)} className={error ? 'passwor-input passwor-input-error' : 'passwor-input'} type={confirmeye ? "text" : "password"} name='confirm_password' placeholder='Confirm Password' minLength={6} max={19} required/>
                            <img src={confirmeye ? HedeEye : Eye} onClick={() => setConfirmEye(!confirmeye)} className='signneye' alt='confirmeye'></img>
                        </label>
                    </div>
                    <span className='error'>{error}</span>
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

