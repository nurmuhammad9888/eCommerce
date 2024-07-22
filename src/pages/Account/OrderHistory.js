import React from 'react'
import "./orderhistory.css";

export const OrderHistory = () => {

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

        </div>
    )
}
