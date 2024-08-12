import React from 'react';
import Sidebar from './Sidebar';
import Invoices from './invoices';
import './Sidebar.css';

const Analytics = () => {
  return (
    <div className="dash">
      <div className="side">
        <Sidebar />
      </div>
      {/* <h1>Analytics Page</h1> */}
      <div className='invoice'>
      <Invoices/>
      </div>
    </div>
  );
};

export default Analytics;
