// Dashboard.jsx


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Dashboard.css'; // Import CSS styles

const Dashboard = () => {
  // Sample data for demonstration
  const categories = ['Breakfast', 'Lunch', 'Dinner'];

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <Link to={`/category/${category}`}>{category}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
