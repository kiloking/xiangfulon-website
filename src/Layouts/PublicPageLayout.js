import React from 'react'
import { Outlet} from 'react-router-dom';
import Navbar from '../Components/Navbar'
// import MobileNavbar from '../Components/MobileNavbar';
// import Footer from '../Components/Footer'


function PublicPageLayout() {
 
  return (
    <>
      <Navbar types='home'/>
      {/* <MobileNavbar data={navbar} /> */}
      <Outlet />
      {/* <Footer footerData={footerData} socialmedia={socialmedia}/> */}
    </>
  )
}

export default PublicPageLayout