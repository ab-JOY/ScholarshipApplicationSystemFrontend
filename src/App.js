import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/layout/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/layout/Footer';
import './Footer.css'


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>

      </div>

      <Footer />
    </div>
  );
}

export default App;
