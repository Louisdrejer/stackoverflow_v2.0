import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './Pages/Homepage/Homepage';
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import SearchPage from './Pages/SearchPage/SearchPage';
import Answerpage from './Pages/Answerpage/Answerpage';
import LeftNav from './Components/LeftNav';

function App() {
  return (
    <BrowserRouter>
    
      <div className="app-container">
        <LeftNav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Questions" element={<Homepage />} />
          <Route path="/Answers" element={<Answerpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Search" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
