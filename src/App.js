import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Personal from './pages/Personal';
import './styles/All.css'

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        <main>
        <Router>
            <Routes>
                <Route index element = {<Home />}/>
                <Route path="/" element = {<Home />}/>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/personal" element={<Personal />} />
            </Routes>
            <Footer />
        </Router>
        </main>
    )
  }
  
  export default App;
  