// src/pages/LocationNextDetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './LocationNextDetailPage.css';

const LocationNextDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="location-next-detail-layout">
      <Sidebar />
      <div className="location-next-detail-content">
        <Header />
        <div className="location-next-detail-box">
          <h2>P{id}</h2>

          <h3 className="section-title">Motor</h3>

          <form className="location-form">
            <div className="form-row select-row">
              <label>Vibration(H) DE</label>
              <select><option>Ok</option><option>Not Ok</option></select>
              <label>NDE</label>
              <select><option>Ok</option><option>Not Ok</option></select>
            </div>

            <h3 className="section-title">Blowers</h3>

            <div className="form-row select-row">
              <label>Vibration(H) DE</label>
              <select><option>Ok</option><option>Not Ok</option></select>
              <label>NDE</label>
              <select><option>Ok</option><option>Not Ok</option></select>
            </div>

            <div className="form-row temp-row">
              <label>Temperature DE</label>
              <input type="text" />
              <select><option>°C</option><option>°F</option></select>
              <label>Suction</label>
              <input type="text" />
              <select><option>°C</option><option>°F</option></select>
            </div>

            <div className="form-row checkbox-row">
              <label>Oil level or Greasing</label>
              <label><input type="checkbox" /> High</label>
              <label><input type="checkbox" /> Moderate</label>
              <label><input type="checkbox" /> Low</label>
            </div>

            <div className="form-row checkbox-row">
              <label>Belt Condition</label>
              <label><input type="checkbox" /> Ok</label>
              <label><input type="checkbox" /> Loose</label>
            </div>

            <div className="form-row">
              <label>Remark</label>
              <input type="text" />
            </div>

            <div className="form-footer">
              <button
                type="button"
                className="nav-btn"
                onClick={() => navigate(`/location-detail/${id}`)}
              >
                ‹ Previous
              </button>

              <div className="center-buttons">
                
                <button type="button" className="action-btn">ADD</button>
               
              </div>

              <button
                type="button"
                className="nav-btn"
                onClick={() => alert('Next Page Coming Soon')}
              >
                Next ›
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationNextDetailPage;
