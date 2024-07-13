import React from 'react'
import './error404.css';
import ErrorImg from "../../assets/images/404page.png"
import { Link } from 'react-router-dom';

export const Error404 = () => {
    return (
        <div className='container'>
            <div className="error-page-wrap">
                <div className="error-page">
                    <img src={ErrorImg} width={583} height={354} alt="error img 404" />
                    <h3 className='error-page-title'>Oops! page not found</h3>
                    <p className="error-page-content">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
                    <Link className='error-page-link' to={'/'}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
