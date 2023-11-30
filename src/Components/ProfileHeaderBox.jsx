import {useEffect, useState} from 'react';

export default function ProfileHeaderBox() {
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
        const currentUser = JSON.parse(currentUserString);
        const username1 = currentUser.username;
        const email1 = currentUser.email;
        const password1 = 'louis1234'
        setUsername(username1)
        setEmail(email1)
        setPassword(password1)
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);
  const maskPassword = (password) => (password ? '*'.repeat(password.length) : '');

  const maskedPassword = maskPassword(password);

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
        <div style={{display: "flex"}}>
        <div className="profilePassword">Password</div>
        <div className="profilePasswordtext">{maskedPassword}</div>
        </div>
      </div>
    </div></>
  );
}
