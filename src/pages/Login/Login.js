import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import Eye from '../../assets/images/eye.png';
import HedeEye from '../../assets/images/hide-eye.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/Firebase/firebase';

export const Login = () => {
const [eye, setEye] = useState(false)

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
// const [forgitPassword, setForgitPassword] = useState('');

const handlerSubmit = (evt) =>{
    evt.preventDefault();
        signInWithEmailAndPassword(auth,email, password)
        .then((user) => {
            setError("")
            setEmail("")
            setPassword("")
            console.log(user);
        })
        .catch(erro => {
            console.log(erro.code)
            console.log(erro.message)
            setError("Bunaqa account mavjud emas")
            if(erro.code === "auth/invalid-password"){
                console.log("Xato");
            }
        })
}
    return (
        <div className='container'>
            <div className="login">
                <div className="login-wrap">
                    <h3 className="login-title">Sign In</h3>
                    <form onSubmit={handlerSubmit} className='login-form' method="POST">
                        <input onChange={(evt) => setEmail(evt.target.value)} className='email-input' type="email" name="email" placeholder='Email' required/>
                        <label className='passwor-eye-wrap'>
                            <input onChange={(evt) => setPassword(evt.target.value)} className='passwor-input' type={eye ? "text" : "password"} name='password' placeholder='Password' required/>
                            <img src={eye ? HedeEye : Eye} onClick={() => setEye(!eye)} className='eye' alt='eye'></img>
                        </label>
                        <div>
                        <span className='error'>{error}</span>
                        </div>
                        <div className='login-check'>
                            <label className='check-wrap'>
                                <input className='check-input' type="checkbox" />
                                Remember me
                            </label>
                            <button onClick={() => console.log("Forgit password")} className='forget-password' type='button'>Forget Password</button>
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

