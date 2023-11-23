import React from 'react'
import './NewUser.css'
import arrow from '../../img/arrow.svg';

export default function NewUser() {
    return (
        <div className="wrapper10">
        
        <button className="back-button1" onClick={() => window.history.back()}>
                <img src={arrow} alt="Back" />
        </button>
        
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

                <button type="submit" className="btn10">Create New Account</button>
            </form>
        </div>
    )
}