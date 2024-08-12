import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import Sidebar from "../Sidebar";
import RightSide from "../RigtSide/RightSide";
const MainDash = () => {
  return (
    <div className="dash">
      <div className="side">
        <Sidebar />
      </div>
      <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
        <Table />
      </div>
      <div>
        <RightSide/>
      </div>
    </div>
  );
};

export default MainDash;
