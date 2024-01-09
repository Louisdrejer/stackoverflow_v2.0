import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../img/Logo.png';
import LogoutButton from './LogoutButton.jsx';

export default function LeftNav({ onSearchTermChange }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [pages, setPages] = useState([]);
  const currentUserString = localStorage.getItem('Parse/bCTTcIHsTeO3FRZjfUWQw8BoWEYUSICpeWbm48xy/currentUser');
  const currentUser = JSON.parse(currentUserString);
  const username1 = currentUser.username;
  const email1 = currentUser.email;

  const allPages = [
    {
      "id": 0,
      "name": "Questions"
    },
    {
      "id": 1,
      "name": "Search"
    },
    {
      "id": 2,
      "name": "Profile"
    }
  ];

  useEffect(() => {
    const dataFetch = () => {
      setPages(allPages);
    };

    dataFetch();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toUpperCase());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(searchTerm);
      navigate(`../Search`, { state: { Search: searchTerm} });
      setSearchTerm('')
    }
  };

  return (
    <div className="Leftcontainer">
      <NavLink to={'/Questions'}>
        <div className="logo_name_left">
          <img src={logo} alt="Logo" />
        </div>
      </NavLink>
      <hr style={{ width: "80%", border: "1.8px solid white", marginTop: "10px" }} />
      <div className='quickSearchBox'>
        <input
          type="text"
          className='quickSearch'
          placeholder="Quick search on tags"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {pages.map((page) => (
        <div key={page.id} className='pageTitle'>
          <NavLink
            to={`/${page.name}`}
            style={({ isActive }) => ({
              fontFamily: isActive ? 'InterBold' : "",
              color: isActive ? "white" : "",
              background: isActive ? "rgb(60, 62, 116)" : "",
              marginLeft: isActive ? "-5px" : "",
              padding: isActive ? "5px" : "",
              paddingRight: isActive ? "max(60%, 10px)" : "",
              borderRadius: isActive ? "5px" : "",
            })}
          >
            {page.name}
          </NavLink>
        </div>
      ))}
      <div className="profile">
        <NavLink to={'/Profile'}>
          <div className="userLogoContainer">
            <div className="userLogo">
              <div className="smallUserLogo"></div>
            </div>
          </div>
        </NavLink>
        <div className="userContainer">
          
          <div className="profileName">
            {username1}
          </div>
          <div className="profileEmailHomepage">
            {email1}
          </div>
        </div>
        <div className="logoutContainer">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
