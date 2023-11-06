import React from 'react'
import { Link } from "react-router-dom";

import "./Login2.css"
import logo from '../../img/Logo.png';
import profileIcon from '../../img/loginIcon.png';

export default function Login() {

    return (
        <div className="mainContainerLogin2">
            <img className='LogoLogin2' src={logo} alt="Logo" />
            <div className="formContainer2">
                <form>
                    <div className='loginIconDiv2'>
                        <img className="loginIcon2" src={profileIcon} alt="Logo" />
                    </div>
                    <div className='inputField2'>
                        <label className="headLine2">Username</label>
                        <input className="textField2" type="text" placeholder=''/>
                    </div>
                    <div className='inputField2'>
                        <label className="headLine2">Password</label>
                        <input className="textField2" type="password" placeholder='Your password' />
                    </div>
                    <div className="LinkForgotPasswordDiv2">
                        <Link className="LinkForgotPassword2">Forgot Password?</Link>
                    </div>
                    <div className='Login2'>
                        <input type="submit" value="Login" className='LoginButton2' />
                        <label style={{ padding: "4px" }}>or</label>
                        <Link className="LinkForgotPassword2" style={{ paddingTop: "4px" }}>Create New Account</Link>
                    </div>
                </form>
            </div>
        </div>

    );
}