import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.css';
import logo from '../../img/Logo.png';
import { useNavigate } from 'react-router';
import profileIcon from '../../img/loginIcon.png';

export default function Login() {
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
    <div className="mainContainerLogin">
      <img className="LogoLogin" src={logo} alt="Logo" />
      <div className="formContainer">
        <form onSubmit={onSubmit}>
          <div className="loginIconDiv">
            <img className="loginIcon" src={profileIcon} alt="Logo" />
          </div>
          <div className="inputField">
            <label className="headLine">Username</label>
            <input
              className="textField"
              type="text"
              placeholder="Enter your username (Try write Hans1234)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label className="headLine">Password</label>
            <input
              className="textField"
              type="password"
              placeholder="Enter your password (Try write qwer1234)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="LinkForgotPasswordDiv">
            <Link to="/ForgotPassword" className="LinkForgotPassword">Forgot Password?</Link>
          </div>
          <div className="Login">
            <input type="submit" value="Login" className="LoginButton" />
            <label style={{ padding: '4px' }}>or</label>
            <Link className="LinkForgotPassword" style={{ paddingTop: '4px' }}>
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
