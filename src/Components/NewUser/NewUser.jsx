import React from 'react'
import "./NewUser.css"

export function NewUser() {
    return (
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
    )
}