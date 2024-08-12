import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "./data/Data";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);
  const navigate=useNavigate();
  const handleButton=(e)=>{
    e.preventDefault();
    alert('Logged Out Successfully');
    navigate('/');
  }
  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };

  console.log(window.innerWidth);

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: '60%' } : { left: '5%' }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            <span>H</span>arvard<span> U</span>niversity
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <Link to={item.to} key={index} className="link">
              <div
                className={"menuItem"}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            </Link>
          ))}
          <div className="menuItem" onClick={handleButton}>
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
