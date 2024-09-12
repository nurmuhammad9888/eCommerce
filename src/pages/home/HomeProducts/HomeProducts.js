import React from 'react'
import { Link } from 'react-router-dom';
import "./homeproducts.css"
export const HomeProducts = ({homeProducts}) => {
    
    return (
            <ul className='home-products-card-list'>
                {
                    homeProducts.map((data, index) => (
                        <li className='home-products-card-item' key={index}>
                            <Link className='home-products-card-item-link' to={`/${data.id}`}>
                                <img width={264} height={240} className='home-products-card-img' src={data.productImage} alt={data.name} />
                                <div className='home-products-card-content'>
                                    <h4 className="home-products-card-title">{data.productsName}</h4>
                                    <div className='home-products-card-price-wrap'>
                                        <p className="products-card-item-price"> {data.price} <span className='products-card-item-oldPrice'> {data?.oldPrice} </span></p>
                                        <span className='products-card-item-shop-icon'>
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                    <img src={data.star_icon} className='home-products-card-star-icon' alt='img'></img>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
    )
}
