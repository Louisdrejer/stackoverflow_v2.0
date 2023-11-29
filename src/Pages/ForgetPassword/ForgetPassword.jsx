import React from 'react'
import './ForgetPassword.css'

import logo from '../../img/Logo.png';
import arrow from '../../img/arrow.svg';
import {Link} from 'react-router-dom';

export default function ForgetPassword() {
    return (
    <>
    <div className="forgot_bg">
        <Link to="/"><img src={logo} alt="Logo" className="page-logo" /></Link>
        <div className="wrapper11">

             <button className="back-button" onClick={() => window.history.back()}>
                <img src={arrow} alt="Back" />
            </button>

            <form action=""style={{width: "80%",marginLeft:"10%"}}>

                <h1>Reset your <span style={{color:"#5A65EA"}}>StackIT</span> password</h1>

                <div className="input-box3">
                    <input type="email" placeholder="Email" required/>
                </div>

                <button type="" className="sendCode">Send verification code</button>
                <button type="" className="sendAgain">Did not receive it? Send again</button>
               

                

                <div className="input-box3">
                    <input type="text" placeholder="Verification Code" required/>
                </div>

                <div className="input-box3">
                    <input type="Password" placeholder="Reset Password" required/>
                </div>

                <button type="submit" className="btn11">Reset password</button>
            </form>
        </div>
        </div>
    </>
    )
}