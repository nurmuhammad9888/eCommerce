import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./header.css"
import Logo from '../../assets/images/Logo.svg';

export const Header = () => {

const [activ ,setActiv] = useState(false)

    const handeler = () => {
        setActiv(!activ)
    }
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
                            <Link className='header-top-sigin' to={"/login"}>Sign In</Link>
                            <span className='header-top-left-line'>/</span>
                            <Link className='header-top-sigin' to={"/register"}>Sign Up</Link>
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
        <header className="header-select">
            <div className="container">
                <nav className='header-navbar'>
                    <ul className="header-list">
                        <li className="header-item">
                            <NavLink onClick={handeler} className={({isActive}) => isActive ? "header-link header-link-active " : "header-link"} to={"/"}>Home</NavLink>
                            {/* <div className={activ ? 'dropdown-content-active' : 'dropdown-content'}>
                                <NavLink className={({isActive}) => isActive ? "header-link header-link-active" : "header-link"} to={"/"}>Home</NavLink>
                                <NavLink className={({isActive}) => isActive ? "header-link header-link-active" : "header-link"} to={"/"}>Home</NavLink>
                            </div> */}
                        </li>
                        <li className="header-item">
                            <NavLink className={({isActive}) => isActive ? "header-link header-link-active" : "header-link"} to={"/shop"}>Shop</NavLink>
                        </li>
                        <li className="header-item">
                            <NavLink className={({isActive}) => isActive ? "header-link header-link-active" : "header-link"} to={"/pages"}>Pages</NavLink>
                        </li>
                        <li className="header-item">
                            <NavLink className={({isActive}) => isActive ? "header-link header-link-active" : "header-link"} to={"/blog"}>Blog</NavLink>
                        </li>
                        <li className="header-item">
                            <NavLink className={({isActive}) => isActive ? "header-link header-link-active" : "header-link"} to={"/about"}>About Us</NavLink>
                        </li>
                        <li className="header-item">
                            <NavLink className={({isActive}) => isActive ? "header-link header-link-active" : "header-link"} to={"/contact"}>Contact Us</NavLink>
                        </li>
                        <li className="header-item">
                            <NavLink className={({isActive}) => isActive ? "header-link header-link-active" : "header-link"} to={"/account"}>Account</NavLink>
                        </li>
                    </ul>
                    <div className="header-conatct">
                        <Link className='header-contact-link' to={"tel:2195550114"}>(219) 555-0114</Link>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}


