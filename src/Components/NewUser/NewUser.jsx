import React from 'react'
import "./NewUser.css"
import {Link} from 'react-router-dom';


import logo from '../../img/Logo.png';


export function NewUser() {
    return (
    <>
        <Link to="/myLogin">
            <img src={logo} alt="Logo" className="page-logo"/> 
        </Link>
        <div className="wrapper">

            <form action="">
                <h1>Create Your Account</h1>

                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>

                <div className="input-box">
                    <input type="Password" placeholder="Repeat Password" required/>
                </div>

                <button type="submit" className="btn">Create New Account</button>
            </form>
        </div>
    </>
    )
}
