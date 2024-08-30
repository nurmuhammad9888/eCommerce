import React from 'react'
import { Link } from 'react-router-dom'

export const HomeTitle = ({title, link}) => {
    return (
        <div className='hometitle-wrap'>
            <h2 className='hometitle-title'>{title}</h2>
            <Link className='hometitle-link' to={link}>View All</Link>
        </div>
    )
}
