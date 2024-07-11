import React from 'react'
import './navbarlocation.css';
import HomeLocation from "../../assets/images/home-navbar.png"

export const NavbarLocation = () => {
    return (
        <div className='navbarlocation'>
            <div className="container">
                <div className="navbarlocation-wrap">
                    <img className='navbarlocation-img' src={HomeLocation} width={24} height={24} alt="home icon" />
                </div>
            </div>
        </div>
    )
}


