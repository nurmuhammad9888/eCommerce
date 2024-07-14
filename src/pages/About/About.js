import React from 'react'
import "./about.css"
import aboutImg01 from "../../assets/images/aboutimg01.jpg"
export const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-trusted">
                    <div className="about-trusted-content">
                        <h3 className="about-trusted-title">100% Trusted Organic Food Store</h3>
                        <p className="about-trusted-text">Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae. </p>
                    </div>
                    <img className='about-trusted-img' src={aboutImg01} width={716} height={492} alt="humans" />
                </div>
            </div>
        </div>
    )
}
