import React from 'react'
import { Outlet} from 'react-router-dom';


import Navbar from '../Components/Navbar'
// import MobileNavbar from '../Components/MobileNavbar';
// import Footer from '../Components/Footer'

import { RecoilRoot} from 'recoil';
// import {navbarBgState} from '../atoms/modalAtom'

function PublicPageLayout() {
 

  


  return (
    <React.Fragment>
      <RecoilRoot>
      <Navbar types='home'/>
      {/* <MobileNavbar data={navbar} /> */}
      <Outlet />
      {/* <Footer footerData={footerData} socialmedia={socialmedia}/> */}
      </RecoilRoot>
    </React.Fragment>
  )
}

export default PublicPageLayout