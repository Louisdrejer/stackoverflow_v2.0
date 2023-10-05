import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App1 from "./App1";
import App2 from "./App2";

import Homepage from "./Components/Homepage/Homepage"
import Login from "./Components/Login/Login"
import Profile from "./Components/Profile/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App1 />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );

  
}

export default App;
