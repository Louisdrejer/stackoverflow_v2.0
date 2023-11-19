import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Homepage from './Components/Homepage/Homepage';
// import Login from "./Components/Login/Login"
import Profile from "./Components/Profile/Profile"
import {NewUser} from "./Components/NewUser/NewUser";
import {MyLogin} from "./Components/myLogin/MyLogin";
import {ForgetPassword} from "./Components/forgotPassword/ForgetPassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/homepage" element={<Homepage/>}></Route>
                {/*<Route path="/" element={<Login/>}></Route>*/}
                <Route path="/" element={<MyLogin/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/NewUser" element={<NewUser/>}></Route>
                <Route path="/ForgotPassword" element={<ForgetPassword/>}></Route>
            </Routes>
        </BrowserRouter>
    );


}

export default App;
