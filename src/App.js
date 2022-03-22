import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        <main>
        <Router>
            <Routes>
                <Route index element = {<Home />}/>
            </Routes>
        </Router>
        </main>
    )
  }
  
  export default App;
  