import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import LocationPage from './pages/LocationPage';
import LocationDetailPage from './pages/LocationDetailPage';
import LocationNextDetailPage from './pages/LocationNextDetailPage';
import ChecklistPopupPage from './pages/ChecklistPopupPage'; // ✅ Import new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="/location-detail/:id" element={<LocationDetailPage />} />
        <Route path="/location-next-detail/:id" element={<LocationNextDetailPage />} />
        
        {/* ✅ New checklist popup route */}
        <Route path="/checklist" element={<ChecklistPopupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
