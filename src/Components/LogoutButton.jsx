import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutButton.css';

import Parse from 'parse';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await Parse.User.logOut();
      localStorage.removeItem('authToken');
      navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Log out
    </button>
  );
};

export default LogoutButton;
