import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './LocationPage.css';

const LocationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const sections = ['SECTION 01', 'SECTION 02', 'SECTION 03', 'SECTION 04', 'SECTION 05', 'SECTION 06', 'SECTION 07'];

  return (
    <div className="location-layout">
      <Sidebar />
      <div className="location-content">
        <Header />

        <div className="section-buttons">
          {sections.map((sec, i) => (
            <button key={i} className="section-button">{sec}</button>
          ))}
        </div>

        <div className="location-controls">
          <button className="filter-btn">⚙ Filters</button>
          <button className="exit-btn">EXIT</button>
        </div>

        <div className="result-count-top">Showing 1–50 of 500</div>

        <div className="location-grid">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="location-item"
              onClick={() => navigate(`/location-detail/${id}-${i + 1}`)}
            >
              P{id}-{i + 1}
            </div>
          ))}
        </div>

        <div className="pagination-controls">
          <button className="page-btn">‹ Prev</button>
          {[1, 2, 3, 4].map(n => (
            <button key={n} className="page-btn">{n}</button>
          ))}
          <button className="page-btn">Next ›</button>
        </div>

        <div className="footer-buttons">
          <button className="footer-btn">SAVE</button>
          <button className="footer-btn">EDIT</button>
          <button className="footer-btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
