import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="search-container">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="profile">
        <i className="fas fa-bell"></i>
        <button className="profile-btn">Name Surname <i className="fas fa-chevron-down"></i></button>
      </div>
    </div>
  );
};

export default Header;
