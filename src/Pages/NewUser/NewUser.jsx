import React, { useState } from 'react';
import './NewUser.css';
import arrow from '../../img/arrow.svg';
import logo from '../../img/Logo.png';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { createUser } from '../../Scripts/Database';


export default function NewUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUser(username, email, password, confirmPassword);
      navigate('/');

    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <>
      <div className="newUser_bg">
        <Link to="/">
          <img src={logo} alt="Logo" className="page-logo" />
        </Link>
        <div className="wrapper10">
          <button className="back-button1" onClick={() => window.history.back()}>
            <img src={arrow} alt="Back" />
          </button>

          <form action="" style={{ width: '80%', marginLeft: '10%' }} onSubmit={handleSignUp}>
            <h1>Create Your Account</h1>
            <p className="account-description">Join us and be a part of one of the most newbie-friendly Q&A forums! </p>

            <div className="input-box2">
              <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="input-box2">
              <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="input-box2">
              <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="input-box2">
              <input
                type="password"
                placeholder="Repeat Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn10">
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
