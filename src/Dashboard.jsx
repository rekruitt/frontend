import React from 'react';
import {Link, Outlet } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';

const Dashboard = () => {
  return (
    <div>
        <SideBar/>
        <Outlet />
    </div>
  )
}

export default Dashboard;