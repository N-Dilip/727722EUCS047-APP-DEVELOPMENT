import React from 'react';
import Sidebar from './Sidebar';
import Team from './team';

const Reports = () => {
  return (
    <div className="dash">
      <div className="side">
        <Sidebar />
      </div>
      {/* <h1>Reports Page</h1> */}
      <div className='invoice'>
      <Team/>
      </div>
    </div>
  );
};

export default Reports;
