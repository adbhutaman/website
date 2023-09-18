import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import  Homepage  from './Components/Homepage';
import About  from './Components/About';
import Error  from './Components/Error';
import Programms  from './Components/Programms';
import Parent from './Components/Parent';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Programms1 from './Components/programms1';
import Summercamp from './Components/Summercamp';
import Footer from './Components/footer';

import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route exact path='/' Component={Homepage} />
      <Route exact path='/about' Component={About} />
      <Route exact path='/programms' Component={Programms} />
      <Route exact path='/parent' Component={Parent} />
      <Route exact path='/contact' Component={Contact} />
      <Route exact path='/programms/daycare' Component={Programms1} />
      <Route exact path='/programms/summercamp' Component={Summercamp} />

      <Route  path='*' Component={Error} />
     
    
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
