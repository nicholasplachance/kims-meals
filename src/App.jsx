import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './components/Auth/Login/Login';
import RegisterPage from './components/Auth/Register/Register';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import LogoutButton from './components/Auth/Logout/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage authentication state

  const handleLogin = () => {
    // Logic to handle successful login, set isLoggedIn to true
    setIsLoggedIn(true);
    console.log(isLoggedIn)
  };

  const handleLogout = () => {
    // Logic to handle logout, set isLoggedIn to false
    setIsLoggedIn(false);
    console.log(isLoggedIn)
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
          <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <LogoutButton isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      </div>
    </Router>
  );
}

export default App;
