import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import PublicPageLayout from './Layouts/PublicPageLayout'
import Home from './Home';
import AboutOne from './AboutOne';
import AboutTwo from './AboutTwo';
import AboutThree from './AboutThree';
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/"  element={ <PublicPageLayout/>}>
          <Route path="" element={<Home />} />
          <Route path="about-1" element={<AboutOne />} />
          <Route path="about-2" element={<AboutTwo />} />
          <Route path="about-3" element={<AboutThree />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
