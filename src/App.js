import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/about/About';
import NavBar from './components/layout/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/layout/Footer';
import './Footer.css'
import HideNav from './components/hidenavbar/HideNav';
import LogIn from './components/pages/LogIn';
import Programs from './components/pages/programs/Programs';
import Register from './components/pages/register/Register';
import LandingPage from './components/layout/LandingPage';
import Admin from './components/pages/Admin';
import './register.css'


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <HideNav>
            <NavBar />
          </HideNav>
          <LandingPage>
            <Home/>
            <Programs/>
            <About/>
          </LandingPage>
          <Routes>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/programs" element={<Programs />} />
          </Routes>
        </Router>

      </div>

      <Footer />
    </div>
  );
}

export default App;
