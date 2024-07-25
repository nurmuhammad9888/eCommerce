import React, { useEffect, useState } from 'react';
import "./orderhistory.css";
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Paginate } from '../Paginate/Paginate';

export const OrderHistory = () => {

    const orders =[
        {
            id: 738,
            date : "8 Sep, 2020",
            total : "$135.00 (5 Products)",
            status : "Processing"
        },
        {
            id: 703,
            date : "24 May, 2020",
            total : "$135.00 (4 Products)",
            status : "Processing"
        },
        {
            id: 73867,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73843,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 7381,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73812,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 7338,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73228,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
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
                {orders.map(order => (
                    <li key={order.id} className="order-history-item">
                        <span className='order-history-item-id'>#{order.id}</span>
                        <span className='order-history-item-data'>{order.date}</span>
                        <span className='order-history-item-total'>{order.total}</span>
                        <span className='order-history-item-status'>{order.status}</span>
                        <Link to={'/'} className='order-history-item-link'>View Details</Link>
                    </li>
                ))}
            </ul>
            <Paginate o />
        </div>
    )
}
