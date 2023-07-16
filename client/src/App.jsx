import {Route , Routes , Navigate} from 'react-router-dom';
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import UserRouter from "./Router/UserRouter";
import AgencyRouter from "./Router/AgencyRouter"
// import AdminRouter from "./Router/AdminRouter";
// import Main from './components/Main';
// import Signup from './components/Signup';
// import Login from './components/Login';



function App() {
  
  // const user =localStorage.getItem("token")
  return (
        // <Routes>
        //  {user && <Route path="/" exact element= {<Main/>} />}
        //  <Route path ="/signup" exact element ={<Signup/>} />
        //  <Route path ="/login" exact element ={<Login/>} />
        //  <Route path ="/" exact element ={<Navigate replace to ="/login"/>} />
        // </Routes>

        <div className=''>
          <UserRouter/>
          <AgencyRouter/>
          {/* <AdminRouter/> */}
        </div>
  )
}

export default App;
