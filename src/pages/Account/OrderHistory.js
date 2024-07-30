import React, { useEffect, useState } from 'react';
import "./orderhistory.css";
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export const OrderHistory = () => {

    const items =[
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
            id: 7334525428,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 734532528,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 734532358,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 713228,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 7324328,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73267838,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 76813228,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 7324368528,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 732678738,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 768136228,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73243685258,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73224308,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 790323528,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73678238,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 71683228,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73243867828,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 732686567838,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 768234213228,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 732425434368528,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 73267435348738,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 76813663464228,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
        {
            id: 732436852234258,
            date : "22 Oct, 2020",
            total : "$135.00 (15 Products)",
            status : "Processing"
        },
    ];

    const itemsPerPage = 7;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    
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
                {currentItems.map(order => (
                    <li key={order.id} className="order-history-item">
                        <span className='order-history-item-id'>#{order.id}</span>
                        <span className='order-history-item-data'>{order.date}</span>
                        <span className='order-history-item-total'>{order.total}</span>
                        <span className='order-history-item-status'>{order.status}</span>
                        <Link to={'/'} className='order-history-item-link'>View Details</Link>
                    </li>
                ))}
            </ul>
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                nextLabel={ <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.0835 1.16634L6.91683 6.99967L1.0835 12.833" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>}
                previousLabel={ <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.9165 1.16634L1.08317 6.99967L6.9165 12.833" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName='page-num'
                previousLinkClassName='page-prev'
                nextLinkClassName='page-next'
                activeLinkClassName='page-active'
            />
        </div>
    )
}
