import React from 'react'
import { Link } from "react-router-dom";

import "./Login.css"
import logo from '../../img/loginIcon.png';

export default function Login() {
  
    return (
        <div className="mainContainerLogin">
            <div className="topBar">
                <label className='LoginLogo'>LOGO</label>
            </div>
            <div className="mainContainerLoginRow">
                <div className="formContainer">
                    <form>
                        <div className='loginIconDiv'>
                            <img className="loginIcon" src={logo} alt="Logo" />
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