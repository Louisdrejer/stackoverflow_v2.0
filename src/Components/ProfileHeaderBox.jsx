import React from 'react';

export default function ProfileHeaderBox({ user }) {
  const maskPassword = (password) => (password ? '*'.repeat(password.length) : '');

  const maskedPassword = maskPassword(user.password);

  return (
    <><div className="profileHeaderText">PROFILE</div>
    <div className="userInfoBox">
      <div className="userInfo">
        <div style={{display: "flex"}}>
        <div className="profileUsername">Username</div>
        <div className="profileUsernametext">{user.username}</div>
        </div>
        <div style={{display: "flex"}}>
        <div className="profileEmail">Email</div>
        <div className="profileEmailText">{user.email}</div>
        </div>
        <div style={{display: "flex"}}>
        <div className="profilePassword">Password</div>
        <div className="profilePasswordtext">{maskedPassword}</div>
        </div>
      </div>
    </div></>
  );
}
