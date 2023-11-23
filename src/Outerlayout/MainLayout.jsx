import React from 'react';
import { Outlet } from "react-router-dom";
import LeftNav from '../Components/LeftNav';
import '../App.css'

export default function MainLayout() {
  return (
    <>
      <LeftNav />
     
      <Outlet context={{ hello: "world" }} />
    </>
  );
}