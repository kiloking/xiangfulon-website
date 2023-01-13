import React from 'react';
import { HashRouter, BrowserRouter , Routes, Route} from 'react-router-dom';
import PublicPageLayout from './Layouts/PublicPageLayout'
import Home from './Home';
import AboutOne from './AboutOne';
import AboutTwo from './AboutTwo';
import AboutThree from './AboutThree';
import WorkOne from './WorkOne';
import WorkOne_Card from './WorkOne_Card';
import WorkTwo_Card from './WorkTwo_Card';
import WorkTwo from './WorkTwo';
import NewsOne from './NewsOne';
import NewsTwo from './NewsTwo';
import NewsThree_Card from './NewsThree_Card';
import Contact from './Contact';
import WatchOldProject from './WatchOldProject';
import WatchArticle from './WatchArticle';
function App() {
  return (
    <HashRouter>
      <Routes> 
        <Route  exact path="/"  element={ <PublicPageLayout/>}>
          <Route path="" element={<Home />} />
          <Route path="about-1" element={<AboutOne />} />
          <Route path="about-2" element={<AboutTwo />} />
          <Route path="about-3" element={<AboutThree />} />
          <Route path="work-1" element={<WorkOne_Card />} />
          <Route path="work-2" element={<WorkTwo_Card />} />
          <Route path="news-1" element={<NewsOne />} />
          <Route path="news-2" element={<NewsTwo />} />
          <Route path="news-3" element={<NewsThree_Card />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/watchproject/:projectid" element={<WatchOldProject />} />
          <Route path="/watcharticle/:articleid" element={<WatchArticle />} />
        
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
