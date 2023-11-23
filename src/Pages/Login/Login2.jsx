import React from 'react'
import "./Login.css"
import {Link} from 'react-router-dom';

import logo from '../../img/Logo.png';
import profileIcon from '../../img/loginIcon.png';

export default function MyLogin() {
    return (
        <>
            <img src={logo} alt="Logo" className="page-logo" />
            <div className="wrapper9">

                <form action="">
                    <img src={profileIcon} alt="Login Icon" className="login-icon" /> 
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="Password" placeholder="Password" required/>
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox"/>Remember me
                        </label>
                        <Link to="/ForgotPassword">Forgot password?</Link>
                    </div>

                    <button type="submit" className="btn9">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/NewUser">Register here</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}
