import React from 'react'
import "./settings.css"
import userImgAvatar from "../../assets/images/settingsavatrar.jpg"


export const Settings = () => {
    return (
        <div className='account-settings'>
            <div>
                <h3 className="account-settings-title">Account Settings </h3>
                <form className='account-settings-form' method='POST'>
                    <label className='account-settings-label'>
                        First name
                        <input className='account-settings-input account-settings-last-name' type="text" placeholder='First name' autoCapitalize='off' required />
                    </label>
                    <label className='account-settings-label'>
                        Last Name
                        <input className='account-settings-input account-settings-first-name' type="text" placeholder='Last Name' autoCapitalize='off' required />
                    </label>
                    <label className='account-settings-label'>
                        Email
                        <input className='account-settings-input account-settings-email' type="email" placeholder='Email' autoCapitalize='off' required />
                    </label>
                    <label className='account-settings-label'>
                        Phone Number
                        <input className='account-settings-input account-settings-phone-number' type="tel" placeholder='Phone' autoCapitalize='off' required />
                    </label>
                    <button className='account-settings-btn' type='submit'>Save Changes</button>
                </form>
            </div>

            <div className="account-settings-avatar">
                <img className='account-settings-img' src={userImgAvatar} width={224} height={224} alt="avatar" />
                <label className='account-settings-avatar-label'>
                    Save Changes
                    <input className='account-settings-img-file' type="file" />
                </label>
            </div>
        </div>
    )
}
