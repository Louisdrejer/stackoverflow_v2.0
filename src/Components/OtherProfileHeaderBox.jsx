import arrow from '../img/arrow.svg';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function OtherProfileHeaderBox() {
  const location = useLocation();
  const questionState = location.state;
  console.log(questionState);
  const { username } = questionState;
  console.log(questionState);
  const email = 'ooo';

  return (
    <>
      <div className="profileHeaderText">
        <button
          className="back-button2"
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            background:'none',
            border:'none',
          }}
          onClick={() => window.history.back()}
        >
          <img src={arrow} alt="Back" />
        </button>
        PROFILE
      </div>
      <div className="userInfoBox">
      </div>
    </>
  );
}
