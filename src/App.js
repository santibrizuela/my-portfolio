import React from 'react';
// components
import Nav from './components/Nav';
import WhatsappScroll from './components/WhatsappScroll';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Design from './pages/Design';
import Marketing from './pages/Marketing';
import Webdevelopment from './pages/Webdevelopment';
import Branding from './pages/Branding';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Nav />
      <WhatsappScroll />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/webdevelopment' element={<Webdevelopment/>} />
        <Route path='/branding' element={<Branding/>} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
