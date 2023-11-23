import './Mylogin.css'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../img/Logo.png';
import { useNavigate } from 'react-router';
import profileIcon from '../../img/loginIcon.png';

export default function MyLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (username, pw) => {
        try {
            console.log(username)
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: pw }),

            });
            if (response.ok) {
                const res = await response.json();
                localStorage.setItem("user", JSON.stringify(res.id));

                console.log(res)
                navigate('/Profile');
            } else {
                alert('Invalid username or password');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(username, password);
    };
    return (
        <>
            <div className="wrapper">

                <form onSubmit={onSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your username (Try write Hans1234)"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} required />

                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="Password" placeholder="Enter your password (Try write qwer1234)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember me
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