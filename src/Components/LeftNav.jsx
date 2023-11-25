import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/Logo.png';

export default function LeftNav({ onSearchTermChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [pages, setPages] = useState([]);

  const allPages = [
    {
        "id": 0,
        "name": "Questions"
    },
    {
        "id": 1,
        "name": "Answers"
    },
    {
        "id": 2,
        "name": "Search"
    },
    {
        "id": 3,
        "name": "Profile"
    }
  ]

  useEffect(() => {
    const dataFetch = () => {
  setPages(allPages)
    };

    dataFetch();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(searchTerm);
      // Navigate to "/Search" with the search term as a query parameter
      window.location.href = `/Search?term=${searchTerm}`;
    }
  };
  


  return (
    <div className="Leftcontainer">
      <div className="logo_name_left">
        <img src={logo} alt="Logo" />
      </div>
      <hr style={{ width: "80%", border: "1.8px solid white", marginTop: "10px" }} />
      <div className='quickSearchBox'>
        <input
          type="text"
          className='quickSearch'
          placeholder="Quick search"
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
            fontFamily: isActive ? 'InterBold': "",
            color: isActive ? "white" : "",
            background: isActive ? "rgb(60, 62, 116)" : "",
            marginLeft: isActive ? "-5px" : "",
            padding: isActive ? "5px" : "",
            paddingRight: isActive ? "max(60%, 10px)": "",
            borderRadius: isActive ? "5px" : "",

          })}
        >
          {page.name}
        </NavLink>
      </div>
      ))}
      <div className="profile">
        <div className="userLogo">
          <div className="smallUserLogo"></div>
        </div>
        <div className="profileName">
          ITUCPH
        </div>
        <div className="profileEmailHomepage">
          itucph@email.dk
        </div>
      </div>
    </div>
  );
}
