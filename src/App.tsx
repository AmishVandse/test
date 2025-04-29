import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import './App.css';

// Import components
import APIUsage from './components/APIUsage';
import APIKeys from './components/APIKeys';
import APIDocumentation from './components/APIDocumentation';
import OCRAnalyzer from './components/OCRAnalyzer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <div className="logo-section">
            <div className="logo">FinOptima</div>
            <div className="solutions">Solutions</div>
          </div>
          <nav className="nav-menu">
            <NavLink to="/api-usage" className={({ isActive }) => `nav-item ${isActive ? 'selected' : ''}`}>
              <span className="nav-icon">{'<>'}</span>
              <span>API Usage</span>
            </NavLink>
            <NavLink to="/api-keys" className={({ isActive }) => `nav-item ${isActive ? 'selected' : ''}`}>
              <span className="nav-icon">🔑</span>
              <span>API Keys</span>
            </NavLink>
            <NavLink to="/api-documentation" className={({ isActive }) => `nav-item ${isActive ? 'selected' : ''}`}>
              <span className="nav-icon">📄</span>
              <span>API Documentation</span>
            </NavLink>
            <NavLink to="/ocr-analyzer" className={({ isActive }) => `nav-item ${isActive ? 'selected' : ''}`}>
              <span className="nav-icon">🔍</span>
              <span>OCR Analyzer</span>
            </NavLink>
          </nav>
        </aside>
        <Routes>
          <Route path="/api-usage" element={<APIUsage />} />
          <Route path="/api-keys" element={<APIKeys />} />
          <Route path="/api-documentation" element={<APIDocumentation />} />
          <Route path="/ocr-analyzer" element={<OCRAnalyzer />} />
          <Route path="/" element={<Navigate to="/api-keys" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
