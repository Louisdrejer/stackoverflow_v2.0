import React from 'react'
import "./ForgetPassword.css"
import {Link} from 'react-router-dom';

import logo from '../../img/Logo.png';

export function ForgetPassword() {
    return (
    <>
        <Link to="/">
            <img src={logo} alt="Logo" className="page-logo"/> 
        </Link>
        <div className="wrapper">

            <form action="">
                <h1>Find your <span style={{color:"#5A65EA"}}>StackIT</span> Account</h1>

                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                </div>

                <button type="" className="btn2">Send verification code</button>

                <p className="sendAgain">Did not receive it?</p>

                <button type="submit" className="btn2">Send verification code again</button>

                <div className="input-box">
                    <input type="text" placeholder="Verification Code" required/>
                </div>

                <div className="input-box">
                    <input type="Password" placeholder="Reset Password" required/>
                </div>

                <button type="submit" className="btn">RESET PASSWORD</button>
            </form>
        </div>
    </>
    )
}