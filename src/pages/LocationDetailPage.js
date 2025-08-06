// src/pages/LocationDetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './LocationDetailPage.css';

const LocationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="location-detail-layout">
      <Sidebar />
      <div className="location-detail-content">
        <Header />

        <div className="location-detail-box">
          <h2>P{id}</h2>

          <form className="location-form">
            <div className="form-row checkbox-row">
              <label>
                Working
                <input type="checkbox" name="working" />
              </label>
              <label>
                Not Working
                <input type="checkbox" name="notWorking" />
              </label>
            </div>

            <div className="form-row">
              <label>Temperature</label>
              <div className="input-with-suffix">
                <input type="text" />
                <select>
                  <option>°C</option>
                  <option>°F</option>
                </select>
              </div>
            </div>

            <div className="form-row checkbox-row">
              <label>Oil level or Greasing</label>
              <label>
                High <input type="checkbox" />
              </label>
              <label>
                Moderate <input type="checkbox" />
              </label>
              <label>
                Low <input type="checkbox" />
              </label>
            </div>

            <div className="form-row">
              <label>Vibration</label>
              <div className="input-with-suffix">
                <input type="text" />
                <select>
                  <option>°C</option>
                  <option>°F</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label>Remark</label>
              <input type="text" />
            </div>

            <div className="form-footer">
			<button
  type="button"
  className="nav-btn"
  onClick={() => navigate(`/location/${id}`)}
>
  ‹ Previous
</button>

              <button type="submit" className="add-btn">ADD</button>
              <button type="button" className="nav-btn" onClick={() => navigate(`/location-next-detail/${id}`)}>Next ›</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailPage;
