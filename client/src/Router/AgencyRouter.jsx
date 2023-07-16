import React from 'react'
import { Routes , Route } from "react-router-dom";
import AgencyLogin from '../Pages/Agency/AgencyLogin';
import AgencyRegisterPage from '../Pages/Agency/AgencyRegisterPage'
import AgencyDashboard from '../Pages/Agency/AgencyDashboard';
const AgencyRouter =() =>{
    return (
        <div>
            <Routes>
            <Route path= "/agencyLogin" element={<AgencyLogin/>}></Route>
            <Route path = "/agencyRegister" element ={<AgencyRegisterPage/>}></Route>
            <Route path ="/agencyDashboard" element ={<AgencyDashboard/>}></Route>
            </Routes>
        </div>
    )
}
export default AgencyRouter;