import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './Components/Homepage/Homepage';
import Login from "./Components/Login/Login"
import Profile from "./Components/Profile/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );

  
}

export default App;
