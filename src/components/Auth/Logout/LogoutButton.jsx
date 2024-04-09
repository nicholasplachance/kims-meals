// LogoutButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../utils/auth'; // Import logout function
import './LogoutButton.css';

const LogoutButton = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isLoggedIn) { // Check if the user is logged in
      logout(); // Call logout function from auth utility
      onLogout(); // Call the onLogout function to update isLoggedIn state
      navigate('/login'); // Redirect to login page
    }
  };

  return (
    isLoggedIn && (
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    )
  );
};

export default LogoutButton;
