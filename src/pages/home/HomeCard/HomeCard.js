import React from 'react'
import "./homecard.css"
import { Link } from 'react-router-dom';

export const HomeCard = ({popularData}) => {

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
