import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [notification, setNotification] = useState ('');
  const [isSuccess, setIsSuccess] = useState ('');
  const navigate = useNavigate ();

  useEffect (
    () => {
      //check if user is already logged in
      const loggedInUser = localStorage.getItem ('username');
      if (loggedInUser) {
        setNotification (`Welcome back, ${loggedInUser}`);
        setIsSuccess (true);
      } else {
        // If not logged in, redirect to login page
        navigate ('/auth/login');
      }
    },
    [navigate]
  );

  const handleSignOut = () => {
    // Clear login status
    localStorage.removeItem ('isLoggedIn');
    localStorage.removeItem ('username');
    localStorage.removeItem ('isAdmin');

    navigate ('/');
  };

  const isAdmin = localStorage.getItem ('isAdmin') === 'true';
  console.log ('isAdmin: ', isAdmin);

  return (
    <div className="dashboard-container">
      <h1 className="app-title">Welcome to Event Management Dashboard</h1>
      <p className="app-description">
        You are logged in. Choose an action below:
      </p>

      {notification &&
        <p className={`notification ${isSuccess ? '' : 'error'}`}>
          {notification}
        </p>}

      <button onClick={handleSignOut} className="sign-out-button">
        Sign Out
      </button>

      <div className="section event-section">
        <h2>Event Access</h2>
        <p>
          Admins can manage events from here. Please click below to register
          events.
        </p>
        {/*TODO": create a page to manage events: dashboard of events: register event and show a list of event, etc. */}
        <Link to="/events/dashboard" className="btn">
          {' '}
          Manage Events
        </Link>
      </div>

      {isAdmin &&
        <div className="section user-section">
          <h2>User Registration</h2>
          <p>
            Admins can register users to participate in events or manage
            existing registrations.
          </p>
          <Link to="/users/admin/register" className="btn">
            {' '}User Registration
          </Link>
        </div>}

    </div>
  );
};

export default Dashboard;
