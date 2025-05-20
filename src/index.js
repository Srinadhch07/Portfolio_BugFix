import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Portfolio' element={<Home />} />
      <Route path='/Blogs' element={<Blogs />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  </Router>
);


