import React from 'react'

export const Settings = () => {
    return (
        <div className='account-settings'>
            <h3 className="account-settings-title"> </h3>
            <form className='account-settings-form' method='POST'>
                <label>
                    First name
                    <input className='account-settings-last-name' type="text" placeholder='' autoCapitalize='off' />
                </label>
                <label>
                    Last Name
                    <input className='account-settings-first-name' type="text" placeholder='' autoCapitalize='off' />
                </label>
                <label>
                    Email
                    <input className='account-settings-email' type="email" placeholder='' autoCapitalize='off' />
                </label>
                <label>
                    Phone Number
                    <input className='account-settings-phone-number' type="tel" placeholder='' autoCapitalize='off' />
                </label>
                <button className='account-settings-btn' type='submit'>Save Changes</button>
            </form>

            <div className="account-settings-avatar">
                <img className='account-settings-img' src="" alt="avatar" />
                <input className='account-settings-img-file' type="file" />
            </div>
        </div>
    )
}
