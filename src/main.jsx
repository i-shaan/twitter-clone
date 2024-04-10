import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import './index.css';

// Assume you have a function to check if the user is logged in
const isLoggedIn = () => {
  // Logic to check if user is logged in
  // For example, you can check if there is a token in localStorage
  return !!localStorage.getItem('token');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={isLoggedIn() ? <Navigate to="/app" /> : <Navigate to="/app" />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </Router>
);
