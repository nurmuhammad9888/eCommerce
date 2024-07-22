import React from 'react'
import userImg from "../../assets/images/userimg.jpg"
import "./dashboat.css";

export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="dashboard-user">
                <img className='dashboard-user-img' width={120} height={120} src={userImg} alt="user img" />
                <h3 className="dashboard-user-name">Dianne Russell</h3>
                <p className="dashboard-user-position">Customer</p>
                <button className='dashboard-user-btn'>Edit Profile</button>
            </div>
            <div className="dashboard-email">
                <span className='dashboard-email-title'>Billing Address</span>
                <h3 className="dashboard-email-user-name">Dainne Russell</h3>
                <address className='dashboard-email-address'> 4140 Parker Rd. Allentown, New Mexico 31134</address>
                <p className="dashboard-email-email">dainne.ressell@gmail.com</p>
                <span className='dashboard-email-tel'>(671) 555-0110</span>
                <button className='dashboard-email-btn'>Edit Address</button>
            </div>
        </div>
    )
}
