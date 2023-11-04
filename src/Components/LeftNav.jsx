import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/Logo.png';

export default function LeftNav() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const dataFetch = () => {
      fetch('/api/pages')
        .then((res) => res.json())
        .then((data) => {
          setPages(data);
          console.log(setPages)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
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
    }
  };

  const navItemStyle = {
    fontWeight: 'bold',
    color: 'white',
    background: '#39bc73',
  };

  return (
    <div className="Leftcontainer">
      <div className="logo_name_left">
        <img src={logo} alt="Logo" style={{ maxWidth: "70%", marginLeft: "15%" }} />
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
            fontWeight: isActive ? "bolder" : "",
            color: isActive ? "white" : "",
            background: isActive ? "rgb(60, 62, 116)" : "",
            marginLeft: isActive ? "-5px" : "",
            padding: isActive ? "5px" : "",
            paddingRight: isActive ? "min(120px, 60%)": "",
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
