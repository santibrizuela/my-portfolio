import React from 'react';
// components
import Header from './components/Header';
import Nav from './components/Nav';
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

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/webdevelopment' element={<Webdevelopment/>} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
