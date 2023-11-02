import React from 'react';
import './Profile.css';

export default function ProfileHeaderBox({ user }) {
  const maskPassword = (password) => (password ? '*'.repeat(password.length) : '');

  const maskedPassword = maskPassword(user.password);

  return (
    <div className="userInfoBox">
      <div className="userInfo">
            <div className="profileUsername">Username</div>
            <div className="profileUsernametext">{user.username}</div>
            <div className="profileEmail">Email</div>
            <div className="profileEmailText">{user.email}</div>
            <div className="profilePassword">Password</div>
            <div className="profilePasswordtext">{maskedPassword}</div>
      </div>
    </div>
  );
}
