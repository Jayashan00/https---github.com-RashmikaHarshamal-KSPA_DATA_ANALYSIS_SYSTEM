import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ChecklistPopup from './ChecklistPopupPage';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showChecklist, setShowChecklist] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar onChecklistClick={() => setShowChecklist(true)} />
      <div className="dashboard-content">
        <Header />
        <div className="dashboard-body">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="location-box"
              onClick={() => navigate(`/location/${i + 1}`)}
            >
              Location {String(i + 1).padStart(2, '0')}
            </div>
          ))}
        </div>
      </div>

      {showChecklist && (
        <ChecklistPopup onClose={() => setShowChecklist(false)} />
      )}
    </div>
  );
};

export default Dashboard;
