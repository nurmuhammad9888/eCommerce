import React, { useState } from 'react'
import "./settings.css"
import userImgAvatar from "../../assets/images/settingsavatrar.jpg"
import Eye from '../../assets/images/eye.png';
import HedeEye from '../../assets/images/hide-eye.png';

export const Settings = () => {

    const [currentPasswordEye, setCurrentPasswordEye] = useState(false);
    const [confirmeye, setConfirmEye] = useState(false);
    const [newPasswordEye, setNewPasswordEye] = useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');
    const [error, setError] = useState('');

    const handlerSubmit = (evt) =>{
        evt.preventDefault();
            
    }

    return (
        <div className="settings-wrap">
            <div className='account-settings'>
                <h3 className="account-settings-title">Account Settings </h3>
                <div className='account-settings-wrap'>
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
                        <button className='account-settings-btn settings-btn' type='submit'>Save Changes</button>
                    </form>
                    <div className="account-settings-avatar">
                        <img className='account-settings-img' src={userImgAvatar} width={224} height={224} alt="avatar" />
                        <label className='account-settings-avatar-label'>
                            Save Changes
                            <input className='account-settings-img-file' type="file" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="account-settings settings-address">
                <h3 className="account-settings-title">Billing Address </h3>
                <form className='account-settings-form'>
                    <div className='settings-address-user'>
                        <label className='account-settings-label account-address-label'>
                            First name
                            <input className='account-settings-input account-address-first-name' type="text" placeholder='First name' autoCapitalize='off' required />
                        </label>
                        <label className='account-settings-label account-address-label'>
                            Last Name
                            <input className='account-settings-input account-address-last-name' type="text" placeholder='Last Name' autoCapitalize='off' required />
                        </label>
                        <label className='account-settings-label account-address-label'>
                            Company Name (optional)
                            <input className='account-settings-input account-address-company-name' type="text" placeholder='Company Name' autoCapitalize='off' required />
                        </label>
                    </div>
                    <label className='account-settings-label'>
                        Street Address
                        <input className='account-settings-input account-settings-street-address' type="text" placeholder='Street Address' autoCapitalize='off' required />
                    </label>
                    <div className='settings-address-count'>
                        <label className='account-settings-label account-address-label'>
                            Country / Region
                            <select className='account-settings-input account-address-select'> 
                                <option value="United States">United States</option>
                                <option value="United States">United States</option>
                                <option value="United States">United States</option>
                                <option value="United States">United States</option>
                                <option value="United States">United States</option>
                            </select>
                        </label>
                        <label className='account-settings-label account-address-label'>
                            States
                            <select className='account-settings-input account-address-select'>
                                <option value="Washington DC">Washington DC</option>
                                <option value="Washington DC">Washington DC</option>
                                <option value="Washington DC">Washington DC</option>
                                <option value="Washington DC">Washington DC</option>
                                <option value="Washington DC">Washington DC</option>
                            </select>
                        </label>
                        <label className='account-settings-label account-address-label'>
                            Zip Code
                            <input className='account-settings-input account-settings-zip-code' type="text" placeholder='Company Name' autoCapitalize='off' required />
                        </label>
                    </div>
                    <div className='settings-address-user-email'>
                        <label className='account-settings-label account-address-label'>
                            Email
                            <input className='account-settings-input account-address-email' type="email" placeholder='Email' autoCapitalize='off' required />
                        </label>
                        <label className='account-settings-label account-address-label'>
                            Phone
                            <input className='account-settings-input account-address-phone-number' type="tel" placeholder='Phone' autoCapitalize='off' required />
                        </label>
                    </div>
                    <button className='account-settings-btn settings-btn' type='submit'>Save Changes</button>
                </form>
            </div>

            <div className="account-settings settings-passwor">
                <h3 className="account-settings-title">Change Password </h3>
                    <form onSubmit={handlerSubmit} className='account-settings-form' method='POST'>
                        <label className='account-settings-label passwor-eye-current-password'>
                        Current Password
                            <input onChange={(evt) => setPassword(evt.target.value)} className='account-settings-input account-current-password' type={currentPasswordEye ? "text" : "password"} placeholder='Password' autoCapitalize='off' required />
                            <img src={currentPasswordEye ? HedeEye : Eye} onClick={() => setCurrentPasswordEye(!currentPasswordEye)} className='eye' alt='eye'></img>
                        </label>
                        <div className='account-settings-password'>
                            <label className='account-settings-label account-address-label passwor-eye-new-password'>
                                New Password Password
                                <input onChange={(evt) => setCopyPassword(evt.target.value)} className='account-settings-input account-new-password' type={newPasswordEye ? "text" : "password"} placeholder='Password' autoCapitalize='off' required />
                            <img src={newPasswordEye ? HedeEye : Eye} onClick={() => setNewPasswordEye(!newPasswordEye)} className='eye' alt='eye'></img>
                            </label>
                            <label className='account-settings-label account-address-label passwor-eye-confirm-password'>
                                Confirm Password
                                <input onChange={(evt) => setCopyPassword(evt.target.value)} className='account-settings-input account-confirm-password' type={confirmeye ? "text" : "password"} placeholder='Password' autoCapitalize='off' required />
                            <img src={confirmeye ? HedeEye : Eye} onClick={() => setConfirmEye(!confirmeye)} className='eye' alt='eye'></img>
                            </label>
                        </div>
                        <button className='account-passwor-btn settings-btn' type='submit'>Change Password</button>
                    </form>
            </div>
        </div>
    )
}
