import React from 'react'
import { useState } from 'react';
import "./Login.css"
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
import logo from '../../img/Logo.png';
import profileIcon from '../../img/loginIcon.png';
import Parse from 'parse';

export default function MyLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

   const handleLogin = async (username, pw) => {
       var user = Parse.User.logIn(username, pw).then(function(user) {
          navigate('/Questions');
       }).catch(function(error) {
          console.log("Error: " + error.code + " " + error.message);
        });
      };

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(username, password);
      };

    return (
        <>
        <div className="login_bg">
            <Link to="/"><img src={logo} alt="Logo" className="page-logo" /></Link>
            <div className="wrapper9">

                <form onSubmit={onSubmit} style={{width: "80%", marginLeft: "10%"}}>
                    <img src={profileIcon} alt="Login Icon" className="login-icon" /> 
                    <div className="input-box1">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box1">
                        <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                    <label className="checkbox-label">
                        <input className="checkBox" type="checkbox"  />
                        <span className="custom-checkbox"></span>
                            Remember me
                    </label>
                        <Link to="/ForgotPassword">Forgot password?</Link>
                    </div>

                    <button type="submit" className="btn9">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/NewUser">Register here</Link></p>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}
