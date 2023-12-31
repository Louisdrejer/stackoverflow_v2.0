import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import Profile from "./Pages/Profile/Profile";
import SearchPage from './Pages/SearchPage/SearchPage';
import Answerpage from './Pages/Answerpage/Answerpage';
import MainLayout from './Outerlayout/MainLayout';
import Outerlayout from './Outerlayout/Outerlayout';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import NewUser from './Pages/NewUser/NewUser';
import Login2 from './Pages/Login/Login2'
import OthersProfile from './Components/OthersProfile';

function App() {
  return (
    <BrowserRouter>
     <div className="app-container"> 
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/Questions" element={<Homepage />} />
          <Route path="/Answers" element={<Answerpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/OtherProfile" element={<OthersProfile />} />
          <Route path="/Search" element={<SearchPage />} />
        </Route>

        <Route element={<Outerlayout />} >
          <Route path="/" element={<Login2 />} />
          <Route path="/ForgotPassword" element={<ForgetPassword />} />
          <Route path="/NewUser" element={<NewUser />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;