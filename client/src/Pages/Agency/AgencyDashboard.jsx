import React from 'react'
import Navbar from '../../components/NavbarComponent/navbar'
import Sidebar from '../../components/agency/SidebarComponent'

function AgencyDashboard() {
  return (
    // <div className='flex h-screen overflow-hidden'>

        //  <div className='w-full'>
         <Sidebar />
         <div className="relative md:ml-64 bg-blueGray-100">
            <Navbar/>
           
        </div> 
    //  </div>
    
    // <Sidebar />
    // <div className="relative md:ml-64 bg-blueGray-100">
    //   <Navbar />
    //   </div>
  )
}

export default AgencyDashboard