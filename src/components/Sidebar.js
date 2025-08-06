import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const nav = useNavigate();

  const menuItems = [
    { label: "Dashboard", action: () => nav("/dashboard") },
    { label: "Check List", action: () => nav("/checklist") }, // now navigates to new page
    { label: "Add Inventories", action: () => nav("/add-inventories") },
    { label: "Human", action: () => nav("/human") },
    { label: "History", action: () => nav("/history") }
  ];

  return (
    <div className="sidebar">
      <div className="brand">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand-name">
          kspa <strong>paper</strong>
        </span>
      </div>

      <div className="menu">
        {menuItems.map((item, idx) => (
          <button key={idx} className="sidebar-btn" onClick={item.action}>
            {item.label.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
