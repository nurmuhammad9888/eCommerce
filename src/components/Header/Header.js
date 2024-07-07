import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import Logo from '../../assets/images/Logo.svg';

export const Header = () => {
    return (
        <>
        <div className='line'>
            <div className='container'>
                <div className="header-top">
                    <span className='header-top-location'>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                    <div className="header-top-form-wrap">
                        <div className="header-top-select">
                            <select className='header-top-select-selct' name='lang'>
                                <option value="en">Eng</option>
                                <option value="uz">Uzb</option>
                                <option value="ru">Ru</option>
                            </select>
                            <select className='header-top-select-selct' name='usd'>
                                <option value="usd">USD</option>
                                <option value="sum">SUM</option>
                                <option value="rub">RUB</option>
                            </select>
                        </div>
                        <span className='header-top-line'></span>
                        <div className="header-top-sigin-wrap">
                            <Link className='header-top-sigin' to={"/signin"}>Sign In</Link>
                            <span className='header-top-left-line'>/</span>
                            <Link className='header-top-sigin' to={"/signup"}>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="header">
                <Link to={"/"}><img src={Logo} width={183} height={38} alt="site-logo"/></Link>
                <form method='POST' className="header-serach-form">
                    <label htmlFor='search-id' className='header-serach-icon'></label>
                    <input className='header-search' id='search-id' type="search" placeholder='Search' />
                    <button className='header-serach-btn'>Search</button>
                </form>
                <div className="header-shopping">
                    <button className='like-btn'></button>
                    <span className='header-line'></span>
                    <div className="header-shopping-cart-wrap">
                        <button className='header-shopping-cart'><span className='header-shopping-cart-count'>2</span></button>
                        <span className='header-shopping-cart-text'>Shopping cart: <br /> <strong className='header-shopping-cart-price'>$57.00</strong> </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


