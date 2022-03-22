import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        <main>
        <Router>
            <Routes>
                <Route index element = {<Home />}/>
                <Route path="/home" element = {<Home />}/>
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
        </Router>
        </main>
    )
  }
  
  export default App;
  