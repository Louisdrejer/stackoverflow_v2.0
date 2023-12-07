import {useEffect, useState} from 'react';
import {useLocation,} from 'react-router-dom';
export default function OtherProfileHeaderBox() {
    const location = useLocation();
    const questionState = location.state;
    console.log(questionState)
    const { username} = questionState
    console.log(questionState)
    const email = 'ooo'
  return (
    <><div className="profileHeaderText">PROFILE</div>
    <div className="userInfoBox">
      <div className="userInfo">
        <div style={{display: "flex"}}>
        <div className="profileUsername">Username</div>
        <div className="profileUsernametext">{username}</div>
        </div>
        <div style={{display: "flex"}}>
        <div className="profileEmail">Email</div>
        <div className="profileEmailText">{email}</div>
        </div>
      </div>
    </div></>
  );
}
