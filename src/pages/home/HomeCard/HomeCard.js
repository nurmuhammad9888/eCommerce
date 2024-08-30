import React from 'react'
import "./homecard.css"

import {assets} from '../../../assets/images/card'
import { Link } from 'react-router-dom';

export const HomeCard = () => {

    const popularData = [
        {
            id: "01",
            name: "Fresh Fruit",
            img: assets.popularhome01
        },
        {
            id: "02",
            name: "Fresh Vegetables",
            img: assets.popularhome02
        },
        {
            id: "03",
            name: "Meat & Fish",
            img: assets.popularhome03
        },
        {
            id: "04",
            name: "Snacks",
            img: assets.popularhome04
        },
        {
            id: "05",
            name: "Beverages",
            img: assets.popularhome05
        },
        {
            id: "06",
            name: "Beauty & Health",
            img: assets.popularhome06
        },
        {
            id: "07",
            name: "Bread & Bakery",
            img: assets.popularhome07
        },
        {
            id: "08",
            name: "Baking Needs",
            img: assets.popularhome08
        },
        {
            id: "09",
            name: "Cooking",
            img: assets.popularhome09
        },
        {
            id: "10",
            name: "Diabetic Food",
            img: assets.popularhome10
        },
        {
            id: "11",
            name: "Dish Detergents",
            img: assets.popularhome11
        },
        {
            id: "12",
            name: "Oil",
            img: assets.popularhome12
        },
        
    ];

    
    return (
        <>
            <ul className='home-popular-card-list'>
                {
                    popularData.map((data, index) => (
                            <li className='home-popular-card-item' key={index}>
                                <Link className='home-popular-card-item-link' to={`/${data.id}`}>
                                    <img width={190} height={130} className='home-popular-card-img' src={data.img} alt={data.name} />
                                    <p className="home-popular-card-title">{data.name}</p>
                                </Link>
                            </li>
                    ))
                }
            </ul>
        </>
    )
}
