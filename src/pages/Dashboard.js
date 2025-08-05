import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="dashboard-body">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="location-box">Location {String(i + 1).padStart(2, '0')}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
