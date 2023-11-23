import React from 'react'
import './ForgetPassword.css'
export default function ForgetPassword() {
    return (
        <div className="wrapper11">

            <form action="">
                <h1>Find your <span style={{color:"#5A65EA"}}>StackIT</span> Account</h1>

                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                </div>

                <button type="" className="btn11">Send verification code</button>

                <p className="sendAgain">Did not receive it?</p>

                <button type="submit" className="btn11">Send verification code again</button>

                <div className="input-box">
                    <input type="text" placeholder="Verification Code" required/>
                </div>

                <div className="input-box">
                    <input type="Password" placeholder="Reset Password" required/>
                </div>

                <button type="submit" className="btn11">RESET PASSWORD</button>
            </form>
        </div>
    )
}