import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import footerLogo from "../../assets/images/FooterLogo.png";
import applyPay from "../../assets/images/applePay.png";
import visaPay from "../../assets/images/visa.png";
import discoverPay from "../../assets/images/discover.png";
import secrurePay from "../../assets/images/securepaymnet.png";
import masterCard from "../../assets/images/mastercard.png";

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-wrap">
                    <div className="footer-left-conatent">
                        <Link className='footer-logo' to={"/"}> <img width={183} height={38} src={footerLogo} alt="footer logo" /> </Link>
                        <p className="footer-left-text">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <Link className='footer-left-tel' to={"tel:2195550114"}>(219) 555-0114</Link> <span className='footer-left-or'>or</span> <Link className='footer-left-email' to={"mailto:Proxy@gmail.com"}>Proxy@gmail.com</Link>
                    </div>
                    <ul className="footer-lsit">
                        <li className="footer-item">
                            <strong className='footer-item-bold'>My Account</strong>
                            <Link className='footer-item-link' to="/">My Account</Link>
                            <Link className='footer-item-link' to="/">Order History</Link>
                            <Link className='footer-item-link' to="/">Shoping Cart</Link>
                            <Link className='footer-item-link' to="/">Wishlist</Link>
                        </li>
                        <li className="footer-item">
                            <strong className='footer-item-bold'>Helps</strong>
                            <Link className='footer-item-link' to="/">Contact</Link>
                            <Link className='footer-item-link' to="/">Faqs</Link>
                            <Link className='footer-item-link' to="/">Terms & Condition</Link>
                            <Link className='footer-item-link' to="/">Privacy Policy</Link>
                        </li>
                        <li className="footer-item">
                            <strong className='footer-item-bold'>Proxy</strong>
                            <Link className='footer-item-link' to="/">About</Link>
                            <Link className='footer-item-link' to="/">Shop</Link>
                            <Link className='footer-item-link' to="/">Product</Link>
                            <Link className='footer-item-link' to="/">Track Order</Link>
                        </li>
                        <li className="footer-item">
                            <strong className='footer-item-bold'>Categories</strong>
                            <Link className='footer-item-link' to="/">Fruit & Vegetables</Link>
                            <Link className='footer-item-link' to="/">Meat & Fish</Link>
                            <Link className='footer-item-link' to="/">Bread & Bakery</Link>
                            <Link className='footer-item-link' to="/">Beauty & Health</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p className="footer-bottom-compname">Ecobazar eCommerce © 2021. All Rights Reserved</p>
                    <ul className="footer-bottom-list">
                        <li className="footer-bottom-item">
                            <Link to={"/"} className='footer-bottom-item-payments-link'><img src={applyPay} alt="apply pay" /></Link>
                        </li>
                        <li className="footer-bottom-item">
                            <Link to={"/"} className='footer-bottom-item-payments-link'><img src={visaPay} alt="visa pay" /></Link>
                        </li>
                        <li className="footer-bottom-item">
                            <Link to={"/"} className='footer-bottom-item-payments-link'><img src={discoverPay} alt="discover pay" /></Link>
                        </li>
                        <li className="footer-bottom-item">
                            <Link to={"/"} className='footer-bottom-item-payments-link'><img src={secrurePay} alt="mastercard pay" /></Link>
                        </li>
                        <li className="footer-bottom-item">
                            <Link to={"/"} className='footer-bottom-item-payments-link'><img src={masterCard} alt="secure payment" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

