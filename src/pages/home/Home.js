import React from 'react'
import "./home.css"
import { Link, NavLink } from 'react-router-dom';
import { SupportCard } from "./SupportCard/SupportCard";
import { HomeTitle } from './HomeTitle';
import { HomeCard } from './HomeCard/HomeCard';

export default function Home() {
    return (
        <div className='container'>
            <section className="home-wrap">
                <div className="home-left">
                    <h1 className="home-left-title">Fresh & Healthy Organic Food</h1>
                    <p className="home-left-sale">Sale up to<span className='home-left-percentage'>30% OFF</span></p>
                    <p className="home-left-text-order">Free shipping on all your order.</p>
                    <Link className="home-left-btn home-btn" to="/">Shop now</Link>
                </div>
                <ul className="home-right-list">
                    <li className="home-right-bottom-item">
                        <h2 className="home-right-title">Summer Sale</h2>
                        <p className="home-right-sale">75% OFF</p>
                        <p className="home-right-text">Only Fruit & Vegetable</p>
                        <Link className='home-right-btn home-btn' to="/">Shop Now</Link>
                    </li>
                    <li className="home-right-bottom-item">
                        <h3 className="home-right-bottom-title">Best Deal</h3>
                        <p className="home-right-bottom-text">Special Products Deal of the Month</p>
                        <Link className='home-right-bottom-btn home-btn' to="/">Shop Now</Link>
                    </li>
                </ul>
            </section>
            <section className='home-support'>
                <SupportCard/>
            </section>
            <section className='home-popular-wrap'>
                <HomeTitle title="Popular Categories" link="/all" />
                <HomeCard />
            </section>
        </div>
    )
}
