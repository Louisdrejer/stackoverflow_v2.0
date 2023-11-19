import React from 'react'
import "./myLogin.css"
import {Link} from 'react-router-dom';

export function MyLogin() {
    return (
        <>
            <div className="wrapper">

                <form action="">
                    <h1>Login</h1>
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

                    <button type="submit" className="btn">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/NewUser">Register</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}