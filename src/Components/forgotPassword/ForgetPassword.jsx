import React from 'react'
import "./ForgetPassword.css"
export function ForgetPassword() {
    return (
        <div className="wrapper">

            <form action="">
                <h1>Find your <span style={{color:"#5A65EA"}}>StackIT</span> Account</h1>

                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                </div>

                <button type="" className="btn2">Send verification code</button>

                <p className="sendAgain">Did not receive it?</p>

                <button type="submit" className="btn2">Send verification code again</button>

                <div className="input-box">
                    <input type="text" placeholder="Verification Code" required/>
                </div>

                <div className="input-box">
                    <input type="Password" placeholder="Reset Password" required/>
                </div>

                <button type="submit" className="btn">RESET PASSWORD</button>
            </form>
        </div>
    )
}