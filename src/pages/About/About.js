import React from 'react'
import "./about.css"
import aboutImg01 from "../../assets/images/aboutimg01.jpg"
import aboutOrganic from "../../assets/images/aboutimg02.jpg"

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
            <div className="about-organic">
                <div className="about-organic-img">
                    <img src={aboutOrganic} alt="humans" />
                </div>
                <div className="about-organic-content">
                    <div className="about-organic-content-text-wrap">
                        <h3 className="about-organic-title">100% Trusted Organic Food Store</h3>
                        <p className="about-organic-text">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </p>
                    </div>
                    <ul className="about-organic-list">
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">100% Organic food</h4>
                            <p className="about-organic-item-text">100% healthy & Fresh food.</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">Customer Feedback</h4>
                            <p className="about-organic-item-text">Our happy customer</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">Free Shipping</h4>
                            <p className="about-organic-item-text">Free shipping with discount</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">Great Support 24/7</h4>
                            <p className="about-organic-item-text">Instant access to Contact</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">100% Sucure Payment</h4>
                            <p className="about-organic-item-text">We ensure your money is save</p>
                        </li>
                        <li className="about-organic-item">
                            <h4 className="about-organic-item-title">100% Organic Food</h4>
                            <p className="about-organic-item-text">100% healthy & Fresh food.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
