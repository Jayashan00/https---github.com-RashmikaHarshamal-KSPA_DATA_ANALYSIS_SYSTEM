import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const nav = useNavigate();

  const menuItems = [
    'Dashboard',
    'Check List',
    'Add Inventories',
    'Human',
    'History'
  ];

  return (
    <div className="sidebar">
      <div className="brand">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand-name">kspa <strong>paper</strong></span>
      </div>

      <div className="menu">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className="sidebar-btn"
            onClick={() => nav(`/${item.toLowerCase().replace(/ /g, '-')}`)}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
