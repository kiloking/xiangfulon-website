import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import PublicPageLayout from './Layouts/PublicPageLayout'
import Home from './Home';
import AboutOne from './AboutOne';
import AboutTwo from './AboutTwo';
import AboutThree from './AboutThree';
import WorkOne from './WorkOne';
import WorkTwo from './WorkTwo';
import NewsOne from './NewsOne';
import NewsTwo from './NewsTwo';
import Contact from './Contact';
import WatchOldProject from './WatchOldProject';
import WatchArticle from './WatchArticle';
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route  exact path="/"  element={ <PublicPageLayout/>}>
          <Route path="" element={<Home />} />
          <Route path="about-1" element={<AboutOne />} />
          <Route path="about-2" element={<AboutTwo />} />
          <Route path="about-3" element={<AboutThree />} />
          <Route path="work-1" element={<WorkOne />} />
          <Route path="work-2" element={<WorkTwo />} />
          <Route path="news-1" element={<NewsOne />} />
          <Route path="news-2" element={<NewsTwo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="watchproject/:projectid" element={<WatchOldProject />} />
          <Route path="watcharticle/:articleid" element={<WatchArticle />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
