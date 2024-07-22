import React from 'react'
import "./account.css";
import { NavLink } from 'react-router-dom';
import { Dashboard } from './Dashboard';


export const Account = () => {
    return (
        <div className='account'>
            <div className="container">
                <div className="dashboard-navigation">
                    <ul className="dashboard-navigation-list">
                        <li className="dashboard-navigation-item">
                            <h3 className='navigation-item-title'>Navigation</h3>
                        </li>
                        <li className="dashboard-navigation-item">
                            <NavLink className={({isActive}) => isActive ? 'navigation-item-link dashboard-navigation-item-active' : 'navigation-item-link'} to={"dashboard"}>Dashboard</NavLink>
                        </li>
                        <li className="dashboard-navigation-item">
                            <NavLink className={({isActive}) => isActive ? 'navigation-item-link dashboard-navigation-item-active' : 'navigation-item-link'} to={"orderhistory"}>Order History</NavLink>
                        </li>
                        <li className="dashboard-navigation-item">
                            <NavLink className={({isActive}) => isActive ? 'navigation-item-link dashboard-navigation-item-active' : 'navigation-item-link'} to={"wishlist"}>Wishlist</NavLink>
                        </li>
                        <li className="dashboard-navigation-item">
                            <NavLink className={({isActive}) => isActive ? 'navigation-item-link dashboard-navigation-item-active' : 'navigation-item-link'} to={"shoppingcart"}>Shopping Cart</NavLink>
                        </li>
                        <li className="dashboard-navigation-item">
                            <NavLink className={({isActive}) => isActive ? 'navigation-item-link dashboard-navigation-item-active' : 'navigation-item-link'} to={"settings"}>Settings</NavLink>
                        </li>
                        <li className="dashboard-navigation-item">
                            <NavLink className={({isActive}) => isActive ? 'navigation-item-link dashboard-navigation-item-active' : 'navigation-item-link'} to={"logout"}>Log-out</NavLink>
                        </li>
                    </ul>
                    <div className="dashboard-user-wrap">
                        <Dashboard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
