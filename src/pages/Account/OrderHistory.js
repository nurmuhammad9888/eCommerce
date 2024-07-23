import React from 'react'
import "./orderhistory.css";
import { Link } from 'react-router-dom';

export const OrderHistory = () => {
nb 
    const order =[
        {
            id: 738,
            date : "8 Sep, 2020",
            total : "$135.00",
            status : "Processing"
        },
        {
            id: 703,
            date : "24 May, 2020",
            total : "$25.00",
            status : "Processing"
        },
        {
            id: 738,
            date : "22 Oct, 2020",
            total : "$250.00",
            status : "Processing"
        },
    ];

    return (
        <div className='order-history'>
            <div className="order-history-title-wrap">
                <h3 className="order-history-title">Recet Order History</h3>
                <Link className='order-history-link' to={"/"} >View All</Link>
            </div>
            <div className="order-table-hedaer-wrap">
                <p className="order-table-hedaer">Order ID</p>
                <p className="order-table-hedaer">Date</p>
                <p className="order-table-hedaer">Total</p>
                <p className="order-table-hedaer">Status</p>
                <p className="order-table-hedaer"></p>
            </div>
            <ul className="order-history-list">
                <li className="order-history-item">
                    <span className='order-history-item-id'></span>
                    <span className='order-history-item-data'></span>
                    <span className='order-history-item-total'></span>
                    <span className='order-history-item-status'></span>
                    <Link to={'/'} className='order-history-item-id'>View Details</Link>
                </li>
            </ul>
        </div>
    )
}
