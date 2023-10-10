import React from 'react'
import { Link } from "react-router-dom";

import "./Login.css"
import logo from '../../img/Logo.png';
import profileIcon from '../../img/loginIcon.png';

export default function Login() {
  
    return (
        <div className="mainContainerLogin">
            <div className="topBar">
                <img src={logo} alt="Logo" style={{padding: "16px", maxWidth: "440px"}}/>
            </div>
            <div className="mainContainerLoginRow">
                <div className="formContainer">
                    <form>
                        <div className='loginIconDiv'>
                            <img className="loginIcon" src={profileIcon} alt="Logo" />
                        </div>
                        <div className='inputField'>
                            <label className="headLine">Username</label>
                            <input className="textField" type="text" />
                        </div>
                        <div className='inputField'>
                            <label className="headLine">Password</label>
                            <input className="textField" type="password" />
                        </div>
                        <div className="LinkForgotPasswordDiv">
                            <Link className="LinkForgotPassword">Forgot Password?</Link>
                        </div>
                        <div className='Login'>
                            <input type="submit" value="Login" className='LoginButton'/>
                            <label style={{ paddingTop: "8px"}}>or</label>
                            <Link className="LinkForgotPassword" style={{ paddingTop: "8px"}}>Create New Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}