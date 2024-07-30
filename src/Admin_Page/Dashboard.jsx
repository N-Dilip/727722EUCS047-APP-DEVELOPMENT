import React from 'react';
import './Dashboard.css';
import Slidebar from './Slidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Slidebar />
      <h1>Welcome to the Admin Dashboard</h1>
      <div className="stats">
        <div className="stat-box">
          <h3>150</h3>
          <p>New Applications</p>
        </div>
        <div className="stat-box">
          <h3>1200</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-box">
          <h3>85</h3>
          <p>Approved Admissions</p>
        </div>
      </div>
      <div className='stats'>
        <div className="stat-box">
          <h3>45</h3>
          <p>No of Working Staffs</p>
        </div>
        <div className="stat-box">
          <h3>75</h3>
          <p>Academic Excellence Students</p>
        </div>
        <div className="stat-box">
          <h3>284</h3>
          <p>Total Working Days</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
