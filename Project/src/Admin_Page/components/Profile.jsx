import React from 'react';
import './MainDash/MainDash.css';
import Sidebar from './Sidebar';
import Form from './form';
import './Sidebar.css';
const Profile = () => {
  return (
    <div className="dash">
      <div className="side">
        <Sidebar />
      </div>
      {/* <h1>Profile Page</h1> */}
      <div className='pro'>
      <Form/>
      </div>
    </div>
  );
};

export default Profile;
