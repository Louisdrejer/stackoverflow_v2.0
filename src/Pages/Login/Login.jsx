import React from 'react'
import { Link } from "react-router-dom";

import "./Login.css"
import logo from '../../img/Logo.png';
import profileIcon from '../../img/loginIcon.png';

export default function Login() {

    return (
        <div className="mainContainerLogin">
            <img className='LogoLogin' src={logo} alt="Logo" />
            <div className="formContainer">
                <form>
                    <div className='loginIconDiv'>
                        <img className="loginIcon" src={profileIcon} alt="Logo" />
                    </div>
                    <div className='inputField'>
                        <label className="headLine">Username</label>
                        <input className="textField" type="text" placeholder='Enter your username'/>
                    </div>
                    <div className='inputField'>
                        <label className="headLine">Password</label>
                        <input className="textField" type="password" placeholder='Enter your password' />
                    </div>
                    <div className="LinkForgotPasswordDiv">
                        <Link className="LinkForgotPassword">Forgot Password?</Link>
                    </div>
                    <div className='Login'>
                        <input type="submit" value="Login" className='LoginButton' />
                        <label style={{ padding: "4px" }}>or</label>
                        <Link className="LinkForgotPassword" style={{ paddingTop: "4px" }}>Create New Account</Link>
                    </div>
                </form>
            </div>
        </div>

    );
}