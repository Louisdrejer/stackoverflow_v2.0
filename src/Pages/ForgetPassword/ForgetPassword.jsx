import React from 'react'
import './ForgetPassword.css'

import logo from '../../img/Logo.png';
import arrow from '../../img/arrow.svg';

export default function ForgetPassword() {
    return (
    <>
        <img src={logo} alt="Logo" className="page-logo" />
        <div className="wrapper11">

             <button className="back-button" onClick={() => window.history.back()}>
                <img src={arrow} alt="Back" />
            </button>

            <form action="">

                <h1>Find your <span style={{color:"#5A65EA"}}>StackIT</span> Account</h1>

                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                </div>

                <button type="" className="btn11">Send verification code</button>
                <button type="" className="sendAgain">Did not receive it? Send again</button>
               

                

                <div className="input-box">
                    <input type="text" placeholder="Verification Code" required/>
                </div>

                <div className="input-box">
                    <input type="Password" placeholder="Reset Password" required/>
                </div>

                <button type="submit" className="btn11">Reset password</button>
            </form>
        </div>
    </>
    )
}