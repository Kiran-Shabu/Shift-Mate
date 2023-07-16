import React from 'react'
import { Routes , Route } from "react-router-dom";
import LandingPage from '../Pages/LandingPage';
import UserRegisterPage from '../Pages/User/UserRegisterPage';
import UserLoginPage from '../Pages/User/UserLoginPage';
import UserDashboard from '../Pages/User/UserDashboard'
// import AgencyLandingPage from '../Pages/Agency/AgencyLandingPage';




const UserRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element ={<LandingPage/>} ></Route>
            <Route path ='/UserRegister' element ={<UserRegisterPage/>}></Route>
            <Route path ='/Userlogin' element ={<UserLoginPage/>}></Route>
            <Route path = '/userhome' element ={<UserDashboard/>}></Route>
            {/* <Route path = "/agency" element={<AgencyLandingPage/>}></Route> */}
            {/* <Route path ='/clientSignUp' element={<clientSignUp/>}></Route>
            <Route path ='/AgencySignUp' element={<AgencySignUp/>}></Route> */}
        </Routes>
    </div>
  )
}

export default UserRouter